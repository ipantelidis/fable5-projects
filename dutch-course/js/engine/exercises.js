/* Exercise renderers. Each returns a controller: { el, check(), ready(), key(e), finish(result) } */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h;
  const T = NL.tts, C = NL.checker;

  /* ---------- Dictionary lookup + word popup ---------- */
  const D = (NL.dict = {});
  let index = null;
  function buildIndex() {
    index = new Map();
    const add = (k, id) => { k = U.normalize(k); if (k && !index.has(k)) index.set(k, id); };
    for (const id in NL.content.vocab) {
      const v = NL.content.vocab[id];
      add(v.nl, id);
      if (v.plural) add(v.plural, id);
      if (v.dim) add(v.dim, id);
      if (v.forms) { (v.forms.pres || []).forEach((f) => add(f, id)); (v.forms.past || []).forEach((f) => add(f, id)); if (v.forms.part) add(v.forms.part, id); }
      if (v.altNl) v.altNl.forEach((a) => add(a, id));
    }
  }
  D.lookup = function (word) {
    if (!index) buildIndex();
    const w = U.normalize(word);
    if (!w) return null;
    let id = index.get(w) || index.get(w.replace(/^(de|het|een) /, ''));
    if (!id && w.endsWith('en')) id = index.get(w.slice(0, -2)) || index.get(w.slice(0, -1));
    if (!id && w.endsWith('t')) id = index.get(w.slice(0, -1));
    if (!id && w.endsWith('s')) id = index.get(w.slice(0, -1));
    if (!id && w.startsWith('ge') && w.length > 5) id = index.get(w.slice(2)) || index.get(w.slice(2, -1) + 'en');
    return id ? NL.content.vocab[id] : null;
  };
  D.reset = () => { index = null; };
  D.entryEl = function (v, opts) {
    opts = opts || {};
    const el = h('div.entry');
    const hw = h('div.hw');
    if (v.pos === 'noun' && v.gender) hw.appendChild(h('span.g.' + (v.gender === 'het' ? 'het' : 'de'), { class: 'pill' }, v.gender));
    hw.appendChild(T.say(v.nl));
    el.appendChild(hw);
    el.appendChild(h('p', h('b', v.en), v.alt ? h('span.muted', ' · ' + v.alt.join(', ')) : null));
    const dl = h('dl');
    const row = (k, val) => { if (val) { dl.appendChild(h('dt', k)); dl.appendChild(h('dd', val)); } };
    row('Type', v.pos);
    if (v.pos === 'noun') row('Plural', v.plural ? T.say('de ' + v.plural) : 'no plural');
    if (v.dim) row('Diminutive', T.say('het ' + v.dim));
    if (v.forms && v.forms.pres) {
      row('Present', h('span', T.say('ik ' + v.forms.pres[0]), ', ', T.say('jij ' + v.forms.pres[1]), ', ', T.say('wij ' + v.forms.pres[2])));
      if (v.forms.past && v.forms.past[0]) row('Past', h('span', T.say(v.forms.past[0]), v.forms.past[1] ? h('span', ' / ', T.say(v.forms.past[1])) : null));
      if (v.forms.part) row('Perfect', T.say((v.forms.aux === 'zijn' ? 'is ' : 'heeft ') + v.forms.part));
    }
    if (v.note) row('Note', v.note);
    row('Strength', strengthEl(NL.srs.strength(v.id)));
    el.appendChild(dl);
    if (v.ex) el.appendChild(h('div.ex-item', h('div', NL.ui.dutch(v.ex.nl)), h('div.en', v.ex.en)));
    return el;
  };
  function strengthEl(n) { const s = h('span.strength'); for (let i = 0; i < 4; i++) s.appendChild(h('i' + (i < n ? '.on' : ''))); return s; }
  D.strengthEl = strengthEl;
  D.popup = function (word) {
    const v = D.lookup(word);
    const dlg = U.$('#word-dialog'), body = U.$('#word-dialog-body');
    U.clear(body);
    if (v) body.appendChild(D.entryEl(v));
    else body.appendChild(h('div.entry', h('div.hw', T.say(word)), h('p.muted', 'This word is not in the course dictionary yet.')));
    dlg.hidden = false;
    const close = () => { dlg.hidden = true; document.removeEventListener('keydown', esc); };
    const esc = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', esc);
    dlg.onclick = (e) => { if (e.target === dlg || e.target.closest('[data-close]')) close(); };
    setTimeout(() => { const b = U.$('.dialog-close', dlg); if (b) b.focus(); }, 30);
  };

  /* ---------- UI helpers ---------- */
  const UI = (NL.ui = {});
  /** Dutch text: whole element speaks on click, single words open the dictionary on click */
  UI.dutch = function (text, opts) {
    opts = opts || {};
    const el = h('span.nl' + (opts.big ? '.big-nl' : ''));
    const parts = String(text).split(/(\s+)/);
    for (const p of parts) {
      if (!p.trim()) { el.appendChild(document.createTextNode(p)); continue; }
      const w = h('span.w', p);
      w.addEventListener('click', (e) => { e.stopPropagation(); NL.sfx.tap(); D.popup(p.replace(/[^\p{L}\p{N}'-]/gu, '')); });
      el.appendChild(w);
    }
    el.appendChild(h('span.spk', { 'aria-hidden': 'true' }, '\u{1F50A}'));
    T.bind(el, text, opts);
    return el;
  };
  UI.playButton = function (text, opts) {
    opts = opts || {};
    const b = h('button.play-big' + (opts.slow ? '.slow' : ''), { type: 'button', 'aria-label': opts.slow ? 'Play slowly' : 'Play audio' }, opts.slow ? '\u{1F422}' : '▶');
    b.addEventListener('click', () => T.speak(text, { rate: opts.slow ? 'slow' : undefined }));
    return b;
  };
  UI.audioRow = (text) => h('div.row', { style: { justifyContent: 'center', marginBottom: '16px' } }, UI.playButton(text), UI.playButton(text, { slow: true }));

  /* ---------- Exercise renderers ---------- */
  const X = (NL.exercises = {});
  const LABEL = { mc: 'Choose', listen: 'Listen and choose', article: 'de or het?', fill: 'Fill in', plural: 'Plural', translate: 'Translate', build: 'Build the sentence', conj: 'Conjugate', dictation: 'Dictation', speak: 'Say it', freespeak: 'Free speaking', match: 'Match the pairs', read: 'Read', fix: 'Fix the mistake', write: 'Write' };
  X.label = (t) => LABEL[t] || t;
  const PRON_EN = { ik: 'I', jij: 'you', je: 'you', u: 'you (formal)', hij: 'he', zij: 'she', ze: 'she / they', het: 'it', wij: 'we', we: 'we', jullie: 'you (plural)', men: 'one' };

  function res(ok, extra) { return Object.assign({ ok, quality: ok ? 4 : 1 }, extra); }

  function typeHeader(ex, extra) { return h('div.ex-type', X.label(ex.type), extra); }

  /* Options list used by mc / listen */
  function optionList(options, opts, onPick) {
    opts = opts || {};
    const wrap = h('div.options', { role: 'listbox' });
    let selected = -1;
    const buttons = options.map((o, i) => {
      const b = h('button.opt' + (opts.nl ? '.nl' : ''), { type: 'button', role: 'option', 'aria-selected': 'false' }, h('span.k', String(i + 1)), h('span', o));
      b.addEventListener('click', () => { if (b.disabled) return; select(i); onPick(i); });
      wrap.appendChild(b);
      return b;
    });
    function select(i) { selected = i; buttons.forEach((b, k) => { b.classList.toggle('selected', k === i); b.setAttribute('aria-selected', String(k === i)); }); }
    return {
      el: wrap, get selected() { return selected; }, select,
      key(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { select((selected + 1) % options.length); return true; }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { select((selected - 1 + options.length) % options.length); return true; }
        if (/^[1-9]$/.test(e.key) && +e.key <= options.length) { select(+e.key - 1); onPick(+e.key - 1); return true; }
        return false;
      },
      finish(answer) {
        buttons.forEach((b, k) => { b.disabled = true; if (k === answer) b.classList.add('correct'); else if (k === selected) b.classList.add('wrong'); });
        if (opts.nl) buttons.forEach((b, k) => { b.disabled = false; b.onclick = () => T.speak(options[k]); });
      },
    };
  }

  X.mc = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    if (ex.nl) el.appendChild(h('div.ex-nl', UI.dutch(ex.nl)));
    el.appendChild(h('div.ex-q', ex.q));
    const list = optionList(ex.options, { nl: ex.optNl }, () => ctx.autoCheck(ctl.check()));
    el.appendChild(list.el);
    const ctl = {
      el, ready: () => list.selected >= 0,
      check() { if (list.selected < 0) return null; const ok = list.selected === ex.answer; return res(ok, { correctText: ex.options[ex.answer], correctNl: ex.optNl, explain: ex.explain, userText: ex.options[list.selected] }); },
      key: (e) => list.key(e), finish: () => list.finish(ex.answer),
    };
    return ctl;
  };

  X.listen = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    el.appendChild(h('p.muted', 'Listen, then choose what it means.'));
    el.appendChild(UI.audioRow(ex.nl));
    const list = optionList(ex.options, {}, () => ctx.autoCheck(ctl.check()));
    el.appendChild(list.el);
    setTimeout(() => T.speak(ex.nl), 250);
    const ctl = {
      el, ready: () => list.selected >= 0,
      check() { if (list.selected < 0) return null; const ok = list.selected === ex.answer; return res(ok, { correctText: ex.nl, correctNl: true, sub: ex.options[ex.answer], explain: ex.explain, userText: ex.options[list.selected] }); },
      key: (e) => list.key(e), finish: () => list.finish(ex.answer),
    };
    return ctl;
  };

  X.article = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    el.appendChild(h('div.ex-nl', { style: { textAlign: 'center', fontSize: '2.2rem' } }, UI.dutch(ex.word)));
    const options = ['de', 'het'];
    const list = optionList(options, { nl: true }, () => ctx.autoCheck(ctl.check()));
    list.el.classList.add('options-row');
    U.$$('.k', list.el).forEach((k) => k.remove());
    el.appendChild(list.el);
    const ans = options.indexOf(ex.answer);
    const ctl = {
      el, ready: () => list.selected >= 0,
      check() { if (list.selected < 0) return null; const ok = list.selected === ans; return res(ok, { correctText: ex.answer + ' ' + ex.word, correctNl: true, explain: ex.explain, userText: options[list.selected] }); },
      key: (e) => list.key(e), finish: () => list.finish(ans),
    };
    return ctl;
  };

  function textInput(opts) {
    opts = opts || {};
    const inp = h(opts.multi ? 'textarea.input' : 'input.input', { type: 'text', autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false', lang: opts.lang || 'nl', placeholder: opts.placeholder || '', 'aria-label': opts.label || 'Your answer' });
    inp.addEventListener('input', () => opts.onInput && opts.onInput(inp.value));
    return inp;
  }

  X.fill = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    const parts = ex.nl.split('___');
    const inp = textInput({ onInput: () => ctx.setReady(ctl.ready()), label: 'Missing word' });
    inp.size = Math.max(6, Math.max(...ex.answer.map((a) => a.length)) + 2);
    const line = h('div.fill-line');
    parts.forEach((p, i) => { if (p) line.appendChild(UI.dutch(p.trim())); if (i < parts.length - 1) line.appendChild(inp); });
    el.appendChild(line);
    if (ex.en && ctx.showTranslations) el.appendChild(h('div.ex-en', ex.en));
    if (ex.hint) el.appendChild(h('p.muted.small', 'Hint: ' + ex.hint));
    const ctl = {
      el, ready: () => inp.value.trim().length > 0, focus: () => inp.focus(),
      check() {
        if (!ctl.ready()) return null;
        const r = C.check(inp.value, ex.answer);
        return res(r.ok, { quality: r.exact ? 5 : r.ok ? 4 : 1, correctText: ex.nl.replace('___', ex.answer[0]), correctNl: true, explain: ex.explain + (r.close ? ' (Small typo accepted: the answer is "' + ex.answer[0] + '".)' : ''), userText: inp.value });
      },
      finish(r) { inp.disabled = true; inp.classList.add(r.ok ? 'ok' : 'bad'); },
    };
    return ctl;
  };

  X.plural = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    el.appendChild(h('p.muted', 'Type the plural form.'));
    el.appendChild(h('div.ex-nl', UI.dutch(ex.word)));
    const inp = textInput({ onInput: () => ctx.setReady(ctl.ready()), placeholder: 'de …' });
    el.appendChild(inp);
    const ctl = {
      el, ready: () => inp.value.trim().length > 0, focus: () => inp.focus(),
      check() {
        if (!ctl.ready()) return null;
        const r = C.check(inp.value.replace(/^de\s+/i, ''), ex.answer, { strict: true });
        return res(r.ok, { quality: r.ok ? 5 : 1, correctText: 'de ' + ex.answer[0], correctNl: true, explain: ex.explain, userText: inp.value });
      },
      finish(r) { inp.disabled = true; inp.classList.add(r.ok ? 'ok' : 'bad'); },
    };
    return ctl;
  };

  X.translate = function (ex, ctx) {
    const el = h('div.ex');
    const toNl = ex.dir === 'en-nl';
    el.appendChild(typeHeader(ex, h('span.pill', toNl ? 'English → Dutch' : 'Dutch → English')));
    if (toNl) el.appendChild(h('div.ex-q', ex.prompt)); else el.appendChild(h('div.ex-nl', UI.dutch(ex.prompt)));
    const multi = ex.prompt.split(' ').length > 4;
    const inp = textInput({ multi, lang: toNl ? 'nl' : 'en', onInput: () => ctx.setReady(ctl.ready()), placeholder: toNl ? 'Type in Dutch' : 'Type in English' });
    el.appendChild(inp);
    if (ex.hint) el.appendChild(h('p.muted.small', 'Hint: ' + ex.hint));
    const ctl = {
      el, ready: () => inp.value.trim().length > 0, focus: () => inp.focus(),
      check() {
        if (!ctl.ready()) return null;
        const r = toNl ? C.check(inp.value, ex.answer) : C.checkEn(inp.value, ex.answer);
        return res(r.ok, { quality: r.exact ? 5 : r.ok ? 4 : 1, correctText: ex.answer[0], correctNl: toNl, explain: ex.explain + (r.close ? ' (Accepted with a small typo.)' : ''), userText: inp.value, diff: r.ok ? null : r.diff });
      },
      finish(r) { inp.disabled = true; inp.classList.add(r.ok ? 'ok' : 'bad'); },
    };
    return ctl;
  };

  X.conj = function (ex, ctx) {
    const el = h('div.ex');
    const v = NL.content.vocab[ex.verb] || Object.values(NL.content.vocab).find((x) => x.nl === ex.verb);
    const tenseName = { pres: 'present', past: 'simple past', perf: 'perfect' }[ex.tense] || ex.tense;
    el.appendChild(typeHeader(ex, h('span.pill', tenseName)));
    el.appendChild(h('div.ex-q', h('span.nl', { style: { fontSize: '1.4rem' } }, T.say(ex.verb)), h('span.muted', ' (' + ((v && v.en) || '') + ')')));
    const inp = textInput({ onInput: () => ctx.setReady(ctl.ready()) });
    inp.size = 12;
    const line = h('div.fill-line', h('span', ex.pronoun), inp, ex.tail ? h('span', ex.tail) : null);
    el.appendChild(line);
    el.appendChild(h('div.ex-en', PRON_EN[ex.pronoun] + ' ' + ((v && v.en) || '').replace(/^to /, '') + (ex.tail ? ' ' + ex.tail : '') + ' (' + tenseName + ')'));
    const ctl = {
      el, ready: () => inp.value.trim().length > 0, focus: () => inp.focus(),
      check() {
        if (!ctl.ready()) return null;
        const r = C.check(inp.value, ex.answer, { strict: true });
        return res(r.ok, { quality: r.ok ? 5 : 1, correctText: ex.pronoun + ' ' + ex.answer[0] + (ex.tail ? ' ' + ex.tail : ''), correctNl: true, explain: ex.explain, userText: inp.value });
      },
      finish(r) { inp.disabled = true; inp.classList.add(r.ok ? 'ok' : 'bad'); },
    };
    return ctl;
  };

  X.dictation = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    el.appendChild(h('p.muted', 'Listen and type what you hear in Dutch.'));
    el.appendChild(UI.audioRow(ex.nl));
    const inp = textInput({ multi: ex.nl.split(' ').length > 5, onInput: () => ctx.setReady(ctl.ready()), placeholder: 'Type the Dutch sentence' });
    el.appendChild(inp);
    setTimeout(() => T.speak(ex.nl), 250);
    const ctl = {
      el, ready: () => inp.value.trim().length > 0, focus: () => inp.focus(),
      check() {
        if (!ctl.ready()) return null;
        const r = C.check(inp.value, [ex.nl]);
        return res(r.ok, { quality: r.exact ? 5 : r.ok ? 4 : 1, correctText: ex.nl, correctNl: true, sub: ex.en, explain: ex.explain, userText: inp.value, diff: r.diff });
      },
      finish(r) { inp.disabled = true; inp.classList.add(r.ok ? 'ok' : 'bad'); },
    };
    return ctl;
  };

  X.fix = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    el.appendChild(h('p.muted', 'This sentence contains one mistake. Correct it.'));
    el.appendChild(h('div.ex-nl', { style: { textDecoration: 'underline wavy var(--bad)', textUnderlineOffset: '6px' } }, ex.wrong));
    if (ex.en && ctx.showTranslations) el.appendChild(h('div.ex-en', ex.en));
    const inp = textInput({ multi: ex.wrong.split(' ').length > 6, onInput: () => ctx.setReady(ctl.ready()) });
    inp.value = ex.wrong;
    el.appendChild(inp);
    const ctl = {
      el, ready: () => inp.value.trim().length > 0 && C.norm(inp.value) !== C.norm(ex.wrong), focus: () => { inp.focus(); },
      check() {
        if (!inp.value.trim()) return null;
        const r = C.check(inp.value, ex.answer, { strict: true });
        return res(r.ok, { quality: r.ok ? 5 : 1, correctText: ex.answer[0], correctNl: true, explain: ex.explain, userText: inp.value, diff: r.diff });
      },
      finish(r) { inp.disabled = true; inp.classList.add(r.ok ? 'ok' : 'bad'); },
    };
    return ctl;
  };

  X.build = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    el.appendChild(h('div.ex-q', ex.en));
    const words = ex.answer.replace(/[.!?,]$/, '').split(/\s+/);
    const punct = /[.!?]$/.exec(ex.answer);
    const all = U.shuffle(words.map((w, i) => ({ w, i })).concat((ex.extra || []).map((w, i) => ({ w, i: 100 + i }))));
    const answer = h('div.tiles.answer', { 'aria-label': 'Your sentence' });
    const bank = h('div.tiles.bank', { 'aria-label': 'Word tiles' });
    const placed = []; // items
    const tiles = new Map();
    function render() {
      U.clear(answer);
      placed.forEach((it) => {
        const t = h('button.tile', { type: 'button', draggable: 'true' }, it.w);
        t.addEventListener('click', () => { placed.splice(placed.indexOf(it), 1); tiles.get(it).classList.remove('used'); NL.sfx.tap(); render(); });
        t.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', 'p' + placed.indexOf(it)); });
        answer.appendChild(t);
      });
      if (punct) answer.appendChild(h('span', { style: { alignSelf: 'center', fontSize: '1.4rem', fontFamily: 'var(--serif)' } }, punct[0]));
      ctx.setReady(ctl.ready());
    }
    all.forEach((it) => {
      const t = h('button.tile', { type: 'button', draggable: 'true' }, it.w);
      t.addEventListener('click', () => { if (t.classList.contains('used')) return; placed.push(it); t.classList.add('used'); NL.sfx.tap(); render(); });
      t.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', 'b' + all.indexOf(it)); });
      tiles.set(it, t);
      bank.appendChild(t);
    });
    answer.addEventListener('dragover', (e) => e.preventDefault());
    answer.addEventListener('drop', (e) => {
      e.preventDefault();
      const d = e.dataTransfer.getData('text/plain');
      if (d[0] === 'b') { const it = all[+d.slice(1)]; if (!placed.includes(it)) { placed.push(it); tiles.get(it).classList.add('used'); render(); } }
      else if (d[0] === 'p') { const it = placed.splice(+d.slice(1), 1)[0]; placed.push(it); render(); }
    });
    bank.addEventListener('dragover', (e) => e.preventDefault());
    bank.addEventListener('drop', (e) => { e.preventDefault(); const d = e.dataTransfer.getData('text/plain'); if (d[0] === 'p') { const it = placed.splice(+d.slice(1), 1)[0]; tiles.get(it).classList.remove('used'); render(); } });
    el.appendChild(answer); el.appendChild(bank);
    const ctl = {
      el, ready: () => placed.length > 0,
      check() {
        if (!placed.length) return null;
        const mine = placed.map((x) => x.w).join(' ');
        const ok = C.sameSequence(mine, ex.answer);
        return res(ok, { quality: ok ? 5 : 1, correctText: ex.answer, correctNl: true, explain: ex.explain, userText: mine + (punct ? punct[0] : '') });
      },
      finish() { U.$$('button', el).forEach((b) => (b.disabled = true)); },
    };
    render();
    return ctl;
  };

  X.match = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    el.appendChild(h('p.muted', 'Tap a Dutch word, then its English meaning.'));
    const left = U.shuffle(ex.pairs.map((p, i) => ({ t: p[0], i }))), right = U.shuffle(ex.pairs.map((p, i) => ({ t: p[1], i })));
    const grid = h('div.match');
    let selL = null, selR = null, done = 0, mistakes = 0;
    const lb = [], rb = [];
    const make = (item, side) => {
      const b = h('button.opt' + (side === 'L' ? '.nl' : ''), { type: 'button' }, item.t);
      b.addEventListener('click', () => {
        if (b.classList.contains('done')) return;
        if (side === 'L') { T.speak(item.t); if (selL) selL.b.classList.remove('selected'); selL = { item, b }; b.classList.add('selected'); }
        else { if (selR) selR.b.classList.remove('selected'); selR = { item, b }; b.classList.add('selected'); }
        if (selL && selR) {
          if (selL.item.i === selR.item.i) {
            [selL.b, selR.b].forEach((x) => { x.classList.remove('selected'); x.classList.add('done', 'correct'); });
            done++; NL.sfx.correct();
            selL = selR = null;
            if (done === ex.pairs.length) setTimeout(() => ctx.autoCheck(ctl.check()), 300);
          } else {
            mistakes++; NL.sfx.wrong();
            [selL.b, selR.b].forEach((x) => { x.classList.add('shake', 'wrong'); setTimeout(() => x.classList.remove('shake', 'wrong', 'selected'), 400); });
            selL = selR = null;
          }
        }
      });
      return b;
    };
    for (let i = 0; i < ex.pairs.length; i++) { lb.push(make(left[i], 'L')); rb.push(make(right[i], 'R')); grid.appendChild(lb[i]); grid.appendChild(rb[i]); }
    el.appendChild(grid);
    const ctl = {
      el, ready: () => done === ex.pairs.length,
      check() { if (done < ex.pairs.length) return null; return res(true, { quality: mistakes === 0 ? 5 : mistakes <= 2 ? 4 : 3, correctText: null, explain: mistakes === 0 ? 'All pairs matched without a single mistake.' : 'All matched, with ' + U.plural(mistakes, 'slip') + ' on the way. Those words come back in review.', partial: mistakes > 2 }); },
      finish() {},
    };
    return ctl;
  };

  X.read = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    const paras = ex.text.split(/\n+/);
    const box = h('div.reading');
    paras.forEach((p) => box.appendChild(h('p', UI.dutch(p))));
    el.appendChild(box);
    if (ex.en && ctx.showTranslations) { const det = h('details', h('summary.muted.small', 'Show translation')); det.appendChild(h('p.muted', ex.en)); el.appendChild(det); }
    const lists = ex.qs.map((q, qi) => {
      const list = optionList(q.options, { nl: q.optNl }, () => ctx.setReady(ctl.ready()));
      el.appendChild(h('div.read-q', h('div.q', (qi + 1) + '. ' + q.q), list.el));
      return list;
    });
    const ctl = {
      el, ready: () => lists.every((l) => l.selected >= 0),
      check() {
        if (!ctl.ready()) return null;
        const results = ex.qs.map((q, i) => lists[i].selected === q.answer);
        const n = results.filter(Boolean).length;
        const explain = ex.qs.map((q, i) => (results[i] ? '✓ ' : '✗ ') + (i + 1) + '. ' + q.explain).join('\n');
        const ok = n === ex.qs.length;
        return res(ok, { quality: ok ? 5 : n >= ex.qs.length / 2 ? 3 : 1, partial: !ok && n > 0, correctText: null, explain, sub: n + ' of ' + ex.qs.length + ' correct' });
      },
      key: (e) => false,
      finish() { ex.qs.forEach((q, i) => lists[i].finish(q.answer)); },
    };
    return ctl;
  };

  /* ---- Voice exercises ---- */
  function micBlock(target, ctx, onFinal) {
    const wrap = h('div.mic-wrap');
    const btn = h('button.mic-btn', { type: 'button', 'aria-label': 'Start recording' }, '\u{1F399}️');
    const status = h('div.muted.small', NL.stt.supported() ? 'Tap the mic, then speak in Dutch.' : '');
    const transcript = h('div.transcript');
    let stop = null;
    btn.addEventListener('click', () => {
      if (NL.stt.listening()) { stop && stop(); return; }
      NL.tts.stop();
      U.clear(transcript);
      stop = NL.stt.listen({
        target,
        onstart: () => { btn.classList.add('listening'); status.textContent = 'Listening… tap again to stop.'; },
        onresult: (text) => { transcript.textContent = text; },
        onend: (text) => { btn.classList.remove('listening'); status.textContent = text ? '' : 'Nothing heard. Try again, a little louder.'; if (text) onFinal(text); },
        onerror: (code) => { btn.classList.remove('listening'); status.textContent = code === 'not-allowed' ? 'Microphone access was blocked. Allow the microphone in your browser and try again.' : code === 'no-speech' ? 'No speech detected. Try again.' : 'Recognition error (' + code + '). Try again.'; },
      });
    });
    wrap.appendChild(btn); wrap.appendChild(status); wrap.appendChild(transcript);
    return { el: wrap, btn, status, transcript };
  }
  function selfGrade(onPick) {
    const wrap = h('div.self-grade');
    [['Not yet', 1, ''], ['Almost', 3, ''], ['Got it', 5, 'btn-ok']].forEach(([label, q, cls]) => {
      const b = h('button.btn' + (cls ? '.' + cls : ''), { type: 'button' }, label);
      b.addEventListener('click', () => onPick(q));
      wrap.appendChild(b);
    });
    return wrap;
  }
  function fallbackNotice() {
    const hint = NL.stt.bestBrowserHint();
    return h('div.notice', hint || 'Speech recognition is not available here.', ' You can still do this exercise: listen to the model, say it out loud, then grade yourself.');
  }

  X.speak = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex, h('span.pill.pill-accent', '+5 XP voice bonus')));
    el.appendChild(h('p.muted', 'Say this sentence out loud.'));
    el.appendChild(h('div.ex-nl', { style: { textAlign: 'center' } }, UI.dutch(ex.nl)));
    if (ctx.showTranslations) el.appendChild(h('div.ex-en', { style: { textAlign: 'center' } }, ex.en));
    el.appendChild(UI.audioRow(ex.nl));
    let result = null;
    if (NL.stt.supported()) {
      const mic = micBlock(ex.nl, ctx, (text) => {
        const cmp = NL.stt.compare(ex.nl, text);
        U.clear(mic.transcript);
        const wc = h('div.wordcheck'); cmp.words.forEach((w) => wc.appendChild(h('span.' + (w.ok ? 'ok' : 'no'), w.w)));
        mic.transcript.appendChild(wc);
        mic.transcript.appendChild(h('div.heard', 'Heard: “' + text + '” · score ' + cmp.score + '%'));
        result = res(cmp.pass, { quality: cmp.score >= 90 ? 5 : cmp.score >= 70 ? 4 : cmp.score >= 40 ? 2 : 1, partial: !cmp.pass && cmp.score >= 40, voice: true, correctText: ex.nl, correctNl: true, sub: ex.en, explain: cmp.pass ? 'Good pronunciation: ' + cmp.words.filter((w) => w.ok).length + ' of ' + cmp.words.length + ' words recognised.' : 'The struck-through words were not recognised. Listen again to the model (try the slow button) and focus on those words. You can retry before continuing.', userText: text, retry: true });
        ctx.autoCheck(result);
      });
      el.appendChild(mic.el);
    } else {
      el.appendChild(fallbackNotice());
      el.appendChild(h('p.muted', 'How did it go?'));
      el.appendChild(selfGrade((q) => { result = res(q >= 3, { quality: q, partial: q === 3, voice: true, self: true, correctText: ex.nl, correctNl: true, sub: ex.en, explain: 'Self-graded. Keep listening and repeating: shadowing the model voice is one of the fastest ways to improve pronunciation.' }); ctx.autoCheck(result); }));
    }
    return { el, ready: () => !!result, check: () => result, finish() { U.$$('.mic-btn, .self-grade button', el).forEach((b) => (b.disabled = true)); } };
  };

  X.freespeak = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex, h('span.pill.pill-accent', '+5 XP voice bonus')));
    el.appendChild(h('div.ex-q', ex.prompt));
    if (ex.hints) el.appendChild(h('p.muted.small', 'Useful: ' + ex.hints.join(' · ')));
    let heard = '';
    if (NL.stt.supported()) {
      const mic = micBlock(null, ctx, (text) => { heard = text; mic.transcript.textContent = ''; mic.transcript.appendChild(h('div', h('span.muted.small', 'I understood: '), h('span', text))); ctx.setReady(true); modelBtn.hidden = false; });
      el.appendChild(mic.el);
    } else {
      el.appendChild(fallbackNotice());
      el.appendChild(h('p.muted', 'Answer out loud, then compare with the model answer.'));
    }
    const modelBox = h('div.model', { hidden: true }, h('div.eyebrow', 'Model answer'), h('div', UI.dutch(ex.model)), h('div.muted.small', ex.modelEn));
    const modelBtn = h('button.btn.btn-sm', { type: 'button', hidden: NL.stt.supported() }, 'Show model answer');
    let result = null;
    const grade = selfGrade((q) => { result = res(q >= 3, { quality: q, partial: q === 3, voice: true, self: true, correctText: ex.model, correctNl: true, sub: ex.modelEn, explain: q >= 5 ? 'Great. Try to reuse the model’s phrases next time you speak.' : 'Compare your answer with the model. Notice the word order and the verb forms, then say the model answer once more.', userText: heard }); ctx.autoCheck(result); });
    grade.hidden = true;
    modelBtn.addEventListener('click', () => { modelBox.hidden = false; modelBtn.hidden = true; grade.hidden = false; T.speak(ex.model); });
    el.appendChild(modelBtn); el.appendChild(modelBox); el.appendChild(h('p.muted', { style: { marginTop: '12px' } }, 'How close was your answer?')); el.appendChild(grade);
    if (!NL.stt.supported()) modelBtn.hidden = false;
    return { el, ready: () => !!result, check: () => result, finish() { U.$$('button', el).forEach((b) => (b.disabled = true)); } };
  };

  X.write = function (ex, ctx) {
    const el = h('div.ex');
    el.appendChild(typeHeader(ex));
    el.appendChild(h('div.ex-q', ex.prompt));
    const ta = textInput({ multi: true, placeholder: 'Write in Dutch…', onInput: () => {} });
    el.appendChild(ta);
    const cl = h('div.checklist');
    ex.checklist.forEach((c) => cl.appendChild(h('label', h('input', { type: 'checkbox' }), h('span', c))));
    const modelBox = h('div.model', { hidden: true }, h('div.eyebrow', 'Model answer'), h('div', UI.dutch(ex.model)), ex.modelEn ? h('div.muted.small', ex.modelEn) : null);
    const modelBtn = h('button.btn.btn-sm', { type: 'button' }, 'Show model answer and checklist');
    const after = h('div', { hidden: true }, h('p', { style: { marginTop: '12px' } }, 'Check your text against the list, then grade yourself.'), cl);
    let result = null;
    const grade = selfGrade((q) => { const ticked = U.$$('input:checked', cl).length; result = res(q >= 3, { quality: q, partial: q === 3, self: true, correctText: null, explain: 'Self-graded: ' + ticked + ' of ' + ex.checklist.length + ' checklist items. Rewrite the sentences you were unsure about using the model as a guide.', userText: ta.value }); ctx.autoCheck(result); });
    modelBtn.addEventListener('click', () => { if (ta.value.trim().length < 5) { U.toast('Write a few words first'); ta.focus(); return; } modelBox.hidden = false; after.hidden = false; modelBtn.hidden = true; });
    el.appendChild(modelBtn); el.appendChild(modelBox); el.appendChild(after); after.appendChild(grade);
    return { el, ready: () => !!result, check: () => result, focus: () => ta.focus(), finish() { ta.disabled = true; U.$$('button', el).forEach((b) => (b.disabled = true)); } };
  };

  X.render = function (ex, ctx) {
    const fn = X[ex.type];
    if (!fn) { return { el: h('div.notice', 'Unknown exercise type ' + ex.type), ready: () => true, check: () => res(true, { explain: '' }), finish() {} }; }
    return fn(ex, ctx);
  };
})();
