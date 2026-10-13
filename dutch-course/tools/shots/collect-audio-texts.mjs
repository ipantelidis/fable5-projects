// Collects every Dutch text the course speaks (as normalised keys, via the app's own T.key) into tools/audio/texts.json.
// Run after content changes, then python tools/audio/build.py. Usage: node tools/shots/collect-audio-texts.mjs
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto(new URL('../../index.html#/home', import.meta.url).href); await p.waitForTimeout(500);
const texts = await p.evaluate(() => {
  const C = NL.content, T = NL.tts, all = new Set();
  const add = (t) => { if (typeof t !== 'string') return; t = T.key(t); if (!t || t.includes('___') || t.length > 220) return; all.add(t); };
  Object.values(C.vocab).forEach((v) => { add(NL.gen.display(v)); add(v.nl); if (v.ex) add(v.ex.nl); });
  (C.stories || []).concat(C.knm || []).forEach((s) => s.lines.forEach((l) => add(l.nl)));
  (C.soundSets || []).forEach((s) => s.pairs.forEach((x) => { add(x.a); add(x.b); }));
  (C.roleplays || []).forEach((r) => add(r.opening));
  const walk = (bl) => (bl || []).forEach((b) => { if (b.ex) b.ex.forEach((e) => add(e.nl)); });
  Object.values(C.grammar).forEach((g) => walk(g.body));
  for (const x of NL.contentApi.allLessons()) {
    walk(x.lesson.learn);
    for (const e of [...(x.lesson.practice || []), ...(x.lesson.test || [])]) {
      if (['dictation', 'listen', 'speak'].includes(e.type)) add(e.nl);
      if (e.type === 'translate' && e.dir === 'en-nl') add([].concat(e.answer)[0]);
      if (e.type === 'build') add(e.answer);
      if (e.type === 'fill' && e.nl) add(e.nl.replace('___', [].concat(e.answer)[0]));
    }
  }
  return [...all].sort();
});
fs.writeFileSync(new URL('../audio/texts.json', import.meta.url), JSON.stringify(texts, null, 0));
console.log('texts:', texts.length); await b.close();
