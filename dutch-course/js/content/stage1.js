/* Stage 1 — A1: grammar reference. Vocabulary and lessons live in stage1-u*.js */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { G, h, p, tip, warn, table, ex, list } = A;

  G('g1-pronouns', 'Personal pronouns (subject)', 1, ['pronouns'], [
    table(['person', 'stressed', 'unstressed', 'English'], [['1 sg', '*ik', "'k", 'I'], ['2 sg informal', '*jij', '*je', 'you'], ['2 sg formal', '*u', '', 'you'], ['3 sg m', '*hij', 'ie (spoken)', 'he'], ['3 sg f', '*zij', '*ze', 'she'], ['3 sg n', '*het', "'t", 'it'], ['1 pl', '*wij', '*we', 'we'], ['2 pl', '*jullie', '', 'you (all)'], ['3 pl', '*zij', '*ze', 'they']]),
    p('Dutch has a stressed and an unstressed form for several pronouns. In normal speech the **unstressed** form is the default: `je`, `ze`, `we`. Use the stressed form only for contrast or emphasis: `Jij bent Tom en ik ben Anna.`'),
    p('`zij/ze` means both "she" and "they"; the verb tells you which: `ze is` (she is) vs `ze zijn` (they are).'),
    p('`het` refers to het-words and to things in general; `hij` is used for de-words when you refer back to them: `De fiets? Hij is nieuw.` (In practice most learners say `die` or `het`; Dutch people will understand you either way.)'),
    warn('`u` takes the same verb form as `jij/hij`: `u bent`, `u heeft` (or `u hebt`), `u woont`. It is singular even when you talk to several people formally.'),
    ex(['Ik ben Anna en ik kom uit Londen.', 'I am Anna and I come from London.'], ['Woon je in Amsterdam? — Ja, ik woon in Oost.', 'Do you live in Amsterdam? — Yes, I live in East.'], ['Ze werkt bij een bank. Ze zijn collega’s.', 'She works at a bank. They are colleagues.']),
  ]);

  G('g1-zijn', 'zijn (to be)', 1, ['verbs', 'irregular'], [
    table(['pronoun', 'zijn', ''], [['ik', '*ben', 'I am'], ['jij / je / u', '*bent', 'you are'], ['hij / zij / het', '*is', 'he / she / it is'], ['wij / we', '*zijn', 'we are'], ['jullie', '*zijn', 'you are'], ['zij / ze', '*zijn', 'they are']]),
    p('`zijn` is completely irregular, like "to be" in English, and just as frequent. Learn the four forms ben, bent, is, zijn as one chunk.'),
    p('After inversion (question or fronted element) `jij` loses the -t: `Ben jij Tom?` but `Bent u meneer Bakker?` (u keeps the t).'),
    ex(['Ik ben moe.', 'I am tired.'], ['Ben je Nederlander? — Nee, ik ben Engels.', 'Are you Dutch? — No, I am English.'], ['Zij is dokter en wij zijn studenten.', 'She is a doctor and we are students.']),
    tip('ben, bent, is, zijn: "B-B-I-Z". The plural is simply the infinitive again.'),
  ]);

  G('g1-hebben', 'hebben (to have)', 1, ['verbs', 'irregular'], [
    table(['pronoun', 'hebben', ''], [['ik', '*heb', 'I have'], ['jij / je', '*hebt', 'you have'], ['u', '*hebt / *heeft', 'you have (formal)'], ['hij / zij / het', '*heeft', 'he / she / it has'], ['wij / jullie / zij', '*hebben', 'we / you / they have']]),
    p('Only the third person singular is irregular: `heeft`, not "hebt". Everything else follows the normal pattern.'),
    p('`hebben` is also used for age-related and state expressions where English uses "to be": `Ik heb honger` (I am hungry), `Ik heb dorst` (thirsty), `Ik heb het koud` (I am cold), `Ik heb haast` (in a hurry), `Ik heb gelijk` (I am right).'),
    ex(['Ik heb twee broers.', 'I have two brothers.'], ['Heb je een fiets? — Ja, ik heb een oude fiets.', 'Do you have a bike? — Yes, I have an old bike.'], ['Zij heeft honger en wij hebben dorst.', 'She is hungry and we are thirsty.']),
  ]);

  G('g1-present', 'Present tense of regular verbs', 1, ['verbs', 'present tense'], [
    p('Every regular verb follows one recipe. Start from the infinitive (`werken`), remove **-en** to get the **stem** (`werk`), then:'),
    table(['pronoun', 'form', 'werken', 'wonen'], [['ik', 'stem', '*werk', '*woon'], ['jij / u / hij / zij / het', 'stem + t', '*werkt', '*woont'], ['wij / jullie / zij', 'infinitive', '*werken', '*wonen']]),
    h('Finding the stem: spelling adjustments'),
    list('Long vowel in an open syllable becomes double in the closed stem: `wonen` → `woon`, `maken` → `maak`, `lopen` → `loop`.', 'Double consonant becomes single: `zitten` → `zit`, `pakken` → `pak`.', 'v → f and z → s at the end: `leven` → `leef`, `reizen` → `reis`, `lezen` → `lees`.', 'Stem already ends in t: add nothing for hij/zij: `zitten` → `hij zit`, `eten` → `zij eet`.', 'Stem ends in d: still add t (`vinden` → `hij vindt`, `worden` → `het wordt`).'),
    h('jij after the verb loses the t'),
    p('When `jij/je` comes after the verb (in questions and after a fronted word), the -t disappears: `Werk je in Amsterdam?`, `Morgen werk je thuis.` This only happens with jij/je, never with u, hij or zij.'),
    ex(['Ik woon in Amsterdam en werk in Utrecht.', 'I live in Amsterdam and work in Utrecht.'], ['Zij leert Nederlands.', 'She is learning Dutch.'], ['Waar woon je? — Ik woon in de Pijp.', 'Where do you live? — I live in de Pijp.'], ['Wij fietsen naar het werk.', 'We cycle to work.']),
    tip('Dutch has no continuous form: `ik werk` covers both "I work" and "I am working". One form, two English meanings.'),
  ]);

  G('g1-irregular', 'The main irregular verbs in the present', 1, ['verbs', 'irregular'], [
    p('Very few Dutch verbs are irregular in the present tense. Apart from `zijn` and `hebben`, the modal verbs (`kunnen`, `mogen`, `willen`, `zullen`) and a handful of one-syllable verbs, everything is regular.'),
    table(['infinitive', 'ik', 'jij / hij', 'wij', 'meaning'], [['*komen', '*kom', '*komt', '*komen', 'to come (short o in the singular!)'], ['*gaan', '*ga', '*gaat', '*gaan', 'to go'], ['*staan', '*sta', '*staat', '*staan', 'to stand'], ['*doen', '*doe', '*doet', '*doen', 'to do'], ['*zien', '*zie', '*ziet', '*zien', 'to see'], ['*slaan', '*sla', '*slaat', '*slaan', 'to hit'], ['*houden', '*hou (houd)', '*houdt', '*houden', 'to hold, to love (houden van)'], ['*rijden', '*rijd', '*rijdt', '*rijden', 'to drive, to ride']]),
    p('`komen` is the odd one: the stem has a short o (`ik kom`, `jij komt`) although the infinitive has a long one. The one-syllable verbs (`gaan`, `staan`, `doen`, `zien`) simply drop -n for the stem.'),
    ex(['Ik kom uit Ierland.', 'I come from Ireland.'], ['Waar ga je heen? — Ik ga naar de markt.', 'Where are you going? — I am going to the market.'], ['Wat doe je? — Ik doe niets.', 'What are you doing? — I am doing nothing.'], ['Ik hou van kaas.', 'I love cheese.']),
  ]);

  G('g1-v2', 'Word order: the verb is always second', 1, ['word order'], [
    p('The single most important rule of Dutch sentences: in a main clause, the **conjugated verb is in second position**. Not the second word, the second element. Whatever you put first (subject, time, place, object), the verb comes right after it, and the subject follows the verb if it is not already first.'),
    table(['1st element', 'verb', 'rest'], [['*Ik', '*ga', '*morgen naar Utrecht.'], ['*Morgen', '*ga', '*ik naar Utrecht.'], ['*Naar Utrecht', '*ga', '*ik morgen.'], ['*Om acht uur', '*begint', '*de film.']]),
    p('This flip of subject and verb is called **inversion**. English does it only in questions; Dutch does it every time something other than the subject starts the sentence. It feels strange for a week; then you start doing it automatically.'),
    p('Standard order after the verb: **time before place** (`Ik ga morgen naar Utrecht`, not "naar Utrecht morgen"). Other verbs (infinitives, participles) go to the **end**: `Ik wil morgen naar Utrecht gaan.`'),
    warn('Starting with "then/tomorrow/here" is where English speakers slip: "Morgen ik ga…" is wrong. Say it as `Morgen ga ik…`.'),
    ex(['Vandaag werk ik thuis.', 'Today I am working at home.'], ['In Amsterdam fietst iedereen.', 'In Amsterdam everyone cycles.'], ['’s Avonds kijken we tv.', 'In the evening we watch TV.'], ['Dan ga ik naar huis.', 'Then I go home.']),
    tip('Think of the first slot as a spotlight. Whatever you shine it on goes first, the verb is glued to slot two, and the subject slides behind the verb.'),
  ]);

  G('g1-questions', 'Questions: yes/no and question words', 1, ['word order', 'questions'], [
    h('Yes/no questions'),
    p('Put the verb first, the subject second. No "do", no extra word: `Woon je in Amsterdam?` (Do you live in Amsterdam?), `Is het ver?`, `Hebben jullie een auto?`. Remember: `je` after the verb loses the -t.'),
    h('Question words'),
    table(['Dutch', 'English', 'example'], [['*wie', 'who', '*Wie is dat?'], ['*wat', 'what', '*Wat doe je?'], ['*waar', 'where', '*Waar woon je?'], ['*wanneer', 'when', '*Wanneer kom je?'], ['*hoe', 'how', '*Hoe gaat het?'], ['*waarom', 'why', '*Waarom leer je Nederlands?'], ['*welke / *welk', 'which', '*Welke tram? / *Welk huis?'], ['*hoeveel', 'how much / many', '*Hoeveel kost dit?'], ['*hoe laat', 'what time', '*Hoe laat is het?'], ['*wat voor', 'what kind of', '*Wat voor werk doe je?']]),
    p('With a question word, the question word is the first element and the verb is second, exactly like the V2 rule: `Waar woon je?` `Wanneer begint de les?`'),
    p('`welke` is for de-words and plurals, `welk` for het-words: `welke fiets`, `welk huis`. "Where … to" is `waar … heen` or `waarheen`: `Waar ga je heen?`'),
    ex(['Kom je uit Engeland?', 'Do you come from England?'], ['Wat is je telefoonnummer?', 'What is your phone number?'], ['Hoe heet jouw broer?', 'What is your brother called?'], ['Waarom woon je hier?', 'Why do you live here?']),
  ]);

  G('g1-negation', 'Negation: niet and geen', 1, ['negation'], [
    p('Dutch has two words for "not": **geen** and **niet**. The choice is mechanical.'),
    h('geen = not a / no / not any'),
    p('Use `geen` to negate a noun that has **een** or **no article**: `Ik heb een auto` → `Ik heb geen auto.` `Ik drink koffie` → `Ik drink geen koffie.` `Er zijn kinderen` → `Er zijn geen kinderen.`'),
    h('niet = everything else'),
    p('Use `niet` for verbs, adjectives, adverbs and nouns with **de/het/mijn/deze**: `Ik werk niet.` `Het huis is niet groot.` `Ik heb de sleutel niet.` `Dat is niet mijn fiets.`'),
    h('Where does niet go?'),
    list('At the **end** of a simple sentence: `Ik werk vandaag niet.`', 'Before an **adjective** or **adverb**: `Het is niet koud.` `Hij fietst niet snel.`', 'Before a **prepositional phrase**: `Ik woon niet in Utrecht.`', 'Before an **infinitive** at the end: `Ik kan niet komen.`', 'After a definite object: `Ik ken hem niet.`'),
    warn('English "I do not have" tempts you into `Ik heb niet een auto`. Wrong. If there would be "een", it becomes `geen`: `Ik heb geen auto.`'),
    ex(['Ik heb geen tijd.', 'I have no time.'], ['Hij is niet thuis.', 'He is not at home.'], ['Wij spreken geen Frans.', 'We do not speak French.'], ['Dat is niet de goede tram.', 'That is not the right tram.']),
    tip('Would you say "a/an" or nothing before the noun? Then geen. Otherwise niet.'),
  ]);

  G('g1-de-het', 'de or het? Strategies for guessing gender', 1, ['nouns', 'articles'], [
    p('Every noun is a de-word (common gender) or a het-word (neuter). There is no complete rule, but there are strong patterns. Play the odds and learn the exceptions as you meet them.'),
    h('de: about 75% of nouns'),
    list('**all plurals**: de huizen, de kinderen (even if the singular is het)', 'people and professions: de man, de vrouw, de leraar, de dokter', 'fruit, trees, plants: de appel, de boom, de roos', 'rivers, mountains: de Amstel, de Rijn', 'numbers and letters: de drie, de a', 'words ending in -ing, -heid, -teit, -ie, -ij, -schap (when abstract), -er (agent): de rekening, de vrijheid, de universiteit, de familie, de bakkerij, de vriendschap, de bakker'),
    h('het: about 25%, but very regular'),
    list('**all diminutives** (-je): het huisje, het meisje, het biertje', 'languages and metals: het Nederlands, het goud, het ijzer', 'sports and games: het voetbal, het schaken', 'verbs used as nouns: het eten, het lopen', 'two-syllable words beginning with **be-, ge-, ver-, ont-**: het begin, het gesprek, het verhaal, het ontbijt', 'words ending in -um, -isme, -ment: het museum, het toerisme, het moment', 'points of the compass and most materials: het noorden, het hout'),
    h('Compounds'),
    p('A compound takes the article of its **last part**: `de fiets` + `het pad` = `het fietspad`; `het huis` + `de deur` = `de huisdeur`.'),
    warn('Some high-frequency het-words just have to be memorised: het huis, het boek, het kind, het water, het brood, het geld, het werk, het jaar, het uur, het station, het glas, het bed, het raam, het feest.'),
    tip('Learn every noun with its article and its plural as one chunk: "het huis, huizen". Never learn "huis" alone. The colour coding in this course (blue de, orange het) is there to help.'),
  ]);

  G('g1-plural', 'Plural of nouns', 1, ['nouns', 'plural'], [
    table(['ending', 'when', 'examples'], [['*-en', 'the default, most nouns', '*huis → *huizen, *boek → *boeken, *vrouw → *vrouwen'], ['*-s', 'unstressed -e, -el, -em, -en, -er, -je, -ie; most loanwords', '*tafel → *tafels, *jongen → *jongens, *meisje → *meisjes, *tram → *trams'], ["*-'s", 'ends in a single a, o, u, i, y', "*auto → *auto's, *foto → *foto's, *menu → *menu's"], ['*-eren', 'a small group of het-words', '*kind → *kinderen, *ei → *eieren, *blad → *bladeren, *lied → *liederen']]),
    p('With **-en** the spelling rules kick in: long vowel written once in the open syllable (`maan → manen`), consonant doubled after a short vowel (`man → mannen`), f/s become v/z (`brief → brieven`, `huis → huizen`).'),
    p('Vowel-change plurals: `dag → dagen`, `weg → wegen`, `glas → glazen`, `stad → steden`, `schip → schepen`, `lid → leden`. And a few Latin/Greek words: `museum → musea` (or museums), `datum → data`.'),
    warn('After a number the noun is plural, as in English, except for measures and money: `drie euro`, `twee kilo`, `vijf uur` (five hours as a duration: `vijf uur`, but `de uren`).'),
    ex(['De kinderen spelen in de tuin.', 'The children play in the garden.'], ['Ik heb twee foto’s van de grachten.', 'I have two photos of the canals.'], ['De tafels en de stoelen zijn nieuw.', 'The tables and the chairs are new.']),
  ]);

  G('g1-possessives', 'Possessives: mijn, jouw, zijn, haar, ons/onze, jullie, hun', 1, ['pronouns', 'possessives'], [
    table(['', 'stressed', 'unstressed', ''], [['my', '*mijn', "m'n", ''], ['your (informal)', '*jouw', '*je', ''], ['your (formal)', '*uw', '', ''], ['his', '*zijn', "z'n", ''], ['her', '*haar', "d'r", ''], ['its', '*zijn', '', ''], ['our', '*ons / *onze', '', 'ons + het-word singular, onze everywhere else'], ['your (plural)', '*jullie', '*je', ''], ['their', '*hun', '', '']]),
    p('Possessives never change for the noun’s gender, with one exception: **ons/onze**. `ons huis` (het-word) but `onze auto`, `onze kinderen`.'),
    p('`je` is the normal spoken form of jouw and jullie: `Is dit je fiets?` Use `jouw` for contrast: `Dit is jouw fiets, niet de mijne.`'),
    p('Asking about ownership: `Van wie is deze tas?` (Whose bag is this?) `Die is van mij.` (It is mine.)'),
    ex(['Mijn zus woont in Haarlem.', 'My sister lives in Haarlem.'], ['Ons huis is klein, maar onze tuin is groot.', 'Our house is small, but our garden is big.'], ['Hun kinderen gaan naar school in Zuid.', 'Their children go to school in South.'], ['Wat is uw naam?', 'What is your name? (formal)']),
  ]);

  G('g1-demonstratives', 'deze, die, dit, dat', 1, ['pronouns', 'articles'], [
    table(['', 'de-word (and all plurals)', 'het-word'], [['this / these (near)', '*deze', '*dit'], ['that / those (far)', '*die', '*dat']]),
    p('`deze` and `die` go with de-words and with **all plurals**; `dit` and `dat` only with singular het-words: `deze fiets`, `deze huizen`, `dit huis`, `dat kind`.'),
    p('On their own, before `is/zijn`, Dutch always uses **dit/dat**, whatever the noun: `Dit is mijn broer.` `Dat zijn mijn ouders.` `Wat is dat?`'),
    p('In everyday speech `die` and `dat` are very common where English says "it/that one": `Die is van mij.` (That one is mine.) `Dat weet ik niet.` (I don’t know that.)'),
    ex(['Deze tram gaat naar het station.', 'This tram goes to the station.'], ['Dit boek is goed, dat boek is saai.', 'This book is good, that book is boring.'], ['Zijn dat jouw sleutels?', 'Are those your keys?']),
    tip('deze/dit = here (near me); die/dat = there (further away). Same vowel pairing as de/het: dEze goes with dE, dIt goes with hEt… almost.'),
  ]);

  G('g1-adjectives', 'Adjective endings: de mooie auto, een mooi huis', 1, ['adjectives'], [
    p('An adjective **in front of a noun** gets an **-e** ending, except in one case. An adjective **after** the noun (with zijn, worden) never gets an ending.'),
    table(['', 'de-word', 'het-word'], [['definite (de/het, deze, mijn …)', '*de mooie auto', '*het mooie huis'], ['indefinite singular (een, geen, no article)', '*een mooie auto', '*een mooi huis'], ['plural', '*mooie auto’s', '*mooie huizen'], ['after the noun', '*De auto is mooi.', '*Het huis is mooi.']]),
    p('So the only case **without -e** is: singular het-word + indefinite (`een`, `geen`, or nothing): `een groot huis`, `geen lekker bier`, `koud water`, `een klein kind`.'),
    h('Spelling when adding -e'),
    list('long vowel written once: `groot → grote`, `laat → late`', 'consonant doubled after short vowel: `dik → dikke`, `wit → witte`', 'f → v, s → z: `lief → lieve`, `grijs → grijze`, `boos → boze`', 'adjectives ending in -en never change: `open`, `houten`, `gouden`, `eigen`'),
    ex(['De oude man en de jonge vrouw.', 'The old man and the young woman.'], ['Ik heb een nieuwe fiets en een oud huis.', 'I have a new bike and an old house.'], ['Het water is koud. Koud water.', 'The water is cold. Cold water.'], ['Lekkere koffie, lekker bier.', 'Tasty coffee, tasty beer.']),
    tip('Ask two questions: is there a noun after it? (no → no -e) and is it "een + het-word"? (yes → no -e). Everything else gets -e.'),
  ]);

  G('g1-prep-place', 'Prepositions of place', 1, ['prepositions'], [
    table(['Dutch', 'English', 'example'], [['*in', 'in', '*in de keuken'], ['*op', 'on, at', '*op tafel, *op straat, *op school'], ['*onder', 'under', '*onder de tafel'], ['*boven', 'above', '*boven de deur'], ['*naast', 'next to', '*naast het station'], ['*achter', 'behind', '*achter het huis'], ['*voor', 'in front of', '*voor de deur'], ['*tussen', 'between', '*tussen de grachten'], ['*bij', 'at, near, at the home of', '*bij de bakker, *bij mij thuis'], ['*aan', 'on (vertical), at', '*aan de muur, *aan tafel'], ['*tegenover', 'opposite', '*tegenover de kerk'], ['*naar', 'to (direction)', '*naar het station'], ['*van', 'from, of', '*van Utrecht naar Amsterdam'], ['*uit', 'out of, from', '*uit Engeland'], ['*door', 'through', '*door het park'], ['*langs', 'along, past', '*langs de gracht'], ['*over', 'over, across', '*over de brug']]),
    p('Some idiomatic ones: `op school`, `op kantoor`, `op het werk`, `in de stad`, `thuis` (at home, no preposition), `naar huis` (home, direction). `bij` is also "at someone’s place": `Ik ben bij Anna.`'),
    ex(['De sleutels liggen op de tafel.', 'The keys are on the table.'], ['Ik woon naast een café.', 'I live next to a café.'], ['We fietsen door het Vondelpark.', 'We cycle through the Vondelpark.']),
  ]);

  G('g1-prep-time', 'Prepositions of time', 1, ['prepositions', 'time'], [
    table(['Dutch', 'use', 'example'], [['*om', 'clock times', '*om acht uur'], ['*op', 'days, dates', '*op maandag, *op 3 mei'], ['*in', 'months, seasons, years, parts of day', '*in mei, *in de zomer, *in 2020, *in de ochtend'], ['*van … tot', 'from … to', '*van negen tot vijf'], ['*voor', 'before', '*voor het eten'], ['*na', 'after', '*na het werk'], ['*tijdens', 'during', '*tijdens de les'], ['*sinds', 'since', '*sinds januari'], ['*over', 'in (from now)', '*over een uur'], ['… *geleden', 'ago (after the noun!)', '*een uur geleden'], ['*tot', 'until', '*tot morgen']]),
    p('No preposition with `vandaag`, `morgen`, `gisteren`, `volgende week`, `elke dag`: `Ik werk volgende week niet.`'),
    p('`’s ochtends`, `’s middags`, `’s avonds`, `’s nachts` mean "in the morning" etc. in general; `vanochtend`, `vanmiddag`, `vanavond`, `vannacht` mean this morning/afternoon/evening/tonight.'),
    ex(['De les begint om half tien en duurt tot twaalf uur.', 'The lesson starts at 9:30 and lasts until twelve.'], ['Op zaterdag ga ik naar de markt.', 'On Saturday I go to the market.'], ['Ik woon hier sinds maart.', 'I have lived here since March.'], ['De tram komt over vijf minuten.', 'The tram comes in five minutes.']),
  ]);

  G('g1-modals', 'Modal verbs: kunnen, mogen, moeten, willen, zullen', 1, ['verbs', 'modals', 'word order'], [
    table(['', '*kunnen (can)', '*mogen (may)', '*moeten (must)', '*willen (want)', '*zullen (shall/will)'], [['ik', '*kan', '*mag', '*moet', '*wil', '*zal'], ['jij / u', '*kunt / *kan', '*mag', '*moet', '*wilt / *wil', '*zult / *zal'], ['hij / zij', '*kan', '*mag', '*moet', '*wil', '*zal'], ['wij / jullie / zij', '*kunnen', '*mogen', '*moeten', '*willen', '*zullen']]),
    h('Word order'),
    p('The modal verb takes the second position; the other verb goes to the **end** of the sentence as an infinitive: `Ik wil morgen naar de markt gaan.` `Je moet hier inchecken.` `Kun je me helpen?`'),
    h('Meanings'),
    list('**kunnen**: ability and possibility. `Ik kan zwemmen.` `Kan ik hier pinnen?`', '**mogen**: permission. `Mag ik binnenkomen?` `Hier mag je niet roken.`', '**moeten**: obligation, necessity. `Ik moet werken.` The negative "don’t have to" is `hoeven niet te`: `Je hoeft niet te betalen.`', '**willen**: wanting. `Ik wil graag een koffie.` Add graag to make it polite.', '**zullen**: suggestions and promises. `Zullen we gaan?` (Shall we go?) `Ik zal het doen.` (I will do it.)'),
    warn('Modals are often used **without** a second verb when the meaning is obvious: `Ik wil een biertje.` `Ik moet naar huis.` `Dat mag niet.` English needs "have/go/be allowed"; Dutch does not.'),
    ex(['Kun je dat herhalen?', 'Can you repeat that?'], ['Wij moeten om acht uur op het station zijn.', 'We have to be at the station at eight.'], ['Mag ik hier zitten?', 'May I sit here?'], ['Zullen we morgen fietsen?', 'Shall we cycle tomorrow?']),
  ]);

  G('g1-diminutive', 'The diminutive: -je, -tje, -pje, -etje', 1, ['nouns'], [
    p('Dutch adds a diminutive ending to nouns constantly. It means small, but also cute, cosy, casual or "just a": `een biertje`, `een uurtje`, `een momentje`. Every diminutive is a **het-word** and takes plural **-s**.'),
    table(['ending', 'after', 'examples'], [['*-je', 'most consonants', '*huis → *huisje, *boek → *boekje, *kat → *katje'], ['*-tje', 'a vowel, a diphthong, or l/n/r/w after a long vowel', '*auto → *autootje, *ei → *eitje, *tafel → *tafeltje, *deur → *deurtje'], ['*-pje', 'm after a long vowel or -lm/-rm', '*boom → *boompje, *film → *filmpje'], ['*-etje', 'l/m/n/ng/r after a short vowel (consonant doubles)', '*bal → *balletje, *zon → *zonnetje, *man → *mannetje, *ring → *ringetje'], ['*-kje', '-ing with stress before it', '*koning → *koninkje, *woning → *woninkje']]),
    p('Note the spelling in `autootje` and `cafeetje`: the vowel is doubled so it stays long.'),
    ex(['Wil je een koekje bij de koffie?', 'Do you want a biscuit with your coffee?'], ['Ik ga een uurtje slapen.', 'I am going to sleep for an hour or so.'], ['Wat een lief hondje!', 'What a sweet little dog!'], ['Een momentje, alstublieft.', 'One moment, please.']),
    tip('If a Dutch person offers you "een kopje thee" or "een biertje", the -je is not about size. It is about friendliness.'),
  ]);

  G('g1-separable', 'Separable verbs: opstaan, ik sta op', 1, ['verbs', 'word order'], [
    p('Many Dutch verbs consist of a stressed prefix plus a verb: `opstaan` (get up), `aankomen` (arrive), `uitstappen` (get off), `meenemen` (take along), `opbellen` (call). In the present tense the prefix **splits off and goes to the end** of the sentence.'),
    table(['infinitive', 'present tense', ''], [['*opstaan', '*Ik sta om zeven uur op.', 'I get up at seven.'], ['*aankomen', '*De trein komt om tien uur aan.', 'The train arrives at ten.'], ['*uitstappen', '*Wij stappen bij het station uit.', 'We get off at the station.'], ['*meenemen', '*Neem je een jas mee?', 'Are you taking a coat?'], ['*opbellen', '*Ik bel je morgen op.', 'I will call you tomorrow.']]),
    p('With a modal verb the separable verb stays together at the end: `Ik moet om zeven uur opstaan.` `Je moet hier uitstappen.`'),
    p('How do you know a verb is separable? The stress is on the prefix: **OP**staan, **AAN**komen. Inseparable prefixes (be-, ge-, ver-, ont-, her-) are never stressed and never split: `Ik betaal`, `Ik vergeet`.'),
    ex(['Hoe laat sta je op?', 'What time do you get up?'], ['De bus komt om half negen aan.', 'The bus arrives at 8:30.'], ['Vergeet niet uit te checken!', 'Don’t forget to check out!']),
    tip('Picture the prefix as a magnet stuck to the full stop: whatever else happens, it slides to the end.'),
  ]);

  G('g1-adverbs', 'Adverbs of frequency and graag', 1, ['adverbs', 'word order'], [
    table(['Dutch', 'English'], [['*altijd', 'always'], ['*meestal', 'usually'], ['*vaak', 'often'], ['*soms', 'sometimes'], ['*zelden', 'rarely'], ['*nooit', 'never'], ['*elke dag', 'every day'], ['*een keer per week', 'once a week']]),
    p('Frequency adverbs go **after the verb** (and after a pronoun object): `Ik fiets altijd naar mijn werk.` `Zij drinkt nooit koffie.` Or they can start the sentence, with inversion: `Meestal werk ik thuis.`'),
    h('graag: to like doing'),
    p('`graag` after a verb means "to like (doing)": `Ik fiets graag.` (I like cycling.) `Hij drinkt graag thee.` (He likes drinking tea.) Negative: `niet graag`. Stronger: `heel graag`, `het liefst` (most of all).'),
    ex(['Ik ga vaak naar de bioscoop.', 'I often go to the cinema.'], ['Wij eten soms buiten.', 'We sometimes eat out.'], ['Zij leest graag in de tuin.', 'She likes reading in the garden.'], ['Ik sta niet graag vroeg op.', 'I don’t like getting up early.']),
  ]);

  G('g1-conjunctions', 'en, maar, of, want, dus: joining sentences', 1, ['conjunctions', 'word order'], [
    table(['Dutch', 'English', 'example'], [['*en', 'and', '*Ik werk en zij studeert.'], ['*maar', 'but', '*Het is koud, maar de zon schijnt.'], ['*of', 'or', '*Wil je thee of koffie?'], ['*want', 'because (for)', '*Ik blijf thuis, want ik ben moe.'], ['*dus', 'so', '*Het regent, dus ik neem de tram.']]),
    p('These five **coordinating conjunctions** join two main clauses without changing the word order: after `want`, `maar`, etc. the second clause still has its verb in second position. (The other kind of "because", `omdat`, sends the verb to the end; that is an A2 topic.)'),
    warn('`want` cannot start an answer to "why?": `Waarom leer je Nederlands? — Omdat ik hier woon.` Use `want` only to join two full sentences.'),
    ex(['Ik spreek Engels en een beetje Nederlands.', 'I speak English and a bit of Dutch.'], ['Ik wil fietsen, maar het regent.', 'I want to cycle, but it is raining.'], ['Neem je de tram of loop je?', 'Are you taking the tram or walking?']),
  ]);

  G('g1-professions', 'Professions and nationalities: no article', 1, ['nouns'], [
    p('With `zijn` and `worden`, professions, nationalities and religions take **no article**: `Ik ben leraar.` `Zij is Nederlandse.` `Hij wordt dokter.` English says "I am a teacher"; Dutch drops the "a".'),
    p('Many professions have a female form: `leraar → lerares`, `verkoper → verkoopster`, `vriend → vriendin`, `student → studente`. Increasingly the male form is used for everyone, especially `dokter`, `arts`, `collega`, `manager`.'),
    table(['country', 'man', 'woman', 'adjective / language'], [['*Nederland', '*Nederlander', '*Nederlandse', '*Nederlands'], ['*Engeland', '*Engelsman', '*Engelse', '*Engels'], ['*Duitsland', '*Duitser', '*Duitse', '*Duits'], ['*Frankrijk', '*Fransman', '*Française', '*Frans'], ['*België', '*Belg', '*Belgische', '*Belgisch'], ['*Amerika', '*Amerikaan', '*Amerikaanse', '*Amerikaans']]),
    ex(['Ik ben Engels en ik werk als programmeur.', 'I am English and I work as a programmer.'], ['Mijn buurvrouw is lerares.', 'My neighbour is a teacher.'], ['Wat voor werk doe je? — Ik ben verpleegkundige.', 'What kind of work do you do? — I am a nurse.']),
  ]);

  G('g1-likes', 'Likes and dislikes: houden van, leuk vinden, graag', 1, ['verbs', 'phrases'], [
    list('`houden van` + noun: `Ik hou van kaas.` `Hij houdt van muziek.` (love / really like)', '`… leuk / lekker / mooi vinden`: `Ik vind Amsterdam mooi.` `Ik vind koffie lekker.` `Vind je voetbal leuk?` (find something nice)', 'verb + `graag`: `Ik fiets graag.` `Ik lees niet graag.` (like doing)', '`Ik hou niet van …`, `Ik vind … niet leuk`: dislike'),
    p('`vinden` is the everyday verb for opinions: "I think it is …" = `Ik vind het …`. `lekker` is for food, drink, weather and feelings (`lekker weer`, `lekker slapen`); `leuk` is for fun, nice, cute; `mooi` for beautiful.'),
    ex(['Hou je van sport? — Ja, ik voetbal graag.', 'Do you like sport? — Yes, I like playing football.'], ['Ik vind de winter niet leuk.', 'I don’t like the winter.'], ['Wij vinden Nederlands moeilijk maar leuk.', 'We find Dutch difficult but fun.']),
  ]);

  G('g1-er-is', 'er is, er zijn: there is, there are', 1, ['phrases', 'er'], [
    p('"There is / there are" = `er is / er zijn`. `Er is een markt op het plein.` `Er zijn veel fietsen in Amsterdam.` In questions: `Is er een apotheek in de buurt?` Negative: `Er is geen melk meer.`'),
    p('`er` has several other uses (with prepositions, with numbers) that you will learn in A2; for now, `er is/zijn` is all you need.'),
    ex(['Er is een probleem.', 'There is a problem.'], ['Zijn er nog kaartjes?', 'Are there any tickets left?'], ['Er zijn geen stoelen.', 'There are no chairs.']),
  ]);

  G('g1-weather', 'Talking about the weather: het regent', 1, ['phrases', 'verbs'], [
    p('Weather verbs use impersonal `het`: `Het regent.` (It rains / is raining.) `Het sneeuwt.` `Het waait.` (It is windy.) `Het vriest.` `Het onweert.` And with zijn: `Het is koud / warm / zonnig / bewolkt / mistig.`'),
    p('Ask: `Wat voor weer is het?` (What is the weather like?) `Hoe is het weer morgen?` Temperatures: `Het is twintig graden.` `Het is min vijf.`'),
    ex(['Het regent, dus ik neem een paraplu mee.', 'It is raining, so I am taking an umbrella.'], ['Morgen wordt het zonnig.', 'Tomorrow it will be sunny.'], ['Lekker weer vandaag!', 'Nice weather today!']),
  ]);
})();
