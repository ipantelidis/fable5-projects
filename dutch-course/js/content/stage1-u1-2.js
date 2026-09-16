/* Stage 1 (A1) — Unit 1: Ik en mijn familie · Unit 2: Thuis */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = (NL.content._s1units = []);
  const S = { stage: 1 };

  /* ---------------- Vocabulary: Unit 1 ---------------- */
  VB('komen', 'to come', 'kom|komt|komen', 'kwam|kwamen', 'gekomen', 'zijn', 'Ik kom uit Engeland.', 'I come from England.', { theme: 'basics', stage: 1, note: 'Short o in the singular: ik kom, jij komt.' });
  VB('wonen', 'to live (reside)', 'woon|woont|wonen', 'woonde|woonden', 'gewoond', 'hebben', 'Ik woon in Amsterdam-Oost.', 'I live in Amsterdam East.', { theme: 'basics', stage: 1 });
  N('land', 'het', 'landen', 'country', 'Nederland is een klein land.', 'The Netherlands is a small country.', { theme: 'basics', stage: 1 });
  N('Nederland', 'het', null, 'the Netherlands', 'Ik woon in Nederland.', 'I live in the Netherlands.', { theme: 'countries', stage: 1, id: 'nederland-land' });
  N('Engeland', 'het', null, 'England', 'Mijn ouders wonen in Engeland.', 'My parents live in England.', { theme: 'countries', stage: 1 });
  N('Amerika', 'het', null, 'America', 'Zij komt uit Amerika.', 'She comes from America.', { theme: 'countries', stage: 1 });
  N('Duitsland', 'het', null, 'Germany', 'Duitsland ligt naast Nederland.', 'Germany is next to the Netherlands.', { theme: 'countries', stage: 1 });
  N('Nederlander', 'de', 'Nederlanders', 'Dutchman / Dutch person', 'Mijn buurman is Nederlander.', 'My neighbour is Dutch.', { theme: 'countries', stage: 1 });
  W('Nederlands', 'Dutch (adjective)', 'adj', 'Zij is Nederlands.', 'She is Dutch.', { theme: 'countries', stage: 1, id: 'nederlands-adj' });
  W('Engels', 'English (adjective)', 'adj', 'Ik ben Engels.', 'I am English.', { theme: 'countries', stage: 1, id: 'engels-adj' });
  N('vriend', 'de', 'vrienden', 'friend (male) / boyfriend', 'Mijn vriend heet Daan.', 'My friend / boyfriend is called Daan.', { theme: 'people', stage: 1 });
  N('vriendin', 'de', 'vriendinnen', 'friend (female) / girlfriend', 'Mijn vriendin woont in Utrecht.', 'My friend / girlfriend lives in Utrecht.', { theme: 'people', stage: 1 });
  N('collega', 'de', "collega's", 'colleague', 'Mijn collega is Belgisch.', 'My colleague is Belgian.', { theme: 'work', stage: 1 });
  N('student', 'de', 'studenten', 'student', 'Hij is student in Leiden.', 'He is a student in Leiden.', { theme: 'work', stage: 1 });
  W('leuk', 'nice / fun', 'adj', 'Amsterdam is leuk.', 'Amsterdam is fun.', { theme: 'basics', stage: 1 });
  W('mooi', 'beautiful', 'adj', 'De gracht is mooi.', 'The canal is beautiful.', { theme: 'basics', stage: 1 });
  W('groot', 'big', 'adj', 'Het station is groot.', 'The station is big.', { theme: 'basics', stage: 1 });
  W('wie', 'who', 'pron', 'Wie is dat?', 'Who is that?', { theme: 'basics', stage: 1 });
  W('wat', 'what', 'pron', 'Wat is dat?', 'What is that?', { theme: 'basics', stage: 1 });
  W('dit', 'this', 'pron', 'Dit is mijn broer.', 'This is my brother.', { theme: 'basics', stage: 1 });
  W('dat', 'that', 'pron', 'Dat is mijn huis.', 'That is my house.', { theme: 'basics', stage: 1 });
  W('hij', 'he', 'pron', 'Hij is mijn collega.', 'He is my colleague.', { theme: 'basics', stage: 1 });
  W('zij', 'she / they', 'pron', 'Zij is mijn zus. Zij zijn mijn ouders.', 'She is my sister. They are my parents.', { theme: 'basics', stage: 1, altNl: ['ze'] });
  W('wij', 'we', 'pron', 'Wij wonen in Amsterdam.', 'We live in Amsterdam.', { theme: 'basics', stage: 1, altNl: ['we'] });
  W('jullie', 'you (plural)', 'pron', 'Jullie zijn welkom.', 'You are welcome.', { theme: 'basics', stage: 1 });

  N('vader', 'de', 'vaders', 'father', 'Mijn vader is zestig.', 'My father is sixty.', { theme: 'family', stage: 1 });
  N('moeder', 'de', 'moeders', 'mother', 'Mijn moeder werkt in een ziekenhuis.', 'My mother works in a hospital.', { theme: 'family', stage: 1 });
  N('ouders', 'de', 'ouders', 'parents', 'Mijn ouders wonen in Engeland.', 'My parents live in England.', { theme: 'family', stage: 1, note: 'Plural only.' });
  N('zoon', 'de', 'zonen', 'son', 'Onze zoon is vier.', 'Our son is four.', { theme: 'family', stage: 1 });
  N('dochter', 'de', 'dochters', 'daughter', 'Hun dochter studeert in Groningen.', 'Their daughter studies in Groningen.', { theme: 'family', stage: 1 });
  N('opa', 'de', "opa's", 'grandpa', 'Mijn opa is tachtig.', 'My grandpa is eighty.', { theme: 'family', stage: 1 });
  N('oma', 'de', "oma's", 'grandma', 'Oma woont in Haarlem.', 'Grandma lives in Haarlem.', { theme: 'family', stage: 1 });
  N('oom', 'de', 'ooms', 'uncle', 'Mijn oom heeft een boot.', 'My uncle has a boat.', { theme: 'family', stage: 1 });
  N('tante', 'de', 'tantes', 'aunt', 'Tante Els komt op bezoek.', 'Aunt Els is coming to visit.', { theme: 'family', stage: 1 });
  N('familie', 'de', 'families', 'family (extended)', 'Mijn familie is groot.', 'My family is big.', { theme: 'family', stage: 1 });
  N('gezin', 'het', 'gezinnen', 'family (household: parents + children)', 'Wij zijn een gezin met twee kinderen.', 'We are a family with two children.', { theme: 'family', stage: 1 });
  N('partner', 'de', 'partners', 'partner', 'Mijn partner is Nederlands.', 'My partner is Dutch.', { theme: 'family', stage: 1 });
  W('getrouwd', 'married', 'adj', 'Ik ben getrouwd.', 'I am married.', { theme: 'family', stage: 1 });
  W('samen', 'together', 'adv', 'Wij wonen samen.', 'We live together.', { theme: 'basics', stage: 1 });
  W('mijn', 'my', 'pron', 'Mijn naam is Sam.', 'My name is Sam.', { theme: 'basics', stage: 1 });
  W('jouw', 'your (informal)', 'pron', 'Is dit jouw fiets?', 'Is this your bike?', { theme: 'basics', stage: 1, altNl: ['je'] });
  W('uw', 'your (formal)', 'pron', 'Wat is uw adres?', 'What is your address?', { theme: 'basics', stage: 1 });
  W('haar', 'her', 'pron', 'Haar broer heet Tim.', 'Her brother is called Tim.', { theme: 'basics', stage: 1, id: 'haar-poss' });
  W('ons', 'our', 'pron', 'Ons huis is klein. Onze tuin is groot.', 'Our house is small. Our garden is big.', { theme: 'basics', stage: 1, altNl: ['onze'], note: 'ons before a singular het-word, onze everywhere else.' });
  W('hun', 'their', 'pron', 'Hun kinderen zijn klein.', 'Their children are small.', { theme: 'basics', stage: 1 });
  N('honger', 'de', null, 'hunger', 'Ik heb honger.', 'I am hungry.', { theme: 'basics', stage: 1, note: 'Dutch "has" hunger: ik heb honger.' });
  N('dorst', 'de', null, 'thirst', 'Heb je dorst?', 'Are you thirsty?', { theme: 'basics', stage: 1 });

  VB('werken', 'to work', 'werk|werkt|werken', 'werkte|werkten', 'gewerkt', 'hebben', 'Ik werk bij een bank.', 'I work at a bank.', { theme: 'work', stage: 1 });
  VB('leren', 'to learn', 'leer|leert|leren', 'leerde|leerden', 'geleerd', 'hebben', 'Wij leren Nederlands.', 'We are learning Dutch.', { theme: 'study', stage: 1 });
  VB('studeren', 'to study (at university)', 'studeer|studeert|studeren', 'studeerde|studeerden', 'gestudeerd', 'hebben', 'Zij studeert in Leiden.', 'She studies in Leiden.', { theme: 'study', stage: 1 });
  VB('praten', 'to talk', 'praat|praat|praten', 'praatte|praatten', 'gepraat', 'hebben', 'Wij praten over het weer.', 'We talk about the weather.', { theme: 'basics', stage: 1 });
  VB('maken', 'to make', 'maak|maakt|maken', 'maakte|maakten', 'gemaakt', 'hebben', 'Ik maak koffie.', 'I make coffee.', { theme: 'basics', stage: 1 });
  VB('eten', 'to eat', 'eet|eet|eten', 'at|aten', 'gegeten', 'hebben', 'Wij eten om zes uur.', 'We eat at six.', { theme: 'food', stage: 1 });
  VB('drinken', 'to drink', 'drink|drinkt|drinken', 'dronk|dronken', 'gedronken', 'hebben', 'Hij drinkt thee.', 'He drinks tea.', { theme: 'food', stage: 1 });
  VB('lezen', 'to read', 'lees|leest|lezen', 'las|lazen', 'gelezen', 'hebben', 'Ik lees een boek.', 'I am reading a book.', { theme: 'basics', stage: 1 });
  VB('schrijven', 'to write', 'schrijf|schrijft|schrijven', 'schreef|schreven', 'geschreven', 'hebben', 'Zij schrijft een brief.', 'She is writing a letter.', { theme: 'basics', stage: 1 });
  VB('kopen', 'to buy', 'koop|koopt|kopen', 'kocht|kochten', 'gekocht', 'hebben', 'Ik koop brood bij de bakker.', 'I buy bread at the bakery.', { theme: 'shopping', stage: 1 });
  VB('luisteren', 'to listen', 'luister|luistert|luisteren', 'luisterde|luisterden', 'geluisterd', 'hebben', 'Ik luister naar muziek.', 'I listen to music.', { theme: 'basics', stage: 1, note: 'luisteren naar = listen to.' });
  VB('kijken', 'to look / to watch', 'kijk|kijkt|kijken', 'keek|keken', 'gekeken', 'hebben', 'Wij kijken tv.', 'We watch TV.', { theme: 'basics', stage: 1 });
  VB('slapen', 'to sleep', 'slaap|slaapt|slapen', 'sliep|sliepen', 'geslapen', 'hebben', 'Ik slaap acht uur.', 'I sleep eight hours.', { theme: 'daily', stage: 1 });
  VB('zitten', 'to sit', 'zit|zit|zitten', 'zat|zaten', 'gezeten', 'hebben', 'Hij zit op de bank.', 'He is sitting on the sofa.', { theme: 'basics', stage: 1 });
  W('thuis', 'at home', 'adv', 'Ik ben thuis.', 'I am at home.', { theme: 'home', stage: 1 });
  N('werk', 'het', null, 'work', 'Ik ga naar mijn werk.', 'I go to work.', { theme: 'work', stage: 1 });
  N('les', 'de', 'lessen', 'lesson / class', 'De les begint om negen uur.', 'The lesson starts at nine.', { theme: 'study', stage: 1 });
  W('elke', 'every', 'pron', 'Ik werk elke dag.', 'I work every day.', { theme: 'time', stage: 1, altNl: ['elk'] });
  N('muziek', 'de', null, 'music', 'Ik hou van muziek.', 'I love music.', { theme: 'hobbies', stage: 1 });

  W('hoe', 'how', 'adv', 'Hoe heet je?', 'What is your name?', { theme: 'basics', stage: 1 });
  W('waarom', 'why', 'adv', 'Waarom leer je Nederlands?', 'Why are you learning Dutch?', { theme: 'basics', stage: 1 });
  W('welke', 'which', 'pron', 'Welke tram gaat naar Zuid?', 'Which tram goes to South?', { theme: 'basics', stage: 1, altNl: ['welk'] });
  PH('wat voor', 'what kind of', 'Wat voor werk doe je?', 'What kind of work do you do?', { theme: 'basics', stage: 1 });
  PH('waar … heen', 'where … to', 'Waar ga je heen?', 'Where are you going?', { theme: 'basics', stage: 1, id: 'waarheen', altNl: ['waarheen'] });
  VB('doen', 'to do', 'doe|doet|doen', 'deed|deden', 'gedaan', 'hebben', 'Wat doe je vanavond?', 'What are you doing tonight?', { theme: 'basics', stage: 1 });
  N('antwoord', 'het', 'antwoorden', 'answer', 'Het antwoord is ja.', 'The answer is yes.', { theme: 'basics', stage: 1 });
  N('adres', 'het', 'adressen', 'address', 'Wat is je adres?', 'What is your address?', { theme: 'basics', stage: 1 });
  N('e-mailadres', 'het', 'e-mailadressen', 'email address', 'Mijn e-mailadres is sam@voorbeeld.nl.', 'My email address is sam@voorbeeld.nl.', { theme: 'basics', stage: 1, id: 'e-mailadres' });
  N('leeftijd', 'de', 'leeftijden', 'age', 'Wat is uw leeftijd?', 'What is your age?', { theme: 'basics', stage: 1 });
  N('hobby', 'de', "hobby's", 'hobby', 'Mijn hobby is fotografie.', 'My hobby is photography.', { theme: 'hobbies', stage: 1 });
  W('omdat', 'because', 'conj', 'Ik leer Nederlands omdat ik hier woon.', 'I am learning Dutch because I live here.', { theme: 'basics', stage: 1, note: 'Sends the verb to the end of its clause (A2 topic).' });
  W('want', 'because / for', 'conj', 'Ik blijf thuis, want ik ben moe.', 'I am staying home, because I am tired.', { theme: 'basics', stage: 1 });
  VB('bellen', 'to call (phone)', 'bel|belt|bellen', 'belde|belden', 'gebeld', 'hebben', 'Ik bel mijn moeder elke zondag.', 'I call my mother every Sunday.', { theme: 'basics', stage: 1 });

  N('auto', 'de', "auto's", 'car', 'Wij hebben geen auto.', 'We do not have a car.', { theme: 'transport', stage: 1 });
  N('sleutel', 'de', 'sleutels', 'key', 'Waar is mijn sleutel?', 'Where is my key?', { theme: 'home', stage: 1 });
  N('probleem', 'het', 'problemen', 'problem', 'Dat is geen probleem.', 'That is no problem.', { theme: 'basics', stage: 1 });
  N('idee', 'het', 'ideeën', 'idea', 'Goed idee!', 'Good idea!', { theme: 'basics', stage: 1 });
  W('moeilijk', 'difficult', 'adj', 'Nederlands is niet moeilijk.', 'Dutch is not difficult.', { theme: 'basics', stage: 1 });
  W('makkelijk', 'easy', 'adj', 'De les is makkelijk.', 'The lesson is easy.', { theme: 'basics', stage: 1 });
  N('haast', 'de', null, 'hurry', 'Ik heb haast.', 'I am in a hurry.', { theme: 'basics', stage: 1 });
  PH('zin hebben in', 'to feel like (having)', 'Ik heb zin in koffie.', 'I feel like a coffee.', { theme: 'basics', stage: 1 });
  W('nog', 'still / yet / another', 'adv', 'Ik woon nog in Londen.', 'I still live in London.', { theme: 'basics', stage: 1 });
  W('al', 'already', 'adv', 'Ik woon al drie jaar hier.', 'I have already lived here for three years.', { theme: 'basics', stage: 1 });
  W('natuurlijk', 'of course', 'adv', 'Natuurlijk!', 'Of course!', { theme: 'basics', stage: 1 });
  N('telefoon', 'de', 'telefoons', 'phone', 'Mijn telefoon is kapot.', 'My phone is broken.', { theme: 'basics', stage: 1 });
  W('kapot', 'broken', 'adj', 'De fiets is kapot.', 'The bike is broken.', { theme: 'basics', stage: 1 });
  W('misschien', 'maybe', 'adv', 'Misschien kom ik morgen.', 'Maybe I will come tomorrow.', { theme: 'basics', stage: 1 });

  /* ---------------- Vocabulary: Unit 2 ---------------- */
  N('kamer', 'de', 'kamers', 'room', 'Mijn kamer is klein.', 'My room is small.', { theme: 'home', stage: 1 });
  N('woonkamer', 'de', 'woonkamers', 'living room', 'De woonkamer is licht.', 'The living room is bright.', { theme: 'home', stage: 1 });
  N('slaapkamer', 'de', 'slaapkamers', 'bedroom', 'Het huis heeft twee slaapkamers.', 'The house has two bedrooms.', { theme: 'home', stage: 1 });
  N('keuken', 'de', 'keukens', 'kitchen', 'De keuken is nieuw.', 'The kitchen is new.', { theme: 'home', stage: 1 });
  N('badkamer', 'de', 'badkamers', 'bathroom', 'De badkamer is boven.', 'The bathroom is upstairs.', { theme: 'home', stage: 1 });
  N('toilet', 'het', 'toiletten', 'toilet', 'Waar is het toilet?', 'Where is the toilet?', { theme: 'home', stage: 1, altNl: ['wc'] });
  N('gang', 'de', 'gangen', 'hallway', 'De jassen hangen in de gang.', 'The coats hang in the hallway.', { theme: 'home', stage: 1 });
  N('raam', 'het', 'ramen', 'window', 'Het raam is open.', 'The window is open.', { theme: 'home', stage: 1 });
  N('trap', 'de', 'trappen', 'stairs', 'De trap is steil.', 'The stairs are steep.', { theme: 'home', stage: 1 });
  N('balkon', 'het', 'balkons', 'balcony', 'Wij hebben een klein balkon.', 'We have a small balcony.', { theme: 'home', stage: 1 });
  N('vloer', 'de', 'vloeren', 'floor', 'De vloer is van hout.', 'The floor is made of wood.', { theme: 'home', stage: 1 });
  N('appartement', 'het', 'appartementen', 'apartment', 'Ik huur een appartement in West.', 'I rent an apartment in West.', { theme: 'home', stage: 1 });
  N('verdieping', 'de', 'verdiepingen', 'floor / storey', 'Ik woon op de derde verdieping.', 'I live on the third floor.', { theme: 'home', stage: 1 });
  N('huur', 'de', null, 'rent', 'De huur is hoog.', 'The rent is high.', { theme: 'home', stage: 1 });
  VB('huren', 'to rent', 'huur|huurt|huren', 'huurde|huurden', 'gehuurd', 'hebben', 'Wij huren een huis.', 'We rent a house.', { theme: 'home', stage: 1 });
  N('buurt', 'de', 'buurten', 'neighbourhood', 'De buurt is gezellig.', 'The neighbourhood is cosy.', { theme: 'home', stage: 1 });
  N('buurman', 'de', 'buurmannen', 'neighbour (male)', 'Mijn buurman heeft een hond.', 'My neighbour has a dog.', { theme: 'people', stage: 1 });
  N('buurvrouw', 'de', 'buurvrouwen', 'neighbour (female)', 'De buurvrouw is aardig.', 'The neighbour is kind.', { theme: 'people', stage: 1 });
  N('feest', 'het', 'feesten', 'party', 'Het feest is zaterdag.', 'The party is on Saturday.', { theme: 'social', stage: 1 });
  N('begin', 'het', null, 'beginning', 'Het begin is moeilijk.', 'The beginning is difficult.', { theme: 'basics', stage: 1 });
  N('ontbijt', 'het', null, 'breakfast', 'Het ontbijt is om acht uur.', 'Breakfast is at eight.', { theme: 'food', stage: 1 });

  N('stoel', 'de', 'stoelen', 'chair', 'De stoel is van hout.', 'The chair is made of wood.', { theme: 'home', stage: 1 });
  N('bank', 'de', 'banken', 'sofa / bank', 'De bank is comfortabel.', 'The sofa is comfortable.', { theme: 'home', stage: 1 });
  N('kast', 'de', 'kasten', 'cupboard / wardrobe', 'De kast is vol.', 'The cupboard is full.', { theme: 'home', stage: 1 });
  N('bureau', 'het', 'bureaus', 'desk', 'Mijn laptop staat op het bureau.', 'My laptop is on the desk.', { theme: 'home', stage: 1 });
  N('lamp', 'de', 'lampen', 'lamp', 'De lamp is kapot.', 'The lamp is broken.', { theme: 'home', stage: 1 });
  N('koelkast', 'de', 'koelkasten', 'fridge', 'De melk staat in de koelkast.', 'The milk is in the fridge.', { theme: 'home', stage: 1 });
  N('bord', 'het', 'borden', 'plate', 'Het bord is leeg.', 'The plate is empty.', { theme: 'home', stage: 1 });
  N('kopje', 'het', 'kopjes', 'cup', 'Een kopje thee, graag.', 'A cup of tea, please.', { theme: 'home', stage: 1 });
  N('fles', 'de', 'flessen', 'bottle', 'Een fles water.', 'A bottle of water.', { theme: 'food', stage: 1 });
  N('foto', 'de', "foto's", 'photo', 'Dit is een foto van mijn gezin.', 'This is a photo of my family.', { theme: 'basics', stage: 1 });
  N('paraplu', 'de', "paraplu's", 'umbrella', 'Neem een paraplu mee.', 'Take an umbrella.', { theme: 'basics', stage: 1 });
  N('lied', 'het', 'liederen', 'song', 'Dat lied is mooi.', 'That song is beautiful.', { theme: 'hobbies', stage: 1, altNl: ['liedje'] });
  N('blad', 'het', 'bladeren', 'leaf', 'De bladeren zijn geel.', 'The leaves are yellow.', { theme: 'nature', stage: 1, note: 'blad = leaf: plural bladeren. blad = magazine/sheet: plural bladen.' });
  N('plant', 'de', 'planten', 'plant', 'De plant staat bij het raam.', 'The plant is by the window.', { theme: 'home', stage: 1 });
  N('doos', 'de', 'dozen', 'box', 'De doos is zwaar.', 'The box is heavy.', { theme: 'home', stage: 1 });
  N('tv', 'de', "tv's", 'TV', 'De tv staat in de woonkamer.', 'The TV is in the living room.', { theme: 'home', stage: 1, altNl: ['televisie'] });
  N('computer', 'de', 'computers', 'computer', 'De computer is oud.', 'The computer is old.', { theme: 'home', stage: 1 });
  N('spiegel', 'de', 'spiegels', 'mirror', 'De spiegel hangt in de badkamer.', 'The mirror hangs in the bathroom.', { theme: 'home', stage: 1 });
  N('museum', 'het', 'musea', 'museum', 'Het museum is op maandag gesloten.', 'The museum is closed on Monday.', { theme: 'city', stage: 1 });

  VB('liggen', 'to lie (be lying)', 'lig|ligt|liggen', 'lag|lagen', 'gelegen', 'hebben', 'De sleutels liggen op tafel.', 'The keys are (lying) on the table.', { theme: 'home', stage: 1, note: 'Used for flat things and for location: Amsterdam ligt in Noord-Holland.' });
  VB('staan', 'to stand (be standing)', 'sta|staat|staan', 'stond|stonden', 'gestaan', 'hebben', 'De fiets staat voor de deur.', 'The bike is (standing) in front of the door.', { theme: 'home', stage: 1, note: 'Used for upright things: de lamp staat, de auto staat.' });
  VB('hangen', 'to hang', 'hang|hangt|hangen', 'hing|hingen', 'gehangen', 'hebben', 'De jas hangt aan de deur.', 'The coat hangs on the door.', { theme: 'home', stage: 1 });
  W('onder', 'under', 'prep', 'De kat zit onder de tafel.', 'The cat is under the table.', { theme: 'prepositions', stage: 1 });
  W('boven', 'above / upstairs', 'prep', 'De lamp hangt boven de tafel.', 'The lamp hangs above the table.', { theme: 'prepositions', stage: 1 });
  W('naast', 'next to', 'prep', 'De kast staat naast het raam.', 'The cupboard is next to the window.', { theme: 'prepositions', stage: 1 });
  W('achter', 'behind', 'prep', 'De tuin is achter het huis.', 'The garden is behind the house.', { theme: 'prepositions', stage: 1 });
  W('tussen', 'between', 'prep', 'De stoel staat tussen de tafel en de kast.', 'The chair is between the table and the cupboard.', { theme: 'prepositions', stage: 1 });
  W('bij', 'at / near / with', 'prep', 'De plant staat bij het raam.', 'The plant is by the window.', { theme: 'prepositions', stage: 1 });
  W('aan', 'on (vertical) / at', 'prep', 'De foto hangt aan de muur.', 'The photo hangs on the wall.', { theme: 'prepositions', stage: 1 });
  W('in', 'in', 'prep', 'De melk staat in de koelkast.', 'The milk is in the fridge.', { theme: 'prepositions', stage: 1 });
  W('op', 'on / at', 'prep', 'Het boek ligt op de tafel.', 'The book is on the table.', { theme: 'prepositions', stage: 1 });
  W('tegenover', 'opposite', 'prep', 'De bakker is tegenover het park.', 'The bakery is opposite the park.', { theme: 'prepositions', stage: 1 });
  W('deze', 'this / these (de-words)', 'pron', 'Deze stoel is nieuw.', 'This chair is new.', { theme: 'basics', stage: 1 });
  W('die', 'that / those (de-words)', 'pron', 'Die lamp is kapot.', 'That lamp is broken.', { theme: 'basics', stage: 1 });
  W('waar', 'where', 'adv', 'Waar is de wc?', 'Where is the toilet?', { theme: 'basics', stage: 1 });

  W('lelijk', 'ugly', 'adj', 'Dat gebouw is lelijk.', 'That building is ugly.', { theme: 'adjectives', stage: 1 });
  W('licht', 'light / bright', 'adj', 'De kamer is licht.', 'The room is bright.', { theme: 'adjectives', stage: 1 });
  W('donker', 'dark', 'adj', 'De gang is donker.', 'The hallway is dark.', { theme: 'adjectives', stage: 1 });
  W('gezellig', 'cosy / convivial', 'adj', 'Het café is gezellig.', 'The café is cosy.', { theme: 'adjectives', stage: 1, note: 'The famous untranslatable word: cosy, fun, warm, sociable, all at once.' });
  W('ruim', 'spacious', 'adj', 'De woonkamer is ruim.', 'The living room is spacious.', { theme: 'adjectives', stage: 1 });
  W('rustig', 'quiet / calm', 'adj', 'De straat is rustig.', 'The street is quiet.', { theme: 'adjectives', stage: 1 });
  W('warm', 'warm', 'adj', 'Het is warm in de keuken.', 'It is warm in the kitchen.', { theme: 'adjectives', stage: 1 });
  W('wit', 'white', 'adj', 'De muren zijn wit.', 'The walls are white.', { theme: 'colours', stage: 1 });
  W('zwart', 'black', 'adj', 'De kat is zwart.', 'The cat is black.', { theme: 'colours', stage: 1 });
  W('groen', 'green', 'adj', 'De deur is groen.', 'The door is green.', { theme: 'colours', stage: 1 });
  W('geel', 'yellow', 'adj', 'De tram is blauw en wit, de bus is geel.', 'The tram is blue and white, the bus is yellow.', { theme: 'colours', stage: 1 });
  W('bruin', 'brown', 'adj', 'De tafel is bruin.', 'The table is brown.', { theme: 'colours', stage: 1 });
  W('hoog', 'high / tall', 'adj', 'Het plafond is hoog.', 'The ceiling is high.', { theme: 'adjectives', stage: 1 });
  W('laag', 'low', 'adj', 'De huur is laag.', 'The rent is low.', { theme: 'adjectives', stage: 1 });
  W('vol', 'full', 'adj', 'De tram is vol.', 'The tram is full.', { theme: 'adjectives', stage: 1 });
  W('leeg', 'empty', 'adj', 'De koelkast is leeg.', 'The fridge is empty.', { theme: 'adjectives', stage: 1 });
  W('aardig', 'kind / nice (person)', 'adj', 'De buren zijn aardig.', 'The neighbours are nice.', { theme: 'adjectives', stage: 1 });
  W('heel', 'very', 'adv', 'Het huis is heel groot.', 'The house is very big.', { theme: 'basics', stage: 1, altNl: ['erg'] });
  W('een beetje', 'a bit', 'adv', 'De kamer is een beetje klein.', 'The room is a bit small.', { theme: 'basics', stage: 1, id: 'een-beetje-adv' });

  /* ================= UNIT 1: Ik en mijn familie ================= */
  const u1 = [];

  u1.push(lesson('s1u1l1', 'Who I am: pronouns and zijn', 'You can introduce yourself and others: name, where you come from, where you live, nationality.', [
    h('The subject pronouns'),
    table(['', 'stressed', 'unstressed'], [['I', '*ik', ''], ['you', '*jij', '*je'], ['you (formal)', '*u', ''], ['he', '*hij', ''], ['she', '*zij', '*ze'], ['it', '*het', ''], ['we', '*wij', '*we'], ['you (plural)', '*jullie', ''], ['they', '*zij', '*ze']]),
    p('Use the unstressed forms (`je`, `ze`, `we`) by default. The stressed ones are for contrast: `Jij bent Engels en ik ben Iers.` `ze` means she or they; the verb tells you: `ze is` (she is), `ze zijn` (they are).'),
    h('zijn: to be'),
    table(['', 'zijn'], [['ik', '*ben'], ['jij / je / u', '*bent'], ['hij / zij / het', '*is'], ['wij / jullie / zij', '*zijn']]),
    p('In a question `jij` loses the -t: `Ben je Engels?` (but `Bent u …?`).'),
    h('Introducing yourself'),
    ex(['Ik ben Sam. Ik kom uit Engeland en ik woon in Amsterdam.', 'I am Sam. I come from England and I live in Amsterdam.'], ['Dit is Anna. Zij is Nederlands.', 'This is Anna. She is Dutch.'], ['Wij zijn collega’s.', 'We are colleagues.'], ['Ben je student? — Nee, ik werk.', 'Are you a student? — No, I work.']),
    p('Nationality, profession: no article. `Ik ben Engels.` `Zij is student.` (English says "a student"; Dutch does not.)'),
    tip('ben - bent - is - zijn. Say it as a rhythm ten times. The plural is the infinitive.'),
  ], ['g1-pronouns', 'g1-zijn', 'g1-professions'], ['komen', 'wonen', 'land', 'nederland-land', 'engeland', 'amerika', 'duitsland', 'nederlander', 'nederlands-adj', 'engels-adj', 'vriend', 'vriendin', 'collega', 'student', 'leuk', 'mooi', 'groot', 'wie', 'dit', 'dat', 'hij', 'zij', 'wij', 'jullie'], [
    conj('zijn', 'ik', 'pres', ['ben'], 'ik ben. zijn is irregular: ben, bent, is, zijn.'),
    conj('zijn', 'jij', 'pres', ['bent'], 'jij bent (but: ben jij? in a question).'),
    conj('zijn', 'hij', 'pres', ['is'], 'hij is, zij is, het is.'),
    conj('zijn', 'wij', 'pres', ['zijn'], 'All plurals use the infinitive: wij zijn, jullie zijn, zij zijn.'),
    conj('zijn', 'u', 'pres', ['bent'], 'u bent: the formal you takes the same form as jij.'),
    fill('Anna en Tom ___ collega’s.', ['zijn'], 'Anna and Tom are colleagues.', 'Two people = they = zijn.'),
    fill('___ is mijn vriendin. Zij komt uit Amerika.', ['Dit', 'Dat'], 'This is my friend. She comes from America.', 'When you introduce someone, use dit/dat + is, whatever the gender: Dit is Anna.'),
    fill('Ik ___ uit Engeland.', ['kom'], 'I come from England.', 'komen has a short o in the singular: ik kom, jij komt.'),
    mc('"Ze zijn Nederlands." Who is Dutch?', ['she', 'they', 'you'], 1, 'ze + zijn (plural verb) = they. ze + is = she.'),
    mc('Which sentence is correct?', ['Ben je student?', 'Bent je student?', 'Ben jij student bent?'], 0, 'In a question jij/je comes after the verb and loses the -t: ben je.'),
    mc('How do you say "I am a student"?', ['Ik ben een student.', 'Ik ben student.', 'Ik is student.'], 1, 'Professions and nationalities take no article with zijn.'),
    build('I live in Amsterdam.', 'Ik woon in Amsterdam.', ['ben', 'woont'], 'ik + stem: woon. The stem of wonen is woon (long o written double).'),
    build('She comes from Germany.', 'Zij komt uit Duitsland.', ['kom', 'in'], 'zij komt (stem + t); "from" a country = uit.'),
    build('Are you Dutch?', 'Ben je Nederlands?', ['bent', 'is'], 'Question: verb first, je second, and no -t on ben.'),
    build('We are friends.', 'Wij zijn vrienden.', ['is', 'vriend'], 'wij zijn + plural noun.'),
    tr('en-nl', 'This is my colleague.', ['Dit is mijn collega.'], 'dit is + person. mijn = my.'),
    tr('nl-en', 'Wie is dat?', ['Who is that?', 'Who is it?'], 'wie = who; dat = that.'),
    dict('Ik ben Anna en ik woon in Amsterdam.', 'I am Anna and I live in Amsterdam.', 'ben (ik), woon (ik): the ik-form is the bare stem.'),
    listen('Zij is student in Leiden.', ['She is a student in Leiden.', 'They are students in Leiden.', 'He is a student in Leiden.'], 0, 'zij + is = she.'),
    speak('Ik ben Sam. Ik kom uit Engeland en ik woon in Amsterdam.', 'I am Sam. I come from England and I live in Amsterdam.'),
    speak('Dit is mijn vriendin. Zij is Nederlands.', 'This is my friend. She is Dutch.'),
    free('Introduce yourself in three sentences: name, where you come from, where you live.', 'Ik ben Lisa. Ik kom uit Engeland. Ik woon in Amsterdam.', 'I am Lisa. I come from England. I live in Amsterdam.', { hints: ['Ik ben …', 'Ik kom uit …', 'Ik woon in …'] }),
    auto(4, ['tr-nl-en', 'mc-meaning', 'listen']),
  ], [
    conj('zijn', 'zij', 'pres', ['is', 'zijn'], 'zij is (she) or zij zijn (they): both correct here.'),
    fill('___ jullie Engels?', ['Zijn'], 'Are you (plural) English?', 'jullie takes zijn.'),
    build('He is my friend.', 'Hij is mijn vriend.', ['ben', 'haar'], 'hij is + mijn vriend.'),
    build('Do you live in Utrecht?', 'Woon je in Utrecht?', ['woont', 'jij'], 'Question: verb first; je after the verb, no -t.'),
    tr('en-nl', 'We come from America.', ['Wij komen uit Amerika.', 'We komen uit Amerika.'], 'wij komen (infinitive form) + uit.'),
    speak('Ben je Nederlands? Nee, ik ben Engels.', 'Are you Dutch? No, I am English.'),
  ]));

  u1.push(lesson('s1u1l2', 'My family: hebben and possessives', 'You can talk about your family and say what you have, using hebben and my/your/his/her/our/their.', [
    h('hebben: to have'),
    table(['', 'hebben'], [['ik', '*heb'], ['jij / je', '*hebt'], ['u', '*hebt / *heeft'], ['hij / zij / het', '*heeft'], ['wij / jullie / zij', '*hebben']]),
    p('Only `heeft` is irregular. Dutch "has" things English "is": `Ik heb honger` (I am hungry), `Ik heb dorst` (thirsty), `Ik heb haast` (in a hurry), `Ik heb zin in koffie` (I feel like a coffee).'),
    h('Possessives'),
    table(['', 'Dutch', ''], [['my', '*mijn', ''], ['your', '*jouw / *je', 'je is the normal spoken form'], ['your (formal)', '*uw', ''], ['his', '*zijn', ''], ['her', '*haar', ''], ['our', '*ons / *onze', 'ons + het-word singular; onze otherwise'], ['your (plural)', '*jullie', ''], ['their', '*hun', '']]),
    p('`ons huis` but `onze tuin`, `onze kinderen`. Everything else never changes.'),
    h('Family'),
    table(['', '', '', ''], [['*de vader', 'father', '*de moeder', 'mother'], ['*de zoon', 'son', '*de dochter', 'daughter'], ['*de broer', 'brother', '*de zus', 'sister'], ['*de opa', 'grandpa', '*de oma', 'grandma'], ['*de oom', 'uncle', '*de tante', 'aunt'], ['*de man', 'husband', '*de vrouw', 'wife'], ['*de ouders', 'parents', '*het gezin', 'family (household)']]),
    p('`de familie` is the extended family; `het gezin` is the household (parents and children). `mijn man` = my husband, `mijn vrouw` = my wife, `mijn vriend/vriendin` = boyfriend/girlfriend (or just friend; context decides).'),
    ex(['Ik heb een broer en twee zussen.', 'I have a brother and two sisters.'], ['Mijn ouders wonen in Engeland.', 'My parents live in England.'], ['Haar man is Nederlander.', 'Her husband is Dutch.'], ['Ons gezin is klein.', 'Our family is small.']),
  ], ['g1-hebben', 'g1-possessives'], ['hebben', 'vader', 'moeder', 'ouders', 'zoon', 'dochter', 'opa', 'oma', 'oom', 'tante', 'familie', 'gezin', 'partner', 'getrouwd', 'samen', 'mijn', 'jouw', 'uw', 'haar-poss', 'ons', 'hun', 'honger', 'dorst'], [
    conj('hebben', 'ik', 'pres', ['heb'], 'ik heb.'),
    conj('hebben', 'hij', 'pres', ['heeft'], 'The one irregular form: hij/zij heeft.'),
    conj('hebben', 'jullie', 'pres', ['hebben'], 'Plural: hebben.'),
    conj('hebben', 'jij', 'pres', ['hebt'], 'jij hebt (heb je? in a question).'),
    fill('Mijn zus ___ twee kinderen.', ['heeft'], 'My sister has two children.', 'mijn zus = she = heeft.'),
    fill('___ huis is klein, maar ___ tuin is groot.', ['Ons'], 'Our house is small, but our garden is big.', 'ons huis (het-word) — and it would be onze tuin (de-word). Only the first gap is checked here: Ons.'),
    fill('Dit is Tom en dat is ___ vrouw.', ['zijn'], 'This is Tom and that is his wife.', 'his = zijn (yes, the same word as the verb "to be").'),
    fill('Anna en ___ broer wonen samen.', ['haar'], 'Anna and her brother live together.', 'her = haar.'),
    fill('Ik heb ___. Is er koffie?', ['dorst'], 'I am thirsty. Is there coffee?', 'Dutch has thirst: ik heb dorst.'),
    mc('Which is correct?', ['ons kinderen', 'onze kinderen', 'onzen kinderen'], 1, 'Plural: onze. ons only before a singular het-word.'),
    mc('"I am hungry" in Dutch is …', ['Ik ben honger.', 'Ik heb honger.', 'Ik heb hongerig.'], 1, 'hebben + honger.'),
    mc('"jouw" or "je"? In everyday speech, "your bike" is usually …', ['je fiets', 'jouw fiets'], 0, 'je is the normal unstressed form; jouw is for contrast (jouw fiets, niet de mijne).'),
    build('Their daughter lives in Leiden.', 'Hun dochter woont in Leiden.', ['haar', 'wonen'], 'their = hun. hun dochter = she = woont.'),
    build('Do you have brothers or sisters?', 'Heb je broers of zussen?', ['hebt', 'jij'], 'Question: heb je (no t).'),
    build('My grandma is eighty and my grandpa is eighty-two.', 'Mijn oma is tachtig en mijn opa is tweeëntachtig.', ['heeft', 'zijn'], 'Age uses zijn: oma is tachtig.'),
    fix('Mijn broer hebt een auto.', ['Mijn broer heeft een auto.'], 'mijn broer = hij = heeft.'),
    tr('en-nl', 'our family (household)', ['ons gezin', 'gezin'], 'het gezin, so ons gezin.'),
    tr('nl-en', 'Ik ben getrouwd en ik heb een zoon.', ['I am married and I have a son.', 'I am married and have a son.'], 'getrouwd = married; zoon = son.'),
    dict('Mijn ouders hebben een hond.', 'My parents have a dog.', 'ouders = plural = hebben.'),
    listen('Haar vader is dokter.', ['Her father is a doctor.', 'His father is a doctor.', 'Our father is a doctor.'], 0, 'haar = her.'),
    speak('Ik heb een broer en twee zussen.', 'I have a brother and two sisters.'),
    speak('Mijn ouders wonen in Engeland.', 'My parents live in England.'),
    match([['de vader', 'father'], ['de dochter', 'daughter'], ['de oom', 'uncle'], ['de oma', 'grandma'], ['het gezin', 'family (household)'], ['de ouders', 'parents']]),
    free('Describe your family in three or four sentences: who is in it, where they live, one detail.', 'Ik heb een broer. Hij woont in Londen. Mijn ouders wonen in Manchester. Ons gezin is klein.', 'I have a brother. He lives in London. My parents live in Manchester. Our family is small.', { hints: ['Ik heb …', 'Mijn … woont in …', 'Ons gezin is …'] }),
    auto(3, ['tr-en-nl', 'article', 'listen']),
  ], [
    conj('hebben', 'zij', 'pres', ['heeft', 'hebben'], 'zij heeft (she) / zij hebben (they).'),
    fill('___ zoon is vier jaar.', ['Onze', 'Mijn', 'Hun', 'Haar', 'Zijn', 'Jouw', 'Uw'], 'Our / my son is four.', 'de zoon: onze (not ons). Any possessive works grammatically here.'),
    fill('Ik heb ___ in een biertje.', ['zin'], 'I feel like a beer.', 'zin hebben in = feel like.'),
    build('His mother has a cat.', 'Zijn moeder heeft een kat.', ['haar', 'hebt'], 'his = zijn; moeder = she = heeft.'),
    tr('en-nl', 'Are you thirsty?', ['Heb je dorst?', 'Hebt u dorst?'], 'hebben + dorst.'),
    speak('Ons gezin is klein: ik, mijn vrouw en onze dochter.', 'Our family is small: me, my wife and our daughter.'),
  ]));

  u1.push(lesson('s1u1l3', 'What I do: the present tense', 'You can say what you and others do every day using regular verbs in the present tense.', [
    p('Every regular verb follows one recipe. Take the infinitive, cut off **-en**, and you have the stem. Then:'),
    table(['', 'ending', 'werken', 'wonen', 'lezen'], [['ik', 'stem', '*werk', '*woon', '*lees'], ['jij / u / hij / zij / het', 'stem + t', '*werkt', '*woont', '*leest'], ['wij / jullie / zij', 'infinitive', '*werken', '*wonen', '*lezen']]),
    h('Spelling the stem'),
    list('long vowel doubled: wonen → `woon`, maken → `maak`, lopen → `loop`', 'double consonant becomes single: zitten → `zit`', 'v → f, z → s: leven → `leef`, lezen → `lees`, reizen → `reis`', 'stem ends in -t: no second t: eten → `hij eet`, zitten → `zij zit`'),
    h('je after the verb: no -t'),
    p('`Werk je in Amsterdam?` `Waar woon je?` `Morgen werk je thuis.` Only jij/je does this.'),
    warn('No -ing form in Dutch. `Ik lees` = I read AND I am reading. Never try to build "ik ben lezen".'),
    ex(['Ik werk bij een bank en mijn vrouw studeert.', 'I work at a bank and my wife is studying.'], ['Wij eten om zes uur en daarna kijken we tv.', 'We eat at six and afterwards we watch TV.'], ['Luister je naar muziek? — Ja, elke dag.', 'Do you listen to music? — Yes, every day.'], ['Hij slaapt, zij leest.', 'He is sleeping, she is reading.']),
  ], ['g1-present'], ['werken', 'leren', 'studeren', 'praten', 'maken', 'eten', 'drinken', 'lezen', 'schrijven', 'kopen', 'luisteren', 'kijken', 'slapen', 'zitten', 'thuis', 'werk', 'les', 'elke', 'muziek'], [
    conj('werken', 'ik', 'pres', ['werk'], 'ik = stem: werk.'),
    conj('werken', 'hij', 'pres', ['werkt'], 'hij = stem + t: werkt.'),
    conj('wonen', 'jij', 'pres', ['woont'], 'Stem woon (double o), + t: woont.'),
    conj('lezen', 'zij', 'pres', ['leest'], 'Stem: lees (z → s, long ee doubled). + t: leest.'),
    conj('eten', 'hij', 'pres', ['eet'], 'Stem eet already ends in t: hij eet, no extra t.'),
    conj('zitten', 'ik', 'pres', ['zit'], 'Stem: zit (single t, short i).'),
    conj('schrijven', 'ik', 'pres', ['schrijf'], 'v → f at the end of the stem: schrijf.'),
    conj('maken', 'wij', 'pres', ['maken'], 'Plural = infinitive.'),
    conj('drinken', 'jullie', 'pres', ['drinken'], 'jullie = plural = infinitive.'),
    fill('Mijn zus ___ in Rotterdam.', ['studeert', 'woont', 'werkt'], 'My sister studies / lives / works in Rotterdam.', 'zus = zij = stem + t: studeert, woont, werkt.'),
    fill('___ je Nederlands?', ['Leer', 'Spreek', 'Studeer'], 'Are you learning Dutch?', 'je after the verb: no -t. Leer je? Spreek je?'),
    fill('Wij ___ elke avond tv.', ['kijken'], 'We watch TV every evening.', 'wij = plural = kijken.'),
    mc('Which is the correct stem of "lopen"?', ['lop', 'loop', 'lope'], 1, 'The long o of lo-pen must be written double in the closed syllable: loop.'),
    mc('"I am reading" in Dutch is …', ['Ik ben lezen.', 'Ik lees.', 'Ik ben aan lezen.'], 1, 'Dutch uses the simple present: ik lees.'),
    build('She works in a hospital.', 'Zij werkt in een ziekenhuis.', ['werk', 'werken'], 'zij werkt.'),
    build('Where do you work?', 'Waar werk je?', ['werkt', 'jij'], 'Question word, verb, je (no t).'),
    build('We eat at six o’clock.', 'Wij eten om zes uur.', ['eet', 'op'], 'wij eten; om + time.'),
    fix('Hij woon in Utrecht.', ['Hij woont in Utrecht.'], 'hij = stem + t: woont.'),
    fix('Ik leest een boek.', ['Ik lees een boek.'], 'ik = bare stem: lees.'),
    dict('Ik luister naar muziek en ik lees.', 'I listen to music and I read.', 'luister (ik), lees (ik). luisteren naar = listen to.'),
    listen('Zij praat met haar moeder.', ['She is talking to her mother.', 'She is writing to her mother.', 'She is looking at her mother.'], 0, 'praten met = talk to.'),
    speak('Ik werk bij een bank en ik leer Nederlands.', 'I work at a bank and I am learning Dutch.'),
    speak('Wat doe je? Ik lees een boek.', 'What are you doing? I am reading a book.'),
    auto(4, ['conj', 'tr-nl-en', 'listen']),
  ], [
    conj('kopen', 'hij', 'pres', ['koopt'], 'Stem koop + t.'),
    conj('praten', 'zij', 'pres', ['praat'], 'Stem praat ends in t: no extra t.'),
    conj('slapen', 'ik', 'pres', ['slaap'], 'Stem slaap (double a).'),
    fill('___ jullie koffie?', ['Drinken'], 'Do you (plural) drink coffee?', 'jullie = drinken.'),
    build('Do you work at home?', 'Werk je thuis?', ['werkt', 'in'], 'werk je (no t); thuis = at home, no preposition.'),
    fix('Wij werkt in Amsterdam.', ['Wij werken in Amsterdam.'], 'wij = plural = werken.'),
    speak('Mijn vrouw studeert en ik werk.', 'My wife studies and I work.'),
  ]));

  u1.push(lesson('s1u1l4', 'Asking questions', 'You can ask yes/no questions and questions with who, what, where, when, how, why and which.', [
    h('Yes/no questions: verb first'),
    p('`Woon je in Amsterdam?` `Is het ver?` `Hebben jullie kinderen?` No "do", no helper. And `je` after the verb has no -t.'),
    h('Question words'),
    table(['', '', 'example'], [['*wie', 'who', '*Wie is dat?'], ['*wat', 'what', '*Wat doe je?'], ['*waar', 'where', '*Waar woon je?'], ['*waar … heen', 'where to', '*Waar ga je heen?'], ['*wanneer', 'when', '*Wanneer kom je?'], ['*hoe', 'how', '*Hoe gaat het?'], ['*hoe laat', 'what time', '*Hoe laat is het?'], ['*hoeveel', 'how much / many', '*Hoeveel kinderen heb je?'], ['*waarom', 'why', '*Waarom leer je Nederlands?'], ['*welke / *welk', 'which', '*Welke tram? *Welk huis?'], ['*wat voor', 'what kind of', '*Wat voor werk doe je?']]),
    p('After the question word comes the **verb**, then the subject: `Waar woon je?` `Wanneer begint de les?` This is the same verb-second rule that runs all Dutch sentences.'),
    p('Answering "why": `Waarom …? — Omdat …` (because), with the verb at the end of the omdat-clause: `Omdat ik hier woon.` For now, learn `omdat ik hier woon` as a chunk; the rule comes in A2.'),
    ex(['Wat is je telefoonnummer?', 'What is your phone number?'], ['Hoe heet jouw broer?', 'What is your brother called?'], ['Welke tram gaat naar het Museumplein?', 'Which tram goes to Museumplein?'], ['Waarom woon je in Amsterdam? — Omdat ik hier werk.', 'Why do you live in Amsterdam? — Because I work here.']),
    tip('`welke` for de-words and plurals, `welk` for het-words: welke fiets, welk huis. "Wat voor" never changes.'),
  ], ['g1-questions'], ['wie', 'wat', 'waar', 'wanneer', 'hoe', 'waarom', 'welke', 'wat-voor', 'waarheen', 'doen', 'antwoord', 'adres', 'e-mailadres', 'leeftijd', 'hobby', 'omdat', 'want', 'bellen', 'telefoon', 'natuurlijk'], [
    fill('___ woon je? — In Amsterdam-Noord.', ['Waar'], 'Where do you live? — In Amsterdam North.', 'waar = where.'),
    fill('___ is dat? — Dat is mijn buurman.', ['Wie'], 'Who is that? — That is my neighbour.', 'wie = who (person).'),
    fill('___ kom je? — Om acht uur.', ['Wanneer', 'Hoe laat'], 'When are you coming? — At eight.', 'wanneer = when; hoe laat = what time.'),
    fill('___ tram gaat naar het station?', ['Welke'], 'Which tram goes to the station?', 'de tram → welke.'),
    fill('___ huis is van jou?', ['Welk'], 'Which house is yours?', 'het huis → welk.'),
    fill('___ werk doe je?', ['Wat voor'], 'What kind of work do you do?', 'wat voor = what kind of.'),
    mc('Which is a correct yes/no question?', ['Je woont in Utrecht?', 'Woon je in Utrecht?', 'Woont je in Utrecht?'], 1, 'Verb first, je after it without -t. (The first is possible with rising intonation, but the standard form is inversion.)'),
    mc('"Waar ga je heen?" means …', ['Where are you?', 'Where are you going?', 'Where do you come from?'], 1, 'waar … heen = where to.'),
    build('What is your address?', 'Wat is je adres?', ['waar', 'jouw'], 'wat is + je adres.'),
    build('Why are you learning Dutch?', 'Waarom leer je Nederlands?', ['leert', 'wat'], 'waarom + verb + je (no t).'),
    build('Do you have children?', 'Hebben jullie kinderen?', ['heeft', 'hebt'], 'Verb first: hebben jullie.'),
    build('What time does the lesson start?', 'Hoe laat begint de les?', ['wanneer', 'begin'], 'hoe laat + begint (de les = het/zij form).'),
    build('How many sisters do you have?', 'Hoeveel zussen heb je?', ['hebt', 'zus'], 'hoeveel + plural noun + heb je.'),
    fix('Waar je woont?', ['Waar woon je?'], 'After a question word the verb comes second, then je, and je gets no -t.'),
    fix('Wat doet je vanavond?', ['Wat doe je vanavond?'], 'je after the verb: no -t. doe je.'),
    tr('nl-en', 'Hoe heet jouw zus?', ['What is your sister called?', "What is your sister's name?", 'What is your sister called'], 'hoe heet = what is … called.'),
    tr('en-nl', 'Who is that?', ['Wie is dat?'], 'wie is dat.'),
    dict('Wat is je e-mailadres?', 'What is your email address?', 'wat is je + noun.'),
    listen('Wanneer ga je naar Engeland?', ['When are you going to England?', 'Where are you going in England?', 'Why are you going to England?'], 0, 'wanneer = when.'),
    speak('Waar woon je en wat doe je?', 'Where do you live and what do you do?'),
    speak('Waarom leer je Nederlands? Omdat ik in Amsterdam woon.', 'Why are you learning Dutch? Because I live in Amsterdam.'),
    free('Ask a new colleague three questions: where they live, what kind of work they do, and whether they have children.', 'Waar woon je? Wat voor werk doe je? Heb je kinderen?', 'Where do you live? What kind of work do you do? Do you have children?', { hints: ['Waar …?', 'Wat voor …?', 'Heb je …?'] }),
    auto(3, ['tr-nl-en', 'listen']),
  ], [
    fill('___ heet je? — Ik heet Tom.', ['Hoe'], 'What is your name? — My name is Tom.', 'hoe heet je.'),
    fill('___ kost een kaartje?', ['Hoeveel', 'Wat'], 'How much does a ticket cost?', 'hoeveel or wat kost.'),
    build('Where do you come from?', 'Waar kom je vandaan?', ['komt', 'uit'], 'waar … vandaan = where from. (waar kom je vandaan)'),
    build('Which book do you read?', 'Welk boek lees je?', ['welke', 'leest'], 'het boek → welk; lees je (no t).'),
    fix('Wie bent dat?', ['Wie is dat?'], 'dat = het/hij form: is.'),
    speak('Welke tram gaat naar het Centraal Station?', 'Which tram goes to Central Station?'),
  ]));

  u1.push(lesson('s1u1l5', 'Saying no: niet and geen', 'You can negate any sentence correctly with niet or geen and put niet in the right place.', [
    p('Dutch has two words for "not". The choice is mechanical: **geen** replaces `een` (or no article) before a noun; **niet** does everything else.'),
    table(['positive', 'negative', ''], [['*Ik heb een auto.', '*Ik heb geen auto.', 'een → geen'], ['*Ik drink koffie.', '*Ik drink geen koffie.', 'no article → geen'], ['*Ik heb de sleutel.', '*Ik heb de sleutel niet.', 'de → niet (at the end)'], ['*Ik werk vandaag.', '*Ik werk vandaag niet.', 'verb → niet at the end'], ['*Het is koud.', '*Het is niet koud.', 'before an adjective'], ['*Ik woon in Utrecht.', '*Ik woon niet in Utrecht.', 'before a preposition phrase'], ['*Ik kan komen.', '*Ik kan niet komen.', 'before the infinitive']]),
    h('Where does niet go?'),
    list('end of a simple sentence: `Ik werk niet.` `Ik ken hem niet.`', 'before adjectives and adverbs: `niet groot`, `niet snel`', 'before prepositional phrases: `niet in Amsterdam`, `niet bij de bakker`', 'before a final infinitive or separable prefix: `Ik wil niet werken.` `Ik sta niet op.`'),
    warn('"I don’t have a …" → `Ik heb geen …`. Never "niet een".'),
    p('Useful negative words: `nooit` (never), `niets` (nothing), `niemand` (nobody), `nergens` (nowhere). `Ik drink nooit koffie.` `Ik heb niets.`'),
    ex(['Ik heb geen tijd en geen geld.', 'I have no time and no money.'], ['Hij is niet thuis.', 'He is not at home.'], ['Wij spreken geen Frans.', 'We do not speak French.'], ['Dat is niet mijn fiets.', 'That is not my bike.'], ['Ik heb geen zin.', 'I do not feel like it.']),
    tip('Would there be "a/an" or nothing in front of the noun? Then geen. Otherwise niet.'),
  ], ['g1-negation'], ['auto', 'sleutel', 'probleem', 'idee', 'moeilijk', 'makkelijk', 'haast', 'zin-hebben-in', 'nog', 'al', 'kapot', 'misschien', 'tijd', 'geld'], [
    fill('Ik heb ___ auto.', ['geen'], 'I do not have a car.', 'een auto → geen auto.'),
    fill('Het is ___ koud vandaag.', ['niet'], 'It is not cold today.', 'Before an adjective: niet.'),
    fill('Wij drinken ___ koffie.', ['geen'], 'We do not drink coffee.', 'No article before koffie → geen.'),
    fill('Ik woon ___ in Utrecht.', ['niet'], 'I do not live in Utrecht.', 'Before a preposition phrase: niet.'),
    fill('Dat is ___ mijn sleutel.', ['niet'], 'That is not my key.', 'mijn sleutel is definite → niet.'),
    fill('Hij heeft ___ kinderen.', ['geen'], 'He has no children.', 'Plural without article → geen.'),
    fill('Ik ken hem ___.', ['niet'], 'I do not know him.', 'Pronoun object, then niet at the end.'),
    mc('Which is correct?', ['Ik heb niet een fiets.', 'Ik heb geen fiets.', 'Ik heb geen een fiets.'], 1, 'een → geen, never niet een.'),
    mc('Where does niet go in "Ik werk vandaag"?', ['Ik niet werk vandaag.', 'Ik werk niet vandaag.', 'Ik werk vandaag niet.'], 2, 'In a simple sentence niet goes at the end, after a time adverb.'),
    mc('"Ik heb geen zin" means …', ['I have no sense.', "I don't feel like it.", 'I have no sentence.'], 1, 'zin hebben = feel like; geen zin = not feel like it.'),
    build('I have no time.', 'Ik heb geen tijd.', ['niet', 'de'], 'tijd without article → geen.'),
    build('She does not work today.', 'Zij werkt vandaag niet.', ['geen', 'werk'], 'niet at the end, after vandaag.'),
    build('That is not difficult.', 'Dat is niet moeilijk.', ['geen', 'moeilijke'], 'niet before an adjective.'),
    build('We have no problem.', 'Wij hebben geen probleem.', ['niet', 'een'], 'een probleem → geen probleem.'),
    fix('Ik spreek niet Duits.', ['Ik spreek geen Duits.'], 'Duits has no article, so geen.'),
    fix('Hij is thuis niet.', ['Hij is niet thuis.'], 'niet goes before thuis (a place adverb), like before a preposition phrase.'),
    fix('Ik heb niet een probleem.', ['Ik heb geen probleem.'], 'niet een → geen.'),
    tr('en-nl', 'I am not in a hurry.', ['Ik heb geen haast.'], 'haast hebben; negative: geen haast.'),
    tr('nl-en', 'De telefoon is niet kapot.', ['The phone is not broken.', "The phone isn't broken."], 'niet before the adjective kapot.'),
    dict('Ik heb geen geld en geen tijd.', 'I have no money and no time.', 'geen before each noun.'),
    listen('Wij hebben geen auto, maar wel een fiets.', ['We have no car, but we do have a bike.', 'We have a car and a bike.', 'We have no car and no bike.'], 0, 'geen auto; wel = do have (the opposite of niet).'),
    speak('Ik woon niet in Utrecht, ik woon in Amsterdam.', 'I do not live in Utrecht, I live in Amsterdam.'),
    speak('Nee, ik heb geen kinderen.', 'No, I have no children.'),
    auto(3, ['tr-nl-en', 'listen', 'mc-meaning']),
  ], [
    fill('Ik heb ___ idee.', ['geen'], 'I have no idea.', 'een idee → geen idee.'),
    fill('De les is ___ makkelijk.', ['niet'], 'The lesson is not easy.', 'Before an adjective: niet.'),
    build('He does not live here.', 'Hij woont hier niet.', ['geen', 'wonen'], 'niet at the end after the place adverb hier.'),
    build('I do not speak Dutch yet.', 'Ik spreek nog geen Nederlands.', ['niet', 'al'], 'nog geen = not yet any.'),
    fix('Wij hebben niet kinderen.', ['Wij hebben geen kinderen.'], 'Plural without article: geen.'),
    speak('Dat is geen probleem.', 'That is no problem.'),
  ]));

  units.push(unit('s1u1', 'Ik en mijn familie', 'myself and family', u1));

  /* ================= UNIT 2: Thuis ================= */
  const u2 = [];

  u2.push(lesson('s1u2l1', 'de or het: my home', 'You can name the rooms of a home and guess de or het for new nouns using the main patterns.', [
    p('Every noun is de or het. Three quarters are de-words, and the het-words follow patterns. Learn the patterns, then memorise the frequent exceptions.'),
    h('de'),
    list('all plurals: de kamers, de huizen', 'people and professions: de buurman, de dokter', 'fruit, trees, rivers: de appel, de boom, de Amstel', 'words ending in -ing, -heid, -ie, -er (person): de verdieping, de familie, de bakker'),
    h('het'),
    list('all diminutives: het huisje, het kopje', 'two-syllable words with be-, ge-, ver-, ont-: het begin, het gesprek, het verhaal, het ontbijt', 'languages, metals, sports: het Nederlands, het goud, het voetbal', 'words in -um, -isme, -ment: het museum, het appartement', 'compounds take the article of the LAST part: de slaap + de kamer = de slaapkamer; de fiets + het pad = het fietspad'),
    h('The home'),
    table(['', '', '', ''], [['*de kamer', 'room', '*de keuken', 'kitchen'], ['*de woonkamer', 'living room', '*de badkamer', 'bathroom'], ['*de slaapkamer', 'bedroom', '*het toilet / *de wc', 'toilet'], ['*de gang', 'hallway', '*de trap', 'stairs'], ['*het raam', 'window', '*de deur', 'door'], ['*het balkon', 'balcony', '*de tuin', 'garden'], ['*de vloer', 'floor', '*het appartement', 'apartment']]),
    warn('Frequent het-words to memorise now: het huis, het raam, het toilet, het balkon, het appartement, het feest, het werk, het geld, het water.'),
    ex(['Ik huur een appartement op de derde verdieping.', 'I rent an apartment on the third floor.'], ['De woonkamer is groot, maar de keuken is klein.', 'The living room is big, but the kitchen is small.'], ['Het toilet is in de gang.', 'The toilet is in the hallway.']),
    tip('Learn every noun as "de/het + word + plural". Say it out loud three times. That is how Dutch children do it: not by rule, by rhythm.'),
  ], ['g1-de-het'], ['kamer', 'woonkamer', 'slaapkamer', 'keuken', 'badkamer', 'toilet', 'gang', 'raam', 'trap', 'balkon', 'vloer', 'appartement', 'verdieping', 'huur', 'huren', 'buurt', 'buurman', 'buurvrouw', 'feest', 'begin', 'ontbijt'], [
    art('keuken', 'de', 'de keuken. Most rooms are de-words: de kamer, de keuken, de gang.'),
    art('raam', 'het', 'het raam (plural: de ramen). One to memorise.'),
    art('toilet', 'het', 'het toilet. (de wc is the everyday word and is a de-word.)'),
    art('slaapkamer', 'de', 'Compound: slaap + kamer, and kamer is a de-word, so de slaapkamer.'),
    art('balkon', 'het', 'het balkon. Memorise.'),
    art('ontbijt', 'het', 'ont- + two syllables → het ontbijt.'),
    art('begin', 'het', 'be- + two syllables → het begin.'),
    art('buurvrouw', 'de', 'People are always de: de buurvrouw, de buurman.'),
    art('verdieping', 'de', 'Words ending in -ing are de: de verdieping, de rekening.'),
    art('appartement', 'het', 'Words ending in -ment are het: het appartement, het moment.'),
    mc('Which pattern tells you "het gesprek" (conversation) is a het-word?', ['it ends in -k', 'it has two syllables and starts with ge-', 'it is a compound'], 1, 'Two-syllable words starting with be-, ge-, ver-, ont- are het.'),
    mc('"het huis" + "de deur" = ?', ['het huisdeur', 'de huisdeur'], 1, 'A compound takes the article of its last part: de deur → de huisdeur.'),
    mc('Which group is always de?', ['diminutives', 'plurals', 'languages'], 1, 'All plurals are de. Diminutives and languages are het.'),
    fill('Ik woon op de derde ___.', ['verdieping'], 'I live on the third floor.', 'de verdieping = floor/storey.'),
    fill('___ toilet is in de gang.', ['Het'], 'The toilet is in the hallway.', 'het toilet.'),
    build('The kitchen is small, but the living room is big.', 'De keuken is klein, maar de woonkamer is groot.', ['het', 'en'], 'maar = but; both nouns are de-words.'),
    build('We rent an apartment in West.', 'Wij huren een appartement in West.', ['huur', 'het'], 'wij huren.'),
    tr('en-nl', 'the bathroom', ['de badkamer', 'badkamer'], 'bad + kamer → de badkamer.'),
    tr('nl-en', 'De huur is hoog.', ['The rent is high.', 'Rent is high.'], 'de huur = rent.'),
    dict('Het raam in de slaapkamer is open.', 'The window in the bedroom is open.', 'het raam, de slaapkamer.'),
    listen('Het feest is bij de buurman.', ['The party is at the neighbour’s.', 'The party is on the balcony.', 'The party is in the kitchen.'], 0, 'bij de buurman = at the (male) neighbour’s place.'),
    speak('Ik huur een appartement op de derde verdieping.', 'I rent an apartment on the third floor.'),
    match([['de keuken', 'kitchen'], ['het raam', 'window'], ['de trap', 'stairs'], ['het balkon', 'balcony'], ['de gang', 'hallway'], ['de vloer', 'floor']]),
    auto(4, ['article', 'tr-en-nl', 'listen']),
  ], [
    art('gang', 'de', 'de gang.'),
    art('feest', 'het', 'het feest: memorise.'),
    art('woonkamer', 'de', 'Compound ending in kamer → de.'),
    mc('"het fietspad": why het?', ['fiets is het', 'pad is het, and the last part decides', 'all compounds are het'], 1, 'het pad → het fietspad.'),
    fill('___ buurt is rustig.', ['De'], 'The neighbourhood is quiet.', 'de buurt.'),
    speak('De badkamer is boven en het toilet is beneden.', 'The bathroom is upstairs and the toilet is downstairs.'),
  ]));

  u2.push(lesson('s1u2l2', 'Plurals: furniture and things', 'You can form the plural of most nouns (-en, -s, -’s, -eren) and name common household objects.', [
    table(['ending', 'when', 'examples'], [['*-en', 'default', '*stoel → *stoelen, *raam → *ramen, *fles → *flessen'], ['*-s', 'unstressed -e, -el, -em, -en, -er, -je, -ie; loanwords', '*tafel → *tafels, *kamer → *kamers, *kopje → *kopjes, *computer → *computers'], ["*-'s", 'single final a, o, u, i, y', "*foto → *foto's, *auto → *auto's, *paraplu → *paraplu's"], ['*-eren', 'a few het-words', '*kind → *kinderen, *ei → *eieren, *lied → *liederen, *blad → *bladeren']]),
    p('With -en, apply the spelling rules from Stage 0: `raam → ramen` (long vowel written once), `fles → flessen` (double consonant), `doos → dozen` (s → z), `glas → glazen` (vowel change + s → z).'),
    p('Vowel-change group: `dag → dagen`, `weg → wegen`, `stad → steden`, `schip → schepen`, `glas → glazen`. Latin: `museum → musea` (or museums).'),
    h('Furniture'),
    table(['', '', '', ''], [['*de stoel', 'chair', '*de bank', 'sofa'], ['*de kast', 'cupboard', '*het bureau', 'desk'], ['*de lamp', 'lamp', '*de koelkast', 'fridge'], ['*het bord', 'plate', '*het kopje', 'cup'], ['*de fles', 'bottle', '*de spiegel', 'mirror']]),
    ex(['De stoelen staan om de tafel.', 'The chairs are around the table.'], ['Ik heb drie foto’s van mijn kinderen.', 'I have three photos of my children.'], ['Er zijn twee kopjes en vier borden.', 'There are two cups and four plates.']),
    tip('The -s plural is for words that already end in a weak, unstressed syllable. Say the word: if it ends in "-uh" or "-ul", "-ur", "-um", "-yuh", add -s.'),
  ], ['g1-plural', 'g1-er-is'], ['stoel', 'bank', 'kast', 'bureau', 'lamp', 'koelkast', 'bord', 'kopje', 'fles', 'foto', 'paraplu', 'lied', 'blad', 'plant', 'doos', 'tv', 'computer', 'spiegel', 'museum'], [
    plural('de stoel', ['stoelen'], 'Default -en: stoelen.'),
    plural('de tafel', ['tafels'], 'Ends in unstressed -el: -s.'),
    plural('de foto', ["foto's"], "Single final o: -'s keeps the o long."),
    plural('het kopje', ['kopjes'], 'Diminutives always take -s.'),
    plural('de fles', ['flessen'], 'Short e, double the s: flessen.'),
    plural('het raam', ['ramen'], 'Long aa written once in the open syllable: ra-men.'),
    plural('de doos', ['dozen'], 'Long oo written once and s → z: dozen.'),
    plural('het kind', ['kinderen'], 'The -eren group: kinderen.'),
    plural('het ei', ['eieren'], '-eren group: eieren.'),
    plural('de kamer', ['kamers'], 'Ends in unstressed -er: -s.'),
    plural('de computer', ['computers'], 'Loanword ending in -er: -s.'),
    plural('de paraplu', ["paraplu's"], "Single final u: -'s."),
    plural('het museum', ['musea', 'museums'], 'Latin -um → -a: musea. museums is also accepted.'),
    plural('de stad', ['steden'], 'Irregular: steden.'),
    mc('Which plural is wrong?', ['lampen', 'banken', 'spiegelen', 'borden'], 2, 'spiegel ends in unstressed -el, so spiegels.'),
    fill('Er zijn twee ___ in de woonkamer.', ['banken', 'stoelen', 'lampen', 'kasten', 'ramen', 'tafels', 'planten', 'spiegels'], 'There are two sofas / chairs / … in the living room.', 'Any plural furniture word works. er zijn = there are.'),
    build('There are four chairs and one table.', 'Er zijn vier stoelen en een tafel.', ['is', 'stoel'], 'er zijn + plural.'),
    build('Is there a fridge in the kitchen?', 'Is er een koelkast in de keuken?', ['zijn', 'het'], 'Question: is er …?'),
    fix('Ik heb twee autos.', ["Ik heb twee auto's."], "auto ends in a single o: auto's with an apostrophe."),
    fix('De kinds spelen buiten.', ['De kinderen spelen buiten.'], 'kind → kinderen.'),
    dict('De borden en de kopjes staan in de kast.', 'The plates and the cups are in the cupboard.', 'borden (-en), kopjes (-s).'),
    listen('Er zijn geen flessen water meer.', ['There are no more bottles of water.', 'There are two bottles of water.', 'The bottles of water are empty.'], 0, 'geen … meer = no more.'),
    speak('Er zijn twee stoelen, een tafel en een lamp.', 'There are two chairs, a table and a lamp.'),
    auto(4, ['plural', 'article', 'tr-nl-en']),
  ], [
    plural('de lamp', ['lampen'], '-en.'),
    plural('het bureau', ['bureaus'], 'Loanword: -s.'),
    plural('de auto', ["auto's"], "-'s."),
    plural('het lied', ['liederen'], '-eren group.'),
    plural('het glas', ['glazen'], 'Vowel change and s → z.'),
    build('There are three photos on the wall.', 'Er zijn drie foto’s aan de muur.', ['is', 'op'], "er zijn; aan de muur = on the wall; foto's."),
  ]));

  u2.push(lesson('s1u2l3', 'Where is it? deze/die/dit/dat and prepositions', 'You can say where things are with in, op, onder, naast, achter, and point at things with this/that.', [
    h('deze, die, dit, dat'),
    table(['', 'de-word + all plurals', 'het-word'], [['this / these', '*deze', '*dit'], ['that / those', '*die', '*dat']]),
    p('`deze stoel`, `deze stoelen`, `dit raam`, `dat huis`. On their own before is/zijn always dit/dat: `Dit is mijn kamer.` `Dat zijn mijn boeken.`'),
    h('Prepositions of place'),
    table(['', '', ''], [['*in', 'in', '*in de kast'], ['*op', 'on', '*op de tafel'], ['*onder', 'under', '*onder het bed'], ['*boven', 'above', '*boven de deur'], ['*naast', 'next to', '*naast het raam'], ['*achter', 'behind', '*achter de bank'], ['*voor', 'in front of', '*voor het huis'], ['*tussen', 'between', '*tussen de stoelen'], ['*bij', 'by / near', '*bij het raam'], ['*aan', 'on (a wall) / at', '*aan de muur'], ['*tegenover', 'opposite', '*tegenover de bakker']]),
    h('staan, liggen, hangen, zitten'),
    p('Dutch rarely says "is" for location. Things **stand** (`staan`: upright objects, furniture, bottles), **lie** (`liggen`: flat things, books, keys, cities) or **hang** (`hangen`: coats, pictures). People and animals `zitten` when seated.'),
    ex(['De lamp staat naast de bank.', 'The lamp is next to the sofa.'], ['De sleutels liggen op de tafel.', 'The keys are on the table.'], ['De foto hangt aan de muur.', 'The photo hangs on the wall.'], ['De kat zit onder de stoel.', 'The cat is under the chair.'], ['Deze kamer is groot, dat raam is klein.', 'This room is big, that window is small.']),
    tip('If you can push it over, it staat. If it is flat, it ligt. If you can take it off a hook, it hangt.'),
  ], ['g1-demonstratives', 'g1-prep-place'], ['liggen', 'staan', 'hangen', 'onder', 'boven', 'naast', 'achter', 'tussen', 'bij', 'aan', 'in', 'op', 'tegenover', 'deze', 'die', 'waar', 'plant', 'spiegel', 'tafel', 'muur'], [
    fill('___ stoel is nieuw.', ['Deze', 'Die'], 'This / that chair is new.', 'de stoel → deze or die.'),
    fill('___ raam is open.', ['Dit', 'Dat'], 'This / that window is open.', 'het raam → dit or dat.'),
    fill('___ zijn mijn boeken.', ['Dit', 'Dat'], 'These / those are my books.', 'Before zijn, standalone: dit/dat, even for plurals.'),
    fill('___ huizen zijn oud.', ['Deze', 'Die'], 'These / those houses are old.', 'Plural → deze/die, even for het-words.'),
    fill('De melk staat ___ de koelkast.', ['in'], 'The milk is in the fridge.', 'in de koelkast.'),
    fill('De foto hangt ___ de muur.', ['aan'], 'The photo hangs on the wall.', 'On a vertical surface: aan de muur.'),
    fill('De kat zit ___ de tafel.', ['onder', 'op', 'naast', 'achter', 'bij'], 'The cat is under / on / next to … the table.', 'Any preposition of place works; onder = under.'),
    fill('De sleutels ___ op de tafel.', ['liggen'], 'The keys are (lying) on the table.', 'Flat objects liggen.'),
    fill('De lamp ___ naast de bank.', ['staat'], 'The lamp is (standing) next to the sofa.', 'Upright objects staan.'),
    fill('De jas ___ aan de deur.', ['hangt'], 'The coat hangs on the door.', 'hangen for things on hooks.'),
    mc('"Dat is mijn fiets." Why dat, not die?', ['fiets is a het-word', 'before is/zijn you always use dit/dat', 'it is plural'], 1, 'Standalone before is/zijn: dit/dat, regardless of the noun.'),
    mc('Which verb for "Amsterdam ___ in Noord-Holland"?', ['staat', 'ligt', 'hangt'], 1, 'Cities and countries liggen.'),
    build('The plant is by the window.', 'De plant staat bij het raam.', ['ligt', 'op'], 'A plant stands: staat; bij het raam.'),
    build('This book is good.', 'Dit boek is goed.', ['deze', 'die'], 'het boek → dit.'),
    build('The mirror hangs above the sink.', 'De spiegel hangt boven de wastafel.', ['staat', 'onder'], 'hangen; boven = above.'),
    build('Those chairs are old.', 'Die stoelen zijn oud.', ['dat', 'is'], 'Plural → die.'),
    fix('Dit stoel is kapot.', ['Deze stoel is kapot.'], 'de stoel → deze.'),
    fix('De fles ligt in de koelkast.', ['De fles staat in de koelkast.'], 'A bottle stands upright: staat. (ligt would mean it is lying on its side.)'),
    tr('nl-en', 'De bakker is tegenover het park.', ['The bakery is opposite the park.', 'The baker is opposite the park.'], 'tegenover = opposite.'),
    dict('Deze kamer is groot en dat raam is klein.', 'This room is big and that window is small.', 'deze (de kamer), dat (het raam).'),
    listen('De sleutels liggen naast de telefoon.', ['The keys are next to the phone.', 'The keys are under the phone.', 'The keys are behind the phone.'], 0, 'naast = next to.'),
    speak('De lamp staat naast de bank en de foto hangt aan de muur.', 'The lamp is next to the sofa and the photo hangs on the wall.'),
    free('Describe your living room: name three things and say where they are.', 'De bank staat bij het raam. De tv staat tegenover de bank. De lamp hangt boven de tafel.', 'The sofa is by the window. The TV is opposite the sofa. The lamp hangs above the table.', { hints: ['staat', 'ligt', 'hangt', 'naast', 'bij'] }),
    auto(3, ['tr-en-nl', 'listen']),
  ], [
    fill('___ appartement is duur.', ['Dit', 'Dat'], 'This / that apartment is expensive.', 'het appartement → dit/dat.'),
    fill('De boeken ___ op de plank.', ['liggen', 'staan'], 'The books are on the shelf.', 'Books lying flat liggen; standing upright staan. Both correct.'),
    build('The cat is under the bed.', 'De kat ligt onder het bed.', ['staat', 'op'], 'A cat lying down: ligt; onder het bed.'),
    build('Is this your key?', 'Is dit jouw sleutel?', ['deze', 'die'], 'Standalone dit before the noun phrase with is: Is dit jouw sleutel?'),
    fix('De jas staat aan de deur.', ['De jas hangt aan de deur.'], 'Coats hang: hangt.'),
    speak('Waar zijn mijn sleutels? Ze liggen op de tafel.', 'Where are my keys? They are on the table.'),
  ]));

  u2.push(lesson('s1u2l4', 'Describing things: adjective endings', 'You can describe your home and things in it with the right adjective ending: de mooie kamer, een mooi huis.', [
    p('Before a noun, an adjective gets **-e**, except in one case: `een` (or `geen`, or no article) + a **singular het-word**. After the noun (with zijn) there is never an ending.'),
    table(['', 'de-word', 'het-word'], [['de / het / deze / mijn …', '*de grote kamer', '*het grote huis'], ['een / geen / no article', '*een grote kamer', '*een groot huis'], ['plural', '*grote kamers', '*grote huizen'], ['after the noun', '*De kamer is groot.', '*Het huis is groot.']]),
    h('Spelling when adding -e'),
    list('`groot → grote`, `laag → lage`, `hoog → hoge` (long vowel written once)', '`wit → witte`, `dik → dikke` (double consonant)', '`lief → lieve`, `grijs → grijze`, `vies → vieze` (f → v, s → z)', '`open`, `houten`, `gouden`, `eigen`: adjectives in -en never change'),
    h('Colours and descriptions'),
    table(['', '', '', ''], [['*wit', 'white', '*zwart', 'black'], ['*rood', 'red', '*blauw', 'blue'], ['*groen', 'green', '*geel', 'yellow'], ['*bruin', 'brown', '*grijs', 'grey'], ['*licht', 'bright', '*donker', 'dark'], ['*ruim', 'spacious', '*gezellig', 'cosy'], ['*hoog', 'high', '*laag', 'low'], ['*vol', 'full', '*leeg', 'empty']]),
    ex(['Ik heb een kleine keuken en een grote woonkamer.', 'I have a small kitchen and a big living room.'], ['Het witte huis op de hoek is van mijn oom.', 'The white house on the corner is my uncle’s.'], ['Een gezellig café, een gezellige buurt.', 'A cosy café, a cosy neighbourhood.'], ['De muren zijn wit en de deur is groen.', 'The walls are white and the door is green.']),
    tip('Two questions. Is there a noun after the adjective? No → no -e. Is it "een + het-word singular"? Yes → no -e. Otherwise: -e.'),
  ], ['g1-adjectives'], ['lelijk', 'licht', 'donker', 'gezellig', 'ruim', 'rustig', 'warm', 'wit', 'zwart', 'groen', 'geel', 'bruin', 'hoog', 'laag', 'vol', 'leeg', 'aardig', 'heel', 'een-beetje-adv', 'rood', 'blauw', 'grijs'], [
    fill('een ___ huis (groot)', ['groot'], 'a big house', 'een + het-word singular: no -e.'),
    fill('de ___ kamer (groot)', ['grote'], 'the big room', 'de-word: -e, and the long o is written once: grote.'),
    fill('het ___ huis (groot)', ['grote'], 'the big house', 'het (definite): -e.'),
    fill('een ___ keuken (klein)', ['kleine'], 'a small kitchen', 'de keuken: -e even after een.'),
    fill('een ___ raam (klein)', ['klein'], 'a small window', 'een + het raam: no -e.'),
    fill('___ huizen (mooi)', ['mooie'], 'beautiful houses', 'Plural: always -e.'),
    fill('de ___ muur (wit)', ['witte'], 'the white wall', 'wit → witte: double t after the short i.'),
    fill('een ___ kat (lief)', ['lieve'], 'a sweet cat', 'de kat: -e, and f → v: lieve.'),
    fill('een ___ tafel (houten)', ['houten'], 'a wooden table', 'Adjectives ending in -en never change.'),
    fill('De kamer is ___. (licht)', ['licht'], 'The room is bright.', 'After the noun: no ending.'),
    mc('Which is correct?', ['een gezellig café', 'een gezellige café', 'een gezelligs café'], 0, 'het café, so een gezellig café.'),
    mc('Which is correct?', ['het klein huis', 'het kleine huis'], 1, 'het (definite) + adjective + noun: -e.'),
    mc('Which is correct?', ['koud water', 'koude water'], 0, 'No article + het water (singular): no -e.'),
    build('I have a new bike and an old car.', 'Ik heb een nieuwe fiets en een oude auto.', ['nieuw', 'oud'], 'Both are de-words: nieuwe, oude.'),
    build('The big window is open.', 'Het grote raam is open.', ['groot', 'grootte'], 'het raam, definite: grote.'),
    build('That is a cosy neighbourhood.', 'Dat is een gezellige buurt.', ['gezellig', 'deze'], 'de buurt: gezellige.'),
    fix('Ik woon in een mooie huis.', ['Ik woon in een mooi huis.'], 'een + het huis: no -e.'),
    fix('De grote kamer is heel licht en de kleine kamer is donkere.', ['De grote kamer is heel licht en de kleine kamer is donker.'], 'After the noun (is donker): no ending.'),
    tr('en-nl', 'a white door', ['een witte deur'], 'de deur, so -e; wit → witte.'),
    tr('nl-en', 'De buren zijn heel aardig.', ['The neighbours are very nice.', 'The neighbours are very kind.'], 'heel = very; aardig = kind/nice.'),
    dict('Het kleine balkon is gezellig.', 'The small balcony is cosy.', 'het balkon, definite: kleine.'),
    listen('Wij hebben een ruime keuken en een klein toilet.', ['We have a spacious kitchen and a small toilet.', 'We have a small kitchen and a spacious toilet.', 'We have a spacious kitchen and a large toilet.'], 0, 'ruime keuken (de), klein toilet (een + het).'),
    speak('Ik heb een kleine keuken en een grote woonkamer.', 'I have a small kitchen and a big living room.'),
    write('Describe your home in four sentences: how many rooms, what they are like (big/small, light/dark), and one thing you like.', ['Every sentence has a verb in second position', 'Adjective before a noun ends in -e, except een + het-word', 'At least two colour or size adjectives', 'One sentence with "gezellig"'], 'Ik woon in een klein appartement in Oost. Het heeft twee kamers en een lichte keuken. De woonkamer is gezellig, met een grote bank. Ik vind het balkon leuk.', { modelEn: 'I live in a small apartment in East. It has two rooms and a bright kitchen. The living room is cosy, with a big sofa. I like the balcony.' }),
    auto(3, ['tr-en-nl', 'listen', 'mc-meaning']),
  ], [
    fill('een ___ appartement (duur)', ['duur'], 'an expensive apartment', 'een + het appartement: no -e.'),
    fill('de ___ trap (hoog)', ['hoge'], 'the high stairs', 'hoog → hoge.'),
    fill('___ stoelen (zwart)', ['zwarte'], 'black chairs', 'Plural: -e.'),
    mc('Which is correct?', ['een oud huis', 'een oude huis'], 0, 'een + het huis: no -e.'),
    build('The old house has a green door.', 'Het oude huis heeft een groene deur.', ['oud', 'groen'], 'het oude huis (definite), een groene deur (de-word).'),
    speak('Mijn kamer is klein maar gezellig.', 'My room is small but cosy.'),
  ]));

  units.push(unit('s1u2', 'Thuis', 'home', u2));
})();
