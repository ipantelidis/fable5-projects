/* Speech to text: SpeechRecognition (nl-NL) + tolerant comparison + graceful fallback */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util;
  const R = (NL.stt = {});
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  R.supported = () => !!Rec;
  R.bestBrowserHint = function () {
    const b = U.browser();
    if (b === 'Chrome' || b === 'Edge') return null;
    return 'Speech recognition is not available in ' + b + '. For the full voice experience, open this course in Chrome or Edge.';
  };

  let active = null;
  R.listening = () => !!active;

  /** listen({target, onstart, onresult(text, isFinal), onend(text), onerror(code), maxMs}) -> stop fn */
  R.listen = function (h) {
    h = h || {};
    if (!R.supported()) { if (h.onerror) h.onerror('unsupported'); return () => {}; }
    R.stop();
    const rec = new Rec();
    rec.lang = 'nl-NL';
    rec.interimResults = true;
    rec.maxAlternatives = 3;
    rec.continuous = false;
    let finalText = '';
    let ended = false;
    rec.onstart = () => { active = rec; if (h.onstart) h.onstart(); };
    rec.onresult = (ev) => {
      let interim = '';
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const r = ev.results[i];
        if (r.isFinal) {
          let best = r[0].transcript;
          if (h.target) {
            let bs = -1;
            for (let k = 0; k < r.length; k++) {
              const sc = R.compare(h.target, r[k].transcript).score;
              if (sc > bs) { bs = sc; best = r[k].transcript; }
            }
          }
          finalText += (finalText ? ' ' : '') + best;
        } else interim += r[0].transcript;
      }
      if (h.onresult) h.onresult((finalText + ' ' + interim).trim(), !interim && !!finalText);
    };
    rec.onerror = (ev) => { if (h.onerror) h.onerror(ev.error || 'error'); };
    rec.onend = () => { if (ended) return; ended = true; active = null; if (h.onend) h.onend(finalText.trim()); };
    try { rec.start(); } catch (e) { if (h.onerror) h.onerror('start-failed'); }
    const timer = setTimeout(() => { try { rec.stop(); } catch (e) {} }, h.maxMs || 9000);
    return () => { clearTimeout(timer); try { rec.stop(); } catch (e) {} };
  };
  R.stop = () => { if (active) { try { active.abort(); } catch (e) {} active = null; } };

  /* Dutch-aware normalisation for spoken comparison */
  const NUMWORDS = { 0: 'nul', 1: 'een', 2: 'twee', 3: 'drie', 4: 'vier', 5: 'vijf', 6: 'zes', 7: 'zeven', 8: 'acht', 9: 'negen', 10: 'tien', 11: 'elf', 12: 'twaalf', 13: 'dertien', 14: 'veertien', 15: 'vijftien', 16: 'zestien', 17: 'zeventien', 18: 'achttien', 19: 'negentien', 20: 'twintig', 30: 'dertig', 40: 'veertig', 50: 'vijftig', 60: 'zestig', 70: 'zeventig', 80: 'tachtig', 90: 'negentig', 100: 'honderd', 1000: 'duizend' };
  function numToWords(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) return null;
    if (NUMWORDS[n]) return NUMWORDS[n];
    if (n < 100) { const t = Math.floor(n / 10) * 10, o = n % 10; return NUMWORDS[o] + (o === 2 || o === 3 ? 'ën' : 'en') + NUMWORDS[t]; }
    if (n < 1000) { const hh = Math.floor(n / 100), r = n % 100; return (hh === 1 ? '' : NUMWORDS[hh]) + 'honderd' + (r ? numToWords(r) : ''); }
    if (n < 10000) { const k = Math.floor(n / 1000), r = n % 1000; return (k === 1 ? '' : NUMWORDS[k]) + 'duizend' + (r ? ' ' + numToWords(r) : ''); }
    return String(n);
  }
  R.numToWords = numToWords;
  function spokenNorm(s) {
    return U.normalize(String(s).replace(/\d+/g, (d) => numToWords(d) || d))
      .replace(/(^|\s)'t(?=\s|$)/g, '$1het').replace(/(^|\s)'n(?=\s|$)/g, '$1een').replace(/(^|\s)'m(?=\s|$)/g, '$1hem')
      .replace(/(^|\s)z'n(?=\s|$)/g, '$1zijn').replace(/(^|\s)m'n(?=\s|$)/g, '$1mijn').replace(/(^|\s)d'r(?=\s|$)/g, '$1haar')
      .replace(/\bdr\b/g, 'er');
  }
  function wordsEqual(a, b) {
    if (a === b) return true;
    const la = a.length, lb = b.length;
    if (Math.min(la, lb) <= 2) return false;
    const d = U.editDistance(a, b);
    if (Math.min(la, lb) <= 4) return d <= 1;
    return d <= 2;
  }
  /** compare(target, heard) -> { score:0..100, words:[{w, ok}], heard:[...], pass } */
  R.compare = function (target, heard) {
    const t = spokenNorm(target).split(' ').filter(Boolean);
    const hw = spokenNorm(heard || '').split(' ').filter(Boolean);
    const used = new Array(hw.length).fill(false);
    const words = t.map((w) => {
      let idx = -1;
      for (let i = 0; i < hw.length; i++) { if (!used[i] && wordsEqual(w, hw[i])) { idx = i; break; } }
      if (idx >= 0) used[idx] = true;
      return { w, ok: idx >= 0 };
    });
    // compound joins: "goede morgen" heard as "goedemorgen" and vice versa
    const joined = hw.join('');
    words.forEach((x, i) => { if (!x.ok && x.w.length >= 5 && joined.includes(x.w)) words[i].ok = true; });
    const okCount = words.filter((x) => x.ok).length;
    const extra = Math.max(0, hw.length - t.length);
    let score = t.length ? Math.round((okCount / t.length) * 100) : 0;
    score = Math.max(0, score - extra * 5);
    return { score, words, heard: hw, pass: score >= 70 };
  };
})();
