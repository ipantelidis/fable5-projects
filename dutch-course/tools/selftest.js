/* Browser self-test: drives the real app in a headless browser. Results go to <pre id="test-results">. */
(function () {
  'use strict';
  const out = [];
  const results = { pass: 0, fail: 0 };
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  function ok(name, cond, detail) { if (cond) { results.pass++; out.push('PASS ' + name); } else { results.fail++; out.push('FAIL ' + name + (detail ? ' — ' + detail : '')); } }
  function finish() {
    const errs = window.__errors || [];
    out.push('');
    out.push('errors captured: ' + errs.length);
    errs.forEach((e) => out.push('  ' + e));
    out.push('');
    out.push('SUMMARY pass=' + results.pass + ' fail=' + (results.fail + (errs.length ? 1 : 0)));
    document.getElementById('test-results').textContent = out.join('\n');
  }
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const view = () => $('#view');

  async function nav(hash) { location.hash = hash; await sleep(30); NL.app.render(); await sleep(30); }

  /** Answer the current exercise correctly using the exercise data */
  function answerCurrent(sess, wrong) {
    const ex = sess.current, el = sess.ctl.el;
    const setInput = (v) => { const inp = $('input.input, textarea.input', el); inp.value = v; inp.dispatchEvent(new Event('input', { bubbles: true })); };
    switch (ex.type) {
      case 'mc': case 'listen': { const idx = wrong ? (ex.answer + 1) % ex.options.length : ex.answer; $$('.opt', el)[idx].click(); return; }
      case 'article': { $$('.opt', el)[wrong ? (ex.answer === 'de' ? 1 : 0) : (ex.answer === 'de' ? 0 : 1)].click(); return; }
      case 'fill': case 'plural': case 'conj': case 'translate': case 'dictation': case 'fix': {
        const a = ex.type === 'dictation' ? ex.nl : ex.answer[0];
        setInput(wrong ? 'xxqqzz' : a); sess.primary.click(); return;
      }
      case 'build': { const words = ex.answer.replace(/[.!?,]$/, '').split(/\s+/); const tiles = $$('.tiles.bank .tile', el); for (const w of words) { const t = tiles.find((x) => x.textContent === w && !x.classList.contains('used')); t.click(); } sess.primary.click(); return; }
      case 'match': { for (const [nl, en] of ex.pairs) { $$('.match .opt', el).find((b) => b.textContent === nl && !b.classList.contains('done')).click(); $$('.match .opt', el).find((b) => b.textContent === en && !b.classList.contains('done')).click(); } return; }
      case 'read': { ex.qs.forEach((q, i) => { const lists = $$('.read-q .options', el); $$('.opt', lists[i])[q.answer].click(); }); sess.primary.click(); return; }
      case 'speak': case 'freespeak': case 'write': {
        if (ex.type === 'write') { setInput('Ik ben Jan en ik woon in Amsterdam.'); $$('button.btn', el).find((b) => /model/i.test(b.textContent)).click(); }
        if (ex.type === 'freespeak') { const mb = $$('button.btn', el).find((b) => /model/i.test(b.textContent)); if (mb && !mb.hidden) mb.click(); }
        const g = $$('.self-grade button', el).find((b) => b.textContent === 'Got it'); if (g) g.click(); else out.push('  (no self-grade button for ' + ex.type + ')');
        return;
      }
    }
  }

  async function runSession(sess, opts) {
    opts = opts || {};
    let guard = 0;
    while (NL.session.active() === sess && guard++ < 200) {
      const before = sess.current;
      answerCurrent(sess, opts.wrongEvery && guard % opts.wrongEvery === 0);
      for (let w = 0; w < 12 && NL.session.active() === sess && !sess.isChecked(); w++) await sleep(50);
      if (NL.session.active() !== sess) break;
      if (!sess.isChecked()) { out.push('  not checked after answering ' + before.type + ' (' + JSON.stringify(before).slice(0, 80) + ')'); sess.primary.disabled = false; sess.primary.click(); }
      if (!sess.isChecked()) return false;
      sess.primary.click();
      await sleep(20);
    }
    return guard < 200;
  }

  async function main() {
    try {
      ok('app booted', window.__NL_READY === true);
      out.push('  viewport ' + window.innerWidth + 'x' + window.innerHeight + ', scrollWidth ' + document.documentElement.scrollWidth);
      ok('no horizontal overflow on home', document.documentElement.scrollWidth <= window.innerWidth, 'scrollWidth ' + document.documentElement.scrollWidth + ' > ' + window.innerWidth);
      ok('no load errors', (window.__errors || []).length === 0, (window.__errors || []).join('; '));

      // content
      const v = NL.validate();
      ok('content validates', v.ok, v.errors.slice(0, 5).join(' | '));
      out.push('  counts ' + JSON.stringify(v.counts) + ', warnings ' + v.warnings.length);
      ok('stage 0 present', !!NL.contentApi.findStage('s0'));

      // checker
      const C = NL.checker;
      ok('checker exact', C.check('Ik ben Jan.', ['ik ben jan']).exact);
      ok('checker typo tolerant', C.check('Ik woon in Amsterdm', ['Ik woon in Amsterdam.']).ok);
      ok('checker rejects wrong', !C.check('Ik ben Piet', ['Ik ben Jan']).ok);
      ok('checker strict', !C.check('bnet', ['bent'], { strict: true }).ok);
      ok('checker contraction', C.check("'t huis", ['het huis']).exact);
      ok('checkEn article', C.checkEn('the house', ['house']).ok);
      ok('normalize ij', NL.util.normalize('IJs, ĳs') === 'ijs ijs');

      // stt compare
      const cmp = NL.stt.compare('Ik woon in Amsterdam.', 'ik woon in amsterdam');
      ok('stt compare full match', cmp.score === 100 && cmp.pass);
      const cmp2 = NL.stt.compare('Goedemorgen, hoe gaat het?', 'goede morgen hoe gaat het');
      ok('stt compare compound join', cmp2.score >= 90, 'score ' + cmp2.score);
      const cmp3 = NL.stt.compare('Ik heb twee katten.', 'ik heb 2 katten');
      ok('stt compare digits', cmp3.score === 100, 'score ' + cmp3.score);
      ok('stt compare partial', NL.stt.compare('Ik ga naar de winkel', 'ik ga naar huis').score < 70);
      ok('numToWords', NL.stt.numToWords(21) === 'eenentwintig' && NL.stt.numToWords(1000) === 'duizend' && NL.stt.numToWords(43) === 'drieënveertig');

      // SRS
      const c = NL.srs.review('huis', 4, 'vocab');
      ok('srs first review interval 1', c.interval === 1 && c.reps === 1);
      NL.srs.review('huis', 4); NL.srs.review('huis', 5); NL.srs.review('huis', 5);
      ok('srs interval grows', NL.srs.card('huis').interval >= 7, 'interval ' + NL.srs.card('huis').interval);
      NL.srs.review('huis', 1);
      ok('srs lapse resets', NL.srs.card('huis').interval === 0 && NL.srs.card('huis').lapses === 1);
      ok('srs due includes lapsed', NL.srs.due().some((x) => x.id === 'huis'));

      // game
      const s = NL.state.get();
      const xp0 = s.xp;
      NL.game.answer({ correct: true, type: 'fill', combo: 1 });
      ok('xp awarded', s.xp === xp0 + 10);
      ok('streak started', NL.game.streakCurrent() === 1);
      ok('level title', NL.game.level(0).title === 'Toerist' && NL.game.level(1500).title === 'Amsterdammer');

      // views
      for (const route of ['#/home', '#/stage/s0', '#/grammar', '#/dictionary', '#/settings', '#/review', '#/badges', '#/mode/freetalk']) {
        const e0 = window.__errors.length;
        await nav(route);
        ok('view ' + route, view().children.length > 0 && window.__errors.length === e0, window.__errors.slice(e0).join('; '));
      }
      await nav('#/unit/' + NL.contentApi.findStage('s0').units[0].id);
      ok('unit view lists lessons', $$('.lesson-row', view()).length > 0);
      const gid = Object.keys(NL.content.grammar)[0];
      await nav('#/grammar/' + gid);
      ok('grammar entry renders', $$('.card', view()).length > 0);

      // dictionary popup
      const word = $('.w', view()) || (await (async () => { await nav('#/dictionary'); return $('.dict-row'); })());
      if (word) { word.click(); await sleep(20); ok('word popup opens', !$('#word-dialog').hidden); $('#word-dialog [data-close]').click(); }

      // exercise renderers: each type renders and checks
      const X = NL.exercises;
      const ctx = { showTranslations: true, setReady() {}, autoCheck() {} };
      const samples = {
        mc: { type: 'mc', q: 'Q?', options: ['a', 'b'], answer: 1, explain: 'e' },
        listen: { type: 'listen', nl: 'Hallo', options: ['hello', 'bye'], answer: 0, explain: 'e' },
        article: { type: 'article', word: 'huis', answer: 'het', explain: 'e' },
        fill: { type: 'fill', nl: 'Ik ___ Jan.', answer: ['ben'], en: 'I am Jan', explain: 'e' },
        plural: { type: 'plural', word: 'het huis', answer: ['huizen'], explain: 'e' },
        translate: { type: 'translate', dir: 'en-nl', prompt: 'house', answer: ['huis', 'het huis'], explain: 'e' },
        build: { type: 'build', en: 'I am Jan.', answer: 'Ik ben Jan.', extra: ['is'], explain: 'e' },
        conj: { type: 'conj', verb: 'zijn', pronoun: 'jij', tense: 'pres', answer: ['bent'], explain: 'e' },
        dictation: { type: 'dictation', nl: 'Ik ben Jan.', en: 'I am Jan.', explain: 'e' },
        fix: { type: 'fix', wrong: 'Ik bent Jan.', answer: ['Ik ben Jan.'], explain: 'e' },
        match: { type: 'match', pairs: [['een', 'one'], ['twee', 'two'], ['drie', 'three']] },
        read: { type: 'read', text: 'Ik ben Jan. Ik woon in Amsterdam.', qs: [{ q: 'Where?', options: ['Amsterdam', 'Utrecht'], answer: 0, explain: 'e' }] },
        speak: { type: 'speak', nl: 'Ik ben Jan.', en: 'I am Jan.' },
        freespeak: { type: 'freespeak', prompt: 'Introduce yourself', model: 'Ik ben Jan.', modelEn: 'I am Jan.' },
        write: { type: 'write', prompt: 'Write', checklist: ['a', 'b'], model: 'Ik ben Jan.' },
      };
      for (const t in samples) {
        const e0 = window.__errors.length;
        let ctl; try { ctl = X.render(samples[t], ctx); document.body.appendChild(ctl.el); ctl.el.remove(); } catch (e) { window.__errors.push('render ' + t + ': ' + e.message); }
        ok('render ' + t, !!ctl && window.__errors.length === e0);
      }
      // typed check paths
      let ctl = X.render(samples.fill, ctx); document.body.appendChild(ctl.el); $('input', ctl.el).value = 'ben'; ok('fill check ok', ctl.check().ok); ctl.el.remove();
      ctl = X.render(samples.fill, ctx); document.body.appendChild(ctl.el); $('input', ctl.el).value = 'is'; ok('fill check wrong', !ctl.check().ok); ctl.el.remove();
      ctl = X.render(samples.build, ctx); document.body.appendChild(ctl.el); ['Ik', 'ben', 'Jan'].forEach((w) => $$('.bank .tile', ctl.el).find((x) => x.textContent === w).click()); ok('build check ok', ctl.check().ok); ctl.el.remove();
      ctl = X.render(samples.build, ctx); document.body.appendChild(ctl.el); ['Jan', 'ben', 'Ik'].forEach((w) => $$('.bank .tile', ctl.el).find((x) => x.textContent === w).click()); ok('build check wrong order', !ctl.check().ok); ctl.el.remove();

      // speech recognition path: supported → mic click must not throw; unsupported → self-grade fallback
      const supported = NL.stt.supported();
      out.push('  stt supported in this browser: ' + supported + ', tts voices: ' + NL.tts.voices().length + ', browser: ' + NL.util.browser());
      if (supported) { const e0 = window.__errors.length; ctl = X.render(samples.speak, ctx); document.body.appendChild(ctl.el); $('.mic-btn', ctl.el).click(); await sleep(150); NL.stt.stop(); ok('mic click does not throw', window.__errors.length === e0); ctl.el.remove(); }
      const realSupported = NL.stt.supported;
      NL.stt.supported = () => false;
      let got = null;
      ctl = X.render(samples.speak, { showTranslations: true, setReady() {}, autoCheck(r) { got = r; } }); document.body.appendChild(ctl.el);
      ok('speak fallback shows notice + self grade', !!$('.notice', ctl.el) && $$('.self-grade button', ctl.el).length === 3);
      $$('.self-grade button', ctl.el)[2].click();
      ok('speak fallback self-grade result', got && got.ok && got.self && got.voice);
      ctl.el.remove();
      NL.stt.supported = realSupported;
      // tts: speak() returns boolean without throwing
      ok('tts speak call safe', typeof NL.tts.speak('Hallo') === 'boolean');
      NL.tts.stop();

      // Full lesson flow: first lesson of stage 0 (force the no-microphone fallback so the driver can self-grade)
      NL.stt.supported = () => false;
      const first = NL.contentApi.allLessons()[0];
      await nav('#/lesson/' + first.lesson.id);
      ok('lesson learn screen', /Goal/.test(view().textContent));
      ok('no horizontal overflow on lesson', document.documentElement.scrollWidth <= window.innerWidth, 'scrollWidth ' + document.documentElement.scrollWidth + ' > ' + window.innerWidth);
      $$('button.btn-primary', view())[0].click(); await sleep(20);
      if (first.lesson.vocab.length) { ok('lesson vocab screen', $$('.vocab-card', view()).length === first.lesson.vocab.length); $$('button.btn-primary', view())[0].click(); await sleep(20); }
      let sess = NL.session.active();
      ok('practice session started', !!sess && !!sess.current);
      const okRun = await runSession(sess, { wrongEvery: 5 });
      ok('practice session completed', okRun && NL.session.active() !== sess);
      if (/Start the test/.test(view().textContent)) { $$('button.btn-primary', view())[0].click(); await sleep(20); sess = NL.session.active(); ok('test session started', !!sess); ok('test session completed', await runSession(sess)); }
      await sleep(50);
      ok('summary shown', /Lesson complete/.test(view().textContent), view().textContent.slice(0, 120));
      ok('lesson recorded', !!NL.state.get().lessons[first.lesson.id]);
      ok('xp increased', NL.state.get().xp > 50);
      ok('first-lesson badge', !!NL.state.get().badges['first-lesson']);
      ok('srs cards created', Object.keys(NL.state.get().srs.cards).length > 5);

      // review session
      await nav('#/review/go');
      sess = NL.session.active();
      if (sess) { ok('review session runs', await runSession(sess)); } else ok('review screen', view().children.length > 0);

      // unit review + exam smoke
      await nav('#/unit-review/' + first.unit.id);
      sess = NL.session.active(); ok('unit review starts', !!sess); if (sess) ok('unit review completes', await runSession(sess));
      await nav('#/exam/s0');
      $$('button.btn-primary', view())[0].click(); await sleep(20);
      sess = NL.session.active(); ok('exam starts', !!sess); if (sess) ok('exam completes', await runSession(sess));
      ok('exam recorded', NL.state.get().exams.s0 != null);

      // practice modes
      await nav('#/mode/speed'); ok('speed mode renders', !!$('.timer', view()));
      await nav('#/mode/listening'); sess = NL.session.active(); ok('listening mode starts', !!sess); if (sess) ok('listening mode completes', await runSession(sess));

      // export / import
      const json = NL.state.exportJSON();
      const xp = NL.state.get().xp;
      NL.state.reset();
      ok('reset clears xp', NL.state.get().xp === 0);
      NL.state.importJSON(json);
      ok('import restores xp', NL.state.get().xp === xp);
      ok('import rejects garbage', (() => { try { NL.state.importJSON('{"foo":1}'); return false; } catch (e) { return true; } })());
      ok('localStorage persisted', !!localStorage.getItem('nl.state.v1'));
    } catch (e) {
      out.push('FATAL ' + e.message + '\n' + e.stack);
      results.fail++;
    }
    finish();
  }
  setTimeout(main, 100);
})();
