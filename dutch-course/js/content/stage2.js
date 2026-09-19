/* Stage 2 — A2: grammar reference. Vocabulary and lessons live in stage2-u*.js */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { G, h, p, tip, warn, table, ex, list } = A;

  G('g2-perfect', 'The perfect tense: ik heb gewerkt', 2, ['verbs', 'past', 'perfect'], [
    p('The **perfect tense** (voltooid tegenwoordige tijd, vtt) is the everyday past tense of spoken Dutch. Where English says "I worked yesterday", Dutch usually says `Ik heb gisteren gewerkt`. It is built from an **auxiliary** (`hebben` or `zijn`) in the present tense plus a **past participle** at the **end** of the sentence.'),
    table(['', 'auxiliary', '…', 'participle'], [['Ik', '*heb', 'gisteren', '*gewerkt'], ['Zij', '*is', 'naar Utrecht', '*gegaan'], ['Wij', '*hebben', 'een film', '*gezien'], ['Heb', 'je', 'al', '*gegeten?']]),
    h('Regular participles: ge- + stem + t or d'),
    p('Take the stem (`werk`, `woon`, `fiets`). Add `ge-` in front. Add `-t` if the stem ends in one of the consonants of **’t kofschip** (t, k, f, s, ch, p, and also x), otherwise add `-d`.'),
    table(['infinitive', 'stem', 'last letter', 'participle'], [['werken', 'werk', 'k', '*gewerkt'], ['fietsen', 'fiets', 's', '*gefietst'], ['koken', 'kook', 'k', '*gekookt'], ['wonen', 'woon', 'n', '*gewoond'], ['leren', 'leer', 'r', '*geleerd'], ['spelen', 'speel', 'l', '*gespeeld'], ['reizen', 'reis', 'z → s', '*gereisd'], ['leven', 'leef', 'v → f', '*geleefd']]),
    warn('For v and z verbs, look at the **infinitive** letter, not the stem: reizen has a z, so the participle is `gereisd` with a d. Same for leven → `geleefd`, geloven → `geloofd`.'),
    p('If the stem already ends in t or d, nothing is added: `praten` → `gepraat`, `antwoorden` → `geantwoord`.'),
    h('No ge- for some prefixes'),
    p('Verbs that start with the unstressed prefixes **be-, ge-, her-, er-, ont-, ver-** get **no** `ge-`: `betalen` → `betaald`, `gebruiken` → `gebruikt`, `herhalen` → `herhaald`, `vertellen` → `verteld`, `ontmoeten` → `ontmoet`.'),
    ex(['Ik heb gisteren tot zes uur gewerkt.', 'I worked until six yesterday.'], ['Heb je de huur al betaald?', 'Have you paid the rent yet?'], ['We hebben in Utrecht gewoond.', 'We lived in Utrecht.'], ['Zij heeft haar buurvrouw ontmoet.', 'She met her neighbour.']),
    tip('’t kofschip: say it as one word. If the last letter of the stem is in it, the participle ends in -t. Everything else: -d.'),
  ]);

  G('g2-hebben-zijn', 'hebben or zijn as auxiliary', 2, ['verbs', 'perfect'], [
    p('Most verbs form the perfect with `hebben`. A smaller group takes `zijn`. Use `zijn` when the verb expresses:'),
    list('**a change of place** (movement from A to B): `gaan`, `komen`, `vertrekken`, `vallen`, `verhuizen`: `Ik ben naar huis gegaan.`', '**a change of state**: `worden`, `beginnen`, `stoppen`, `trouwen`, `sterven`, `groeien`: `Het is koud geworden.`', 'and the verbs `zijn` and `blijven` themselves: `Ik ben thuis gebleven.`'),
    table(['zijn-verbs', 'participle', ''], [['gaan', '*gegaan', 'to go'], ['komen', '*gekomen', 'to come'], ['blijven', '*gebleven', 'to stay'], ['worden', '*geworden', 'to become'], ['beginnen', '*begonnen', 'to begin'], ['vertrekken', '*vertrokken', 'to leave'], ['vallen', '*gevallen', 'to fall'], ['verhuizen', '*verhuisd', 'to move house'], ['trouwen', '*getrouwd', 'to marry'], ['gebeuren', '*gebeurd', 'to happen'], ['zijn', '*geweest', 'to be']]),
    h('Movement verbs: hebben or zijn depending on the sentence'),
    p('`lopen`, `fietsen`, `rijden`, `zwemmen`, `vliegen` take `zijn` when there is a **destination** and `hebben` when the activity itself is the point:'),
    ex(['Ik ben naar het werk gefietst.', 'I cycled to work. (destination → zijn)'], ['Ik heb een uur gefietst.', 'I cycled for an hour. (activity → hebben)'], ['We zijn naar Texel gereden.', 'We drove to Texel.'], ['Hij heeft zijn hele leven gereden.', 'He has driven all his life.']),
    warn('English uses "have" everywhere ("I have gone"); Dutch says `ik ben gegaan`. Saying `ik heb gegaan` is the most common A2 mistake. Drill the zijn-list until it is automatic.'),
    tip('If you can ask "where to?" or "into what?" the answer is usually zijn.'),
  ]);

  G('g2-irregular-participles', 'Irregular participles: the list you need', 2, ['verbs', 'perfect', 'irregular'], [
    p('Strong verbs change their vowel and most end in `-en`. There is no rule; you learn them as a set. These are the ones you will meet constantly. The auxiliary is `hebben` unless marked.'),
    table(['infinitive', 'participle', ''], [['zijn', '*geweest (zijn)', 'been'], ['hebben', '*gehad', 'had'], ['gaan', '*gegaan (zijn)', 'gone'], ['komen', '*gekomen (zijn)', 'come'], ['doen', '*gedaan', 'done'], ['zien', '*gezien', 'seen'], ['eten', '*gegeten', 'eaten'], ['drinken', '*gedronken', 'drunk'], ['geven', '*gegeven', 'given'], ['nemen', '*genomen', 'taken'], ['lezen', '*gelezen', 'read'], ['schrijven', '*geschreven', 'written'], ['spreken', '*gesproken', 'spoken'], ['kijken', '*gekeken', 'looked'], ['zitten', '*gezeten', 'sat'], ['staan', '*gestaan', 'stood'], ['liggen', '*gelegen', 'lain'], ['slapen', '*geslapen', 'slept'], ['lopen', '*gelopen', 'walked'], ['rijden', '*gereden', 'driven'], ['vinden', '*gevonden', 'found'], ['beginnen', '*begonnen (zijn)', 'begun'], ['blijven', '*gebleven (zijn)', 'stayed'], ['brengen', '*gebracht', 'brought'], ['denken', '*gedacht', 'thought'], ['kopen', '*gekocht', 'bought'], ['zoeken', '*gezocht', 'searched'], ['weten', '*geweten', 'known'], ['worden', '*geworden (zijn)', 'become'], ['vergeten', '*vergeten', 'forgotten'], ['begrijpen', '*begrepen', 'understood'], ['krijgen', '*gekregen', 'got'], ['helpen', '*geholpen', 'helped'], ['vragen', '*gevraagd', 'asked'], ['zeggen', '*gezegd', 'said'], ['houden', '*gehouden', 'held'], ['sluiten', '*gesloten', 'closed'], ['verliezen', '*verloren', 'lost'], ['trekken', '*getrokken', 'pulled'], ['vliegen', '*gevlogen', 'flown']]),
    p('Four verbs keep a t-sound but change the vowel: `brengen → gebracht`, `denken → gedacht`, `kopen → gekocht`, `zoeken → gezocht`. Learn them as the "-cht four".'),
    ex(['Ik heb vandaag veel gedaan.', 'I did a lot today.'], ['Heb je mijn sleutels gezien?', 'Have you seen my keys?'], ['We hebben een nieuwe bank gekocht.', 'We bought a new sofa.'], ['Ze is om acht uur begonnen.', 'She started at eight.']),
    tip('Many strong participles look like their English cousin: gezien / seen, gegeven / given, gekomen / come, gedronken / drunk. Use the English to guess, then check the vowel.'),
  ]);

  G('g2-ovt-weak', 'Simple past (ovt) of weak verbs: ik werkte', 2, ['verbs', 'past'], [
    p('The **simple past** (onvoltooid verleden tijd, ovt) is used for stories, descriptions and repeated past actions, and for `zijn`, `hebben` and the modal verbs even in speech. Weak (regular) verbs form it with the stem plus **-te** or **-de** (singular) and **-ten** or **-den** (plural). The choice follows **’t kofschip** again.'),
    table(['', 'werken (k → te)', 'wonen (n → de)'], [['ik / jij / u / hij / zij', '*werkte', '*woonde'], ['wij / jullie / zij', '*werkten', '*woonden']]),
    p('Only two forms: singular and plural. No -t for jij or hij.'),
    table(['infinitive', 'past singular', 'past plural'], [['fietsen', '*fietste', '*fietsten'], ['koken', '*kookte', '*kookten'], ['praten', '*praatte', '*praatten'], ['leren', '*leerde', '*leerden'], ['reizen', '*reisde', '*reisden'], ['antwoorden', '*antwoordde', '*antwoordden']]),
    warn('praten → `praatte`, antwoorden → `antwoordde`: the double t / double d looks strange but is correct. You hear only one t, but you write both.'),
    ex(['Vroeger woonde ik in Londen.', 'I used to live in London.'], ['We fietsten elke dag naar school.', 'We cycled to school every day.'], ['Hij werkte tien jaar bij de gemeente.', 'He worked at the municipality for ten years.']),
    tip('Perfect for single events you report (`Ik heb gisteren gebeld`), simple past for the background and the flow of a story (`Het regende en ik wachtte op de tram`).'),
  ]);

  G('g2-ovt-strong', 'Simple past of strong and irregular verbs: ik ging, ik was', 2, ['verbs', 'past', 'irregular'], [
    p('Strong verbs change their vowel in the simple past and add `-en` in the plural. The most important irregulars, `zijn`, `hebben` and the modals, are used in the simple past all the time, even in casual speech.'),
    table(['infinitive', 'past sg', 'past pl', ''], [['zijn', '*was', '*waren', 'was / were'], ['hebben', '*had', '*hadden', 'had'], ['kunnen', '*kon', '*konden', 'could'], ['moeten', '*moest', '*moesten', 'had to'], ['mogen', '*mocht', '*mochten', 'was allowed'], ['willen', '*wilde', '*wilden', 'wanted'], ['zullen', '*zou', '*zouden', 'would'], ['gaan', '*ging', '*gingen', 'went'], ['komen', '*kwam', '*kwamen', 'came'], ['doen', '*deed', '*deden', 'did'], ['zien', '*zag', '*zagen', 'saw'], ['eten', '*at', '*aten', 'ate'], ['drinken', '*dronk', '*dronken', 'drank'], ['geven', '*gaf', '*gaven', 'gave'], ['nemen', '*nam', '*namen', 'took'], ['lezen', '*las', '*lazen', 'read'], ['schrijven', '*schreef', '*schreven', 'wrote'], ['spreken', '*sprak', '*spraken', 'spoke'], ['zitten', '*zat', '*zaten', 'sat'], ['staan', '*stond', '*stonden', 'stood'], ['liggen', '*lag', '*lagen', 'lay'], ['slapen', '*sliep', '*sliepen', 'slept'], ['lopen', '*liep', '*liepen', 'walked'], ['rijden', '*reed', '*reden', 'drove'], ['vinden', '*vond', '*vonden', 'found'], ['blijven', '*bleef', '*bleven', 'stayed'], ['brengen', '*bracht', '*brachten', 'brought'], ['denken', '*dacht', '*dachten', 'thought'], ['kopen', '*kocht', '*kochten', 'bought'], ['weten', '*wist', '*wisten', 'knew'], ['worden', '*werd', '*werden', 'became'], ['krijgen', '*kreeg', '*kregen', 'got'], ['zeggen', '*zei', '*zeiden', 'said'], ['kijken', '*keek', '*keken', 'looked'], ['beginnen', '*begon', '*begonnen', 'began']]),
    p('Notice the short-vowel singular and long-vowel plural in many of them: `ik at / wij aten`, `ik zag / wij zagen`, `ik kwam / wij kwamen`. It is the same open/closed syllable spelling as in nouns.'),
    ex(['Gisteren was ik ziek, dus ik bleef thuis.', 'Yesterday I was ill, so I stayed home.'], ['We hadden geen tijd en konden niet komen.', 'We had no time and could not come.'], ['Hij ging naar de markt en kocht vis.', 'He went to the market and bought fish.'], ['Toen ik klein was, sprak ik geen Nederlands.', 'When I was small I spoke no Dutch.']),
    tip('Learn was/waren, had/hadden, kon/konden, moest/moesten, wilde/wilden, ging/gingen, kwam/kwamen first. Those seven cover half of all spoken past tense.'),
  ]);

  G('g2-past-choice', 'Perfect or simple past? Choosing the right one', 2, ['verbs', 'past'], [
    p('Dutch does **not** follow the English distinction between "I have done" and "I did". The choice is about **how you tell it**:'),
    list('**Perfect** for a completed event you mention or report, especially in conversation: `Ik heb gisteren een film gezien.` Also the normal way to open a story.', '**Simple past** for background, description, habits and the chain of events once the story is running: `Het was laat, de straat was leeg en het regende.` `Vroeger fietste ik altijd.`', '**Always simple past** for `zijn`, `hebben`, the modals and `zeggen` when the perfect would sound heavy: `Ik was moe` (not `ik ben moe geweest` unless you mean a period), `Ik wilde komen`, `Hij zei niets`.'),
    ex(['Ik heb vorige week een fiets gekocht. Hij was niet duur.', 'I bought a bike last week. It was not expensive. (event → perfect; description → past)'], ['Toen we in Parijs woonden, gingen we elke zondag naar de markt.', 'When we lived in Paris we went to the market every Sunday. (habit → past)'], ['Ben je ooit in Maastricht geweest?', 'Have you ever been to Maastricht? (experience → perfect)']),
    warn('English "I have lived here for two years" is **present** in Dutch: `Ik woon hier al twee jaar.` The action is still going on.'),
  ]);

  G('g2-future', 'Talking about the future: gaan, zullen and the present', 2, ['verbs', 'future'], [
    p('Dutch has three ways to talk about the future, and the plain **present tense** is the most common one whenever a time word makes the meaning clear:'),
    table(['form', 'use', 'example'], [['present + time word', 'plans, timetables (most common)', '*Morgen werk ik thuis.'], ['gaan + infinitive', 'intentions, what is going to happen', '*Ik ga volgende week verhuizen.'], ['zullen + infinitive', 'promises, predictions, offers, formal', '*Ik zal je morgen bellen.']]),
    table(['', 'gaan', 'zullen'], [['ik', '*ga', '*zal'], ['jij / u', '*gaat (ga je?)', '*zult / *zal (zul je?)'], ['hij / zij', '*gaat', '*zal'], ['wij / jullie / zij', '*gaan', '*zullen']]),
    p('The infinitive goes to the **end** of the sentence: `Ik ga morgen boodschappen doen.` `We zullen het proberen.`'),
    p('`Zullen we …?` is the standard way to make a suggestion: `Zullen we gaan?` (Shall we go?), `Zullen we een kopje koffie drinken?`'),
    ex(['Het gaat morgen regenen.', 'It is going to rain tomorrow.'], ['Ik zal het niet vergeten.', 'I will not forget.'], ['Volgend jaar gaan we naar Italië.', 'Next year we are going to Italy.'], ['Zullen we om acht uur afspreken?', 'Shall we meet at eight?']),
    tip('If English uses "going to", use gaan. If English uses "will" for a promise, use zullen. Otherwise, just use the present with a time word.'),
  ]);

  G('g2-imperative', 'The imperative: Kom binnen! Let op!', 2, ['verbs', 'imperative'], [
    p('To give an instruction, use the **stem** of the verb, on its own, at the start of the sentence: `Kom!`, `Kijk!`, `Wacht even.` There is no separate plural form in everyday speech; the same form works for one person or a group.'),
    table(['infinitive', 'imperative', ''], [['komen', '*Kom binnen.', 'Come in.'], ['wachten', '*Wacht even.', 'Wait a moment.'], ['opletten', '*Let op!', 'Watch out! (separable: prefix at the end)'], ['zijn', '*Wees voorzichtig.', 'Be careful. (irregular)'], ['hebben', '*Heb geduld.', 'Have patience.']]),
    p('Formal or written instructions add `u`: `Komt u binnen.` `Gaat u zitten.` On signs and in recipes the **infinitive** is used instead: `Hier niet parkeren.` `Ui snijden en bakken.`'),
    p('Soften an order with `even`, `maar` or `eens`: `Kom even hier.` `Ga maar zitten.` `Kijk eens!` These little words make Dutch instructions sound friendly instead of bossy.'),
    ex(['Doe de deur dicht, het tocht.', 'Close the door, there is a draught.'], ['Neem maar een koekje.', 'Go ahead and take a biscuit.'], ['Vergeet je sleutels niet!', 'Do not forget your keys!'], ['Wees niet bang.', 'Do not be afraid.']),
    warn('Negative imperative is simply stem + niet / geen: `Loop niet zo snel.` `Neem geen taxi.`'),
  ]);

  G('g2-reflexive', 'Reflexive verbs: zich wassen, zich voelen', 2, ['verbs', 'pronouns'], [
    p('Some verbs need a **reflexive pronoun** that matches the subject. Many are about daily routine and feelings; several are reflexive in Dutch but not in English (`zich herinneren` = to remember, `zich voelen` = to feel).'),
    table(['subject', 'reflexive', 'zich wassen'], [['ik', '*me', '*ik was me'], ['jij / je', '*je', '*jij wast je'], ['u', '*u / *zich', '*u wast zich'], ['hij / zij / het', '*zich', '*hij wast zich'], ['wij / we', '*ons', '*wij wassen ons'], ['jullie', '*je', '*jullie wassen je'], ['zij / ze', '*zich', '*zij wassen zich']]),
    p('Common reflexive verbs: `zich voelen` (feel), `zich herinneren` (remember), `zich vergissen` (be mistaken), `zich haasten` (hurry), `zich aankleden` (get dressed), `zich verheugen op` (look forward to), `zich inschrijven` (register), `zich vervelen` (be bored), `zich schamen` (be ashamed).'),
    p('The reflexive pronoun comes right after the verb (or after the subject in inversion): `Ik voel me goed.` `Voel je je goed?` `Vandaag haast ik me niet.`'),
    ex(['Ik herinner me zijn naam niet.', 'I do not remember his name.'], ['Hoe voel je je vandaag?', 'How do you feel today?'], ['We verheugen ons op de vakantie.', 'We are looking forward to the holiday.'], ['Hij heeft zich ingeschreven bij de gemeente.', 'He registered at the municipality.']),
    tip('`Voel je je …?`: two je’s in a row is correct. The first is you, the second is yourself.'),
  ]);

  G('g2-separable-tenses', 'Separable verbs in all tenses: opbellen, belde op, opgebeld', 2, ['verbs', 'separable'], [
    p('You met separable verbs in A1 (`ik sta op`). Now the same verbs in every tense. The stressed prefix (`op`, `aan`, `uit`, `mee`, `terug`, `af`, …) behaves like this:'),
    table(['tense', 'rule', 'opbellen (to phone)'], [['present', 'prefix at the end', '*Ik bel je morgen op.'], ['simple past', 'prefix at the end', '*Ik belde je gisteren op.'], ['perfect', 'prefix + ge + participle, one word', '*Ik heb je opgebeld.'], ['with a modal', 'whole infinitive at the end, one word', '*Ik wil je opbellen.'], ['with te', 'prefix + te + verb', '*Ik probeer je op te bellen.'], ['subordinate clause', 'whole verb at the end, one word', '*… omdat ik je opbel.']]),
    p('The `ge-` of the participle goes **between** the prefix and the verb: `opgebeld`, `aangekomen`, `uitgenodigd`, `meegenomen`, `teruggekomen`.'),
    ex(['De trein kwam om tien uur aan.', 'The train arrived at ten.'], ['Ze hebben ons uitgenodigd voor het feest.', 'They invited us to the party.'], ['Ik moet mijn ouders nog terugbellen.', 'I still have to call my parents back.'], ['Vergeet niet je jas mee te nemen.', 'Do not forget to take your coat.']),
    warn('Inseparable prefixes (be-, ge-, her-, er-, ont-, ver-) never split and never take ge-: `Ik vertel het.` `Ik heb het verteld.` Stress tells you: ÓPbellen is separable, verTÉLlen is not.'),
  ]);

  G('g2-er', 'er: the little word with five jobs', 2, ['er', 'word order'], [
    p('`er` is one of the hardest words in Dutch because it does several unrelated things. Learn each use separately.'),
    h('1. er is / er zijn (there is / there are)'),
    p('Introduces something new and indefinite: `Er is een probleem.` `Er zijn veel toeristen in de stad.` `Is er een apotheek in de buurt?`'),
    h('2. er = there (place, unstressed)'),
    p('Replaces a place you already mentioned: `Ken je Haarlem? Ik woon er.` `Ik ben er nog nooit geweest.` The stressed form is `daar`: `Daar woon ik.`'),
    h('3. er + number (quantity)'),
    p('When you use a number or quantity word without repeating the noun, Dutch needs `er`: `Heb je kinderen? Ik heb er twee.` `Wil je een koekje? Ik heb er nog een paar.` English simply drops the noun; Dutch cannot.'),
    h('4. er + preposition (about it, with it, on it)'),
    p('Dutch never says "van het" or "met het" for things. It uses `er` + preposition, often split by other words: `Ik denk eraan.` `Ik denk er niet aan.` `Wat vind je ervan?` `Ik heb er geen zin in.`'),
    h('5. er as a placeholder subject in the passive'),
    p('`Er wordt gebeld.` (Someone is ringing the bell.) `Er werd veel gelachen.` You will see more of this at B1.'),
    p('**Position**: `er` comes right after the finite verb (or after the subject if the subject is a pronoun): `Ik woon er al drie jaar.` `Er zijn geen kaartjes meer.` `Gisteren was er een storm.`'),
    ex(['Er is geen melk meer.', 'There is no milk left.'], ['Hoeveel broers heb je? Ik heb er één.', 'How many brothers do you have? I have one.'], ['Ik ben er om acht uur.', 'I will be there at eight.'], ['Heb je er zin in? Ja, ik kijk ernaar uit.', 'Do you feel like it? Yes, I am looking forward to it.']),
    tip('Quantity test: if you replace a noun after a number and the sentence sounds naked in Dutch, it needs er. "I have two" → `Ik heb er twee.`'),
  ]);

  G('g2-object-pronouns', 'Object pronouns: mij/me, jou/je, hem, haar, het, ons, jullie, hen/hun/ze', 2, ['pronouns'], [
    table(['subject', 'object stressed', 'object unstressed', 'English'], [['ik', '*mij', '*me', 'me'], ['jij', '*jou', '*je', 'you'], ['u', '*u', '', 'you (formal)'], ['hij', '*hem', "'m", 'him'], ['zij', '*haar', "d'r / 'r", 'her'], ['het', '*het', "'t", 'it'], ['wij', '*ons', '', 'us'], ['jullie', '*jullie', '*je', 'you (plural)'], ['zij (pl)', '*hen / *hun', '*ze', 'them']]),
    p('As with subject pronouns, the **unstressed** form is the default in speech: `Ik zie je morgen.` `Bel me.` Use the stressed form for contrast or after a preposition: `Ik zie jou, niet hem.` `Dit is voor jou.`'),
    h('hen, hun or ze?'),
    p('For people in the plural, `ze` is the safe unstressed form everywhere: `Ik ken ze.` `Ik geef ze het boek.` The stressed forms are `hen` (direct object and after a preposition: `Ik zie hen.` `voor hen`) and `hun` (indirect object without a preposition: `Ik geef hun het boek.`). Many Dutch speakers mix these up, so do not worry about it.'),
    h('Things: never hem or haar'),
    p('For a de-word thing you refer back with `hem` in theory (`De fiets? Ik heb hem verkocht.`), but after a preposition things always become `er` + preposition: `Ik denk eraan`, not "aan het". For het-words use `het`: `Het boek? Ik heb het gelezen.`'),
    ex(['Kun je mij helpen? Natuurlijk help ik je.', 'Can you help me? Of course I will help you.'], ['Ik heb hem gisteren gezien.', 'I saw him yesterday.'], ['Geef het aan haar.', 'Give it to her.'], ['We hebben ze uitgenodigd.', 'We invited them.']),
    tip('Object pronouns go right after the finite verb, before time and place: `Ik zie je morgen op het station.`'),
  ]);

  G('g2-comparison', 'Comparative and superlative: groter, het grootst', 2, ['adjectives'], [
    p('Comparative: adjective + **-er**. Superlative: adjective + **-st**. Like English, but Dutch uses the endings for **all** adjectives, however long: `interessanter`, `het interessantst`.'),
    table(['adjective', 'comparative', 'superlative', ''], [['groot', '*groter', '*grootst', 'big'], ['klein', '*kleiner', '*kleinst', 'small'], ['mooi', '*mooier', '*mooist', 'beautiful'], ['duur', '*duurder', '*duurst', 'expensive'], ['lekker', '*lekkerder', '*lekkerst', 'tasty'], ['ver', '*verder', '*verst', 'far'], ['goed', '*beter', '*best', 'good'], ['veel', '*meer', '*meest', 'much / many'], ['weinig', '*minder', '*minst', 'little / few'], ['graag', '*liever', '*liefst', 'gladly']]),
    p('Adjectives ending in **-r** insert a **d**: `duur → duurder`, `lekker → lekkerder`, `ver → verder`. The spelling rules from Stage 0 apply: `groot → groter` (one o in the open syllable), `dik → dikker` (double k).'),
    h('Using them'),
    list('**than** = `dan`: `Amsterdam is groter dan Utrecht.`', '**as … as** = `even … als` or `net zo … als`: `Hij is even oud als ik.`', 'Superlative before a noun takes -e like any adjective: `de grootste stad`, `het mooiste huis`. On its own it takes `het`: `Deze fiets is het duurst.`', 'Comparatives before a noun also take -e: `een groter huis` (het-word, een → no e) but `een grotere tuin`.'),
    ex(['Fietsen is sneller dan lopen.', 'Cycling is faster than walking.'], ['Dit is het lekkerste brood van de stad.', 'This is the tastiest bread in the city.'], ['Ik drink liever thee dan koffie.', 'I prefer tea to coffee.'], ['Mijn broer is net zo lang als ik.', 'My brother is as tall as me.']),
    warn('"more beautiful" is `mooier`, never "meer mooi". Dutch always uses the ending.'),
  ]);

  G('g2-subordinate', 'Subordinate clauses: the verb goes to the end', 2, ['word order', 'conjunctions'], [
    p('In A1 you learned the coordinating conjunctions `en, maar, of, want, dus`: after them the word order does **not** change. **Subordinating** conjunctions are different. They start a clause in which **all verbs move to the very end**.'),
    table(['conjunction', 'meaning', 'example'], [['omdat', 'because', '*Ik blijf thuis omdat ik ziek ben.'], ['dat', 'that', '*Ik denk dat hij morgen komt.'], ['als', 'if / when(ever)', '*Als het regent, neem ik de tram.'], ['toen', 'when (one time in the past)', '*Toen ik klein was, woonde ik in Leeds.'], ['terwijl', 'while', '*Ik kook terwijl jij de tafel dekt.'], ['hoewel', 'although', '*Hoewel het koud is, fietst hij.'], ['voordat', 'before', '*Bel me voordat je vertrekt.'], ['nadat', 'after', '*Nadat we gegeten hadden, gingen we wandelen.'], ['of', 'whether', '*Ik weet niet of ze komt.'], ['zodat', 'so that', '*Ik schrijf het op zodat ik het niet vergeet.']]),
    h('want vs omdat'),
    p('Both mean "because". `want` is coordinating (normal order): `Ik blijf thuis, want ik ben ziek.` `omdat` is subordinating (verb at the end): `Ik blijf thuis omdat ik ziek ben.`'),
    h('The main clause after a subordinate clause: inversion'),
    p('If the subordinate clause comes **first**, it counts as the first element of the main sentence, so the main verb comes straight after it (inversion): `Als het regent, **neem ik** de tram.` `Omdat ik ziek ben, **blijf ik** thuis.`'),
    h('Two verbs at the end'),
    p('With a modal or in the perfect, both verbs go to the end; the order is flexible but `… omdat ik moet werken` and `… omdat ik gewerkt heb` / `… heb gewerkt` are all correct.'),
    ex(['Ik leer Nederlands omdat ik in Amsterdam woon.', 'I am learning Dutch because I live in Amsterdam.'], ['Weet je dat de winkel vandaag dicht is?', 'Do you know that the shop is closed today?'], ['Toen ik thuiskwam, was het al donker.', 'When I came home it was already dark.'], ['Ik weet niet of ik morgen kan komen.', 'I do not know whether I can come tomorrow.']),
    warn('`als` = whenever / if; `toen` = one specific moment in the past; `wanneer` = when as a question word. "When I was young" is `toen ik jong was`, never "als".'),
    tip('Read the sentence up to the conjunction, then push every verb to the end, like sweeping crumbs off a table.'),
  ]);

  G('g2-om-te', 'om … te + infinitive: in order to', 2, ['verbs', 'infinitive'], [
    p('To express a purpose ("in order to", "to"), Dutch uses `om` … `te` + infinitive. `om` opens the phrase, `te` sits directly in front of the infinitive at the end, and everything else goes in between.'),
    ex(['Ik ga naar de markt om groente te kopen.', 'I am going to the market to buy vegetables.'], ['We sparen om een huis te kunnen kopen.', 'We are saving in order to be able to buy a house.'], ['Het is moeilijk om Nederlands te leren.', 'It is hard to learn Dutch.'], ['Heb je zin om mee te gaan?', 'Do you feel like coming along?']),
    p('Separable verbs split around `te`: `mee te gaan`, `op te bellen`, `aan te komen`.'),
    p('`om … te` is also used after adjectives and after many fixed expressions: `leuk om te zien`, `zin hebben om`, `tijd hebben om`, `proberen om`, `beginnen om`. In many of those `om` is optional, but it is never wrong to include it.'),
    warn('After modal verbs (`kunnen, mogen, moeten, willen, zullen`) and after `gaan, komen, laten, blijven, zien, horen` there is **no** `te`: `Ik wil slapen.` `Ik ga zwemmen.`'),
    tip('If you can put "in order to" in the English sentence, you need om … te.'),
  ]);

  G('g2-two-verbs', 'Word order with two or more verbs', 2, ['word order', 'verbs'], [
    p('Only **one** verb can be in second position: the finite verb (the one that agrees with the subject). Every other verb goes to the **end** of the clause.'),
    table(['pattern', 'example'], [['modal + infinitive', '*Ik moet morgen vroeg opstaan.'], ['perfect (aux + participle)', '*Ik heb gisteren lang gewerkt.'], ['gaan / zullen + infinitive', '*We gaan volgende week verhuizen.'], ['modal + perfect', '*Ik heb niet kunnen komen.'], ['modal + modal + infinitive', '*Je moet morgen kunnen werken.']]),
    p('The middle field between the two verb positions holds everything else, usually in this order: time, manner, place: `Ik ga **morgen met de fiets naar Haarlem** rijden.`'),
    p('When a modal is used in the perfect tense, the participle turns into an infinitive (the "double infinitive"): `Ik heb niet **kunnen** komen`, not "gekund".'),
    ex(['Kun je me morgen even helpen?', 'Can you help me tomorrow?'], ['Ze heeft de hele dag thuis moeten blijven.', 'She had to stay home all day.'], ['Wil je iets drinken?', 'Do you want something to drink?'], ['Morgen moet ik om zeven uur op het station zijn.', 'Tomorrow I have to be at the station at seven.']),
    tip('Picture a sentence as a bracket: finite verb on the left, all other verbs on the right, and the rest inside.'),
  ]);

  G('g2-time-expressions', 'Time expressions: gisteren, vorige week, over een uur, sinds', 2, ['time', 'vocabulary'], [
    table(['past', 'present', 'future'], [['*gisteren (yesterday)', '*vandaag (today)', '*morgen (tomorrow)'], ['*eergisteren (day before yesterday)', '*nu (now)', '*overmorgen (day after tomorrow)'], ['*vorige week (last week)', '*deze week (this week)', '*volgende week (next week)'], ['*vorig jaar (last year)', '*dit jaar (this year)', '*volgend jaar (next year)'], ['*een uur geleden (an hour ago)', '', '*over een uur (in an hour)'], ['*vroeger (in the past)', '*tegenwoordig (nowadays)', '*later (later)']]),
    h('Duration: sinds, al, pas, nog'),
    list('`sinds` + starting point: `Ik woon hier sinds 2023.`', '`al` + duration, present tense: `Ik woon hier al twee jaar.` (I have lived here for two years.)', '`pas` = only (just): `Ik woon hier pas een maand.`', '`nog` = still: `Ik woon nog bij mijn ouders.` `nog niet` = not yet.'),
    h('Frequency'),
    p('`elke dag` (every day), `elke week`, `één keer per week` (once a week), `twee keer per maand`, `om de dag` (every other day), `’s morgens / ’s middags / ’s avonds / ’s nachts` (in the morning / afternoon / evening / at night), `in het weekend`, `doordeweeks` (on weekdays).'),
    ex(['Over een uur ben ik thuis.', 'I will be home in an hour.'], ['Ik heb hem twee weken geleden gezien.', 'I saw him two weeks ago.'], ['We sporten twee keer per week.', 'We exercise twice a week.'], ['Ik ben hier pas sinds januari.', 'I have only been here since January.']),
    warn('"ago" comes **after** the time: `drie dagen geleden`. "in an hour" (from now) is `over een uur`, not "in een uur" (which means "within an hour").'),
  ]);
})();
