/* Sound pairs: a pronunciation trainer with minimal pairs (content in js/content/stage5-sounds.js).
   Listen mode: the voice says one word of a pair, the learner picks which. Speak mode: the learner says the shown word
   and speech recognition checks that it heard that word and not its partner. Results go into XP, the listening and
   speaking skill bars, and a per-set best score in state.sounds. */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h, T = NL.tts;
  const Snd = (NL.sounds = {});
  const ROUNDS = 12;

  const sets = () => NL.content.soundSets || [];
  const best = () => { const s = NL.state.get(); s.sounds = s.sounds || {}; return s.sounds; };
  Snd.find = (id) => sets().find((x) => x.id === id);

  /** Overview: one card per contrast with its best score */
  Snd.view = function (host, id, mode) {
    if (id) { const set = Snd.find(id); if (set) return mode === 'speak' ? Snd.speak(host, set) : mode === 'listen' ? Snd.listen(host, set) : Snd.detail(host, set); }
    host.appendChild(h('div.eyebrow', 'Pronunciation'));
    host.appendChild(h('h1', 'Sound pairs'));
    host.appendChild(h('p.muted', 'Dutch has sounds that English does not, and swapping them changes the word: huid is skin, houd is "I hold". Train your ear first, then your mouth.'));
    const grid = h('div.grid');
    sets().forEach((set) => {
      const b = best()[set.id] || {};
      grid.appendChild(h('a.card.stage-card', { href: '#/sounds/' + set.id },
        h('div.row.row-between', h('span', { style: { fontSize: '1.6rem' }, 'aria-hidden': 'true' }, set.icon), h('span.pill' + (b.listen >= 90 ? '.pill-ok' : ''), b.listen != null ? 'ear ' + b.listen + '%' : set.level)),
        h('h3', set.title), h('p.muted.small', set.pairs.slice(0, 3).map((p) => p.a + ' / ' + p.b).join(' · ')),
        NL.views.bar ? NL.views.bar(b.listen || 0, b.listen >= 90 ? 'ok' : '', 'Best listening score') : null));
    });
    host.appendChild(grid);
  };

  /** One contrast: the tip, every pair with audio, and the two practice buttons */
  Snd.detail = function (host, set) {
    host.appendChild(h('div.eyebrow', h('a', { href: '#/sounds' }, 'Sound pairs'), ' · ' + set.level));
    host.appendChild(h('h1', set.title));
    host.appendChild(h('div.tip', h('b', 'How to make the sounds'), set.tip));
    const list = h('div.ref-list.pair-list');
    set.pairs.forEach((p) => list.appendChild(h('div.dict-row.pair-row', h('div', T.say(p.a), h('span.en', p.aEn)), h('span.vs', 'vs'), h('div', T.say(p.b), h('span.en', p.bEn)))));
    host.appendChild(list);
    const b = best()[set.id] || {};
    host.appendChild(h('div.row.mt-4',
      h('a.btn.btn-primary.btn-lg', { href: '#/sounds/' + set.id + '/listen' }, 'Train your ear'),
      h('a.btn.btn-lg', { href: '#/sounds/' + set.id + '/speak' }, NL.stt.supported() ? 'Say them' : 'Say them (self-check)')));
    if (b.listen != null || b.speak != null) host.appendChild(h('p.muted.small.mt-2', 'Best so far: ' + [b.listen != null ? 'listening ' + b.listen + '%' : null, b.speak != null ? 'speaking ' + b.speak + '%' : null].filter(Boolean).join(' · ')));
  };

  function rounds(set) {
    const out = [];
    while (out.length < ROUNDS) U.shuffle(set.pairs.slice()).forEach((p) => { if (out.length < ROUNDS) out.push({ p, pickA: Math.random() < 0.5 }); });
    return out;
  }
  function frame(host, set, title) {
    U.clear(host);
    const top = h('div.lesson-top');
    const barEl = h('div.bar', { style: { width: '0%' } });
    const prog = h('div.progress.progress-lg', barEl);
    top.appendChild(h('a.btn-icon', { href: '#/sounds/' + set.id, 'aria-label': 'Leave' }, '×')); top.appendChild(prog);
    host.appendChild(top);
    host.appendChild(h('div.eyebrow', set.title + ' · ' + title));
    const body = h('div.session-body');
    host.appendChild(body);
    return { body, setProgress: (i) => { barEl.style.width = Math.round((i / ROUNDS) * 100) + '%'; } };
  }
  function done(host, set, kind, score, total) {
    const pct = Math.round((score / total) * 100);
    const b = best(); b[set.id] = b[set.id] || {}; b[set.id][kind] = Math.max(b[set.id][kind] || 0, pct); NL.state.save();
    NL.game.addXP(Math.round(score * 2));
    U.clear(host);
    host.appendChild(h('div.card', { style: { textAlign: 'center' } },
      h('div.eyebrow', set.title + ' · ' + (kind === 'listen' ? 'listening' : 'speaking')),
      h('div', { style: { fontSize: '3rem', fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--accent)' } }, pct + '%'),
      h('p', score + ' of ' + total + ' right. ' + (pct >= 90 ? 'Your ' + (kind === 'listen' ? 'ear' : 'mouth') + ' has this contrast.' : pct >= 70 ? 'Getting there. One more round makes it stick.' : 'This one is hard for everyone at first. Reread the tip and listen to the pairs again.'))));
    host.appendChild(h('div.row.mt-4', { style: { justifyContent: 'center' } },
      h('a.btn.btn-primary', { href: '#/sounds/' + set.id + '/' + kind, onclick: () => setTimeout(() => NL.app.render(), 0) }, 'Again'),
      h('a.btn', { href: '#/sounds/' + set.id + '/' + (kind === 'listen' ? 'speak' : 'listen') }, kind === 'listen' ? 'Now say them' : 'Train your ear'),
      h('a.btn.btn-ghost', { href: '#/sounds' }, 'All sound pairs')));
    NL.app.updateHeader && NL.app.updateHeader();
  }

  /** Listen mode: hear one word, choose it */
  Snd.listen = function (host, set) {
    const rs = rounds(set); let i = 0, score = 0;
    const f = frame(host, set, 'listening');
    function next() {
      if (i >= rs.length) return done(host, set, 'listen', score, rs.length);
      f.setProgress(i);
      const r = rs[i]; const word = r.pickA ? r.p.a : r.p.b;
      U.clear(f.body);
      f.body.appendChild(h('div.ex-type', 'Which word do you hear?'));
      const play = h('button.btn.btn-lg.btn-block', { type: 'button', onclick: () => T.speak(word) }, '\u{1F50A} Play again');
      f.body.appendChild(h('div.mt-4', play));
      const opts = h('div.options.options-row.mt-4');
      const fb = h('div');
      const choose = (w, btn) => {
        if (opts.dataset.done) return; opts.dataset.done = '1';
        const ok = w === word; if (ok) { score++; NL.sfx.correct(); } else NL.sfx.wrong();
        NL.game.answer({ correct: ok, type: 'listen', skill: 'listening', xp: 0 });
        [...opts.children].forEach((b) => { b.disabled = true; if (b.dataset.w === word) b.classList.add('correct'); else if (b === btn) b.classList.add('wrong'); });
        fb.appendChild(h('div.feedback.' + (ok ? 'ok' : 'bad'), h('h3', ok ? 'Goed gehoord!' : 'It was ' + word),
          h('p.explain', r.p.a + ' = ' + r.p.aEn + ', ' + r.p.b + ' = ' + r.p.bEn + '. ', h('button.btn.btn-sm', { type: 'button', onclick: () => T.speak(r.p.a, { onend: () => setTimeout(() => T.speak(r.p.b), 300) }) }, 'Hear both'))));
        cont.hidden = false; cont.focus();
      };
      [r.p.a, r.p.b].forEach((w) => { const b = h('button.opt.nl', { type: 'button', 'data-w': w }, h('span', w)); b.addEventListener('click', () => choose(w, b)); opts.appendChild(b); });
      f.body.appendChild(opts); f.body.appendChild(fb);
      const cont = h('button.btn.btn-primary.btn-lg.btn-block.mt-4', { type: 'button', hidden: true, onclick: () => { i++; next(); } }, i === rs.length - 1 ? 'Finish' : 'Next');
      f.body.appendChild(cont);
      setTimeout(() => T.speak(word), 250);
    }
    next();
  };

  /** Speak mode: say the shown word; recognition must hear it and not its partner. Without recognition: self-check against the model. */
  Snd.speak = function (host, set) {
    const rs = rounds(set).slice(0, 8); let i = 0, score = 0;
    const f = frame(host, set, 'speaking');
    const total = rs.length;
    function next() {
      if (i >= total) return done(host, set, 'speak', score, total);
      f.setProgress((i / total) * ROUNDS);
      const r = rs[i]; const word = r.pickA ? r.p.a : r.p.b; const other = r.pickA ? r.p.b : r.p.a; const en = r.pickA ? r.p.aEn : r.p.bEn;
      U.clear(f.body);
      f.body.appendChild(h('div.ex-type', 'Say this word'));
      f.body.appendChild(h('div.ex-nl', { style: { textAlign: 'center', fontSize: '2.6rem' } }, word));
      f.body.appendChild(h('p.muted', { style: { textAlign: 'center' } }, en + ' · not ' + other));
      const fb = h('div');
      const cont = h('button.btn.btn-primary.btn-lg.btn-block.mt-4', { type: 'button', hidden: true, onclick: () => { i++; next(); } }, i === total - 1 ? 'Finish' : 'Next');
      const finish = (ok, heard) => {
        if (ok) { score++; NL.sfx.correct(); } else NL.sfx.wrong();
        NL.game.answer({ correct: ok, type: 'speak', skill: 'speaking', voice: heard != null, xp: 0 });
        fb.appendChild(h('div.feedback.' + (ok ? 'ok' : 'bad'), h('h3', ok ? 'Duidelijk!' : heard ? 'I heard: ' + heard : 'Keep practising'), h('p.explain', ok ? 'That was ' + word + ', clearly not ' + other + '.' : 'Listen to both and feel the difference in your mouth. ', ok ? null : h('button.btn.btn-sm', { type: 'button', onclick: () => T.speak(word, { onend: () => setTimeout(() => T.speak(other), 300) }) }, 'Hear ' + word + ' then ' + other))));
        cont.hidden = false; cont.focus();
      };
      const row = h('div.row.mt-4', { style: { justifyContent: 'center' } }, h('button.btn', { type: 'button', onclick: () => T.speak(word) }, '\u{1F50A} Hear it'));
      if (NL.stt.supported()) {
        const mic = h('button.btn.btn-primary.btn-lg', { type: 'button' }, '\u{1F399}️ Hold on, tap and say it');
        mic.textContent = '\u{1F399}️ Tap and say it';
        mic.addEventListener('click', () => {
          mic.disabled = true; mic.textContent = 'Listening…';
          NL.stt.listen({ target: word, maxMs: 4000, onend: (heard) => {
            mic.disabled = false; mic.textContent = '\u{1F399}️ Try again';
            const hw = (heard || '').toLowerCase().replace(/[^a-zà-ÿ ]/g, ' ').split(/\s+/).filter(Boolean);
            if (!hw.length) { fb.textContent = ''; fb.appendChild(h('p.muted.small', 'Nothing heard. Tap the microphone and say the word clearly.')); return; }
            if (fb.firstChild && fb.firstChild.classList && fb.firstChild.classList.contains('feedback')) return;
            U.clear(fb);
            finish(hw.includes(word) && !hw.includes(other), heard);
          }, onerror: (e) => { mic.disabled = false; mic.textContent = '\u{1F399}️ Tap and say it'; U.clear(fb); fb.appendChild(h('p.muted.small', e === 'not-allowed' ? 'Microphone access was blocked. Allow it in the browser to use this mode.' : 'The microphone did not start (' + e + '). Try again.')); } });
        });
        row.appendChild(mic);
      } else {
        row.appendChild(h('button.btn.btn-ok', { type: 'button', onclick: () => finish(true, null) }, 'I said it right'));
        row.appendChild(h('button.btn', { type: 'button', onclick: () => finish(false, null) }, 'Not yet'));
        f.body.appendChild(h('p.muted.small', { style: { textAlign: 'center' } }, 'This browser has no speech recognition: say the word, compare with "Hear it", and grade yourself honestly.'));
      }
      f.body.appendChild(row); f.body.appendChild(fb); f.body.appendChild(cont);
    }
    next();
  };
})();
