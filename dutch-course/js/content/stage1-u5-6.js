/* Stage 1 (A1) — Unit 5: Werk en studie · Unit 6: Dagelijks leven */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = NL.content._s1units;

  /* ---------------- Vocabulary: Unit 5 ---------------- */
  N('leraar', 'de', 'leraren', 'teacher (m)', 'Mijn vader is leraar.', 'My father is a teacher.', { theme: 'work', stage: 1 });
  N('lerares', 'de', 'leraressen', 'teacher (f)', 'Zij is lerares Engels.', 'She is an English teacher.', { theme: 'work', stage: 1 });
  N('dokter', 'de', 'dokters', 'doctor', 'Ik ga naar de dokter.', 'I am going to the doctor.', { theme: 'work', stage: 1, altNl: ['arts'] });
  N('verpleegkundige', 'de', 'verpleegkundigen', 'nurse', 'Mijn buurvrouw is verpleegkundige.', 'My neighbour is a nurse.', { theme: 'work', stage: 1 });
  N('programmeur', 'de', 'programmeurs', 'programmer', 'Ik werk als programmeur.', 'I work as a programmer.', { theme: 'work', stage: 1 });
  N('ingenieur', 'de', 'ingenieurs', 'engineer', 'Hij is ingenieur bij een groot bedrijf.', 'He is an engineer at a big company.', { theme: 'work', stage: 1 });
  N('kok', 'de', 'koks', 'cook / chef', 'De kok maakt soep.', 'The cook makes soup.', { theme: 'work', stage: 1 });
  N('kapper', 'de', 'kappers', 'hairdresser', 'Ik ga morgen naar de kapper.', 'I am going to the hairdresser tomorrow.', { theme: 'work', stage: 1 });
  N('advocaat', 'de', 'advocaten', 'lawyer', 'Zij is advocaat in Den Haag.', 'She is a lawyer in The Hague.', { theme: 'work', stage: 1 });
  N('ondernemer', 'de', 'ondernemers', 'entrepreneur', 'Hij is ondernemer.', 'He is an entrepreneur.', { theme: 'work', stage: 1 });
  N('manager', 'de', 'managers', 'manager', 'Mijn manager is aardig.', 'My manager is nice.', { theme: 'work', stage: 1 });
  N('kantoor', 'het', 'kantoren', 'office', 'Ik werk op kantoor.', 'I work at the office.', { theme: 'work', stage: 1, note: 'op kantoor = at the office.' });
  N('bedrijf', 'het', 'bedrijven', 'company', 'Het bedrijf is in Zuidoost.', 'The company is in Zuidoost.', { theme: 'work', stage: 1 });
  N('baan', 'de', 'banen', 'job', 'Ik zoek een baan.', 'I am looking for a job.', { theme: 'work', stage: 1 });
  N('beroep', 'het', 'beroepen', 'profession', 'Wat is uw beroep?', 'What is your profession?', { theme: 'work', stage: 1 });
  N('baas', 'de', 'bazen', 'boss', 'Mijn baas is streng.', 'My boss is strict.', { theme: 'work', stage: 1 });
  N('salaris', 'het', 'salarissen', 'salary', 'Het salaris is goed.', 'The salary is good.', { theme: 'work', stage: 1 });
  W('werkloos', 'unemployed', 'adj', 'Hij is werkloos.', 'He is unemployed.', { theme: 'work', stage: 1 });
  W('als', 'as / when / if', 'conj', 'Ik werk als kok.', 'I work as a cook.', { theme: 'basics', stage: 1 });
  W('fulltime', 'full-time', 'adv', 'Ik werk fulltime.', 'I work full-time.', { theme: 'work', stage: 1 });
  W('parttime', 'part-time', 'adv', 'Zij werkt parttime.', 'She works part-time.', { theme: 'work', stage: 1 });
  VB('thuiswerken', 'to work from home', 'werk thuis|werkt thuis|werken thuis', 'werkte thuis|werkten thuis', 'thuisgewerkt', 'hebben', 'Op vrijdag werk ik thuis.', 'On Friday I work from home.', { theme: 'work', stage: 1 });
  VB('zoeken', 'to look for', 'zoek|zoekt|zoeken', 'zocht|zochten', 'gezocht', 'hebben', 'Ik zoek een nieuwe baan.', 'I am looking for a new job.', { theme: 'basics', stage: 1 });
  N('universiteit', 'de', 'universiteiten', 'university', 'Zij studeert aan de universiteit.', 'She studies at the university.', { theme: 'study', stage: 1 });

  VB('zeggen', 'to say', 'zeg|zegt|zeggen', 'zei|zeiden', 'gezegd', 'hebben', 'Wat zeg je?', 'What are you saying?', { theme: 'basics', stage: 1 });
  VB('weten', 'to know (a fact)', 'weet|weet|weten', 'wist|wisten', 'geweten', 'hebben', 'Ik weet het niet.', 'I do not know.', { theme: 'basics', stage: 1 });
  VB('kennen', 'to know (a person / place)', 'ken|kent|kennen', 'kende|kenden', 'gekend', 'hebben', 'Ken je mijn collega?', 'Do you know my colleague?', { theme: 'basics', stage: 1, note: 'kennen = be familiar with; weten = know a fact.' });
  VB('denken', 'to think', 'denk|denkt|denken', 'dacht|dachten', 'gedacht', 'hebben', 'Ik denk van wel.', 'I think so.', { theme: 'basics', stage: 1 });
  VB('vragen', 'to ask', 'vraag|vraagt|vragen', 'vroeg|vroegen', 'gevraagd', 'hebben', 'Mag ik iets vragen?', 'May I ask something?', { theme: 'basics', stage: 1 });
  VB('antwoorden', 'to answer', 'antwoord|antwoordt|antwoorden', 'antwoordde|antwoordden', 'geantwoord', 'hebben', 'Hij antwoordt niet.', 'He does not answer.', { theme: 'basics', stage: 1 });
  VB('beginnen', 'to begin', 'begin|begint|beginnen', 'begon|begonnen', 'begonnen', 'zijn', 'De vergadering begint om tien uur.', 'The meeting starts at ten.', { theme: 'basics', stage: 1 });
  VB('stoppen', 'to stop', 'stop|stopt|stoppen', 'stopte|stopten', 'gestopt', 'zijn', 'Wij stoppen om vijf uur.', 'We stop at five.', { theme: 'basics', stage: 1 });
  VB('sturen', 'to send', 'stuur|stuurt|sturen', 'stuurde|stuurden', 'gestuurd', 'hebben', 'Ik stuur je een e-mail.', 'I will send you an email.', { theme: 'work', stage: 1 });
  VB('vergaderen', 'to have a meeting', 'vergader|vergadert|vergaderen', 'vergaderde|vergaderden', 'vergaderd', 'hebben', 'Wij vergaderen elke maandag.', 'We have a meeting every Monday.', { theme: 'work', stage: 1 });
  N('vergadering', 'de', 'vergaderingen', 'meeting', 'De vergadering duurt een uur.', 'The meeting lasts an hour.', { theme: 'work', stage: 1 });
  N('e-mail', 'de', 'e-mails', 'email', 'Ik heb je e-mail gelezen.', 'I have read your email.', { theme: 'work', stage: 1, id: 'e-mail' });
  N('pauze', 'de', 'pauzes', 'break', 'Wij hebben pauze om half een.', 'We have a break at half past twelve.', { theme: 'work', stage: 1 });
  N('project', 'het', 'projecten', 'project', 'Het project is bijna klaar.', 'The project is almost finished.', { theme: 'work', stage: 1 });
  W('bijna', 'almost', 'adv', 'Ik ben bijna klaar.', 'I am almost done.', { theme: 'basics', stage: 1 });
  W('belangrijk', 'important', 'adj', 'Dit is een belangrijke e-mail.', 'This is an important email.', { theme: 'basics', stage: 1 });
  PH('Ik weet het niet', "I don't know", 'Hoe laat is het? — Ik weet het niet.', 'What time is it? — I do not know.', { theme: 'basics', stage: 1 });

  W('altijd', 'always', 'adv', 'Ik fiets altijd naar mijn werk.', 'I always cycle to work.', { theme: 'time', stage: 1 });
  W('meestal', 'usually', 'adv', 'Meestal werk ik thuis.', 'I usually work from home.', { theme: 'time', stage: 1 });
  W('vaak', 'often', 'adv', 'Wij gaan vaak naar het park.', 'We often go to the park.', { theme: 'time', stage: 1 });
  W('soms', 'sometimes', 'adv', 'Soms eet ik buiten de deur.', 'Sometimes I eat out.', { theme: 'time', stage: 1 });
  W('zelden', 'rarely', 'adv', 'Ik neem zelden de auto.', 'I rarely take the car.', { theme: 'time', stage: 1 });
  W('nooit', 'never', 'adv', 'Zij drinkt nooit koffie.', 'She never drinks coffee.', { theme: 'time', stage: 1 });
  N('keer', 'de', 'keren', 'time (occasion)', 'Een keer per week sport ik.', 'Once a week I exercise.', { theme: 'time', stage: 1, note: 'een keer = once, twee keer = twice.' });
  W('per', 'per', 'prep', 'Twee keer per week.', 'Twice a week.', { theme: 'time', stage: 1 });
  PH('op tijd', 'on time', 'De trein is op tijd.', 'The train is on time.', { theme: 'time', stage: 1 });
  PH('te laat', 'too late / late', 'Sorry, ik ben te laat.', 'Sorry, I am late.', { theme: 'time', stage: 1 });
  VB('sporten', 'to exercise / do sport', 'sport|sport|sporten', 'sportte|sportten', 'gesport', 'hebben', 'Ik sport drie keer per week.', 'I exercise three times a week.', { theme: 'hobbies', stage: 1 });
  VB('wandelen', 'to walk / hike', 'wandel|wandelt|wandelen', 'wandelde|wandelden', 'gewandeld', 'hebben/zijn', 'Wij wandelen graag in de duinen.', 'We like walking in the dunes.', { theme: 'hobbies', stage: 1 });
  N('krant', 'de', 'kranten', 'newspaper', 'Ik lees elke ochtend de krant.', 'I read the newspaper every morning.', { theme: 'hobbies', stage: 1 });
  N('film', 'de', 'films', 'film', 'Wij kijken een film.', 'We are watching a film.', { theme: 'hobbies', stage: 1 });
  N('serie', 'de', 'series', 'series', 'Die serie is spannend.', 'That series is exciting.', { theme: 'hobbies', stage: 1 });
  N('voetbal', 'het', null, 'football', 'Voetbal is populair in Nederland.', 'Football is popular in the Netherlands.', { theme: 'hobbies', stage: 1 });
  VB('voetballen', 'to play football', 'voetbal|voetbalt|voetballen', 'voetbalde|voetbalden', 'gevoetbald', 'hebben', 'Mijn zoon voetbalt op zaterdag.', 'My son plays football on Saturday.', { theme: 'hobbies', stage: 1 });
  W('weer', 'again', 'adv', 'Tot de volgende keer weer!', 'Until next time again!', { theme: 'basics', stage: 1, id: 'weer-adv' });

  W('maar', 'but', 'conj', 'Ik wil fietsen, maar het regent.', 'I want to cycle, but it is raining.', { theme: 'basics', stage: 1 });
  W('of', 'or', 'conj', 'Thee of koffie?', 'Tea or coffee?', { theme: 'basics', stage: 1 });
  W('dus', 'so', 'conj', 'Het regent, dus ik neem de tram.', 'It is raining, so I take the tram.', { theme: 'basics', stage: 1 });
  W('alleen', 'alone / only', 'adv', 'Ik woon alleen.', 'I live alone.', { theme: 'basics', stage: 1 });
  N('bericht', 'het', 'berichten', 'message', 'Ik stuur je een bericht.', 'I will send you a message.', { theme: 'work', stage: 1 });
  N('onderwerp', 'het', 'onderwerpen', 'subject', 'Onderwerp: afspraak morgen.', 'Subject: appointment tomorrow.', { theme: 'work', stage: 1 });
  N('groet', 'de', 'groeten', 'greeting', 'Groeten aan je ouders!', 'Greetings to your parents!', { theme: 'basics', stage: 1 });
  PH('Met vriendelijke groet', 'Kind regards', 'Met vriendelijke groet, Sam de Vries', 'Kind regards, Sam de Vries', { theme: 'work', stage: 1 });
  PH('Beste', 'Dear (neutral)', 'Beste Anna, …', 'Dear Anna, …', { theme: 'work', stage: 1, id: 'beste' });
  PH('Geachte', 'Dear (formal)', 'Geachte heer De Vries, …', 'Dear Mr De Vries, …', { theme: 'work', stage: 1, id: 'geachte' });
  N('heer', 'de', 'heren', 'gentleman / Mr (in letters)', 'Geachte heer Jansen.', 'Dear Mr Jansen.', { theme: 'people', stage: 1 });
  W('sinds', 'since', 'prep', 'Ik werk hier sinds januari.', 'I have worked here since January.', { theme: 'time', stage: 1 });
  VB('hopen', 'to hope', 'hoop|hoopt|hopen', 'hoopte|hoopten', 'gehoopt', 'hebben', 'Ik hoop dat het lukt.', 'I hope it works out.', { theme: 'basics', stage: 1 });
  W('graag', 'gladly / would like', 'adv', 'Ik kom graag.', 'I would love to come.', { theme: 'basics', stage: 1 });

  /* ---------------- Vocabulary: Unit 6 ---------------- */
  VB('douchen', 'to shower', 'douche|doucht|douchen', 'douchte|douchten', 'gedoucht', 'hebben', 'Ik douche elke ochtend.', 'I shower every morning.', { theme: 'daily', stage: 1 });
  VB('ontbijten', 'to have breakfast', 'ontbijt|ontbijt|ontbijten', 'ontbeet|ontbeten', 'ontbeten', 'hebben', 'Wij ontbijten om half acht.', 'We have breakfast at half past seven.', { theme: 'daily', stage: 1 });
  VB('aankleden', 'to get dressed (zich)', 'kleed aan|kleedt aan|kleden aan', 'kleedde aan|kleedden aan', 'aangekleed', 'hebben', 'Ik kleed me snel aan.', 'I get dressed quickly.', { theme: 'daily', stage: 1, note: 'Reflexive: ik kleed me aan.' });
  VB('tandenpoetsen', 'to brush teeth', 'poets tanden|poetst tanden|poetsen tanden', 'poetste tanden|poetsten tanden', 'tandengepoetst', 'hebben', 'Ik poets twee keer per dag mijn tanden.', 'I brush my teeth twice a day.', { theme: 'daily', stage: 1 });
  VB('lunchen', 'to have lunch', 'lunch|luncht|lunchen', 'lunchte|lunchten', 'geluncht', 'hebben', 'Wij lunchen om één uur.', 'We have lunch at one.', { theme: 'daily', stage: 1 });
  VB('thuiskomen', 'to come home', 'kom thuis|komt thuis|komen thuis', 'kwam thuis|kwamen thuis', 'thuisgekomen', 'zijn', 'Ik kom om zes uur thuis.', 'I come home at six.', { theme: 'daily', stage: 1 });
  PH('naar bed gaan', 'to go to bed', 'Ik ga om elf uur naar bed.', 'I go to bed at eleven.', { theme: 'daily', stage: 1 });
  PH('tv kijken', 'to watch TV', "'s Avonds kijken we tv.", 'In the evening we watch TV.', { theme: 'daily', stage: 1 });
  N('routine', 'de', 'routines', 'routine', 'Mijn routine is elke dag hetzelfde.', 'My routine is the same every day.', { theme: 'daily', stage: 1 });
  W('vanochtend', 'this morning', 'adv', 'Vanochtend was ik moe.', 'This morning I was tired.', { theme: 'time', stage: 1 });
  W('meteen', 'immediately', 'adv', 'Ik ga meteen naar huis.', 'I am going home right away.', { theme: 'time', stage: 1 });
  W('hetzelfde', 'the same', 'pron', 'Elke dag hetzelfde.', 'Every day the same.', { theme: 'basics', stage: 1 });
  N('tand', 'de', 'tanden', 'tooth', 'Mijn tand doet pijn.', 'My tooth hurts.', { theme: 'body', stage: 1 });
  VB('wakker worden', 'to wake up', 'word wakker|wordt wakker|worden wakker', 'werd wakker|werden wakker', 'wakker geworden', 'zijn', 'Ik word om zes uur wakker.', 'I wake up at six.', { theme: 'daily', stage: 1, id: 'wakker-worden' });

  N('vrije tijd', 'de', null, 'free time', 'In mijn vrije tijd lees ik.', 'In my free time I read.', { theme: 'hobbies', stage: 1, id: 'vrije-tijd' });
  N('vakantie', 'de', 'vakanties', 'holiday', 'Wij gaan in augustus op vakantie.', 'We go on holiday in August.', { theme: 'hobbies', stage: 1, note: 'op vakantie gaan = go on holiday.' });
  N('strand', 'het', 'stranden', 'beach', 'Het strand is dichtbij.', 'The beach is nearby.', { theme: 'nature', stage: 1 });
  N('natuur', 'de', null, 'nature', 'Ik hou van de natuur.', 'I love nature.', { theme: 'nature', stage: 1 });
  VB('tekenen', 'to draw', 'teken|tekent|tekenen', 'tekende|tekenden', 'getekend', 'hebben', 'Mijn dochter tekent graag.', 'My daughter likes drawing.', { theme: 'hobbies', stage: 1 });
  VB('spelen', 'to play', 'speel|speelt|spelen', 'speelde|speelden', 'gespeeld', 'hebben', 'Ik speel gitaar.', 'I play guitar.', { theme: 'hobbies', stage: 1 });
  N('gitaar', 'de', 'gitaren', 'guitar', 'Hij speelt gitaar in een band.', 'He plays guitar in a band.', { theme: 'hobbies', stage: 1 });
  VB('dansen', 'to dance', 'dans|danst|dansen', 'danste|dansten', 'gedanst', 'hebben', 'Wij dansen op het feest.', 'We dance at the party.', { theme: 'hobbies', stage: 1 });
  VB('fotograferen', 'to photograph', 'fotografeer|fotografeert|fotograferen', 'fotografeerde|fotografeerden', 'gefotografeerd', 'hebben', 'Ik fotografeer de grachten.', 'I photograph the canals.', { theme: 'hobbies', stage: 1 });
  VB('winkelen', 'to go shopping (for fun)', 'winkel|winkelt|winkelen', 'winkelde|winkelden', 'gewinkeld', 'hebben', 'Op zaterdag winkelen we in de stad.', 'On Saturday we go shopping in town.', { theme: 'hobbies', stage: 1 });
  N('sport', 'de', 'sporten', 'sport', 'Welke sport doe je?', 'Which sport do you do?', { theme: 'hobbies', stage: 1 });
  N('concert', 'het', 'concerten', 'concert', 'Wij gaan naar een concert.', 'We are going to a concert.', { theme: 'hobbies', stage: 1 });
  W('saai', 'boring', 'adj', 'De film is saai.', 'The film is boring.', { theme: 'adjectives', stage: 1 });
  W('spannend', 'exciting', 'adj', 'Het boek is spannend.', 'The book is exciting.', { theme: 'adjectives', stage: 1 });
  W('populair', 'popular', 'adj', 'Fietsen is populair.', 'Cycling is popular.', { theme: 'adjectives', stage: 1 });

  VB('uitnodigen', 'to invite', 'nodig uit|nodigt uit|nodigen uit', 'nodigde uit|nodigden uit', 'uitgenodigd', 'hebben', 'Ik nodig je uit voor mijn feest.', 'I invite you to my party.', { theme: 'social', stage: 1 });
  VB('meegaan', 'to come along', 'ga mee|gaat mee|gaan mee', 'ging mee|gingen mee', 'meegegaan', 'zijn', 'Ga je mee naar de bioscoop?', 'Are you coming along to the cinema?', { theme: 'social', stage: 1 });
  N('feestje', 'het', 'feestjes', 'party (small)', 'Zaterdag is er een feestje.', 'On Saturday there is a party.', { theme: 'social', stage: 1 });
  N('cadeau', 'het', 'cadeaus', 'present', 'Wat is een goed cadeau?', 'What is a good present?', { theme: 'social', stage: 1 });
  PH('Heb je zin om', 'Do you feel like', 'Heb je zin om mee te gaan?', 'Do you feel like coming along?', { theme: 'social', stage: 1 });
  PH('het druk hebben', 'to be busy', 'Ik heb het druk deze week.', 'I am busy this week.', { theme: 'basics', stage: 1 });
  W('helaas', 'unfortunately', 'adv', 'Helaas kan ik niet komen.', 'Unfortunately I cannot come.', { theme: 'basics', stage: 1 });
  W('jammer', 'a pity', 'adj', 'Wat jammer!', 'What a pity!', { theme: 'basics', stage: 1 });
  W('gefeliciteerd', 'congratulations', 'interj', 'Gefeliciteerd met je verjaardag!', 'Happy birthday!', { theme: 'social', stage: 1 });
  N('bezoek', 'het', null, 'visit / visitors', 'Wij krijgen bezoek.', 'We are having visitors.', { theme: 'social', stage: 1 });
  VB('komen langs', 'to drop by', 'kom langs|komt langs|komen langs', 'kwam langs|kwamen langs', 'langsgekomen', 'zijn', 'Kom je zaterdag langs?', 'Are you dropping by on Saturday?', { theme: 'social', stage: 1, id: 'langskomen', altNl: ['langskomen'] });
  N('agenda', 'de', "agenda's", 'diary / calendar', 'Ik kijk even in mijn agenda.', 'Let me check my diary.', { theme: 'social', stage: 1 });
  W('leuk', 'nice / fun', 'adj', 'Leuk! Ik kom graag.', 'Nice! I would love to come.', { theme: 'basics', stage: 1 });
  W('wanneer', 'when', 'adv', 'Wanneer is het feest?', 'When is the party?', { theme: 'basics', stage: 1 });

  W('vriendelijk', 'friendly', 'adj', 'De mensen zijn vriendelijk.', 'The people are friendly.', { theme: 'adjectives', stage: 1 });
  W('grappig', 'funny', 'adj', 'Mijn collega is grappig.', 'My colleague is funny.', { theme: 'adjectives', stage: 1 });
  W('slim', 'smart', 'adj', 'Zij is heel slim.', 'She is very smart.', { theme: 'adjectives', stage: 1 });
  W('sportief', 'sporty', 'adj', 'Hij is sportief.', 'He is sporty.', { theme: 'adjectives', stage: 1 });
  W('kort', 'short', 'adj', 'Mijn broer is kort.', 'My brother is short.', { theme: 'adjectives', stage: 1 });
  W('jong', 'young', 'adj', 'Mijn oma is niet jong meer.', 'My grandma is not young anymore.', { theme: 'adjectives', stage: 1 });
  N('haar', 'het', null, 'hair', 'Zij heeft lang haar.', 'She has long hair.', { theme: 'body', stage: 1, id: 'haar-noun' });
  N('oog', 'het', 'ogen', 'eye', 'Hij heeft blauwe ogen.', 'He has blue eyes.', { theme: 'body', stage: 1 });
  W('blond', 'blond', 'adj', 'Mijn dochter is blond.', 'My daughter is blonde.', { theme: 'adjectives', stage: 1 });
  N('bril', 'de', 'brillen', 'glasses', 'Hij draagt een bril.', 'He wears glasses.', { theme: 'body', stage: 1, note: 'Singular in Dutch: een bril.' });
  VB('dragen', 'to wear / carry', 'draag|draagt|dragen', 'droeg|droegen', 'gedragen', 'hebben', 'Zij draagt een rode jas.', 'She wears a red coat.', { theme: 'clothes', stage: 1 });
  N('baard', 'de', 'baarden', 'beard', 'Mijn vader heeft een baard.', 'My father has a beard.', { theme: 'body', stage: 1 });
  W('serieus', 'serious', 'adj', 'De baas is serieus.', 'The boss is serious.', { theme: 'adjectives', stage: 1 });
  W('lang', 'tall / long', 'adj', 'Nederlanders zijn lang.', 'Dutch people are tall.', { theme: 'adjectives', stage: 1 });
  PH('eruitzien', 'to look (appearance)', 'Hoe ziet hij eruit?', 'What does he look like?', { theme: 'body', stage: 1 });
  W('eigenlijk', 'actually', 'adv', 'Eigenlijk is hij heel aardig.', 'Actually he is very nice.', { theme: 'basics', stage: 1 });

  /* ================= UNIT 5: Werk en studie ================= */
  const u5 = [];

  u5.push(lesson('s1u5l1', 'What do you do? Professions', 'You can say what your job is and where you work, and ask others about theirs, without the article.', [
    p('`Wat doe je?` or `Wat voor werk doe je?` = What do you do? The answer takes **no article**: `Ik ben leraar.` `Ik werk als programmeur.` `Zij is dokter.` English says "a teacher"; Dutch never does with zijn/worden/werken als.'),
    table(['', '', '', ''], [['*de leraar / *de lerares', 'teacher', '*de dokter / *de arts', 'doctor'], ['*de verpleegkundige', 'nurse', '*de programmeur', 'programmer'], ['*de ingenieur', 'engineer', '*de kok', 'cook'], ['*de kapper', 'hairdresser', '*de advocaat', 'lawyer'], ['*de ondernemer', 'entrepreneur', '*de manager', 'manager'], ['*de verkoper', 'shop assistant', '*de student', 'student']]),
    p('Places: `op kantoor` (at the office), `bij een bedrijf` (at a company), `in een ziekenhuis`, `op school`, `thuis`. `Ik werk bij Philips.` `Ik werk fulltime / parttime.` `Ik werk thuis` or `ik werk thuis` with the separable `thuiswerken`: `Op vrijdag werk ik thuis.`'),
    p('Female forms exist (`lerares`, `verkoopster`, `studente`) but the male form is increasingly used for everyone. `Ik ben werkloos` = unemployed; `Ik zoek een baan` = I am looking for a job.'),
    ex(['Wat voor werk doe je? — Ik ben ingenieur bij een klein bedrijf.', 'What kind of work do you do? — I am an engineer at a small company.'], ['Mijn vrouw is verpleegkundige in het OLVG.', 'My wife is a nurse at the OLVG hospital.'], ['Ik werk drie dagen op kantoor en twee dagen thuis.', 'I work three days at the office and two days at home.'], ['Hij is student aan de Universiteit van Amsterdam.', 'He is a student at the University of Amsterdam.']),
    tip('`Wat doe je?` also means "what are you doing (right now)?". Context sorts it out; in a first conversation it means your job.'),
  ], ['g1-professions'], ['leraar', 'lerares', 'dokter', 'verpleegkundige', 'programmeur', 'ingenieur', 'kok', 'kapper', 'advocaat', 'ondernemer', 'manager', 'kantoor', 'bedrijf', 'baan', 'beroep', 'baas', 'salaris', 'werkloos', 'als', 'fulltime', 'parttime', 'thuiswerken', 'zoeken', 'universiteit'], [
    mc('"I am a teacher" in Dutch is …', ['Ik ben een leraar.', 'Ik ben leraar.', 'Ik ben de leraar.'], 1, 'No article with professions after zijn.'),
    mc('"Ik werk als kok" means …', ['I work with a cook.', 'I work as a cook.', 'I work for a cook.'], 1, 'als = as.'),
    mc('"op kantoor" means …', ['at the office', 'on the desk', 'in the town hall'], 0, 'op kantoor = at the office (no article).'),
    fill('Wat voor werk ___ je?', ['doe'], 'What kind of work do you do?', 'doe je (no t).'),
    fill('Ik werk ___ programmeur bij een bank.', ['als'], 'I work as a programmer at a bank.', 'werken als = work as.'),
    fill('Mijn moeder is ___. (nurse)', ['verpleegkundige'], 'My mother is a nurse.', 'No article.'),
    fill('Ik ___ een nieuwe baan.', ['zoek'], 'I am looking for a new job.', 'zoeken = look for; ik zoek.'),
    fill('Op vrijdag werk ik ___.', ['thuis'], 'On Friday I work from home.', 'thuiswerken: werk … thuis.'),
    build('My brother is a lawyer in The Hague.', 'Mijn broer is advocaat in Den Haag.', ['een', 'de'], 'No article.'),
    build('She works part-time at a hospital.', 'Zij werkt parttime in een ziekenhuis.', ['fulltime', 'op'], 'in een ziekenhuis.'),
    build('What is your profession?', 'Wat is uw beroep?', ['jouw', 'baan'], 'uw = your (formal); beroep = profession.'),
    build('I am a student at the university.', 'Ik ben student aan de universiteit.', ['een', 'op'], 'aan de universiteit.'),
    fix('Zij is een dokter.', ['Zij is dokter.'], 'Drop the article.'),
    fix('Ik werk in kantoor.', ['Ik werk op kantoor.'], 'op kantoor.'),
    art('kantoor', 'het', 'het kantoor.'),
    art('bedrijf', 'het', 'be- + two syllables: het bedrijf.'),
    art('baan', 'de', 'de baan.'),
    tr('nl-en', 'Het salaris is niet hoog, maar het werk is leuk.', ['The salary is not high, but the work is nice.', 'The salary is not high, but the work is fun.'], 'salaris = salary.'),
    tr('en-nl', 'the boss', ['de baas', 'baas'], 'de baas, plural bazen.'),
    dict('Ik ben leraar en mijn vrouw is advocaat.', 'I am a teacher and my wife is a lawyer.', 'No articles.'),
    listen('Mijn buurman is kapper en werkt in het centrum.', ['My neighbour is a hairdresser and works in the centre.', 'My neighbour is a cook and works in the centre.', 'My neighbour is a hairdresser and lives in the centre.'], 0, 'kapper = hairdresser; werkt = works.'),
    speak('Ik werk als programmeur bij een klein bedrijf in Zuid.', 'I work as a programmer at a small company in South.'),
    match([['de kok', 'cook'], ['de kapper', 'hairdresser'], ['de advocaat', 'lawyer'], ['de verpleegkundige', 'nurse'], ['het bedrijf', 'company'], ['de baan', 'job']]),
    free('Say what you do, where you work, and whether you work full-time or part-time.', 'Ik ben ingenieur. Ik werk bij een bedrijf in Amsterdam-Zuidoost. Ik werk fulltime, en op vrijdag werk ik thuis.', 'I am an engineer. I work at a company in Amsterdam Zuidoost. I work full-time, and on Friday I work from home.', { hints: ['Ik ben …', 'Ik werk bij …', 'fulltime / parttime'] }),
    auto(3, ['article', 'tr-en-nl', 'listen']),
  ], [
    mc('Correct?', ['Hij is een ingenieur.', 'Hij is ingenieur.'], 1, 'No article.'),
    fill('___ doe je? — Ik ben kok.', ['Wat'], 'What do you do? — I am a cook.', 'wat doe je.'),
    build('I work at the office on Monday.', 'Op maandag werk ik op kantoor.', ['ik werk', 'in'], 'Inversion after Op maandag; op kantoor.'),
    tr('en-nl', 'I am unemployed.', ['Ik ben werkloos.'], 'werkloos.'),
    fix('Mijn zus werkt als een lerares.', ['Mijn zus werkt als lerares.'], 'No article after als.'),
    speak('Wat voor werk doe je?', 'What kind of work do you do?'),
  ]));

  u5.push(lesson('s1u5l2', 'Know, say, think, ask: everyday verbs at work', 'You can use the most common irregular and work verbs: zeggen, weten, kennen, denken, vragen, beginnen.', [
    p('Most verbs are regular, but a few of the most frequent ones need a closer look.'),
    table(['infinitive', 'ik', 'hij', 'wij', ''], [['*zeggen', '*zeg', '*zegt', '*zeggen', 'to say'], ['*weten', '*weet', '*weet', '*weten', 'to know (facts)'], ['*kennen', '*ken', '*kent', '*kennen', 'to know (people, places)'], ['*denken', '*denk', '*denkt', '*denken', 'to think'], ['*vragen', '*vraag', '*vraagt', '*vragen', 'to ask'], ['*beginnen', '*begin', '*begint', '*beginnen', 'to begin'], ['*komen', '*kom', '*komt', '*komen', 'to come'], ['*doen', '*doe', '*doet', '*doen', 'to do']]),
    h('weten vs kennen'),
    p('English "know" is two verbs in Dutch. `weten` = to know a fact, an answer: `Ik weet het niet.` `Weet je hoe laat het is?` `kennen` = to be familiar with a person, place or thing: `Ken je Anna?` `Ik ken Utrecht goed.`'),
    h('At work'),
    ex(['De vergadering begint om tien uur en stopt om elf uur.', 'The meeting starts at ten and stops at eleven.'], ['Ik stuur je vanmiddag een e-mail.', 'I will send you an email this afternoon.'], ['Wat zegt de baas? — Hij zegt dat het project bijna klaar is.', 'What does the boss say? — He says the project is almost finished.'], ['Mag ik iets vragen? — Natuurlijk.', 'May I ask something? — Of course.'], ['Ik denk van wel. / Ik denk van niet.', 'I think so. / I don’t think so.']),
    tip('`Ik weet het niet` is the most useful sentence of this lesson. Say it with a shrug and a smile and Dutch people will explain twice as slowly.'),
  ], ['g1-irregular'], ['zeggen', 'weten', 'kennen', 'denken', 'vragen', 'antwoorden', 'beginnen', 'stoppen', 'sturen', 'vergaderen', 'vergadering', 'e-mail', 'pauze', 'project', 'bijna', 'belangrijk', 'ik-weet-het-niet'], [
    conj('weten', 'ik', 'pres', ['weet'], 'Stem weet (long ee doubled).'),
    conj('weten', 'hij', 'pres', ['weet'], 'Stem ends in t: no extra t.'),
    conj('zeggen', 'zij', 'pres', ['zegt', 'zeggen'], 'zij zegt (she) / zij zeggen (they).'),
    conj('kennen', 'jij', 'pres', ['kent'], 'ken + t.'),
    conj('vragen', 'ik', 'pres', ['vraag'], 'Stem vraag.'),
    conj('beginnen', 'het', 'pres', ['begint'], 'begin + t.'),
    conj('denken', 'wij', 'pres', ['denken'], 'Plural: denken.'),
    fill('___ je Anna? — Ja, zij is mijn collega.', ['Ken'], 'Do you know Anna? — Yes, she is my colleague.', 'A person: kennen.'),
    fill('___ je hoe laat het is?', ['Weet'], 'Do you know what time it is?', 'A fact: weten.'),
    fill('Ik ___ Amsterdam goed.', ['ken'], 'I know Amsterdam well.', 'A place: kennen.'),
    fill('Ik ___ het niet.', ['weet'], 'I do not know.', 'weten.'),
    fill('De vergadering ___ om tien uur.', ['begint'], 'The meeting starts at ten.', 'de vergadering = het/zij: begint.'),
    mc('"Ik denk van wel" means …', ['I think well.', 'I think so.', 'I want to think.'], 1, 'denk van wel = think so; van niet = think not.'),
    mc('Which "know" for "Do you know my brother?"', ['weten', 'kennen'], 1, 'A person → kennen.'),
    build('I will send you an email this afternoon.', 'Ik stuur je vanmiddag een e-mail.', ['stuurt', 'sturen'], 'ik stuur; time before object.'),
    build('What does the boss say?', 'Wat zegt de baas?', ['zeg', 'zeggen'], 'de baas = zegt.'),
    build('May I ask something?', 'Mag ik iets vragen?', ['vraag', 'niets'], 'mag ik + vragen at the end.'),
    build('We have a break at half past twelve.', 'Wij hebben pauze om half een.', ['een pauze', 'op'], 'pauze hebben, no article; half een = 12:30.'),
    fix('Ik weet mijn buurman niet.', ['Ik ken mijn buurman niet.'], 'A person: kennen.'),
    fix('Hij zeg niets.', ['Hij zegt niets.'], 'hij + t: zegt.'),
    tr('nl-en', 'Het project is bijna klaar.', ['The project is almost finished.', 'The project is almost done.', 'The project is almost ready.'], 'bijna = almost; klaar = finished.'),
    dict('Ik weet het niet, vraag het aan de baas.', 'I do not know, ask the boss.', 'weet, vraag; aan de baas = to the boss.'),
    listen('De vergadering stopt om elf uur en dan hebben we pauze.', ['The meeting stops at eleven and then we have a break.', 'The meeting starts at eleven after the break.', 'The meeting stops at ten and then we have lunch.'], 0, 'stopt om elf uur; pauze.'),
    speak('Weet je hoe laat de vergadering begint?', 'Do you know what time the meeting starts?'),
    speak('Ik ken Utrecht niet zo goed.', 'I do not know Utrecht very well.'),
    auto(3, ['conj', 'tr-en-nl', 'listen']),
  ], [
    conj('komen', 'hij', 'pres', ['komt'], 'kom + t, short o.'),
    conj('doen', 'jullie', 'pres', ['doen'], 'Plural: doen.'),
    fill('___ je dat restaurant? — Ja, het is goed.', ['Ken'], 'Do you know that restaurant?', 'A place: kennen.'),
    fill('Ik ___ niet waar hij woont.', ['weet'], 'I do not know where he lives.', 'A fact: weten.'),
    build('The boss asks a question.', 'De baas stelt een vraag.', ['vraagt', 'vragen'], 'een vraag stellen = to ask a question (fixed combination). vragen = to ask (something).'),
    speak('Ik denk van wel.', 'I think so.'),
  ]));

  u5.push(lesson('s1u5l3', 'How often? Frequency and graag', 'You can say how often you do things and what you like doing, with the adverb in the right place.', [
    table(['', ''], [['*altijd', 'always'], ['*meestal', 'usually'], ['*vaak', 'often'], ['*soms', 'sometimes'], ['*zelden', 'rarely'], ['*nooit', 'never'], ['*elke dag / *elke week', 'every day / week'], ['*een keer per week', 'once a week'], ['*twee keer per maand', 'twice a month']]),
    h('Where does it go?'),
    p('Right after the verb (and after a short pronoun object): `Ik fiets altijd naar mijn werk.` `Zij drinkt nooit koffie.` `Ik zie hem vaak.` Or first, with inversion: `Meestal werk ik thuis.` `Soms eet ik buiten de deur.`'),
    h('graag'),
    p('Verb + `graag` = like doing: `Ik werk graag.` `Wij wandelen graag in de duinen.` `Ik sta niet graag vroeg op.` Stronger: `heel graag`; superlative: `het liefst` (most of all): `Ik drink het liefst thee.`'),
    ex(['Ik sport drie keer per week.', 'I exercise three times a week.'], ['Wij gaan zelden naar de bioscoop, maar wij kijken vaak een film thuis.', 'We rarely go to the cinema, but we often watch a film at home.'], ['Lees je de krant? — Soms, meestal op zondag.', 'Do you read the newspaper? — Sometimes, usually on Sunday.'], ['Ik ben altijd op tijd; mijn broer is altijd te laat.', 'I am always on time; my brother is always late.']),
    warn('`nooit` is already negative; do not add niet. `Ik drink nooit koffie.` And `een keer` = once, `twee keer` = twice: keer, not "tijden".'),
  ], ['g1-adverbs'], ['altijd', 'meestal', 'vaak', 'soms', 'zelden', 'nooit', 'keer', 'per', 'op-tijd', 'te-laat', 'sporten', 'wandelen', 'krant', 'film', 'serie', 'voetbal', 'voetballen', 'weer-adv'], [
    fill('Ik fiets ___ naar mijn werk. (always)', ['altijd'], 'I always cycle to work.', 'altijd after the verb.'),
    fill('Zij drinkt ___ koffie. (never)', ['nooit'], 'She never drinks coffee.', 'nooit; no niet needed.'),
    fill('Ik sport twee ___ per week.', ['keer'], 'I exercise twice a week.', 'keer = time (occasion).'),
    fill('___ werk ik thuis, maar vandaag ben ik op kantoor. (usually)', ['Meestal'], 'Usually I work from home, but today I am at the office.', 'meestal first → inversion: werk ik.'),
    fill('Wij gaan ___ naar de bioscoop. (rarely)', ['zelden'], 'We rarely go to the cinema.', 'zelden.'),
    mc('Where does "vaak" go? "Ik ___ naar het park."', ['Ik vaak ga naar het park.', 'Ik ga vaak naar het park.', 'Ik ga naar het park vaak.'], 1, 'Right after the verb.'),
    mc('"Ik werk graag" means …', ['I work hard.', 'I like working.', 'I work gladly today.'], 1, 'verb + graag = like doing.'),
    mc('"Ik ben te laat" means …', ['I am too late / late.', 'I am at the lake.', 'I am on time.'], 0, 'te laat = (too) late.'),
    build('I usually get up at seven.', 'Ik sta meestal om zeven uur op.', ['altijd', 'opsta'], 'sta … op with meestal after the verb.'),
    build('Sometimes we eat out.', 'Soms eten wij buiten de deur.', ['wij eten', 'eet'], 'soms first → inversion.'),
    build('She likes reading in the garden.', 'Zij leest graag in de tuin.', ['houdt', 'lekker'], 'verb + graag.'),
    build('I do not like getting up early.', 'Ik sta niet graag vroeg op.', ['nooit', 'sta op'], 'niet graag; op at the end.'),
    build('Once a week I play football.', 'Een keer per week voetbal ik.', ['ik voetbal', 'voetbalt'], 'Time first → inversion: voetbal ik.'),
    fix('Ik drink nooit niet koffie.', ['Ik drink nooit koffie.'], 'nooit is already negative.'),
    fix('Ik ga twee tijden per week zwemmen.', ['Ik ga twee keer per week zwemmen.'], 'keer, not tijden.'),
    fix('Meestal ik werk thuis.', ['Meestal werk ik thuis.'], 'Inversion after meestal.'),
    tr('nl-en', 'Mijn broer is altijd te laat.', ['My brother is always late.', 'My brother is always too late.'], 'te laat = late.'),
    tr('en-nl', 'I like walking.', ['Ik wandel graag.', 'Ik loop graag.'], 'verb + graag.'),
    dict('Ik lees elke ochtend de krant.', 'I read the newspaper every morning.', 'elke ochtend after the verb.'),
    listen('Wij kijken soms een film, maar wij kijken nooit tv.', ['We sometimes watch a film, but we never watch TV.', 'We often watch a film and TV.', 'We never watch films, but we sometimes watch TV.'], 0, 'soms … nooit.'),
    speak('Ik sport drie keer per week en ik wandel graag.', 'I exercise three times a week and I like walking.'),
    free('Say how often you do three things (sport, cook, read, watch TV…) and one thing you like doing.', 'Ik sport twee keer per week. Ik kook elke dag. Ik kijk zelden tv. Ik lees graag.', 'I exercise twice a week. I cook every day. I rarely watch TV. I like reading.', { hints: ['altijd / vaak / soms / nooit', '… keer per week', 'Ik … graag'] }),
    auto(3, ['tr-en-nl', 'listen', 'conj']),
  ], [
    fill('Hij is ___ op tijd. (always)', ['altijd'], 'He is always on time.', 'altijd.'),
    fill('Ik eet ___ vlees. (never)', ['nooit'], 'I never eat meat.', 'nooit.'),
    build('We often go to the beach.', 'Wij gaan vaak naar het strand.', ['strand het', 'gaat'], 'vaak after the verb.'),
    build('Do you like cooking?', 'Kook je graag?', ['kookt', 'houd'], 'kook je graag.'),
    fix('Ik kijk graag niet tv.', ['Ik kijk niet graag tv.'], 'niet graag.'),
    speak('Meestal werk ik thuis, soms op kantoor.', 'Usually I work from home, sometimes at the office.'),
  ]));

  u5.push(lesson('s1u5l4', 'Joining sentences and writing an email', 'You can join sentences with en, maar, of, want and dus, and write a short email introducing yourself.', [
    table(['', '', ''], [['*en', 'and', '*Ik werk en zij studeert.'], ['*maar', 'but', '*Het regent, maar ik fiets.'], ['*of', 'or', '*Kom je vandaag of morgen?'], ['*want', 'because', '*Ik blijf thuis, want ik ben ziek.'], ['*dus', 'so', '*Het is laat, dus ik ga naar bed.']]),
    p('These five words join two full sentences and **do not change the word order**: after `want` or `maar` the verb is still in second position. (`omdat` is different: it sends the verb to the end. That is an A2 topic; for now use `want`.)'),
    h('A short email'),
    table(['', 'informal', 'formal'], [['opening', '*Hoi Anna, / *Beste Anna,', '*Geachte heer De Vries, / *Geachte mevrouw Jansen,'], ['closing', '*Groetjes, / *Groeten,', '*Met vriendelijke groet,']]),
    ex(['Beste Anna,', 'Dear Anna,'], ['Ik ben Sam en ik ben de nieuwe collega van Tom. Ik kom uit Engeland, maar ik woon al twee jaar in Amsterdam.', 'I am Sam and I am Tom’s new colleague. I come from England, but I have lived in Amsterdam for two years.'], ['Ik spreek een beetje Nederlands, dus schrijf alsjeblieft langzaam en simpel.', 'I speak a little Dutch, so please write slowly and simply.'], ['Ik hoop dat we snel afspreken. Groetjes, Sam', 'I hope we meet soon. Regards, Sam']),
    tip('`Beste` works for almost everyone: colleagues, the landlord, the gemeente. `Geachte` is for people you would address as u. `Groetjes` is friendly; `Met vriendelijke groet` is safe everywhere.'),
  ], ['g1-conjunctions'], ['maar', 'of', 'dus', 'want', 'alleen', 'bericht', 'onderwerp', 'groet', 'met-vriendelijke-groet', 'beste', 'geachte', 'heer', 'sinds', 'hopen', 'graag', 'e-mail'], [
    fill('Ik wil fietsen, ___ het regent.', ['maar'], 'I want to cycle, but it is raining.', 'maar = but.'),
    fill('Ik blijf thuis, ___ ik ben moe.', ['want'], 'I am staying home, because I am tired.', 'want = because (no change in word order).'),
    fill('Het is laat, ___ ik ga naar bed.', ['dus'], 'It is late, so I am going to bed.', 'dus = so.'),
    fill('Wil je thee ___ koffie?', ['of'], 'Do you want tea or coffee?', 'of = or.'),
    fill('Ik werk ___ mijn vrouw studeert.', ['en'], 'I work and my wife studies.', 'en = and.'),
    mc('After "want", the verb is …', ['at the end', 'in second position, as usual', 'first'], 1, 'want is coordinating: normal word order.'),
    mc('Which opening for an email to the gemeente?', ['Hoi,', 'Geachte heer/mevrouw,', 'Beste vriend,'], 1, 'Formal: Geachte heer/mevrouw.'),
    mc('Which closing is safe in every email?', ['Doei!', 'Met vriendelijke groet,', 'Kusjes,'], 1, 'Met vriendelijke groet works everywhere.'),
    build('It is raining, so I take the tram.', 'Het regent, dus ik neem de tram.', ['want', 'neem ik'], 'dus + normal order: ik neem.'),
    build('I am staying home because I am ill.', 'Ik blijf thuis, want ik ben ziek.', ['omdat', 'ben ik'], 'want + normal order.'),
    build('Are you coming today or tomorrow?', 'Kom je vandaag of morgen?', ['en', 'komt'], 'of = or.'),
    build('I speak English, but I am learning Dutch.', 'Ik spreek Engels, maar ik leer Nederlands.', ['want', 'leer ik'], 'maar + normal order.'),
    fix('Ik blijf thuis, want ik moe ben.', ['Ik blijf thuis, want ik ben moe.'], 'After want the verb stays in second position: ik ben moe.'),
    fix('Het regent, dus neem ik de tram.', ['Het regent, dus ik neem de tram.'], 'After dus as a conjunction: normal order. (Dus with inversion is possible when dus starts a new sentence, but the standard pattern here is dus ik neem.)'),
    tr('nl-en', 'Met vriendelijke groet', ['Kind regards', 'With kind regards', 'Best regards', 'Yours sincerely'], 'The standard closing.'),
    tr('en-nl', 'Dear Mr De Vries,', ['Geachte heer De Vries,', 'Geachte heer De Vries', 'Beste heer De Vries,'], 'Formal: Geachte heer.'),
    dict('Ik hoop dat we snel afspreken.', 'I hope we meet up soon.', 'hoop dat … (the verb afspreken at the end after dat: A2 rule, learn the chunk).'),
    listen('Ik kom graag, maar ik heb het druk deze week.', ['I would love to come, but I am busy this week.', 'I am coming because I am busy this week.', 'I cannot come, so I am busy this week.'], 0, 'maar; het druk hebben.'),
    read('Onderwerp: nieuwe collega\nBeste allemaal,\nIk ben Sam en sinds maandag werk ik bij jullie op de afdeling marketing. Ik kom uit Manchester, maar ik woon al drie jaar in Amsterdam. Ik spreek een beetje Nederlands, dus ik probeer alles in het Nederlands te doen. Ik hou van fietsen en koffie, en ik kook graag. Kom gerust langs voor een praatje!\nGroetjes, Sam', [
      { q: 'Since when does Sam work here?', options: ['since Monday', 'since three years ago', 'since marketing'], answer: 0, explain: '"sinds maandag".' },
      { q: 'How long has Sam lived in Amsterdam?', options: ['one year', 'three years', 'three months'], answer: 1, explain: '"al drie jaar".' },
      { q: 'What does Sam like?', options: ['cycling, coffee and cooking', 'football and tea', 'reading and running'], answer: 0, explain: '"fietsen en koffie, en ik kook graag".' },
    ], { en: 'Subject: new colleague. Dear all, I am Sam and since Monday I have been working with you in the marketing department. I come from Manchester, but I have lived in Amsterdam for three years. I speak a little Dutch, so I try to do everything in Dutch. I love cycling and coffee, and I like cooking. Feel free to drop by for a chat! Regards, Sam' }),
    speak('Ik kom uit Engeland, maar ik woon al twee jaar in Amsterdam.', 'I come from England, but I have lived in Amsterdam for two years.'),
    write('Write a short email (4–6 sentences) to your new colleagues: who you are, where you come from, what you do, one thing you like. Use at least two of: en, maar, want, dus.', ['Opening (Beste …,) and closing (Groetjes / Met vriendelijke groet)', 'At least two conjunctions: en, maar, of, want, dus', 'Verb in second position in every main clause', 'No article before your profession'], 'Beste collega’s,\nIk ben Lisa en ik ben de nieuwe programmeur. Ik kom uit Londen, maar ik woon sinds januari in Amsterdam. Ik spreek een beetje Nederlands, dus ik oefen graag met jullie. In mijn vrije tijd fiets ik en ik kook graag.\nMet vriendelijke groet,\nLisa', { modelEn: 'Dear colleagues, I am Lisa and I am the new programmer. I come from London, but I have lived in Amsterdam since January. I speak a little Dutch, so I like practising with you. In my free time I cycle and I like cooking. Kind regards, Lisa' }),
    auto(2, ['tr-en-nl', 'listen']),
  ], [
    fill('Ik heb honger, ___ ik eet een broodje.', ['dus'], 'I am hungry, so I eat a roll.', 'dus.'),
    fill('Hij komt niet, ___ hij is ziek.', ['want'], 'He is not coming, because he is ill.', 'want.'),
    mc('Formal or informal? "Hoi Tom, groetjes Sam"', ['formal', 'informal'], 1, 'Hoi and groetjes are informal.'),
    build('I am tired, but I am going to the party.', 'Ik ben moe, maar ik ga naar het feest.', ['want', 'ga ik'], 'maar + normal order.'),
    tr('en-nl', 'Kind regards,', ['Met vriendelijke groet,', 'Met vriendelijke groet'], 'The standard closing.'),
    speak('Ik ben moe, dus ik ga naar bed.', 'I am tired, so I am going to bed.'),
  ]));

  units.push(unit('s1u5', 'Werk en studie', 'work and study', u5));

  /* ================= UNIT 6: Dagelijks leven ================= */
  const u6 = [];

  u6.push(lesson('s1u6l1', 'My day: the daily routine', 'You can describe your day from waking up to going to bed, with times and separable verbs.', [
    table(['', ''], [['*Ik word om zeven uur wakker.', 'I wake up at seven.'], ['*Ik sta op en ik douche.', 'I get up and shower.'], ['*Ik kleed me aan.', 'I get dressed.'], ['*Ik ontbijt en ik poets mijn tanden.', 'I have breakfast and brush my teeth.'], ['*Om half negen ga ik naar mijn werk.', 'At half past eight I go to work.'], ['*Ik lunch om één uur.', 'I have lunch at one.'], ['*Om zes uur kom ik thuis.', 'At six I come home.'], ['*Ik kook en wij eten om zeven uur.', 'I cook and we eat at seven.'], ["*'s Avonds kijken we tv of ik lees.", 'In the evening we watch TV or I read.'], ['*Om elf uur ga ik naar bed.', 'At eleven I go to bed.']]),
    p('Notice the separable verbs at work: `wakker worden` (word … wakker), `opstaan` (sta … op), `aankleden` (kleed … aan), `thuiskomen` (kom … thuis). And the time-first sentences with inversion: `Om zes uur kom ik thuis.`'),
    p('Sequence words: `eerst`, `dan`, `daarna`, `’s ochtends`, `’s middags`, `’s avonds`, `meteen` (immediately), `vanochtend` (this morning).'),
    h('aankleden is reflexive'),
    p('`Ik kleed me aan`, `jij kleedt je aan`, `hij kleedt zich aan`, `wij kleden ons aan`. The little word (me, je, zich, ons) sits right after the verb. You will meet more reflexive verbs in A2.'),
    ex(['Hoe laat sta je op? — Meestal om half zeven.', 'What time do you get up? — Usually at half past six.'], ['Eerst douche ik, dan ontbijt ik.', 'First I shower, then I have breakfast.'], ['Elke dag hetzelfde: werk, eten, slapen.', 'Every day the same: work, eat, sleep.']),
  ], ['g1-separable', 'g1-prep-time'], ['douchen', 'ontbijten', 'aankleden', 'tandenpoetsen', 'lunchen', 'thuiskomen', 'naar-bed-gaan', 'tv-kijken', 'routine', 'vanochtend', 'meteen', 'hetzelfde', 'tand', 'wakker-worden', 'opstaan'], [
    fill('Ik ___ om zeven uur wakker.', ['word'], 'I wake up at seven.', 'wakker worden: ik word … wakker.'),
    fill('Ik sta op en ik ___ meteen.', ['douche'], 'I get up and shower immediately.', 'douchen: ik douche.'),
    fill('Ik kleed ___ aan.', ['me'], 'I get dressed.', 'Reflexive: ik kleed me aan.'),
    fill('Om zes uur ___ ik thuis.', ['kom'], 'At six I come home.', 'thuiskomen: kom … thuis; inversion after om zes uur.'),
    fill('Ik ___ mijn tanden.', ['poets'], 'I brush my teeth.', 'tandenpoetsen: ik poets mijn tanden.'),
    fill("'s Avonds ___ we tv.", ['kijken'], 'In the evening we watch TV.', "Inversion after 's avonds: kijken we."),
    mc('"Hij kleedt ___ aan."', ['me', 'je', 'zich'], 2, 'Third person reflexive: zich.'),
    mc('Which is correct?', ['Om elf uur ik ga naar bed.', 'Om elf uur ga ik naar bed.'], 1, 'Time first → verb second.'),
    build('I get up at half past six.', 'Ik sta om half zeven op.', ['opsta', 'staat'], 'sta … op.'),
    build('First I have breakfast, then I shower.', 'Eerst ontbijt ik, dan douche ik.', ['ik ontbijt', 'ik douche'], 'Inversion after eerst and dan.'),
    build('We have lunch at one.', 'Wij lunchen om één uur.', ['lunch', 'op'], 'wij lunchen; om.'),
    build('At eleven I go to bed.', 'Om elf uur ga ik naar bed.', ['ik ga', 'het bed'], 'naar bed, no article; inversion.'),
    build('She comes home at five.', 'Zij komt om vijf uur thuis.', ['thuiskomt', 'komen'], 'komt … thuis.'),
    fix('Ik opsta om zeven uur en ik douche.', ['Ik sta om zeven uur op en ik douche.'], 'sta … op.'),
    fix('Om zes uur ik kom thuis.', ['Om zes uur kom ik thuis.'], 'Inversion.'),
    tr('nl-en', 'Elke dag hetzelfde.', ['Every day the same.', 'The same every day.'], 'hetzelfde = the same.'),
    dict("'s Ochtends douche ik en 's avonds lees ik.", 'In the morning I shower and in the evening I read.', 'Two inversions.'),
    listen('Ik word om zes uur wakker, maar ik sta pas om zeven uur op.', ['I wake up at six, but I only get up at seven.', 'I wake up at seven and get up at six.', 'I get up at six and go to work at seven.'], 0, 'word … wakker; sta … op; pas = only (not until).'),
    read('Mijn dag. Ik word om half zeven wakker en ik sta meteen op. Eerst douche ik, dan kleed ik me aan en ontbijt ik met brood en kaas. Om acht uur fiets ik naar mijn werk; dat duurt twintig minuten. Ik werk tot half zes en ik kom om zes uur thuis. Mijn vrouw kookt, want ik kook niet graag. Na het eten kijken we een serie of ik lees. Om elf uur ga ik naar bed.', [
      { q: 'What does the person do first after getting up?', options: ['have breakfast', 'shower', 'cycle to work'], answer: 1, explain: '"Eerst douche ik".' },
      { q: 'How long is the cycle to work?', options: ['10 minutes', '20 minutes', '30 minutes'], answer: 1, explain: '"dat duurt twintig minuten".' },
      { q: 'Who cooks, and why?', options: ['the writer, because they like cooking', 'the wife, because the writer does not like cooking', 'nobody, they eat out'], answer: 1, explain: '"Mijn vrouw kookt, want ik kook niet graag."' },
    ], { en: 'My day. I wake up at half past six and get up immediately. First I shower, then I get dressed and have breakfast with bread and cheese. At eight I cycle to work; that takes twenty minutes. I work until half past five and I come home at six. My wife cooks, because I do not like cooking. After dinner we watch a series or I read. At eleven I go to bed.' }),
    speak('Ik sta om zeven uur op, ik douche en ik ontbijt.', 'I get up at seven, I shower and I have breakfast.'),
    speak('Om zes uur kom ik thuis en dan kook ik.', 'At six I come home and then I cook.'),
    free('Describe your morning in four or five sentences, with times. Use opstaan and at least one sentence that starts with a time.', 'Ik word om zeven uur wakker. Ik sta meteen op en ik douche. Om half acht ontbijt ik. Om half negen ga ik naar mijn werk.', 'I wake up at seven. I get up immediately and shower. At half past seven I have breakfast. At half past eight I go to work.', { hints: ['Ik word … wakker', 'Ik sta … op', 'Om … uur …'] }),
    auto(2, ['tr-en-nl', 'listen']),
  ], [
    fill('Wij ___ om half acht wakker.', ['worden'], 'We wake up at half past seven.', 'wij worden … wakker.'),
    fill('Hij kleedt ___ aan.', ['zich'], 'He gets dressed.', 'zich for hij/zij.'),
    build('At eight I go to work.', 'Om acht uur ga ik naar mijn werk.', ['ik ga', 'gaat'], 'Inversion.'),
    build('I come home at six and cook.', 'Ik kom om zes uur thuis en ik kook.', ['thuiskom', 'komt'], 'kom … thuis.'),
    fix("'s Avonds wij kijken tv.", ["'s Avonds kijken wij tv."], 'Inversion.'),
    speak('Hoe laat sta je op?', 'What time do you get up?'),
  ]));

  u6.push(lesson('s1u6l2', 'Free time and hobbies', 'You can talk about hobbies and free time: what you do, how often, and what you like or find boring.', [
    table(['', '', '', ''], [['*sporten', 'to exercise', '*voetballen', 'to play football'], ['*zwemmen', 'to swim', '*wandelen', 'to walk / hike'], ['*fietsen', 'to cycle', '*lezen', 'to read'], ['*koken', 'to cook', '*tekenen', 'to draw'], ['*gitaar spelen', 'to play guitar', '*dansen', 'to dance'], ['*fotograferen', 'to photograph', '*winkelen', 'to go shopping']]),
    p('`Wat doe je in je vrije tijd?` (What do you do in your free time?) `Ik sport, ik lees en ik kook graag.` `Wat zijn je hobby’s?` `Mijn hobby’s zijn fotograferen en wandelen.`'),
    p('Opinions: `leuk` (fun), `saai` (boring), `spannend` (exciting), `populair`. `Ik vind voetbal saai.` `Ik vind fotograferen leuk.` `Wat vind je van …?`'),
    p('Holidays: `op vakantie gaan` (go on holiday), `naar het strand gaan`, `in de natuur wandelen`. The Dutch coast is 30 minutes from Amsterdam: `Zandvoort`.'),
    ex(['In mijn vrije tijd fotografeer ik de stad.', 'In my free time I photograph the city.'], ['Mijn zoon voetbalt elke zaterdag en mijn dochter danst.', 'My son plays football every Saturday and my daughter dances.'], ['Wij gaan in juli op vakantie naar Frankrijk.', 'We go on holiday to France in July.'], ['Vind je lezen leuk? — Ja, maar ik vind series saai.', 'Do you like reading? — Yes, but I find series boring.']),
  ], ['g1-likes', 'g1-adverbs'], ['vrije-tijd', 'vakantie', 'strand', 'natuur', 'tekenen', 'spelen', 'gitaar', 'dansen', 'fotograferen', 'winkelen', 'sport', 'concert', 'saai', 'spannend', 'populair', 'hobby', 'zwemmen', 'sporten', 'wandelen'], [
    fill('Wat doe je in je ___ tijd?', ['vrije'], 'What do you do in your free time?', 'de vrije tijd.'),
    fill('Ik ___ gitaar.', ['speel'], 'I play guitar.', 'spelen: ik speel.'),
    fill('Wij gaan in augustus op ___.', ['vakantie'], 'We go on holiday in August.', 'op vakantie gaan.'),
    fill('Ik vind die film ___. (boring)', ['saai'], 'I find that film boring.', 'saai = boring.'),
    fill('Mijn dochter ___ elke zaterdag. (dances)', ['danst'], 'My daughter dances every Saturday.', 'dansen: danst.'),
    mc('"Ik vind fotograferen leuk" means …', ['I find photographing.', 'I like photography.', 'I photograph nice things.'], 1, 'leuk vinden = like.'),
    mc('"op vakantie" means …', ['at the holiday', 'on holiday', 'in vacation'], 1, 'op vakantie gaan / zijn.'),
    build('What do you do in your free time?', 'Wat doe je in je vrije tijd?', ['doet', 'jouw'], 'wat doe je; in je vrije tijd.'),
    build('In my free time I read and I cook.', 'In mijn vrije tijd lees ik en kook ik.', ['ik lees', 'ik kook'], 'Inversion after the fronted phrase.'),
    build('My son plays football every Saturday.', 'Mijn zoon voetbalt elke zaterdag.', ['voetbal', 'op'], 'voetbalt.'),
    build('We are going to a concert tonight.', 'Wij gaan vanavond naar een concert.', ['gaat', 'op'], 'naar een concert.'),
    build('I find series boring, but films exciting.', 'Ik vind series saai, maar films spannend.', ['leuk', 'want'], 'vinden + adjective.'),
    fix('Ik hou van lees.', ['Ik hou van lezen.', 'Ik lees graag.'], 'After houden van use the infinitive as a noun: lezen. Or: ik lees graag.'),
    tr('nl-en', 'Fietsen is populair in Nederland.', ['Cycling is popular in the Netherlands.'], 'populair = popular.'),
    tr('en-nl', 'the beach', ['het strand', 'strand'], 'het strand.'),
    dict('In mijn vrije tijd fotografeer ik de grachten.', 'In my free time I photograph the canals.', 'Inversion: fotografeer ik.'),
    listen('Mijn hobby’s zijn wandelen en koken.', ['My hobbies are walking and cooking.', 'My hobbies are dancing and cooking.', 'My hobbies are walking and drawing.'], 0, 'wandelen, koken.'),
    speak('In mijn vrije tijd sport ik en ik lees graag.', 'In my free time I exercise and I like reading.'),
    speak('Wat zijn je hobby’s?', 'What are your hobbies?'),
    match([['tekenen', 'to draw'], ['dansen', 'to dance'], ['winkelen', 'to go shopping'], ['het strand', 'beach'], ['saai', 'boring'], ['spannend', 'exciting']]),
    free('Talk about your free time: two hobbies, how often, and one thing you find boring.', 'In mijn vrije tijd fiets ik en ik fotografeer. Ik fiets elke dag en ik fotografeer in het weekend. Ik vind tv kijken saai.', 'In my free time I cycle and I take photos. I cycle every day and I photograph at the weekend. I find watching TV boring.', { hints: ['In mijn vrije tijd …', '… keer per week', 'Ik vind … saai'] }),
    auto(3, ['tr-en-nl', 'conj', 'listen']),
  ], [
    fill('Ik ___ graag in de natuur. (walk)', ['wandel'], 'I like walking in nature.', 'wandelen: ik wandel.'),
    fill('Het concert is ___. (exciting)', ['spannend'], 'The concert is exciting.', 'spannend.'),
    build('Do you like swimming?', 'Zwem je graag?', ['zwemt', 'houd'], 'zwem je graag.'),
    build('We go to the beach every summer.', 'Wij gaan elke zomer naar het strand.', ['op', 'de strand'], 'elke zomer; naar het strand.'),
    tr('en-nl', 'I find football boring.', ['Ik vind voetbal saai.'], 'vinden + saai.'),
    speak('Mijn hobby’s zijn fotograferen en koken.', 'My hobbies are photography and cooking.'),
  ]));

  u6.push(lesson('s1u6l3', 'Making plans and invitations', 'You can invite someone, accept or decline politely, and agree on a day and time.', [
    h('Inviting'),
    ex(['Zullen we zaterdag naar het strand gaan?', 'Shall we go to the beach on Saturday?'], ['Heb je zin om mee te gaan naar de bioscoop?', 'Do you feel like coming along to the cinema?'], ['Ik nodig je uit voor mijn verjaardag.', 'I am inviting you to my birthday.'], ['Kom je zaterdag langs?', 'Are you dropping by on Saturday?'], ['Ga je mee?', 'Are you coming along?']),
    h('Accepting and declining'),
    ex(['Leuk! Ik kom graag.', 'Nice! I would love to come.'], ['Ja, gezellig. Hoe laat?', 'Yes, lovely. What time?'], ['Helaas, ik kan niet. Ik heb het druk.', 'Unfortunately I can’t. I am busy.'], ['Jammer, zaterdag kan ik niet, maar zondag wel.', 'Pity, Saturday I can’t, but Sunday I can.'], ['Gefeliciteerd met je verjaardag!', 'Happy birthday!']),
    p('`wel` is the positive counterpart of niet: `Zaterdag niet, zondag wel.` `Heb je zin om …?` is followed by `te` + infinitive at the end: `Heb je zin om te komen?` Learn the pattern as a chunk; A2 explains it.'),
    p('Dutch people plan ahead: a birthday party is announced weeks earlier and the agenda is sacred. `Ik kijk even in mijn agenda` (Let me check my diary) is a normal answer.'),
    tip('At a Dutch birthday you congratulate everyone in the room, including the parents of the person: `Gefeliciteerd met je zoon!` Yes, really.'),
  ], ['g1-modals', 'g1-separable'], ['uitnodigen', 'meegaan', 'feestje', 'cadeau', 'heb-je-zin-om', 'het-druk-hebben', 'helaas', 'jammer', 'gefeliciteerd', 'bezoek', 'langskomen', 'afspreken', 'zullen', 'agenda'], [
    fill('___ we morgen afspreken?', ['Zullen'], 'Shall we meet tomorrow?', 'zullen we.'),
    fill('Heb je ___ om mee te gaan?', ['zin'], 'Do you feel like coming along?', 'zin hebben om te.'),
    fill('Ik nodig je ___ voor mijn feestje.', ['uit'], 'I am inviting you to my party.', 'uitnodigen: nodig … uit.'),
    fill('Ga je ___ naar het concert?', ['mee'], 'Are you coming along to the concert?', 'meegaan: ga … mee.'),
    fill('Helaas, ik ___ niet. Ik heb het druk.', ['kan'], 'Unfortunately I cannot. I am busy.', 'ik kan niet.'),
    fill('Zaterdag kan ik niet, maar zondag ___.', ['wel'], 'Saturday I cannot, but Sunday I can.', 'wel = the positive opposite of niet.'),
    mc('Someone says "Gefeliciteerd!" to you. It is …', ['your birthday or good news', 'a goodbye', 'an apology'], 0, 'gefeliciteerd = congratulations.'),
    mc('"Ik heb het druk" means …', ['I have it busy (it is crowded).', 'I am busy.', 'I have pressure.'], 1, 'het druk hebben = be busy.'),
    mc('Polite decline?', ['Nee.', 'Helaas, dan kan ik niet. Jammer!', 'Ik wil niet.'], 1, 'helaas + jammer = friendly no.'),
    build('Shall we go to the cinema on Friday?', 'Zullen we vrijdag naar de bioscoop gaan?', ['gaan we', 'zal'], 'zullen we + gaan at the end.'),
    build('Nice! I would love to come.', 'Leuk! Ik kom graag.', ['kom ik', 'wil'], 'ik kom graag.'),
    build('Are you dropping by tomorrow?', 'Kom je morgen langs?', ['komt', 'langskom'], 'kom … langs.'),
    build('I am inviting you to my birthday.', 'Ik nodig je uit voor mijn verjaardag.', ['uitnodig', 'op'], 'nodig … uit voor.'),
    build('Happy birthday!', 'Gefeliciteerd met je verjaardag!', ['gelukkig', 'op'], 'gefeliciteerd met.'),
    fix('Ik uitnodig je voor mijn feest.', ['Ik nodig je uit voor mijn feest.'], 'Separable: nodig … uit.'),
    fix('Ik heb druk deze week.', ['Ik heb het druk deze week.'], 'het druk hebben.'),
    tr('nl-en', 'Ik kijk even in mijn agenda.', ['Let me just check my diary.', 'I will just look in my diary.', 'I am just checking my calendar.', 'Let me check my agenda.'], 'agenda = diary/calendar; even softens.'),
    dict('Zullen we zaterdag om acht uur afspreken?', 'Shall we meet on Saturday at eight?', 'zullen we … afspreken.'),
    listen('Heb je zin om zondag mee te gaan naar het strand?', ['Do you feel like coming to the beach on Sunday?', 'Are you going to the beach on Saturday?', 'Do you want to stay home on Sunday?'], 0, 'zin om … mee te gaan; zondag; strand.'),
    read('Anna: Hoi Tom! Zaterdag ben ik jarig en ik geef een feestje. Heb je zin om te komen? Het begint om acht uur bij mij thuis.\nTom: Gefeliciteerd alvast! Leuk, ik kom graag. Zal ik iets meenemen?\nAnna: Nee hoor, alleen jezelf. Misschien iets te drinken.\nTom: Prima. Tot zaterdag!', [
      { q: 'When is the party?', options: ['Friday at eight', 'Saturday at eight', 'Sunday at seven'], answer: 1, explain: '"Zaterdag … om acht uur".' },
      { q: 'Where is it?', options: ['at a café', 'at Anna’s home', 'at Tom’s home'], answer: 1, explain: '"bij mij thuis" (Anna speaking).' },
      { q: 'What should Tom bring?', options: ['a present', 'only himself, maybe something to drink', 'food'], answer: 1, explain: '"alleen jezelf. Misschien iets te drinken."' },
    ], { en: 'Anna: Hi Tom! Saturday is my birthday and I am having a party. Do you feel like coming? It starts at eight at my place. Tom: Congratulations in advance! Nice, I would love to come. Shall I bring something? Anna: No, just yourself. Maybe something to drink. Tom: Great. See you Saturday!' }),
    speak('Zullen we zaterdag afspreken? Om acht uur bij mij thuis.', 'Shall we meet on Saturday? At eight at my place.'),
    speak('Helaas, zaterdag kan ik niet. Jammer!', 'Unfortunately I cannot on Saturday. Pity!'),
    free('Invite a friend to do something this weekend (say what, when and where). Then answer as the friend: accept or decline.', 'Zullen we zaterdag naar de markt gaan? Om tien uur bij het Centraal Station? — Leuk, ik ga mee!', 'Shall we go to the market on Saturday? At ten at Central Station? — Nice, I am coming along!', { hints: ['Zullen we …?', 'Heb je zin om …?', 'Leuk! / Helaas …'] }),
    auto(2, ['tr-en-nl', 'listen']),
  ], [
    fill('___ we vanavond samen eten?', ['Zullen'], 'Shall we eat together tonight?', 'zullen we.'),
    fill('Leuk! Ik kom ___.', ['graag'], 'Nice! I would love to come.', 'ik kom graag.'),
    build('Do you feel like coming along?', 'Heb je zin om mee te gaan?', ['wil', 'meegaan'], 'zin om mee te gaan.'),
    build('Unfortunately I am busy this week.', 'Helaas heb ik het druk deze week.', ['ik heb', 'druk het'], 'Inversion after helaas; het druk hebben.'),
    mc('"Ga je mee?" means …', ['Are you going?', 'Are you coming along?', 'Are you leaving?'], 1, 'meegaan.'),
    speak('Gefeliciteerd met je verjaardag!', 'Happy birthday!'),
  ]));

  u6.push(lesson('s1u6l4', 'Describing people', 'You can describe what people look like and what they are like, using adjectives with the right endings.', [
    h('Appearance'),
    table(['', ''], [['*Hij is lang / kort.', 'He is tall / short.'], ['*Zij heeft lang blond haar.', 'She has long blond hair.'], ['*Hij heeft bruine ogen en een baard.', 'He has brown eyes and a beard.'], ['*Zij draagt een bril.', 'She wears glasses.'], ['*Hij is jong / oud.', 'He is young / old.']]),
    p('`Hoe ziet hij eruit?` = What does he look like? Note `een bril` is singular in Dutch (a pair of glasses is one thing). `het haar` is the hair; `de ogen` are the eyes.'),
    h('Character'),
    table(['', '', '', ''], [['*aardig', 'kind', '*vriendelijk', 'friendly'], ['*grappig', 'funny', '*serieus', 'serious'], ['*slim', 'smart', '*sportief', 'sporty'], ['*rustig', 'calm', '*druk', 'busy / lively'], ['*gezellig', 'good company', '*saai', 'boring']]),
    p('Remember the adjective endings: `een aardige man` (de), `een grappig kind` (een + het), `de slimme vrouw`, `lange mensen`. After zijn no ending: `Hij is grappig.`'),
    ex(['Mijn zus is lang en heeft kort donker haar.', 'My sister is tall and has short dark hair.'], ['Mijn baas is serieus, maar eigenlijk heel aardig.', 'My boss is serious, but actually very kind.'], ['Wie is dat? — Die man met de bril en de baard? Dat is mijn oom.', 'Who is that? — That man with the glasses and the beard? That is my uncle.'], ['Nederlanders zijn de langste mensen van de wereld.', 'The Dutch are the tallest people in the world.']),
  ], ['g1-adjectives', 'g1-possessives'], ['vriendelijk', 'grappig', 'slim', 'sportief', 'kort', 'jong', 'haar-noun', 'oog', 'blond', 'bril', 'dragen', 'baard', 'serieus', 'lang', 'eruitzien', 'eigenlijk', 'aardig', 'oud', 'donker'], [
    fill('Zij heeft ___ haar. (long)', ['lang'], 'She has long hair.', 'No article + het haar: no -e.'),
    fill('Hij heeft ___ ogen. (brown)', ['bruine'], 'He has brown eyes.', 'Plural: -e.'),
    fill('Mijn oom draagt een ___.', ['bril'], 'My uncle wears glasses.', 'een bril: singular.'),
    fill('Dat is een ___ man. (funny)', ['grappige'], 'That is a funny man.', 'de man → grappige.'),
    fill('Dat is een ___ kind. (smart)', ['slim'], 'That is a smart child.', 'een + het kind: no -e.'),
    fill('Hoe ___ hij eruit?', ['ziet'], 'What does he look like?', 'eruitzien: ziet … eruit.'),
    mc('Which is correct?', ['de aardig buurvrouw', 'de aardige buurvrouw'], 1, 'de + adjective: -e.'),
    mc('"Hij is eigenlijk heel aardig" means …', ['He is finally very kind.', 'He is actually very kind.', 'He is only kind.'], 1, 'eigenlijk = actually.'),
    mc('"a pair of glasses" in Dutch is …', ['een brillen', 'een bril', 'twee brillen'], 1, 'Singular: een bril.'),
    build('My sister is tall and has blond hair.', 'Mijn zus is lang en heeft blond haar.', ['lange', 'blonde'], 'After zijn: lang (no -e); blond haar (het, no article).'),
    build('The tall man with the beard is my father.', 'De lange man met de baard is mijn vader.', ['lang', 'een'], 'de lange man.'),
    build('She is funny and very smart.', 'Zij is grappig en heel slim.', ['grappige', 'slimme'], 'After zijn no endings.'),
    build('Her brother has blue eyes.', 'Haar broer heeft blauwe ogen.', ['blauw', 'zijn'], 'blauwe ogen (plural).'),
    fix('Hij heeft kort haren.', ['Hij heeft kort haar.'], 'het haar is singular/uncountable here.'),
    fix('Mijn buurman is een aardig.', ['Mijn buurman is aardig.'], 'After zijn: just the adjective, no article.'),
    tr('nl-en', 'Mijn baas is serieus, maar eigenlijk heel vriendelijk.', ['My boss is serious, but actually very friendly.'], 'eigenlijk = actually.'),
    dict('Zij heeft lang donker haar en groene ogen.', 'She has long dark hair and green eyes.', 'lang donker haar (no -e), groene ogen (plural -e).'),
    listen('Die man met de bril en de baard is mijn oom.', ['That man with the glasses and the beard is my uncle.', 'That man with the hat and the beard is my brother.', 'That woman with the glasses is my aunt.'], 0, 'bril, baard, oom.'),
    speak('Mijn broer is lang, sportief en heel grappig.', 'My brother is tall, sporty and very funny.'),
    write('Describe a friend or family member: appearance (3 details) and character (2 adjectives).', ['Correct adjective endings before nouns', 'No ending after zijn', 'hebben for hair, eyes, beard, glasses', 'At least one sentence with "maar" or "en"'], 'Mijn vriendin Eva is niet zo lang. Zij heeft kort blond haar en blauwe ogen, en zij draagt een bril. Zij is heel slim en grappig, maar soms een beetje druk.', { modelEn: 'My friend Eva is not that tall. She has short blond hair and blue eyes, and she wears glasses. She is very smart and funny, but sometimes a bit lively.' }),
    free('Describe someone in your family: what they look like and what they are like.', 'Mijn vader is oud en niet zo lang. Hij heeft grijs haar en een baard. Hij is rustig en heel aardig.', 'My father is old and not so tall. He has grey hair and a beard. He is calm and very kind.', { hints: ['Hij/zij heeft … haar', 'Hij/zij is …', 'draagt een bril'] }),
    auto(3, ['tr-en-nl', 'listen', 'mc-meaning']),
  ], [
    fill('Mijn oma heeft ___ haar. (grey)', ['grijs'], 'My grandma has grey hair.', 'No article + het haar: grijs.'),
    fill('Zij is een ___ vrouw. (kind)', ['aardige'], 'She is a kind woman.', 'de vrouw: aardige.'),
    build('What does she look like?', 'Hoe ziet zij eruit?', ['kijkt', 'uit'], 'ziet … eruit.'),
    build('He is young, sporty and a bit serious.', 'Hij is jong, sportief en een beetje serieus.', ['jonge', 'serieuze'], 'After zijn: no endings.'),
    mc('Correct?', ['een grappige meisje', 'een grappig meisje'], 1, 'een + het meisje: no -e.'),
    speak('Mijn moeder is klein en heeft kort grijs haar.', 'My mother is small and has short grey hair.'),
  ]));

  units.push(unit('s1u6', 'Dagelijks leven', 'daily life', u6));
})();
