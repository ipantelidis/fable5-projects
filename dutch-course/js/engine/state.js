/* User state: localStorage persistence, export / import */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util;
  const KEY = 'nl.state.v1';

  function fresh() {
    return {
      v: 1, created: new Date().toISOString(), xp: 0, dailyGoal: 50, dayLog: {},
      streak: { current: 0, best: 0, last: null }, badges: {}, levelSeen: 1,
      lessons: {}, unitsReviewed: {}, exams: {}, challenges: {}, unlocked: { s0: true, s1: true },
      skills: { grammar: 0, vocab: 0, listening: 0, speaking: 0, reading: 0, writing: 0 },
      srs: { cards: {} }, mistakes: [], coach: { seenTour: false, quiet: false, nudged: {}, dismissed: {} }, stats: { answers: 0, correct: 0, voice: 0, sessions: 0, bestCombo: 0 },
      settings: { voice: null, rate: 'normal', theme: 'auto', mute: false, unlockAll: false, showTranslations: true, sttSeen: false },
    };
  }

  function migrate(s) {
    const f = fresh();
    const out = Object.assign({}, f, s);
    for (const k of ['streak', 'badges', 'lessons', 'unitsReviewed', 'exams', 'challenges', 'coach', 'unlocked', 'skills', 'srs', 'stats', 'settings', 'dayLog']) {
      out[k] = Object.assign({}, f[k], s && s[k]);
    }
    if (!out.srs.cards) out.srs.cards = {};
    if (!Array.isArray(out.mistakes)) out.mistakes = [];
    return out;
  }

  let state = null;
  const S = (NL.state = {
    get() { return state; },
    load() {
      try {
        const raw = localStorage.getItem(KEY);
        state = raw ? migrate(JSON.parse(raw)) : fresh();
      } catch (e) { console.warn('state load failed', e); state = fresh(); }
      return state;
    },
    save: U.debounce(() => S.saveNow(), 150),
    saveNow() {
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { console.warn('state save failed', e); }
      U.emit('state', state);
    },
    reset() { state = fresh(); S.saveNow(); },
    exportJSON() {
      return JSON.stringify({ app: 'nederlands-nu', exported: new Date().toISOString(), state }, null, 2);
    },
    importJSON(text) {
      const data = JSON.parse(text);
      const s = data && data.state ? data.state : data;
      if (!s || typeof s !== 'object' || typeof s.xp !== 'number') throw new Error('Not a Nederlands Nu progress file');
      state = migrate(s);
      S.saveNow();
      return state;
    },
    day(key) {
      key = key || U.today();
      return (state.dayLog[key] = state.dayLog[key] || { xp: 0, answers: 0, correct: 0 });
    },
  });
})();
