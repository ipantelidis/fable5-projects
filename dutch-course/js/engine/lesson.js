/* Session runner (a sequence of exercises with feedback, XP, SRS) and the lesson flow */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h, T = NL.tts, A = NL.contentApi;

  /* ---------------- Session ---------------- */
  const S = (NL.session = {});
  let current = null;
  S.active = () => current;

  /**
   * run({ host, exercises, mode:'practice'|'test'|'review'|'exam'|'mode', title, lessonVocab, grammar, requeue, onDone, onProgress })
   */
  S.run = function (opts) {
    const queue = opts.exercises.slice();
    const total0 = queue.length;
    const sess = { opts, queue, done: 0, correct: 0, xp: 0, combo: 0, mistakes: [], started: Date.now(), requeued: new Set(), results: [] };
    current = sess;
    const host = opts.host;
    U.clear(host);
    const top = h('div.lesson-top');
    const prog = h('div.progress.progress-lg', h('div.bar', { style: { width: '0%' } }));
    const combo = h('div.combo', { 'aria-live': 'polite' });
    const quit = h('button.btn-icon', { type: 'button', 'aria-label': 'Leave session', title: 'Leave' }, '×');
    quit.addEventListener('click', () => { if (confirm('Leave this session? Progress in it will be lost.')) { S.stop(); if (opts.onQuit) opts.onQuit(); else history.back(); } });
    top.appendChild(quit); top.appendChild(prog); top.appendChild(combo);
    host.appendChild(top);
    if (opts.title) host.appendChild(h('div.eyebrow', opts.title));
    const exHost = h('div');
    host.appendChild(exHost);
    const bar = h('div.check-bar');
    const barInner = h('div.check-bar-inner');
    const hint = h('div.hint');
    const primary = h('button.btn.btn-primary.btn-lg', { type: 'button' }, 'Check');
    barInner.appendChild(hint); barInner.appendChild(primary);
    bar.appendChild(barInner);
    host.appendChild(bar);

    let ctl = null, ex = null, feedback = null, checked = false;
    const ctx = {
      showTranslations: NL.state.get().settings.showTranslations,
      setReady(v) { primary.disabled = !v; },
      autoCheck(result) { if (!result) return; if (checked && !(ex.type === 'speak' && result.retry)) return; onCheck(result); },
    };

    function updateProgress() {
      const totalNow = sess.done + queue.length;
      prog.firstChild.style.width = Math.round((sess.done / Math.max(1, totalNow)) * 100) + '%';
      combo.textContent = sess.combo >= 2 ? '⚡' + sess.combo : '';
      if (opts.onProgress) opts.onProgress(sess);
    }

    function next() {
      feedback = null; checked = false;
      if (!queue.length) return finish();
      ex = queue.shift();
      U.clear(exHost);
      ctl = NL.exercises.render(ex, ctx);
      sess.current = ex; sess.ctl = ctl;
      exHost.appendChild(ctl.el);
      primary.textContent = 'Check';
      primary.disabled = !ctl.ready();
      hint.innerHTML = ex.type === 'speak' || ex.type === 'freespeak' || ex.type === 'write' || ex.type === 'match' ? '' : 'Press <span class="kbd">Enter</span> to check · <span class="kbd">Space</span> to replay audio';
      updateProgress();
      window.scrollTo({ top: 0, behavior: 'auto' });
      setTimeout(() => { if (ctl.focus && !U.isTouch()) ctl.focus(); }, 50);
    }

    function itemsFor(result) {
      // vocab items trained by this exercise
      let vocab = ex.vocab ? ex.vocab.slice() : [];
      if (!vocab.length) {
        const text = [result.correctText, ex.nl, ex.answer && ex.answer[0], ex.prompt].filter((x) => typeof x === 'string').join(' ');
        const words = new Set(U.words(text));
        const pool = opts.lessonVocab || [];
        for (const id of pool) {
          const v = NL.content.vocab[id]; if (!v) continue;
          const forms = [v.nl, v.plural].concat(v.forms ? v.forms.pres.concat(v.forms.past || [], [v.forms.part]) : []).filter(Boolean);
          if (forms.some((f) => f.split(' ').every((w) => words.has(U.normalize(w))))) vocab.push(id);
        }
      }
      let grammar = ex.grammar ? ex.grammar.slice() : [];
      if (!grammar.length && opts.grammar && ['fill', 'build', 'conj', 'fix', 'mc', 'article', 'plural'].includes(ex.type)) grammar = opts.grammar.slice();
      return { vocab: U.uniq(vocab), grammar: U.uniq(grammar) };
    }

    function onCheck(result) {
      const first = !checked;
      checked = true;
      if (first) {
        sess.done++;
        if (result.ok) { sess.correct++; sess.combo++; if (sess.combo >= 3) NL.sfx.combo(sess.combo); else NL.sfx.correct(); }
        else { sess.combo = 0; NL.sfx.wrong(); sess.mistakes.push({ ex, result }); if (opts.requeue && !sess.requeued.has(ex) && !result.self) { sess.requeued.add(ex); queue.push(ex); } }
        const g = NL.game.answer({ correct: result.ok, partial: result.partial, type: ex.type, voice: result.voice, combo: sess.combo });
        sess.xp += g.xp; result.xpEarned = g.xp;
        sess.results.push({ ex, result });
        if (opts.mode === 'review') { const s = NL.state.get(); s.stats.reviews = (s.stats.reviews || 0) + 1; const d = NL.state.day(); d.reviews = (d.reviews || 0) + 1; }
      }
      const items = itemsFor(result);
      const q = result.quality != null ? result.quality : result.ok ? 4 : 1;
      items.vocab.forEach((id) => NL.srs.review(id, q, 'vocab'));
      items.grammar.forEach((id) => NL.srs.review(id, q, 'grammar'));
      if (!(ex.type === 'speak' && !result.ok && NL.stt.supported())) { try { ctl.finish(result); } catch (e) { console.error(e); } }
      showFeedback(result);
      primary.textContent = queue.length ? 'Continue' : 'Finish';
      primary.disabled = false;
      primary.focus();
      updateProgress();
    }

    function showFeedback(result) {
      if (feedback) feedback.remove();
      const kind = result.ok ? 'ok' : result.partial ? 'partial' : 'bad';
      feedback = h('div.feedback.' + kind, { role: 'status' });
      const title = result.ok ? (result.quality >= 5 ? U.pick(['Goed zo!', 'Precies!', 'Helemaal goed!', 'Prima!', 'Klopt!']) : 'Goed!') : result.partial ? 'Bijna…' : 'Niet helemaal';
      feedback.appendChild(h('h3', title, result.xpEarned ? h('span.xp', '+' + result.xpEarned + ' XP') : null));
      if (result.correctText) {
        feedback.appendChild(h('div.answer', result.correctNl ? NL.ui.dutch(result.correctText) : result.correctText, result.sub ? h('div.muted.small', result.sub) : null));
      } else if (result.sub) feedback.appendChild(h('div.muted.small', result.sub));
      if (!result.ok && result.userText && result.diff && result.diff.length) {
        const d = h('div.diff.small', h('span.muted', 'Word by word: '));
        result.diff.forEach((w, i) => { d.appendChild(h('span.' + (w.ok ? 'ok' : 'no'), w.w)); if (i < result.diff.length - 1) d.appendChild(document.createTextNode(' ')); });
        feedback.appendChild(d);
      } else if (!result.ok && result.userText && !result.voice) feedback.appendChild(h('div.small.muted', 'You wrote: ' + result.userText));
      if (result.explain) { const p = h('p.explain'); result.explain.split('\n').forEach((line, i) => { if (i) p.appendChild(h('br')); p.appendChild(document.createTextNode(line)); }); feedback.appendChild(p); }
      exHost.appendChild(feedback);
      if (result.correctText && result.correctNl && !result.ok && ex.type !== 'speak') setTimeout(() => T.speak(result.correctText), 200);
      feedback.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    primary.addEventListener('click', () => { if (checked) next(); else { const r = ctl.check(); if (r) onCheck(r); } });
    sess.primary = primary; sess.isChecked = () => checked;

    sess.key = function (e) {
      const inInput = /^(INPUT|TEXTAREA)$/.test(document.activeElement && document.activeElement.tagName);
      if (e.key === 'Enter' && !(inInput && document.activeElement.tagName === 'TEXTAREA' && !e.ctrlKey)) {
        e.preventDefault();
        if (checked) next(); else if (ctl && ctl.ready()) { const r = ctl.check(); if (r) onCheck(r); }
        return true;
      }
      if (e.key === ' ' && !inInput) { e.preventDefault(); const t = ex && (ex.nl || (ex.dir === 'nl-en' && ex.prompt) || result0()); if (t) T.speak(t); else T.replay(); return true; }
      if (!inInput && !checked && ctl && ctl.key) return ctl.key(e);
      return false;
    };
    function result0() { return checked && feedback ? null : null; }

    function finish() {
      current = null;
      const out = { total: sess.done, correct: sess.correct, xp: sess.xp, mistakes: sess.mistakes, results: sess.results, ms: Date.now() - sess.started, total0 };
      if (opts.onDone) opts.onDone(out);
    }
    S.stop = () => { current = null; NL.stt.stop(); T.stop(); };
    next();
    return sess;
  };

  /* ---------------- Lesson flow ---------------- */
  const L = (NL.lesson = {});

  L.renderBlocks = function (blocks, host) {
    for (const b of blocks) {
      if (b.h) host.appendChild(h('div.learn-block.h', b.h));
      else if (b.p) host.appendChild(h('p.learn-block', richText(b.p)));
      else if (b.tip) host.appendChild(h('div.tip', h('b', 'Memory trick'), richText(b.tip)));
      else if (b.warn) host.appendChild(h('div.warn-box', h('b', 'Watch out'), richText(b.warn)));
      else if (b.list) { const ul = h('ul.learn-list'); b.list.forEach((li) => ul.appendChild(h('li', richText(li)))); host.appendChild(ul); }
      else if (b.table) {
        const t = h('table.tbl');
        if (b.table.caption) t.appendChild(h('caption', b.table.caption));
        const thead = h('thead'), tr = h('tr'); b.table.head.forEach((c) => tr.appendChild(h('th', c))); thead.appendChild(tr); t.appendChild(thead);
        const tb = h('tbody');
        b.table.rows.forEach((r) => { const row = h('tr'); r.forEach((c, i) => row.appendChild(h('td', cellText(c, i, b.table)))); tb.appendChild(row); });
        t.appendChild(tb);
        host.appendChild(h('div.tbl-wrap', t));
      } else if (b.ex) {
        const list = h('div.ex-list');
        b.ex.forEach((e) => list.appendChild(h('div.ex-item', h('div', NL.ui.dutch(e.nl)), h('div.en', e.en), e.note ? h('div.note', e.note) : null)));
        host.appendChild(list);
      }
    }
  };
  /** Table cells: Dutch cells (marked with a leading *) become speakable */
  function cellText(c, i, table) {
    if (typeof c !== 'string') return c;
    if (c.startsWith('*')) return T.say(c.slice(1));
    return richText(c);
  }
  /** Inline markup: **bold**, `dutch` (speakable), _italic_ */
  function richText(s) {
    const frag = document.createDocumentFragment();
    const re = /(\*\*[^*]+\*\*|`[^`]+`|_[^_]+_)/g;
    let last = 0, m;
    while ((m = re.exec(s))) {
      if (m.index > last) frag.appendChild(document.createTextNode(s.slice(last, m.index)));
      const tok = m[0];
      if (tok.startsWith('**')) frag.appendChild(h('b', tok.slice(2, -2)));
      else if (tok.startsWith('`')) frag.appendChild(T.say(tok.slice(1, -1)));
      else frag.appendChild(h('i', tok.slice(1, -1)));
      last = m.index + tok.length;
    }
    if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
    return frag;
  }
  L.richText = richText;

  L.vocabCard = function (id) {
    const v = NL.content.vocab[id];
    if (!v) return h('div.vocab-card', id);
    const card = h('div.vocab-card');
    const hw = h('div.hw');
    if (v.pos === 'noun' && v.gender) hw.appendChild(h('span.g.' + (v.gender === 'het' ? 'het' : 'de'), v.gender));
    hw.appendChild(T.say(v.nl));
    hw.appendChild(NL.dict.strengthEl(NL.srs.strength(id)));
    card.appendChild(hw);
    card.appendChild(h('div.en', v.en));
    const meta = [];
    if (v.pos === 'noun') meta.push(v.plural ? 'plural: ' + v.plural : 'no plural');
    if (v.forms && v.forms.pres) meta.push(v.forms.pres.join(' · ') + (v.forms.part ? ' · ' + (v.forms.aux === 'zijn' ? 'is ' : 'heeft ') + v.forms.part : ''));
    if (v.note) meta.push(v.note);
    if (meta.length) card.appendChild(h('div.meta', meta.join(' — ')));
    if (v.ex) card.appendChild(h('div.ex', NL.ui.dutch(v.ex.nl), h('div.en', v.ex.en)));
    card.addEventListener('click', (e) => { if (!e.target.closest('.speak')) NL.dict.popup(v.nl); });
    return card;
  };

  function expand(list, lesson) {
    const earlier = A.vocabUpTo(lesson.id).filter((id) => !(lesson.vocab || []).includes(id));
    const out = [];
    for (const e of list) {
      if (e.type === 'auto') out.push(...NL.gen.expand(e, lesson.vocab || [], earlier));
      else out.push(e);
    }
    return out;
  }
  L.expand = expand;

  L.open = function (lessonId, host) {
    const found = A.findLesson(lessonId);
    if (!found) { host.appendChild(h('p', 'Lesson not found.')); return; }
    const { stage, unit, lesson } = found;
    const steps = ['learn', 'vocab', 'practice', 'test', 'summary'];
    let step = 0;
    const totals = { practice: null, test: null };
    const startedAt = Date.now();
    const xpBefore = NL.state.get().xp;
    const badgesBefore = Object.keys(NL.state.get().badges).length;

    function header(label, i) {
      const top = h('div.lesson-top');
      const back = h('a.btn-icon', { href: '#/unit/' + unit.id, 'aria-label': 'Back to unit' }, '←');
      const prog = h('div.progress', h('div.bar', { style: { width: Math.round((i / 4) * 100) + '%' } }));
      top.appendChild(back); top.appendChild(prog); top.appendChild(h('span.muted.small', label));
      return top;
    }

    function showLearn() {
      U.clear(host);
      host.appendChild(header('Learn', 0));
      host.appendChild(h('div.eyebrow', stage.title + ' · ' + unit.title));
      host.appendChild(h('h1', lesson.title));
      host.appendChild(h('div.card', h('div.eyebrow', 'Goal'), h('p', { style: { marginBottom: 0, fontSize: '1.05rem' } }, lesson.goal)));
      const card = h('div.card');
      L.renderBlocks(lesson.learn, card);
      host.appendChild(card);
      if (lesson.grammar && lesson.grammar.length) {
        host.appendChild(h('p.muted.small', 'Grammar reference: ', lesson.grammar.map((g, i) => [i ? ' · ' : null, h('a', { href: '#/grammar/' + g }, (NL.content.grammar[g] || { title: g }).title)])));
        lesson.grammar.forEach((g) => NL.srs.introduce(g, 'grammar'));
      }
      host.appendChild(h('div.row', { style: { marginTop: '24px' } }, h('button.btn.btn-primary.btn-lg', { type: 'button', onclick: () => go(1) }, (lesson.vocab && lesson.vocab.length ? 'Next: vocabulary' : 'Next: practice') + ' →')));
      window.scrollTo(0, 0);
    }
    function showVocab() {
      if (!lesson.vocab || !lesson.vocab.length) return go(2);
      U.clear(host);
      host.appendChild(header('Vocabulary', 1));
      host.appendChild(h('h2', 'Vocabulary'));
      host.appendChild(h('p.muted', 'Tap any word to hear it; tap a card for the full dictionary entry. ' + U.plural(lesson.vocab.length, 'item') + '.'));
      const grid = h('div.vocab-grid');
      lesson.vocab.forEach((id) => { grid.appendChild(L.vocabCard(id)); NL.srs.introduce(id, 'vocab'); });
      host.appendChild(grid);
      const playAll = h('button.btn', { type: 'button' }, '▶ Play all');
      playAll.addEventListener('click', () => { let i = 0; const ids = lesson.vocab; const step = () => { if (i >= ids.length) return; const v = NL.content.vocab[ids[i++]]; T.speak(NL.gen.display(v), { onend: () => setTimeout(step, 350) }); }; step(); });
      host.appendChild(h('div.row', { style: { marginTop: '24px' } }, h('button.btn.btn-primary.btn-lg', { type: 'button', onclick: () => go(2) }, 'Start practice →'), playAll));
      NL.state.save();
      window.scrollTo(0, 0);
    }
    function showPractice() {
      const exs = expand(lesson.practice, lesson);
      if (!exs.length) return go(3);
      NL.session.run({ host, exercises: exs, mode: 'practice', title: lesson.title + ' · Practice', lessonVocab: A.vocabUpTo(lesson.id), grammar: lesson.grammar, requeue: true, onQuit: () => { location.hash = '#/unit/' + unit.id; }, onDone: (r) => { totals.practice = r; go(3); } });
    }
    function showTest() {
      const exs = expand(lesson.test, lesson);
      if (!exs.length) { totals.test = { total: 0, correct: 0, xp: 0, mistakes: [] }; return go(4); }
      U.clear(host);
      host.appendChild(header('Mini test', 3));
      host.appendChild(h('h2', 'Mini test'));
      host.appendChild(h('p', 'A short test on what you just learned: ' + U.plural(exs.length, 'question') + '. No hints, no retries, and each answer counts for your lesson score.'));
      host.appendChild(h('button.btn.btn-primary.btn-lg', { type: 'button', onclick: () => NL.session.run({ host, exercises: exs, mode: 'test', title: lesson.title + ' · Mini test', lessonVocab: A.vocabUpTo(lesson.id), grammar: lesson.grammar, onQuit: () => { location.hash = '#/unit/' + unit.id; }, onDone: (r) => { totals.test = r; go(4); } }) }, 'Start the test'));
    }
    function showSummary() {
      U.clear(host);
      const t = totals.test || { total: 0, correct: 0 };
      const p = totals.practice || { total: 0, correct: 0, mistakes: [] };
      const scoreBase = t.total ? t : p;
      const pct = scoreBase.total ? Math.round((scoreBase.correct / scoreBase.total) * 100) : 100;
      const bonus = NL.game.lessonDone(lesson.id, scoreBase.correct, scoreBase.total);
      const xpGained = NL.state.get().xp - xpBefore;
      const newBadges = Object.keys(NL.state.get().badges).length - badgesBefore;
      host.appendChild(header('Done', 4));
      host.appendChild(h('div.card', { style: { textAlign: 'center' } },
        h('div.eyebrow', 'Lesson complete'),
        h('div.summary-score', pct + '%'),
        h('p.muted', (t.total ? 'Mini test: ' + t.correct + ' of ' + t.total : 'Practice: ' + p.correct + ' of ' + p.total) + ' correct · ' + Math.round((Date.now() - startedAt) / 60000) + ' min'),
        h('div.stats', h('div.stat', h('div.n', '+' + xpGained), h('div.l', 'XP')), h('div.stat', h('div.n', String(NL.game.streakCurrent())), h('div.l', 'day streak')), h('div.stat', h('div.n', String(NL.srs.knownWords())), h('div.l', 'words known')), newBadges ? h('div.stat', h('div.n', '+' + newBadges), h('div.l', 'badges')) : null),
      ));
      const allMistakes = (p.mistakes || []).concat(t.mistakes || []);
      if (allMistakes.length) {
        const card = h('div.card', h('h3', 'Look at these again'));
        const seen = new Set();
        allMistakes.forEach(({ ex, result }) => { const key = result.correctText || ex.q || ex.prompt; if (!key || seen.has(key)) return; seen.add(key); card.appendChild(h('div.ex-item', h('div', result.correctNl ? NL.ui.dutch(result.correctText) : result.correctText || ex.q || ex.prompt), h('div.en', (result.explain || '').split('\n')[0]))); });
        host.appendChild(card);
      } else host.appendChild(h('div.card', h('h3', 'Foutloos!'), h('p', { style: { marginBottom: 0 } }, 'Not a single mistake. Everything from this lesson is now in your review queue for spaced repetition.')));
      const nxt = A.nextLesson(lesson.id);
      const row = h('div.row', { style: { marginTop: '24px' } });
      if (nxt && (nxt.stage.id === stage.id || NL.game.isUnlocked(nxt.stage.id))) row.appendChild(h('a.btn.btn-primary.btn-lg', { href: '#/lesson/' + nxt.lesson.id }, 'Next lesson →'));
      row.appendChild(h('a.btn', { href: '#/unit/' + unit.id }, 'Back to unit'));
      row.appendChild(h('a.btn.btn-ghost', { href: '#/lesson/' + lesson.id, onclick: (e) => { e.preventDefault(); L.open(lesson.id, host); } }, 'Repeat lesson'));
      host.appendChild(row);
      confetti();
      window.scrollTo(0, 0);
    }
    function go(i) { step = i; [showLearn, showVocab, showPractice, showTest, showSummary][i](); }
    go(0);
  };

  function confetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = h('div.confetti');
    const colors = ['#1f5f8b', '#c2410c', '#d4a017', '#2f7d4f', '#7fb5dc'];
    for (let i = 0; i < 60; i++) c.appendChild(h('i', { style: { left: Math.random() * 100 + 'vw', background: U.pick(colors), animationDelay: Math.random() * 0.6 + 's', transform: 'rotate(' + Math.random() * 360 + 'deg)' } }));
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2600);
  }
  L.confetti = confetti;
})();
