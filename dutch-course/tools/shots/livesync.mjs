// Checks cloud sync on the deployed site without sending email: library loads, client connects, sign-in form renders.
import { chromium } from 'playwright';
const URL0 = (process.argv[2] || 'https://ipantelidis.github.io/fable5-projects/dutch-course/') + '#/settings';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 } });
const errs = []; p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(URL0); await p.waitForTimeout(3500);
const r = await p.evaluate(async () => { await NL.sync.init(); return { configured: NL.sync.configured(), status: NL.sync.status(), lib: !!window.supabase, form: !!document.querySelector('input[type=email]'), text: [...document.querySelectorAll('.card')].map((c) => c.textContent).find((t) => /Cloud sync/.test(t)).slice(0, 160) }; });
console.log(JSON.stringify(r, null, 1));
await p.locator('input[type=email]').scrollIntoViewIfNeeded(); await p.screenshot({ path: 'out/livesync.png' });
console.log('errors:', errs.join(' | ') || 'none'); await b.close();
