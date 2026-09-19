/* Stage 3 (B1) — Unit 1: Nieuws en samenleving · Unit 2: Meningen en discussies · Unit 3: Onderwijs · Unit 4: Gezondheid en levensstijl
   Two full lessons per unit; further lessons are listed in content/TODO.md */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = (NL.content._s3units = NL.content._s3units || []);

  /* ---------------- Unit 1: Nieuws en samenleving ---------------- */
  N('nieuws', 'het', null, 'news', 'Heb je het nieuws gezien?', 'Did you see the news?', { theme: 'news', stage: 3 });
  N('krant', 'de', 'kranten', 'newspaper', 'Ik lees de krant op mijn telefoon.', 'I read the newspaper on my phone.', { theme: 'news', stage: 3 });
  N('journalist', 'de', 'journalisten', 'journalist', 'De journalist die het artikel schreef, is bekend.', 'The journalist who wrote the article is well known.', { theme: 'news', stage: 3 });
  N('artikel', 'het', 'artikelen', 'article', 'Het artikel dat ik las, ging over woningnood.', 'The article I read was about the housing shortage.', { theme: 'news', stage: 3 });
  N('kop', 'de', 'koppen', 'headline', 'De kop was misleidend.', 'The headline was misleading.', { theme: 'news', stage: 3 });
  N('samenleving', 'de', 'samenlevingen', 'society', 'De samenleving verandert snel.', 'Society is changing fast.', { theme: 'society', stage: 3 });
  N('overheid', 'de', 'overheden', 'government (the state)', 'De overheid investeert in woningbouw.', 'The government is investing in housing construction.', { theme: 'society', stage: 3 });
  N('regering', 'de', 'regeringen', 'government (cabinet)', 'De regering is gevallen.', 'The government has fallen.', { theme: 'society', stage: 3 });
  N('verkiezingen', 'de', 'verkiezingen', 'elections', 'De verkiezingen zijn in maart.', 'The elections are in March.', { theme: 'society', stage: 3, note: 'Usually plural.' });
  N('partij', 'de', 'partijen', 'party (political)', 'Op welke partij stem je?', 'Which party do you vote for?', { theme: 'society', stage: 3 });
  N('woningnood', 'de', null, 'housing shortage', 'De woningnood is in Amsterdam het grootst.', 'The housing shortage is biggest in Amsterdam.', { theme: 'society', stage: 3 });
  N('inwoner', 'de', 'inwoners', 'inhabitant', 'Amsterdam heeft ruim 900.000 inwoners.', 'Amsterdam has over 900,000 inhabitants.', { theme: 'society', stage: 3 });
  N('bevolking', 'de', null, 'population', 'De bevolking groeit.', 'The population is growing.', { theme: 'society', stage: 3 });
  N('maatregel', 'de', 'maatregelen', 'measure', 'De gemeente neemt maatregelen tegen overlast.', 'The municipality is taking measures against nuisance.', { theme: 'society', stage: 3 });
  VB('stemmen', 'to vote', 'stem|stemt|stemmen', 'stemde|stemden', 'gestemd', 'hebben', 'Ik mag als EU-burger stemmen voor de gemeenteraad.', 'As an EU citizen I may vote for the municipal council.', { theme: 'society', stage: 3 });
  VB('berichten', 'to report', 'bericht|bericht|berichten', 'berichtte|berichtten', 'bericht', 'hebben', 'De krant berichtte over de staking.', 'The newspaper reported on the strike.', { theme: 'news', stage: 3 });
  VB('beweren', 'to claim', 'beweer|beweert|beweren', 'beweerde|beweerden', 'beweerd', 'hebben', 'De minister beweert dat het probleem is opgelost.', 'The minister claims the problem has been solved.', { theme: 'news', stage: 3 });
  VB('stijgen', 'to rise', 'stijg|stijgt|stijgen', 'steeg|stegen', 'gestegen', 'zijn', 'De huren zijn weer gestegen.', 'Rents have risen again.', { theme: 'news', stage: 3 });
  VB('dalen', 'to fall / decrease', 'daal|daalt|dalen', 'daalde|daalden', 'gedaald', 'zijn', 'De werkloosheid is gedaald.', 'Unemployment has fallen.', { theme: 'news', stage: 3 });
  W('betrouwbaar', 'reliable', 'adj', 'Is die bron betrouwbaar?', 'Is that source reliable?', { theme: 'news', stage: 3 });
  W('volgens', 'according to', 'prep', 'Volgens de krant stijgen de prijzen.', 'According to the newspaper prices are rising.', { theme: 'news', stage: 3 });

  N('staking', 'de', 'stakingen', 'strike', 'Door de staking rijden er geen treinen.', 'Because of the strike no trains are running.', { theme: 'news', stage: 3 });
  N('demonstratie', 'de', 'demonstraties', 'demonstration', 'Er werd een demonstratie gehouden op de Dam.', 'A demonstration was held on the Dam.', { theme: 'news', stage: 3 });
  N('ongeluk', 'het', 'ongelukken', 'accident', 'Bij het ongeluk raakte niemand gewond.', 'Nobody was injured in the accident.', { theme: 'news', stage: 3 });
  N('brand', 'de', 'branden', 'fire', 'De brand werd snel geblust.', 'The fire was quickly put out.', { theme: 'news', stage: 3 });
  N('politie', 'de', null, 'police', 'De politie heeft twee verdachten aangehouden.', 'The police have arrested two suspects.', { theme: 'news', stage: 3 });
  N('verdachte', 'de', 'verdachten', 'suspect', 'De verdachte werd verhoord.', 'The suspect was questioned.', { theme: 'news', stage: 3 });
  N('slachtoffer', 'het', 'slachtoffers', 'victim', 'De slachtoffers zijn naar het ziekenhuis gebracht.', 'The victims were taken to hospital.', { theme: 'news', stage: 3 });
  N('onderzoek', 'het', 'onderzoeken', 'investigation / research', 'Er wordt onderzoek gedaan naar de oorzaak.', 'An investigation is being carried out into the cause.', { theme: 'news', stage: 3 });
  N('oorzaak', 'de', 'oorzaken', 'cause', 'De oorzaak van de brand is nog onbekend.', 'The cause of the fire is still unknown.', { theme: 'news', stage: 3 });
  N('gevolg', 'het', 'gevolgen', 'consequence', 'De gevolgen voor het verkeer waren groot.', 'The consequences for traffic were serious.', { theme: 'news', stage: 3 });
  VB('aanhouden', 'to arrest', 'houd aan|houdt aan|houden aan', 'hield aan|hielden aan', 'aangehouden', 'hebben', 'De politie hield een man aan.', 'The police arrested a man.', { theme: 'news', stage: 3 });
  VB('gewond raken', 'to get injured', 'raak gewond|raakt gewond|raken gewond', 'raakte gewond|raakten gewond', 'gewond geraakt', 'zijn', 'Drie mensen raakten gewond.', 'Three people were injured.', { theme: 'news', stage: 3, id: 'gewond-raken' });
  VB('blussen', 'to put out (fire)', 'blus|blust|blussen', 'bluste|blusten', 'geblust', 'hebben', 'De brandweer bluste het vuur.', 'The fire brigade put out the fire.', { theme: 'news', stage: 3 });
  VB('afsluiten', 'to close off', 'sluit af|sluit af|sluiten af', 'sloot af|sloten af', 'afgesloten', 'hebben', 'De weg werd afgesloten.', 'The road was closed off.', { theme: 'news', stage: 3 });
  VB('bekendmaken', 'to announce', 'maak bekend|maakt bekend|maken bekend', 'maakte bekend|maakten bekend', 'bekendgemaakt', 'hebben', 'De uitslag wordt morgen bekendgemaakt.', 'The result will be announced tomorrow.', { theme: 'news', stage: 3 });
  N('brandweer', 'de', null, 'fire brigade', 'De brandweer was snel ter plaatse.', 'The fire brigade was quickly on the scene.', { theme: 'news', stage: 3 });
  W('gewond', 'injured', 'adj', 'De gewonde fietser is naar het ziekenhuis gebracht.', 'The injured cyclist was taken to hospital.', { theme: 'news', stage: 3 });
  W('onbekend', 'unknown', 'adj', 'De dader is nog onbekend.', 'The perpetrator is still unknown.', { theme: 'news', stage: 3 });
  W('inmiddels', 'by now / meanwhile', 'adv', 'De weg is inmiddels weer open.', 'The road is open again by now.', { theme: 'time', stage: 3 });
  W('vermoedelijk', 'presumably', 'adv', 'De brand is vermoedelijk aangestoken.', 'The fire was presumably started deliberately.', { theme: 'news', stage: 3 });

  const u1 = [];
  u1.push(lesson('s3u1l1', 'Reading the news: relative clauses with die and dat', 'You can follow a news item and talk about it, describing people and things with relative clauses (de man die …, het artikel dat …).', [
    h('die and dat'),
    p('A relative clause hangs extra information on a noun and sends its verb to the end. `die` for de-words and plurals, `dat` for het-words, `wat` after `alles`, `iets`, `niets`, `het enige`.'),
    table(['', 'example'], [['de-word', '*De journalist die dit schreef, werkt voor de NOS.'], ['plural', '*De maatregelen die de gemeente neemt, zijn omstreden.'], ['het-word', '*Het artikel dat ik las, was betrouwbaar.'], ['indefinite', '*Alles wat hij beweert, klopt niet.']]),
    p('The clause sits right behind its noun, often in the middle of the sentence: `De partij **die de verkiezingen won,** vormt nu een regering.`'),
    h('News language'),
    p('`Volgens de krant …` (according to the newspaper), `De overheid neemt maatregelen`, `De huren stijgen / dalen`, `De minister beweert dat …`. Dutch news uses the present tense for headlines and the perfect or simple past in the text.'),
    ex(['De woningnood, die al jaren groeit, is het grootste probleem van de stad.', 'The housing shortage, which has been growing for years, is the city’s biggest problem.'], ['Ik las een artikel dat beweert dat de bevolking in 2030 een miljoen is.', 'I read an article that claims the population will be one million in 2030.'], ['Als EU-burger mag je stemmen bij de verkiezingen die over de gemeenteraad gaan.', 'As an EU citizen you may vote in the elections that are about the municipal council.']),
    tip('Test: could you replace the noun with "het"? Then dat. Otherwise die.'),
  ], ['g3-relative'], ['nieuws', 'krant', 'journalist', 'artikel', 'kop', 'samenleving', 'overheid', 'regering', 'verkiezingen', 'partij', 'woningnood', 'inwoner', 'bevolking', 'maatregel', 'stemmen', 'berichten', 'beweren', 'stijgen', 'dalen', 'betrouwbaar', 'volgens'], [
    mc('De journalist ___ dit schreef, is bekend.', ['die', 'dat', 'wat'], 0, 'de journalist → die.'),
    mc('Het artikel ___ ik gisteren las, was lang.', ['die', 'dat', 'wie'], 1, 'het artikel → dat.'),
    mc('Alles ___ hij zegt, is waar.', ['die', 'dat', 'wat'], 2, 'alles → wat.'),
    mc('Which is correct?', ['De partij die won de verkiezingen, is klein.', 'De partij die de verkiezingen won, is klein.', 'De partij won die de verkiezingen, is klein.'], 1, 'Verb at the end of the relative clause: won.'),
    fill('De maatregelen ___ de overheid neemt, zijn omstreden.', ['die'], 'The measures the government is taking are controversial.', 'plural → die.'),
    fill('Het nieuws ___ ik vanmorgen hoorde, was slecht.', ['dat'], 'The news I heard this morning was bad.', 'het nieuws → dat.'),
    fill('De huren zijn vorig jaar weer ___. (stijgen)', ['gestegen'], 'Rents rose again last year.', 'stijgen → gestegen, with zijn.'),
    fill('___ de krant is de werkloosheid gedaald.', ['Volgens'], 'According to the newspaper unemployment has fallen.', 'volgens = according to.'),
    build('The article that I read was reliable.', 'Het artikel dat ik las, was betrouwbaar.', ['die', 'las ik'], 'dat … las; then was.'),
    build('The party that won the elections is small.', 'De partij die de verkiezingen won, is klein.', ['dat', 'won de'], 'die … won.'),
    build('Prices are rising faster than wages.', 'De prijzen stijgen sneller dan de lonen.', ['dalen', 'als'], 'stijgen; sneller dan.'),
    tr('en-nl', 'The minister claims that the problem has been solved.', ['De minister beweert dat het probleem is opgelost.', 'De minister beweert dat het probleem opgelost is.'], 'beweren dat; is opgelost.'),
    tr('nl-en', 'De stad waar ik woon, heeft bijna een miljoen inwoners.', ['The city where I live has almost a million inhabitants.', 'The city I live in has nearly a million inhabitants.'], 'waar = where; inwoners.'),
    fix('Het artikel die ik las was interessant.', ['Het artikel dat ik las, was interessant.', 'Het artikel dat ik las was interessant.'], 'het artikel → dat.'),
    fix('De man die woont naast ons is journalist.', ['De man die naast ons woont, is journalist.', 'De man die naast ons woont is journalist.'], 'Verb at the end of the relative clause.'),
    dict('De overheid neemt maatregelen tegen de woningnood.', 'The government is taking measures against the housing shortage.', 'maatregelen; woningnood.'),
    listen('Volgens het onderzoek dat gisteren verscheen, groeit de bevolking van Amsterdam.', ['According to the study that appeared yesterday, Amsterdam’s population is growing.', 'According to yesterday’s newspaper, Amsterdam’s population is shrinking.', 'A study about Amsterdam appears tomorrow.'], 0, 'onderzoek dat … verscheen; groeit.'),
    speak('Ik las een artikel dat beweert dat de huren volgend jaar weer stijgen.', 'I read an article that claims rents will rise again next year.'),
    free('Summarise a news item you saw this week in three sentences, with at least one relative clause.', 'Ik las een artikel over de woningnood. De maatregelen die de gemeente neemt, zijn volgens veel mensen niet genoeg. De huren, die al jaren stijgen, blijven een probleem.', 'I read an article about the housing shortage. The measures the municipality is taking are, according to many people, not enough. Rents, which have been rising for years, remain a problem.', { hints: ['Ik las een artikel dat …', 'De … die …', 'Volgens …'] }),
    auto(3, ['tr-nl-en', 'article']),
  ], [
    mc('De inwoners ___ hier wonen, klagen over lawaai.', ['die', 'dat'], 0, 'plural → die.'),
    mc('Het onderzoek ___ vandaag verscheen, is betrouwbaar.', ['die', 'dat'], 1, 'het onderzoek → dat.'),
    fill('Iets ___ ik niet begrijp: waarom stijgen de huren?', ['wat'], 'Something I do not understand: why are rents rising?', 'iets → wat.'),
    build('The newspaper I read is reliable.', 'De krant die ik lees, is betrouwbaar.', ['dat', 'lees ik'], 'die … lees.'),
    tr('en-nl', 'According to the news, the elections are in March.', ['Volgens het nieuws zijn de verkiezingen in maart.'], 'volgens + inversion.'),
    speak('De partij die de verkiezingen won, wil de woningnood aanpakken.', 'The party that won the elections wants to tackle the housing shortage.'),
  ]));

  u1.push(lesson('s3u1l2', 'Headlines and reports: the passive with worden', 'You can understand and produce news-style sentences in the passive: de weg wordt afgesloten, de verdachte werd aangehouden, de brand is geblust.', [
    h('wordt, werd, is'),
    table(['tense', 'form', 'example'], [['present', 'wordt / worden + participle', '*De weg wordt afgesloten.'], ['past', 'werd / werden + participle', '*De verdachte werd aangehouden.'], ['perfect (result)', 'is / zijn + participle', '*De brand is geblust.'], ['with modal', 'moet / kan + participle + worden', '*De oorzaak moet onderzocht worden.']]),
    p('The perfect passive drops "geworden": `De weg **is** afgesloten` = has been closed. `door` names the doer: `De brand werd **door** de brandweer geblust.` When there is no subject at all, use `er`: `Er wordt onderzoek gedaan.` `Er werd niemand gewond.`'),
    h('Why news loves the passive'),
    p('The doer is often unknown or unimportant: `Twee fietsen werden gestolen.` `De slachtoffers zijn naar het ziekenhuis gebracht.` `Er wordt onderzoek gedaan naar de oorzaak.`'),
    ex(['Bij een brand in Amsterdam-Noord zijn vannacht drie mensen gewond geraakt. De brand werd rond vier uur geblust.', 'In a fire in Amsterdam-Noord three people were injured last night. The fire was put out around four o’clock.'], ['De A10 wordt dit weekend afgesloten voor onderhoud.', 'The A10 is being closed this weekend for maintenance.'], ['Er wordt gezegd dat de staking morgen doorgaat.', 'It is said that the strike will go ahead tomorrow.'], ['De uitslag van de verkiezingen is inmiddels bekendgemaakt.', 'The election result has by now been announced.']),
    tip('Recipe: object first, form of worden second, participle last. `De politie houdt de man aan` → `De man wordt (door de politie) aangehouden.`'),
  ], ['g3-passive'], ['staking', 'demonstratie', 'ongeluk', 'brand', 'politie', 'verdachte', 'slachtoffer', 'onderzoek', 'oorzaak', 'gevolg', 'aanhouden', 'gewond-raken', 'blussen', 'afsluiten', 'bekendmaken', 'brandweer', 'gewond', 'onbekend', 'inmiddels', 'vermoedelijk'], [
    mc('De weg ___ dit weekend afgesloten.', ['wordt', 'is geworden', 'heeft'], 0, 'Present passive: wordt.'),
    mc('"The fire has been put out":', ['De brand is geblust.', 'De brand is geblust geworden.', 'De brand heeft geblust.'], 0, 'Perfect passive: is + participle.'),
    mc('"Someone is ringing the bell" (impersonal):', ['Het wordt gebeld.', 'Er wordt gebeld.', 'Er belt.'], 1, 'er wordt + participle.'),
    mc('De oorzaak moet nog ___.', ['onderzoeken', 'onderzocht worden', 'wordt onderzocht'], 1, 'Modal + participle + worden.'),
    fill('De verdachte ___ gisteren door de politie aangehouden. (past)', ['werd'], 'The suspect was arrested by the police yesterday.', 'werd + participle.'),
    fill('Twee fietsen ___ vannacht gestolen. (perfect)', ['zijn'], 'Two bikes were stolen last night.', 'zijn + participle (result).'),
    fill('Er ___ onderzoek gedaan naar de oorzaak.', ['wordt'], 'An investigation is being carried out into the cause.', 'er wordt … gedaan.'),
    fill('De brand werd ___ de brandweer geblust.', ['door'], 'The fire was put out by the fire brigade.', 'door = by.'),
    build('The road is being closed for maintenance.', 'De weg wordt afgesloten voor onderhoud.', ['is', 'sluit af'], 'wordt … afgesloten.'),
    build('The victims were taken to hospital.', 'De slachtoffers zijn naar het ziekenhuis gebracht.', ['hebben', 'brachten'], 'zijn … gebracht.'),
    build('The result will be announced tomorrow.', 'De uitslag wordt morgen bekendgemaakt.', ['maakt bekend', 'is'], 'wordt … bekendgemaakt.'),
    build('It is said that the strike will go ahead.', 'Er wordt gezegd dat de staking doorgaat.', ['Het', 'gaat door'], 'er wordt gezegd dat … doorgaat.'),
    tr('en-nl', 'Nobody was injured in the accident.', ['Bij het ongeluk raakte niemand gewond.', 'Niemand raakte gewond bij het ongeluk.', 'Bij het ongeluk is niemand gewond geraakt.'], 'gewond raken.'),
    tr('nl-en', 'De demonstratie werd om drie uur door de politie beëindigd.', ['The demonstration was ended by the police at three o’clock.', 'The police ended the demonstration at three.'], 'werd … beëindigd; door.'),
    fix('De brug is gerepareerd geworden.', ['De brug is gerepareerd.'], 'No geworden in the perfect passive.'),
    fix('De brief wordt gisteren verstuurd.', ['De brief werd gisteren verstuurd.', 'De brief is gisteren verstuurd.'], 'Past: werd / is.'),
    dict('Bij een brand in Noord zijn vannacht drie mensen gewond geraakt.', 'In a fire in Noord three people were injured last night.', 'zijn … gewond geraakt.'),
    listen('De A10 wordt dit weekend afgesloten. Automobilisten worden omgeleid via de A5.', ['The A10 is closed this weekend. Drivers are being diverted via the A5.', 'The A10 was closed last weekend because of an accident.', 'The A5 is closed; use the A10.'], 0, 'wordt afgesloten; worden omgeleid.'),
    speak('De verdachte werd gisteren aangehouden en de oorzaak van de brand wordt nog onderzocht.', 'The suspect was arrested yesterday and the cause of the fire is still being investigated.'),
    read('Brand in woning Amsterdam-Oost. Bij een brand in een woning aan de Linnaeusstraat zijn vannacht twee bewoners gewond geraakt. De brand ontstond rond drie uur in de keuken en werd binnen een uur door de brandweer geblust. De bewoners zijn naar het ziekenhuis gebracht; hun toestand is stabiel. De straat werd tijdelijk afgesloten. De oorzaak is vermoedelijk een vergeten pan op het fornuis. De politie doet nog onderzoek.', [
      { q: 'Where did the fire start?', options: ['in the bedroom', 'in the kitchen', 'on the street'], answer: 1, explain: '"ontstond … in de keuken".' },
      { q: 'How are the residents?', options: ['in a critical condition', 'stable', 'unharmed'], answer: 1, explain: '"hun toestand is stabiel".' },
      { q: 'What is the presumed cause?', options: ['a cigarette', 'a forgotten pan on the stove', 'unknown'], answer: 1, explain: '"vermoedelijk een vergeten pan op het fornuis".' },
    ], { en: 'House fire in Amsterdam-Oost. In a fire in a home on the Linnaeusstraat two residents were injured last night. The fire started around three o’clock in the kitchen and was put out by the fire brigade within an hour. The residents were taken to hospital; their condition is stable. The street was temporarily closed. The cause is presumably a forgotten pan on the stove. The police are still investigating.' }),
    write('Write a five-sentence news item about a small incident in your street (a stolen bike, a closed road, a small fire), using at least three passive forms.', ['Headline-style first sentence', 'At least one wordt / worden', 'At least one werd / is + participle', 'Uses door or er wordt once', 'Ends with what happens next (onderzoek, wordt bekendgemaakt)'], 'Fiets gestolen in de Javastraat. Vannacht is een elektrische fiets gestolen voor een woning in de Javastraat. De fiets stond op slot, maar het slot werd doorgeknipt. Er wordt aangifte gedaan bij de politie. Buurtbewoners worden gevraagd om camerabeelden te delen.'),
  ], [
    mc('De weg ___ gisteren afgesloten.', ['wordt', 'werd'], 1, 'Past: werd.'),
    fill('De brand ___ snel geblust. (perfect)', ['is'], 'The fire has been put out quickly.', 'is + participle.'),
    fill('___ wordt gebeld. (impersonal)', ['Er'], 'Someone is ringing.', 'er wordt.'),
    build('The suspect was arrested by the police.', 'De verdachte werd door de politie aangehouden.', ['heeft', 'hield aan'], 'werd … door … aangehouden.'),
    tr('en-nl', 'The cause is still unknown.', ['De oorzaak is nog onbekend.'], 'onbekend.'),
    speak('Er wordt onderzoek gedaan naar de oorzaak van het ongeluk.', 'An investigation is being carried out into the cause of the accident.'),
  ]));

  units.push(unit('s3u1', 'Nieuws en samenleving', 'news and society', u1, [
    mc('Het bericht ___ ik las, klopt niet.', ['die', 'dat'], 1, 'het bericht → dat.'),
    mc('De weg ___ morgen afgesloten.', ['wordt', 'is geworden'], 0, 'wordt.'),
    fill('De mensen ___ hier wonen, zijn boos.', ['die'], 'The people who live here are angry.', 'die.'),
    fill('De verdachte ___ aangehouden. (past)', ['werd', 'is'], 'The suspect was arrested.', 'werd / is.'),
    build('The article I read was reliable.', 'Het artikel dat ik las, was betrouwbaar.', ['die', 'was ik'], 'dat … las.'),
    build('The fire was put out by the fire brigade.', 'De brand werd door de brandweer geblust.', ['heeft', 'bluste'], 'werd … geblust.'),
    fix('De brug is gebouwd geworden in 1930.', ['De brug is in 1930 gebouwd.'], 'No geworden; time before the participle.'),
    tr('en-nl', 'According to the newspaper the population is growing.', ['Volgens de krant groeit de bevolking.'], 'volgens + inversion.'),
    listen('De maatregelen die de regering neemt, worden door veel inwoners bekritiseerd.', ['The measures the government is taking are criticised by many residents.', 'The government praises the residents.', 'The residents take measures against the government.'], 0, 'worden … bekritiseerd.'),
    speak('Volgens het artikel dat ik las, worden de huren volgend jaar verhoogd.', 'According to the article I read, rents will be raised next year.'),
  ]));

  /* ---------------- Unit 2: Meningen en discussies ---------------- */
  N('mening', 'de', 'meningen', 'opinion', 'Wat is jouw mening hierover?', 'What is your opinion on this?', { theme: 'opinions', stage: 3 });
  N('standpunt', 'het', 'standpunten', 'point of view', 'Ik begrijp je standpunt.', 'I understand your point of view.', { theme: 'opinions', stage: 3 });
  N('argument', 'het', 'argumenten', 'argument (reason)', 'Dat is een goed argument.', 'That is a good argument.', { theme: 'opinions', stage: 3 });
  N('discussie', 'de', 'discussies', 'discussion', 'We hadden een felle discussie.', 'We had a heated discussion.', { theme: 'opinions', stage: 3 });
  N('voordeel', 'het', 'voordelen', 'advantage', 'Het voordeel is dat het goedkoop is.', 'The advantage is that it is cheap.', { theme: 'opinions', stage: 3 });
  N('nadeel', 'het', 'nadelen', 'disadvantage', 'Het nadeel is de tijd.', 'The disadvantage is the time.', { theme: 'opinions', stage: 3 });
  VB('vinden', 'to think / find (opinion)', 'vind|vindt|vinden', 'vond|vonden', 'gevonden', 'hebben', 'Ik vind dat iedereen moet stemmen.', 'I think everyone should vote.', { theme: 'opinions', stage: 3 });
  VB('geloven', 'to believe', 'geloof|gelooft|geloven', 'geloofde|geloofden', 'geloofd', 'hebben', 'Ik geloof niet dat dat klopt.', 'I do not believe that is right.', { theme: 'opinions', stage: 3 });
  VB('twijfelen', 'to doubt', 'twijfel|twijfelt|twijfelen', 'twijfelde|twijfelden', 'getwijfeld', 'hebben', 'Ik twijfel of dat werkt.', 'I doubt whether that works.', { theme: 'opinions', stage: 3 });
  VB('overtuigen', 'to convince', 'overtuig|overtuigt|overtuigen', 'overtuigde|overtuigden', 'overtuigd', 'hebben', 'Je hebt me overtuigd.', 'You have convinced me.', { theme: 'opinions', stage: 3 });
  VB('toegeven', 'to admit', 'geef toe|geeft toe|geven toe', 'gaf toe|gaven toe', 'toegegeven', 'hebben', 'Ik geef toe dat je gelijk hebt.', 'I admit that you are right.', { theme: 'opinions', stage: 3 });
  VB('uitleggen', 'to explain', 'leg uit|legt uit|leggen uit', 'legde uit|legden uit', 'uitgelegd', 'hebben', 'Kun je uitleggen waarom?', 'Can you explain why?', { theme: 'communication', stage: 3 });
  PH('Ik ben het (niet) met je eens.', 'I (dis)agree with you.', 'Daar ben ik het niet mee eens.', 'I do not agree with that.', { theme: 'opinions', stage: 3, id: 'ph-eens' });
  PH('Aan de ene kant …, aan de andere kant …', 'On the one hand …, on the other hand …', 'Aan de ene kant is het duur, aan de andere kant is het snel.', 'On the one hand it is expensive, on the other hand it is fast.', { theme: 'opinions', stage: 3, id: 'ph-ene-kant' });
  PH('Volgens mij', 'In my view', 'Volgens mij klopt dat niet.', 'In my view that is not right.', { theme: 'opinions', stage: 3, id: 'ph-volgens-mij' });
  PH('gelijk hebben', 'to be right', 'Je hebt gelijk.', 'You are right.', { theme: 'opinions', stage: 3, id: 'ph-gelijk-hebben' });
  W('eerlijk gezegd', 'honestly', 'adv', 'Eerlijk gezegd vind ik het saai.', 'Honestly, I find it boring.', { theme: 'opinions', stage: 3, id: 'eerlijk-gezegd' });
  W('bovendien', 'moreover', 'adv', 'Het is duur en bovendien lelijk.', 'It is expensive and moreover ugly.', { theme: 'opinions', stage: 3 });
  W('daarentegen', 'on the other hand', 'adv', 'Fietsen is goedkoop; de auto daarentegen is duur.', 'Cycling is cheap; the car, on the other hand, is expensive.', { theme: 'opinions', stage: 3 });
  W('ondanks', 'despite', 'prep', 'Ondanks de regen kwamen veel mensen.', 'Despite the rain many people came.', { theme: 'opinions', stage: 3 });

  N('gesprek', 'het', 'gesprekken', 'conversation', 'Het was een goed gesprek.', 'It was a good conversation.', { theme: 'communication', stage: 3 });
  N('grap', 'de', 'grappen', 'joke', 'Dat was maar een grap, hoor.', 'That was just a joke.', { theme: 'communication', stage: 3 });
  N('ruzie', 'de', 'ruzies', 'quarrel', 'Ze hebben ruzie over geld.', 'They are quarrelling about money.', { theme: 'communication', stage: 3 });
  N('compromis', 'het', 'compromissen', 'compromise', 'We hebben een compromis gesloten.', 'We reached a compromise.', { theme: 'communication', stage: 3 });
  N('bezwaar', 'het', 'bezwaren', 'objection', 'Heb je bezwaar tegen het plan?', 'Do you object to the plan?', { theme: 'opinions', stage: 3 });
  VB('overdrijven', 'to exaggerate', 'overdrijf|overdrijft|overdrijven', 'overdreef|overdreven', 'overdreven', 'hebben', 'Nou, je overdrijft wel een beetje.', 'Well, you are exaggerating a bit.', { theme: 'communication', stage: 3 });
  VB('onderbreken', 'to interrupt', 'onderbreek|onderbreekt|onderbreken', 'onderbrak|onderbraken', 'onderbroken', 'hebben', 'Sorry dat ik je onderbreek.', 'Sorry to interrupt you.', { theme: 'communication', stage: 3 });
  VB('meevallen', 'to turn out better than expected', 'val mee|valt mee|vallen mee', 'viel mee|vielen mee', 'meegevallen', 'zijn', 'Het examen viel wel mee.', 'The exam was not so bad.', { theme: 'communication', stage: 3 });
  VB('tegenvallen', 'to disappoint / be worse than expected', 'val tegen|valt tegen|vallen tegen', 'viel tegen|vielen tegen', 'tegengevallen', 'zijn', 'Het restaurant viel tegen.', 'The restaurant was disappointing.', { theme: 'communication', stage: 3 });
  W('wel', 'indeed / quite (particle)', 'adv', 'Het is wel lekker.', 'It is quite tasty.', { theme: 'particles', stage: 3, id: 'wel-particle' });
  W('toch', 'surely / after all (particle)', 'adv', 'Je komt toch?', 'You are coming, right?', { theme: 'particles', stage: 3, id: 'toch-particle' });
  W('eens', '(particle: some time / just)', 'adv', 'Kom eens kijken!', 'Come and have a look!', { theme: 'particles', stage: 3, id: 'eens-particle' });
  W('nou', 'well / come on (particle)', 'adv', 'Nou, dat weet ik niet.', 'Well, I do not know.', { theme: 'particles', stage: 3, id: 'nou-particle' });
  W('hoor', '(particle: reassurance)', 'adv', 'Geen probleem, hoor.', 'No problem, really.', { theme: 'particles', stage: 3, id: 'hoor-particle' });
  W('gewoon', 'just / simply', 'adv', 'Doe gewoon normaal.', 'Just act normal.', { theme: 'particles', stage: 3 });
  W('best', 'quite / rather', 'adv', 'Dat is best duur.', 'That is quite expensive.', { theme: 'particles', stage: 3, id: 'best-adv' });
  W('behoorlijk', 'considerably / quite', 'adv', 'Het was behoorlijk druk.', 'It was quite busy.', { theme: 'basics', stage: 3 });
  PH('Zeg maar.', 'Go ahead, say it.', 'Zeg het maar, ik luister.', 'Go ahead, I am listening.', { theme: 'particles', stage: 3, id: 'ph-zeg-maar' });
  PH('Kom nou!', 'Come on!', 'Kom nou, dat meen je niet.', 'Come on, you do not mean that.', { theme: 'particles', stage: 3, id: 'ph-kom-nou' });

  const u2 = [];
  u2.push(lesson('s3u2l1', 'Giving your opinion: dat-clauses and reported views', 'You can give, defend and report an opinion: Ik vind dat …, Volgens mij …, Hij zegt dat …, and structure an argument with voordelen and nadelen.', [
    h('Opinions take a dat-clause'),
    p('`Ik vind dat …`, `Ik denk dat …`, `Ik geloof niet dat …`, `Ik ben ervan overtuigd dat …`: the verb of the opinion goes to the end. `Ik vind dat de gemeente meer **moet doen**.`'),
    table(['function', 'Dutch'], [['opinion', '*Volgens mij … / Ik vind dat … / Naar mijn mening …'], ['agree', '*Daar ben ik het mee eens. / Je hebt gelijk. / Precies.'], ['disagree', '*Daar ben ik het niet mee eens. / Dat zie ik anders. / Ik twijfel of …'], ['balance', '*Aan de ene kant …, aan de andere kant … / Het voordeel is dat …, het nadeel is dat …'], ['add', '*Bovendien … / Daar komt bij dat …'], ['contrast', '*Daarentegen … / Ondanks … / Toch …'], ['conclude', '*Kortom … / Al met al …']]),
    h('Reporting what others think'),
    p('`Mijn collega zegt dat het plan te duur is.` `Ze vroeg of ik het ermee eens was.` `Hij wilde weten waarom ik tegen was.` The verb goes to the end, and pronouns shift to the new speaker.'),
    ex(['Volgens mij moet de stad meer fietspaden aanleggen.', 'In my view the city should build more cycle paths.'], ['Aan de ene kant is de auto handig, aan de andere kant is hij duur en slecht voor het milieu.', 'On the one hand the car is convenient, on the other hand it is expensive and bad for the environment.'], ['Ik geef toe dat je een punt hebt, maar ik ben het er toch niet mee eens.', 'I admit you have a point, but I still do not agree.'], ['Mijn buurman beweert dat het vroeger beter was. Eerlijk gezegd twijfel ik daaraan.', 'My neighbour claims it used to be better. Honestly, I doubt that.']),
    tip('`Daar ben ik het (niet) mee eens` is one chunk. Learn it as a whole; then swap daar for er: `Ik ben het er niet mee eens.`'),
  ], ['g3-indirect-speech', 'g3-pronominal-adverbs'], ['mening', 'standpunt', 'argument', 'discussie', 'voordeel', 'nadeel', 'vinden', 'geloven', 'twijfelen', 'overtuigen', 'toegeven', 'uitleggen', 'ph-eens', 'ph-ene-kant', 'ph-volgens-mij', 'ph-gelijk-hebben', 'eerlijk-gezegd', 'bovendien', 'daarentegen', 'ondanks'], [
    mc('Ik vind dat de stad meer ___.', ['moet doen', 'doen moet', 'moet doet'], 0, 'Verbs at the end: moet doen (or doen moet, both fine; moet doen is the Dutch default).'),
    mc('"I agree with that":', ['Daar ben ik mee eens.', 'Daar ben ik het mee eens.', 'Ik ben eens daarmee.'], 1, 'het is part of the chunk: ben het … mee eens.'),
    mc('Hij vroeg ___ ik het ermee eens was.', ['dat', 'of', 'als'], 1, 'Reported yes/no question: of.'),
    mc('"Honestly" in Dutch:', ['eerlijk gezegd', 'eerlijk zeggen', 'gezegd eerlijk'], 0, 'eerlijk gezegd.'),
    fill('Volgens ___ klopt dat niet.', ['mij'], 'In my view that is not right.', 'volgens mij.'),
    fill('Het voordeel is ___ het goedkoop is.', ['dat'], 'The advantage is that it is cheap.', 'dat + verb at the end.'),
    fill('Ik geef ___ dat je gelijk hebt. (toegeven)', ['toe'], 'I admit that you are right.', 'geef … toe.'),
    fill('___ de kritiek ging het plan door.', ['Ondanks'], 'Despite the criticism the plan went ahead.', 'ondanks + noun.'),
    build('I think that everyone should vote.', 'Ik vind dat iedereen moet stemmen.', ['moet iedereen', 'stemt'], 'dat … moet stemmen.'),
    build('I do not agree with that.', 'Daar ben ik het niet mee eens.', ['met', 'eens het'], 'daar … mee eens.'),
    build('She asked whether I was for or against.', 'Ze vroeg of ik voor of tegen was.', ['dat', 'was ik'], 'of … was at the end.'),
    build('On the one hand it is cheap, on the other hand it is slow.', 'Aan de ene kant is het goedkoop, aan de andere kant is het langzaam.', ['het is', 'kant andere'], 'Inversion after both phrases.'),
    tr('en-nl', 'You have convinced me.', ['Je hebt me overtuigd.', 'Je hebt mij overtuigd.'], 'overtuigen → overtuigd.'),
    tr('nl-en', 'Mijn collega beweert dat thuiswerken efficiënter is, maar ik twijfel daaraan.', ['My colleague claims that working from home is more efficient, but I doubt that.', 'My colleague says working from home is more efficient, but I have my doubts.'], 'beweren dat; twijfelen aan.'),
    fix('Ik vind dat de gemeente moet doen meer.', ['Ik vind dat de gemeente meer moet doen.'], 'Verbs at the end.'),
    fix('Ik ben eens met jou.', ['Ik ben het met je eens.', 'Ik ben het met jou eens.'], 'het … eens.'),
    dict('Aan de ene kant begrijp ik je, aan de andere kant ben ik het niet met je eens.', 'On the one hand I understand you, on the other hand I do not agree with you.', 'ben het niet met je eens.'),
    listen('Eerlijk gezegd vind ik dat de discussie nergens over ging.', ['Honestly, I think the discussion was about nothing.', 'Honestly, the discussion was very useful.', 'I did not join the discussion.'], 0, 'nergens over ging = about nothing.'),
    speak('Volgens mij moet de stad meer fietspaden aanleggen, maar mijn buurman is het daar niet mee eens.', 'In my view the city should build more cycle paths, but my neighbour does not agree with that.'),
    free('Give your opinion on cars in the city centre: one advantage, one disadvantage, and your conclusion.', 'Volgens mij horen auto’s niet in het centrum. Het voordeel van een autovrij centrum is dat het rustiger en schoner wordt. Het nadeel is dat winkels misschien klanten verliezen. Al met al ben ik voor.', 'In my view cars do not belong in the centre. The advantage of a car-free centre is that it becomes quieter and cleaner. The disadvantage is that shops might lose customers. All in all I am in favour.', { hints: ['Volgens mij …', 'Het voordeel is dat …', 'Het nadeel is dat …', 'Al met al …'] }),
    auto(3, ['tr-nl-en', 'mc-meaning']),
  ], [
    mc('"You are right":', ['Je hebt gelijk.', 'Je bent gelijk.', 'Je hebt recht.'], 0, 'gelijk hebben.'),
    fill('Ik geloof niet ___ dat klopt.', ['dat'], 'I do not believe that is right.', 'dat.'),
    fill('Hij vroeg ___ ik het ermee eens was.', ['of'], 'He asked whether I agreed.', 'of = whether.'),
    build('The disadvantage is that it takes time.', 'Het nadeel is dat het tijd kost.', ['kost het', 'voordeel'], 'dat … kost.'),
    tr('en-nl', 'I doubt whether that works.', ['Ik twijfel of dat werkt.'], 'twijfelen of.'),
    speak('Daar ben ik het niet mee eens. Bovendien is het veel te duur.', 'I do not agree with that. Moreover it is far too expensive.'),
  ]));

  u2.push(lesson('s3u2l2', 'Sounding Dutch: wel, toch, even, maar, eens, nou, hoor', 'You can use the small particles that give spoken Dutch its tone: soften requests, show you expect agreement, reassure, and push back gently.', [
    h('The tone words'),
    table(['particle', 'does', 'example'], [['*wel', 'positive contrast, mild praise', '*Ik kom wel. / Het is wel lekker.'], ['*toch', 'seeks agreement / after all', '*Je komt toch? / Het is toch gelukt.'], ['*even', 'briefly, casually', '*Wacht even. / Mag ik even iets zeggen?'], ['*maar', 'permission, go ahead', '*Ga maar zitten. / Zeg maar.'], ['*eens', 'invitation, try it', '*Kom eens langs. / Probeer het eens.'], ['*nou', 'well / come on', '*Nou, dat valt wel mee. / Kom nou!'], ['*hoor', 'friendly reassurance (end)', '*Geen probleem, hoor.'], ['*gewoon', 'simply', '*Doe gewoon wat je wilt.']]),
    p('The order when you combine them: `nou` > `toch` > `wel` > `maar` > `even` > `eens`. `Kom nou toch eens langs!` `Zeg het maar even.`'),
    h('In a discussion'),
    p('`Dat is toch niet waar?` (surely that is not true?) `Nou, dat valt wel mee.` (well, it is not that bad) `Laat me even uitpraten.` (let me finish) `Je overdrijft wel een beetje, hoor.` (you are exaggerating a bit, you know) `Zeg maar wat je denkt.` (just say what you think)'),
    ex(['Ik ben het wel met je eens, maar het is toch te duur.', 'I do agree with you, but it is still too expensive.'], ['Nou, eerlijk gezegd viel het examen best mee.', 'Well, honestly the exam was not that bad.'], ['Sorry dat ik je even onderbreek, maar dat klopt niet, hoor.', 'Sorry to interrupt you for a second, but that is not right, you know.'], ['Kom nou, je meent het niet!', 'Come on, you do not mean that!']),
    tip('Listen for `hoor` at the end of Dutch sentences. It is never rude; it says "I mean this kindly".'),
  ], ['g3-particles', 'g3-idioms'], ['gesprek', 'grap', 'ruzie', 'compromis', 'bezwaar', 'overdrijven', 'onderbreken', 'meevallen', 'tegenvallen', 'wel-particle', 'toch-particle', 'eens-particle', 'nou-particle', 'hoor-particle', 'gewoon', 'best-adv', 'behoorlijk', 'ph-zeg-maar', 'ph-kom-nou'], [
    mc('"Je komt ___?" (you are coming, right?)', ['wel', 'toch', 'eens'], 1, 'toch seeks agreement.'),
    mc('"Ga ___ zitten." (go ahead and sit)', ['maar', 'toch', 'nou'], 0, 'maar = permission.'),
    mc('"Geen probleem, ___." (reassuring)', ['hoor', 'eens', 'wel'], 0, 'hoor at the end.'),
    mc('"Het valt wel mee" means', ['it is worse than expected', 'it is not as bad as expected', 'it fits well'], 1, 'meevallen.'),
    mc('"Het restaurant viel tegen" means', ['the restaurant was disappointing', 'the restaurant was against it', 'the restaurant fell down'], 0, 'tegenvallen.'),
    fill('Wacht ___, ik kom eraan. (briefly)', ['even'], 'Wait a moment, I am coming.', 'even.'),
    fill('Kom ___ langs als je in de buurt bent. (invitation)', ['eens'], 'Do come by when you are in the neighbourhood.', 'eens.'),
    fill('___, dat weet ik zo net nog niet. (well)', ['Nou'], 'Well, I am not so sure about that.', 'nou.'),
    fill('Het is ___ lekker, maar een beetje zout. (quite)', ['wel', 'best'], 'It is quite tasty, but a bit salty.', 'wel / best.'),
    build('You are exaggerating a bit, you know.', 'Je overdrijft wel een beetje, hoor.', ['toch', 'overdrijf'], 'wel … hoor.'),
    build('Let me finish for a second.', 'Laat me even uitpraten.', ['maar', 'uitpraat'], 'even; laten + infinitive.'),
    build('Well, it was not that bad.', 'Nou, het viel wel mee.', ['tegen', 'valt'], 'nou; viel wel mee.'),
    build('Just say what you think.', 'Zeg maar wat je denkt.', ['eens', 'denk je'], 'zeg maar; wat je denkt (verb at the end).'),
    tr('en-nl', 'Sorry to interrupt you.', ['Sorry dat ik je onderbreek.', 'Sorry dat ik je even onderbreek.'], 'onderbreken.'),
    tr('nl-en', 'Dat is toch niet waar? Kom nou!', ['Surely that is not true? Come on!', 'That is not true, is it? Come on!'], 'toch; kom nou.'),
    fix('Ga zitten.', ['Ga maar zitten.', 'Ga even zitten.'], 'A bare imperative sounds curt; add maar or even.'),
    dict('Ik ben het wel met je eens, hoor, maar het blijft duur.', 'I do agree with you, you know, but it remains expensive.', 'wel … hoor.'),
    listen('Nou, eerlijk gezegd viel de film best tegen.', ['Well, honestly the film was rather disappointing.', 'Well, honestly the film was better than expected.', 'The film was not shown.'], 0, 'viel tegen.'),
    speak('Nou, ik ben het wel met je eens, maar het is toch te duur, hoor.', 'Well, I do agree with you, but it is still too expensive, you know.'),
    free('React to a friend who says Dutch weather is terrible: disagree a little, using at least three particles.', 'Nou, het valt wel mee, hoor. Je overdrijft toch een beetje. Kom eens in de lente kijken, dan is het gewoon mooi.', 'Well, it is not that bad, you know. You are exaggerating a bit. Come and see in spring, then it is simply beautiful.', { hints: ['Nou, …', '… wel …, hoor', '… toch …', 'Kom eens …'] }),
    match([['toch', 'right? / after all'], ['even', 'briefly'], ['maar', 'go ahead'], ['eens', 'do try / some time'], ['hoor', 'reassurance'], ['meevallen', 'be not so bad']]),
  ], [
    mc('"Wacht ___." (a sec)', ['even', 'toch'], 0, 'even.'),
    mc('"Het is wel lekker" means', ['it is quite tasty', 'it is not tasty'], 0, 'wel = mild positive.'),
    fill('Je komt ___, hè?', ['toch'], 'You are coming, right?', 'toch.'),
    build('Come and have a look!', 'Kom eens kijken!', ['maar', 'kijk'], 'eens; kijken.'),
    tr('en-nl', 'It was not so bad.', ['Het viel wel mee.', 'Het viel mee.'], 'meevallen.'),
    speak('Zeg het maar, ik luister. Je hoeft je geen zorgen te maken, hoor.', 'Go ahead, I am listening. You do not need to worry, you know.'),
  ]));

  units.push(unit('s3u2', 'Meningen en discussies', 'opinions and discussions', u2, [
    mc('"I agree":', ['Ik ben het ermee eens.', 'Ik ben eens.'], 0, 'het … eens.'),
    mc('"Ga ___ zitten."', ['maar', 'toch'], 0, 'maar.'),
    fill('Ik vind ___ je gelijk hebt.', ['dat'], 'I think you are right.', 'dat.'),
    fill('Hij vroeg ___ ik voor of tegen was.', ['of'], 'He asked whether I was for or against.', 'of.'),
    fill('Het examen viel wel ___.', ['mee'], 'The exam was not so bad.', 'meevallen.'),
    build('In my view that is not right.', 'Volgens mij klopt dat niet.', ['dat klopt', 'mijn'], 'volgens mij + inversion.'),
    build('The advantage is that it is fast.', 'Het voordeel is dat het snel is.', ['is het', 'nadeel'], 'dat … is.'),
    fix('Ik vind dat hij heeft gelijk.', ['Ik vind dat hij gelijk heeft.'], 'Verb at the end.'),
    tr('en-nl', 'Honestly, I doubt that.', ['Eerlijk gezegd twijfel ik daaraan.', 'Eerlijk gezegd twijfel ik eraan.'], 'twijfelen aan.'),
    listen('Aan de ene kant is thuiswerken handig, aan de andere kant mis ik mijn collega’s wel.', ['On the one hand working from home is convenient, on the other hand I do miss my colleagues.', 'I never work from home because I miss my colleagues.', 'My colleagues work from home.'], 0, 'aan de ene kant … aan de andere kant; wel.'),
    speak('Nou, ik geef toe dat je een punt hebt, maar ik ben het er toch niet helemaal mee eens.', 'Well, I admit you have a point, but I still do not entirely agree.'),
  ]));

  /* ---------------- Unit 3: Onderwijs ---------------- */
  N('basisschool', 'de', 'basisscholen', 'primary school', 'Mijn dochter zit op de basisschool.', 'My daughter is at primary school.', { theme: 'education', stage: 3 });
  N('middelbare school', 'de', 'middelbare scholen', 'secondary school', 'Na de basisschool ga je naar de middelbare school.', 'After primary school you go to secondary school.', { theme: 'education', stage: 3, id: 'middelbare-school' });
  N('vak', 'het', 'vakken', 'subject', 'Wiskunde was mijn favoriete vak.', 'Maths was my favourite subject.', { theme: 'education', stage: 3 });
  N('cijfer', 'het', 'cijfers', 'grade / mark', 'Ik haalde een acht voor Nederlands.', 'I got an eight for Dutch.', { theme: 'education', stage: 3 });
  N('examen', 'het', 'examens', 'exam', 'Het examen waarvoor ik leer, is in juni.', 'The exam I am studying for is in June.', { theme: 'education', stage: 3 });
  N('huiswerk', 'het', null, 'homework', 'Heb je je huiswerk al gemaakt?', 'Have you done your homework yet?', { theme: 'education', stage: 3 });
  N('docent', 'de', 'docenten', 'teacher / lecturer', 'De docent legt het goed uit.', 'The teacher explains it well.', { theme: 'education', stage: 3 });
  N('universiteit', 'de', 'universiteiten', 'university', 'Ze studeert aan de Universiteit van Amsterdam.', 'She studies at the University of Amsterdam.', { theme: 'education', stage: 3 });
  N('hogeschool', 'de', 'hogescholen', 'university of applied sciences', 'Hij doet een opleiding aan de hogeschool.', 'He is doing a course at a university of applied sciences.', { theme: 'education', stage: 3 });
  N('mbo', 'het', null, 'vocational education (mbo)', 'Na het vmbo ging hij naar het mbo.', 'After vmbo he went to mbo.', { theme: 'education', stage: 3 });
  N('schoolsysteem', 'het', 'schoolsystemen', 'school system', 'Het Nederlandse schoolsysteem is ingewikkeld.', 'The Dutch school system is complicated.', { theme: 'education', stage: 3 });
  N('inburgering', 'de', null, 'civic integration', 'Voor de inburgering moet je een taalexamen doen.', 'For civic integration you have to take a language exam.', { theme: 'education', stage: 3 });
  VB('slagen', 'to pass', 'slaag|slaagt|slagen', 'slaagde|slaagden', 'geslaagd', 'zijn', 'Ik ben geslaagd voor mijn examen!', 'I passed my exam!', { theme: 'education', stage: 3, note: 'slagen voor.' });
  VB('zakken', 'to fail (an exam)', 'zak|zakt|zakken', 'zakte|zakten', 'gezakt', 'zijn', 'Hij is gezakt voor wiskunde.', 'He failed maths.', { theme: 'education', stage: 3, note: 'zakken voor.' });
  VB('halen', 'to get (a grade) / pass', 'haal|haalt|halen', 'haalde|haalden', 'gehaald', 'hebben', 'Ze heeft een negen gehaald.', 'She got a nine.', { theme: 'education', stage: 3 });
  VB('zich voorbereiden op', 'to prepare for', 'bereid me voor op|bereidt zich voor op|bereiden ons voor op', 'bereidde me voor op|bereidden ons voor op', 'voorbereid op', 'hebben', 'Ik bereid me voor op het staatsexamen.', 'I am preparing for the state exam.', { theme: 'education', stage: 3, id: 'zich-voorbereiden-op' });
  VB('wachten op', 'to wait for', 'wacht op|wacht op|wachten op', 'wachtte op|wachtten op', 'gewacht op', 'hebben', 'We wachten op de uitslag.', 'We are waiting for the result.', { theme: 'basics', stage: 3, id: 'wachten-op' });
  VB('zich interesseren voor', 'to be interested in', 'interesseer me voor|interesseert zich voor|interesseren ons voor', 'interesseerde me voor|interesseerden ons voor', 'geïnteresseerd voor', 'hebben', 'Hij interesseert zich voor geschiedenis.', 'He is interested in history.', { theme: 'education', stage: 3, id: 'zich-interesseren-voor' });
  W('ingewikkeld', 'complicated', 'adj', 'De regels zijn ingewikkeld.', 'The rules are complicated.', { theme: 'basics', stage: 3 });

  N('cursus', 'de', 'cursussen', 'course', 'Ik volg een cursus Nederlands.', 'I am taking a Dutch course.', { theme: 'education', stage: 3 });
  N('college', 'het', 'colleges', 'lecture', 'Het college begint om negen uur.', 'The lecture starts at nine.', { theme: 'education', stage: 3 });
  N('scriptie', 'de', 'scripties', 'thesis', 'Ze schrijft haar scriptie over migratie.', 'She is writing her thesis on migration.', { theme: 'education', stage: 3 });
  N('studiefinanciering', 'de', null, 'student finance', 'Studiefinanciering vraag je aan bij DUO.', 'You apply for student finance at DUO.', { theme: 'education', stage: 3 });
  N('collegegeld', 'het', null, 'tuition fee', 'Het collegegeld is ruim tweeduizend euro.', 'The tuition fee is over two thousand euros.', { theme: 'education', stage: 3 });
  N('bijles', 'de', 'bijlessen', 'tutoring', 'Hij geeft bijles wiskunde.', 'He gives maths tutoring.', { theme: 'education', stage: 3 });
  N('kennis', 'de', null, 'knowledge', 'Kennis van het Nederlands is verplicht.', 'Knowledge of Dutch is required.', { theme: 'education', stage: 3 });
  N('vaardigheid', 'de', 'vaardigheden', 'skill', 'Spreken is de moeilijkste vaardigheid.', 'Speaking is the hardest skill.', { theme: 'education', stage: 3 });
  VB('volgen', 'to take (a course) / follow', 'volg|volgt|volgen', 'volgde|volgden', 'gevolgd', 'hebben', 'Ik volg een avondcursus.', 'I am taking an evening course.', { theme: 'education', stage: 3 });
  VB('laten', 'to let / have done', 'laat|laat|laten', 'liet|lieten', 'gelaten', 'hebben', 'Ik laat mijn scriptie nakijken.', 'I am having my thesis checked.', { theme: 'verbs', stage: 3 });
  VB('durven', 'to dare', 'durf|durft|durven', 'durfde|durfden', 'gedurfd', 'hebben', 'Ik durf geen Nederlands te spreken in de les.', 'I do not dare to speak Dutch in class.', { theme: 'verbs', stage: 3 });
  VB('hoeven', 'to need to (only with niet)', 'hoef|hoeft|hoeven', 'hoefde|hoefden', 'gehoeven', 'hebben', 'Je hoeft het huiswerk niet te maken.', 'You do not have to do the homework.', { theme: 'verbs', stage: 3, note: 'Only in negatives: niet hoeven te.' });
  VB('weigeren', 'to refuse', 'weiger|weigert|weigeren', 'weigerde|weigerden', 'geweigerd', 'hebben', 'Hij weigerde te betalen.', 'He refused to pay.', { theme: 'verbs', stage: 3 });
  VB('nakijken', 'to check / mark', 'kijk na|kijkt na|kijken na', 'keek na|keken na', 'nagekeken', 'hebben', 'De docent kijkt de toetsen na.', 'The teacher marks the tests.', { theme: 'education', stage: 3 });
  VB('bijhouden', 'to keep up', 'houd bij|houdt bij|houden bij', 'hield bij|hielden bij', 'bijgehouden', 'hebben', 'Ik kan het tempo niet bijhouden.', 'I cannot keep up with the pace.', { theme: 'education', stage: 3 });
  PH('aan het … zijn', 'to be in the middle of (doing)', 'Ik ben aan het leren.', 'I am studying (right now).', { theme: 'verbs', stage: 3, id: 'ph-aan-het' });
  W('zelfstandig', 'independent(ly)', 'adj', 'Studenten moeten zelfstandig werken.', 'Students have to work independently.', { theme: 'education', stage: 3 });
  W('toegankelijk', 'accessible', 'adj', 'Onderwijs moet toegankelijk zijn.', 'Education has to be accessible.', { theme: 'education', stage: 3 });

  const u3 = [];
  u3.push(lesson('s3u3l1', 'The Dutch school system: waarop, waarvoor, ermee, daarmee', 'You can talk about school and study in the Netherlands and use pronominal adverbs (waarvoor, ermee, daarover) for things with a preposition.', [
    h('The system in short'),
    p('`basisschool` (4 to 12), then `middelbare school` at three levels: `vmbo` (4 years, then `mbo`), `havo` (5 years, then `hbo` at a `hogeschool`) and `vwo` (6 years, then `universiteit`). Grades run from 1 to 10; a 6 is a pass (`voldoende`), an 8 is very good. Adults who move here follow `inburgering`, which includes a Dutch exam.'),
    h('waar + preposition, er + preposition'),
    p('Things with a preposition become one word: `waarvoor` (for what), `waarover` (about what), `ermee` (with it), `daarover` (about that), `hiermee` (with this). Usually split in speech: `Waar leer je **voor**?` `Ik ben **er** blij **mee**.`'),
    table(['verb + preposition', 'question', 'answer'], [['zich voorbereiden op', '*Waar bereid je je op voor?', '*Ik bereid me erop voor. / Daar bereid ik me op voor.'], ['wachten op', '*Waar wacht je op?', '*Ik wacht erop.'], ['zich interesseren voor', '*Waar interesseer je je voor?', '*Ik interesseer me ervoor.'], ['praten over', '*Waar praten jullie over?', '*We praten erover.']]),
    ex(['Het examen waarvoor ik leer, is over drie weken.', 'The exam I am studying for is in three weeks.'], ['Mijn zoon zit op het vwo. Daar is hij trots op.', 'My son is at vwo. He is proud of that.'], ['Wiskunde? Daar interesseer ik me niet voor.', 'Maths? I am not interested in that.'], ['De uitslag komt vrijdag. We wachten er met spanning op.', 'The result comes on Friday. We are waiting for it in suspense.']),
    tip('People keep the pronoun: `Ik wacht **op hem**`. Things become er: `Ik wacht **erop**`.'),
  ], ['g3-pronominal-adverbs', 'g3-relative'], ['basisschool', 'middelbare-school', 'vak', 'cijfer', 'examen', 'huiswerk', 'docent', 'universiteit', 'hogeschool', 'mbo', 'schoolsysteem', 'inburgering', 'slagen', 'zakken', 'halen', 'zich-voorbereiden-op', 'wachten-op', 'zich-interesseren-voor', 'ingewikkeld', 'verplicht'], [
    mc('"What are you waiting for?":', ['Wat wacht je op?', 'Waar wacht je op?', 'Op wat wacht je?'], 1, 'Things: waar … op.'),
    mc('"I am interested in it":', ['Ik interesseer me voor het.', 'Ik interesseer me ervoor.', 'Ik interesseer me voor hem.'], 1, 'ervoor.'),
    mc('"Het examen ___ ik leer, is in juni." (for which)', ['waarvoor', 'voor die', 'dat voor'], 0, 'waarvoor.'),
    mc('A 6 in the Dutch grading system is', ['a fail', 'a pass', 'excellent'], 1, 'voldoende.'),
    fill('___ bereid je je op voor? (what)', ['Waar'], 'What are you preparing for?', 'waar … op voor.'),
    fill('De uitslag? ___ wachten we al twee weken op.', ['Daar'], 'The result? We have been waiting for that for two weeks.', 'daar … op (stressed).'),
    fill('Ik ben ___ voor mijn examen. (slagen, perfect)', ['geslaagd'], 'I passed my exam.', 'geslaagd, with zijn.'),
    fill('Na de basisschool ga je naar de ___ school.', ['middelbare'], 'After primary school you go to secondary school.', 'middelbare school.'),
    build('The exam I am studying for is in June.', 'Het examen waarvoor ik leer, is in juni.', ['dat', 'leer ik'], 'waarvoor … leer.'),
    build('What are you preparing for?', 'Waar bereid je je op voor?', ['Wat', 'jij'], 'waar … op voor; je je (subject + reflexive).'),
    build('He is proud of that.', 'Daar is hij trots op.', ['van', 'het'], 'daar … op.'),
    build('My son failed maths.', 'Mijn zoon is gezakt voor wiskunde.', ['heeft', 'geslaagd'], 'is gezakt voor.'),
    tr('en-nl', 'I got an eight for Dutch.', ['Ik heb een acht voor Nederlands gehaald.', 'Ik haalde een acht voor Nederlands.'], 'een acht halen voor.'),
    tr('nl-en', 'Het Nederlandse schoolsysteem is ingewikkeld, maar daar wen je aan.', ['The Dutch school system is complicated, but you get used to that.', 'The Dutch school system is complicated but you get used to it.'], 'wennen aan; daar … aan.'),
    fix('Wat interesseer je je voor?', ['Waar interesseer je je voor?'], 'Thing + preposition → waar.'),
    fix('Ik wacht op het.', ['Ik wacht erop.'], 'erop.'),
    dict('Waar bereid je je op voor? Op het staatsexamen.', 'What are you preparing for? For the state exam.', 'waar … op voor.'),
    listen('Mijn dochter zit in de laatste klas van de basisschool en gaat volgend jaar naar het vwo.', ['My daughter is in the last year of primary school and goes to vwo next year.', 'My daughter finished vwo last year.', 'My daughter is starting primary school next year.'], 0, 'laatste klas; vwo.'),
    speak('Ik bereid me voor op het inburgeringsexamen. Daar ben ik best zenuwachtig over.', 'I am preparing for the civic integration exam. I am quite nervous about that.'),
    free('Explain what you are studying or learning at the moment, what you are preparing for, and what you are (not) interested in.', 'Ik volg een cursus Nederlands. Ik bereid me voor op het B1-examen in juni. Grammatica interesseer ik me erg voor, maar luisteren vind ik moeilijk.', 'I am taking a Dutch course. I am preparing for the B1 exam in June. I am very interested in grammar, but I find listening hard.', { hints: ['Ik volg …', 'Ik bereid me voor op …', '… interesseer ik me (niet) voor'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"What are you talking about?":', ['Waar praat je over?', 'Wat praat je over?'], 0, 'waar … over.'),
    fill('Ik ben er trots ___.', ['op'], 'I am proud of it.', 'er … op.'),
    fill('Ze is ___ voor haar rijexamen. (passed)', ['geslaagd'], 'She passed her driving test.', 'geslaagd voor.'),
    build('That is something I am interested in.', 'Dat is iets waar ik me voor interesseer.', ['wat', 'ervoor'], 'waar … voor interesseer.'),
    tr('en-nl', 'We are waiting for the result.', ['We wachten op de uitslag.', 'Wij wachten op de uitslag.'], 'wachten op.'),
    speak('Het vak waar ik het meest van hou, is geschiedenis.', 'The subject I like most is history.'),
  ]));

  u3.push(lesson('s3u3l2', 'Studying: te or no te, laten, blijven, aan het', 'You can talk about learning and studying with infinitive constructions: proberen te, hoeven niet te, laten nakijken, blijven oefenen, aan het leren zijn.', [
    h('te or no te?'),
    table(['no te after', 'with te after'], [['modals: *Ik moet leren.', 'proberen: *Ik probeer te leren.'], ['gaan / komen: *Ik ga studeren.', 'beginnen: *Ik begin te twijfelen.'], ['blijven: *Blijf oefenen!', 'hoeven (niet): *Je hoeft niet te komen.'], ['laten: *Laat me uitpraten.', 'durven: *Ik durf niet te spreken.'], ['zien / horen: *Ik hoor hem zingen.', 'vergeten: *Vergeet niet te bellen.'], ['leren / helpen: *Ze leert me fietsen.', 'weigeren: *Hij weigert te betalen.']]),
    p('`laten` = let, or have something done: `Ik laat mijn scriptie nakijken.` (I am having my thesis checked.) `De docent laat ons in groepjes werken.` In the perfect, two infinitives: `Ik heb mijn tekst laten nakijken.` `We zijn blijven oefenen.`'),
    h('aan het + infinitive'),
    p('For an action happening right now: `Ik ben aan het leren, bel je straks terug?` Only use it when the "right now" matters.'),
    h('zitten / staan / liggen + te'),
    p('Very Dutch: `Hij zit te lezen.` (He is sitting reading.) `Ze staan te wachten.` `Ik lag te slapen toen je belde.`'),
    ex(['Je hoeft het huiswerk niet vandaag te maken.', 'You do not have to do the homework today.'], ['Ik durf in de les nog geen vragen te stellen.', 'I do not yet dare to ask questions in class.'], ['Blijf oefenen, ook als het moeilijk is.', 'Keep practising, even when it is hard.'], ['Ik heb mijn scriptie door een vriend laten nakijken.', 'I had my thesis checked by a friend.']),
    tip('Not sure? Modals, gaan, komen, blijven, laten, zien, horen: no te. Everything else: te.'),
  ], ['g3-infinitive'], ['cursus', 'college', 'scriptie', 'studiefinanciering', 'collegegeld', 'bijles', 'kennis', 'vaardigheid', 'volgen', 'laten', 'durven', 'hoeven', 'weigeren', 'nakijken', 'bijhouden', 'ph-aan-het', 'zelfstandig', 'toegankelijk'], [
    mc('Ik probeer elke dag ___.', ['oefenen', 'te oefenen', 'oefenen te'], 1, 'proberen + te.'),
    mc('Je hoeft niet ___.', ['komen', 'te komen', 'om komen'], 1, 'hoeven niet + te.'),
    mc('Blijf ___!', ['oefenen', 'te oefenen', 'oefent'], 0, 'blijven + infinitive, no te.'),
    mc('"I am having my text checked":', ['Ik laat mijn tekst nakijken.', 'Ik laat mijn tekst te nakijken.', 'Ik laat nakijken mijn tekst.'], 0, 'laten + infinitive, no te.'),
    mc('"I am studying right now":', ['Ik ben aan het leren.', 'Ik ben leren.', 'Ik ben te leren.'], 0, 'aan het + infinitive.'),
    fill('Ik durf nog geen vragen ___ stellen.', ['te'], 'I do not yet dare to ask questions.', 'durven + te.'),
    fill('Vergeet niet je huiswerk ___ maken.', ['te'], 'Do not forget to do your homework.', 'vergeten + te.'),
    fill('De docent ___ ons in groepjes werken. (laten)', ['laat'], 'The teacher has us work in groups.', 'laten, no te.'),
    fill('Hij zit de hele dag ___ lezen.', ['te'], 'He sits reading all day.', 'zitten + te.'),
    build('You do not have to pay tuition fees this year.', 'Je hoeft dit jaar geen collegegeld te betalen.', ['moet', 'betalen te'], 'hoeft geen … te betalen.'),
    build('I had my thesis checked.', 'Ik heb mijn scriptie laten nakijken.', ['gelaten', 'nagekeken'], 'heb … laten nakijken.'),
    build('Keep practising every day.', 'Blijf elke dag oefenen.', ['te', 'oefent'], 'blijven + infinitive.'),
    build('She refuses to give tutoring.', 'Ze weigert bijles te geven.', ['geven te', 'geeft'], 'weigeren + te.'),
    tr('en-nl', 'I cannot keep up with the pace.', ['Ik kan het tempo niet bijhouden.'], 'kunnen + bijhouden, no te.'),
    tr('nl-en', 'Ik ben aan het leren voor mijn examen, dus ik kan vanavond niet.', ['I am studying for my exam, so I cannot tonight.', 'I am busy studying for my exam so I can’t make it tonight.'], 'aan het leren.'),
    fix('Ik probeer elke dag oefenen.', ['Ik probeer elke dag te oefenen.'], 'proberen + te.'),
    fix('Ik moet te leren.', ['Ik moet leren.'], 'No te after a modal.'),
    dict('Je hoeft je scriptie niet vandaag in te leveren.', 'You do not have to hand in your thesis today.', 'hoeft niet … in te leveren.'),
    listen('Ik heb mijn tekst door de docent laten nakijken en ik ben blijven oefenen.', ['I had my text checked by the teacher and I kept practising.', 'The teacher refused to check my text.', 'I stopped practising after the teacher checked my text.'], 0, 'laten nakijken; blijven oefenen.'),
    speak('Ik probeer elke dag een half uur te oefenen, maar ik durf nog niet veel te spreken.', 'I try to practise half an hour every day, but I do not yet dare to speak much.'),
    free('Describe how you study Dutch: what you try to do, what you do not have to do, what you keep doing, and what you have someone else do.', 'Ik probeer elke dag te oefenen. Ik hoef geen huiswerk te maken, maar ik doe het toch. Ik blijf luisteren naar de radio en ik laat mijn teksten door een collega nakijken.', 'I try to practise every day. I do not have to do homework, but I do it anyway. I keep listening to the radio and I have my texts checked by a colleague.', { hints: ['Ik probeer … te …', 'Ik hoef niet … te …', 'Ik blijf …', 'Ik laat … nakijken'] }),
    auto(3, ['tr-nl-en', 'conj']),
  ], [
    mc('Ik vergeet altijd ___.', ['bellen', 'te bellen'], 1, 'vergeten + te.'),
    mc('Laat me ___!', ['uitpraten', 'te uitpraten'], 0, 'laten, no te.'),
    fill('Je hoeft niet ___ betalen.', ['te'], 'You do not have to pay.', 'hoeven + te.'),
    build('I am cooking right now.', 'Ik ben aan het koken.', ['te', 'kook'], 'aan het + infinitive.'),
    tr('en-nl', 'Keep going!', ['Blijf doorgaan!', 'Ga door!'], 'blijven / doorgaan.'),
    speak('Ik heb mijn cv laten nakijken en ik durf nu te solliciteren.', 'I had my CV checked and I now dare to apply.'),
  ]));

  units.push(unit('s3u3', 'Onderwijs', 'education', u3, [
    mc('"What are you waiting for?":', ['Waar wacht je op?', 'Wat wacht je op?'], 0, 'waar … op.'),
    mc('Ik probeer ___.', ['te leren', 'leren'], 0, 'proberen + te.'),
    fill('Ik ben er blij ___.', ['mee'], 'I am happy with it.', 'er … mee.'),
    fill('Je hoeft niet ___ komen.', ['te'], 'You do not have to come.', 'te.'),
    fill('Ik ben ___ voor mijn examen. (passed)', ['geslaagd'], 'I passed my exam.', 'geslaagd.'),
    build('The exam I am studying for is in June.', 'Het examen waarvoor ik leer, is in juni.', ['dat', 'leer ik'], 'waarvoor … leer.'),
    build('I had my text checked.', 'Ik heb mijn tekst laten nakijken.', ['gelaten', 'te'], 'laten nakijken.'),
    fix('Ik interesseer me voor het.', ['Ik interesseer me ervoor.'], 'ervoor.'),
    tr('en-nl', 'Keep practising.', ['Blijf oefenen.'], 'blijven + infinitive.'),
    listen('Waar bereid je je op voor? — Op het inburgeringsexamen, dat is over een maand.', ['What are you preparing for? — For the civic integration exam, which is in a month.', 'What did you pass? — The integration exam, a month ago.', 'Where is the exam? — In a month.'], 0, 'waar … op voor; over een maand.'),
    speak('Ik ben aan het leren voor een examen waar ik best zenuwachtig over ben.', 'I am studying for an exam that I am quite nervous about.'),
  ]));

  /* ---------------- Unit 4: Gezondheid en levensstijl ---------------- */
  N('levensstijl', 'de', 'levensstijlen', 'lifestyle', 'Een gezonde levensstijl begint met slaap.', 'A healthy lifestyle starts with sleep.', { theme: 'health', stage: 3 });
  N('voeding', 'de', null, 'nutrition / food', 'Gezonde voeding is belangrijk.', 'Healthy nutrition is important.', { theme: 'health', stage: 3 });
  N('beweging', 'de', null, 'exercise / movement', 'Je hebt meer beweging nodig.', 'You need more exercise.', { theme: 'health', stage: 3 });
  N('stress', 'de', null, 'stress', 'Ik heb veel stress op mijn werk.', 'I have a lot of stress at work.', { theme: 'health', stage: 3 });
  N('slaap', 'de', null, 'sleep', 'Ik krijg te weinig slaap.', 'I get too little sleep.', { theme: 'health', stage: 3 });
  N('gewicht', 'het', null, 'weight', 'Ik wil op gewicht blijven.', 'I want to stay at my weight.', { theme: 'health', stage: 3 });
  N('advies', 'het', 'adviezen', 'advice', 'Het advies van de dokter was duidelijk.', 'The doctor’s advice was clear.', { theme: 'health', stage: 3 });
  N('gewoonte', 'de', 'gewoontes', 'habit', 'Roken is een slechte gewoonte.', 'Smoking is a bad habit.', { theme: 'health', stage: 3 });
  VB('afvallen', 'to lose weight', 'val af|valt af|vallen af', 'viel af|vielen af', 'afgevallen', 'zijn', 'Ik ben drie kilo afgevallen.', 'I have lost three kilos.', { theme: 'health', stage: 3 });
  VB('aankomen-gewicht', 'to gain weight', 'kom aan|komt aan|komen aan', 'kwam aan|kwamen aan', 'aangekomen', 'zijn', 'In de winter kom ik altijd aan.', 'In winter I always gain weight.', { theme: 'health', stage: 3, id: 'aankomen-gewicht', nl: 'aankomen' });
  VB('bewegen', 'to move / exercise', 'beweeg|beweegt|bewegen', 'bewoog|bewogen', 'bewogen', 'hebben', 'Je zou meer moeten bewegen.', 'You should exercise more.', { theme: 'health', stage: 3 });
  VB('stoppen met', 'to quit', 'stop met|stopt met|stoppen met', 'stopte met|stopten met', 'gestopt met', 'zijn', 'Ik ben gestopt met roken.', 'I have quit smoking.', { theme: 'health', stage: 3, id: 'stoppen-met' });
  VB('vermijden', 'to avoid', 'vermijd|vermijdt|vermijden', 'vermeed|vermeden', 'vermeden', 'hebben', 'Vermijd suiker en alcohol.', 'Avoid sugar and alcohol.', { theme: 'health', stage: 3 });
  VB('ontspannen-v', 'to relax', 'ontspan|ontspant|ontspannen', 'ontspande|ontspanden', 'ontspannen', 'hebben', 'Ik ontspan het beste in de natuur.', 'I relax best in nature.', { theme: 'health', stage: 3, id: 'ontspannen-v', nl: 'ontspannen' });
  W('fit', 'fit', 'adj', 'Ik voel me fitter dan vorig jaar.', 'I feel fitter than last year.', { theme: 'health', stage: 3 });
  W('ongezond', 'unhealthy', 'adj', 'Fastfood is ongezond.', 'Fast food is unhealthy.', { theme: 'health', stage: 3 });
  W('evenwichtig', 'balanced', 'adj', 'Eet evenwichtig.', 'Eat a balanced diet.', { theme: 'health', stage: 3 });
  PH('Als ik jou was …', 'If I were you …', 'Als ik jou was, zou ik eerder naar bed gaan.', 'If I were you, I would go to bed earlier.', { theme: 'advice', stage: 3, id: 'ph-als-ik-jou-was' });
  PH('Je zou … moeten …', 'You should …', 'Je zou minder koffie moeten drinken.', 'You should drink less coffee.', { theme: 'advice', stage: 3, id: 'ph-je-zou-moeten' });

  N('verslaving', 'de', 'verslavingen', 'addiction', 'Een telefoonverslaving is een echt probleem.', 'Phone addiction is a real problem.', { theme: 'health', stage: 3 });
  N('schermtijd', 'de', null, 'screen time', 'Mijn schermtijd is te hoog.', 'My screen time is too high.', { theme: 'health', stage: 3 });
  N('alcohol', 'de', null, 'alcohol', 'Ik drink geen alcohol meer.', 'I no longer drink alcohol.', { theme: 'health', stage: 3 });
  N('sigaret', 'de', 'sigaretten', 'cigarette', 'Hij rookt nooit meer sigaretten.', 'He never smokes cigarettes any more.', { theme: 'health', stage: 3 });
  N('vegetariër', 'de', 'vegetariërs', 'vegetarian', 'Ze is al jaren vegetariër.', 'She has been a vegetarian for years.', { theme: 'health', stage: 3 });
  W('niet meer', 'no longer', 'adv', 'Ik rook niet meer.', 'I no longer smoke.', { theme: 'negation', stage: 3, id: 'niet-meer' });
  W('nog niet', 'not yet', 'adv', 'Ik ben nog niet naar de sportschool geweest.', 'I have not been to the gym yet.', { theme: 'negation', stage: 3, id: 'nog-niet-adv' });
  W('nergens', 'nowhere', 'adv', 'Ik kan nergens gezond eten vinden.', 'I can find healthy food nowhere.', { theme: 'negation', stage: 3 });
  W('geen enkele', 'not a single', 'adj', 'Ik heb geen enkele sigaret gerookt.', 'I have not smoked a single cigarette.', { theme: 'negation', stage: 3, id: 'geen-enkele' });
  W('helemaal niet', 'not at all', 'adv', 'Ik vind sporten helemaal niet leuk.', 'I do not like exercising at all.', { theme: 'negation', stage: 3, id: 'helemaal-niet' });
  W('nauwelijks', 'hardly', 'adv', 'Ik slaap nauwelijks.', 'I hardly sleep.', { theme: 'negation', stage: 3 });
  W('wel eens', 'sometimes / ever', 'adv', 'Ga je wel eens naar de sportschool?', 'Do you ever go to the gym?', { theme: 'negation', stage: 3, id: 'wel-eens' });
  VB('volhouden', 'to keep it up', 'houd vol|houdt vol|houden vol', 'hield vol|hielden vol', 'volgehouden', 'hebben', 'Ik heb het drie maanden volgehouden.', 'I kept it up for three months.', { theme: 'health', stage: 3 });
  VB('opgeven', 'to give up', 'geef op|geeft op|geven op', 'gaf op|gaven op', 'opgegeven', 'hebben', 'Geef niet op!', 'Do not give up!', { theme: 'health', stage: 3 });
  VB('wennen aan', 'to get used to', 'wen aan|went aan|wennen aan', 'wende aan|wenden aan', 'gewend aan', 'zijn', 'Ik ben gewend aan vroeg opstaan.', 'I am used to getting up early.', { theme: 'basics', stage: 3, id: 'wennen-aan' });

  const u4 = [];
  u4.push(lesson('s3u4l1', 'Healthy advice: zou, als ik jou was', 'You can give and ask for advice about lifestyle with zou: je zou moeten, als ik jou was, wat zou je doen als …', [
    h('zou: the polite and hypothetical would'),
    table(['use', 'example'], [['advice', '*Je zou meer moeten bewegen.'], ['if I were you', '*Als ik jou was, zou ik stoppen met roken.'], ['polite request', '*Zou u mij een advies kunnen geven?'], ['wish', '*Ik zou graag fitter willen worden.'], ['hypothesis', '*Als ik meer tijd had, zou ik elke dag sporten.']]),
    p('`zou` + modal: `zou moeten` (should), `zou kunnen` (could), `zou willen` (would like). The other verbs go to the end: `Je zou minder koffie **moeten drinken**.`'),
    h('Hypothetical als'),
    p('als-clause in the **simple past** (or with zou), main clause with **zou**: `Als ik jou was, zou ik eerder naar bed gaan.` `Als ik geen stress had, zou ik beter slapen.` Real conditions stay in the present: `Als je moe bent, ga je naar bed.`'),
    ex(['Ik slaap slecht. Wat zou jij doen? — Als ik jou was, zou ik ’s avonds geen koffie meer drinken.', 'I sleep badly. What would you do? — If I were you, I would stop drinking coffee in the evening.'], ['Je zou eens naar de huisarts moeten gaan.', 'You should go to the GP some time.'], ['Als ik minder zou werken, zou ik meer tijd hebben om te sporten.', 'If I worked less, I would have more time to exercise.'], ['Ik zou graag willen afvallen, maar ik hou van eten.', 'I would like to lose weight, but I love food.']),
    tip('`Wat zou je doen als …?` is the question; `Als ik jou was, zou ik …` is the answer. Learn both as chunks.'),
  ], ['g3-conditional'], ['levensstijl', 'voeding', 'beweging', 'stress', 'slaap', 'gewicht', 'advies', 'gewoonte', 'afvallen', 'aankomen-gewicht', 'bewegen', 'stoppen-met', 'vermijden', 'ontspannen-v', 'fit', 'ongezond', 'evenwichtig', 'ph-als-ik-jou-was', 'ph-je-zou-moeten'], [
    mc('"You should exercise more":', ['Je zou meer moeten bewegen.', 'Je zou meer bewegen moeten.', 'Je moet zou meer bewegen.'], 0, 'zou + moeten bewegen at the end.'),
    mc('Als ik jou ___, zou ik stoppen met roken.', ['ben', 'was', 'zou'], 1, 'Hypothetical: past tense in the als-clause.'),
    mc('Als ik meer tijd had, ___ ik elke dag sporten.', ['zal', 'zou', 'ga'], 1, 'Main clause: zou.'),
    mc('"Could you give me advice?" (polite):', ['Kun je me advies geven?', 'Zou u mij advies kunnen geven?', 'Geef me advies.'], 1, 'zou u … kunnen.'),
    fill('Ik ___ graag fitter willen worden.', ['zou'], 'I would like to get fitter.', 'zou graag willen.'),
    fill('Als ik minder stress ___, zou ik beter slapen. (hebben)', ['had'], 'If I had less stress, I would sleep better.', 'Past tense: had.'),
    fill('Je ___ minder suiker moeten eten.', ['zou'], 'You should eat less sugar.', 'zou moeten.'),
    fill('Ik ben vorig jaar vijf kilo ___. (afvallen)', ['afgevallen'], 'I lost five kilos last year.', 'af + ge + vallen, with zijn.'),
    build('If I were you, I would go to bed earlier.', 'Als ik jou was, zou ik eerder naar bed gaan.', ['ik zou', 'ben'], 'als … was; zou ik.'),
    build('What would you do if you had more time?', 'Wat zou je doen als je meer tijd had?', ['hebt', 'zal'], 'zou … doen; als … had.'),
    build('You should stop smoking.', 'Je zou moeten stoppen met roken.', ['moet', 'stopt'], 'zou moeten stoppen.'),
    build('I would like to lose weight.', 'Ik zou graag willen afvallen.', ['val af', 'wil'], 'zou graag willen afvallen.'),
    tr('en-nl', 'Avoid sugar and alcohol.', ['Vermijd suiker en alcohol.'], 'Imperative: vermijd.'),
    tr('nl-en', 'Als ik jou was, zou ik eens met de huisarts praten over je slaap.', ['If I were you, I would talk to the GP about your sleep some time.', 'If I were you I would have a chat with the GP about your sleep.'], 'als ik jou was; zou … praten.'),
    fix('Als ik jou ben, zou ik stoppen.', ['Als ik jou was, zou ik stoppen.'], 'Hypothetical: was.'),
    fix('Je zou moeten meer bewegen.', ['Je zou meer moeten bewegen.'], 'meer before the final verbs.'),
    dict('Je zou minder koffie moeten drinken en meer moeten bewegen.', 'You should drink less coffee and exercise more.', 'zou … moeten drinken; moeten bewegen.'),
    listen('Wat zou je doen als je elke nacht slecht sliep? — Ik zou stoppen met koffie na twaalf uur.', ['What would you do if you slept badly every night? — I would stop drinking coffee after twelve.', 'Do you sleep badly? — Yes, since twelve.', 'What do you drink at night? — Coffee.'], 0, 'zou … doen als … sliep; zou stoppen.'),
    speak('Als ik jou was, zou ik elke dag een half uur wandelen en ’s avonds geen schermen meer gebruiken.', 'If I were you, I would walk half an hour every day and not use screens in the evening.'),
    free('A friend says they are always tired. Give three pieces of advice with zou and als ik jou was.', 'Als ik jou was, zou ik eerder naar bed gaan. Je zou ook minder koffie moeten drinken. En je zou eens kunnen proberen om elke dag te wandelen.', 'If I were you, I would go to bed earlier. You should also drink less coffee. And you could try walking every day.', { hints: ['Als ik jou was, zou ik …', 'Je zou … moeten …', 'Je zou eens kunnen …'] }),
    auto(3, ['tr-nl-en', 'mc-meaning']),
  ], [
    mc('Als ik rijk ___, zou ik reizen.', ['ben', 'was'], 1, 'was.'),
    fill('Je ___ eens naar de dokter moeten gaan.', ['zou'], 'You should see the doctor some time.', 'zou moeten.'),
    fill('Ik ben gestopt ___ roken.', ['met'], 'I have quit smoking.', 'stoppen met.'),
    build('Could you help me?', 'Zou u mij kunnen helpen?', ['Kunt', 'helpt'], 'zou u … kunnen helpen.'),
    tr('en-nl', 'What would you do?', ['Wat zou je doen?', 'Wat zou jij doen?'], 'zou … doen.'),
    speak('Ik zou graag fitter willen worden, dus ik ga drie keer per week sporten.', 'I would like to get fitter, so I am going to exercise three times a week.'),
  ]));

  u4.push(lesson('s3u4l2', 'Habits and quitting: niet meer, nog niet, nooit, niemand, nergens', 'You can talk about habits you have changed or want to change, using the full range of Dutch negation correctly.', [
    h('One negative per idea'),
    table(['Dutch', 'English', 'opposite'], [['*niet meer / geen … meer', 'no longer', 'nog'], ['*nog niet / nog geen', 'not yet', 'al'], ['*nooit', 'never', 'wel eens, ooit'], ['*niemand', 'nobody', 'iemand'], ['*niets', 'nothing', 'iets'], ['*nergens', 'nowhere', 'ergens'], ['*geen enkele', 'not a single', ''], ['*helemaal niet', 'not at all', 'heel'], ['*nauwelijks', 'hardly', '']]),
    p('`Ik rook **niet meer**.` `Ik heb **nog niet** gesport.` `Ik heb **geen** sigaret **meer** gerookt.` `Ik drink **nooit** alcohol.` `**Niemand** vindt dat leuk.` Never stack them: not "nooit niemand".'),
    h('Position of niet'),
    p('After time and definite objects, before manner, place and final verbs: `Ik ga **morgen** niet **naar de sportschool**.` `Ik heb **die pizza** gisteren niet **gegeten**.` `niet meer` and `nog niet` stay together.'),
    ex(['Ik ontbijt nooit, maar ik zou het wel moeten doen.', 'I never have breakfast, but I should.'], ['Ik heb al drie maanden geen enkele sigaret gerookt.', 'I have not smoked a single cigarette for three months.'], ['Ik sport nog niet regelmatig, maar ik hou het wel vol.', 'I do not exercise regularly yet, but I am keeping it up.'], ['Ik kan nergens rustig slapen; het is overal lawaai.', 'I cannot sleep peacefully anywhere; there is noise everywhere.']),
    tip('Answering short: `Rook je nog? — Nee, niet meer.` `Al gesport? — Nog niet.` `Ooit gerookt? — Nooit.`'),
  ], ['g3-negation', 'g3-word-order'], ['verslaving', 'schermtijd', 'alcohol', 'sigaret', 'vegetarier', 'niet-meer', 'nog-niet-adv', 'nergens', 'nooit', 'niemand', 'geen-enkele', 'helemaal-niet', 'nauwelijks', 'wel-eens', 'volhouden', 'opgeven', 'wennen-aan'], [
    mc('"I no longer smoke":', ['Ik rook niet meer.', 'Ik rook nog niet.', 'Ik rook nooit meer niet.'], 0, 'niet meer.'),
    mc('"I have not been to the gym yet":', ['Ik ben niet meer naar de sportschool geweest.', 'Ik ben nog niet naar de sportschool geweest.', 'Ik ben nooit naar de sportschool niet geweest.'], 1, 'nog niet.'),
    mc('"Nobody ever helps me":', ['Niemand helpt me nooit.', 'Niemand helpt me ooit.', 'Nooit helpt niemand me.'], 1, 'One negative: niemand … ooit.'),
    mc('"I have no time any more":', ['Ik heb geen tijd meer.', 'Ik heb niet meer tijd.', 'Ik heb geen meer tijd.'], 0, 'geen … meer.'),
    fill('Ga je ___ eens naar de sportschool? — Nee, nooit.', ['wel'], 'Do you ever go to the gym? — No, never.', 'wel eens = ever.'),
    fill('Ik drink ___ alcohol meer. (no)', ['geen'], 'I no longer drink alcohol.', 'geen … meer.'),
    fill('Ik kan ___ een rustige plek vinden. (nowhere)', ['nergens'], 'I can find a quiet place nowhere.', 'nergens.'),
    fill('Ik heb het drie maanden ___. (volhouden, perfect)', ['volgehouden'], 'I kept it up for three months.', 'vol + ge + houden.'),
    build('I have not smoked a single cigarette.', 'Ik heb geen enkele sigaret gerookt.', ['niet', 'nooit'], 'geen enkele.'),
    build('I hardly sleep since I have that job.', 'Ik slaap nauwelijks sinds ik die baan heb.', ['heb ik', 'niet'], 'nauwelijks; sinds … heb.'),
    build('I am not going to the gym tomorrow.', 'Ik ga morgen niet naar de sportschool.', ['niet morgen', 'geen'], 'niet after time, before place.'),
    build('Do not give up!', 'Geef niet op!', ['opgeef', 'geen'], 'Imperative of opgeven: geef … op.'),
    tr('en-nl', 'I do not like exercising at all.', ['Ik vind sporten helemaal niet leuk.', 'Ik hou helemaal niet van sporten.'], 'helemaal niet.'),
    tr('nl-en', 'Ik ben gewend aan vroeg opstaan, maar ik ontbijt nog steeds nooit.', ['I am used to getting up early, but I still never have breakfast.', 'I have got used to getting up early but I still never eat breakfast.'], 'gewend aan; nog steeds nooit.'),
    fix('Ik heb nooit niemand gezien.', ['Ik heb nooit iemand gezien.', 'Ik heb niemand gezien.'], 'One negative.'),
    fix('Ik rook nog niet. (meaning: I quit)', ['Ik rook niet meer.'], 'no longer = niet meer.'),
    dict('Ik drink geen koffie meer na twaalf uur en ik slaap veel beter.', 'I no longer drink coffee after twelve and I sleep much better.', 'geen … meer.'),
    listen('Ik ben nog niet gestopt met roken, maar ik rook nauwelijks meer.', ['I have not quit smoking yet, but I hardly smoke any more.', 'I quit smoking a long time ago.', 'I smoke more than ever.'], 0, 'nog niet; nauwelijks meer.'),
    speak('Ik drink geen alcohol meer en ik heb al drie maanden geen enkele sigaret gerookt.', 'I no longer drink alcohol and I have not smoked a single cigarette for three months.'),
    free('Talk about a habit you changed: what you no longer do, what you have not managed yet, and what you never do.', 'Ik eet geen vlees meer. Ik ben nog niet helemaal vegetariër, want ik eet wel eens vis. Ik ontbijt nooit, dat moet ik nog veranderen.', 'I no longer eat meat. I am not fully vegetarian yet, because I sometimes eat fish. I never have breakfast, I still have to change that.', { hints: ['Ik … niet meer', 'Ik … nog niet', 'Ik … nooit'] }),
    match([['niet meer', 'no longer'], ['nog niet', 'not yet'], ['nergens', 'nowhere'], ['niemand', 'nobody'], ['nauwelijks', 'hardly'], ['wel eens', 'sometimes / ever']]),
  ], [
    mc('"Not yet":', ['niet meer', 'nog niet'], 1, 'nog niet.'),
    fill('Ik heb ___ tijd meer voor sport.', ['geen'], 'I have no time for sport any more.', 'geen … meer.'),
    fill('___ wil in de regen fietsen. (nobody)', ['Niemand'], 'Nobody wants to cycle in the rain.', 'niemand.'),
    build('I never eat fast food.', 'Ik eet nooit fastfood.', ['niet', 'geen'], 'nooit.'),
    tr('en-nl', 'I no longer drink coffee.', ['Ik drink geen koffie meer.', 'Ik drink niet meer koffie.'], 'geen … meer.'),
    speak('Ik heb nog nooit een marathon gelopen, maar ik geef niet op.', 'I have never run a marathon, but I am not giving up.'),
  ]));

  units.push(unit('s3u4', 'Gezondheid en levensstijl', 'health and lifestyle', u4, [
    mc('Als ik jou ___, zou ik meer slapen.', ['ben', 'was'], 1, 'was.'),
    mc('"No longer":', ['niet meer', 'nog niet'], 0, 'niet meer.'),
    fill('Je ___ minder moeten werken.', ['zou'], 'You should work less.', 'zou moeten.'),
    fill('Ik heb ___ enkele sigaret gerookt.', ['geen'], 'I have not smoked a single cigarette.', 'geen enkele.'),
    fill('Ik ben ___ aan vroeg opstaan. (used to)', ['gewend'], 'I am used to getting up early.', 'gewend aan.'),
    build('What would you do if you were me?', 'Wat zou je doen als je mij was?', ['bent', 'zal'], 'zou … doen; als … was.'),
    build('I have not exercised yet this week.', 'Ik heb deze week nog niet gesport.', ['niet meer', 'sport'], 'nog niet.'),
    fix('Ik heb nergens niets gevonden.', ['Ik heb nergens iets gevonden.', 'Ik heb niets gevonden.'], 'One negative.'),
    tr('en-nl', 'You should drink less coffee.', ['Je zou minder koffie moeten drinken.'], 'zou … moeten drinken.'),
    listen('Als ik minder zou werken, zou ik waarschijnlijk beter slapen en nooit meer zo moe zijn.', ['If I worked less, I would probably sleep better and never be so tired again.', 'I work less now and I sleep badly.', 'I would like to work more.'], 0, 'als … zou werken, zou … slapen; nooit meer.'),
    speak('Ik rook niet meer, ik drink nauwelijks en ik zou graag nog wat meer willen bewegen.', 'I no longer smoke, I hardly drink and I would like to move a bit more.'),
  ]));

  A.stage('s3', '3', 'B1', 'Intermediate', 'Independent Dutch: relative clauses, the passive, zou and hypotheticals, reported speech, infinitive constructions, deep word order, particles and register, across news, opinions, education, health, environment, money, work and Dutch culture.', units, []);
})();
