// Renders every lesson exercise (practice + test, generated slots expanded 3 times) and every stage exam item in Chromium,
// answers it correctly through the real controls, and reports exercises that throw, render empty, or reject the right answer.
import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 } });
const pageErrs = []; p.on('pageerror', (e) => pageErrs.push(String(e)));
await p.goto(new URL('../../index.html#/home', import.meta.url).href); await p.waitForTimeout(500);
const out = await p.evaluate(async () => {
  NL.tts && (NL.tts.speak = () => {}); if (window.speechSynthesis) window.speechSynthesis.speak = () => {};
  const A = NL.contentApi, X = NL.exercises, fails = [], counts = {};
  const host = document.createElement('div'); document.body.appendChild(host);
  const ctx = { showTranslations: true, setReady() {}, autoCheck() {} };
  const first = (a) => (Array.isArray(a) ? a[0] : a);
  const fire = (el, v) => { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); };
  function answer(ex, el) {
    const opts = (i) => [...el.querySelectorAll('.options')][i || 0].querySelectorAll('button.opt');
    switch (ex.type) {
      case 'mc': case 'listen': opts()[ex.answer].click(); return true;
      case 'article': [...el.querySelectorAll('button.opt')].find((x) => x.textContent.trim() === ex.answer).click(); return true;
      case 'read': ex.qs.forEach((q, i) => opts(i)[q.answer].click()); return true;
      case 'fill': case 'plural': case 'translate': case 'conj': case 'dictation': case 'fix': { const inp = el.querySelector('input.input, textarea.input'); fire(inp, first(ex.answer != null ? ex.answer : ex.nl)); return true; }
      case 'build': { const words = ex.answer.replace(/[.!?,]$/, '').split(/\s+/); const bank = [...el.querySelectorAll('button.tile')]; for (const w of words) { const t = bank.find((x) => x.textContent === w && !x.classList.contains('used')); if (!t) return 'no tile for "' + w + '"'; t.click(); } return true; }
      case 'match': { for (const [l, r] of ex.pairs) { const L = [...el.querySelectorAll('button.opt.nl')].find((x) => x.textContent === l && !x.classList.contains('done')); const R = [...el.querySelectorAll('button.opt:not(.nl)')].find((x) => x.textContent === r && !x.classList.contains('done')); if (!L || !R) return 'pair not found ' + l + '=' + r; L.click(); R.click(); } return true; }
      default: return null; // speak, freespeak, write: render only
    }
  }
  function run(ex, where) {
    counts[ex.type] = (counts[ex.type] || 0) + 1;
    let ctl;
    try { host.innerHTML = ''; ctl = X.render(ex, ctx); host.appendChild(ctl.el); } catch (e) { fails.push(where + ' [' + ex.type + '] render threw: ' + e.message); return; }
    if (!ctl.el.textContent.trim()) { fails.push(where + ' [' + ex.type + '] rendered empty'); return; }
    let a; try { a = answer(ex, ctl.el); } catch (e) { fails.push(where + ' [' + ex.type + '] could not answer: ' + e.message); return; }
    if (a === null) return;
    if (a !== true) { fails.push(where + ' [' + ex.type + '] ' + a); return; }
    let r; try { r = ctl.check(); } catch (e) { fails.push(where + ' [' + ex.type + '] check threw: ' + e.message); return; }
    if (!r || !r.ok) fails.push(where + ' [' + ex.type + '] right answer rejected: ' + JSON.stringify(first(ex.answer) || ex.pairs || '').slice(0, 80) + ' :: ' + String(ex.nl || ex.q || ex.prompt || ex.word || ex.verb || '').slice(0, 60));
    try { ctl.finish && ctl.finish(r); } catch (e) { fails.push(where + ' [' + ex.type + '] finish threw: ' + e.message); }
  }
  let n = 0;
  for (const x of A.allLessons()) {
    const L = x.lesson; const earlier = A.vocabUpTo(L.id).filter((id) => !(L.vocab || []).includes(id));
    for (const list of [L.practice || [], L.test || []]) for (const e of list) {
      if (e.type === 'auto') { for (let k = 0; k < 3; k++) NL.gen.expand(e, L.vocab || [], earlier).forEach((g) => { run(g, L.id + '/auto'); n++; }); }
      else { run(e, L.id); n++; }
    }
  }
  for (const st of NL.content.stages) for (const e of st.exam || []) { if (e.type === 'auto') continue; run(e, st.id + '/exam'); n++; }
  for (const story of (NL.content.stories || []).concat(NL.content.knm || [])) NL.stories.exercises(story).forEach((e) => { run(e, 'story ' + story.id); n++; });
  return { n, counts, fails };
});
console.log('exercises run:', out.n); console.log('by type:', JSON.stringify(out.counts));
console.log('failures:', out.fails.length); out.fails.slice(0, 40).forEach((f) => console.log('  ' + f));
console.log('page errors:', pageErrs.slice(0, 5).join(' | ') || 'none');
await b.close();
