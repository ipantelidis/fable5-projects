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

## Stage 1 — A1 (full, 31 lessons, hand-written exam core)

| Unit | Lessons | Status |
|---|---|---|
| s1u1 Ik en mijn familie | pronouns + zijn · hebben + possessives · present tense · questions · niet/geen | full |
| s1u2 Thuis | de/het · plurals · demonstratives + place prepositions · adjective endings | full |
| s1u3 Eten en boodschappen | likes · modal verbs · shopping + diminutive · restaurant + inversion | full |
| s1u4 De stad en vervoer | city + er is · separable verbs · time prepositions · bike & traffic | full |
| s1u5 Werk en studie | professions · irregular verbs · frequency + graag · conjunctions + email | full |
| s1u6 Dagelijks leven | daily routine · hobbies · invitations · describing people | full |
| s1u7 Het weer | weather · clothes · small talk + forecast | full |
| s1u8 Gezondheid | body + symptoms · huisarts · emergencies + pharmacy | full |

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
| s3u1 Nieuws en samenleving | relative clauses die/dat + news · passive with worden + reports | politics and the Dutch political system · listening to the radio news · writing a short summary of an article |
| s3u2 Meningen en discussies | opinions + reported views · particles wel/toch/even/maar/eens/nou/hoor | indirect speech in the past (zei dat … was) · debating: interrupting, conceding, concluding · writing an opinion piece |
| s3u3 Onderwijs | school system + pronominal adverbs · infinitive constructions | parents’ evening and talking to a teacher · adult education and inburgering exam tasks · study skills vocabulary |
| s3u4 Gezondheid en levensstijl | advice with zou · complex negation | hypotheticals in the past (als ik had geweten) · mental health and work-life balance · at the specialist and the hospital |
| s3u5 Milieu | passive in every tense + water and energy · word formation + waste | the energy transition debate · transport and mobility · writing a letter to the gemeente about the neighbourhood |
| s3u6 Geld en bureaucratie | relative clauses with prepositions + money · formal register + official letters | the belastingaangifte step by step · insurance and claims · calling an organisation with a problem |
| s3u7 Vergaderingen en e-mails | meeting language + word order for emphasis · professional email | presentations and answering questions · performance review (functioneringsgesprek) · small talk at work |
| s3u8 Nederlandse cultuur en geschiedenis | customs + idioms · a short history | more idioms and proverbs in context · art and literature · regions, dialects and Frisian |

Stage exam: generated by the engine from lesson material (no hand-written core yet). **todo**: write a hand-written B1 exam of about 45 items once more lessons exist.

## Stage 4 — B2 (todo: full grammar explanations + ≥2 lessons per unit)

## Stage 5 — Fluency (todo: free-talk topics, weekly challenges, themed vocabulary bank)
