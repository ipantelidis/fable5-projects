// usage: node shot.mjs <route> <name> [seed=fresh|mid] [widths=375,1280] [themes=light,dark] [fullPage=1]
import { chromium } from 'playwright';
const [route = 'home', name = 'home', seed = 'mid', widths = '375,1280', themes = 'light', full = '1'] = process.argv.slice(2);
const base = new URL('../../index.html', import.meta.url).href;
const out = new URL('./out/', import.meta.url).pathname;
import { mkdirSync } from 'node:fs'; mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
for (const theme of themes.split(',')) for (const w of widths.split(',').map(Number)) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 600 ? 812 : 900 }, colorScheme: theme, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errs = [];
  page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  page.on('pageerror', (e) => errs.push(String(e)));
  await page.goto(base + '#/home');
  await page.waitForTimeout(300);
  if (seed === 'mid') await page.evaluate(() => {
    const s = NL.state.get();
    s.xp = 2350; s.coach.seenTour = true; s.streak.best = 9;
    const t = new Date();
    for (let i = 0; i < 12; i++) { const d = new Date(t); d.setDate(t.getDate() - i); const k = NL.util.dateKey(d); s.dayLog[k] = Object.assign(s.dayLog[k] || {}, { xp: i % 4 === 3 ? 0 : 60 + i * 10 }); }
    s.streak.last = NL.util.today(); s.streak.current = 3;
    let n = 0; for (const x of NL.contentApi.allLessons()) { if (n++ > 20) break; s.lessons[x.lesson.id] = { done: true, best: 90 }; }
    Object.assign(s.skills, { grammar: 120, vocab: 200, listening: 60, speaking: 30, reading: 90, writing: 40 });
    ['first-lesson', 'streak-3'].forEach((b) => { s.badges[b] = NL.util.today(); });
    NL.state.save();
  });
  await page.evaluate((r) => { location.hash = '#/' + r; if (NL.app && NL.app.render) NL.app.render(); }, route);
  await page.waitForTimeout(500);
  const file = `${out}${name}-${theme}-${w}.png`;
  await page.screenshot({ path: file, fullPage: full === '1' });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log(file.split('/').pop(), 'h=' + (await page.evaluate(() => document.body.scrollHeight)), overflow > 0 ? 'HORIZONTAL OVERFLOW ' + overflow + 'px' : 'no overflow', errs.length ? 'ERRORS: ' + errs.join(' | ') : '');
  await ctx.close();
}
await browser.close();
