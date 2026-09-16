/* Review sessions, unit reviews, stage exams, placement test, practice modes */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h, A = NL.contentApi, T = NL.tts;
  const R = (NL.review = {});

  /** Vocabulary the learner has met (fallback: first lessons) */
  R.seenVocab = function (min) {
    const cards = NL.state.get().srs.cards;
    let ids = Object.values(cards).filter((c) => c.kind === 'vocab' && c.seen > 0 && NL.content.vocab[c.id]).map((c) => c.id);
    if (ids.length < (min || 12)) {
      const all = A.allLessons();
      for (const x of all) { ids = U.uniq(ids.concat(x.lesson.vocab || [])); if (ids.length >= 40) break; }
    }
    return ids;
  };
  R.seenVerbs = () => R.seenVocab(30).filter((id) => { const v = NL.content.vocab[id]; return v && v.pos === 'verb' && v.forms && v.forms.pres && v.forms.pres.length >= 3; });

  /** Exercises for the due queue (mixed vocab + grammar). Wrong-prone items get more varied types. */
  R.dueExercises = function (max) {
    const due = U.shuffle(NL.srs.due());
    const pool = R.seenVocab(20);
    const out = [];
    for (const c of due) { const ex = NL.gen.forCard(c, pool); if (ex) out.push(ex); if (out.length >= (max || 20)) break; }
    if (out.length < 5) { for (const c of NL.srs.weakest(8, 'vocab')) { if (due.includes(c)) continue; const ex = NL.gen.forCard(c, pool); if (ex) out.push(ex); } }
    return out;
  };

  function summary(host, r, opts) {
    U.clear(host);
    const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
    host.appendChild(h('div.card', { style: { textAlign: 'center' } },
      h('div.eyebrow', opts.title || 'Session complete'),
      h('div.summary-score', pct + '%'),
      h('p.muted', r.correct + ' of ' + r.total + ' correct · +' + r.xp + ' XP · ' + Math.max(1, Math.round(r.ms / 60000)) + ' min'),
      opts.note ? h('p', opts.note) : null,
    ));
    if (r.mistakes && r.mistakes.length) {
      const card = h('div.card', h('h3', 'Look at these again'));
      const seen = new Set();
      r.mistakes.forEach(({ ex, result }) => { const key = result.correctText || ex.q || ex.prompt; if (!key || seen.has(key)) return; seen.add(key); card.appendChild(h('div.ex-item', h('div', result.correctNl ? NL.ui.dutch(result.correctText) : result.correctText || ex.q || ex.prompt), h('div.en', (result.explain || '').split('\n')[0]))); });
      host.appendChild(card);
    }
    const row = h('div.row', { style: { marginTop: '24px' } });
    (opts.actions || [['Home', '#/home']]).forEach(([label, href, primary]) => row.appendChild(h('a.btn' + (primary ? '.btn-primary' : ''), { href }, label)));
    host.appendChild(row);
    if (pct >= 70) NL.lesson.confetti();
    window.scrollTo(0, 0);
  }

  /* ---- Daily review ---- */
  R.start = function (host) {
    const exs = R.dueExercises(20);
    if (!exs.length) {
      U.clear(host);
      host.appendChild(h('div.card', h('h2', 'Nothing due right now'), h('p', 'Your review queue is empty. Finish a lesson to add new words and rules, or try a practice mode.'), h('a.btn.btn-primary', { href: '#/home' }, 'Home')));
      return;
    }
    NL.session.run({ host, exercises: exs, mode: 'review', title: 'Review · ' + U.plural(exs.length, 'item'), lessonVocab: R.seenVocab(20), onQuit: () => { location.hash = '#/home'; }, onDone: (r) => summary(host, r, { title: 'Review complete', note: NL.srs.dueCount() ? U.plural(NL.srs.dueCount(), 'item') + ' still due today.' : 'All caught up for today.', actions: NL.srs.dueCount() ? [['Review more', '#/review/go', true], ['Home', '#/home']] : [['Home', '#/home', true]] }) });
  };

  /* ---- Unit review ---- */
  R.unitExercises = function (unit) {
    const hand = [];
    const vocab = [];
    for (const l of unit.lessons) { vocab.push(...(l.vocab || [])); for (const e of (l.practice || []).concat(l.test || [])) if (e.type !== 'auto' && e.type !== 'write') hand.push(e); }
    const exs = (unit.review || []).slice();
    exs.push(...U.sample(hand, Math.max(0, 14 - exs.length)));
    const pool = U.uniq(vocab);
    exs.push(...NL.gen.expand({ n: 6, kinds: ['article', 'tr-en-nl', 'listen', 'plural', 'conj', 'mc-meaning'] }, pool, R.seenVocab(20)));
    return U.shuffle(exs).slice(0, 22);
  };
  R.unit = function (unitId, host) {
    const f = A.findUnit(unitId);
    if (!f) return;
    const exs = R.unitExercises(f.unit);
    const grammar = U.uniq(f.unit.lessons.flatMap((l) => l.grammar || []));
    NL.session.run({ host, exercises: exs, mode: 'review', title: f.unit.title + ' · Unit review', lessonVocab: A.vocabUpTo(f.unit.lessons[f.unit.lessons.length - 1].id), grammar, requeue: true, onQuit: () => { location.hash = '#/unit/' + unitId; }, onDone: (r) => { const s = NL.state.get(); const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0; s.unitsReviewed[unitId] = Math.max(s.unitsReviewed[unitId] || 0, pct); NL.game.addXP(40); summary(host, r, { title: 'Unit review complete', actions: [['Back to stage', '#/stage/' + f.stage.id, true], ['Home', '#/home']] }); } });
  };

  /* ---- Stage exam ---- */
  R.examExercises = function (stage) {
    let exs = (stage.exam || []).slice();
    if (exs.length < 20) {
      const hand = [];
      for (const u of stage.units) for (const l of u.lessons) for (const e of (l.test || []).concat(l.practice || [])) if (!['auto', 'write', 'freespeak'].includes(e.type)) hand.push(e);
      exs.push(...U.sample(hand, 24 - exs.length));
      exs.push(...NL.gen.expand({ n: 6, kinds: ['article', 'tr-en-nl', 'listen', 'conj'] }, A.vocabIdsOfStage(stage), []));
    }
    return U.shuffle(exs).slice(0, 30);
  };
  R.exam = function (stageId, host) {
    const stage = A.findStage(stageId);
    if (!stage) return;
    U.clear(host);
    const best = NL.state.get().exams[stageId];
    host.appendChild(h('div.card',
      h('div.eyebrow', stage.title),
      h('h1', 'Stage exam'),
      h('p', 'About 30 questions covering the whole stage: grammar, vocabulary, listening, reading and speaking. You need 70% to unlock the next stage. You can retake it as often as you like.'),
      best != null ? h('p.muted', 'Best score so far: ' + best + '%') : null,
      h('div.row', h('button.btn.btn-primary.btn-lg', { type: 'button', onclick: () => run() }, 'Start exam'), h('a.btn', { href: '#/stage/' + stageId }, 'Not now')),
    ));
    function run() {
      const exs = R.examExercises(stage);
      NL.session.run({ host, exercises: exs, mode: 'exam', title: stage.title + ' · Exam', lessonVocab: A.vocabIdsOfStage(stage), grammar: [], onQuit: () => { location.hash = '#/stage/' + stageId; }, onDone: (r) => {
        const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
        NL.game.examDone(stageId, pct);
        const next = NL.content.stages[NL.content.stages.indexOf(stage) + 1];
        summary(host, r, { title: pct >= 70 ? 'Geslaagd! Exam passed' : 'Not yet — try again soon', note: pct >= 70 ? (next ? next.title + ' is now unlocked.' : 'You have completed the whole course.') : 'You need 70%. Review the units where you made mistakes and take the exam again.', actions: pct >= 70 && next ? [[next.title + ' →', '#/stage/' + next.id, true], ['Home', '#/home']] : [['Back to stage', '#/stage/' + stageId, true], ['Home', '#/home']] });
      } });
    }
  };

  /* ---- Placement test ---- */
  R.placement = function (host) {
    U.clear(host);
    const stages = NL.content.stages.filter((s) => ['s1', 's2', 's3', 's4'].includes(s.id) && s.units.some((u) => u.lessons.some((l) => (l.test || []).length)));
    host.appendChild(h('div.card', h('h1', 'Placement test'), h('p', 'Around ' + stages.length * 6 + ' questions from A1 to B2, easiest first. Each stage where you score 70% or more is unlocked, together with the stage after it. You can also unlock everything manually in Settings.'), h('div.row', h('button.btn.btn-primary.btn-lg', { type: 'button', onclick: run }, 'Start'), h('a.btn', { href: '#/settings' }, 'Cancel'))));
    function run() {
      const exs = [];
      for (const st of stages) {
        const hand = [];
        for (const u of st.units) for (const l of u.lessons) for (const e of l.test || []) if (['mc', 'fill', 'build', 'conj', 'article', 'translate', 'fix', 'listen'].includes(e.type)) hand.push(Object.assign({ _stage: st.id }, e));
        exs.push(...U.sample(hand, 6));
      }
      NL.session.run({ host, exercises: exs, mode: 'exam', title: 'Placement test', lessonVocab: [], onQuit: () => { location.hash = '#/settings'; }, onDone: (r) => {
        const s = NL.state.get();
        const per = {};
        r.results.forEach(({ ex, result }) => { const p = (per[ex._stage] = per[ex._stage] || { n: 0, ok: 0 }); p.n++; if (result.ok) p.ok++; });
        let unlockedTo = null;
        for (const st of stages) { const p = per[st.id]; if (p && p.n && p.ok / p.n >= 0.7) { s.unlocked[st.id] = true; const nx = NL.content.stages[NL.content.stages.indexOf(st) + 1]; if (nx) s.unlocked[nx.id] = true; unlockedTo = nx || st; } else break; }
        NL.state.save();
        const lines = stages.map((st) => { const p = per[st.id] || { n: 0, ok: 0 }; return st.cefr + ': ' + p.ok + '/' + p.n; }).join(' · ');
        summary(host, r, { title: 'Placement result', note: (unlockedTo ? 'Unlocked up to ' + unlockedTo.title + '. ' : 'Start with A1: the foundations will pay off quickly. ') + lines, actions: [['Home', '#/home', true]] });
      } });
    }
  };

  /* ---- Practice modes ---- */
  R.listening = function (host) {
    const pool = R.seenVocab(20);
    const exs = NL.gen.expand({ n: 12, kinds: ['listen', 'dictation'] }, pool, pool);
    for (const x of A.allLessons()) for (const e of x.lesson.practice || []) if ((e.type === 'dictation' || e.type === 'listen') && Math.random() < 0.3 && exs.length < 16) exs.push(e);
    NL.session.run({ host, exercises: U.shuffle(exs), mode: 'mode', title: 'Listening only', lessonVocab: pool, onQuit: () => { location.hash = '#/home'; }, onDone: (r) => summary(host, r, { title: 'Listening session complete', actions: [['Again', '#/mode/listening', true], ['Home', '#/home']] }) });
  };
  R.speaking = function (host) {
    const pool = R.seenVocab(20);
    const exs = [];
    for (const x of A.allLessons()) { if (!NL.state.get().lessons[x.lesson.id]) continue; for (const e of (x.lesson.practice || []).concat(x.lesson.test || [])) if (e.type === 'speak') exs.push(e); }
    exs.push(...NL.gen.expand({ n: 6, kinds: ['speak'] }, pool, pool));
    NL.session.run({ host, exercises: U.shuffle(exs).slice(0, 10), mode: 'mode', title: 'Speaking only', lessonVocab: pool, onQuit: () => { location.hash = '#/home'; }, onDone: (r) => summary(host, r, { title: 'Speaking session complete', actions: [['Again', '#/mode/speaking', true], ['Home', '#/home']] }) });
  };

  /** Timed speed round: 60 seconds of meaning multiple choice */
  R.speed = function (host) {
    U.clear(host);
    const pool = R.seenVocab(30);
    if (pool.length < 8) { host.appendChild(h('div.card', h('p', 'Learn a few lessons first, then come back for the speed round.'), h('a.btn', { href: '#/home' }, 'Home'))); return; }
    let time = 60, score = 0, n = 0, streak = 0, timer = null, ended = false;
    const timerEl = h('div.timer', '60'), scoreEl = h('div.stat', h('div.n', '0'), h('div.l', 'correct'));
    const top = h('div.row.row-between', h('div.stat', timerEl, h('div.l', 'seconds')), scoreEl, h('button.btn-icon', { type: 'button', 'aria-label': 'Stop', onclick: () => end() }, '×'));
    const q = h('div');
    host.appendChild(top); host.appendChild(h('div.card', { style: { marginTop: '16px' } }, q));
    timer = setInterval(() => { time--; timerEl.textContent = String(time); if (time <= 5) NL.sfx.tick(); if (time <= 0) end(); }, 1000);
    function ask() {
      U.clear(q);
      const id = U.pick(pool), v = NL.content.vocab[id];
      const toNl = Math.random() < 0.4;
      const others = U.sample(pool.filter((x) => x !== id), 3).map((x) => NL.content.vocab[x]);
      const opts = U.shuffle([v].concat(others));
      q.appendChild(h('div.ex-nl', { style: { textAlign: 'center' } }, toNl ? h('span', v.en) : T.say(NL.gen.display(v))));
      if (!toNl) T.speak(NL.gen.display(v));
      const list = h('div.options');
      opts.forEach((o, i) => {
        const b = h('button.opt' + (toNl ? '.nl' : ''), { type: 'button' }, h('span.k', String(i + 1)), toNl ? NL.gen.display(o) : o.en);
        b.addEventListener('click', () => answer(o === v, b, list));
        list.appendChild(b);
      });
      q.appendChild(list);
      q._list = list; q._opts = opts; q._v = v;
    }
    function answer(ok, b, list) {
      if (ended) return;
      n++;
      U.$$('button', list).forEach((x) => (x.disabled = true));
      b.classList.add(ok ? 'correct' : 'wrong');
      if (ok) { score++; streak++; NL.sfx.correct(); NL.srs.review(q._v.id, 4, 'vocab'); }
      else { streak = 0; NL.sfx.wrong(); NL.srs.review(q._v.id, 1, 'vocab'); U.$$('button', list).forEach((x, i) => { if (q._opts[i] === q._v) x.classList.add('correct'); }); }
      scoreEl.firstChild.textContent = String(score);
      setTimeout(ask, ok ? 250 : 900);
    }
    function end() {
      if (ended) return; ended = true; clearInterval(timer);
      const xp = score * 4;
      NL.game.addXP(xp);
      const s = NL.state.get(); s.stats.answers += n; s.stats.correct += score;
      NL.state.save();
      summary(host, { total: n, correct: score, xp, ms: 60000, mistakes: [] }, { title: 'Speed round', note: score >= 20 ? 'Snel! Fast and accurate.' : 'Keep going: speed comes with repetition.', actions: [['Again', '#/mode/speed', true], ['Home', '#/home']] });
    }
    host.addEventListener('keydown', (e) => { if (/^[1-4]$/.test(e.key) && q._list) { const b = U.$$('button', q._list)[+e.key - 1]; if (b && !b.disabled) b.click(); } });
    ask();
  };

  /** Conjugation sprint: 60 seconds of typed verb forms */
  R.sprint = function (host) {
    U.clear(host);
    const verbs = R.seenVerbs();
    if (verbs.length < 4) { host.appendChild(h('div.card', h('p', 'You need a few verbs first. Finish the A1 verb lessons and come back.'), h('a.btn', { href: '#/home' }, 'Home'))); return; }
    const PR = ['ik', 'jij', 'hij', 'wij', 'jullie', 'zij', 'u'];
    let time = 60, score = 0, n = 0, timer = null, ended = false;
    const timerEl = h('div.timer', '60'), scoreEl = h('div.stat', h('div.n', '0'), h('div.l', 'correct'));
    host.appendChild(h('div.row.row-between', h('div.stat', timerEl, h('div.l', 'seconds')), scoreEl, h('button.btn-icon', { type: 'button', 'aria-label': 'Stop', onclick: () => end() }, '×')));
    const card = h('div.card', { style: { marginTop: '16px' } });
    host.appendChild(card);
    const usePast = NL.state.get().lessons['s2u1l3'] ? true : false;
    timer = setInterval(() => { time--; timerEl.textContent = String(time); if (time <= 0) end(); }, 1000);
    let cur = null;
    function ask() {
      U.clear(card);
      const v = NL.content.vocab[U.pick(verbs)], pr = U.pick(PR);
      const past = usePast && v.forms.past && v.forms.past[0] && Math.random() < 0.4;
      const ans = past ? (['wij', 'jullie', 'zij'].includes(pr) ? (v.forms.past[1] || v.forms.past[0]) : v.forms.past[0]) : NL.gen.presForm(v, pr);
      cur = { v, pr, ans };
      card.appendChild(h('div.ex-type', past ? 'simple past' : 'present'));
      card.appendChild(h('div.ex-q', h('span.nl', { style: { fontSize: '1.4rem' } }, v.nl), h('span.muted', ' (' + v.en + ')')));
      const inp = h('input.input', { type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Verb form' });
      card.appendChild(h('div.fill-line', h('span', pr), inp));
      const fb = h('div.small', { style: { minHeight: '1.5em' } });
      card.appendChild(fb);
      inp.focus();
      inp.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' || ended || !inp.value.trim()) return;
        n++;
        const ok = NL.checker.norm(inp.value) === NL.checker.norm(ans);
        inp.disabled = true; inp.classList.add(ok ? 'ok' : 'bad');
        if (ok) { score++; NL.sfx.correct(); fb.textContent = '✓'; NL.srs.review(v.id, 4, 'vocab'); }
        else { NL.sfx.wrong(); fb.appendChild(h('span', { style: { color: 'var(--bad)' } }, pr + ' ' + ans)); NL.srs.review(v.id, 1, 'vocab'); }
        scoreEl.firstChild.textContent = String(score);
        setTimeout(ask, ok ? 300 : 1100);
      });
    }
    function end() {
      if (ended) return; ended = true; clearInterval(timer);
      const xp = score * 5;
      NL.game.addXP(xp);
      const s = NL.state.get(); s.stats.answers += n; s.stats.correct += score;
      NL.state.save();
      summary(host, { total: n, correct: score, xp, ms: 60000, mistakes: [] }, { title: 'Conjugation sprint', actions: [['Again', '#/mode/sprint', true], ['Home', '#/home']] });
    }
    ask();
  };

  /** Free talk: pick a topic, answer prompts by voice, compare with model answers */
  R.freetalk = function (host, topicId) {
    const topics = NL.content.talk || [];
    U.clear(host);
    if (!topicId) {
      host.appendChild(h('h1', 'Free talk'));
      host.appendChild(h('p.muted', 'Pick a topic. You get a few prompts, answer each one out loud, then compare with a model answer.'));
      const grid = h('div.mode-grid');
      topics.forEach((t) => grid.appendChild(h('a.mode', { href: '#/mode/freetalk/' + t.id }, h('span.ico', t.icon || '\u{1F5E8}️'), h('b', t.title), h('span', t.level + ' · ' + U.plural(t.prompts.length, 'prompt')))));
      host.appendChild(grid);
      return;
    }
    const t = topics.find((x) => x.id === topicId);
    if (!t) return R.freetalk(host);
    const exs = t.prompts.map((p) => ({ type: 'freespeak', prompt: p.prompt, model: p.model, modelEn: p.modelEn, hints: p.hints }));
    NL.session.run({ host, exercises: exs, mode: 'mode', title: 'Free talk · ' + t.title, lessonVocab: [], onQuit: () => { location.hash = '#/mode/freetalk'; }, onDone: (r) => summary(host, r, { title: t.title, note: 'Speaking practice counts double: every prompt you answered out loud earned a voice bonus.', actions: [['Another topic', '#/mode/freetalk', true], ['Home', '#/home']] }) });
  };
})();
