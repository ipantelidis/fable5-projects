#!/usr/bin/env node
/* Content validator (node). Usage: node tools/validate.js  → exit code 1 on errors */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const files = ['js/engine/util.js', 'js/engine/checker.js', 'js/content/index.js', 'js/engine/gen.js', 'js/engine/validator.js', 'js/content/stage0.js', 'js/content/stage0-lessons-a.js', 'js/content/stage0-lessons-b.js', 'js/content/stage1.js', 'js/content/stage1-u1-2.js', 'js/content/stage1-u3-4.js', 'js/content/stage1-u5-6.js', 'js/content/stage1-u7-8.js', 'js/content/stage1-extra.js', 'js/content/stage2.js', 'js/content/stage2-u1-2.js', 'js/content/stage2-u3-4.js', 'js/content/stage2-u5-6.js', 'js/content/stage2-u7-8.js', 'js/content/stage3.js', 'js/content/stage3-u1-4.js', 'js/content/stage3-u5-8.js', 'js/content/stage3-extra-a.js', 'js/content/stage3-extra-b.js', 'js/content/stage3-extra-c.js', 'js/content/stage3-extra-d.js', 'js/content/stage4.js', 'js/content/stage4-u1-3.js', 'js/content/stage4-u4-6.js', 'js/content/stage4-extra-a.js', 'js/content/stage4-extra-b.js', 'js/content/stage4-extra-c.js', 'js/content/stage5.js', 'js/content/stage5-bank.js'];

const sandbox = { console, setTimeout, clearTimeout, Math, Date, JSON, Map, Set, Array, Object, String, Number, RegExp, Error, Promise, Intl, matchMedia: () => ({ matches: false }) };
sandbox.window = sandbox;
sandbox.document = { createElement: () => ({ style: {}, classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {}, appendChild() {}, addEventListener() {} }), querySelector: () => null, body: {} };
sandbox.navigator = { userAgent: 'node' };
sandbox.location = { protocol: 'file:', hash: '' };
sandbox.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
vm.createContext(sandbox);
for (const f of files) {
  const src = fs.readFileSync(path.join(root, f), 'utf8');
  try { vm.runInContext(src, sandbox, { filename: f }); } catch (e) { console.error('Load error in ' + f + ': ' + e.message); process.exit(2); }
}
// NL.state stub for gen/validator (not needed by validator but referenced lazily)
sandbox.NL.state = { get: () => ({ srs: { cards: {} }, settings: {} }) };
const r = sandbox.NL.validate();
console.log('Counts:', JSON.stringify(r.counts));
if (r.warnings.length) { console.log('\nWarnings (' + r.warnings.length + '):'); r.warnings.forEach((w) => console.log('  - ' + w)); }
if (r.errors.length) { console.log('\nErrors (' + r.errors.length + '):'); r.errors.forEach((e) => console.log('  ✗ ' + e)); process.exit(1); }
console.log('\nOK: no content errors.');

// Per-stage lesson/exercise summary for content/TODO.md maintenance
for (const st of sandbox.NL.content.stages) {
  let lessons = 0, exs = 0, vocab = new Set();
  for (const u of st.units) for (const l of u.lessons) { lessons++; exs += (l.practice || []).reduce((n, e) => n + (e.type === 'auto' ? e.n : 1), 0) + (l.test || []).length; (l.vocab || []).forEach((v) => vocab.add(v)); }
  console.log(`  ${st.id} ${st.title}: ${st.units.length} units, ${lessons} lessons, ${exs} exercises, ${vocab.size} vocab`);
}
