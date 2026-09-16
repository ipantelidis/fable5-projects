/* Content registry and compact authoring helpers.
   Every content file uses these so the data stays uniform and validatable. */
(function () {
  'use strict';
  const NL = window.NL;
  const C = NL.content;
  const A = (NL.contentApi = {});

  A.slug = (s) => String(s).toLowerCase().replace(/ĳ/g, 'ij').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  /** Register a dictionary entry. Returns its id. */
  function register(entry) {
    if (!entry.id) entry.id = A.slug(entry.nl);
    if (C.vocab[entry.id]) {
      // same word registered twice (e.g. in two stages): keep first, merge missing fields
      const old = C.vocab[entry.id];
      for (const k in entry) if (old[k] == null) old[k] = entry[k];
      return entry.id;
    }
    C.vocab[entry.id] = entry;
    return entry.id;
  }
  A.register = register;

  /** Noun: N(nl, gender, plural, en, exNl, exEn, opts) */
  A.N = (nl, gender, plural, en, exNl, exEn, opts) => register(Object.assign({ nl, en, pos: 'noun', gender, plural, ex: { nl: exNl, en: exEn } }, opts));
  /** Verb: VB(nl, en, 'stem|3sg|plural', 'past sg|past pl', participle, aux, exNl, exEn, opts) */
  A.VB = (nl, en, pres, past, part, aux, exNl, exEn, opts) => {
    const p = pres.split('|'), q = (past || '').split('|');
    return register(Object.assign({ nl, en, pos: 'verb', forms: { pres: p, past: q, part, aux: aux || 'hebben' }, ex: { nl: exNl, en: exEn } }, opts));
  };
  /** Generic word: W(nl, en, pos, exNl, exEn, opts) */
  A.W = (nl, en, pos, exNl, exEn, opts) => register(Object.assign({ nl, en, pos, ex: { nl: exNl, en: exEn } }, opts));
  /** Phrase: PH(nl, en, note, opts) */
  A.PH = (nl, en, exNl, exEn, opts) => register(Object.assign({ nl, en, pos: 'phrase', ex: { nl: exNl || nl, en: exEn || en } }, opts));

  /** Grammar rule: G(id, title, stage, tags, body[]) */
  A.G = (id, title, stage, tags, body) => { C.grammar[id] = { id, title, stage, tags: tags || [], body }; return id; };

  /* Learn-block helpers */
  A.h = (t) => ({ h: t });
  A.p = (t) => ({ p: t });
  A.tip = (t) => ({ tip: t });
  A.warn = (t) => ({ warn: t });
  A.table = (head, rows, caption) => ({ table: { head, rows, caption } });
  A.ex = (...pairs) => ({ ex: pairs.map((x) => (Array.isArray(x) ? { nl: x[0], en: x[1], note: x[2] } : x)) });
  A.list = (...items) => ({ list: items });

  /* Exercise helpers. `o` = optional extras { vocab:[], grammar:[], hint, en } */
  A.mc = (q, options, answer, explain, o) => Object.assign({ type: 'mc', q, options, answer, explain }, o);
  A.fill = (nl, answer, en, explain, o) => Object.assign({ type: 'fill', nl, answer: [].concat(answer), en, explain }, o);
  A.tr = (dir, prompt, answer, explain, o) => Object.assign({ type: 'translate', dir, prompt, answer: [].concat(answer), explain }, o);
  A.build = (en, answer, extra, explain, o) => Object.assign({ type: 'build', en, answer, extra: extra || [], explain }, o);
  A.conj = (verb, pronoun, tense, answer, explain, o) => Object.assign({ type: 'conj', verb, pronoun, tense: tense || 'pres', answer: [].concat(answer), explain }, o);
  A.art = (word, answer, explain, o) => Object.assign({ type: 'article', word, answer, explain }, o);
  A.plural = (word, answer, explain, o) => Object.assign({ type: 'plural', word, answer: [].concat(answer), explain }, o);
  A.dict = (nl, en, explain, o) => Object.assign({ type: 'dictation', nl, en, explain }, o);
  A.listen = (nl, options, answer, explain, o) => Object.assign({ type: 'listen', nl, options, answer, explain }, o);
  A.speak = (nl, en, o) => Object.assign({ type: 'speak', nl, en }, o);
  A.free = (prompt, model, modelEn, o) => Object.assign({ type: 'freespeak', prompt, model, modelEn }, o);
  A.match = (pairs, o) => Object.assign({ type: 'match', pairs }, o);
  A.read = (text, qs, o) => Object.assign({ type: 'read', text, qs }, o);
  A.fix = (wrong, answer, explain, o) => Object.assign({ type: 'fix', wrong, answer: [].concat(answer), explain }, o);
  A.write = (prompt, checklist, model, o) => Object.assign({ type: 'write', prompt, checklist, model }, o);
  /** Auto-generated exercises from lesson vocabulary: auto(n, kinds[]) */
  A.auto = (n, kinds, o) => Object.assign({ type: 'auto', n, kinds }, o);

  A.lesson = (id, title, goal, learn, grammar, vocab, practice, test, o) => Object.assign({ id, title, goal, learn, grammar: grammar || [], vocab: vocab || [], practice: practice || [], test: test || [], minutes: 15 }, o);
  A.unit = (id, title, theme, lessons, review, o) => Object.assign({ id, title, theme, lessons, review: review || [] }, o);
  A.stage = (id, code, cefr, title, blurb, units, exam, o) => {
    const st = Object.assign({ id, code, cefr, title, blurb, units, exam: exam || [] }, o);
    const i = C.stages.findIndex((s) => s.id === id);
    if (i >= 0) C.stages[i] = st; else C.stages.push(st);
    C.stages.sort((a, b) => a.code - b.code);
    return st;
  };

  /* Lookups */
  A.stage = A.stage;
  A.findStage = (id) => C.stages.find((s) => s.id === id);
  A.findUnit = (id) => { for (const s of C.stages) for (const u of s.units) if (u.id === id) return { stage: s, unit: u }; return null; };
  A.findLesson = (id) => { for (const s of C.stages) for (const u of s.units) for (const l of u.lessons) if (l.id === id) return { stage: s, unit: u, lesson: l }; return null; };
  A.allLessons = () => { const out = []; for (const s of C.stages) for (const u of s.units) for (const l of u.lessons) out.push({ stage: s, unit: u, lesson: l }); return out; };
  A.grammarIdsOfStage = (s) => { const set = new Set(); for (const u of s.units) for (const l of u.lessons) (l.grammar || []).forEach((g) => set.add(g)); return Array.from(set); };
  A.vocabIdsOfStage = (s) => { const set = new Set(); for (const u of s.units) for (const l of u.lessons) (l.vocab || []).forEach((g) => set.add(g)); return Array.from(set); };
  /** Vocab ids of all lessons before (and including) the given one, in course order */
  A.vocabUpTo = (lessonId) => { const out = []; for (const x of A.allLessons()) { out.push(...(x.lesson.vocab || [])); if (x.lesson.id === lessonId) break; } return Array.from(new Set(out)); };
  A.lessonIndex = (lessonId) => A.allLessons().findIndex((x) => x.lesson.id === lessonId);
  A.nextLesson = (lessonId) => { const all = A.allLessons(); const i = all.findIndex((x) => x.lesson.id === lessonId); return all[i + 1] || null; };
})();
