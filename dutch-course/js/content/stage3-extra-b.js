/* Stage 3 (B1) — extra lessons for Unit 3 (Onderwijs) and Unit 4 (Gezondheid en levensstijl): lessons 3 to 5 of each unit.
   Loaded after stage3-extra-a.js; lessons are appended to the existing units. */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson } = A;
  const addTo = (unitId, l) => { const f = A.findUnit(unitId); if (f) f.unit.lessons.push(l); };
  const S = { stage: 3 };

  /* ================= Unit 3, lesson 3: parents' evening ================= */
  N('ouderavond', 'de', 'ouderavonden', 'parents’ evening', 'Volgende week is er ouderavond.', 'Next week there is a parents’ evening.', { theme: 'education', ...S });
  N('tienminutengesprek', 'het', 'tienminutengesprekken', 'ten-minute parent-teacher talk', 'Het tienminutengesprek is om kwart over zeven.', 'The ten-minute talk is at quarter past seven.', { theme: 'education', ...S });
  N('rapport', 'het', 'rapporten', 'school report', 'Haar rapport was heel goed.', 'Her school report was very good.', { theme: 'education', ...S });
  N('juf', 'de', 'juffen', 'female primary teacher', 'De juf van groep vijf is heel aardig.', 'The teacher of year five is very nice.', { theme: 'education', ...S });
  N('meester', 'de', 'meesters', 'male primary teacher', 'Meester Tom geeft gym.', 'Mr Tom teaches PE.', { theme: 'education', ...S });
  N('groep', 'de', 'groepen', 'year group / group', 'Mijn zoon zit in groep zes.', 'My son is in year six.', { theme: 'education', ...S });
  N('schooladvies', 'het', 'schooladviezen', 'secondary school recommendation', 'In groep acht krijg je een schooladvies.', 'In year eight you get a school recommendation.', { theme: 'education', ...S });
  N('achterstand', 'de', 'achterstanden', 'delay / being behind', 'Hij heeft een achterstand met lezen.', 'He is behind with reading.', { theme: 'education', ...S });
  N('voorsprong', 'de', null, 'lead / being ahead', 'Ze heeft een voorsprong met rekenen.', 'She is ahead in arithmetic.', { theme: 'education', ...S });
  N('gedrag', 'het', null, 'behaviour', 'Zijn gedrag in de klas is prima.', 'His behaviour in class is fine.', { theme: 'education', ...S });
  N('pesten', 'het', null, 'bullying', 'De school heeft een protocol tegen pesten.', 'The school has a protocol against bullying.', { theme: 'education', ...S });
  N('opvang', 'de', null, 'childcare / after-school care', 'Na school gaat ze naar de opvang.', 'After school she goes to after-school care.', { theme: 'education', ...S });
  VB('zich zorgen maken over', 'to worry about', 'maak me zorgen over|maakt zich zorgen over|maken ons zorgen over', 'maakte me zorgen over|maakten ons zorgen over', 'zorgen gemaakt over', 'hebben', 'Ik maak me zorgen over zijn cijfers.', 'I am worried about his grades.', { theme: 'education', ...S, id: 'zich-zorgen-maken-over' });
  VB('vooruitgaan', 'to make progress', 'ga vooruit|gaat vooruit|gaan vooruit', 'ging vooruit|gingen vooruit', 'vooruitgegaan', 'zijn', 'Ze is erg vooruitgegaan met lezen.', 'She has made a lot of progress with reading.', { theme: 'education', ...S });
  VB('opletten', 'to pay attention', 'let op|let op|letten op', 'lette op|letten op', 'opgelet', 'hebben', 'Hij let niet goed op in de les.', 'He does not pay attention in class.', { theme: 'education', ...S });
  VB('begeleiden', 'to guide / support', 'begeleid|begeleidt|begeleiden', 'begeleidde|begeleidden', 'begeleid', 'hebben', 'De school begeleidt kinderen met een taalachterstand.', 'The school supports children with a language delay.', { theme: 'education', ...S });
  W('zelfstandig', 'independent(ly)', 'adj', 'Ze werkt al heel zelfstandig.', 'She already works very independently.', { theme: 'education', ...S });
  W('thuis', 'at home', 'adv', 'Thuis spreken we Engels.', 'At home we speak English.', { theme: 'basics', ...S });

  addTo('s3u3', lesson('s3u3l3', 'Parents’ evening: talking to a teacher', 'You can have a ten-minute talk with a teacher: ask how your child is doing, understand the answers, raise a worry and agree on what to do.', [
    h('How Dutch primary school works'),
    p('Eight `groepen` (groep 1 at age four to groep 8 at twelve). Teachers are `juf` and `meester` plus first name. Twice a year there is a `rapport` and a `tienminutengesprek`. In groep 8 the school gives a `schooladvies` (vmbo, havo or vwo), which matters more than any test. Parents are expected to come, ask questions, and say what they think.'),
    h('Questions to ask'),
    table(['Dutch', 'English'], [['*Hoe gaat het met haar in de klas?', 'How is she doing in class?'], ['*Waar is hij goed in, en waar heeft hij moeite mee?', 'What is he good at, and what does he find hard?'], ['*Heeft ze een achterstand met taal?', 'Is she behind in language?'], ['*Hoe gaat het met vriendjes?', 'How is it going with friends?'], ['*Wat kunnen wij thuis doen?', 'What can we do at home?'], ['*Waar maakt u zich zorgen over?', 'What are you worried about?']]),
    h('What the teacher may say'),
    p('`Ze gaat goed vooruit.` `Hij heeft moeite met begrijpend lezen.` `Ze let niet altijd op.` `Hij werkt zelfstandig.` `We begeleiden haar extra met spelling.` `Thuis veel voorlezen helpt.` `Daar maak ik me geen zorgen over.`'),
    h('Grammar in action: waar … mee / over'),
    p('`Waar heeft hij moeite **mee**?` `Waar maakt u zich zorgen **over**?` `Daar is ze goed **in**.` `Ik maak me **er** geen zorgen **over**.` The preposition belongs to the expression: `moeite hebben met`, `goed zijn in`, `zich zorgen maken over`.'),
    ex(['Hoe gaat het met Noor in de klas? — Heel goed, ze is erg vooruitgegaan met lezen.', 'How is Noor doing in class? — Very well, she has made a lot of progress with reading.'], ['Waar heeft ze nog moeite mee? — Met rekenen, vooral met breuken.', 'What does she still find hard? — Arithmetic, especially fractions.'], ['Thuis spreken we Engels. Is dat een probleem? — Nee hoor, zolang ze op school veel Nederlands hoort.', 'At home we speak English. Is that a problem? — Not at all, as long as she hears a lot of Dutch at school.'], ['Ik maak me zorgen over het pesten. Wat doet de school daaraan?', 'I am worried about the bullying. What is the school doing about it?']),
    tip('Bring two questions on paper. Ten minutes go fast, and Dutch teachers expect you to steer the conversation too.'),
  ], ['g3-pronominal-adverbs', 'g3-indirect-speech'], ['ouderavond', 'tienminutengesprek', 'rapport', 'juf', 'meester', 'groep', 'schooladvies', 'achterstand', 'voorsprong', 'gedrag', 'pesten', 'opvang', 'zich-zorgen-maken-over', 'vooruitgaan', 'opletten', 'begeleiden', 'zelfstandig', 'thuis'], [
    mc('In which groep does a child get the schooladvies?', ['groep 6', 'groep 8', 'groep 1'], 1, 'Groep 8, the last year of primary school.'),
    mc('"Waar heeft hij moeite ___?"', ['mee', 'over', 'in'], 0, 'moeite hebben met → waar … mee.'),
    mc('"Daar is ze goed ___."', ['mee', 'in', 'aan'], 1, 'goed zijn in.'),
    mc('"Waar maakt u zich zorgen ___?"', ['over', 'mee', 'op'], 0, 'zich zorgen maken over.'),
    mc('"Ze is erg vooruitgegaan" means', ['she went ahead and left', 'she has made a lot of progress', 'she is ahead of the class'], 1, 'vooruitgaan = progress.'),
    art('rapport', 'het', 'het rapport.'),
    art('schooladvies', 'het', 'het advies → het schooladvies.'),
    art('achterstand', 'de', 'de achterstand.'),
    fill('Hij let niet goed ___ in de les.', ['op'], 'He does not pay attention in class.', 'opletten: let … op.'),
    fill('Ik maak me zorgen ___ zijn cijfers.', ['over'], 'I am worried about his grades.', 'zorgen maken over.'),
    fill('Ze is erg ___ met lezen. (vooruitgaan)', ['vooruitgegaan'], 'She has made a lot of progress with reading.', 'vooruit + gegaan, with zijn.'),
    fill('De school ___ kinderen met een taalachterstand. (begeleiden)', ['begeleidt'], 'The school supports children with a language delay.', 'stem begeleid + t.'),
    build('What can we do at home?', 'Wat kunnen wij thuis doen?', ['doen thuis', 'kan'], 'kunnen … doen.'),
    build('What does she still find hard?', 'Waar heeft ze nog moeite mee?', ['Wat', 'met'], 'waar … mee.'),
    build('I am not worried about that.', 'Daar maak ik me geen zorgen over.', ['ik maak', 'niet'], 'daar … over; geen zorgen.'),
    tr('en-nl', 'How is he doing in class?', ['Hoe gaat het met hem in de klas?'], 'hoe gaat het met.'),
    tr('nl-en', 'De juf zei dat hij zelfstandig werkt, maar niet altijd oplet.', ['The teacher said that he works independently, but does not always pay attention.'], 'zei dat …; oplet at the end.'),
    fix('Wat heeft ze moeite met?', ['Waar heeft ze moeite mee?'], 'waar … mee.'),
    dict('Waar is hij goed in, en waar heeft hij moeite mee?', 'What is he good at, and what does he find hard?', 'goed in; moeite mee.'),
    listen('Uw dochter gaat goed vooruit, maar met begrijpend lezen heeft ze nog wat moeite.', ['Your daughter is making good progress, but she still finds reading comprehension a bit hard.', 'Your daughter is behind in everything.', 'Your daughter reads very well but is bad at maths.'], 0, 'gaat vooruit; moeite met begrijpend lezen.'),
    speak('Thuis spreken we Engels. Wat kunnen wij doen om haar met Nederlands te helpen?', 'At home we speak English. What can we do to help her with Dutch?'),
    free('Role play a tienminutengesprek: ask how your child is doing, raise one worry, and ask what you can do at home.', 'Goedenavond. Hoe gaat het met Sam in de klas? Ik maak me een beetje zorgen over zijn spelling, want thuis spreken we geen Nederlands. Waar heeft hij het meeste moeite mee, en wat kunnen wij thuis doen?', 'Good evening. How is Sam doing in class? I am a little worried about his spelling, because we do not speak Dutch at home. What does he find hardest, and what can we do at home?', { hints: ['Hoe gaat het met …?', 'Ik maak me zorgen over …', 'Wat kunnen wij thuis doen?'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"De juf" is', ['a female primary teacher', 'a school report', 'a school subject'], 0, 'juf / meester.'),
    fill('Waar is ze goed ___?', ['in'], 'What is she good at?', 'goed zijn in.'),
    fill('Hij heeft een ___ met lezen. (is behind)', ['achterstand'], 'He is behind with reading.', 'achterstand.'),
    build('What are you worried about?', 'Waar maakt u zich zorgen over?', ['Wat', 'op'], 'waar … over.'),
    tr('en-nl', 'She works very independently.', ['Ze werkt heel zelfstandig.', 'Zij werkt heel zelfstandig.'], 'zelfstandig.'),
    speak('Ik maak me geen zorgen over zijn cijfers, maar wel over het pesten.', 'I am not worried about his grades, but I am about the bullying.'),
  ]));

  /* ================= Unit 3, lesson 4: adult education and the inburgering exam ================= */
  N('inburgeringsexamen', 'het', 'inburgeringsexamens', 'civic integration exam', 'Het inburgeringsexamen bestaat uit meerdere onderdelen.', 'The civic integration exam consists of several parts.', { theme: 'exam', ...S });
  N('taalschool', 'de', 'taalscholen', 'language school', 'Ik heb me ingeschreven bij een taalschool.', 'I registered at a language school.', { theme: 'education', ...S });
  N('niveau', 'het', 'niveaus', 'level', 'Welk niveau heb je nodig?', 'Which level do you need?', { theme: 'education', ...S });
  N('taaltoets', 'de', 'taaltoetsen', 'language test', 'Voor de opleiding moet je een taaltoets doen.', 'For the course you have to take a language test.', { theme: 'exam', ...S });
  N('onderdeel', 'het', 'onderdelen', 'part / component', 'Spreken is het moeilijkste onderdeel.', 'Speaking is the hardest part.', { theme: 'exam', ...S });
  N('uitslag', 'de', 'uitslagen', 'result', 'De uitslag komt binnen acht weken.', 'The result comes within eight weeks.', { theme: 'exam', ...S });
  N('herkansing', 'de', 'herkansingen', 'resit', 'Als je zakt, mag je een herkansing doen.', 'If you fail, you may do a resit.', { theme: 'exam', ...S });
  N('vrijstelling', 'de', 'vrijstellingen', 'exemption', 'Met een Nederlands diploma krijg je vrijstelling.', 'With a Dutch diploma you get an exemption.', { theme: 'exam', ...S });
  N('participatieverklaring', 'de', 'participatieverklaringen', 'participation statement', 'Bij de inburgering hoort een participatieverklaring.', 'Civic integration includes a participation statement.', { theme: 'exam', ...S });
  N('kennis van de Nederlandse maatschappij', 'de', null, 'Knowledge of Dutch Society (exam part)', 'KNM gaat over wonen, werk, zorg en geschiedenis.', 'KNM is about housing, work, care and history.', { theme: 'exam', ...S, id: 'knm', altNl: ['KNM'] });
  N('vaardigheid', 'de', 'vaardigheden', 'skill', 'De vier vaardigheden zijn lezen, luisteren, schrijven en spreken.', 'The four skills are reading, listening, writing and speaking.', { theme: 'exam', ...S });
  VB('zich aanmelden voor', 'to register for', 'meld me aan voor|meldt zich aan voor|melden ons aan voor', 'meldde me aan voor|meldden ons aan voor', 'aangemeld voor', 'hebben', 'Ik heb me aangemeld voor het examen van juni.', 'I registered for the June exam.', { theme: 'exam', ...S, id: 'zich-aanmelden-voor' });
  VB('voldoen aan', 'to meet (a requirement)', 'voldoe aan|voldoet aan|voldoen aan', 'voldeed aan|voldeden aan', 'voldaan aan', 'hebben', 'Je moet binnen drie jaar aan de inburgeringsplicht voldoen.', 'You must meet the integration requirement within three years.', { theme: 'exam', ...S, id: 'voldoen-aan' });
  VB('herkansen', 'to resit', 'herkans|herkanst|herkansen', 'herkanste|herkansten', 'herkanst', 'hebben', 'Ik moet het onderdeel schrijven herkansen.', 'I have to resit the writing part.', { theme: 'exam', ...S });
  VB('oefenen', 'to practise', 'oefen|oefent|oefenen', 'oefende|oefenden', 'geoefend', 'hebben', 'Oefen met oude examens.', 'Practise with old exams.', { theme: 'exam', ...S });
  W('verplicht', 'compulsory', 'adj', 'Inburgeren is voor veel nieuwkomers verplicht.', 'Civic integration is compulsory for many newcomers.', { theme: 'exam', ...S });
  W('vrijwillig', 'voluntary', 'adj', 'EU-burgers kunnen vrijwillig inburgeren.', 'EU citizens can integrate voluntarily.', { theme: 'exam', ...S });
  W('schriftelijk', 'written', 'adj', 'Het schriftelijke deel duurt een uur.', 'The written part takes an hour.', { theme: 'exam', ...S });
  W('mondeling', 'oral', 'adj', 'Het mondelinge examen is op de computer.', 'The oral exam is on the computer.', { theme: 'exam', ...S });

  addTo('s3u3', lesson('s3u3l4', 'Adult education and the language exams', 'You can find your way around Dutch courses and exams for adults, understand exam instructions, and do typical B1 exam tasks.', [
    h('Which exam is for whom?'),
    table(['exam', 'level', 'for'], [['*inburgeringsexamen', 'A2 to B1', 'newcomers with an integration requirement; also voluntary'], ['*Staatsexamen NT2 Programma I', 'B1', 'vocational education (mbo) and work'], ['*Staatsexamen NT2 Programma II', 'B2', 'higher education (hbo, university)'], ['*taaltoets van een opleiding', 'varies', 'entry to one specific course']]),
    p('Rules change regularly; check the current requirements with DUO or your gemeente. EU citizens are not obliged to integrate but may take the exams. With certain Dutch diplomas you get a `vrijstelling`.'),
    h('Exam language'),
    table(['Dutch', 'English'], [['*Lees eerst de vraag, dan de tekst.', 'Read the question first, then the text.'], ['*Kies het juiste antwoord.', 'Choose the right answer.'], ['*U hoort het fragment één keer.', 'You hear the fragment once.'], ['*Schrijf een e-mail van ongeveer 60 woorden.', 'Write an email of about 60 words.'], ['*U heeft 30 seconden om te antwoorden.', 'You have 30 seconds to answer.'], ['*Beantwoord alle vragen.', 'Answer all the questions.'], ['*Let op de tijd.', 'Watch the time.']]),
    h('Typical B1 tasks'),
    list('**Spreken**: react to a situation (complain, ask, advise), describe pictures, give an opinion with a reason.', '**Schrijven**: a short email or form, a note to a neighbour, a message to a teacher.', '**Lezen / luisteren**: notices, letters from the gemeente, instructions, short news.', 'The situations are everyday: doctor, school, work, neighbours, shops, gemeente.'),
    ex(['Ik heb me aangemeld voor het onderdeel spreken in juni.', 'I registered for the speaking part in June.'], ['Als je zakt voor een onderdeel, hoef je alleen dat onderdeel te herkansen.', 'If you fail one part, you only have to resit that part.'], ['De uitslag komt binnen acht weken per post.', 'The result comes by post within eight weeks.'], ['Oefen met oude examens en let vooral op de tijd.', 'Practise with old exams and watch the time above all.']),
    tip('Exam speaking tasks reward a clear, complete answer more than perfect grammar: say who you are, what the problem is, and what you want.'),
  ], ['g3-register', 'g3-infinitive'], ['inburgeringsexamen', 'taalschool', 'niveau', 'taaltoets', 'onderdeel', 'uitslag', 'herkansing', 'vrijstelling', 'participatieverklaring', 'knm', 'vaardigheid', 'zich-aanmelden-voor', 'voldoen-aan', 'herkansen', 'oefenen', 'verplicht', 'vrijwillig', 'schriftelijk', 'mondeling'], [
    mc('Which exam gives access to university?', ['inburgeringsexamen', 'Staatsexamen NT2 Programma II', 'KNM'], 1, 'Programma II = B2.'),
    mc('"U hoort het fragment één keer" means', ['you may listen as often as you like', 'you hear the fragment once', 'you read the fragment once'], 1, 'één keer.'),
    mc('"Een herkansing" is', ['an exemption', 'a resit', 'a result'], 1, 'herkansen = resit.'),
    mc('"Vrijstelling" means', ['exemption', 'free time', 'a free place'], 0, 'Exemption.'),
    mc('"Mondeling" is the opposite of', ['schriftelijk', 'verplicht', 'vrijwillig'], 0, 'oral vs written.'),
    art('niveau', 'het', 'het niveau.'),
    art('onderdeel', 'het', 'het onderdeel.'),
    art('uitslag', 'de', 'de uitslag.'),
    plural('het onderdeel', ['onderdelen'], 'deel → delen.'),
    fill('Ik heb me ___ voor het examen van juni. (aanmelden)', ['aangemeld'], 'I registered for the June exam.', 'aan + ge + meld.'),
    fill('De ___ komt binnen acht weken. (result)', ['uitslag'], 'The result comes within eight weeks.', 'de uitslag.'),
    fill('Als je zakt, mag je een ___ doen.', ['herkansing'], 'If you fail, you may do a resit.', 'herkansing.'),
    fill('Je hoeft alleen dat onderdeel ___ herkansen.', ['te'], 'You only have to resit that part.', 'hoeven + te.'),
    build('Read the question first, then the text.', 'Lees eerst de vraag, dan de tekst.', ['leest', 'eerste'], 'Imperative: lees.'),
    build('You must meet the requirement within three years.', 'Je moet binnen drie jaar aan de eis voldoen.', ['voldoet', 'voor'], 'voldoen aan; infinitive at the end.'),
    build('Speaking is the hardest part.', 'Spreken is het moeilijkste onderdeel.', ['de', 'moeilijkst'], 'het onderdeel; superlative + e.'),
    tr('en-nl', 'Which level do you need?', ['Welk niveau heb je nodig?', 'Welk niveau heeft u nodig?'], 'het niveau → welk.'),
    tr('nl-en', 'Met een Nederlands diploma krijg je vrijstelling.', ['With a Dutch diploma you get an exemption.'], 'vrijstelling.'),
    dict('Oefen met oude examens en let vooral op de tijd.', 'Practise with old exams and watch the time above all.', 'let … op.'),
    listen('U heeft dertig seconden om te antwoorden. Begin met spreken na de piep.', ['You have thirty seconds to answer. Start speaking after the beep.', 'You have thirty minutes. Start writing.', 'You may answer after thirty seconds.'], 0, 'dertig seconden; na de piep.'),
    speak('Ik heb me aangemeld voor het staatsexamen, want ik wil volgend jaar een opleiding gaan doen.', 'I have registered for the state exam, because I want to start a course next year.'),
    free('Exam-style speaking task (30 seconds): your exam date clashes with a hospital appointment. Phone the exam office, explain, and ask what is possible.', 'Goedemorgen, met Sam Taylor. Ik heb op 12 juni het onderdeel spreken, maar ik heb die dag een afspraak in het ziekenhuis die ik niet kan verzetten. Is het mogelijk om het examen op een andere dag te doen? En moet ik daarvoor iets opsturen?', 'Good morning, Sam Taylor speaking. I have the speaking part on 12 June, but I have a hospital appointment that day which I cannot move. Is it possible to take the exam on another day? And do I have to send anything for that?', { hints: ['Ik heb op … het onderdeel …', 'Is het mogelijk om …?', 'Moet ik … opsturen?'] }),
    write('Exam-style writing task (about 60 words): email your language school. You will miss two lessons because of work. Say which lessons, why, and ask how you can catch up.', ['Beste … + closing with name', 'Which two lessons (dates or days)', 'The reason in one sentence', 'A question about catching up (inhalen)', 'Polite: zou, graag, alvast bedankt'], 'Beste mevrouw Jansen, helaas kan ik dinsdag 4 en donderdag 6 maart niet naar de les komen, omdat ik die week voor mijn werk in Brussel ben. Zou u mij kunnen laten weten wat ik mis en hoe ik de lessen kan inhalen? Ik maak het huiswerk graag thuis. Alvast bedankt. Met vriendelijke groet, Sam Taylor'),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"Verplicht" is the opposite of', ['vrijwillig', 'schriftelijk'], 0, 'compulsory vs voluntary.'),
    fill('Spreken is een ___ onderdeel. (oral)', ['mondeling'], 'Speaking is an oral part.', 'het onderdeel + een → no -e.'),
    fill('Kies het juiste ___.', ['antwoord'], 'Choose the right answer.', 'antwoord.'),
    build('The result comes by post.', 'De uitslag komt per post.', ['met', 'het'], 'per post.'),
    tr('en-nl', 'I have to resit the writing part.', ['Ik moet het onderdeel schrijven herkansen.'], 'herkansen.'),
    speak('Als je zakt voor één onderdeel, hoef je alleen dat onderdeel te herkansen.', 'If you fail one part, you only have to resit that part.'),
  ]));

  /* ================= Unit 3, lesson 5: study skills ================= */
  N('aantekening', 'de', 'aantekeningen', 'note', 'Ik maak aantekeningen tijdens de les.', 'I take notes during class.', { theme: 'study', ...S });
  N('hoofdstuk', 'het', 'hoofdstukken', 'chapter', 'We behandelen hoofdstuk vier.', 'We are covering chapter four.', { theme: 'study', ...S });
  N('woordenlijst', 'de', 'woordenlijsten', 'word list', 'Achterin staat een woordenlijst.', 'There is a word list at the back.', { theme: 'study', ...S });
  N('woordenboek', 'het', 'woordenboeken', 'dictionary', 'Zoek het op in het woordenboek.', 'Look it up in the dictionary.', { theme: 'study', ...S });
  N('planning', 'de', 'planningen', 'schedule', 'Maak een planning voor de hele week.', 'Make a schedule for the whole week.', { theme: 'study', ...S });
  N('doel', 'het', 'doelen', 'goal', 'Stel een haalbaar doel.', 'Set a feasible goal.', { theme: 'study', ...S });
  N('geheugen', 'het', null, 'memory', 'Herhalen is goed voor je geheugen.', 'Repeating is good for your memory.', { theme: 'study', ...S });
  N('fout', 'de', 'fouten', 'mistake', 'Van fouten leer je.', 'You learn from mistakes.', { theme: 'study', ...S });
  N('uitleg', 'de', null, 'explanation', 'De uitleg was duidelijk.', 'The explanation was clear.', { theme: 'study', ...S });
  N('samenvatting', 'de', 'samenvattingen', 'summary', 'Maak een samenvatting van elk hoofdstuk.', 'Make a summary of every chapter.', { theme: 'study', ...S });
  VB('herhalen', 'to repeat / revise', 'herhaal|herhaalt|herhalen', 'herhaalde|herhaalden', 'herhaald', 'hebben', 'Herhaal de woorden na een dag, een week en een maand.', 'Revise the words after a day, a week and a month.', { theme: 'study', ...S });
  VB('onthouden', 'to remember (retain)', 'onthoud|onthoudt|onthouden', 'onthield|onthielden', 'onthouden', 'hebben', 'Ik kan de-woorden en het-woorden moeilijk onthouden.', 'I find it hard to remember de and het words.', { theme: 'study', ...S });
  VB('opzoeken', 'to look up', 'zoek op|zoekt op|zoeken op', 'zocht op|zochten op', 'opgezocht', 'hebben', 'Zoek onbekende woorden pas op als je ze echt nodig hebt.', 'Only look up unknown words when you really need them.', { theme: 'study', ...S });
  VB('overhoren', 'to quiz / test', 'overhoor|overhoort|overhoren', 'overhoorde|overhoorden', 'overhoord', 'hebben', 'Kun je me even overhoren?', 'Can you quiz me?', { theme: 'study', ...S });
  VB('uitstellen', 'to put off', 'stel uit|stelt uit|stellen uit', 'stelde uit|stelden uit', 'uitgesteld', 'hebben', 'Stel het leren niet uit tot de avond ervoor.', 'Do not put off studying until the evening before.', { theme: 'study', ...S });
  VB('zich concentreren', 'to concentrate', 'concentreer me|concentreert zich|concentreren ons', 'concentreerde me|concentreerden ons', 'geconcentreerd', 'hebben', 'Met mijn telefoon naast me kan ik me niet concentreren.', 'With my phone next to me I cannot concentrate.', { theme: 'study', ...S, id: 'zich-concentreren' });
  VB('raden', 'to guess', 'raad|raadt|raden', 'raadde|raadden', 'geraden', 'hebben', 'Probeer de betekenis te raden uit de zin.', 'Try to guess the meaning from the sentence.', { theme: 'study', ...S });
  W('uit je hoofd', 'by heart', 'adv', 'Ik ken de onregelmatige werkwoorden uit mijn hoofd.', 'I know the irregular verbs by heart.', { theme: 'study', ...S, id: 'uit-je-hoofd' });
  W('stap voor stap', 'step by step', 'adv', 'Leer de grammatica stap voor stap.', 'Learn the grammar step by step.', { theme: 'study', ...S, id: 'stap-voor-stap' });

  addTo('s3u3', lesson('s3u3l5', 'Learning how to learn: study skills in Dutch', 'You can talk about how you study, give and follow study advice, and use the vocabulary of notes, planning, revising and memory.', [
    h('What works, in Dutch'),
    list('**Herhalen met tussenpozen**: `Herhaal nieuwe woorden na een dag, een week en een maand.` That is exactly what this course’s review does.', '**Actief ophalen**: `Laat je overhoren` or test yourself; rereading feels good but teaches little.', '**Raden uit de context**: `Probeer de betekenis eerst te raden.` Look up only what blocks you.', '**Kleine doelen**: `Stel een haalbaar doel: elke dag een kwartier.`', '**Fouten bijhouden**: `Schrijf je vaste fouten op en controleer ze.`', '**Niet uitstellen**: `Een kwartier vandaag is beter dan twee uur zondag.`'),
    h('Useful chunks'),
    table(['Dutch', 'English'], [['*aantekeningen maken', 'to take notes'], ['*iets uit je hoofd leren', 'to learn something by heart'], ['*een planning maken', 'to make a schedule'], ['*iets opzoeken', 'to look something up'], ['*iemand overhoren', 'to quiz someone'], ['*je concentreren op', 'to concentrate on'], ['*iets onthouden', 'to remember, retain something'], ['*stap voor stap', 'step by step']]),
    p('`onthouden` (keep in memory) is not `zich herinneren` (recall a memory): `Ik kan namen slecht onthouden.` vs `Ik herinner me zijn naam niet meer.`'),
    h('Grammar in action: infinitives with te'),
    p('`Probeer … te raden.` `Vergeet niet te herhalen.` `Het helpt om hardop te lezen.` `Je hoeft niet alles op te zoeken.` But: `Laat je overhoren.` `Blijf oefenen.`'),
    ex(['Ik maak aantekeningen in het Nederlands, ook als dat langzamer gaat.', 'I take notes in Dutch, even if that goes more slowly.'], ['Probeer de betekenis eerst te raden; zoek het woord pas daarna op.', 'Try to guess the meaning first; only then look the word up.'], ['Het helpt om jezelf te overhoren in plaats van de tekst opnieuw te lezen.', 'It helps to quiz yourself instead of rereading the text.'], ['Stel het niet uit: een kwartier per dag is genoeg, als je het maar volhoudt.', 'Do not put it off: a quarter of an hour a day is enough, as long as you keep it up.']),
    tip('Make your error log in Dutch: `Fout: …  Goed: …  Regel: …`. Writing the rule in your own words is itself practice.'),
  ], ['g3-infinitive'], ['aantekening', 'hoofdstuk', 'woordenlijst', 'woordenboek', 'planning', 'doel', 'geheugen', 'fout', 'uitleg', 'samenvatting', 'herhalen', 'onthouden', 'opzoeken', 'overhoren', 'uitstellen', 'zich-concentreren', 'raden', 'uit-je-hoofd', 'stap-voor-stap'], [
    mc('"Aantekeningen maken" means', ['to make mistakes', 'to take notes', 'to draw'], 1, 'aantekeningen = notes.'),
    mc('"Ik kan namen slecht ___." (retain)', ['herinneren', 'onthouden', 'opzoeken'], 1, 'onthouden = keep in memory.'),
    mc('"Ik ___ me zijn naam niet meer." (recall)', ['onthoud', 'herinner', 'overhoor'], 1, 'zich herinneren.'),
    mc('Probeer de betekenis ___.', ['raden', 'te raden', 'om raden'], 1, 'proberen + te.'),
    mc('Laat je ___.', ['overhoren', 'te overhoren', 'overhoord'], 0, 'laten: no te.'),
    art('hoofdstuk', 'het', 'het hoofdstuk.'),
    art('woordenboek', 'het', 'het boek → het woordenboek.'),
    art('doel', 'het', 'het doel.'),
    plural('het hoofdstuk', ['hoofdstukken'], 'Short u: double k.'),
    fill('Ik ken de onregelmatige werkwoorden uit mijn ___.', ['hoofd'], 'I know the irregular verbs by heart.', 'uit je hoofd.'),
    fill('Zoek het woord ___ in het woordenboek. (look up)', ['op'], 'Look the word up in the dictionary.', 'opzoeken: zoek … op.'),
    fill('Stel het leren niet ___ tot morgen.', ['uit'], 'Do not put off studying until tomorrow.', 'uitstellen.'),
    fill('Met mijn telefoon naast me kan ik ___ niet concentreren.', ['me', 'mij'], 'With my phone next to me I cannot concentrate.', 'zich concentreren: me.'),
    build('It helps to read aloud.', 'Het helpt om hardop te lezen.', ['lezen te', 'voor'], 'om … te lezen.'),
    build('Can you quiz me?', 'Kun je me even overhoren?', ['overhoort', 'mij te'], 'kun je … overhoren.'),
    build('You do not have to look everything up.', 'Je hoeft niet alles op te zoeken.', ['opzoeken te', 'moet'], 'hoeft niet … op te zoeken.'),
    build('Revise the words after a day and after a week.', 'Herhaal de woorden na een dag en na een week.', ['herhaalt', 'over'], 'Imperative: herhaal.'),
    tr('en-nl', 'You learn from mistakes.', ['Van fouten leer je.', 'Je leert van fouten.'], 'leren van.'),
    tr('nl-en', 'Een kwartier vandaag is beter dan twee uur zondag.', ['A quarter of an hour today is better than two hours on Sunday.'], 'beter dan.'),
    fix('Ik probeer elke dag herhalen.', ['Ik probeer elke dag te herhalen.'], 'proberen + te.'),
    dict('Probeer de betekenis eerst te raden; zoek het woord pas daarna op.', 'Try to guess the meaning first; only then look the word up.', 'te raden; zoek … op.'),
    listen('Het helpt om jezelf te overhoren in plaats van de tekst opnieuw te lezen.', ['It helps to quiz yourself instead of rereading the text.', 'Rereading the text is the best method.', 'You should never test yourself.'], 0, 'in plaats van … te lezen.'),
    speak('Ik maak aantekeningen, ik herhaal de woorden elke dag en ik laat me één keer per week overhoren.', 'I take notes, I revise the words every day and I have myself quizzed once a week.'),
    free('Describe how you study Dutch and give one piece of advice to a new learner.', 'Ik leer elke ochtend een kwartier, want dan kan ik me het beste concentreren. Ik schrijf mijn vaste fouten op en herhaal ze op zondag. Mijn advies: stel het niet uit en probeer zo veel mogelijk hardop te spreken.', 'I study a quarter of an hour every morning, because then I can concentrate best. I write down my recurring mistakes and revise them on Sundays. My advice: do not put it off and try to speak aloud as much as possible.', { hints: ['Ik leer …, want …', 'Ik schrijf … op', 'Mijn advies: …'] }),
    match([['aantekeningen maken', 'to take notes'], ['uit je hoofd', 'by heart'], ['opzoeken', 'to look up'], ['overhoren', 'to quiz'], ['uitstellen', 'to put off'], ['onthouden', 'to retain']]),
  ], [
    mc('"Uit je hoofd leren" means', ['to forget', 'to learn by heart'], 1, 'by heart.'),
    fill('Vergeet niet ___ herhalen.', ['te'], 'Do not forget to revise.', 'vergeten + te.'),
    fill('Maak een ___ voor de hele week. (schedule)', ['planning'], 'Make a schedule for the whole week.', 'planning.'),
    build('Set a feasible goal.', 'Stel een haalbaar doel.', ['haalbare', 'zet'], 'het doel + een → no -e.'),
    tr('en-nl', 'The explanation was clear.', ['De uitleg was duidelijk.'], 'de uitleg.'),
    speak('Stap voor stap gaat het beter; ik onthoud nu veel meer woorden dan een jaar geleden.', 'Step by step it is going better; I now retain many more words than a year ago.'),
  ]));

  /* ================= Unit 4, lesson 3: hypotheticals in the past ================= */
  N('spijt', 'de', null, 'regret', 'Ik heb spijt van die beslissing.', 'I regret that decision.', { theme: 'feelings', ...S });
  N('kans', 'de', 'kansen', 'chance / opportunity', 'Ik heb die kans gemist.', 'I missed that opportunity.', { theme: 'life', ...S });
  N('beslissing', 'de', 'beslissingen', 'decision', 'Het was een moeilijke beslissing.', 'It was a hard decision.', { theme: 'life', ...S });
  N('keuze', 'de', 'keuzes', 'choice', 'Achteraf was het de juiste keuze.', 'In retrospect it was the right choice.', { theme: 'life', ...S });
  N('blessure', 'de', 'blessures', 'injury', 'Door een blessure kon ik niet meedoen.', 'Because of an injury I could not take part.', { theme: 'health', ...S });
  N('klacht', 'de', 'klachten', 'complaint / symptom', 'Ik had eerder met mijn klachten naar de dokter moeten gaan.', 'I should have gone to the doctor with my symptoms earlier.', { theme: 'health', ...S });
  VB('voorkomen', 'to prevent', 'voorkom|voorkomt|voorkomen', 'voorkwam|voorkwamen', 'voorkomen', 'hebben', 'Dat had voorkomen kunnen worden.', 'That could have been prevented.', { theme: 'health', ...S });
  VB('negeren', 'to ignore', 'negeer|negeert|negeren', 'negeerde|negeerden', 'genegeerd', 'hebben', 'Ik heb de pijn te lang genegeerd.', 'I ignored the pain for too long.', { theme: 'health', ...S });
  VB('luisteren naar', 'to listen to', 'luister naar|luistert naar|luisteren naar', 'luisterde naar|luisterden naar', 'geluisterd naar', 'hebben', 'Had ik maar naar mijn lichaam geluisterd.', 'If only I had listened to my body.', { theme: 'health', ...S, id: 'luisteren-naar' });
  VB('herstellen', 'to recover', 'herstel|herstelt|herstellen', 'herstelde|herstelden', 'hersteld', 'zijn', 'Ze is goed hersteld van de operatie.', 'She has recovered well from the operation.', { theme: 'health', ...S });
  W('achteraf', 'in retrospect', 'adv', 'Achteraf is het makkelijk praten.', 'It is easy to talk in hindsight.', { theme: 'time', ...S });
  W('anders', 'otherwise / differently', 'adv', 'Ik zou het nu anders doen.', 'I would do it differently now.', { theme: 'basics', ...S });
  W('misschien', 'maybe', 'adv', 'Misschien was het dan niet gebeurd.', 'Maybe it would not have happened then.', { theme: 'basics', ...S });
  PH('Had ik maar …', 'If only I had …', 'Had ik maar eerder hulp gezocht.', 'If only I had sought help earlier.', { theme: 'regret', ...S, id: 'ph-had-ik-maar-b1' });
  PH('Als ik dat had geweten, …', 'If I had known that, …', 'Als ik dat had geweten, was ik eerder gegaan.', 'If I had known that, I would have gone earlier.', { theme: 'regret', ...S, id: 'ph-als-ik-dat-had-geweten' });
  PH('Je had … moeten …', 'You should have …', 'Je had me moeten bellen.', 'You should have called me.', { theme: 'regret', ...S, id: 'ph-je-had-moeten' });

  addTo('s3u4', lesson('s3u4l3', 'If only I had: hypotheticals in the past', 'You can talk about what you should have done, what would have happened, and express regret: had ik maar, ik had moeten, als ik had geweten.', [
    h('The unreal past'),
    p('For something that did **not** happen, Dutch uses the **pluperfect** (`had` / `was` + participle) in both halves, or `zou` + perfect in the main clause.'),
    table(['pattern', 'example'], [['als + pluperfect, pluperfect', '*Als ik eerder was gegaan, was het niet zo erg geworden.'], ['als + pluperfect, zou + perfect', '*Als ik eerder was gegaan, zou het niet zo erg geworden zijn.'], ['had + moeten / kunnen + infinitive', '*Ik had eerder naar de dokter moeten gaan.'], ['Had ik maar + participle', '*Had ik maar naar mijn lichaam geluisterd!'], ['passive', '*Dat had voorkomen kunnen worden.']]),
    p('Auxiliary choice is the same as in the perfect: `had gewerkt`, `was gegaan`. With a modal you get two infinitives: `had **moeten gaan**`, never "gemoeten".'),
    h('Reproach and regret'),
    p('`Je had me moeten bellen.` (You should have called me.) `Dat had je niet moeten doen.` (You should not have done that.) `Ik had het kunnen weten.` (I could have known.) `Had ik het maar geweten!` (If only I had known!)'),
    ex(['Als ik de pijn niet had genegeerd, was de blessure niet zo ernstig geworden.', 'If I had not ignored the pain, the injury would not have become so serious.'], ['Ik had eerder met mijn klachten naar de huisarts moeten gaan.', 'I should have gone to the GP with my symptoms earlier.'], ['Had ik maar wat meer rust genomen!', 'If only I had taken a bit more rest!'], ['Achteraf is het makkelijk praten, maar ik zou het nu anders doen.', 'It is easy to talk in hindsight, but I would do it differently now.']),
    tip('`Had ik maar …` needs no `als` and puts the verb first. It is short, natural, and everyone uses it.'),
  ], ['g3-conditional'], ['spijt', 'kans', 'beslissing', 'keuze', 'blessure', 'klacht', 'voorkomen', 'negeren', 'luisteren-naar', 'herstellen', 'achteraf', 'anders', 'misschien', 'ph-had-ik-maar-b1', 'ph-als-ik-dat-had-geweten', 'ph-je-had-moeten'], [
    mc('"I should have gone earlier":', ['Ik had eerder moeten gaan.', 'Ik had eerder gemoeten gaan.', 'Ik moest eerder zijn gegaan.'], 0, 'had + moeten + infinitive.'),
    mc('Als ik dat had geweten, ___ ik eerder gegaan.', ['had', 'was', 'ben'], 1, 'gaan takes zijn: was gegaan.'),
    mc('"If only I had listened!":', ['Als ik maar luister!', 'Had ik maar geluisterd!', 'Ik had maar luisteren!'], 1, 'Had ik maar + participle.'),
    mc('"Dat had voorkomen kunnen worden" means', ['that can be prevented', 'that could have been prevented', 'that will be prevented'], 1, 'Past hypothetical passive.'),
    mc('"Je had me moeten bellen" is', ['a reproach', 'a plan', 'a promise'], 0, 'You should have called me.'),
    fill('Als ik de pijn niet had ___, was het niet zo erg geworden. (negeren)', ['genegeerd'], 'If I had not ignored the pain, it would not have become so bad.', 'negeer + d.'),
    fill('___ ik maar eerder hulp gezocht!', ['Had'], 'If only I had sought help earlier!', 'Had ik maar.'),
    fill('Ik had het ___ weten. (could)', ['kunnen'], 'I could have known.', 'had kunnen weten.'),
    fill('___ is het makkelijk praten. (in retrospect)', ['Achteraf'], 'It is easy to talk in hindsight.', 'achteraf.'),
    fill('Ze is goed ___ van de operatie. (herstellen)', ['hersteld'], 'She has recovered well from the operation.', 'her- verb: no ge-.'),
    build('You should not have done that.', 'Dat had je niet moeten doen.', ['gemoeten', 'je had'], 'Fronted dat; had je … moeten doen.'),
    build('If I had known that, I would have stayed home.', 'Als ik dat had geweten, was ik thuisgebleven.', ['ik was', 'heb'], 'had geweten; was ik thuisgebleven.'),
    build('I would do it differently now.', 'Ik zou het nu anders doen.', ['andere', 'doe'], 'zou … doen.'),
    build('I missed that opportunity.', 'Ik heb die kans gemist.', ['dat', 'mis'], 'de kans → die.'),
    tr('en-nl', 'If only I had taken more rest!', ['Had ik maar meer rust genomen!'], 'Had ik maar … genomen.'),
    tr('nl-en', 'Als ze eerder was gestopt met roken, was ze nu gezonder geweest.', ['If she had stopped smoking earlier, she would have been healthier now.'], 'was gestopt; was geweest.'),
    fix('Ik had eerder gemoeten gaan.', ['Ik had eerder moeten gaan.'], 'Double infinitive.'),
    fix('Als ik dat wist, was ik gekomen.', ['Als ik dat had geweten, was ik gekomen.'], 'Past hypothetical: pluperfect.'),
    dict('Ik had eerder met mijn klachten naar de huisarts moeten gaan.', 'I should have gone to the GP with my symptoms earlier.', 'had … moeten gaan.'),
    listen('Achteraf had ik die baan niet moeten aannemen, maar ik heb er geen spijt van.', ['In retrospect I should not have taken that job, but I do not regret it.', 'I regret not taking that job.', 'I will take that job.'], 0, 'had niet moeten aannemen; geen spijt.'),
    speak('Als ik eerder naar de dokter was gegaan, was de blessure niet zo ernstig geworden.', 'If I had gone to the doctor earlier, the injury would not have become so serious.'),
    free('Talk about a decision you would make differently: what you did, what you should have done, and what would have happened.', 'Twee jaar geleden heb ik te lang doorgewerkt met rugpijn. Ik had meteen naar de fysiotherapeut moeten gaan. Als ik dat had gedaan, was ik veel sneller hersteld. Had ik maar naar mijn lichaam geluisterd!', 'Two years ago I kept working too long with back pain. I should have gone to the physiotherapist straight away. If I had done that, I would have recovered much faster. If only I had listened to my body!', { hints: ['Ik had … moeten …', 'Als ik dat had gedaan, was / had ik …', 'Had ik maar …'] }),
    auto(3, ['tr-nl-en', 'article']),
  ], [
    mc('Als ik meer had geslapen, ___ ik niet ziek geworden.', ['had', 'was'], 1, 'worden takes zijn.'),
    fill('Je had me ___ bellen. (should)', ['moeten'], 'You should have called me.', 'had moeten.'),
    fill('Had ik het ___ geweten!', ['maar'], 'If only I had known!', 'Had ik … maar.'),
    build('I could have known.', 'Ik had het kunnen weten.', ['gekund', 'kon'], 'had kunnen weten.'),
    tr('en-nl', 'In retrospect it was the right choice.', ['Achteraf was het de juiste keuze.'], 'achteraf + inversion.'),
    speak('Had ik maar eerder hulp gezocht; dan was het nooit zo ver gekomen.', 'If only I had sought help earlier; then it would never have come this far.'),
  ]));

  /* ================= Unit 4, lesson 4: mental health and work-life balance ================= */
  N('burn-out', 'de', "burn-outs", 'burnout', 'Ze zit thuis met een burn-out.', 'She is at home with a burnout.', { theme: 'health', ...S });
  N('werkdruk', 'de', null, 'work pressure', 'De werkdruk is te hoog.', 'The work pressure is too high.', { theme: 'work', ...S });
  N('balans', 'de', null, 'balance', 'Ik zoek een betere balans tussen werk en privé.', 'I am looking for a better balance between work and private life.', { theme: 'health', ...S });
  N('grens', 'de', 'grenzen', 'limit / boundary', 'Je moet je grenzen aangeven.', 'You have to set your limits.', { theme: 'health', ...S });
  N('rust', 'de', null, 'rest / calm', 'Ik heb rust nodig.', 'I need rest.', { theme: 'health', ...S });
  N('psycholoog', 'de', 'psychologen', 'psychologist', 'De huisarts verwees me door naar een psycholoog.', 'The GP referred me to a psychologist.', { theme: 'health', ...S });
  N('bedrijfsarts', 'de', 'bedrijfsartsen', 'company doctor', 'Als je lang ziek bent, moet je naar de bedrijfsarts.', 'If you are ill for a long time, you have to see the company doctor.', { theme: 'health', ...S });
  N('slaapprobleem', 'het', 'slaapproblemen', 'sleep problem', 'Stress veroorzaakt vaak slaapproblemen.', 'Stress often causes sleep problems.', { theme: 'health', ...S });
  N('somberheid', 'de', null, 'low mood / gloom', 'In de winter heb ik last van somberheid.', 'In winter I suffer from low mood.', { theme: 'health', ...S });
  N('re-integratie', 'de', null, 'return to work (after illness)', 'De re-integratie gaat stap voor stap.', 'The return to work goes step by step.', { theme: 'work', ...S });
  VB('piekeren', 'to worry / brood', 'pieker|piekert|piekeren', 'piekerde|piekerden', 'gepiekerd', 'hebben', 'Ik lig ’s nachts te piekeren.', 'I lie awake worrying at night.', { theme: 'health', ...S });
  VB('overbelasten', 'to overburden', 'overbelast|overbelast|overbelasten', 'overbelastte|overbelastten', 'overbelast', 'hebben', 'Hij was al maanden overbelast.', 'He had been overburdened for months.', { theme: 'health', ...S });
  VB('aangeven', 'to indicate / set (limits)', 'geef aan|geeft aan|geven aan', 'gaf aan|gaven aan', 'aangegeven', 'hebben', 'Geef op tijd aan dat het te veel wordt.', 'Say in time that it is becoming too much.', { theme: 'health', ...S });
  VB('opbouwen', 'to build up', 'bouw op|bouwt op|bouwen op', 'bouwde op|bouwden op', 'opgebouwd', 'hebben', 'Ik bouw mijn uren langzaam weer op.', 'I am slowly building my hours back up.', { theme: 'work', ...S });
  VB('loslaten', 'to let go', 'laat los|laat los|laten los', 'liet los|lieten los', 'losgelaten', 'hebben', 'Ik kan mijn werk ’s avonds niet loslaten.', 'I cannot let go of my work in the evening.', { theme: 'health', ...S });
  W('somber', 'gloomy / down', 'adj', 'Ik voel me de laatste tijd somber.', 'I have been feeling down lately.', { theme: 'health', ...S });
  W('uitgeput', 'exhausted', 'adj', 'Na die week was ik uitgeput.', 'After that week I was exhausted.', { theme: 'health', ...S });
  W('overspannen', 'overstrained / stressed out', 'adj', 'De dokter zei dat ik overspannen ben.', 'The doctor said I am overstrained.', { theme: 'health', ...S });
  PH('last hebben van', 'to suffer from', 'Ik heb last van stress.', 'I suffer from stress.', { theme: 'health', ...S, id: 'ph-last-hebben-van' });
  PH('Het wordt me te veel.', 'It is getting too much for me.', 'Eerlijk gezegd wordt het me te veel.', 'Honestly, it is getting too much for me.', { theme: 'health', ...S, id: 'ph-te-veel' });

  addTo('s3u4', lesson('s3u4l4', 'Stress, rest and work-life balance', 'You can talk about stress and mental health, tell a manager or doctor that it is getting too much, and discuss solutions with zou and negation.', [
    h('Saying how it is'),
    table(['Dutch', 'English'], [['*Ik heb last van stress / slaapproblemen.', 'I suffer from stress / sleep problems.'], ['*Ik lig ’s nachts te piekeren.', 'I lie awake worrying at night.'], ['*Ik kan mijn werk niet loslaten.', 'I cannot let go of my work.'], ['*Ik voel me somber / uitgeput.', 'I feel down / exhausted.'], ['*Het wordt me te veel.', 'It is getting too much for me.'], ['*Ik zit tegen een burn-out aan.', 'I am close to a burnout.']]),
    h('How it works in the Netherlands'),
    p('You report sick (`ziek melden`) to your employer without having to say why. After some weeks the `bedrijfsarts` advises about what you can do; the employer keeps paying (at least most of) your salary. Returning is called `re-integratie`: you `bouwt je uren op`. For mental health you start at the `huisarts`, who can refer you to a `psycholoog` or the practice’s own `praktijkondersteuner`.'),
    h('Talking about solutions'),
    p('`Ik zou minder uren willen werken.` `Zou ik een paar taken kunnen overdragen?` `Ik werk ’s avonds **niet meer**.` `Ik heb **nog geen** afspraak met de bedrijfsarts.` `Je moet op tijd je grenzen aangeven.`'),
    ex(['Eerlijk gezegd wordt het me te veel; de werkdruk is al maanden te hoog.', 'Honestly, it is getting too much for me; the work pressure has been too high for months.'], ['Ik slaap nauwelijks en ik lig ’s nachts te piekeren over mijn werk.', 'I hardly sleep and I lie awake at night worrying about my work.'], ['Zou ik tijdelijk vier dagen kunnen werken, zodat ik meer rust krijg?', 'Could I temporarily work four days, so that I get more rest?'], ['Na mijn burn-out heb ik mijn uren stap voor stap opgebouwd.', 'After my burnout I built my hours back up step by step.']),
    tip('In Dutch workplaces saying `Het wordt me te veel` early is seen as responsible, not weak. Managers are expected to act on it.'),
  ], ['g3-conditional', 'g3-negation', 'g3-infinitive'], ['burn-out', 'werkdruk', 'balans', 'grens', 'rust', 'psycholoog', 'bedrijfsarts', 'slaapprobleem', 'somberheid', 're-integratie', 'piekeren', 'overbelasten', 'aangeven', 'opbouwen', 'loslaten', 'somber', 'uitgeput', 'overspannen', 'ph-last-hebben-van', 'ph-te-veel'], [
    mc('"Ik heb last van stress" means', ['I cause stress', 'I suffer from stress', 'I like stress'], 1, 'last hebben van.'),
    mc('"Ik lig te piekeren" means', ['I am lying down resting', 'I am lying awake worrying', 'I am lying about something'], 1, 'liggen te + piekeren.'),
    mc('Who advises about returning to work after long illness?', ['de tandarts', 'de bedrijfsarts', 'de wethouder'], 1, 'bedrijfsarts.'),
    mc('When you report sick in the Netherlands, you', ['must tell your employer the diagnosis', 'do not have to say what is wrong', 'need a doctor’s note on day one'], 1, 'The reason is private.'),
    mc('"Ik werk ’s avonds niet meer" means', ['I do not work in the evening yet', 'I no longer work in the evening', 'I work more in the evening'], 1, 'niet meer.'),
    art('burn-out', 'de', 'de burn-out.'),
    art('slaapprobleem', 'het', 'het probleem.'),
    plural('de grens', ['grenzen'], 's → z.'),
    fill('Het wordt ___ te veel.', ['me', 'mij'], 'It is getting too much for me.', 'me.'),
    fill('Ik kan mijn werk ’s avonds niet ___. (let go)', ['loslaten'], 'I cannot let go of my work in the evening.', 'kan + infinitive.'),
    fill('Je moet op tijd je grenzen ___. (set)', ['aangeven'], 'You have to set your limits in time.', 'grenzen aangeven.'),
    fill('Ik bouw mijn uren langzaam weer ___.', ['op'], 'I am slowly building my hours back up.', 'opbouwen.'),
    fill('De huisarts ___ me door naar een psycholoog. (past)', ['verwees'], 'The GP referred me to a psychologist.', 'verwijzen → verwees.'),
    build('Could I temporarily work four days?', 'Zou ik tijdelijk vier dagen kunnen werken?', ['Kan', 'werk'], 'zou … kunnen werken.'),
    build('I hardly sleep because I worry about my work.', 'Ik slaap nauwelijks omdat ik over mijn werk pieker.', ['pieker ik', 'niet'], 'omdat … pieker.'),
    build('I am looking for a better balance.', 'Ik zoek een betere balans.', ['beter', 'het'], 'de balans → betere.'),
    tr('en-nl', 'After that week I was exhausted.', ['Na die week was ik uitgeput.'], 'uitgeput.'),
    tr('nl-en', 'De werkdruk is al maanden te hoog, en ik heb nog geen afspraak met de bedrijfsarts.', ['The work pressure has been too high for months, and I do not have an appointment with the company doctor yet.'], 'al maanden; nog geen.'),
    fix('Ik heb last over stress.', ['Ik heb last van stress.'], 'last hebben van.'),
    dict('Eerlijk gezegd wordt het me te veel; ik slaap nauwelijks nog.', 'Honestly, it is getting too much for me; I hardly sleep any more.', 'wordt het me te veel.'),
    listen('Ik zou graag wat taken overdragen, zodat ik ’s avonds mijn werk kan loslaten.', ['I would like to hand over some tasks, so that I can let go of my work in the evening.', 'I would like more tasks in the evening.', 'I cannot hand over any tasks.'], 0, 'zou graag; zodat … kan loslaten.'),
    speak('Eerlijk gezegd wordt het me te veel. Zou ik tijdelijk minder uren kunnen werken?', 'Honestly, it is getting too much for me. Could I temporarily work fewer hours?'),
    read('Steeds meer jonge werknemers melden zich ziek met stressklachten. Volgens bedrijfsartsen komt dat niet alleen door de werkdruk, maar ook doordat mensen hun werk thuis niet meer kunnen loslaten: de telefoon blijft aan en de mail wordt ’s avonds nog gelezen. Wie uitgeput raakt, herstelt gemiddeld pas na acht maanden. Deskundigen raden daarom aan om op tijd grenzen aan te geven en klachten niet te negeren. Werkgevers zouden volgens hen vaker moeten vragen hoe het echt gaat, en niet alleen naar de planning.', [
      { q: 'According to company doctors, what besides work pressure causes the complaints?', options: ['low salaries', 'not being able to let go of work at home', 'too many holidays'], answer: 1, explain: '"hun werk thuis niet meer kunnen loslaten".' },
      { q: 'How long does recovery take on average?', options: ['eight weeks', 'eight months', 'two years'], answer: 1, explain: '"pas na acht maanden".' },
      { q: 'What should employers do, according to the experts?', options: ['ask more often how people are really doing', 'plan better', 'forbid email'], answer: 0, explain: '"vaker moeten vragen hoe het echt gaat".' },
    ], { en: 'More and more young employees report sick with stress complaints. According to company doctors that is not only due to work pressure, but also because people can no longer let go of their work at home: the phone stays on and email is still read in the evening. Those who become exhausted recover on average only after eight months. Experts therefore advise setting limits in time and not ignoring complaints. Employers should, according to them, ask more often how things are really going, and not only about the planning.' }),
    free('Tell your manager that the workload is too high: describe the situation, how you feel, and propose one solution.', 'Ik wil graag iets bespreken. De werkdruk is de laatste maanden erg hoog en ik merk dat ik slecht slaap en ’s avonds blijf piekeren. Het wordt me te veel. Zou ik het project van Noord tijdelijk kunnen overdragen, zodat ik me op de rest kan concentreren?', 'I would like to discuss something. The work pressure has been very high in recent months and I notice that I sleep badly and keep worrying in the evening. It is getting too much for me. Could I temporarily hand over the Noord project, so that I can concentrate on the rest?', { hints: ['Ik wil graag iets bespreken', 'Ik merk dat …', 'Het wordt me te veel', 'Zou ik … kunnen …?'] }),
  ], [
    mc('"Uitgeput" means', ['relaxed', 'exhausted'], 1, 'exhausted.'),
    fill('Ik heb last ___ slaapproblemen.', ['van'], 'I suffer from sleep problems.', 'last van.'),
    fill('Ik voel me de laatste tijd ___. (down)', ['somber'], 'I have been feeling down lately.', 'somber.'),
    build('You have to set your limits in time.', 'Je moet op tijd je grenzen aangeven.', ['geeft aan', 'grens'], 'moet … aangeven.'),
    tr('en-nl', 'I need rest.', ['Ik heb rust nodig.'], 'nodig hebben.'),
    speak('Na mijn burn-out heb ik mijn uren stap voor stap opgebouwd, en nu werk ik ’s avonds niet meer.', 'After my burnout I built my hours back up step by step, and now I no longer work in the evening.'),
  ]));

  /* ================= Unit 4, lesson 5: at the specialist and the hospital ================= */
  N('polikliniek', 'de', 'poliklinieken', 'outpatient clinic', 'Meld u bij de polikliniek op de tweede verdieping.', 'Report at the outpatient clinic on the second floor.', { theme: 'health', ...S });
  N('afdeling', 'de', 'afdelingen', 'ward / department', 'Hij ligt op de afdeling cardiologie.', 'He is on the cardiology ward.', { theme: 'health', ...S });
  N('spoedeisende hulp', 'de', null, 'A&E / emergency department', 'Ga bij een ernstig ongeluk naar de spoedeisende hulp.', 'In a serious accident go to A&E.', { theme: 'health', ...S, id: 'spoedeisende-hulp', altNl: ['SEH'] });
  N('operatie', 'de', 'operaties', 'operation', 'De operatie duurt ongeveer een uur.', 'The operation takes about an hour.', { theme: 'health', ...S });
  N('onderzoek', 'het', 'onderzoeken', 'examination / test', 'Er wordt eerst bloedonderzoek gedaan.', 'A blood test is done first.', { theme: 'health', ...S });
  N('uitslag', 'de', 'uitslagen', 'result', 'De uitslag krijgt u over een week.', 'You will get the result in a week.', { theme: 'health', ...S });
  N('röntgenfoto', 'de', "röntgenfoto's", 'X-ray', 'Er wordt een röntgenfoto van uw knie gemaakt.', 'An X-ray of your knee is being taken.', { theme: 'health', ...S, id: 'rontgenfoto' });
  N('verdoving', 'de', 'verdovingen', 'anaesthetic', 'U krijgt een plaatselijke verdoving.', 'You will get a local anaesthetic.', { theme: 'health', ...S });
  N('behandeling', 'de', 'behandelingen', 'treatment', 'De behandeling slaat goed aan.', 'The treatment is working well.', { theme: 'health', ...S });
  N('diagnose', 'de', 'diagnoses', 'diagnosis', 'De diagnose is nog niet zeker.', 'The diagnosis is not certain yet.', { theme: 'health', ...S });
  N('bezoekuur', 'het', 'bezoekuren', 'visiting hour', 'Het bezoekuur is van drie tot acht.', 'Visiting hours are from three to eight.', { theme: 'health', ...S });
  N('patiënt', 'de', 'patiënten', 'patient', 'De patiënt mag morgen naar huis.', 'The patient may go home tomorrow.', { theme: 'health', ...S, id: 'patient' });
  VB('opnemen', 'to admit (to hospital)', 'neem op|neemt op|nemen op', 'nam op|namen op', 'opgenomen', 'hebben', 'Ze is gisteren in het ziekenhuis opgenomen.', 'She was admitted to hospital yesterday.', { theme: 'health', ...S });
  VB('opereren', 'to operate', 'opereer|opereert|opereren', 'opereerde|opereerden', 'geopereerd', 'hebben', 'Hij wordt morgen aan zijn knie geopereerd.', 'He is being operated on his knee tomorrow.', { theme: 'health', ...S });
  VB('behandelen', 'to treat', 'behandel|behandelt|behandelen', 'behandelde|behandelden', 'behandeld', 'hebben', 'De ontsteking wordt met antibiotica behandeld.', 'The infection is treated with antibiotics.', { theme: 'health', ...S });
  VB('ontslaan', 'to discharge', 'ontsla|ontslaat|ontslaan', 'ontsloeg|ontsloegen', 'ontslagen', 'hebben', 'Ze wordt vrijdag uit het ziekenhuis ontslagen.', 'She is being discharged from hospital on Friday.', { theme: 'health', ...S });
  W('nuchter', 'on an empty stomach / sober', 'adj', 'U moet nuchter naar het ziekenhuis komen.', 'You have to come to the hospital on an empty stomach.', { theme: 'health', ...S });
  W('ernstig', 'serious', 'adj', 'Is het ernstig, dokter?', 'Is it serious, doctor?', { theme: 'health', ...S });
  W('plaatselijk', 'local', 'adj', 'Een plaatselijke verdoving is genoeg.', 'A local anaesthetic is enough.', { theme: 'health', ...S });

  addTo('s3u4', lesson('s3u4l5', 'At the specialist and in hospital', 'You can follow what happens at a hospital appointment: tests, results, treatment and admission, and understand the passives that hospital language is full of.', [
    h('The route'),
    p('`huisarts` → `verwijzing` → `polikliniek` of the `specialist` → `onderzoek` (bloedonderzoek, röntgenfoto, scan) → `uitslag` and `diagnose` → `behandeling`, sometimes `opname` and `operatie` → `ontslag` and follow-up at the huisarts. For a real emergency: `spoedeisende hulp` or 112.'),
    h('Hospital Dutch is passive'),
    table(['Dutch', 'English'], [['*Er wordt bloed geprikt.', 'Blood is taken.'], ['*Er wordt een foto gemaakt.', 'An X-ray is taken.'], ['*U wordt morgen geopereerd.', 'You are being operated on tomorrow.'], ['*U wordt een nacht opgenomen.', 'You are admitted for one night.'], ['*De uitslag wordt naar uw huisarts gestuurd.', 'The result is sent to your GP.'], ['*U bent doorverwezen door uw huisarts.', 'You were referred by your GP.'], ['*Wanneer word ik ontslagen?', 'When will I be discharged?']]),
    h('Instructions you must understand'),
    p('`U moet nuchter komen` (no food or drink beforehand). `Neem uw medicijnlijst mee.` `Meld u een kwartier van tevoren bij de balie.` `U mag na de verdoving niet zelf autorijden.` `Bij koorts of veel pijn belt u de polikliniek.`'),
    h('Questions to ask'),
    list('`Wat is de diagnose precies?`', '`Welke behandelingen zijn er, en wat zijn de voor- en nadelen?`', '`Hoe lang duurt het herstel?`', '`Wanneer krijg ik de uitslag, en van wie?`', '`Kunt u dat in eenvoudiger woorden uitleggen?`'),
    ex(['U bent doorverwezen voor uw knie. Er wordt eerst een foto gemaakt en daarna bespreek ik de uitslag met u.', 'You were referred for your knee. First an X-ray is taken and then I will discuss the result with you.'], ['U wordt dinsdag geopereerd en u moet die ochtend nuchter komen.', 'You are being operated on on Tuesday and you have to come on an empty stomach that morning.'], ['Is het ernstig? — Nee, het is goed te behandelen.', 'Is it serious? — No, it is easy to treat.'], ['Kunt u dat in eenvoudiger woorden uitleggen? Ik begrijp "plaatselijke verdoving" niet.', 'Could you explain that in simpler words? I do not understand "plaatselijke verdoving".']),
    tip('You may always bring someone, ask for a written summary, or ask for an interpreter by phone (`tolk`). Doctors are used to the question `Kunt u dat opschrijven?`'),
  ], ['g3-passive', 'g3-register'], ['polikliniek', 'afdeling', 'spoedeisende-hulp', 'operatie', 'onderzoek', 'uitslag', 'rontgenfoto', 'verdoving', 'behandeling', 'diagnose', 'bezoekuur', 'patient', 'opnemen', 'opereren', 'behandelen', 'ontslaan', 'nuchter', 'ernstig', 'plaatselijk'], [
    mc('"U moet nuchter komen" means you must', ['come sober after a party', 'not eat or drink beforehand', 'come by bike'], 1, 'nuchter = on an empty stomach.'),
    mc('Where do you go with a verwijzing from the GP?', ['de apotheek', 'de polikliniek', 'de gemeente'], 1, 'polikliniek of the specialist.'),
    mc('Er ___ eerst bloed geprikt.', ['wordt', 'is geworden', 'heeft'], 0, 'Passive: er wordt.'),
    mc('"Wanneer word ik ontslagen?" in a hospital means', ['when will I be fired', 'when will I be discharged', 'when will I be operated'], 1, 'ontslaan = discharge (and fire, at work).'),
    mc('U ___ dinsdag geopereerd.', ['wordt', 'word', 'bent geworden'], 0, 'u wordt.'),
    art('onderzoek', 'het', 'het onderzoek.'),
    art('diagnose', 'de', 'de diagnose.'),
    art('bezoekuur', 'het', 'het uur → het bezoekuur.'),
    fill('Ze is gisteren in het ziekenhuis ___. (opnemen)', ['opgenomen'], 'She was admitted to hospital yesterday.', 'op + genomen.'),
    fill('De uitslag wordt naar uw huisarts ___. (sturen)', ['gestuurd'], 'The result is sent to your GP.', 'gestuurd.'),
    fill('U krijgt een ___ verdoving. (local)', ['plaatselijke'], 'You get a local anaesthetic.', 'de verdoving → plaatselijke.'),
    fill('Is het ___, dokter? (serious)', ['ernstig'], 'Is it serious, doctor?', 'ernstig.'),
    build('An X-ray of your knee is being taken.', 'Er wordt een foto van uw knie gemaakt.', ['is', 'maken'], 'er wordt … gemaakt.'),
    build('When do I get the result?', 'Wanneer krijg ik de uitslag?', ['ik krijg', 'het'], 'Question word + verb + subject.'),
    build('The infection is treated with antibiotics.', 'De ontsteking wordt met antibiotica behandeld.', ['behandelt', 'door'], 'wordt … behandeld.'),
    build('Could you explain that in simpler words?', 'Kunt u dat in eenvoudiger woorden uitleggen?', ['leg uit', 'eenvoudig'], 'kunt u … uitleggen.'),
    tr('en-nl', 'How long does the recovery take?', ['Hoe lang duurt het herstel?'], 'het herstel.'),
    tr('nl-en', 'U mag na de verdoving niet zelf autorijden.', ['You may not drive yourself after the anaesthetic.', 'After the anaesthetic you are not allowed to drive yourself.'], 'mag niet; zelf.'),
    fix('U wordt morgen opereren.', ['U wordt morgen geopereerd.'], 'Passive needs the participle.'),
    dict('U wordt dinsdag geopereerd en u moet die ochtend nuchter komen.', 'You are being operated on on Tuesday and you have to come on an empty stomach that morning.', 'wordt geopereerd; nuchter.'),
    listen('De uitslag van het bloedonderzoek krijgt u over een week van uw huisarts.', ['You will get the blood test result from your GP in a week.', 'You will get the result today at the hospital.', 'Your GP will take blood in a week.'], 0, 'over een week; van uw huisarts.'),
    speak('Wat is de diagnose precies, en welke behandelingen zijn er?', 'What exactly is the diagnosis, and which treatments are there?'),
    read('Afspraakbevestiging polikliniek Orthopedie. Geachte heer Taylor, u heeft op dinsdag 14 oktober om 9.40 uur een afspraak bij dr. De Wit. Meld u een kwartier van tevoren bij de balie op de tweede verdieping, route 25. Voor de afspraak wordt een röntgenfoto gemaakt; hiervoor hoeft u niet nuchter te zijn. Neem uw identiteitsbewijs, uw verzekeringspas en een actuele medicijnlijst mee. Bent u verhinderd? Bel dan uiterlijk 24 uur van tevoren, anders worden kosten in rekening gebracht.', [
      { q: 'What time should Mr Taylor report at the desk?', options: ['9.40', '9.25', '9.55'], answer: 1, explain: 'A quarter of an hour before 9.40.' },
      { q: 'Does he need to come on an empty stomach?', options: ['yes', 'no', 'only for the X-ray'], answer: 1, explain: '"hiervoor hoeft u niet nuchter te zijn".' },
      { q: 'What happens if he cancels less than 24 hours beforehand?', options: ['nothing', 'costs are charged', 'he loses his insurance'], answer: 1, explain: '"anders worden kosten in rekening gebracht".' },
    ], { en: 'Appointment confirmation, Orthopaedics outpatient clinic. Dear Mr Taylor, you have an appointment with Dr De Wit on Tuesday 14 October at 9.40. Report at the desk on the second floor, route 25, a quarter of an hour beforehand. Before the appointment an X-ray is taken; you do not need to have an empty stomach for this. Bring your ID, your insurance card and a current list of medicines. Are you unable to come? Then phone at least 24 hours beforehand, otherwise costs will be charged.' }),
    free('You are at the specialist. Ask three questions: about the diagnosis, the treatment and the recovery time. Then ask for a simpler explanation of one word.', 'Wat is de diagnose precies? Welke behandelingen zijn er, en wat zijn de nadelen? Hoe lang duurt het herstel ongeveer? En kunt u uitleggen wat "plaatselijke verdoving" betekent?', 'What exactly is the diagnosis? Which treatments are there, and what are the disadvantages? About how long does the recovery take? And could you explain what "plaatselijke verdoving" means?', { hints: ['Wat is … precies?', 'Welke … zijn er?', 'Hoe lang duurt …?', 'Kunt u uitleggen wat … betekent?'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"De spoedeisende hulp" is', ['the pharmacy', 'A&E', 'the GP practice'], 1, 'Emergency department.'),
    fill('Er wordt een röntgenfoto ___. (maken)', ['gemaakt'], 'An X-ray is taken.', 'gemaakt.'),
    fill('Wanneer word ik ___? (discharged)', ['ontslagen'], 'When will I be discharged?', 'ontslaan → ontslagen.'),
    build('You were referred by your GP.', 'U bent door uw huisarts doorverwezen.', ['heeft', 'van'], 'bent … doorverwezen; door.'),
    tr('en-nl', 'The treatment is working well.', ['De behandeling slaat goed aan.', 'De behandeling werkt goed.'], 'aanslaan.'),
    speak('Kunt u dat in eenvoudiger woorden uitleggen en het voor mij opschrijven?', 'Could you explain that in simpler words and write it down for me?'),
  ]));
})();
