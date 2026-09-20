/* Stage 4 (B2) — Unit 1: Politiek en samenleving · Unit 2: Wetenschap en technologie · Unit 3: Werk en carrière
   Two full lessons per unit; further lessons are listed in content/TODO.md */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = (NL.content._s4units = NL.content._s4units || []);

  /* ---------------- Unit 1: Politiek en samenleving ---------------- */
  N('kabinet', 'het', 'kabinetten', 'cabinet (government)', 'Het kabinet heeft een nieuw plan gepresenteerd.', 'The cabinet has presented a new plan.', { theme: 'politics', stage: 4 });
  N('Tweede Kamer', 'de', null, 'House of Representatives', 'De Tweede Kamer debatteert over de woningwet.', 'The House of Representatives is debating the housing act.', { theme: 'politics', stage: 4, id: 'tweede-kamer' });
  N('coalitie', 'de', 'coalities', 'coalition', 'De coalitie bestaat uit vier partijen.', 'The coalition consists of four parties.', { theme: 'politics', stage: 4 });
  N('oppositie', 'de', null, 'opposition', 'De oppositie diende een motie in.', 'The opposition tabled a motion.', { theme: 'politics', stage: 4 });
  N('wetsvoorstel', 'het', 'wetsvoorstellen', 'bill', 'Het wetsvoorstel werd met een kleine meerderheid aangenomen.', 'The bill was passed with a small majority.', { theme: 'politics', stage: 4 });
  N('meerderheid', 'de', 'meerderheden', 'majority', 'Er is geen meerderheid voor het plan.', 'There is no majority for the plan.', { theme: 'politics', stage: 4 });
  N('motie', 'de', 'moties', 'motion', 'De motie werd verworpen.', 'The motion was rejected.', { theme: 'politics', stage: 4 });
  N('beleid', 'het', null, 'policy', 'Het beleid van de regering wordt bekritiseerd.', 'The government’s policy is being criticised.', { theme: 'politics', stage: 4 });
  N('bezuiniging', 'de', 'bezuinigingen', 'cut / austerity measure', 'De bezuinigingen treffen vooral het onderwijs.', 'The cuts mainly hit education.', { theme: 'politics', stage: 4 });
  N('kiezer', 'de', 'kiezers', 'voter', 'Veel kiezers twijfelen nog.', 'Many voters are still undecided.', { theme: 'politics', stage: 4 });
  N('draagvlak', 'het', null, 'public support', 'Er is weinig draagvlak voor de maatregel.', 'There is little public support for the measure.', { theme: 'politics', stage: 4 });
  N('polarisatie', 'de', null, 'polarisation', 'De polarisatie in het debat neemt toe.', 'Polarisation in the debate is increasing.', { theme: 'politics', stage: 4 });
  VB('aannemen', 'to pass (a law) / assume', 'neem aan|neemt aan|nemen aan', 'nam aan|namen aan', 'aangenomen', 'hebben', 'De wet is aangenomen.', 'The act has been passed.', { theme: 'politics', stage: 4 });
  VB('verwerpen', 'to reject', 'verwerp|verwerpt|verwerpen', 'verwierp|verwierpen', 'verworpen', 'hebben', 'De Kamer verwierp het voorstel.', 'The House rejected the proposal.', { theme: 'politics', stage: 4 });
  VB('indienen', 'to submit / table', 'dien in|dient in|dienen in', 'diende in|dienden in', 'ingediend', 'hebben', 'De partij dient morgen een motie in.', 'The party is tabling a motion tomorrow.', { theme: 'politics', stage: 4 });
  VB('aftreden', 'to resign (from office)', 'treed af|treedt af|treden af', 'trad af|traden af', 'afgetreden', 'zijn', 'De minister is afgetreden.', 'The minister has resigned.', { theme: 'politics', stage: 4 });
  VB('pleiten voor', 'to argue for', 'pleit voor|pleit voor|pleiten voor', 'pleitte voor|pleitten voor', 'gepleit voor', 'hebben', 'Zij pleit voor hogere lonen.', 'She argues for higher wages.', { theme: 'politics', stage: 4, id: 'pleiten-voor' });
  VB('uitstellen', 'to postpone', 'stel uit|stelt uit|stellen uit', 'stelde uit|stelden uit', 'uitgesteld', 'hebben', 'Het besluit is opnieuw uitgesteld.', 'The decision has been postponed again.', { theme: 'politics', stage: 4 });
  W('omstreden', 'controversial', 'adj', 'Het is een omstreden wetsvoorstel.', 'It is a controversial bill.', { theme: 'politics', stage: 4 });
  W('voorlopig', 'for the time being / provisional', 'adv', 'Het plan is voorlopig van tafel.', 'The plan is off the table for now.', { theme: 'politics', stage: 4 });

  W('echter', 'however', 'adv', 'De financiering is echter nog niet rond.', 'The financing, however, is not yet settled.', { theme: 'discourse', stage: 4 });
  W('desondanks', 'nevertheless', 'adv', 'Desondanks stemde de Kamer voor.', 'Nevertheless the House voted in favour.', { theme: 'discourse', stage: 4 });
  W('immers', 'after all (as you know)', 'adv', 'De trein wacht immers niet.', 'The train does not wait, after all.', { theme: 'discourse', stage: 4 });
  W('namelijk', 'namely / you see', 'adv', 'Ik kom niet; ik ben namelijk ziek.', 'I am not coming; I am ill, you see.', { theme: 'discourse', stage: 4 });
  W('overigens', 'incidentally / by the way', 'adv', 'Overigens is dat niet nieuw.', 'Incidentally, that is not new.', { theme: 'discourse', stage: 4 });
  W('kortom', 'in short', 'adv', 'Kortom, het plan deugt niet.', 'In short, the plan is no good.', { theme: 'discourse', stage: 4 });
  W('oftewel', 'in other words / that is', 'conj', 'De AOW, oftewel het staatspensioen.', 'The AOW, in other words the state pension.', { theme: 'discourse', stage: 4 });
  W('sterker nog', 'what is more', 'adv', 'Het hielp niet; sterker nog, het werd erger.', 'It did not help; what is more, it got worse.', { theme: 'discourse', stage: 4, id: 'sterker-nog' });
  W('laat staan', 'let alone', 'conj', 'Hij kan niet fietsen, laat staan autorijden.', 'He cannot cycle, let alone drive.', { theme: 'discourse', stage: 4, id: 'laat-staan' });
  W('enerzijds', 'on the one hand', 'adv', 'Enerzijds is het duur, anderzijds is het nodig.', 'On the one hand it is expensive, on the other hand it is necessary.', { theme: 'discourse', stage: 4 });
  W('anderzijds', 'on the other hand', 'adv', 'Anderzijds levert het veel op.', 'On the other hand it yields a lot.', { theme: 'discourse', stage: 4 });
  W('aangezien', 'since / given that', 'conj', 'Aangezien er geen meerderheid is, wordt het plan ingetrokken.', 'Since there is no majority, the plan is being withdrawn.', { theme: 'discourse', stage: 4 });
  W('mits', 'provided that', 'conj', 'Ik stem voor, mits het plan wordt aangepast.', 'I will vote in favour, provided the plan is amended.', { theme: 'discourse', stage: 4 });
  W('tenzij', 'unless', 'conj', 'De wet gaat door, tenzij de Eerste Kamer tegenstemt.', 'The act goes ahead, unless the Senate votes against.', { theme: 'discourse', stage: 4 });
  W('doordat', 'because (cause)', 'conj', 'Doordat de rente steeg, daalden de huizenprijzen.', 'Because interest rates rose, house prices fell.', { theme: 'discourse', stage: 4 });
  N('commentaar', 'het', 'commentaren', 'commentary / comment', 'Het commentaar in de krant was scherp.', 'The commentary in the newspaper was sharp.', { theme: 'media', stage: 4 });
  N('kanttekening', 'de', 'kanttekeningen', 'critical note', 'Ik wil daar één kanttekening bij plaatsen.', 'I would like to add one critical note to that.', { theme: 'discourse', stage: 4 });
  VB('benadrukken', 'to emphasise', 'benadruk|benadrukt|benadrukken', 'benadrukte|benadrukten', 'benadrukt', 'hebben', 'De premier benadrukte dat er geen alternatief is.', 'The prime minister emphasised that there is no alternative.', { theme: 'discourse', stage: 4 });
  VB('betwijfelen', 'to doubt', 'betwijfel|betwijfelt|betwijfelen', 'betwijfelde|betwijfelden', 'betwijfeld', 'hebben', 'Ik betwijfel of dat haalbaar is.', 'I doubt whether that is feasible.', { theme: 'discourse', stage: 4 });

  const u1 = [];
  u1.push(lesson('s4u1l1', 'Parliament and long sentences: keeping the verbs under control', 'You can follow and produce long sentences about politics: find the finite verb and its partner, handle three-verb clusters, and move heavy material to the end.', [
    h('The pincer'),
    p('In a main clause the finite verb stands second and the rest of the verb group waits at the end. Political Dutch fills the gap generously: `Het kabinet **heeft** na maanden van onderhandelen, waarbij vooral de coalitiepartijen het oneens waren, het omstreden wetsvoorstel alsnog **ingediend**.` Read: subject, finite verb, jump to the end, then the middle.'),
    h('Verb clusters'),
    table(['verbs', 'example'], [['2', '*… dat de wet is aangenomen / aangenomen is.'], ['3', '*… dat het besluit had moeten worden uitgesteld.'], ['3, participle first', '*… dat het besluit uitgesteld had moeten worden.']]),
    p('Keep the cluster together: nothing goes between `had`, `moeten`, `worden` and `uitgesteld`.'),
    h('Moving weight to the end'),
    p('Prepositional phrases and clauses may follow the verb group: `De Kamer heeft lang gedebatteerd **over de bezuinigingen**.` `De minister heeft toegezegd **dat het beleid wordt aangepast**.`'),
    h('How Dutch politics works, in brief'),
    p('`De Tweede Kamer` (150 seats) makes and amends laws; `de Eerste Kamer` checks them. No party ever wins a majority, so parties form a `coalitie` and write a `regeerakkoord`. The `oppositie` controls with `moties` and debates. A `kabinet` that loses support `valt`; then come new `verkiezingen`.'),
    ex(['Hoewel de oppositie had aangekondigd tegen te stemmen, is het wetsvoorstel, dat al twee keer was uitgesteld, gisteren met een kleine meerderheid aangenomen.', 'Although the opposition had announced it would vote against, the bill, which had already been postponed twice, was passed yesterday with a small majority.'], ['Het is de vraag of er voldoende draagvlak zal zijn voor nieuwe bezuinigingen.', 'The question is whether there will be enough support for new cuts.'], ['Dat had eerder moeten worden besproken.', 'That should have been discussed earlier.']),
    tip('Every `dat, die, waarbij, hoewel, omdat` opens a bracket; its verb closes it. Count brackets when you get lost.'),
  ], ['g4-long-sentences'], ['kabinet', 'tweede-kamer', 'coalitie', 'oppositie', 'wetsvoorstel', 'meerderheid', 'motie', 'beleid', 'bezuiniging', 'kiezer', 'draagvlak', 'polarisatie', 'aannemen', 'verwerpen', 'indienen', 'aftreden', 'pleiten-voor', 'uitstellen', 'omstreden', 'voorlopig'], [
    mc('"Het kabinet heeft na lang overleg het plan ingediend." Which two words form the verb group?', ['heeft … ingediend', 'kabinet … plan', 'na … overleg'], 0, 'Finite verb second, participle last.'),
    mc('Which cluster is correct?', ['… dat het had worden moeten uitgesteld.', '… dat het had moeten worden uitgesteld.', '… dat het moeten had worden uitgesteld.'], 1, 'finite verb, modal, worden, participle (or participle first).'),
    mc('Which is correct?', ['De Kamer heeft lang over de bezuinigingen gedebatteerd.', 'De Kamer heeft lang gedebatteerd over de bezuinigingen.', 'Both are correct.'], 2, 'The prepositional phrase may stay in the middle or follow the verb.'),
    mc('In Dutch politics, which body can amend a bill?', ['de Eerste Kamer', 'de Tweede Kamer', 'de koning'], 1, 'The Tweede Kamer amends; the Eerste Kamer only approves or rejects.'),
    fill('De motie is met een grote meerderheid ___. (verwerpen)', ['verworpen'], 'The motion was rejected by a large majority.', 'verwerpen → verworpen.'),
    fill('De minister is gisteren ___. (aftreden)', ['afgetreden'], 'The minister resigned yesterday.', 'af + ge + treden, with zijn.'),
    fill('Er is te weinig ___ voor nieuwe bezuinigingen. (public support)', ['draagvlak'], 'There is too little public support for new cuts.', 'het draagvlak.'),
    fill('Dat had eerder ___ worden besproken. (moeten)', ['moeten'], 'That should have been discussed earlier.', 'Double infinitive inside the cluster.'),
    build('The bill was passed with a small majority.', 'Het wetsvoorstel is met een kleine meerderheid aangenomen.', ['heeft', 'klein'], 'is … aangenomen; een kleine meerderheid.'),
    build('It is the question whether there will be enough support.', 'Het is de vraag of er voldoende draagvlak zal zijn.', ['zal er', 'dat'], 'of … zal zijn at the end.'),
    build('The decision should have been postponed.', 'Het besluit had moeten worden uitgesteld.', ['gemoeten', 'geworden'], 'had moeten worden uitgesteld.'),
    tr('en-nl', 'The opposition tabled a motion against the cuts.', ['De oppositie diende een motie in tegen de bezuinigingen.', 'De oppositie heeft een motie ingediend tegen de bezuinigingen.', 'De oppositie diende een motie tegen de bezuinigingen in.'], 'een motie indienen.'),
    tr('nl-en', 'Hoewel het plan omstreden is, pleit de coalitie ervoor het voorlopig door te zetten.', ['Although the plan is controversial, the coalition argues for pressing ahead with it for now.', 'Although the plan is controversial, the coalition argues in favour of continuing with it for the time being.'], 'pleiten voor → ervoor; voorlopig.'),
    fix('… omdat het besluit had uitgesteld moeten worden eerder.', ['… omdat het besluit eerder had moeten worden uitgesteld.', '… omdat het besluit eerder uitgesteld had moeten worden.'], 'Nothing splits or follows the cluster except heavy phrases; eerder goes before it.'),
    dict('Het kabinet heeft het omstreden wetsvoorstel alsnog ingediend.', 'The cabinet has submitted the controversial bill after all.', 'heeft … ingediend.'),
    listen('De minister zei dat het beleid zou worden aangepast, mits de Kamer daarmee instemt.', ['The minister said that the policy would be adjusted, provided the House agrees.', 'The minister refused to adjust the policy.', 'The House has already adjusted the policy.'], 0, 'zou worden aangepast; mits.'),
    speak('Hoewel de oppositie tegen was, is het wetsvoorstel gisteren met een kleine meerderheid aangenomen.', 'Although the opposition was against, the bill was passed yesterday with a small majority.'),
    free('Explain in four sentences how a government is formed in your country and how that differs from the Netherlands. Use at least one sentence with a three-verb cluster.', 'In Nederland wint geen enkele partij een meerderheid, dus er moet altijd een coalitie worden gevormd. Dat kan maanden duren. In mijn land regeert meestal één partij. Ik denk dat het Nederlandse systeem eerlijker is, hoewel besluiten vaak langer moeten worden uitgesteld.', 'In the Netherlands no party wins a majority, so a coalition always has to be formed. That can take months. In my country one party usually governs. I think the Dutch system is fairer, although decisions often have to be postponed longer.', { hints: ['er moet … worden gevormd', 'In mijn land …', 'hoewel … moeten worden …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"… dat de wet is aangenomen" can also be written as', ['… dat de wet aangenomen is', '… dat is de wet aangenomen'], 0, 'Both cluster orders are fine.'),
    fill('De Kamer heeft het voorstel ___. (rejected)', ['verworpen'], 'The House rejected the proposal.', 'verworpen.'),
    fill('De partij ___ morgen een motie in. (indienen)', ['dient'], 'The party tables a motion tomorrow.', 'dient … in.'),
    build('The minister has resigned.', 'De minister is afgetreden.', ['heeft', 'aftreden'], 'is afgetreden.'),
    tr('en-nl', 'There is no majority for the plan.', ['Er is geen meerderheid voor het plan.'], 'er is geen.'),
    speak('Het is de vraag of er voldoende draagvlak zal zijn voor dit omstreden beleid.', 'The question is whether there will be enough support for this controversial policy.'),
  ]));

  u1.push(lesson('s4u1l2', 'Reading a commentary: discourse markers', 'You can follow the line of argument in an opinion piece and steer your own text with echter, desondanks, immers, namelijk, kortom, mits and tenzij.', [
    h('Markers tell you where the text is going'),
    table(['direction', 'markers'], [['same direction', '*bovendien, daarnaast, sterker nog, overigens'], ['turn', '*echter, maar, toch, desondanks, daarentegen, enerzijds … anderzijds'], ['reason', '*immers (known), namelijk (new), aangezien, doordat'], ['condition', '*mits (provided), tenzij (unless)'], ['rewording', '*oftewel, met andere woorden'], ['scale', '*laat staan, zelfs'], ['conclusion', '*kortom, al met al, dus']]),
    h('Position'),
    p('`echter`, `immers` and `namelijk` do **not** open the sentence: `De steun is **echter** beperkt.` `Dat is **namelijk** niet waar.` `kortom`, `desondanks`, `bovendien` do open it, followed by inversion: `Desondanks **stemde de Kamer** voor.` `mits`, `tenzij`, `aangezien`, `doordat` are conjunctions: verb to the end.'),
    h('namelijk or immers?'),
    p('`namelijk`: a reason the reader does not know. `immers`: a reason the reader already shares. `Ik ga niet mee; ik moet namelijk werken.` `We moeten zuinig zijn; het geld is immers op.`'),
    ex(['Het kabinet wil bezuinigen. De oppositie wijst er echter op dat de economie juist groeit.', 'The cabinet wants to make cuts. The opposition, however, points out that the economy is in fact growing.'], ['Enerzijds is er begrip voor de maatregel, anderzijds ontbreekt het draagvlak.', 'On the one hand there is understanding for the measure, on the other hand support is lacking.'], ['De partij steunt het plan, mits de laagste inkomens worden ontzien.', 'The party supports the plan, provided the lowest incomes are spared.'], ['Kortom, zonder meerderheid in de Kamer is het voorstel kansloos.', 'In short, without a majority in the House the proposal has no chance.']),
    tip('In exam reading, circle the markers first. `echter` and `maar` usually sit right before the writer’s real point.'),
  ], ['g4-discourse', 'g4-reading'], ['echter', 'desondanks', 'immers', 'namelijk', 'overigens', 'kortom', 'oftewel', 'sterker-nog', 'laat-staan', 'enerzijds', 'anderzijds', 'aangezien', 'mits', 'tenzij', 'doordat', 'commentaar', 'kanttekening', 'benadrukken', 'betwijfelen'], [
    mc('Which sentence is correct?', ['Echter is de steun beperkt.', 'De steun is echter beperkt.', 'De steun echter beperkt is.'], 1, 'echter after the first element or verb.'),
    mc('"Ik ga niet mee; ik moet ___ werken." (new information)', ['immers', 'namelijk', 'echter'], 1, 'namelijk = a reason you did not know.'),
    mc('"We moeten opschieten; de trein wacht ___ niet." (shared knowledge)', ['immers', 'namelijk', 'kortom'], 0, 'immers.'),
    mc('"Ik stem voor, ___ het plan wordt aangepast." (provided that)', ['tenzij', 'mits', 'doordat'], 1, 'mits.'),
    mc('"De wet gaat door, ___ de Eerste Kamer tegenstemt." (unless)', ['mits', 'tenzij', 'aangezien'], 1, 'tenzij.'),
    mc('"De huizenprijzen daalden ___ de rente steeg." (cause, no intention)', ['omdat', 'doordat', 'zodat'], 1, 'doordat = cause.'),
    fill('Hij spreekt geen Duits, ___ staan Fries.', ['laat'], 'He does not speak German, let alone Frisian.', 'laat staan.'),
    fill('___, zonder meerderheid is het voorstel kansloos. (in short)', ['Kortom'], 'In short, without a majority the proposal has no chance.', 'kortom.'),
    fill('Enerzijds is het duur, ___ is het noodzakelijk.', ['anderzijds'], 'On the one hand it is expensive, on the other hand it is necessary.', 'enerzijds … anderzijds.'),
    fill('___ stemde de Kamer voor. (nevertheless)', ['Desondanks', 'Niettemin', 'Toch'], 'Nevertheless the House voted in favour.', 'desondanks + inversion.'),
    build('The financing, however, is not yet settled.', 'De financiering is echter nog niet rond.', ['Echter de', 'maar'], 'echter in the middle.'),
    build('I doubt whether that is feasible.', 'Ik betwijfel of dat haalbaar is.', ['als', 'twijfel'], 'betwijfelen of … is: whether = of, and the verb goes to the end.'),
    build('Since there is no majority, the plan is withdrawn.', 'Aangezien er geen meerderheid is, wordt het plan ingetrokken.', ['het plan wordt', 'is er'], 'aangezien … is; wordt het plan.'),
    tr('en-nl', 'I would like to add one critical note.', ['Ik wil daar één kanttekening bij plaatsen.', 'Ik wil er één kanttekening bij plaatsen.', 'Ik wil één kanttekening plaatsen.'], 'een kanttekening plaatsen bij.'),
    tr('nl-en', 'Het hielp niet; sterker nog, de situatie werd erger.', ['It did not help; what is more, the situation got worse.', 'It did not help; in fact, the situation became worse.'], 'sterker nog.'),
    fix('Namelijk ben ik ziek.', ['Ik ben namelijk ziek.'], 'namelijk never opens the sentence.'),
    fix('Ik kom, tenzij het regent niet.', ['Ik kom, tenzij het regent.'], 'tenzij already contains the negative.'),
    dict('De premier benadrukte echter dat er geen alternatief is.', 'The prime minister emphasised, however, that there is no alternative.', 'benadrukte echter dat … is.'),
    listen('Enerzijds begrijp ik de kritiek, anderzijds zie ik geen beter plan; kortom, ik stem voor.', ['On the one hand I understand the criticism, on the other I see no better plan; in short, I am voting in favour.', 'I understand the criticism, so I am voting against.', 'There is a better plan, so I am abstaining.'], 0, 'enerzijds … anderzijds; kortom.'),
    speak('De plannen zijn ambitieus. De financiering is echter nog niet rond; sterker nog, niemand weet wie er gaat betalen.', 'The plans are ambitious. The financing, however, is not yet settled; what is more, nobody knows who is going to pay.'),
    read('Commentaar: Uitstel is geen beleid. Het kabinet heeft het besluit over de woningbouw opnieuw uitgesteld. Dat is begrijpelijk: de coalitie is het immers al maanden oneens over de financiering. Toch is het onverstandig. De woningnood neemt namelijk niet af doordat politici wachten; sterker nog, elk jaar uitstel maakt bouwen duurder. Enerzijds willen de partijen de staatsschuld beperken, anderzijds beloofden ze allemaal honderdduizend nieuwe woningen. Beide kan niet, tenzij er elders wordt bezuinigd. Kortom, wie A zegt, moet ook B zeggen: het kabinet moet kiezen, en wel vóór de zomer.', [
      { q: 'What is the writer’s standpoint?', options: ['postponing is understandable and wise', 'postponing is understandable but unwise', 'the housing shortage is exaggerated'], answer: 1, explain: '"Dat is begrijpelijk … Toch is het onverstandig."' },
      { q: 'Why does "immers" appear in the second sentence?', options: ['it introduces new information', 'it reminds the reader of something known', 'it marks a contrast'], answer: 1, explain: 'immers = shared knowledge: the coalition has disagreed for months.' },
      { q: 'What does "sterker nog" do?', options: ['it weakens the argument', 'it strengthens the previous point', 'it concludes the text'], answer: 1, explain: 'It adds a stronger version of the same argument.' },
      { q: 'What does the writer want?', options: ['new elections', 'a choice before the summer', 'higher state debt'], answer: 1, explain: '"het kabinet moet kiezen, en wel vóór de zomer".' },
    ], { en: 'Commentary: Postponement is not policy. The cabinet has once again postponed the decision on housing construction. That is understandable: the coalition has, after all, disagreed about the financing for months. Still it is unwise. The housing shortage does not decrease because politicians wait; what is more, each year of delay makes building more expensive. On the one hand the parties want to limit the national debt, on the other they all promised a hundred thousand new homes. Both is not possible, unless cuts are made elsewhere. In short, in for a penny, in for a pound: the cabinet must choose, and do so before the summer.' }),
    write('Write a short commentary (120 to 150 words) on a current issue in your city. Use at least five discourse markers, including echter or desondanks, namelijk or immers, and kortom.', ['Standpoint in the first two sentences', 'At least one turn (echter, toch, desondanks)', 'One reason with namelijk or immers, correctly placed', 'One condition with mits or tenzij', 'Conclusion opened by kortom or al met al', 'No marker at the start of every sentence'], 'De gemeente wil de fietsenstallingen bij het station betaald maken. Dat lijkt me geen goed idee. Fietsen is immers precies wat de stad wil stimuleren. Betaald stallen levert bovendien weinig op: de meeste mensen zetten hun fiets dan gewoon op straat. De gemeente wijst er echter op dat de stallingen overvol zijn. Dat klopt, maar dat los je niet op met een tarief; er zijn namelijk simpelweg te weinig plekken. Ik ben dus tegen, tenzij de opbrengst volledig naar nieuwe stallingen gaat. Kortom, eerst bouwen, dan pas betalen.'),
  ], [
    mc('"Dat is ___ niet waar." (you see)', ['namelijk', 'kortom'], 0, 'namelijk.'),
    fill('Ik kom, ___ het regent. (unless)', ['tenzij'], 'I am coming, unless it rains.', 'tenzij.'),
    fill('___ er geen geld is, gaat het plan niet door. (given that)', ['Aangezien', 'Omdat', 'Doordat'], 'Given that there is no money, the plan is not going ahead.', 'aangezien.'),
    build('Nevertheless the House voted in favour.', 'Desondanks stemde de Kamer voor.', ['de Kamer stemde', 'echter'], 'desondanks + inversion.'),
    tr('en-nl', 'In short, the plan is no good.', ['Kortom, het plan deugt niet.', 'Kortom, het plan is niet goed.'], 'kortom.'),
    speak('Ik ben voor, mits de laagste inkomens worden ontzien; anders betwijfel ik of er draagvlak is.', 'I am in favour, provided the lowest incomes are spared; otherwise I doubt whether there is support.'),
  ]));

  units.push(unit('s4u1', 'Politiek en samenleving', 'politics and society', u1, [
    mc('Which is correct?', ['… dat het had moeten worden besproken.', '… dat het moeten had worden besproken.'], 0, 'Cluster order.'),
    mc('"De steun is ___ beperkt."', ['echter', 'kortom'], 0, 'echter in the middle.'),
    fill('De wet is met een kleine meerderheid ___.', ['aangenomen'], 'The act was passed with a small majority.', 'aangenomen.'),
    fill('Ik stem voor, ___ het plan wordt aangepast.', ['mits'], 'I will vote in favour, provided the plan is amended.', 'mits.'),
    fill('Hij kan niet fietsen, laat ___ autorijden.', ['staan'], 'He cannot cycle, let alone drive.', 'laat staan.'),
    build('The motion was rejected.', 'De motie werd verworpen.', ['heeft', 'verwerpt'], 'werd verworpen.'),
    build('I am ill, you see.', 'Ik ben namelijk ziek.', ['Namelijk ik', 'immers'], 'namelijk in the middle.'),
    fix('Echter het kabinet wil bezuinigen.', ['Het kabinet wil echter bezuinigen.'], 'echter not first.'),
    tr('en-nl', 'The minister resigned yesterday.', ['De minister is gisteren afgetreden.', 'De minister trad gisteren af.'], 'aftreden, with zijn.'),
    listen('Aangezien de coalitie geen meerderheid meer heeft, zullen er waarschijnlijk nieuwe verkiezingen komen.', ['Since the coalition no longer has a majority, there will probably be new elections.', 'The coalition won a bigger majority in the elections.', 'There will be no elections this year.'], 0, 'aangezien; geen meerderheid meer.'),
    speak('Enerzijds begrijp ik de bezuinigingen, anderzijds betwijfel ik of er genoeg draagvlak voor is.', 'On the one hand I understand the cuts, on the other I doubt whether there is enough support for them.'),
  ]));

  /* ---------------- Unit 2: Wetenschap en technologie ---------------- */
  N('wetenschap', 'de', 'wetenschappen', 'science', 'De wetenschap is het daarover eens.', 'Science agrees on that.', { theme: 'science', stage: 4 });
  N('wetenschapper', 'de', 'wetenschappers', 'scientist', 'Wetenschappers waarschuwen voor de gevolgen.', 'Scientists warn of the consequences.', { theme: 'science', stage: 4 });
  N('ontwikkeling', 'de', 'ontwikkelingen', 'development', 'De ontwikkeling van het vaccin ging snel.', 'The development of the vaccine went fast.', { theme: 'science', stage: 4 });
  N('toename', 'de', null, 'increase', 'Er is een sterke toename van het aantal gebruikers.', 'There is a strong increase in the number of users.', { theme: 'science', stage: 4 });
  N('afname', 'de', null, 'decrease', 'De afname van het aantal insecten is zorgwekkend.', 'The decrease in the number of insects is worrying.', { theme: 'science', stage: 4 });
  N('invoering', 'de', null, 'introduction (of a measure)', 'De invoering van de wet is uitgesteld.', 'The introduction of the act has been postponed.', { theme: 'formal', stage: 4 });
  N('kunstmatige intelligentie', 'de', null, 'artificial intelligence', 'Kunstmatige intelligentie verandert het werk van vertalers.', 'Artificial intelligence is changing the work of translators.', { theme: 'technology', stage: 4, id: 'kunstmatige-intelligentie' });
  N('toepassing', 'de', 'toepassingen', 'application', 'Er zijn veel toepassingen in de zorg.', 'There are many applications in healthcare.', { theme: 'technology', stage: 4 });
  N('gegevensbescherming', 'de', null, 'data protection', 'Gegevensbescherming is wettelijk geregeld.', 'Data protection is regulated by law.', { theme: 'technology', stage: 4 });
  N('resultaat', 'het', 'resultaten', 'result', 'De resultaten worden in het najaar gepubliceerd.', 'The results will be published in the autumn.', { theme: 'science', stage: 4 });
  N('hypothese', 'de', 'hypotheses', 'hypothesis', 'De hypothese werd niet bevestigd.', 'The hypothesis was not confirmed.', { theme: 'science', stage: 4 });
  N('steekproef', 'de', 'steekproeven', 'sample', 'De steekproef was te klein.', 'The sample was too small.', { theme: 'science', stage: 4 });
  N('verband', 'het', 'verbanden', 'connection / correlation', 'Er is een verband tussen slaap en geheugen.', 'There is a connection between sleep and memory.', { theme: 'science', stage: 4 });
  VB('aantonen', 'to demonstrate / prove', 'toon aan|toont aan|tonen aan', 'toonde aan|toonden aan', 'aangetoond', 'hebben', 'Het onderzoek toont aan dat het middel werkt.', 'The study demonstrates that the drug works.', { theme: 'science', stage: 4 });
  VB('blijken', 'to turn out / appear', 'blijk|blijkt|blijken', 'bleek|bleken', 'gebleken', 'zijn', 'Uit het onderzoek blijkt dat de kosten stijgen.', 'The study shows that costs are rising.', { theme: 'science', stage: 4, note: 'blijken uit = to be evident from.' });
  VB('toenemen', 'to increase', 'neem toe|neemt toe|nemen toe', 'nam toe|namen toe', 'toegenomen', 'zijn', 'Het aantal thuiswerkers is toegenomen.', 'The number of people working from home has increased.', { theme: 'science', stage: 4 });
  VB('afnemen', 'to decrease', 'neem af|neemt af|nemen af', 'nam af|namen af', 'afgenomen', 'zijn', 'De uitstoot is licht afgenomen.', 'Emissions have decreased slightly.', { theme: 'science', stage: 4 });
  VB('leiden tot', 'to lead to', 'leid tot|leidt tot|leiden tot', 'leidde tot|leidden tot', 'geleid tot', 'hebben', 'De maatregel leidde tot minder ongelukken.', 'The measure led to fewer accidents.', { theme: 'science', stage: 4, id: 'leiden-tot' });
  PH('met betrekking tot', 'with regard to', 'Met betrekking tot privacy zijn er zorgen.', 'With regard to privacy there are concerns.', { theme: 'formal', stage: 4, id: 'ph-met-betrekking-tot' });
  PH('als gevolg van', 'as a result of', 'Als gevolg van de droogte mislukte de oogst.', 'As a result of the drought the harvest failed.', { theme: 'formal', stage: 4, id: 'ph-als-gevolg-van' });
  PH('op grond van', 'on the basis of', 'Op grond van deze gegevens is het plan aangepast.', 'On the basis of these data the plan was adjusted.', { theme: 'formal', stage: 4, id: 'ph-op-grond-van' });
  PH('door middel van', 'by means of', 'De gegevens zijn door middel van interviews verzameld.', 'The data were collected by means of interviews.', { theme: 'formal', stage: 4, id: 'ph-door-middel-van' });

  N('algoritme', 'het', 'algoritmes', 'algorithm', 'Het algoritme bepaalt wat je ziet.', 'The algorithm decides what you see.', { theme: 'technology', stage: 4 });
  N('privacy', 'de', null, 'privacy', 'De privacy van gebruikers moet worden beschermd.', 'Users’ privacy must be protected.', { theme: 'technology', stage: 4 });
  N('toezicht', 'het', null, 'supervision / oversight', 'Er is te weinig toezicht op techbedrijven.', 'There is too little oversight of tech companies.', { theme: 'technology', stage: 4 });
  N('doorbraak', 'de', 'doorbraken', 'breakthrough', 'Het was een doorbraak in het kankeronderzoek.', 'It was a breakthrough in cancer research.', { theme: 'science', stage: 4 });
  N('bijwerking', 'de', 'bijwerkingen', 'side effect', 'De bijwerkingen waren nog niet onderzocht.', 'The side effects had not yet been investigated.', { theme: 'science', stage: 4 });
  N('proefpersoon', 'de', 'proefpersonen', 'test subject', 'Aan het onderzoek deden duizend proefpersonen mee.', 'A thousand test subjects took part in the study.', { theme: 'science', stage: 4 });
  N('samenvatting', 'de', 'samenvattingen', 'summary / abstract', 'Lees eerst de samenvatting.', 'Read the abstract first.', { theme: 'science', stage: 4 });
  N('conclusie', 'de', 'conclusies', 'conclusion', 'De conclusie is voorzichtig geformuleerd.', 'The conclusion is cautiously worded.', { theme: 'science', stage: 4 });
  N('bron', 'de', 'bronnen', 'source', 'Vermeld altijd je bronnen.', 'Always cite your sources.', { theme: 'science', stage: 4 });
  VB('publiceren', 'to publish', 'publiceer|publiceert|publiceren', 'publiceerde|publiceerden', 'gepubliceerd', 'hebben', 'De studie zal volgend jaar worden gepubliceerd.', 'The study will be published next year.', { theme: 'science', stage: 4 });
  VB('uitvoeren', 'to carry out', 'voer uit|voert uit|voeren uit', 'voerde uit|voerden uit', 'uitgevoerd', 'hebben', 'Het onderzoek werd uitgevoerd door de universiteit.', 'The research was carried out by the university.', { theme: 'science', stage: 4 });
  VB('vaststellen', 'to establish / determine', 'stel vast|stelt vast|stellen vast', 'stelde vast|stelden vast', 'vastgesteld', 'hebben', 'Er is vastgesteld dat de methode werkt.', 'It has been established that the method works.', { theme: 'science', stage: 4 });
  VB('veronderstellen', 'to assume / suppose', 'veronderstel|veronderstelt|veronderstellen', 'veronderstelde|veronderstelden', 'verondersteld', 'hebben', 'Men veronderstelt dat het effect tijdelijk is.', 'It is assumed that the effect is temporary.', { theme: 'science', stage: 4 });
  VB('verzamelen', 'to collect', 'verzamel|verzamelt|verzamelen', 'verzamelde|verzamelden', 'verzameld', 'hebben', 'De gegevens werden anoniem verzameld.', 'The data were collected anonymously.', { theme: 'science', stage: 4 });
  VB('waarschuwen', 'to warn', 'waarschuw|waarschuwt|waarschuwen', 'waarschuwde|waarschuwden', 'gewaarschuwd', 'hebben', 'Er werd gewaarschuwd voor de risico’s.', 'A warning was given about the risks.', { theme: 'science', stage: 4 });
  W('men', 'one / people (formal)', 'pron', 'Men neemt aan dat de prijzen dalen.', 'It is assumed that prices will fall.', { theme: 'formal', stage: 4 });
  W('vermoedelijk', 'presumably', 'adv', 'Het effect is vermoedelijk klein.', 'The effect is presumably small.', { theme: 'science', stage: 4 });
  W('significant', 'significant', 'adj', 'Het verschil was niet significant.', 'The difference was not significant.', { theme: 'science', stage: 4 });
  W('zorgwekkend', 'worrying', 'adj', 'Dat is een zorgwekkende ontwikkeling.', 'That is a worrying development.', { theme: 'science', stage: 4 });

  const u2 = [];
  u2.push(lesson('s4u2l1', 'Academic Dutch: nominalisation', 'You can read formal and academic Dutch by unpacking nouns into verbs, and write formally yourself with nominalisations and formal prepositional phrases.', [
    h('Actions packed into nouns'),
    table(['verb', 'noun'], [['toenemen', '*de toename'], ['afnemen', '*de afname'], ['ontwikkelen', '*de ontwikkeling'], ['invoeren', '*de invoering'], ['toepassen', '*de toepassing'], ['beschermen', '*de bescherming'], ['onderzoeken', '*het onderzoek'], ['gebruiken', '*het gebruik'], ['any verb', '*het + infinitive: het verzamelen van gegevens']]),
    p('Academic sentences chain them: `De invoering van de maatregel leidde tot een afname van het aantal ongelukken.` Unpack: someone introduced a measure, then fewer accidents happened.'),
    h('Formal prepositional phrases'),
    p('`met betrekking tot` (regarding), `als gevolg van` (as a result of), `op grond van` (on the basis of), `door middel van` (by means of), `ten aanzien van` (with respect to), `in het kader van` (within the framework of), `gezien` (in view of), `wegens` (because of).'),
    h('Reporting research'),
    p('`Uit het onderzoek blijkt dat …` (the study shows that), `Het onderzoek toont aan dat …`, `Er is een verband tussen … en …`, `Er is sprake van …` (there is), `De resultaten wijzen erop dat …` (the results indicate that).'),
    ex(['Uit het onderzoek blijkt een sterke toename van het gebruik van kunstmatige intelligentie in de zorg.', 'The study shows a strong increase in the use of artificial intelligence in healthcare.'], ['Als gevolg van de invoering van de nieuwe regels is het aantal klachten afgenomen.', 'As a result of the introduction of the new rules the number of complaints has decreased.'], ['Met betrekking tot gegevensbescherming bestaan er nog grote zorgen.', 'With regard to data protection there are still great concerns.'], ['Het verzamelen van persoonsgegevens is alleen toegestaan op grond van de wet.', 'Collecting personal data is only permitted on the basis of the law.']),
    tip('When you write: one nominalisation per clause, maximum. `Omdat de regels zijn ingevoerd, zijn er minder klachten` is clearer than the noun chain and just as correct.'),
  ], ['g4-nominalisation', 'g4-reading'], ['wetenschap', 'wetenschapper', 'ontwikkeling', 'toename', 'afname', 'invoering', 'kunstmatige-intelligentie', 'toepassing', 'gegevensbescherming', 'resultaat', 'hypothese', 'steekproef', 'verband', 'aantonen', 'blijken', 'toenemen', 'afnemen', 'leiden-tot', 'ph-met-betrekking-tot', 'ph-als-gevolg-van', 'ph-op-grond-van', 'ph-door-middel-van'], [
    mc('The noun of "toenemen" is', ['de toeneming', 'de toename', 'het toenemen only'], 1, 'de toename (het toenemen is also possible).'),
    mc('"De invoering van de wet" contains the verb', ['invoeren', 'voeren', 'invoegen'], 0, 'invoeren → invoering.'),
    mc('"Uit het onderzoek blijkt dat …" means', ['the study doubts that', 'the study shows that', 'the study hopes that'], 1, 'blijken uit.'),
    mc('"Op grond van" means', ['on the ground', 'on the basis of', 'because of the soil'], 1, 'on the basis of.'),
    art('onderzoek', 'het', 'het onderzoek.'),
    art('toename', 'de', 'de toename.'),
    art('verband', 'het', 'het verband.'),
    fill('Als ___ van de droogte mislukte de oogst.', ['gevolg'], 'As a result of the drought the harvest failed.', 'als gevolg van.'),
    fill('Het ___ van persoonsgegevens is aan regels gebonden. (verzamelen, as a noun)', ['verzamelen'], 'Collecting personal data is subject to rules.', 'het + infinitive.'),
    fill('Het aantal gebruikers is sterk ___. (toenemen)', ['toegenomen'], 'The number of users has increased sharply.', 'toe + ge + nomen, with zijn.'),
    fill('De maatregel ___ tot minder ongelukken. (leiden, past)', ['leidde'], 'The measure led to fewer accidents.', 'leid + de.'),
    build('The study shows that costs are rising.', 'Uit het onderzoek blijkt dat de kosten stijgen.', ['Het onderzoek blijkt', 'stijgen de kosten'], 'uit … blijkt dat … stijgen.'),
    build('With regard to privacy there are concerns.', 'Met betrekking tot privacy zijn er zorgen.', ['er zijn', 'over'], 'Fronted phrase + inversion.'),
    build('The data were collected by means of interviews.', 'De gegevens zijn door middel van interviews verzameld.', ['hebben', 'met middel'], 'zijn … verzameld; door middel van.'),
    tr('en-nl', 'There is a connection between sleep and memory.', ['Er is een verband tussen slaap en geheugen.'], 'een verband tussen.'),
    tr('nl-en', 'De invoering van de maatregel leidde tot een afname van het aantal ongelukken.', ['The introduction of the measure led to a decrease in the number of accidents.'], 'Two nominalisations.'),
    fix('Het onderzoek blijkt dat de kosten stijgen.', ['Uit het onderzoek blijkt dat de kosten stijgen.'], 'blijken needs uit: uit het onderzoek blijkt.'),
    dict('Uit het onderzoek blijkt een sterke toename van het aantal thuiswerkers.', 'The study shows a strong increase in the number of people working from home.', 'blijkt; toename.'),
    listen('Als gevolg van de invoering van de nieuwe regels is het aantal klachten afgenomen.', ['As a result of the introduction of the new rules the number of complaints has decreased.', 'The new rules led to more complaints.', 'The rules have not been introduced yet.'], 0, 'als gevolg van; afgenomen.'),
    speak('Uit het onderzoek blijkt dat het gebruik van kunstmatige intelligentie in de zorg sterk is toegenomen.', 'The study shows that the use of artificial intelligence in healthcare has increased sharply.'),
    free('Rewrite this idea in formal, nominal style and then in clear verbal style: "people use their phones more, so they sleep worse".', 'Nominaal: De toename van het telefoongebruik leidt tot een afname van de slaapkwaliteit. Verbaal: Doordat mensen hun telefoon meer gebruiken, slapen ze slechter.', 'Nominal: The increase in phone use leads to a decrease in sleep quality. Verbal: Because people use their phones more, they sleep worse.', { hints: ['De toename van … leidt tot …', 'Doordat …, …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('The noun of "afnemen":', ['de afname', 'de afneming'], 0, 'de afname.'),
    fill('Uit de resultaten ___ dat de hypothese niet klopt.', ['blijkt'], 'The results show that the hypothesis is not correct.', 'blijkt.'),
    fill('Door ___ van een enquête zijn de gegevens verzameld.', ['middel'], 'The data were collected by means of a survey.', 'door middel van.'),
    build('The sample was too small.', 'De steekproef was te klein.', ['kleine', 'het'], 'de steekproef; te klein.'),
    tr('en-nl', 'The study demonstrates that the method works.', ['Het onderzoek toont aan dat de methode werkt.'], 'toont aan dat … werkt.'),
    speak('Met betrekking tot gegevensbescherming bestaan er nog grote zorgen.', 'With regard to data protection there are still great concerns.'),
  ]));

  u2.push(lesson('s4u2l2', 'Research reports: the passive in all tenses', 'You can read and write about research with the passive in every tense, including will be published, had been investigated and should have been tested, and use men, er and zijn te as alternatives.', [
    h('The full passive table'),
    table(['tense', 'example'], [['present', '*De gegevens worden anoniem verzameld.'], ['past', '*Het onderzoek werd uitgevoerd in 2023.'], ['perfect', '*Er is vastgesteld dat de methode werkt.'], ['pluperfect', '*De bijwerkingen waren nog niet onderzocht.'], ['future', '*De resultaten zullen worden gepubliceerd.'], ['future perfect', '*Tegen die tijd zal alles zijn getest.'], ['conditional', '*De studie zou worden herhaald.'], ['modal perfect', '*Dat had eerst moeten worden getest.']]),
    h('Alternatives the texts use'),
    list('`men`: `Men veronderstelt dat het effect tijdelijk is.`', '`er` + passive: `Er werd gewaarschuwd voor de risico’s.`', '`zijn te` + infinitive: `Het verschil is niet te verklaren.` (cannot be explained)', '`blijken`, `lijken`, `schijnen` + te: `Het middel blijkt te werken.`'),
    h('Reading a research summary'),
    p('Expect the order: `aanleiding` (why), `vraag` or `hypothese`, `methode` (steekproef, proefpersonen), `resultaten`, `conclusie`, `beperkingen` (limitations). Hedging is everywhere: `vermoedelijk`, `mogelijk`, `lijkt`, `wijst erop dat`. A hedge is not a fact; exam questions test exactly that.'),
    ex(['Het onderzoek werd uitgevoerd onder duizend proefpersonen en zal volgend jaar worden gepubliceerd.', 'The research was carried out among a thousand test subjects and will be published next year.'], ['De bijwerkingen waren op dat moment nog niet onderzocht.', 'The side effects had not yet been investigated at that point.'], ['Dat had uiteraard eerst moeten worden getest.', 'That should of course have been tested first.'], ['Het verschil is niet te verklaren door toeval alleen.', 'The difference cannot be explained by chance alone.']),
    tip('`zou` in a news report on research (`Het middel zou helpen`) means "is said to": unconfirmed.'),
  ], ['g4-passive-all', 'g4-reading'], ['algoritme', 'privacy', 'toezicht', 'doorbraak', 'bijwerking', 'proefpersoon', 'samenvatting', 'conclusie', 'bron', 'publiceren', 'uitvoeren', 'vaststellen', 'veronderstellen', 'verzamelen', 'waarschuwen', 'men', 'vermoedelijk', 'significant', 'zorgwekkend'], [
    mc('"will be published":', ['zullen worden gepubliceerd', 'zullen gepubliceerd hebben', 'worden zullen gepubliceerd'], 0, 'zullen + worden + participle.'),
    mc('"had not yet been investigated":', ['waren nog niet onderzocht', 'werden nog niet onderzocht', 'zijn nog niet onderzocht geworden'], 0, 'Pluperfect passive: waren + participle.'),
    mc('"should have been tested":', ['had moeten worden getest', 'had gemoeten getest worden', 'moest hebben getest'], 0, 'had moeten worden + participle.'),
    mc('"Het verschil is niet te verklaren" means', ['the difference need not be explained', 'the difference cannot be explained', 'the difference was explained'], 1, 'zijn te + infinitive = can (not) be.'),
    mc('"Het middel zou helpen" in a news report means', ['it would help if …', 'it is said to help (unconfirmed)', 'it helped'], 1, 'Reporting zou.'),
    fill('Het onderzoek ___ uitgevoerd door de universiteit. (past)', ['werd'], 'The research was carried out by the university.', 'werd.'),
    fill('De resultaten zullen in het najaar ___ gepubliceerd.', ['worden'], 'The results will be published in the autumn.', 'zullen worden.'),
    fill('___ veronderstelt dat het effect tijdelijk is. (one, formal)', ['Men'], 'It is assumed that the effect is temporary.', 'men.'),
    fill('Er ___ gewaarschuwd voor de risico’s. (past)', ['werd'], 'A warning was given about the risks.', 'er werd.'),
    build('The data are collected anonymously.', 'De gegevens worden anoniem verzameld.', ['wordt', 'verzamelen'], 'Plural: worden.'),
    build('It has been established that the method works.', 'Er is vastgesteld dat de methode werkt.', ['heeft', 'werkt de methode'], 'er is vastgesteld dat … werkt.'),
    build('That should have been tested first.', 'Dat had eerst moeten worden getest.', ['gemoeten', 'geworden'], 'had … moeten worden getest.'),
    build('The drug appears to work.', 'Het middel blijkt te werken.', ['werkt', 'blijken'], 'blijken + te.'),
    tr('en-nl', 'The hypothesis was not confirmed.', ['De hypothese werd niet bevestigd.', 'De hypothese is niet bevestigd.'], 'werd / is niet bevestigd.'),
    tr('nl-en', 'Men neemt aan dat de studie volgend jaar zal worden herhaald.', ['It is assumed that the study will be repeated next year.', 'People assume that the study will be repeated next year.'], 'men; zal worden herhaald.'),
    fix('De resultaten zullen gepubliceerd geworden.', ['De resultaten zullen worden gepubliceerd.', 'De resultaten zullen gepubliceerd worden.'], 'Future passive: zullen worden + participle.'),
    dict('De bijwerkingen waren op dat moment nog niet onderzocht.', 'The side effects had not yet been investigated at that point.', 'waren … onderzocht.'),
    listen('Er werd vastgesteld dat het verschil niet significant was, maar dat had men van tevoren kunnen weten.', ['It was established that the difference was not significant, but that could have been known beforehand.', 'The difference was significant, as expected.', 'Nobody established anything.'], 0, 'niet significant; had men kunnen weten.'),
    speak('Het onderzoek werd uitgevoerd onder duizend proefpersonen en de resultaten zullen volgend jaar worden gepubliceerd.', 'The research was carried out among a thousand test subjects and the results will be published next year.'),
    read('Samenvatting. Aanleiding voor dit onderzoek was de toename van slaapproblemen onder jongvolwassenen. Onderzocht werd of er een verband bestaat tussen schermgebruik in het laatste uur voor het slapen en de slaapkwaliteit. Door middel van een vragenlijst werden gegevens verzameld onder 1.200 proefpersonen tussen 18 en 30 jaar. Uit de resultaten blijkt dat proefpersonen die hun telefoon in bed gebruikten, gemiddeld 38 minuten later in slaap vielen. Een oorzakelijk verband kon echter niet worden aangetoond: mogelijk gebruiken slechte slapers hun telefoon juist omdat ze niet kunnen slapen. Vervolgonderzoek, waarbij het schermgebruik daadwerkelijk wordt gemeten, is dan ook gewenst.', [
      { q: 'What was the research question?', options: ['whether young adults sleep too little', 'whether screen use before bed is connected to sleep quality', 'whether phones should be banned in bed'], answer: 1, explain: '"of er een verband bestaat tussen schermgebruik … en de slaapkwaliteit".' },
      { q: 'How were the data collected?', options: ['by measuring screen use', 'by means of a questionnaire', 'in a sleep laboratory'], answer: 1, explain: '"Door middel van een vragenlijst".' },
      { q: 'Which statement follows from the text?', options: ['phones cause bad sleep', 'phone users fell asleep later on average, but cause and effect are unclear', 'bad sleepers never use phones'], answer: 1, explain: '"Een oorzakelijk verband kon echter niet worden aangetoond".' },
      { q: 'What do the authors recommend?', options: ['follow-up research that measures screen use', 'a ban on phones', 'no further research'], answer: 0, explain: '"Vervolgonderzoek, waarbij het schermgebruik daadwerkelijk wordt gemeten, is … gewenst."' },
    ], { en: 'Summary. The reason for this study was the increase in sleep problems among young adults. It was investigated whether there is a connection between screen use in the last hour before sleep and sleep quality. By means of a questionnaire data were collected among 1,200 test subjects between 18 and 30. The results show that subjects who used their phone in bed fell asleep on average 38 minutes later. A causal connection could, however, not be demonstrated: possibly bad sleepers use their phone precisely because they cannot sleep. Follow-up research, in which screen use is actually measured, is therefore desirable.' }),
    free('Summarise the study above in three sentences for a colleague, in everyday Dutch without passives.', 'Onderzoekers hebben 1.200 jongeren gevraagd naar hun telefoongebruik in bed. Wie zijn telefoon in bed gebruikt, valt gemiddeld 38 minuten later in slaap. Maar ze weten niet wat de oorzaak is: misschien pakken slechte slapers juist vaker hun telefoon.', 'Researchers asked 1,200 young people about their phone use in bed. Those who use their phone in bed fall asleep 38 minutes later on average. But they do not know what the cause is: maybe bad sleepers simply pick up their phone more often.', { hints: ['Onderzoekers hebben …', 'Wie …, valt …', 'Maar ze weten niet …'] }),
    auto(3, ['tr-nl-en', 'article']),
  ], [
    mc('"was carried out":', ['werd uitgevoerd', 'wordt uitgevoerd'], 0, 'Past: werd.'),
    fill('De studie zal volgend jaar worden ___. (publiceren)', ['gepubliceerd'], 'The study will be published next year.', 'gepubliceerd.'),
    fill('Dat is niet ___ verklaren.', ['te'], 'That cannot be explained.', 'zijn te + infinitive.'),
    build('A causal connection could not be demonstrated.', 'Een oorzakelijk verband kon niet worden aangetoond.', ['aantonen', 'werd'], 'kon niet worden aangetoond.'),
    tr('en-nl', 'Always cite your sources.', ['Vermeld altijd je bronnen.', 'Noem altijd je bronnen.'], 'bronnen vermelden.'),
    speak('Er is vastgesteld dat de methode werkt, maar de bijwerkingen hadden eerder moeten worden onderzocht.', 'It has been established that the method works, but the side effects should have been investigated earlier.'),
  ]));

  units.push(unit('s4u2', 'Wetenschap en technologie', 'science and technology', u2, [
    mc('toenemen →', ['de toename', 'de toeneming'], 0, 'de toename.'),
    mc('"will be published":', ['zullen worden gepubliceerd', 'zullen gepubliceerd zijn geweest'], 0, 'Future passive.'),
    fill('___ het onderzoek blijkt dat de kosten stijgen.', ['Uit'], 'The study shows that costs are rising.', 'uit … blijkt.'),
    fill('Dat had eerst ___ worden getest.', ['moeten'], 'That should have been tested first.', 'moeten.'),
    fill('Als gevolg ___ de droogte mislukte de oogst.', ['van'], 'As a result of the drought the harvest failed.', 'als gevolg van.'),
    build('It is assumed that the effect is temporary.', 'Men veronderstelt dat het effect tijdelijk is.', ['is tijdelijk', 'Het'], 'men veronderstelt dat … is.'),
    build('The measure led to fewer accidents.', 'De maatregel leidde tot minder ongelukken.', ['naar', 'leidt'], 'leiden tot.'),
    fix('Het onderzoek is uitgevoerd geworden in 2023.', ['Het onderzoek is in 2023 uitgevoerd.', 'Het onderzoek werd in 2023 uitgevoerd.'], 'No geworden.'),
    tr('en-nl', 'There is a worrying decrease in the number of insects.', ['Er is een zorgwekkende afname van het aantal insecten.'], 'een zorgwekkende afname.'),
    listen('De resultaten wijzen erop dat het middel werkt, maar een oorzakelijk verband is nog niet aangetoond.', ['The results indicate that the drug works, but a causal link has not yet been demonstrated.', 'The drug has been proven to work.', 'The drug does not work.'], 0, 'wijzen erop; nog niet aangetoond.'),
    speak('Uit het onderzoek blijkt een toename van het gebruik, maar de gevolgen zijn nog niet te overzien.', 'The study shows an increase in use, but the consequences cannot yet be overseen.'),
  ]));

  /* ---------------- Unit 3: Werk en carrière ---------------- */
  N('loopbaan', 'de', 'loopbanen', 'career', 'Ze had al een hele loopbaan achter de rug.', 'She already had a whole career behind her.', { theme: 'career', stage: 4 });
  N('leidinggevende', 'de', 'leidinggevenden', 'manager / supervisor', 'Mijn leidinggevende had het al goedgekeurd.', 'My manager had already approved it.', { theme: 'career', stage: 4 });
  N('functioneringsgesprek', 'het', 'functioneringsgesprekken', 'performance review', 'Tijdens het functioneringsgesprek vroeg ik om opslag.', 'During the performance review I asked for a raise.', { theme: 'career', stage: 4 });
  N('opslag', 'de', null, 'raise', 'Ik had nooit om opslag durven vragen.', 'I had never dared to ask for a raise.', { theme: 'career', stage: 4 });
  N('arbeidsvoorwaarden', 'de', 'arbeidsvoorwaarden', 'terms of employment', 'Over de arbeidsvoorwaarden valt te onderhandelen.', 'The terms of employment are negotiable.', { theme: 'career', stage: 4, note: 'Plural.' });
  N('proeftijd', 'de', null, 'probation period', 'De proeftijd was al voorbij.', 'The probation period was already over.', { theme: 'career', stage: 4 });
  N('reorganisatie', 'de', 'reorganisaties', 'reorganisation', 'Na de reorganisatie waren er veertig banen verdwenen.', 'After the reorganisation forty jobs had disappeared.', { theme: 'career', stage: 4 });
  N('omscholing', 'de', null, 'retraining', 'Ze koos voor omscholing tot verpleegkundige.', 'She chose to retrain as a nurse.', { theme: 'career', stage: 4 });
  N('netwerk', 'het', 'netwerken', 'network', 'Via mijn netwerk had ik van de vacature gehoord.', 'I had heard about the vacancy through my network.', { theme: 'career', stage: 4 });
  N('pensioen', 'het', 'pensioenen', 'pension / retirement', 'Over tien jaar zal hij met pensioen zijn gegaan.', 'In ten years he will have retired.', { theme: 'career', stage: 4 });
  VB('overstappen', 'to switch', 'stap over|stapt over|stappen over', 'stapte over|stapten over', 'overgestapt', 'zijn', 'Ze was net overgestapt naar een ander bedrijf.', 'She had just switched to another company.', { theme: 'career', stage: 4 });
  VB('doorgroeien', 'to progress (in a career)', 'groei door|groeit door|groeien door', 'groeide door|groeiden door', 'doorgegroeid', 'zijn', 'Hij was doorgegroeid tot teamleider.', 'He had progressed to team leader.', { theme: 'career', stage: 4 });
  VB('onderhandelen', 'to negotiate', 'onderhandel|onderhandelt|onderhandelen', 'onderhandelde|onderhandelden', 'onderhandeld', 'hebben', 'We hebben lang over het salaris onderhandeld.', 'We negotiated about the salary for a long time.', { theme: 'career', stage: 4 });
  VB('goedkeuren', 'to approve', 'keur goed|keurt goed|keuren goed', 'keurde goed|keurden goed', 'goedgekeurd', 'hebben', 'De directie had het plan goedgekeurd.', 'The management had approved the plan.', { theme: 'career', stage: 4 });
  VB('spijt hebben van', 'to regret', 'heb spijt van|heeft spijt van|hebben spijt van', 'had spijt van|hadden spijt van', 'spijt gehad van', 'hebben', 'Ik heb er geen spijt van.', 'I do not regret it.', { theme: 'feelings', stage: 4, id: 'spijt-hebben-van' });
  VB('zich omscholen', 'to retrain', 'school me om|schoolt zich om|scholen ons om', 'schoolde me om|schoolden ons om', 'omgeschoold', 'hebben', 'Ik heb me laten omscholen.', 'I had myself retrained.', { theme: 'career', stage: 4, id: 'zich-omscholen' });
  W('achteraf', 'in retrospect', 'adv', 'Achteraf had ik eerder moeten overstappen.', 'In retrospect I should have switched earlier.', { theme: 'time', stage: 4 });
  W('tegen die tijd', 'by then', 'adv', 'Tegen die tijd zal ik zijn afgestudeerd.', 'By then I will have graduated.', { theme: 'time', stage: 4, id: 'tegen-die-tijd' });
  PH('Had ik maar …', 'If only I had …', 'Had ik maar eerder Nederlands geleerd!', 'If only I had learned Dutch earlier!', { theme: 'regret', stage: 4, id: 'ph-had-ik-maar' });

  N('sollicitatiegesprek', 'het', 'sollicitatiegesprekken', 'job interview', 'Ik heb morgen een sollicitatiegesprek.', 'I have a job interview tomorrow.', { theme: 'career', stage: 4 });
  N('motivatie', 'de', null, 'motivation', 'Kunt u uw motivatie toelichten?', 'Could you explain your motivation?', { theme: 'career', stage: 4 });
  N('sterk punt', 'het', 'sterke punten', 'strength', 'Wat zijn uw sterke punten?', 'What are your strengths?', { theme: 'career', stage: 4, id: 'sterk-punt' });
  N('valkuil', 'de', 'valkuilen', 'pitfall / weakness', 'Mijn valkuil is dat ik te veel hooi op mijn vork neem.', 'My weakness is that I take on too much.', { theme: 'career', stage: 4 });
  N('uitdaging', 'de', 'uitdagingen', 'challenge', 'Ik zoek een nieuwe uitdaging.', 'I am looking for a new challenge.', { theme: 'career', stage: 4 });
  N('verantwoordelijkheid', 'de', 'verantwoordelijkheden', 'responsibility', 'Ik wil meer verantwoordelijkheid dragen.', 'I want to carry more responsibility.', { theme: 'career', stage: 4 });
  N('salarisindicatie', 'de', 'salarisindicaties', 'salary indication', 'Wat is de salarisindicatie voor deze functie?', 'What is the salary indication for this position?', { theme: 'career', stage: 4 });
  VB('zich inzetten voor', 'to commit oneself to', 'zet me in voor|zet zich in voor|zetten ons in voor', 'zette me in voor|zetten ons in voor', 'ingezet voor', 'hebben', 'Ik zet me graag in voor het team.', 'I am happy to commit myself to the team.', { theme: 'career', stage: 4, id: 'zich-inzetten-voor' });
  VB('bijdragen aan', 'to contribute to', 'draag bij aan|draagt bij aan|dragen bij aan', 'droeg bij aan|droegen bij aan', 'bijgedragen aan', 'hebben', 'Ik wil bijdragen aan de groei van het bedrijf.', 'I want to contribute to the growth of the company.', { theme: 'career', stage: 4, id: 'bijdragen-aan' });
  VB('toelichten', 'to explain / elaborate', 'licht toe|licht toe|lichten toe', 'lichtte toe|lichtten toe', 'toegelicht', 'hebben', 'Kunt u dat toelichten?', 'Could you elaborate on that?', { theme: 'career', stage: 4 });
  VB('beschikken over', 'to have at one’s disposal (formal)', 'beschik over|beschikt over|beschikken over', 'beschikte over|beschikten over', 'beschikt over', 'hebben', 'Ik beschik over ruime ervaring.', 'I have extensive experience.', { theme: 'formal', stage: 4, id: 'beschikken-over' });
  VB('vernemen', 'to hear / learn (formal)', 'verneem|verneemt|vernemen', 'vernam|vernamen', 'vernomen', 'hebben', 'Graag verneem ik uw reactie.', 'I would be glad to hear your response.', { theme: 'formal', stage: 4 });
  W('ff', 'a sec (informal spelling of even)', 'adv', 'Heb je ff tijd?', 'Got a sec?', { theme: 'informal', stage: 4, note: 'Chat and text messages only.' });
  W('uiteraard', 'of course (formal)', 'adv', 'Uiteraard ben ik bereid dat toe te lichten.', 'Of course I am willing to explain that.', { theme: 'formal', stage: 4 });
  W('bereid', 'willing', 'adj', 'Bent u bereid te verhuizen?', 'Are you willing to relocate?', { theme: 'career', stage: 4 });
  W('gemotiveerd', 'motivated', 'adj', 'Ik ben zeer gemotiveerd.', 'I am highly motivated.', { theme: 'career', stage: 4 });
  PH('te veel hooi op je vork nemen', 'to bite off more than you can chew', 'Ik neem soms te veel hooi op mijn vork.', 'I sometimes bite off more than I can chew.', { theme: 'idioms', stage: 4, id: 'id-hooi-op-vork' });
  PH('Zeg maar je.', 'You can say "je" to me.', 'Zeg maar je, hoor. We zijn hier niet zo formeel.', 'Just say je. We are not that formal here.', { theme: 'register', stage: 4, id: 'ph-zeg-maar-je' });

  const u3 = [];
  u3.push(lesson('s4u3l1', 'Looking back and ahead: pluperfect and future perfect', 'You can tell a career story with correct time layers: what had already happened, what you should have done, and what will have happened by a future point.', [
    h('Three layers of time'),
    table(['layer', 'form', 'example'], [['before a past moment', 'had / was + participle', '*Toen ik begon, was de reorganisatie al afgerond.'], ['regret or reproach', 'had + moeten / kunnen + infinitive', '*Ik had eerder moeten overstappen.'], ['wish', 'Had ik maar + participle', '*Had ik maar om opslag gevraagd!'], ['unreal past', 'als + pluperfect, pluperfect / zou', '*Als ik dat had geweten, was ik gebleven.'], ['done by a future point', 'zal + participle + hebben / zijn', '*Tegen die tijd zal ik zijn afgestudeerd.'], ['guess about the past', 'zal wel + participle + hebben / zijn', '*Hij zal het wel vergeten zijn.']]),
    p('Auxiliary choice stays the same as in the perfect: `had gewerkt`, `was overgestapt`. After `nadat` Dutch prefers the pluperfect: `Nadat ik was afgestudeerd, ging ik solliciteren.`'),
    h('Dutch is lighter than English here'),
    p('Where English needs the future perfect, Dutch often uses the perfect or even the present with a time expression: `Vrijdag heb ik het af.` `Over een jaar ben ik klaar.` Use `zal … hebben` when the completion is the point, or for a guess.'),
    ex(['Toen ik bij het bedrijf kwam, had mijn leidinggevende er al twintig jaar gewerkt.', 'When I joined the company, my manager had already worked there for twenty years.'], ['Achteraf had ik tijdens het functioneringsgesprek om opslag moeten vragen.', 'In retrospect I should have asked for a raise during the performance review.'], ['Als ik me niet had laten omscholen, had ik nu geen werk gehad.', 'If I had not retrained, I would not have had work now.'], ['Over vijf jaar zal de helft van het team met pensioen zijn gegaan.', 'In five years half the team will have retired.']),
    tip('`Had ik maar …!` is the shortest way to express regret. No `als`, verb first.'),
  ], ['g4-past-tenses'], ['loopbaan', 'leidinggevende', 'functioneringsgesprek', 'opslag', 'arbeidsvoorwaarden', 'proeftijd', 'reorganisatie', 'omscholing', 'netwerk', 'pensioen', 'overstappen', 'doorgroeien', 'onderhandelen', 'goedkeuren', 'spijt-hebben-van', 'zich-omscholen', 'achteraf', 'tegen-die-tijd', 'ph-had-ik-maar'], [
    mc('Toen ik aankwam, ___ de vergadering al begonnen.', ['is', 'was', 'had'], 1, 'beginnen takes zijn; pluperfect: was begonnen.'),
    mc('"I should have asked":', ['Ik had moeten vragen.', 'Ik had gemoeten vragen.', 'Ik moest hebben gevraagd.'], 0, 'had + moeten + infinitive.'),
    mc('"If only I had known!":', ['Als ik maar wist!', 'Had ik het maar geweten!', 'Ik had maar weten!'], 1, 'Had ik … maar + participle.'),
    mc('"By then I will have graduated":', ['Tegen die tijd zal ik zijn afgestudeerd.', 'Tegen die tijd zal ik hebben afgestudeerd.', 'Tegen die tijd zou ik afstuderen.'], 0, 'afstuderen takes zijn.'),
    mc('"Hij zal het wel vergeten zijn" means', ['he will forget it', 'he has probably forgotten it', 'he must not forget it'], 1, 'zal wel = a guess about the past.'),
    conj('werken', 'ik', 'past', ['werkte'], 'Simple past for the story line.'),
    fill('Nadat ik ___ afgestudeerd, ging ik solliciteren.', ['was'], 'After I had graduated, I went job hunting.', 'afstuderen → zijn; pluperfect: was.'),
    fill('Mijn leidinggevende ___ het plan al goedgekeurd.', ['had'], 'My manager had already approved the plan.', 'goedkeuren → hebben; had.'),
    fill('Achteraf had ik eerder ___ overstappen. (should)', ['moeten'], 'In retrospect I should have switched earlier.', 'had moeten.'),
    fill('Als ik dat had ___, was ik gebleven. (weten)', ['geweten'], 'If I had known that, I would have stayed.', 'had geweten.'),
    build('When I started, the reorganisation had already been completed.', 'Toen ik begon, was de reorganisatie al afgerond.', ['had', 'de reorganisatie was'], 'Passive pluperfect: was afgerond; inversion.'),
    build('If only I had asked for a raise!', 'Had ik maar om opslag gevraagd!', ['Als', 'vroeg'], 'Had ik maar … gevraagd.'),
    build('In five years he will have retired.', 'Over vijf jaar zal hij met pensioen zijn gegaan.', ['hebben', 'gaat'], 'zal … zijn gegaan.'),
    build('I do not regret it.', 'Ik heb er geen spijt van.', ['van het', 'niet'], 'er … van.'),
    tr('en-nl', 'She had just switched to another company.', ['Ze was net overgestapt naar een ander bedrijf.', 'Zij was net naar een ander bedrijf overgestapt.'], 'was overgestapt.'),
    tr('nl-en', 'Als ik me niet had laten omscholen, had ik nu geen werk gehad.', ['If I had not retrained, I would not have had work now.', 'If I had not had myself retrained, I would have no job now.'], 'Unreal past in both halves.'),
    fix('Ik had eerder gemoeten overstappen.', ['Ik had eerder moeten overstappen.'], 'Double infinitive.'),
    fix('Nadat ik heb afgestudeerd, ging ik werken.', ['Nadat ik was afgestudeerd, ging ik werken.'], 'zijn + pluperfect.'),
    dict('Achteraf had ik tijdens het gesprek om opslag moeten vragen.', 'In retrospect I should have asked for a raise during the conversation.', 'had … moeten vragen.'),
    listen('Toen ze solliciteerde, had ze al tien jaar in de zorg gewerkt en was ze doorgegroeid tot teamleider.', ['When she applied, she had already worked in healthcare for ten years and had progressed to team leader.', 'She applied for a job in healthcare ten years ago.', 'She will become team leader in ten years.'], 0, 'had gewerkt; was doorgegroeid.'),
    speak('Als ik eerder Nederlands had geleerd, was ik waarschijnlijk sneller doorgegroeid.', 'If I had learned Dutch earlier, I would probably have progressed faster.'),
    free('Tell your career so far in five sentences: one thing that had already happened before you started, one regret, and one thing that will have happened in five years.', 'Toen ik naar Nederland kwam, had ik al zes jaar als ontwerper gewerkt. In het begin sprak ik geen Nederlands; had ik maar eerder een cursus gevolgd. Achteraf had ik ook eerder moeten onderhandelen over mijn salaris. Toch heb ik er geen spijt van dat ik ben overgestapt. Over vijf jaar zal ik hopelijk zijn doorgegroeid tot teamleider.', 'When I came to the Netherlands, I had already worked as a designer for six years. At first I spoke no Dutch; if only I had taken a course earlier. In retrospect I should also have negotiated my salary earlier. Still I do not regret switching. In five years I will hopefully have progressed to team leader.', { hints: ['Toen ik …, had / was ik al …', 'Had ik maar …', 'Achteraf had ik … moeten …', 'Over vijf jaar zal ik … zijn / hebben …'] }),
    auto(3, ['tr-nl-en', 'conj']),
  ], [
    mc('Toen ik belde, ___ hij al vertrokken.', ['was', 'had'], 0, 'vertrekken → zijn.'),
    fill('___ ik maar beter geluisterd!', ['Had'], 'If only I had listened better!', 'Had ik maar.'),
    fill('Je had het me ___ zeggen. (should)', ['moeten'], 'You should have told me.', 'had moeten.'),
    build('By then I will have finished the report.', 'Tegen die tijd zal ik het rapport hebben afgerond.', ['zijn', 'afronden'], 'zal … hebben afgerond.'),
    tr('en-nl', 'I had never dared to ask for a raise.', ['Ik had nooit om opslag durven vragen.'], 'had … durven vragen (double infinitive).'),
    speak('Achteraf had ik eerder moeten overstappen, maar ik heb er geen spijt van.', 'In retrospect I should have switched earlier, but I do not regret it.'),
  ]));

  u3.push(lesson('s4u3l2', 'The job interview: switching register', 'You can move between informal, neutral and formal Dutch on purpose, handle a job interview and a salary negotiation, and answer in the style an exam task asks for.', [
    h('One message, three voices'),
    table(['', 'informal', 'neutral', 'formal'], [['ask', '*Heb je ff tijd?', '*Heb je even tijd?', '*Zou u een moment voor mij hebben?'], ['have', '*ik heb veel ervaring', '*ik heb ruime ervaring', '*ik beschik over ruime ervaring'], ['hear', '*laat ff weten', '*ik hoor het graag', '*graag verneem ik uw reactie'], ['of course', '*tuurlijk', '*natuurlijk', '*uiteraard'], ['explain', '*zeg eens', '*kun je dat uitleggen?', '*kunt u dat toelichten?'], ['no', '*nee joh', '*dat lukt helaas niet', '*helaas kan ik daar niet op ingaan']]),
    h('The Dutch job interview'),
    p('Expect `je` sooner than you think: many interviewers open with `Zeg maar je`. Follow their lead. Typical questions: `Waarom heb je gesolliciteerd?` `Wat zijn je sterke punten en je valkuilen?` `Waar zie je jezelf over vijf jaar?` `Wat is je salarisindicatie?` Be direct and concrete; modesty is fine, vagueness is not.'),
    h('Negotiating'),
    p('`Ik had zelf een bedrag rond de … in gedachten.` `Is daar nog ruimte in?` `Over de arbeidsvoorwaarden valt wat mij betreft nog te praten.` `Mits de reiskosten worden vergoed, ga ik akkoord.`'),
    ex(['Ik heb gesolliciteerd omdat ik toe ben aan een nieuwe uitdaging en graag wil bijdragen aan jullie groei.', 'I applied because I am ready for a new challenge and would like to contribute to your growth.'], ['Mijn valkuil is dat ik soms te veel hooi op mijn vork neem; ik heb geleerd beter te plannen.', 'My weakness is that I sometimes take on too much; I have learned to plan better.'], ['Uiteraard ben ik bereid dat nader toe te lichten.', 'Of course I am willing to explain that further.'], ['Ik had zelf een bedrag rond de vierduizend euro in gedachten. Is daar nog ruimte in?', 'I had an amount around four thousand euros in mind. Is there room for that?']),
    tip('In the exam the task names the listener (een vriend, uw leidinggevende, de gemeente). Decide `je` or `u` before you start, and keep it.'),
  ], ['g4-register-switching', 'g4-staatsexamen'], ['sollicitatiegesprek', 'motivatie', 'sterk-punt', 'valkuil', 'uitdaging', 'verantwoordelijkheid', 'salarisindicatie', 'zich-inzetten-voor', 'bijdragen-aan', 'toelichten', 'beschikken-over', 'vernemen', 'ff', 'uiteraard', 'bereid', 'gemotiveerd', 'id-hooi-op-vork', 'ph-zeg-maar-je'], [
    mc('Most formal:', ['Ik heb veel ervaring.', 'Ik beschik over ruime ervaring.', 'Ik heb best wel wat gedaan.'], 1, 'beschikken over.'),
    mc('Which belongs in a chat message, not in a letter?', ['uiteraard', 'ff', 'graag verneem ik'], 1, 'ff = informal even.'),
    mc('The interviewer says "Zeg maar je". You:', ['continue with u', 'switch to je', 'apologise'], 1, 'Follow the invitation.'),
    mc('"Mijn valkuil" in an interview is', ['my strength', 'my weakness', 'my salary'], 1, 'valkuil = pitfall.'),
    mc('"Te veel hooi op je vork nemen" means', ['to eat too much', 'to take on too much', 'to work on a farm'], 1, 'Idiom.'),
    fill('Graag ___ ik uw reactie. (hear, formal)', ['verneem'], 'I would be glad to hear your response.', 'vernemen.'),
    fill('Ik wil graag bijdragen ___ de groei van het bedrijf.', ['aan'], 'I would like to contribute to the growth of the company.', 'bijdragen aan.'),
    fill('___ ben ik bereid dat toe te lichten. (of course, formal)', ['Uiteraard'], 'Of course I am willing to explain that.', 'uiteraard + inversion.'),
    fill('Ik ben toe ___ een nieuwe uitdaging.', ['aan'], 'I am ready for a new challenge.', 'toe zijn aan.'),
    build('Could you elaborate on your motivation?', 'Kunt u uw motivatie toelichten?', ['licht toe', 'jouw'], 'kunt u … toelichten.'),
    build('I had an amount around four thousand in mind.', 'Ik had een bedrag rond de vierduizend in gedachten.', ['gedachte', 'op'], 'in gedachten hebben.'),
    build('Is there still room in that?', 'Is daar nog ruimte in?', ['erin', 'in dat'], 'daar … in.'),
    build('I agree, provided the travel costs are reimbursed.', 'Ik ga akkoord, mits de reiskosten worden vergoed.', ['tenzij', 'worden de reiskosten'], 'mits … worden vergoed.'),
    tr('en-nl', 'What are your strengths and weaknesses?', ['Wat zijn je sterke punten en je valkuilen?', 'Wat zijn uw sterke punten en uw valkuilen?', 'Wat zijn je sterke en zwakke punten?'], 'sterke punten; valkuilen.'),
    tr('nl-en', 'Ik zet me graag in voor het team en ik wil meer verantwoordelijkheid dragen.', ['I am happy to commit myself to the team and I want to carry more responsibility.', 'I like to commit to the team and want to take on more responsibility.'], 'zich inzetten voor.'),
    fix('Geachte mevrouw, heb je ff tijd voor een gesprek?', ['Geachte mevrouw, zou u tijd hebben voor een gesprek?', 'Geachte mevrouw, heeft u tijd voor een gesprek?'], 'Geachte requires u and no chat spelling.'),
    dict('Ik heb gesolliciteerd omdat ik toe ben aan een nieuwe uitdaging.', 'I applied because I am ready for a new challenge.', 'toe zijn aan.'),
    listen('Zeg maar je, hoor. Vertel eens, waarom heb je bij ons gesolliciteerd?', ['Just say je. Tell me, why did you apply with us?', 'Please say u. Why did you leave us?', 'Tell me your name again.'], 0, 'zeg maar je; vertel eens.'),
    speak('Ik beschik over ruime ervaring en ik ben zeer gemotiveerd om bij te dragen aan de groei van uw organisatie.', 'I have extensive experience and I am highly motivated to contribute to the growth of your organisation.'),
    free('Exam-style speaking task (60 seconds): you are in a job interview with a manager you do not know. Say why you applied, name one strength and one weakness, and ask one question about the terms of employment.', 'Ik heb gesolliciteerd omdat deze functie goed aansluit bij mijn ervaring als projectleider. Een sterk punt van mij is dat ik goed kan plannen. Mijn valkuil is dat ik soms te veel hooi op mijn vork neem, maar ik heb geleerd taken te verdelen. Mag ik vragen wat de mogelijkheden zijn om door te groeien en of thuiswerken bespreekbaar is?', 'I applied because this position fits my experience as a project leader well. One of my strengths is that I plan well. My weakness is that I sometimes take on too much, but I have learned to delegate. May I ask what the opportunities for progression are and whether working from home is open to discussion?', { hints: ['Ik heb gesolliciteerd omdat …', 'Een sterk punt van mij is …', 'Mijn valkuil is …', 'Mag ik vragen …?'] }),
    write('Exam-style writing task: write the same request three times (each 2 to 3 sentences): to a friend, to a colleague, and to an unknown HR manager. The request: you want to know whether there is a vacancy for you at their company.', ['Friend: je, particles, informal closing', 'Colleague: neutral, Beste …, Groet', 'HR manager: Geachte …, u, zou, formal verbs (vernemen, beschikken over)', 'Same content in all three', 'No chat spelling outside version one'], 'Vriend: Hé Tom, weet jij toevallig of er bij jullie nog iets vrijkomt? Ik zoek wat nieuws. Laat ff weten! Collega: Beste Anna, ik hoorde dat jullie afdeling uitbreidt. Weet je of er binnenkort een vacature komt die bij mijn profiel past? Ik hoor het graag. Groet, Sam. HR: Geachte mevrouw De Vries, graag verneem ik of er binnen uw organisatie een vacature is die aansluit bij mijn profiel. Ik beschik over ruime ervaring als projectleider. Uiteraard ben ik bereid mijn motivatie nader toe te lichten. Met vriendelijke groet, Sam Taylor'),
  ], [
    mc('Formal "of course":', ['tuurlijk', 'uiteraard'], 1, 'uiteraard.'),
    fill('Ik ___ over ruime ervaring. (have, formal)', ['beschik'], 'I have extensive experience.', 'beschikken over.'),
    fill('Kunt u dat ___? (elaborate)', ['toelichten'], 'Could you elaborate on that?', 'toelichten.'),
    build('I am ready for a new challenge.', 'Ik ben toe aan een nieuwe uitdaging.', ['voor', 'nieuw'], 'toe zijn aan; een nieuwe uitdaging.'),
    tr('en-nl', 'Just say je.', ['Zeg maar je.', 'Zeg maar je, hoor.'], 'zeg maar je.'),
    speak('Uiteraard ben ik bereid te verhuizen, mits de arbeidsvoorwaarden goed zijn.', 'Of course I am willing to relocate, provided the terms of employment are good.'),
  ]));

  units.push(unit('s4u3', 'Werk en carrière', 'work and career', u3, [
    mc('Toen ik begon, ___ zij al vertrokken.', ['was', 'had'], 0, 'zijn.'),
    mc('Formal "have":', ['beschikken over', 'krijgen'], 0, 'beschikken over.'),
    fill('___ ik maar eerder gesolliciteerd!', ['Had'], 'If only I had applied earlier!', 'Had ik maar.'),
    fill('Tegen die tijd zal ik ___ afgestudeerd.', ['zijn'], 'By then I will have graduated.', 'zijn.'),
    fill('Graag ___ ik uw reactie.', ['verneem'], 'I would be glad to hear your response.', 'vernemen.'),
    build('I should have negotiated earlier.', 'Ik had eerder moeten onderhandelen.', ['gemoeten', 'onderhandeld'], 'had moeten onderhandelen.'),
    build('My weakness is that I take on too much.', 'Mijn valkuil is dat ik te veel hooi op mijn vork neem.', ['neem ik', 'sterk punt'], 'dat … neem.'),
    fix('Nadat ik heb gewerkt daar, ben ik overgestapt.', ['Nadat ik daar had gewerkt, ben ik overgestapt.', 'Nadat ik daar gewerkt had, ben ik overgestapt.'], 'Pluperfect after nadat; verb at the end.'),
    tr('en-nl', 'I do not regret it.', ['Ik heb er geen spijt van.'], 'spijt hebben van.'),
    listen('Als ik me niet had laten omscholen, was ik na de reorganisatie mijn baan kwijt geweest.', ['If I had not retrained, I would have lost my job after the reorganisation.', 'I lost my job because I retrained.', 'The reorganisation gave me a new job.'], 0, 'Unreal past.'),
    speak('Achteraf had ik eerder om opslag moeten vragen, maar over een jaar zal ik hopelijk zijn doorgegroeid.', 'In retrospect I should have asked for a raise earlier, but in a year I will hopefully have progressed.'),
  ]));

  A.stage('s4', '4', 'B2', 'Upper intermediate', 'Dutch for study and professional life: long sentences, all past tenses, the full passive, formal and nominal style, argumentation, discourse markers, register switching, regional variation, proverbs, false friends and Staatsexamen NT2 Programma II training.', units, []);
})();
