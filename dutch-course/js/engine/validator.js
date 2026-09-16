/* Content validator: runs in the browser (Settings > Check content) and in node via tools/validate.js */
(function () {
  'use strict';
  const NL = window.NL;
  const TYPES = ['mc', 'fill', 'translate', 'build', 'conj', 'article', 'plural', 'dictation', 'listen', 'speak', 'freespeak', 'match', 'read', 'fix', 'write', 'auto'];
  const PRONOUNS = ['ik', 'jij', 'je', 'u', 'hij', 'zij', 'ze', 'het', 'wij', 'we', 'jullie', 'men'];

  NL.validate = function () {
    const C = NL.content;
    const errors = [], warnings = [];
    const err = (w, m) => errors.push(w + ': ' + m);
    const warn = (w, m) => warnings.push(w + ': ' + m);
    const ids = new Set();
    const uniq = (id, where) => { if (ids.has(id)) err(where, 'duplicate id ' + id); ids.add(id); };
    const nonEmpty = (v) => typeof v === 'string' && v.trim().length > 0;
    let counts = { stages: 0, units: 0, lessons: 0, exercises: 0, vocab: 0, grammar: 0, auto: 0 };

    // dictionary
    for (const id in C.vocab) {
      const v = C.vocab[id]; counts.vocab++;
      const w = 'vocab ' + id;
      if (!nonEmpty(v.nl)) err(w, 'missing nl');
      if (!nonEmpty(v.en)) err(w, 'missing en');
      if (!nonEmpty(v.pos)) err(w, 'missing pos');
      if (!v.ex || !nonEmpty(v.ex.nl) || !nonEmpty(v.ex.en)) err(w, 'missing example sentence (nl+en)');
      if (v.pos === 'noun') {
        if (v.gender !== 'de' && v.gender !== 'het' && v.gender !== 'de/het') err(w, 'noun needs gender de/het');
        if (v.plural === undefined) err(w, 'noun needs plural (use null if none)');
      }
      if (v.pos === 'verb') {
        if (!v.forms || !v.forms.pres || v.forms.pres.length < 3) err(w, 'verb needs forms.pres [stem, 3sg, plural]');
        else if (v.forms.part === undefined) err(w, 'verb needs participle (use null if none)');
        if (v.forms && v.forms.aux && !['hebben', 'zijn', 'hebben/zijn'].includes(v.forms.aux)) err(w, 'aux must be hebben or zijn');
      }
    }
    for (const id in C.grammar) {
      const g = C.grammar[id]; counts.grammar++;
      if (!nonEmpty(g.title)) err('grammar ' + id, 'missing title');
      if (!Array.isArray(g.body) || !g.body.length) err('grammar ' + id, 'empty body');
      else checkBlocks(g.body, 'grammar ' + id);
    }

    function checkBlocks(blocks, w) {
      for (const b of blocks) {
        if (b.ex) for (const e of b.ex) { if (!nonEmpty(e.nl) || !nonEmpty(e.en)) err(w, 'example needs nl and en: ' + JSON.stringify(e)); }
        if (b.table && (!b.table.head || !b.table.rows)) err(w, 'table needs head and rows');
        if (b.p && /lorem|todo|tbd|placeholder/i.test(b.p)) err(w, 'placeholder text in explanation');
      }
    }

    function checkEx(ex, w) {
      counts.exercises++;
      if (!TYPES.includes(ex.type)) { err(w, 'unknown type ' + ex.type); return; }
      const needExplain = ['mc', 'fill', 'translate', 'build', 'conj', 'article', 'plural', 'dictation', 'listen', 'fix'];
      if (needExplain.includes(ex.type) && !nonEmpty(ex.explain)) err(w, ex.type + ' needs explain');
      switch (ex.type) {
        case 'mc': case 'listen':
          if (!Array.isArray(ex.options) || ex.options.length < 2) err(w, 'needs options');
          else if (typeof ex.answer !== 'number' || ex.answer < 0 || ex.answer >= ex.options.length) err(w, 'answer index out of range');
          if (ex.type === 'listen' && !nonEmpty(ex.nl)) err(w, 'listen needs nl audio string');
          if (ex.type === 'mc' && !nonEmpty(ex.q)) err(w, 'mc needs q');
          break;
        case 'fill':
          if (!nonEmpty(ex.nl) || !/___/.test(ex.nl)) err(w, 'fill needs nl with ___');
          if (!ex.answer || !ex.answer.length || !ex.answer.every(nonEmpty)) err(w, 'fill needs answer');
          break;
        case 'translate':
          if (!['nl-en', 'en-nl'].includes(ex.dir)) err(w, 'translate dir must be nl-en or en-nl');
          if (!nonEmpty(ex.prompt)) err(w, 'translate needs prompt');
          if (!ex.answer || !ex.answer.length) err(w, 'translate needs answer');
          break;
        case 'build':
          if (!nonEmpty(ex.answer) || ex.answer.split(/\s+/).length < 2) err(w, 'build needs a multi-word answer');
          if (!nonEmpty(ex.en)) err(w, 'build needs en');
          break;
        case 'conj':
          if (!C.vocab[ex.verb] && !Object.values(C.vocab).some((v) => v.nl === ex.verb)) err(w, 'conj verb not in dictionary: ' + ex.verb);
          if (!PRONOUNS.includes(ex.pronoun)) err(w, 'conj pronoun invalid: ' + ex.pronoun);
          if (!ex.answer || !ex.answer.length) err(w, 'conj needs answer');
          break;
        case 'article':
          if (ex.answer !== 'de' && ex.answer !== 'het') err(w, 'article answer must be de or het');
          if (!nonEmpty(ex.word)) err(w, 'article needs word');
          break;
        case 'plural':
          if (!nonEmpty(ex.word) || !ex.answer || !ex.answer.length) err(w, 'plural needs word and answer'); break;
        case 'dictation': case 'speak':
          if (!nonEmpty(ex.nl)) err(w, ex.type + ' needs nl'); if (!nonEmpty(ex.en)) err(w, ex.type + ' needs en'); break;
        case 'freespeak':
          if (!nonEmpty(ex.prompt) || !nonEmpty(ex.model) || !nonEmpty(ex.modelEn)) err(w, 'freespeak needs prompt, model, modelEn'); break;
        case 'match':
          if (!Array.isArray(ex.pairs) || ex.pairs.length < 3) err(w, 'match needs 3+ pairs');
          else if (!ex.pairs.every((p) => Array.isArray(p) && nonEmpty(p[0]) && nonEmpty(p[1]))) err(w, 'match pairs need [nl, en]');
          break;
        case 'read':
          if (!nonEmpty(ex.text)) err(w, 'read needs text');
          if (!Array.isArray(ex.qs) || !ex.qs.length) err(w, 'read needs qs');
          else ex.qs.forEach((q, i) => { if (!nonEmpty(q.q) || !Array.isArray(q.options) || typeof q.answer !== 'number' || q.answer >= q.options.length) err(w, 'read q' + i + ' invalid'); if (!nonEmpty(q.explain)) err(w, 'read q' + i + ' needs explain'); });
          break;
        case 'fix':
          if (!nonEmpty(ex.wrong) || !ex.answer || !ex.answer.length) err(w, 'fix needs wrong and answer');
          else if (ex.answer.some((a) => NL.checker.norm(a) === NL.checker.norm(ex.wrong))) err(w, 'fix answer equals wrong sentence');
          break;
        case 'write':
          if (!nonEmpty(ex.prompt) || !Array.isArray(ex.checklist) || !ex.checklist.length || !nonEmpty(ex.model)) err(w, 'write needs prompt, checklist, model'); break;
        case 'auto':
          counts.auto++;
          if (!(ex.n > 0)) err(w, 'auto needs n');
          if (ex.kinds && !ex.kinds.every((k) => NL.gen.KINDS.includes(k))) err(w, 'auto kinds invalid: ' + ex.kinds);
          break;
      }
      (ex.vocab || []).forEach((v) => { if (!C.vocab[v]) err(w, 'unknown vocab ref ' + v); });
      (ex.grammar || []).forEach((g) => { if (!C.grammar[g]) err(w, 'unknown grammar ref ' + g); });
      for (const k of ['nl', 'wrong', 'answer', 'model', 'prompt', 'text', 'q', 'explain']) {
        const v = ex[k];
        const s = Array.isArray(v) ? v.join(' ') : typeof v === 'string' ? v : '';
        if (/lorem ipsum|\bTODO\b|placeholder/i.test(s)) err(w, 'placeholder text in ' + k);
      }
    }

    for (const st of C.stages) {
      counts.stages++;
      uniq(st.id, 'stage');
      if (!Array.isArray(st.units)) { err('stage ' + st.id, 'no units'); continue; }
      let seenVocab = new Set();
      for (const u of st.units) {
        counts.units++;
        uniq(u.id, 'unit ' + u.id);
        if (!u.lessons || !u.lessons.length) err('unit ' + u.id, 'no lessons');
        if (u.lessons && (u.lessons.length < 2)) warn('unit ' + u.id, 'only ' + u.lessons.length + ' lesson(s)');
        for (const l of u.lessons || []) {
          counts.lessons++;
          const w = 'lesson ' + l.id;
          uniq(l.id, w);
          if (!nonEmpty(l.goal)) err(w, 'missing goal');
          if (!Array.isArray(l.learn) || !l.learn.length) err(w, 'missing learn blocks'); else checkBlocks(l.learn, w);
          (l.grammar || []).forEach((g) => { if (!C.grammar[g]) err(w, 'unknown grammar id ' + g); });
          (l.vocab || []).forEach((v) => { if (!C.vocab[v]) err(w, 'unknown vocab id ' + v); });
          if (!l.vocab || l.vocab.length < 5) warn(w, 'fewer than 5 vocab items');
          const total = (l.practice || []).reduce((n, e) => n + (e.type === 'auto' ? e.n : 1), 0);
          if (total < 8) warn(w, 'only ' + total + ' practice exercises');
          if (!l.test || !l.test.length) warn(w, 'no mini test');
          (l.practice || []).forEach((e, i) => checkEx(e, w + ' practice#' + (i + 1)));
          (l.test || []).forEach((e, i) => checkEx(e, w + ' test#' + (i + 1)));
          (l.vocab || []).forEach((v) => seenVocab.add(v));
        }
        (u.review || []).forEach((e, i) => checkEx(e, 'unit ' + u.id + ' review#' + (i + 1)));
      }
      (st.exam || []).forEach((e, i) => checkEx(e, 'stage ' + st.id + ' exam#' + (i + 1)));
    }
    // words used in fill/build answers should be in the dictionary (warning level: function words are fine)
    return { ok: errors.length === 0, errors, warnings, counts };
  };
})();
