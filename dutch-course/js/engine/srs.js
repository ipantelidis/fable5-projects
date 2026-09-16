/* Spaced repetition: SM-2 style scheduler for vocab and grammar cards */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util;

  const SRS = (NL.srs = {});

  function cards() { return NL.state.get().srs.cards; }

  SRS.card = function (id, kind) {
    const c = cards();
    if (!c[id]) c[id] = { id, kind: kind || (NL.content.vocab[id] ? 'vocab' : 'grammar'), ef: 2.5, reps: 0, interval: 0, due: U.today(), lapses: 0, seen: 0, correct: 0, last: null };
    return c[id];
  };
  SRS.has = (id) => !!cards()[id];

  /** quality 0..5 (SM-2). We map: wrong=1, hard=3, good=4, easy=5 */
  SRS.review = function (id, quality, kind) {
    const c = SRS.card(id, kind);
    c.seen++;
    c.last = U.today();
    if (quality >= 3) {
      c.correct++;
      if (c.reps === 0) c.interval = 1;
      else if (c.reps === 1) c.interval = 3;
      else c.interval = Math.round(c.interval * c.ef);
      if (quality === 5 && c.reps >= 2) c.interval = Math.round(c.interval * 1.3);
      c.reps++;
    } else {
      c.reps = 0;
      c.lapses++;
      c.interval = 0; // comes back in the same/next session
    }
    c.ef = Math.max(1.3, c.ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    c.due = U.addDays(U.today(), c.interval);
    NL.state.save();
    return c;
  };

  /** Mark an item as introduced (seen in a lesson) without an answer */
  SRS.introduce = function (id, kind) {
    const c = SRS.card(id, kind);
    if (c.seen === 0) { c.due = U.today(); }
    return c;
  };

  SRS.due = function (kind) {
    const t = U.today();
    return Object.values(cards()).filter((c) => (!kind || c.kind === kind) && c.due <= t && c.seen > 0);
  };
  SRS.dueCount = (kind) => SRS.due(kind).length;

  /** "Known" = has been recalled several times with a healthy interval */
  SRS.isKnown = function (c) {
    if (!c || c.seen === 0) return false;
    const acc = c.correct / Math.max(1, c.seen);
    return c.reps >= 2 && c.interval >= 7 && acc >= 0.7;
  };
  SRS.knownWords = () => Object.values(cards()).filter((c) => c.kind === 'vocab' && SRS.isKnown(c)).length;
  SRS.learningWords = () => Object.values(cards()).filter((c) => c.kind === 'vocab' && c.seen > 0 && !SRS.isKnown(c)).length;
  SRS.masteredGrammar = () => Object.values(cards()).filter((c) => c.kind === 'grammar' && SRS.isKnown(c)).map((c) => c.id);

  /** Strength 0..4 for UI (dictionary bars) */
  SRS.strength = function (id) {
    const c = cards()[id];
    if (!c || c.seen === 0) return 0;
    if (SRS.isKnown(c)) return 4;
    if (c.reps >= 2) return 3;
    if (c.reps === 1) return 2;
    return 1;
  };

  /** Weak items: most lapses / lowest ef first, for extra practice */
  SRS.weakest = function (n, kind) {
    return Object.values(cards())
      .filter((c) => c.seen > 0 && (!kind || c.kind === kind))
      .sort((a, b) => (b.lapses - b.correct / Math.max(1, b.seen)) - (a.lapses - a.correct / Math.max(1, a.seen)))
      .slice(0, n);
  };
})();
