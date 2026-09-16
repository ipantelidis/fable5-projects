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
js/app.js               router (#/…), boot, global keyboard shortcuts
js/content/index.js     content registry helpers (V(), G(), lesson builders)
js/content/stage0.js    Foundations
js/content/stage1.js    A1
js/content/stage2.js    A2
js/content/stage3.js    B1
js/content/stage4.js    B2
js/content/stage5.js    Fluency & maintenance (challenges, speaking topics, vocab bank)
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
{ v:1, created, xp, dailyGoal:50, dayLog:{ 'YYYY-MM-DD': {xp, answers, correct} },
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
