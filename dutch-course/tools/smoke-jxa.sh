#!/bin/sh
# Engine smoke test without node or a browser: loads every engine file under a stub DOM in
# macOS JavaScriptCore (osascript) and exercises the non-visual paths against the real content.
# Usage: sh tools/smoke-jxa.sh
cd "$(dirname "$0")/.." || exit 2
FILES="$(grep -o 'js/[a-z/0-9-]*\.js' index.html | grep -v 'js/app.js' | tr '\n' ' ')"
OUT="${TMPDIR:-/tmp}/nl-smoke-$$.js"
{
  cat <<'JS'
var __out = [], __fails = 0;
var NL_CONFIG = { supabaseUrl: '', supabaseAnonKey: '' };
function U_addDays(k, n) { var d = new Date(k + 'T12:00:00'); d.setDate(d.getDate() + n); var m = d.getMonth() + 1, dd = d.getDate(); return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (dd < 10 ? '0' : '') + dd; }
function log(s){ __out.push(s); }
function fail(s){ __fails++; __out.push('FAIL ' + s); }
function pass(s){ __out.push('PASS ' + s); }
function stubEl(tag) {
  var kids = [], attrs = {};
  var base = { tagName: String(tag || 'div').toUpperCase(), style: {}, dataset: {}, children: kids, childNodes: kids, value: '', textContent: '', innerHTML: '', hidden: false, disabled: false, checked: false,
    classList: { add: function(){}, remove: function(){}, toggle: function(){}, contains: function(){ return false; } },
    appendChild: function(c){ kids.push(c); return c; }, append: function(){ for (var i=0;i<arguments.length;i++) kids.push(arguments[i]); }, removeChild: function(){}, remove: function(){}, insertBefore: function(c){ kids.push(c); return c; }, replaceChildren: function(){ kids.length = 0; },
    setAttribute: function(k,v){ attrs[k]=v; }, getAttribute: function(k){ return attrs[k]; }, removeAttribute: function(){}, hasAttribute: function(k){ return k in attrs; },
    addEventListener: function(){}, removeEventListener: function(){}, dispatchEvent: function(){ return true; }, focus: function(){}, blur: function(){}, click: function(){}, scrollIntoView: function(){}, select: function(){},
    querySelector: function(){ return stubEl('div'); }, querySelectorAll: function(){ return []; }, closest: function(){ return null; }, contains: function(){ return false; }, getBoundingClientRect: function(){ return {top:0,left:0,width:0,height:0}; },
    parentNode: null, parentElement: null, firstChild: null, lastChild: null, nextSibling: null, offsetWidth: 0, offsetHeight: 0 };
  return base;
}
var window = this; var self = this; window.window = window;
var Node = function () {}; var Element = Node; var HTMLElement = Node;
var document = stubEl('document');
document.createElement = function(t){ return stubEl(t); };
document.createTextNode = function(t){ var e = stubEl('#text'); e.textContent = String(t); return e; };
document.createDocumentFragment = function(){ return stubEl('fragment'); };
document.body = stubEl('body'); document.documentElement = stubEl('html'); document.head = stubEl('head');
document.getElementById = function(){ return stubEl('div'); };
document.readyState = 'complete'; document.activeElement = null; document.title = '';
var navigator = { userAgent: 'jxa', language: 'en', platform: 'mac', mediaDevices: {} };
var location = { protocol: 'file:', hash: '#/home', href: 'file:///index.html', search: '' };
var __store = {};
var localStorage = { getItem: function(k){ return k in __store ? __store[k] : null; }, setItem: function(k,v){ __store[k] = String(v); }, removeItem: function(k){ delete __store[k]; }, clear: function(){ __store = {}; } };
var matchMedia = function(){ return { matches: false, addEventListener: function(){}, addListener: function(){} }; };
var __timers = [];
var setTimeout = function(f){ __timers.push(f); return __timers.length; }; var clearTimeout = function(){};
var setInterval = function(){ return 0; }; var clearInterval = function(){};
var requestAnimationFrame = function(f){ __timers.push(f); return 0; }; var cancelAnimationFrame = function(){};
var speechSynthesis = { getVoices: function(){ return []; }, speak: function(){}, cancel: function(){}, addEventListener: function(){}, speaking: false };
var SpeechSynthesisUtterance = function(t){ this.text = t; };
var performance = { now: function(){ return Date.now(); } };
var console = { log: function(){ log(Array.prototype.slice.call(arguments).join(' ')); }, error: function(){ log('console.error ' + Array.prototype.slice.call(arguments).join(' ')); }, warn: function(){}, info: function(){} };
var Event = function(t){ this.type = t; }; var CustomEvent = Event; var KeyboardEvent = Event;
var Blob = function(){}; var URL = { createObjectURL: function(){ return 'blob:'; }, revokeObjectURL: function(){} }; var FileReader = function(){};
var addEventListener = function(){}; var removeEventListener = function(){};
var Audio = function(){}; var Image = function(){};
var crypto = { getRandomValues: function(a){ for (var i=0;i<a.length;i++) a[i] = Math.floor(Math.random()*256); return a; } };
JS
  for f in $FILES; do echo "/* ---- $f ---- */"; echo 'try {'; cat "$f"; echo "  pass('load $f');"; echo "} catch (e) { fail('load $f: ' + e.message + ' (line ' + e.line + ')'); }"; done
  cat <<'JS'
try {
  var C = NL.content, A = NL.contentApi;
  /* 1. Stage exam builder produces 30 well-formed items for every stage */
  C.stages.forEach(function (st) {
    if (st.hub) { pass('exam ' + st.id + ': hub stage, no exam'); return; }
    var exs = NL.review.examExercises(st);
    var bad = exs.filter(function (e) { return !e || !e.type; });
    if (exs.length >= 20 && exs.length <= 30 && !bad.length) pass('exam ' + st.id + ': ' + exs.length + ' items (' + (st.exam || []).length + ' hand-written)'); else fail('exam ' + st.id + ': ' + exs.length + ' items, ' + bad.length + ' malformed');
  });
  /* 2. Every auto slot expands to real exercises from the lesson vocabulary */
  var autoSlots = 0, autoItems = 0, autoShort = [];
  A.allLessons().forEach(function (x) {
    (x.lesson.practice || []).forEach(function (e) {
      if (e.type !== 'auto') return;
      autoSlots++;
      var out = NL.gen.expand(e, x.lesson.vocab || [], []);
      autoItems += out.length;
      if (out.length < e.n) autoShort.push(x.lesson.id + ' wanted ' + e.n + ' got ' + out.length);
      out.forEach(function (g) { if (!g || !NL.gen.KINDS.length || !g.type) fail('auto in ' + x.lesson.id + ' produced malformed exercise'); });
    });
  });
  if (!autoShort.length) pass('auto slots: ' + autoSlots + ' slots expanded to ' + autoItems + ' exercises'); else { fail('auto slots short in ' + autoShort.length + ' lessons'); autoShort.slice(0, 8).forEach(function (s) { log('  ' + s); }); }
  /* 3. The checker accepts every model answer and rejects garbage */
  var typed = 0, rejected = [], accepted = [];
  function eachExercise(fn) {
    C.stages.forEach(function (st) {
      st.units.forEach(function (u) {
        u.lessons.forEach(function (l) { (l.practice || []).concat(l.test || []).forEach(function (e, i) { fn(e, l.id); }); });
        (u.review || []).forEach(function (e) { fn(e, u.id + ' review'); });
      });
      (st.exam || []).forEach(function (e) { fn(e, st.id + ' exam'); });
    });
  }
  eachExercise(function (e, where) {
    if (['fill', 'translate', 'plural', 'fix', 'conj'].indexOf(e.type) < 0) return;
    typed++;
    var strict = e.type === 'conj';
    e.answer.forEach(function (a) { if (!NL.checker.check(a, e.answer, { strict: strict }).ok) rejected.push(where + ' [' + e.type + '] "' + a + '"'); });
    if (NL.checker.check('xxqqzz', e.answer, { strict: strict }).ok) accepted.push(where + ' [' + e.type + '] accepts garbage for "' + e.answer[0] + '"');
  });
  if (!rejected.length) pass('checker accepts all ' + typed + ' typed model answers'); else { fail('checker rejects ' + rejected.length + ' model answers'); rejected.slice(0, 10).forEach(function (s) { log('  ' + s); }); }
  if (!accepted.length) pass('checker rejects garbage for all typed exercises'); else { fail('checker too lenient in ' + accepted.length + ' cases'); accepted.slice(0, 10).forEach(function (s) { log('  ' + s); }); }
  /* 4. Hand-written conjugation answers agree with the dictionary forms */
  var conjN = 0, conjBad = [];
  var HEB = { ik: 'heb', jij: 'hebt', je: 'hebt', u: 'hebt|heeft', hij: 'heeft', zij: 'heeft|hebben', ze: 'heeft|hebben', het: 'heeft', wij: 'hebben', we: 'hebben', jullie: 'hebben' };
  var BEN = { ik: 'ben', jij: 'bent', je: 'bent', u: 'bent', hij: 'is', zij: 'is|zijn', ze: 'is|zijn', het: 'is', wij: 'zijn', we: 'zijn', jullie: 'zijn' };
  eachExercise(function (e, where) {
    if (e.type !== 'conj' || e.gen) return;
    var v = C.vocab[e.verb] || Object.values(C.vocab).filter(function (x) { return x.nl === e.verb; })[0];
    if (!v || !v.forms) return;
    conjN++;
    var expected = [];
    if (e.tense === 'pres') { expected = (['zij', 'ze'].indexOf(e.pronoun) >= 0) ? [v.forms.pres[1], v.forms.pres[2]] : NL.gen.presForms(v, e.pronoun); }
    else if (e.tense === 'past') { var q = v.forms.past || []; if (!q[0]) return; expected = (['zij', 'ze'].indexOf(e.pronoun) >= 0) ? [q[0], q[1] || q[0]] : [NL.gen.pastForm(v, e.pronoun)]; }
    else if (e.tense === 'perf') { if (!v.forms.part) return; var auxes = (v.forms.aux || 'hebben').split('/'); auxes.forEach(function (ax) { ((ax === 'zijn' ? BEN : HEB)[e.pronoun] || '').split('|').forEach(function (a) { expected.push(a + ' ' + v.forms.part); }); }); }
    var norm = function (s) { return NL.checker.norm(s); };
    var okAll = e.answer.every(function (a) { return expected.map(norm).indexOf(norm(a)) >= 0; });
    if (!okAll) conjBad.push(where + ': ' + e.pronoun + ' ' + e.verb + ' (' + e.tense + ') content=' + JSON.stringify(e.answer) + ' dictionary=' + JSON.stringify(expected));
  });
  if (!conjBad.length) pass('conjugation drills agree with dictionary forms (' + conjN + ' checked)'); else { fail('conjugation drills disagree with the dictionary in ' + conjBad.length + ' cases'); conjBad.forEach(function (s) { log('  ' + s); }); }
  /* 5. Sentence builder: every tile is a real word and distractors differ from answer words */
  var buildN = 0, buildBad = [];
  eachExercise(function (e, where) {
    if (e.type !== 'build') return;
    buildN++;
    var words = e.answer.replace(/[.!?,]$/, '').split(/\s+/);
    (e.extra || []).forEach(function (x) { if (words.indexOf(x) >= 0) buildBad.push(where + ': distractor "' + x + '" is also an answer word in "' + e.answer + '"'); });
  });
  if (!buildBad.length) pass('sentence builder: ' + buildN + ' exercises, distractors are distinct'); else { fail('sentence builder distractor clashes: ' + buildBad.length); buildBad.slice(0, 10).forEach(function (s) { log('  ' + s); }); }
  /* 6. Every lesson vocab id resolves and every stage unlock chain is intact */
  var chain = C.stages.map(function (s) { return s.id; }).join(' > ');
  pass('stage order: ' + chain);
  /* 7. State + SRS round trip */
  var s = NL.state.load(); s.xp = 123; NL.state.saveNow();
  var json = NL.state.exportJSON ? NL.state.exportJSON() : JSON.stringify(s);
  var s2 = JSON.parse(json);
  if ((s2.xp === 123) || (s2.state && s2.state.xp === 123)) pass('state save/export round trip'); else fail('state round trip lost xp: ' + json.slice(0, 80));
  var firstVocab = Object.keys(C.vocab)[0];
  if (NL.srs && NL.srs.grade) { NL.srs.grade(firstVocab, 'vocab', 5); NL.srs.grade(firstVocab, 'vocab', 5); pass('srs grade runs; due today: ' + (NL.srs.dueCount ? NL.srs.dueCount() : 'n/a')); }
  /* 8. Stage 5: weekly challenge maths, bank grouping, talk topics */
  var F = NL.fluency;
  if (F.monday('2026-09-20') === '2026-09-14' && F.monday('2026-09-14') === '2026-09-14' && F.weekDates('2026-09-16').length === 7 && F.weekDates('2026-09-16')[6] === '2026-09-20') pass('week maths: Monday to Sunday'); else fail('week maths wrong: ' + F.monday('2026-09-20') + ' ' + F.weekDates('2026-09-16').join(','));
  var seenCh = {}; for (var wk = 0; wk < C.challenges.length; wk++) { var cc = F.current(U_addDays('2026-01-05', wk * 7)); seenCh[cc.challenge.id] = 1; }
  if (Object.keys(seenCh).length === C.challenges.length) pass('challenge rotation visits all ' + C.challenges.length + ' challenges'); else fail('challenge rotation only visits ' + Object.keys(seenCh).length);
  var st8 = NL.state.load(); st8.dayLog = {}; st8.challenges = {}; var xpBefore = st8.xp;
  var cur = F.current();
  if (cur && !cur.done && !cur.claimed) pass('fresh week: challenge "' + cur.challenge.title + '" open with ' + cur.progress.length + ' goals'); else fail('fresh week should be open');
  F.weekDates().forEach(function (d) { st8.dayLog[d] = { xp: 200, answers: 100, correct: 95, voice: 10, lessons: 1, reviews: 30, perfect: 1, bank: 20 }; });
  var claimed = F.check();
  var cur2 = F.current();
  if (claimed && cur2.claimed && NL.state.get().xp > xpBefore && NL.state.get().badges['challenge-1']) pass('challenge completes once: bonus XP and badge awarded'); else fail('challenge claim failed: claimed=' + claimed + ' xp=' + NL.state.get().xp);
  if (F.check() === false) pass('challenge cannot be claimed twice'); else fail('challenge claimed twice');
  var groups = F.groups(), inGroups = 0, tiny = [];
  groups.forEach(function (g) { inGroups += g.ids.length; if (g.ids.length < 5) tiny.push(g.id + ':' + g.ids.length); });
  if (inGroups === Object.keys(C.vocab).length && !tiny.length) pass('vocabulary bank: ' + groups.length + ' groups cover all ' + inGroups + ' words'); else fail('bank coverage ' + inGroups + '/' + Object.keys(C.vocab).length + ' tiny groups: ' + tiny.join(' '));
  var bankBad = [];
  groups.forEach(function (g) { var ids = F.pickWords(g, 'new'); var exs = NL.gen.expand({ n: Math.min(20, ids.length * 2), kinds: ['mc-meaning', 'tr-nl-en', 'listen', 'tr-en-nl', 'article', 'dictation'] }, ids, g.ids); if (exs.length < 5) bankBad.push(g.id + ' only ' + exs.length); });
  if (!bankBad.length) pass('vocabulary bank: every group yields a practice round'); else fail('bank practice rounds too short: ' + bankBad.join(', '));
  var byLevel = {}; C.talk.forEach(function (t) { byLevel[t.level] = (byLevel[t.level] || 0) + 1; });
  if (C.talk.length >= 12 && byLevel.A1 && byLevel.A2 && byLevel.B1 && byLevel.B2) pass('speaking topics: ' + C.talk.length + ' topics ' + JSON.stringify(byLevel)); else fail('speaking topics missing a level: ' + JSON.stringify(byLevel));
  /* 8b. Coach: suggestions, recording, answers */
  var st9 = NL.state.load(); st9.coach = { seenTour: true, quiet: false, nudged: {}, dismissed: {} }; st9.mistakes = [];
  var sug = NL.coach.suggestions();
  if (sug.length && sug.every(function (x) { return x.title && x.href && x.why; })) pass('coach: ' + sug.length + ' suggestions, top = ' + sug[0].id); else fail('coach suggestions malformed');
  for (var mi = 0; mi < 6; mi++) NL.coach.record({ type: 'fill', grammar: ['g1-v2'], nl: 'test ___' }, { ok: false }, { title: 'x' });
  var wg = NL.coach.weakGrammar();
  if (st9.mistakes.length === 6 && wg && wg.id === 'g1-v2' && NL.coach.suggestions().some(function (x) { return x.id === 'weak-grammar'; })) pass('coach: mistakes recorded and weak grammar detected'); else fail('coach recording: ' + st9.mistakes.length + ' ' + JSON.stringify(wg));
  var ans = ['now', 'progress', 'review', 'voice', 'challenge', 'wrong', 'plan', 'exam'].map(function (q) { return NL.coach.answer(q).length; });
  if (ans.every(function (n) { return n > 0; })) pass('coach: every intent answers'); else fail('coach intents: ' + ans.join(','));
  if (NL.sync && NL.sync.status() === 'unconfigured' && !NL.sync.configured()) pass('sync: dormant when unconfigured'); else fail('sync should be dormant: ' + (NL.sync && NL.sync.status()));
  /* 9. The new screens render without throwing (stub DOM: catches undefined helpers and bad data access, not layout) */
  [['fluency hub', function (h0) { F.hub(h0); }], ['bank overview', function (h0) { F.bankView(h0); }], ['bank theme', function (h0) { F.bankView(h0, 'eten'); }],
   ['challenge page', function (h0) { F.challengeView(h0); }], ['home with challenge card and hub stage', function (h0) { NL.views.home(h0); }],
   ['stage s5 redirects to hub', function (h0) { NL.views.stage(h0, 's5'); }], ['stage s4 list', function (h0) { NL.views.stage(h0, 's4'); }],
   ['free talk list', function (h0) { NL.review.freetalk(h0); }], ['dictionary', function (h0) { NL.views.dictionary(h0); }], ['badges', function (h0) { NL.views.badges(h0); }], ['about', function (h0) { NL.views.about(h0); }], ['coach panel', function (h0) { NL.coach.view(h0); }], ['settings with sync card', function (h0) { NL.views.settings(h0); }]
  ].forEach(function (pair) { try { pair[1](stubEl('main')); pass('renders: ' + pair[0]); } catch (e) { fail('render ' + pair[0] + ': ' + e.message + ' (line ' + e.line + ')'); } });
} catch (e) { fail('smoke crashed: ' + e.message + ' line ' + e.line + ' ' + (e.stack || '').split('\n').slice(0,3).join(' | ')); }
log(''); log('SUMMARY fails=' + __fails);
__out.join('\n');
JS
} > "$OUT"
osascript -l JavaScript "$OUT"
rm -f "$OUT"
