// Checks course-audio playback over http (needs: python3 -m http.server 8765 in dutch-course): a click on a recorded
// Dutch text plays audio/<hh>/<hash>.mp3 and does not call speechSynthesis; the "browser voice" setting does the opposite.
import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] }); const p = await b.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
const mp3 = []; p.on('request', (r) => { if (r.url().endsWith('.mp3')) mp3.push(r.url().split('/').slice(-2).join('/')); });
await p.addInitScript(() => { window.__synth = 0; const orig = speechSynthesis.speak.bind(speechSynthesis); speechSynthesis.speak = (u) => { window.__synth++; }; });
const BASE = process.argv[2] || 'http://localhost:8765/index.html'; await p.goto(BASE + '#/stories/a1-markt'); await p.waitForTimeout(1500);
console.log('index loaded:', await p.evaluate(() => NL.tts.recordingsAvailable()), '| recordings:', await p.evaluate(() => fetch('audio/index.json').then((r) => r.json()).then((l) => l.length)));
await p.locator('.story-line .spk').first().click(); await p.waitForTimeout(1200);
const st = await p.evaluate(() => ({ synth: window.__synth }));
console.log('course voice: mp3 requests =', mp3.length, '| browser voice calls =', st.synth);
await p.evaluate(() => { NL.state.get().settings.voiceSource = 'browser'; }); mp3.length = 0;
await p.locator('.story-line .spk').nth(1).click(); await p.waitForTimeout(600);
console.log('browser setting: mp3 requests =', mp3.length, '| browser voice calls =', await p.evaluate(() => window.__synth));
console.log('errors:', errs.join(' | ') || 'none'); await b.close();
