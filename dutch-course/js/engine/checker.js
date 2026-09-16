/* Tolerant answer checking for typed exercises */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util;
  const C = (NL.checker = {});

  /** Contractions that are freely interchangeable in typed answers */
  const EQUIV = [
    [/(^|\s)'t(?=\s|$)/g, '$1het'], [/(^|\s)'n(?=\s|$)/g, '$1een'], [/(^|\s)z'n(?=\s|$)/g, '$1zijn'], [/(^|\s)m'n(?=\s|$)/g, '$1mijn'], [/(^|\s)d'r(?=\s|$)/g, '$1haar'],
  ];
  function norm(s) {
    let x = U.normalize(s);
    for (const [re, rep] of EQUIV) x = x.replace(re, rep);
    return x;
  }
  C.norm = norm;

  /** Allowed typo budget by length of the whole normalised answer */
  function budget(len) { return len <= 3 ? 0 : len <= 6 ? 1 : len <= 12 ? 2 : Math.floor(len / 6); }

  /**
   * check(input, accepted[], {strict}) ->
   * { ok, exact, close, best, diff:[{w, ok}], distance }
   */
  C.check = function (input, accepted, opts) {
    opts = opts || {};
    const list = (Array.isArray(accepted) ? accepted : [accepted]).filter((a) => a != null && a !== '');
    const inp = norm(input);
    if (!inp) return { ok: false, exact: false, close: false, best: list[0], diff: [] };
    let best = list[0], bestD = Infinity;
    for (const a of list) {
      const an = norm(a);
      if (an === inp) return { ok: true, exact: true, close: false, best: a, diff: diffWords(an, inp), distance: 0 };
      const d = U.editDistance(an, inp);
      if (d < bestD) { bestD = d; best = a; }
    }
    const bn = norm(best);
    const close = !opts.strict && bestD <= budget(bn.length) && sameWordCount(bn, inp);
    return { ok: close, exact: false, close, best, diff: diffWords(bn, inp), distance: bestD };
  };
  function sameWordCount(a, b) { return a.split(' ').length === b.split(' ').length; }
  function diffWords(target, input) {
    const t = target.split(' '), i = input.split(' ');
    return t.map((w, k) => ({ w, ok: i[k] === w || (i[k] != null && w.length > 2 && U.editDistance(w, i[k]) <= (w.length <= 4 ? 1 : 2)) }));
  }

  /** Word-order check for the sentence builder: punctuation and case ignored */
  C.sameSequence = (a, b) => norm(a) === norm(b);

  /** English answers: also ignore a leading article / "to" for single-word answers */
  C.checkEn = function (input, accepted) {
    const r = C.check(input, accepted);
    if (r.ok) return r;
    const strip = (s) => norm(s).replace(/^(the|a|an|to) /, '');
    const inp = strip(input);
    for (const a of accepted) { if (strip(a) === inp) return { ok: true, exact: true, close: false, best: a, diff: [], distance: 0 }; }
    return r;
  };
})();
