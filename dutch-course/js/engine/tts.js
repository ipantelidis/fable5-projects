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

  function loadVoices() {
    if (!T.supported()) return [];
    voices = synth.getVoices().filter((v) => /^nl([-_]|$)/i.test(v.lang));
    voices.sort((a, b) => score(b) - score(a));
    U.emit('voices', voices);
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
    synth.addEventListener('voiceschanged', loadVoices);
    setTimeout(loadVoices, 300);
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

  /** speak(text, {rate:'slow'|'normal'|'fast'|number, onend}) */
  T.speak = function (text, opts) {
    opts = opts || {};
    if (!T.supported() || !text) return false;
    lastText = text;
    try { synth.cancel(); } catch (e) {}
    const u = new SpeechSynthesisUtterance(text);
    const v = T.current();
    if (v) u.voice = v;
    u.lang = (v && v.lang) || 'nl-NL';
    u.rate = typeof opts.rate === 'number' ? opts.rate : (opts.rate ? RATES[opts.rate] : T.rate());
    u.pitch = 1;
    if (opts.onend) u.onend = opts.onend;
    u.onerror = (e) => { if (opts.onend) opts.onend(e); };
    U.emit('speak', text);
    synth.speak(u);
    return true;
  };
  T.replay = () => (lastText ? T.speak(lastText) : false);
  T.stop = () => { try { synth.cancel(); } catch (e) {} };
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
