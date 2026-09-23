/* Coach (PLAN.md 5c, tier 1): a rule-based personal guide. Reads the existing state (due cards, streak, goal, skills,
   mistakes, lessons, challenges) and produces prioritised suggestions with a reason and a deep link. Surfaces: a home card,
   one non-blocking toast per day, a first-run tour, a chat panel with quick replies, and a quiet mode. No server, works offline.
   Tier 2 (bottom of this file): typed questions go to Claude through the proxy in proxy/ when js/config.js names it. */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h, A = NL.contentApi;
  const K = (NL.coach = {});

  /* --------------------------------------------------------------- recording */
  function coachState() { const s = NL.state.get(); s.coach = s.coach || { seenTour: false, quiet: false, nudged: {}, dismissed: {} }; return s.coach; }
  K.state = coachState;

  /** Called by the session runner on the first check of every exercise */
  K.record = function (ex, result, opts) {
    const s = NL.state.get(); if (!s) return;
    const day = NL.state.day();
    day.byType = day.byType || {};
    const t = (day.byType[ex.type] = day.byType[ex.type] || { n: 0, ok: 0 });
    t.n++; if (result.ok) t.ok++;
    if (!result.ok && !result.self) {
      s.mistakes = s.mistakes || [];
      s.mistakes.push({ d: U.today(), type: ex.type, grammar: (ex.grammar || opts.grammar || []).slice(0, 3), vocab: (ex.vocab || []).slice(0, 3), lesson: opts.title || null, q: (ex.nl || ex.prompt || ex.en || ex.q || ex.wrong || '').slice(0, 80) });
      if (s.mistakes.length > 50) s.mistakes.splice(0, s.mistakes.length - 50);
    }
  };

  /* ------------------------------------------------------------- analysis */
  K.weakestSkill = function () {
    const sk = NL.state.get().skills || {};
    const keys = ['grammar', 'vocab', 'listening', 'speaking', 'reading', 'writing'];
    const total = keys.reduce((n, k) => n + (sk[k] || 0), 0);
    if (total < 200) return null;
    return keys.slice().sort((a, b) => (sk[a] || 0) - (sk[b] || 0))[0];
  };
  K.weakGrammar = function () {
    const s = NL.state.get();
    const count = {};
    (s.mistakes || []).slice(-30).forEach((m) => (m.grammar || []).forEach((g) => { count[g] = (count[g] || 0) + 1; }));
    const cards = s.srs.cards || {};
    for (const id in cards) { const c = cards[id]; if (c.kind === 'grammar' && c.lapses > 1 && NL.content.grammar[id]) count[id] = (count[id] || 0) + c.lapses; }
    const best = Object.keys(count).filter((g) => NL.content.grammar[g]).sort((a, b) => count[b] - count[a])[0];
    return best ? { id: best, n: count[best], title: NL.content.grammar[best].title } : null;
  };
  K.typeAccuracy = function (days) {
    const log = NL.state.get().dayLog || {};
    const out = {};
    Object.keys(log).sort().slice(-(days || 14)).forEach((d) => { const bt = log[d].byType || {}; for (const t in bt) { const o = (out[t] = out[t] || { n: 0, ok: 0 }); o.n += bt[t].n; o.ok += bt[t].ok; } });
    return out;
  };
  K.nextLesson = function () {
    const s = NL.state.get();
    for (const x of A.allLessons()) { if (x.stage.hub) continue; if (!NL.game.isUnlocked(x.stage.id)) continue; if (!(s.lessons[x.lesson.id] && s.lessons[x.lesson.id].done)) return x; }
    return null;
  };
  K.lastActive = function () { const st = NL.state.get().streak; return st.last; };
  K.daysSinceActive = function () { const last = K.lastActive(); return last ? U.daysBetween(last, U.today()) : null; };

  /* ---------------------------------------------------------- suggestions */
  /** Returns suggestions sorted by priority (higher first). Each: { id, icon, title, why, href, cta, priority } */
  K.suggestions = function () {
    const s = NL.state.get();
    const out = [];
    const add = (id, priority, icon, title, why, href, cta) => out.push({ id, priority, icon, title, why, href, cta: cta || 'Go' });
    const due = NL.srs.dueCount();
    const day = NL.state.day();
    const hour = new Date().getHours();
    const known = NL.srs.knownWords();
    const idle = K.daysSinceActive();
    const nxt = K.nextLesson();

    if (idle != null && idle >= 3) add('welcome-back', 95, '\u{1F44B}', 'Welcome back', 'It has been ' + U.plural(idle, 'day') + '. A short review first brings the words back fastest; then continue where you left off.', due ? '#/review/go' : (nxt ? '#/lesson/' + nxt.lesson.id : '#/home'), due ? 'Review now' : 'Continue');
    if (due >= 20) add('due-many', 90, '\u{1F501}', U.plural(due, 'card') + ' waiting', 'A big queue means the schedule is slipping. Twenty now keeps the rest from coming back sooner.', '#/review/go', 'Review 20');
    else if (due > 0) add('due', 70, '\u{1F501}', U.plural(due, 'card') + ' due today', 'Reviewing on the day the card is due is what makes spaced repetition work. Five minutes.', '#/review/go', 'Review');
    if (NL.game.streakAlive() && idle === 1 && hour >= 17 && day.xp === 0) add('streak-risk', 88, '\u{1F525}', 'Your streak ends tonight', 'Anything counts: one review round keeps ' + NL.state.get().streak.current + ' days alive.', due ? '#/review/go' : '#/mode/speed', 'Keep it');
    if (day.xp > 0 && day.xp < s.dailyGoal && s.dailyGoal - day.xp <= 60) add('goal-close', 75, '\u{1F3AF}', (s.dailyGoal - day.xp) + ' XP to today’s goal', 'You are almost there. A speed round or a few reviews will do it.', '#/mode/speed', 'Speed round');
    if (day.xp >= s.dailyGoal && (day.voice || 0) === 0 && (s.stats.answers || 0) > 40) add('speak-today', 60, '\u{1F399}️', 'You have not spoken today', 'Speaking is the skill that fades fastest. Two minutes of Free talk keeps your mouth in shape.', '#/mode/freetalk', 'Free talk');
    const wg = K.weakGrammar();
    if (wg && wg.n >= 3) add('weak-grammar', 72, '\u{1F9E0}', 'Trouble spot: ' + wg.title, 'You have slipped on this rule ' + U.plural(wg.n, 'time') + ' recently. Reread it and drill ten exercises.', '#/grammar/' + wg.id, 'Drill it');
    const ws = K.weakestSkill();
    if (ws) {
      const link = { listening: '#/mode/listening', speaking: '#/mode/speaking', vocab: '#/bank', grammar: '#/grammar', reading: nxt ? '#/lesson/' + nxt.lesson.id : '#/home', writing: nxt ? '#/lesson/' + nxt.lesson.id : '#/home' }[ws];
      add('weak-skill', 50, '\u{1F4CA}', 'Weakest skill: ' + ws, 'Your ' + ws + ' bar is the lowest. Balanced skills make the exams easier.', link, 'Practise ' + ws);
    }
    // unit review pending
    for (const st of NL.content.stages) { if (st.hub || !NL.game.isUnlocked(st.id)) continue; for (const u of st.units) { const allDone = u.lessons.length && u.lessons.every((l) => s.lessons[l.id] && s.lessons[l.id].done); if (allDone && s.unitsReviewed[u.id] == null) { add('unit-review', 65, '\u{1F4D8}', 'Unit review: ' + u.title, 'You finished every lesson in this unit. The review mixes them and locks the knowledge in.', '#/unit-review/' + u.id, 'Start review'); break; } } if (out.some((x) => x.id === 'unit-review')) break; }
    // exam ready
    for (const st of NL.content.stages) { if (st.hub || !NL.game.isUnlocked(st.id)) continue; const p = NL.views.lessonPct(st); if (p.pct >= 80 && !(s.exams[st.id] >= 70)) { add('exam', 68, '\u{1F393}', st.title + ' exam is within reach', p.pct + '% of the lessons done. Passing it unlocks the next stage (70% needed).', '#/exam/' + st.id, 'Take the exam'); break; } }
    if (nxt) add('next-lesson', 55, '\u{27A1}️', 'Next: ' + nxt.lesson.title, nxt.stage.title + ' · ' + nxt.unit.title + ' · about ' + (nxt.lesson.minutes || 15) + ' minutes.', '#/lesson/' + nxt.lesson.id, 'Start lesson');
    // challenge close
    if (NL.fluency) { const cur = NL.fluency.current(); if (cur && !cur.claimed) { const left = cur.progress.filter((p) => !p.done); if (left.length === 1 && cur.daysLeft <= 2) add('challenge-close', 66, '\u{1F3C5}', 'One goal left this week', left[0].label + '. ' + (cur.daysLeft === 0 ? 'Today is the last day.' : U.plural(cur.daysLeft, 'day') + ' left.'), '#/challenge', 'See challenge'); } }
    // badge close
    for (const [n, id] of [[100, 'words-100'], [500, 'words-500'], [1000, 'words-1000']]) { if (!s.badges[id] && known >= n * 0.9 && known < n) { add('badge-close', 58, '\u{1F3C6}', (n - known) + ' words from a badge', 'Words become "known" after a few successful reviews. Practise a bank theme or review.', '#/bank', 'Vocabulary bank'); break; } }
    // bank nudge for stage-5 users
    if (!nxt && NL.fluency) add('bank', 52, '\u{1F5C2}️', 'Keep the dictionary growing', 'All lessons are done. The bank has ' + Object.keys(NL.content.vocab).length + ' words; learn ten new ones a day.', '#/bank', 'Learn 10 words');
    if (!out.length) add('start', 50, '\u{1F331}', 'Start with lesson one', 'Real grammar from the first lesson. Fifteen minutes.', '#/home', 'Go');
    out.sort((a, b) => b.priority - a.priority);
    return out;
  };

  /* ------------------------------------------------------------- surfaces */
  K.homeCard = function () {
    const c = coachState();
    const sug = K.suggestions().slice(0, 3);
    const card = h('div.card.coach-card', { style: { marginTop: '24px' } });
    card.appendChild(h('div.row.row-between', h('h3', { style: { margin: 0 } }, '\u{1F9ED} Coach'), h('a.small', { href: '#/coach' }, 'Ask the coach')));
    const list = h('div.coach-list');
    sug.forEach((x) => list.appendChild(h('a.coach-item', { href: x.href }, h('span.ico', x.icon), h('span', h('b', x.title), h('span.why', x.why)), h('span.btn.btn-sm.btn-primary', x.cta))));
    card.appendChild(list);
    if (c.quiet) card.appendChild(h('p.muted.small', { style: { margin: '8px 0 0' } }, 'Quiet mode is on: no nudges, just this card.'));
    return card;
  };

  /** One toast per rule per day, only outside sessions, only if not quiet */
  K.nudge = function () {
    const c = coachState();
    if (c.quiet) return;
    const top = K.suggestions()[0];
    if (!top || ['next-lesson', 'start', 'bank', 'weak-skill'].includes(top.id)) return;
    const key = top.id + ':' + U.today();
    if (c.nudged[key]) return;
    c.nudged[key] = 1;
    Object.keys(c.nudged).forEach((k) => { if (!k.endsWith(U.today())) delete c.nudged[k]; });
    NL.state.save();
    U.toast(top.icon + ' ' + top.title + ' · ' + top.cta, 'info');
  };

  const TOUR = [
    ['\u{1F5FA}️', 'Your path', 'Six stages, from the sounds of Dutch to B2. Every lesson: a goal, a short grammar explanation, new words, practice, a mini test. Start at the top and finish lesson one today.'],
    ['\u{1F501}', 'Review, every day', 'Every word and rule you meet gets a card. Cards come back on a schedule; the ones you miss come back sooner. The Review button shows how many are due. Five minutes a day beats an hour on Sunday.'],
    ['\u{1F399}️', 'Say it out loud', 'Tap any Dutch word to hear it; press Space to replay. Speaking exercises use your microphone in Chrome or Edge and score your pronunciation; elsewhere you grade yourself. Free talk gives you topics with model answers.'],
    ['\u{1F3C5}', 'XP, streaks, challenges', 'Every correct answer earns XP. Set a daily goal in Settings, keep a streak, collect badges, and beat the weekly challenge that starts every Monday. No hearts, no punishments.'],
    ['\u{1F9ED}', 'The coach', 'This card tells you what to do next and why: due cards, a rule you keep slipping on, a streak at risk. Ask it questions any time. Turn nudges off with quiet mode in Settings.'],
  ];
  K.tourCard = function (onDone) {
    let i = 0;
    const card = h('div.card.coach-tour');
    function render() {
      U.clear(card);
      const [ico, title, text] = TOUR[i];
      card.appendChild(h('div.row.row-between', h('div.eyebrow', 'Welcome · ' + (i + 1) + ' of ' + TOUR.length), h('button.btn-icon', { type: 'button', 'aria-label': 'Close tour', onclick: done }, '×')));
      card.appendChild(h('h3', ico + ' ' + title));
      card.appendChild(h('p', text));
      card.appendChild(h('div.row', h('button.btn.btn-primary', { type: 'button', onclick: () => { if (i < TOUR.length - 1) { i++; render(); } else done(); } }, i < TOUR.length - 1 ? 'Next' : 'Let’s go'), i > 0 ? h('button.btn', { type: 'button', onclick: () => { i--; render(); } }, 'Back') : h('button.btn.btn-ghost', { type: 'button', onclick: done }, 'Skip')));
    }
    function done() { coachState().seenTour = true; NL.state.save(); card.remove(); if (onDone) onDone(); }
    render();
    return card;
  };
  K.resetTour = function () { coachState().seenTour = false; NL.state.save(); };

  /* ----------------------------------------------------------------- chat */
  const INTENTS = [
    { id: 'now', q: 'What should I do now?', k: ['now', 'next', 'do', 'start', 'today'], a: () => { const s = K.suggestions().slice(0, 3); return [h('p', 'Here is my order for today:')].concat(s.map((x, i) => h('p', (i + 1) + '. ', h('a', { href: x.href }, x.title), ' — ' + x.why))); } },
    { id: 'progress', q: 'Explain my progress', k: ['progress', 'level', 'xp', 'how am i', 'stats', 'doing'], a: () => { const s = NL.state.get(); const lvl = NL.game.level(); const known = NL.srs.knownWords(), learning = NL.srs.learningWords(); const acc = K.typeAccuracy(14); const worst = Object.keys(acc).filter((t) => acc[t].n >= 8).sort((a, b) => acc[a].ok / acc[a].n - acc[b].ok / acc[b].n)[0]; const done = Object.values(s.lessons).filter((l) => l.done).length; return [h('p', 'Level ' + lvl.n + ' (' + lvl.title + ') with ' + s.xp + ' XP; ' + (lvl.next.xp - s.xp) + ' XP to the next level.'), h('p', done + ' lessons finished. ' + known + ' words known and ' + learning + ' still learning; a word counts as known after a few successful reviews spread over a week or more.'), h('p', 'Streak: ' + NL.game.streakCurrent() + ' days (best ' + s.streak.best + '). Overall accuracy ' + (s.stats.answers ? Math.round((s.stats.correct / s.stats.answers) * 100) : 0) + '%.'), worst ? h('p', 'In the last two weeks your weakest exercise type was "' + worst + '" (' + Math.round((acc[worst].ok / acc[worst].n) * 100) + '% right). That is a good thing to practise deliberately.') : null, K.weakestSkill() ? h('p', 'Your lowest skill bar is ' + K.weakestSkill() + '.') : null]; } },
    { id: 'review', q: 'How does review work?', k: ['review', 'srs', 'spaced', 'repetition', 'cards', 'due'], a: () => [h('p', 'Every word and grammar rule you meet becomes a card. After you answer it, the card is scheduled: right answers push it further into the future (1 day, 3 days, then longer each time), a wrong answer brings it back tomorrow and resets the interval.'), h('p', 'The Review button shows how many cards are due today. Do them on the day: that is the whole trick. Missed cards appear in more exercise types, so you meet the word in a new way.'), h('p', 'Right now ' + U.plural(NL.srs.dueCount(), 'card') + ' are due. ', h('a', { href: '#/review/go' }, 'Review now'), '.')] },
    { id: 'voice', q: 'How do I use voice?', k: ['voice', 'speak', 'microphone', 'mic', 'audio', 'pronunciation', 'listen', 'tts'], a: () => [h('p', 'Tap any Dutch word or sentence to hear it. Press Space to replay the last audio. Change the voice and the speed in Settings.'), h('p', NL.stt.supported() ? 'Speech recognition is available in this browser: in speaking exercises press the microphone, say the sentence, and you get a word-by-word score.' : 'Speech recognition is not available in this browser, so speaking exercises let you listen to the model, say it, and grade yourself. Chrome or Edge on desktop or Android give you the scored version.'), h('p', h('a', { href: '#/mode/freetalk' }, 'Free talk'), ' gives you topics with model answers; ', h('a', { href: '#/mode/speaking' }, 'Speaking only'), ' drills sentences.')] },
    { id: 'challenge', q: 'What is the weekly challenge?', k: ['challenge', 'weekly', 'week', 'monday'], a: () => { const cur = NL.fluency && NL.fluency.current(); if (!cur) return [h('p', 'No challenge is active.')]; return [h('p', 'This week: ' + cur.challenge.title + '. ' + cur.challenge.desc), h('p', cur.progress.map((p) => (p.done ? '✓ ' : '· ') + p.label).join(' · ')), h('p', cur.claimed ? 'Completed, well done.' : (cur.daysLeft === 0 ? 'Today is the last day.' : U.plural(cur.daysLeft, 'day') + ' left.') + ' ', h('a', { href: '#/challenge' }, 'Open the challenge'), '.')]; } },
    { id: 'mistakes', q: 'What do I keep getting wrong?', k: ['wrong', 'mistake', 'error', 'weak', 'trouble', 'difficult', 'hard'], a: () => { const s = NL.state.get(); const ms = (s.mistakes || []).slice(-30); if (ms.length < 5) return [h('p', 'Not enough data yet. After a few lessons I can point at patterns.')]; const wg = K.weakGrammar(); const byType = {}; ms.forEach((m) => { byType[m.type] = (byType[m.type] || 0) + 1; }); const top = Object.keys(byType).sort((a, b) => byType[b] - byType[a]).slice(0, 2); return [h('p', 'Of your last ' + ms.length + ' mistakes, most were in ' + top.map((t) => '"' + t + '" (' + byType[t] + ')').join(' and ') + '.'), wg ? h('p', 'The rule that comes up most is ', h('a', { href: '#/grammar/' + wg.id }, wg.title), '. Reread it and use "Drill this rule".') : null, h('p', 'Last few: ' + ms.slice(-4).map((m) => m.q).filter(Boolean).join(' · '))]; } },
    { id: 'plan', q: 'Make me a plan for this week', k: ['plan', 'schedule', 'routine', 'week', 'minutes', 'time'], a: () => { const nxt = K.nextLesson(); const due = NL.srs.dueCount(); return [h('p', 'A plan that fits in 15 minutes a day:'), h('p', '• Every day: review what is due (' + due + ' today). Two to five minutes.'), h('p', '• Four days: one lesson' + (nxt ? ' (next: ' + nxt.lesson.title + ')' : '') + '. Ten to fifteen minutes.'), h('p', '• Two days: speaking. Free talk or Speaking only, out loud, five minutes.'), h('p', '• One day: a vocabulary-bank theme or the weekly challenge.'), h('p', 'Set your daily goal in Settings to about 100 XP; a lesson gives 150 to 250.')]; } },
    { id: 'exam', q: 'How do the stage exams work?', k: ['exam', 'test', 'unlock', 'stage', 'placement', 'staatsexamen'], a: () => [h('p', 'Each stage ends with an exam of 30 mixed exercises. 70% passes and unlocks the next stage. You can retake it any time; the best score counts.'), h('p', 'You do not have to wait: the placement test in Settings unlocks stages by level, and "Unlock everything" simply opens all of them.'), h('p', 'Stage 4 also explains the real Staatsexamen NT2 Programma II and has mock papers for all four parts.')] },
    { id: 'quiet', q: 'Stop nudging me', k: ['quiet', 'stop', 'nudge', 'notification', 'annoying', 'silence'], a: () => { coachState().quiet = true; NL.state.save(); return [h('p', 'Done: quiet mode is on. I will only speak when you open this panel or the home card. Switch it back in Settings.')]; } },
  ];
  K.answer = function (text) {
    const t = U.normalize(text || '');
    let best = null, bestScore = 0;
    for (const it of INTENTS) { const score = it.k.reduce((n, k) => n + (t.includes(k) ? 1 : 0), 0); if (score > bestScore) { best = it; bestScore = score; } }
    if (!best) return [h('p', 'I can help with: what to do now, your progress, how review works, voice, the weekly challenge, your mistakes, a weekly plan, and the exams. Tap a question below.')];
    return best.a().filter(Boolean);
  };

  /* ------------------------------------------------- tier 2: Claude proxy */
  /* Dormant until js/config.js sets coachProxyUrl (see proxy/README.md). The browser never holds an API key: it sends the
     question, a compact progress summary and up to three grammar entries to the proxy, which calls Claude and returns text. */
  K.aiUrl = function () { const c = window.NL_CONFIG || {}; return c.coachProxyUrl && /^https?:/.test(location.protocol) ? c.coachProxyUrl : null; };
  K.aiConfigured = () => !!K.aiUrl();

  /** Compact, anonymous progress summary: what the model needs to give advice, nothing more */
  K.summary = function () {
    const s = NL.state.get(); const lvl = NL.game.level(); const nxt = K.nextLesson(); const wg = K.weakGrammar();
    const acc = K.typeAccuracy(14); const accPct = {};
    Object.keys(acc).forEach((t) => { if (acc[t].n >= 5) accPct[t] = Math.round((acc[t].ok / acc[t].n) * 100); });
    const cur = NL.fluency && NL.fluency.current();
    return {
      level: lvl.n, levelTitle: lvl.title, xp: s.xp, goal: s.goal, todayXp: NL.state.day().xp || 0,
      streak: NL.game.streakCurrent(), daysSinceActive: K.daysSinceActive(),
      lessonsDone: Object.values(s.lessons).filter((l) => l.done).length, lessonsTotal: A.allLessons().filter((x) => !x.stage.hub).length,
      nextLesson: nxt ? { id: nxt.lesson.id, title: nxt.lesson.title, unit: nxt.unit.title, stage: nxt.stage.code } : null,
      wordsKnown: NL.srs.knownWords(), wordsLearning: NL.srs.learningWords(), due: NL.srs.dueCount(),
      skills: s.skills, weakestSkill: K.weakestSkill(), weakGrammar: wg ? { id: wg.id, title: wg.title } : null,
      accuracyByType14d: accPct, voiceToday: NL.state.day().voice || 0,
      recentMistakes: (s.mistakes || []).slice(-8).map((m) => ({ type: m.type, grammar: m.grammar, q: m.q })),
      challenge: cur ? { title: cur.challenge.title, daysLeft: cur.daysLeft, done: cur.claimed } : null,
      sttAvailable: !!(NL.stt && NL.stt.supported()),
    };
  };

  function flatten(v, out) { if (v == null) return; if (typeof v === 'string') out.push(v); else if (Array.isArray(v)) v.forEach((x) => flatten(x, out)); else if (typeof v === 'object') Object.keys(v).forEach((k) => flatten(v[k], out)); }
  /** Up to three grammar entries relevant to the question (title or tag words in the text, plus the weakest rule) */
  K.relevantGrammar = function (text, limit) {
    const t = U.normalize(text || ''); const words = t.split(/[^a-z0-9]+/).filter((w) => w.length > 2);
    const all = Object.values(NL.content.grammar); const scored = [];
    all.forEach((g) => { const hay = U.normalize(g.title + ' ' + (g.tags || []).join(' ') + ' ' + g.id); let n = 0; words.forEach((w) => { if (hay.includes(w)) n++; }); if (n) scored.push({ g, n }); });
    scored.sort((a, b) => b.n - a.n);
    const pick = scored.slice(0, limit || 3).map((x) => x.g);
    const wg = K.weakGrammar(); if (wg && pick.length < (limit || 3) && !pick.some((g) => g.id === wg.id)) pick.push(wg);
    return pick.map((g) => { const parts = []; flatten(g.body, parts); return { id: g.id, title: g.title, text: parts.join(' ').replace(/\s+/g, ' ').slice(0, 1500) }; });
  };

  /** Ask the proxy. history: [{role:'user'|'assistant', content}] of earlier turns (plain text). Resolves to the answer text. */
  K.ask = async function (text, history) {
    const url = K.aiUrl(); if (!url) throw new Error('AI coach is not configured');
    const headers = { 'Content-Type': 'application/json' };
    const token = NL.sync && NL.sync.token ? await NL.sync.token() : null;
    if (token) headers.Authorization = 'Bearer ' + token;
    const body = { question: String(text).slice(0, 600), history: (history || []).slice(-8), summary: K.summary(), grammar: K.relevantGrammar(text), lang: 'en' };
    const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || ('The coach service answered ' + res.status));
    if (!data.answer) throw new Error('Empty answer');
    return String(data.answer);
  };

  /** Render answer text: blank-line paragraphs, "- " bullets, #/route links */
  function renderAnswer(text) {
    const linkify = (line) => { const out = []; const re = /(#\/[a-z0-9/_-]+)/gi; let last = 0, m; while ((m = re.exec(line))) { if (m.index > last) out.push(line.slice(last, m.index)); out.push(h('a', { href: m[1] }, m[1])); last = m.index + m[1].length; } if (last < line.length) out.push(line.slice(last)); return out; };
    return text.split(/\n{2,}/).map((para) => { const lines = para.split('\n'); if (lines.every((l) => /^\s*[-•]\s/.test(l))) return h('ul', ...lines.map((l) => h('li', ...linkify(l.replace(/^\s*[-•]\s/, ''))))); return h('p', ...linkify(para.replace(/\n/g, ' '))); });
  }

  K.view = function (host) {
    const ai = K.aiConfigured();
    host.appendChild(h('div.eyebrow', 'Coach'));
    host.appendChild(h('h1', '\u{1F9ED} Ask the coach'));
    host.appendChild(h('p.muted', ai ? 'Quick questions are answered on your device. Typed questions go to Claude through this site’s coach service, together with a short summary of your progress (level, streak, weak spots, last mistakes). No name or email is sent.' : 'I read your progress in this browser and answer from that. Nothing leaves your device.'));
    const log = h('div.coach-chat'); const history = [];
    const push = (who, nodes) => { const m = h('div.msg.' + who); (Array.isArray(nodes) ? nodes : [nodes]).forEach((n) => m.appendChild(typeof n === 'string' ? h('p', n) : n)); log.appendChild(m); m.scrollIntoView({ block: 'nearest' }); return m; };
    push('coach', INTENTS[0].a());
    host.appendChild(log);
    const quick = h('div.coach-quick');
    INTENTS.forEach((it) => quick.appendChild(h('button.btn.btn-sm', { type: 'button', onclick: () => { push('me', it.q); push('coach', it.a().filter(Boolean)); } }, it.q)));
    host.appendChild(quick);
    const inp = h('input.input', { type: 'text', placeholder: ai ? 'Ask anything about Dutch or the course…' : 'Or type a question…', 'aria-label': 'Ask the coach', maxlength: 600 });
    const btn = h('button.btn.btn-primary', { type: 'submit' }, 'Ask');
    const form = h('form.row', { onsubmit: async (e) => {
      e.preventDefault(); const t = inp.value.trim(); if (!t) return; push('me', t); inp.value = '';
      if (!ai) { push('coach', K.answer(t)); return; }
      const wait = push('coach', h('p.muted', 'Thinking…')); btn.disabled = true;
      try {
        const a = await K.ask(t, history);
        history.push({ role: 'user', content: t }, { role: 'assistant', content: a }); if (history.length > 8) history.splice(0, history.length - 8);
        U.clear(wait); renderAnswer(a).forEach((n) => wait.appendChild(n));
      } catch (err) {
        U.clear(wait); K.answer(t).forEach((n) => wait.appendChild(n)); wait.appendChild(h('p.muted.small', 'The coach service did not answer (' + err.message + '), so this is the offline answer.'));
      } finally { btn.disabled = false; wait.scrollIntoView({ block: 'nearest' }); }
    } }, inp, btn);
    host.appendChild(form);
  };
})();
