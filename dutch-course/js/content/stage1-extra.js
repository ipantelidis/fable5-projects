/* Stage 1 (A1) — extra lessons: a fourth lesson for Unit 7 (Het weer) and Unit 8 (Gezondheid).
   Loaded after stage1-u7-8.js; lessons are appended to the existing units. */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson } = A;
  const addTo = (unitId, l) => { const f = A.findUnit(unitId); if (f) f.unit.lessons.push(l); };

  /* ---------------- Unit 7, lesson 4 ---------------- */
  N('seizoen', 'het', 'seizoenen', 'season', 'Wat is je favoriete seizoen?', 'What is your favourite season?', { theme: 'weather', stage: 1 });
  N('ijsje', 'het', 'ijsjes', 'ice cream', 'In de zomer eet ik graag een ijsje.', 'In summer I like eating an ice cream.', { theme: 'food', stage: 1 });
  N('paraplu', 'de', "paraplu's", 'umbrella', 'Neem een paraplu mee.', 'Take an umbrella.', { theme: 'weather', stage: 1 });
  N('zonnebril', 'de', 'zonnebrillen', 'sunglasses', 'Waar is mijn zonnebril?', 'Where are my sunglasses?', { theme: 'weather', stage: 1 });
  N('kachel', 'de', 'kachels', 'heater / stove', 'In de winter zit ik bij de kachel.', 'In winter I sit by the heater.', { theme: 'home', stage: 1 });
  N('feestdag', 'de', 'feestdagen', 'public holiday', 'Op feestdagen zijn de winkels dicht.', 'On public holidays the shops are closed.', { theme: 'time', stage: 1 });
  N('Kerstmis', 'de', null, 'Christmas', 'Met Kerstmis ga ik naar mijn familie.', 'At Christmas I go to my family.', { theme: 'time', stage: 1, altNl: ['kerst'] });
  N('Pasen', 'de', null, 'Easter', 'Met Pasen eten we eieren.', 'At Easter we eat eggs.', { theme: 'time', stage: 1 });
  PH('oud en nieuw', 'New Year’s Eve', 'Met oud en nieuw is er vuurwerk.', 'On New Year’s Eve there are fireworks.', { theme: 'time', stage: 1, id: 'oud-en-nieuw' });
  N('vuurwerk', 'het', null, 'fireworks', 'Het vuurwerk begint om twaalf uur.', 'The fireworks start at twelve.', { theme: 'time', stage: 1 });
  W('buiten', 'outside', 'adv', 'De kinderen spelen buiten.', 'The children are playing outside.', { theme: 'basics', stage: 1 });
  W('binnen', 'inside', 'adv', 'Het regent, we blijven binnen.', 'It is raining, we are staying inside.', { theme: 'basics', stage: 1 });
  W('heerlijk', 'lovely / delicious', 'adj', 'Wat een heerlijk weer!', 'What lovely weather!', { theme: 'feelings', stage: 1 });
  W('vreselijk', 'terrible', 'adj', 'Het weer is vreselijk vandaag.', 'The weather is terrible today.', { theme: 'feelings', stage: 1 });
  VB('picknicken', 'to have a picnic', 'picknick|picknickt|picknicken', 'picknickte|picknickten', 'gepicknickt', 'hebben', 'In de lente picknicken we in het park.', 'In spring we have picnics in the park.', { theme: 'leisure', stage: 1 });
  VB('vieren', 'to celebrate', 'vier|viert|vieren', 'vierde|vierden', 'gevierd', 'hebben', 'We vieren Koningsdag op 27 april.', 'We celebrate King’s Day on 27 April.', { theme: 'time', stage: 1 });

  addTo('s1u7', lesson('s1u7l4', 'Seasons, holidays and what you do', 'You can say what you do in each season and on Dutch holidays, starting your sentence with the time: In de zomer ga ik …', [
    h('Time first, then the verb'),
    p('You know the verb-second rule. It matters most with time phrases, because Dutch loves to start with them: `In de zomer **ga ik** naar het strand.` `Met Kerstmis **eten we** samen.` `Op Koningsdag **draagt iedereen** oranje.` The verb stays second, so the subject moves behind it.'),
    table(['time phrase', 'verb', 'subject', 'rest'], [['*In de winter', '*schaats', '*ik', '*op de gracht.'], ['*Met Pasen', '*eten', '*we', '*eieren.'], ['*Op feestdagen', '*zijn', '*de winkels', '*dicht.']]),
    h('Which preposition?'),
    list('`in` + season or month: `in de lente`, `in juli`', '`op` + day or named day: `op zondag`, `op Koningsdag`', '`met` + holiday period: `met Kerstmis`, `met Pasen`, `met oud en nieuw`'),
    h('The Dutch year'),
    p('`Koningsdag` (27 April), `Bevrijdingsdag` (5 May), `Sinterklaas` (5 December), `Kerstmis` (25 and 26 December: there is a `tweede kerstdag`), `oud en nieuw` with `vuurwerk` and `oliebollen`.'),
    ex(['In de lente picknicken we in het Vondelpark.', 'In spring we have picnics in the Vondelpark.'], ['In de herfst neem ik altijd een paraplu mee.', 'In autumn I always take an umbrella.'], ['Met oud en nieuw eten we oliebollen en kijken we naar het vuurwerk.', 'On New Year’s Eve we eat oliebollen and watch the fireworks.'], ['Op feestdagen rijden er minder trams.', 'On public holidays fewer trams run.']),
    tip('If your sentence starts with anything other than the subject, say the verb next. Every time.'),
  ], ['g1-v2', 'g1-prep-time'], ['seizoen', 'ijsje', 'paraplu', 'zonnebril', 'kachel', 'feestdag', 'kerstmis', 'pasen', 'oud-en-nieuw', 'vuurwerk', 'buiten', 'binnen', 'heerlijk', 'vreselijk', 'picknicken', 'vieren'], [
    mc('Which sentence is correct?', ['In de zomer ik ga naar het strand.', 'In de zomer ga ik naar het strand.', 'In de zomer naar het strand ik ga.'], 1, 'Time first, verb second, then the subject.'),
    mc('___ Kerstmis ga ik naar mijn familie.', ['In', 'Op', 'Met'], 2, 'met + holiday: met Kerstmis.'),
    mc('___ de winter is het vroeg donker.', ['In', 'Op', 'Met'], 0, 'in + season.'),
    mc('___ Koningsdag draagt iedereen oranje.', ['In', 'Op', 'Met'], 1, 'op + named day.'),
    art('seizoen', 'het', 'het seizoen.'),
    art('paraplu', 'de', 'de paraplu.'),
    plural('de feestdag', ['feestdagen'], 'dag → dagen.'),
    fill('In de herfst ___ ik altijd een paraplu mee. (nemen)', ['neem'], 'In autumn I always take an umbrella.', 'Verb second: neem ik.'),
    fill('Het regent, dus we blijven ___. (inside)', ['binnen'], 'It is raining, so we are staying inside.', 'binnen = inside.'),
    fill('Wat een ___ weer! De zon schijnt. (lovely)', ['heerlijk'], 'What lovely weather! The sun is shining.', 'heerlijk; het weer + wat een → no -e.'),
    fill('Met oud en nieuw is er veel ___.', ['vuurwerk'], 'On New Year’s Eve there are a lot of fireworks.', 'het vuurwerk.'),
    build('In spring we have picnics in the park.', 'In de lente picknicken we in het park.', ['we picknicken', 'op'], 'Time first, then picknicken we.'),
    build('On public holidays the shops are closed.', 'Op feestdagen zijn de winkels dicht.', ['de winkels zijn', 'In'], 'op feestdagen + zijn de winkels.'),
    build('In winter I sit by the heater.', 'In de winter zit ik bij de kachel.', ['ik zit', 'met'], 'zit ik.'),
    tr('en-nl', 'What is your favourite season?', ['Wat is je favoriete seizoen?', 'Wat is jouw favoriete seizoen?', 'Wat is je lievelingsseizoen?'], 'het seizoen.'),
    tr('nl-en', 'In de zomer eet ik elke dag een ijsje.', ['In summer I eat an ice cream every day.', 'In the summer I eat an ice cream every day.'], 'ijsje = ice cream.'),
    fix('Met Pasen wij eten eieren.', ['Met Pasen eten wij eieren.', 'Met Pasen eten we eieren.'], 'Inversion after the time phrase.'),
    dict('Met Kerstmis ga ik naar mijn familie in Engeland.', 'At Christmas I go to my family in England.', 'met Kerstmis + ga ik.'),
    listen('In de winter is het vroeg donker en blijven we vaak binnen.', ['In winter it gets dark early and we often stay inside.', 'In winter we are often outside.', 'In summer it is dark early.'], 0, 'vroeg donker; binnen.'),
    speak('In de zomer ga ik graag naar het strand, maar in de winter blijf ik liever binnen.', 'In summer I like going to the beach, but in winter I prefer to stay inside.'),
    free('Say what you do in two different seasons and on one holiday.', 'In de lente fiets ik veel. In de winter lees ik boeken bij de kachel. Met Kerstmis ga ik naar mijn ouders.', 'In spring I cycle a lot. In winter I read books by the heater. At Christmas I go to my parents.', { hints: ['In de … … ik …', 'Met / Op … … ik …'] }),
    auto(3, ['tr-nl-en', 'mc-meaning', 'listen']),
  ], [
    mc('Which is correct?', ['Op zondag ik slaap lang.', 'Op zondag slaap ik lang.'], 1, 'Verb second.'),
    fill('___ de lente bloeien de tulpen.', ['In'], 'In spring the tulips bloom.', 'in + season.'),
    build('At Easter we eat eggs.', 'Met Pasen eten we eieren.', ['we eten', 'In'], 'met Pasen + eten we.'),
    tr('en-nl', 'The children are playing outside.', ['De kinderen spelen buiten.'], 'buiten.'),
    listen('Neem een paraplu mee, het weer is vreselijk.', ['Take an umbrella, the weather is terrible.', 'Take sunglasses, the weather is lovely.', 'Leave the umbrella at home.'], 0, 'paraplu; vreselijk.'),
    speak('Op Koningsdag draagt iedereen oranje en is het overal feest.', 'On King’s Day everyone wears orange and there is a party everywhere.'),
  ]));

  /* ---------------- Unit 8, lesson 4 ---------------- */
  N('gewoonte', 'de', 'gewoontes', 'habit', 'Vroeg opstaan is een goede gewoonte.', 'Getting up early is a good habit.', { theme: 'health', stage: 1 });
  N('advies', 'het', 'adviezen', 'advice', 'Dank je voor het advies.', 'Thanks for the advice.', { theme: 'health', stage: 1 });
  N('groente', 'de', 'groenten', 'vegetable(s)', 'Eet elke dag groente.', 'Eat vegetables every day.', { theme: 'food', stage: 1 });
  N('fruit', 'het', null, 'fruit', 'Ik eet veel fruit.', 'I eat a lot of fruit.', { theme: 'food', stage: 1 });
  N('tandenborstel', 'de', 'tandenborstels', 'toothbrush', 'Ik heb een nieuwe tandenborstel nodig.', 'I need a new toothbrush.', { theme: 'health', stage: 1 });
  N('nachtrust', 'de', null, 'night’s sleep', 'Een goede nachtrust is belangrijk.', 'A good night’s sleep is important.', { theme: 'health', stage: 1 });
  W('ongezond', 'unhealthy', 'adj', 'Te veel suiker is ongezond.', 'Too much sugar is unhealthy.', { theme: 'health', stage: 1 });
  W('fit', 'fit', 'adj', 'Ik voel me fit.', 'I feel fit.', { theme: 'health', stage: 1 });
  W('genoeg', 'enough', 'adv', 'Drink je genoeg water?', 'Do you drink enough water?', { theme: 'basics', stage: 1 });
  W('te veel', 'too much', 'adv', 'Ik drink te veel koffie.', 'I drink too much coffee.', { theme: 'basics', stage: 1, id: 'te-veel' });
  W('te weinig', 'too little', 'adv', 'Ik slaap te weinig.', 'I sleep too little.', { theme: 'basics', stage: 1, id: 'te-weinig' });
  W('elke dag', 'every day', 'adv', 'Ik fiets elke dag naar mijn werk.', 'I cycle to work every day.', { theme: 'time', stage: 1, id: 'elke-dag' });
  W('bijna nooit', 'almost never', 'adv', 'Ik eet bijna nooit vlees.', 'I almost never eat meat.', { theme: 'time', stage: 1, id: 'bijna-nooit' });
  VB('bewegen', 'to move / exercise', 'beweeg|beweegt|bewegen', 'bewoog|bewogen', 'bewogen', 'hebben', 'Je moet elke dag bewegen.', 'You have to exercise every day.', { theme: 'health', stage: 1 });
  VB('stoppen', 'to stop', 'stop|stopt|stoppen', 'stopte|stopten', 'gestopt', 'zijn', 'Ik wil stoppen met roken.', 'I want to stop smoking.', { theme: 'health', stage: 1 });
  VB('proberen', 'to try', 'probeer|probeert|proberen', 'probeerde|probeerden', 'geprobeerd', 'hebben', 'Ik probeer gezond te eten.', 'I try to eat healthily.', { theme: 'basics', stage: 1 });

  addTo('s1u8', lesson('s1u8l4', 'Healthy habits: advice with moeten, mogen and kunnen', 'You can talk about your habits with frequency words and give simple health advice: je moet meer slapen, je mag niet roken.', [
    h('Advice with modal verbs'),
    table(['Dutch', 'English', 'strength'], [['*Je moet meer slapen.', 'You have to sleep more.', 'strong'], ['*Je kunt beter thuisblijven.', 'You had better stay home.', 'friendly advice'], ['*Je mag hier niet roken.', 'You may not smoke here.', 'rule'], ['*Je moet niet zo veel werken.', 'You should not work so much.', 'advice against']]),
    p('The modal verb is second, the other verb goes to the **end** as an infinitive: `Je **moet** elke dag groente **eten**.` `kunnen` + `beter` is the soft way to advise: `Je kunt beter naar de dokter gaan.`'),
    h('How often? How much?'),
    table(['Dutch', 'English'], [['*altijd', 'always'], ['*elke dag', 'every day'], ['*vaak', 'often'], ['*soms', 'sometimes'], ['*bijna nooit', 'almost never'], ['*nooit', 'never'], ['*genoeg', 'enough'], ['*te veel / te weinig', 'too much / too little']]),
    p('Frequency words come right after the verb (or after the subject when there is inversion): `Ik eet **vaak** fruit.` `Eet je **elke dag** groente?` `Soms **ga ik** naar de sportschool.`'),
    ex(['Ik slaap te weinig en ik drink te veel koffie.', 'I sleep too little and I drink too much coffee.'], ['Je moet elke dag een half uur bewegen.', 'You have to exercise half an hour every day.'], ['Je kunt beter stoppen met roken.', 'You had better stop smoking.'], ['Ik eet bijna nooit vlees, maar wel veel groente en fruit.', 'I almost never eat meat, but I do eat a lot of vegetables and fruit.']),
    tip('`Je kunt beter …` is the advice Dutch people give each other all day. It is never rude.'),
  ], ['g1-modals', 'g1-adverbs'], ['gewoonte', 'advies', 'groente', 'fruit', 'tandenborstel', 'nachtrust', 'ongezond', 'fit', 'genoeg', 'te-veel', 'te-weinig', 'elke-dag', 'bijna-nooit', 'bewegen', 'stoppen', 'proberen'], [
    mc('Which sentence is correct?', ['Je moet slapen meer.', 'Je moet meer slapen.', 'Je meer moet slapen.'], 1, 'Modal second, infinitive at the end.'),
    mc('Soft advice:', ['Je moet naar de dokter.', 'Je kunt beter naar de dokter gaan.', 'Ga naar de dokter!'], 1, 'kunnen + beter.'),
    mc('"Je mag hier niet roken" means', ['you do not have to smoke here', 'you may not smoke here', 'you cannot smoke well here'], 1, 'mogen + niet = not allowed.'),
    mc('"Bijna nooit" means', ['almost always', 'almost never', 'not yet'], 1, 'bijna = almost.'),
    conj('moeten', 'jij', 'pres', ['moet'], 'jij moet: the stem already ends in -t.'),
    conj('mogen', 'wij', 'pres', ['mogen'], 'Plural: mogen.'),
    art('advies', 'het', 'het advies.'),
    art('groente', 'de', 'de groente.'),
    fill('Ik drink ___ veel koffie. (too)', ['te'], 'I drink too much coffee.', 'te veel.'),
    fill('Je ___ beter thuisblijven. (kunnen)', ['kunt', 'kan'], 'You had better stay home.', 'je kunt / je kan.'),
    fill('Drink je ___ water? (enough)', ['genoeg'], 'Do you drink enough water?', 'genoeg.'),
    fill('Ik wil ___ met roken. (stop)', ['stoppen'], 'I want to stop smoking.', 'wil + infinitive; stoppen met.'),
    build('You have to eat vegetables every day.', 'Je moet elke dag groente eten.', ['eet', 'moeten'], 'moet … eten.'),
    build('I almost never eat meat.', 'Ik eet bijna nooit vlees.', ['nooit bijna', 'niet'], 'bijna nooit after the verb.'),
    build('Sometimes I go to the gym.', 'Soms ga ik naar de sportschool.', ['ik ga', 'soms ik'], 'Soms first, then the verb.'),
    tr('en-nl', 'I sleep too little.', ['Ik slaap te weinig.'], 'te weinig.'),
    tr('nl-en', 'Vroeg opstaan is een goede gewoonte.', ['Getting up early is a good habit.'], 'gewoonte = habit.'),
    fix('Je moet te slapen meer.', ['Je moet meer slapen.'], 'No te after a modal; infinitive at the end.'),
    dict('Je kunt beter stoppen met roken en meer bewegen.', 'You had better stop smoking and exercise more.', 'kunt beter; stoppen met.'),
    listen('Ik eet elke dag fruit, maar ik slaap te weinig.', ['I eat fruit every day, but I sleep too little.', 'I never eat fruit, but I sleep a lot.', 'I sleep enough and eat fruit sometimes.'], 0, 'elke dag; te weinig.'),
    speak('Ik probeer gezond te eten, maar ik drink te veel koffie en ik slaap te weinig.', 'I try to eat healthily, but I drink too much coffee and I sleep too little.'),
    free('Describe two good habits and one bad habit of yours, and give yourself one piece of advice.', 'Ik fiets elke dag en ik eet veel groente. Maar ik ga te laat naar bed. Ik kan beter om elf uur gaan slapen.', 'I cycle every day and I eat a lot of vegetables. But I go to bed too late. I had better go to sleep at eleven.', { hints: ['Ik … elke dag', 'Ik … te veel / te weinig', 'Ik kan beter …'] }),
    match([['elke dag', 'every day'], ['bijna nooit', 'almost never'], ['te veel', 'too much'], ['te weinig', 'too little'], ['genoeg', 'enough'], ['de gewoonte', 'habit']]),
    auto(3, ['tr-nl-en', 'article']),
  ], [
    mc('Which is correct?', ['Je mag niet hier roken.', 'Je mag hier niet roken.'], 1, 'Place before niet + verb.'),
    fill('Je ___ meer water drinken. (must)', ['moet'], 'You have to drink more water.', 'moet.'),
    build('You had better go to the doctor.', 'Je kunt beter naar de dokter gaan.', ['gaat', 'goed'], 'kunt beter … gaan.'),
    tr('en-nl', 'I eat too much sugar.', ['Ik eet te veel suiker.'], 'te veel.'),
    listen('Een goede nachtrust is belangrijk, dus ga op tijd naar bed.', ['A good night’s sleep is important, so go to bed on time.', 'Sleep is not important.', 'Go to bed late.'], 0, 'nachtrust; op tijd.'),
    speak('Je moet genoeg slapen, gezond eten en elke dag een beetje bewegen.', 'You have to sleep enough, eat healthily and exercise a little every day.'),
  ]));
})();
