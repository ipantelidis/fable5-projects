/* Screens: home, stage, unit, grammar reference, dictionary, settings, badges */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h, A = NL.contentApi, T = NL.tts;
  const V = (NL.views = {});

  function lessonPct(stage) {
    const s = NL.state.get();
    let n = 0, done = 0;
    for (const u of stage.units) for (const l of u.lessons) { n++; if (s.lessons[l.id] && s.lessons[l.id].done) done++; }
    return { n, done, pct: U.pct(done, n) };
  }
  V.lessonPct = lessonPct;

  function nextLesson() {
    const s = NL.state.get();
    for (const x of A.allLessons()) { if (!NL.game.isUnlocked(x.stage.id)) continue; if (!(s.lessons[x.lesson.id] && s.lessons[x.lesson.id].done)) return x; }
    return null;
  }

  /* ---------- Home ---------- */
  V.home = function (host) {
    const s = NL.state.get();
    const lvl = NL.game.level();
    const day = NL.state.day();
    const due = NL.srs.dueCount();
    const nxt = nextLesson();
    const hour = new Date().getHours();
    const greet = hour < 12 ? 'Goedemorgen' : hour < 18 ? 'Goedemiddag' : 'Goedenavond';

    host.appendChild(h('div.hero',
      h('div', h('div.eyebrow', 'Level ' + lvl.n + ' · ' + lvl.title), h('h1', T.say(greet + '!'), ' ', h('span.muted', { style: { fontWeight: 400, fontSize: '1.2rem' } }, s.xp ? 'Ready for more?' : 'Let’s learn some real Dutch.'))),
      h('div', h('div.row.row-between.small', h('span', s.xp + ' XP'), h('span.muted', lvl.next.xp - s.xp + ' XP to level ' + lvl.next.n + ' (' + lvl.next.title + ')')), h('div.progress.gold', h('div.bar', { style: { width: Math.round(lvl.progress * 100) + '%' } }))),
      h('div.stats',
        h('div.stat', h('div.n', '\u{1F525} ' + NL.game.streakCurrent()), h('div.l', 'day streak')),
        h('div.stat', h('div.n', String(NL.srs.knownWords())), h('div.l', 'words known')),
        h('div.stat', h('div.n', String(NL.srs.learningWords())), h('div.l', 'learning')),
        h('div.stat', h('div.n', day.xp + '/' + s.dailyGoal), h('div.l', 'today’s goal')),
      ),
      h('div.progress.ok', { 'aria-label': 'Daily goal' }, h('div.bar', { style: { width: Math.min(100, U.pct(day.xp, s.dailyGoal)) + '%' } })),
    ));

    const cta = h('div.row', { style: { marginTop: '24px' } });
    if (nxt) cta.appendChild(h('a.btn.btn-primary.btn-lg', { href: '#/lesson/' + nxt.lesson.id }, (s.xp ? 'Continue: ' : 'Start: ') + nxt.lesson.title + ' →'));
    cta.appendChild(h('a.btn.btn-lg' + (due ? '.btn-accent' : ''), { href: '#/review/go' }, '\u{1F501} Review' + (due ? ' · ' + due + ' due' : '')));
    host.appendChild(cta);
    if (nxt) host.appendChild(h('p.muted.small', { style: { marginTop: '8px' } }, nxt.stage.title + ' · ' + nxt.unit.title + ' · ~' + (nxt.lesson.minutes || 15) + ' min'));

    const hint = NL.stt.bestBrowserHint();
    if (hint && !s.settings.sttSeen) host.appendChild(h('div.notice', hint, ' Voice output still works here.'));
    else if (!T.hasDutchVoice() && T.supported()) host.appendChild(h('div.notice', 'No Dutch voice was found in this browser yet. Chrome and Edge include Dutch voices; on Windows you can add "Nederlands" under Settings → Time & language → Speech.'));

    if (NL.fluency) host.appendChild(NL.fluency.homeCard());

    /* Stages */
    host.appendChild(h('h2', { style: { marginTop: '32px' } }, 'Your path'));
    const grid = h('div.grid');
    for (const st of NL.content.stages) {
      if (st.hub) { // Stage 5: a hub (review, challenges, talk topics, vocabulary bank), open at every level
        const total = Object.keys(NL.content.vocab).length, known = NL.srs.knownWords();
        grid.appendChild(h('a.card.stage-card', { href: '#/fluency', 'aria-label': st.title },
          h('div.row.row-between', h('div.stage-code', st.cefr), h('span.pill', known + '/' + total + ' words')),
          h('h3', st.title), h('p.muted.small', st.blurb),
          h('div.progress', h('div.bar', { style: { width: U.pct(known, total) + '%' } }))));
        continue;
      }
      const unlocked = NL.game.isUnlocked(st.id);
      const p = lessonPct(st);
      const card = h('a.card.stage-card' + (unlocked ? '' : '.locked'), { href: unlocked ? '#/stage/' + st.id : '#/settings', 'aria-label': st.title + (unlocked ? '' : ' (locked)') },
        h('div.row.row-between', h('div.stage-code', st.cefr), h('span.pill' + (p.pct === 100 ? '.pill-ok' : ''), unlocked ? p.done + '/' + p.n : '\u{1F512}')),
        h('h3', st.title), h('p.muted.small', st.blurb),
        h('div.progress' + (p.pct === 100 ? '.ok' : ''), h('div.bar', { style: { width: p.pct + '%' } })));
      grid.appendChild(card);
    }
    host.appendChild(grid);

    /* Practice modes */
    host.appendChild(h('h2', { style: { marginTop: '32px' } }, 'Practice modes'));
    const modes = h('div.mode-grid');
    [['speed', '⏱️', 'Speed round', '60 s vocabulary'], ['sprint', '\u{1F3C3}', 'Conjugation sprint', '60 s verb forms'], ['listening', '\u{1F3A7}', 'Listening only', 'dictation + choose'], ['speaking', '\u{1F399}️', 'Speaking only', 'say the sentences'], ['freetalk', '\u{1F5E8}️', 'Free talk', 'topics + model answers']].forEach(([id, ico, name, sub]) => modes.appendChild(h('a.mode', { href: '#/mode/' + id }, h('span.ico', ico), h('b', name), h('span', sub))));
    modes.appendChild(h('a.mode', { href: '#/bank' }, h('span.ico', '\u{1F5C2}️'), h('b', 'Vocabulary bank'), h('span', 'browse by theme')));
    modes.appendChild(h('a.mode', { href: '#/challenge' }, h('span.ico', '\u{1F3C5}'), h('b', 'Weekly challenge'), h('span', 'a new goal every Monday')));
    host.appendChild(modes);

    /* Skills + streak calendar */
    const two = h('div.grid-2', { style: { marginTop: '32px' } });
    const sk = h('div.card', h('h3', 'Skills'));
    const skills = h('div.skills');
    const max = Math.max(50, ...Object.values(s.skills));
    for (const k of ['grammar', 'vocab', 'listening', 'speaking', 'reading', 'writing']) skills.appendChild(h('div.skill', h('span', k[0].toUpperCase() + k.slice(1)), h('div.progress', h('div.bar', { style: { width: U.pct(s.skills[k] || 0, max) + '%' } })), h('span.muted.small', String(s.skills[k] || 0))));
    sk.appendChild(skills);
    two.appendChild(sk);
    two.appendChild(h('div.card', h('h3', 'Streak calendar'), calendar(), h('p.muted.small', { style: { marginTop: '8px', marginBottom: 0 } }, 'Best streak: ' + s.streak.best + ' days · Dark = goal reached')));
    host.appendChild(two);

    const earned = Object.keys(s.badges).length;
    host.appendChild(h('div.card', { style: { marginTop: '16px' } }, h('div.row.row-between', h('h3', { style: { margin: 0 } }, 'Badges · ' + earned + '/' + NL.game.BADGES.length), h('a.btn.btn-sm', { href: '#/badges' }, 'See all')), h('div.row', { style: { marginTop: '8px' } }, NL.game.BADGES.filter((b) => s.badges[b.id]).slice(0, 8).map((b) => h('span', { title: b.name, style: { fontSize: '1.6rem' } }, b.icon)))));
  };

  function calendar() {
    const s = NL.state.get();
    const wrap = h('div.calendar');
    ['M', 'T', 'W', 'T', 'F', 'S', 'S'].forEach((d) => wrap.appendChild(h('div.dow', d)));
    const today = new Date();
    const start = new Date(today); start.setDate(today.getDate() - 34 - ((today.getDay() + 6) % 7));
    for (let i = 0; i < 42; i++) {
      const d = new Date(start); d.setDate(start.getDate() + i);
      if (d > today) break;
      const key = U.dateKey(d), log = s.dayLog[key];
      const cls = ['day']; if (log && log.xp > 0) cls.push('on'); if (log && log.xp >= s.dailyGoal) cls.push('goal'); if (key === U.today()) cls.push('today');
      wrap.appendChild(h('div', { class: cls.join(' '), title: key + (log ? ': ' + log.xp + ' XP' : '') }, String(d.getDate())));
    }
    return wrap;
  }

  /* ---------- Stage ---------- */
  V.stage = function (host, id) {
    const st = A.findStage(id);
    if (!st) return host.appendChild(h('p', 'Stage not found.'));
    if (st.hub && NL.fluency) return NL.fluency.hub(host);
    if (!NL.game.isUnlocked(id)) return host.appendChild(h('div.card', h('h2', st.title + ' is locked'), h('p', 'Pass the previous stage exam, take the placement test, or switch on "Unlock everything" in Settings.'), h('a.btn', { href: '#/settings' }, 'Settings')));
    const s = NL.state.get();
    const p = lessonPct(st);
    host.appendChild(h('div.eyebrow', 'Stage ' + st.code + ' · ' + st.cefr));
    host.appendChild(h('h1', st.title));
    host.appendChild(h('p.muted', st.blurb));
    host.appendChild(h('div.row.row-between.small', h('span', p.done + ' of ' + p.n + ' lessons'), h('span.muted', p.pct + '%')));
    host.appendChild(h('div.progress.progress-lg' + (p.pct === 100 ? '.ok' : ''), h('div.bar', { style: { width: p.pct + '%' } })));
    const list = h('div.unit-list', { style: { marginTop: '24px' } });
    st.units.forEach((u, i) => {
      const done = u.lessons.filter((l) => s.lessons[l.id] && s.lessons[l.id].done).length;
      list.appendChild(h('a.lesson-row' + (done === u.lessons.length ? '.done' : ''), { href: '#/unit/' + u.id }, h('span.num', String(i + 1)), h('span.t', h('b', u.title), h('span', u.theme + ' · ' + done + '/' + u.lessons.length + ' lessons' + (s.unitsReviewed[u.id] != null ? ' · review ' + s.unitsReviewed[u.id] + '%' : ''))), h('span', '›')));
    });
    host.appendChild(list);
    const examScore = s.exams[id];
    host.appendChild(h('div.card', { style: { marginTop: '24px' } }, h('h3', 'Stage exam'), h('p.muted', examScore != null ? 'Best score: ' + examScore + '%' + (examScore >= 70 ? ' · passed' : '') : 'Unlocks the next stage at 70%.'), h('a.btn' + (p.pct >= 50 ? '.btn-primary' : ''), { href: '#/exam/' + id }, examScore >= 70 ? 'Retake exam' : 'Take the exam')));
  };

  /* ---------- Unit ---------- */
  V.unit = function (host, id) {
    const f = A.findUnit(id);
    if (!f) return host.appendChild(h('p', 'Unit not found.'));
    const { stage, unit } = f;
    if (!NL.game.isUnlocked(stage.id)) return V.stage(host, stage.id);
    const s = NL.state.get();
    host.appendChild(h('div.eyebrow', h('a', { href: '#/stage/' + stage.id }, stage.title), ' · ' + unit.theme));
    host.appendChild(h('h1', unit.title));
    const list = h('div.unit-list');
    unit.lessons.forEach((l, i) => {
      const rec = s.lessons[l.id];
      list.appendChild(h('a.lesson-row' + (rec && rec.done ? '.done' : ''), { href: '#/lesson/' + l.id }, h('span.num', rec && rec.done ? '✓' : String(i + 1)), h('span.t', h('b', l.title), h('span', l.goal)), h('span.pill' + (rec && rec.best === 100 ? '.pill-ok' : ''), rec ? rec.best + '%' : (l.minutes || 15) + ' min')));
    });
    host.appendChild(list);
    const done = unit.lessons.filter((l) => s.lessons[l.id] && s.lessons[l.id].done).length;
    host.appendChild(h('div.card', { style: { marginTop: '24px' } }, h('h3', 'Unit review'), h('p.muted', 'A mixed session over the whole unit: ' + (s.unitsReviewed[id] != null ? 'best ' + s.unitsReviewed[id] + '%.' : 'about 20 exercises.')), h('a.btn' + (done === unit.lessons.length ? '.btn-primary' : ''), { href: '#/unit-review/' + id }, 'Start unit review')));
  };

  /* ---------- Grammar reference ---------- */
  V.grammar = function (host, id) {
    if (id && NL.content.grammar[id]) return V.grammarEntry(host, NL.content.grammar[id]);
    host.appendChild(h('h1', 'Grammar reference'));
    host.appendChild(h('p.muted', 'Every rule in the course, searchable. Tap Dutch examples to hear them.'));
    const inp = h('input.input', { type: 'search', placeholder: 'Search rules (e.g. word order, het, perfect)', 'aria-label': 'Search grammar' });
    host.appendChild(h('div.search', inp));
    const list = h('div.ref-list');
    host.appendChild(list);
    const all = Object.values(NL.content.grammar).sort((a, b) => a.stage - b.stage || a.title.localeCompare(b.title));
    function render() {
      U.clear(list);
      const q = U.normalize(inp.value);
      let lastStage = null;
      for (const g of all) {
        const hay = U.normalize(g.title + ' ' + (g.tags || []).join(' ') + ' ' + g.body.map((b) => b.p || b.h || '').join(' '));
        if (q && !hay.includes(q)) continue;
        if (g.stage !== lastStage) { lastStage = g.stage; const st = NL.content.stages.find((s) => +s.code === g.stage); list.appendChild(h('div.eyebrow', { style: { marginTop: '16px' } }, st ? st.title : 'Stage ' + g.stage)); }
        list.appendChild(h('a.ref-row', { href: '#/grammar/' + g.id }, h('span.t', h('b', g.title), h('div.muted.small', (g.tags || []).join(' · '))), NL.dict.strengthEl(NL.srs.strength(g.id)), h('span', '›')));
      }
      if (!list.children.length) list.appendChild(h('p.muted', 'No rules match.'));
    }
    inp.addEventListener('input', U.debounce(render, 120));
    render();
  };
  V.grammarEntry = function (host, g) {
    const st = NL.content.stages.find((s) => +s.code === g.stage);
    host.appendChild(h('div.eyebrow', h('a', { href: '#/grammar' }, 'Grammar'), st ? ' · ' + st.title : ''));
    host.appendChild(h('h1', g.title));
    const card = h('div.card');
    NL.lesson.renderBlocks(g.body, card);
    host.appendChild(card);
    const lessons = A.allLessons().filter((x) => (x.lesson.grammar || []).includes(g.id));
    if (lessons.length) host.appendChild(h('p.muted.small', 'Taught in: ', lessons.map((x, i) => [i ? ' · ' : null, h('a', { href: '#/lesson/' + x.lesson.id }, x.lesson.title)])));
    const exs = NL.gen.exercisesForGrammar(g.id);
    if (exs.length) host.appendChild(h('button.btn.btn-primary', { type: 'button', onclick: () => { U.clear(host); NL.session.run({ host, exercises: U.shuffle(exs).slice(0, 10), mode: 'mode', title: g.title + ' · drill', grammar: [g.id], lessonVocab: NL.review.seenVocab(20), requeue: true, onQuit: () => V.grammarEntry(U.clear(host), g), onDone: () => { location.hash = '#/grammar/' + g.id; NL.app.render(); } }); } }, 'Drill this rule (' + Math.min(10, exs.length) + ' exercises)'));
  };

  /* ---------- Dictionary ---------- */
  V.dictionary = function (host) {
    host.appendChild(h('h1', 'Dictionary'));
    const all = Object.values(NL.content.vocab);
    const known = NL.srs.knownWords();
    host.appendChild(h('p.muted', all.length + ' entries · ' + known + ' known · tap an entry for details and audio.'));
    const inp = h('input.input', { type: 'search', placeholder: 'Search Dutch or English', 'aria-label': 'Search dictionary' });
    host.appendChild(h('div.search', inp));
    const tabs = h('div.tabs');
    let filter = 'all';
    [['all', 'All'], ['noun', 'Nouns'], ['verb', 'Verbs'], ['adj', 'Adjectives'], ['phrase', 'Phrases'], ['learning', 'Learning'], ['known', 'Known']].forEach(([k, label]) => { const b = h('button' + (k === 'all' ? '.active' : ''), { type: 'button' }, label); b.addEventListener('click', () => { filter = k; U.$$('button', tabs).forEach((x) => x.classList.toggle('active', x === b)); render(); }); tabs.appendChild(b); });
    host.appendChild(tabs);
    const list = h('div.ref-list');
    host.appendChild(list);
    const more = h('button.btn.btn-block', { type: 'button' }, 'Show more');
    let limit = 60;
    more.addEventListener('click', () => { limit += 100; render(); });
    host.appendChild(more);
    function render() {
      U.clear(list);
      const q = U.normalize(inp.value);
      let rows = all.filter((v) => {
        if (filter === 'noun' || filter === 'verb' || filter === 'adj' || filter === 'phrase') { if (v.pos !== filter) return false; }
        else if (filter === 'learning') { const st = NL.srs.strength(v.id); if (st === 0 || st === 4) return false; }
        else if (filter === 'known') { if (NL.srs.strength(v.id) !== 4) return false; }
        if (!q) return true;
        return U.normalize(v.nl).includes(q) || U.normalize(v.en).includes(q) || (v.plural && U.normalize(v.plural).includes(q));
      });
      rows.sort((a, b) => (q ? (U.normalize(a.nl).startsWith(q) ? 0 : 1) - (U.normalize(b.nl).startsWith(q) ? 0 : 1) : 0) || a.nl.localeCompare(b.nl, 'nl'));
      more.hidden = rows.length <= limit;
      rows.slice(0, limit).forEach((v) => {
        const r = h('div.dict-row', { tabindex: '0', role: 'button' }, h('div', h('div.hw', v.pos === 'noun' && v.gender ? h('span.muted.small', v.gender + ' ') : null, v.nl), h('div.en', v.en)), NL.dict.strengthEl(NL.srs.strength(v.id)));
        const open = () => NL.dict.popup(v.nl);
        r.addEventListener('click', open);
        r.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(); });
        list.appendChild(r);
      });
      if (!rows.length) list.appendChild(h('p.muted', 'No matches.'));
    }
    inp.addEventListener('input', U.debounce(render, 120));
    render();
  };

  /* ---------- Badges ---------- */
  V.badges = function (host) {
    const s = NL.state.get();
    host.appendChild(h('h1', 'Badges'));
    const grid = h('div.badges');
    NL.game.BADGES.forEach((b) => grid.appendChild(h('div.badge' + (s.badges[b.id] ? '' : '.off'), h('div.ico', b.icon), h('b', b.name), h('span', b.desc), s.badges[b.id] ? h('div.muted.small', s.badges[b.id]) : null)));
    host.appendChild(grid);
  };

  /* ---------- Settings ---------- */
  V.settings = function (host) {
    const s = NL.state.get();
    host.appendChild(h('h1', 'Settings'));
    const card = h('div.card');
    const setting = (label, desc, control) => card.appendChild(h('div.setting', h('div', h('label', label), desc ? h('span.desc', desc) : null), control));
    const sw = (val, onChange) => { const b = h('button.switch', { type: 'button', role: 'switch', 'aria-checked': String(!!val) }); b.addEventListener('click', () => { const v = b.getAttribute('aria-checked') !== 'true'; b.setAttribute('aria-checked', String(v)); onChange(v); }); return b; };
    const seg = (options, val, onChange) => { const w = h('div.seg'); options.forEach(([k, label]) => { const b = h('button' + (k === val ? '.active' : ''), { type: 'button' }, label); b.addEventListener('click', () => { U.$$('button', w).forEach((x) => x.classList.toggle('active', x === b)); onChange(k); }); w.appendChild(b); }); return w; };

    // Voice
    const voiceSel = h('select', { 'aria-label': 'Dutch voice' });
    function fillVoices() {
      U.clear(voiceSel);
      const list = T.voices();
      if (!list.length) { voiceSel.appendChild(h('option', { value: '' }, 'No Dutch voice found')); return; }
      list.forEach((v) => voiceSel.appendChild(h('option', { value: v.voiceURI, selected: (s.settings.voice ? s.settings.voice === v.voiceURI : T.current() === v) || null }, v.name + ' (' + v.lang + ')' + (v.localService ? '' : ' · online'))));
    }
    fillVoices();
    U.on('voices', fillVoices);
    voiceSel.addEventListener('change', () => { s.settings.voice = voiceSel.value; NL.state.save(); T.speak('Hallo! Ik ben je nieuwe stem.'); });
    setting('Dutch voice', T.supported() ? 'Best available nl-NL voice is chosen automatically.' : 'Speech synthesis is not supported in this browser.', h('div.row', voiceSel, h('button.btn.btn-sm', { type: 'button', onclick: () => T.speak('Goedemiddag, hoe gaat het met je?') }, '▶ Test')));
    setting('Speech speed', 'Slow is useful for dictation.', seg([['slow', 'Slow'], ['normal', 'Normal'], ['fast', 'Fast']], s.settings.rate, (v) => { s.settings.rate = v; NL.state.save(); T.speak('Dit is de snelheid van de stem.'); }));
    setting('Voice input', NL.stt.supported() ? 'Speech recognition is available. Allow microphone access when asked.' : (NL.stt.bestBrowserHint() || 'Not available.') + ' Speaking exercises fall back to self-grading.', h('span.pill' + (NL.stt.supported() ? '.pill-ok' : '.pill-warn'), NL.stt.supported() ? 'available' : 'unavailable'));
    setting('Theme', null, seg([['auto', 'Auto'], ['light', 'Light'], ['dark', 'Dark']], s.settings.theme, (v) => { s.settings.theme = v; NL.state.save(); NL.app.applyTheme(); }));
    setting('Sound effects', null, sw(!s.settings.mute, (v) => { s.settings.mute = !v; NL.state.save(); if (v) NL.sfx.correct(); }));
    setting('Show translations', 'English hints under fill-in and speaking exercises.', sw(s.settings.showTranslations, (v) => { s.settings.showTranslations = v; NL.state.save(); }));
    const goal = h('input', { type: 'number', min: '10', max: '1000', step: '10', value: String(s.dailyGoal), 'aria-label': 'Daily XP goal' });
    goal.addEventListener('change', () => { s.dailyGoal = U.clamp(parseInt(goal.value, 10) || 50, 10, 1000); goal.value = String(s.dailyGoal); NL.state.save(); });
    setting('Daily goal (XP)', 'A lesson is roughly 150–250 XP.', goal);
    setting('Unlock everything', 'Skip the stage exams. You are an adult; go where you like.', sw(s.settings.unlockAll, (v) => { s.settings.unlockAll = v; NL.state.save(); }));
    setting('Placement test', 'Find your level and unlock stages accordingly.', h('a.btn.btn-sm', { href: '#/placement' }, 'Take the test'));
    host.appendChild(card);

    // Progress
    const data = h('div.card', h('h3', 'Your progress data'), h('p.muted.small', 'Everything is stored in this browser (localStorage). Export a backup before switching devices or browsers, then import it there.'));
    const file = h('input', { type: 'file', accept: 'application/json,.json', hidden: true });
    file.addEventListener('change', async () => { if (!file.files[0]) return; try { const txt = await U.readFile(file.files[0]); NL.state.importJSON(txt); U.toast('Progress imported', 'ok'); NL.app.render(); } catch (e) { alert('Import failed: ' + e.message); } });
    data.appendChild(h('div.row',
      h('button.btn.btn-primary', { type: 'button', onclick: () => U.download('nederlands-nu-progress-' + U.today() + '.json', NL.state.exportJSON()) }, '⬇ Export progress'),
      h('button.btn', { type: 'button', onclick: () => file.click() }, '⬆ Import progress'),
      h('button.btn.btn-ghost', { type: 'button', onclick: () => { if (confirm('Reset ALL progress? This cannot be undone. Export first if you want a backup.')) { NL.state.reset(); U.toast('Progress reset'); NL.app.render(); } } }, 'Reset'),
      file));
    host.appendChild(data);

    // Keyboard + about
    host.appendChild(h('div.card', h('h3', 'Keyboard shortcuts'), h('ul.learn-list', h('li', h('span.kbd', 'Enter'), ' check answer / continue'), h('li', h('span.kbd', 'Space'), ' replay the audio (outside a text box)'), h('li', h('span.kbd', '← → ↑ ↓'), ' or ', h('span.kbd', '1'), '–', h('span.kbd', '4'), ' choose an option'), h('li', h('span.kbd', 'Esc'), ' close a word popup'))));
    const check = h('div.card', h('h3', 'Content check'), h('p.muted.small', 'Runs the content validator on all stages (ids, answers, dictionary links, audio strings).'));
    const out = h('pre.report', { hidden: true });
    check.appendChild(h('button.btn', { type: 'button', onclick: () => { const r = NL.validate(); out.hidden = false; out.textContent = (r.ok ? 'OK — no errors.' : r.errors.length + ' error(s):\n' + r.errors.join('\n')) + '\n\n' + r.warnings.length + ' warning(s)' + (r.warnings.length ? ':\n' + r.warnings.slice(0, 40).join('\n') : '') + '\n\n' + JSON.stringify(r.counts); } }, 'Check content'));
    check.appendChild(out);
    host.appendChild(check);
    host.appendChild(h('p.muted.small', { style: { marginTop: '16px' } }, 'Nederlands Nu · best experienced in Chrome or Edge (Dutch voices + speech recognition). Firefox and Safari: voice output works, voice input falls back to self-grading. ', h('a', { href: '#/about' }, 'About this course and your data')));
  };

  /* ---------- About ---------- */
  V.about = function (host) {
    const C = NL.content;
    let lessons = 0, exercises = 0;
    for (const st of C.stages) for (const u of st.units) for (const l of u.lessons) { lessons++; exercises += (l.practice || []).reduce((n, e) => n + (e.type === 'auto' ? e.n : 1), 0) + (l.test || []).length; }
    host.appendChild(h('h1', 'Over deze cursus'));
    host.appendChild(h('div.card', h('h3', 'What this is'),
      h('p', 'Nederlands Nu is a self-contained Dutch course for English speakers, from absolute beginner to CEFR B2: explicit grammar first, then varied practice, with voice output and voice input. It runs entirely in your browser; there is no server and no account.'),
      h('p.muted.small', C.stages.length + ' stages · ' + lessons + ' lessons · ' + exercises + ' exercises · ' + Object.keys(C.vocab).length + ' dictionary entries · ' + Object.keys(C.grammar).length + ' grammar rules · ' + (C.talk || []).length + ' speaking topics')));
    host.appendChild(h('div.card', h('h3', 'Your data and privacy'),
      h('p', 'Everything you do here (progress, XP, review cards, settings) is stored only in this browser, in localStorage. Nothing is sent anywhere. Closing the tab keeps it; clearing site data or using a private window loses it. Use Settings → Export progress to keep a backup or move to another device.'),
      h('p', 'Voice output uses your browser’s built-in speech synthesis. Voice input uses your browser’s speech recognition; in Chrome and Edge that service is provided by the browser vendor and audio may be processed on their servers while you hold the microphone button. If you prefer not to use it, speaking exercises can be self-graded instead.'),
      h('p', 'The site sets no cookies and uses no analytics. When served over HTTPS it installs a small service worker so the course keeps working offline.')));
    host.appendChild(h('div.card', h('h3', 'Content'),
      h('p', 'All explanations and exercises were written for this course. Pedagogical order follows mainstream NT2 practice and the CEFR can-do descriptors. Dutch is modern Netherlands Dutch; Belgian variants are pointed out where they matter. Facts about institutions, exams and rules were correct to the author’s knowledge when written and change over time: always check the current source (DUO, the Belastingdienst, your gemeente, the exam board) before acting on them.'),
      h('p', 'Found a mistake? Settings → Check content runs the built-in validator; wording errors are best reported to the repository that hosts this course.')));
    host.appendChild(h('div.card', h('h3', 'Best browser'),
      h('p', 'Chrome or Edge on desktop or Android give Dutch voices and speech recognition. Safari and Firefox play Dutch audio but do not offer recognition; speaking exercises then use self-grading.')));
    host.appendChild(h('div.row', { style: { marginTop: '16px' } }, h('a.btn', { href: '#/settings' }, 'Back to settings'), h('a.btn', { href: '#/home' }, 'Home')));
  };
})();
