# Content manifest

Legend: **full** = grammar + vocab + 12–25 practice exercises + mini test authored · **grammar only** = explanation in the grammar reference, lessons still to write · **todo** = not started.

Run `node tools/validate.js` (or `sh tools/validate-jxa.sh` on a Mac without node) for live counts, and `sh tools/smoke-jxa.sh` for the engine smoke test.

## Stage 0 — Foundations (full, 15 lessons)

| Unit | Lessons | Status |
|---|---|---|
| s0u1 The sounds of Dutch | alphabet & name · long/short vowels · diphthongs · g, r, sch, ng, schwa | full |
| s0u2 Spelling rules | open/closed syllables · f/v, s/z, final d/dt · reading signs | full |
| s0u3 Numbers, time, dates | 0–20 · 21–1000 & prices · telling the time · days, months, dates | full |
| s0u4 Surviving Amsterdam | greetings · politeness, u/jij · café & shop · getting around | full |

Stage exam: generated from lesson tests (engine), no hand-written exam yet.

## Stage 1 — A1 (full, 33 lessons, every unit has at least 4, hand-written exam core)

| Unit | Lessons | Status |
|---|---|---|
| s1u1 Ik en mijn familie | pronouns + zijn · hebben + possessives · present tense · questions · niet/geen | full |
| s1u2 Thuis | de/het · plurals · demonstratives + place prepositions · adjective endings | full |
| s1u3 Eten en boodschappen | likes · modal verbs · shopping + diminutive · restaurant + inversion | full |
| s1u4 De stad en vervoer | city + er is · separable verbs · time prepositions · bike & traffic | full |
| s1u5 Werk en studie | professions · irregular verbs · frequency + graag · conjunctions + email | full |
| s1u6 Dagelijks leven | daily routine · hobbies · invitations · describing people | full |
| s1u7 Het weer | weather · clothes · small talk + forecast · seasons, holidays and what you do (stage1-extra.js) | full |
| s1u8 Gezondheid | body + symptoms · huisarts · emergencies + pharmacy · healthy habits with modals (stage1-extra.js) | full |

All 24 A1 grammar rules from the brief are in the grammar reference (js/content/stage1.js).

## Stage 2 — A2 (full, 28 lessons, hand-written exam core of 46 items)

Grammar reference: **done** (17 rules in js/content/stage2.js: perfect tense, hebben/zijn auxiliary, irregular participles, ovt weak, ovt strong, perfect vs past, future, imperative, reflexive verbs, separable verbs in all tenses, er, object pronouns, comparison, subordinate clauses, om … te, two-verb word order, time expressions).

| Unit | Theme | Planned lessons | Status |
|---|---|---|---|
| s2u1 Vroeger en gisteren | past experiences | perfect tense regular · hebben/zijn + irregular participles · simple past zijn/hebben/modals · telling a story | full |
| s2u2 Op reis | travel | strong past tense · future gaan/zullen · separable verbs in all tenses · station and hotel | full |
| s2u3 Afspraken en de dokter | appointments, doctor | reflexive verbs · imperative + making appointments · time expressions · at the huisarts | full |
| s2u4 Wonen en de gemeente | housing, gemeente | er (all uses) · object pronouns · om … te + paperwork · reading and replying to gemeente letters | full |
| s2u5 Werk | work life | omdat/dat/als + my job · toen/terwijl/hoewel/voordat/nadat + career · two-verb order + office · work email | full |
| s2u6 Vrije tijd | hobbies | comparative · superlative + liever/liefst · invitations with voordat/nadat/zodra/zodat · hobbies in depth + joining a club | full |
| s2u7 Winkelen en klagen | shopping, complaints | exchanging and returning with er + preposition · complaining politely + complaint email | full |
| s2u8 Bellen en mailen | phone and email | on the phone (Met …, separable phone verbs) · spelling, addresses, accounts and the personal email | full |

Stage exam: 46 hand-written items in js/content/stage2-u7-8.js; the engine samples 30 per attempt.

## Stage 3 — B1 (grammar reference complete; 2 full lessons per unit; more lessons to write)

Grammar reference: **done** (12 rules in js/content/stage3.js: relative clauses, pronominal adverbs, passive, zou and hypotheticals, indirect speech, infinitive constructions, word order in depth, complex negation, word formation, particles, register, idioms). Every grammar topic in the brief has a full explanation.

Lessons live in js/content/stage3-u1-4.js and js/content/stage3-u5-8.js. **full** = authored with vocabulary, 14+ practice exercises and a mini test. **todo** = planned, not written; the brief asks for 4 to 8 lessons per unit.

| Unit | Full lessons | Still to write (todo) |
|---|---|---|
| s3u1 Nieuws en samenleving | relative clauses die/dat + news · passive with worden + reports · the Dutch political system · listening to the radio news · writing a summary (stage3-extra-a.js) | complete: 5 lessons |
| s3u2 Meningen en discussies | opinions + reported views · particles · reported speech in the past · holding your own in a discussion · writing an opinion piece (stage3-extra-a.js) | complete: 5 lessons |
| s3u3 Onderwijs | school system + pronominal adverbs · infinitive constructions | parents’ evening and talking to a teacher · adult education and inburgering exam tasks · study skills vocabulary |
| s3u4 Gezondheid en levensstijl | advice with zou · complex negation | hypotheticals in the past (als ik had geweten) · mental health and work-life balance · at the specialist and the hospital |
| s3u5 Milieu | passive in every tense + water and energy · word formation + waste | the energy transition debate · transport and mobility · writing a letter to the gemeente about the neighbourhood |
| s3u6 Geld en bureaucratie | relative clauses with prepositions + money · formal register + official letters | the belastingaangifte step by step · insurance and claims · calling an organisation with a problem |
| s3u7 Vergaderingen en e-mails | meeting language + word order for emphasis · professional email | presentations and answering questions · performance review (functioneringsgesprek) · small talk at work |
| s3u8 Nederlandse cultuur en geschiedenis | customs + idioms · a short history | more idioms and proverbs in context · art and literature · regions, dialects and Frisian |

Stage exam: **done**, 52 hand-written items covering every B1 rule (js/content/stage3-u5-8.js); the engine samples 30 per attempt.

## Stage 4 — B2 (grammar and skills reference complete; 2 full lessons per unit; more lessons to write)

Reference: **done** (15 entries in js/content/stage4.js: long sentences and verb clusters, all past tenses incl. pluperfect and future perfect, the passive in all tenses and its alternatives, subjunctive remnants and fixed expressions, nominalisation and formal written Dutch, argumentative writing, reading strategies, listening to fast speech, discourse markers, register switching, regional variation and Belgian Dutch, advanced idioms and proverbs, false friends with English and German, common errors of advanced learners, and a Staatsexamen NT2 Programma II guide). Every B2 topic in the brief has a full explanation.

Lessons live in js/content/stage4-u1-3.js and js/content/stage4-u4-6.js.

| Unit | Full lessons | Still to write (todo) |
|---|---|---|
| s4u1 Politiek en samenleving | parliament + long sentences and verb clusters · reading a commentary + discourse markers | the EU and international relations · migration and integration debate · listening: a radio debate (exam format) |
| s4u2 Wetenschap en technologie | academic Dutch + nominalisation · research reports + the passive in all tenses | AI and ethics · health research in the news · writing a summary of an academic text |
| s4u3 Werk en carrière | career story + pluperfect and future perfect · job interview + register switching | labour law and contracts · giving a presentation and handling questions · conflict at work and feedback |
| s4u4 Cultuur en media | arts and media + fixed expressions · real speech: reductions, fillers, Belgian Dutch | Dutch literature and film · social media and public debate · listening: interviews at natural speed (exam format) |
| s4u5 Debat en abstracte onderwerpen | the betoog · proverbs and idioms in debate and headlines | ethics and dilemmas · economy and inequality · a full timed debate with rebuttal |
| s4u6 Valkuilen en examentraining | false friends + surviving errors · Staatsexamen: all four parts | a complete mock reading paper · a complete mock writing paper · a complete mock speaking paper |

Stage exam: **done**, 55 hand-written items in Staatsexamen style incl. an opinion text with exam-type questions (js/content/stage4-u4-6.js); the engine samples 30 per attempt. The writing and long speaking tasks are in lesson s4u6l2 and in Free talk, because a timed exam cannot self-grade them.

## Stage 5 — Fluency and maintenance (built; the bank keeps growing)

Stage 5 is a hub (`#/fluency`), open at every level, not a list of lessons. Engine: js/engine/fluency.js. Data: js/content/stage5.js and js/content/stage5-bank.js.

| Part | Status |
|---|---|
| Ongoing spaced-repetition review | done (the existing Review, linked from the hub with the due count) |
| Weekly challenges | done: 12 challenges rotating every Monday, 9 goal kinds (xp, answers, days, voice, lessons, reviews, perfect, bank, accuracy), bonus XP and 3 badges, progress computed from the day log, home-screen card and `#/challenge` page with history |
| Speaking topics with model answers | done: 15 topics, 60 prompts (A1: 3, A2: 4, B1: 4, B2: 4 incl. exam-style tasks), used by Free talk |
| Themed vocabulary bank | done: `#/bank` groups every dictionary word into 15 themes with known/learning/new counts; per theme: learn 10 new words (intro cards, then practice), practise the theme, practise weak words. Practised words get SRS cards |
| Bank vocabulary | 373 extra words authored so far (food, kitchen, furniture, clothes, body, animals, nature, city, professions, character, feelings, sport, arts, technology, law, economy, frequent verbs, adjectives, adverbs) |

**todo, honest gap:** the brief's targets are about 5000 words at B1 and 10000 at B2. The dictionary holds about 2200. Growing the bank is the way to close that gap: add rows to js/content/stage5-bank.js (one line per word, validator-checked), roughly 300 to 500 words per session, frequency-ranked, per theme. Suggested next themes: household chores, tools and DIY, school subjects, countries and nationalities, religion and beliefs, media and press, banking detail, medical specialisms, cars and traffic, farming and food production, more frequent verbs (next 300), more abstract nouns.

**todo:** more speaking topics (target 30), and challenge variety once the coach from PLAN.md section 5c exists.
