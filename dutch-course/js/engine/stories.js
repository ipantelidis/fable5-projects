/* Stories: graded stories and dialogues (content in js/content/stage5-stories-*.js).
   #/stories lists them by level; #/stories/:id is the reader (tap a word for the dictionary, tap a line to hear it,
   play the whole text, reveal translations); #/stories/:id/questions runs the comprehension questions as a normal session. */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h, T = NL.tts;
  const St = (NL.stories = {});
  const LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const all = () => NL.content.stories || [];
  const done = () => { const s = NL.state.get(); s.stories = s.stories || {}; return s.stories; };
  St.find = (id) => all().find((x) => x.id === id);
  let filter = 'all';

  St.view = function (host, id, mode) {
    if (id) { const st = St.find(id); if (!st) { host.appendChild(h('p', 'Story not found. ', h('a', { href: '#/stories' }, 'All stories'))); return; } return mode === 'questions' ? St.questions(host, st) : St.reader(host, st); }
    host.appendChild(h('div.eyebrow', 'Reading and listening'));
    host.appendChild(h('h1', 'Stories and dialogues'));
    host.appendChild(h('p.muted', 'Short texts at your level. Listen while you read, tap any word you do not know, then check your understanding with a few questions.'));
    const chips = h('div.tabs');
    const grid = h('div.grid');
    const render = () => {
      U.clear(grid);
      all().filter((x) => filter === 'all' || x.level === filter).forEach((x) => {
        const d = done()[x.id];
        grid.appendChild(h('a.card.stage-card', { href: '#/stories/' + x.id },
          h('div.row.row-between', h('span.stage-code', { style: { fontSize: '1.4rem' } }, x.level), h('span.pill' + (d ? '.pill-ok' : ''), d ? '✓ ' + d.best + '%' : (x.kind === 'dialogue' ? 'dialogue' : 'story'))),
          h('h3', x.title), h('p.muted.small', x.intro)));
      });
    };
    [['all', 'All']].concat(LEVELS.map((l) => [l, l])).forEach(([k, label]) => {
      const b = h('button' + (k === filter ? '.active' : ''), { type: 'button' }, label);
      b.addEventListener('click', () => { filter = k; [...chips.children].forEach((c) => c.classList.toggle('active', c === b)); render(); });
      chips.appendChild(b);
    });
    host.appendChild(chips); host.appendChild(grid); render();
  };

  St.reader = function (host, st) {
    T.stop();
    host.appendChild(h('div.eyebrow', h('a', { href: '#/stories' }, 'Stories'), ' · ' + st.level + ' · ' + (st.kind === 'dialogue' ? 'dialogue' : 'story')));
    host.appendChild(h('h1', st.title));
    host.appendChild(h('p.lead', st.intro));
    let showAll = false, playing = false;
    const lines = [];
    const text = h('div.card.story');
    st.lines.forEach((l, i) => {
      const en = h('div.story-en', { hidden: true }, l.en);
      const toggle = h('button.story-tr', { type: 'button', 'aria-label': 'Show translation', title: 'Translation' }, 'EN');
      toggle.addEventListener('click', () => { en.hidden = !en.hidden; toggle.classList.toggle('on', !en.hidden); });
      const row = h('div.story-line' + (l.who ? '.dialogue' : ''), l.who ? h('span.story-who', l.who) : null, h('div.story-nl', NL.ui.dutch(l.nl), en), toggle);
      lines.push({ row, en, toggle, l, i });
      text.appendChild(row);
    });
    const playBtn = h('button.btn.btn-primary', { type: 'button' }, '▶ Play all');
    const slowBtn = h('button.btn', { type: 'button', 'aria-pressed': 'false' }, '\u{1F422} Slow');
    let slow = false;
    slowBtn.addEventListener('click', () => { slow = !slow; slowBtn.setAttribute('aria-pressed', String(slow)); slowBtn.classList.toggle('active', slow); });
    const trBtn = h('button.btn', { type: 'button' }, 'Show translations');
    trBtn.addEventListener('click', () => { showAll = !showAll; lines.forEach((x) => { x.en.hidden = !showAll; x.toggle.classList.toggle('on', showAll); }); trBtn.textContent = showAll ? 'Hide translations' : 'Show translations'; });
    const mark = (i) => lines.forEach((x) => x.row.classList.toggle('current', x.i === i));
    const stop = () => { playing = false; T.stop(); mark(-1); playBtn.textContent = '▶ Play all'; };
    playBtn.addEventListener('click', () => {
      if (playing) return stop();
      playing = true; playBtn.textContent = '■ Stop';
      let i = 0;
      const step = () => {
        if (!playing || !document.body.contains(text)) return stop();
        if (i >= lines.length) return stop();
        const x = lines[i]; mark(i); x.row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        const ok = T.speak(x.l.nl, { rate: slow ? 'slow' : undefined, onend: () => { i++; setTimeout(step, 450); } });
        if (!ok) { i++; setTimeout(step, 1500); }
      };
      step();
    });
    host.appendChild(h('div.row.story-controls', playBtn, slowBtn, trBtn));
    host.appendChild(text);
    const d = done()[st.id];
    host.appendChild(h('div.row.mt-4', h('a.btn.btn-primary.btn-lg', { href: '#/stories/' + st.id + '/questions', onclick: () => stop() }, (d ? 'Answer the questions again' : 'Answer ' + st.questions.length + ' questions') + ' →'), h('a.btn.btn-ghost', { href: '#/stories', onclick: () => stop() }, 'All stories')));
    if (d) host.appendChild(h('p.muted.small.mt-2', 'Best score: ' + d.best + '%.'));
  };

  St.exercises = (st) => st.questions.map((q) => ({ type: 'mc', q: q.q, options: q.options.slice(), answer: q.answer, explain: q.explain, skill: 'reading' }));

  St.questions = function (host, st) {
    NL.session.run({ host, exercises: St.exercises(st), mode: 'story', title: st.title + ' · questions', lessonVocab: [], onQuit: () => { location.hash = '#/stories/' + st.id; }, onDone: (r) => {
      const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
      const d = done(); const prev = d[st.id]; d[st.id] = { best: Math.max(pct, prev ? prev.best : 0), date: U.today() };
      if (!prev) NL.game.addXP(30);
      NL.state.save();
      U.clear(host);
      const i = all().indexOf(st); const nxt = all().slice(i + 1).find((x) => x.level === st.level) || all().slice(i + 1)[0];
      host.appendChild(h('div.card', { style: { textAlign: 'center' } }, h('div.eyebrow', st.title),
        h('div', { style: { fontSize: '3rem', fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--accent)' } }, pct + '%'),
        h('p', r.correct + ' of ' + r.total + ' right' + (prev ? '.' : ' · +30 XP for finishing a story.')),
        h('p.muted', pct === 100 ? 'You understood everything. Try reading it once more without translations, out loud.' : 'Reread the lines the questions were about; the explanations point at the exact sentence.')));
      host.appendChild(h('div.row.mt-4', { style: { justifyContent: 'center' } }, nxt ? h('a.btn.btn-primary', { href: '#/stories/' + nxt.id }, 'Next: ' + nxt.title) : null, h('a.btn', { href: '#/stories/' + st.id }, 'Read again'), h('a.btn.btn-ghost', { href: '#/stories' }, 'All stories')));
      NL.app.updateHeader && NL.app.updateHeader();
    } });
  };
})();
