/* Stage 2 (A2) — Unit 1: Vroeger en gisteren · Unit 2: Op reis */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = (NL.content._s2units = NL.content._s2units || []);

  /* ---------------- Vocabulary: Unit 1 ---------------- */
  W('eergisteren', 'the day before yesterday', 'adv', 'Eergisteren heb ik gewerkt.', 'The day before yesterday I worked.', { theme: 'time', stage: 2 });
  W('vorig', 'last / previous', 'adj', 'Vorige week was ik ziek.', 'Last week I was ill.', { theme: 'time', stage: 2, note: 'vorige week, vorig jaar, vorige maand.' });
  W('geleden', 'ago', 'adv', 'Ik ben drie jaar geleden verhuisd.', 'I moved three years ago.', { theme: 'time', stage: 2, note: 'Comes after the time: twee weken geleden.' });
  W('net', 'just (a moment ago)', 'adv', 'Ik heb net gegeten.', 'I have just eaten.', { theme: 'time', stage: 2 });
  W('pas', 'only just / not until', 'adv', 'Ik woon hier pas twee maanden.', 'I have only lived here for two months.', { theme: 'time', stage: 2 });
  PH('nog niet', 'not yet', 'Ik heb nog niet gegeten.', 'I have not eaten yet.', { theme: 'time', stage: 2 });
  VB('verhuizen', 'to move house', 'verhuis|verhuist|verhuizen', 'verhuisde|verhuisden', 'verhuisd', 'zijn', 'We zijn vorig jaar verhuisd.', 'We moved last year.', { theme: 'home', stage: 2 });
  VB('gebruiken', 'to use', 'gebruik|gebruikt|gebruiken', 'gebruikte|gebruikten', 'gebruikt', 'hebben', 'Ik heb je fiets gebruikt.', 'I used your bike.', { theme: 'daily', stage: 2, note: 'No ge- in the participle: gebruikt.' });
  VB('vertellen', 'to tell', 'vertel|vertelt|vertellen', 'vertelde|vertelden', 'verteld', 'hebben', 'Hij heeft een grap verteld.', 'He told a joke.', { theme: 'communication', stage: 2 });
  VB('ontmoeten', 'to meet (for the first time)', 'ontmoet|ontmoet|ontmoeten', 'ontmoette|ontmoetten', 'ontmoet', 'hebben', 'Ik heb haar op een feest ontmoet.', 'I met her at a party.', { theme: 'people', stage: 2 });
  VB('bezoeken', 'to visit', 'bezoek|bezoekt|bezoeken', 'bezocht|bezochten', 'bezocht', 'hebben', 'We hebben het Rijksmuseum bezocht.', 'We visited the Rijksmuseum.', { theme: 'leisure', stage: 2 });
  VB('missen', 'to miss', 'mis|mist|missen', 'miste|misten', 'gemist', 'hebben', 'Ik heb de tram gemist.', 'I missed the tram.', { theme: 'transport', stage: 2 });
  VB('halen', 'to fetch / to get', 'haal|haalt|halen', 'haalde|haalden', 'gehaald', 'hebben', 'Ik heb brood gehaald.', 'I fetched bread.', { theme: 'daily', stage: 2 });
  VB('schoonmaken', 'to clean', 'maak schoon|maakt schoon|maken schoon', 'maakte schoon|maakten schoon', 'schoongemaakt', 'hebben', 'Ik heb de keuken schoongemaakt.', 'I cleaned the kitchen.', { theme: 'home', stage: 2 });
  VB('wassen', 'to wash', 'was|wast|wassen', 'waste|wasten', 'gewassen', 'hebben', 'Heb je de auto gewassen?', 'Did you wash the car?', { theme: 'home', stage: 2 });
  VB('feesten', 'to party', 'feest|feest|feesten', 'feestte|feestten', 'gefeest', 'hebben', 'We hebben tot laat gefeest.', 'We partied until late.', { theme: 'leisure', stage: 2 });
  VB('trouwen', 'to marry', 'trouw|trouwt|trouwen', 'trouwde|trouwden', 'getrouwd', 'zijn', 'Ze zijn in mei getrouwd.', 'They got married in May.', { theme: 'people', stage: 2 });
  N('ervaring', 'de', 'ervaringen', 'experience', 'Dat was een leuke ervaring.', 'That was a nice experience.', { theme: 'life', stage: 2 });
  N('weekend', 'het', 'weekends', 'weekend', 'Wat heb je in het weekend gedaan?', 'What did you do at the weekend?', { theme: 'time', stage: 2 });
  N('bezoek', 'het', null, 'visit / visitors', 'We hadden bezoek van mijn ouders.', 'We had a visit from my parents.', { theme: 'people', stage: 2, note: 'op bezoek gaan = to go visit.' });

  VB('vallen', 'to fall', 'val|valt|vallen', 'viel|vielen', 'gevallen', 'zijn', 'Ik ben van mijn fiets gevallen.', 'I fell off my bike.', { theme: 'accidents', stage: 2 });
  VB('vergeten', 'to forget', 'vergeet|vergeet|vergeten', 'vergat|vergaten', 'vergeten', 'zijn', 'Ik ben mijn sleutels vergeten.', 'I forgot my keys.', { theme: 'daily', stage: 2, note: 'Usually with zijn: ik ben het vergeten.' });
  VB('verliezen', 'to lose', 'verlies|verliest|verliezen', 'verloor|verloren', 'verloren', 'hebben', 'Ik heb mijn portemonnee verloren.', 'I lost my wallet.', { theme: 'daily', stage: 2 });
  VB('verdwalen', 'to get lost', 'verdwaal|verdwaalt|verdwalen', 'verdwaalde|verdwaalden', 'verdwaald', 'zijn', 'We zijn in de Jordaan verdwaald.', 'We got lost in the Jordaan.', { theme: 'city', stage: 2 });
  VB('groeien', 'to grow', 'groei|groeit|groeien', 'groeide|groeiden', 'gegroeid', 'zijn', 'De kinderen zijn hard gegroeid.', 'The children have grown a lot.', { theme: 'life', stage: 2 });
  VB('sterven', 'to die', 'sterf|sterft|sterven', 'stierf|stierven', 'gestorven', 'zijn', 'Mijn opa is vorig jaar gestorven.', 'My grandpa died last year.', { theme: 'life', stage: 2 });
  VB('vliegen', 'to fly', 'vlieg|vliegt|vliegen', 'vloog|vlogen', 'gevlogen', 'hebben/zijn', 'We zijn naar Lissabon gevlogen.', 'We flew to Lisbon.', { theme: 'travel', stage: 2 });
  VB('winnen', 'to win', 'win|wint|winnen', 'won|wonnen', 'gewonnen', 'hebben', 'Ajax heeft gewonnen.', 'Ajax won.', { theme: 'leisure', stage: 2 });
  N('portemonnee', 'de', 'portemonnees', 'wallet', 'Mijn portemonnee is weg.', 'My wallet is gone.', { theme: 'daily', stage: 2 });
  N('telefoon', 'de', 'telefoons', 'phone', 'Ik heb mijn telefoon thuis laten liggen.', 'I left my phone at home.', { theme: 'daily', stage: 2 });
  N('wedstrijd', 'de', 'wedstrijden', 'match / competition', 'De wedstrijd was spannend.', 'The match was exciting.', { theme: 'leisure', stage: 2 });
  N('cadeau', 'het', 'cadeaus', 'present', 'Ik heb een cadeau gekregen.', 'I got a present.', { theme: 'leisure', stage: 2 });
  W('spannend', 'exciting / tense', 'adj', 'Het was een spannende film.', 'It was an exciting film.', { theme: 'feelings', stage: 2 });
  W('ooit', 'ever', 'adv', 'Ben je ooit in Parijs geweest?', 'Have you ever been to Paris?', { theme: 'time', stage: 2 });
  W('nog nooit', 'never (yet)', 'adv', 'Ik ben nog nooit in Rotterdam geweest.', 'I have never been to Rotterdam.', { theme: 'time', stage: 2, id: 'nog-nooit' });
  W('alweer', 'again (already)', 'adv', 'Ben je alweer je sleutels vergeten?', 'Have you forgotten your keys again?', { theme: 'time', stage: 2 });
  W('gelukkig', 'luckily / happy', 'adv', 'Gelukkig heb ik mijn telefoon gevonden.', 'Luckily I found my phone.', { theme: 'feelings', stage: 2 });

  W('vroeger', 'in the past / formerly', 'adv', 'Vroeger woonde ik in Leeds.', 'I used to live in Leeds.', { theme: 'time', stage: 2 });
  W('toen', 'then / at that time', 'adv', 'Toen was alles anders.', 'Then everything was different.', { theme: 'time', stage: 2, id: 'toen-adv' });
  N('dorp', 'het', 'dorpen', 'village', 'Ik kom uit een klein dorp.', 'I come from a small village.', { theme: 'places', stage: 2 });
  N('jeugd', 'de', null, 'youth / childhood', 'Ik had een fijne jeugd.', 'I had a happy childhood.', { theme: 'life', stage: 2 });
  N('klas', 'de', 'klassen', 'class (school)', 'We zaten in dezelfde klas.', 'We were in the same class.', { theme: 'study', stage: 2 });
  N('buurt', 'de', 'buurten', 'neighbourhood', 'De buurt was rustig.', 'The neighbourhood was quiet.', { theme: 'places', stage: 2 });
  N('speeltuin', 'de', 'speeltuinen', 'playground', 'We speelden elke dag in de speeltuin.', 'We played in the playground every day.', { theme: 'places', stage: 2 });
  N('huisdier', 'het', 'huisdieren', 'pet', 'Hadden jullie een huisdier?', 'Did you have a pet?', { theme: 'home', stage: 2 });
  N('hond', 'de', 'honden', 'dog', 'We hadden een grote hond.', 'We had a big dog.', { theme: 'animals', stage: 2 });
  N('kat', 'de', 'katten', 'cat', 'De kat sliep altijd op mijn bed.', 'The cat always slept on my bed.', { theme: 'animals', stage: 2 });
  VB('bouwen', 'to build', 'bouw|bouwt|bouwen', 'bouwde|bouwden', 'gebouwd', 'hebben', 'We bouwden hutten in het bos.', 'We built huts in the woods.', { theme: 'leisure', stage: 2 });
  VB('dromen', 'to dream', 'droom|droomt|dromen', 'droomde|droomden', 'gedroomd', 'hebben', 'Ik droomde van een eigen boot.', 'I dreamed of my own boat.', { theme: 'life', stage: 2 });
  VB('verzamelen', 'to collect', 'verzamel|verzamelt|verzamelen', 'verzamelde|verzamelden', 'verzameld', 'hebben', 'Mijn broer verzamelde postzegels.', 'My brother collected stamps.', { theme: 'leisure', stage: 2 });
  VB('leven', 'to live (be alive)', 'leef|leeft|leven', 'leefde|leefden', 'geleefd', 'hebben', 'Mijn oma leefde tot haar negentigste.', 'My grandma lived until ninety.', { theme: 'life', stage: 2, note: 'wonen = reside, leven = be alive.' });
  W('streng', 'strict', 'adj', 'Mijn vader was streng.', 'My father was strict.', { theme: 'people', stage: 2 });
  W('lief', 'sweet / kind', 'adj', 'Onze buurvrouw was heel lief.', 'Our neighbour was very kind.', { theme: 'people', stage: 2 });
  W('rustig', 'quiet / calm', 'adj', 'Het dorp was rustig.', 'The village was quiet.', { theme: 'places', stage: 2 });
  W('anders', 'different / otherwise', 'adj', 'Vroeger was alles anders.', 'In the past everything was different.', { theme: 'basics', stage: 2 });
  W('meestal', 'usually', 'adv', 'We aten meestal om zes uur.', 'We usually ate at six.', { theme: 'time', stage: 2 });
  W('soms', 'sometimes', 'adv', 'Soms gingen we naar zee.', 'Sometimes we went to the seaside.', { theme: 'time', stage: 2 });

  W('opeens', 'suddenly', 'adv', 'Opeens begon het te regenen.', 'Suddenly it started to rain.', { theme: 'story', stage: 2, altNl: ['ineens', 'plotseling'] });
  W('ten slotte', 'finally', 'adv', 'Ten slotte vonden we het hotel.', 'Finally we found the hotel.', { theme: 'story', stage: 2, id: 'ten-slotte' });
  W('uiteindelijk', 'in the end / eventually', 'adv', 'Uiteindelijk kwam de bus toch.', 'In the end the bus came after all.', { theme: 'story', stage: 2 });
  W('daarom', 'that is why / therefore', 'adv', 'Het regende, daarom bleven we thuis.', 'It was raining, that is why we stayed in.', { theme: 'story', stage: 2 });
  W('terwijl', 'while', 'conj', 'Ik las terwijl hij kookte.', 'I read while he cooked.', { theme: 'story', stage: 2 });
  N('verhaal', 'het', 'verhalen', 'story', 'Dat is een lang verhaal.', 'That is a long story.', { theme: 'story', stage: 2 });
  N('einde', 'het', 'eindes', 'end', 'Het einde was verrassend.', 'The ending was surprising.', { theme: 'story', stage: 2 });
  N('verrassing', 'de', 'verrassingen', 'surprise', 'Wat een verrassing!', 'What a surprise!', { theme: 'story', stage: 2 });
  N('geluk', 'het', null, 'luck / happiness', 'We hadden geluk: de zon scheen.', 'We were lucky: the sun was shining.', { theme: 'feelings', stage: 2 });
  N('pech', 'de', null, 'bad luck', 'We hadden pech met de auto.', 'We had bad luck with the car.', { theme: 'feelings', stage: 2 });
  VB('schrikken', 'to be startled', 'schrik|schrikt|schrikken', 'schrok|schrokken', 'geschrokken', 'zijn', 'Ik schrok van het geluid.', 'The noise startled me.', { theme: 'feelings', stage: 2 });
  VB('huilen', 'to cry', 'huil|huilt|huilen', 'huilde|huilden', 'gehuild', 'hebben', 'Het kind huilde.', 'The child cried.', { theme: 'feelings', stage: 2 });
  VB('roepen', 'to call out / shout', 'roep|roept|roepen', 'riep|riepen', 'geroepen', 'hebben', 'Iemand riep mijn naam.', 'Someone called my name.', { theme: 'story', stage: 2 });
  VB('rennen', 'to run', 'ren|rent|rennen', 'rende|renden', 'gerend', 'hebben/zijn', 'We renden naar de tram.', 'We ran to the tram.', { theme: 'story', stage: 2 });
  VB('verdwijnen', 'to disappear', 'verdwijn|verdwijnt|verdwijnen', 'verdween|verdwenen', 'verdwenen', 'zijn', 'De kat was verdwenen.', 'The cat had disappeared.', { theme: 'story', stage: 2 });
  VB('ontdekken', 'to discover', 'ontdek|ontdekt|ontdekken', 'ontdekte|ontdekten', 'ontdekt', 'hebben', 'Toen ontdekte ik mijn fout.', 'Then I discovered my mistake.', { theme: 'story', stage: 2 });
  VB('gooien', 'to throw', 'gooi|gooit|gooien', 'gooide|gooiden', 'gegooid', 'hebben', 'Hij gooide de bal in de gracht.', 'He threw the ball into the canal.', { theme: 'story', stage: 2 });
  VB('schreeuwen', 'to scream / yell', 'schreeuw|schreeuwt|schreeuwen', 'schreeuwde|schreeuwden', 'geschreeuwd', 'hebben', 'Niemand schreeuwde.', 'Nobody screamed.', { theme: 'story', stage: 2 });
  N('nacht', 'de', 'nachten', 'night', 'Het was midden in de nacht.', 'It was the middle of the night.', { theme: 'time', stage: 2 });
  N('geluid', 'het', 'geluiden', 'sound / noise', 'Ik hoorde een vreemd geluid.', 'I heard a strange sound.', { theme: 'story', stage: 2 });
  W('vreemd', 'strange', 'adj', 'Er stond een vreemde man voor de deur.', 'A strange man was at the door.', { theme: 'story', stage: 2 });
  W('donker', 'dark', 'adj', 'Het was al donker.', 'It was already dark.', { theme: 'basics', stage: 2 });

  /* ---------------- Unit 1 lessons ---------------- */
  const u1 = [];
  u1.push(lesson('s2u1l1', 'What did you do? The perfect tense', 'You can say what you did yesterday, last week and at the weekend using the perfect tense with hebben and regular participles.', [
    h('ik heb gewerkt'),
    p('This is the tense Dutch people use all day long to talk about the past: `Wat heb je gisteren gedaan?` `Ik heb gewerkt.` Two parts: **hebben** in the present tense, and the **participle** at the **very end** of the sentence.'),
    table(['', 'hebben', '…', 'participle'], [['Ik', '*heb', 'gisteren', '*gewerkt.'], ['Heb', 'je', 'al', '*gegeten?'], ['We', '*hebben', 'het huis', '*schoongemaakt.']]),
    h('Making the participle: ge + stem + t/d'),
    p('Stem of the verb, `ge-` in front, `-t` if the stem ends in a letter of **’t kofschip** (t, k, f, s, ch, p), otherwise `-d`.'),
    table(['verb', 'stem', '’t kofschip?', 'participle'], [['werken', 'werk', 'k: yes', '*gewerkt'], ['fietsen', 'fiets', 's: yes', '*gefietst'], ['koken', 'kook', 'k: yes', '*gekookt'], ['wonen', 'woon', 'no', '*gewoond'], ['halen', 'haal', 'no', '*gehaald'], ['missen', 'mis', 's: yes', '*gemist'], ['praten', 'praat', 'ends in t: add nothing', '*gepraat']]),
    p('Verbs beginning with **be-, ge-, ver-, ont-, her-** get no `ge-`: `betalen → betaald`, `gebruiken → gebruikt`, `vertellen → verteld`, `ontmoeten → ontmoet`.'),
    ex(['Ik heb gisteren tot vijf uur gewerkt.', 'I worked until five yesterday.'], ['Heb je de huur betaald?', 'Did you pay the rent?'], ['We hebben vorige week de keuken schoongemaakt.', 'We cleaned the kitchen last week.'], ['Ik heb net met mijn moeder gebeld.', 'I just phoned my mother.']),
    h('Time words that go with it'),
    p('`gisteren`, `eergisteren`, `vorige week`, `vorig jaar`, `twee dagen geleden`, `net` (just), `al` (already), `nog niet` (not yet): `Ik heb al gegeten.` `Ik heb nog niet gebeld.`'),
    tip('The participle always goes to the end, even in a long sentence. If you are unsure, say the whole sentence and then add the participle as the last word.'),
  ], ['g2-perfect', 'g2-time-expressions'], ['eergisteren', 'vorig', 'geleden', 'net', 'pas', 'nog-niet', 'verhuizen', 'gebruiken', 'vertellen', 'ontmoeten', 'bezoeken', 'missen', 'halen', 'schoonmaken', 'wassen', 'feesten', 'trouwen', 'ervaring', 'weekend', 'bezoek'], [
    mc('What is the participle of "werken"?', ['gewerkt', 'gewerkd', 'werkt'], 0, 'Stem werk ends in k, which is in ’t kofschip, so -t: gewerkt.'),
    mc('What is the participle of "wonen"?', ['gewoont', 'gewoond', 'gewonen'], 1, 'Stem woon ends in n, not in ’t kofschip, so -d: gewoond.'),
    mc('What is the participle of "betalen"?', ['gebetaald', 'betaald', 'betaalt'], 1, 'be- verbs get no ge-: betaald.'),
    conj('koken', 'ik', 'perf', ['heb gekookt'], 'ik heb gekookt: kook ends in k → -t.'),
    conj('halen', 'hij', 'perf', ['heeft gehaald'], 'hij heeft gehaald: haal ends in l → -d.'),
    conj('missen', 'wij', 'perf', ['hebben gemist'], 'wij hebben gemist: mis ends in s → -t.'),
    conj('vertellen', 'zij', 'perf', ['heeft verteld', 'hebben verteld'], 'ver- verbs get no ge-: verteld. zij heeft (she) or zij hebben (they).'),
    fill('Ik heb gisteren de hele dag ___. (werken)', ['gewerkt'], 'I worked all day yesterday.', 'werk + t: gewerkt, at the end of the sentence.'),
    fill('Heb je de keuken al ___? (schoonmaken)', ['schoongemaakt'], 'Have you cleaned the kitchen yet?', 'Separable verb: schoon + ge + maakt.'),
    fill('We hebben mijn ouders in Engeland ___. (bezoeken)', ['bezocht'], 'We visited my parents in England.', 'bezoeken is irregular and starts with be-: bezocht.'),
    fill('Ik heb ___ gegeten, ik heb geen honger.', ['net', 'al'], 'I have just eaten, I am not hungry.', 'net = just now; al = already. Both fit.'),
    build('I missed the tram this morning.', 'Ik heb vanmorgen de tram gemist.', ['mis', 'miste'], 'heb … gemist: participle at the end.'),
    build('Did you use my bike?', 'Heb je mijn fiets gebruikt?', ['gegebruikt', 'gebruik'], 'Question: heb first, je second, participle last. ge- verbs take no extra ge-.'),
    build('We met at a party two years ago.', 'We hebben elkaar twee jaar geleden op een feest ontmoet.', ['gemeet', 'voor'], 'twee jaar geleden = two years ago (geleden after the time). ontmoet: no ge-.'),
    build('I have not phoned yet.', 'Ik heb nog niet gebeld.', ['niet nog', 'bel'], 'nog niet goes before the participle.'),
    tr('en-nl', 'Yesterday I cleaned the house.', ['Gisteren heb ik het huis schoongemaakt.', 'Ik heb gisteren het huis schoongemaakt.'], 'After gisteren the verb comes second: Gisteren heb ik …'),
    tr('nl-en', 'We zijn vorig jaar verhuisd.', ['We moved last year.', 'We moved house last year.'], 'verhuizen takes zijn; vorig jaar = last year.'),
    fix('Ik heb gisteren gewerkt tot zes uur.', ['Ik heb gisteren tot zes uur gewerkt.'], 'The participle must be the last word: … tot zes uur gewerkt.'),
    fix('Ik heb gebetaald.', ['Ik heb betaald.'], 'be- verbs take no ge-: betaald.'),
    dict('Ik heb net met mijn zus gebeld.', 'I just phoned my sister.', 'net = just; gebeld at the end.'),
    listen('Wat heb je in het weekend gedaan?', ['What did you do at the weekend?', 'What are you doing at the weekend?', 'Where were you at the weekend?'], 0, 'heb … gedaan = perfect: what did you do.'),
    speak('Ik heb gisteren gewerkt en daarna heb ik gekookt.', 'Yesterday I worked and then I cooked.'),
    free('Say three things you did yesterday.', 'Gisteren heb ik gewerkt. Ik heb boodschappen gehaald en ik heb met een vriend gebeld.', 'Yesterday I worked. I fetched groceries and I phoned a friend.', { hints: ['Ik heb … gewerkt', 'Ik heb … gehaald', 'Ik heb … gebeld'] }),
    auto(3, ['tr-nl-en', 'mc-meaning']),
  ], [
    conj('werken', 'jij', 'perf', ['hebt gewerkt'], 'jij hebt gewerkt.'),
    conj('wonen', 'zij', 'perf', ['heeft gewoond', 'hebben gewoond'], 'woon + d: gewoond.'),
    fill('Ik heb mijn oma vorige week ___. (bellen)', ['gebeld'], 'I phoned my grandma last week.', 'bel ends in l → gebeld.'),
    build('We visited the museum yesterday.', 'We hebben gisteren het museum bezocht.', ['gebezocht', 'bezoeken'], 'be- verb: bezocht, at the end.'),
    tr('en-nl', 'Have you eaten yet?', ['Heb je al gegeten?'], 'al = yet in a question; gegeten at the end.'),
    speak('Heb je de huur al betaald? Ja, ik heb net betaald.', 'Have you paid the rent yet? Yes, I just paid.'),
  ]));

  u1.push(lesson('s2u1l2', 'Gone, come, fallen: zijn and the irregular participles', 'You can talk about what happened, where you went and what went wrong, using zijn as auxiliary and the most common irregular participles.', [
    h('ik ben gegaan'),
    p('Verbs of **movement to a place** and **change of state** use `zijn` instead of `hebben`: `Ik ben naar Utrecht gegaan.` `Ze is ziek geworden.` So do `zijn` and `blijven`: `Ik ben thuis gebleven.` `Ben je ooit in Parijs geweest?`'),
    table(['with zijn', '', 'with hebben', ''], [['*gegaan', 'gone', '*gehad', 'had'], ['*gekomen', 'come', '*gedaan', 'done'], ['*gebleven', 'stayed', '*gezien', 'seen'], ['*geweest', 'been', '*gegeten', 'eaten'], ['*geworden', 'become', '*gedronken', 'drunk'], ['*gevallen', 'fallen', '*gekocht', 'bought'], ['*begonnen', 'begun', '*gevonden', 'found'], ['*vertrokken', 'left', '*gekregen', 'got'], ['*verdwaald', 'got lost', '*verloren', 'lost'], ['*gestorven', 'died', '*gelezen', 'read']]),
    h('Irregular participles'),
    p('Strong verbs change their vowel and end in **-en**: `zien → gezien`, `eten → gegeten`, `drinken → gedronken`, `vinden → gevonden`, `krijgen → gekregen`, `lezen → gelezen`, `schrijven → geschreven`, `slapen → geslapen`, `nemen → genomen`. Four end in **-cht**: `kopen → gekocht`, `denken → gedacht`, `brengen → gebracht`, `zoeken → gezocht`. There is no rule, so learn them as a song.'),
    h('Movement: zijn or hebben?'),
    p('`fietsen`, `lopen`, `rijden`, `vliegen` take `zijn` when you say **where to**, and `hebben` when it is just the activity: `Ik ben naar het werk gefietst.` but `Ik heb een uur gefietst.`'),
    ex(['Ik ben gisteren naar Haarlem gegaan.', 'I went to Haarlem yesterday.'], ['Ze is van haar fiets gevallen.', 'She fell off her bike.'], ['We zijn om tien uur vertrokken en om twaalf uur aangekomen.', 'We left at ten and arrived at twelve.'], ['Ik heb mijn portemonnee verloren, maar gelukkig heb ik hem gevonden.', 'I lost my wallet, but luckily I found it.']),
    warn('English says "I have gone"; Dutch says `ik ben gegaan`. Never `ik heb gegaan`.'),
    tip('ooit / nog nooit: `Ben je ooit in Texel geweest?` `Nee, ik ben er nog nooit geweest.`'),
  ], ['g2-hebben-zijn', 'g2-irregular-participles'], ['vallen', 'vergeten', 'verliezen', 'verdwalen', 'groeien', 'sterven', 'vliegen', 'winnen', 'portemonnee', 'telefoon', 'wedstrijd', 'cadeau', 'spannend', 'ooit', 'nog-nooit', 'alweer', 'gelukkig'], [
    mc('Ik ___ gisteren naar Rotterdam gegaan.', ['heb', 'ben'], 1, 'gaan = movement to a place → zijn: ik ben gegaan.'),
    mc('We ___ een film gezien.', ['hebben', 'zijn'], 0, 'zien is not movement or change → hebben.'),
    mc('Ze ___ ziek geworden.', ['heeft', 'is'], 1, 'worden = change of state → zijn.'),
    mc('Ik ___ een uur gefietst.', ['heb', 'ben'], 0, 'No destination, just the activity → hebben.'),
    mc('Ik ___ naar Leiden gefietst.', ['heb', 'ben'], 1, 'Destination (naar Leiden) → zijn.'),
    conj('gaan', 'ik', 'perf', ['ben gegaan'], 'gaan takes zijn: ik ben gegaan.'),
    conj('zien', 'hij', 'perf', ['heeft gezien'], 'gezien, with hebben.'),
    conj('komen', 'wij', 'perf', ['zijn gekomen'], 'komen takes zijn: wij zijn gekomen.'),
    conj('kopen', 'jij', 'perf', ['hebt gekocht'], 'One of the -cht four: gekocht.'),
    conj('zijn', 'jullie', 'perf', ['zijn geweest'], 'zijn → geweest, with zijn.'),
    conj('vallen', 'zij', 'perf', ['is gevallen', 'zijn gevallen'], 'vallen = change (from up to down) → zijn.'),
    fill('Ben je ___ in Maastricht geweest? Nee, nog nooit.', ['ooit'], 'Have you ever been to Maastricht? No, never.', 'ooit = ever; nog nooit = never (yet).'),
    fill('Ik heb mijn telefoon ___ en niet meer gevonden. (verliezen)', ['verloren'], 'I lost my phone and never found it again.', 'verliezen → verloren (no ge-, ver- prefix).'),
    fill('We ___ in de Jordaan verdwaald.', ['zijn'], 'We got lost in the Jordaan.', 'verdwalen = change of state (from knowing the way to lost) → zijn.'),
    build('I fell off my bike.', 'Ik ben van mijn fiets gevallen.', ['heb', 'gevalt'], 'zijn + gevallen.'),
    build('Have you ever been to Paris?', 'Ben je ooit in Parijs geweest?', ['Heb', 'gezijn'], 'zijn → geweest with zijn: ben je … geweest.'),
    build('We left at eight and arrived at ten.', 'We zijn om acht uur vertrokken en om tien uur aangekomen.', ['hebben', 'gevertrokken'], 'Both vertrekken and aankomen are movement → zijn. vertrekken: no ge-.'),
    build('Ajax won the match.', 'Ajax heeft de wedstrijd gewonnen.', ['is', 'gewint'], 'winnen → gewonnen, with hebben.'),
    tr('en-nl', 'I forgot my keys again.', ['Ik ben alweer mijn sleutels vergeten.', 'Ik ben mijn sleutels alweer vergeten.', 'Ik heb alweer mijn sleutels vergeten.'], 'vergeten → vergeten (no change!). Usually with zijn; hebben is also heard.'),
    tr('nl-en', 'Mijn opa is vorig jaar gestorven.', ['My grandpa died last year.', 'My grandfather died last year.'], 'sterven → gestorven, with zijn.'),
    fix('Ik heb naar huis gegaan.', ['Ik ben naar huis gegaan.'], 'gaan takes zijn.'),
    fix('Zij is een cadeau gekregen.', ['Zij heeft een cadeau gekregen.'], 'krijgen takes hebben: zij heeft gekregen.'),
    dict('We zijn gisteren naar het strand gegaan.', 'We went to the beach yesterday.', 'zijn … gegaan.'),
    listen('Ik heb mijn portemonnee verloren.', ['I lost my wallet.', 'I found my wallet.', 'I forgot my wallet.'], 0, 'verloren = lost (verliezen).'),
    speak('Ik ben nog nooit in Groningen geweest, maar ik ben wel in Utrecht geweest.', 'I have never been to Groningen, but I have been to Utrecht.'),
    free('Tell what happened last weekend: where you went, what you saw and one thing that went wrong.', 'Zaterdag ben ik naar Haarlem gegaan. Ik heb de markt gezien en ik heb koffie gedronken. Helaas heb ik de laatste trein gemist.', 'On Saturday I went to Haarlem. I saw the market and drank coffee. Unfortunately I missed the last train.', { hints: ['Ik ben naar … gegaan', 'Ik heb … gezien', 'Helaas heb ik …'] }),
    match([['gegaan', 'gone'], ['gezien', 'seen'], ['gekocht', 'bought'], ['gebleven', 'stayed'], ['gevonden', 'found'], ['geweest', 'been']]),
  ], [
    conj('blijven', 'ik', 'perf', ['ben gebleven'], 'blijven takes zijn: ik ben gebleven.'),
    conj('eten', 'wij', 'perf', ['hebben gegeten'], 'eten → gegeten.'),
    mc('Ze ___ om zeven uur vertrokken.', ['zijn', 'hebben'], 0, 'vertrekken = movement away → zijn.'),
    fill('Ik heb mijn sleutels ___. (vinden)', ['gevonden'], 'I found my keys.', 'vinden → gevonden.'),
    build('We flew to Lisbon.', 'We zijn naar Lissabon gevlogen.', ['hebben', 'gevliegd'], 'Destination → zijn; vliegen → gevlogen.'),
    speak('Ben je ooit in Parijs geweest? Ja, twee jaar geleden.', 'Have you ever been to Paris? Yes, two years ago.'),
  ]));

  u1.push(lesson('s2u1l3', 'Vroeger: the simple past', 'You can describe how things used to be, with the simple past of zijn, hebben, the modals and regular verbs.', [
    h('ik was, ik had, ik woonde'),
    p('For **descriptions**, **habits** and **how things used to be**, Dutch uses the simple past (ovt). `zijn`, `hebben` and the modals are almost always in the simple past, even in casual speech:'),
    table(['', 'singular', 'plural'], [['zijn', '*was', '*waren'], ['hebben', '*had', '*hadden'], ['kunnen', '*kon', '*konden'], ['moeten', '*moest', '*moesten'], ['willen', '*wilde', '*wilden'], ['mogen', '*mocht', '*mochten']]),
    h('Regular verbs: stem + te/de'),
    p('Same ’t kofschip test as the participle. Singular `-te` / `-de`, plural `-ten` / `-den`. No -t for jij or hij.'),
    table(['verb', 'singular', 'plural'], [['wonen', '*woonde', '*woonden'], ['werken', '*werkte', '*werkten'], ['spelen', '*speelde', '*speelden'], ['fietsen', '*fietste', '*fietsten'], ['bouwen', '*bouwde', '*bouwden'], ['praten', '*praatte', '*praatten']]),
    ex(['Vroeger woonde ik in een klein dorp.', 'I used to live in a small village.'], ['We hadden een hond en twee katten.', 'We had a dog and two cats.'], ['Mijn ouders waren streng, maar lief.', 'My parents were strict, but kind.'], ['Ik mocht niet laat opblijven.', 'I was not allowed to stay up late.'], ['We speelden elke dag in de speeltuin.', 'We played in the playground every day.']),
    h('Perfect or simple past?'),
    p('Reporting one event: perfect (`Ik heb gisteren gebeld`). Background, description, habits: simple past (`Het was koud en we hadden honger`). When in doubt in conversation, the perfect is the safe choice for actions, and was/had for states.'),
    tip('`vroeger` (in the past, "used to") is the signal word for the simple past. Start a sentence with it and the ovt follows naturally: `Vroeger fietste ik elke dag.`'),
  ], ['g2-ovt-weak', 'g2-ovt-strong', 'g2-past-choice'], ['vroeger', 'toen-adv', 'dorp', 'jeugd', 'klas', 'buurt', 'speeltuin', 'huisdier', 'hond', 'kat', 'bouwen', 'dromen', 'verzamelen', 'leven', 'streng', 'lief', 'rustig', 'anders', 'meestal', 'soms'], [
    conj('zijn', 'ik', 'past', ['was'], 'ik was, wij waren.'),
    conj('zijn', 'wij', 'past', ['waren'], 'Plural: waren.'),
    conj('hebben', 'hij', 'past', ['had'], 'had / hadden.'),
    conj('hebben', 'jullie', 'past', ['hadden'], 'Plural: hadden.'),
    conj('kunnen', 'ik', 'past', ['kon'], 'kon / konden.'),
    conj('moeten', 'zij', 'past', ['moest', 'moesten'], 'moest (sg) / moesten (pl).'),
    conj('wonen', 'ik', 'past', ['woonde'], 'woon + de (n is not in ’t kofschip).'),
    conj('werken', 'hij', 'past', ['werkte'], 'werk + te. No extra -t for hij.'),
    conj('spelen', 'wij', 'past', ['speelden'], 'speel + den.'),
    conj('fietsen', 'jij', 'past', ['fietste'], 'fiets + te.'),
    fill('Vroeger ___ ik in Londen. (wonen)', ['woonde'], 'I used to live in London.', 'Simple past after vroeger: woonde.'),
    fill('Mijn ouders ___ streng. (zijn)', ['waren'], 'My parents were strict.', 'ouders = plural → waren.'),
    fill('We ___ een grote hond. (hebben)', ['hadden'], 'We had a big dog.', 'we → hadden.'),
    fill('Ik ___ niet laat opblijven. (mogen)', ['mocht'], 'I was not allowed to stay up late.', 'mogen → mocht.'),
    build('We used to play in the playground every day.', 'Vroeger speelden we elke dag in de speeltuin.', ['spelen', 'gespeeld'], 'Vroeger first, then the verb (speelden), then we.'),
    build('My brother collected stamps.', 'Mijn broer verzamelde postzegels.', ['verzamelt', 'heeft'], 'verzamel + de.'),
    build('The village was quiet and we had a cat.', 'Het dorp was rustig en we hadden een kat.', ['waren', 'had'], 'het dorp (sg) was; we hadden.'),
    mc('Which sentence is the natural way to describe your childhood home?', ['Ons huis is klein geweest.', 'Ons huis was klein.', 'Ons huis heeft klein.'], 1, 'Descriptions and states: simple past was.'),
    mc('Which sentence reports a single event?', ['Ik heb gisteren mijn oma gebeld.', 'Ik belde vroeger mijn oma.', 'Mijn oma was lief.'], 0, 'One completed event in conversation: perfect.'),
    tr('en-nl', 'When I was small, we had a dog.', ['Toen ik klein was, hadden we een hond.', 'Toen ik klein was, hadden wij een hond.'], 'toen + klein was (verb at the end), then inversion: hadden we.'),
    tr('nl-en', 'Vroeger was alles anders.', ['In the past everything was different.', 'Everything used to be different.'], 'vroeger = in the past; anders = different.'),
    fix('Vroeger ik woonde in een dorp.', ['Vroeger woonde ik in een dorp.'], 'After vroeger the verb must come second: Vroeger woonde ik.'),
    fix('Hij werktte bij een bank.', ['Hij werkte bij een bank.'], 'werk + te = werkte, one t before -e.'),
    dict('Vroeger hadden we een kat en een hond.', 'We used to have a cat and a dog.', 'hadden = past plural of hebben.'),
    listen('Mijn vader was streng, maar mijn moeder was lief.', ['My father was strict but my mother was kind.', 'My father was kind but my mother was strict.', 'My parents were both strict.'], 0, 'vader streng, moeder lief.'),
    speak('Vroeger woonde ik in een klein dorp. Het was rustig en we hadden een hond.', 'I used to live in a small village. It was quiet and we had a dog.'),
    free('Describe your childhood in four sentences: where you lived, what your house was like, a pet or hobby, what you were (not) allowed to do.', 'Vroeger woonde ik in een dorp bij Manchester. Ons huis was klein maar gezellig. We hadden een hond en ik verzamelde stenen. Ik mocht niet laat opblijven.', 'I used to live in a village near Manchester. Our house was small but cosy. We had a dog and I collected stones. I was not allowed to stay up late.', { hints: ['Vroeger woonde ik …', 'Ons huis was …', 'We hadden …', 'Ik mocht (niet) …'] }),
    auto(3, ['tr-nl-en', 'listen']),
  ], [
    conj('zijn', 'jij', 'past', ['was'], 'jij was (no -t in the past).'),
    conj('hebben', 'wij', 'past', ['hadden'], 'hadden.'),
    conj('wonen', 'zij', 'past', ['woonde', 'woonden'], 'woonde (she) / woonden (they).'),
    fill('We ___ elke zondag naar oma. (fietsen)', ['fietsten'], 'We cycled to grandma every Sunday.', 'fiets + ten.'),
    build('I was not allowed to watch television.', 'Ik mocht geen televisie kijken.', ['mag', 'niet'], 'mocht + geen televisie + kijken at the end.'),
    speak('Toen ik klein was, was ik vaak buiten.', 'When I was small I was often outside.'),
  ]));

  u1.push(lesson('s2u1l4', 'Telling a story: strong verbs and connectors', 'You can tell a short story about something that happened, using strong past-tense verbs and the connectors eerst, toen, daarna, opeens, ten slotte.', [
    h('The strong past'),
    p('Strong verbs change their vowel in the simple past. Short vowel in the singular, long vowel (and -en) in the plural. These are the ones stories are made of:'),
    table(['', 'singular', 'plural'], [['gaan', '*ging', '*gingen'], ['komen', '*kwam', '*kwamen'], ['zien', '*zag', '*zagen'], ['doen', '*deed', '*deden'], ['lopen', '*liep', '*liepen'], ['staan', '*stond', '*stonden'], ['zitten', '*zat', '*zaten'], ['vinden', '*vond', '*vonden'], ['krijgen', '*kreeg', '*kregen'], ['zeggen', '*zei', '*zeiden'], ['kijken', '*keek', '*keken'], ['roepen', '*riep', '*riepen'], ['schrikken', '*schrok', '*schrokken'], ['beginnen', '*begon', '*begonnen'], ['worden', '*werd', '*werden']]),
    h('Connectors: the skeleton of a story'),
    table(['Dutch', 'English'], [['*eerst', 'first'], ['*toen', 'then'], ['*daarna', 'after that'], ['*opeens / ineens / plotseling', 'suddenly'], ['*gelukkig', 'luckily'], ['*helaas', 'unfortunately'], ['*daarom', 'that is why'], ['*uiteindelijk', 'in the end'], ['*ten slotte', 'finally']]),
    p('All of these are **first-position** words: the verb comes right after them. `Toen ging ik naar huis.` `Opeens hoorde ik een geluid.`'),
    h('Mixing perfect and past'),
    p('A typical Dutch story opens in the **perfect** (the frame) and continues in the **simple past** (the flow): `Gisteren is er iets vreemds gebeurd. Ik zat op de bank en las een boek. Opeens hoorde ik een geluid …`'),
    ex(['Eerst zag ik niets. Toen hoorde ik een stem.', 'First I saw nothing. Then I heard a voice.'], ['Ik schrok en rende naar de deur.', 'I was startled and ran to the door.'], ['Er stond een vreemde man. Hij zei: "Sorry, verkeerd adres."', 'A strange man was standing there. He said: "Sorry, wrong address."'], ['Gelukkig was het niets. Daarna ging ik weer slapen.', 'Luckily it was nothing. After that I went back to sleep.']),
    tip('`toen` as a connector means "then" and stands first with the verb after it. `toen` as a conjunction ("when") sends the verb to the end: `Toen ik thuiskwam, …`. Same word, two jobs.'),
  ], ['g2-ovt-strong', 'g2-past-choice'], ['opeens', 'ten-slotte', 'uiteindelijk', 'daarom', 'terwijl', 'verhaal', 'einde', 'verrassing', 'geluk', 'pech', 'schrikken', 'huilen', 'roepen', 'rennen', 'verdwijnen', 'ontdekken', 'gooien', 'schreeuwen', 'nacht', 'geluid', 'vreemd', 'donker'], [
    conj('gaan', 'ik', 'past', ['ging'], 'gaan → ging.'),
    conj('komen', 'hij', 'past', ['kwam'], 'komen → kwam (kwamen).'),
    conj('zien', 'wij', 'past', ['zagen'], 'zag / zagen: long a in the plural.'),
    conj('zeggen', 'zij', 'past', ['zei', 'zeiden'], 'zei (sg) / zeiden (pl).'),
    conj('staan', 'ik', 'past', ['stond'], 'staan → stond.'),
    conj('zitten', 'jullie', 'past', ['zaten'], 'zat / zaten.'),
    conj('krijgen', 'ik', 'past', ['kreeg'], 'krijgen → kreeg (kregen).'),
    conj('schrikken', 'ik', 'past', ['schrok'], 'schrikken → schrok.'),
    fill('Ik ___ op de bank en las een boek. (zitten)', ['zat'], 'I was sitting on the sofa reading a book.', 'zitten → zat.'),
    fill('Opeens ___ ik een geluid. (horen)', ['hoorde'], 'Suddenly I heard a sound.', 'horen is weak: hoor + de. After opeens the verb comes first.'),
    fill('Er ___ een vreemde man voor de deur. (staan)', ['stond'], 'A strange man was standing at the door.', 'staan → stond.'),
    fill('Ik schrok en ___ naar de keuken. (rennen)', ['rende'], 'I was startled and ran to the kitchen.', 'rennen is weak: ren + de.'),
    build('Then I went home.', 'Toen ging ik naar huis.', ['ik ging', 'gaat'], 'Connector toen first, verb second: Toen ging ik.'),
    build('Suddenly the cat disappeared.', 'Opeens verdween de kat.', ['verdwijnt', 'verdwenen'], 'verdwijnen → verdween; verb right after opeens.'),
    build('Luckily I found my wallet in the end.', 'Gelukkig vond ik uiteindelijk mijn portemonnee.', ['vind', 'gevonden'], 'vinden → vond; gelukkig + verb second.'),
    build('He threw the ball into the canal.', 'Hij gooide de bal in de gracht.', ['gooit', 'gegooid'], 'gooien is weak: gooi + de.'),
    mc('"Toen ik thuiskwam, was het donker." What does toen mean here?', ['then (connector)', 'when (conjunction)'], 1, 'The verb is at the end of the toen-clause, so it is the conjunction "when".'),
    mc('Which order is correct?', ['Daarna ik ging slapen.', 'Daarna ging ik slapen.', 'Ik daarna ging slapen.'], 1, 'daarna first, verb second.'),
    tr('en-nl', 'First we ate, then we went to the cinema.', ['Eerst aten we, toen gingen we naar de bioscoop.', 'Eerst hebben we gegeten, toen zijn we naar de bioscoop gegaan.'], 'eten → aten; gaan → gingen. Verb after the connector.'),
    tr('nl-en', 'Ik zag niets, maar ik hoorde een vreemd geluid.', ['I saw nothing, but I heard a strange sound.', 'I saw nothing but I heard a strange noise.'], 'zag = saw; hoorde = heard.'),
    fix('Opeens ik hoorde een geluid.', ['Opeens hoorde ik een geluid.'], 'Inversion after opeens.'),
    fix('Ik kwamde te laat.', ['Ik kwam te laat.'], 'komen is strong: kwam, no -de.'),
    dict('Opeens begon het te regenen en we renden naar de tram.', 'Suddenly it started to rain and we ran to the tram.', 'begon (beginnen), renden (rennen).'),
    listen('Ten slotte vonden we het hotel.', ['Finally we found the hotel.', 'First we looked for the hotel.', 'We never found the hotel.'], 0, 'ten slotte = finally; vonden = found.'),
    speak('Gisteren is er iets vreemds gebeurd. Ik zat thuis en opeens hoorde ik een geluid.', 'Something strange happened yesterday. I was at home and suddenly I heard a sound.'),
    read('Vorige week had ik pech. Ik stond om zeven uur op en fietste naar het station. Bij het station ontdekte ik dat mijn portemonnee weg was. Ik rende terug naar huis, maar daar lag hij niet. Toen belde ik het café waar ik de avond ervoor was geweest. "Ja, uw portemonnee ligt hier," zei de man. Gelukkig! Ik miste mijn trein, maar ik had mijn portemonnee terug.', [
      { q: 'What did the writer discover at the station?', options: ['that the train was late', 'that the wallet was gone', 'that the bike was stolen'], answer: 1, explain: '"ontdekte ik dat mijn portemonnee weg was".' },
      { q: 'Where was the wallet?', options: ['at home', 'at the station', 'at the café'], answer: 2, explain: '"uw portemonnee ligt hier", said the man at the café.' },
      { q: 'How does the story end?', options: ['the writer caught the train', 'the writer missed the train but got the wallet back', 'the wallet was never found'], answer: 1, explain: '"Ik miste mijn trein, maar ik had mijn portemonnee terug."' },
    ], { en: 'Last week I had bad luck. I got up at seven and cycled to the station. At the station I discovered that my wallet was gone. I ran back home, but it was not there. Then I phoned the café where I had been the evening before. "Yes, your wallet is here," said the man. Luckily! I missed my train, but I had my wallet back.' }),
    write('Write a short story (5 to 6 sentences) about something that went wrong recently. Use at least two connectors and one strong past-tense verb.', ['Opens with a perfect-tense frame (Gisteren is … gebeurd / heb ik …)', 'Uses eerst / toen / daarna / opeens / ten slotte', 'At least one strong verb in the past (ging, zag, kwam, stond …)', 'Verb in second position after every connector', 'Ends with how it turned out (gelukkig / helaas)'], 'Gisteren heb ik mijn tram gemist. Eerst stond ik tien minuten te wachten. Toen zag ik de tram, maar hij stopte niet. Daarna liep ik naar de volgende halte. Opeens begon het te regenen. Ten slotte kwam ik nat op mijn werk aan, maar gelukkig was mijn baas niet boos.'),
  ], [
    conj('gaan', 'wij', 'past', ['gingen'], 'gingen.'),
    conj('zien', 'ik', 'past', ['zag'], 'zag.'),
    conj('komen', 'zij', 'past', ['kwam', 'kwamen'], 'kwam / kwamen.'),
    fill('Toen ___ ik naar huis. (gaan)', ['ging'], 'Then I went home.', 'gaan → ging.'),
    build('Suddenly I heard a strange sound.', 'Opeens hoorde ik een vreemd geluid.', ['hoor', 'vreemde'], 'Verb after opeens; een vreemd geluid: het-word with een, no -e.'),
    tr('en-nl', 'Luckily it was nothing.', ['Gelukkig was het niets.'], 'gelukkig + was + het.'),
  ]));

  units.push(unit('s2u1', 'Vroeger en gisteren', 'past experiences', u1, [
    conj('werken', 'ik', 'perf', ['heb gewerkt'], 'heb gewerkt.'),
    conj('gaan', 'zij', 'perf', ['is gegaan', 'zijn gegaan'], 'gaan takes zijn.'),
    conj('zijn', 'wij', 'past', ['waren'], 'waren.'),
    conj('komen', 'ik', 'past', ['kwam'], 'kwam.'),
    mc('Ik ___ gisteren naar Den Haag gegaan.', ['heb', 'ben'], 1, 'gaan → zijn.'),
    mc('Ik ___ een boek gelezen.', ['heb', 'ben'], 0, 'lezen → hebben.'),
    fill('We hebben het museum ___. (bezoeken)', ['bezocht'], 'We visited the museum.', 'bezocht.'),
    fill('Vroeger ___ we een hond. (hebben)', ['hadden'], 'We used to have a dog.', 'hadden.'),
    build('Then I went home and cooked.', 'Toen ging ik naar huis en kookte ik.', ['ik ging', 'gekookt'], 'Connector, then the verb.'),
    build('Have you ever been to Utrecht?', 'Ben je ooit in Utrecht geweest?', ['Heb', 'gezijn'], 'zijn … geweest.'),
    fix('Ik heb gisteren gegaan naar de markt.', ['Ik ben gisteren naar de markt gegaan.'], 'zijn as auxiliary and participle at the end.'),
    tr('en-nl', 'I lost my keys but luckily I found them.', ['Ik heb mijn sleutels verloren, maar gelukkig heb ik ze gevonden.', 'Ik heb mijn sleutels verloren maar gelukkig heb ik ze gevonden.'], 'verloren, gevonden; ze = them.'),
    listen('Vorige week zijn we verhuisd.', ['Last week we moved house.', 'Next week we are moving.', 'Last week we were ill.'], 0, 'verhuisd = moved; vorige week = last week.'),
    speak('Vroeger woonde ik in een dorp, maar twee jaar geleden ben ik naar Amsterdam verhuisd.', 'I used to live in a village, but two years ago I moved to Amsterdam.'),
  ]));

  /* ---------------- Vocabulary: Unit 2 ---------------- */
  N('vliegtuig', 'het', 'vliegtuigen', 'aeroplane', 'Het vliegtuig vertrok op tijd.', 'The plane left on time.', { theme: 'travel', stage: 2 });
  N('vliegveld', 'het', 'vliegvelden', 'airport', 'Schiphol is het grootste vliegveld van Nederland.', 'Schiphol is the biggest airport in the Netherlands.', { theme: 'travel', stage: 2, altNl: ['luchthaven'] });
  N('vlucht', 'de', 'vluchten', 'flight', 'Onze vlucht had vertraging.', 'Our flight was delayed.', { theme: 'travel', stage: 2 });
  N('bagage', 'de', null, 'luggage', 'Waar is mijn bagage?', 'Where is my luggage?', { theme: 'travel', stage: 2 });
  N('koffer', 'de', 'koffers', 'suitcase', 'Mijn koffer is te zwaar.', 'My suitcase is too heavy.', { theme: 'travel', stage: 2 });
  N('paspoort', 'het', 'paspoorten', 'passport', 'Heb je je paspoort bij je?', 'Do you have your passport with you?', { theme: 'travel', stage: 2 });
  N('grens', 'de', 'grenzen', 'border', 'We reden over de grens naar België.', 'We drove across the border to Belgium.', { theme: 'travel', stage: 2 });
  N('vertraging', 'de', 'vertragingen', 'delay', 'De trein heeft twintig minuten vertraging.', 'The train is twenty minutes late.', { theme: 'travel', stage: 2 });
  N('aankomst', 'de', null, 'arrival', 'De aankomst is om tien uur.', 'Arrival is at ten.', { theme: 'travel', stage: 2 });
  N('vertrek', 'het', null, 'departure', 'Het vertrek is om acht uur.', 'Departure is at eight.', { theme: 'travel', stage: 2 });
  N('reiziger', 'de', 'reizigers', 'traveller / passenger', 'Reizigers naar Utrecht: spoor vijf.', 'Passengers to Utrecht: platform five.', { theme: 'travel', stage: 2 });
  N('buitenland', 'het', null, 'abroad (foreign countries)', 'Ik ga graag naar het buitenland.', 'I like going abroad.', { theme: 'travel', stage: 2 });
  N('eiland', 'het', 'eilanden', 'island', 'Texel is een eiland.', 'Texel is an island.', { theme: 'travel', stage: 2 });
  VB('boeken', 'to book', 'boek|boekt|boeken', 'boekte|boekten', 'geboekt', 'hebben', 'Ik heb een hotel geboekt.', 'I booked a hotel.', { theme: 'travel', stage: 2 });
  VB('landen', 'to land', 'land|landt|landen', 'landde|landden', 'geland', 'zijn', 'Het vliegtuig is net geland.', 'The plane has just landed.', { theme: 'travel', stage: 2 });
  VB('opstijgen', 'to take off', 'stijg op|stijgt op|stijgen op', 'steeg op|stegen op', 'opgestegen', 'zijn', 'We stegen om negen uur op.', 'We took off at nine.', { theme: 'travel', stage: 2 });
  VB('vergissen', 'to be mistaken', 'vergis|vergist|vergissen', 'vergiste|vergisten', 'vergist', 'hebben', 'Ik heb me vergist.', 'I made a mistake.', { theme: 'basics', stage: 2, note: 'Reflexive: zich vergissen.' });
  W('zwaar', 'heavy', 'adj', 'De koffer is zwaar.', 'The suitcase is heavy.', { theme: 'basics', stage: 2 });
  W('op tijd', 'on time', 'adv', 'De trein was op tijd.', 'The train was on time.', { theme: 'time', stage: 2, id: 'op-tijd' });
  W('onderweg', 'on the way', 'adv', 'We zijn onderweg naar Parijs.', 'We are on the way to Paris.', { theme: 'travel', stage: 2 });

  N('hotel', 'het', 'hotels', 'hotel', 'We slapen in een klein hotel.', 'We are sleeping in a small hotel.', { theme: 'travel', stage: 2 });
  N('camping', 'de', 'campings', 'campsite', 'De camping ligt aan zee.', 'The campsite is by the sea.', { theme: 'travel', stage: 2 });
  N('tent', 'de', 'tenten', 'tent', 'We nemen een tent mee.', 'We are taking a tent.', { theme: 'travel', stage: 2 });
  N('bezienswaardigheid', 'de', 'bezienswaardigheden', 'sight / tourist attraction', 'Welke bezienswaardigheden wil je zien?', 'Which sights do you want to see?', { theme: 'travel', stage: 2 });
  N('gids', 'de', 'gidsen', 'guide (person or book)', 'De gids sprak vier talen.', 'The guide spoke four languages.', { theme: 'travel', stage: 2 });
  N('plan', 'het', 'plannen', 'plan', 'Wat zijn je plannen voor de zomer?', 'What are your plans for the summer?', { theme: 'travel', stage: 2 });
  N('plek', 'de', 'plekken', 'spot / place', 'Dat is een mooie plek om te zwemmen.', 'That is a nice spot for swimming.', { theme: 'places', stage: 2 });
  N('natuur', 'de', null, 'nature', 'We houden van natuur.', 'We love nature.', { theme: 'travel', stage: 2 });
  N('zonnebrand', 'de', null, 'sunscreen', 'Vergeet de zonnebrand niet.', 'Do not forget the sunscreen.', { theme: 'travel', stage: 2 });
  VB('plannen', 'to plan', 'plan|plant|plannen', 'plande|planden', 'gepland', 'hebben', 'We plannen een weekend weg.', 'We are planning a weekend away.', { theme: 'travel', stage: 2 });
  VB('uitrusten', 'to rest / relax', 'rust uit|rust uit|rusten uit', 'rustte uit|rustten uit', 'uitgerust', 'hebben', 'Op vakantie wil ik uitrusten.', 'On holiday I want to relax.', { theme: 'travel', stage: 2 });
  VB('genieten', 'to enjoy', 'geniet|geniet|genieten', 'genoot|genoten', 'genoten', 'hebben', 'We genieten van de zon.', 'We are enjoying the sun.', { theme: 'travel', stage: 2, note: 'genieten van = to enjoy something.' });
  VB('kamperen', 'to camp', 'kampeer|kampeert|kamperen', 'kampeerde|kampeerden', 'gekampeerd', 'hebben', 'We gaan kamperen in Frankrijk.', 'We are going camping in France.', { theme: 'travel', stage: 2 });
  VB('zonnen', 'to sunbathe', 'zon|zont|zonnen', 'zonde|zonden', 'gezond', 'hebben', 'Zij ligt de hele dag te zonnen.', 'She lies sunbathing all day.', { theme: 'travel', stage: 2 });
  VB('regelen', 'to arrange', 'regel|regelt|regelen', 'regelde|regelden', 'geregeld', 'hebben', 'Ik regel de tickets.', 'I will arrange the tickets.', { theme: 'daily', stage: 2 });
  W('waarschijnlijk', 'probably', 'adv', 'We gaan waarschijnlijk naar Spanje.', 'We will probably go to Spain.', { theme: 'basics', stage: 2 });
  W('misschien', 'maybe', 'adv', 'Misschien blijven we thuis.', 'Maybe we will stay home.', { theme: 'basics', stage: 2 });
  W('zeker', 'certainly / for sure', 'adv', 'Ik kom zeker.', 'I will certainly come.', { theme: 'basics', stage: 2 });
  W('binnenkort', 'soon', 'adv', 'We gaan binnenkort verhuizen.', 'We are moving soon.', { theme: 'time', stage: 2 });
  W('straks', 'later today / in a bit', 'adv', 'Ik bel je straks.', 'I will call you in a bit.', { theme: 'time', stage: 2 });

  VB('inpakken', 'to pack', 'pak in|pakt in|pakken in', 'pakte in|pakten in', 'ingepakt', 'hebben', 'Heb je je koffer al ingepakt?', 'Have you packed your suitcase yet?', { theme: 'travel', stage: 2 });
  VB('uitpakken', 'to unpack', 'pak uit|pakt uit|pakken uit', 'pakte uit|pakten uit', 'uitgepakt', 'hebben', 'We pakten onze tassen uit.', 'We unpacked our bags.', { theme: 'travel', stage: 2 });
  VB('ophalen', 'to pick up / collect', 'haal op|haalt op|halen op', 'haalde op|haalden op', 'opgehaald', 'hebben', 'Mijn broer haalt me op van Schiphol.', 'My brother is picking me up from Schiphol.', { theme: 'travel', stage: 2 });
  VB('wegbrengen', 'to take (somewhere) / drop off', 'breng weg|brengt weg|brengen weg', 'bracht weg|brachten weg', 'weggebracht', 'hebben', 'Ik breng je naar het station weg.', 'I will drop you off at the station.', { theme: 'travel', stage: 2 });
  VB('terugbrengen', 'to bring back / return', 'breng terug|brengt terug|brengen terug', 'bracht terug|brachten terug', 'teruggebracht', 'hebben', 'Ik heb de huurauto teruggebracht.', 'I returned the rental car.', { theme: 'travel', stage: 2 });
  VB('opzoeken', 'to look up / visit', 'zoek op|zoekt op|zoeken op', 'zocht op|zochten op', 'opgezocht', 'hebben', 'Ik zoek de route op.', 'I am looking up the route.', { theme: 'daily', stage: 2 });
  VB('meebrengen', 'to bring along', 'breng mee|brengt mee|brengen mee', 'bracht mee|brachten mee', 'meegebracht', 'hebben', 'Ze heeft kaas uit Frankrijk meegebracht.', 'She brought cheese back from France.', { theme: 'travel', stage: 2 });
  VB('uitzoeken', 'to pick out / find out', 'zoek uit|zoekt uit|zoeken uit', 'zocht uit|zochten uit', 'uitgezocht', 'hebben', 'Ik zoek uit hoe laat de bus gaat.', 'I will find out what time the bus goes.', { theme: 'daily', stage: 2 });
  VB('aanbellen', 'to ring the doorbell', 'bel aan|belt aan|bellen aan', 'belde aan|belden aan', 'aangebeld', 'hebben', 'Er belde iemand aan.', 'Someone rang the doorbell.', { theme: 'home', stage: 2 });
  VB('afspreken', 'to arrange to meet', 'spreek af|spreekt af|spreken af', 'sprak af|spraken af', 'afgesproken', 'hebben', 'We hebben om drie uur afgesproken.', 'We arranged to meet at three.', { theme: 'daily', stage: 2 });
  VB('terugkomen', 'to come back', 'kom terug|komt terug|komen terug', 'kwam terug|kwamen terug', 'teruggekomen', 'zijn', 'Wanneer kom je terug?', 'When are you coming back?', { theme: 'travel', stage: 2 });
  VB('weggaan', 'to leave / go away', 'ga weg|gaat weg|gaan weg', 'ging weg|gingen weg', 'weggegaan', 'zijn', 'We gaan morgen vroeg weg.', 'We are leaving early tomorrow.', { theme: 'travel', stage: 2 });
  N('rugzak', 'de', 'rugzakken', 'backpack', 'Mijn rugzak zit vol.', 'My backpack is full.', { theme: 'travel', stage: 2 });
  N('huurauto', 'de', "huurauto's", 'rental car', 'We hebben een huurauto voor een week.', 'We have a rental car for a week.', { theme: 'travel', stage: 2 });
  N('souvenir', 'het', 'souvenirs', 'souvenir', 'Ik heb een souvenir voor je meegebracht.', 'I brought you a souvenir.', { theme: 'travel', stage: 2 });
  N('route', 'de', 'routes', 'route', 'Welke route nemen we?', 'Which route do we take?', { theme: 'travel', stage: 2 });

  N('receptie', 'de', 'recepties', 'reception (desk)', 'De sleutel ligt bij de receptie.', 'The key is at reception.', { theme: 'travel', stage: 2 });
  N('reservering', 'de', 'reserveringen', 'reservation', 'Ik heb een reservering op naam van Smith.', 'I have a reservation in the name of Smith.', { theme: 'travel', stage: 2 });
  N('tweepersoonskamer', 'de', 'tweepersoonskamers', 'double room', 'Een tweepersoonskamer voor twee nachten, graag.', 'A double room for two nights, please.', { theme: 'travel', stage: 2 });
  N('douche', 'de', 'douches', 'shower', 'De douche doet het niet.', 'The shower is not working.', { theme: 'home', stage: 2 });
  N('handdoek', 'de', 'handdoeken', 'towel', 'Kunnen we extra handdoeken krijgen?', 'Can we get extra towels?', { theme: 'home', stage: 2 });
  N('wifi', 'de', null, 'wifi', 'Wat is het wachtwoord van de wifi?', 'What is the wifi password?', { theme: 'daily', stage: 2 });
  N('wachtwoord', 'het', 'wachtwoorden', 'password', 'Het wachtwoord staat op de kaart.', 'The password is on the card.', { theme: 'daily', stage: 2 });
  N('enkele reis', 'de', null, 'single ticket (one way)', 'Een enkele reis naar Utrecht, alstublieft.', 'A single to Utrecht, please.', { theme: 'travel', stage: 2, id: 'enkele-reis' });
  N('retour', 'het', 'retours', 'return ticket', 'Een retour Den Haag, graag.', 'A return to The Hague, please.', { theme: 'travel', stage: 2 });
  N('OV-chipkaart', 'de', 'OV-chipkaarten', 'public transport chip card', 'Vergeet niet in te checken met je OV-chipkaart.', 'Do not forget to check in with your OV chip card.', { theme: 'travel', stage: 2, id: 'ov-chipkaart' });
  N('plaats', 'de', 'plaatsen', 'seat / place', 'Is deze plaats vrij?', 'Is this seat free?', { theme: 'travel', stage: 2 });
  N('conducteur', 'de', 'conducteurs', 'ticket inspector', 'De conducteur controleerde de kaartjes.', 'The inspector checked the tickets.', { theme: 'travel', stage: 2 });
  N('storing', 'de', 'storingen', 'disruption / breakdown', 'Er is een storing op het spoor.', 'There is a disruption on the line.', { theme: 'travel', stage: 2 });
  W('bezet', 'occupied / taken', 'adj', 'Deze plaats is bezet.', 'This seat is taken.', { theme: 'travel', stage: 2 });
  W('vrij', 'free / vacant', 'adj', 'Is er nog een kamer vrij?', 'Is there still a room available?', { theme: 'basics', stage: 2 });
  W('inclusief', 'including', 'prep', 'De prijs is inclusief ontbijt.', 'The price includes breakfast.', { theme: 'travel', stage: 2 });
  PH('Hoe laat vertrekt de trein naar …?', 'What time does the train to … leave?', 'Hoe laat vertrekt de trein naar Groningen?', 'What time does the train to Groningen leave?', { theme: 'travel', stage: 2, id: 'ph-hoe-laat-vertrekt' });
  PH('Van welk spoor?', 'From which platform?', 'Van welk spoor vertrekt hij?', 'Which platform does it leave from?', { theme: 'travel', stage: 2, id: 'ph-welk-spoor' });
  PH('Ik heb een kamer gereserveerd.', 'I have booked a room.', 'Goedemiddag, ik heb een kamer gereserveerd op naam van Jones.', 'Good afternoon, I have booked a room in the name of Jones.', { theme: 'travel', stage: 2, id: 'ph-kamer-gereserveerd' });
  PH('Moet ik overstappen?', 'Do I have to change?', 'Moet ik overstappen in Utrecht?', 'Do I have to change in Utrecht?', { theme: 'travel', stage: 2, id: 'ph-overstappen' });

  /* ---------------- Unit 2 lessons ---------------- */
  const u2 = [];
  u2.push(lesson('s2u2l1', 'Op reis: strong verbs and getting there', 'You can talk about a journey in the past: flights, trains, delays and what went wrong, with the strong verbs that travel needs.', [
    h('Strong verbs for travelling'),
    table(['infinitive', 'past sg', 'past pl', 'participle'], [['vertrekken', '*vertrok', '*vertrokken', '*vertrokken (zijn)'], ['vliegen', '*vloog', '*vlogen', '*gevlogen (zijn/hebben)'], ['rijden', '*reed', '*reden', '*gereden (zijn/hebben)'], ['lopen', '*liep', '*liepen', '*gelopen (zijn/hebben)'], ['nemen', '*nam', '*namen', '*genomen'], ['stappen (in/uit/over)', '*stapte', '*stapten', '*gestapt (zijn)'], ['aankomen', '*kwam aan', '*kwamen aan', '*aangekomen (zijn)'], ['slapen', '*sliep', '*sliepen', '*geslapen'], ['zoeken', '*zocht', '*zochten', '*gezocht'], ['vinden', '*vond', '*vonden', '*gevonden']]),
    p('Remember the rule from Unit 1: movement **to a place** takes `zijn`. `We zijn naar Berlijn gereden.` `We hebben zes uur gereden.`'),
    h('Talking about delays'),
    p('`vertraging hebben` = to be delayed: `De trein had een uur vertraging.` `Onze vlucht heeft vertraging.` `op tijd` = on time. `de aansluiting missen` = to miss the connection.'),
    ex(['We vertrokken om zes uur van Schiphol.', 'We left Schiphol at six.'], ['Het vliegtuig had twee uur vertraging.', 'The plane was two hours late.'], ['We zijn om middernacht in Lissabon geland.', 'We landed in Lisbon at midnight.'], ['Mijn koffer was te zwaar, dus ik moest bijbetalen.', 'My suitcase was too heavy, so I had to pay extra.'], ['We reden over de grens en namen de kleine wegen.', 'We drove across the border and took the small roads.']),
    tip('Story about a trip = simple past for the flow (vertrokken, reden, sliepen) and perfect for the headline: `We zijn naar Portugal geweest.`'),
  ], ['g2-ovt-strong', 'g2-hebben-zijn'], ['vliegtuig', 'vliegveld', 'vlucht', 'bagage', 'koffer', 'paspoort', 'grens', 'vertraging', 'aankomst', 'vertrek', 'reiziger', 'buitenland', 'eiland', 'boeken', 'landen', 'opstijgen', 'zwaar', 'op-tijd', 'onderweg'], [
    conj('vertrekken', 'wij', 'past', ['vertrokken'], 'vertrekken → vertrok / vertrokken.'),
    conj('vliegen', 'ik', 'past', ['vloog'], 'vliegen → vloog.'),
    conj('rijden', 'hij', 'past', ['reed'], 'rijden → reed.'),
    conj('nemen', 'zij', 'past', ['nam', 'namen'], 'nam (sg) / namen (pl).'),
    conj('slapen', 'wij', 'past', ['sliepen'], 'slapen → sliep / sliepen.'),
    conj('landen', 'het', 'perf', ['is geland'], 'landen = arrival at a place → zijn; land ends in d → geland.'),
    conj('vliegen', 'wij', 'perf', ['zijn gevlogen', 'hebben gevlogen'], 'With a destination: zijn gevlogen. Just the activity: hebben gevlogen.'),
    art('vliegtuig', 'het', 'het vliegtuig. Compound: the last part (tuig) is het.'),
    art('koffer', 'de', 'de koffer.'),
    art('vlucht', 'de', 'de vlucht.'),
    plural('het paspoort', ['paspoorten'], 'Long oo stays: paspoorten.'),
    plural('de grens', ['grenzen'], 's → z in the plural: grenzen.'),
    fill('De trein had een uur ___.', ['vertraging'], 'The train was an hour late.', 'vertraging hebben = to be delayed.'),
    fill('We ___ om zeven uur van Schiphol. (vertrekken)', ['vertrokken'], 'We left Schiphol at seven.', 'Past plural: vertrokken.'),
    fill('Het vliegtuig ___ om tien uur geland.', ['is'], 'The plane landed at ten.', 'landen takes zijn.'),
    build('We flew to Rome and took the train to Naples.', 'We vlogen naar Rome en namen de trein naar Napels.', ['vliegen', 'nemen'], 'vlogen, namen: past plural.'),
    build('My suitcase was too heavy.', 'Mijn koffer was te zwaar.', ['zware', 'is'], 'te + zwaar (no ending after was).'),
    build('The flight was on time.', 'De vlucht was op tijd.', ['tijd op', 'had'], 'op tijd = on time.'),
    tr('en-nl', 'We drove across the border to Belgium.', ['We reden over de grens naar België.', 'We zijn over de grens naar België gereden.'], 'rijden → reden; over de grens.'),
    tr('nl-en', 'Onderweg hadden we pech met de auto.', ['On the way we had bad luck with the car.', 'On the way we had car trouble.'], 'onderweg = on the way; pech = bad luck.'),
    fix('We hebben om zes uur vertrokken.', ['We zijn om zes uur vertrokken.'], 'vertrekken takes zijn.'),
    fix('Ik vliegde naar Londen.', ['Ik vloog naar Londen.'], 'vliegen is strong: vloog.'),
    dict('Onze vlucht had twee uur vertraging.', 'Our flight was two hours late.', 'vlucht; vertraging.'),
    listen('Reizigers naar Utrecht: de trein vertrekt van spoor vijf.', ['Passengers to Utrecht: the train leaves from platform five.', 'Passengers to Utrecht: the train is five minutes late.', 'Passengers from Utrecht: platform five is closed.'], 0, 'vertrekt van spoor vijf.'),
    speak('We zijn vorige zomer naar Portugal gevlogen. De vlucht had vertraging, maar de vakantie was geweldig.', 'We flew to Portugal last summer. The flight was delayed, but the holiday was great.'),
    free('Describe your last trip: how you travelled, whether it went well, one detail.', 'Vorig jaar ben ik naar Berlijn gegaan. Ik nam de trein en die was op tijd. Ik sliep in een klein hotel bij het station.', 'Last year I went to Berlin. I took the train and it was on time. I slept in a small hotel near the station.', { hints: ['Ik ben naar … gegaan', 'Ik nam …', 'Ik sliep in …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    conj('vertrekken', 'ik', 'past', ['vertrok'], 'vertrok.'),
    conj('rijden', 'wij', 'perf', ['zijn gereden', 'hebben gereden'], 'gereden; zijn with a destination.'),
    art('vertrek', 'het', 'het vertrek.'),
    fill('We zijn op tijd ___. (aankomen)', ['aangekomen'], 'We arrived on time.', 'aan + ge + komen.'),
    build('The plane took off at nine.', 'Het vliegtuig steeg om negen uur op.', ['opsteeg', 'stijgt'], 'Separable: steeg … op.'),
    tr('en-nl', 'Where is my luggage?', ['Waar is mijn bagage?'], 'de bagage.'),
  ]));

  u2.push(lesson('s2u2l2', 'Plans: gaan, zullen and the future', 'You can talk about your plans for the weekend, the summer and next year, and make suggestions with Zullen we …?', [
    h('Three ways to talk about the future'),
    table(['', 'when', 'example'], [['present + time word', 'plans, timetables (most common)', '*Morgen vertrek ik om acht uur.'], ['gaan + infinitive', 'intentions, "going to"', '*We gaan in augustus kamperen.'], ['zullen + infinitive', 'promises, predictions, offers', '*Ik zal de tickets regelen.']]),
    table(['', 'gaan', 'zullen'], [['ik', '*ga', '*zal'], ['jij / je', '*gaat (ga je?)', '*zult / *zal (zul je?)'], ['u', '*gaat', '*zult'], ['hij / zij', '*gaat', '*zal'], ['wij / jullie / zij', '*gaan', '*zullen']]),
    p('The infinitive goes to the **end**: `Ik ga volgend jaar naar Japan reizen.` `We zullen je van het station ophalen.`'),
    h('Zullen we …? Making suggestions'),
    p('`Zullen we naar het strand gaan?` (Shall we go to the beach?) `Zullen we om acht uur afspreken?` The answer: `Ja, leuk!` / `Goed idee.` / `Liever niet.`'),
    h('Probably, maybe, for sure'),
    p('`waarschijnlijk` (probably), `misschien` (maybe), `zeker` (for sure), `binnenkort` (soon), `straks` (later today): `We gaan waarschijnlijk naar Spanje.` `Misschien blijven we thuis.`'),
    ex(['Wat zijn je plannen voor de zomer?', 'What are your plans for the summer?'], ['We gaan twee weken kamperen in Frankrijk.', 'We are going camping in France for two weeks.'], ['Ik zal je een kaartje sturen.', 'I will send you a postcard.'], ['Volgende week ga ik een hotel boeken.', 'Next week I am going to book a hotel.'], ['Zullen we samen naar Texel gaan?', 'Shall we go to Texel together?']),
    warn('`Ik zal …` sounds like a promise. For a simple plan, use gaan or the present: `Ik ga morgen zwemmen`, not `Ik zal morgen zwemmen`.'),
  ], ['g2-future', 'g2-two-verbs'], ['hotel', 'camping', 'tent', 'bezienswaardigheid', 'gids', 'plan', 'plek', 'natuur', 'zonnebrand', 'plannen', 'uitrusten', 'genieten', 'kamperen', 'zonnen', 'regelen', 'waarschijnlijk', 'misschien', 'zeker', 'binnenkort', 'straks'], [
    conj('gaan', 'jij', 'pres', ['gaat'], 'jij gaat (ga je?).'),
    conj('zullen', 'ik', 'pres', ['zal'], 'ik zal.'),
    conj('zullen', 'wij', 'pres', ['zullen'], 'wij zullen.'),
    conj('zullen', 'jij', 'pres', ['zult', 'zal'], 'jij zult (formal) or jij zal (everyday). Both are fine.'),
    fill('We ___ volgende zomer kamperen in Italië.', ['gaan'], 'We are going camping in Italy next summer.', 'Plan / intention: gaan + infinitive at the end.'),
    fill('Ik ___ je morgen bellen, dat beloof ik.', ['zal'], 'I will call you tomorrow, I promise.', 'Promise: zullen.'),
    fill('___ we een hotel boeken of gaan we kamperen?', ['Zullen'], 'Shall we book a hotel or go camping?', 'Suggestion: Zullen we …?'),
    fill('We gaan ___ naar Spanje, maar het is nog niet zeker.', ['waarschijnlijk', 'misschien'], 'We will probably go to Spain, but it is not certain yet.', 'waarschijnlijk / misschien: probably / maybe.'),
    build('Tomorrow I am going to book the tickets.', 'Morgen ga ik de tickets boeken.', ['ik ga', 'boek'], 'Morgen first, ga second, boeken at the end.'),
    build('Shall we go to the beach on Sunday?', 'Zullen we zondag naar het strand gaan?', ['Gaan', 'zal'], 'Zullen we … gaan?'),
    build('We are going to rest and enjoy the sun.', 'We gaan uitrusten en van de zon genieten.', ['rusten uit', 'geniet'], 'Infinitives at the end; genieten van.'),
    build('I will pick you up from the airport.', 'Ik zal je van het vliegveld ophalen.', ['haal op', 'ga'], 'zal + ophalen at the end (one word).'),
    mc('Which sentence is a promise?', ['Ik ga morgen zwemmen.', 'Ik zal het niet vergeten.', 'Morgen zwem ik.'], 1, 'zullen = promise / assurance.'),
    mc('"Straks" means', ['in a while (today)', 'last week', 'soon (this month)'], 0, 'straks = later today, in a bit. binnenkort = soon (days or weeks).'),
    tr('en-nl', 'What are your plans for the weekend?', ['Wat zijn je plannen voor het weekend?', 'Wat zijn jouw plannen voor het weekend?'], 'plannen voor.'),
    tr('nl-en', 'We gaan waarschijnlijk in augustus naar Griekenland.', ['We are probably going to Greece in August.', 'We will probably go to Greece in August.'], 'gaan + time + place; the "going" is the main verb here.'),
    fix('Ik ga boeken morgen een hotel.', ['Ik ga morgen een hotel boeken.', 'Morgen ga ik een hotel boeken.'], 'The infinitive boeken goes to the end.'),
    fix('Zal we naar het park gaan?', ['Zullen we naar het park gaan?'], 'we → zullen.'),
    dict('Zullen we om zeven uur bij het station afspreken?', 'Shall we meet at the station at seven?', 'zullen we … afspreken.'),
    listen('We gaan twee weken kamperen aan zee.', ['We are going camping by the sea for two weeks.', 'We went camping by the sea for two weeks.', 'We are staying in a hotel by the sea for two weeks.'], 0, 'gaan … kamperen = going to camp; aan zee = by the sea.'),
    speak('Deze zomer ga ik waarschijnlijk naar Italië. Ik ga kamperen en veel uitrusten.', 'This summer I will probably go to Italy. I am going to camp and rest a lot.'),
    free('Say what you are going to do next weekend and next summer, and make one suggestion to a friend.', 'Volgend weekend ga ik naar Utrecht. Deze zomer ga ik waarschijnlijk naar Portugal. Zullen we samen een dag naar het strand gaan?', 'Next weekend I am going to Utrecht. This summer I will probably go to Portugal. Shall we go to the beach together for a day?', { hints: ['Volgend weekend ga ik …', 'Deze zomer ga ik waarschijnlijk …', 'Zullen we …?'] }),
    match([['de tent', 'tent'], ['de camping', 'campsite'], ['de gids', 'guide'], ['de plek', 'spot'], ['de zonnebrand', 'sunscreen'], ['de natuur', 'nature']]),
  ], [
    conj('gaan', 'wij', 'pres', ['gaan'], 'wij gaan.'),
    conj('zullen', 'hij', 'pres', ['zal'], 'hij zal.'),
    fill('___ we morgen samen fietsen?', ['Zullen'], 'Shall we cycle together tomorrow?', 'Zullen we …?'),
    build('Next year we are going to move.', 'Volgend jaar gaan we verhuizen.', ['verhuist', 'zullen'], 'gaan + verhuizen at the end.'),
    tr('en-nl', 'I will send you a postcard.', ['Ik zal je een kaartje sturen.', 'Ik stuur je een kaartje.'], 'Promise: zal … sturen. The present is also natural.'),
    speak('Zullen we een weekend naar Texel gaan? Ik zal het hotel regelen.', 'Shall we go to Texel for a weekend? I will arrange the hotel.'),
  ]));

  u2.push(lesson('s2u2l3', 'Inpakken, ophalen, terugkomen: separable verbs in every tense', 'You can use separable verbs in the present, the past, the perfect and after modals: pack, pick up, bring back, come back.', [
    h('One verb, five shapes'),
    table(['tense', 'ophalen (to pick up)'], [['present', '*Ik haal je om vier uur op.'], ['simple past', '*Ik haalde je om vier uur op.'], ['perfect', '*Ik heb je om vier uur opgehaald.'], ['after a modal', '*Ik kan je om vier uur ophalen.'], ['with om … te', '*Ik kom om je op te halen.'], ['subordinate clause', '*… omdat ik je ophaal.']]),
    p('**Prefix at the end** in the present and past. **One word** with `ge` in the middle in the perfect: `opgehaald`, `ingepakt`, `teruggebracht`, `meegebracht`, `aangebeld`. **One word** at the end after a modal: `Ik moet nog inpakken.`'),
    h('Travel verbs that separate'),
    table(['verb', 'meaning', 'perfect'], [['inpakken', 'to pack', '*ingepakt'], ['uitpakken', 'to unpack', '*uitgepakt'], ['ophalen', 'to pick up', '*opgehaald'], ['wegbrengen', 'to drop off', '*weggebracht'], ['terugbrengen', 'to return', '*teruggebracht'], ['meebrengen', 'to bring along', '*meegebracht'], ['opzoeken', 'to look up', '*opgezocht'], ['uitzoeken', 'to find out', '*uitgezocht'], ['terugkomen', 'to come back', '*teruggekomen (zijn)'], ['weggaan', 'to leave', '*weggegaan (zijn)'], ['afspreken', 'to arrange to meet', '*afgesproken']]),
    ex(['Heb je je koffer al ingepakt?', 'Have you packed your suitcase yet?'], ['Mijn zus haalt ons van Schiphol op.', 'My sister is picking us up from Schiphol.'], ['We zijn zondag teruggekomen.', 'We came back on Sunday.'], ['Ik moet de huurauto nog terugbrengen.', 'I still have to return the rental car.'], ['Ze heeft een souvenir voor ons meegebracht.', 'She brought a souvenir for us.']),
    tip('Stress test: if the prefix is stressed (ÓPhalen, ÍNpakken), the verb separates. Unstressed prefixes (verGÉten, beTÁlen) never split.'),
  ], ['g2-separable-tenses', 'g2-two-verbs'], ['inpakken', 'uitpakken', 'ophalen', 'wegbrengen', 'terugbrengen', 'opzoeken', 'meebrengen', 'uitzoeken', 'aanbellen', 'afspreken', 'terugkomen', 'weggaan', 'rugzak', 'huurauto', 'souvenir', 'route'], [
    conj('inpakken', 'ik', 'pres', ['pak in'], 'Present: prefix at the end: ik pak in.'),
    conj('ophalen', 'hij', 'pres', ['haalt op'], 'hij haalt op.'),
    conj('inpakken', 'ik', 'perf', ['heb ingepakt'], 'Perfect: in + ge + pakt, one word.'),
    conj('terugkomen', 'wij', 'perf', ['zijn teruggekomen'], 'komen takes zijn; terug + ge + komen.'),
    conj('meebrengen', 'zij', 'perf', ['heeft meegebracht', 'hebben meegebracht'], 'brengen → gebracht; mee + gebracht.'),
    conj('ophalen', 'ik', 'past', ['haalde op'], 'Past: haalde … op.'),
    conj('weggaan', 'wij', 'past', ['gingen weg'], 'gaan → gingen; prefix at the end.'),
    fill('Ik ___ mijn koffer morgen in. (inpakken)', ['pak'], 'I will pack my suitcase tomorrow.', 'Present tense: ik pak … in. The prefix in stays at the end.'),
    fill('Heb je de route al ___? (opzoeken)', ['opgezocht'], 'Have you looked up the route yet?', 'op + ge + zocht.'),
    fill('We zijn gisteren ___. (terugkomen)', ['teruggekomen'], 'We came back yesterday.', 'terug + gekomen: two g’s.'),
    fill('Ik moet de auto nog ___. (terugbrengen)', ['terugbrengen'], 'I still have to return the car.', 'After a modal: whole infinitive, one word, at the end.'),
    build('My brother picks me up from the airport.', 'Mijn broer haalt me van het vliegveld op.', ['ophaalt', 'opgehaald'], 'haalt … op.'),
    build('She brought cheese from France.', 'Ze heeft kaas uit Frankrijk meegebracht.', ['brengt mee', 'gemeebracht'], 'meegebracht: ge in the middle.'),
    build('We have to unpack first.', 'We moeten eerst uitpakken.', ['pakken uit', 'uitgepakt'], 'Modal + infinitive uitpakken at the end.'),
    build('Someone rang the doorbell at midnight.', 'Iemand belde om middernacht aan.', ['aanbelde', 'aangebeld'], 'Past: belde … aan.'),
    mc('Which is correct?', ['Ik heb de sleutel geopgehaald.', 'Ik heb de sleutel opgehaald.', 'Ik heb de sleutel gehaald op.'], 1, 'Prefix + ge + participle as one word.'),
    mc('Which verb does NOT separate?', ['ophalen', 'vergeten', 'inpakken'], 1, 'ver- is unstressed and inseparable.'),
    tr('en-nl', 'When are you coming back?', ['Wanneer kom je terug?'], 'kom … terug.'),
    tr('nl-en', 'Ik heb uitgezocht hoe laat de bus gaat.', ['I found out what time the bus goes.', 'I have found out what time the bus leaves.'], 'uitzoeken = to find out.'),
    fix('Ik heb mijn koffer gepakt in.', ['Ik heb mijn koffer ingepakt.'], 'Perfect: ingepakt, one word.'),
    fix('Hij haalt op mij van het station.', ['Hij haalt mij van het station op.', 'Hij haalt me van het station op.'], 'Prefix op at the very end.'),
    dict('We hebben om drie uur bij de receptie afgesproken.', 'We arranged to meet at reception at three.', 'af + ge + sproken.'),
    listen('Ik breng je morgen naar het vliegveld weg.', ['I will drop you off at the airport tomorrow.', 'I will pick you up from the airport tomorrow.', 'I am flying tomorrow.'], 0, 'wegbrengen = to drop off.'),
    speak('Ik moet nog inpakken. Morgen haalt mijn broer me om zes uur op.', 'I still have to pack. Tomorrow my brother is picking me up at six.'),
    auto(3, ['conj', 'tr-nl-en']),
  ], [
    conj('ophalen', 'jij', 'perf', ['hebt opgehaald'], 'opgehaald.'),
    conj('weggaan', 'ik', 'perf', ['ben weggegaan'], 'gaan → zijn; weg + gegaan.'),
    conj('uitpakken', 'zij', 'pres', ['pakt uit', 'pakken uit'], 'pakt … uit / pakken … uit.'),
    fill('Kun je me morgen ___? (ophalen)', ['ophalen'], 'Can you pick me up tomorrow?', 'After kunnen: one word at the end.'),
    build('We came back on Sunday.', 'We zijn zondag teruggekomen.', ['hebben', 'terug gekomen'], 'teruggekomen, one word.'),
    speak('Heb je alles ingepakt? Ja, en ik heb de route opgezocht.', 'Have you packed everything? Yes, and I have looked up the route.'),
  ]));

  u2.push(lesson('s2u2l4', 'At the station and the hotel', 'You can buy a ticket, ask about platforms and changes, check into a hotel and solve a small problem with the room.', [
    h('At the station'),
    table(['Dutch', 'English'], [['*Een retour Utrecht, alstublieft.', 'A return to Utrecht, please.'], ['*Een enkele reis naar Leiden.', 'A single to Leiden.'], ['*Hoe laat vertrekt de trein naar Groningen?', 'What time does the train to Groningen leave?'], ['*Van welk spoor?', 'From which platform?'], ['*Moet ik overstappen?', 'Do I have to change?'], ['*Is deze plaats vrij?', 'Is this seat free?'], ['*Er is een storing tussen Amsterdam en Utrecht.', 'There is a disruption between Amsterdam and Utrecht.']]),
    p('In the Netherlands most people travel with an **OV-chipkaart** or a bank card: `inchecken` when you enter, `uitchecken` when you leave. Forget to check out and you pay the maximum fare.'),
    h('At the hotel'),
    table(['Dutch', 'English'], [['*Ik heb een kamer gereserveerd op naam van Smith.', 'I booked a room in the name of Smith.'], ['*Een tweepersoonskamer voor twee nachten.', 'A double room for two nights.'], ['*Is het ontbijt inclusief?', 'Is breakfast included?'], ['*Wat is het wachtwoord van de wifi?', 'What is the wifi password?'], ['*De douche doet het niet.', 'The shower is not working.'], ['*Kunnen we extra handdoeken krijgen?', 'Can we get extra towels?'], ['*Hoe laat moeten we uitchecken?', 'What time do we have to check out?']]),
    p('`Het doet het niet` = it is not working. Useful for the shower, the wifi, the lift and the key card.'),
    ex(['Goedemiddag, ik heb een kamer gereserveerd op naam van Jones.', 'Good afternoon, I booked a room in the name of Jones.'], ['Uw kamer is nummer 12, op de eerste verdieping.', 'Your room is number 12, on the first floor.'], ['Sorry, deze plaats is bezet.', 'Sorry, this seat is taken.'], ['De trein naar Rotterdam vertrekt van spoor 4 en heeft tien minuten vertraging.', 'The train to Rotterdam leaves from platform 4 and is ten minutes late.']),
    tip('Politeness formula: `Ik zou graag …` (I would like …) works everywhere: `Ik zou graag een retour naar Haarlem.`'),
  ], ['g2-imperative', 'g2-time-expressions'], ['receptie', 'reservering', 'tweepersoonskamer', 'douche', 'handdoek', 'wifi', 'wachtwoord', 'enkele-reis', 'retour', 'ov-chipkaart', 'plaats', 'conducteur', 'storing', 'bezet', 'vrij', 'inclusief', 'ph-hoe-laat-vertrekt', 'ph-welk-spoor', 'ph-kamer-gereserveerd', 'ph-overstappen'], [
    mc('You want to go to Utrecht and come back today. You ask for:', ['een enkele reis Utrecht', 'een retour Utrecht', 'een storing Utrecht'], 1, 'retour = return ticket.'),
    mc('"Is deze plaats vrij?" The seat is taken. You hear:', ['Ja, ga je gang.', 'Nee, sorry, die is bezet.', 'Van spoor vijf.'], 1, 'bezet = occupied.'),
    mc('"De douche doet het niet" means', ['the shower is not working', 'the shower is not clean', 'there is no shower'], 0, 'het doet het niet = it does not work.'),
    fill('Hoe laat ___ de trein naar Den Haag?', ['vertrekt'], 'What time does the train to The Hague leave?', 'vertrekken → vertrekt.'),
    fill('Van welk ___ vertrekt hij?', ['spoor', 'perron'], 'Which platform does it leave from?', 'spoor (track) is what the boards say; perron = platform.'),
    fill('Ik heb een kamer ___ op naam van Brown. (reserveren)', ['gereserveerd'], 'I booked a room in the name of Brown.', 'reserveer + d: gereserveerd.'),
    fill('Is het ontbijt ___?', ['inclusief'], 'Is breakfast included?', 'inclusief = included.'),
    fill('Vergeet niet ___ te checken als je uit de tram stapt.', ['uit'], 'Do not forget to check out when you get off the tram.', 'uitchecken, split by te: uit te checken.'),
    build('Do I have to change in Utrecht?', 'Moet ik in Utrecht overstappen?', ['stap over', 'overstap'], 'Modal + overstappen at the end.'),
    build('A double room for three nights, please.', 'Een tweepersoonskamer voor drie nachten, graag.', ['nacht', 'alsjeblieft'], 'voor + drie nachten.'),
    build('What is the wifi password?', 'Wat is het wachtwoord van de wifi?', ['de wachtwoord', 'voor'], 'het wachtwoord van de wifi.'),
    build('Can we get extra towels?', 'Kunnen we extra handdoeken krijgen?', ['krijg', 'handdoek'], 'kunnen … krijgen.'),
    tr('en-nl', 'A single to Leiden, please.', ['Een enkele reis naar Leiden, alstublieft.', 'Een enkele reis Leiden, alstublieft.', 'Een enkele reis naar Leiden, graag.'], 'enkele reis = single.'),
    tr('nl-en', 'Er is een storing tussen Amsterdam en Utrecht.', ['There is a disruption between Amsterdam and Utrecht.', 'There is a breakdown between Amsterdam and Utrecht.'], 'storing = disruption.'),
    fix('Ik heb gereserveerd een kamer.', ['Ik heb een kamer gereserveerd.'], 'Participle at the end.'),
    dict('De trein naar Rotterdam vertrekt van spoor vier.', 'The train to Rotterdam leaves from platform four.', 'vertrekt van spoor vier.'),
    listen('Uw kamer is op de tweede verdieping. Het ontbijt is van zeven tot tien.', ['Your room is on the second floor. Breakfast is from seven to ten.', 'Your room is on the first floor. Breakfast is at seven.', 'Your room is ready at ten.'], 0, 'tweede verdieping; van zeven tot tien.'),
    speak('Goedemiddag, ik heb een kamer gereserveerd op naam van Taylor.', 'Good afternoon, I booked a room in the name of Taylor.'),
    speak('Hoe laat vertrekt de trein naar Groningen en van welk spoor?', 'What time does the train to Groningen leave and from which platform?'),
    read('Beste gast, welkom in Hotel De Brug. Het ontbijt is elke dag van 7.00 tot 10.30 uur in de zaal naast de receptie. Het wachtwoord van de wifi is "debrug2026". Uitchecken kan tot 11.00 uur. Wilt u later uitchecken? Vraag het dan aan de receptie. Fietsen kunt u huren voor 12 euro per dag. Wij wensen u een fijn verblijf.', [
      { q: 'Until what time is breakfast served?', options: ['10.00', '10.30', '11.00'], answer: 1, explain: '"van 7.00 tot 10.30 uur".' },
      { q: 'What should you do if you want to check out later?', options: ['pay 12 euros', 'ask at reception', 'nothing, it is always possible'], answer: 1, explain: '"Vraag het dan aan de receptie."' },
      { q: 'How much does a bike cost per day?', options: ['10 euros', '12 euros', '20 euros'], answer: 1, explain: '"12 euro per dag".' },
    ], { en: 'Dear guest, welcome to Hotel De Brug. Breakfast is every day from 7.00 to 10.30 in the room next to reception. The wifi password is "debrug2026". Check-out is until 11.00. Would you like to check out later? Then ask at reception. You can rent bikes for 12 euros a day. We wish you a pleasant stay.' }),
    free('Role play: you arrive at a hotel. Say hello, say you have a reservation, ask about breakfast and the wifi.', 'Goedemiddag. Ik heb een kamer gereserveerd op naam van Lee. Is het ontbijt inclusief? En wat is het wachtwoord van de wifi?', 'Good afternoon. I booked a room in the name of Lee. Is breakfast included? And what is the wifi password?', { hints: ['Ik heb een kamer gereserveerd …', 'Is het ontbijt …?', 'Wat is het wachtwoord …?'] }),
    match([['het retour', 'return ticket'], ['de enkele reis', 'single ticket'], ['het spoor', 'platform / track'], ['de storing', 'disruption'], ['bezet', 'taken'], ['de receptie', 'reception']]),
  ], [
    mc('You need to go one way only. You buy:', ['een retour', 'een enkele reis'], 1, 'enkele reis = single.'),
    fill('Moet ik in Utrecht ___?', ['overstappen'], 'Do I have to change in Utrecht?', 'overstappen = to change (trains).'),
    build('The shower is not working.', 'De douche doet het niet.', ['werkt', 'is'], 'doet het niet = is not working.'),
    tr('en-nl', 'Is this seat free?', ['Is deze plaats vrij?', 'Is deze plek vrij?'], 'plaats / plek = seat, spot.'),
    listen('Van welk spoor vertrekt de trein naar Haarlem?', ['Which platform does the train to Haarlem leave from?', 'What time does the train to Haarlem leave?', 'Is this the train to Haarlem?'], 0, 'van welk spoor.'),
    speak('Een retour Utrecht, alstublieft. Moet ik overstappen?', 'A return to Utrecht, please. Do I have to change?'),
  ]));

  units.push(unit('s2u2', 'Op reis', 'travel', u2, [
    conj('vertrekken', 'zij', 'past', ['vertrok', 'vertrokken'], 'vertrok / vertrokken.'),
    conj('inpakken', 'ik', 'perf', ['heb ingepakt'], 'ingepakt.'),
    conj('zullen', 'wij', 'pres', ['zullen'], 'zullen.'),
    fill('Het vliegtuig ___ twee uur vertraging.', ['had', 'heeft'], 'The plane was two hours late.', 'vertraging hebben.'),
    fill('___ we volgend weekend naar het strand gaan?', ['Zullen'], 'Shall we go to the beach next weekend?', 'Zullen we.'),
    fill('Mijn zus ___ me morgen van Schiphol op. (ophalen)', ['haalt'], 'My sister is picking me up from Schiphol tomorrow.', 'zij haalt … op: stem + t, prefix at the end.'),
    build('We flew to Rome last summer.', 'We zijn vorige zomer naar Rome gevlogen.', ['hebben', 'vliegen'], 'zijn gevlogen with a destination.'),
    build('Next year I am going to travel to Japan.', 'Volgend jaar ga ik naar Japan reizen.', ['reis', 'zal'], 'ga … reizen.'),
    build('I have booked a double room.', 'Ik heb een tweepersoonskamer geboekt.', ['boek', 'reserveer'], 'geboekt at the end.'),
    fix('We hebben zondag teruggekomen.', ['We zijn zondag teruggekomen.'], 'komen takes zijn.'),
    fix('Ik zal ophalen je morgen.', ['Ik zal je morgen ophalen.'], 'Infinitive at the end.'),
    tr('en-nl', 'What time does the train to Leiden leave?', ['Hoe laat vertrekt de trein naar Leiden?', 'Hoe laat gaat de trein naar Leiden?'], 'hoe laat vertrekt.'),
    listen('Er is een storing, dus de trein heeft een half uur vertraging.', ['There is a disruption, so the train is half an hour late.', 'There is a storm, so the train is cancelled.', 'The train is half an hour early.'], 0, 'storing; een half uur vertraging.'),
    speak('Vorig jaar zijn we naar Portugal gevlogen. Deze zomer gaan we waarschijnlijk kamperen.', 'Last year we flew to Portugal. This summer we will probably go camping.'),
  ]));

  A.stage('s2', '2', 'A2', 'Elementary', 'The past and the future: perfect and simple past, plans with gaan and zullen, er, object pronouns, comparison and clauses with the verb at the end, across travel, health, housing, work, hobbies, shopping and email.', units, []);
})();
