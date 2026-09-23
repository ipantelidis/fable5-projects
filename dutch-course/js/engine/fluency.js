/* Stage 5 — Fluency and maintenance: weekly challenges, themed vocabulary bank, fluency hub.
   Data lives in js/content/stage5.js (talk topics, challenges, bank groups) and js/content/stage5-bank.js (bank words). */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h;
  const F = (NL.fluency = {});

  /* ------------------------------------------------------------------ weeks */
  const EPOCH_MONDAY = '2024-01-01'; // a Monday; challenge rotation counts weeks from here
  /** Monday (YYYY-MM-DD) of the week containing `dateKey` */
  F.monday = function (dateKey) {
    dateKey = dateKey || U.today();
    const dow = new Date(dateKey + 'T12:00:00').getDay(); // 0 = Sunday
    return U.addDays(dateKey, -((dow + 6) % 7));
  };
  F.weekDates = function (dateKey) { const m = F.monday(dateKey); return [0, 1, 2, 3, 4, 5, 6].map((i) => U.addDays(m, i)); };
  F.weekIndex = function (dateKey) { return Math.round(U.daysBetween(EPOCH_MONDAY, F.monday(dateKey)) / 7); };

  /* ------------------------------------------------------------- challenges */
  F.GOAL_KINDS = ['xp', 'answers', 'days', 'voice', 'lessons', 'reviews', 'perfect', 'bank', 'accuracy'];
  const GOAL_LABEL = {
    xp: (g) => 'Earn ' + g.n + ' XP',
    answers: (g) => 'Answer ' + g.n + ' exercises',
    days: (g) => 'Practise on ' + g.n + ' different days',
    voice: (g) => 'Do ' + g.n + ' speaking exercises',
    lessons: (g) => 'Finish ' + U.plural(g.n, 'lesson'),
    reviews: (g) => 'Review ' + g.n + ' cards',
    perfect: (g) => 'Get ' + U.plural(g.n, 'perfect lesson'),
    bank: (g) => 'Get ' + g.n + ' vocabulary-bank answers right',
    accuracy: (g) => 'Reach ' + g.n + '% accuracy over at least ' + (g.min || 50) + ' answers',
  };
  F.goalLabel = (g) => (GOAL_LABEL[g.kind] ? GOAL_LABEL[g.kind](g) : g.kind);

  /** Totals for the week containing dateKey, computed from the day log */
  F.weekTotals = function (dateKey) {
    const log = NL.state.get().dayLog || {};
    const t = { xp: 0, answers: 0, correct: 0, days: 0, voice: 0, lessons: 0, reviews: 0, perfect: 0, bank: 0 };
    for (const d of F.weekDates(dateKey)) {
      const x = log[d]; if (!x) continue;
      t.xp += x.xp || 0; t.answers += x.answers || 0; t.correct += x.correct || 0;
      t.voice += x.voice || 0; t.lessons += x.lessons || 0; t.reviews += x.reviews || 0; t.perfect += x.perfect || 0; t.bank += x.bank || 0;
      if ((x.xp || 0) > 0) t.days++;
    }
    t.accuracy = t.answers ? Math.round((t.correct / t.answers) * 100) : 0;
    return t;
  };

  /** The challenge for the current week with live progress */
  F.current = function (dateKey) {
    const list = NL.content.challenges || [];
    if (!list.length) return null;
    dateKey = dateKey || U.today();
    const key = F.monday(dateKey);
    const idx = ((F.weekIndex(dateKey) % list.length) + list.length) % list.length;
    const ch = list[idx];
    const t = F.weekTotals(dateKey);
    const progress = ch.goals.map((g) => {
      let value = t[g.kind] || 0, done;
      if (g.kind === 'accuracy') done = t.answers >= (g.min || 50) && t.accuracy >= g.n;
      else done = value >= g.n;
      return { goal: g, label: F.goalLabel(g), value, target: g.n, done, pct: g.kind === 'accuracy' ? (t.answers >= (g.min || 50) ? Math.min(100, U.pct(value, g.n)) : Math.min(99, U.pct(t.answers, g.min || 50))) : Math.min(100, U.pct(value, g.n)) };
    });
    const s = NL.state.get();
    const claimed = !!(s.challenges && s.challenges[key]);
    return { key, challenge: ch, progress, done: progress.every((p) => p.done), claimed, daysLeft: U.daysBetween(dateKey, U.addDays(key, 6)), totals: t };
  };

  /** Claim the weekly bonus once all goals are met. Safe to call often. */
  F.check = function () {
    const s = NL.state.get();
    if (!s) return false;
    const cur = F.current();
    if (!cur || !cur.done || cur.claimed) return false;
    s.challenges = s.challenges || {};
    s.challenges[cur.key] = { id: cur.challenge.id, date: U.today(), xp: cur.challenge.xp || 150 }; // set before addXP: addXP re-enters check()
    NL.state.save();
    U.toast('\u{1F3C5} Weekly challenge complete: ' + cur.challenge.title + ' (+' + (cur.challenge.xp || 150) + ' XP)', 'badge');
    const n = Object.keys(s.challenges).length;
    NL.game.badge('challenge-1');
    if (n >= 4) NL.game.badge('challenge-4');
    if (n >= 12) NL.game.badge('challenge-12');
    NL.game.addXP(cur.challenge.xp || 150);
    return true;
  };

  function goalRows(cur) {
    const box = h('div.skills');
    cur.progress.forEach((p) => box.appendChild(h('div.skill', { style: { gridTemplateColumns: '1fr 120px 64px' } },
      h('span', (p.done ? '✓ ' : '') + p.label),
      h('div.progress' + (p.done ? '.ok' : ''), h('div.bar', { style: { width: p.pct + '%' } })),
      h('span.muted.small', { style: { textAlign: 'right' } }, p.goal.kind === 'accuracy' ? p.value + '%' : Math.min(p.value, p.target) + '/' + p.target))));
    return box;
  }

  /** Compact card for the home screen */
  F.homeCard = function () {
    const cur = F.current();
    if (!cur) return h('div');
    const done = cur.progress.filter((p) => p.done).length;
    return h('a.card.card-link', { href: '#/challenge', 'aria-label': 'Weekly challenge' },
      h('div.row.row-between', h('div.eyebrow', 'Weekly challenge'), h('span.pill' + (cur.claimed ? '.pill-ok' : ''), cur.claimed ? 'Done' : done + '/' + cur.progress.length + ' · ' + (cur.daysLeft === 0 ? 'last day' : U.plural(cur.daysLeft, 'day') + ' left'))),
      h('h3.mt-1.mb-2', (cur.challenge.icon ? cur.challenge.icon + ' ' : '') + cur.challenge.title),
      h('div.progress' + (cur.claimed ? '.ok' : ''), h('div.bar', { style: { width: Math.round(cur.progress.reduce((n, p) => n + p.pct, 0) / cur.progress.length) + '%' } })));
  };

  F.challengeView = function (host) {
    F.check();
    const cur = F.current();
    host.appendChild(h('div.eyebrow', 'Stage 5 · Fluency'));
    host.appendChild(h('h1', 'Weekly challenge'));
    if (!cur) { host.appendChild(h('p.muted', 'No challenges are defined.')); return; }
    const ch = cur.challenge;
    host.appendChild(h('div.card',
      h('div.row.row-between', h('h2', { style: { margin: 0 } }, (ch.icon ? ch.icon + ' ' : '') + ch.title), h('span.pill' + (cur.claimed ? '.pill-ok' : ''), cur.claimed ? 'Completed' : (cur.daysLeft === 0 ? 'Last day' : U.plural(cur.daysLeft, 'day') + ' left'))),
      h('p.muted', ch.desc),
      goalRows(cur),
      h('p.small.muted', { style: { marginTop: '12px', marginBottom: 0 } }, 'Reward: +' + (ch.xp || 150) + ' XP. The week runs Monday to Sunday; a new challenge starts every Monday.')));
    if (ch.tip) host.appendChild(h('div.notice', ch.tip));
    const links = h('div.row', { style: { marginTop: '16px' } });
    (ch.links || [['Review', '#/review/go'], ['Free talk', '#/mode/freetalk'], ['Vocabulary bank', '#/bank']]).forEach(([label, href], i) => links.appendChild(h('a.btn' + (i === 0 ? '.btn-primary' : ''), { href }, label)));
    host.appendChild(links);

    const s = NL.state.get();
    const hist = Object.keys(s.challenges || {}).sort().reverse();
    if (hist.length) {
      const card = h('div.card', { style: { marginTop: '24px' } }, h('h3', 'Completed challenges (' + hist.length + ')'));
      hist.slice(0, 12).forEach((k) => { const c = s.challenges[k]; const def = (NL.content.challenges || []).find((x) => x.id === c.id); card.appendChild(h('div.ex-item', h('div', (def ? def.title : c.id)), h('div.en', 'week of ' + k + ' · +' + (c.xp || 0) + ' XP'))); });
      host.appendChild(card);
    }
    const next = (NL.content.challenges || []);
    if (next.length > 1) {
      const idx = ((F.weekIndex() % next.length) + next.length) % next.length;
      host.appendChild(h('p.muted.small', { style: { marginTop: '16px' } }, 'Next week: ' + next[(idx + 1) % next.length].title));
    }
  };

  /* -------------------------------------------------------- vocabulary bank */
  /** Bank groups with their word ids. Every dictionary word lands in exactly one group. */
  F.groups = function () {
    const defs = NL.content.bank || [];
    const byTheme = {};
    defs.forEach((g) => (g.themes || []).forEach((t) => { byTheme[t] = g.id; }));
    const out = defs.map((g) => Object.assign({}, g, { ids: [] }));
    const index = {}; out.forEach((g) => { index[g.id] = g; });
    let rest = index.overig;
    for (const id in NL.content.vocab) {
      const v = NL.content.vocab[id];
      const gid = byTheme[v.theme];
      if (gid) index[gid].ids.push(id);
      else { if (!rest) { rest = { id: 'overig', title: 'Everything else', nl: 'Overig', icon: '\u{1F4E6}', themes: [], ids: [] }; out.push(rest); index.overig = rest; } rest.ids.push(id); }
    }
    return out.filter((g) => g.ids.length);
  };
  F.groupStats = function (g) {
    let known = 0, seen = 0;
    g.ids.forEach((id) => { const st = NL.srs.strength(id); if (st > 0) seen++; if (st === 4) known++; });
    return { total: g.ids.length, known, seen, fresh: g.ids.length - seen };
  };

  F.bankView = function (host, id) {
    const groups = F.groups();
    if (id) { const g = groups.find((x) => x.id === id); if (g) return bankGroup(host, g); }
    const total = Object.keys(NL.content.vocab).length;
    host.appendChild(h('div.eyebrow', 'Stage 5 · Fluency'));
    host.appendChild(h('h1', 'Vocabulary bank'));
    host.appendChild(h('p.muted', total + ' words in ' + groups.length + ' themes · ' + NL.srs.knownWords() + ' known. Every word has audio, an example sentence and its own review card once you practise it.'));
    const grid = h('div.grid');
    groups.forEach((g) => {
      const st = F.groupStats(g);
      grid.appendChild(h('a.card.stage-card', { href: '#/bank/' + g.id },
        h('div.row.row-between', h('div.stage-code', g.icon || '\u{1F4D6}'), h('span.pill' + (st.known === st.total ? '.pill-ok' : ''), st.known + '/' + st.total)),
        h('h3', g.title), h('p.muted.small', g.nl || ''),
        h('div.progress' + (st.known === st.total ? '.ok' : ''), h('div.bar', { style: { width: U.pct(st.known, st.total) + '%' } }))));
    });
    host.appendChild(grid);
    host.appendChild(h('p.muted.small', { style: { marginTop: '16px' } }, 'Looking for one word? Use the ', h('a', { href: '#/dictionary' }, 'Dictionary'), ' search.'));
  };

  function bankGroup(host, g) {
    const st = F.groupStats(g);
    host.appendChild(h('div.eyebrow', h('a', { href: '#/bank' }, 'Vocabulary bank')));
    host.appendChild(h('h1', (g.icon ? g.icon + ' ' : '') + g.title));
    host.appendChild(h('p.muted', U.plural(st.total, 'word') + ' · ' + st.known + ' known · ' + (st.seen - st.known) + ' learning · ' + st.fresh + ' new'));
    host.appendChild(h('div.progress.progress-lg' + (st.known === st.total ? '.ok' : ''), h('div.bar', { style: { width: U.pct(st.known, st.total) + '%' } })));
    const row = h('div.row', { style: { marginTop: '16px' } });
    if (st.fresh > 0) row.appendChild(h('button.btn.btn-primary', { type: 'button', onclick: () => F.practise(host, g, 'new') }, 'Learn ' + Math.min(10, st.fresh) + ' new words'));
    row.appendChild(h('button.btn' + (st.fresh > 0 ? '' : '.btn-primary'), { type: 'button', onclick: () => F.practise(host, g, 'mix') }, 'Practise this theme'));
    if (st.seen - st.known > 0) row.appendChild(h('button.btn', { type: 'button', onclick: () => F.practise(host, g, 'weak') }, 'Practise my weak words'));
    host.appendChild(row);

    let filter = 'all';
    const tabs = h('div.tabs', { style: { marginTop: '24px' } });
    [['all', 'All'], ['new', 'New'], ['learning', 'Learning'], ['known', 'Known']].forEach(([k, label]) => { const b = h('button' + (k === 'all' ? '.active' : ''), { type: 'button' }, label); b.addEventListener('click', () => { filter = k; U.$$('button', tabs).forEach((x) => x.classList.toggle('active', x === b)); render(); }); tabs.appendChild(b); });
    host.appendChild(tabs);
    const list = h('div.ref-list');
    host.appendChild(list);
    function render() {
      U.clear(list);
      const rows = g.ids.map((id) => NL.content.vocab[id]).filter((v) => {
        const s = NL.srs.strength(v.id);
        return filter === 'all' || (filter === 'new' && s === 0) || (filter === 'learning' && s > 0 && s < 4) || (filter === 'known' && s === 4);
      }).sort((a, b) => (a.stage || 9) - (b.stage || 9) || a.nl.localeCompare(b.nl, 'nl'));
      rows.forEach((v) => {
        const r = h('div.dict-row', { tabindex: '0', role: 'button' },
          h('div', h('div.hw', v.pos === 'noun' && v.gender ? h('span.muted.small', v.gender + ' ') : null, v.nl), h('div.en', v.en)),
          NL.dict.strengthEl(NL.srs.strength(v.id)));
        const open = () => NL.dict.popup(v.nl);
        r.addEventListener('click', open);
        r.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(); });
        list.appendChild(r);
      });
      if (!rows.length) list.appendChild(h('p.muted', 'Nothing here yet.'));
    }
    render();
  }

  /** Pick the ids for a bank practice run */
  F.pickWords = function (g, mode) {
    const strength = (id) => NL.srs.strength(id);
    if (mode === 'new') {
      const fresh = g.ids.filter((id) => strength(id) === 0).sort((a, b) => (NL.content.vocab[a].stage || 9) - (NL.content.vocab[b].stage || 9));
      if (fresh.length) return fresh.slice(0, 10);
    }
    if (mode === 'weak') {
      const weak = g.ids.filter((id) => { const s = strength(id); return s > 0 && s < 4; });
      if (weak.length) return U.sample(weak, 12);
    }
    return U.sample(g.ids, 12);
  };

  F.practise = function (host, g, mode) {
    const ids = F.pickWords(g, mode);
    U.clear(host);
    const start = () => {
      const exs = NL.gen.expand({ n: Math.min(20, ids.length * 2), kinds: ['mc-meaning', 'tr-nl-en', 'listen', 'tr-en-nl', 'article', 'dictation'] }, ids, g.ids);
      if (!exs.length) { location.hash = '#/bank/' + g.id; NL.app.render(); return; }
      U.clear(host);
      NL.session.run({ host, exercises: exs, mode: 'mode', title: 'Vocabulary bank · ' + g.title, lessonVocab: g.ids, requeue: true,
        onQuit: () => { location.hash = '#/bank/' + g.id; NL.app.render(); },
        onDone: (r) => {
          const day = NL.state.day(); day.bank = (day.bank || 0) + (r.correct || 0); NL.state.save(); F.check();
          U.clear(host);
          host.appendChild(h('div.card', h('h1', g.title), h('p', (r.correct || 0) + ' of ' + (r.total || exs.length) + ' right. These words now have review cards and will come back in your daily review.'),
            h('div.row', h('button.btn.btn-primary', { type: 'button', onclick: () => F.practise(host, g, mode) }, 'Again'), h('a.btn', { href: '#/bank/' + g.id, onclick: () => setTimeout(() => NL.app.render(), 0) }, 'Back to theme'), h('a.btn', { href: '#/bank' }, 'All themes'))));
        } });
    };
    if (mode !== 'new') return start();
    // Introduce new words first: see, hear, then practise
    host.appendChild(h('div.eyebrow', 'Vocabulary bank · ' + g.title));
    host.appendChild(h('h1', U.plural(ids.length, 'new word')));
    host.appendChild(h('p.muted', 'Tap a word to hear it. Read the example, then start the practice round.'));
    const grid = h('div.vocab-grid');
    ids.forEach((id) => { grid.appendChild(NL.lesson && NL.lesson.vocabCard ? NL.lesson.vocabCard(id) : h('div.card', NL.ui.dutch(NL.gen.display(NL.content.vocab[id])), h('div.en', NL.content.vocab[id].en))); NL.srs.introduce(id, 'vocab'); });
    host.appendChild(grid);
    host.appendChild(h('div.row', { style: { marginTop: '24px' } }, h('button.btn.btn-primary.btn-lg', { type: 'button', onclick: start }, 'Practise these words'), h('a.btn', { href: '#/bank/' + g.id, onclick: () => setTimeout(() => NL.app.render(), 0) }, 'Back')));
  };

  /* ------------------------------------------------------------------- hub */
  F.hub = function (host) {
    F.check();
    const st = NL.contentApi.findStage('s5');
    host.appendChild(h('div.eyebrow', 'Stage 5 · ' + (st ? st.cefr : 'B2+')));
    host.appendChild(h('h1', st ? st.title : 'Fluency and maintenance'));
    host.appendChild(h('p.muted', st ? st.blurb : ''));
    const due = NL.srs.dueCount();
    host.appendChild(h('div.stats',
      h('div.stat', h('div.n', String(NL.srs.knownWords())), h('div.l', 'words known')),
      h('div.stat', h('div.n', String(NL.srs.learningWords())), h('div.l', 'learning')),
      h('div.stat', h('div.n', String(due)), h('div.l', 'due today')),
      h('div.stat', h('div.n', String(Object.keys(NL.state.get().challenges || {}).length)), h('div.l', 'challenges won'))));
    host.appendChild(h('div.row', { style: { marginTop: '16px' } }, h('a.btn.btn-lg' + (due ? '.btn-primary' : ''), { href: '#/review/go' }, '\u{1F501} Daily review' + (due ? ' · ' + due + ' due' : ''))));
    const hc = F.homeCard(); hc.classList.add('mt-4'); host.appendChild(hc);

    host.appendChild(h('h2', { style: { marginTop: '32px' } }, 'Speaking topics'));
    host.appendChild(h('p.muted', 'Pick a topic, answer each prompt out loud, then compare with a model answer.'));
    const levels = {};
    (NL.content.talk || []).forEach((t) => { (levels[t.level] = levels[t.level] || []).push(t); });
    Object.keys(levels).sort().forEach((lv) => {
      host.appendChild(h('div.eyebrow', { style: { marginTop: '16px' } }, lv));
      const grid = h('div.mode-grid');
      levels[lv].forEach((t) => grid.appendChild(h('a.mode', { href: '#/mode/freetalk/' + t.id }, h('span.ico', t.icon || '\u{1F5E8}️'), h('b', t.title), h('span', U.plural(t.prompts.length, 'prompt')))));
      host.appendChild(grid);
    });

    host.appendChild(h('h2', { style: { marginTop: '32px' } }, 'Vocabulary bank'));
    const groups = F.groups();
    host.appendChild(h('p.muted', Object.keys(NL.content.vocab).length + ' words in ' + groups.length + ' themes. Browse, listen, and turn any theme into a practice round.'));
    host.appendChild(h('a.btn.btn-primary', { href: '#/bank' }, 'Open the vocabulary bank'));
  };
})();
