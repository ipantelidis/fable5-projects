// Renders PNG app icons from the SVG design: rounded "any" icons and full-bleed "maskable" ones (text inside the 80% safe zone).
import { chromium } from 'playwright';
const out = new URL('../../icons/', import.meta.url).pathname;
const rounded = (s) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${s}" height="${s}"><rect width="512" height="512" rx="112" fill="#1f5f8b"/><text x="256" y="338" font-size="232" text-anchor="middle" fill="#faf7f2" font-family="Georgia, serif" font-weight="700">NL</text></svg>`;
const bleed = (s) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${s}" height="${s}"><rect width="512" height="512" fill="#1f5f8b"/><text x="256" y="320" font-size="180" text-anchor="middle" fill="#faf7f2" font-family="Georgia, serif" font-weight="700">NL</text></svg>`;
const b = await chromium.launch();
for (const [name, svg, size, transparent] of [['icon-192.png', rounded, 192, true], ['icon-512.png', rounded, 512, true], ['maskable-512.png', bleed, 512, false], ['apple-touch-icon.png', bleed, 180, false]]) {
  const p = await b.newPage({ viewport: { width: size, height: size } });
  await p.setContent(`<html><body style="margin:0;background:transparent">${svg(size)}</body></html>`);
  await p.screenshot({ path: out + name, omitBackground: transparent, clip: { x: 0, y: 0, width: size, height: size } });
  console.log(name); await p.close();
}
await b.close();
