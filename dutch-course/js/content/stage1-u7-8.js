/* Stage 1 (A1) — Unit 7: Het weer · Unit 8: Gezondheid · stage exam + registration */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = NL.content._s1units;

  /* ---------------- Vocabulary: Unit 7 ---------------- */
  N('weer', 'het', null, 'weather', 'Het weer is slecht.', 'The weather is bad.', { theme: 'weather', stage: 1 });
  VB('regenen', 'to rain', 'regen|regent|regenen', 'regende|regenden', 'geregend', 'hebben', 'Het regent de hele dag.', 'It is raining all day.', { theme: 'weather', stage: 1 });
  VB('sneeuwen', 'to snow', 'sneeuw|sneeuwt|sneeuwen', 'sneeuwde|sneeuwden', 'gesneeuwd', 'hebben', 'Het sneeuwt zelden in Amsterdam.', 'It rarely snows in Amsterdam.', { theme: 'weather', stage: 1 });
  VB('waaien', 'to blow (wind)', 'waai|waait|waaien', 'waaide|waaiden', 'gewaaid', 'hebben', 'Het waait hard.', 'It is very windy.', { theme: 'weather', stage: 1 });
  VB('vriezen', 'to freeze', 'vries|vriest|vriezen', 'vroor|vroren', 'gevroren', 'hebben', 'Het vriest vannacht.', 'It will freeze tonight.', { theme: 'weather', stage: 1 });
  VB('schijnen', 'to shine', 'schijn|schijnt|schijnen', 'scheen|schenen', 'geschenen', 'hebben', 'De zon schijnt.', 'The sun is shining.', { theme: 'weather', stage: 1 });
  N('regen', 'de', null, 'rain', 'Ik hou niet van regen.', 'I do not like rain.', { theme: 'weather', stage: 1 });
  N('sneeuw', 'de', null, 'snow', 'De sneeuw is wit.', 'The snow is white.', { theme: 'weather', stage: 1 });
  N('wind', 'de', 'winden', 'wind', 'De wind is koud.', 'The wind is cold.', { theme: 'weather', stage: 1 });
  N('wolk', 'de', 'wolken', 'cloud', 'Er zijn veel wolken.', 'There are many clouds.', { theme: 'weather', stage: 1 });
  N('temperatuur', 'de', 'temperaturen', 'temperature', 'De temperatuur is twintig graden.', 'The temperature is twenty degrees.', { theme: 'weather', stage: 1 });
  N('graad', 'de', 'graden', 'degree', 'Het is vijf graden.', 'It is five degrees.', { theme: 'weather', stage: 1 });
  W('zonnig', 'sunny', 'adj', 'Morgen wordt het zonnig.', 'Tomorrow it will be sunny.', { theme: 'weather', stage: 1 });
  W('bewolkt', 'cloudy', 'adj', 'Het is bewolkt.', 'It is cloudy.', { theme: 'weather', stage: 1 });
  W('mistig', 'foggy', 'adj', "'s Ochtends is het mistig.", 'In the morning it is foggy.', { theme: 'weather', stage: 1 });
  W('nat', 'wet', 'adj', 'Mijn jas is nat.', 'My coat is wet.', { theme: 'weather', stage: 1 });
  W('droog', 'dry', 'adj', 'Vanmiddag blijft het droog.', 'This afternoon it stays dry.', { theme: 'weather', stage: 1 });
  W('slecht', 'bad', 'adj', 'Wat een slecht weer!', 'What bad weather!', { theme: 'basics', stage: 1 });
  N('lente', 'de', null, 'spring', 'In de lente bloeien de tulpen.', 'In spring the tulips bloom.', { theme: 'time', stage: 1 });
  N('herfst', 'de', null, 'autumn', 'De herfst is nat.', 'Autumn is wet.', { theme: 'time', stage: 1 });
  N('seizoen', 'het', 'seizoenen', 'season', 'Welk seizoen vind je het leukst?', 'Which season do you like best?', { theme: 'time', stage: 1 });
  W('min', 'minus', 'adv', 'Het is min vijf.', 'It is minus five.', { theme: 'weather', stage: 1 });
  VB('blijven', 'to stay', 'blijf|blijft|blijven', 'bleef|bleven', 'gebleven', 'zijn', 'Ik blijf thuis.', 'I am staying home.', { theme: 'basics', stage: 1 });

  N('kleding', 'de', null, 'clothing', 'Ik koop nieuwe kleding.', 'I am buying new clothes.', { theme: 'clothes', stage: 1 });
  N('trui', 'de', 'truien', 'sweater', 'Ik draag een warme trui.', 'I am wearing a warm sweater.', { theme: 'clothes', stage: 1 });
  N('broek', 'de', 'broeken', 'trousers', 'Deze broek is te klein.', 'These trousers are too small.', { theme: 'clothes', stage: 1, note: 'Singular in Dutch: een broek.' });
  N('T-shirt', 'het', 'T-shirts', 'T-shirt', 'Het T-shirt is wit.', 'The T-shirt is white.', { theme: 'clothes', stage: 1, id: 't-shirt' });
  N('jurk', 'de', 'jurken', 'dress', 'Zij draagt een rode jurk.', 'She is wearing a red dress.', { theme: 'clothes', stage: 1 });
  N('rok', 'de', 'rokken', 'skirt', 'De rok is kort.', 'The skirt is short.', { theme: 'clothes', stage: 1 });
  N('schoen', 'de', 'schoenen', 'shoe', 'Mijn schoenen zijn nat.', 'My shoes are wet.', { theme: 'clothes', stage: 1 });
  N('sok', 'de', 'sokken', 'sock', 'Waar zijn mijn sokken?', 'Where are my socks?', { theme: 'clothes', stage: 1 });
  N('sjaal', 'de', 'sjaals', 'scarf', 'Neem een sjaal mee, het is koud.', 'Take a scarf, it is cold.', { theme: 'clothes', stage: 1 });
  N('handschoen', 'de', 'handschoenen', 'glove', 'In de winter draag ik handschoenen.', 'In winter I wear gloves.', { theme: 'clothes', stage: 1 });
  N('muts', 'de', 'mutsen', 'woolly hat', 'Een muts tegen de kou.', 'A hat against the cold.', { theme: 'clothes', stage: 1 });
  N('overhemd', 'het', 'overhemden', 'shirt', 'Hij draagt een wit overhemd.', 'He is wearing a white shirt.', { theme: 'clothes', stage: 1 });
  N('regenjas', 'de', 'regenjassen', 'raincoat', 'Een regenjas is handig in Nederland.', 'A raincoat is useful in the Netherlands.', { theme: 'clothes', stage: 1 });
  VB('aantrekken', 'to put on (clothes)', 'trek aan|trekt aan|trekken aan', 'trok aan|trokken aan', 'aangetrokken', 'hebben', 'Ik trek een jas aan.', 'I put on a coat.', { theme: 'clothes', stage: 1 });
  VB('uitdoen', 'to take off (clothes)', 'doe uit|doet uit|doen uit', 'deed uit|deden uit', 'uitgedaan', 'hebben', 'Doe je schoenen uit, alsjeblieft.', 'Take your shoes off, please.', { theme: 'clothes', stage: 1 });
  VB('passen', 'to fit / to try on', 'pas|past|passen', 'paste|pasten', 'gepast', 'hebben', 'Mag ik deze broek passen?', 'May I try these trousers on?', { theme: 'clothes', stage: 1 });
  N('maat', 'de', 'maten', 'size', 'Welke maat heeft u?', 'What size are you?', { theme: 'clothes', stage: 1 });
  W('handig', 'handy / useful', 'adj', 'Dat is handig!', 'That is handy!', { theme: 'basics', stage: 1 });
  W('te', 'too', 'adv', 'De jas is te groot.', 'The coat is too big.', { theme: 'basics', stage: 1, id: 'te-adv' });
  N('paskamer', 'de', 'paskamers', 'fitting room', 'De paskamer is achterin.', 'The fitting room is at the back.', { theme: 'clothes', stage: 1 });

  N('weerbericht', 'het', 'weerberichten', 'weather forecast', 'Het weerbericht zegt: regen.', 'The forecast says: rain.', { theme: 'weather', stage: 1 });
  N('bui', 'de', 'buien', 'shower (rain)', 'Vanmiddag zijn er buien.', 'This afternoon there are showers.', { theme: 'weather', stage: 1 });
  N('onweer', 'het', null, 'thunderstorm', 'Er komt onweer.', 'A thunderstorm is coming.', { theme: 'weather', stage: 1 });
  N('storm', 'de', 'stormen', 'storm', 'De storm is voorbij.', 'The storm is over.', { theme: 'weather', stage: 1 });
  N('kans', 'de', 'kansen', 'chance', 'Er is kans op regen.', 'There is a chance of rain.', { theme: 'weather', stage: 1 });
  W('warmer', 'warmer', 'adj', 'Morgen wordt het warmer.', 'Tomorrow it will be warmer.', { theme: 'weather', stage: 1 });
  W('kouder', 'colder', 'adj', 'Het wordt kouder.', 'It is getting colder.', { theme: 'weather', stage: 1 });
  W('hè', 'right? / eh? (tag)', 'interj', 'Lekker weer, hè?', 'Nice weather, isn’t it?', { theme: 'basics', stage: 1, id: 'he-tag' });
  W('nou', 'well', 'interj', 'Nou, ik ga maar weer.', 'Well, I will be off then.', { theme: 'basics', stage: 1 });
  W('echt', 'really', 'adv', 'Het is echt koud.', 'It is really cold.', { theme: 'basics', stage: 1 });
  W('hopelijk', 'hopefully', 'adv', 'Hopelijk blijft het droog.', 'Hopefully it stays dry.', { theme: 'basics', stage: 1 });
  W('voorbij', 'over / past', 'adv', 'De regen is voorbij.', 'The rain is over.', { theme: 'basics', stage: 1 });
  N('code', 'de', 'codes', 'code (weather alert)', 'Code oranje: blijf binnen.', 'Code orange: stay inside.', { theme: 'weather', stage: 1 });
  W('heel', 'whole', 'adj', 'Het regent de hele dag.', 'It rains the whole day.', { theme: 'basics', stage: 1, id: 'heel-adj', altNl: ['hele'] });

  /* ---------------- Vocabulary: Unit 8 ---------------- */
  N('lichaam', 'het', 'lichamen', 'body', 'Het lichaam heeft rust nodig.', 'The body needs rest.', { theme: 'body', stage: 1 });
  N('hoofd', 'het', 'hoofden', 'head', 'Mijn hoofd doet pijn.', 'My head hurts.', { theme: 'body', stage: 1 });
  N('buik', 'de', 'buiken', 'belly / stomach', 'Ik heb pijn in mijn buik.', 'I have a pain in my stomach.', { theme: 'body', stage: 1 });
  N('rug', 'de', 'ruggen', 'back', 'Mijn rug doet pijn.', 'My back hurts.', { theme: 'body', stage: 1 });
  N('keel', 'de', 'kelen', 'throat', 'Ik heb keelpijn.', 'I have a sore throat.', { theme: 'body', stage: 1 });
  N('arm', 'de', 'armen', 'arm', 'Mijn arm is gebroken.', 'My arm is broken.', { theme: 'body', stage: 1 });
  N('been', 'het', 'benen', 'leg', 'Mijn been doet pijn.', 'My leg hurts.', { theme: 'body', stage: 1 });
  N('voet', 'de', 'voeten', 'foot', 'Mijn voeten zijn koud.', 'My feet are cold.', { theme: 'body', stage: 1 });
  N('knie', 'de', 'knieën', 'knee', 'Mijn knie doet pijn na het fietsen.', 'My knee hurts after cycling.', { theme: 'body', stage: 1 });
  N('schouder', 'de', 'schouders', 'shoulder', 'Mijn schouder is stijf.', 'My shoulder is stiff.', { theme: 'body', stage: 1 });
  N('oor', 'het', 'oren', 'ear', 'Ik heb pijn in mijn oor.', 'I have a pain in my ear.', { theme: 'body', stage: 1 });
  N('mond', 'de', 'monden', 'mouth', 'Doe je mond open.', 'Open your mouth.', { theme: 'body', stage: 1 });
  N('pijn', 'de', null, 'pain', 'Waar heeft u pijn?', 'Where does it hurt?', { theme: 'health', stage: 1 });
  PH('pijn doen', 'to hurt', 'Mijn hoofd doet pijn.', 'My head hurts.', { theme: 'health', stage: 1 });
  N('hoofdpijn', 'de', null, 'headache', 'Ik heb hoofdpijn.', 'I have a headache.', { theme: 'health', stage: 1 });
  N('buikpijn', 'de', null, 'stomach ache', 'Het kind heeft buikpijn.', 'The child has a stomach ache.', { theme: 'health', stage: 1 });
  N('keelpijn', 'de', null, 'sore throat', 'Ik heb keelpijn en ik hoest.', 'I have a sore throat and I am coughing.', { theme: 'health', stage: 1 });
  W('ziek', 'ill / sick', 'adj', 'Ik ben ziek, ik blijf thuis.', 'I am ill, I am staying home.', { theme: 'health', stage: 1 });
  W('verkouden', 'having a cold', 'adj', 'Ik ben verkouden.', 'I have a cold.', { theme: 'health', stage: 1 });
  N('griep', 'de', null, 'flu', 'Hij heeft griep.', 'He has the flu.', { theme: 'health', stage: 1 });
  N('koorts', 'de', null, 'fever', 'Ik heb koorts: 39 graden.', 'I have a fever: 39 degrees.', { theme: 'health', stage: 1 });
  VB('hoesten', 'to cough', 'hoest|hoest|hoesten', 'hoestte|hoestten', 'gehoest', 'hebben', 'Zij hoest de hele nacht.', 'She coughs all night.', { theme: 'health', stage: 1 });
  W('misselijk', 'nauseous', 'adj', 'Ik ben misselijk.', 'I feel sick (nauseous).', { theme: 'health', stage: 1 });
  W('duizelig', 'dizzy', 'adj', 'Ik ben een beetje duizelig.', 'I am a bit dizzy.', { theme: 'health', stage: 1 });

  N('huisarts', 'de', 'huisartsen', 'GP (family doctor)', 'Ik heb een afspraak bij de huisarts.', 'I have an appointment with the GP.', { theme: 'health', stage: 1 });
  N('spreekuur', 'het', 'spreekuren', 'consultation hours', 'Het spreekuur is van acht tot tien.', 'Consultation hours are from eight to ten.', { theme: 'health', stage: 1 });
  N('assistente', 'de', 'assistentes', 'assistant (f)', 'De assistente maakt de afspraak.', 'The assistant makes the appointment.', { theme: 'health', stage: 1, altNl: ['assistent'] });
  N('klacht', 'de', 'klachten', 'complaint / symptom', 'Wat zijn uw klachten?', 'What are your symptoms?', { theme: 'health', stage: 1 });
  N('medicijn', 'het', 'medicijnen', 'medicine', 'Neemt u medicijnen?', 'Do you take any medicines?', { theme: 'health', stage: 1 });
  N('recept', 'het', 'recepten', 'prescription / recipe', 'U krijgt een recept.', 'You get a prescription.', { theme: 'health', stage: 1 });
  N('tablet', 'de', 'tabletten', 'tablet', 'Twee tabletten per dag.', 'Two tablets a day.', { theme: 'health', stage: 1, altNl: ['pil'] });
  VB('innemen', 'to take (medicine)', 'neem in|neemt in|nemen in', 'nam in|namen in', 'ingenomen', 'hebben', 'Neem de tablet met water in.', 'Take the tablet with water.', { theme: 'health', stage: 1 });
  VB('rusten', 'to rest', 'rust|rust|rusten', 'rustte|rustten', 'gerust', 'hebben', 'U moet rusten.', 'You must rest.', { theme: 'health', stage: 1, altNl: ['uitrusten'] });
  N('verzekering', 'de', 'verzekeringen', 'insurance', 'Heeft u een zorgverzekering?', 'Do you have health insurance?', { theme: 'health', stage: 1 });
  VB('krijgen', 'to get / receive', 'krijg|krijgt|krijgen', 'kreeg|kregen', 'gekregen', 'hebben', 'U krijgt een recept.', 'You will get a prescription.', { theme: 'basics', stage: 1 });
  VB('voelen', 'to feel', 'voel|voelt|voelen', 'voelde|voelden', 'gevoeld', 'hebben', 'Ik voel me niet lekker.', 'I do not feel well.', { theme: 'health', stage: 1, note: 'zich voelen: ik voel me, hij voelt zich.' });
  PH('Sinds wanneer?', 'Since when?', 'Sinds wanneer heeft u die klachten?', 'Since when have you had these symptoms?', { theme: 'health', stage: 1 });
  PH('Beterschap', 'Get well soon', 'Beterschap!', 'Get well soon!', { theme: 'health', stage: 1, id: 'beterschap' });
  W('erg', 'very / bad', 'adv', 'Is het erg?', 'Is it bad?', { theme: 'basics', stage: 1 });
  N('dag', 'de', 'dagen', 'day', 'Drie dagen rust.', 'Three days of rest.', { theme: 'time', stage: 1 });

  N('ambulance', 'de', 'ambulances', 'ambulance', 'Bel een ambulance!', 'Call an ambulance!', { theme: 'health', stage: 1 });
  N('ongeluk', 'het', 'ongelukken', 'accident', 'Er is een ongeluk gebeurd.', 'There has been an accident.', { theme: 'health', stage: 1 });
  N('brandweer', 'de', null, 'fire brigade', 'De brandweer komt snel.', 'The fire brigade comes quickly.', { theme: 'health', stage: 1 });
  N('spoedeisende hulp', 'de', null, 'emergency department (A&E)', 'Ga naar de spoedeisende hulp.', 'Go to the emergency department.', { theme: 'health', stage: 1, id: 'spoedeisende-hulp' });
  N('hulp', 'de', null, 'help', 'Ik heb hulp nodig.', 'I need help.', { theme: 'basics', stage: 1 });
  N('tandarts', 'de', 'tandartsen', 'dentist', 'Ik ga twee keer per jaar naar de tandarts.', 'I go to the dentist twice a year.', { theme: 'health', stage: 1 });
  N('wachtkamer', 'de', 'wachtkamers', 'waiting room', 'Neemt u plaats in de wachtkamer.', 'Please take a seat in the waiting room.', { theme: 'health', stage: 1 });
  W('gebroken', 'broken (bone)', 'adj', 'Mijn arm is gebroken.', 'My arm is broken.', { theme: 'health', stage: 1 });
  VB('bloeden', 'to bleed', 'bloed|bloedt|bloeden', 'bloedde|bloedden', 'gebloed', 'hebben', 'Mijn vinger bloedt.', 'My finger is bleeding.', { theme: 'health', stage: 1 });
  N('pleister', 'de', 'pleisters', 'plaster / band-aid', 'Heb je een pleister?', 'Do you have a plaster?', { theme: 'health', stage: 1 });
  N('paracetamol', 'de', null, 'paracetamol', 'Neem een paracetamol.', 'Take a paracetamol.', { theme: 'health', stage: 1 });
  N('drogist', 'de', 'drogisten', 'drugstore', 'Bij de drogist koop je paracetamol.', 'At the drugstore you buy paracetamol.', { theme: 'health', stage: 1 });
  N('vinger', 'de', 'vingers', 'finger', 'Ik heb mijn vinger gesneden.', 'I cut my finger.', { theme: 'body', stage: 1 });
  W('help', 'help!', 'interj', 'Help! Bel 112!', 'Help! Call 112!', { theme: 'health', stage: 1 });
  W('snel', 'quickly', 'adv', 'Kom snel!', 'Come quickly!', { theme: 'basics', stage: 1 });
  PH('rustig aan', 'take it easy', 'Doe rustig aan.', 'Take it easy.', { theme: 'health', stage: 1 });
  N('nummer', 'het', 'nummers', 'number', 'Het alarmnummer is 112.', 'The emergency number is 112.', { theme: 'basics', stage: 1 });
  VB('gebeuren', 'to happen', 'gebeur|gebeurt|gebeuren', 'gebeurde|gebeurden', 'gebeurd', 'zijn', 'Wat gebeurt er?', 'What is happening?', { theme: 'basics', stage: 1 });

  /* ================= UNIT 7: Het weer ================= */
  const u7 = [];

  u7.push(lesson('s1u7l1', 'What is the weather like?', 'You can describe the weather and the seasons with impersonal het: het regent, het is koud.', [
    p('Weather in Dutch is said with `het` + a verb, or `het is` + adjective. It is also the most common small-talk topic in the country, for good reason.'),
    table(['', '', '', ''], [['*Het regent.', 'It is raining.', '*Het is zonnig.', 'It is sunny.'], ['*Het sneeuwt.', 'It is snowing.', '*Het is bewolkt.', 'It is cloudy.'], ['*Het waait.', 'It is windy.', '*Het is mistig.', 'It is foggy.'], ['*Het vriest.', 'It is freezing.', '*Het is koud / warm.', 'It is cold / warm.'], ['*De zon schijnt.', 'The sun is shining.', '*Het is twintig graden.', 'It is twenty degrees.']]),
    p('Questions: `Wat voor weer is het?` (What is the weather like?) `Hoe is het weer morgen?` Temperatures: `vijftien graden`, `min drie` (minus three). Tomorrow: `Morgen wordt het zonnig.` (worden = will become).'),
    h('Seasons'),
    table(['', ''], [['*de lente', 'spring'], ['*de zomer', 'summer'], ['*de herfst', 'autumn'], ['*de winter', 'winter']]),
    p('`in de lente`, `in de zomer`. Amsterdam weather in one sentence: `Het regent vaak, het waait altijd, en de zomer is kort maar mooi.`'),
    ex(['Het regent, dus ik neem een paraplu mee.', 'It is raining, so I am taking an umbrella.'], ['Wat voor weer is het? — Het is bewolkt en het waait.', 'What is the weather like? — It is cloudy and windy.'], ['In de winter vriest het soms; dan schaatsen de Nederlanders.', 'In winter it sometimes freezes; then the Dutch go skating.'], ['Vandaag is het achttien graden en zonnig.', 'Today it is eighteen degrees and sunny.']),
  ], ['g1-weather'], ['weer', 'regenen', 'sneeuwen', 'waaien', 'vriezen', 'schijnen', 'regen', 'sneeuw', 'wind', 'wolk', 'temperatuur', 'graad', 'zonnig', 'bewolkt', 'mistig', 'nat', 'droog', 'slecht', 'lente', 'herfst', 'seizoen', 'min', 'blijven'], [
    fill('Het ___ vandaag; neem een paraplu mee.', ['regent'], 'It is raining today; take an umbrella.', 'regenen: het regent.'),
    fill('Het ___ hard; mijn fiets valt om.', ['waait'], 'It is very windy; my bike falls over.', 'waaien: het waait.'),
    fill('In de winter ___ het soms.', ['vriest', 'sneeuwt'], 'In winter it sometimes freezes / snows.', 'vriezen: het vriest; sneeuwen: het sneeuwt.'),
    fill('De zon ___.', ['schijnt'], 'The sun is shining.', 'schijnen: schijnt.'),
    fill('Het is ___ vijf graden. (minus)', ['min'], 'It is minus five degrees.', 'min = minus.'),
    fill('Morgen ___ het zonnig.', ['wordt'], 'Tomorrow it will be sunny.', 'worden for future weather: het wordt.'),
    mc('"Wat voor weer is het?" means …', ['What weather do you like?', 'What is the weather like?', 'Is it good weather?'], 1, 'The standard question.'),
    mc('"Het is bewolkt" means …', ['It is windy.', 'It is cloudy.', 'It is foggy.'], 1, 'bewolkt from wolk = cloud.'),
    mc('Which season is "de herfst"?', ['spring', 'summer', 'autumn'], 2, 'herfst = autumn.'),
    build('It is cold and it is raining.', 'Het is koud en het regent.', ['regen', 'koude'], 'het is + adjective; het regent.'),
    build('Tomorrow it will be warmer.', 'Morgen wordt het warmer.', ['is', 'het wordt'], 'Inversion after morgen: wordt het.'),
    build('In summer it is often sunny.', 'In de zomer is het vaak zonnig.', ['het is', 'zomer de'], 'in de zomer + inversion.'),
    build('The wind is cold, but it stays dry.', 'De wind is koud, maar het blijft droog.', ['blijf', 'nat'], 'blijven: het blijft.'),
    fix('Het regenen vandaag.', ['Het regent vandaag.'], 'het + regent.'),
    fix('Het is zonnig morgen wordt.', ['Morgen wordt het zonnig.', 'Het wordt morgen zonnig.'], 'Verb second: Morgen wordt het zonnig.'),
    tr('nl-en', 'Het is achttien graden en de zon schijnt.', ['It is eighteen degrees and the sun is shining.'], 'graden; schijnt.'),
    tr('en-nl', 'It is snowing.', ['Het sneeuwt.'], 'sneeuwen.'),
    dict('Vandaag is het bewolkt en het waait.', 'Today it is cloudy and windy.', 'bewolkt; waait.'),
    listen('Vanmiddag blijft het droog, maar vanavond regent het.', ['This afternoon it stays dry, but tonight it rains.', 'This afternoon it rains, but tonight it is dry.', 'It rains all day.'], 0, 'blijft droog; regent.'),
    speak('Wat voor weer is het? Het regent en het is koud.', 'What is the weather like? It is raining and it is cold.'),
    speak('In de lente is het vaak mooi weer.', 'In spring the weather is often nice.'),
    match([['het regent', 'it is raining'], ['het waait', 'it is windy'], ['het vriest', 'it is freezing'], ['bewolkt', 'cloudy'], ['mistig', 'foggy'], ['de herfst', 'autumn']]),
    free('Describe today’s weather and your favourite season, and say why.', 'Vandaag is het bewolkt en een beetje koud, tien graden. Mijn favoriete seizoen is de zomer, want dan is het warm en fiets ik naar het strand.', 'Today it is cloudy and a bit cold, ten degrees. My favourite season is summer, because then it is warm and I cycle to the beach.', { hints: ['Vandaag is het …', 'graden', 'Mijn favoriete seizoen is …'] }),
    auto(3, ['tr-en-nl', 'listen', 'article']),
  ], [
    fill('Het ___ vannacht; de wegen zijn glad. (freezes)', ['vriest'], 'It freezes tonight; the roads are slippery.', 'vriest.'),
    fill('Het is twintig ___.', ['graden'], 'It is twenty degrees.', 'graden.'),
    build('It is foggy this morning.', 'Vanochtend is het mistig.', ['het is', 'mist'], 'Inversion after vanochtend.'),
    build('What is the weather like tomorrow?', 'Hoe is het weer morgen?', ['wat', 'wordt'], 'hoe is het weer.'),
    tr('en-nl', 'It is sunny.', ['Het is zonnig.'], 'zonnig.'),
    speak('Morgen wordt het kouder en het gaat regenen.', 'Tomorrow it will be colder and it is going to rain.'),
  ]));

  u7.push(lesson('s1u7l2', 'Clothes for every weather', 'You can name clothes, say what you are wearing or putting on, and shop for clothes by size and colour.', [
    table(['', '', '', ''], [['*de jas', 'coat', '*de regenjas', 'raincoat'], ['*de trui', 'sweater', '*het T-shirt', 'T-shirt'], ['*de broek', 'trousers', '*de jurk', 'dress'], ['*de rok', 'skirt', '*het overhemd', 'shirt'], ['*de schoen', 'shoe', '*de sok', 'sock'], ['*de sjaal', 'scarf', '*de muts', 'woolly hat'], ['*de handschoen', 'glove', '*de kleding', 'clothing']]),
    p('`een broek` is singular (one pair of trousers), like `een bril`. Verbs: `dragen` (wear), `aantrekken` (put on), `uitdoen` (take off), `passen` (try on / fit). `Ik trek een warme trui aan.` `Doe je schoenen uit.` `Past deze jas?`'),
    h('In the shop'),
    ex(['Welke maat heeft u? — Maat 40.', 'What size are you? — Size 40.'], ['Mag ik deze broek passen? — Ja, de paskamer is achterin.', 'May I try these trousers on? — Yes, the fitting room is at the back.'], ['Hij is te klein. Heeft u een grotere maat?', 'They are too small. Do you have a bigger size?'], ['Heeft u deze trui ook in het blauw?', 'Do you have this sweater in blue too?']),
    p('`te` + adjective = too: `te groot`, `te duur`, `te klein`. Colours before nouns take the endings you know: `een rode jas`, `een wit overhemd`, `zwarte schoenen`.'),
    tip('Dutch weather advice in one word: laagjes (layers). `Het is koud, trek een trui en een jas aan.`'),
  ], ['g1-adjectives', 'g1-separable'], ['kleding', 'trui', 'broek', 't-shirt', 'jurk', 'rok', 'schoen', 'sok', 'sjaal', 'handschoen', 'muts', 'overhemd', 'regenjas', 'aantrekken', 'uitdoen', 'passen', 'maat', 'handig', 'te-adv', 'paskamer', 'jas', 'dragen'], [
    fill('Ik trek een warme trui ___.', ['aan'], 'I put on a warm sweater.', 'aantrekken: trek … aan.'),
    fill('Doe je schoenen ___, de vloer is schoon.', ['uit'], 'Take your shoes off, the floor is clean.', 'uitdoen: doe … uit.'),
    fill('Welke ___ heeft u? — 38.', ['maat'], 'What size are you? — 38.', 'de maat = size.'),
    fill('Mag ik deze jurk ___?', ['passen'], 'May I try this dress on?', 'passen = try on.'),
    fill('De jas is ___ groot. (too)', ['te'], 'The coat is too big.', 'te = too.'),
    fill('Zij draagt een ___ jurk. (red)', ['rode'], 'She is wearing a red dress.', 'de jurk: rode.'),
    fill('Hij draagt een ___ overhemd. (white)', ['wit'], 'He is wearing a white shirt.', 'een + het overhemd: no -e.'),
    mc('"een broek" is …', ['one trouser leg', 'a pair of trousers', 'several trousers'], 1, 'Singular in Dutch.'),
    mc('"Past deze jas?" means …', ['Does this coat fit?', 'Is this coat past?', 'Do you like this coat?'], 0, 'passen = fit.'),
    art('trui', 'de', 'de trui.'),
    art('overhemd', 'het', 'het overhemd (hemd is het).'),
    plural('de schoen', ['schoenen'], '-en.'),
    plural('de handschoen', ['handschoenen'], '-en.'),
    build('It is cold, put on a scarf and a hat.', 'Het is koud, trek een sjaal en een muts aan.', ['aantrek', 'uit'], 'trek … aan at the end.'),
    build('Do you have these shoes in size 42?', 'Heeft u deze schoenen in maat 42?', ['hebt', 'de maat'], 'heeft u + in maat.'),
    build('These trousers are too small.', 'Deze broek is te klein.', ['zijn', 'broeken'], 'Singular: deze broek is.'),
    build('I am wearing a blue sweater and black shoes.', 'Ik draag een blauwe trui en zwarte schoenen.', ['blauw', 'zwart'], 'blauwe (de trui), zwarte (plural).'),
    fix('Ik aantrek mijn jas.', ['Ik trek mijn jas aan.'], 'Separable: trek … aan.'),
    fix('Deze broeken is te klein.', ['Deze broek is te klein.'], 'One pair: deze broek.'),
    tr('nl-en', 'De paskamer is achterin.', ['The fitting room is at the back.', 'The changing room is at the back.'], 'achterin = at the back.'),
    dict('Ik draag een regenjas, want het regent.', 'I am wearing a raincoat, because it is raining.', 'regenjas; want.'),
    listen('Heeft u deze trui ook in het groen?', ['Do you have this sweater in green too?', 'Do you have this sweater in a bigger size?', 'Is this sweater green?'], 0, 'in het groen = in green.'),
    speak('Mag ik deze broek passen? Hij is te groot.', 'May I try these trousers on? They are too big.'),
    match([['de trui', 'sweater'], ['de broek', 'trousers'], ['de sjaal', 'scarf'], ['de muts', 'woolly hat'], ['het overhemd', 'shirt'], ['de schoen', 'shoe']]),
    auto(3, ['article', 'plural', 'tr-en-nl']),
  ], [
    fill('Trek een jas ___, het is koud.', ['aan'], 'Put on a coat, it is cold.', 'trek … aan.'),
    fill('Deze schoenen zijn ___ duur. (too)', ['te'], 'These shoes are too expensive.', 'te.'),
    build('What size are you?', 'Welke maat heeft u?', ['hebt', 'groot'], 'welke maat heeft u.'),
    build('She wears a green dress and white shoes.', 'Zij draagt een groene jurk en witte schoenen.', ['groen', 'wit'], 'groene, witte.'),
    art('jurk', 'de', 'de jurk.'),
    speak('Ik trek mijn regenjas aan.', 'I put on my raincoat.'),
  ]));

  u7.push(lesson('s1u7l3', 'Small talk and the forecast', 'You can make small talk about the weather, understand a forecast, and say what tomorrow will be like.', [
    h('Small talk'),
    p('Dutch small talk runs on the weather and on the little word `hè` (right?). `Lekker weer, hè?` `Koud, hè?` `Wat een slecht weer!` `Nou, het kan erger.` (Well, it could be worse.) You will hear these at every bus stop.'),
    ex(['Lekker weer vandaag, hè? — Ja, eindelijk zon!', 'Nice weather today, isn’t it? — Yes, finally sun!'], ['Wat een regen, zeg. — Ja, typisch Nederland.', 'What rain, eh. — Yes, typical Netherlands.'], ['Het is echt koud vandaag. — Nou, morgen wordt het warmer.', 'It is really cold today. — Well, tomorrow it will be warmer.']),
    h('The forecast'),
    p('`Het weerbericht`: `Morgen wordt het zonnig / bewolkt.` `Er is kans op regen.` `’s Middags zijn er buien.` `Er komt onweer.` `Het wordt kouder / warmer.` `Code oranje` = weather warning. `Hopelijk blijft het droog.`'),
    ex(['Vanochtend is het mistig, ’s middags wordt het zonnig, achttien graden.', 'This morning it is foggy, in the afternoon it will be sunny, eighteen degrees.'], ['Er is vanavond kans op onweer.', 'There is a chance of thunderstorms tonight.'], ['Morgen wordt het kouder, met buien en veel wind.', 'Tomorrow it will be colder, with showers and a lot of wind.'], ['De storm is voorbij.', 'The storm is over.']),
    tip('`wordt` is your future-weather word: `Morgen wordt het …`. And the reply to any weather complaint: `Ach, het is Nederland.`'),
  ], ['g1-weather', 'g1-v2'], ['weerbericht', 'bui', 'onweer', 'storm', 'kans', 'warmer', 'kouder', 'he-tag', 'nou', 'echt', 'hopelijk', 'voorbij', 'code', 'heel-adj', 'worden'], [
    fill('Lekker weer, ___?', ['hè'], 'Nice weather, isn’t it?', 'hè = the tag question.'),
    fill('Morgen ___ het warmer.', ['wordt'], 'Tomorrow it will be warmer.', 'worden: het wordt.'),
    fill('Er is ___ op regen.', ['kans'], 'There is a chance of rain.', 'kans op = chance of.'),
    fill('___ blijft het droog. (hopefully)', ['Hopelijk'], 'Hopefully it stays dry.', 'hopelijk + inversion.'),
    fill("'s Middags zijn er ___. (showers)", ['buien'], 'In the afternoon there are showers.', 'de bui, buien.'),
    mc('"Nou, het kan erger" means …', ['Well, it could be worse.', 'Now it is worse.', 'No, it is worse.'], 0, 'nou = well; kan erger = can be worse.'),
    mc('"Code oranje" is …', ['a tram line', 'a weather warning', 'a football team'], 1, 'Weather alert codes: geel, oranje, rood.'),
    mc('"Het wordt kouder" means …', ['It is colder.', 'It is getting colder.', 'It was colder.'], 1, 'worden = become / get.'),
    build('Tomorrow it will be sunny, twenty degrees.', 'Morgen wordt het zonnig, twintig graden.', ['het wordt', 'is'], 'Inversion: wordt het.'),
    build('There is a chance of thunderstorms tonight.', 'Er is vanavond kans op onweer.', ['zijn', 'van'], 'er is kans op.'),
    build('What bad weather!', 'Wat een slecht weer!', ['slechte', 'is'], 'wat een + slecht weer (het weer, no -e after een).'),
    build('It is really cold today, isn’t it?', 'Het is echt koud vandaag, hè?', ['koude', 'nou'], 'echt = really; hè.'),
    fix('Morgen het wordt zonnig.', ['Morgen wordt het zonnig.'], 'Inversion after morgen.'),
    fix('Er is kans van regen.', ['Er is kans op regen.'], 'kans op.'),
    tr('nl-en', 'De storm is voorbij en het wordt droog.', ['The storm is over and it is getting dry.', 'The storm is past and it will be dry.'], 'voorbij = over.'),
    dict("Vanochtend mist, 's middags zon en achttien graden.", 'This morning fog, in the afternoon sun and eighteen degrees.', 'weerbericht style.'),
    listen('Er komt vanavond onweer, dus blijf binnen.', ['A thunderstorm is coming tonight, so stay inside.', 'It is windy tonight, so close the window.', 'It is sunny tonight, so go outside.'], 0, 'onweer; blijf binnen.'),
    read('Weerbericht voor Amsterdam. Vanochtend is het bewolkt en mistig, met zes graden. In de middag breekt de zon door en wordt het twaalf graden. Vanavond neemt de wind toe en is er kans op buien. Morgen wordt het kouder: vijf graden, veel wind en ’s nachts kans op vorst. Hopelijk wordt het weekend droog.', [
      { q: 'What is the weather this morning?', options: ['sunny, 12 degrees', 'cloudy and foggy, 6 degrees', 'showers'], answer: 1, explain: '"bewolkt en mistig, met zes graden".' },
      { q: 'What happens in the afternoon?', options: ['it rains', 'the sun breaks through', 'it freezes'], answer: 1, explain: '"breekt de zon door".' },
      { q: 'What is tomorrow like?', options: ['warmer and dry', 'colder with a lot of wind', 'thunderstorms'], answer: 1, explain: '"Morgen wordt het kouder: vijf graden, veel wind".' },
    ], { en: 'Weather forecast for Amsterdam. This morning it is cloudy and foggy, with six degrees. In the afternoon the sun breaks through and it will be twelve degrees. Tonight the wind increases and there is a chance of showers. Tomorrow it will be colder: five degrees, a lot of wind and at night a chance of frost. Hopefully the weekend will be dry.' }),
    speak('Lekker weer vandaag, hè? Morgen wordt het helaas kouder.', 'Nice weather today, isn’t it? Tomorrow it will unfortunately be colder.'),
    free('Make weather small talk with a neighbour: comment on today’s weather with "hè", and say what tomorrow will be like.', 'Koud vandaag, hè? En het waait ook nog. Morgen wordt het gelukkig warmer en zonnig.', 'Cold today, isn’t it? And it is windy too. Tomorrow it will fortunately be warmer and sunny.', { hints: ['…, hè?', 'Morgen wordt het …', 'Hopelijk …'] }),
    auto(2, ['tr-en-nl', 'listen']),
  ], [
    fill('Wat een slecht weer, ___?', ['hè'], 'What bad weather, eh?', 'hè.'),
    fill('Hopelijk ___ het morgen droog.', ['blijft', 'wordt'], 'Hopefully it stays / becomes dry tomorrow.', 'blijft or wordt.'),
    build('It is getting colder.', 'Het wordt kouder.', ['is', 'koud'], 'wordt kouder.'),
    build('In the afternoon there are showers.', "'s Middags zijn er buien.", ['er zijn', 'is'], 'Inversion: zijn er.'),
    mc('"Nou" at the start of a sentence means …', ['now', 'well', 'no'], 1, 'nou = well (filler).'),
    speak('Er is kans op regen, dus ik neem een paraplu mee.', 'There is a chance of rain, so I am taking an umbrella.'),
  ]));

  units.push(unit('s1u7', 'Het weer', 'weather', u7));

  /* ================= UNIT 8: Gezondheid ================= */
  const u8 = [];

  u8.push(lesson('s1u8l1', 'The body and how you feel', 'You can name body parts and say what hurts or how you feel: ik heb hoofdpijn, mijn rug doet pijn.', [
    table(['', '', '', ''], [['*het hoofd', 'head', '*de keel', 'throat'], ['*de buik', 'belly', '*de rug', 'back'], ['*de arm', 'arm', '*het been', 'leg'], ['*de hand', 'hand', '*de voet', 'foot'], ['*de knie', 'knee', '*de schouder', 'shoulder'], ['*het oog', 'eye', '*het oor', 'ear'], ['*de neus', 'nose', '*de mond', 'mouth']]),
    h('Saying what hurts'),
    p('Two patterns. `Ik heb pijn in mijn …` (I have pain in my …): `Ik heb pijn in mijn rug.` Or `… doet pijn` (… hurts): `Mijn hoofd doet pijn.` `Mijn voeten doen pijn.` Compounds: `hoofdpijn`, `buikpijn`, `keelpijn`, `rugpijn`: `Ik heb hoofdpijn.`'),
    h('How you feel'),
    table(['', ''], [['*Ik ben ziek.', 'I am ill.'], ['*Ik ben verkouden.', 'I have a cold.'], ['*Ik heb griep.', 'I have the flu.'], ['*Ik heb koorts.', 'I have a fever.'], ['*Ik hoest.', 'I am coughing.'], ['*Ik ben misselijk.', 'I feel sick (nauseous).'], ['*Ik ben duizelig.', 'I am dizzy.'], ['*Ik voel me niet lekker.', 'I do not feel well.'], ['*Ik ben moe.', 'I am tired.']]),
    p('`zich voelen` (to feel) is reflexive: `ik voel me`, `jij voelt je`, `hij voelt zich`, `wij voelen ons`. `Ik voel me goed / niet lekker / beter.`'),
    ex(['Ik heb sinds gisteren keelpijn en ik hoest.', 'I have had a sore throat since yesterday and I am coughing.'], ['Mijn knie doet pijn na het fietsen.', 'My knee hurts after cycling.'], ['Hij is verkouden, dus hij blijft thuis.', 'He has a cold, so he stays home.'], ['Hoe voel je je? — Een beetje beter, dank je.', 'How do you feel? — A bit better, thanks.']),
  ], ['g1-hebben', 'g1-plural'], ['lichaam', 'hoofd', 'buik', 'rug', 'keel', 'arm', 'been', 'voet', 'knie', 'schouder', 'oor', 'mond', 'pijn', 'pijn-doen', 'hoofdpijn', 'buikpijn', 'keelpijn', 'ziek', 'verkouden', 'griep', 'koorts', 'hoesten', 'misselijk', 'duizelig', 'voelen'], [
    fill('Ik heb ___ in mijn rug.', ['pijn'], 'I have a pain in my back.', 'pijn hebben in.'),
    fill('Mijn hoofd ___ pijn.', ['doet'], 'My head hurts.', 'pijn doen: doet pijn.'),
    fill('Mijn voeten ___ pijn.', ['doen'], 'My feet hurt.', 'Plural: doen pijn.'),
    fill('Ik heb ___. (a headache)', ['hoofdpijn'], 'I have a headache.', 'hoofdpijn: one word.'),
    fill('Ik ben ___; ik hoest en ik heb keelpijn.', ['verkouden', 'ziek'], 'I have a cold; I cough and have a sore throat.', 'verkouden zijn = have a cold.'),
    fill('Ik voel ___ niet lekker.', ['me'], 'I do not feel well.', 'zich voelen: ik voel me.'),
    fill('Hij voelt ___ beter.', ['zich'], 'He feels better.', 'hij voelt zich.'),
    mc('"Ik heb koorts" means …', ['I have a cold.', 'I have a fever.', 'I have a cough.'], 1, 'koorts = fever.'),
    mc('"Ik ben misselijk" means …', ['I am miserable.', 'I feel nauseous.', 'I am missing.'], 1, 'misselijk = nauseous.'),
    plural('het oog', ['ogen'], 'oog → ogen (long oo written once).'),
    plural('het been', ['benen'], 'been → benen.'),
    plural('de knie', ['knieën'], 'knie → knieën, with a trema.'),
    plural('de voet', ['voeten'], '-en.'),
    art('hoofd', 'het', 'het hoofd.'),
    art('rug', 'de', 'de rug.'),
    build('My back hurts.', 'Mijn rug doet pijn.', ['heeft', 'doen'], 'doet pijn.'),
    build('I have had a sore throat since yesterday.', 'Ik heb sinds gisteren keelpijn.', ['pijn keel', 'voor'], 'sinds gisteren; keelpijn.'),
    build('She has a fever and is coughing.', 'Zij heeft koorts en zij hoest.', ['is', 'hoesten'], 'koorts hebben; hoest.'),
    build('How do you feel?', 'Hoe voel je je?', ['voelt', 'me'], 'voel je je: the second je is the reflexive.'),
    fix('Mijn hoofd heeft pijn.', ['Mijn hoofd doet pijn.', 'Ik heb hoofdpijn.'], 'pijn doen, or: ik heb hoofdpijn.'),
    fix('Ik voel niet lekker.', ['Ik voel me niet lekker.'], 'Reflexive: voel me.'),
    tr('nl-en', 'Mijn knie doet pijn na het fietsen.', ['My knee hurts after cycling.'], 'doet pijn; na = after.'),
    dict('Ik ben ziek: ik heb koorts en hoofdpijn.', 'I am ill: I have a fever and a headache.', 'koorts, hoofdpijn.'),
    listen('Mijn schouder en mijn arm doen pijn.', ['My shoulder and my arm hurt.', 'My shoulder and my leg hurt.', 'My back and my arm hurt.'], 0, 'schouder, arm; doen pijn.'),
    speak('Ik voel me niet lekker. Ik heb hoofdpijn en ik ben moe.', 'I do not feel well. I have a headache and I am tired.'),
    match([['het hoofd', 'head'], ['de buik', 'belly'], ['het been', 'leg'], ['de keel', 'throat'], ['de knie', 'knee'], ['het oor', 'ear']]),
    auto(3, ['article', 'plural', 'listen']),
  ], [
    fill('Ik heb pijn ___ mijn buik.', ['in'], 'I have a pain in my stomach.', 'pijn in.'),
    fill('Mijn ogen ___ pijn.', ['doen'], 'My eyes hurt.', 'Plural: doen.'),
    build('I have the flu and a fever.', 'Ik heb griep en koorts.', ['ben', 'de'], 'griep hebben, no article.'),
    build('He does not feel well.', 'Hij voelt zich niet lekker.', ['me', 'voel'], 'hij voelt zich.'),
    plural('het oor', ['oren'], 'oor → oren.'),
    speak('Mijn rug doet pijn sinds gisteren.', 'My back has hurt since yesterday.'),
  ]));

  u8.push(lesson('s1u8l2', 'At the huisarts', 'You can make an appointment, describe your symptoms to the GP, and understand advice with moeten and mogen.', [
    p('In the Netherlands you always start with the `huisarts` (GP). You call the practice, the `assistente` asks what the problem is (`Wat zijn de klachten?`) and gives you a time. For anything else you need a referral from the huisarts.'),
    h('Making the appointment'),
    ex(['Goedemorgen, ik wil graag een afspraak maken.', 'Good morning, I would like to make an appointment.'], ['Wat zijn de klachten? — Ik heb sinds drie dagen koorts en keelpijn.', 'What are your symptoms? — I have had a fever and a sore throat for three days.'], ['Kunt u vanmiddag om kwart over twee komen?', 'Can you come this afternoon at a quarter past two?'], ['Neemt u plaats in de wachtkamer.', 'Please take a seat in the waiting room.']),
    h('With the doctor'),
    ex(['Sinds wanneer heeft u deze klachten?', 'Since when have you had these symptoms?'], ['Doe uw mond open. Zeg eens "aaa".', 'Open your mouth. Say "aaa".'], ['U heeft griep. U moet rusten en veel drinken.', 'You have the flu. You must rest and drink a lot.'], ['U mag paracetamol nemen, twee tabletten, drie keer per dag.', 'You may take paracetamol, two tablets, three times a day.'], ['U krijgt een recept voor de apotheek.', 'You get a prescription for the pharmacy.'], ['Beterschap!', 'Get well soon!']),
    p('Advice uses the modals: `U moet …` (you must), `U mag …` (you may), `U moet niet …` / `U mag niet …` (you must not). `Neemt u …` with u is a polite instruction. Dutch GPs are famous for prescribing rest and paracetamol; that is not a lack of interest, it is the system.'),
    tip('Have your `BSN` (citizen number) and insurance card ready; the assistente will ask for your `geboortedatum` (date of birth) to find you.'),
  ], ['g1-modals', 'g1-questions'], ['huisarts', 'spreekuur', 'assistente', 'klacht', 'medicijn', 'recept', 'tablet', 'innemen', 'rusten', 'verzekering', 'krijgen', 'sinds-wanneer', 'beterschap', 'erg', 'afspraak', 'wachtkamer'], [
    fill('Ik wil graag een ___ maken bij de huisarts.', ['afspraak'], 'I would like to make an appointment with the GP.', 'een afspraak maken.'),
    fill('Wat zijn de ___?', ['klachten'], 'What are the symptoms?', 'de klacht, klachten.'),
    fill('___ wanneer heeft u koorts?', ['Sinds'], 'Since when have you had a fever?', 'sinds wanneer.'),
    fill('U ___ rusten en veel water drinken. (must)', ['moet'], 'You must rest and drink a lot of water.', 'moeten: u moet.'),
    fill('U ___ twee tabletten per dag nemen. (may)', ['mag'], 'You may take two tablets a day.', 'mogen: u mag.'),
    fill('U ___ een recept voor de apotheek.', ['krijgt'], 'You get a prescription for the pharmacy.', 'krijgen: u krijgt.'),
    mc('Who do you contact first when you are ill in the Netherlands?', ['a specialist', 'the huisarts', 'the hospital'], 1, 'Always the huisarts.'),
    mc('"Beterschap!" means …', ['Better luck!', 'Get well soon!', 'Good improvement!'], 1, 'Said to someone who is ill.'),
    mc('"Neemt u plaats in de wachtkamer" means …', ['Take a place in the waiting room.', 'Take a seat in the waiting room.', 'There is no place in the waiting room.'], 1, 'plaats nemen = take a seat.'),
    build('I have had a fever for three days.', 'Ik heb sinds drie dagen koorts.', ['voor', 'geleden'], 'sinds drie dagen.'),
    build('You must rest.', 'U moet rusten.', ['mag', 'rust'], 'moet + rusten at the end.'),
    build('You may not go to work.', 'U mag niet naar het werk gaan.', ['moet', 'gaat'], 'mag niet + gaan at the end.'),
    build('Can you come at half past three?', 'Kunt u om half vier komen?', ['kan', 'kom'], 'kunt u + komen.'),
    build('Take two tablets with water.', 'Neem twee tabletten met water in.', ['inneem', 'op'], 'innemen: neem … in.'),
    fix('U moet nemen twee tabletten.', ['U moet twee tabletten nemen.'], 'Infinitive at the end.'),
    fix('Ik heb koorts sinds drie dagen geleden.', ['Ik heb sinds drie dagen koorts.', 'Ik heb al drie dagen koorts.'], 'sinds drie dagen (no geleden), or al drie dagen.'),
    tr('nl-en', 'U krijgt een recept voor de apotheek.', ['You get a prescription for the pharmacy.', 'You will get a prescription for the pharmacy.'], 'recept = prescription.'),
    dict('Wat zijn de klachten? Ik heb keelpijn en ik hoest.', 'What are the symptoms? I have a sore throat and I am coughing.', 'klachten; keelpijn.'),
    listen('U heeft griep. U moet rusten en veel drinken.', ['You have the flu. You must rest and drink a lot.', 'You have a cold. You may go to work.', 'You have a fever. You must go to the hospital.'], 0, 'griep; moet rusten.'),
    read('Assistente: Huisartsenpraktijk De Pijp, goedemorgen.\nSam: Goedemorgen, ik wil graag een afspraak maken. Ik heb sinds vier dagen koorts en hoofdpijn.\nAssistente: Hoe hoog is de koorts?\nSam: Gisteren 39 graden.\nAssistente: Kunt u vandaag om tien over half twaalf komen?\nSam: Ja, dat kan.\nAssistente: Wat is uw geboortedatum?\nSam: Twaalf maart 1990.\nAssistente: Dank u. Tot straks.', [
      { q: 'How long has Sam had a fever?', options: ['four days', 'fourteen days', 'four hours'], answer: 0, explain: '"sinds vier dagen".' },
      { q: 'What time is the appointment?', options: ['11:40', '12:10', '11:30'], answer: 0, explain: 'tien over half twaalf = 11:40.' },
      { q: 'What does the assistant ask at the end?', options: ['the address', 'the date of birth', 'the insurance'], answer: 1, explain: '"Wat is uw geboortedatum?"' },
    ], { en: 'Assistant: GP practice De Pijp, good morning. Sam: Good morning, I would like to make an appointment. I have had a fever and a headache for four days. Assistant: How high is the fever? Sam: Yesterday 39 degrees. Assistant: Can you come today at 11:40? Sam: Yes, that works. Assistant: What is your date of birth? Sam: 12 March 1990. Assistant: Thank you. See you later.' }),
    speak('Ik wil graag een afspraak maken. Ik heb sinds drie dagen koorts.', 'I would like to make an appointment. I have had a fever for three days.'),
    free('Call the GP practice: greet, say you want an appointment, describe two symptoms and since when.', 'Goedemorgen, ik wil graag een afspraak maken. Ik heb sinds gisteren keelpijn en koorts, achtendertig graden.', 'Good morning, I would like to make an appointment. I have had a sore throat and a fever since yesterday, thirty-eight degrees.', { hints: ['een afspraak maken', 'Ik heb sinds … ', 'koorts / keelpijn / hoofdpijn'] }),
    auto(2, ['tr-en-nl', 'listen']),
  ], [
    fill('___ wanneer heeft u hoofdpijn?', ['Sinds'], 'Since when have you had a headache?', 'sinds wanneer.'),
    fill('U ___ niet werken; u moet rusten.', ['mag'], 'You may not work; you must rest.', 'mag niet.'),
    build('I would like to make an appointment.', 'Ik wil graag een afspraak maken.', ['maak', 'de'], 'wil graag + maken.'),
    build('You get a prescription.', 'U krijgt een recept.', ['krijgen', 'het'], 'u krijgt.'),
    tr('en-nl', 'Get well soon!', ['Beterschap!', 'Beterschap'], 'Beterschap.'),
    speak('U moet rusten en veel water drinken.', 'You must rest and drink a lot of water.'),
  ]));

  u8.push(lesson('s1u8l3', 'Emergencies and the pharmacy', 'You can call for help in an emergency, explain what happened, and buy what you need at the apotheek or drogist.', [
    h('Emergency: 112'),
    p('`112` (`een-een-twee`) is the number for `politie`, `brandweer` and `ambulance`. Say what and where: `Er is een ongeluk gebeurd op de Overtoom.` `Iemand is gevallen en bloedt.` `Wij hebben een ambulance nodig.` For non-urgent police: 0900-8844.'),
    ex(['Help! Bel 112!', 'Help! Call 112!'], ['Er is een ongeluk gebeurd. Een fietser ligt op straat.', 'There has been an accident. A cyclist is lying in the street.'], ['Mijn arm is gebroken, denk ik.', 'My arm is broken, I think.'], ['Wat is het adres? — Prinsengracht 200.', 'What is the address? — Prinsengracht 200.'], ['Blijf rustig, de ambulance komt eraan.', 'Stay calm, the ambulance is on its way.']),
    h('Apotheek and drogist'),
    p('The `apotheek` (pharmacy) handles prescriptions and stronger medicines; the `drogist` (drugstore, e.g. Etos, Kruidvat) sells paracetamol, plasters and everyday things without a prescription. The `tandarts` (dentist) is separate from the huisarts and usually not fully covered by basic insurance.'),
    ex(['Ik heb paracetamol en pleisters nodig.', 'I need paracetamol and plasters.'], ['Heeft u iets tegen hoofdpijn?', 'Do you have something for headaches?'], ['Hoe vaak moet ik dit innemen? — Drie keer per dag, na het eten.', 'How often do I take this? — Three times a day, after meals.'], ['Ik heb een recept van de huisarts.', 'I have a prescription from the GP.']),
    tip('`iets tegen …` = something for/against …: `iets tegen hoesten`, `iets tegen keelpijn`. And `Doe rustig aan` (take it easy) is what everyone will tell you.'),
  ], ['g1-negation', 'g1-modals'], ['ambulance', 'ongeluk', 'brandweer', 'spoedeisende-hulp', 'hulp', 'tandarts', 'wachtkamer', 'gebroken', 'bloeden', 'pleister', 'paracetamol', 'drogist', 'vinger', 'help', 'rustig-aan', 'gebeuren', 'nummer', 'politie', 'apotheek'], [
    fill('Help! Bel ___!', ['112'], 'Help! Call 112!', 'The emergency number.'),
    fill('Er is een ___ gebeurd op de Overtoom.', ['ongeluk'], 'There has been an accident on the Overtoom.', 'het ongeluk.'),
    fill('Mijn vinger ___. (is bleeding)', ['bloedt'], 'My finger is bleeding.', 'bloeden: bloedt.'),
    fill('Heeft u iets ___ hoofdpijn?', ['tegen'], 'Do you have something for headaches?', 'iets tegen.'),
    fill('Ik heb ___ nodig. (help)', ['hulp'], 'I need help.', 'hulp nodig hebben.'),
    mc('Where do you buy paracetamol without a prescription?', ['at the huisarts', 'at the drogist', 'at the gemeente'], 1, 'drogist = drugstore.'),
    mc('"De ambulance komt eraan" means …', ['The ambulance is on its way.', 'The ambulance is here.', 'The ambulance is leaving.'], 0, 'eraan komen = be on the way.'),
    mc('The number for police, fire brigade and ambulance is …', ['0900-8844', '112', '911'], 1, '112.'),
    build('There has been an accident.', 'Er is een ongeluk gebeurd.', ['gebeurt', 'was'], 'er is … gebeurd (learn as a chunk; the perfect tense comes in A2).'),
    build('My arm is broken.', 'Mijn arm is gebroken.', ['kapot', 'heeft'], 'gebroken = broken (bone).'),
    build('We need an ambulance.', 'Wij hebben een ambulance nodig.', ['nodig hebben', 'moeten'], 'nodig at the end.'),
    build('Do you have something for a sore throat?', 'Heeft u iets tegen keelpijn?', ['voor', 'niets'], 'iets tegen.'),
    build('How often must I take this?', 'Hoe vaak moet ik dit innemen?', ['neem in', 'nemen'], 'moet + innemen at the end.'),
    fix('Ik heb nodig pleisters.', ['Ik heb pleisters nodig.'], 'nodig at the end.'),
    fix('Bel de 112!', ['Bel 112!'], 'No article: bel 112.'),
    tr('nl-en', 'Doe rustig aan.', ['Take it easy.', 'Take it easy'], 'rustig aan doen.'),
    tr('en-nl', 'the dentist', ['de tandarts', 'tandarts'], 'tand + arts.'),
    dict('Ik heb paracetamol en een pleister nodig.', 'I need paracetamol and a plaster.', 'nodig at the end.'),
    listen('Blijf rustig, de ambulance komt eraan.', ['Stay calm, the ambulance is on its way.', 'Be quiet, the police are here.', 'Wait, the ambulance is late.'], 0, 'blijf rustig; komt eraan.'),
    read('Gebruiksaanwijzing paracetamol 500 mg. Volwassenen: 1 tot 2 tabletten per keer, maximaal 6 tabletten per dag. Neem de tabletten in met water. Niet gebruiken bij kinderen onder de 12 jaar zonder advies van de huisarts. Bij koorts langer dan drie dagen: neem contact op met uw huisarts. Buiten bereik van kinderen bewaren.', [
      { q: 'Maximum per day for adults?', options: ['2 tablets', '6 tablets', '12 tablets'], answer: 1, explain: '"maximaal 6 tabletten per dag".' },
      { q: 'When should you contact the GP?', options: ['after one tablet', 'if the fever lasts more than three days', 'never'], answer: 1, explain: '"Bij koorts langer dan drie dagen".' },
      { q: 'What about children under 12?', options: ['normal dose', 'not without the GP’s advice', 'double dose'], answer: 1, explain: '"Niet gebruiken bij kinderen onder de 12 jaar zonder advies".' },
    ], { en: 'Instructions paracetamol 500 mg. Adults: 1 to 2 tablets at a time, maximum 6 tablets a day. Take the tablets with water. Do not use for children under 12 without the GP’s advice. With a fever longer than three days: contact your GP. Keep out of reach of children.' }),
    speak('Er is een ongeluk gebeurd. Wij hebben een ambulance nodig.', 'There has been an accident. We need an ambulance.'),
    free('Call 112: say there has been an accident, where it is, and that a cyclist is hurt and bleeding.', 'Er is een ongeluk gebeurd op de Ceintuurbaan, bij de Albert Cuypmarkt. Een fietser is gevallen en bloedt. Wij hebben een ambulance nodig.', 'There has been an accident on the Ceintuurbaan, near the Albert Cuyp market. A cyclist has fallen and is bleeding. We need an ambulance.', { hints: ['Er is een ongeluk gebeurd', 'op / bij …', 'Wij hebben … nodig'] }),
    auto(3, ['tr-en-nl', 'listen', 'article']),
  ], [
    fill('Er is een ongeluk ___ bij het station.', ['gebeurd'], 'There has been an accident at the station.', 'gebeurd.'),
    fill('Ik ga naar de ___ voor mijn tanden.', ['tandarts'], 'I am going to the dentist for my teeth.', 'tandarts.'),
    build('Call an ambulance!', 'Bel een ambulance!', ['de', 'belt'], 'bel = imperative.'),
    build('I need plasters.', 'Ik heb pleisters nodig.', ['nodig heb', 'moet'], 'nodig at the end.'),
    mc('"iets tegen hoesten" means …', ['something against coughing', 'something with coughing', 'nothing for coughing'], 0, 'iets tegen = something for (against).'),
    speak('Heeft u iets tegen hoofdpijn?', 'Do you have something for a headache?'),
  ]));

  units.push(unit('s1u8', 'Gezondheid', 'health', u8));

  /* ================= Stage exam (hand-written core; the engine adds more from lesson tests) ================= */
  const exam = [
    conj('zijn', 'jullie', 'pres', ['zijn'], 'Plural: zijn.'),
    conj('hebben', 'hij', 'pres', ['heeft'], 'hij heeft.'),
    conj('lezen', 'zij', 'pres', ['leest', 'lezen'], 'Stem lees + t (she) or lezen (they).'),
    fill('Ik heb ___ auto, maar ik heb wel een fiets.', ['geen'], 'I have no car, but I do have a bike.', 'een → geen.'),
    fill('Het is ___ koud vandaag.', ['niet'], 'It is not cold today.', 'niet before an adjective.'),
    fill('een ___ huis (groot)', ['groot'], 'a big house', 'een + het-word: no -e.'),
    fill('de ___ auto (nieuw)', ['nieuwe'], 'the new car', 'de-word: -e.'),
    build('Tomorrow I am going to Utrecht.', 'Morgen ga ik naar Utrecht.', ['ik ga', 'gaat'], 'Inversion after morgen.'),
    build('I have to get up at seven.', 'Ik moet om zeven uur opstaan.', ['sta op', 'staan'], 'Modal + separable verb together at the end.'),
    build('Where do you live?', 'Waar woon je?', ['woont', 'jij'], 'Question word + verb + je (no t).'),
    build('The train arrives at ten.', 'De trein komt om tien uur aan.', ['aankomt', 'komen'], 'komt … aan.'),
    mc('Which is correct?', ['Ik wil gaan naar huis.', 'Ik wil naar huis gaan.', 'Ik naar huis wil gaan.'], 1, 'Infinitive at the end.'),
    mc('"het huis" + "de deur" = ?', ['het huisdeur', 'de huisdeur'], 1, 'Last part decides.'),
    plural('het kind', ['kinderen'], '-eren group.'),
    plural('de foto', ["foto's"], "-'s after a single vowel."),
    art('meisje', 'het', 'Diminutives are het.'),
    fix('Vanavond ik eet thuis.', ['Vanavond eet ik thuis.'], 'Inversion.'),
    fix('Ik weet mijn buurvrouw niet.', ['Ik ken mijn buurvrouw niet.'], 'A person: kennen.'),
    tr('en-nl', 'I do not like coffee.', ['Ik vind koffie niet lekker.', 'Ik hou niet van koffie.'], 'niet lekker vinden / niet houden van.'),
    listen('Mijn zus woont in Utrecht en werkt bij een bank.', ['My sister lives in Utrecht and works at a bank.', 'My sister works in Utrecht and lives near a bank.', 'My brother lives in Utrecht and works at a bank.'], 0, 'zus; woont; werkt bij.'),
    dict('Ik sta om zeven uur op en ik fiets naar mijn werk.', 'I get up at seven and I cycle to work.', 'sta … op; fiets naar.'),
    speak('Ik woon sinds twee jaar in Amsterdam en ik werk als programmeur.', 'I have lived in Amsterdam for two years and I work as a programmer.'),
    read('Hoi Anna, morgen ben ik jarig! Ik geef zaterdag een feestje bij mij thuis, om acht uur. Heb je zin om te komen? Je hoeft niets mee te nemen. Het regent misschien, dus neem een jas mee. Groetjes, Tom', [
      { q: 'When is the party?', options: ['tomorrow at eight', 'Saturday at eight', 'Saturday at six'], answer: 1, explain: '"zaterdag … om acht uur".' },
      { q: 'What should Anna bring?', options: ['nothing, maybe a coat', 'a present', 'food'], answer: 0, explain: '"Je hoeft niets mee te nemen … neem een jas mee".' },
    ], { en: 'Hi Anna, tomorrow is my birthday! I am having a party on Saturday at my place, at eight. Do you feel like coming? You do not need to bring anything. It might rain, so bring a coat. Regards, Tom' }),
  ];

  A.stage('s1', '1', 'A1', 'Beginner', 'Real grammar from lesson one: verbs, word order, questions, negation, de/het, adjectives, modals and separable verbs, across eight everyday themes.', units, exam);
})();
