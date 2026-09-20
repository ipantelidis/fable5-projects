/* Gamification: XP, levels, streak, daily goal, badges, skills */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util;
  const G = (NL.game = {});

  G.LEVELS = [
    { n: 1, title: 'Toerist', xp: 0 }, { n: 2, title: 'Nieuwkomer', xp: 150 }, { n: 3, title: 'Buur', xp: 400 },
    { n: 4, title: 'Stadsgenoot', xp: 800 }, { n: 5, title: 'Amsterdammer', xp: 1400 }, { n: 6, title: 'Fietser', xp: 2200 },
    { n: 7, title: 'Kletskous', xp: 3200 }, { n: 8, title: 'Nederlander', xp: 4500 }, { n: 9, title: 'Polderaar', xp: 6000 },
    { n: 10, title: 'Taalkenner', xp: 8000 }, { n: 11, title: 'Woordkunstenaar', xp: 10500 }, { n: 12, title: 'Taalvirtuoos', xp: 13500 },
  ];
  G.level = function (xp) {
    xp = xp == null ? NL.state.get().xp : xp;
    let cur = G.LEVELS[0];
    for (const l of G.LEVELS) if (xp >= l.xp) cur = l;
    let next = G.LEVELS.find((l) => l.xp > xp);
    if (!next) { const extra = Math.floor((xp - 13500) / 3500) + 1; cur = { n: 12 + extra, title: 'Taalvirtuoos ' + ('I'.repeat(Math.min(extra, 3)) || ''), xp: 13500 + (extra - 1) * 3500 }; next = { n: cur.n + 1, title: 'Taalvirtuoos', xp: cur.xp + 3500 }; }
    return { ...cur, next, progress: (xp - cur.xp) / (next.xp - cur.xp) };
  };

  G.SKILL_OF = { mc: 'grammar', fill: 'grammar', conj: 'grammar', article: 'vocab', fix: 'grammar', build: 'grammar', translate: 'vocab', match: 'vocab', dictation: 'listening', listen: 'listening', speak: 'speaking', freespeak: 'speaking', read: 'reading', write: 'writing', plural: 'vocab' };

  G.BADGES = [
    { id: 'first-lesson', name: 'Eerste stap', desc: 'Finish your first lesson', icon: '\u{1F331}' },
    { id: 'perfect', name: 'Foutloos', desc: 'A perfect lesson: every answer right', icon: '\u{1F48E}' },
    { id: 'words-100', name: '100 woorden', desc: 'Know 100 words', icon: '\u{1F4D6}' },
    { id: 'words-500', name: '500 woorden', desc: 'Know 500 words', icon: '\u{1F4DA}' },
    { id: 'words-1000', name: '1000 woorden', desc: 'Know 1000 words', icon: '\u{1F3C6}' },
    { id: 'streak-7', name: 'Week op rij', desc: '7-day streak', icon: '\u{1F525}' },
    { id: 'streak-30', name: 'Maand op rij', desc: '30-day streak', icon: '\u{1F31F}' },
    { id: 'voice-10', name: 'Spreker', desc: '10 speaking exercises', icon: '\u{1F399}️' },
    { id: 'voice-100', name: 'Prater', desc: '100 speaking exercises', icon: '\u{1F5E3}️' },
    { id: 'combo-10', name: 'Op dreef', desc: '10 correct answers in a row', icon: '⚡' },
    { id: 'stage-s0', name: 'Fundament', desc: 'Pass the Foundations exam', icon: '\u{1F9F1}' },
    { id: 'stage-s1', name: 'A1 gehaald', desc: 'Pass the A1 exam', icon: '\u{1F949}' },
    { id: 'stage-s2', name: 'A2 gehaald', desc: 'Pass the A2 exam', icon: '\u{1F948}' },
    { id: 'stage-s3', name: 'B1 gehaald', desc: 'Pass the B1 exam', icon: '\u{1F947}' },
    { id: 'stage-s4', name: 'B2 gehaald', desc: 'Pass the B2 exam', icon: '\u{1F451}' },
    { id: 'a1-grammar', name: 'A1-grammatica', desc: 'All A1 grammar rules mastered in review', icon: '\u{1F9E0}' },
    { id: 'review-100', name: 'Herhaler', desc: '100 review cards answered', icon: '\u{1F501}' },
    { id: 'xp-1000', name: '1000 XP', desc: 'Earn 1000 XP', icon: '\u{1F4AB}' },
    { id: 'goal-first', name: 'Doel gehaald', desc: 'Reach your daily goal', icon: '\u{1F3AF}' },
    { id: 'challenge-1', name: 'Uitdaging', desc: 'Complete a weekly challenge', icon: '\u{1F3C5}' },
    { id: 'challenge-4', name: 'Maand volgehouden', desc: 'Complete 4 weekly challenges', icon: '\u{1F4C6}' },
    { id: 'challenge-12', name: 'Doorzetter', desc: 'Complete 12 weekly challenges', icon: '\u{1F9D7}' },
  ];

  /** Record one answer. Returns { xp, combo, levelUp } */
  G.answer = function (info) {
    const s = NL.state.get();
    const day = NL.state.day();
    s.stats.answers++; day.answers++;
    if (info.correct) { s.stats.correct++; day.correct++; }
    if (info.voice) { s.stats.voice++; day.voice = (day.voice || 0) + 1; }
    let xp = 0;
    if (info.correct) {
      xp = info.xp != null ? info.xp : 10;
      if (info.combo >= 10) xp += 10; else if (info.combo >= 5) xp += 5; else if (info.combo >= 3) xp += 2;
      if (info.voice) xp += 5;
      if (info.combo > s.stats.bestCombo) s.stats.bestCombo = info.combo;
    } else if (info.partial) xp = 3;
    const skill = info.skill || G.SKILL_OF[info.type] || 'grammar';
    s.skills[skill] = (s.skills[skill] || 0) + xp;
    return G.addXP(xp, day);
  };

  G.addXP = function (xp, day) {
    const s = NL.state.get();
    day = day || NL.state.day();
    const before = G.level(s.xp).n;
    s.xp += xp; day.xp += xp;
    G.touchStreak();
    const after = G.level(s.xp).n;
    const levelUp = after > before;
    if (levelUp) { NL.sfx.levelUp(); U.emit('levelup', G.level(s.xp)); }
    if (day.xp >= s.dailyGoal && day.xp - xp < s.dailyGoal) { U.emit('goal', day); G.badge('goal-first'); }
    G.checkBadges();
    NL.state.save();
    return { xp, levelUp };
  };

  G.touchStreak = function () {
    const s = NL.state.get(), st = s.streak, t = U.today();
    if (st.last === t) return;
    if (st.last && U.daysBetween(st.last, t) === 1) st.current += 1; else st.current = 1;
    st.last = t;
    if (st.current > st.best) st.best = st.current;
    U.emit('streak', st);
  };
  /** A streak is "alive" if the last active day is today or yesterday */
  G.streakAlive = function () { const st = NL.state.get().streak; return st.last && U.daysBetween(st.last, U.today()) <= 1; };
  G.streakCurrent = function () { return G.streakAlive() ? NL.state.get().streak.current : 0; };

  G.badge = function (id) {
    const s = NL.state.get();
    if (s.badges[id]) return false;
    s.badges[id] = U.today();
    const b = G.BADGES.find((x) => x.id === id);
    NL.sfx.badge();
    U.emit('badge', b);
    NL.state.save();
    return true;
  };
  G.checkBadges = function () {
    const s = NL.state.get();
    const known = NL.srs.knownWords();
    if (known >= 100) G.badge('words-100');
    if (known >= 500) G.badge('words-500');
    if (known >= 1000) G.badge('words-1000');
    if (G.streakCurrent() >= 7) G.badge('streak-7');
    if (G.streakCurrent() >= 30) G.badge('streak-30');
    if (s.stats.voice >= 10) G.badge('voice-10');
    if (s.stats.voice >= 100) G.badge('voice-100');
    if (s.stats.bestCombo >= 10) G.badge('combo-10');
    if (s.xp >= 1000) G.badge('xp-1000');
    if ((s.stats.reviews || 0) >= 100) G.badge('review-100');
    if (NL.fluency) NL.fluency.check();
    const st1 = NL.content.stages.find((x) => x.id === 's1');
    if (st1) {
      const ids = NL.contentApi.grammarIdsOfStage(st1);
      if (ids.length && ids.every((g) => NL.srs.isKnown(s.srs.cards[g]))) G.badge('a1-grammar');
    }
  };

  /** Lesson complete: bonus XP, records best score */
  G.lessonDone = function (lessonId, score, total) {
    const s = NL.state.get();
    const rec = (s.lessons[lessonId] = s.lessons[lessonId] || { best: 0, times: 0 });
    const pct = total ? Math.round((score / total) * 100) : 100;
    rec.times++; rec.last = pct; rec.date = U.today(); rec.done = true;
    if (pct > rec.best) rec.best = pct;
    let bonus = 30;
    const day = NL.state.day();
    day.lessons = (day.lessons || 0) + 1;
    if (pct === 100 && total > 0) { bonus += 20; day.perfect = (day.perfect || 0) + 1; G.badge('perfect'); }
    G.badge('first-lesson');
    s.stats.sessions++;
    NL.sfx.finish();
    G.addXP(bonus);
    return bonus;
  };

  G.examDone = function (stageId, pct) {
    const s = NL.state.get();
    s.exams[stageId] = Math.max(s.exams[stageId] || 0, pct);
    if (pct >= 70) {
      const idx = NL.content.stages.findIndex((x) => x.id === stageId);
      const next = NL.content.stages[idx + 1];
      if (next) s.unlocked[next.id] = true;
      G.badge('stage-' + stageId);
      G.addXP(100);
    }
    NL.state.save();
  };

  G.isUnlocked = function (stageId) {
    const s = NL.state.get();
    return !!(s.settings.unlockAll || s.unlocked[stageId]);
  };
})();
