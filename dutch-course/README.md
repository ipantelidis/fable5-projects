# Nederlands Nu

A self-contained, gamified Dutch course for English speakers, from absolute beginner to CEFR B2. Explicit grammar first, then lots of varied practice, with voice output (text-to-speech) and voice input (speech recognition) built in. Vanilla HTML, CSS and JavaScript: no build step, no framework, no runtime dependencies.

## Run it locally

Open `index.html` in Chrome or Edge. That is it. Everything runs from `file://`.

If you prefer a local server (useful for testing on your phone over Wi-Fi):

```
python -m http.server 8000
# then open http://localhost:8000/ (or http://<your-pc-ip>:8000/ on your phone)
```

## Deploy on GitHub Pages

This folder lives inside the `fable5-projects` repository, so the simplest route needs no build and no workflow:

1. Repository → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
2. Wait a minute; the course is live at `https://<user>.github.io/fable5-projects/dutch-course/`.

Everything is relative-path, so the sub-folder is fine. Over HTTPS the page registers a small service worker (`sw.js`) that caches the app for offline use and can be installed to a phone’s home screen (`manifest.webmanifest`). After changing any file, bump `VERSION` in `sw.js` so returning visitors get the update.

To publish the course as its own site instead, copy this folder to a new repository with `index.html` at its root and follow the same two steps. Progress is stored per browser in localStorage, so use Settings → Export progress before switching devices and Import progress on the new one.

## Privacy

No server, no account, no cookies, no analytics. All progress lives in the browser’s localStorage; export it from Settings to keep a backup. Voice recognition in Chrome and Edge is provided by the browser vendor and may process audio on their servers while the microphone is held; it can be avoided by self-grading speaking exercises. The in-app page **Settings → About this course and your data** says the same to learners.

## Licence

© 2026 the repository owner. No open licence has been chosen yet; until one is added, all rights are reserved for both the code and the course content.

## Best browser for voice

| | Voice output (Dutch TTS) | Voice input (speech recognition) |
|---|---|---|
| Chrome (desktop, Android) | yes | yes |
| Edge | yes, high-quality online voices | yes |
| Safari (macOS/iOS) | yes | partial / unreliable |
| Firefox | yes | no |

When speech recognition is unavailable, speaking exercises still work: you listen to the model, say it, and grade yourself. On Windows you can add extra Dutch voices under Settings → Time & language → Speech → Add voices → Nederlands.

## Keyboard shortcuts

- `Enter` check the answer / continue
- `Space` replay the audio (when not typing in a text box)
- `←` `→` `↑` `↓` or `1`–`4` choose an option
- `Esc` close the word popup

## Project layout

```
index.html            app shell
css/app.css           design tokens, layout, components, dark mode
js/engine/            state, SRS, TTS, STT, checker, gamification, exercises, lesson runner, review modes, views,
                      fluency (weekly challenges, vocabulary bank, Stage 5 hub)
js/content/index.js   content helpers (N, VB, W, PH, G, mc, fill, build, ...)
js/content/stage*.js  course content: a grammar-reference file per stage plus lesson files per pair of units;
                      stage5.js holds speaking topics, weekly challenges and bank themes, stage5-bank.js the extra bank words
content/TODO.md       content manifest: what is authored, what still needs exercises
tools/validate.js     node tools/validate.js     → validates all content
tools/browser-test.js node tools/browser-test.js → drives the app in headless Chrome/Edge (83 checks)
tools/validate-jxa.sh sh tools/validate-jxa.sh    → validator via macOS JavaScriptCore (no node needed)
tools/smoke-jxa.sh    sh tools/smoke-jxa.sh      → engine smoke test via JavaScriptCore (no browser needed)
PLAN.md               file structure, data schema, design tokens
```

## Testing

```
node tools/validate.js        # ids, answers, dictionary links, audio strings, placeholders
sh tools/validate-jxa.sh      # same checks without node, using macOS's built-in JavaScript engine
sh tools/smoke-jxa.sh         # engine smoke test without a browser: exam builder, auto exercises, checker, conjugation drills, state round trip
node tools/browser-test.js    # loads tools/test.html headless, runs a full lesson, review, exam, modes, export/import
node tools/browser-test.js --size=400,900   # narrow viewport
```

The content validator is also available inside the app: Settings → Check content.

## Extending the content

Every lesson is data in `js/content/`. Add words with `N()` (noun), `VB()` (verb), `W()` (other), `PH()` (phrase); add rules with `G()`; build exercises with `mc()`, `fill()`, `tr()`, `build()`, `conj()`, `art()`, `plural()`, `dict()`, `listen()`, `speak()`, `free()`, `match()`, `read()`, `fix()`, `write()`. `auto(n, kinds)` generates n extra exercises from the lesson vocabulary at runtime. Run the validator after editing.
