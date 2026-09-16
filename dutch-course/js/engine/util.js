/* Nederlands Nu — shared helpers and the single global namespace */
(function () {
  'use strict';
  const NL = (window.NL = window.NL || {});
  NL.content = NL.content || { stages: [], vocab: {}, grammar: {}, bank: [] };
  NL.engine = NL.engine || {};

  const U = (NL.util = {});

  U.$ = (sel, root) => (root || document).querySelector(sel);
  U.$$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /** h('div.cls#id', {attrs}, ...children) */
  U.h = function h(tag, attrs, ...children) {
    const m = /^([a-z0-9-]+)?((?:[.#][\w-]+)*)$/i.exec(tag) || [];
    const el = document.createElement(m[1] || 'div');
    (m[2] || '').split(/(?=[.#])/).filter(Boolean).forEach((p) => {
      if (p[0] === '.') el.classList.add(p.slice(1));
      else el.id = p.slice(1);
    });
    if (attrs && typeof attrs === 'object' && !(attrs instanceof Node) && !Array.isArray(attrs)) {
      for (const k in attrs) {
        const v = attrs[k];
        if (v == null || v === false) continue;
        if (k === 'class') el.className += (el.className ? ' ' : '') + v;
        else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
        else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k === 'html') el.innerHTML = v;
        else if (k === 'dataset') Object.assign(el.dataset, v);
        else if (v === true) el.setAttribute(k, '');
        else el.setAttribute(k, v);
      }
    } else if (attrs != null) {
      children.unshift(attrs);
    }
    U.append(el, children);
    return el;
  };
  U.append = function (el, children) {
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      el.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return el;
  };
  U.clear = (el) => { while (el.firstChild) el.removeChild(el.firstChild); return el; };

  U.escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  U.shuffle = function (arr, rng) {
    const a = arr.slice();
    const r = rng || Math.random;
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  U.sample = (arr, n) => U.shuffle(arr).slice(0, n);
  U.pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  U.uniq = (arr) => Array.from(new Set(arr));
  U.clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  U.sum = (arr) => arr.reduce((a, b) => a + b, 0);

  /** Seeded PRNG so a lesson shows the same option order within a session */
  U.rng = function (seed) {
    let s = (seed >>> 0) || 1;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  };
  U.hash = (str) => { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

  U.today = () => U.dateKey(new Date());
  U.dateKey = (d) => { const z = (n) => String(n).padStart(2, '0'); return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()); };
  U.addDays = (key, n) => { const d = new Date(key + 'T12:00:00'); d.setDate(d.getDate() + n); return U.dateKey(d); };
  U.daysBetween = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 86400000);

  /** Lowercase, strip accents/punctuation, collapse spaces (keeps ij/ĳ, ë etc. as base letters) */
  U.normalize = function (s) {
    return String(s || '')
      .toLowerCase()
      .replace(/ĳ/g, 'ij')
      .replace(/’/g, "'")
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9' ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };
  U.words = (s) => U.normalize(s).split(' ').filter(Boolean);

  /** Damerau–Levenshtein distance */
  U.editDistance = function (a, b) {
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    const d = [];
    for (let i = 0; i <= m; i++) { d[i] = [i]; }
    for (let j = 0; j <= n; j++) { d[0][j] = j; }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
    return d[m][n];
  };

  U.plural = (n, one, many) => n + ' ' + (n === 1 ? one : many || one + 's');
  U.pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

  U.debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

  U.download = function (filename, text) {
    const blob = new Blob([text], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  U.readFile = (file) => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsText(file); });

  U.isTouch = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  U.browser = function () {
    const ua = navigator.userAgent;
    if (/Edg\//.test(ua)) return 'Edge';
    if (/Chrome\//.test(ua) && !/OPR|Brave/.test(ua)) return 'Chrome';
    if (/Firefox\//.test(ua)) return 'Firefox';
    if (/Safari\//.test(ua) && !/Chrome/.test(ua)) return 'Safari';
    return 'your browser';
  };

  /** Tiny event bus */
  const listeners = {};
  U.on = (ev, fn) => { (listeners[ev] = listeners[ev] || []).push(fn); return () => U.off(ev, fn); };
  U.off = (ev, fn) => { listeners[ev] = (listeners[ev] || []).filter((f) => f !== fn); };
  U.emit = (ev, data) => { (listeners[ev] || []).forEach((f) => { try { f(data); } catch (e) { console.error(e); } }); };

  U.toast = function (msg, kind) {
    let host = U.$('#toasts');
    if (!host) { host = U.h('div#toasts'); document.body.appendChild(host); }
    const t = U.h('div.toast' + (kind ? '.toast-' + kind : ''), msg);
    host.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2600);
  };
})();
