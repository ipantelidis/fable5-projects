#!/usr/bin/env node
/* Headless browser test: loads tools/test.html in Chrome/Edge headless and prints the self-test report.
   Usage: node tools/browser-test.js   (exit code 1 on failures) */
'use strict';
const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const chrome = candidates.find((p) => fs.existsSync(p));
if (!chrome) { console.error('No Chrome/Edge found. Set CHROME_PATH.'); process.exit(2); }

const page = path.join(__dirname, 'test.html');
const url = 'file:///' + page.replace(/\\/g, '/');
const profile = fs.mkdtempSync(path.join(process.env.NL_TMP || os.tmpdir(), 'nl-headless-'));
const size = process.argv.find((a) => a.startsWith('--size=')) || '--size=1280,900';
const args = ['--headless=new', '--window-size=' + size.slice(7), '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--allow-file-access-from-files', '--use-fake-ui-for-media-stream', '--user-data-dir=' + profile, '--virtual-time-budget=30000', '--dump-dom', url];
console.log('Running', path.basename(chrome), 'headless on', url);
const r = spawnSync(chrome, args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, timeout: 120000 });
try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) {}
if (r.error) { console.error('Launch failed:', r.error.message); process.exit(2); }
const dom = r.stdout || '';
const m = /<pre id="test-results">([\s\S]*?)<\/pre>/.exec(dom);
if (!m) { console.error('No test results in DOM. stderr:\n' + (r.stderr || '').slice(0, 2000)); process.exit(2); }
const report = m[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
console.log(report);
const sum = /SUMMARY pass=(\d+) fail=(\d+)/.exec(report);
if (!sum || sum[2] !== '0' || report.startsWith('PENDING')) process.exit(1);
