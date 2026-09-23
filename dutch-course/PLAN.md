# Nederlands Nu — build plan (Phase 1)

A self-contained, gamified Dutch course (absolute beginner → CEFR B2) in vanilla HTML/CSS/JS.
Runs from `file://` and from GitHub Pages. No build step, no runtime dependencies.

## 1. File structure

```
index.html              shell: header, nav, <main id="view">, dialogs, script tags
css/app.css             design tokens, layout, components, exercise styles, dark mode
js/engine/util.js       NL namespace, helpers (normalize, shuffle, dates, ids, dom)
js/engine/state.js      user state, localStorage persistence, export/import
js/engine/srs.js        SM-2 scheduler for vocab + grammar cards, due queue
js/engine/tts.js        speechSynthesis wrapper: voice pick, rate, click-to-speak, shortcuts
js/engine/stt.js        SpeechRecognition wrapper + tolerant word comparison + fallback
js/engine/sfx.js        Web Audio sound effects, mute
js/engine/checker.js    answer checking: normalize, typo tolerance, synonyms, word order
js/engine/game.js       XP, levels, streak, daily goal, badges, skill bars
js/engine/exercises.js  one renderer per exercise type (14 types)
js/engine/lesson.js     lesson runner: Goal → Learn → Vocab → Practice → Mini test → Summary
js/engine/review.js     SRS review session + practice modes (speed, sprint, listen, speak, talk)
js/engine/validator.js  content validator (also run headless by tools/validate.js)
js/engine/views.js      screens: home, stage map, unit, grammar ref, dictionary, settings
js/engine/fluency.js    Stage 5: weekly challenges, themed vocabulary bank, fluency hub (added in the Stage 5 phase)
js/app.js               router (#/…), boot, global keyboard shortcuts
js/content/index.js     content registry helpers (V(), G(), lesson builders)
js/content/stage0.js    Foundations
js/content/stage1.js    A1
js/content/stage2.js    A2
js/content/stage3.js    B1
js/content/stage4.js    B2
js/content/stage5.js    Fluency & maintenance (speaking topics, weekly challenges, bank themes) + stage5-bank.js (bank words)
                        Stages 1 to 4 are split into a grammar file (stageN.js) and lesson files (stageN-u*.js)
content/TODO.md         content manifest: what is authored, what still needs exercises
tools/validate.js       node: loads content, runs validator, exits non-zero on errors
tools/browser-test.js   node: launches Chrome headless, loads index.html, reports console errors + self-tests
README.md               run locally, deploy to GitHub Pages, browser notes
```

Plain `<script>` tags, single global namespace `NL` (ES modules do not load from `file://` in Chrome).

## 2. Data schema

### Vocabulary item (dictionary entry)
```js
{ id:'huis', nl:'huis', en:'house', pos:'noun',        // noun|verb|adj|adv|prep|pron|num|phrase|conj|interj
  gender:'het', plural:'huizen', dim:'huisje',
  forms:{ pres:['woon','woont','wonen'], past:['woonde','woonden'], part:'gewoond', aux:'hebben' }, // verbs
  ex:{ nl:'Het huis is groot.', en:'The house is big.' },
  theme:'home', stage:1, note:'…optional usage note…' }
```
`nl`, `ex.nl`, plural and all verb forms are the audio strings.

### Grammar rule (grammar reference entry)
```js
{ id:'g-v2', title:'Verb second (V2) word order', stage:1, tags:['word order'],
  body:[ {h:'The rule'}, {p:'…English explanation…'},
         {table:{ head:['pronoun','zijn','hebben'], rows:[['ik','ben','heb'],…] }},
         {ex:[{nl:'Morgen ga ik naar Utrecht.', en:'Tomorrow I go to Utrecht.'}]},
         {tip:'Memory trick…'}, {warn:'Exception…'} ] }
```

### Lesson
```js
{ id:'s1u1l1', title:'…', minutes:15,
  goal:'After this lesson you can introduce yourself…',
  learn:[ …same blocks as grammar body… ], grammar:['g-v2','g-zijn'],   // rules taught (become SRS cards)
  vocab:['huis','wonen',…],                                             // 10–20 dictionary ids
  practice:[ …exercises… ], test:[ …exercises… ] }
```
Unit: `{ id, title, theme, lessons:[…], review:[…exercises] }`.
Stage: `{ id, code, cefr, title, blurb, units:[…], exam:[…exercises] }`.

### Exercise (one object per exercise; `explain` is required everywhere)
| type | fields |
|---|---|
| `mc` | `q, nl?, options[], answer(index), explain` |
| `fill` | `nl ('Ik ___ Jan.'), answer[] (accepted), en, hint?, explain` |
| `translate` | `dir:'nl-en'|'en-nl', prompt, answer[], explain` |
| `build` | `en, answer (Dutch sentence), extra[] (distractor tiles), explain` |
| `conj` | `verb, pronoun, tense:'pres'|'past'|'perf', answer[], explain` |
| `article` | `word, answer:'de'|'het', explain` |
| `dictation` | `nl, en, explain` |
| `listen` | `nl, options[], answer, explain` |
| `speak` | `nl, en` (scored by STT; self-grade fallback) |
| `freespeak` | `prompt, model (nl), modelEn` |
| `match` | `pairs:[[nl,en],…]` |
| `read` | `text (nl), qs:[{q, options, answer, explain}]` |
| `fix` | `wrong, answer[], explain` |
| `write` | `prompt, checklist[], model` |
Every exercise may carry `vocab:[ids]` / `grammar:[ids]` so SRS knows what it trains; otherwise they are inferred from the lesson.

### SRS card (SM-2)
`{ id, kind:'vocab'|'grammar', ef:2.5, reps:0, interval:0, due:<ISO date>, lapses:0, seen:0, correct:0, last:<ISO> }`
Known word = card with `reps ≥ 2 && interval ≥ 7 && lapses-adjusted accuracy ≥ 0.75`.

### User state (localStorage key `nl.state.v1`)
```js
{ v:1, created, xp, dailyGoal:50, dayLog:{ 'YYYY-MM-DD': {xp, answers, correct, voice?, lessons?, perfect?, reviews?, bank?} },
  challenges:{ '<Monday YYYY-MM-DD>': {id, date, xp} },   // weekly challenges claimed (Stage 5)
  streak:{ current, best, last }, badges:{ id:date }, levelSeen,
  lessons:{ lessonId:{ best, last, done:true, date } }, unitsReviewed:{}, exams:{ stageId:score },
  unlocked:{ s0:true, s1:true }, skills:{ grammar, vocab, listening, speaking, reading, writing }, // xp per skill
  srs:{ cards:{} },
  settings:{ voice:null, rate:'normal', theme:'auto', mute:false, unlockAll:false, showTranslations:true } }
```

## 3. Design tokens

- **Type**: `"Fraunces"`-style serif fallback stack for Dutch display text (`Georgia, "Iowan Old Style", serif`) + `"Inter", system-ui, sans-serif` for UI. No web font fetch (must work offline); system fallbacks chosen for warmth.
- **Palette (light)**: paper `#faf7f2`, ink `#1f1d1a`, muted `#6b655c`, line `#e6e0d6`, card `#ffffff`,
  accent (canal blue) `#1f5f8b`, accent-2 (brick) `#c2410c`, success `#2f7d4f`, warn `#b7791f`, error `#b3261e`, gold `#d4a017`.
- **Palette (dark)**: paper `#15130f`, ink `#f2ede4`, muted `#a39c90`, line `#2c2823`, card `#1e1b17`, accent `#7fb5dc`, accent-2 `#f0925e`.
- **Spacing**: 4-pt scale (`--s1: 4px` … `--s8: 48px`); radius `10px/16px`; max content width 760px.
- **Motion**: 150–250 ms ease-out; all animation disabled under `prefers-reduced-motion`.
- **Touch**: minimum 44×44 px targets; sentence tiles 48px tall.

## 4. Phases
1. This document. 2. Engine + UI + Stage 0, headless-verified. 3. Stage 1 + Stage 2 content, validator.
4. Stage 3 + 4 grammar + ≥2 lessons per unit, reference, dictionary, review modes, export/import. 5. Polish, README.

## 5. Roadmap: later phases (agreed 2026-09-20, not yet started)

These three features are wanted after the content phases. They are recorded here so the design stays compatible with them. None of them may break the two hard constraints: the app must keep working from `file://` with no account, and there is still no build step.

### 5a. Accounts and multi-user progress sync (built dormant 2026-09-23: js/engine/sync.js, js/config.js, supabase/schema.sql; activates when the owner fills in the two config values and serves over https)
Goal: several people can use the same live site, each with their own progress, on any device.

- **Approach**: keep localStorage as the source of truth on the device, and add an optional cloud sync layer. Backend-as-a-service loaded from a CDN `<script>` tag (Supabase is the first choice: email magic link and OAuth sign-in, Postgres with row-level security, a generous free tier, and a plain JS client that works without a bundler). Firebase is the fallback.
- **Data model**: one row per user in a `progress` table: `{ user_id, state jsonb, updated_at }`. The `state` blob is exactly the export JSON that already exists, so export/import, sync and the validator all share one schema. Add `v` and `updated_at` to the state for conflict handling (last-writer-wins by `updated_at`, with a "keep local / keep cloud" prompt when both changed).
- **Engine changes**: new `js/engine/sync.js` (sign in, sign out, push on every `state.save()` debounced to a few seconds, pull on boot and on tab focus). Settings gets a Sign in card. Without sign-in nothing changes. No user content is ever sent anywhere except the progress blob.
- **Open decisions for that phase**: Supabase project ownership, whether to allow anonymous "guest" accounts that can be upgraded later, and whether a leaderboard between users is wanted (it would need a second table with opt-in).

### 5b. Live deployment for everyone (prepared 2026-09-23: manifest, icon, service worker, About page with privacy note, README notes; only the GitHub Pages switch in the repository settings remains, which the owner must flip)
- **Hosting**: GitHub Pages from the `main` branch, `dutch-course/` published as the site root (either move the folder to a dedicated repository, or add a tiny GitHub Actions workflow that copies `dutch-course/` to the `gh-pages` branch; the app itself still needs no build).
- **Needs before going public**: a favicon and `manifest.json` so the site installs as a home-screen app on phones, a service worker for offline use (all files are static, so a cache-first worker of about 40 lines is enough), an `Over deze cursus` page with a short privacy note, and a content licence line in the README.
- **Voice**: GitHub Pages is HTTPS, which speech recognition requires; nothing else changes.

### 5c. Coach: a personal guide inside the app
Goal: a helper that knows the learner's progress and tells them what to do next, in chat form and through small nudges, so nobody has to work out the platform on their own.

- **Tier 1, rule-based coach (no server, works offline, build first)** — built 2026-09-23 as js/engine/coach.js: 14 suggestion rules with priorities, home card, one toast a day, five-step tour, chat panel (#/coach) with nine intents and keyword matching, quiet mode and tour reset in Settings, mistakes ring buffer and per-type accuracy in the day log. A `js/engine/coach.js` module that reads the existing state (due SRS cards, streak, daily goal, weakest skill bar, last lesson, badges close to unlocking, time since last session) and produces prioritised suggestions with a one-line reason and a deep link, for example "12 words are due, a 5-minute review keeps them" or "You have not spoken today, try Speaking mode". Surfaces: a Coach card on the home screen, a small non-blocking toast when the learner lands on a screen with an obvious next step, a first-run tour (5 steps, dismissable, never shown again), and a chat-style panel with quick-reply buttons ("What should I do now?", "How does review work?", "Explain my progress") answered from a small intent table. Every nudge is dismissable and there is a "Coach: quiet mode" setting.
- **Tier 2, conversational coach backed by Claude (optional, needs a key)** — built 2026-09-23, dormant until `coachProxyUrl` is set: `proxy/` (Cloudflare Worker with the official SDK, origin allow-list, optional sign-in check and daily limit) and `K.ask` in `js/engine/coach.js`. Free-text questions such as "why is it ik ben gegaan and not ik heb gegaan?" or "make me a plan for the next two weeks" go to the Claude API. The API key cannot live in a static site, so calls go through a small serverless proxy (Cloudflare Worker or Supabase Edge Function) that holds the key and checks the user's sign-in token from 5a. The request carries a compact progress summary (level, streak, weak skills, recent mistakes, current lesson) plus the relevant grammar entries as context, and a system prompt that keeps answers short, in English with Dutch examples, and inside the course. Load the `claude-api` skill before implementing this; use the current default model. Without a key the app silently falls back to Tier 1.
- **Data for the coach**: extend `dayLog` with per-exercise-type accuracy and add a small `mistakes` ring buffer (last 50 wrong answers with lesson and grammar ids) so both tiers can point at real weaknesses. Both additions go through the export/import schema.

### 5d. Interface polish with a UI/UX skill (noted 2026-09-21)
Goal: a cleaner, more structured interface without changing how the app works.

- **Resource**: the user found the `ui-ux-pro-max-skill` repository (https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), a Claude Code skill with UI/UX guidance. Before using it: read what the skill contains and does (it is third-party instructions and possibly scripts), then install it as a project skill only if it looks sound.
- **Scope for that phase**: audit every screen against one checklist (hierarchy, spacing rhythm, consistent card and button variants, empty states, focus and contrast, phone width). Likely targets: the home screen has grown (hero, challenge card, path, modes, skills, calendar) and needs grouping; the lesson runner's feedback panel; the vocabulary bank and dictionary rows; the settings page; a proper navigation entry for Stage 5 features.
- **Constraints that stay**: vanilla CSS with the existing design tokens in css/app.css, no framework, no build step, works from `file://`, dark mode, reduced motion, 44px touch targets.
- **How**: one screen per change, visual check in a real browser after each, since the current test tooling cannot judge layout.

Order: content phases first (Stage 2 to 5), then 5b (a live site makes 5a and 5c testable), then 5c Tier 1, then 5a, then 5c Tier 2.
