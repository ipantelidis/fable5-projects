/* Stage 3 (B1) — extra lessons for Unit 1 (Nieuws en samenleving) and Unit 2 (Meningen en discussies): lessons 3 to 5 of each unit.
   Loaded after stage3-u5-8.js; lessons are appended to the existing units. */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson } = A;
  const addTo = (unitId, l) => { const f = A.findUnit(unitId); if (f) f.unit.lessons.push(l); };
  const S = { stage: 3 };

  /* ================= Unit 1, lesson 3: the political system ================= */
  N('gemeenteraad', 'de', 'gemeenteraden', 'municipal council', 'De gemeenteraad beslist over het parkeerbeleid.', 'The municipal council decides on parking policy.', { theme: 'politics', ...S });
  N('burgemeester', 'de', 'burgemeesters', 'mayor', 'De burgemeester wordt benoemd, niet gekozen.', 'The mayor is appointed, not elected.', { theme: 'politics', ...S });
  N('wethouder', 'de', 'wethouders', 'alderman', 'De wethouder van verkeer kwam naar de buurtavond.', 'The alderman for traffic came to the neighbourhood evening.', { theme: 'politics', ...S });
  N('provincie', 'de', 'provincies', 'province', 'Nederland heeft twaalf provincies.', 'The Netherlands has twelve provinces.', { theme: 'politics', ...S });
  N('minister', 'de', 'ministers', 'minister', 'De minister van Onderwijs trad af.', 'The Minister of Education resigned.', { theme: 'politics', ...S });
  N('premier', 'de', 'premiers', 'prime minister', 'De premier sprak de pers toe.', 'The prime minister addressed the press.', { theme: 'politics', ...S, altNl: ['minister-president'] });
  N('koning', 'de', 'koningen', 'king', 'De koning leest op Prinsjesdag de troonrede voor.', 'On Prinsjesdag the king reads the speech from the throne.', { theme: 'politics', ...S });
  N('Prinsjesdag', 'de', null, 'Budget Day (third Tuesday of September)', 'Op Prinsjesdag worden de plannen voor het komende jaar gepresenteerd.', 'On Budget Day the plans for the coming year are presented.', { theme: 'politics', ...S });
  N('zetel', 'de', 'zetels', 'seat', 'De partij won vijf zetels.', 'The party won five seats.', { theme: 'politics', ...S });
  N('stem', 'de', 'stemmen', 'vote / voice', 'Elke stem telt.', 'Every vote counts.', { theme: 'politics', ...S });
  N('stempas', 'de', 'stempassen', 'polling card', 'Neem je stempas en je identiteitsbewijs mee.', 'Bring your polling card and your ID.', { theme: 'politics', ...S });
  N('formatie', 'de', 'formaties', 'government formation', 'De formatie duurde dit keer zeven maanden.', 'This time the formation took seven months.', { theme: 'politics', ...S });
  N('democratie', 'de', 'democratieën', 'democracy', 'Nederland is een parlementaire democratie.', 'The Netherlands is a parliamentary democracy.', { theme: 'politics', ...S });
  N('grondrecht', 'het', 'grondrechten', 'fundamental right', 'Vrijheid van meningsuiting is een grondrecht.', 'Freedom of expression is a fundamental right.', { theme: 'politics', ...S });
  VB('kiezen', 'to choose / elect', 'kies|kiest|kiezen', 'koos|kozen', 'gekozen', 'hebben', 'De Tweede Kamer wordt om de vier jaar gekozen.', 'The House of Representatives is elected every four years.', { theme: 'politics', ...S });
  VB('benoemen', 'to appoint', 'benoem|benoemt|benoemen', 'benoemde|benoemden', 'benoemd', 'hebben', 'De burgemeester wordt door de koning benoemd.', 'The mayor is appointed by the king.', { theme: 'politics', ...S });
  VB('regeren', 'to govern', 'regeer|regeert|regeren', 'regeerde|regeerden', 'geregeerd', 'hebben', 'Het land wordt geregeerd door een coalitie.', 'The country is governed by a coalition.', { theme: 'politics', ...S });
  VB('vertegenwoordigen', 'to represent', 'vertegenwoordig|vertegenwoordigt|vertegenwoordigen', 'vertegenwoordigde|vertegenwoordigden', 'vertegenwoordigd', 'hebben', 'Kamerleden vertegenwoordigen de kiezers.', 'Members of parliament represent the voters.', { theme: 'politics', ...S });
  W('landelijk', 'national', 'adj', 'Bij landelijke verkiezingen mag je alleen stemmen met de Nederlandse nationaliteit.', 'In national elections you may only vote with Dutch nationality.', { theme: 'politics', ...S });
  W('gemeentelijk', 'municipal', 'adj', 'De gemeentelijke belastingen stijgen.', 'The municipal taxes are rising.', { theme: 'politics', ...S });

  addTo('s3u1', lesson('s3u1l3', 'Who decides what? The Dutch political system', 'You can explain in simple terms how the Netherlands is governed, who you may vote for, and describe institutions with relative clauses and the passive.', [
    h('Three layers'),
    table(['layer', 'who', 'decides about'], [['*het Rijk', '*regering en Tweede Kamer', 'taxes, healthcare, migration, defence'], ['*de provincie', '*Provinciale Staten', 'roads, nature, regional transport'], ['*de gemeente', '*gemeenteraad, burgemeester en wethouders', 'parking, housing permits, waste, local taxes']]),
    p('`De Tweede Kamer`, **die 150 zetels heeft**, wordt om de vier jaar gekozen. No party ever wins a majority, so parties negotiate a `coalitie`; that process is `de formatie`. `De premier` leads the `kabinet`. `De koning` has a ceremonial role; on `Prinsjesdag` he reads the `troonrede`.'),
    h('Who may vote?'),
    list('`Gemeenteraad`: Dutch and EU citizens living in the municipality, and non-EU citizens who have lived legally in the Netherlands for five years.', '`Tweede Kamer` and `Provinciale Staten`: Dutch nationals only.', 'You receive a `stempas` by post; take it with your ID to any polling station in your municipality.'),
    h('Language you need'),
    p('Relative clauses and passives describe institutions: `de raad **die** over parkeren beslist`, `de burgemeester, **die** door de koning **wordt benoemd**`, `de wet **waarover** gestemd wordt`.'),
    ex(['De gemeenteraad, die om de vier jaar wordt gekozen, controleert de wethouders.', 'The municipal council, which is elected every four years, supervises the aldermen.'], ['In Nederland wordt de burgemeester niet gekozen maar benoemd.', 'In the Netherlands the mayor is not elected but appointed.'], ['Ik mag bij de gemeenteraadsverkiezingen stemmen, maar niet bij de landelijke.', 'I may vote in the municipal elections, but not in the national ones.'], ['De formatie van een nieuw kabinet kan maanden duren.', 'The formation of a new cabinet can take months.']),
    tip('If you are an EU citizen in Amsterdam you can vote for the gemeenteraad. It is the one election where your Dutch matters most: all the flyers are about your own street.'),
  ], ['g3-relative', 'g3-passive'], ['gemeenteraad', 'burgemeester', 'wethouder', 'provincie', 'minister', 'premier', 'koning', 'prinsjesdag', 'zetel', 'stem', 'stempas', 'formatie', 'democratie', 'grondrecht', 'kiezen', 'benoemen', 'regeren', 'vertegenwoordigen', 'landelijk', 'gemeentelijk'], [
    mc('Who decides about parking in your street?', ['de Tweede Kamer', 'de provincie', 'de gemeenteraad'], 2, 'Local matters: gemeente.'),
    mc('The Dutch mayor is', ['elected by the residents', 'appointed', 'chosen by the premier alone'], 1, 'benoemd, niet gekozen.'),
    mc('How many seats does the Tweede Kamer have?', ['75', '150', '300'], 1, '150 zetels.'),
    mc('An EU citizen living in Amsterdam may vote for', ['the Tweede Kamer', 'the gemeenteraad', 'neither'], 1, 'Municipal elections only.'),
    mc('De burgemeester ___ door de koning benoemd.', ['wordt', 'heeft', 'is geworden'], 0, 'Present passive: wordt.'),
    mc('De raad ___ over parkeren beslist, vergadert vanavond.', ['dat', 'die', 'wat'], 1, 'de raad → die.'),
    art('kabinet', 'het', 'het kabinet.'),
    art('provincie', 'de', 'de provincie.'),
    art('grondrecht', 'het', 'het recht → het grondrecht.'),
    fill('De Tweede Kamer wordt om de vier jaar ___. (kiezen)', ['gekozen'], 'The House is elected every four years.', 'kiezen → gekozen.'),
    fill('De partij won vijf ___. (seats)', ['zetels'], 'The party won five seats.', 'de zetel.'),
    fill('Neem je ___ en je identiteitsbewijs mee naar het stembureau.', ['stempas'], 'Bring your polling card and ID to the polling station.', 'de stempas.'),
    fill('Op ___ leest de koning de troonrede voor.', ['Prinsjesdag'], 'On Budget Day the king reads the speech from the throne.', 'Third Tuesday of September.'),
    build('The country is governed by a coalition.', 'Het land wordt geregeerd door een coalitie.', ['is', 'regeert'], 'wordt geregeerd door.'),
    build('Members of parliament represent the voters.', 'Kamerleden vertegenwoordigen de kiezers.', ['vertegenwoordigt', 'kiezen'], 'Plural verb.'),
    build('The council that decides on this meets tonight.', 'De raad die hierover beslist, vergadert vanavond.', ['dat', 'beslist hierover'], 'die … beslist; then vergadert.'),
    tr('en-nl', 'The Netherlands has twelve provinces.', ['Nederland heeft twaalf provincies.'], 'provincies.'),
    tr('nl-en', 'De formatie van een nieuw kabinet kan maanden duren.', ['The formation of a new cabinet can take months.', 'Forming a new cabinet can take months.'], 'formatie.'),
    fix('De burgemeester is gekozen door de inwoners.', ['De burgemeester wordt door de koning benoemd.', 'De burgemeester wordt benoemd.'], 'In the Netherlands the mayor is appointed (benoemd).'),
    dict('De gemeenteraad, die om de vier jaar wordt gekozen, controleert de wethouders.', 'The municipal council, which is elected every four years, supervises the aldermen.', 'die … wordt gekozen.'),
    listen('Bij de gemeenteraadsverkiezingen mogen ook inwoners uit andere EU-landen stemmen.', ['In municipal elections residents from other EU countries may also vote.', 'Only Dutch nationals may vote in municipal elections.', 'EU citizens may vote for the Tweede Kamer.'], 0, 'ook inwoners uit andere EU-landen.'),
    speak('In Nederland wint geen enkele partij een meerderheid, dus er wordt altijd een coalitie gevormd.', 'In the Netherlands no party wins a majority, so a coalition is always formed.'),
    free('Explain to a newcomer who decides about three things: rubbish collection, health insurance, and regional buses.', 'Over het ophalen van afval beslist de gemeente. De zorgverzekering wordt landelijk geregeld, door de regering en de Tweede Kamer. De streekbussen vallen onder de provincie.', 'The municipality decides on rubbish collection. Health insurance is arranged nationally, by the government and the House. Regional buses fall under the province.', { hints: ['Over … beslist …', '… wordt landelijk geregeld', '… vallen onder …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"De formatie" is', ['the election campaign', 'the forming of a government', 'a political party'], 1, 'Government formation.'),
    fill('De premier leidt het ___.', ['kabinet'], 'The prime minister leads the cabinet.', 'het kabinet.'),
    fill('De wet ___ morgen in de Kamer besproken. (present passive)', ['wordt'], 'The bill is discussed in the House tomorrow.', 'wordt.'),
    build('Every vote counts.', 'Elke stem telt.', ['elk', 'tellen'], 'de stem → elke stem.'),
    tr('en-nl', 'The mayor is appointed, not elected.', ['De burgemeester wordt benoemd, niet gekozen.'], 'benoemd / gekozen.'),
    speak('Ik mag bij de gemeenteraadsverkiezingen stemmen, maar niet bij de landelijke verkiezingen.', 'I may vote in the municipal elections, but not in the national elections.'),
  ]));

  /* ================= Unit 1, lesson 4: listening to the news ================= */
  N('nieuwslezer', 'de', 'nieuwslezers', 'newsreader', 'De nieuwslezer spreekt snel maar duidelijk.', 'The newsreader speaks fast but clearly.', { theme: 'media', ...S });
  N('verslaggever', 'de', 'verslaggevers', 'reporter', 'Onze verslaggever is ter plaatse.', 'Our reporter is on the spot.', { theme: 'media', ...S });
  N('bericht', 'het', 'berichten', 'report / message', 'Het bericht is nog niet bevestigd.', 'The report has not been confirmed yet.', { theme: 'media', ...S });
  N('weerbericht', 'het', 'weerberichten', 'weather forecast', 'Na het nieuws volgt het weerbericht.', 'After the news comes the weather forecast.', { theme: 'media', ...S });
  N('verkeersinformatie', 'de', null, 'traffic information', 'Dan nu de verkeersinformatie: tien kilometer file op de A2.', 'And now the traffic: ten kilometres of queues on the A2.', { theme: 'media', ...S });
  N('file', 'de', 'files', 'traffic jam', 'Er staat een lange file bij Utrecht.', 'There is a long traffic jam near Utrecht.', { theme: 'transport', ...S });
  N('woordvoerder', 'de', 'woordvoerders', 'spokesperson', 'Een woordvoerder van de NS bevestigt de storing.', 'A spokesperson for the railways confirms the disruption.', { theme: 'media', ...S });
  N('uitspraak', 'de', 'uitspraken', 'ruling / statement', 'De rechter doet morgen uitspraak.', 'The judge gives a ruling tomorrow.', { theme: 'news', ...S, id: 'uitspraak-ruling' });
  N('schade', 'de', null, 'damage', 'De storm heeft veel schade veroorzaakt.', 'The storm caused a lot of damage.', { theme: 'news', ...S });
  N('dader', 'de', 'daders', 'perpetrator', 'Van de dader ontbreekt elk spoor.', 'There is no trace of the perpetrator.', { theme: 'news', ...S });
  VB('melden', 'to report', 'meld|meldt|melden', 'meldde|meldden', 'gemeld', 'hebben', 'De politie meldt dat niemand gewond is.', 'The police report that nobody is injured.', { theme: 'news', ...S });
  VB('bevestigen', 'to confirm', 'bevestig|bevestigt|bevestigen', 'bevestigde|bevestigden', 'bevestigd', 'hebben', 'De gemeente heeft het bericht bevestigd.', 'The municipality confirmed the report.', { theme: 'news', ...S });
  VB('ontkennen', 'to deny', 'ontken|ontkent|ontkennen', 'ontkende|ontkenden', 'ontkend', 'hebben', 'De verdachte ontkent alles.', 'The suspect denies everything.', { theme: 'news', ...S });
  VB('omkomen', 'to die (in an accident)', 'kom om|komt om|komen om', 'kwam om|kwamen om', 'omgekomen', 'zijn', 'Bij het ongeluk kwam één persoon om.', 'One person died in the accident.', { theme: 'news', ...S });
  W('naar verluidt', 'reportedly', 'adv', 'Naar verluidt treedt de minister morgen af.', 'Reportedly the minister resigns tomorrow.', { theme: 'news', ...S, id: 'naar-verluidt' });
  W('mogelijk', 'possibly', 'adv', 'Mogelijk is de brand aangestoken.', 'The fire was possibly started deliberately.', { theme: 'news', ...S });
  W('zeker', 'at least / certainly', 'adv', 'Er zijn zeker tien gewonden.', 'There are at least ten injured.', { theme: 'news', ...S });
  PH('Dan nu …', 'And now … (radio)', 'Dan nu het weer.', 'And now the weather.', { theme: 'media', ...S, id: 'ph-dan-nu' });

  addTo('s3u1', lesson('s3u1l4', 'Listening to the radio news', 'You can follow a radio bulletin: recognise its fixed structure, catch the key facts, and tell confirmed facts from hedged reports.', [
    h('A bulletin always has the same shape'),
    list('Opening: `Het nieuws van tien uur.` / `NOS-nieuws, met …`', 'Three to five items, most important first. Each item: **what, where, who**, then **how many** and **why**.', '`Dan nu de verkeersinformatie` (files), then `het weer`.', 'The first sentence of each item is the headline in full: listen hardest there.'),
    h('Hedges: is it a fact?'),
    table(['hedge', 'meaning'], [['*volgens de politie', 'according to the police (their claim)'], ['*naar verluidt', 'reportedly'], ['*mogelijk / vermoedelijk', 'possibly / presumably'], ['*zou / zouden', 'is said to'], ['*zeker tien gewonden', 'at least ten injured'], ['*nog niet bevestigd', 'not yet confirmed']]),
    p('`De minister **zou** morgen aftreden` is not the same as `De minister treedt morgen af`. `bevestigen` (confirm) and `ontkennen` (deny) tell you which side is speaking.'),
    h('Numbers, places, names'),
    p('News is dense with numbers. Train your ear: `zeker vijftien` (at least 15), `ruim twee miljoen` (over 2 million), `een kwart` (a quarter), `de helft` (half), `verdubbeld` (doubled). Roads: `de A2 bij Utrecht`, `tien kilometer file`.'),
    ex(['Het nieuws van acht uur. Bij een brand in Rotterdam zijn vannacht zeker twaalf mensen gewond geraakt.', 'The eight o’clock news. In a fire in Rotterdam at least twelve people were injured last night.'], ['Volgens een woordvoerder van de brandweer is de oorzaak nog onbekend; mogelijk gaat het om kortsluiting.', 'According to a fire brigade spokesperson the cause is still unknown; it is possibly a short circuit.'], ['De minister zou morgen aftreden. Het ministerie wil het bericht niet bevestigen.', 'The minister is reported to be resigning tomorrow. The ministry will not confirm the report.'], ['Dan nu de verkeersinformatie: op de A10 staat acht kilometer file door een ongeluk.', 'And now the traffic: on the A10 there is an eight-kilometre queue because of an accident.']),
    tip('Listen to the NOS radio bulletin once a day. It is three minutes, it repeats every hour, and the same story is told again with small changes: perfect repetition.'),
  ], ['g3-passive', 'g3-indirect-speech'], ['nieuwslezer', 'verslaggever', 'bericht', 'weerbericht', 'verkeersinformatie', 'file', 'woordvoerder', 'uitspraak-ruling', 'schade', 'dader', 'melden', 'bevestigen', 'ontkennen', 'omkomen', 'naar-verluidt', 'mogelijk', 'zeker', 'ph-dan-nu'], [
    listen('Het nieuws van acht uur. Bij een brand in Rotterdam zijn vannacht zeker twaalf mensen gewond geraakt.', ['At least twelve people were injured in a fire in Rotterdam last night.', 'Twelve people died in a fire in Rotterdam.', 'Exactly twelve houses burned down in Rotterdam.'], 0, 'zeker = at least; gewond geraakt = injured.'),
    listen('De minister zou morgen aftreden. Het ministerie wil het bericht niet bevestigen.', ['The minister is reported to be resigning tomorrow; the ministry will not confirm it.', 'The minister resigned this morning.', 'The ministry confirms that the minister is resigning.'], 0, 'zou = reported; niet bevestigen.'),
    listen('Dan nu de verkeersinformatie: op de A10 staat acht kilometer file door een ongeluk.', ['There is an eight-kilometre queue on the A10 because of an accident.', 'The A10 is closed for eight days.', 'There is no traffic on the A10.'], 0, 'acht kilometer file; door een ongeluk.'),
    listen('Volgens de politie ontbreekt van de dader elk spoor.', ['According to the police there is no trace of the perpetrator.', 'The police have arrested the perpetrator.', 'The perpetrator has confessed.'], 0, 'ontbreekt elk spoor = no trace.'),
    listen('De storm heeft in het noorden van het land veel schade veroorzaakt; ruim tweeduizend huishoudens zitten zonder stroom.', ['The storm caused a lot of damage in the north; over two thousand households are without power.', 'Two thousand houses were destroyed in the south.', 'The storm is expected tomorrow.'], 0, 'ruim = over; zonder stroom.'),
    mc('"Naar verluidt" tells you the report is', ['confirmed', 'unconfirmed, from hearsay', 'false'], 1, 'reportedly.'),
    mc('"Zeker tien gewonden" means', ['exactly ten', 'at least ten', 'fewer than ten'], 1, 'zeker + number = at least.'),
    mc('"De verdachte ontkent" means the suspect', ['confesses', 'denies', 'is silent'], 1, 'ontkennen = deny.'),
    mc('Which comes last in a radio bulletin?', ['the main headline', 'traffic and weather', 'an interview'], 1, 'Dan nu het weer.'),
    fill('Een ___ van de NS bevestigt de storing. (spokesperson)', ['woordvoerder'], 'A spokesperson for the railways confirms the disruption.', 'woordvoerder.'),
    fill('Bij het ongeluk kwam één persoon ___. (died)', ['om'], 'One person died in the accident.', 'omkomen: kwam … om.'),
    fill('De rechter doet morgen ___. (ruling)', ['uitspraak'], 'The judge gives a ruling tomorrow.', 'uitspraak doen.'),
    build('The police report that nobody is injured.', 'De politie meldt dat niemand gewond is.', ['is gewond', 'meld'], 'meldt dat … is.'),
    build('The report has not been confirmed yet.', 'Het bericht is nog niet bevestigd.', ['heeft', 'niet nog'], 'is nog niet bevestigd.'),
    dict('Bij een ongeluk op de A2 zijn vanochtend drie auto’s op elkaar gebotst.', 'In an accident on the A2 three cars collided this morning.', 'op elkaar gebotst.'),
    dict('Na het nieuws volgt het weerbericht.', 'After the news comes the weather forecast.', 'weerbericht.'),
    tr('nl-en', 'Mogelijk is de brand aangestoken, maar dat is nog niet bevestigd.', ['The fire was possibly started deliberately, but that has not been confirmed yet.'], 'mogelijk; aangestoken.'),
    tr('en-nl', 'The suspect denies everything.', ['De verdachte ontkent alles.'], 'ontkennen.'),
    read('NOS-nieuws van twaalf uur. De treinen tussen Amsterdam en Utrecht rijden de rest van de dag niet. Volgens ProRail is een bovenleiding beschadigd geraakt; de oorzaak wordt nog onderzocht. Reizigers wordt aangeraden om via Almere te reizen en rekening te houden met een extra reistijd van drie kwartier. — In Den Haag is vanochtend een man aangehouden die ervan wordt verdacht vorige week een juwelier te hebben overvallen. Naar verluidt gaat het om een 34-jarige man uit Delft. De politie wil dat niet bevestigen. — Dan het weer: vanmiddag zonnig, vanavond vanuit het westen regen. Morgen zeventien graden.', [
      { q: 'Why are no trains running between Amsterdam and Utrecht?', options: ['a strike', 'a damaged overhead line', 'an accident'], answer: 1, explain: '"een bovenleiding beschadigd geraakt".' },
      { q: 'What are travellers advised to do?', options: ['wait', 'travel via Almere and allow 45 minutes extra', 'take the bus'], answer: 1, explain: '"via Almere … extra reistijd van drie kwartier".' },
      { q: 'Which fact about the arrested man is unconfirmed?', options: ['that he was arrested', 'that he is 34 and from Delft', 'that a jeweller was robbed'], answer: 1, explain: '"Naar verluidt … De politie wil dat niet bevestigen."' },
      { q: 'What will the weather be this evening?', options: ['sunny', 'rain from the west', 'seventeen degrees'], answer: 1, explain: '"vanavond vanuit het westen regen".' },
    ], { en: 'NOS news at twelve. Trains between Amsterdam and Utrecht are not running for the rest of the day. According to ProRail an overhead line was damaged; the cause is still being investigated. Travellers are advised to travel via Almere and to allow for an extra journey time of three quarters of an hour. — In The Hague a man was arrested this morning who is suspected of having robbed a jeweller last week. Reportedly it concerns a 34-year-old man from Delft. The police will not confirm that. — Then the weather: sunny this afternoon, rain from the west this evening. Tomorrow seventeen degrees.' }),
    speak('Volgens een woordvoerder is de oorzaak nog onbekend; mogelijk gaat het om kortsluiting.', 'According to a spokesperson the cause is still unknown; it is possibly a short circuit.'),
    free('Be the newsreader: give a 30-second bulletin with one news item, the traffic and the weather.', 'Het nieuws van negen uur. In Amsterdam-Oost is vannacht een fietsenwinkel afgebrand. Volgens de brandweer raakte niemand gewond; de oorzaak wordt onderzocht. Dan de verkeersinformatie: op de A10 staat vijf kilometer file. En het weer: vandaag bewolkt met af en toe regen, twaalf graden.', 'The nine o’clock news. In Amsterdam-Oost a bike shop burned down last night. According to the fire brigade nobody was injured; the cause is being investigated. Then the traffic: on the A10 there is a five-kilometre queue. And the weather: cloudy today with occasional rain, twelve degrees.', { hints: ['Het nieuws van … uur.', 'Volgens …', 'Dan de verkeersinformatie: …', 'En het weer: …'] }),
  ], [
    listen('Naar verluidt gaat het om een man uit Delft, maar de politie wil dat niet bevestigen.', ['Reportedly it is a man from Delft, but the police will not confirm that.', 'The police confirm it is a man from Delft.', 'A man from Delft called the police.'], 0, 'naar verluidt; niet bevestigen.'),
    listen('Er zijn zeker vijf mensen gewond geraakt, van wie twee ernstig.', ['At least five people were injured, two of them seriously.', 'Exactly two people were injured.', 'Five people died.'], 0, 'zeker vijf; van wie twee ernstig.'),
    mc('"De minister zou aftreden" means', ['the minister resigned', 'the minister is reported to be resigning', 'the minister should resign'], 1, 'Reporting zou.'),
    fill('Er staat tien kilometer ___ op de A2.', ['file'], 'There is a ten-kilometre queue on the A2.', 'de file.'),
    dict('Dan nu het weer: morgen zonnig en achttien graden.', 'And now the weather: sunny tomorrow and eighteen degrees.', 'dan nu het weer.'),
    speak('Het bericht is nog niet bevestigd, maar volgens de politie is er niemand gewond.', 'The report has not been confirmed yet, but according to the police nobody is injured.'),
  ]));

  /* ================= Unit 1, lesson 5: summarising an article ================= */
  N('samenvatting', 'de', 'samenvattingen', 'summary', 'Schrijf een samenvatting van honderd woorden.', 'Write a summary of a hundred words.', { theme: 'writing', ...S });
  N('hoofdzaak', 'de', 'hoofdzaken', 'main point', 'Beperk je tot de hoofdzaken.', 'Limit yourself to the main points.', { theme: 'writing', ...S });
  N('bijzaak', 'de', 'bijzaken', 'side issue', 'Voorbeelden en cijfers zijn vaak bijzaken.', 'Examples and figures are often side issues.', { theme: 'writing', ...S });
  N('kernzin', 'de', 'kernzinnen', 'topic sentence', 'De kernzin staat meestal aan het begin van de alinea.', 'The topic sentence is usually at the start of the paragraph.', { theme: 'writing', ...S });
  N('alinea', 'de', "alinea's", 'paragraph', 'Elke alinea heeft één onderwerp.', 'Each paragraph has one subject.', { theme: 'writing', ...S });
  N('auteur', 'de', 'auteurs', 'author', 'De auteur pleit voor meer sociale huur.', 'The author argues for more social housing.', { theme: 'writing', ...S });
  N('standpunt', 'het', 'standpunten', 'standpoint', 'Het standpunt van de auteur is duidelijk.', 'The author’s standpoint is clear.', { theme: 'writing', ...S });
  N('conclusie', 'de', 'conclusies', 'conclusion', 'De conclusie is dat er meer gebouwd moet worden.', 'The conclusion is that more must be built.', { theme: 'writing', ...S });
  VB('samenvatten', 'to summarise', 'vat samen|vat samen|vatten samen', 'vatte samen|vatten samen', 'samengevat', 'hebben', 'Kun je het artikel in drie zinnen samenvatten?', 'Can you summarise the article in three sentences?', { theme: 'writing', ...S });
  VB('stellen', 'to state', 'stel|stelt|stellen', 'stelde|stelden', 'gesteld', 'hebben', 'De auteur stelt dat de huren te hoog zijn.', 'The author states that rents are too high.', { theme: 'writing', ...S });
  VB('noemen', 'to mention / name', 'noem|noemt|noemen', 'noemde|noemden', 'genoemd', 'hebben', 'Het artikel noemt drie oorzaken.', 'The article mentions three causes.', { theme: 'writing', ...S });
  VB('wijzen op', 'to point to', 'wijs op|wijst op|wijzen op', 'wees op|wezen op', 'gewezen op', 'hebben', 'De schrijver wijst op de gevolgen voor jongeren.', 'The writer points to the consequences for young people.', { theme: 'writing', ...S, id: 'wijzen-op' });
  VB('weglaten', 'to leave out', 'laat weg|laat weg|laten weg', 'liet weg|lieten weg', 'weggelaten', 'hebben', 'Laat voorbeelden en herhalingen weg.', 'Leave out examples and repetitions.', { theme: 'writing', ...S });
  PH('Het artikel gaat over …', 'The article is about …', 'Het artikel gaat over de woningnood in de grote steden.', 'The article is about the housing shortage in the big cities.', { theme: 'writing', ...S, id: 'ph-artikel-gaat-over' });
  PH('Volgens de auteur …', 'According to the author …', 'Volgens de auteur is er te weinig gebouwd.', 'According to the author too little has been built.', { theme: 'writing', ...S, id: 'ph-volgens-de-auteur' });
  PH('Tot slot …', 'Finally …', 'Tot slot doet de auteur een voorstel.', 'Finally the author makes a proposal.', { theme: 'writing', ...S, id: 'ph-tot-slot' });

  addTo('s3u1', lesson('s3u1l5', 'Writing a short summary of an article', 'You can summarise a newspaper article in about 80 to 100 words: find the main points, report them with dat-clauses, and leave out the details.', [
    h('Method in five steps'),
    list('1. Read the **title, lead and last paragraph**: what is it about, and what does the author want?', '2. Mark the **kernzin** of each paragraph (usually the first sentence).', '3. Cross out **bijzaken**: examples, figures, quotes, repetitions.', '4. Write one sentence per main point, in **your own words**, in the **present tense**.', '5. Link them with signal words and check the length.'),
    h('Reporting verbs + dat'),
    p('A summary reports what someone else says, so it lives on reporting verbs with a `dat`-clause (verb at the end): `De auteur **stelt dat** de huren te hoog **zijn**.` `Het artikel **noemt** drie oorzaken.` `De schrijver **wijst erop dat** jongeren geen woning kunnen vinden.` `Volgens de auteur …` + inversion.'),
    table(['function', 'frame'], [['topic', '*Het artikel gaat over …'], ['claim', '*De auteur stelt / beweert / vindt dat …'], ['support', '*Hij wijst erop dat … / Zij noemt als voorbeeld …'], ['contrast', '*Daartegenover staat dat …'], ['end', '*Tot slot … / De conclusie is dat …']]),
    h('What not to do'),
    p('Do not give your own opinion, do not copy sentences, and do not start with "Ik vind". A summary is neutral: `de auteur vindt`, not `ik vind`.'),
    ex(['Het artikel gaat over de woningnood in de grote steden.', 'The article is about the housing shortage in the big cities.'], ['De auteur stelt dat er jarenlang te weinig is gebouwd.', 'The author states that too little has been built for years.'], ['Zij wijst erop dat vooral starters daarvan de dupe zijn.', 'She points out that first-time buyers in particular are the victims of this.'], ['Tot slot pleit ze voor meer sociale huurwoningen.', 'Finally she argues for more social rented homes.']),
    tip('If you cannot say the main idea in one sentence out loud, you have not found it yet. Say it first, write it second.'),
  ], ['g3-indirect-speech', 'g3-word-order'], ['samenvatting', 'hoofdzaak', 'bijzaak', 'kernzin', 'alinea', 'auteur', 'standpunt', 'conclusie', 'samenvatten', 'stellen', 'noemen', 'wijzen-op', 'weglaten', 'ph-artikel-gaat-over', 'ph-volgens-de-auteur', 'ph-tot-slot'], [
    mc('Where is the topic sentence of a Dutch paragraph usually found?', ['at the start', 'in the middle', 'never stated'], 0, 'The kernzin usually opens the paragraph.'),
    mc('Which belongs in a summary?', ['your own opinion', 'the author’s main claim', 'every example'], 1, 'Main points only, neutral.'),
    mc('Which tense do you use for a summary?', ['present', 'simple past', 'pluperfect'], 0, 'De auteur stelt dat …'),
    mc('"Bijzaken" are', ['main points', 'side issues such as examples and figures', 'conclusions'], 1, 'bijzaak = side issue.'),
    mc('De auteur stelt dat de huren te hoog ___.', ['zijn', 'zijn ze', 'te zijn'], 0, 'dat-clause: verb at the end.'),
    fill('Het artikel gaat ___ de woningnood.', ['over'], 'The article is about the housing shortage.', 'gaan over.'),
    fill('De schrijver wijst er___ dat jongeren geen woning vinden.', ['op'], 'The writer points out that young people cannot find a home.', 'wijzen op → erop dat.'),
    fill('___ de auteur is er te weinig gebouwd.', ['Volgens'], 'According to the author too little has been built.', 'volgens + inversion.'),
    fill('Tot ___ doet de auteur een voorstel.', ['slot'], 'Finally the author makes a proposal.', 'tot slot.'),
    fill('Laat voorbeelden en herhalingen ___. (leave out)', ['weg'], 'Leave out examples and repetitions.', 'weglaten: laat … weg.'),
    build('The author states that rents are too high.', 'De auteur stelt dat de huren te hoog zijn.', ['zijn te hoog', 'of'], 'stelt dat … zijn.'),
    build('The article mentions three causes.', 'Het artikel noemt drie oorzaken.', ['noemen', 'de artikel'], 'het artikel noemt.'),
    build('Can you summarise the text in three sentences?', 'Kun je de tekst in drie zinnen samenvatten?', ['vat samen', 'samengevat'], 'kun je … samenvatten.'),
    build('The conclusion is that more must be built.', 'De conclusie is dat er meer gebouwd moet worden.', ['moet er', 'bouwen'], 'dat er … gebouwd moet worden.'),
    fix('Ik vind dat de auteur gelijk heeft over de huren.', ['De auteur stelt dat de huren te hoog zijn.', 'Volgens de auteur zijn de huren te hoog.'], 'A summary is neutral: report, do not judge.'),
    fix('De auteur stelt dat zijn de huren te hoog.', ['De auteur stelt dat de huren te hoog zijn.'], 'Verb at the end after dat.'),
    tr('en-nl', 'According to the author, too little has been built.', ['Volgens de auteur is er te weinig gebouwd.'], 'volgens + inversion; is … gebouwd.'),
    tr('nl-en', 'Beperk je tot de hoofdzaken en laat de bijzaken weg.', ['Limit yourself to the main points and leave out the side issues.', 'Stick to the main points and leave out the details.'], 'hoofdzaken / bijzaken.'),
    dict('De auteur stelt dat er jarenlang te weinig is gebouwd.', 'The author states that too little has been built for years.', 'stelt dat … is gebouwd.'),
    read('Steeds meer jongeren blijven thuis wonen. Het aantal twintigers dat nog bij de ouders woont, is in tien jaar met een kwart gestegen. De belangrijkste oorzaak is het tekort aan betaalbare woningen: voor een sociale huurwoning sta je in de grote steden al snel tien jaar op de wachtlijst, en een koopwoning is voor starters onbereikbaar geworden. Zo vertelt de 27-jarige Daan dat hij ondanks een vaste baan geen hypotheek kan krijgen. Daarnaast speelt de studieschuld een rol, want banken tellen die mee bij een hypotheekaanvraag. Deskundigen waarschuwen dat jongeren hierdoor belangrijke beslissingen uitstellen, zoals samenwonen en kinderen krijgen. Zij pleiten daarom voor meer kleine, betaalbare woningen speciaal voor starters.', [
      { q: 'What is the main idea?', options: ['Daan cannot get a mortgage.', 'More young adults stay at home, mainly because of the shortage of affordable housing.', 'Banks count student debt.'], answer: 1, explain: 'Title and first two sentences carry it; Daan is an example.' },
      { q: 'Which of these is a bijzaak you would leave out?', options: ['the housing shortage as cause', 'the story of 27-year-old Daan', 'the experts’ proposal'], answer: 1, explain: 'An example illustrates; it is not a main point.' },
      { q: 'What do the experts want?', options: ['lower student debt', 'more small affordable homes for first-time buyers', 'longer waiting lists'], answer: 1, explain: '"meer kleine, betaalbare woningen speciaal voor starters".' },
    ], { en: 'More and more young people keep living at home. The number of people in their twenties still living with their parents has risen by a quarter in ten years. The main cause is the shortage of affordable homes: for a social rented home you are easily on the waiting list for ten years in the big cities, and buying has become out of reach for first-time buyers. 27-year-old Daan, for example, says that despite a permanent job he cannot get a mortgage. In addition student debt plays a role, because banks count it in a mortgage application. Experts warn that young people are therefore postponing important decisions, such as living together and having children. They therefore argue for more small, affordable homes especially for first-time buyers.' }),
    write('Summarise the article above in 60 to 80 words. Neutral, present tense, your own words.', ['Opens with the topic (Het artikel gaat over … / Steeds meer …)', 'Gives the main cause', 'Gives the second cause in one clause', 'Gives the consequence experts warn about', 'Ends with the proposal (Tot slot / Daarom pleiten …)', 'No example (Daan), no own opinion, verbs at the end after dat'], 'Het artikel gaat over jongeren die steeds langer thuis blijven wonen. Volgens de tekst komt dat vooral door het tekort aan betaalbare woningen: de wachtlijsten zijn lang en kopen is voor starters te duur. Ook de studieschuld maakt een hypotheek moeilijker. Deskundigen waarschuwen dat jongeren daardoor beslissingen zoals samenwonen uitstellen. Tot slot pleiten zij voor meer kleine, betaalbare woningen voor starters.'),
    speak('Het artikel gaat over de woningnood; de auteur stelt dat er jarenlang te weinig is gebouwd.', 'The article is about the housing shortage; the author states that too little has been built for years.'),
  ], [
    mc('A summary is written', ['in the first person with your opinion', 'neutrally, reporting the author'], 1, 'Neutral.'),
    fill('De auteur ___ dat de wachtlijsten te lang zijn. (states)', ['stelt'], 'The author states that the waiting lists are too long.', 'stellen dat.'),
    fill('Het artikel ___ over jongeren en wonen.', ['gaat'], 'The article is about young people and housing.', 'gaan over.'),
    build('Finally the author makes a proposal.', 'Tot slot doet de auteur een voorstel.', ['de auteur doet', 'maakt'], 'Inversion; een voorstel doen.'),
    tr('en-nl', 'Leave out the examples.', ['Laat de voorbeelden weg.'], 'weglaten.'),
    speak('Volgens de auteur is het tekort aan woningen de belangrijkste oorzaak.', 'According to the author the housing shortage is the main cause.'),
  ]));

  /* ================= Unit 2, lesson 3: reported speech in the past ================= */
  VB('antwoorden', 'to answer', 'antwoord|antwoordt|antwoorden', 'antwoordde|antwoordden', 'geantwoord', 'hebben', 'Hij antwoordde dat hij geen tijd had.', 'He answered that he had no time.', { theme: 'communication', ...S });
  VB('beloven', 'to promise', 'beloof|belooft|beloven', 'beloofde|beloofden', 'beloofd', 'hebben', 'Ze beloofde dat ze zou bellen.', 'She promised that she would call.', { theme: 'communication', ...S });
  VB('waarschuwen', 'to warn', 'waarschuw|waarschuwt|waarschuwen', 'waarschuwde|waarschuwden', 'gewaarschuwd', 'hebben', 'De buurman waarschuwde dat het glad was.', 'The neighbour warned that it was slippery.', { theme: 'communication', ...S });
  VB('voorstellen', 'to suggest', 'stel voor|stelt voor|stellen voor', 'stelde voor|stelden voor', 'voorgesteld', 'hebben', 'Hij stelde voor dat we de trein zouden nemen.', 'He suggested that we take the train.', { theme: 'communication', ...S });
  VB('zich afvragen', 'to wonder', 'vraag me af|vraagt zich af|vragen ons af', 'vroeg me af|vroegen ons af', 'afgevraagd', 'hebben', 'Ik vroeg me af of ze nog zou komen.', 'I wondered whether she would still come.', { theme: 'communication', ...S, id: 'zich-afvragen' });
  VB('klagen', 'to complain', 'klaag|klaagt|klagen', 'klaagde|klaagden', 'geklaagd', 'hebben', 'Ze klaagde dat het te duur was.', 'She complained that it was too expensive.', { theme: 'communication', ...S });
  VB('ontkennen', 'to deny', 'ontken|ontkent|ontkennen', 'ontkende|ontkenden', 'ontkend', 'hebben', 'Hij ontkende dat hij het had gezegd.', 'He denied that he had said it.', { theme: 'communication', ...S });
  VB('toegeven', 'to admit', 'geef toe|geeft toe|geven toe', 'gaf toe|gaven toe', 'toegegeven', 'hebben', 'Ze gaf toe dat ze zich had vergist.', 'She admitted that she had been mistaken.', { theme: 'communication', ...S });
  N('gerucht', 'het', 'geruchten', 'rumour', 'Er gaat een gerucht dat het bedrijf verhuist.', 'There is a rumour that the company is moving.', { theme: 'communication', ...S });
  N('misverstand', 'het', 'misverstanden', 'misunderstanding', 'Het was een misverstand.', 'It was a misunderstanding.', { theme: 'communication', ...S });
  N('belofte', 'de', 'beloftes', 'promise', 'Hij heeft zijn belofte niet gehouden.', 'He did not keep his promise.', { theme: 'communication', ...S });
  W('de volgende dag', 'the next day', 'adv', 'Ze zei dat ze de volgende dag zou komen.', 'She said that she would come the next day.', { theme: 'time', ...S, id: 'de-volgende-dag' });
  W('de dag ervoor', 'the day before', 'adv', 'Hij vertelde dat hij de dag ervoor ziek was geweest.', 'He said that he had been ill the day before.', { theme: 'time', ...S, id: 'de-dag-ervoor' });
  W('letterlijk', 'literally / word for word', 'adv', 'Dat heeft hij letterlijk zo gezegd.', 'He said that word for word.', { theme: 'communication', ...S });

  addTo('s3u2', lesson('s3u2l3', 'He said that he was tired: reported speech in the past', 'You can report what people said, asked, promised and denied, shifting tenses, pronouns and time words correctly.', [
    h('Backshift'),
    p('When the reporting verb is in the past, the reported verb normally moves one step back too.'),
    table(['direct', 'reported'], [['*"Ik ben moe."', '*Ze zei dat ze moe was.'], ['*"Ik heb hem gezien."', '*Hij zei dat hij hem had gezien.'], ['*"Ik zal morgen bellen."', '*Ze beloofde dat ze de volgende dag zou bellen.'], ['*"Kun je komen?"', '*Hij vroeg of ik kon komen.'], ['*"Waar woon je?"', '*Ze vroeg waar ik woonde.'], ['*"Pas op, het is glad!"', '*Hij waarschuwde dat het glad was.'], ['*"Bel me!"', '*Ze zei dat ik haar moest bellen.']]),
    h('Three things shift'),
    list('**Tense**: is → was, heeft gedaan → had gedaan, zal → zou, kan → kon, moet → moest.', '**Pronouns**: ik → hij / zij, jij → ik, mijn → zijn / haar.', '**Time and place**: morgen → de volgende dag, gisteren → de dag ervoor, hier → daar, nu → toen.'),
    p('If what was said is still true, Dutch often keeps the present: `Ze zei dat ze in Utrecht **woont**.` Both are fine; the backshift is always safe.'),
    h('Richer reporting verbs'),
    p('`zeggen` is only the start: `antwoorden`, `vertellen`, `beloven`, `waarschuwen`, `voorstellen`, `klagen`, `toegeven`, `ontkennen`, `zich afvragen`. Each one already tells the listener how it was said.'),
    ex(['De makelaar zei dat de woning al verhuurd was.', 'The estate agent said that the home had already been let.'], ['Ik vroeg me af of de trein nog zou rijden.', 'I wondered whether the train would still run.'], ['Hij ontkende dat hij de afspraak had vergeten, maar gaf later toe dat het een misverstand was.', 'He denied that he had forgotten the appointment, but later admitted that it was a misunderstanding.'], ['Ze beloofde dat ze de volgende dag zou terugbellen.', 'She promised that she would call back the next day.']),
    tip('Instructions always become `moest` + infinitive: "Wacht hier!" → `Hij zei dat ik daar moest wachten.`'),
  ], ['g3-indirect-speech'], ['antwoorden', 'beloven', 'waarschuwen', 'voorstellen', 'zich-afvragen', 'klagen', 'ontkennen', 'toegeven', 'gerucht', 'misverstand', 'belofte', 'de-volgende-dag', 'de-dag-ervoor', 'letterlijk'], [
    mc('"Ik ben moe." → Ze zei dat ze moe ___.', ['is', 'was', 'zou zijn'], 1, 'Backshift: is → was.'),
    mc('"Ik zal bellen." → Hij beloofde dat hij ___ bellen.', ['zal', 'zou', 'wilde'], 1, 'zal → zou.'),
    mc('"Kun je komen?" → Ze vroeg ___ ik kon komen.', ['dat', 'of', 'als'], 1, 'Yes/no question → of.'),
    mc('"Bel me!" → Hij zei dat ik hem ___ bellen.', ['moest', 'bel', 'zou moeten'], 0, 'Instruction → moest.'),
    mc('"Morgen" in reported speech about the past becomes', ['gisteren', 'de volgende dag', 'vandaag'], 1, 'de volgende dag.'),
    fill('"Ik heb het gezien." → Hij zei dat hij het ___ gezien.', ['had'], 'He said that he had seen it.', 'heeft → had.'),
    fill('"Waar woon je?" → Ze vroeg waar ik ___.', ['woonde'], 'She asked where I lived.', 'woon → woonde, verb at the end.'),
    fill('Ik vroeg me ___ of de winkel nog open was.', ['af'], 'I wondered whether the shop was still open.', 'zich afvragen: vroeg me af.'),
    fill('Ze gaf ___ dat ze zich had vergist.', ['toe'], 'She admitted that she had been mistaken.', 'toegeven: gaf toe.'),
    fill('Hij ___ dat het glad was. (warned)', ['waarschuwde'], 'He warned that it was slippery.', 'waarschuw + de.'),
    build('She said that she was tired.', 'Ze zei dat ze moe was.', ['was moe', 'is'], 'dat … was.'),
    build('He asked whether I could come.', 'Hij vroeg of ik kon komen.', ['dat', 'kon ik'], 'of … kon komen.'),
    build('She promised that she would call back the next day.', 'Ze beloofde dat ze de volgende dag zou terugbellen.', ['morgen', 'zal'], 'zou terugbellen; de volgende dag.'),
    build('He denied that he had said it.', 'Hij ontkende dat hij het had gezegd.', ['heeft', 'zei'], 'had gezegd.'),
    tr('en-nl', 'The agent said that the flat had already been let.', ['De makelaar zei dat de woning al verhuurd was.', 'De makelaar zei dat het appartement al verhuurd was.', 'De makelaar zei dat de woning al was verhuurd.'], 'was verhuurd / verhuurd was.'),
    tr('nl-en', 'Ze klaagde dat niemand haar had gewaarschuwd.', ['She complained that nobody had warned her.'], 'had gewaarschuwd.'),
    fix('Hij zei dat hij is ziek.', ['Hij zei dat hij ziek was.'], 'Verb at the end and backshift.'),
    fix('Ze vroeg dat ik kon helpen.', ['Ze vroeg of ik kon helpen.'], 'Question → of.'),
    dict('Hij ontkende dat hij de afspraak had vergeten.', 'He denied that he had forgotten the appointment.', 'had vergeten.'),
    listen('Mijn buurvrouw vertelde dat ze de dag ervoor een brief van de gemeente had gekregen.', ['My neighbour said that she had received a letter from the municipality the day before.', 'My neighbour will get a letter tomorrow.', 'My neighbour wrote a letter to the municipality.'], 0, 'de dag ervoor; had gekregen.'),
    speak('De huisarts zei dat ik meer moest bewegen en vroeg of ik nog rookte.', 'The GP said that I had to exercise more and asked whether I still smoked.'),
    free('Report a short conversation you had this week: what someone said, asked and promised.', 'Gisteren sprak ik mijn verhuurder. Hij zei dat de verwarming de week ervoor was gerepareerd. Ik vroeg of hij ook naar de kraan kon kijken. Hij beloofde dat hij de volgende dag iemand zou sturen.', 'Yesterday I spoke to my landlord. He said that the heating had been repaired the week before. I asked whether he could also look at the tap. He promised that he would send someone the next day.', { hints: ['Hij zei dat …', 'Ik vroeg of …', 'Hij beloofde dat … zou …'] }),
    auto(3, ['tr-nl-en', 'conj']),
  ], [
    mc('"Ik kan niet komen." → Hij zei dat hij niet ___ komen.', ['kan', 'kon'], 1, 'kan → kon.'),
    fill('Ze vroeg ___ ik tijd had.', ['of'], 'She asked whether I had time.', 'of.'),
    fill('Hij zei dat ik daar ___ wachten. (instruction)', ['moest'], 'He told me to wait there.', 'moest.'),
    build('I wondered whether the train would still run.', 'Ik vroeg me af of de trein nog zou rijden.', ['dat', 'zal'], 'vroeg me af of … zou rijden.'),
    tr('en-nl', 'It was a misunderstanding.', ['Het was een misverstand.'], 'het misverstand.'),
    speak('Ze zei dat ze de dag ervoor ziek was geweest, maar dat ze de volgende dag weer zou komen.', 'She said that she had been ill the day before, but that she would come again the next day.'),
  ]));

  /* ================= Unit 2, lesson 4: debating moves ================= */
  PH('Mag ik even iets zeggen?', 'May I say something?', 'Sorry, mag ik even iets zeggen?', 'Sorry, may I say something?', { theme: 'debate', ...S, id: 'ph-mag-ik-iets-zeggen' });
  PH('Laat me even uitpraten.', 'Let me finish.', 'Laat me even uitpraten, alsjeblieft.', 'Let me finish, please.', { theme: 'debate', ...S, id: 'ph-laat-me-uitpraten' });
  PH('Daar heb je een punt.', 'You have a point there.', 'Daar heb je een punt, maar toch zie ik het anders.', 'You have a point there, but I still see it differently.', { theme: 'debate', ...S, id: 'ph-daar-heb-je-een-punt' });
  PH('Dat ben ik met je eens, alleen …', 'I agree with you there, only …', 'Dat ben ik met je eens, alleen is het niet zo simpel.', 'I agree with you there, only it is not that simple.', { theme: 'debate', ...S, id: 'ph-eens-alleen' });
  PH('Wat bedoel je precies?', 'What exactly do you mean?', 'Wat bedoel je precies met "eerlijk"?', 'What exactly do you mean by "fair"?', { theme: 'debate', ...S, id: 'ph-wat-bedoel-je' });
  PH('Als ik je goed begrijp, …', 'If I understand you correctly, …', 'Als ik je goed begrijp, ben je tegen het plan.', 'If I understand you correctly, you are against the plan.', { theme: 'debate', ...S, id: 'ph-als-ik-je-goed-begrijp' });
  PH('Dat is een ander onderwerp.', 'That is a different topic.', 'Dat is een ander onderwerp; laten we bij het punt blijven.', 'That is a different topic; let us stick to the point.', { theme: 'debate', ...S, id: 'ph-ander-onderwerp' });
  PH('Om terug te komen op …', 'To come back to …', 'Om terug te komen op je eerste punt: dat klopt niet helemaal.', 'To come back to your first point: that is not entirely right.', { theme: 'debate', ...S, id: 'ph-om-terug-te-komen' });
  PH('Laten we het erop houden dat …', 'Let us agree that …', 'Laten we het erop houden dat we het niet eens zijn.', 'Let us agree to disagree.', { theme: 'debate', ...S, id: 'ph-erop-houden' });
  PH('Waar het om gaat, is …', 'The point is …', 'Waar het om gaat, is dat iedereen mee kan doen.', 'The point is that everyone can take part.', { theme: 'debate', ...S, id: 'ph-waar-het-om-gaat' });
  N('voorbeeld', 'het', 'voorbeelden', 'example', 'Kun je een voorbeeld geven?', 'Can you give an example?', { theme: 'debate', ...S });
  N('bewijs', 'het', 'bewijzen', 'proof / evidence', 'Daar is geen bewijs voor.', 'There is no evidence for that.', { theme: 'debate', ...S });
  N('uitzondering', 'de', 'uitzonderingen', 'exception', 'Dat is een uitzondering, geen regel.', 'That is an exception, not a rule.', { theme: 'debate', ...S });
  VB('kloppen', 'to be correct', 'klop|klopt|kloppen', 'klopte|klopten', 'geklopt', 'hebben', 'Dat klopt niet helemaal.', 'That is not entirely correct.', { theme: 'debate', ...S });
  VB('overdrijven', 'to exaggerate', 'overdrijf|overdrijft|overdrijven', 'overdreef|overdreven', 'overdreven', 'hebben', 'Je overdrijft een beetje.', 'You are exaggerating a bit.', { theme: 'debate', ...S });
  VB('afdwalen', 'to digress', 'dwaal af|dwaalt af|dwalen af', 'dwaalde af|dwaalden af', 'afgedwaald', 'zijn', 'We dwalen af.', 'We are getting off topic.', { theme: 'debate', ...S });
  W('terecht', 'rightly / justified', 'adv', 'Dat is een terechte opmerking.', 'That is a fair remark.', { theme: 'debate', ...S });
  W('onzin', 'nonsense', 'noun', 'Sorry, maar dat is onzin.', 'Sorry, but that is nonsense.', { theme: 'debate', ...S, gender: 'de', plural: null });

  addTo('s3u2', lesson('s3u2l4', 'Holding your own in a discussion', 'You can take the floor, keep it, concede a point, ask for clarification, bring a discussion back on track and close it politely.', [
    h('Six moves'),
    table(['move', 'Dutch'], [['take the floor', '*Mag ik even iets zeggen? / Mag ik daarop reageren?'], ['keep the floor', '*Laat me even uitpraten. / Ik ben bijna klaar.'], ['concede', '*Daar heb je een punt. / Dat is een terechte opmerking. / Dat ben ik met je eens, alleen …'], ['check', '*Wat bedoel je precies? / Als ik je goed begrijp, … / Kun je een voorbeeld geven?'], ['steer back', '*Dat is een ander onderwerp. / We dwalen af. / Om terug te komen op …'], ['close', '*Waar het om gaat, is … / Laten we het erop houden dat …']]),
    h('Dutch discussion culture'),
    p('Interrupting is normal and not rude, as long as you signal it (`Mag ik even …?`). Saying `Dat klopt niet` or `Daar ben ik het niet mee eens` to a manager is normal too. What **is** rude: getting personal, or not letting the other finish after they ask. Softeners (`even`, `een beetje`, `volgens mij`, `hoor`) keep it friendly.'),
    h('Concede, then turn'),
    p('The strongest pattern: agree with part, then turn with `maar`, `alleen` or `toch`: `Daar heb je een punt, **maar** …` `Dat klopt, **alleen** geldt dat niet voor iedereen.` After `alleen` the verb comes straight away (inversion).'),
    ex(['Sorry, mag ik even iets zeggen? Volgens mij dwalen we af.', 'Sorry, may I say something? I think we are getting off topic.'], ['Daar heb je een punt, maar dat is een uitzondering, geen regel.', 'You have a point there, but that is an exception, not a rule.'], ['Als ik je goed begrijp, vind je dat de gemeente moet betalen. Klopt dat?', 'If I understand you correctly, you think the municipality should pay. Is that right?'], ['Laten we het erop houden dat we het hierover niet eens worden.', 'Let us agree that we will not agree on this.']),
    tip('`Klopt dat?` at the end of your summary of the other person’s view is the single most useful discussion phrase: it shows you listened and buys you time.'),
  ], ['g3-particles', 'g3-word-order'], ['ph-mag-ik-iets-zeggen', 'ph-laat-me-uitpraten', 'ph-daar-heb-je-een-punt', 'ph-eens-alleen', 'ph-wat-bedoel-je', 'ph-als-ik-je-goed-begrijp', 'ph-ander-onderwerp', 'ph-om-terug-te-komen', 'ph-erop-houden', 'ph-waar-het-om-gaat', 'voorbeeld', 'bewijs', 'uitzondering', 'kloppen', 'overdrijven', 'afdwalen', 'terecht', 'onzin'], [
    mc('You want to interrupt politely:', ['Stil!', 'Mag ik even iets zeggen?', 'Dat is onzin.'], 1, 'Signal the interruption.'),
    mc('Someone interrupts you. You say:', ['Laat me even uitpraten.', 'Wat bedoel je precies?', 'Daar heb je een punt.'], 0, 'Keep the floor.'),
    mc('"Daar heb je een punt" means', ['you are wrong', 'you have a point', 'that is the end'], 1, 'Concession.'),
    mc('"We dwalen af" means', ['we agree', 'we are getting off topic', 'we are finished'], 1, 'afdwalen.'),
    mc('Dat klopt, alleen ___ dat niet voor iedereen.', ['geldt', 'dat geldt', 'het geldt'], 0, 'After alleen: inversion, verb first.'),
    mc('Is it rude in the Netherlands to tell your manager "Daar ben ik het niet mee eens"?', ['yes, always', 'no, it is normal', 'only in writing'], 1, 'Directness is normal.'),
    fill('Als ik je goed ___, ben je tegen het plan.', ['begrijp'], 'If I understand you correctly, you are against the plan.', 'als … begrijp; then inversion.'),
    fill('Kun je een ___ geven? (example)', ['voorbeeld'], 'Can you give an example?', 'het voorbeeld.'),
    fill('Dat is een ___, geen regel. (exception)', ['uitzondering'], 'That is an exception, not a rule.', 'de uitzondering.'),
    fill('Om terug te komen ___ je eerste punt: dat klopt niet.', ['op'], 'To come back to your first point: that is not right.', 'terugkomen op.'),
    fill('Je ___ een beetje, zo erg is het niet. (overdrijven)', ['overdrijft'], 'You are exaggerating a bit, it is not that bad.', 'overdrijf + t.'),
    build('What exactly do you mean?', 'Wat bedoel je precies?', ['bedoelt', 'precies je'], 'bedoel je (no t after inversion).'),
    build('That is a fair remark.', 'Dat is een terechte opmerking.', ['terecht', 'het'], 'de opmerking → terechte.'),
    build('The point is that everyone can take part.', 'Waar het om gaat, is dat iedereen mee kan doen.', ['kan iedereen', 'over'], 'waar het om gaat, is dat … kan doen.'),
    build('Let us agree that we do not agree.', 'Laten we het erop houden dat we het niet eens zijn.', ['zijn we', 'op het'], 'erop houden dat … zijn.'),
    tr('en-nl', 'There is no evidence for that.', ['Daar is geen bewijs voor.', 'Er is geen bewijs voor.', 'Daarvoor is geen bewijs.'], 'daar … voor.'),
    tr('nl-en', 'Dat ben ik met je eens, alleen is het niet zo simpel.', ['I agree with you there, only it is not that simple.', 'I agree with you on that, it is just not that simple.'], 'alleen + inversion.'),
    fix('Daar heb je een punt, maar dat een uitzondering is.', ['Daar heb je een punt, maar dat is een uitzondering.'], 'maar is coordinating: normal word order.'),
    dict('Sorry, mag ik even iets zeggen? Volgens mij dwalen we af.', 'Sorry, may I say something? I think we are getting off topic.', 'dwalen … af.'),
    listen('Als ik je goed begrijp, vind je dat de gemeente moet betalen. Klopt dat?', ['If I understand you correctly, you think the municipality should pay. Is that right?', 'I do not understand why the municipality pays.', 'You are right, the municipality pays.'], 0, 'Als ik je goed begrijp … Klopt dat?'),
    speak('Daar heb je een punt, maar laat me even uitpraten: waar het om gaat, is dat het eerlijk blijft.', 'You have a point there, but let me finish: the point is that it stays fair.'),
    free('A friend says: "Buitenlanders hoeven geen Nederlands te leren, iedereen spreekt toch Engels." React in four moves: concede something, disagree, give an example, close.', 'Daar heb je een punt: in Amsterdam kom je ver met Engels. Toch ben ik het niet met je eens. Bij de huisarts, op school en met de buren heb je echt Nederlands nodig; ik heb zelf een brief van de gemeente verkeerd begrepen. Waar het om gaat, is dat je zonder de taal altijd een gast blijft.', 'You have a point there: in Amsterdam you get far with English. Still I do not agree with you. At the GP, at school and with the neighbours you really need Dutch; I myself misunderstood a letter from the municipality. The point is that without the language you always remain a guest.', { hints: ['Daar heb je een punt: …', 'Toch …', 'Een voorbeeld: …', 'Waar het om gaat, is dat …'] }),
    match([['Mag ik even iets zeggen?', 'May I say something?'], ['Laat me even uitpraten.', 'Let me finish.'], ['Daar heb je een punt.', 'You have a point.'], ['We dwalen af.', 'We are off topic.'], ['Klopt dat?', 'Is that right?'], ['Dat is onzin.', 'That is nonsense.']]),
  ], [
    mc('"Dat klopt niet helemaal" means', ['that is completely wrong', 'that is not entirely correct'], 1, 'niet helemaal = not entirely.'),
    fill('Laat me even ___. (finish speaking)', ['uitpraten'], 'Let me finish.', 'uitpraten.'),
    fill('Dat is een ander ___.', ['onderwerp'], 'That is a different topic.', 'het onderwerp.'),
    build('You have a point there, but I see it differently.', 'Daar heb je een punt, maar ik zie het anders.', ['zie ik', 'ander'], 'maar + normal order.'),
    tr('en-nl', 'Can you give an example?', ['Kun je een voorbeeld geven?', 'Kunt u een voorbeeld geven?'], 'een voorbeeld geven.'),
    speak('Als ik je goed begrijp, ben je tegen. Klopt dat?', 'If I understand you correctly, you are against. Is that right?'),
  ]));

  /* ================= Unit 2, lesson 5: writing an opinion piece ================= */
  N('ingezonden brief', 'de', 'ingezonden brieven', 'letter to the editor', 'Ik heb een ingezonden brief naar Het Parool gestuurd.', 'I sent a letter to the editor of Het Parool.', { theme: 'writing', ...S, id: 'ingezonden-brief' });
  N('lezer', 'de', 'lezers', 'reader', 'Spreek de lezer direct aan.', 'Address the reader directly.', { theme: 'writing', ...S });
  N('titel', 'de', 'titels', 'title', 'Kies een titel die nieuwsgierig maakt.', 'Choose a title that makes people curious.', { theme: 'writing', ...S });
  N('inleiding', 'de', 'inleidingen', 'introduction', 'De inleiding noemt de aanleiding en je mening.', 'The introduction names the occasion and your opinion.', { theme: 'writing', ...S });
  N('aanleiding', 'de', 'aanleidingen', 'occasion / reason', 'De aanleiding was een artikel in de krant.', 'The occasion was an article in the newspaper.', { theme: 'writing', ...S });
  N('slot', 'het', null, 'ending', 'In het slot herhaal je je mening.', 'In the ending you repeat your opinion.', { theme: 'writing', ...S, id: 'slot-ending' });
  N('oproep', 'de', 'oproepen', 'call / appeal', 'Eindig met een oproep.', 'End with an appeal.', { theme: 'writing', ...S });
  VB('reageren op', 'to respond to', 'reageer op|reageert op|reageren op', 'reageerde op|reageerden op', 'gereageerd op', 'hebben', 'Ik reageer op het artikel van 3 mei.', 'I am responding to the article of 3 May.', { theme: 'writing', ...S, id: 'reageren-op' });
  VB('zich verbazen over', 'to be amazed at', 'verbaas me over|verbaast zich over|verbazen ons over', 'verbaasde me over|verbaasden ons over', 'verbaasd over', 'hebben', 'Ik verbaas me over het besluit.', 'I am amazed at the decision.', { theme: 'writing', ...S, id: 'zich-verbazen-over' });
  VB('zich ergeren aan', 'to be annoyed by', 'erger me aan|ergert zich aan|ergeren ons aan', 'ergerde me aan|ergerden ons aan', 'geërgerd aan', 'hebben', 'Ik erger me aan fietsen op de stoep.', 'I am annoyed by bikes on the pavement.', { theme: 'writing', ...S, id: 'zich-ergeren-aan' });
  PH('Met verbazing las ik …', 'With amazement I read …', 'Met verbazing las ik uw artikel over de nieuwe parkeertarieven.', 'With amazement I read your article about the new parking rates.', { theme: 'writing', ...S, id: 'ph-met-verbazing' });
  PH('Het wordt tijd dat …', 'It is time that …', 'Het wordt tijd dat de gemeente naar bewoners luistert.', 'It is time the municipality listened to residents.', { theme: 'writing', ...S, id: 'ph-het-wordt-tijd' });
  PH('Ten eerste … Ten tweede …', 'Firstly … Secondly …', 'Ten eerste is het onveilig. Ten tweede is het duur.', 'Firstly it is unsafe. Secondly it is expensive.', { theme: 'writing', ...S, id: 'ph-ten-eerste' });
  PH('Kortom', 'In short', 'Kortom, het plan moet van tafel.', 'In short, the plan must be dropped.', { theme: 'writing', ...S, id: 'ph-kortom-b1' });
  W('overtuigend', 'convincing', 'adj', 'Dat is geen overtuigend argument.', 'That is not a convincing argument.', { theme: 'writing', ...S });

  addTo('s3u2', lesson('s3u2l5', 'Writing an opinion piece', 'You can write a letter to the editor of about 120 words: occasion, opinion, two arguments, and a closing appeal.', [
    h('The shape of an ingezonden brief'),
    table(['part', 'job', 'frames'], [['titel', 'your opinion in five words', '*Fietsen horen niet op de stoep'], ['inleiding', 'occasion + opinion', '*Met verbazing las ik … / Ik reageer op … / Naar mijn mening …'], ['argument 1', 'strongest reason + example', '*Ten eerste … / Zo …'], ['argument 2', 'second reason', '*Ten tweede … / Bovendien …'], ['slot', 'repeat + appeal', '*Kortom, … / Het wordt tijd dat … / Ik roep de gemeente op om …']]),
    h('Feeling verbs with a fixed preposition'),
    p('`zich verbazen **over**`, `zich ergeren **aan**`, `zich zorgen maken **over**`, `teleurgesteld zijn **in**`, `blij zijn **met**`. With a thing: `Ik erger me **eraan**.` `**Waaraan** erger je je?`'),
    h('Style'),
    list('Short sentences. One idea per sentence.', 'Concrete examples from your own street beat general statements.', 'Address the reader or the decision-maker: `Wethouder, kom eens kijken.`', '`Het wordt tijd dat` + verb at the end is a classic closer.'),
    ex(['Met verbazing las ik dat de gemeente het zwembad wil sluiten.', 'With amazement I read that the municipality wants to close the swimming pool.'], ['Ten eerste leren kinderen daar zwemmen; in een stad vol water is dat geen luxe.', 'Firstly children learn to swim there; in a city full of water that is no luxury.'], ['Ten tweede is het de enige plek in de buurt waar ouderen kunnen bewegen.', 'Secondly it is the only place in the neighbourhood where older people can exercise.'], ['Kortom, het wordt tijd dat de wethouder met de buurt gaat praten.', 'In short, it is time the alderman talked to the neighbourhood.']),
    tip('Write the title last. If you cannot put your opinion in five words, the piece is not clear yet.'),
  ], ['g3-pronominal-adverbs', 'g3-register'], ['ingezonden-brief', 'lezer', 'titel', 'inleiding', 'aanleiding', 'slot-ending', 'oproep', 'reageren-op', 'zich-verbazen-over', 'zich-ergeren-aan', 'ph-met-verbazing', 'ph-het-wordt-tijd', 'ph-ten-eerste', 'ph-kortom-b1', 'overtuigend'], [
    mc('What goes in the inleiding of an opinion piece?', ['the appeal', 'the occasion and your opinion', 'all the arguments'], 1, 'aanleiding + mening.'),
    mc('Ik erger me ___ fietsen op de stoep.', ['over', 'aan', 'met'], 1, 'zich ergeren aan.'),
    mc('Ik verbaas me ___ het besluit.', ['over', 'aan', 'op'], 0, 'zich verbazen over.'),
    mc('Het wordt tijd dat de gemeente ___.', ['luistert naar bewoners', 'naar bewoners luistert', 'naar luistert bewoners'], 1, 'dat-clause: verb at the end.'),
    mc('"Waaraan erger je je?" asks', ['who annoys you', 'what annoys you', 'when you are annoyed'], 1, 'waaraan = at what.'),
    fill('Met ___ las ik uw artikel over de parkeertarieven.', ['verbazing'], 'With amazement I read your article about the parking rates.', 'met verbazing.'),
    fill('Ten eerste is het onveilig. Ten ___ is het duur.', ['tweede'], 'Firstly it is unsafe. Secondly it is expensive.', 'ten tweede.'),
    fill('___, het plan moet van tafel. (in short)', ['Kortom'], 'In short, the plan must be dropped.', 'kortom.'),
    fill('Ik reageer ___ het artikel van 3 mei.', ['op'], 'I am responding to the article of 3 May.', 'reageren op.'),
    fill('Fietsen op de stoep? Ik erger me er___.', ['aan'], 'Bikes on the pavement? They annoy me.', 'eraan.'),
    build('It is time the alderman talked to the neighbourhood.', 'Het wordt tijd dat de wethouder met de buurt gaat praten.', ['gaat de wethouder', 'praat gaan'], 'dat … gaat praten.'),
    build('Firstly children learn to swim there.', 'Ten eerste leren kinderen daar zwemmen.', ['kinderen leren', 'eerst'], 'Inversion after ten eerste.'),
    build('That is not a convincing argument.', 'Dat is geen overtuigend argument.', ['overtuigende', 'niet'], 'het argument + geen → no -e.'),
    build('I am amazed at the decision.', 'Ik verbaas me over het besluit.', ['aan', 'mijn'], 'verbaas me over.'),
    tr('en-nl', 'End with an appeal to the council.', ['Eindig met een oproep aan de gemeenteraad.', 'Eindig met een oproep aan de raad.'], 'een oproep aan.'),
    tr('nl-en', 'Wethouder, kom eens kijken in onze straat.', ['Alderman, come and have a look in our street.'], 'kom eens kijken.'),
    fix('Ik erger mij over het lawaai.', ['Ik erger me aan het lawaai.', 'Ik erger mij aan het lawaai.'], 'zich ergeren aan.'),
    dict('Met verbazing las ik dat de gemeente het zwembad wil sluiten.', 'With amazement I read that the municipality wants to close the swimming pool.', 'las ik dat … wil sluiten.'),
    listen('Ten eerste is het onveilig, ten tweede is het duur; kortom, het plan moet van tafel.', ['Firstly it is unsafe, secondly it is expensive; in short, the plan must be dropped.', 'The plan is safe and cheap.', 'The plan is on the table.'], 0, 'ten eerste, ten tweede, kortom.'),
    read('Fietsen horen niet op de stoep. Met verbazing las ik dat de gemeente niets wil doen aan geparkeerde fietsen in de Kinkerstraat. Ten eerste is het onveilig: met een kinderwagen of rolstoel kom je er niet langs en moet je de straat op. Ten tweede is er een oplossing: in de Jordaan zijn vorig jaar fietsvakken gemaakt op de plek van twee parkeerplaatsen, en daar is het probleem verdwenen. Natuurlijk kost dat parkeerruimte. Maar één auto neemt de plaats in van tien fietsen. Kortom, het wordt tijd dat de wethouder kiest voor de voetganger. — S. Taylor, Amsterdam-West', [
      { q: 'What is the writer’s opinion?', options: ['bikes should be banned', 'the municipality must act against bikes parked on the pavement', 'more car parking is needed'], answer: 1, explain: 'Title and inleiding.' },
      { q: 'What is the second argument?', options: ['it is unsafe', 'a solution exists and worked in the Jordaan', 'cars are too big'], answer: 1, explain: '"Ten tweede is er een oplossing".' },
      { q: 'How does the writer treat the counterargument?', options: ['ignores it', 'admits the cost, then puts it in proportion', 'agrees and gives up'], answer: 1, explain: '"Natuurlijk kost dat parkeerruimte. Maar …"' },
    ], { en: 'Bikes do not belong on the pavement. With amazement I read that the municipality does not want to do anything about parked bikes in the Kinkerstraat. Firstly it is unsafe: with a pram or wheelchair you cannot get past and have to go into the street. Secondly there is a solution: in the Jordaan bike bays were made last year in the place of two parking spaces, and there the problem has disappeared. Of course that costs parking space. But one car takes up the space of ten bikes. In short, it is time the alderman chose the pedestrian.' }),
    write('Write a letter to the editor (100 to 130 words) about something in your neighbourhood that should change.', ['A title that states your opinion', 'Inleiding: occasion + opinion (Met verbazing las ik … / Ik reageer op …)', 'Ten eerste … with a concrete example', 'Ten tweede …', 'One counterargument in one sentence, answered with Maar …', 'Slot: Kortom … + Het wordt tijd dat … (verb at the end)', 'Name and district at the end'], 'Meer bankjes in het Oosterpark. Met verbazing las ik dat de gemeente bankjes weghaalt om overlast te voorkomen. Ten eerste zijn bankjes er voor iedereen: ouderen uit onze buurt kunnen zonder rustpunt het park niet meer in. Ten tweede lost het niets op; wie overlast veroorzaakt, gaat gewoon op het gras zitten. Natuurlijk moet de gemeente iets doen tegen lawaai ’s nachts. Maar dat doe je met toezicht, niet door bankjes weg te halen. Kortom, het wordt tijd dat de wethouder luistert naar de mensen die het park elke dag gebruiken. — S. Taylor, Amsterdam-Oost'),
    speak('Met verbazing las ik uw artikel. Ten eerste klopt het niet, ten tweede is er een betere oplossing.', 'With amazement I read your article. Firstly it is not correct, secondly there is a better solution.'),
  ], [
    mc('A good closer for an opinion piece:', ['Ik weet het niet.', 'Het wordt tijd dat …', 'Met verbazing las ik …'], 1, 'Appeal at the end.'),
    fill('Ik verbaas me ___ de hoge prijzen.', ['over'], 'I am amazed at the high prices.', 'over.'),
    fill('Het wordt tijd dat er iets ___. (gebeuren)', ['gebeurt'], 'It is time something happened.', 'Verb at the end; present tense with -t.'),
    build('Secondly it is expensive.', 'Ten tweede is het duur.', ['het is', 'tweede ten'], 'Inversion.'),
    tr('en-nl', 'I am responding to your article.', ['Ik reageer op uw artikel.', 'Ik reageer op je artikel.'], 'reageren op.'),
    speak('Kortom, het wordt tijd dat de gemeente naar de bewoners luistert.', 'In short, it is time the municipality listened to the residents.'),
  ]));
})();
