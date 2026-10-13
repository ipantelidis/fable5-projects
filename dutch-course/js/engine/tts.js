/* Text to speech: Web Speech API speechSynthesis with an nl-NL voice */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util;
  const T = (NL.tts = {});
  const synth = window.speechSynthesis;
  let voices = [];
  let lastText = null;
  const RATES = { slow: 0.7, normal: 0.95, fast: 1.2 };

  T.supported = () => !!synth && 'SpeechSynthesisUtterance' in window;

  /** Reads the Dutch voices. Only the browser's voiceschanged event (and the startup retry) announces a change: emitting
      from a plain T.voices() call made listeners that call T.voices() recurse forever when no Dutch voice exists. */
  function loadVoices(announce) {
    if (!T.supported()) return [];
    const before = voices.length;
    voices = synth.getVoices().filter((v) => /^nl([-_]|$)/i.test(v.lang));
    voices.sort((a, b) => score(b) - score(a));
    if (announce === true && voices.length !== before) U.emit('voices', voices);
    return voices;
  }
  /** Prefer Netherlands Dutch, natural/neural voices, then local voices */
  function score(v) {
    let s = 0;
    if (/nl[-_]NL/i.test(v.lang)) s += 10;
    if (/natural|neural|online|premium|enhanced/i.test(v.name)) s += 6;
    if (/Fenna|Maarten|Colette|Xander|Google/i.test(v.name)) s += 3;
    if (v.localService) s += 1;
    return s;
  }
  if (T.supported()) {
    loadVoices();
    synth.addEventListener('voiceschanged', () => loadVoices(true));
    setTimeout(() => loadVoices(true), 300);
  }

  T.voices = () => (voices.length ? voices : loadVoices());
  T.current = function () {
    const s = NL.state.get();
    const want = s && s.settings.voice;
    const list = T.voices();
    return list.find((v) => v.voiceURI === want || v.name === want) || list[0] || null;
  };
  T.hasDutchVoice = () => T.voices().length > 0;

  T.rate = function () {
    const s = NL.state.get();
    return RATES[(s && s.settings.rate) || 'normal'];
  };

  /* ---- Course audio: pre-generated recordings (tools/audio/build.py, open-source Piper voice "pim"), keyed by a hash of
     the normalised text. Used when a recording exists and the learner has not chosen the browser voice; otherwise the
     browser's speech synthesis speaks. The index (audio/index.json) is a list of hashes, loaded once on first use. */
  T.key = (text) => String(text).replace(/\s+/g, ' ').trim();
  T.hash = function (text) { // FNV-1a 32-bit over UTF-8 bytes; must match tools/audio/build.py
    const bytes = new TextEncoder().encode(T.key(text)); let h = 0x811c9dc5;
    for (let i = 0; i < bytes.length; i++) { h ^= bytes[i]; h = Math.imul(h, 0x01000193) >>> 0; }
    return ('0000000' + h.toString(16)).slice(-8);
  };
  let audioIndex = null, audioLoading = null, player = null;
  T.loadAudioIndex = function () {
    if (audioIndex || audioLoading) return audioLoading || Promise.resolve(audioIndex);
    if (typeof fetch === 'undefined') return Promise.resolve(null);
    audioLoading = fetch('audio/index.json').then((r) => (r.ok ? r.json() : [])).then((list) => { audioIndex = new Set(list); U.emit('audio-index', audioIndex.size); return audioIndex; }).catch(() => { audioIndex = new Set(); return audioIndex; });
    return audioLoading;
  };
  const source = () => { const s = NL.state.get(); return (s && s.settings.voiceSource) || 'course'; };
  T.hasRecording = (text) => !!(audioIndex && audioIndex.has(T.hash(text)));
  T.recordingsAvailable = () => !!(audioIndex && audioIndex.size);
  function playRecording(text, opts) {
    const hsh = T.hash(text);
    if (player) { try { player.pause(); } catch (e) {} }
    const a = new Audio('audio/' + hsh.slice(0, 2) + '/' + hsh + '.mp3');
    const r = typeof opts.rate === 'number' ? opts.rate : (opts.rate ? RATES[opts.rate] : T.rate());
    a.playbackRate = Math.max(0.5, Math.min(2, r / RATES.normal)); a.preservesPitch = true;
    let ended = false; const end = (e) => { if (ended) return; ended = true; if (opts.onend) opts.onend(e); };
    a.onended = end;
    a.onerror = () => { if (ended) return; ended = true; speakSynth(text, opts); }; // missing or unplayable file: fall back
    player = a;
    const p = a.play(); if (p && p.catch) p.catch(() => { if (!ended) { ended = true; speakSynth(text, opts); } });
    return true;
  }

  /** speak(text, {rate:'slow'|'normal'|'fast'|number, onend}) */
  T.speak = function (text, opts) {
    opts = opts || {};
    if (!text) return false;
    lastText = text;
    U.emit('speak', text);
    if (source() !== 'browser' && T.hasRecording(text)) return playRecording(text, opts);
    if (!audioIndex) T.loadAudioIndex();
    return speakSynth(text, opts);
  };
  function speakSynth(text, opts) {
    if (!T.supported()) { if (opts.onend) setTimeout(opts.onend, 0); return false; }
    try { synth.cancel(); } catch (e) {}
    const u = new SpeechSynthesisUtterance(text);
    const v = T.current();
    if (v) u.voice = v;
    u.lang = (v && v.lang) || 'nl-NL';
    u.rate = typeof opts.rate === 'number' ? opts.rate : (opts.rate ? RATES[opts.rate] : T.rate());
    u.pitch = 1;
    if (opts.onend) u.onend = opts.onend;
    u.onerror = (e) => { if (opts.onend) opts.onend(e); };
    synth.speak(u);
    return true;
  }
  T.replay = () => (lastText ? T.speak(lastText) : false);
  T.stop = () => { try { synth.cancel(); } catch (e) {} if (player) { try { player.pause(); } catch (e) {} } };
  T.last = () => lastText;

  /** Make an element speak its text when clicked */
  T.bind = function (el, text, opts) {
    el.classList.add('speak');
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('title', 'Listen (or press space to replay)');
    el.setAttribute('aria-label', 'Listen: ' + text);
    const go = (e) => {
      e.stopPropagation();
      T.speak(text, opts);
      el.classList.add('speaking');
      setTimeout(() => el.classList.remove('speaking'), 700);
    };
    el.addEventListener('click', go);
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); go(e); } });
    return el;
  };

  /** Inline Dutch text with a speaker icon */
  T.say = function (text, cls, opts) {
    const el = U.h('span.nl' + (cls ? '.' + cls : ''), U.h('span.nl-text', text), U.h('span.spk', { 'aria-hidden': 'true' }, '\u{1F50A}'));
    return T.bind(el, text, opts);
  };
})();
