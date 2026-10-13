// Dutch text -> Piper phoneme ids, using the espeak-ng WebAssembly build from @diffusionstudio/piper-wasm (via
// @mintplex-labs/piper-tts-web). Used because the native piper-tts wheels for macOS ship a broken espeak data path.
// usage: node phonemize.mjs in.json out.json   (in: ["text", ...]; out: [[ids], ...] in the same order)
import { createRequire } from 'node:module'; globalThis.require = createRequire(import.meta.url); globalThis.__dirname = new URL('.', import.meta.url).pathname;
import fs from 'node:fs'; import path from 'node:path';
const { createPiperPhonemize } = await import('./node_modules/@mintplex-labs/piper-tts-web/dist/piper-o91UDS6e.js');
const dir = path.join(path.dirname(new URL(import.meta.url).pathname), 'phonemizer');
const texts = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')); const out = [];
const CHUNK = 300; // one module instance per chunk: a single huge call runs out of WebAssembly memory
for (let i = 0; i < texts.length; i += CHUNK) {
  const part = texts.slice(i, i + CHUNK); const got = [];
  const m = await createPiperPhonemize({ print: (d) => got.push(JSON.parse(d).phoneme_ids), printErr: (e) => console.error(e), locateFile: (u) => path.join(dir, u.endsWith('.wasm') ? 'piper_phonemize.wasm' : 'piper_phonemize.data') });
  m.callMain(['-l', 'nl', '--input', JSON.stringify(part.map((text) => ({ text }))), '--espeak_data', '/espeak-ng-data']);
  if (got.length !== part.length) { console.error('chunk count mismatch at', i, got.length, part.length); process.exit(1); }
  out.push(...got);
}
if (out.length !== texts.length) { console.error('count mismatch', out.length, texts.length); process.exit(1); }
fs.writeFileSync(process.argv[3], JSON.stringify(out)); console.log('phonemized', out.length);
