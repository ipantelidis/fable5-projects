/* Stage 1 (A1) — Unit 3: Eten en boodschappen · Unit 4: De stad en vervoer */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = NL.content._s1units;

  /* ---------------- Vocabulary: Unit 3 ---------------- */
  VB('houden', 'to hold / to love (houden van)', 'hou|houdt|houden', 'hield|hielden', 'gehouden', 'hebben', 'Ik hou van kaas.', 'I love cheese.', { theme: 'basics', stage: 1, note: 'ik hou (also written houd), jij houdt, hij houdt.' });
  N('groente', 'de', 'groenten', 'vegetables', 'Ik eet elke dag groente.', 'I eat vegetables every day.', { theme: 'food', stage: 1 });
  N('fruit', 'het', null, 'fruit', 'Fruit is gezond.', 'Fruit is healthy.', { theme: 'food', stage: 1 });
  N('vlees', 'het', null, 'meat', 'Ik eet geen vlees.', 'I do not eat meat.', { theme: 'food', stage: 1 });
  N('kip', 'de', 'kippen', 'chicken', 'Wij eten kip met rijst.', 'We eat chicken with rice.', { theme: 'food', stage: 1 });
  N('rijst', 'de', null, 'rice', 'De rijst is klaar.', 'The rice is ready.', { theme: 'food', stage: 1 });
  N('aardappel', 'de', 'aardappels', 'potato', 'Nederlanders eten veel aardappels.', 'Dutch people eat a lot of potatoes.', { theme: 'food', stage: 1, altNl: ['aardappelen'] });
  N('soep', 'de', 'soepen', 'soup', 'De soep is heet.', 'The soup is hot.', { theme: 'food', stage: 1 });
  N('salade', 'de', 'salades', 'salad', 'Een salade met kip, graag.', 'A salad with chicken, please.', { theme: 'food', stage: 1 });
  N('boter', 'de', null, 'butter', 'Brood met boter en kaas.', 'Bread with butter and cheese.', { theme: 'food', stage: 1 });
  N('zout', 'het', null, 'salt', 'Mag ik het zout?', 'May I have the salt?', { theme: 'food', stage: 1 });
  N('sap', 'het', 'sappen', 'juice', 'Een glas sinaasappelsap, graag.', 'A glass of orange juice, please.', { theme: 'food', stage: 1 });
  N('bier', 'het', 'bieren', 'beer', 'Nederlands bier is lekker.', 'Dutch beer is tasty.', { theme: 'food', stage: 1 });
  N('lunch', 'de', 'lunches', 'lunch', 'De lunch is om half een.', 'Lunch is at half past twelve.', { theme: 'food', stage: 1 });
  N('avondeten', 'het', null, 'dinner', 'Het avondeten is om zes uur.', 'Dinner is at six.', { theme: 'food', stage: 1, altNl: ['diner'] });
  N('eten', 'het', null, 'food', 'Het eten is klaar!', 'The food is ready!', { theme: 'food', stage: 1, id: 'eten-noun' });
  N('vegetariër', 'de', 'vegetariërs', 'vegetarian', 'Mijn zus is vegetariër.', 'My sister is a vegetarian.', { theme: 'food', stage: 1 });
  W('gezond', 'healthy', 'adj', 'Groente is gezond.', 'Vegetables are healthy.', { theme: 'food', stage: 1 });
  W('zoet', 'sweet', 'adj', 'De appel is zoet.', 'The apple is sweet.', { theme: 'food', stage: 1 });
  W('heet', 'hot (temperature)', 'adj', 'De koffie is heet.', 'The coffee is hot.', { theme: 'food', stage: 1 });
  W('vers', 'fresh', 'adj', 'Het brood is vers.', 'The bread is fresh.', { theme: 'food', stage: 1 });
  N('tomaat', 'de', 'tomaten', 'tomato', 'Een kilo tomaten, graag.', 'A kilo of tomatoes, please.', { theme: 'food', stage: 1 });
  N('sinaasappel', 'de', 'sinaasappels', 'orange', 'Ik eet een sinaasappel.', 'I am eating an orange.', { theme: 'food', stage: 1 });
  N('banaan', 'de', 'bananen', 'banana', 'De banaan is geel.', 'The banana is yellow.', { theme: 'food', stage: 1 });

  VB('kunnen', 'can / to be able to', 'kan|kan|kunnen', 'kon|konden', 'gekund', 'hebben', 'Ik kan goed koken.', 'I can cook well.', { theme: 'modals', stage: 1, note: 'jij kunt / jij kan (both correct); u kunt.' });
  VB('mogen', 'may / to be allowed to', 'mag|mag|mogen', 'mocht|mochten', 'gemogen', 'hebben', 'Mag ik hier zitten?', 'May I sit here?', { theme: 'modals', stage: 1 });
  VB('moeten', 'must / to have to', 'moet|moet|moeten', 'moest|moesten', 'gemoeten', 'hebben', 'Ik moet nu gaan.', 'I have to go now.', { theme: 'modals', stage: 1 });
  VB('willen', 'to want', 'wil|wil|willen', 'wilde|wilden', 'gewild', 'hebben', 'Ik wil graag een thee.', 'I would like a tea.', { theme: 'modals', stage: 1, note: 'jij wilt / jij wil; u wilt.' });
  VB('zullen', 'shall / will', 'zal|zal|zullen', 'zou|zouden', null, 'hebben', 'Zullen we gaan?', 'Shall we go?', { theme: 'modals', stage: 1, note: 'jij zult / jij zal; no participle in normal use.' });
  VB('helpen', 'to help', 'help|helpt|helpen', 'hielp|hielpen', 'geholpen', 'hebben', 'Kun je me helpen?', 'Can you help me?', { theme: 'basics', stage: 1 });
  VB('koken', 'to cook', 'kook|kookt|koken', 'kookte|kookten', 'gekookt', 'hebben', 'Mijn vader kookt vanavond.', 'My father is cooking tonight.', { theme: 'food', stage: 1 });
  VB('bestellen', 'to order', 'bestel|bestelt|bestellen', 'bestelde|bestelden', 'besteld', 'hebben', 'Wij bestellen twee koffie.', 'We order two coffees.', { theme: 'food', stage: 1 });
  VB('proberen', 'to try', 'probeer|probeert|proberen', 'probeerde|probeerden', 'geprobeerd', 'hebben', 'Ik probeer Nederlands te spreken.', 'I try to speak Dutch.', { theme: 'basics', stage: 1 });
  VB('wachten', 'to wait', 'wacht|wacht|wachten', 'wachtte|wachtten', 'gewacht', 'hebben', 'Wij wachten op de tram.', 'We are waiting for the tram.', { theme: 'basics', stage: 1, note: 'wachten op = wait for.' });
  VB('parkeren', 'to park', 'parkeer|parkeert|parkeren', 'parkeerde|parkeerden', 'geparkeerd', 'hebben', 'Hier mag je niet parkeren.', 'You may not park here.', { theme: 'transport', stage: 1 });
  VB('zwemmen', 'to swim', 'zwem|zwemt|zwemmen', 'zwom|zwommen', 'gezwommen', 'hebben/zijn', 'Ik kan niet zwemmen.', 'I cannot swim.', { theme: 'hobbies', stage: 1 });
  W('straks', 'later (today)', 'adv', 'Ik bel je straks.', 'I will call you later.', { theme: 'time', stage: 1 });
  W('even', 'just / for a moment', 'adv', 'Wacht even!', 'Wait a moment!', { theme: 'basics', stage: 1, note: 'Softens requests: Kun je even helpen?' });
  W('me', 'me', 'pron', 'Kun je me helpen?', 'Can you help me?', { theme: 'basics', stage: 1, altNl: ['mij'] });
  W('binnen', 'inside', 'adv', 'Kom binnen!', 'Come in!', { theme: 'basics', stage: 1 });
  W('buiten', 'outside', 'adv', 'De kinderen spelen buiten.', 'The children are playing outside.', { theme: 'basics', stage: 1 });

  N('zak', 'de', 'zakken', 'bag (paper/plastic) / pocket', 'Een zak aardappels.', 'A bag of potatoes.', { theme: 'shopping', stage: 1 });
  N('pak', 'het', 'pakken', 'carton / pack', 'Een pak melk, graag.', 'A carton of milk, please.', { theme: 'shopping', stage: 1 });
  N('stuk', 'het', 'stukken', 'piece', 'Een stuk kaas.', 'A piece of cheese.', { theme: 'shopping', stage: 1 });
  N('plak', 'de', 'plakken', 'slice', 'Vier plakken kaas.', 'Four slices of cheese.', { theme: 'shopping', stage: 1 });
  N('pond', 'het', 'ponden', 'pound (500 g)', 'Een pond gehakt.', 'A pound of minced meat.', { theme: 'shopping', stage: 1 });
  N('liter', 'de', 'liters', 'litre', 'Een liter melk.', 'A litre of milk.', { theme: 'shopping', stage: 1 });
  N('supermarkt', 'de', 'supermarkten', 'supermarket', 'De supermarkt is tot tien uur open.', 'The supermarket is open until ten.', { theme: 'shopping', stage: 1 });
  N('bakker', 'de', 'bakkers', 'baker / bakery', 'Ik koop brood bij de bakker.', 'I buy bread at the bakery.', { theme: 'shopping', stage: 1 });
  N('slager', 'de', 'slagers', 'butcher', 'De slager is op de hoek.', 'The butcher is on the corner.', { theme: 'shopping', stage: 1 });
  PH('boodschappen doen', 'to do the shopping (groceries)', 'Ik doe boodschappen op zaterdag.', 'I do the shopping on Saturday.', { theme: 'shopping', stage: 1 });
  N('aanbieding', 'de', 'aanbiedingen', 'special offer', 'De kaas is in de aanbieding.', 'The cheese is on offer.', { theme: 'shopping', stage: 1 });
  N('klant', 'de', 'klanten', 'customer', 'De klant is koning.', 'The customer is king.', { theme: 'shopping', stage: 1 });
  N('verkoper', 'de', 'verkopers', 'shop assistant / seller', 'De verkoper is aardig.', 'The shop assistant is friendly.', { theme: 'shopping', stage: 1 });
  N('broodje', 'het', 'broodjes', 'bread roll / sandwich', 'Een broodje kaas, graag.', 'A cheese roll, please.', { theme: 'food', stage: 1 });
  N('koekje', 'het', 'koekjes', 'biscuit', 'Wil je een koekje?', 'Do you want a biscuit?', { theme: 'food', stage: 1 });
  N('glaasje', 'het', 'glaasjes', 'small glass', 'Een glaasje wijn.', 'A small glass of wine.', { theme: 'food', stage: 1 });
  N('momentje', 'het', 'momentjes', 'a moment', 'Een momentje, alstublieft.', 'One moment, please.', { theme: 'basics', stage: 1 });
  N('uurtje', 'het', 'uurtjes', 'an hour or so', 'Ik ga een uurtje slapen.', 'I am going to sleep for an hour or so.', { theme: 'time', stage: 1 });
  N('bloem', 'de', 'bloemen', 'flower', 'Ik koop bloemen op de markt.', 'I buy flowers at the market.', { theme: 'shopping', stage: 1 });
  W('genoeg', 'enough', 'adv', 'Dat is genoeg, dank je.', 'That is enough, thank you.', { theme: 'basics', stage: 1 });
  W('nodig', 'necessary (nodig hebben = to need)', 'adj', 'Ik heb melk nodig.', 'I need milk.', { theme: 'basics', stage: 1, note: 'nodig hebben: Ik heb … nodig.' });

  N('ober', 'de', 'obers', 'waiter', 'De ober brengt de kaart.', 'The waiter brings the menu.', { theme: 'cafe', stage: 1 });
  N('menu', 'het', "menu's", 'menu (set meal)', 'Het menu van de dag.', 'The menu of the day.', { theme: 'cafe', stage: 1 });
  N('kaart', 'de', 'kaarten', 'menu (card)', 'Mag ik de kaart?', 'May I have the menu?', { theme: 'cafe', stage: 1, id: 'kaart-menu' });
  N('voorgerecht', 'het', 'voorgerechten', 'starter', 'Als voorgerecht neem ik soep.', 'As a starter I will have soup.', { theme: 'cafe', stage: 1 });
  N('hoofdgerecht', 'het', 'hoofdgerechten', 'main course', 'Het hoofdgerecht is vis.', 'The main course is fish.', { theme: 'cafe', stage: 1 });
  N('toetje', 'het', 'toetjes', 'dessert', 'Wil je een toetje?', 'Do you want a dessert?', { theme: 'cafe', stage: 1, altNl: ['nagerecht'] });
  N('restaurant', 'het', 'restaurants', 'restaurant', 'Het restaurant is vol.', 'The restaurant is full.', { theme: 'cafe', stage: 1 });
  VB('reserveren', 'to reserve / book', 'reserveer|reserveert|reserveren', 'reserveerde|reserveerden', 'gereserveerd', 'hebben', 'Ik wil een tafel reserveren.', 'I want to book a table.', { theme: 'cafe', stage: 1 });
  N('fooi', 'de', 'fooien', 'tip', 'Wij geven een fooi.', 'We give a tip.', { theme: 'cafe', stage: 1 });
  VB('nemen', 'to take', 'neem|neemt|nemen', 'nam|namen', 'genomen', 'hebben', 'Ik neem de vis.', 'I will have the fish.', { theme: 'basics', stage: 1 });
  VB('geven', 'to give', 'geef|geeft|geven', 'gaf|gaven', 'gegeven', 'hebben', 'Geef me de kaart, alsjeblieft.', 'Give me the menu, please.', { theme: 'basics', stage: 1 });
  W('vanavond', 'tonight / this evening', 'adv', 'Vanavond eten we buiten de deur.', 'Tonight we are eating out.', { theme: 'time', stage: 1 });
  W('vanmiddag', 'this afternoon', 'adv', 'Vanmiddag ga ik naar de markt.', 'This afternoon I am going to the market.', { theme: 'time', stage: 1 });
  W('morgenochtend', 'tomorrow morning', 'adv', 'Morgenochtend werk ik.', 'Tomorrow morning I work.', { theme: 'time', stage: 1 });
  W('daarna', 'after that', 'adv', 'Eerst eten we, daarna kijken we een film.', 'First we eat, then we watch a film.', { theme: 'time', stage: 1 });
  W('dan', 'then', 'adv', 'Dan ga ik naar huis.', 'Then I go home.', { theme: 'time', stage: 1 });
  W('eerst', 'first', 'adv', 'Eerst koffie, dan werk.', 'First coffee, then work.', { theme: 'time', stage: 1 });
  W('samen', 'together', 'adv', 'Zullen we samen eten?', 'Shall we eat together?', { theme: 'basics', stage: 1 });
  W('klaar', 'ready / finished', 'adj', 'Het eten is klaar.', 'The food is ready.', { theme: 'basics', stage: 1 });
  W('iets', 'something', 'pron', 'Wil je iets drinken?', 'Do you want something to drink?', { theme: 'basics', stage: 1 });
  W('niets', 'nothing', 'pron', 'Ik wil niets, dank je.', 'I want nothing, thanks.', { theme: 'basics', stage: 1 });

  /* ---------------- Vocabulary: Unit 4 ---------------- */
  N('park', 'het', 'parken', 'park', 'Het Vondelpark is groot.', 'The Vondelpark is big.', { theme: 'city', stage: 1 });
  N('ziekenhuis', 'het', 'ziekenhuizen', 'hospital', 'Het ziekenhuis is in Zuid.', 'The hospital is in South.', { theme: 'city', stage: 1 });
  N('bibliotheek', 'de', 'bibliotheken', 'library', 'De bibliotheek is gratis.', 'The library is free.', { theme: 'city', stage: 1 });
  N('apotheek', 'de', 'apotheken', 'pharmacy', 'Is er een apotheek in de buurt?', 'Is there a pharmacy nearby?', { theme: 'city', stage: 1 });
  N('centrum', 'het', 'centra', 'centre', 'Het centrum is druk.', 'The centre is busy.', { theme: 'city', stage: 1 });
  N('kerk', 'de', 'kerken', 'church', 'De kerk is oud.', 'The church is old.', { theme: 'city', stage: 1 });
  N('gebouw', 'het', 'gebouwen', 'building', 'Dat gebouw is nieuw.', 'That building is new.', { theme: 'city', stage: 1 });
  N('bioscoop', 'de', 'bioscopen', 'cinema', 'Wij gaan naar de bioscoop.', 'We are going to the cinema.', { theme: 'city', stage: 1 });
  N('zwembad', 'het', 'zwembaden', 'swimming pool', 'Het zwembad is open.', 'The swimming pool is open.', { theme: 'city', stage: 1 });
  N('sportschool', 'de', 'sportscholen', 'gym', 'Ik ga naar de sportschool.', 'I go to the gym.', { theme: 'city', stage: 1 });
  N('politie', 'de', null, 'police', 'De politie is er.', 'The police are here.', { theme: 'city', stage: 1 });
  N('gemeente', 'de', 'gemeenten', 'municipality (city hall)', 'Ik heb een afspraak bij de gemeente.', 'I have an appointment at the municipality.', { theme: 'bureaucracy', stage: 1 });
  N('postkantoor', 'het', 'postkantoren', 'post office', 'Het postkantoor is in de supermarkt.', 'The post office is in the supermarket.', { theme: 'city', stage: 1 });
  N('gratis', 'de', null, 'free (of charge)', 'De bibliotheek is gratis.', 'The library is free.', { theme: 'basics', stage: 1, pos: 'adj', gender: undefined });
  W('door', 'through', 'prep', 'Wij fietsen door het park.', 'We cycle through the park.', { theme: 'prepositions', stage: 1 });
  W('langs', 'along / past', 'prep', 'Loop langs de gracht.', 'Walk along the canal.', { theme: 'prepositions', stage: 1 });
  W('over', 'across / over', 'prep', 'Over de brug is de markt.', 'Across the bridge is the market.', { theme: 'prepositions', stage: 1, id: 'over-prep' });
  W('tot', 'until / as far as', 'prep', 'Loop tot het plein.', 'Walk as far as the square.', { theme: 'prepositions', stage: 1 });
  W('van', 'from / of', 'prep', 'Van hier naar het station is tien minuten.', 'From here to the station is ten minutes.', { theme: 'prepositions', stage: 1 });
  W('dichtbij', 'nearby', 'adv', 'De apotheek is dichtbij.', 'The pharmacy is nearby.', { theme: 'directions', stage: 1 });
  W('rechtsaf', 'to the right (turn)', 'adv', 'Ga hier rechtsaf.', 'Turn right here.', { theme: 'directions', stage: 1 });
  W('linksaf', 'to the left (turn)', 'adv', 'Bij de kerk linksaf.', 'Turn left at the church.', { theme: 'directions', stage: 1 });
  W('tweede', 'second', 'num', 'De tweede straat links.', 'The second street on the left.', { theme: 'numbers', stage: 1 });
  W('derde', 'third', 'num', 'Ik woon op de derde verdieping.', 'I live on the third floor.', { theme: 'numbers', stage: 1 });
  N('kant', 'de', 'kanten', 'side', 'Aan de andere kant van de gracht.', 'On the other side of the canal.', { theme: 'directions', stage: 1 });
  W('andere', 'other', 'adj', 'De andere kant.', 'The other side.', { theme: 'basics', stage: 1, altNl: ['ander'] });

  VB('opstaan', 'to get up', 'sta op|staat op|staan op', 'stond op|stonden op', 'opgestaan', 'zijn', 'Ik sta om zeven uur op.', 'I get up at seven.', { theme: 'daily', stage: 1, note: 'Separable: ik sta … op.' });
  VB('aankomen', 'to arrive', 'kom aan|komt aan|komen aan', 'kwam aan|kwamen aan', 'aangekomen', 'zijn', 'De trein komt om tien uur aan.', 'The train arrives at ten.', { theme: 'transport', stage: 1, note: 'Separable: de trein komt … aan.' });
  VB('vertrekken', 'to depart', 'vertrek|vertrekt|vertrekken', 'vertrok|vertrokken', 'vertrokken', 'zijn', 'De bus vertrekt om acht uur.', 'The bus departs at eight.', { theme: 'transport', stage: 1, note: 'ver- prefix: NOT separable.' });
  VB('instappen', 'to get on / in', 'stap in|stapt in|stappen in', 'stapte in|stapten in', 'ingestapt', 'zijn', 'Wij stappen bij het station in.', 'We get on at the station.', { theme: 'transport', stage: 1 });
  VB('uitstappen', 'to get off / out', 'stap uit|stapt uit|stappen uit', 'stapte uit|stapten uit', 'uitgestapt', 'zijn', 'Je stapt bij de Dam uit.', 'You get off at the Dam.', { theme: 'transport', stage: 1 });
  VB('overstappen', 'to change (transport)', 'stap over|stapt over|stappen over', 'stapte over|stapten over', 'overgestapt', 'zijn', 'Je stapt in Utrecht over.', 'You change in Utrecht.', { theme: 'transport', stage: 1 });
  VB('meenemen', 'to take along / bring', 'neem mee|neemt mee|nemen mee', 'nam mee|namen mee', 'meegenomen', 'hebben', 'Neem je een jas mee?', 'Are you bringing a coat?', { theme: 'basics', stage: 1 });
  VB('opbellen', 'to call (phone)', 'bel op|belt op|bellen op', 'belde op|belden op', 'opgebeld', 'hebben', 'Ik bel je morgen op.', 'I will call you tomorrow.', { theme: 'basics', stage: 1 });
  VB('terugkomen', 'to come back', 'kom terug|komt terug|komen terug', 'kwam terug|kwamen terug', 'teruggekomen', 'zijn', 'Wanneer kom je terug?', 'When are you coming back?', { theme: 'basics', stage: 1 });
  VB('uitgaan', 'to go out', 'ga uit|gaat uit|gaan uit', 'ging uit|gingen uit', 'uitgegaan', 'zijn', 'Wij gaan zaterdag uit.', 'We are going out on Saturday.', { theme: 'social', stage: 1 });
  VB('opruimen', 'to tidy up', 'ruim op|ruimt op|ruimen op', 'ruimde op|ruimden op', 'opgeruimd', 'hebben', 'Ik ruim mijn kamer op.', 'I tidy my room.', { theme: 'home', stage: 1 });
  VB('dichtdoen', 'to close', 'doe dicht|doet dicht|doen dicht', 'deed dicht|deden dicht', 'dichtgedaan', 'hebben', 'Doe de deur dicht, alsjeblieft.', 'Close the door, please.', { theme: 'home', stage: 1 });
  VB('opendoen', 'to open', 'doe open|doet open|doen open', 'deed open|deden open', 'opengedaan', 'hebben', 'Ik doe het raam open.', 'I open the window.', { theme: 'home', stage: 1 });
  VB('afspreken', 'to arrange to meet', 'spreek af|spreekt af|spreken af', 'sprak af|spraken af', 'afgesproken', 'hebben', 'Zullen we morgen afspreken?', 'Shall we meet tomorrow?', { theme: 'social', stage: 1 });
  N('jas', 'de', 'jassen', 'coat', 'Neem een jas mee.', 'Take a coat.', { theme: 'clothes', stage: 1 });

  N('dienstregeling', 'de', 'dienstregelingen', 'timetable', 'De dienstregeling staat in de app.', 'The timetable is in the app.', { theme: 'transport', stage: 1 });
  N('vertraging', 'de', 'vertragingen', 'delay', 'De trein heeft tien minuten vertraging.', 'The train is ten minutes late.', { theme: 'transport', stage: 1 });
  N('perron', 'het', 'perrons', 'platform', 'Het perron is druk.', 'The platform is busy.', { theme: 'transport', stage: 1 });
  N('reis', 'de', 'reizen', 'journey / trip', 'Goede reis!', 'Have a good trip!', { theme: 'transport', stage: 1 });
  VB('reizen', 'to travel', 'reis|reist|reizen', 'reisde|reisden', 'gereisd', 'hebben/zijn', 'Ik reis elke dag met de trein.', 'I travel by train every day.', { theme: 'transport', stage: 1 });
  N('conducteur', 'de', 'conducteurs', 'conductor', 'De conducteur controleert de kaartjes.', 'The conductor checks the tickets.', { theme: 'transport', stage: 1 });
  N('automaat', 'de', 'automaten', 'ticket machine', 'Koop een kaartje bij de automaat.', 'Buy a ticket at the machine.', { theme: 'transport', stage: 1 });
  N('richting', 'de', 'richtingen', 'direction', 'Tram 2 richting Centraal Station.', 'Tram 2 towards Central Station.', { theme: 'transport', stage: 1 });
  W('laatste', 'last', 'adj', 'De laatste trein gaat om één uur.', 'The last train goes at one.', { theme: 'time', stage: 1 });
  W('volgende', 'next', 'adj', 'De volgende halte is de Dam.', 'The next stop is the Dam.', { theme: 'time', stage: 1, altNl: ['volgend'] });
  W('vorige', 'previous / last', 'adj', 'Vorige week was ik ziek.', 'Last week I was ill.', { theme: 'time', stage: 1, altNl: ['vorig'] });
  W('na', 'after', 'prep', 'Na het werk ga ik sporten.', 'After work I go exercise.', { theme: 'time', stage: 1 });
  W('tijdens', 'during', 'prep', 'Tijdens de les spreken we Nederlands.', 'During the lesson we speak Dutch.', { theme: 'time', stage: 1 });
  W('sinds', 'since', 'prep', 'Ik woon hier sinds maart.', 'I have lived here since March.', { theme: 'time', stage: 1 });
  W('geleden', 'ago', 'adv', 'Ik kwam twee jaar geleden naar Nederland.', 'I came to the Netherlands two years ago.', { theme: 'time', stage: 1, note: 'Comes after the time: twee jaar geleden.' });
  PH('van … tot', 'from … to / until', 'De winkel is open van negen tot zes.', 'The shop is open from nine to six.', { theme: 'time', stage: 1, id: 'van-tot' });
  N('zomer', 'de', 'zomers', 'summer', 'In de zomer fiets ik veel.', 'In summer I cycle a lot.', { theme: 'time', stage: 1 });
  N('winter', 'de', 'winters', 'winter', 'De winter is donker.', 'Winter is dark.', { theme: 'time', stage: 1 });
  VB('duren', 'to last / take (time)', 'duur|duurt|duren', 'duurde|duurden', 'geduurd', 'hebben', 'De reis duurt een uur.', 'The journey takes an hour.', { theme: 'time', stage: 1 });

  VB('zien', 'to see', 'zie|ziet|zien', 'zag|zagen', 'gezien', 'hebben', 'Ik zie de tram.', 'I see the tram.', { theme: 'basics', stage: 1 });
  N('fietser', 'de', 'fietsers', 'cyclist', 'Let op de fietsers!', 'Watch out for the cyclists!', { theme: 'transport', stage: 1 });
  N('slot', 'het', 'sloten', 'lock', 'Mijn fiets heeft twee sloten.', 'My bike has two locks.', { theme: 'transport', stage: 1 });
  PH('op slot zetten', 'to lock', 'Zet je fiets altijd op slot.', 'Always lock your bike.', { theme: 'transport', stage: 1 });
  N('band', 'de', 'banden', 'tyre', 'Mijn band is lek.', 'My tyre is flat.', { theme: 'transport', stage: 1 });
  W('lek', 'flat / leaking', 'adj', 'De band is lek.', 'The tyre is flat.', { theme: 'transport', stage: 1 });
  N('fietsenmaker', 'de', 'fietsenmakers', 'bike repair shop', 'De fietsenmaker is op de hoek.', 'The bike repair shop is on the corner.', { theme: 'transport', stage: 1 });
  N('fietsenstalling', 'de', 'fietsenstallingen', 'bike parking', 'De fietsenstalling bij het station is enorm.', 'The bike parking at the station is enormous.', { theme: 'transport', stage: 1 });
  N('stoplicht', 'het', 'stoplichten', 'traffic light', 'Het stoplicht is rood.', 'The traffic light is red.', { theme: 'transport', stage: 1 });
  VB('rijden', 'to drive / ride', 'rijd|rijdt|rijden', 'reed|reden', 'gereden', 'hebben/zijn', 'Ik rijd geen auto in Amsterdam.', 'I do not drive a car in Amsterdam.', { theme: 'transport', stage: 1 });
  N('taxi', 'de', "taxi's", 'taxi', 'Wij nemen een taxi.', 'We take a taxi.', { theme: 'transport', stage: 1 });
  N('verkeer', 'het', null, 'traffic', 'Het verkeer is druk.', 'The traffic is heavy.', { theme: 'transport', stage: 1 });
  W('gevaarlijk', 'dangerous', 'adj', 'Fietsen zonder licht is gevaarlijk.', 'Cycling without lights is dangerous.', { theme: 'basics', stage: 1 });
  W('voorzichtig', 'careful', 'adj', 'Wees voorzichtig!', 'Be careful!', { theme: 'basics', stage: 1 });
  VB('oversteken', 'to cross (the street)', 'steek over|steekt over|steken over', 'stak over|staken over', 'overgestoken', 'zijn', 'Steek hier over.', 'Cross here.', { theme: 'transport', stage: 1 });
  W('snel', 'fast / quick', 'adj', 'De metro is snel.', 'The metro is fast.', { theme: 'basics', stage: 1 });
  W('langzaam', 'slow', 'adj', 'De bus is langzaam.', 'The bus is slow.', { theme: 'basics', stage: 1 });
  N('bel', 'de', 'bellen', 'bell', 'Gebruik je bel!', 'Use your bell!', { theme: 'transport', stage: 1 });
  N('helm', 'de', 'helmen', 'helmet', 'Bijna niemand draagt een helm.', 'Almost nobody wears a helmet.', { theme: 'transport', stage: 1 });

  /* ================= UNIT 3: Eten en boodschappen ================= */
  const u3 = [];

  u3.push(lesson('s1u3l1', 'Food: what do you like?', 'You can say what you like and dislike eating and drinking, using houden van, lekker vinden and graag.', [
    h('Three ways to like'),
    table(['pattern', 'example', ''], [['*houden van + noun', '*Ik hou van kaas.', 'I love cheese.'], ['*… lekker / leuk vinden', '*Ik vind vis lekker.', 'I like fish (find it tasty).'], ['verb + *graag', '*Ik eet graag buiten.', 'I like eating outside.']]),
    p('Negatives: `Ik hou niet van vlees.` `Ik vind bier niet lekker.` `Ik kook niet graag.` The word `lekker` is for taste, weather, sleep and feelings; `leuk` is for fun and nice; `mooi` for beautiful.'),
    p('`vinden` is your opinion verb: `Ik vind Nederlands leuk.` `Wat vind je van Amsterdam?` (What do you think of Amsterdam?)'),
    h('Meals'),
    table(['', '', '', ''], [['*het ontbijt', 'breakfast', '*de lunch', 'lunch'], ['*het avondeten', 'dinner', '*het eten', 'food'], ['*de groente', 'vegetables', '*het fruit', 'fruit'], ['*het vlees', 'meat', '*de vis', 'fish'], ['*de kip', 'chicken', '*de rijst', 'rice'], ['*de aardappel', 'potato', '*de soep', 'soup']]),
    p('Dutch lunch is famously simple: `een broodje kaas` (a cheese roll) and a glass of milk. Dinner is early, around six. The classic dinner is `aardappels, groente en vlees`.'),
    ex(['Hou je van Nederlands eten? — Ik hou van kaas en stroopwafels.', 'Do you like Dutch food? — I love cheese and stroopwafels.'], ['Mijn zus is vegetariër, zij eet geen vlees.', 'My sister is a vegetarian, she does not eat meat.'], ['Ik drink graag koffie, maar ik vind thee niet lekker.', 'I like drinking coffee, but I do not like tea.']),
  ], ['g1-likes'], ['houden', 'groente', 'fruit', 'vlees', 'kip', 'rijst', 'aardappel', 'soep', 'salade', 'boter', 'zout', 'sap', 'bier', 'lunch', 'avondeten', 'eten-noun', 'vegetarier', 'gezond', 'zoet', 'heet', 'vers', 'tomaat', 'sinaasappel', 'banaan'], [
    fill('Ik hou ___ kaas.', ['van'], 'I love cheese.', 'houden van + noun.'),
    fill('Ik ___ vis lekker.', ['vind'], 'I like fish.', 'lekker vinden: ik vind … lekker.'),
    fill('Hij drinkt ___ bier.', ['graag'], 'He likes drinking beer.', 'verb + graag = like doing.'),
    fill('Mijn broer ___ van muziek.', ['houdt'], 'My brother loves music.', 'hij houdt: stem houd + t.'),
    fill('Wij eten ___ vlees; wij zijn vegetariër.', ['geen'], 'We eat no meat; we are vegetarian.', 'geen before a noun without article.'),
    mc('"Ik vind bier niet lekker" means …', ['I do not find beer.', 'I do not like beer.', 'I never drink beer.'], 1, 'niet lekker vinden = not like (taste).'),
    mc('Which word for "I like the weather"?', ['lekker weer', 'leuk weer', 'mooi weer'], 0, 'lekker and mooi both work for weather (lekker weer, mooi weer); the everyday choice is lekker. leuk is for fun things.'),
    mc('What is a typical Dutch lunch?', ['a warm three-course meal', 'a cheese roll and a glass of milk', 'soup and rice'], 1, 'Een broodje kaas met een glas melk. Dinner is the warm meal, around six.'),
    build('Do you like Dutch food?', 'Hou je van Nederlands eten?', ['houdt', 'lekker'], 'hou je (no t after je) + van.'),
    build('I like fruit, but I do not like vegetables.', 'Ik hou van fruit, maar ik hou niet van groente.', ['geen', 'vind'], 'niet goes before van.'),
    build('What do you think of Amsterdam?', 'Wat vind je van Amsterdam?', ['vindt', 'hou'], 'wat vind je van = what do you think of.'),
    build('She likes cooking.', 'Zij kookt graag.', ['houdt', 'lekker'], 'verb + graag.'),
    fix('Ik hou van niet vlees.', ['Ik hou niet van vlees.'], 'niet comes before the preposition phrase: niet van vlees.'),
    fix('Ik vind koffie graag.', ['Ik vind koffie lekker.', 'Ik drink graag koffie.'], 'vinden goes with lekker/leuk; graag goes with a verb (drinken).'),
    tr('en-nl', 'The soup is hot.', ['De soep is heet.'], 'heet = hot (temperature).'),
    tr('nl-en', 'Het fruit is vers en gezond.', ['The fruit is fresh and healthy.'], 'vers = fresh; gezond = healthy.'),
    dict('Ik hou van kip met rijst.', 'I love chicken with rice.', 'hou van; kip; rijst.'),
    listen('Mijn vader vindt vis niet lekker.', ['My father does not like fish.', 'My father likes fish.', 'My father does not eat fish.'], 0, 'niet lekker vinden.'),
    speak('Ik hou van kaas, maar ik vind vis niet lekker.', 'I love cheese, but I do not like fish.'),
    match([['de groente', 'vegetables'], ['het vlees', 'meat'], ['de kip', 'chicken'], ['de aardappel', 'potato'], ['het sap', 'juice'], ['gezond', 'healthy']]),
    free('Say three things you like to eat or drink and one thing you do not like.', 'Ik hou van koffie, brood en kaas. Ik vind bier niet lekker.', 'I love coffee, bread and cheese. I do not like beer.', { hints: ['Ik hou van …', 'Ik vind … lekker', 'Ik vind … niet lekker'] }),
    auto(4, ['article', 'tr-en-nl', 'listen', 'plural']),
  ], [
    fill('___ je van sport?', ['Hou', 'Houd'], 'Do you like sport?', 'hou je van.'),
    fill('Ik vind Amsterdam ___. (beautiful)', ['mooi'], 'I think Amsterdam is beautiful.', 'mooi = beautiful.'),
    build('We like eating outside.', 'Wij eten graag buiten.', ['houden', 'lekker'], 'verb + graag.'),
    build('My mother does not like coffee.', 'Mijn moeder vindt koffie niet lekker.', ['hou', 'geen'], 'vindt … niet lekker.'),
    tr('en-nl', 'I do not eat meat.', ['Ik eet geen vlees.'], 'geen vlees.'),
    speak('Wat vind je van Nederlands eten?', 'What do you think of Dutch food?'),
  ]));

  u3.push(lesson('s1u3l2', 'Can, may, must, want: modal verbs', 'You can use kunnen, mogen, moeten, willen and zullen with the second verb at the end of the sentence.', [
    table(['', '*kunnen', '*mogen', '*moeten', '*willen', '*zullen'], [['ik', '*kan', '*mag', '*moet', '*wil', '*zal'], ['jij', '*kunt / kan', '*mag', '*moet', '*wilt / wil', '*zult / zal'], ['hij / zij / u', '*kan', '*mag', '*moet', '*wil', '*zal'], ['wij / jullie / zij', '*kunnen', '*mogen', '*moeten', '*willen', '*zullen']]),
    h('Word order: second verb at the end'),
    p('The modal takes the verb slot (second position); the other verb goes to the **end** as an infinitive: `Ik wil morgen een tafel reserveren.` `Kun je me even helpen?` `Wij moeten om zes uur thuis zijn.`'),
    h('Meanings'),
    list('**kunnen** = ability / possibility: `Ik kan goed koken.` `Kan ik hier pinnen?`', '**mogen** = permission: `Mag ik een koekje?` `Hier mag je niet roken.`', '**moeten** = must / have to: `Ik moet werken.` (not have to = `hoeven niet te`)', '**willen** = want: `Ik wil graag …` for polite requests', '**zullen** = shall (suggestions, promises): `Zullen we gaan?` `Ik zal je helpen.`'),
    p('Dutch often drops the second verb when it is obvious: `Ik wil een biertje.` `Ik moet naar huis.` `Dat mag niet.`'),
    ex(['Kun je dat herhalen?', 'Can you repeat that?'], ['Mag ik de kaart zien?', 'May I see the menu?'], ['Wij moeten nog boodschappen doen.', 'We still have to do the shopping.'], ['Zullen we samen eten?', 'Shall we eat together?'], ['Ik wil graag iets drinken.', 'I would like something to drink.']),
    tip('Modal in slot two, everything else in between, infinitive as the last word. Picture a sandwich: modal on top, infinitive at the bottom.'),
  ], ['g1-modals'], ['kunnen', 'mogen', 'moeten', 'willen', 'zullen', 'helpen', 'koken', 'bestellen', 'proberen', 'wachten', 'parkeren', 'zwemmen', 'straks', 'even', 'me', 'binnen', 'buiten', 'iets', 'niets'], [
    conj('kunnen', 'ik', 'pres', ['kan'], 'ik kan.'),
    conj('mogen', 'hij', 'pres', ['mag'], 'hij mag: no -t on modal verbs in the singular.'),
    conj('moeten', 'jij', 'pres', ['moet'], 'jij moet (the stem ends in t already).'),
    conj('willen', 'wij', 'pres', ['willen'], 'Plural: willen.'),
    conj('zullen', 'ik', 'pres', ['zal'], 'ik zal.'),
    conj('kunnen', 'jullie', 'pres', ['kunnen'], 'Plural: kunnen.'),
    fill('Ik ___ goed zwemmen. (can)', ['kan'], 'I can swim well.', 'kunnen = ability.'),
    fill('___ ik hier zitten? (may)', ['Mag'], 'May I sit here?', 'mogen = permission.'),
    fill('Wij ___ om zes uur thuis zijn. (must)', ['moeten'], 'We have to be home at six.', 'wij moeten + zijn at the end.'),
    fill('___ we een taxi nemen? (shall)', ['Zullen'], 'Shall we take a taxi?', 'Zullen we … = shall we.'),
    mc('Where does the second verb go? "Ik wil een tafel ___ ."', ['Ik wil reserveren een tafel.', 'Ik reserveren wil een tafel.', 'Ik wil een tafel reserveren.'], 2, 'The infinitive goes to the end.'),
    mc('"Dat mag niet" means …', ['That is not possible.', 'That is not allowed.', 'That is not necessary.'], 1, 'mogen = permission; mag niet = not allowed.'),
    mc('"Kun je me even helpen?" — what does "even" do?', ['it means "even"', 'it softens the request: just / for a moment', 'it means "again"'], 1, 'even makes requests friendlier.'),
    build('Can you help me?', 'Kun je me helpen?', ['kunt', 'kan'], 'kun je (no t after je); helpen at the end.'),
    build('I have to work tomorrow.', 'Ik moet morgen werken.', ['werk', 'wil'], 'moet in slot two, werken at the end.'),
    build('May we park here?', 'Mogen wij hier parkeren?', ['mag', 'kunnen'], 'mogen wij (plural) + parkeren at the end.'),
    build('We want to order.', 'Wij willen bestellen.', ['wil', 'bestelt'], 'willen + infinitive.'),
    build('Shall we eat outside?', 'Zullen we buiten eten?', ['zal', 'eet'], 'zullen we + eten at the end.'),
    fix('Ik moet werken vandaag.', ['Ik moet vandaag werken.'], 'The infinitive goes to the very end, after vandaag.'),
    fix('Kan je helpen me?', ['Kun je me helpen?', 'Kan je me helpen?'], 'me goes before the final infinitive: me helpen.'),
    fix('Hij magt niet roken.', ['Hij mag niet roken.'], 'Modals take no -t in the singular: hij mag.'),
    tr('nl-en', 'Wij moeten nog boodschappen doen.', ['We still have to do the shopping.', 'We still have to do the groceries.', 'We still need to do the shopping.'], 'moeten = have to; nog = still.'),
    dict('Zullen we samen koken?', 'Shall we cook together?', 'zullen we + koken at the end.'),
    listen('Ik kan vanavond niet komen.', ['I cannot come tonight.', 'I can come tonight.', 'I do not want to come tonight.'], 0, 'kan niet + komen.'),
    speak('Mag ik de kaart zien, alstublieft?', 'May I see the menu, please?'),
    speak('Ik wil graag iets drinken.', 'I would like something to drink.'),
    auto(3, ['conj', 'tr-en-nl', 'listen']),
  ], [
    conj('willen', 'zij', 'pres', ['wil', 'willen'], 'zij wil (she) / zij willen (they).'),
    conj('moeten', 'u', 'pres', ['moet'], 'u moet.'),
    fill('___ ik iets vragen?', ['Mag', 'Kan'], 'May I / can I ask something?', 'mag ik = may I; kan ik = can I.'),
    build('I cannot swim.', 'Ik kan niet zwemmen.', ['mag', 'zwem'], 'kan niet + zwemmen.'),
    build('You must wait here.', 'Je moet hier wachten.', ['moeten', 'wacht'], 'je moet + wachten at the end.'),
    fix('Wij willen gaan naar de markt.', ['Wij willen naar de markt gaan.'], 'gaan goes to the end.'),
    speak('Kun je dat even herhalen?', 'Can you just repeat that?'),
  ]));

  u3.push(lesson('s1u3l3', 'Shopping and the diminutive', 'You can buy groceries with quantities and packaging words, and use diminutives like broodje and biertje.', [
    h('Quantities'),
    table(['', '', ''], [['*een kilo', 'a kilo', '*een kilo appels'], ['*een pond', 'a pound (500 g)', '*een pond kaas'], ['*een liter', 'a litre', '*een liter melk'], ['*een pak', 'a carton / pack', '*een pak melk, een pak rijst'], ['*een zak', 'a bag', '*een zak aardappels'], ['*een fles', 'a bottle', '*een fles wijn'], ['*een stuk', 'a piece', '*een stuk kaas'], ['*een plak', 'a slice', '*vier plakken kaas'], ['*een doos', 'a box', '*een doos eieren']]),
    p('No "of" in Dutch: `een kilo appels`, `een glas water`, `een kopje thee`. After a number or quantity, the container stays singular: `twee pak melk` is heard often, `twee pakken melk` is the careful form.'),
    h('The diminutive'),
    p('Add `-je` (or -tje, -pje, -etje) to a noun and it becomes small, cute or casual. Every diminutive is a **het**-word with plural -s.'),
    table(['ending', 'after', 'examples'], [['*-je', 'most consonants', '*brood → *broodje, *koek → *koekje, *huis → *huisje'], ['*-tje', 'vowel, diphthong, l/n/r after long vowel', '*auto → *autootje, *tafel → *tafeltje, *uur → *uurtje'], ['*-pje', 'm after long vowel', '*boom → *boompje, *film → *filmpje'], ['*-etje', 'short vowel + l/m/n/ng/r', '*bal → *balletje, *zon → *zonnetje, *ring → *ringetje']]),
    p('In a shop or café the diminutive is everywhere: `een broodje` (a roll), `een biertje` (a beer), `een kopje koffie`, `een momentje`, `een bonnetje`. It is friendliness, not size.'),
    ex(['Een broodje kaas en een glaasje sap, graag.', 'A cheese roll and a small glass of juice, please.'], ['Ik heb een pak melk en een zak aardappels nodig.', 'I need a carton of milk and a bag of potatoes.'], ['De tomaten zijn in de aanbieding.', 'The tomatoes are on offer.']),
    tip('`nodig hebben` = to need: `Ik heb brood nodig.` The word nodig goes at the end.'),
  ], ['g1-diminutive'], ['zak', 'pak', 'stuk', 'plak', 'pond', 'liter', 'supermarkt', 'bakker', 'slager', 'boodschappen-doen', 'aanbieding', 'klant', 'verkoper', 'broodje', 'koekje', 'glaasje', 'momentje', 'uurtje', 'bloem', 'genoeg', 'nodig'], [
    fill('Een ___ melk, graag. (carton)', ['pak'], 'A carton of milk, please.', 'het pak = carton/pack.'),
    fill('Een ___ kaas van tweehonderd gram. (piece)', ['stuk'], 'A piece of cheese of 200 grams.', 'het stuk = piece.'),
    fill('Een ___ aardappels. (bag)', ['zak'], 'A bag of potatoes.', 'de zak = bag.'),
    fill('Ik heb brood ___.', ['nodig'], 'I need bread.', 'nodig hebben, nodig at the end.'),
    mc('The diminutive of "boom" is …', ['boomje', 'boompje', 'boomtje'], 1, 'After m following a long vowel: -pje.'),
    mc('The diminutive of "zon" is …', ['zonje', 'zontje', 'zonnetje'], 2, 'Short vowel + n: -etje, and the consonant doubles: zonnetje.'),
    mc('The diminutive of "auto" is …', ['autoje', 'autootje', 'autotje'], 1, 'After a vowel: -tje, and the o is doubled to stay long: autootje.'),
    mc('All diminutives are …', ['de-words', 'het-words', 'either'], 1, 'het broodje, het biertje, het meisje. Always het.'),
    mc('"Twee broodjes kaas" means …', ['two cheese rolls', 'two slices of cheese', 'two cheese breads'], 0, 'broodje = roll; broodje kaas = cheese roll.'),
    plural('het koekje', ['koekjes'], 'Diminutives take -s.'),
    plural('het broodje', ['broodjes'], 'Diminutives take -s.'),
    art('koekje', 'het', 'All diminutives are het-words.'),
    build('A kilo of tomatoes, please.', 'Een kilo tomaten, graag.', ['van', 'de'], 'No "of": een kilo tomaten.'),
    build('I need a bottle of wine.', 'Ik heb een fles wijn nodig.', ['nodig heb', 'van'], 'ik heb … nodig, nodig at the end.'),
    build('The cheese is on offer.', 'De kaas is in de aanbieding.', ['op', 'aanbieden'], 'in de aanbieding = on offer.'),
    build('One moment, please.', 'Een momentje, alstublieft.', ['moment', 'graag'], 'het momentje.'),
    fix('Ik nodig heb melk.', ['Ik heb melk nodig.'], 'heb in second position, nodig at the end.'),
    tr('en-nl', 'four slices of cheese', ['vier plakken kaas'], 'de plak, plural plakken.'),
    tr('nl-en', 'Ik doe boodschappen bij de supermarkt.', ['I do the shopping at the supermarket.', 'I do the groceries at the supermarket.', 'I shop at the supermarket.'], 'boodschappen doen = do the (grocery) shopping.'),
    dict('Een broodje kaas en een kopje koffie, graag.', 'A cheese roll and a cup of coffee, please.', 'broodje, kopje: diminutives.'),
    listen('Wilt u een tasje?', ['Would you like a (small) bag?', 'Would you like a receipt?', 'Would you like a cup?'], 0, 'tasje = diminutive of tas (bag).'),
    read('Verkoper: Goedemiddag, zegt u het maar.\nKlant: Een pond jonge kaas en een stuk oude kaas, graag.\nVerkoper: Alstublieft. Anders nog iets?\nKlant: Ja, zes eieren en een pak melk. Zijn de tomaten in de aanbieding?\nVerkoper: Ja, een kilo voor twee euro.\nKlant: Dan een kilo, graag. Dat is het.\nVerkoper: Dat is samen twaalf euro tien. Wilt u een tasje?', [
      { q: 'How much cheese does the customer buy?', options: ['a pound of young and a piece of mature cheese', 'a kilo of young cheese', 'two slices'], answer: 0, explain: 'een pond jonge kaas en een stuk oude kaas.' },
      { q: 'What is on offer?', options: ['eggs', 'milk', 'tomatoes'], answer: 2, explain: '"Zijn de tomaten in de aanbieding? — Ja."' },
      { q: 'What is the total?', options: ['€2.00', '€12.10', '€20.10'], answer: 1, explain: 'twaalf euro tien.' },
    ], { en: 'Shop assistant: Good afternoon, what can I get you? Customer: A pound of young cheese and a piece of mature cheese, please. Assistant: Here you are. Anything else? Customer: Yes, six eggs and a carton of milk. Are the tomatoes on offer? Assistant: Yes, a kilo for two euros. Customer: Then a kilo, please. That is it. Assistant: That is twelve euros ten altogether. Would you like a bag?' }),
    speak('Een pak melk, een zak aardappels en een stuk kaas, graag.', 'A carton of milk, a bag of potatoes and a piece of cheese, please.'),
    auto(3, ['tr-en-nl', 'listen', 'article']),
  ], [
    mc('The diminutive of "bal" is …', ['balje', 'balletje', 'baltje'], 1, 'Short a + l: -etje with double l.'),
    mc('The diminutive of "tafel" is …', ['tafeltje', 'tafelje', 'tafelpje'], 0, 'l after an unstressed vowel: -tje.'),
    fill('Een ___ wijn en een ___ water. (bottle, glass)', ['fles'], 'A bottle of wine and a glass of water.', 'de fles; (and een glas water). Only the first gap is checked.'),
    build('Do you need anything else?', 'Heb je nog iets nodig?', ['nodig heb', 'niets'], 'nog iets = anything else; nodig at the end.'),
    tr('en-nl', 'a cup of tea', ['een kopje thee', 'een kop thee'], 'kopje thee: no "of".'),
    speak('Zijn de appels in de aanbieding?', 'Are the apples on offer?'),
  ]));

  u3.push(lesson('s1u3l4', 'At the restaurant: time first, then the verb', 'You can order a meal and build sentences that start with a time or place, with the verb second and the subject after it.', [
    h('Inversion'),
    p('Start a sentence with a time or place and the verb still comes **second**, so the subject moves behind the verb: `Ik eet vanavond buiten.` → `Vanavond eet ik buiten.` This is not optional: "Vanavond ik eet" is wrong.'),
    table(['first', 'verb', 'subject', 'rest'], [['*Vanavond', '*eten', '*wij', '*in een restaurant.'], ['*Om zeven uur', '*komt', '*de ober', '*met de kaart.'], ['*Daarna', '*nemen', '*we', '*een toetje.'], ['*In Amsterdam', '*is', '*het eten', '*duur.']]),
    p('Sequencing words love the first slot: `Eerst …`, `Dan …`, `Daarna …`, `Straks …`. After them, always the verb.'),
    h('In the restaurant'),
    ex(['Ik wil graag een tafel voor twee personen reserveren.', 'I would like to book a table for two.'], ['Mag ik de kaart?', 'May I have the menu?'], ['Als voorgerecht neem ik de soep.', 'As a starter I will have the soup.'], ['Voor mij het hoofdgerecht met vis, graag.', 'The main course with fish for me, please.'], ['Wilt u nog een toetje? — Nee, dank u. De rekening, graag.', 'Would you like a dessert? — No, thanks. The bill, please.'], ['Was het lekker? — Ja, heel lekker.', 'Was it good? — Yes, very good.']),
    p('Tipping: round up or leave 5–10% for good service; say `Laat maar zitten` (keep the change) or `Maak er … van` (make it …).'),
    warn('`Ik neem …` (I will take) is the normal way to order a dish; English "I will have" is not translated with hebben.'),
  ], ['g1-v2'], ['ober', 'menu', 'kaart-menu', 'voorgerecht', 'hoofdgerecht', 'toetje', 'restaurant', 'reserveren', 'fooi', 'nemen', 'geven', 'vanavond', 'vanmiddag', 'morgenochtend', 'daarna', 'dan', 'eerst', 'klaar'], [
    build('Tonight we are eating in a restaurant.', 'Vanavond eten wij in een restaurant.', ['wij eten', 'in restaurant'], 'Vanavond first, then the verb eten, then wij.'),
    build('At seven the waiter comes with the menu.', 'Om zeven uur komt de ober met de kaart.', ['de ober komt', 'op'], 'Time first → verb → subject.'),
    build('After that we take a dessert.', 'Daarna nemen we een toetje.', ['we nemen', 'neem'], 'daarna + nemen + we.'),
    build('First I drink a coffee.', 'Eerst drink ik een koffie.', ['ik drink', 'drinkt'], 'eerst + drink + ik.'),
    build('Then I go home.', 'Dan ga ik naar huis.', ['ik ga', 'gaat'], 'dan + ga + ik.'),
    build('In Amsterdam the food is expensive.', 'In Amsterdam is het eten duur.', ['het eten is', 'zijn'], 'Place first → verb → subject.'),
    fix('Vanavond ik eet thuis.', ['Vanavond eet ik thuis.'], 'After a fronted time word the verb comes second: eet ik.'),
    fix('Morgenochtend wij gaan naar de markt.', ['Morgenochtend gaan wij naar de markt.'], 'Verb second: gaan wij.'),
    fix('Daarna we nemen een toetje.', ['Daarna nemen we een toetje.'], 'daarna + verb + subject.'),
    mc('Which sentence is correct?', ['Vanmiddag ik werk niet.', 'Vanmiddag werk ik niet.', 'Vanmiddag werk niet ik.'], 1, 'Time, verb, subject, then niet at the end.'),
    mc('"Als voorgerecht neem ik de soep." Why "neem ik"?', ['because it is a question', 'because "Als voorgerecht" is in first position, so the verb comes next', 'because soep is a de-word'], 1, 'Inversion after a fronted element.'),
    fill('Om acht uur ___ de film.', ['begint'], 'At eight the film starts.', 'de film = het/hij form: begint.'),
    fill('___ neem ik de soep, daarna de vis.', ['Eerst'], 'First I take the soup, then the fish.', 'eerst = first.'),
    tr('en-nl', 'I would like to book a table.', ['Ik wil graag een tafel reserveren.'], 'ik wil graag + reserveren at the end.'),
    tr('nl-en', 'Wilt u nog een toetje?', ['Would you like a dessert?', 'Do you want a dessert?', 'Would you like another dessert?'], 'wilt u = would you like (formal); toetje = dessert.'),
    dict('Vanavond eten we in een restaurant in de Pijp.', 'Tonight we are eating in a restaurant in de Pijp.', 'vanavond + eten + we.'),
    listen('Als hoofdgerecht neem ik de kip met rijst.', ['As a main course I will have the chicken with rice.', 'As a starter I will have the chicken soup.', 'As a dessert I will have the rice.'], 0, 'hoofdgerecht = main course.'),
    read('Ober: Goedenavond. Heeft u gereserveerd?\nEva: Ja, een tafel voor twee, op naam van De Vries.\nOber: Deze tafel bij het raam is voor u. Wilt u iets drinken?\nEva: Twee glazen witte wijn, graag. En mogen we de kaart?\nOber: Natuurlijk. Vanavond is de vis heel vers.\nEva: Dan neem ik de vis. En als voorgerecht de soep.\nOber: Prima. En voor u, meneer?\nTom: Voor mij de salade en daarna de kip.', [
      { q: 'Where is their table?', options: ['by the window', 'by the door', 'outside'], answer: 0, explain: '"Deze tafel bij het raam is voor u."' },
      { q: 'What does Eva order as a main course?', options: ['chicken', 'fish', 'salad'], answer: 1, explain: '"Dan neem ik de vis."' },
      { q: 'What does Tom have as a starter?', options: ['soup', 'salad', 'fish'], answer: 1, explain: '"Voor mij de salade en daarna de kip."' },
    ], { en: 'Waiter: Good evening. Have you booked? Eva: Yes, a table for two, under the name De Vries. Waiter: This table by the window is for you. Would you like something to drink? Eva: Two glasses of white wine, please. And may we have the menu? Waiter: Of course. Tonight the fish is very fresh. Eva: Then I will have the fish. And the soup as a starter. Waiter: Great. And for you, sir? Tom: The salad for me and then the chicken.' }),
    speak('Als voorgerecht neem ik de soep en daarna de vis.', 'As a starter I will have the soup and then the fish.'),
    speak('Mag ik de rekening? Laat maar zitten.', 'May I have the bill? Keep the change.'),
    free('Order in a restaurant: a drink, a starter and a main course. Start one sentence with "Als voorgerecht".', 'Een glas rode wijn, graag. Als voorgerecht neem ik de salade en als hoofdgerecht de kip met rijst.', 'A glass of red wine, please. As a starter I will have the salad and as a main course the chicken with rice.', { hints: ['Ik wil graag …', 'Als voorgerecht neem ik …', 'als hoofdgerecht …'] }),
    auto(3, ['tr-nl-en', 'listen']),
  ], [
    build('Tomorrow morning I am working at home.', 'Morgenochtend werk ik thuis.', ['ik werk', 'werkt'], 'morgenochtend + werk + ik.'),
    build('This afternoon we go to the market.', 'Vanmiddag gaan we naar de markt.', ['we gaan', 'gaat'], 'vanmiddag + gaan + we.'),
    fix('Om zes uur wij eten.', ['Om zes uur eten wij.'], 'Inversion after the time phrase.'),
    mc('Correct order?', ['Daarna ik ga naar huis.', 'Daarna ga ik naar huis.'], 1, 'daarna + verb + subject.'),
    tr('en-nl', 'May I have the menu?', ['Mag ik de kaart?', 'Mag ik de kaart zien?', 'Mag ik het menu?'], 'mag ik de kaart.'),
    speak('Vanavond eten we buiten de deur.', 'Tonight we are eating out.'),
  ]));

  units.push(unit('s1u3', 'Eten en boodschappen', 'food and shopping', u3));

  /* ================= UNIT 4: De stad en vervoer ================= */
  const u4 = [];

  u4.push(lesson('s1u4l1', 'Around the city', 'You can name places in the city, ask whether something is nearby, and give simple directions with door, langs, over and tot.', [
    table(['', '', '', ''], [['*het park', 'park', '*het ziekenhuis', 'hospital'], ['*de bibliotheek', 'library', '*de apotheek', 'pharmacy'], ['*het centrum', 'centre', '*de kerk', 'church'], ['*de bioscoop', 'cinema', '*het zwembad', 'swimming pool'], ['*de sportschool', 'gym', '*de gemeente', 'municipality'], ['*het gebouw', 'building', '*het postkantoor', 'post office']]),
    h('Is there …?'),
    p('`Is er een apotheek in de buurt?` (Is there a pharmacy nearby?) `Er is een bibliotheek op het plein.` `Er zijn twee supermarkten in deze straat.` `er is / er zijn` = there is / there are.'),
    h('Directions with movement'),
    table(['', '', ''], [['*naar', 'to', '*naar het station'], ['*door', 'through', '*door het park'], ['*langs', 'along / past', '*langs de gracht'], ['*over', 'across', '*over de brug'], ['*tot', 'as far as / until', '*tot het stoplicht'], ['*van … naar', 'from … to', '*van hier naar het centrum']]),
    p('`rechtsaf` / `linksaf` = turn right / left; `rechtdoor` = straight on; `de eerste / tweede straat rechts`; `aan de andere kant` = on the other side; `op de hoek` = on the corner.'),
    ex(['Ga door het park en dan over de brug.', 'Go through the park and then across the bridge.'], ['Loop langs de gracht tot de kerk. Daar linksaf.', 'Walk along the canal as far as the church. Left there.'], ['De apotheek is aan de andere kant van de straat.', 'The pharmacy is on the other side of the street.']),
    tip('Amsterdam addresses are "Straatnaam + nummer", and the gemeente, the bibliotheek (OBA) and the apotheek are where you will use this vocabulary first.'),
  ], ['g1-er-is', 'g1-prep-place'], ['park', 'ziekenhuis', 'bibliotheek', 'apotheek', 'centrum', 'kerk', 'gebouw', 'bioscoop', 'zwembad', 'sportschool', 'politie', 'gemeente', 'postkantoor', 'door', 'langs', 'over-prep', 'tot', 'van', 'rechtsaf', 'linksaf', 'tweede', 'derde', 'kant', 'andere'], [
    fill('Is ___ een apotheek in de buurt?', ['er'], 'Is there a pharmacy nearby?', 'is er = is there.'),
    fill('___ zijn twee supermarkten in deze straat.', ['Er'], 'There are two supermarkets in this street.', 'er zijn = there are.'),
    fill('Wij fietsen ___ het park.', ['door', 'langs', 'naar'], 'We cycle through / along / to the park.', 'door = through.'),
    fill('Loop ___ de gracht tot de brug.', ['langs'], 'Walk along the canal as far as the bridge.', 'langs = along.'),
    fill('Ga ___ de brug en dan rechtsaf.', ['over'], 'Go across the bridge and then turn right.', 'over de brug = across the bridge.'),
    art('ziekenhuis', 'het', 'huis is het → het ziekenhuis.'),
    art('bibliotheek', 'de', 'de bibliotheek.'),
    art('park', 'het', 'het park.'),
    art('kerk', 'de', 'de kerk.'),
    mc('"Aan de andere kant van de straat" means …', ['at the end of the street', 'on the other side of the street', 'around the corner'], 1, 'kant = side.'),
    mc('"tot het stoplicht" means …', ['through the traffic light', 'as far as the traffic light', 'past the traffic light'], 1, 'tot = until / as far as.'),
    build('Is there a library nearby?', 'Is er een bibliotheek in de buurt?', ['zijn', 'het'], 'is er + een + noun.'),
    build('Go straight ahead and then turn left at the church.', 'Ga rechtdoor en dan linksaf bij de kerk.', ['rechtsaf', 'over'], 'linksaf = turn left; bij de kerk = at the church.'),
    build('The cinema is opposite the park.', 'De bioscoop is tegenover het park.', ['naast', 'de'], 'tegenover = opposite; het park.'),
    build('Take the second street on the right.', 'Neem de tweede straat rechts.', ['derde', 'links'], 'de tweede straat rechts.'),
    fix('Er is twee kerken in het centrum.', ['Er zijn twee kerken in het centrum.'], 'Plural: er zijn.'),
    tr('nl-en', 'Het zwembad is achter de sportschool.', ['The swimming pool is behind the gym.'], 'achter = behind.'),
    tr('en-nl', 'the hospital', ['het ziekenhuis', 'ziekenhuis'], 'het ziekenhuis (sick-house).'),
    dict('Ga door het park en dan over de brug.', 'Go through the park and then across the bridge.', 'door, over.'),
    listen('De gemeente is naast het postkantoor.', ['The municipality is next to the post office.', 'The municipality is opposite the post office.', 'The municipality is behind the post office.'], 0, 'naast = next to.'),
    read('Hoe kom je bij de bibliotheek? Vanaf het Centraal Station loop je rechtdoor over het Damrak. Bij de Dam ga je linksaf. Loop langs het paleis tot de gracht. Daar ga je over de brug en dan is de bibliotheek aan de rechterkant, naast een café. Het is ongeveer tien minuten lopen.', [
      { q: 'Where does the route start?', options: ['at the Dam', 'at Central Station', 'at the library'], answer: 1, explain: '"Vanaf het Centraal Station".' },
      { q: 'What do you do at the Dam?', options: ['turn right', 'turn left', 'go straight on'], answer: 1, explain: '"Bij de Dam ga je linksaf."' },
      { q: 'Where is the library?', options: ['on the left, opposite a café', 'on the right, next to a café', 'on the bridge'], answer: 1, explain: '"aan de rechterkant, naast een café."' },
    ], { en: 'How do you get to the library? From Central Station you walk straight ahead along the Damrak. At the Dam you turn left. Walk past the palace as far as the canal. There you go across the bridge and then the library is on the right, next to a café. It is about ten minutes on foot.' }),
    speak('Is er een apotheek in de buurt?', 'Is there a pharmacy nearby?'),
    speak('Ga over de brug en dan de tweede straat links.', 'Go across the bridge and then the second street on the left.'),
    auto(3, ['article', 'tr-en-nl', 'listen']),
  ], [
    fill('___ er een bioscoop in het centrum?', ['Is'], 'Is there a cinema in the centre?', 'is er.'),
    fill('Fiets ___ de gracht en dan over de brug.', ['langs'], 'Cycle along the canal and then across the bridge.', 'langs = along.'),
    art('gebouw', 'het', 'ge- + two syllables: het gebouw.'),
    build('There is a market on the square.', 'Er is een markt op het plein.', ['zijn', 'in'], 'er is; op het plein.'),
    tr('en-nl', 'Turn right at the traffic light.', ['Ga rechtsaf bij het stoplicht.', 'Bij het stoplicht rechtsaf.'], 'rechtsaf bij het stoplicht.'),
    speak('De apotheek is aan de andere kant van de straat.', 'The pharmacy is on the other side of the street.'),
  ]));

  u4.push(lesson('s1u4l2', 'Separable verbs: opstaan, ik sta op', 'You can use separable verbs like opstaan, aankomen, uitstappen and meenemen, with the prefix at the end of the sentence.', [
    p('Many Dutch verbs are a **stressed prefix + verb**: `opstaan`, `aankomen`, `uitstappen`, `meenemen`, `opbellen`. In the present tense the verb goes to position two and the **prefix goes to the end**.'),
    table(['infinitive', 'sentence', ''], [['*opstaan', '*Ik sta om zeven uur op.', 'I get up at seven.'], ['*aankomen', '*De trein komt om tien uur aan.', 'The train arrives at ten.'], ['*uitstappen', '*Wij stappen bij de Dam uit.', 'We get off at the Dam.'], ['*overstappen', '*Je stapt in Utrecht over.', 'You change in Utrecht.'], ['*meenemen', '*Neem je een jas mee?', 'Are you taking a coat?'], ['*opbellen', '*Ik bel je morgen op.', 'I will call you tomorrow.'], ['*terugkomen', '*Wanneer kom je terug?', 'When are you coming back?']]),
    p('With a modal verb the separable verb stays in one piece at the end: `Ik moet om zeven uur opstaan.` `Je moet hier uitstappen.`'),
    p('How do you know a verb is separable? The stress is on the prefix: **OP**staan, **UIT**stappen. The unstressed prefixes be-, ge-, ver-, ont-, her- never split: `vertrekken` → `De trein vertrekt om acht uur.`'),
    ex(['Hoe laat sta je op? — Om half zeven.', 'What time do you get up? — At half past six.'], ['De bus vertrekt om acht uur en komt om negen uur aan.', 'The bus leaves at eight and arrives at nine.'], ['Doe de deur dicht, alsjeblieft.', 'Close the door, please.'], ['Zullen we zaterdag afspreken?', 'Shall we meet on Saturday?']),
    tip('Say the sentence and imagine throwing the prefix to the far end, like the last carriage of a train.'),
  ], ['g1-separable'], ['opstaan', 'aankomen', 'vertrekken', 'instappen', 'uitstappen', 'overstappen', 'meenemen', 'opbellen', 'terugkomen', 'uitgaan', 'opruimen', 'dichtdoen', 'opendoen', 'afspreken', 'jas'], [
    fill('Ik ___ om zeven uur ___. (opstaan)', ['sta'], 'I get up at seven.', 'ik sta … op: the prefix goes to the end. (First gap: sta.)'),
    fill('De trein komt om tien uur ___.', ['aan'], 'The train arrives at ten.', 'aankomen: komt … aan.'),
    fill('Wij stappen bij het station ___.', ['uit', 'in', 'over'], 'We get off / on / change at the station.', 'uitstappen: stappen … uit.'),
    fill('Neem je een jas ___?', ['mee'], 'Are you taking a coat?', 'meenemen: neem … mee.'),
    fill('Wanneer kom je ___?', ['terug'], 'When are you coming back?', 'terugkomen: kom … terug.'),
    fill('De bus ___ om acht uur. (vertrekken)', ['vertrekt'], 'The bus leaves at eight.', 'ver- is not separable: vertrekt.'),
    mc('Which verb is NOT separable?', ['opstaan', 'vertrekken', 'uitstappen', 'meenemen'], 1, 'ver- is an unstressed, inseparable prefix.'),
    mc('"Ik moet om zeven uur ___." Which is correct?', ['op staan', 'sta op', 'opstaan'], 2, 'After a modal the separable verb stays together at the end: opstaan.'),
    mc('Where is the stress in "aankomen"?', ['AANkomen', 'aanKOmen'], 0, 'Separable verbs stress the prefix.'),
    build('I get up at half past six.', 'Ik sta om half zeven op.', ['opsta', 'staat'], 'sta in slot two, op at the end.'),
    build('The train arrives at platform 4.', 'De trein komt op spoor 4 aan.', ['aankomt', 'aan komt'], 'komt … aan.'),
    build('You have to change in Utrecht.', 'Je moet in Utrecht overstappen.', ['stapt over', 'over'], 'After moet, overstappen stays together at the end.'),
    build('I will call you tomorrow.', 'Ik bel je morgen op.', ['opbel', 'belt'], 'bel … op.'),
    build('Close the window, please.', 'Doe het raam dicht, alsjeblieft.', ['dichtdoe', 'open'], 'doe … dicht.'),
    fix('Ik opsta om zeven uur.', ['Ik sta om zeven uur op.'], 'Split the verb: sta … op.'),
    fix('De trein aankomt om tien uur.', ['De trein komt om tien uur aan.'], 'komt … aan.'),
    fix('Je moet hier uit stappen.', ['Je moet hier uitstappen.'], 'After a modal, written as one word at the end: uitstappen.'),
    tr('nl-en', 'Wij gaan zaterdag uit.', ['We are going out on Saturday.', 'We go out on Saturday.'], 'uitgaan = go out.'),
    dict('Hoe laat sta je op?', 'What time do you get up?', 'sta … op.'),
    listen('De trein naar Haarlem vertrekt van spoor twee en komt om kwart over negen aan.', ['The train to Haarlem leaves from platform 2 and arrives at 9:15.', 'The train to Haarlem leaves at 9:15 from platform 2.', 'The train from Haarlem arrives at platform 2 at 9:45.'], 0, 'vertrekt van spoor twee; komt … aan om kwart over negen.'),
    speak('Ik sta om zeven uur op en ik neem de tram.', 'I get up at seven and I take the tram.'),
    speak('Je stapt bij de Dam uit.', 'You get off at the Dam.'),
    auto(3, ['tr-en-nl', 'listen']),
  ], [
    fill('Ik ruim mijn kamer ___.', ['op'], 'I tidy my room.', 'opruimen: ruim … op.'),
    fill('Doe de deur ___, alsjeblieft.', ['dicht', 'open'], 'Close / open the door, please.', 'dichtdoen / opendoen.'),
    build('When does the bus arrive?', 'Hoe laat komt de bus aan?', ['aankomt', 'wanneer'], 'komt … aan.'),
    build('We must get up early.', 'Wij moeten vroeg opstaan.', ['staan op', 'staat'], 'opstaan together at the end.'),
    fix('Neem je mee een paraplu?', ['Neem je een paraplu mee?'], 'mee at the very end.'),
    speak('Zullen we morgen afspreken?', 'Shall we meet tomorrow?'),
  ]));

  u4.push(lesson('s1u4l3', 'When? Prepositions of time and timetables', 'You can say when things happen with om, op, in, van…tot, voor, na, sinds and geleden, and read a timetable.', [
    table(['', '', ''], [['*om', 'clock times', '*om half negen'], ['*op', 'days, dates', '*op vrijdag, *op 3 mei'], ['*in', 'months, seasons, years', '*in juli, *in de zomer, *in 2024'], ['*van … tot', 'from … to', '*van maandag tot vrijdag'], ['*voor', 'before', '*voor het ontbijt'], ['*na', 'after', '*na het werk'], ['*tijdens', 'during', '*tijdens de reis'], ['*sinds', 'since', '*sinds september'], ['*over', 'in (from now)', '*over tien minuten'], ['… *geleden', 'ago', '*een week geleden']]),
    p('No preposition with `vandaag`, `morgen`, `gisteren`, `volgende week`, `vorige maand`, `elke dag`.'),
    p('`geleden` comes **after** the time span: `twee jaar geleden` (two years ago). `over` means "in … from now": `over een uur` (in an hour). `duren` = to last/take: `De reis duurt een uur.`'),
    h('Timetables'),
    ex(['De trein vertrekt om 8:12 van spoor 5 en komt om 8:49 in Utrecht aan.', 'The train leaves at 8:12 from platform 5 and arrives in Utrecht at 8:49.'], ['De trein heeft tien minuten vertraging.', 'The train is ten minutes late.'], ['De volgende tram richting Centraal Station komt over vier minuten.', 'The next tram towards Central Station comes in four minutes.'], ['De laatste metro gaat om half een.', 'The last metro goes at half past midnight.']),
    tip('Time phrase first, verb second: `Om acht uur vertrekt de trein.` You now have all the pieces.'),
  ], ['g1-prep-time'], ['dienstregeling', 'vertraging', 'perron', 'reis', 'reizen', 'conducteur', 'automaat', 'richting', 'laatste', 'volgende', 'vorige', 'na', 'tijdens', 'sinds', 'geleden', 'van-tot', 'zomer', 'winter', 'duren'], [
    fill('De les begint ___ negen uur.', ['om'], 'The lesson starts at nine.', 'Clock time: om.'),
    fill('___ zaterdag ga ik naar de markt.', ['Op'], 'On Saturday I go to the market.', 'Days: op.'),
    fill('___ de zomer fiets ik veel.', ['In'], 'In summer I cycle a lot.', 'Seasons: in.'),
    fill('De winkel is open ___ negen ___ zes.', ['van'], 'The shop is open from nine to six.', 'van … tot. (First gap: van.)'),
    fill('Ik woon hier ___ maart.', ['sinds'], 'I have lived here since March.', 'sinds = since.'),
    fill('De tram komt ___ vijf minuten.', ['over'], 'The tram comes in five minutes.', 'over = in (from now).'),
    fill('Ik kwam twee jaar ___ naar Nederland.', ['geleden'], 'I came to the Netherlands two years ago.', 'geleden after the time span.'),
    fill('___ het werk ga ik naar de sportschool.', ['Na'], 'After work I go to the gym.', 'na = after.'),
    mc('"De trein heeft vertraging" means …', ['the train has left', 'the train is delayed', 'the train is cancelled'], 1, 'vertraging = delay.'),
    mc('"over een uur" means …', ['an hour ago', 'in an hour', 'for an hour'], 1, 'over + time = in (from now); geleden = ago.'),
    mc('Which is correct?', ['in maandag', 'op maandag', 'om maandag'], 1, 'Days take op.'),
    build('The journey takes an hour.', 'De reis duurt een uur.', ['neemt', 'lang'], 'duren = to take (time).'),
    build('The last train goes at one o’clock.', 'De laatste trein gaat om één uur.', ['volgende', 'op'], 'de laatste; om één uur.'),
    build('During the lesson we speak Dutch.', 'Tijdens de les spreken we Nederlands.', ['we spreken', 'in'], 'tijdens + inversion: spreken we.'),
    build('I work from Monday to Friday.', 'Ik werk van maandag tot vrijdag.', ['op', 'tot en'], 'van … tot.'),
    fix('Ik woon hier voor drie jaar.', ['Ik woon hier al drie jaar.', 'Ik woon hier sinds drie jaar.'], 'A duration up to now: al drie jaar (already three years). "voor" is wrong here.'),
    fix('Geleden twee weken was ik in Parijs.', ['Twee weken geleden was ik in Parijs.'], 'geleden after the time span.'),
    tr('nl-en', 'De volgende halte is het Leidseplein.', ['The next stop is Leidseplein.', 'The next stop is the Leidseplein.'], 'volgende = next.'),
    dict('De trein vertrekt om kwart over acht van spoor vijf.', 'The train leaves at a quarter past eight from platform five.', 'om, van spoor.'),
    listen('De trein naar Utrecht heeft een vertraging van tien minuten.', ['The train to Utrecht is ten minutes late.', 'The train to Utrecht leaves in ten minutes.', 'The train to Utrecht takes ten minutes.'], 0, 'vertraging van tien minuten.'),
    read('Dienstregeling Amsterdam Centraal – Haarlem\nVertrek 9:05, spoor 2a, aankomst 9:20. Vertrek 9:20, spoor 2a, aankomst 9:35 (+5 min vertraging). Vertrek 9:35, spoor 4b, aankomst 9:50.\nDe reis duurt vijftien minuten. Kaartjes koop je bij de automaat of met je bankpas. Vergeet niet in te checken.', [
      { q: 'How long does the journey take?', options: ['5 minutes', '15 minutes', '50 minutes'], answer: 1, explain: '"De reis duurt vijftien minuten."' },
      { q: 'Which train is delayed?', options: ['9:05', '9:20', '9:35'], answer: 1, explain: '9:20 has "+5 min vertraging".' },
      { q: 'Where does the 9:35 leave from?', options: ['spoor 2a', 'spoor 4b', 'spoor 5'], answer: 1, explain: '"Vertrek 9:35, spoor 4b".' },
    ], { en: 'Timetable Amsterdam Central – Haarlem. Departure 9:05, platform 2a, arrival 9:20. Departure 9:20, platform 2a, arrival 9:35 (+5 min delay). Departure 9:35, platform 4b, arrival 9:50. The journey takes fifteen minutes. You buy tickets at the machine or with your bank card. Do not forget to check in.' }),
    speak('De volgende tram komt over vier minuten.', 'The next tram comes in four minutes.'),
    auto(3, ['tr-en-nl', 'listen']),
  ], [
    fill('Mijn verjaardag is ___ oktober.', ['in'], 'My birthday is in October.', 'Months: in.'),
    fill('De film begint ___ acht uur.', ['om'], 'The film starts at eight.', 'Clock: om.'),
    fill('Ik ben hier ___ januari.', ['sinds'], 'I have been here since January.', 'sinds.'),
    build('An hour ago I was at home.', 'Een uur geleden was ik thuis.', ['over', 'ik was'], 'geleden + inversion (was ik).'),
    mc('"De reis duurt lang" means …', ['the journey is far', 'the journey takes a long time', 'the journey is late'], 1, 'duren = take (time).'),
    speak('Ik werk van negen tot vijf, van maandag tot vrijdag.', 'I work from nine to five, Monday to Friday.'),
  ]));

  u4.push(lesson('s1u4l4', 'On the bike: Amsterdam traffic', 'You can talk about cycling and traffic, understand warnings, and describe a broken bike to the fietsenmaker.', [
    p('Amsterdam has more bikes than people. This lesson gives you the words to survive: the bike, the lock, the flat tyre, the traffic light, and the very direct things people shout.'),
    table(['', '', '', ''], [['*de fietser', 'cyclist', '*het fietspad', 'bike path'], ['*het slot', 'lock', '*de band', 'tyre'], ['*lek', 'flat (tyre)', '*de fietsenmaker', 'bike repair'], ['*de fietsenstalling', 'bike parking', '*het stoplicht', 'traffic light'], ['*het verkeer', 'traffic', '*de bel', 'bell'], ['*gevaarlijk', 'dangerous', '*voorzichtig', 'careful']]),
    h('rijden and a few irregulars'),
    p('`rijden` (to ride, to drive) is regular in the present (`ik rijd`, `hij rijdt`) and you will hear `Ik rijd geen auto in de stad.` The one-syllable verbs `gaan`, `staan`, `doen`, `zien` drop the -n for the stem: `ik ga`, `hij gaat`, `wij gaan`.'),
    ex(['Mijn band is lek. Is er een fietsenmaker in de buurt?', 'My tyre is flat. Is there a bike repair shop nearby?'], ['Zet je fiets altijd op slot, met twee sloten.', 'Always lock your bike, with two locks.'], ['Het stoplicht is rood: wachten!', 'The light is red: wait!'], ['Fietsen zonder licht is gevaarlijk en kost een boete.', 'Cycling without lights is dangerous and costs a fine.'], ['Hé, fietspad!', 'Hey, bike path! (what you hear when you walk on one)']),
    warn('Trams always have priority. Taxis and scooters use the bike lane. Look before you swing left. `Voorzichtig!` = careful.'),
  ], ['g1-irregular'], ['fietser', 'slot', 'op-slot-zetten', 'band', 'lek', 'fietsenmaker', 'fietsenstalling', 'stoplicht', 'rijden', 'taxi', 'verkeer', 'gevaarlijk', 'voorzichtig', 'oversteken', 'snel', 'langzaam', 'bel', 'helm', 'gaan', 'staan', 'doen', 'zien'], [
    conj('gaan', 'hij', 'pres', ['gaat'], 'stem ga + t.'),
    conj('doen', 'ik', 'pres', ['doe'], 'stem: doe.'),
    conj('staan', 'jullie', 'pres', ['staan'], 'plural: staan.'),
    conj('rijden', 'hij', 'pres', ['rijdt'], 'stem rijd + t = rijdt.'),
    conj('zien', 'zij', 'pres', ['ziet', 'zien'], 'zij ziet (she) / zij zien (they).'),
    fill('Mijn band is ___.', ['lek'], 'My tyre is flat.', 'lek = flat / leaking.'),
    fill('Zet je fiets altijd op ___.', ['slot'], 'Always lock your bike.', 'op slot zetten = to lock.'),
    fill('Het ___ is rood; wij wachten.', ['stoplicht'], 'The traffic light is red; we wait.', 'het stoplicht.'),
    mc('"Hé, fietspad!" is shouted at you. You are …', ['cycling too fast', 'walking on the bike path', 'parked wrongly'], 1, 'fietspad = bike path; you are in the way.'),
    mc('Who has priority in Amsterdam?', ['pedestrians', 'trams', 'taxis'], 1, 'Trams always. Then, in practice, cyclists.'),
    mc('"Ik rijd geen auto" means …', ['I do not own a car', 'I do not drive a car', 'I do not ride in cars'], 1, 'auto rijden = to drive a car.'),
    build('My tyre is flat, is there a bike repair shop nearby?', 'Mijn band is lek, is er een fietsenmaker in de buurt?', ['zijn', 'het'], 'is er … in de buurt.'),
    build('Cycling without lights is dangerous.', 'Fietsen zonder licht is gevaarlijk.', ['met', 'fiets'], 'zonder = without.'),
    build('Be careful, the traffic is busy.', 'Wees voorzichtig, het verkeer is druk.', ['ben', 'is verkeer'], 'wees = be (imperative of zijn); druk = busy.'),
    build('Where is the bike parking?', 'Waar is de fietsenstalling?', ['het', 'staat'], 'de fietsenstalling.'),
    fix('Ik gaat met de fiets.', ['Ik ga met de fiets.'], 'ik = stem: ga.'),
    fix('Hij rijd te snel.', ['Hij rijdt te snel.'], 'hij = stem + t: rijdt (stem ends in d, so dt).'),
    tr('nl-en', 'Bijna niemand draagt een helm.', ['Almost nobody wears a helmet.', 'Hardly anyone wears a helmet.'], 'bijna = almost; niemand = nobody; dragen = wear.'),
    dict('Zet je fiets op slot en neem het licht mee.', 'Lock your bike and take the light with you.', 'op slot; neem … mee.'),
    listen('Let op, de tram komt van links.', ['Watch out, the tram is coming from the left.', 'Watch out, the tram is coming from the right.', 'Watch out, the tram is late.'], 0, 'van links = from the left.'),
    read('Fietsen in Amsterdam: vijf tips. 1. Zet je fiets altijd op slot, het liefst met twee sloten. 2. Gebruik licht in het donker; zonder licht krijg je een boete van 55 euro. 3. Steek je hand uit als je afslaat. 4. Trams gaan altijd voor. 5. Loop nooit op het fietspad: de fietsers bellen en roepen.', [
      { q: 'How many locks are recommended?', options: ['one', 'two', 'three'], answer: 1, explain: '"het liefst met twee sloten".' },
      { q: 'What happens if you cycle without lights?', options: ['nothing', 'a fine of 55 euros', 'a warning'], answer: 1, explain: '"een boete van 55 euro".' },
      { q: 'What should you do when turning?', options: ['ring your bell', 'stick out your hand', 'stop'], answer: 1, explain: '"Steek je hand uit als je afslaat."' },
    ], { en: 'Cycling in Amsterdam: five tips. 1. Always lock your bike, preferably with two locks. 2. Use lights in the dark; without lights you get a 55 euro fine. 3. Stick out your hand when you turn. 4. Trams always go first. 5. Never walk on the bike path: the cyclists ring and shout.' }),
    speak('Mijn band is lek. Kunt u hem repareren?', 'My tyre is flat. Can you repair it?'),
    free('At the fietsenmaker: greet, say your tyre is flat, ask if they can fix it today and what it costs.', 'Goedemiddag. Mijn band is lek. Kunt u hem vandaag repareren? En wat kost dat?', 'Good afternoon. My tyre is flat. Can you fix it today? And what does that cost?', { hints: ['Mijn band is lek', 'Kunt u …?', 'Wat kost dat?'] }),
    auto(3, ['article', 'tr-en-nl', 'listen']),
  ], [
    conj('gaan', 'wij', 'pres', ['gaan'], 'plural: gaan.'),
    conj('doen', 'hij', 'pres', ['doet'], 'doe + t.'),
    fill('Zonder ___ fietsen is gevaarlijk.', ['licht'], 'Cycling without lights is dangerous.', 'het licht = light.'),
    build('The cyclist rings the bell.', 'De fietser belt.', ['fietsen', 'de bel'], 'bellen = to ring (a bell) or to phone. De fietser belt.'),
    mc('"Voorzichtig!" means …', ['Forward!', 'Careful!', 'Quickly!'], 1, 'voorzichtig = careful.'),
    speak('Het stoplicht is groen, wij steken over.', 'The light is green, we cross.'),
  ]));

  units.push(unit('s1u4', 'De stad en vervoer', 'city and transport', u4));
})();
