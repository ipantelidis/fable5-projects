// Renders icons/social.png (1200x630), the preview image shown when the course link is shared.
import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<html><body style="margin:0;width:1200px;height:630px;background:#faf7f2;font-family:Georgia,serif;display:flex;align-items:center;padding:0 90px;box-sizing:border-box;gap:70px">
<div style="flex:none;width:260px;height:260px;border-radius:58px;background:#1f5f8b;color:#faf7f2;display:grid;place-items:center;font-size:118px;font-weight:700">NL</div>
<div><div style="font:700 26px/1 -apple-system,Helvetica,Arial,sans-serif;letter-spacing:.12em;color:#6b655c;text-transform:uppercase">Free Dutch course · A0 to B2</div>
<div style="font-size:92px;font-weight:700;color:#1f1d1a;margin:22px 0 18px">Nederlands <i style="color:#c2410c">Nu</i></div>
<div style="font:32px/1.4 -apple-system,Helvetica,Arial,sans-serif;color:#3a362f">Clear grammar, 3,000 words with audio,<br>speaking practice and spaced review.<br>In your browser, no account needed.</div></div></body></html>`);
await p.screenshot({ path: new URL('../../icons/social.png', import.meta.url).pathname });
await b.close(); console.log('icons/social.png');
