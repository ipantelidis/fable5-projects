/* Stage 2 (A2) — Unit 5: Werk · Unit 6: Vrije tijd */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = (NL.content._s2units = NL.content._s2units || []);

  /* ---------------- Vocabulary: Unit 5 ---------------- */
  N('afdeling', 'de', 'afdelingen', 'department', 'Ik werk op de afdeling marketing.', 'I work in the marketing department.', { theme: 'work', stage: 2 });
  N('contract', 'het', 'contracten', 'contract', 'Ik heb een contract voor een jaar.', 'I have a one-year contract.', { theme: 'work', stage: 2 });
  N('deadline', 'de', 'deadlines', 'deadline', 'De deadline is vrijdag.', 'The deadline is Friday.', { theme: 'work', stage: 2 });
  N('sollicitatie', 'de', 'sollicitaties', 'job application', 'Mijn sollicitatie is afgewezen.', 'My application was rejected.', { theme: 'work', stage: 2 });
  N('vacature', 'de', 'vacatures', 'vacancy', 'Er staat een vacature op de website.', 'There is a vacancy on the website.', { theme: 'work', stage: 2 });
  N('functie', 'de', 'functies', 'position / role', 'Wat is je functie?', 'What is your role?', { theme: 'work', stage: 2 });
  N('werkgever', 'de', 'werkgevers', 'employer', 'Mijn werkgever betaalt de cursus.', 'My employer pays for the course.', { theme: 'work', stage: 2 });
  N('werknemer', 'de', 'werknemers', 'employee', 'Het bedrijf heeft honderd werknemers.', 'The company has a hundred employees.', { theme: 'work', stage: 2 });
  N('bedrijf', 'het', 'bedrijven', 'company', 'Ik werk bij een klein bedrijf.', 'I work at a small company.', { theme: 'work', stage: 2 });
  N('cv', 'het', "cv's", 'CV', 'Stuur je cv en een motivatiebrief.', 'Send your CV and a cover letter.', { theme: 'work', stage: 2 });
  VB('solliciteren', 'to apply (for a job)', 'solliciteer|solliciteert|solliciteren', 'solliciteerde|solliciteerden', 'gesolliciteerd', 'hebben', 'Ik heb gesolliciteerd bij een uitgeverij.', 'I applied to a publisher.', { theme: 'work', stage: 2, note: 'solliciteren naar een baan / bij een bedrijf.' });
  VB('overwerken', 'to work overtime', 'werk over|werkt over|werken over', 'werkte over|werkten over', 'overgewerkt', 'hebben', 'Ik moet vanavond overwerken.', 'I have to work overtime tonight.', { theme: 'work', stage: 2 });
  VB('verdienen', 'to earn', 'verdien|verdient|verdienen', 'verdiende|verdienden', 'verdiend', 'hebben', 'Hoeveel verdien je?', 'How much do you earn?', { theme: 'work', stage: 2 });
  W('verantwoordelijk', 'responsible', 'adj', 'Ik ben verantwoordelijk voor de planning.', 'I am responsible for the planning.', { theme: 'work', stage: 2 });
  W('tijdelijk', 'temporary', 'adj', 'Het is een tijdelijk contract.', 'It is a temporary contract.', { theme: 'work', stage: 2 });
  W('vast', 'permanent / fixed', 'adj', 'Ik heb een vast contract.', 'I have a permanent contract.', { theme: 'work', stage: 2 });
  W('zodat', 'so that', 'conj', 'Ik werk thuis zodat ik geen tijd verlies.', 'I work from home so that I lose no time.', { theme: 'grammar', stage: 2 });
  W('dat', 'that (conjunction)', 'conj', 'Ik denk dat het lukt.', 'I think that it will work.', { theme: 'grammar', stage: 2, id: 'dat-conj' });
  W('tevreden over', 'satisfied with', 'adj', 'Ik ben tevreden over mijn werk.', 'I am satisfied with my job.', { theme: 'work', stage: 2, id: 'tevreden-over' });
  PH('Wat voor werk doe je?', 'What kind of work do you do?', 'Wat voor werk doe je? — Ik ben verpleegkundige.', 'What kind of work do you do? — I am a nurse.', { theme: 'work', stage: 2, id: 'ph-wat-voor-werk' });

  N('opleiding', 'de', 'opleidingen', 'education / training course', 'Ik heb een opleiding tot kok gedaan.', 'I trained as a cook.', { theme: 'work', stage: 2 });
  N('stage', 'de', 'stages', 'internship', 'Ik liep stage bij een krant.', 'I did an internship at a newspaper.', { theme: 'work', stage: 2, note: 'stage lopen = to do an internship.' });
  N('diploma', 'het', "diploma's", 'diploma / degree', 'Ik heb mijn diploma in 2019 gehaald.', 'I got my degree in 2019.', { theme: 'work', stage: 2 });
  N('carrière', 'de', 'carrières', 'career', 'Ze heeft een mooie carrière gemaakt.', 'She has had a fine career.', { theme: 'work', stage: 2 });
  N('ontslag', 'het', null, 'dismissal / resignation', 'Hij heeft ontslag genomen.', 'He resigned.', { theme: 'work', stage: 2, note: 'ontslag nemen = to resign; ontslagen worden = to be fired.' });
  N('promotie', 'de', 'promoties', 'promotion', 'Ik heb promotie gekregen.', 'I got a promotion.', { theme: 'work', stage: 2 });
  N('sector', 'de', 'sectoren', 'sector', 'Ik werk in de zorgsector.', 'I work in the care sector.', { theme: 'work', stage: 2 });
  VB('ontslaan', 'to fire / dismiss', 'ontsla|ontslaat|ontslaan', 'ontsloeg|ontsloegen', 'ontslagen', 'hebben', 'Het bedrijf heeft twintig mensen ontslagen.', 'The company fired twenty people.', { theme: 'work', stage: 2 });
  VB('veranderen', 'to change', 'verander|verandert|veranderen', 'veranderde|veranderden', 'veranderd', 'zijn', 'Ik ben van baan veranderd.', 'I changed jobs.', { theme: 'work', stage: 2, note: 'zijn when something becomes different; hebben when you change something.' });
  VB('afstuderen', 'to graduate', 'studeer af|studeert af|studeren af', 'studeerde af|studeerden af', 'afgestudeerd', 'zijn', 'Ik ben in 2020 afgestudeerd.', 'I graduated in 2020.', { theme: 'study', stage: 2 });
  W('hoewel', 'although', 'conj', 'Hoewel het druk is, vind ik mijn werk leuk.', 'Although it is busy, I like my job.', { theme: 'grammar', stage: 2 });
  W('voordat', 'before', 'conj', 'Voordat ik hier werkte, was ik leraar.', 'Before I worked here, I was a teacher.', { theme: 'grammar', stage: 2 });
  W('nadat', 'after', 'conj', 'Nadat ik was afgestudeerd, ging ik reizen.', 'After I graduated, I went travelling.', { theme: 'grammar', stage: 2 });
  W('zodra', 'as soon as', 'conj', 'Ik bel je zodra ik het weet.', 'I will call you as soon as I know.', { theme: 'grammar', stage: 2 });
  W('sinds (conj)', 'since (conjunction)', 'conj', 'Sinds ik hier werk, spreek ik meer Nederlands.', 'Since I have worked here, I speak more Dutch.', { theme: 'grammar', stage: 2, id: 'sinds-conj' });
  W('eigenlijk', 'actually', 'adv', 'Eigenlijk wil ik iets anders doen.', 'Actually I want to do something else.', { theme: 'basics', stage: 2 });
  W('daarna', 'after that', 'adv', 'Daarna ging ik bij een bank werken.', 'After that I went to work at a bank.', { theme: 'time', stage: 2 });

  N('overleg', 'het', null, 'consultation / meeting', 'We hebben elke maandag overleg.', 'We have a meeting every Monday.', { theme: 'work', stage: 2 });
  N('presentatie', 'de', 'presentaties', 'presentation', 'Ik geef morgen een presentatie.', 'I am giving a presentation tomorrow.', { theme: 'work', stage: 2 });
  N('verlof', 'het', null, 'leave', 'Ik heb verlof aangevraagd.', 'I applied for leave.', { theme: 'work', stage: 2 });
  N('vrije dag', 'de', 'vrije dagen', 'day off', 'Ik neem vrijdag een vrije dag.', 'I am taking Friday off.', { theme: 'work', stage: 2, id: 'vrije-dag' });
  N('vakantiedag', 'de', 'vakantiedagen', 'holiday day', 'Ik heb nog tien vakantiedagen.', 'I still have ten holiday days.', { theme: 'work', stage: 2 });
  N('planning', 'de', 'planningen', 'schedule / planning', 'De planning is te krap.', 'The schedule is too tight.', { theme: 'work', stage: 2 });
  N('taak', 'de', 'taken', 'task', 'Ik heb nog drie taken voor vandaag.', 'I still have three tasks for today.', { theme: 'work', stage: 2 });
  N('verslag', 'het', 'verslagen', 'report', 'Kun je het verslag vanmiddag afmaken?', 'Can you finish the report this afternoon?', { theme: 'work', stage: 2 });
  VB('uitstellen', 'to postpone', 'stel uit|stelt uit|stellen uit', 'stelde uit|stelden uit', 'uitgesteld', 'hebben', 'We moeten de vergadering uitstellen.', 'We have to postpone the meeting.', { theme: 'work', stage: 2 });
  VB('afmaken', 'to finish', 'maak af|maakt af|maken af', 'maakte af|maakten af', 'afgemaakt', 'hebben', 'Ik wil dit eerst afmaken.', 'I want to finish this first.', { theme: 'work', stage: 2 });
  VB('voorbereiden', 'to prepare', 'bereid voor|bereidt voor|bereiden voor', 'bereidde voor|bereidden voor', 'voorbereid', 'hebben', 'Ik moet de presentatie nog voorbereiden.', 'I still have to prepare the presentation.', { theme: 'work', stage: 2 });
  VB('overleggen', 'to consult / discuss', 'overleg|overlegt|overleggen', 'overlegde|overlegden', 'overlegd', 'hebben', 'Ik moet even met mijn baas overleggen.', 'I have to check with my boss.', { theme: 'work', stage: 2 });
  PH('zich ziek melden', 'to call in sick', 'Ik heb me vanmorgen ziek gemeld.', 'I called in sick this morning.', { theme: 'work', stage: 2, id: 'ph-ziek-melden' });
  PH('vrij vragen', 'to ask for time off', 'Ik heb voor vrijdag vrij gevraagd.', 'I asked for Friday off.', { theme: 'work', stage: 2, id: 'ph-vrij-vragen' });
  W('op tijd', 'on time', 'adv', 'Het verslag moet op tijd klaar zijn.', 'The report has to be ready on time.', { theme: 'time', stage: 2, id: 'op-tijd' });
  W('klaar', 'ready / finished', 'adj', 'Ben je klaar met het verslag?', 'Are you done with the report?', { theme: 'basics', stage: 2 });
  W('dringend', 'urgent', 'adj', 'Het is niet dringend.', 'It is not urgent.', { theme: 'work', stage: 2 });

  N('onderwerp', 'het', 'onderwerpen', 'subject', 'Onderwerp: vergadering van maandag', 'Subject: Monday’s meeting', { theme: 'email', stage: 2 });
  N('ontvanger', 'de', 'ontvangers', 'recipient', 'Controleer de ontvanger voordat je verstuurt.', 'Check the recipient before you send.', { theme: 'email', stage: 2 });
  N('afzender', 'de', 'afzenders', 'sender', 'Ik ken de afzender niet.', 'I do not know the sender.', { theme: 'email', stage: 2 });
  VB('versturen', 'to send', 'verstuur|verstuurt|versturen', 'verstuurde|verstuurden', 'verstuurd', 'hebben', 'Ik heb de mail net verstuurd.', 'I just sent the email.', { theme: 'email', stage: 2, altNl: ['verzenden'] });
  VB('doorsturen', 'to forward', 'stuur door|stuurt door|sturen door', 'stuurde door|stuurden door', 'doorgestuurd', 'hebben', 'Kun je de mail naar mij doorsturen?', 'Can you forward the email to me?', { theme: 'email', stage: 2 });
  VB('beantwoorden', 'to reply to / answer', 'beantwoord|beantwoordt|beantwoorden', 'beantwoordde|beantwoordden', 'beantwoord', 'hebben', 'Ik heb zijn mail nog niet beantwoord.', 'I have not answered his email yet.', { theme: 'email', stage: 2 });
  VB('toevoegen', 'to add / attach', 'voeg toe|voegt toe|voegen toe', 'voegde toe|voegden toe', 'toegevoegd', 'hebben', 'Ik heb het bestand toegevoegd.', 'I have attached the file.', { theme: 'email', stage: 2 });
  N('bestand', 'het', 'bestanden', 'file', 'Het bestand is te groot.', 'The file is too big.', { theme: 'email', stage: 2 });
  PH('Beste …,', 'Dear … (semi-formal email opening)', 'Beste Anna,', 'Dear Anna,', { theme: 'email', stage: 2, id: 'ph-beste' });
  PH('Alvast bedankt.', 'Thanks in advance.', 'Alvast bedankt voor je hulp.', 'Thanks in advance for your help.', { theme: 'email', stage: 2, id: 'ph-alvast-bedankt' });
  PH('zo snel mogelijk', 'as soon as possible', 'Kun je zo snel mogelijk reageren?', 'Can you respond as soon as possible?', { theme: 'email', stage: 2, id: 'ph-zo-snel-mogelijk' });
  PH('ter informatie', 'for your information', 'Ter informatie: de vergadering is verzet.', 'For your information: the meeting has been moved.', { theme: 'email', stage: 2, id: 'ph-ter-informatie' });
  PH('laten weten', 'to let (someone) know', 'Laat me even weten of je kunt.', 'Let me know whether you can.', { theme: 'email', stage: 2, id: 'ph-laten-weten' });
  PH('Groeten,', 'Regards, (informal closing)', 'Groeten, Tom', 'Regards, Tom', { theme: 'email', stage: 2, id: 'ph-groeten', note: 'Also: Groetjes (very informal), Hartelijke groet, Met vriendelijke groet (formal).' });
  W('bijgaand', 'attached / enclosed', 'adv', 'Bijgaand vind je het verslag.', 'Attached you will find the report.', { theme: 'email', stage: 2 });
  W('helder', 'clear', 'adj', 'Is dat helder?', 'Is that clear?', { theme: 'basics', stage: 2 });
  W('akkoord', 'agreed / OK', 'adv', 'Akkoord, ik stuur het vanmiddag.', 'Agreed, I will send it this afternoon.', { theme: 'email', stage: 2 });

  /* ---------------- Unit 5 lessons ---------------- */
  const u5 = [];
  u5.push(lesson('s2u5l1', 'My job: omdat, dat and als send the verb to the end', 'You can explain what you do and why, and give reasons, opinions and conditions with omdat, dat and als, with the verb at the end.', [
    h('The verb goes to the end'),
    p('After `omdat` (because), `dat` (that) and `als` (if / when), the clause becomes **subordinate**: every verb moves to the **end**. The word order inside the clause is otherwise normal.'),
    table(['main clause', 'subordinate clause'], [['*Ik werk thuis', '*omdat ik geen kantoor heb.'], ['*Ik denk', '*dat ze een nieuwe baan zoekt.'], ['*Ik ben blij', '*als de deadline gehaald wordt.'], ['*Ik werk over', '*als het project niet klaar is.']]),
    h('want or omdat?'),
    p('Both mean because. `want` keeps normal order: `Ik werk thuis, want ik heb geen kantoor.` `omdat` sends the verb to the end: `Ik werk thuis omdat ik geen kantoor heb.`'),
    h('When the subordinate clause comes first'),
    p('It counts as the first element, so the main verb comes right after it: `Omdat ik geen kantoor heb, **werk ik** thuis.` `Als het regent, **neem ik** de tram.`'),
    h('Talking about your job'),
    table(['Dutch', 'English'], [['*Wat voor werk doe je?', 'What kind of work do you do?'], ['*Ik werk als … bij …', 'I work as … at …'], ['*Ik werk op de afdeling …', 'I work in the … department.'], ['*Ik ben verantwoordelijk voor …', 'I am responsible for …'], ['*Ik heb een vast / tijdelijk contract.', 'I have a permanent / temporary contract.'], ['*Ik werk fulltime / parttime, 32 uur per week.', 'I work full time / part time, 32 hours a week.']]),
    ex(['Ik vind mijn werk leuk omdat ik veel met mensen werk.', 'I like my job because I work with people a lot.'], ['Mijn baas zegt dat ik goed Nederlands spreek.', 'My boss says that I speak good Dutch.'], ['Als ik een vast contract krijg, blijf ik in Amsterdam.', 'If I get a permanent contract, I will stay in Amsterdam.'], ['Ik heb gesolliciteerd omdat de vacature perfect bij mij past.', 'I applied because the vacancy fits me perfectly.']),
    tip('Read to the conjunction, then push every verb to the end. `omdat ik … heb`, `dat ze … zoekt`, `als het … is`.'),
  ], ['g2-subordinate'], ['afdeling', 'contract', 'deadline', 'sollicitatie', 'vacature', 'functie', 'werkgever', 'werknemer', 'bedrijf', 'cv', 'solliciteren', 'overwerken', 'verdienen', 'verantwoordelijk', 'tijdelijk', 'vast', 'zodat', 'dat-conj', 'tevreden-over', 'ph-wat-voor-werk'], [
    mc('Ik werk thuis omdat ik ___.', ['heb geen kantoor', 'geen kantoor heb', 'kantoor geen heb'], 1, 'omdat: verb at the end.'),
    mc('Ik denk dat ze ___.', ['zoekt een nieuwe baan', 'een nieuwe baan zoekt', 'een zoekt nieuwe baan'], 1, 'dat: verb at the end.'),
    mc('Ik werk thuis, ___ ik heb geen kantoor.', ['omdat', 'want', 'dat'], 1, 'Normal word order after the conjunction → want.'),
    mc('Als het project klaar is, ___.', ['ik ga op vakantie', 'ga ik op vakantie', 'ik op vakantie ga'], 1, 'Subordinate clause first → inversion in the main clause.'),
    fill('Ik heb gesolliciteerd omdat de baan goed bij mij ___. (passen)', ['past'], 'I applied because the job suits me well.', 'past at the end of the omdat-clause.'),
    fill('Mijn baas zegt dat ik te veel ___. (overwerken)', ['overwerk'], 'My boss says that I work too much overtime.', 'Separable verb at the end is one word: overwerk.'),
    fill('Als ik een vast contract ___, blijf ik hier. (krijgen)', ['krijg'], 'If I get a permanent contract, I will stay here.', 'krijg at the end of the als-clause.'),
    fill('Ik werk parttime ___ ik tijd heb voor mijn kinderen.', ['zodat', 'omdat'], 'I work part time so that I have time for my children.', 'zodat = so that (purpose); omdat also fits as a reason.'),
    build('I work from home because I have no office.', 'Ik werk thuis omdat ik geen kantoor heb.', ['heb ik', 'want'], 'omdat … heb at the end.'),
    build('I think that the deadline is too tight.', 'Ik denk dat de deadline te krap is.', ['is te krap', 'omdat'], 'dat … is at the end.'),
    build('If it is busy, I work overtime.', 'Als het druk is, werk ik over.', ['ik werk', 'is druk'], 'als … is; then inversion: werk ik over.'),
    build('I am responsible for the planning.', 'Ik ben verantwoordelijk voor de planning.', ['van', 'verantwoordelijke'], 'verantwoordelijk voor.'),
    tr('en-nl', 'What kind of work do you do?', ['Wat voor werk doe je?', 'Wat voor werk doet u?'], 'Fixed question.'),
    tr('nl-en', 'Ik ben tevreden over mijn werk, hoewel ik niet veel verdien.', ['I am satisfied with my job, although I do not earn much.', 'I am happy with my work although I do not earn a lot.'], 'tevreden over; verdienen = earn.'),
    fix('Ik blijf thuis omdat ik ben ziek.', ['Ik blijf thuis omdat ik ziek ben.'], 'omdat → verb at the end: ziek ben.'),
    fix('Als ik tijd heb, ik help je.', ['Als ik tijd heb, help ik je.'], 'Inversion after a fronted als-clause.'),
    dict('Ik werk op de afdeling marketing en ik heb een tijdelijk contract.', 'I work in the marketing department and I have a temporary contract.', 'afdeling; tijdelijk contract.'),
    listen('Ik heb gesolliciteerd omdat ik meer wil verdienen.', ['I applied because I want to earn more.', 'I resigned because I earned too little.', 'I applied because I want to work less.'], 0, 'gesolliciteerd; meer verdienen.'),
    speak('Ik werk als programmeur bij een klein bedrijf. Ik vind het leuk omdat de collega’s aardig zijn.', 'I work as a programmer at a small company. I like it because the colleagues are nice.'),
    free('Say what work you do, where, and why you like or dislike it. Use omdat at least once.', 'Ik werk als ontwerper bij een bureau in Amsterdam. Ik werk vier dagen per week. Ik vind het leuk omdat ik creatief kan zijn, maar de deadlines zijn soms te krap.', 'I work as a designer at an agency in Amsterdam. I work four days a week. I like it because I can be creative, but the deadlines are sometimes too tight.', { hints: ['Ik werk als … bij …', 'Ik vind het leuk omdat …', 'maar …'] }),
    auto(3, ['tr-nl-en', 'article']),
  ], [
    mc('Ik blijf thuis omdat ik ___.', ['ben moe', 'moe ben'], 1, 'Verb at the end.'),
    fill('Ze zegt dat ze een nieuwe baan ___. (hebben)', ['heeft'], 'She says that she has a new job.', 'heeft at the end.'),
    build('If I have time, I will call you.', 'Als ik tijd heb, bel ik je.', ['ik bel', 'heb tijd'], 'als … heb; bel ik.'),
    tr('en-nl', 'I have a permanent contract.', ['Ik heb een vast contract.'], 'vast = permanent.'),
    listen('Wat voor werk doe je? — Ik werk op de afdeling verkoop.', ['What kind of work do you do? — I work in the sales department.', 'Where do you work? — In a shop.', 'Do you like your work? — Yes, in sales.'], 0, 'afdeling verkoop.'),
    speak('Ik werk parttime omdat ik twee kleine kinderen heb.', 'I work part time because I have two small children.'),
  ]));

  u5.push(lesson('s2u5l2', 'My career so far: toen, terwijl, hoewel, voordat, nadat', 'You can tell your work history in order, with toen, voordat, nadat, terwijl, hoewel and zodra, all with the verb at the end.', [
    h('More conjunctions, same rule'),
    table(['conjunction', 'meaning', 'example'], [['toen', 'when (once, in the past)', '*Toen ik 22 was, studeerde ik af.'], ['terwijl', 'while', '*Ik werkte terwijl ik studeerde.'], ['hoewel', 'although', '*Hoewel ik moe was, werkte ik door.'], ['voordat', 'before', '*Voordat ik hier kwam, was ik leraar.'], ['nadat', 'after', '*Nadat ik was afgestudeerd, ging ik reizen.'], ['zodra', 'as soon as', '*Zodra ik kan, neem ik ontslag.'], ['sinds', 'since', '*Sinds ik hier werk, verdien ik meer.']]),
    p('All of them send the verb to the end, and when they open the sentence the main clause inverts: `Toen ik klein was, **wilde ik** piloot worden.`'),
    warn('`toen` = when for a single past moment or period. `als` = whenever, or if. `wanneer` = when in a question. "When I was 20" is always `toen ik twintig was`.'),
    h('Telling your story in order'),
    p('`eerst` … `daarna` … `toen` … `sinds` …: `Eerst deed ik een opleiding tot kok. Daarna liep ik stage in een hotel. Toen kreeg ik een baan bij een restaurant. Sinds 2023 werk ik voor mezelf.`'),
    ex(['Voordat ik naar Nederland kwam, werkte ik in een ziekenhuis in Leeds.', 'Before I came to the Netherlands I worked in a hospital in Leeds.'], ['Nadat ik mijn diploma had gehaald, liep ik een halfjaar stage.', 'After I got my diploma I did a six-month internship.'], ['Hoewel het salaris laag was, heb ik veel geleerd.', 'Although the salary was low, I learned a lot.'], ['Ik heb ontslag genomen zodra ik een nieuwe baan had.', 'I resigned as soon as I had a new job.']),
    tip('`voordat` and `nadat` are the conjunctions (with a clause); `voor` and `na` are the prepositions (with a noun): `voordat ik kwam` but `voor mijn komst`; `nadat ik studeerde` but `na mijn studie`.'),
  ], ['g2-subordinate', 'g2-past-choice'], ['opleiding', 'stage', 'diploma', 'carriere', 'ontslag', 'promotie', 'sector', 'ontslaan', 'veranderen', 'afstuderen', 'hoewel', 'voordat', 'nadat', 'zodra', 'sinds-conj', 'eigenlijk', 'daarna'], [
    mc('___ ik twintig was, woonde ik in Londen.', ['Als', 'Toen', 'Wanneer'], 1, 'One past period → toen.'),
    mc('___ ik hier kwam, was ik leraar.', ['Voordat', 'Voor', 'Nadat'], 0, 'Clause with a verb → voordat (before).'),
    mc('___ het salaris laag was, bleef ik.', ['Omdat', 'Hoewel', 'Zodat'], 1, 'Contrast → hoewel (although).'),
    mc('Ik bel je ___ ik het weet.', ['zodra', 'terwijl', 'nadat'], 0, 'As soon as → zodra.'),
    fill('Nadat ik was ___, ging ik een jaar reizen. (afstuderen)', ['afgestudeerd'], 'After I graduated, I went travelling for a year.', 'Perfect in the nadat-clause: was afgestudeerd.'),
    fill('Ik werkte in een café terwijl ik ___. (studeren)', ['studeerde'], 'I worked in a café while I studied.', 'terwijl → studeerde at the end.'),
    fill('Hoewel ik moe ___, ging ik naar de vergadering. (zijn)', ['was'], 'Although I was tired, I went to the meeting.', 'hoewel → was at the end; then inversion: ging ik.'),
    fill('Sinds ik bij dit bedrijf ___, heb ik twee keer promotie gekregen. (werken)', ['werk'], 'Since I have worked at this company I have been promoted twice.', 'sinds + present tense; werk at the end.'),
    build('When I was 25, I changed jobs.', 'Toen ik 25 was, veranderde ik van baan.', ['Als', 'ik veranderde'], 'toen … was; inversion: veranderde ik.'),
    build('Before I came here, I worked in a hospital.', 'Voordat ik hier kwam, werkte ik in een ziekenhuis.', ['ik werkte', 'Voor'], 'voordat … kwam; werkte ik.'),
    build('Although the work was hard, I learned a lot.', 'Hoewel het werk zwaar was, heb ik veel geleerd.', ['ik heb', 'was zwaar'], 'hoewel … was; heb ik … geleerd.'),
    build('I resigned as soon as I had a new job.', 'Ik nam ontslag zodra ik een nieuwe baan had.', ['had ik', 'wanneer'], 'zodra … had at the end.'),
    tr('en-nl', 'After I got my diploma, I did an internship.', ['Nadat ik mijn diploma had gehaald, liep ik stage.', 'Nadat ik mijn diploma gehaald had, liep ik stage.', 'Nadat ik mijn diploma haalde, liep ik stage.'], 'nadat … gehaald had / had gehaald; stage lopen.'),
    tr('nl-en', 'Het bedrijf heeft vorig jaar twintig mensen ontslagen.', ['The company fired twenty people last year.', 'The company dismissed twenty people last year.'], 'ontslaan → ontslagen.'),
    fix('Als ik jong was, wilde ik piloot worden.', ['Toen ik jong was, wilde ik piloot worden.'], 'A past period: toen, not als.'),
    fix('Voordat ik kwam hier, was ik student.', ['Voordat ik hier kwam, was ik student.'], 'Verb at the end of the voordat-clause.'),
    dict('Toen ik afstudeerde, kreeg ik meteen een baan.', 'When I graduated, I got a job straight away.', 'toen … afstudeerde; kreeg ik.'),
    listen('Hoewel ik weinig verdiende, heb ik in die baan veel geleerd.', ['Although I earned little, I learned a lot in that job.', 'Because I earned a lot, I stayed in that job.', 'While I earned little, I learned nothing.'], 0, 'hoewel; weinig verdiende.'),
    speak('Voordat ik naar Amsterdam kwam, werkte ik drie jaar in Londen. Sinds 2024 werk ik hier bij een bank.', 'Before I came to Amsterdam I worked in London for three years. Since 2024 I have worked here at a bank.'),
    free('Tell your career in four steps using eerst, daarna, toen and sinds, plus one voordat or nadat.', 'Eerst deed ik een opleiding in Manchester. Nadat ik was afgestudeerd, werkte ik twee jaar bij een krant. Toen verhuisde ik naar Amsterdam. Sinds vorig jaar werk ik bij een uitgeverij.', 'First I did a course in Manchester. After I graduated, I worked at a newspaper for two years. Then I moved to Amsterdam. Since last year I have worked at a publisher.', { hints: ['Eerst …', 'Nadat ik … was/had …, …', 'Toen …', 'Sinds …'] }),
    match([['toen', 'when (past)'], ['terwijl', 'while'], ['hoewel', 'although'], ['voordat', 'before'], ['nadat', 'after'], ['zodra', 'as soon as']]),
  ], [
    mc('___ ik klein was, wilde ik dokter worden.', ['Als', 'Toen'], 1, 'toen.'),
    fill('Ik studeerde terwijl ik ___. (werken)', ['werkte'], 'I studied while I worked.', 'werkte at the end.'),
    build('Although it was busy, I left on time.', 'Hoewel het druk was, ging ik op tijd weg.', ['ik ging', 'was druk'], 'hoewel … was; ging ik.'),
    tr('en-nl', 'I got a promotion.', ['Ik heb promotie gekregen.', 'Ik kreeg promotie.'], 'promotie krijgen.'),
    listen('Nadat ik ontslag had genomen, begon ik mijn eigen bedrijf.', ['After I had resigned, I started my own company.', 'Before I resigned, I started my own company.', 'After I was fired, I looked for a company.'], 0, 'nadat … had genomen; eigen bedrijf.'),
    speak('Zodra ik mijn diploma heb, ga ik solliciteren.', 'As soon as I have my diploma, I am going to apply for jobs.'),
  ]));

  u5.push(lesson('s2u5l3', 'The office: two verbs and where they go', 'You can talk about tasks, meetings and time off with modals, the perfect and both together, keeping every extra verb at the end.', [
    h('One verb in second position, the rest at the end'),
    table(['pattern', 'example'], [['modal + infinitive', '*Ik moet het verslag vandaag afmaken.'], ['perfect', '*Ik heb de presentatie gisteren voorbereid.'], ['gaan + infinitive', '*We gaan de vergadering uitstellen.'], ['modal in the perfect', '*Ik heb gisteren moeten overwerken.'], ['modal + modal', '*Je moet dit vandaag kunnen afmaken.']]),
    p('When a modal is in the **perfect**, it does not become a participle. You get two infinitives at the end: `Ik heb niet **kunnen** komen.` `We hebben de deadline **moeten** uitstellen.` (Never "gekund" or "gemoeten" in this position.)'),
    h('The middle: time, manner, place'),
    p('Between the two verb positions the usual order is **time, manner, place**: `Ik moet **morgen** **met de trein** **naar Utrecht** reizen.` Object pronouns come before time: `Ik moet **het** morgen afmaken.`'),
    h('Office life'),
    table(['Dutch', 'English'], [['*overleg hebben / vergaderen', 'to have a meeting'], ['*een presentatie geven', 'to give a presentation'], ['*een taak afmaken', 'to finish a task'], ['*iets uitstellen', 'to postpone something'], ['*vrij vragen / verlof aanvragen', 'to ask for time off'], ['*zich ziek melden', 'to call in sick'], ['*even overleggen met', 'to check with']]),
    ex(['Kun je het verslag voor vrijdag afmaken?', 'Can you finish the report by Friday?'], ['Ik heb me vanmorgen ziek moeten melden.', 'I had to call in sick this morning.'], ['We hebben de deadline een week uitgesteld.', 'We postponed the deadline by a week.'], ['Ik wil eerst even met mijn baas overleggen.', 'I want to check with my boss first.'], ['Ik heb voor volgende week vrij gevraagd.', 'I asked for next week off.']),
    tip('Picture brackets: [finite verb … all other verbs]. Whatever you add goes inside the brackets.'),
  ], ['g2-two-verbs', 'g2-separable-tenses'], ['overleg', 'presentatie', 'verlof', 'vrije-dag', 'vakantiedag', 'planning', 'taak', 'verslag', 'uitstellen', 'afmaken', 'voorbereiden', 'overleggen', 'ph-ziek-melden', 'ph-vrij-vragen', 'op-tijd', 'klaar', 'dringend'], [
    mc('Which is correct?', ['Ik moet afmaken het verslag vandaag.', 'Ik moet het verslag vandaag afmaken.', 'Ik het verslag moet vandaag afmaken.'], 1, 'moet second, afmaken at the end.'),
    mc('Which is correct?', ['Ik heb niet gekund komen.', 'Ik heb niet kunnen komen.', 'Ik heb niet komen kunnen.'], 1, 'Modal in the perfect: double infinitive, modal first.'),
    mc('Which order is natural?', ['Ik moet naar Utrecht morgen met de trein.', 'Ik moet morgen met de trein naar Utrecht.', 'Ik moet met de trein naar Utrecht morgen.'], 1, 'Time, manner, place.'),
    conj('uitstellen', 'wij', 'perf', ['hebben uitgesteld'], 'uit + ge + steld.'),
    conj('voorbereiden', 'ik', 'perf', ['heb voorbereid'], 'bereiden starts with be- → no ge: voorbereid.'),
    conj('afmaken', 'hij', 'pres', ['maakt af'], 'maakt … af.'),
    fill('Ik moet de presentatie nog ___. (voorbereiden)', ['voorbereiden'], 'I still have to prepare the presentation.', 'After moet: infinitive at the end.'),
    fill('We hebben de vergadering ___. (uitstellen, perfect)', ['uitgesteld'], 'We postponed the meeting.', 'uitgesteld.'),
    fill('Ik heb gisteren ___ overwerken. (moeten, perfect)', ['moeten'], 'I had to work overtime yesterday.', 'Double infinitive: heb moeten overwerken.'),
    fill('Heb je voor vrijdag ___ gevraagd?', ['vrij'], 'Did you ask for Friday off?', 'vrij vragen.'),
    build('Can you finish the report by Friday?', 'Kun je het verslag voor vrijdag afmaken?', ['maak af', 'afgemaakt'], 'kun je … afmaken.'),
    build('I had to call in sick this morning.', 'Ik heb me vanmorgen ziek moeten melden.', ['gemoeten', 'gemeld'], 'heb … moeten melden.'),
    build('We are going to postpone the deadline.', 'We gaan de deadline uitstellen.', ['stellen uit', 'uitgesteld'], 'gaan … uitstellen.'),
    build('I want to check with my boss first.', 'Ik wil eerst met mijn baas overleggen.', ['overleg', 'wil ik'], 'wil … overleggen.'),
    tr('en-nl', 'I still have ten holiday days.', ['Ik heb nog tien vakantiedagen.'], 'nog = still.'),
    tr('nl-en', 'Ik heb de taak niet op tijd kunnen afmaken.', ['I was not able to finish the task on time.', 'I could not finish the task on time.'], 'heb … kunnen afmaken.'),
    fix('Ik heb gisteren gemoeten overwerken.', ['Ik heb gisteren moeten overwerken.'], 'Modal in the perfect: infinitive, not participle.'),
    fix('Ik moet morgen bellen mijn baas.', ['Ik moet morgen mijn baas bellen.'], 'bellen at the end.'),
    dict('We hebben de vergadering naar donderdag moeten verzetten.', 'We had to move the meeting to Thursday.', 'hebben … moeten verzetten.'),
    listen('Kun je de presentatie voor maandag voorbereiden? Het is dringend.', ['Can you prepare the presentation by Monday? It is urgent.', 'Can you give the presentation on Monday? It is not urgent.', 'Did you prepare the presentation on Monday?'], 0, 'voorbereiden; dringend.'),
    speak('Ik moet vandaag drie taken afmaken en morgen een presentatie geven.', 'I have to finish three tasks today and give a presentation tomorrow.'),
    free('Describe your working day tomorrow: what you have to do, what you can postpone, and when you want to leave.', 'Morgen moet ik om negen uur overleg hebben. Daarna moet ik het verslag afmaken. De presentatie kan ik uitstellen tot vrijdag. Ik wil om vijf uur weggaan.', 'Tomorrow I have to have a meeting at nine. After that I have to finish the report. I can postpone the presentation until Friday. I want to leave at five.', { hints: ['Morgen moet ik …', '… kan ik uitstellen', 'Ik wil om … weggaan'] }),
    auto(3, ['conj', 'tr-nl-en']),
  ], [
    mc('Which is correct?', ['Ik heb moeten gisteren werken.', 'Ik heb gisteren moeten werken.'], 1, 'Both verbs at the end.'),
    conj('afmaken', 'wij', 'perf', ['hebben afgemaakt'], 'afgemaakt.'),
    fill('Ik wil dit eerst ___. (afmaken)', ['afmaken'], 'I want to finish this first.', 'infinitive at the end.'),
    build('I have to prepare a presentation tomorrow.', 'Ik moet morgen een presentatie voorbereiden.', ['bereid voor', 'voorbereid'], 'moet … voorbereiden.'),
    tr('en-nl', 'I called in sick.', ['Ik heb me ziek gemeld.'], 'zich ziek melden.'),
    speak('We hebben de deadline moeten uitstellen omdat de planning te krap was.', 'We had to postpone the deadline because the schedule was too tight.'),
  ]));

  u5.push(lesson('s2u5l4', 'Work email: short, clear and polite', 'You can read and write a short work email: subject line, opening, request, attachment and closing, in the right register.', [
    h('The shape of a Dutch work email'),
    table(['part', 'informal (colleague)', 'formal (client, unknown person)'], [['opening', '*Hoi Anna, / *Beste Anna,', '*Geachte heer Bakker, / *Beste mevrouw De Vries,'], ['why you write', '*Ik heb een vraag over …', '*Hierbij stuur ik u …'], ['request', '*Kun je … ?', '*Zou u … kunnen … ?'], ['attachment', '*Bijgaand het verslag.', '*In de bijlage vindt u …'], ['thanks', '*Alvast bedankt!', '*Bij voorbaat dank.'], ['closing', '*Groeten, / Groetjes,', '*Met vriendelijke groet,']]),
    p('Dutch work emails are **short and direct**. `Kun je het vandaag sturen?` is normal between colleagues and is not rude. Start the request with the verb, add `even` or `alvast bedankt` to soften it.'),
    h('Useful lines'),
    list('`Ter informatie: …` (for your information)', '`Laat me even weten of je kunt.` (let me know whether you can)', '`Kun je dit doorsturen naar Tom?` (forward)', '`Zie bijlage.` / `Bijgaand …`', '`Akkoord.` (agreed) / `Prima.` / `Is goed.`', '`Zo snel mogelijk` (asap), `uiterlijk vrijdag` (by Friday at the latest)'),
    ex(['Hoi Tom, kun je het verslag uiterlijk vrijdag naar mij sturen? Alvast bedankt! Groeten, Anna', 'Hi Tom, can you send me the report by Friday at the latest? Thanks in advance! Regards, Anna'], ['Beste mevrouw Jansen, in de bijlage vindt u de offerte. Laat u mij weten of u vragen heeft? Met vriendelijke groet, Sam Taylor', 'Dear Ms Jansen, please find the quotation attached. Would you let me know if you have questions? Kind regards, Sam Taylor'], ['Ter informatie: het overleg van maandag is verzet naar dinsdag 10.00 uur.', 'For your information: Monday’s meeting has been moved to Tuesday 10:00.']),
    tip('`Beste` + first name is the all-purpose opening at work. `Geachte` only for people you have never met or for very formal matters.'),
  ], ['g2-subordinate', 'g2-imperative'], ['onderwerp', 'ontvanger', 'afzender', 'versturen', 'doorsturen', 'beantwoorden', 'toevoegen', 'bestand', 'ph-beste', 'ph-alvast-bedankt', 'ph-zo-snel-mogelijk', 'ph-ter-informatie', 'ph-laten-weten', 'ph-groeten', 'bijgaand', 'helder', 'akkoord'], [
    mc('Best opening for an email to a colleague you know:', ['Geachte heer,', 'Hoi Tom,', 'Hoogachtend,'], 1, 'Colleagues: Hoi / Beste + first name.'),
    mc('"Alvast bedankt" means', ['thanks again', 'thanks in advance', 'no thanks'], 1, 'alvast = in advance.'),
    mc('"Kun je de mail naar Tom doorsturen?" asks you to', ['reply to Tom', 'forward the mail to Tom', 'delete Tom’s mail'], 1, 'doorsturen = forward.'),
    art('onderwerp', 'het', 'het onderwerp.'),
    art('bestand', 'het', 'het bestand.'),
    fill('___ vind je het verslag van gisteren.', ['Bijgaand', 'Hierbij'], 'Attached you will find yesterday’s report.', 'bijgaand = attached.'),
    fill('Laat me even ___ of je morgen kunt.', ['weten'], 'Let me know whether you can make it tomorrow.', 'laten weten.'),
    fill('Ik heb het bestand ___. (toevoegen, perfect)', ['toegevoegd'], 'I have attached the file.', 'toe + ge + voegd.'),
    fill('Kun je ___ snel mogelijk reageren?', ['zo'], 'Can you respond as soon as possible?', 'zo snel mogelijk.'),
    build('Can you send me the report by Friday?', 'Kun je het verslag uiterlijk vrijdag naar mij sturen?', ['stuur', 'voor'], 'kun je … sturen; uiterlijk vrijdag.'),
    build('For your information: the meeting has been moved.', 'Ter informatie: de vergadering is verzet.', ['Voor', 'verzetten'], 'ter informatie; is verzet.'),
    build('I have not answered his email yet.', 'Ik heb zijn mail nog niet beantwoord.', ['gebeantwoord', 'antwoord'], 'beantwoord: be- verb, no ge-.'),
    build('Let me know if you have questions.', 'Laat me weten of je vragen hebt.', ['als', 'hebt vragen'], 'of = whether; verb at the end: hebt.'),
    tr('en-nl', 'Agreed, I will send it this afternoon.', ['Akkoord, ik stuur het vanmiddag.', 'Akkoord, ik stuur het vanmiddag op.', 'Prima, ik stuur het vanmiddag.'], 'akkoord / prima.'),
    tr('nl-en', 'Ik ken de afzender niet, dus ik open de bijlage niet.', ['I do not know the sender, so I am not opening the attachment.', 'I don’t know the sender so I won’t open the attachment.'], 'afzender; bijlage.'),
    fix('Geachte Tom, kun je dit doorsturen? Groetjes, Anna', ['Hoi Tom, kun je dit doorsturen? Groetjes, Anna', 'Beste Tom, kun je dit doorsturen? Groetjes, Anna'], 'Geachte with a first name and Groetjes clash; use Hoi/Beste Tom.'),
    dict('Kun je de mail naar de hele afdeling doorsturen? Alvast bedankt.', 'Can you forward the email to the whole department? Thanks in advance.', 'doorsturen; alvast bedankt.'),
    listen('Ter informatie: het overleg van maandag is verzet naar woensdag.', ['For your information: Monday’s meeting has been moved to Wednesday.', 'Reminder: the meeting is on Monday.', 'The Wednesday meeting is cancelled.'], 0, 'verzet naar woensdag.'),
    speak('Hoi Anna, kun je het verslag zo snel mogelijk naar mij sturen? Alvast bedankt.', 'Hi Anna, can you send me the report as soon as possible? Thanks in advance.'),
    read('Onderwerp: planning project Zuid. Hoi allemaal, ter informatie: de deadline van project Zuid is verzet van 15 naar 22 mei. De klant wil eerst de nieuwe tekeningen zien. Kunnen jullie je planning aanpassen en mij uiterlijk donderdag laten weten of dat lukt? Bijgaand de nieuwe tekeningen. Tom, kun jij de klant bevestigen dat we akkoord zijn? Alvast bedankt! Groeten, Lisa', [
      { q: 'What changed?', options: ['the client', 'the deadline: a week later', 'the drawings were rejected'], answer: 1, explain: '"verzet van 15 naar 22 mei".' },
      { q: 'What should everyone do by Thursday?', options: ['send the drawings', 'tell Lisa whether the new planning works', 'call the client'], answer: 1, explain: '"uiterlijk donderdag laten weten of dat lukt".' },
      { q: 'What is Tom asked to do?', options: ['confirm to the client', 'adjust the drawings', 'postpone the project'], answer: 0, explain: '"kun jij de klant bevestigen dat we akkoord zijn".' },
    ], { en: 'Subject: planning project Zuid. Hi all, for your information: the deadline for project Zuid has been moved from 15 to 22 May. The client wants to see the new drawings first. Can you adjust your planning and let me know by Thursday at the latest whether that works? Attached the new drawings. Tom, can you confirm to the client that we agree? Thanks in advance! Regards, Lisa' }),
    write('Reply to Lisa’s email in 3 to 5 sentences: say whether the new planning works for you, mention one task you will postpone, and ask one question.', ['Opens with Hoi Lisa, or Beste Lisa,', 'Says clearly whether it works (Dat lukt / Dat lukt helaas niet omdat …)', 'Uses one subordinate clause (omdat / dat / als) with the verb at the end', 'Asks one question', 'Closes with Groeten, + name'], 'Hoi Lisa, dat lukt. Ik stel de presentatie voor de andere klant uit zodat ik eerst de tekeningen kan bekijken. Kun je me laten weten of het overleg van maandag ook verschuift? Groeten, Sam'),
  ], [
    mc('Formal closing:', ['Groetjes,', 'Met vriendelijke groet,', 'Doei,'], 1, 'Formal: Met vriendelijke groet.'),
    fill('In de ___ vindt u de offerte.', ['bijlage'], 'Please find the quotation attached.', 'bijlage.'),
    build('Can you forward this to Anna?', 'Kun je dit naar Anna doorsturen?', ['stuur door', 'doorgestuurd'], 'kun je … doorsturen.'),
    tr('en-nl', 'Thanks in advance!', ['Alvast bedankt!'], 'alvast bedankt.'),
    listen('Laat me even weten of je vrijdag kunt.', ['Let me know whether you can make Friday.', 'I know that you cannot come on Friday.', 'Tell me why you cannot on Friday.'], 0, 'laten weten of.'),
    speak('Beste mevrouw Jansen, in de bijlage vindt u het verslag. Met vriendelijke groet, Sam.', 'Dear Ms Jansen, please find the report attached. Kind regards, Sam.'),
  ]));

  units.push(unit('s2u5', 'Werk', 'work life', u5, [
    mc('Ik werk thuis omdat ik ___.', ['heb geen kantoor', 'geen kantoor heb'], 1, 'Verb at the end.'),
    mc('___ ik studeerde, werkte ik in een café.', ['Als', 'Toen', 'Terwijl'], 2, 'While → terwijl. (Toen is also possible for "when".)'),
    fill('Ik denk dat de deadline te krap ___. (zijn)', ['is'], 'I think the deadline is too tight.', 'is at the end.'),
    fill('Ik heb gisteren ___ overwerken. (moeten)', ['moeten'], 'I had to work overtime yesterday.', 'Double infinitive.'),
    fill('___ bedankt voor je hulp!', ['Alvast'], 'Thanks in advance for your help!', 'alvast bedankt.'),
    conj('uitstellen', 'ik', 'perf', ['heb uitgesteld'], 'uitgesteld.'),
    build('If I get the job, I will move to Utrecht.', 'Als ik de baan krijg, verhuis ik naar Utrecht.', ['ik verhuis', 'krijg ik'], 'als … krijg; verhuis ik.'),
    build('Before I worked here, I was a teacher.', 'Voordat ik hier werkte, was ik leraar.', ['ik was', 'Voor'], 'voordat … werkte; was ik.'),
    build('Can you finish the report today?', 'Kun je het verslag vandaag afmaken?', ['maak af', 'afgemaakt'], 'afmaken at the end.'),
    fix('Hoewel het regende, ik ging naar kantoor.', ['Hoewel het regende, ging ik naar kantoor.'], 'Inversion after the fronted clause.'),
    fix('Ik heb gekund niet komen.', ['Ik heb niet kunnen komen.'], 'Double infinitive.'),
    tr('en-nl', 'I applied for a job at a bank.', ['Ik heb gesolliciteerd bij een bank.', 'Ik heb bij een bank gesolliciteerd.', 'Ik heb gesolliciteerd naar een baan bij een bank.'], 'solliciteren bij.'),
    listen('Kun je me laten weten of je morgen bij het overleg kunt zijn?', ['Can you let me know whether you can be at the meeting tomorrow?', 'Can you tell me why you missed the meeting?', 'Let me know when the meeting is.'], 0, 'laten weten of … kunt zijn.'),
    speak('Ik werk sinds twee jaar bij een klein bedrijf. Hoewel het druk is, vind ik het leuk.', 'I have worked at a small company for two years. Although it is busy, I like it.'),
  ]));

  /* ---------------- Vocabulary: Unit 6 ---------------- */
  VB('hardlopen', 'to run (for sport)', 'loop hard|loopt hard|lopen hard', 'liep hard|liepen hard', 'hardgelopen', 'hebben', 'Ik loop drie keer per week hard.', 'I run three times a week.', { theme: 'sport', stage: 2 });
  N('tennis', 'het', null, 'tennis', 'Ik speel tennis op zaterdag.', 'I play tennis on Saturdays.', { theme: 'sport', stage: 2 });
  N('fitness', 'de', null, 'fitness / gym training', 'Fitness vind ik saai.', 'I find gym training boring.', { theme: 'sport', stage: 2 });
  N('training', 'de', 'trainingen', 'training session', 'De training is om zeven uur.', 'Training is at seven.', { theme: 'sport', stage: 2 });
  N('team', 'het', 'teams', 'team', 'Ons team heeft gewonnen.', 'Our team won.', { theme: 'sport', stage: 2 });
  N('club', 'de', 'clubs', 'club', 'Ik ben lid van een voetbalclub.', 'I am a member of a football club.', { theme: 'sport', stage: 2 });
  N('conditie', 'de', null, 'fitness (physical condition)', 'Mijn conditie is slecht.', 'My fitness is poor.', { theme: 'sport', stage: 2 });
  N('yoga', 'de', null, 'yoga', 'Yoga is rustiger dan hardlopen.', 'Yoga is calmer than running.', { theme: 'sport', stage: 2 });
  W('sneller', 'faster', 'adj', 'De fiets is sneller dan de tram.', 'The bike is faster than the tram.', { theme: 'comparison', stage: 2 });
  W('langzaam', 'slow', 'adj', 'De bus is langzaam.', 'The bus is slow.', { theme: 'comparison', stage: 2 });
  W('beter', 'better', 'adj', 'Zwemmen is beter voor je rug.', 'Swimming is better for your back.', { theme: 'comparison', stage: 2 });
  W('slechter', 'worse', 'adj', 'Mijn conditie is slechter dan vorig jaar.', 'My fitness is worse than last year.', { theme: 'comparison', stage: 2 });
  W('sportief', 'sporty', 'adj', 'Mijn zus is heel sportief.', 'My sister is very sporty.', { theme: 'sport', stage: 2 });
  W('lui', 'lazy', 'adj', 'Op zondag ben ik lui.', 'On Sundays I am lazy.', { theme: 'feelings', stage: 2 });
  W('actief', 'active', 'adj', 'Hij is actiever dan ik.', 'He is more active than me.', { theme: 'sport', stage: 2 });
  W('vermoeiend', 'tiring', 'adj', 'Hardlopen is vermoeiend.', 'Running is tiring.', { theme: 'feelings', stage: 2 });
  W('ontspannend', 'relaxing', 'adj', 'Wandelen is ontspannend.', 'Walking is relaxing.', { theme: 'feelings', stage: 2 });
  W('saai', 'boring', 'adj', 'Die film was saai.', 'That film was boring.', { theme: 'feelings', stage: 2 });
  PH('even … als', 'as … as', 'Fietsen is even gezond als zwemmen.', 'Cycling is as healthy as swimming.', { theme: 'comparison', stage: 2, id: 'ph-even-als', note: 'Also: net zo … als.' });
  W('dan', 'than', 'conj', 'Hij is ouder dan ik.', 'He is older than me.', { theme: 'comparison', stage: 2, id: 'dan-than' });

  VB('bakken', 'to bake / fry', 'bak|bakt|bakken', 'bakte|bakten', 'gebakken', 'hebben', 'Ik bak elke zondag brood.', 'I bake bread every Sunday.', { theme: 'hobbies', stage: 2 });
  VB('tuinieren', 'to garden', 'tuinier|tuiniert|tuinieren', 'tuinierde|tuinierden', 'getuinierd', 'hebben', 'Mijn moeder tuiniert graag.', 'My mother likes gardening.', { theme: 'hobbies', stage: 2 });
  VB('schilderen', 'to paint', 'schilder|schildert|schilderen', 'schilderde|schilderden', 'geschilderd', 'hebben', 'Ik schilder het liefst landschappen.', 'I most like painting landscapes.', { theme: 'hobbies', stage: 2 });
  VB('zingen', 'to sing', 'zing|zingt|zingen', 'zong|zongen', 'gezongen', 'hebben', 'Ze zingt in een koor.', 'She sings in a choir.', { theme: 'hobbies', stage: 2 });
  N('piano', 'de', "piano's", 'piano', 'Ik speel al tien jaar piano.', 'I have played the piano for ten years.', { theme: 'hobbies', stage: 2 });
  N('koor', 'het', 'koren', 'choir', 'Het koor oefent op woensdag.', 'The choir rehearses on Wednesdays.', { theme: 'hobbies', stage: 2 });
  N('theater', 'het', 'theaters', 'theatre', 'We gaan zaterdag naar het theater.', 'We are going to the theatre on Saturday.', { theme: 'leisure', stage: 2 });
  N('bordspel', 'het', 'bordspellen', 'board game', 'Bordspellen zijn populair in Nederland.', 'Board games are popular in the Netherlands.', { theme: 'hobbies', stage: 2 });
  N('puzzel', 'de', 'puzzels', 'puzzle', 'Ik doe elke avond een puzzel.', 'I do a puzzle every evening.', { theme: 'hobbies', stage: 2 });
  VB('kaarten', 'to play cards', 'kaart|kaart|kaarten', 'kaartte|kaartten', 'gekaart', 'hebben', 'We kaarten elke vrijdag.', 'We play cards every Friday.', { theme: 'hobbies', stage: 2 });
  N('lievelings-', 'de', null, 'favourite (prefix)', 'Mijn lievelingsfilm is Amélie.', 'My favourite film is Amélie.', { theme: 'hobbies', stage: 2, id: 'lievelings', gender: 'de', note: 'Glued to the noun: lievelingsboek, lievelingseten.' });
  W('favoriet', 'favourite', 'adj', 'Wat is je favoriete restaurant?', 'What is your favourite restaurant?', { theme: 'hobbies', stage: 2 });
  W('liever', 'rather / prefer', 'adv', 'Ik drink liever thee.', 'I prefer tea.', { theme: 'comparison', stage: 2 });
  W('het liefst', 'most of all / best of all', 'adv', 'Ik lees het liefst in bed.', 'I like reading in bed best of all.', { theme: 'comparison', stage: 2, id: 'het-liefst' });
  W('het meest', 'the most', 'adv', 'Muziek vind ik het meest ontspannend.', 'I find music the most relaxing.', { theme: 'comparison', stage: 2, id: 'het-meest' });
  W('het minst', 'the least', 'adv', 'Fitness vind ik het minst leuk.', 'I like gym training the least.', { theme: 'comparison', stage: 2, id: 'het-minst' });
  W('populair', 'popular', 'adj', 'Padel is nu heel populair.', 'Padel is very popular now.', { theme: 'basics', stage: 2 });
  W('creatief', 'creative', 'adj', 'Schilderen is creatief.', 'Painting is creative.', { theme: 'hobbies', stage: 2 });

  N('uitje', 'het', 'uitjes', 'outing / day out', 'We plannen een uitje met het team.', 'We are planning an outing with the team.', { theme: 'leisure', stage: 2 });
  N('picknick', 'de', 'picknicks', 'picnic', 'Zondag houden we een picknick in het park.', 'On Sunday we are having a picnic in the park.', { theme: 'leisure', stage: 2 });
  N('terras', 'het', 'terrassen', 'terrace (outdoor café seating)', 'Zullen we op het terras zitten?', 'Shall we sit on the terrace?', { theme: 'leisure', stage: 2 });
  N('borrel', 'de', 'borrels', 'drinks (social)', 'Vrijdag is er een borrel op kantoor.', 'On Friday there are drinks at the office.', { theme: 'leisure', stage: 2 });
  N('festival', 'het', 'festivals', 'festival', 'In de zomer zijn er veel festivals.', 'In summer there are many festivals.', { theme: 'leisure', stage: 2 });
  N('uitnodiging', 'de', 'uitnodigingen', 'invitation', 'Bedankt voor de uitnodiging!', 'Thanks for the invitation!', { theme: 'leisure', stage: 2 });
  N('verjaardagsfeest', 'het', 'verjaardagsfeesten', 'birthday party', 'Kom je naar mijn verjaardagsfeest?', 'Are you coming to my birthday party?', { theme: 'leisure', stage: 2 });
  N('kaartje', 'het', 'kaartjes', 'ticket', 'De kaartjes zijn uitverkocht.', 'The tickets are sold out.', { theme: 'leisure', stage: 2 });
  W('uitverkocht', 'sold out', 'adj', 'Het concert is uitverkocht.', 'The concert is sold out.', { theme: 'leisure', stage: 2 });
  W('gratis', 'free of charge', 'adj', 'De toegang is gratis.', 'Entry is free.', { theme: 'basics', stage: 2 });
  VB('meedoen', 'to take part / join in', 'doe mee|doet mee|doen mee', 'deed mee|deden mee', 'meegedaan', 'hebben', 'Doe je mee met het toernooi?', 'Are you joining the tournament?', { theme: 'leisure', stage: 2 });
  VB('reserveren', 'to reserve', 'reserveer|reserveert|reserveren', 'reserveerde|reserveerden', 'gereserveerd', 'hebben', 'Ik heb een tafel gereserveerd.', 'I reserved a table.', { theme: 'leisure', stage: 2 });
  PH('zin hebben in', 'to feel like', 'Heb je zin in een ijsje?', 'Do you feel like an ice cream?', { theme: 'leisure', stage: 2, id: 'ph-zin-hebben-in' });
  PH('Lijkt me leuk!', 'Sounds fun!', 'Een picknick? Lijkt me leuk!', 'A picnic? Sounds fun!', { theme: 'leisure', stage: 2, id: 'ph-lijkt-me-leuk' });
  PH('Ik kan helaas niet.', 'Unfortunately I can’t.', 'Zaterdag kan ik helaas niet, ik werk.', 'Unfortunately I can’t on Saturday, I am working.', { theme: 'leisure', stage: 2, id: 'ph-kan-helaas-niet' });

  VB('oefenen', 'to practise', 'oefen|oefent|oefenen', 'oefende|oefenden', 'geoefend', 'hebben', 'Ik oefen elke dag een half uur.', 'I practise half an hour every day.', { theme: 'hobbies', stage: 2 });
  N('les', 'de', 'lessen', 'lesson / class', 'Ik heb op dinsdag pianoles.', 'I have a piano lesson on Tuesdays.', { theme: 'hobbies', stage: 2 });
  N('lid', 'het', 'leden', 'member', 'Ik ben lid van een schaakclub.', 'I am a member of a chess club.', { theme: 'hobbies', stage: 2, note: 'lid worden van = to join.' });
  N('abonnement', 'het', 'abonnementen', 'subscription / membership', 'Mijn abonnement op de sportschool is duur.', 'My gym membership is expensive.', { theme: 'hobbies', stage: 2 });
  N('beginner', 'de', 'beginners', 'beginner', 'Deze les is voor beginners.', 'This class is for beginners.', { theme: 'hobbies', stage: 2 });
  W('gevorderd', 'advanced', 'adj', 'Er is ook een groep voor gevorderden.', 'There is also a group for advanced learners.', { theme: 'hobbies', stage: 2 });
  W('moeilijk', 'difficult', 'adj', 'Piano is moeilijker dan gitaar.', 'Piano is harder than guitar.', { theme: 'basics', stage: 2 });
  W('makkelijk', 'easy', 'adj', 'Kaarten is makkelijk te leren.', 'Cards are easy to learn.', { theme: 'basics', stage: 2, altNl: ['gemakkelijk'] });
  W('verslavend', 'addictive', 'adj', 'Die serie is verslavend.', 'That series is addictive.', { theme: 'feelings', stage: 2 });
  VB('proberen', 'to try', 'probeer|probeert|proberen', 'probeerde|probeerden', 'geprobeerd', 'hebben', 'Ik wil padel eens proberen.', 'I want to try padel some time.', { theme: 'basics', stage: 2 });
  W('sinds kort', 'recently / since a short time', 'adv', 'Ik doe sinds kort aan yoga.', 'I have recently started doing yoga.', { theme: 'time', stage: 2, id: 'sinds-kort' });
  PH('aan … doen', 'to do (a sport)', 'Ik doe aan hardlopen.', 'I do running.', { theme: 'sport', stage: 2, id: 'ph-aan-doen', note: 'doen aan + sport: ik doe aan yoga / voetbal.' });

  /* ---------------- Unit 6 lessons ---------------- */
  const u6 = [];
  u6.push(lesson('s2u6l1', 'Faster, healthier, more fun: the comparative', 'You can compare sports and activities: sneller dan, even gezond als, and say what is better or worse.', [
    h('adjective + -er'),
    p('Every adjective, short or long, takes **-er**: `snel → sneller`, `gezond → gezonder`, `interessant → interessanter`. English switches to "more" for long words; Dutch never does.'),
    table(['adjective', 'comparative', 'rule'], [['snel', '*sneller', 'just add -er'], ['groot', '*groter', 'open syllable: one o'], ['dik', '*dikker', 'short vowel: double consonant'], ['duur', '*duurder', 'ends in r: insert d'], ['lekker', '*lekkerder', 'ends in r: insert d'], ['goed', '*beter', 'irregular'], ['veel', '*meer', 'irregular'], ['weinig', '*minder', 'irregular'], ['graag', '*liever', 'irregular']]),
    h('than, as … as'),
    list('`dan` = than: `Fietsen is sneller dan lopen.`', '`even … als` / `net zo … als` = as … as: `Zwemmen is even gezond als fietsen.`', '`niet zo … als` = not as … as: `Yoga is niet zo vermoeiend als hardlopen.`'),
    p('Before a noun the comparative takes -e like any adjective: `een snellere fiets`, `een beter idee` (het-word with een: no -e).'),
    ex(['Hardlopen is vermoeiender dan wandelen, maar ook gezonder.', 'Running is more tiring than walking, but also healthier.'], ['Mijn broer is sportiever dan ik.', 'My brother is sportier than me.'], ['Tennis is net zo duur als fitness.', 'Tennis is just as expensive as gym training.'], ['Ik heb een betere conditie dan vorig jaar.', 'I am fitter than last year.']),
    tip('After `dan` use the subject form in careful Dutch: `groter dan ik`. You will hear `dan mij` a lot; both are fine in speech.'),
  ], ['g2-comparison'], ['hardlopen', 'tennis', 'fitness', 'training', 'team', 'club', 'conditie', 'yoga', 'sneller', 'langzaam', 'beter', 'slechter', 'sportief', 'lui', 'actief', 'vermoeiend', 'ontspannend', 'saai', 'ph-even-als', 'dan-than'], [
    mc('Comparative of "gezond":', ['meer gezond', 'gezonder', 'gezondst'], 1, 'Always -er.'),
    mc('Comparative of "duur":', ['duurer', 'duurder', 'duurster'], 1, 'After r: insert d.'),
    mc('Comparative of "goed":', ['goeder', 'beter', 'meer goed'], 1, 'Irregular: beter.'),
    mc('"Zwemmen is ___ gezond ___ fietsen." (as … as)', ['even … als', 'zo … dan', 'meer … als'], 0, 'even … als.'),
    fill('Fietsen is ___ dan lopen. (snel)', ['sneller'], 'Cycling is faster than walking.', 'snel + er.'),
    fill('Yoga is ___ dan hardlopen. (ontspannend)', ['ontspannender'], 'Yoga is more relaxing than running.', 'Long adjectives also take -er.'),
    fill('Mijn conditie is ___ dan vorig jaar. (slecht)', ['slechter'], 'My fitness is worse than last year.', 'slecht + er.'),
    fill('Ik eet ___ groente dan vroeger. (veel)', ['meer'], 'I eat more vegetables than before.', 'veel → meer.'),
    build('Tennis is more expensive than football.', 'Tennis is duurder dan voetbal.', ['meer duur', 'als'], 'duurder dan.'),
    build('Walking is as healthy as cycling.', 'Wandelen is even gezond als fietsen.', ['dan', 'gezonder'], 'even … als.'),
    build('My sister is sportier than me.', 'Mijn zus is sportiever dan ik.', ['als', 'sportief'], 'sportiever dan ik.'),
    build('I have a better bike than you.', 'Ik heb een betere fiets dan jij.', ['beter', 'als'], 'de fiets → een betere fiets.'),
    tr('en-nl', 'Running is more tiring than swimming.', ['Hardlopen is vermoeiender dan zwemmen.'], 'vermoeiender dan.'),
    tr('nl-en', 'Fitness vind ik saaier dan tennis.', ['I find gym training more boring than tennis.', 'I think fitness is more boring than tennis.'], 'saaier = more boring.'),
    fix('Zwemmen is meer gezond dan lopen.', ['Zwemmen is gezonder dan lopen.'], 'No "meer": gezonder.'),
    fix('Hij is groter als ik.', ['Hij is groter dan ik.'], 'than = dan (als is heard, but dan is correct).'),
    dict('Fietsen is sneller en gezonder dan de tram.', 'Cycling is faster and healthier than the tram.', 'sneller, gezonder dan.'),
    listen('Ik ben minder sportief dan mijn broer, maar ik loop wel twee keer per week hard.', ['I am less sporty than my brother, but I do run twice a week.', 'I am sportier than my brother and I run every day.', 'My brother runs twice a week.'], 0, 'minder sportief dan; twee keer per week hard.'),
    speak('Ik vind zwemmen leuker dan hardlopen, omdat het minder vermoeiend is.', 'I like swimming more than running, because it is less tiring.'),
    free('Compare two sports or hobbies you know: which is more fun, more tiring, more expensive, and why.', 'Ik vind fietsen leuker dan hardlopen. Hardlopen is vermoeiender, maar het is goedkoper. Fietsen is even gezond als hardlopen en je ziet meer van de stad.', 'I like cycling more than running. Running is more tiring, but it is cheaper. Cycling is as healthy as running and you see more of the city.', { hints: ['… is leuker dan …', '… is vermoeiender / duurder dan …', '… is even … als …'] }),
    auto(3, ['tr-nl-en', 'mc-meaning']),
  ], [
    fill('Voetbal is ___ dan tennis. (populair)', ['populairder'], 'Football is more popular than tennis.', 'populair + der (ends in r).'),
    fill('Ik drink ___ thee dan koffie. (graag)', ['liever'], 'I prefer tea to coffee.', 'graag → liever.'),
    mc('"Net zo groot als" means', ['bigger than', 'just as big as', 'not as big as'], 1, 'net zo … als.'),
    build('Yoga is calmer than fitness.', 'Yoga is rustiger dan fitness.', ['als', 'meer rustig'], 'rustiger dan.'),
    tr('en-nl', 'My condition is better than last year.', ['Mijn conditie is beter dan vorig jaar.'], 'beter dan.'),
    speak('Hardlopen is vermoeiender dan wandelen, maar ik vind het leuker.', 'Running is more tiring than walking, but I like it more.'),
  ]));

  u6.push(lesson('s2u6l2', 'Favourites: the superlative, liever and het liefst', 'You can say what you like best, which is the most or least fun, and talk about your favourite things.', [
    h('adjective + -st'),
    table(['adjective', 'comparative', 'superlative'], [['leuk', '*leuker', '*leukst'], ['mooi', '*mooier', '*mooist'], ['groot', '*groter', '*grootst'], ['duur', '*duurder', '*duurst'], ['goed', '*beter', '*best'], ['veel', '*meer', '*meest'], ['weinig', '*minder', '*minst'], ['graag', '*liever', '*liefst']]),
    p('Before a noun the superlative always takes **-e**: `de leukste hobby`, `het mooiste boek`, `mijn beste vriend`. On its own it takes `het`: `Deze film is het leukst.` `Ik vind koken het leukst.`'),
    h('graag, liever, het liefst'),
    p('`Ik lees graag.` (I like reading.) `Ik lees liever dan ik tv kijk.` (I prefer reading to watching tv.) `Ik lees het liefst in bed.` (Best of all I like reading in bed.) `liever` + `dan` = would rather … than.'),
    h('Favourite'),
    p('`favoriet` (adjective): `mijn favoriete restaurant`. `lievelings-` glued to the noun: `mijn lievelingsboek`, `mijn lievelingseten`. `Wat is je lievelingsfilm?`'),
    ex(['Koken vind ik het leukst, en afwassen het minst leuk.', 'I like cooking the most, and washing up the least.'], ['Mijn lievelingsplek in Amsterdam is het Vondelpark.', 'My favourite spot in Amsterdam is the Vondelpark.'], ['Ik ga het liefst op zondagochtend naar de markt.', 'Best of all I like going to the market on Sunday morning.'], ['Ze zingt in het beste koor van de stad.', 'She sings in the best choir in the city.']),
    warn('"the best of the city" is `het beste van de stad`, with **van**, not "in".'),
  ], ['g2-comparison'], ['bakken', 'tuinieren', 'schilderen', 'zingen', 'piano', 'koor', 'theater', 'bordspel', 'puzzel', 'kaarten', 'lievelings', 'favoriet', 'liever', 'het-liefst', 'het-meest', 'het-minst', 'populair', 'creatief'], [
    mc('Superlative of "leuk":', ['leukst', 'meest leuk', 'leuker'], 0, '-st.'),
    mc('Superlative of "graag":', ['liefst', 'graagst', 'meest graag'], 0, 'graag, liever, liefst: irregular.'),
    mc('"My favourite film":', ['mijn favoriet film', 'mijn favoriete film', 'mijn liefst film'], 1, 'favoriet + e before a de-word.'),
    mc('"Deze hobby is ___ duurst."', ['de', 'het', '—'], 1, 'Superlative on its own: het duurst.'),
    fill('Schilderen vind ik ___ leukst. (the)', ['het'], 'I like painting the most.', 'het + superlative.'),
    fill('Wat is je ___boek? (favourite)', ['lievelings'], 'What is your favourite book?', 'lievelingsboek, one word.'),
    fill('Ik speel ___ piano dan gitaar. (rather)', ['liever'], 'I would rather play piano than guitar.', 'liever … dan.'),
    fill('Dit is het ___ koor van Nederland. (goed)', ['beste'], 'This is the best choir in the Netherlands.', 'het beste koor van.'),
    build('I like baking the most.', 'Ik vind bakken het leukst.', ['leukste', 'meest'], 'het leukst.'),
    build('Best of all I like reading in bed.', 'Ik lees het liefst in bed.', ['liever', 'graag'], 'het liefst.'),
    build('My favourite spot is the Vondelpark.', 'Mijn lievelingsplek is het Vondelpark.', ['favoriet', 'liefste'], 'lievelingsplek.'),
    build('Board games are the most popular in winter.', 'Bordspellen zijn het populairst in de winter.', ['meest populair', 'populairder'], 'het populairst.'),
    tr('en-nl', 'I would rather sing than dance.', ['Ik zing liever dan dat ik dans.', 'Ik zing liever dan ik dans.', 'Ik zing liever dan dansen.'], 'liever … dan.'),
    tr('nl-en', 'Puzzels vind ik het minst interessant.', ['I find puzzles the least interesting.', 'Puzzles interest me the least.'], 'het minst.'),
    fix('Dit is de mooiste plek in de stad.', ['Dit is de mooiste plek van de stad.'], 'Superlative + van.'),
    fix('Ik hou het meest van koken het liefst.', ['Ik hou het meest van koken.', 'Ik kook het liefst.'], 'One superlative is enough.'),
    dict('Mijn lievelingseten is stamppot met worst.', 'My favourite food is stamppot with sausage.', 'lievelingseten.'),
    listen('Ik vind zingen het leukst, maar ik ga het liefst naar het theater.', ['I like singing the most, but best of all I like going to the theatre.', 'I sing in the theatre.', 'I like the theatre the least.'], 0, 'het leukst; het liefst.'),
    speak('Mijn favoriete hobby is bakken. Ik bak het liefst op zondag.', 'My favourite hobby is baking. I like baking best on Sundays.'),
    free('Talk about your favourites: hobby, place in the city, food. Use het liefst or lievelings- at least once.', 'Mijn lievelingshobby is fotograferen. Mijn favoriete plek is de Amstel. Ik eet het liefst Indonesisch, en pannenkoeken vind ik het lekkerst.', 'My favourite hobby is photography. My favourite spot is the Amstel. I like eating Indonesian best, and I find pancakes the tastiest.', { hints: ['Mijn lievelings… is …', 'Mijn favoriete … is …', 'Ik … het liefst …'] }),
    match([['bakken', 'to bake'], ['tuinieren', 'to garden'], ['schilderen', 'to paint'], ['zingen', 'to sing'], ['het koor', 'choir'], ['het bordspel', 'board game']]),
  ], [
    fill('Dat is de ___ film van het jaar. (goed)', ['beste'], 'That is the best film of the year.', 'beste.'),
    fill('Ik ga ___ liefst naar het strand.', ['het'], 'Best of all I like going to the beach.', 'het liefst.'),
    mc('"Mijn lievelingsboek" means', ['my lovely book', 'my favourite book', 'my dearest book'], 1, 'lievelings- = favourite.'),
    build('Which sport do you find the most fun?', 'Welke sport vind je het leukst?', ['leukste', 'meest'], 'het leukst.'),
    tr('en-nl', 'I prefer tea.', ['Ik drink liever thee.', 'Ik heb liever thee.'], 'liever.'),
    speak('Van alle hobby’s vind ik koken het leukst en schoonmaken het minst leuk.', 'Of all hobbies I like cooking the most and cleaning the least.'),
  ]));

  u6.push(lesson('s2u6l3', 'Weekend plans: invitations with voordat, nadat, zodra and zodat', 'You can invite someone, accept or decline politely, and plan an outing with before, after, as soon as and so that.', [
    h('Planning with conjunctions'),
    table(['conjunction', 'example'], [['voordat', '*Laten we eten voordat we naar het theater gaan.'], ['nadat', '*Nadat de film is afgelopen, gaan we een drankje doen.'], ['zodra', '*Ik bel je zodra ik de kaartjes heb.'], ['zodat', '*Ik reserveer nu, zodat we een tafel hebben.'], ['als', '*Als het mooi weer is, houden we een picknick.']]),
    p('`zodat` gives the **result or purpose** (so that); `omdat` gives the **reason** (because). `Ik reserveer omdat het druk is` (reason) vs `Ik reserveer zodat we een tafel hebben` (purpose).'),
    h('Inviting, accepting, declining'),
    table(['Dutch', 'English'], [['*Heb je zin om zaterdag mee te gaan?', 'Do you feel like coming along on Saturday?'], ['*Zullen we een picknick houden?', 'Shall we have a picnic?'], ['*Lijkt me leuk!', 'Sounds fun!'], ['*Gezellig, ik ben erbij.', 'Lovely, count me in.'], ['*Ik kan helaas niet, ik moet werken.', 'Unfortunately I can’t, I have to work.'], ['*Een andere keer graag.', 'Another time, gladly.'], ['*Hoe laat spreken we af?', 'What time shall we meet?']]),
    ex(['Zaterdag is er een festival in het Westerpark. De toegang is gratis. Ga je mee?', 'On Saturday there is a festival in the Westerpark. Entry is free. Are you coming?'], ['Lijkt me leuk! Zullen we eerst ergens eten voordat we gaan?', 'Sounds fun! Shall we eat somewhere first before we go?'], ['Ik reserveer een tafel op het terras, zodat we buiten kunnen zitten.', 'I will reserve a table on the terrace, so that we can sit outside.'], ['De kaartjes zijn uitverkocht, dus ik kan helaas niet mee.', 'The tickets are sold out, so unfortunately I can’t come along.']),
    tip('`Gezellig!` is the all-purpose enthusiastic yes to any invitation.'),
  ], ['g2-subordinate', 'g2-om-te'], ['uitje', 'picknick', 'terras', 'borrel', 'festival', 'uitnodiging', 'verjaardagsfeest', 'kaartje', 'uitverkocht', 'gratis', 'meedoen', 'reserveren', 'ph-zin-hebben-in', 'ph-lijkt-me-leuk', 'ph-kan-helaas-niet'], [
    mc('Ik reserveer nu, ___ we zeker een tafel hebben.', ['omdat', 'zodat', 'hoewel'], 1, 'Purpose → zodat.'),
    mc('___ de film is afgelopen, gaan we iets drinken.', ['Voordat', 'Nadat', 'Zodat'], 1, 'After → nadat.'),
    mc('Ik bel je ___ ik de kaartjes heb.', ['zodra', 'terwijl', 'zodat'], 0, 'As soon as → zodra.'),
    mc('Someone invites you and you accept. You say:', ['Ik kan helaas niet.', 'Lijkt me leuk!', 'Waar gaat het om?'], 1, 'Sounds fun!'),
    fill('Laten we eten voordat we naar het theater ___. (gaan)', ['gaan'], 'Let us eat before we go to the theatre.', 'gaan at the end of the voordat-clause.'),
    fill('Heb je ___ om zaterdag mee te gaan naar het festival?', ['zin'], 'Do you feel like coming along to the festival on Saturday?', 'zin hebben om … te.'),
    fill('Het concert is ___, er zijn geen kaartjes meer.', ['uitverkocht'], 'The concert is sold out, there are no tickets left.', 'uitverkocht = sold out.'),
    fill('Ik neem een jas mee ___ ik het niet koud krijg.', ['zodat'], 'I am taking a coat so that I do not get cold.', 'zodat = so that.'),
    build('Shall we have a picnic on Sunday?', 'Zullen we zondag een picknick houden?', ['maken', 'Gaan'], 'een picknick houden.'),
    build('Unfortunately I can’t, I have to work.', 'Ik kan helaas niet, ik moet werken.', ['werk', 'niet kan'], 'kan helaas niet.'),
    build('Call me as soon as you are home.', 'Bel me zodra je thuis bent.', ['bent thuis', 'als'], 'zodra … bent.'),
    build('I will reserve a table so that we can sit outside.', 'Ik reserveer een tafel zodat we buiten kunnen zitten.', ['omdat', 'zitten kunnen'], 'zodat … kunnen zitten.'),
    tr('en-nl', 'Thanks for the invitation! Count me in.', ['Bedankt voor de uitnodiging! Ik ben erbij.', 'Dank je voor de uitnodiging! Ik ben erbij.'], 'ik ben erbij = count me in.'),
    tr('nl-en', 'Nadat we gegeten hebben, gaan we naar de borrel op kantoor.', ['After we have eaten, we are going to the drinks at the office.', 'After eating we go to the office drinks.'], 'nadat; borrel.'),
    fix('Nadat de film afgelopen is, we gaan naar huis.', ['Nadat de film afgelopen is, gaan we naar huis.', 'Nadat de film is afgelopen, gaan we naar huis.'], 'Inversion after the fronted clause.'),
    fix('Ik reserveer omdat we een tafel hebben.', ['Ik reserveer zodat we een tafel hebben.'], 'Purpose: zodat.'),
    dict('Zullen we zaterdag naar het festival gaan? De toegang is gratis.', 'Shall we go to the festival on Saturday? Entry is free.', 'zullen we; gratis.'),
    listen('Ik kan zaterdag helaas niet, maar zondag heb ik wel zin in een picknick.', ['Unfortunately I can’t on Saturday, but on Sunday I do feel like a picnic.', 'I can on Saturday, but not on Sunday.', 'I do not feel like a picnic this weekend.'], 0, 'helaas niet; wel zin in.'),
    speak('Heb je zin om zaterdag mee te gaan naar het festival? De toegang is gratis en het lijkt me gezellig.', 'Do you feel like coming to the festival on Saturday? Entry is free and I think it will be fun.'),
    free('Invite a friend to something this weekend. Say what, when, and one thing you will arrange (reserveren, kaartjes kopen) so that it goes well.', 'Heb je zin om zaterdag naar het theater te gaan? Ik koop de kaartjes vandaag, zodat ze niet uitverkocht zijn. We kunnen eerst eten voordat de voorstelling begint.', 'Do you feel like going to the theatre on Saturday? I will buy the tickets today so that they do not sell out. We can eat first before the show starts.', { hints: ['Heb je zin om … te …?', 'Ik … zodat …', 'voordat …'] }),
    auto(3, ['tr-nl-en', 'listen']),
  ], [
    mc('"Ik ben erbij" means', ['I am nearby', 'count me in', 'I am late'], 1, 'erbij zijn = to be there / in.'),
    fill('Ik koop de kaartjes nu, ___ ze niet uitverkocht zijn.', ['zodat'], 'I am buying the tickets now so that they do not sell out.', 'zodat.'),
    build('Let me know as soon as you know.', 'Laat me weten zodra je het weet.', ['als', 'weet je'], 'zodra … weet.'),
    tr('en-nl', 'Sounds fun!', ['Lijkt me leuk!', 'Leuk!'], 'Fixed phrase.'),
    listen('Zullen we eerst ergens eten voordat we naar het concert gaan?', ['Shall we eat somewhere first before we go to the concert?', 'Shall we eat after the concert?', 'Where is the concert?'], 0, 'voordat … gaan.'),
    speak('Bedankt voor de uitnodiging, maar ik kan helaas niet. Een andere keer graag!', 'Thanks for the invitation, but unfortunately I can’t. Another time, gladly!'),
  ]));

  u6.push(lesson('s2u6l4', 'Talking about your hobbies in depth', 'You can explain what you do in your free time, how long, how often, how you started and why you like it, and join a club.', [
    h('The questions people ask'),
    table(['question', 'answer pattern'], [['*Wat doe je in je vrije tijd?', '*Ik doe aan yoga. / Ik speel piano. / Ik zit op een koor.'], ['*Hoe lang doe je dat al?', '*Al vijf jaar. / Sinds kort.'], ['*Hoe vaak?', '*Twee keer per week, meestal ’s avonds.'], ['*Hoe ben je begonnen?', '*Een vriend nam me mee naar een les.'], ['*Waarom vind je het leuk?', '*Omdat het ontspannend is en ik nieuwe mensen ontmoet.']]),
    p('`doen aan` + sport: `Ik doe aan hardlopen.` `zitten op` + club or course: `Ik zit op voetbal / op pianoles.` `lid zijn van` / `lid worden van` = to be / become a member of.'),
    h('Levels and effort'),
    p('`beginner`, `gevorderd`, `les nemen` (take lessons), `oefenen` (practise), `moeilijk / makkelijk`, `Het gaat steeds beter.` (It keeps getting better.) `Ik ben er niet goed in, maar ik vind het leuk.`'),
    ex(['Ik doe sinds kort aan padel. Het is makkelijk te leren en heel gezellig.', 'I recently started padel. It is easy to learn and very sociable.'], ['Ik speel al tien jaar piano, maar ik oefen te weinig.', 'I have played the piano for ten years, but I practise too little.'], ['Ik ben lid geworden van een schaakclub zodat ik meer mensen leer kennen.', 'I joined a chess club so that I get to know more people.'], ['Ik wil dit jaar zeilen proberen, hoewel ik geen ervaring heb.', 'I want to try sailing this year, although I have no experience.']),
    tip('Dutch clubs (verenigingen) are a fast way into Dutch life and Dutch conversation. `Mag ik een keer meedoen?` gets you a free trial almost everywhere.'),
  ], ['g2-time-expressions', 'g2-subordinate', 'g2-comparison'], ['oefenen', 'les', 'lid', 'abonnement', 'beginner', 'gevorderd', 'moeilijk', 'makkelijk', 'verslavend', 'gezellig', 'ervaring', 'proberen', 'sinds-kort', 'ph-aan-doen'], [
    mc('"I do yoga":', ['Ik doe yoga.', 'Ik doe aan yoga.', 'Ik maak yoga.'], 1, 'doen aan + sport.'),
    mc('"Hoe lang doe je dat al?" A natural answer:', ['Over drie jaar.', 'Al drie jaar.', 'Drie jaar geleden.'], 1, 'al + duration.'),
    mc('"lid worden van" means', ['to leave', 'to join (become a member of)', 'to lead'], 1, 'lid = member.'),
    art('lid', 'het', 'het lid (plural: de leden).'),
    art('abonnement', 'het', 'het abonnement.'),
    plural('het lid', ['leden'], 'Irregular: leden.'),
    fill('Ik ___ sinds kort aan hardlopen.', ['doe'], 'I recently started running.', 'doen aan.'),
    fill('Ik speel ___ tien jaar gitaar.', ['al'], 'I have played the guitar for ten years.', 'al + duration.'),
    fill('Ik ben ___ geworden van een tennisclub.', ['lid'], 'I joined a tennis club.', 'lid worden van.'),
    fill('Deze les is voor ___, niet voor gevorderden.', ['beginners'], 'This class is for beginners, not advanced students.', 'beginners.'),
    build('How long have you been doing that?', 'Hoe lang doe je dat al?', ['heb', 'gedaan'], 'Present + al.'),
    build('I practise half an hour every day.', 'Ik oefen elke dag een half uur.', ['oefent', 'per'], 'oefen; elke dag.'),
    build('May I join once to try?', 'Mag ik een keer meedoen om te proberen?', ['doe mee', 'voor'], 'meedoen; om te proberen.'),
    build('I am not good at it, but I like it.', 'Ik ben er niet goed in, maar ik vind het leuk.', ['in het', 'daar'], 'er … in.'),
    tr('en-nl', 'It keeps getting better.', ['Het gaat steeds beter.'], 'steeds beter.'),
    tr('nl-en', 'Ik zit al twee jaar op pianoles, maar ik oefen te weinig.', ['I have taken piano lessons for two years, but I practise too little.', 'I have been in piano lessons for two years but practise too little.'], 'op les zitten; te weinig.'),
    fix('Ik doe voetbal sinds drie jaar.', ['Ik doe al drie jaar aan voetbal.', 'Ik voetbal al drie jaar.'], 'doen aan; al + duration.'),
    dict('Ik ben lid van een koor en we oefenen elke woensdagavond.', 'I am a member of a choir and we rehearse every Wednesday evening.', 'lid van; oefenen.'),
    listen('Ik doe sinds kort aan yoga. Het is moeilijker dan ik dacht, maar heel ontspannend.', ['I recently started yoga. It is harder than I thought, but very relaxing.', 'I have done yoga for years. It is easy and boring.', 'I want to start yoga because it is easy.'], 0, 'sinds kort; moeilijker dan ik dacht.'),
    speak('In mijn vrije tijd doe ik aan hardlopen. Ik loop al twee jaar hard, drie keer per week.', 'In my free time I run. I have been running for two years, three times a week.'),
    read('Schaakclub Oost zoekt nieuwe leden! Ben je beginner of gevorderd? Iedereen is welkom. We spelen elke dinsdagavond van 19.30 tot 22.30 uur in buurthuis De Meevaart. De eerste drie avonden zijn gratis, daarna kost een lidmaatschap 60 euro per jaar. Er is koffie, thee en een gezellige bar. Wil je een keer meedoen? Kom gewoon langs of stuur een mail naar info@schaakoost.nl.', [
      { q: 'Who can join?', options: ['only advanced players', 'only beginners', 'everyone'], answer: 2, explain: '"Iedereen is welkom."' },
      { q: 'What does membership cost after the trial evenings?', options: ['60 euros a year', '60 euros a month', 'it is free'], answer: 0, explain: '"60 euro per jaar".' },
      { q: 'How do you try it out?', options: ['fill in a form online', 'just come by, or email', 'pay first'], answer: 1, explain: '"Kom gewoon langs of stuur een mail".' },
    ], { en: 'Chess club Oost is looking for new members! Are you a beginner or advanced? Everyone is welcome. We play every Tuesday evening from 19:30 to 22:30 in community centre De Meevaart. The first three evenings are free, after that membership costs 60 euros a year. There is coffee, tea and a friendly bar. Want to join once? Just come by or send an email to info@schaakoost.nl.' }),
    free('Talk for a minute about one hobby: what, how long, how often, how you started, why you like it.', 'Ik zing in een koor. Ik doe dat al vier jaar, elke woensdagavond. Een collega nam me een keer mee. Ik vind het leuk omdat het gezellig is en omdat ik er Nederlands van leer.', 'I sing in a choir. I have done that for four years, every Wednesday evening. A colleague took me along once. I like it because it is convivial and because I learn Dutch from it.', { hints: ['Ik … al …', '… keer per week', 'Ik ben begonnen toen …', 'omdat …'] }),
    write('Write an email (5 to 7 sentences) to a club you want to join: say who you are, what your level is, how long you have done the activity, and ask whether you can come and try.', ['Beste … / Geachte … opening', 'Says level (beginner / gevorderd) and how long (al … / sinds …)', 'Uses one conjunction with the verb at the end', 'Asks whether you can join once (Mag ik een keer meedoen?)', 'Closes with Met vriendelijke groet, + name'], 'Beste schaakclub Oost, ik ben Sam en ik woon sinds een jaar in Amsterdam. Ik schaak al lang, maar ik ben geen gevorderde speler. Ik zoek een club zodat ik vaker kan spelen en mensen leer kennen. Mag ik volgende week dinsdag een keer meedoen? Met vriendelijke groet, Sam Taylor'),
  ], [
    fill('Ik ___ aan tennis. (doen)', ['doe'], 'I play tennis.', 'doen aan.'),
    fill('Hoe ___ doe je dat al? — Al vijf jaar.', ['lang'], 'How long have you been doing that? — Five years.', 'hoe lang.'),
    mc('"Ik ben er niet goed in" means', ['I am not in it', 'I am not good at it', 'I am not there'], 1, 'er … in = at it.'),
    build('I joined a choir.', 'Ik ben lid geworden van een koor.', ['heb', 'word'], 'ben lid geworden van.'),
    tr('en-nl', 'May I join once?', ['Mag ik een keer meedoen?', 'Mag ik een keertje meedoen?'], 'meedoen.'),
    speak('Ik speel al drie jaar piano. Het gaat steeds beter, maar ik oefen te weinig.', 'I have played the piano for three years. It keeps getting better, but I practise too little.'),
  ]));

  units.push(unit('s2u6', 'Vrije tijd', 'hobbies and free time', u6, [
    fill('Fietsen is ___ dan de bus. (snel)', ['sneller'], 'Cycling is faster than the bus.', 'sneller dan.'),
    fill('Koken vind ik ___ leukst.', ['het'], 'I like cooking the most.', 'het leukst.'),
    fill('Ik doe ___ drie jaar aan yoga.', ['al'], 'I have done yoga for three years.', 'al.'),
    fill('Ik reserveer, ___ we een tafel hebben.', ['zodat'], 'I am reserving so that we have a table.', 'zodat.'),
    mc('"Even groot als" means', ['bigger than', 'as big as', 'less big than'], 1, 'even … als.'),
    mc('Comparative of "goed":', ['goeder', 'beter'], 1, 'beter.'),
    build('Swimming is healthier than running.', 'Zwemmen is gezonder dan hardlopen.', ['meer gezond', 'als'], 'gezonder dan.'),
    build('What is your favourite film?', 'Wat is je lievelingsfilm?', ['favoriet', 'liefste'], 'lievelingsfilm.'),
    build('Do you feel like coming along?', 'Heb je zin om mee te gaan?', ['meegaan', 'voor'], 'zin om mee te gaan.'),
    fix('Tennis is meer duur dan voetbal.', ['Tennis is duurder dan voetbal.'], 'duurder.'),
    fix('Ik bel je zodra ik heb de kaartjes.', ['Ik bel je zodra ik de kaartjes heb.'], 'Verb at the end.'),
    tr('en-nl', 'I would rather stay home.', ['Ik blijf liever thuis.'], 'liever.'),
    listen('Ik ben sinds kort lid van een tennisclub en ik train twee keer per week.', ['I recently joined a tennis club and I train twice a week.', 'I left the tennis club two weeks ago.', 'I have been a tennis member for years.'], 0, 'sinds kort lid; twee keer per week.'),
    speak('Mijn lievelingshobby is koken. Ik kook liever dan dat ik uit eten ga, omdat het goedkoper en gezelliger is.', 'My favourite hobby is cooking. I would rather cook than eat out, because it is cheaper and more sociable.'),
  ]));
})();
