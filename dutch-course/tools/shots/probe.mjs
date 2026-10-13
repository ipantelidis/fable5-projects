import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
await p.goto(new URL('../../index.html#/lesson/s1u3l1', import.meta.url).href); await p.waitForTimeout(400);
for (const n of ['Next: vocabulary', 'Start practice']) { await p.getByRole('button', { name: n }).click(); await p.waitForTimeout(300); }
await p.locator('#view input[type=text]').first().fill('xxx'); await p.getByRole('button', { name: 'Check' }).click(); await p.waitForTimeout(300);
console.log('stored:', await p.evaluate(() => JSON.stringify(NL.coach.mistakeItems().map((m) => [m.type, m.q, !!m.ex, m.n]))));
await p.evaluate(() => { NL.state.save(); location.hash = '#/mode/mistakes'; }); await p.waitForTimeout(500);
await p.screenshot({ path: 'out/mist-1280.png' });
const ans = await p.evaluate(() => NL.coach.mistakeItems()[0].ex.answer);
await p.locator('#view input[type=text]').first().fill(Array.isArray(ans) ? ans[0] : ans); await p.getByRole('button', { name: 'Check' }).click(); await p.waitForTimeout(300);
await p.screenshot({ path: 'out/mist-check-1280.png' }); console.log('buttons:', await p.evaluate(() => [...document.querySelectorAll('#view button')].map((x) => x.textContent.trim()).join(' / '))); await p.locator('.check-bar button').click(); await p.waitForTimeout(500);
console.log('left after right answer:', await p.evaluate(() => NL.coach.mistakeItems().length));
await p.screenshot({ path: 'out/mist-done-1280.png' });
console.log('errors:', errs.join(' | ') || 'none');
await b.close();
