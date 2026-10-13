import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto(new URL('../../index.html#/lesson/s1u3l1', import.meta.url).href); await p.waitForTimeout(400);
await p.getByRole('button', { name: 'Next: vocabulary' }).click(); await p.waitForTimeout(300);
console.log(await p.evaluate(() => { const c = document.querySelector('.vocab-card'); return [c.getBoundingClientRect().height, c.parentElement.className, getComputedStyle(c.parentElement).gridAutoRows, ...[...c.children].map((k) => k.className + ':' + Math.round(k.getBoundingClientRect().height))].join(' | '); }));
console.log(await p.evaluate(() => [...document.querySelector('.vocab-grid').children].map((c) => Math.round(c.getBoundingClientRect().height)).join(',')));
await b.close();
