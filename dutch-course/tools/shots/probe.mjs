import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
p.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE', m.text(), JSON.stringify(m.location())); }); p.on('pageerror', (e) => console.log('ERR', e.stack.split('\n').slice(0, 12).join('\n')));
await p.goto(new URL('../../index.html#/home', import.meta.url).href); await p.waitForTimeout(500);
await p.evaluate(() => {
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
console.log('seeded'); await p.evaluate(() => { location.hash = '#/settings'; }); await p.waitForTimeout(500);
console.log('hash + explicit render'); await p.evaluate(() => { location.hash = '#/home'; }); await p.waitForTimeout(300);
await p.evaluate(() => { location.hash = '#/settings'; NL.app.render(); }); await p.waitForTimeout(500);
await b.close();
