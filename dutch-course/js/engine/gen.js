/* Exercise generator: builds real exercises from dictionary data (used by `auto` slots, reviews and practice modes) */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util;
  const G = (NL.gen = {});
  const PRON = [['ik', 0], ['jij', 1], ['hij', 1], ['zij', 1], ['u', 1], ['wij', 2], ['jullie', 2], ['ze', 2]];
  const PRON_EN = { ik: 'I', jij: 'you', hij: 'he', zij: 'she', u: 'you (formal)', wij: 'we', jullie: 'you (plural)', ze: 'they' };

  G.KINDS = ['article', 'plural', 'tr-nl-en', 'tr-en-nl', 'listen', 'dictation', 'match', 'conj', 'speak', 'mc-meaning'];

  const V = (id) => NL.content.vocab[id];
  const isNoun = (v) => v && v.pos === 'noun' && (v.gender === 'de' || v.gender === 'het');
  const isVerb = (v) => v && v.pos === 'verb' && v.forms && v.forms.pres && v.forms.pres.length >= 3;

  /** Present-tense form for a pronoun using stem|3sg|plural; jij after inversion not handled here */
  G.presForm = function (v, pronoun) {
    const p = v.forms.pres;
    if (pronoun === 'ik') return p[0];
    if (['jij', 'je', 'hij', 'zij', 'u', 'het', 'men'].includes(pronoun)) return p[1];
    return p[2];
  };
  G.pastForm = function (v, pronoun) {
    const q = v.forms.past || [];
    if (!q[0]) return null;
    return ['wij', 'we', 'jullie', 'ze', 'zij-pl'].includes(pronoun) ? (q[1] || q[0]) : q[0];
  };

  function explainNoun(v) {
    const hint = v.hint ? ' ' + v.hint : '';
    return (v.gender === 'het' ? 'It is "het ' + v.nl + '". ' : 'It is "de ' + v.nl + '". ') + (v.note ? v.note : (v.gender === 'de' ? 'About two thirds of Dutch nouns are de-words, and all plurals and all people are de.' : 'Het-words include all diminutives (-je), most words for languages, metals and materials, and many two-syllable words starting with be-, ge-, ver-, ont-.')) + hint;
  }

  /** Make one exercise of a given kind from a vocab id; may return null if the word does not fit */
  G.make = function (kind, id, pool) {
    const v = V(id); if (!v) return null;
    pool = pool || [];
    const others = (n, pred) => U.sample(pool.filter((x) => x !== id && V(x) && (!pred || pred(V(x)))), n).map(V);
    switch (kind) {
      case 'article': {
        if (!isNoun(v)) return null;
        return { type: 'article', word: v.nl, answer: v.gender, explain: explainNoun(v), vocab: [id], gen: true };
      }
      case 'plural': {
        if (!isNoun(v) || !v.plural) return null;
        return { type: 'plural', word: (v.gender === 'het' ? 'het ' : 'de ') + v.nl, answer: [v.plural], explain: 'Plural: de ' + v.plural + '. ' + (v.plnote || G.pluralRule(v)), vocab: [id], gen: true };
      }
      case 'tr-nl-en': {
        const alts = [v.en].concat(v.alt || []);
        return { type: 'translate', dir: 'nl-en', prompt: G.display(v), answer: alts.flatMap(splitEn), explain: G.display(v) + ' = ' + v.en + '. ' + exampleLine(v), vocab: [id], gen: true };
      }
      case 'tr-en-nl': {
        const acc = [G.display(v), v.nl].concat(v.altNl || []);
        return { type: 'translate', dir: 'en-nl', prompt: v.en, answer: U.uniq(acc), explain: v.en + ' = ' + G.display(v) + '. ' + exampleLine(v), vocab: [id], gen: true };
      }
      case 'mc-meaning': {
        const d = others(3, (x) => x.pos === v.pos || true);
        if (d.length < 2) return null;
        const options = U.shuffle([v.en].concat(d.map((x) => x.en)));
        return { type: 'mc', q: 'What does this mean?', nl: G.display(v), options, answer: options.indexOf(v.en), explain: G.display(v) + ' = ' + v.en + '. ' + exampleLine(v), vocab: [id], gen: true };
      }
      case 'listen': {
        const d = others(3);
        if (d.length < 2) return null;
        const options = U.shuffle([v.en].concat(d.map((x) => x.en)));
        return { type: 'listen', nl: v.ex && v.ex.nl.length < 60 && Math.random() < 0.4 ? v.ex.nl : G.display(v), options, answer: options.indexOf(v.en), explain: 'You heard "' + G.display(v) + '" (' + v.en + ').', vocab: [id], gen: true, sentence: false };
      }
      case 'dictation': {
        return { type: 'dictation', nl: v.ex.nl, en: v.ex.en, explain: 'Listen for "' + v.nl + '" (' + v.en + ').', vocab: [id], gen: true };
      }
      case 'speak': {
        return { type: 'speak', nl: v.ex.nl, en: v.ex.en, vocab: [id], gen: true };
      }
      case 'conj': {
        if (!isVerb(v)) return null;
        const [pr] = U.pick(PRON);
        const ans = G.presForm(v, pr);
        return { type: 'conj', verb: v.nl, pronoun: pr, tense: 'pres', answer: [ans], explain: pr + ' ' + ans + ' (' + PRON_EN[pr] + ' ' + v.en.replace(/^to /, '') + '). ' + G.conjRule(v, pr), vocab: [id], gen: true };
      }
      case 'match': {
        const d = others(4);
        if (d.length < 3) return null;
        return { type: 'match', pairs: [v].concat(d).map((x) => [G.display(x), x.en]), vocab: [id].concat(d.map((x) => x.id)), gen: true };
      }
    }
    return null;
  };
  function splitEn(en) { return en.split(/\s*[,;]\s*|\s+or\s+/).map((s) => s.replace(/\(.*?\)/g, '').trim()).filter(Boolean); }
  function exampleLine(v) { return v.ex ? 'Example: ' + v.ex.nl + ' — ' + v.ex.en : ''; }
  G.display = (v) => (v.pos === 'noun' && (v.gender === 'de' || v.gender === 'het') ? v.gender + ' ' + v.nl : v.nl);

  G.pluralRule = function (v) {
    const pl = v.plural, s = v.nl;
    if (pl.endsWith("'s")) return "Words ending in a single a, o, u, i or y take -'s so the vowel stays long.";
    if (pl.endsWith('eren')) return 'A small group of het-words take -eren (kind → kinderen, ei → eieren).';
    if (pl.endsWith('s') && !pl.endsWith('en')) return 'Words ending in an unstressed -e, -el, -em, -en, -er, -je and most loanwords take -s.';
    if (pl.slice(0, -2) !== s) {
      if (/[aeiou]{2}[^aeiou]$/.test(s) && !/[aeiou]{2}[^aeiou]$/.test(pl.slice(0, -2))) return 'Open syllable: the long vowel is written once in the plural (maan → manen).';
      if (/[^aeiou]{2}en$/.test(pl) && !/[^aeiou]{2}$/.test(s)) return 'Closed syllable: the consonant doubles to keep the vowel short (man → mannen).';
      if (/ven$/.test(pl) && /f$/.test(s)) return 'f becomes v before -en (brief → brieven).';
      if (/zen$/.test(pl) && /s$/.test(s)) return 's becomes z before -en (huis → huizen).';
    }
    return 'Most nouns take -en.';
  };
  G.conjRule = function (v, pr) {
    const p = v.forms.pres;
    if (pr === 'ik') return 'ik = the stem (' + p[0] + ').';
    if (['jij', 'hij', 'zij', 'u'].includes(pr)) return p[1] === p[0] ? 'The stem already ends in -t, so nothing is added.' : 'jij / hij / zij / u = stem + t (' + p[1] + ').';
    return 'Plural forms (wij / jullie / zij) use the full infinitive (' + p[2] + ').';
  };

  /** Expand an `auto` slot into concrete exercises. pool = lesson vocab first, then earlier vocab for distractors */
  G.expand = function (slot, lessonVocab, earlierVocab) {
    const kinds = slot.kinds && slot.kinds.length ? slot.kinds : G.KINDS.filter((k) => k !== 'speak');
    const pool = U.uniq(lessonVocab.concat(earlierVocab || []));
    const out = [];
    const ids = U.shuffle(lessonVocab);
    let guard = 0;
    while (out.length < slot.n && guard++ < slot.n * 12) {
      const id = ids[guard % ids.length];
      const kind = kinds[Math.floor(Math.random() * kinds.length)];
      const ex = G.make(kind, id, pool);
      if (ex && !out.some((o) => o.type === ex.type && JSON.stringify(o.vocab) === JSON.stringify(ex.vocab))) out.push(ex);
    }
    return out;
  };

  /** Review exercises for SRS cards */
  G.forCard = function (card, pool) {
    if (card.kind === 'vocab') {
      const v = V(card.id); if (!v) return null;
      let kinds = ['tr-nl-en', 'tr-en-nl', 'listen', 'mc-meaning'];
      if (isNoun(v)) kinds.push('article', 'plural');
      if (isVerb(v)) kinds.push('conj');
      if (card.lapses > 0) kinds.push('dictation', 'tr-en-nl');
      for (let i = 0; i < 6; i++) { const ex = G.make(U.pick(kinds), card.id, pool); if (ex) return ex; }
      return null;
    }
    // grammar card: use a hand-written exercise tagged with this rule
    const all = G.exercisesForGrammar(card.id);
    return all.length ? U.pick(all) : null;
  };
  G.exercisesForGrammar = function (gid) {
    const out = [];
    for (const x of NL.contentApi.allLessons()) {
      const l = x.lesson;
      const tagged = (l.grammar || []).includes(gid);
      for (const e of (l.practice || []).concat(l.test || [])) {
        if (e.type === 'auto' || e.type === 'speak' || e.type === 'freespeak' || e.type === 'write' || e.type === 'read') continue;
        if ((e.grammar && e.grammar.includes(gid)) || (tagged && !e.grammar && ['fill', 'build', 'conj', 'fix', 'mc'].includes(e.type))) out.push(Object.assign({ grammar: [gid] }, e));
      }
    }
    return out;
  };
})();
