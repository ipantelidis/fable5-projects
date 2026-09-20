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

1. Push this folder to a GitHub repository (the `index.html` must be at the repository root).
2. Repository → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Wait a minute; the course is live at `https://<user>.github.io/<repo>/`.

No build, no workflow files needed. Progress is stored per browser in localStorage, so use Settings → Export progress before switching devices and Import progress on the new one.

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
