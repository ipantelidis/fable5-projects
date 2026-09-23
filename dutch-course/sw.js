/* Nederlands Nu service worker: cache-first for the app shell so the course works offline once visited.
   Bump VERSION whenever content or engine files change; old caches are removed on activate. */
const VERSION = 'nl-2026-09-23-6';
const ASSETS = [
  './',
  './index.html',
  './css/app.css',
  './manifest.webmanifest',
  './icons/icon.svg',
  './js/engine/util.js',
  './js/engine/state.js',
  './js/engine/srs.js',
  './js/engine/sfx.js',
  './js/engine/tts.js',
  './js/engine/stt.js',
  './js/engine/checker.js',
  './js/engine/game.js',
  './js/content/index.js',
  './js/engine/gen.js',
  './js/engine/validator.js',
  './js/engine/exercises.js',
  './js/engine/lesson.js',
  './js/engine/review.js',
  './js/engine/views.js',
  './js/engine/fluency.js',
  './js/engine/coach.js',
  './js/engine/sync.js',
  './js/config.js',
  './js/content/stage0.js',
  './js/content/stage0-lessons-a.js',
  './js/content/stage0-lessons-b.js',
  './js/content/stage1.js',
  './js/content/stage1-u1-2.js',
  './js/content/stage1-u3-4.js',
  './js/content/stage1-u5-6.js',
  './js/content/stage1-u7-8.js',
  './js/content/stage1-extra.js',
  './js/content/stage2.js',
  './js/content/stage2-u1-2.js',
  './js/content/stage2-u3-4.js',
  './js/content/stage2-u5-6.js',
  './js/content/stage2-u7-8.js',
  './js/content/stage3.js',
  './js/content/stage3-u1-4.js',
  './js/content/stage3-u5-8.js',
  './js/content/stage3-extra-a.js',
  './js/content/stage3-extra-b.js',
  './js/content/stage3-extra-c.js',
  './js/content/stage3-extra-d.js',
  './js/content/stage4.js',
  './js/content/stage4-u1-3.js',
  './js/content/stage4-u4-6.js',
  './js/content/stage4-extra-a.js',
  './js/content/stage4-extra-b.js',
  './js/content/stage4-extra-c.js',
  './js/content/stage5.js',
  './js/content/stage5-bank.js',
  './js/content/stage5-bank-2.js',
  './js/content/stage5-talk-2.js',
  './js/app.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => (req.mode === 'navigate' ? caches.match('./index.html') : undefined)))
  );
});
