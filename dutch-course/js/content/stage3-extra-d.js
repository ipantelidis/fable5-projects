/* Stage 3 (B1) — extra lessons for Unit 7 (Vergaderingen en e-mails) and Unit 8 (Nederlandse cultuur en geschiedenis): lessons 3 to 5 of each unit.
   Loaded after stage3-extra-c.js; lessons are appended to the existing units. */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson } = A;
  const addTo = (unitId, l) => { const f = A.findUnit(unitId); if (f) f.unit.lessons.push(l); };
  const S = { stage: 3 };

  /* ================= Unit 7, lesson 3: presentations ================= */
  N('dia', 'de', "dia's", 'slide', 'Op de volgende dia ziet u de cijfers.', 'On the next slide you see the figures.', { theme: 'meetings', ...S });
  N('grafiek', 'de', 'grafieken', 'graph', 'De grafiek laat een stijging zien.', 'The graph shows a rise.', { theme: 'meetings', ...S });
  N('tabel', 'de', 'tabellen', 'table', 'In de tabel staan de resultaten per maand.', 'The table shows the results per month.', { theme: 'meetings', ...S });
  N('cijfer', 'het', 'cijfers', 'figure', 'De cijfers van dit kwartaal zijn goed.', 'This quarter’s figures are good.', { theme: 'meetings', ...S });
  N('publiek', 'het', null, 'audience', 'Kijk naar het publiek, niet naar het scherm.', 'Look at the audience, not at the screen.', { theme: 'meetings', ...S });
  N('overzicht', 'het', 'overzichten', 'overview', 'Eerst geef ik een kort overzicht.', 'First I will give a short overview.', { theme: 'meetings', ...S });
  N('kernboodschap', 'de', 'kernboodschappen', 'key message', 'Wat is je kernboodschap?', 'What is your key message?', { theme: 'meetings', ...S });
  N('aanbeveling', 'de', 'aanbevelingen', 'recommendation', 'Ik sluit af met drie aanbevelingen.', 'I will finish with three recommendations.', { theme: 'meetings', ...S });
  VB('toelichten', 'to explain / clarify', 'licht toe|licht toe|lichten toe', 'lichtte toe|lichtten toe', 'toegelicht', 'hebben', 'Ik zal dat zo toelichten.', 'I will explain that in a moment.', { theme: 'meetings', ...S });
  VB('laten zien', 'to show', 'laat zien|laat zien|laten zien', 'liet zien|lieten zien', 'laten zien', 'hebben', 'Deze grafiek laat zien dat de verkoop stijgt.', 'This graph shows that sales are rising.', { theme: 'meetings', ...S, id: 'laten-zien' });
  VB('ingaan op', 'to go into / address', 'ga in op|gaat in op|gaan in op', 'ging in op|gingen in op', 'ingegaan op', 'zijn', 'Daar ga ik straks verder op in.', 'I will go into that further later.', { theme: 'meetings', ...S, id: 'ingaan-op' });
  VB('afsluiten', 'to conclude', 'sluit af|sluit af|sluiten af', 'sloot af|sloten af', 'afgesloten', 'hebben', 'Ik wil afsluiten met een vraag.', 'I want to conclude with a question.', { theme: 'meetings', ...S });
  VB('benadrukken', 'to emphasise', 'benadruk|benadrukt|benadrukken', 'benadrukte|benadrukten', 'benadrukt', 'hebben', 'Ik wil één punt benadrukken.', 'I want to emphasise one point.', { theme: 'meetings', ...S });
  PH('Ik wil het vandaag hebben over …', 'Today I want to talk about …', 'Ik wil het vandaag hebben over onze plannen voor volgend jaar.', 'Today I want to talk about our plans for next year.', { theme: 'meetings', ...S, id: 'ph-hebben-over' });
  PH('Zoals u ziet, …', 'As you can see, …', 'Zoals u ziet, is de omzet gestegen.', 'As you can see, turnover has risen.', { theme: 'meetings', ...S, id: 'ph-zoals-u-ziet' });
  PH('Dat is een goede vraag.', 'That is a good question.', 'Dat is een goede vraag. Daar kom ik zo op terug.', 'That is a good question. I will come back to that in a moment.', { theme: 'meetings', ...S, id: 'ph-goede-vraag' });
  PH('Dat weet ik niet precies; ik zoek het voor u uit.', 'I do not know exactly; I will find out for you.', 'Dat weet ik niet precies; ik zoek het voor u uit.', 'I do not know exactly; I will find out for you.', { theme: 'meetings', ...S, id: 'ph-zoek-het-uit' });
  PH('Zijn er nog vragen?', 'Are there any more questions?', 'Dat was het. Zijn er nog vragen?', 'That was it. Are there any more questions?', { theme: 'meetings', ...S, id: 'ph-nog-vragen' });

  addTo('s3u7', lesson('s3u7l3', 'Giving a presentation and handling questions', 'You can give a short work presentation in Dutch: open, guide the audience, describe a graph, close, and deal with questions you can and cannot answer.', [
    h('Signposting: tell them where you are'),
    table(['moment', 'Dutch'], [['open', '*Ik wil het vandaag hebben over … / Eerst …, daarna …, en tot slot …'], ['move on', '*Dan kom ik nu bij … / Dat brengt me bij het volgende punt.'], ['refer to a slide', '*Zoals u ziet, … / Deze grafiek laat zien dat …'], ['stress', '*Ik wil één ding benadrukken: …'], ['park', '*Daar ga ik straks verder op in.'], ['close', '*Samenvattend: … / Ik sluit af met drie aanbevelingen. / Zijn er nog vragen?']]),
    h('Describing a graph'),
    p('`De omzet **is gestegen** van 2 naar 3 miljoen.` `De kosten **zijn** licht **gedaald**.` `Het aantal klanten **is** gelijk **gebleven**.` `Er is een duidelijke **stijging / daling** te zien.` `stijgen`, `dalen` and `blijven` all take `zijn`.'),
    h('Questions'),
    list('Buy time: `Dat is een goede vraag.`', 'Check: `Als ik u goed begrijp, vraagt u of …`', 'Answer short, then stop.', 'Do not know: `Dat weet ik niet precies; ik zoek het voor u uit.` Dutch audiences respect that more than bluffing.', 'Off topic: `Daar kom ik na afloop graag op terug.`'),
    h('Word order that helps you'),
    p('Front what links to the slide or the previous point: `**Op deze dia** ziet u …`, `**Dat** brengt me bij …`, `**Daarover** wil ik nog iets zeggen.` Verb second, every time.'),
    ex(['Ik wil het vandaag hebben over de resultaten van het derde kwartaal. Eerst geef ik een overzicht, daarna ga ik in op de kosten.', 'Today I want to talk about the results of the third quarter. First I will give an overview, then I will go into the costs.'], ['Zoals u ziet, is het aantal klanten met tien procent gestegen.', 'As you can see, the number of customers has risen by ten per cent.'], ['Ik wil één ding benadrukken: zonder extra mensen halen we de planning niet.', 'I want to emphasise one thing: without extra people we will not make the schedule.'], ['Dat is een goede vraag. Dat weet ik niet precies; ik zoek het voor u uit.', 'That is a good question. I do not know exactly; I will find out for you.']),
    tip('Write your first and last sentence out in full and learn them. The middle can be key words.'),
  ], ['g3-word-order', 'g3-pronominal-adverbs'], ['dia', 'grafiek', 'tabel', 'cijfer', 'publiek', 'overzicht', 'kernboodschap', 'aanbeveling', 'toelichten', 'laten-zien', 'ingaan-op', 'afsluiten', 'benadrukken', 'ph-hebben-over', 'ph-zoals-u-ziet', 'ph-goede-vraag', 'ph-zoek-het-uit', 'ph-nog-vragen'], [
    mc('A good opening sentence:', ['Eh, ja, dus …', 'Ik wil het vandaag hebben over onze plannen voor volgend jaar.', 'Zijn er nog vragen?'], 1, 'State the topic.'),
    mc('Which is correct?', ['Op deze dia u ziet de cijfers.', 'Op deze dia ziet u de cijfers.', 'Op deze dia de cijfers ziet u.'], 1, 'Verb second.'),
    mc('De omzet ___ gestegen.', ['is', 'heeft', 'wordt'], 0, 'stijgen takes zijn.'),
    mc('You do not know the answer. You say:', ['Dat is geheim.', 'Dat weet ik niet precies; ik zoek het voor u uit.', 'Volgende vraag!'], 1, 'Honest and helpful.'),
    mc('"Daar ga ik straks verder op in" means', ['I will go into that later', 'I am going inside later', 'I disagree'], 0, 'ingaan op.'),
    art('overzicht', 'het', 'het overzicht.'),
    art('grafiek', 'de', 'de grafiek.'),
    fill('Zoals u ___, is de omzet gestegen.', ['ziet'], 'As you can see, turnover has risen.', 'zoals u ziet.'),
    fill('Deze grafiek ___ zien dat de kosten dalen.', ['laat'], 'This graph shows that costs are falling.', 'laten zien.'),
    fill('Ik sluit ___ met drie aanbevelingen.', ['af'], 'I will finish with three recommendations.', 'afsluiten.'),
    fill('Het aantal klanten is gelijk ___. (blijven)', ['gebleven'], 'The number of customers has stayed the same.', 'blijven → gebleven.'),
    build('First I will give a short overview.', 'Eerst geef ik een kort overzicht.', ['ik geef', 'korte'], 'Inversion; een kort overzicht (het-word).'),
    build('I want to emphasise one point.', 'Ik wil één punt benadrukken.', ['benadrukt', 'een punten'], 'wil … benadrukken.'),
    build('That brings me to the next point.', 'Dat brengt me bij het volgende punt.', ['naar', 'volgend'], 'brengen bij.'),
    tr('en-nl', 'Are there any more questions?', ['Zijn er nog vragen?'], 'er + nog.'),
    tr('nl-en', 'Samenvattend: de verkoop stijgt, maar de kosten stijgen sneller.', ['To sum up: sales are rising, but costs are rising faster.', 'In summary: sales are rising but costs are rising faster.'], 'samenvattend.'),
    fix('Dan ik kom nu bij de kosten.', ['Dan kom ik nu bij de kosten.'], 'Inversion after dan.'),
    dict('Zoals u ziet, is het aantal klanten met tien procent gestegen.', 'As you can see, the number of customers has risen by ten per cent.', 'is … gestegen.'),
    listen('Dat is een goede vraag. Daar kom ik aan het eind van mijn presentatie op terug.', ['That is a good question. I will come back to that at the end of my presentation.', 'I cannot answer that question.', 'Please ask your question again.'], 0, 'daar … op terug.'),
    speak('Ik wil het vandaag hebben over onze resultaten. Eerst geef ik een overzicht, daarna ga ik in op de kosten.', 'Today I want to talk about our results. First I will give an overview, then I will go into the costs.'),
    free('Give the first 30 seconds of a presentation about your own work or study: topic, structure, and your key message.', 'Goedemiddag. Ik wil het vandaag hebben over thuiswerken op onze afdeling. Eerst laat ik zien hoeveel mensen thuiswerken, daarna ga ik in op de voor- en nadelen, en tot slot doe ik twee aanbevelingen. Mijn kernboodschap is: twee vaste kantoordagen zijn genoeg.', 'Good afternoon. Today I want to talk about working from home in our department. First I will show how many people work from home, then I will go into the pros and cons, and finally I will make two recommendations. My key message is: two fixed office days are enough.', { hints: ['Ik wil het vandaag hebben over …', 'Eerst …, daarna …, en tot slot …', 'Mijn kernboodschap is: …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"Zijn er nog vragen?" is said', ['at the start', 'at the end'], 1, 'Closing.'),
    fill('Ik wil het vandaag hebben ___ de planning.', ['over'], 'Today I want to talk about the planning.', 'het hebben over.'),
    fill('De kosten zijn licht ___. (dalen)', ['gedaald'], 'Costs have fallen slightly.', 'gedaald.'),
    build('I will find out for you.', 'Ik zoek het voor u uit.', ['uitzoek', 'jou voor'], 'zoek … uit.'),
    tr('en-nl', 'What is your key message?', ['Wat is je kernboodschap?', 'Wat is uw kernboodschap?'], 'kernboodschap.'),
    speak('Zoals u ziet, zijn de kosten gedaald. Zijn er nog vragen?', 'As you can see, costs have fallen. Are there any more questions?'),
  ]));

  /* ================= Unit 7, lesson 4: the performance review ================= */
  N('functioneringsgesprek', 'het', 'functioneringsgesprekken', 'performance review', 'Volgende week heb ik mijn functioneringsgesprek.', 'Next week I have my performance review.', { theme: 'work', ...S });
  N('beoordeling', 'de', 'beoordelingen', 'appraisal', 'Mijn beoordeling was positief.', 'My appraisal was positive.', { theme: 'work', ...S });
  N('feedback', 'de', null, 'feedback', 'Ik krijg graag eerlijke feedback.', 'I like getting honest feedback.', { theme: 'work', ...S });
  N('verbeterpunt', 'het', 'verbeterpunten', 'point for improvement', 'Een verbeterpunt is mijn planning.', 'A point for improvement is my planning.', { theme: 'work', ...S });
  N('sterk punt', 'het', 'sterke punten', 'strength', 'Samenwerken is een sterk punt van je.', 'Working together is a strength of yours.', { theme: 'work', ...S, id: 'sterk-punt' });
  N('ontwikkeling', 'de', 'ontwikkelingen', 'development', 'We bespreken je persoonlijke ontwikkeling.', 'We discuss your personal development.', { theme: 'work', ...S });
  N('doel', 'het', 'doelen', 'goal', 'Welke doelen heb je voor volgend jaar?', 'Which goals do you have for next year?', { theme: 'work', ...S });
  N('loonsverhoging', 'de', 'loonsverhogingen', 'pay rise', 'Ik wil het graag over een loonsverhoging hebben.', 'I would like to talk about a pay rise.', { theme: 'work', ...S });
  N('werkdruk', 'de', null, 'workload / pressure', 'De werkdruk is de laatste maanden hoog.', 'The workload has been high in recent months.', { theme: 'work', ...S });
  N('verwachting', 'de', 'verwachtingen', 'expectation', 'Wat zijn de verwachtingen voor deze functie?', 'What are the expectations for this position?', { theme: 'work', ...S });
  VB('functioneren', 'to perform / function', 'functioneer|functioneert|functioneren', 'functioneerde|functioneerden', 'gefunctioneerd', 'hebben', 'Hoe vind je zelf dat je functioneert?', 'How do you think you are performing yourself?', { theme: 'work', ...S });
  VB('waarderen', 'to appreciate', 'waardeer|waardeert|waarderen', 'waardeerde|waardeerden', 'gewaardeerd', 'hebben', 'Ik waardeer het dat je dat zegt.', 'I appreciate you saying that.', { theme: 'work', ...S });
  VB('aanpakken', 'to tackle', 'pak aan|pakt aan|pakken aan', 'pakte aan|pakten aan', 'aangepakt', 'hebben', 'Hoe wil je dat aanpakken?', 'How do you want to tackle that?', { theme: 'work', ...S });
  VB('zich ontwikkelen', 'to develop oneself', 'ontwikkel me|ontwikkelt zich|ontwikkelen ons', 'ontwikkelde me|ontwikkelden ons', 'ontwikkeld', 'hebben', 'Ik wil me verder ontwikkelen als leidinggevende.', 'I want to develop further as a manager.', { theme: 'work', ...S, id: 'zich-ontwikkelen' });
  VB('afspreken', 'to agree / arrange', 'spreek af|spreekt af|spreken af', 'sprak af|spraken af', 'afgesproken', 'hebben', 'Laten we afspreken dat we dit over drie maanden evalueren.', 'Let us agree that we evaluate this in three months.', { theme: 'work', ...S });
  PH('Wat gaat er goed, en wat kan beter?', 'What is going well, and what could be better?', 'Laten we beginnen: wat gaat er goed, en wat kan beter?', 'Let us start: what is going well, and what could be better?', { theme: 'work', ...S, id: 'ph-wat-gaat-goed' });
  PH('Ik herken me daarin.', 'I recognise myself in that.', 'Ja, ik herken me daarin.', 'Yes, I recognise myself in that.', { theme: 'work', ...S, id: 'ph-herken-me' });
  PH('Daar ben ik het niet helemaal mee eens.', 'I do not entirely agree with that.', 'Daar ben ik het niet helemaal mee eens, en ik leg graag uit waarom.', 'I do not entirely agree with that, and I would like to explain why.', { theme: 'work', ...S, id: 'ph-niet-helemaal-eens' });
  W('constructief', 'constructive', 'adj', 'Het was een constructief gesprek.', 'It was a constructive conversation.', { theme: 'work', ...S });

  addTo('s3u7', lesson('s3u7l4', 'The functioneringsgesprek', 'You can take part in a Dutch performance review: say what goes well and what does not, react to feedback, ask for development or a raise, and agree on goals.', [
    h('A two-way conversation'),
    p('The yearly `functioneringsgesprek` is not only your manager judging you. You are expected to bring your own view: what goes well, what you need, what you want next. Feedback is direct; criticism of the manager is allowed too. A separate `beoordelingsgesprek` decides about salary at some employers.'),
    h('Useful lines'),
    table(['function', 'Dutch'], [['your view', '*Ik vind dat het goed gaat met … / Waar ik moeite mee heb, is …'], ['accept feedback', '*Ik herken me daarin. / Dat is een terecht punt.'], ['push back', '*Daar ben ik het niet helemaal mee eens. / Mag ik uitleggen hoe ik dat zie?'], ['ask', '*Ik zou me graag verder willen ontwikkelen in … / Ik wil het graag over mijn salaris hebben.'], ['need', '*Wat ik daarvoor nodig heb, is …'], ['agree', '*Laten we afspreken dat … / Wanneer evalueren we dit?']]),
    h('Grammar in action'),
    p('`waar` + preposition: `**Waar** ik trots **op** ben, is het project Zuid.` `**Waar** ik moeite **mee** heb, is de werkdruk.` Polite wishes with `zou`: `Ik **zou** graag een cursus **willen** volgen.` And the fronted `wat`-clause: `**Wat ik nodig heb,** is meer tijd.`'),
    ex(['Waar ik trots op ben, is dat we de deadline hebben gehaald zonder overwerk.', 'What I am proud of is that we met the deadline without overtime.'], ['Je sterke punt is samenwerken; een verbeterpunt is dat je soms te laat om hulp vraagt.', 'Your strength is working together; a point for improvement is that you sometimes ask for help too late.'], ['Ik herken me daarin, maar de werkdruk was ook erg hoog.', 'I recognise myself in that, but the workload was also very high.'], ['Ik zou me graag verder willen ontwikkelen. Is er budget voor een cursus?', 'I would like to develop further. Is there a budget for a course?']),
    tip('Prepare three things: one success with an example, one thing you need, one thing you want next year. That is a complete Dutch review from your side.'),
  ], ['g3-pronominal-adverbs', 'g3-conditional'], ['functioneringsgesprek', 'beoordeling', 'feedback', 'verbeterpunt', 'sterk-punt', 'ontwikkeling', 'doel', 'loonsverhoging', 'werkdruk', 'verwachting', 'functioneren', 'waarderen', 'aanpakken', 'zich-ontwikkelen', 'afspreken', 'ph-wat-gaat-goed', 'ph-herken-me', 'ph-niet-helemaal-eens', 'constructief'], [
    mc('In a Dutch functioneringsgesprek you are expected to', ['only listen', 'bring your own view too', 'stay silent about problems'], 1, 'Two-way.'),
    mc('"Ik herken me daarin" means', ['I do not know that', 'I recognise myself in that', 'I remember that'], 1, 'Accepting feedback.'),
    mc('Waar ik trots ___ ben, is het project.', ['op', 'van', 'mee'], 0, 'trots op.'),
    mc('Waar ik moeite ___ heb, is de werkdruk.', ['op', 'over', 'mee'], 2, 'moeite met → mee.'),
    mc('Polite: "I would like to take a course."', ['Ik wil een cursus.', 'Ik zou graag een cursus willen volgen.', 'Geef me een cursus.'], 1, 'zou graag willen.'),
    art('functioneringsgesprek', 'het', 'het gesprek.'),
    art('loonsverhoging', 'de', '-ing → de.'),
    art('verbeterpunt', 'het', 'het punt.'),
    fill('Een ___ is dat je soms te laat om hulp vraagt. (point for improvement)', ['verbeterpunt'], 'A point for improvement is that you sometimes ask for help too late.', 'verbeterpunt.'),
    fill('Ik ___ het dat je dat zegt. (appreciate)', ['waardeer'], 'I appreciate you saying that.', 'waarderen.'),
    fill('Laten we ___ dat we dit over drie maanden evalueren.', ['afspreken'], 'Let us agree that we evaluate this in three months.', 'afspreken dat.'),
    fill('Ik wil me verder ___ als leidinggevende.', ['ontwikkelen'], 'I want to develop further as a manager.', 'zich ontwikkelen.'),
    build('What I need is more time.', 'Wat ik nodig heb, is meer tijd.', ['heb ik', 'dat'], 'wat-clause first, then is.'),
    build('I do not entirely agree with that.', 'Daar ben ik het niet helemaal mee eens.', ['ik ben', 'met'], 'daar … mee eens.'),
    build('How do you want to tackle that?', 'Hoe wil je dat aanpakken?', ['pak aan', 'aangepakt'], 'wil … aanpakken.'),
    tr('en-nl', 'I would like to talk about my salary.', ['Ik wil het graag over mijn salaris hebben.', 'Ik zou het graag over mijn salaris willen hebben.'], 'het hebben over.'),
    tr('nl-en', 'Hoe vind je zelf dat je functioneert?', ['How do you think you are performing yourself?', 'How do you think you are doing?'], 'functioneren.'),
    fix('Waar ik trots van ben, is het project.', ['Waar ik trots op ben, is het project.'], 'trots op.'),
    dict('Je sterke punt is samenwerken; een verbeterpunt is je planning.', 'Your strength is working together; a point for improvement is your planning.', 'sterke punt; verbeterpunt.'),
    listen('Laten we beginnen: wat gaat er goed, en wat kan beter?', ['Let us start: what is going well, and what could be better?', 'Let us stop: nothing is going well.', 'What do you earn, and what do you want?'], 0, 'wat gaat er goed; wat kan beter.'),
    speak('Waar ik trots op ben, is dat we de deadline hebben gehaald. Wat ik nodig heb, is meer tijd voor de planning.', 'What I am proud of is that we met the deadline. What I need is more time for planning.'),
    free('Prepare your side of a review: one success with an example, one difficulty, one wish for next year.', 'Ik vind dat het goed gaat met de samenwerking in het team; het project Zuid hebben we op tijd afgerond. Waar ik moeite mee heb, is de werkdruk in de laatste weken van de maand. Ik zou me graag verder willen ontwikkelen en volgend jaar een cursus projectmanagement willen volgen.', 'I think the cooperation in the team is going well; we finished project Zuid on time. What I find hard is the workload in the last weeks of the month. I would like to develop further and take a project management course next year.', { hints: ['Ik vind dat het goed gaat met …', 'Waar ik moeite mee heb, is …', 'Ik zou graag … willen …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"Constructief" means', ['destructive', 'constructive'], 1, 'Constructive.'),
    fill('Dat is een ___ punt. (fair)', ['terecht'], 'That is a fair point.', 'het punt + een → terecht.'),
    fill('Wat zijn de ___ voor deze functie? (expectations)', ['verwachtingen'], 'What are the expectations for this position?', 'verwachtingen.'),
    build('My appraisal was positive.', 'Mijn beoordeling was positief.', ['positieve', 'het'], 'de beoordeling.'),
    tr('en-nl', 'When do we evaluate this?', ['Wanneer evalueren we dit?'], 'evalueren.'),
    speak('Ik herken me daarin, maar ik zou graag uitleggen hoe ik dat zie.', 'I recognise myself in that, but I would like to explain how I see it.'),
  ]));

  /* ================= Unit 7, lesson 5: small talk at work ================= */
  N('koffieautomaat', 'de', 'koffieautomaten', 'coffee machine', 'Het beste nieuws hoor je bij de koffieautomaat.', 'You hear the best news at the coffee machine.', { theme: 'work', ...S });
  N('lunchpauze', 'de', 'lunchpauzes', 'lunch break', 'In de lunchpauze wandelen we een rondje.', 'In the lunch break we go for a little walk.', { theme: 'work', ...S });
  N('vrijdagmiddagborrel', 'de', 'vrijdagmiddagborrels', 'Friday afternoon drinks', 'Kom je ook naar de vrijdagmiddagborrel?', 'Are you coming to the Friday afternoon drinks too?', { theme: 'work', ...S, altNl: ['vrijmibo'] });
  N('teamuitje', 'het', 'teamuitjes', 'team outing', 'Het teamuitje is dit jaar een fietstocht.', 'The team outing this year is a bike ride.', { theme: 'work', ...S });
  N('verjaardagstaart', 'de', 'verjaardagstaarten', 'birthday cake', 'Er staat verjaardagstaart in de keuken.', 'There is birthday cake in the kitchen.', { theme: 'work', ...S });
  N('weekend', 'het', 'weekenden', 'weekend', 'Hoe was je weekend?', 'How was your weekend?', { theme: 'time', ...S });
  N('vakantieplan', 'het', 'vakantieplannen', 'holiday plan', 'Heb je al vakantieplannen?', 'Do you have holiday plans yet?', { theme: 'leisure', ...S });
  N('verbouwing', 'de', 'verbouwingen', 'renovation', 'Hoe gaat het met de verbouwing?', 'How is the renovation going?', { theme: 'home', ...S });
  VB('bijpraten', 'to catch up', 'praat bij|praat bij|praten bij', 'praatte bij|praatten bij', 'bijgepraat', 'hebben', 'Zullen we even bijpraten?', 'Shall we catch up?', { theme: 'work', ...S });
  VB('kletsen', 'to chat', 'klets|kletst|kletsen', 'kletste|kletsten', 'gekletst', 'hebben', 'We stonden even te kletsen bij het koffieapparaat.', 'We were having a chat by the coffee machine.', { theme: 'work', ...S });
  VB('meevallen', 'to be better than expected', 'val mee|valt mee|vallen mee', 'viel mee|vielen mee', 'meegevallen', 'zijn', 'Het weer viel mee dit weekend.', 'The weather was better than expected this weekend.', { theme: 'basics', ...S });
  W('druk', 'busy', 'adj', 'Druk, druk, druk!', 'Busy, busy, busy!', { theme: 'work', ...S });
  W('lekker', 'nice / pleasantly', 'adv', 'Lekker gewerkt vandaag?', 'Had a good day’s work?', { theme: 'basics', ...S, note: 'As an adverb lekker means "pleasantly": lekker weer, lekker geslapen, lekker bezig.' });
  PH('Hoe was je weekend?', 'How was your weekend?', 'Hoi! Hoe was je weekend?', 'Hi! How was your weekend?', { theme: 'work', ...S, id: 'ph-hoe-was-je-weekend' });
  PH('Nog iets leuks gedaan?', 'Did you do anything fun?', 'Nog iets leuks gedaan dit weekend?', 'Did you do anything fun this weekend?', { theme: 'work', ...S, id: 'ph-nog-iets-leuks' });
  PH('Fijne avond!', 'Have a nice evening!', 'Ik ga ervandoor. Fijne avond!', 'I am off. Have a nice evening!', { theme: 'work', ...S, id: 'ph-fijne-avond' });
  PH('Ik ga ervandoor.', 'I am off.', 'Het is vijf uur, ik ga ervandoor.', 'It is five o’clock, I am off.', { theme: 'work', ...S, id: 'ph-ik-ga-ervandoor' });
  PH('Werk ze!', 'Have a good day at work!', 'Tot morgen, werk ze!', 'See you tomorrow, have a good one!', { theme: 'work', ...S, id: 'ph-werk-ze' });
  PH('Eet smakelijk!', 'Enjoy your meal!', 'Eet smakelijk allemaal!', 'Enjoy your meal, everyone!', { theme: 'work', ...S, id: 'ph-eet-smakelijk' });

  addTo('s3u7', lesson('s3u7l5', 'Small talk at work', 'You can chat with Dutch colleagues at the coffee machine, at lunch and at the borrel: safe topics, natural particles and the right greetings and goodbyes.', [
    h('Safe topics'),
    list('`Hoe was je weekend? Nog iets leuks gedaan?`', '`Wat een weer, hè?` The weather never fails.', '`Heb je al vakantieplannen?`', '`Hoe gaat het met de verbouwing / de kinderen / de hond?` Remember what people told you last time.', '`Druk?` — `Ja, druk, druk, druk.` The national answer.', 'Avoid on a first chat: salary, religion, how much someone’s house cost.'),
    h('Particles make it sound friendly'),
    table(['Dutch', 'feel'], [['*Lekker weekend gehad?', 'Had a nice weekend?'], ['*Nou, het viel wel mee.', 'Well, it was not so bad.'], ['*Dat is toch wel lekker, hè?', 'That is rather nice, isn’t it?'], ['*Kom je ook even naar de borrel?', 'Are you popping along to the drinks too?'], ['*Gewoon rustig aan gedaan, hoor.', 'Just took it easy, really.']]),
    p('`hè?` at the end asks for agreement; `hoor` reassures; `even` and `wel` soften. A reply of one word sounds cold: add a little (`Ja, heerlijk! En jij?`).'),
    h('Office rituals'),
    p('Lunch is short and simple: bread, often at a shared table, sometimes a `lunchwandeling`. On your birthday **you** bring the `taart`. The `vrijdagmiddagborrel` (`vrijmibo`) is where you get to know people. Goodbyes: `Ik ga ervandoor.` `Fijne avond!` `Tot morgen!` `Werk ze!` `Fijn weekend!` At lunch: `Eet smakelijk!`'),
    ex(['Hé, hoe was je weekend? — Lekker rustig. We hebben gefietst naar Marken. En jij?', 'Hey, how was your weekend? — Nice and quiet. We cycled to Marken. And you?'], ['Hoe gaat het met de verbouwing? — Nou, het valt niet mee; de keuken is nog steeds niet klaar.', 'How is the renovation going? — Well, it is not easy; the kitchen is still not finished.'], ['Kom je vanmiddag ook even naar de borrel? — Even dan, ik moet om zes uur weg.', 'Are you coming to the drinks this afternoon? — Just for a bit, I have to leave at six.'], ['Ik ga ervandoor. Fijne avond, tot morgen!', 'I am off. Have a nice evening, see you tomorrow!']),
    tip('Always return the question: `En jij?` Dutch small talk is short but it must go both ways.'),
  ], ['g3-particles', 'g3-idioms'], ['koffieautomaat', 'lunchpauze', 'vrijdagmiddagborrel', 'teamuitje', 'verjaardagstaart', 'weekend', 'vakantieplan', 'verbouwing', 'bijpraten', 'kletsen', 'meevallen', 'druk', 'lekker', 'ph-hoe-was-je-weekend', 'ph-nog-iets-leuks', 'ph-fijne-avond', 'ph-ik-ga-ervandoor', 'ph-werk-ze', 'ph-eet-smakelijk'], [
    mc('A colleague asks "Hoe was je weekend?" The best answer:', ['Goed.', 'Lekker rustig, we hebben gefietst. En jij?', 'Dat gaat je niets aan.'], 1, 'Add a little and return the question.'),
    mc('"Wat een weer, hè?" The "hè" asks for', ['information', 'agreement', 'permission'], 1, 'Tag seeking agreement.'),
    mc('On your birthday at a Dutch office, who brings the cake?', ['your manager', 'you', 'nobody'], 1, 'De jarige trakteert.'),
    mc('"Ik ga ervandoor" means', ['I am going through it', 'I am off', 'I am going for it'], 1, 'I am leaving.'),
    mc('At lunch you say:', ['Werk ze!', 'Eet smakelijk!', 'Beterschap!'], 1, 'Enjoy your meal.'),
    mc('"Het valt niet mee" means', ['it is not easy', 'it is great', 'it does not fit'], 0, 'niet meevallen.'),
    fill('Nog iets ___ gedaan dit weekend? (fun)', ['leuks'], 'Did you do anything fun this weekend?', 'iets + adjective + s: iets leuks.'),
    fill('Zullen we even ___? (catch up)', ['bijpraten'], 'Shall we catch up?', 'bijpraten.'),
    fill('Kom je ook ___ naar de borrel? (for a bit)', ['even'], 'Are you popping along to the drinks too?', 'even.'),
    fill('Fijne ___! Tot morgen. (evening)', ['avond'], 'Have a nice evening! See you tomorrow.', 'fijne avond.'),
    build('How is the renovation going?', 'Hoe gaat het met de verbouwing?', ['over', 'gaat de verbouwing het'], 'hoe gaat het met.'),
    build('We were having a chat by the coffee machine.', 'We stonden even te kletsen bij de koffieautomaat.', ['kletsen te', 'staan'], 'staan te + infinitive.'),
    build('The weather was better than expected this weekend.', 'Het weer viel mee dit weekend.', ['meeviel', 'valt'], 'viel mee.'),
    tr('en-nl', 'Do you have holiday plans yet?', ['Heb je al vakantieplannen?'], 'al = yet.'),
    tr('nl-en', 'Druk? — Ja, druk, druk, druk. Maar het is wel gezellig.', ['Busy? — Yes, busy, busy, busy. But it is fun.', 'Busy? — Yes, very busy. But it is nice.'], 'The standard exchange.'),
    fix('Nog iets leuk gedaan?', ['Nog iets leuks gedaan?'], 'iets + adjective takes -s.'),
    dict('Ik ga ervandoor. Fijne avond, tot morgen!', 'I am off. Have a nice evening, see you tomorrow!', 'ervandoor.'),
    listen('Er staat taart in de keuken, want Anna is jarig. Vergeet haar niet te feliciteren!', ['There is cake in the kitchen because it is Anna’s birthday. Do not forget to congratulate her!', 'Anna baked a cake for her manager.', 'The kitchen is closed for Anna’s birthday.'], 0, 'jarig; feliciteren.'),
    speak('Hé, hoe was je weekend? Nog iets leuks gedaan? — Lekker rustig, we hebben gefietst. En jij?', 'Hey, how was your weekend? Did you do anything fun? — Nice and quiet, we went cycling. And you?'),
    free('Have a 20-second coffee-machine chat: greet, ask about the weekend, answer about yours with a particle, and say goodbye.', 'Hé Tom, hoe was je weekend? … Wat leuk! Bij mij was het lekker rustig, hoor. We zijn naar de markt geweest en het weer viel wel mee. Nou, ik ga weer aan het werk. Werk ze!', 'Hey Tom, how was your weekend? … How nice! Mine was nice and quiet. We went to the market and the weather was not so bad. Well, I am going back to work. Have a good one!', { hints: ['Hoe was je weekend?', 'lekker …, hoor', 'het viel wel mee', 'Werk ze!'] }),
    match([['Eet smakelijk!', 'Enjoy your meal!'], ['Werk ze!', 'Have a good day at work!'], ['Fijne avond!', 'Have a nice evening!'], ['Ik ga ervandoor.', 'I am off.'], ['bijpraten', 'to catch up'], ['kletsen', 'to chat']]),
  ], [
    mc('"De vrijmibo" is', ['a Friday afternoon drinks', 'a meeting', 'a holiday'], 0, 'vrijdagmiddagborrel.'),
    fill('Wat een weer, ___?', ['hè'], 'What weather, eh?', 'hè.'),
    fill('Lekker weekend ___? (hebben, participle)', ['gehad'], 'Had a nice weekend?', 'gehad.'),
    build('Are you coming to the drinks too?', 'Kom je ook naar de borrel?', ['komt', 'in'], 'kom je.'),
    tr('en-nl', 'See you tomorrow!', ['Tot morgen!'], 'tot morgen.'),
    speak('Nou, het viel wel mee. Fijn weekend, en tot maandag!', 'Well, it was not so bad. Have a nice weekend, and see you Monday!'),
  ]));

  /* ================= Unit 8, lesson 3: more idioms in context ================= */
  PH('de knoop doorhakken', 'to make the decision', 'We moeten nu echt de knoop doorhakken.', 'We really have to make the decision now.', { theme: 'idioms', ...S, id: 'id-knoop-doorhakken' });
  PH('iets uit je duim zuigen', 'to make something up', 'Dat heb ik niet uit mijn duim gezogen.', 'I did not make that up.', { theme: 'idioms', ...S, id: 'id-duim-zuigen' });
  PH('de draad kwijt zijn', 'to have lost the thread', 'Sorry, ik ben de draad kwijt.', 'Sorry, I have lost the thread.', { theme: 'idioms', ...S, id: 'id-draad-kwijt' });
  PH('op het puntje van je tong liggen', 'to be on the tip of your tongue', 'Zijn naam ligt op het puntje van mijn tong.', 'His name is on the tip of my tongue.', { theme: 'idioms', ...S, id: 'id-puntje-tong' });
  PH('ergens de balen van hebben', 'to be fed up with something', 'Ik heb de balen van die vertragingen.', 'I am fed up with those delays.', { theme: 'idioms', ...S, id: 'id-balen' });
  PH('het is niet anders', 'it is what it is', 'De trein rijdt niet. Het is niet anders.', 'The train is not running. It is what it is.', { theme: 'idioms', ...S, id: 'id-niet-anders' });
  PH('een gat in de dag slapen', 'to sleep in very late', 'Zondag heb ik een gat in de dag geslapen.', 'On Sunday I slept in very late.', { theme: 'idioms', ...S, id: 'id-gat-in-de-dag' });
  PH('voor een appel en een ei', 'for next to nothing', 'Ik heb die fiets voor een appel en een ei gekocht.', 'I bought that bike for next to nothing.', { theme: 'idioms', ...S, id: 'id-appel-ei' });
  PH('de hand in eigen boezem steken', 'to look at your own faults', 'De directie moet de hand in eigen boezem steken.', 'The management should look at its own faults.', { theme: 'idioms', ...S, id: 'id-hand-boezem' });
  PH('iets op de lange baan schuiven', 'to put something off indefinitely', 'Het plan is op de lange baan geschoven.', 'The plan has been put off indefinitely.', { theme: 'idioms', ...S, id: 'id-lange-baan' });
  PH('met de neus in de boter vallen', 'to arrive at just the right moment', 'Je valt met je neus in de boter: er is taart.', 'You have come at just the right moment: there is cake.', { theme: 'idioms', ...S, id: 'id-neus-boter' });
  PH('geen blad voor de mond nemen', 'not to mince words', 'Zij neemt geen blad voor de mond.', 'She does not mince her words.', { theme: 'idioms', ...S, id: 'id-blad-mond' });
  PH('de kool en de geit sparen', 'to try to please everyone', 'De wethouder probeert de kool en de geit te sparen.', 'The alderman is trying to please everyone.', { theme: 'idioms', ...S, id: 'id-kool-geit' });
  PH('Eind goed, al goed.', 'All is well that ends well.', 'We hebben de trein toch gehaald. Eind goed, al goed.', 'We caught the train after all. All is well that ends well.', { theme: 'idioms', ...S, id: 'id-eind-goed' });
  PH('Beter laat dan nooit.', 'Better late than never.', 'Je bent er! Beter laat dan nooit.', 'You are here! Better late than never.', { theme: 'idioms', ...S, id: 'id-beter-laat' });
  PH('Oefening baart kunst.', 'Practice makes perfect.', 'Blijf spreken; oefening baart kunst.', 'Keep speaking; practice makes perfect.', { theme: 'idioms', ...S, id: 'id-oefening' });

  addTo('s3u8', lesson('s3u8l3', 'More idioms and proverbs, in context', 'You can understand and use a second set of everyday idioms and three classic proverbs in the situations where Dutch people actually say them.', [
    h('At work and in discussions'),
    table(['idiom', 'meaning', 'when'], [['*de knoop doorhakken', 'make the decision', 'after long doubt'], ['*iets op de lange baan schuiven', 'put off indefinitely', 'a plan nobody wants to decide'], ['*de hand in eigen boezem steken', 'look at your own faults', 'after a failure'], ['*geen blad voor de mond nemen', 'not mince words', 'a very direct person'], ['*de kool en de geit sparen', 'try to please everyone', 'a weak compromise'], ['*iets uit je duim zuigen', 'make something up', 'doubtful figures']]),
    h('In daily life'),
    table(['idiom', 'meaning'], [['*de draad kwijt zijn', 'to have lost the thread'], ['*op het puntje van je tong liggen', 'to be on the tip of your tongue'], ['*ergens de balen van hebben', 'to be fed up with'], ['*het is niet anders', 'it is what it is'], ['*een gat in de dag slapen', 'to sleep in very late'], ['*voor een appel en een ei', 'for next to nothing'], ['*met de neus in de boter vallen', 'to arrive at the perfect moment']]),
    h('Three proverbs'),
    p('`Eind goed, al goed.` `Beter laat dan nooit.` `Oefening baart kunst.` Quote them whole, as a comment on what just happened.'),
    h('Grammar'),
    p('Idioms with a verb conjugate and split like any verb: `We **hebben** de knoop **doorgehakt**.` `Het plan **werd** op de lange baan **geschoven**.` `Hij **zuigt** dat uit zijn duim.` The possessive changes with the person: `uit **mijn** duim`, `op het puntje van **haar** tong`.'),
    ex(['Na drie vergaderingen hebben we eindelijk de knoop doorgehakt: we verhuizen in maart.', 'After three meetings we finally made the decision: we are moving in March.'], ['Sorry, ik ben de draad kwijt. Waar hadden we het over?', 'Sorry, I have lost the thread. What were we talking about?'], ['Ik heb de balen van die storingen bij de NS, maar ja, het is niet anders.', 'I am fed up with those rail disruptions, but well, it is what it is.'], ['Je valt met je neus in de boter: de koffie is net klaar.', 'You have come at just the right moment: the coffee is just ready.']),
    tip('`maar ja, het is niet anders` is the most Dutch sentence there is. It ends a complaint without solving it.'),
  ], ['g3-idioms'], ['id-knoop-doorhakken', 'id-duim-zuigen', 'id-draad-kwijt', 'id-puntje-tong', 'id-balen', 'id-niet-anders', 'id-gat-in-de-dag', 'id-appel-ei', 'id-hand-boezem', 'id-lange-baan', 'id-neus-boter', 'id-blad-mond', 'id-kool-geit', 'id-eind-goed', 'id-beter-laat', 'id-oefening'], [
    mc('"De knoop doorhakken" means', ['to cut a rope', 'to make the decision', 'to tie a knot'], 1, 'Decide at last.'),
    mc('"Iets uit je duim zuigen" means', ['to make something up', 'to eat with your hands', 'to be childish'], 0, 'Invent.'),
    mc('"Ik ben de draad kwijt" means', ['I lost my sewing thread', 'I have lost the thread of the conversation', 'I am lost in the city'], 1, 'Lost the thread.'),
    mc('"Voor een appel en een ei" means', ['for breakfast', 'for next to nothing', 'at the market'], 1, 'Very cheaply.'),
    mc('"Met de neus in de boter vallen" means', ['to fall over', 'to arrive at just the right moment', 'to make a mess'], 1, 'Perfect timing.'),
    mc('"Zij neemt geen blad voor de mond" means she', ['is very direct', 'never speaks', 'eats fast'], 0, 'Does not mince words.'),
    mc('Someone arrives an hour late. You say:', ['Eind goed, al goed.', 'Beter laat dan nooit.', 'Oefening baart kunst.'], 1, 'Better late than never.'),
    fill('We moeten nu echt de ___ doorhakken.', ['knoop'], 'We really have to make the decision now.', 'de knoop.'),
    fill('Zijn naam ligt op het puntje van mijn ___.', ['tong'], 'His name is on the tip of my tongue.', 'tong.'),
    fill('Ik heb de ___ van die vertragingen.', ['balen'], 'I am fed up with those delays.', 'de balen hebben van.'),
    fill('Het plan is op de lange ___ geschoven.', ['baan'], 'The plan has been put off indefinitely.', 'lange baan.'),
    fill('Oefening baart ___.', ['kunst'], 'Practice makes perfect.', 'kunst.'),
    build('We finally made the decision.', 'We hebben eindelijk de knoop doorgehakt.', ['doorhakken', 'gehakt door'], 'doorgehakt, one word.'),
    build('I did not make that up.', 'Dat heb ik niet uit mijn duim gezogen.', ['ik heb', 'zuigen'], 'Fronted dat; gezogen.'),
    build('On Sunday I slept in very late.', 'Zondag heb ik een gat in de dag geslapen.', ['ik heb', 'nacht'], 'een gat in de dag slapen.'),
    tr('en-nl', 'It is what it is.', ['Het is niet anders.'], 'Fixed.'),
    tr('nl-en', 'De wethouder probeert de kool en de geit te sparen.', ['The alderman is trying to please everyone.', 'The alderman is trying to keep everybody happy.'], 'Idiom.'),
    fix('Sorry, ik ben de draad verloren.', ['Sorry, ik ben de draad kwijt.'], 'Fixed: de draad kwijt zijn.'),
    dict('Ik heb de balen van die storingen, maar ja, het is niet anders.', 'I am fed up with those disruptions, but well, it is what it is.', 'de balen van; het is niet anders.'),
    listen('Na drie vergaderingen is de knoop eindelijk doorgehakt: het plan gaat door.', ['After three meetings the decision has finally been made: the plan goes ahead.', 'After three meetings the plan was postponed.', 'The rope was cut in the meeting.'], 0, 'de knoop doorhakken.'),
    speak('Sorry, ik ben de draad kwijt. Het woord ligt op het puntje van mijn tong.', 'Sorry, I have lost the thread. The word is on the tip of my tongue.'),
    free('Tell a short anecdote (three sentences) that ends with one of the proverbs.', 'Vorige week miste ik mijn trein en kwam ik te laat op een sollicitatiegesprek. Gelukkig vonden ze het niet erg en ik heb de baan gekregen. Eind goed, al goed.', 'Last week I missed my train and arrived late for a job interview. Luckily they did not mind and I got the job. All is well that ends well.', { hints: ['Vorige week …', 'Gelukkig …', 'Eind goed, al goed. / Beter laat dan nooit.'] }),
    match([['de knoop doorhakken', 'to make the decision'], ['de draad kwijt zijn', 'to have lost the thread'], ['de balen hebben van', 'to be fed up with'], ['voor een appel en een ei', 'for next to nothing'], ['het is niet anders', 'it is what it is'], ['geen blad voor de mond nemen', 'not to mince words']]),
  ], [
    mc('"Op de lange baan schuiven" means', ['to postpone indefinitely', 'to go bowling'], 0, 'Postpone.'),
    fill('Eind goed, ___ goed.', ['al'], 'All is well that ends well.', 'al goed.'),
    fill('Je valt met je neus in de ___.', ['boter'], 'You have come at just the right moment.', 'boter.'),
    build('Better late than never.', 'Beter laat dan nooit.', ['als', 'later'], 'dan.'),
    tr('en-nl', 'Practice makes perfect.', ['Oefening baart kunst.'], 'Proverb.'),
    speak('We hebben de knoop doorgehakt; het is niet anders.', 'We have made the decision; it is what it is.'),
  ]));

  /* ================= Unit 8, lesson 4: art and literature ================= */
  N('schilder', 'de', 'schilders', 'painter', 'Rembrandt is de beroemdste Nederlandse schilder.', 'Rembrandt is the most famous Dutch painter.', { theme: 'arts', ...S });
  N('schilderij', 'het', 'schilderijen', 'painting', 'De Nachtwacht is een schilderij dat in 1642 werd voltooid.', 'The Night Watch is a painting that was completed in 1642.', { theme: 'arts', ...S });
  N('meesterwerk', 'het', 'meesterwerken', 'masterpiece', 'Het Melkmeisje is een meesterwerk van Vermeer.', 'The Milkmaid is a masterpiece by Vermeer.', { theme: 'arts', ...S });
  N('zelfportret', 'het', 'zelfportretten', 'self-portrait', 'Van Gogh schilderde tientallen zelfportretten.', 'Van Gogh painted dozens of self-portraits.', { theme: 'arts', ...S });
  N('stilleven', 'het', 'stillevens', 'still life', 'Een stilleven toont vaak bloemen of fruit.', 'A still life often shows flowers or fruit.', { theme: 'arts', ...S });
  N('landschap', 'het', 'landschappen', 'landscape', 'De Hollandse landschappen hebben lage horizonten en hoge luchten.', 'Dutch landscapes have low horizons and high skies.', { theme: 'arts', ...S });
  N('kunststroming', 'de', 'kunststromingen', 'art movement', 'De Stijl is een kunststroming uit 1917.', 'De Stijl is an art movement from 1917.', { theme: 'arts', ...S });
  N('collectie', 'de', 'collecties', 'collection', 'Het museum heeft een grote collectie.', 'The museum has a large collection.', { theme: 'arts', ...S });
  N('schrijver', 'de', 'schrijvers', 'writer', 'Welke Nederlandse schrijvers ken je?', 'Which Dutch writers do you know?', { theme: 'arts', ...S });
  N('roman', 'de', 'romans', 'novel', 'De roman speelt zich af in Amsterdam.', 'The novel is set in Amsterdam.', { theme: 'arts', ...S });
  N('dagboek', 'het', 'dagboeken', 'diary', 'Het dagboek van Anne Frank is in zeventig talen vertaald.', 'The diary of Anne Frank has been translated into seventy languages.', { theme: 'arts', ...S });
  N('personage', 'het', 'personages', 'character (in a story)', 'Het hoofdpersonage is een jonge arts.', 'The main character is a young doctor.', { theme: 'arts', ...S });
  N('vertaling', 'de', 'vertalingen', 'translation', 'Ik lees het boek in vertaling.', 'I am reading the book in translation.', { theme: 'arts', ...S });
  VB('schilderen', 'to paint', 'schilder|schildert|schilderen', 'schilderde|schilderden', 'geschilderd', 'hebben', 'Vermeer schilderde maar ongeveer 35 werken.', 'Vermeer painted only about 35 works.', { theme: 'arts', ...S });
  VB('afbeelden', 'to depict', 'beeld af|beeldt af|beelden af', 'beeldde af|beeldden af', 'afgebeeld', 'hebben', 'Op het schilderij is een schutterij afgebeeld.', 'A civic guard is depicted in the painting.', { theme: 'arts', ...S });
  VB('zich afspelen', 'to be set / take place', 'speel me af|speelt zich af|spelen zich af', 'speelde zich af|speelden zich af', 'afgespeeld', 'hebben', 'Het verhaal speelt zich af in de jaren vijftig.', 'The story is set in the fifties.', { theme: 'arts', ...S, id: 'zich-afspelen' });
  VB('vertalen', 'to translate', 'vertaal|vertaalt|vertalen', 'vertaalde|vertaalden', 'vertaald', 'hebben', 'Het boek is in het Engels vertaald.', 'The book has been translated into English.', { theme: 'arts', ...S });
  VB('aanraden', 'to recommend', 'raad aan|raadt aan|raden aan', 'raadde aan|raadden aan', 'aangeraden', 'hebben', 'Welk boek zou je me aanraden?', 'Which book would you recommend to me?', { theme: 'arts', ...S });
  W('beroemd', 'famous', 'adj', 'Het is een van de beroemdste schilderijen ter wereld.', 'It is one of the most famous paintings in the world.', { theme: 'arts', ...S });
  W('indrukwekkend', 'impressive', 'adj', 'Ik vond de tentoonstelling indrukwekkend.', 'I found the exhibition impressive.', { theme: 'arts', ...S });

  addTo('s3u8', lesson('s3u8l4', 'Dutch art and literature', 'You can talk about Dutch painters and writers, describe a painting or a book you like, and recommend one, using relative clauses and the past passive.', [
    h('Painters you will hear about'),
    list('**Rembrandt** (1606–1669): `De Nachtwacht`, light and shadow, many `zelfportretten`. Rijksmuseum.', '**Vermeer** (1632–1675): quiet interiors, `Het Melkmeisje`, `Meisje met de parel` (Mauritshuis, Den Haag).', '**Van Gogh** (1853–1890): `De Aardappeleters`, `Zonnebloemen`; he sold almost nothing in his lifetime.', '**Mondriaan** and `De Stijl` (1917): lines and primary colours; Rietveld’s chair and house in Utrecht.'),
    h('Books and writers'),
    p('`Het Achterhuis`, the `dagboek` of Anne Frank. Multatuli’s `Max Havelaar` (1860), an attack on colonial abuse. Modern classics for learners: Annie M.G. Schmidt’s `Jip en Janneke` (easy and very Dutch), and for B1 readers the short novels of Hendrik Groen or the columns in any newspaper.'),
    h('Describing a work'),
    table(['Dutch', 'English'], [['*Het schilderij dat me het meest aanspreekt, is …', 'The painting that appeals to me most is …'], ['*Op het schilderij is … afgebeeld.', 'The painting depicts …'], ['*Het werd geschilderd in …', 'It was painted in …'], ['*Het boek gaat over … / speelt zich af in …', 'The book is about … / is set in …'], ['*Wat ik er mooi aan vind, is …', 'What I like about it is …'], ['*Ik zou het iedereen aanraden.', 'I would recommend it to everyone.']]),
    ex(['De Nachtwacht, die in 1642 werd voltooid, hangt in het Rijksmuseum.', 'The Night Watch, which was completed in 1642, hangs in the Rijksmuseum.'], ['Op het schilderij is een vrouw afgebeeld die melk in een kom giet.', 'The painting depicts a woman who is pouring milk into a bowl.'], ['Het boek speelt zich af in Amsterdam tijdens de oorlog en is in zeventig talen vertaald.', 'The book is set in Amsterdam during the war and has been translated into seventy languages.'], ['Wat ik er mooi aan vind, is het licht. Ik zou het iedereen aanraden.', 'What I like about it is the light. I would recommend it to everyone.']),
    tip('Reading tip: start with `Jip en Janneke` aloud. The sentences are short, the Dutch is perfect, and every Dutch adult knows it by heart.'),
  ], ['g3-relative', 'g3-passive'], ['schilder', 'schilderij', 'meesterwerk', 'zelfportret', 'stilleven', 'landschap', 'kunststroming', 'collectie', 'schrijver', 'roman', 'dagboek', 'personage', 'vertaling', 'schilderen', 'afbeelden', 'zich-afspelen', 'vertalen', 'aanraden', 'beroemd', 'indrukwekkend'], [
    mc('Who painted De Nachtwacht?', ['Vermeer', 'Rembrandt', 'Van Gogh'], 1, 'Rembrandt, 1642.'),
    mc('Het schilderij ___ me het meest aanspreekt, is Het Melkmeisje.', ['die', 'dat', 'wat'], 1, 'het schilderij → dat.'),
    mc('De Nachtwacht ___ in 1642 voltooid.', ['wordt', 'werd', 'is geworden'], 1, 'Past passive.'),
    mc('"Het verhaal speelt zich af in …" means the story', ['is played in', 'is set in', 'ends in'], 1, 'zich afspelen.'),
    mc('"Jip en Janneke" is', ['a painting', 'a classic children’s book', 'an art movement'], 1, 'Annie M.G. Schmidt.'),
    art('schilderij', 'het', 'het schilderij.'),
    art('dagboek', 'het', 'het boek → het dagboek.'),
    art('roman', 'de', 'de roman.'),
    art('landschap', 'het', 'het landschap.'),
    fill('Op het schilderij is een vrouw ___. (afbeelden)', ['afgebeeld'], 'The painting depicts a woman.', 'af + ge + beeld.'),
    fill('Het boek is in zeventig talen ___. (vertalen)', ['vertaald'], 'The book has been translated into seventy languages.', 'ver- verb: vertaald.'),
    fill('Welk boek zou je me ___? (recommend)', ['aanraden'], 'Which book would you recommend to me?', 'zou … aanraden.'),
    fill('Het is een van de ___ schilderijen ter wereld. (beroemd, superlative)', ['beroemdste'], 'It is one of the most famous paintings in the world.', 'beroemd + ste.'),
    build('What I like about it is the light.', 'Wat ik er mooi aan vind, is het licht.', ['vind ik', 'van'], 'wat ik er … aan vind, is.'),
    build('The novel is set in Amsterdam.', 'De roman speelt zich af in Amsterdam.', ['afspeelt', 'hem'], 'speelt zich af.'),
    build('Van Gogh painted dozens of self-portraits.', 'Van Gogh schilderde tientallen zelfportretten.', ['geschilderd', 'tiental'], 'schilderde.'),
    tr('en-nl', 'I found the exhibition impressive.', ['Ik vond de tentoonstelling indrukwekkend.'], 'indrukwekkend.'),
    tr('nl-en', 'De Stijl is een kunststroming die in 1917 werd opgericht.', ['De Stijl is an art movement that was founded in 1917.'], 'die … werd opgericht.'),
    fix('Het schilderij die in het Rijksmuseum hangt, is beroemd.', ['Het schilderij dat in het Rijksmuseum hangt, is beroemd.'], 'het schilderij → dat.'),
    dict('De Nachtwacht, die in 1642 werd voltooid, hangt in het Rijksmuseum.', 'The Night Watch, which was completed in 1642, hangs in the Rijksmuseum.', 'die … werd voltooid.'),
    listen('Van Gogh heeft tijdens zijn leven bijna niets verkocht, maar nu is hij wereldberoemd.', ['Van Gogh sold almost nothing during his life, but now he is world famous.', 'Van Gogh was rich and famous during his life.', 'Van Gogh never painted.'], 0, 'bijna niets verkocht; wereldberoemd.'),
    speak('Het schilderij dat me het meest aanspreekt, is Het Melkmeisje van Vermeer, vooral door het licht.', 'The painting that appeals to me most is The Milkmaid by Vermeer, mainly because of the light.'),
    free('Describe a painting, book or film you like: what it is about or shows, when it was made, and why you would recommend it.', 'Het boek dat ik het laatst heb gelezen, is Het Achterhuis. Het is het dagboek van Anne Frank, dat tijdens de oorlog in Amsterdam werd geschreven. Wat ik er indrukwekkend aan vind, is hoe gewoon haar leven blijft. Ik zou het iedereen aanraden, ook in het Nederlands.', 'The book I read most recently is The Diary of a Young Girl. It is Anne Frank’s diary, which was written in Amsterdam during the war. What I find impressive about it is how ordinary her life remains. I would recommend it to everyone, in Dutch too.', { hints: ['Het boek / schilderij dat …, is …', 'Het werd … in …', 'Wat ik er … aan vind, is …', 'Ik zou het … aanraden'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('Vermeer painted', ['Het Melkmeisje', 'De Aardappeleters'], 0, 'Vermeer.'),
    fill('Het dagboek ___ tijdens de oorlog geschreven. (past passive)', ['werd'], 'The diary was written during the war.', 'werd.'),
    fill('De roman speelt ___ af in Rotterdam.', ['zich'], 'The novel is set in Rotterdam.', 'zich afspelen.'),
    build('I would recommend it to everyone.', 'Ik zou het iedereen aanraden.', ['raad aan', 'voor'], 'zou … aanraden.'),
    tr('en-nl', 'It is a masterpiece.', ['Het is een meesterwerk.'], 'het meesterwerk.'),
    speak('Op het schilderij is een vrouw afgebeeld die melk in een kom giet.', 'The painting depicts a woman who is pouring milk into a bowl.'),
  ]));

  /* ================= Unit 8, lesson 5: regions, dialects and Frisian ================= */
  N('Randstad', 'de', null, 'the Randstad (western urban ring)', 'In de Randstad wonen acht miljoen mensen.', 'Eight million people live in the Randstad.', { theme: 'regions', ...S });
  N('provincie', 'de', 'provincies', 'province', 'Friesland is een provincie in het noorden.', 'Friesland is a province in the north.', { theme: 'regions', ...S });
  N('Fries', 'het', null, 'Frisian (language)', 'Het Fries is een officiële taal in Friesland.', 'Frisian is an official language in Friesland.', { theme: 'regions', ...S, id: 'fries-taal' });
  N('dialect', 'het', 'dialecten', 'dialect', 'Mijn schoonvader spreekt thuis dialect.', 'My father-in-law speaks dialect at home.', { theme: 'regions', ...S });
  N('streektaal', 'de', 'streektalen', 'regional language', 'Limburgs en Nedersaksisch zijn erkende streektalen.', 'Limburgish and Low Saxon are recognised regional languages.', { theme: 'regions', ...S });
  N('accent', 'het', 'accenten', 'accent', 'Je hoort aan zijn accent dat hij uit Brabant komt.', 'You can hear from his accent that he comes from Brabant.', { theme: 'regions', ...S });
  N('platteland', 'het', null, 'countryside', 'Op het platteland is het leven rustiger.', 'In the countryside life is quieter.', { theme: 'regions', ...S });
  N('Waddeneiland', 'het', 'Waddeneilanden', 'Wadden island', 'Texel is het grootste Waddeneiland.', 'Texel is the largest Wadden island.', { theme: 'regions', ...S });
  N('carnaval', 'het', null, 'carnival', 'In het zuiden wordt carnaval gevierd.', 'In the south carnival is celebrated.', { theme: 'regions', ...S });
  N('grens', 'de', 'grenzen', 'border', 'Maastricht ligt vlak bij de Belgische grens.', 'Maastricht is right by the Belgian border.', { theme: 'regions', ...S });
  N('inwoner', 'de', 'inwoners', 'inhabitant', 'Groningen heeft veel jonge inwoners.', 'Groningen has many young inhabitants.', { theme: 'regions', ...S });
  N('vooroordeel', 'het', 'vooroordelen', 'prejudice', 'Over elke regio bestaan vooroordelen.', 'There are prejudices about every region.', { theme: 'regions', ...S });
  VB('liggen', 'to be situated', 'lig|ligt|liggen', 'lag|lagen', 'gelegen', 'hebben', 'Zeeland ligt in het zuidwesten.', 'Zeeland is in the south-west.', { theme: 'regions', ...S });
  VB('verschillen', 'to differ', 'verschil|verschilt|verschillen', 'verschilde|verschilden', 'verschild', 'hebben', 'Het accent verschilt per regio.', 'The accent differs per region.', { theme: 'regions', ...S });
  VB('verstaan', 'to understand (hear)', 'versta|verstaat|verstaan', 'verstond|verstonden', 'verstaan', 'hebben', 'Ik versta het Limburgs niet goed.', 'I do not understand Limburgish well.', { theme: 'regions', ...S });
  VB('bekendstaan om', 'to be known for', 'sta bekend om|staat bekend om|staan bekend om', 'stond bekend om|stonden bekend om', 'bekendgestaan om', 'hebben', 'Brabant staat bekend om zijn gezelligheid.', 'Brabant is known for its conviviality.', { theme: 'regions', ...S, id: 'bekendstaan-om' });
  W('noordelijk', 'northern', 'adj', 'De noordelijke provincies zijn dunbevolkt.', 'The northern provinces are sparsely populated.', { theme: 'regions', ...S });
  W('zuidelijk', 'southern', 'adj', 'Het zuidelijke accent heeft een zachte g.', 'The southern accent has a soft g.', { theme: 'regions', ...S });
  W('nuchter', 'down-to-earth', 'adj', 'Groningers staan bekend als nuchter.', 'People from Groningen are known as down-to-earth.', { theme: 'regions', ...S });
  W('Bourgondisch', 'Burgundian (fond of good food and drink)', 'adj', 'In Limburg leven ze Bourgondisch.', 'In Limburg they live the good life.', { theme: 'regions', ...S, id: 'bourgondisch' });

  addTo('s3u8', lesson('s3u8l5', 'Regions, dialects and Frisian', 'You can describe the regions of the Netherlands, recognise the main accent differences, and talk about dialects and Frisian without mixing them up.', [
    h('The map in words'),
    p('Twelve `provincies`. The `Randstad` (Amsterdam, Rotterdam, Den Haag, Utrecht) is where most people and jobs are. The north (`Groningen`, `Friesland`, `Drenthe`) is spacious and `nuchter`; the south (`Noord-Brabant`, `Limburg`) is Catholic by tradition, celebrates `carnaval`, and is called `Bourgondisch`. `Zeeland` is islands and dykes; the `Waddeneilanden` lie along the north coast. "Holland" is strictly only two provinces, Noord- and Zuid-Holland.'),
    h('Frisian is a language, the others are dialects or regional languages'),
    list('`Het Fries` is a separate West Germanic language and the second **official language** in Friesland: road signs, school, the courts.', '`Limburgs` and `Nedersaksisch` are recognised `streektalen`.', 'Everything else (`Brabants`, `Amsterdams`, `Zeeuws`, `Gronings`) is `dialect` or accent. Everybody can switch to standard Dutch.'),
    h('What you will hear'),
    table(['where', 'feature'], [['south (Brabant, Limburg, Flanders)', 'the **zachte g**, melodic intonation, `ge` / `gij` in dialect'], ['Randstad', 'hard g, the "Gooise r", z → s in Amsterdam (`de son`)'], ['north-east', 'swallowed -en: `lopen` → `loop’m`'], ['Friesland', 'Frisian words in Dutch: `heit` (dad), `mem` (mum), `it giet oan`']]),
    h('Comparing regions'),
    p('`Het noorden is dunner bevolkt **dan** de Randstad.` `In het zuiden is het leven **gezelliger**, zeggen ze.` `Friesland **staat bekend om** zijn meren.` `Het accent **verschilt** per regio.` And beware: every region has `vooroordelen` about the others, usually told as jokes.'),
    ex(['Friesland, waar naast Nederlands ook Fries wordt gesproken, ligt in het noorden.', 'Friesland, where Frisian is spoken alongside Dutch, is in the north.'], ['Je hoort aan haar zachte g dat ze uit het zuiden komt.', 'You can hear from her soft g that she comes from the south.'], ['Limburg staat bekend om zijn heuvels, zijn vlaai en zijn carnaval.', 'Limburg is known for its hills, its vlaai tart and its carnival.'], ['Ik versta het dialect van mijn schoonfamilie nog niet, maar zij schakelen gelukkig over op Nederlands.', 'I do not understand my in-laws’ dialect yet, but luckily they switch to Dutch.']),
    tip('Never call Frisian a dialect in Friesland, and never call someone from Limburg or Groningen a "Hollander".'),
  ], ['g3-relative', 'g3-word-formation'], ['randstad', 'provincie', 'fries-taal', 'dialect', 'streektaal', 'accent', 'platteland', 'waddeneiland', 'carnaval', 'grens', 'inwoner', 'vooroordeel', 'liggen', 'verschillen', 'verstaan', 'bekendstaan-om', 'noordelijk', 'zuidelijk', 'nuchter', 'bourgondisch'], [
    mc('Frisian is', ['a Dutch dialect', 'a separate official language in Friesland', 'the same as German'], 1, 'An official language.'),
    mc('Where do you hear the zachte g?', ['in the north', 'in the south', 'in Amsterdam'], 1, 'Brabant, Limburg, Flanders.'),
    mc('"Holland" strictly means', ['the whole country', 'two western provinces', 'the Randstad plus Friesland'], 1, 'Noord- and Zuid-Holland.'),
    mc('Where is carnaval a big event?', ['in the south', 'in Friesland', 'on Texel'], 0, 'Brabant and Limburg.'),
    mc('Friesland, ___ ook Fries wordt gesproken, ligt in het noorden.', ['dat', 'waar', 'die'], 1, 'Place → waar.'),
    art('dialect', 'het', 'het dialect.'),
    art('platteland', 'het', 'het land.'),
    art('vooroordeel', 'het', 'het oordeel → het vooroordeel.'),
    plural('het vooroordeel', ['vooroordelen'], 'oordeel → oordelen.'),
    fill('Limburg staat bekend ___ zijn heuvels.', ['om'], 'Limburg is known for its hills.', 'bekendstaan om.'),
    fill('Het accent ___ per regio. (verschillen)', ['verschilt'], 'The accent differs per region.', 'stem + t.'),
    fill('Zeeland ___ in het zuidwesten. (liggen)', ['ligt'], 'Zeeland is in the south-west.', 'ligt.'),
    fill('Het noorden is dunner bevolkt ___ de Randstad.', ['dan'], 'The north is more sparsely populated than the Randstad.', 'comparative + dan.'),
    build('You can hear from his accent that he comes from Brabant.', 'Je hoort aan zijn accent dat hij uit Brabant komt.', ['komt hij', 'van'], 'horen aan; dat … komt.'),
    build('Frisian is an official language in Friesland.', 'Het Fries is een officiële taal in Friesland.', ['De Fries', 'officieel'], 'het Fries; een officiële taal.'),
    build('In the countryside life is quieter.', 'Op het platteland is het leven rustiger.', ['In', 'het leven is'], 'op het platteland + inversion.'),
    tr('en-nl', 'Texel is the largest Wadden island.', ['Texel is het grootste Waddeneiland.'], 'het eiland; grootste.'),
    tr('nl-en', 'Over elke regio bestaan vooroordelen, meestal in de vorm van grappen.', ['There are prejudices about every region, usually in the form of jokes.'], 'vooroordelen.'),
    fix('Het Fries is een dialect van het Nederlands.', ['Het Fries is een aparte taal.', 'Het Fries is een officiële taal in Friesland.'], 'Frisian is a language, not a dialect.'),
    dict('Je hoort aan haar zachte g dat ze uit het zuiden komt.', 'You can hear from her soft g that she comes from the south.', 'horen aan; zachte g.'),
    listen('In de Randstad wonen de meeste mensen, maar het noorden heeft veel meer ruimte.', ['Most people live in the Randstad, but the north has much more space.', 'Most people live in the north.', 'The Randstad is empty.'], 0, 'de meeste mensen; meer ruimte.'),
    speak('Friesland, waar naast Nederlands ook Fries wordt gesproken, staat bekend om zijn meren.', 'Friesland, where Frisian is spoken alongside Dutch, is known for its lakes.'),
    free('Compare two regions you know (in the Netherlands or your own country): landscape, people, language.', 'Ik woon in Amsterdam, maar mijn schoonfamilie komt uit Limburg. Het landschap is daar heel anders: er zijn heuvels. De mensen zijn volgens mij wat minder direct, en ze spreken onderling dialect, dat ik nog niet versta. Wat ik er leuk aan vind, is het carnaval.', 'I live in Amsterdam, but my in-laws come from Limburg. The landscape there is very different: there are hills. The people are, I think, a bit less direct, and they speak dialect among themselves, which I do not understand yet. What I like about it is the carnival.', { hints: ['Het landschap is …', 'De mensen zijn … dan …', 'Ze spreken …', 'Wat ik er leuk aan vind, is …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"De Randstad" is', ['the border region', 'the western ring of big cities'], 1, 'Amsterdam, Rotterdam, Den Haag, Utrecht.'),
    fill('Ik ___ het dialect nog niet. (understand by ear)', ['versta'], 'I do not understand the dialect yet.', 'verstaan.'),
    fill('Groningers staan bekend ___ nuchter.', ['als'], 'People from Groningen are known as down-to-earth.', 'bekendstaan als + adjective.'),
    build('Maastricht is right by the Belgian border.', 'Maastricht ligt vlak bij de Belgische grens.', ['Belgisch', 'is'], 'ligt vlak bij; de grens → Belgische.'),
    tr('en-nl', 'The Netherlands has twelve provinces.', ['Nederland heeft twaalf provincies.'], 'provincies.'),
    speak('Noem het Fries nooit een dialect; het is een officiële taal.', 'Never call Frisian a dialect; it is an official language.'),
  ]));
})();
