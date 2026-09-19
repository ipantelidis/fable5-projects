/* Stage 2 (A2) — Unit 3: Afspraken en de dokter · Unit 4: Wonen en de gemeente */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = (NL.content._s2units = NL.content._s2units || []);

  /* ---------------- Vocabulary: Unit 3 ---------------- */
  VB('zich voelen', 'to feel', 'voel me|voelt zich|voelen ons', 'voelde me|voelden ons', 'gevoeld', 'hebben', 'Ik voel me niet lekker.', 'I do not feel well.', { theme: 'health', stage: 2, id: 'zich-voelen', note: 'Reflexive: ik voel me, jij voelt je, hij voelt zich.' });
  VB('zich haasten', 'to hurry', 'haast me|haast zich|haasten ons', 'haastte me|haastten ons', 'gehaast', 'hebben', 'We moeten ons haasten.', 'We have to hurry.', { theme: 'daily', stage: 2, id: 'zich-haasten' });
  VB('zich herinneren', 'to remember', 'herinner me|herinnert zich|herinneren ons', 'herinnerde me|herinnerden ons', 'herinnerd', 'hebben', 'Ik herinner me zijn naam niet.', 'I do not remember his name.', { theme: 'daily', stage: 2, id: 'zich-herinneren' });
  VB('zich vervelen', 'to be bored', 'verveel me|verveelt zich|vervelen ons', 'verveelde me|verveelden ons', 'verveeld', 'hebben', 'De kinderen vervelen zich.', 'The children are bored.', { theme: 'feelings', stage: 2, id: 'zich-vervelen' });
  VB('zich schamen', 'to be ashamed / embarrassed', 'schaam me|schaamt zich|schamen ons', 'schaamde me|schaamden ons', 'geschaamd', 'hebben', 'Ik schaam me voor mijn Nederlands.', 'I am embarrassed about my Dutch.', { theme: 'feelings', stage: 2, id: 'zich-schamen' });
  VB('zich inschrijven', 'to register / enrol', 'schrijf me in|schrijft zich in|schrijven ons in', 'schreef me in|schreven ons in', 'ingeschreven', 'hebben', 'Ik heb me ingeschreven voor een cursus.', 'I enrolled in a course.', { theme: 'bureaucracy', stage: 2, id: 'zich-inschrijven' });
  VB('zich verheugen op', 'to look forward to', 'verheug me op|verheugt zich op|verheugen ons op', 'verheugde me op|verheugden ons op', 'verheugd op', 'hebben', 'Ik verheug me op het weekend.', 'I am looking forward to the weekend.', { theme: 'feelings', stage: 2, id: 'zich-verheugen' });
  VB('zich aanmelden', 'to sign up', 'meld me aan|meldt zich aan|melden ons aan', 'meldde me aan|meldden ons aan', 'aangemeld', 'hebben', 'Je kunt je online aanmelden.', 'You can sign up online.', { theme: 'bureaucracy', stage: 2, id: 'zich-aanmelden' });
  VB('zich afmelden', 'to cancel (your attendance) / sign off', 'meld me af|meldt zich af|melden ons af', 'meldde me af|meldden ons af', 'afgemeld', 'hebben', 'Hij heeft zich afgemeld voor de les.', 'He cancelled for the class.', { theme: 'bureaucracy', stage: 2, id: 'zich-afmelden' });
  VB('zich concentreren', 'to concentrate', 'concentreer me|concentreert zich|concentreren ons', 'concentreerde me|concentreerden ons', 'geconcentreerd', 'hebben', 'Ik kan me niet concentreren.', 'I cannot concentrate.', { theme: 'study', stage: 2, id: 'zich-concentreren' });
  PH('zich zorgen maken', 'to worry', 'Maak je geen zorgen.', 'Do not worry.', { theme: 'feelings', stage: 2, id: 'zich-zorgen-maken' });
  W('moe', 'tired', 'adj', 'Ik ben moe.', 'I am tired.', { theme: 'feelings', stage: 2 });
  W('druk', 'busy', 'adj', 'Ik heb het druk deze week.', 'I am busy this week.', { theme: 'feelings', stage: 2, note: 'het druk hebben = to be busy.' });
  W('zenuwachtig', 'nervous', 'adj', 'Ik ben zenuwachtig voor het examen.', 'I am nervous about the exam.', { theme: 'feelings', stage: 2 });
  W('ontspannen', 'relaxed', 'adj', 'Na de vakantie voel ik me ontspannen.', 'After the holiday I feel relaxed.', { theme: 'feelings', stage: 2 });
  W('blij', 'happy / glad', 'adj', 'Ik ben blij met mijn nieuwe fiets.', 'I am happy with my new bike.', { theme: 'feelings', stage: 2 });
  W('boos', 'angry', 'adj', 'Waarom ben je boos?', 'Why are you angry?', { theme: 'feelings', stage: 2 });
  W('verdrietig', 'sad', 'adj', 'Ze was verdrietig na het afscheid.', 'She was sad after the goodbye.', { theme: 'feelings', stage: 2 });
  W('bang', 'afraid', 'adj', 'Ik ben bang voor honden.', 'I am afraid of dogs.', { theme: 'feelings', stage: 2 });
  W('trots', 'proud', 'adj', 'Ik ben trots op mijn dochter.', 'I am proud of my daughter.', { theme: 'feelings', stage: 2 });

  VB('verzetten', 'to reschedule / move', 'verzet|verzet|verzetten', 'verzette|verzetten', 'verzet', 'hebben', 'Kan ik mijn afspraak verzetten?', 'Can I reschedule my appointment?', { theme: 'appointments', stage: 2 });
  VB('afzeggen', 'to cancel', 'zeg af|zegt af|zeggen af', 'zei af|zeiden af', 'afgezegd', 'hebben', 'Ik moet de afspraak helaas afzeggen.', 'Unfortunately I have to cancel the appointment.', { theme: 'appointments', stage: 2 });
  VB('bevestigen', 'to confirm', 'bevestig|bevestigt|bevestigen', 'bevestigde|bevestigden', 'bevestigd', 'hebben', 'U ontvangt een e-mail om de afspraak te bevestigen.', 'You will receive an email to confirm the appointment.', { theme: 'appointments', stage: 2 });
  VB('uitkomen', 'to suit / be convenient', 'kom uit|komt uit|komen uit', 'kwam uit|kwamen uit', 'uitgekomen', 'zijn', 'Komt dinsdag u uit?', 'Does Tuesday suit you?', { theme: 'appointments', stage: 2, note: 'Komt dat uit? = Is that convenient?' });
  VB('schikken', 'to suit (formal)', 'schik|schikt|schikken', 'schikte|schikten', 'geschikt', 'hebben', 'Schikt het om tien uur?', 'Would ten o’clock suit you?', { theme: 'appointments', stage: 2 });
  VB('langskomen', 'to come by / drop in', 'kom langs|komt langs|komen langs', 'kwam langs|kwamen langs', 'langsgekomen', 'zijn', 'Kunt u morgen langskomen?', 'Can you come by tomorrow?', { theme: 'appointments', stage: 2 });
  N('agenda', 'de', "agenda's", 'diary / calendar', 'Ik kijk even in mijn agenda.', 'Let me check my diary.', { theme: 'appointments', stage: 2 });
  N('tijdstip', 'het', 'tijdstippen', 'time (point in time)', 'Welk tijdstip past u het beste?', 'What time suits you best?', { theme: 'appointments', stage: 2 });
  N('balie', 'de', 'balies', 'counter / front desk', 'Meld u bij de balie.', 'Report at the front desk.', { theme: 'appointments', stage: 2 });
  N('assistent', 'de', 'assistenten', 'assistant (doctor’s receptionist)', 'De assistent plant de afspraken.', 'The assistant schedules the appointments.', { theme: 'appointments', stage: 2 });
  W('beschikbaar', 'available', 'adj', 'Bent u morgenochtend beschikbaar?', 'Are you available tomorrow morning?', { theme: 'appointments', stage: 2 });
  W('dringend', 'urgent', 'adj', 'Het is dringend.', 'It is urgent.', { theme: 'appointments', stage: 2 });
  W('eerder', 'earlier', 'adv', 'Kan het eerder?', 'Can it be earlier?', { theme: 'time', stage: 2 });
  W('later', 'later', 'adv', 'Ik bel later terug.', 'I will call back later.', { theme: 'time', stage: 2 });
  W('helaas', 'unfortunately', 'adv', 'Helaas kan ik niet komen.', 'Unfortunately I cannot come.', { theme: 'basics', stage: 2 });
  PH('Komt dat uit?', 'Is that convenient?', 'Dinsdag om tien uur, komt dat uit?', 'Tuesday at ten, is that convenient?', { theme: 'appointments', stage: 2, id: 'ph-komt-dat-uit' });
  PH('Ik wil graag een afspraak maken.', 'I would like to make an appointment.', 'Goedemorgen, ik wil graag een afspraak maken met de huisarts.', 'Good morning, I would like to make an appointment with the GP.', { theme: 'appointments', stage: 2, id: 'ph-afspraak-maken' });
  PH('Waar gaat het om?', 'What is it about?', 'Waar gaat het om? — Ik heb al een week keelpijn.', 'What is it about? — I have had a sore throat for a week.', { theme: 'appointments', stage: 2, id: 'ph-waar-gaat-het-om' });

  W('sinds', 'since', 'prep', 'Ik woon hier sinds maart.', 'I have lived here since March.', { theme: 'time', stage: 2 });
  W('tegenwoordig', 'nowadays', 'adv', 'Tegenwoordig werk ik veel thuis.', 'Nowadays I work from home a lot.', { theme: 'time', stage: 2 });
  W('intussen', 'in the meantime', 'adv', 'Intussen is het probleem opgelost.', 'In the meantime the problem has been solved.', { theme: 'time', stage: 2, altNl: ['ondertussen'] });
  W('vanaf', 'from (a point in time)', 'prep', 'Vanaf morgen ben ik weer beschikbaar.', 'From tomorrow I am available again.', { theme: 'time', stage: 2 });
  W('tot', 'until', 'prep', 'De winkel is open tot zes uur.', 'The shop is open until six.', { theme: 'time', stage: 2 });
  W('over', 'in (time from now)', 'prep', 'Over een week begint de cursus.', 'The course starts in a week.', { theme: 'time', stage: 2, id: 'over-tijd' });
  N('kwartier', 'het', 'kwartieren', 'quarter of an hour', 'Ik ben er over een kwartier.', 'I will be there in a quarter of an hour.', { theme: 'time', stage: 2 });
  N('seconde', 'de', 'seconden', 'second', 'Wacht een seconde.', 'Wait a second.', { theme: 'time', stage: 2 });
  N('halfjaar', 'het', 'halfjaren', 'six months', 'Ik doe de cursus een halfjaar.', 'I am doing the course for six months.', { theme: 'time', stage: 2 });
  W('dagelijks', 'daily', 'adj', 'Neem de tabletten dagelijks in.', 'Take the tablets daily.', { theme: 'time', stage: 2 });
  W('wekelijks', 'weekly', 'adj', 'We hebben een wekelijkse vergadering.', 'We have a weekly meeting.', { theme: 'time', stage: 2 });
  W('maandelijks', 'monthly', 'adj', 'De huur betaal je maandelijks.', 'You pay the rent monthly.', { theme: 'time', stage: 2 });
  W('regelmatig', 'regularly', 'adv', 'Ik sport regelmatig.', 'I exercise regularly.', { theme: 'time', stage: 2 });
  W('zelden', 'rarely', 'adv', 'Ik ga zelden naar de dokter.', 'I rarely go to the doctor.', { theme: 'time', stage: 2 });
  W('meteen', 'immediately', 'adv', 'Ik kom meteen.', 'I am coming right away.', { theme: 'time', stage: 2, altNl: ['direct', 'onmiddellijk'] });
  W('zo meteen', 'in a moment', 'adv', 'Ik bel je zo meteen.', 'I will call you in a moment.', { theme: 'time', stage: 2, id: 'zo-meteen' });
  W('per', 'per', 'prep', 'Twee keer per week sport ik.', 'I exercise twice a week.', { theme: 'time', stage: 2 });
  PH("'s ochtends", 'in the morning', "'s Ochtends drink ik koffie.", 'In the morning I drink coffee.', { theme: 'time', stage: 2, id: 'ph-s-ochtends', note: "'s ochtends = 's morgens; also 's middags, 's avonds, 's nachts." });
  W('om de', 'every other', 'adv', 'Om de dag ga ik zwemmen.', 'Every other day I go swimming.', { theme: 'time', stage: 2, id: 'om-de' });

  N('symptoom', 'het', 'symptomen', 'symptom', 'Wat zijn de symptomen?', 'What are the symptoms?', { theme: 'health', stage: 2 });
  N('pil', 'de', 'pillen', 'pill', 'Neem één pil per dag.', 'Take one pill a day.', { theme: 'health', stage: 2 });
  N('tablet', 'de', 'tabletten', 'tablet', 'Twee tabletten bij het ontbijt.', 'Two tablets with breakfast.', { theme: 'health', stage: 2 });
  N('bijwerking', 'de', 'bijwerkingen', 'side effect', 'Heeft dit medicijn bijwerkingen?', 'Does this medicine have side effects?', { theme: 'health', stage: 2 });
  N('ontsteking', 'de', 'ontstekingen', 'infection / inflammation', 'U heeft een ontsteking in uw keel.', 'You have an infection in your throat.', { theme: 'health', stage: 2 });
  N('allergie', 'de', 'allergieën', 'allergy', 'Ik heb een allergie voor noten.', 'I have a nut allergy.', { theme: 'health', stage: 2 });
  N('verwijzing', 'de', 'verwijzingen', 'referral', 'U krijgt een verwijzing naar de specialist.', 'You get a referral to the specialist.', { theme: 'health', stage: 2 });
  N('specialist', 'de', 'specialisten', 'specialist', 'De specialist zit in het ziekenhuis.', 'The specialist is at the hospital.', { theme: 'health', stage: 2 });
  N('zorgverzekering', 'de', 'zorgverzekeringen', 'health insurance', 'In Nederland is een zorgverzekering verplicht.', 'In the Netherlands health insurance is compulsory.', { theme: 'health', stage: 2 });
  N('eigen risico', 'het', null, 'insurance excess (deductible)', 'Het eigen risico is 385 euro per jaar.', 'The excess is 385 euros a year.', { theme: 'health', stage: 2, id: 'eigen-risico' });
  N('bloeddruk', 'de', null, 'blood pressure', 'Uw bloeddruk is een beetje hoog.', 'Your blood pressure is a little high.', { theme: 'health', stage: 2 });
  N('wond', 'de', 'wonden', 'wound', 'De wond moet schoon blijven.', 'The wound has to stay clean.', { theme: 'health', stage: 2 });
  N('pleister', 'de', 'pleisters', 'plaster', 'Heb je een pleister?', 'Do you have a plaster?', { theme: 'health', stage: 2 });
  W('misselijk', 'nauseous', 'adj', 'Ik ben misselijk.', 'I feel sick.', { theme: 'health', stage: 2 });
  W('duizelig', 'dizzy', 'adj', 'Ik word duizelig als ik opsta.', 'I get dizzy when I stand up.', { theme: 'health', stage: 2 });
  W('benauwd', 'short of breath', 'adj', 'Hij is benauwd.', 'He is short of breath.', { theme: 'health', stage: 2 });
  VB('onderzoeken', 'to examine', 'onderzoek|onderzoekt|onderzoeken', 'onderzocht|onderzochten', 'onderzocht', 'hebben', 'De dokter onderzoekt uw keel.', 'The doctor examines your throat.', { theme: 'health', stage: 2 });
  VB('doorverwijzen', 'to refer', 'verwijs door|verwijst door|verwijzen door', 'verwees door|verwezen door', 'doorverwezen', 'hebben', 'Ik verwijs u door naar de fysiotherapeut.', 'I am referring you to the physiotherapist.', { theme: 'health', stage: 2 });
  VB('meten', 'to measure', 'meet|meet|meten', 'mat|maten', 'gemeten', 'hebben', 'Ik meet even uw bloeddruk.', 'I will just measure your blood pressure.', { theme: 'health', stage: 2 });
  VB('slikken', 'to swallow', 'slik|slikt|slikken', 'slikte|slikten', 'geslikt', 'hebben', 'Slik de tablet met water.', 'Swallow the tablet with water.', { theme: 'health', stage: 2 });
  PH('driemaal daags', 'three times a day', 'Driemaal daags één tablet.', 'One tablet three times a day.', { theme: 'health', stage: 2, id: 'ph-driemaal-daags' });
  PH('Beterschap!', 'Get well soon!', 'Beterschap, en rust goed uit.', 'Get well soon, and rest well.', { theme: 'health', stage: 2, id: 'ph-beterschap' });

  /* ---------------- Unit 3 lessons ---------------- */
  const u3 = [];
  u3.push(lesson('s2u3l1', 'How do you feel? Reflexive verbs', 'You can say how you feel and talk about daily actions with reflexive verbs: ik voel me, ik haast me, ik herinner me.', [
    h('ik voel me, jij voelt je, hij voelt zich'),
    p('A reflexive verb needs a second little pronoun that points back at the subject. English has a few ("I hurt myself"); Dutch has many more, and several have nothing "self-ish" about them in English: `zich voelen` (feel), `zich herinneren` (remember), `zich vervelen` (be bored).'),
    table(['', 'reflexive', 'zich voelen'], [['ik', '*me', '*ik voel me'], ['jij / je', '*je', '*jij voelt je'], ['u', '*u / zich', '*u voelt zich'], ['hij / zij / het', '*zich', '*hij voelt zich'], ['wij / we', '*ons', '*wij voelen ons'], ['jullie', '*je', '*jullie voelen je'], ['zij / ze', '*zich', '*zij voelen zich']]),
    p('The reflexive pronoun stands **right after the verb**: `Ik voel me goed.` In a question or after a fronted word it comes right after the subject: `Voel je je goed?` `Vandaag voel ik me beter.` In the perfect it stays there and the participle goes to the end: `Ik heb me vergist.`'),
    h('The verbs you need'),
    table(['verb', 'meaning', 'example'], [['zich voelen', 'to feel', '*Ik voel me moe.'], ['zich haasten', 'to hurry', '*We moeten ons haasten.'], ['zich herinneren', 'to remember', '*Herinner je je Tom nog?'], ['zich vervelen', 'to be bored', '*Ik verveel me nooit.'], ['zich schamen', 'to be embarrassed', '*Ze schaamt zich.'], ['zich vergissen', 'to be mistaken', '*Sorry, ik heb me vergist.'], ['zich inschrijven', 'to register', '*Ik schrijf me in voor de cursus.'], ['zich verheugen op', 'to look forward to', '*Ik verheug me op de zomer.'], ['zich zorgen maken', 'to worry', '*Maak je geen zorgen.']]),
    ex(['Hoe voel je je? — Ik voel me een stuk beter, dank je.', 'How do you feel? — I feel a lot better, thanks.'], ['Ik herinner me haar naam niet meer.', 'I no longer remember her name.'], ['De kinderen vervelen zich in de auto.', 'The children are bored in the car.'], ['We hebben ons ingeschreven voor de taalcursus.', 'We registered for the language course.']),
    tip('`Voel je je …?` has two je’s in a row and is correct. If you want to avoid it, use the formal `Voelt u zich …?` or say `Hoe gaat het met je?`'),
  ], ['g2-reflexive'], ['zich-voelen', 'zich-haasten', 'zich-herinneren', 'zich-vervelen', 'zich-schamen', 'zich-inschrijven', 'zich-verheugen', 'zich-aanmelden', 'zich-afmelden', 'zich-concentreren', 'zich-zorgen-maken', 'moe', 'druk', 'zenuwachtig', 'ontspannen', 'blij', 'boos', 'verdrietig', 'bang', 'trots'], [
    mc('Ik voel ___ niet lekker.', ['mij', 'me', 'zich'], 1, 'ik → me (unstressed, the normal form).'),
    mc('Hij herinnert ___ die dag nog goed.', ['hem', 'zich', 'zijn'], 1, 'hij → zich.'),
    mc('Wij moeten ___ haasten.', ['ons', 'we', 'zich'], 0, 'wij → ons.'),
    mc('Jullie vervelen ___.', ['jullie', 'je', 'zich'], 1, 'jullie → je.'),
    fill('Voel je ___ al beter?', ['je'], 'Do you feel better already?', 'jij → je, straight after the subject in a question.'),
    fill('Ze schaamt ___ voor haar fout.', ['zich'], 'She is embarrassed about her mistake.', 'zij → zich.'),
    fill('Ik heb ___ ingeschreven voor de cursus.', ['me', 'mij'], 'I have registered for the course.', 'The reflexive pronoun stays after heb; ingeschreven goes to the end.'),
    fill('Maak je geen ___, het komt goed.', ['zorgen'], 'Do not worry, it will be fine.', 'zich zorgen maken; geen zorgen.'),
    build('I am looking forward to the weekend.', 'Ik verheug me op het weekend.', ['mij op', 'verheugt'], 'verheug me op.'),
    build('Do you remember my sister?', 'Herinner je je mijn zus?', ['jij', 'herinnert'], 'Herinner je je: verb, subject je, reflexive je.'),
    build('We are bored at home.', 'We vervelen ons thuis.', ['zich', 'verveelt'], 'we → ons.'),
    build('Today I feel relaxed.', 'Vandaag voel ik me ontspannen.', ['ik voel', 'mij'], 'Inversion after vandaag: voel ik me.'),
    tr('en-nl', 'I made a mistake, sorry.', ['Ik heb me vergist, sorry.', 'Sorry, ik heb me vergist.', 'Ik heb mij vergist, sorry.'], 'zich vergissen in the perfect: heb me vergist.'),
    tr('nl-en', 'Ik kan me niet concentreren, ik ben te moe.', ['I cannot concentrate, I am too tired.', 'I can’t concentrate, I’m too tired.'], 'zich concentreren; moe = tired.'),
    fix('Ik voel mijn goed.', ['Ik voel me goed.', 'Ik voel mij goed.'], 'The reflexive is me/mij, not the possessive mijn.'),
    fix('Hij haast hem.', ['Hij haast zich.'], 'Third person: zich, never hem.'),
    dict('Ik verheug me op de vakantie.', 'I am looking forward to the holiday.', 'verheug me op.'),
    listen('Hoe voel je je vandaag? — Ik voel me een beetje misselijk.', ['How do you feel today? — I feel a little sick.', 'How are you? — I am busy.', 'How do you feel? — I feel great.'], 0, 'misselijk = nauseous.'),
    speak('Ik voel me vandaag niet zo goed. Ik ben moe en een beetje verdrietig.', 'I do not feel so well today. I am tired and a little sad.'),
    free('Say how you feel today and why, and name one thing you are looking forward to.', 'Vandaag voel ik me goed. Ik heb goed geslapen. Ik verheug me op het weekend, want ik ga naar Utrecht.', 'Today I feel good. I slept well. I am looking forward to the weekend, because I am going to Utrecht.', { hints: ['Ik voel me …', 'Ik ben … want …', 'Ik verheug me op …'] }),
    match([['blij', 'happy'], ['boos', 'angry'], ['bang', 'afraid'], ['moe', 'tired'], ['trots', 'proud'], ['zenuwachtig', 'nervous']]),
    auto(3, ['tr-nl-en', 'mc-meaning']),
  ], [
    fill('Ik voel ___ veel beter.', ['me', 'mij'], 'I feel much better.', 'ik → me.'),
    fill('Herinner je ___ nog die avond?', ['je'], 'Do you still remember that evening?', 'jij → je.'),
    mc('Zij vervelen ___.', ['ze', 'zich', 'hen'], 1, 'zij (they) → zich.'),
    build('We have to hurry.', 'We moeten ons haasten.', ['zich', 'haast'], 'moeten + ons + haasten at the end.'),
    tr('en-nl', 'Do not worry.', ['Maak je geen zorgen.', 'Maak je niet druk.'], 'zich zorgen maken → maak je geen zorgen.'),
    speak('Ik schaam me een beetje voor mijn uitspraak, maar ik oefen elke dag.', 'I am a little embarrassed about my pronunciation, but I practise every day.'),
  ]));

  u3.push(lesson('s2u3l2', 'Making an appointment: the imperative and polite requests', 'You can make, move and cancel an appointment by phone, understand instructions like Komt u binnen, and give instructions yourself.', [
    h('The imperative: stem only'),
    p('An instruction is just the **stem** at the front: `Kom binnen.` `Wacht even.` `Neem plaats.` Separable prefixes go to the end: `Let op!` `Bel morgen terug.` The negative uses niet / geen: `Vergeet het niet.` `Neem geen taxi.`'),
    table(['casual', 'friendly (with even / maar / eens)', 'formal (u)'], [['*Kom binnen.', '*Kom maar binnen.', '*Komt u binnen.'], ['*Wacht.', '*Wacht even.', '*Wacht u even.'], ['*Kijk.', '*Kijk eens.', '*Kijkt u eens.'], ['*Ga zitten.', '*Ga maar zitten.', '*Gaat u zitten.']]),
    p('The little words `even`, `maar`, `eens` soften an instruction. Use them: a bare imperative can sound like an order.'),
    h('On the phone with the assistant'),
    table(['you', 'the assistant'], [['*Ik wil graag een afspraak maken.', '*Waar gaat het om?'], ['*Ik heb al een week keelpijn.', '*Kunt u morgen om kwart over negen?'], ['*Dat komt goed uit. / Kan het later?', '*Om half elf is er nog plek.'], ['*Kan ik mijn afspraak verzetten?', '*Wanneer schikt het u?'], ['*Ik moet helaas afzeggen.', '*Geen probleem, ik zet het in de agenda.']]),
    p('`Komt dat uit?` / `Schikt het?` both mean "does that suit you?". `Dat komt goed uit` = that works well. `Dat komt slecht uit` = that is bad timing.'),
    ex(['Goedemorgen, ik wil graag een afspraak maken met de huisarts.', 'Good morning, I would like to make an appointment with the GP.'], ['Kan ik vanmiddag nog langskomen? Het is dringend.', 'Can I still come by this afternoon? It is urgent.'], ['Ik wil mijn afspraak van dinsdag verzetten naar donderdag.', 'I want to move my Tuesday appointment to Thursday.'], ['Meldt u zich bij de balie en neemt u plaats in de wachtkamer.', 'Report at the front desk and take a seat in the waiting room.']),
    tip('`Ik wil graag …` is the polite way to ask for something. `Ik wil …` on its own sounds blunt to Dutch ears.'),
  ], ['g2-imperative'], ['verzetten', 'afzeggen', 'bevestigen', 'uitkomen', 'schikken', 'langskomen', 'agenda', 'tijdstip', 'balie', 'assistent', 'beschikbaar', 'dringend', 'eerder', 'later', 'helaas', 'ph-komt-dat-uit', 'ph-afspraak-maken', 'ph-waar-gaat-het-om'], [
    mc('Which is the imperative of "wachten"?', ['Wachten!', 'Wacht!', 'Wachtt!'], 1, 'Stem only: wacht.'),
    mc('Make "opletten" an instruction:', ['Oplet!', 'Let op!', 'Let u op!'], 1, 'Separable: prefix at the end. (Let u op is the formal form, also correct, but the plain one is asked.)'),
    mc('The friendliest way to tell someone to sit down:', ['Zit.', 'Ga maar zitten.', 'Je moet zitten.'], 1, 'maar softens the imperative.'),
    fill('___ binnen en ga maar zitten. (komen)', ['Kom'], 'Come in and sit down.', 'Imperative = stem: kom. (And ga, the stem of gaan, for the second verb.)'),
    fill('___ het niet: morgen om tien uur. (vergeten)', ['Vergeet'], 'Do not forget: tomorrow at ten.', 'Stem of vergeten: vergeet (long e written double).'),
    fill('Ik wil mijn afspraak graag ___ naar vrijdag. (verzetten)', ['verzetten'], 'I would like to move my appointment to Friday.', 'wil graag + infinitive at the end.'),
    fill('Dinsdag om drie uur, komt dat ___?', ['uit'], 'Tuesday at three, is that convenient?', 'uitkomen: komt dat uit.'),
    build('I would like to make an appointment.', 'Ik wil graag een afspraak maken.', ['maak', 'wil ik'], 'wil graag + maken at the end.'),
    build('Can it be earlier? It is urgent.', 'Kan het eerder? Het is dringend.', ['later', 'kunt'], 'Kan het eerder?'),
    build('Unfortunately I have to cancel.', 'Helaas moet ik afzeggen.', ['zeg af', 'ik moet'], 'helaas first, moet second, afzeggen at the end.'),
    build('Call back tomorrow.', 'Bel morgen terug.', ['terugbel', 'belt'], 'Imperative of terugbellen: bel … terug.'),
    tr('en-nl', 'What is it about?', ['Waar gaat het om?'], 'Fixed phrase: waar gaat het om.'),
    tr('nl-en', 'Kunt u morgenochtend om kwart over negen?', ['Can you come tomorrow morning at quarter past nine?', 'Can you make tomorrow morning at quarter past nine?', 'Can you do tomorrow morning at 9:15?'], 'kwart over negen = 9:15.'),
    fix('Komen binnen!', ['Kom binnen!'], 'Imperative = stem: kom.'),
    fix('Wacht u even.', ['Wacht even.'], 'Both forms exist, but the exercise asks for the informal one: Wacht even.'),
    dict('Ik wil graag een afspraak maken met de huisarts.', 'I would like to make an appointment with the GP.', 'wil graag … maken.'),
    listen('Kunt u vanmiddag om half drie langskomen?', ['Can you come by this afternoon at half past two?', 'Can you come by tomorrow at three?', 'Can you call this afternoon at half past three?'], 0, 'half drie = 2:30; langskomen = come by.'),
    speak('Goedemorgen, ik wil graag een afspraak maken. Ik heb al drie dagen hoofdpijn.', 'Good morning, I would like to make an appointment. I have had a headache for three days.'),
    free('Role play: phone the doctor’s assistant. Say you want an appointment, what it is about, and ask whether tomorrow morning is possible.', 'Goedemorgen, ik wil graag een afspraak maken met de huisarts. Ik heb sinds gisteren koorts en keelpijn. Kan het morgenochtend?', 'Good morning, I would like to make an appointment with the GP. I have had a fever and sore throat since yesterday. Is tomorrow morning possible?', { hints: ['Ik wil graag …', 'Ik heb … (klacht)', 'Kan het …?'] }),
    read('Assistent: Huisartsenpraktijk De Pijp, goedemorgen. Anna: Goedemorgen, ik wil graag een afspraak maken. Assistent: Waar gaat het om? Anna: Ik heb al een week hoest en sinds gisteren ook koorts. Assistent: Dan wil de dokter u graag zien. Kunt u vanmiddag om twee uur? Anna: Dat komt slecht uit, ik werk tot vijf. Kan het later? Assistent: Om kwart voor zes is er nog plek. Anna: Dat is prima. Assistent: Neemt u uw verzekeringspas mee en meldt u zich bij de balie.', [
      { q: 'Why can Anna not come at two?', options: ['she is too ill', 'she works until five', 'she has another appointment'], answer: 1, explain: '"ik werk tot vijf".' },
      { q: 'When is the appointment?', options: ['14:00', '17:15', '17:45'], answer: 2, explain: '"kwart voor zes" = 17:45.' },
      { q: 'What should Anna bring?', options: ['her passport', 'her insurance card', 'her medicines'], answer: 1, explain: '"Neemt u uw verzekeringspas mee".' },
    ], { en: 'Assistant: GP practice De Pijp, good morning. Anna: Good morning, I would like to make an appointment. Assistant: What is it about? Anna: I have had a cough for a week and since yesterday also a fever. Assistant: Then the doctor would like to see you. Can you make two o’clock this afternoon? Anna: That is bad timing, I work until five. Can it be later? Assistant: At quarter to six there is still a slot. Anna: That is fine. Assistant: Bring your insurance card and report at the front desk.' }),
    auto(2, ['tr-nl-en']),
  ], [
    mc('Imperative of "bellen":', ['Bel!', 'Belt!', 'Bellen!'], 0, 'Stem: bel.'),
    fill('___ even, de dokter komt zo. (wachten)', ['Wacht'], 'Wait a moment, the doctor is coming.', 'Stem: wacht.'),
    build('Can I move my appointment?', 'Kan ik mijn afspraak verzetten?', ['verzet', 'afzeggen'], 'kan ik … verzetten.'),
    tr('en-nl', 'That suits me well.', ['Dat komt goed uit.', 'Dat komt me goed uit.', 'Dat schikt goed.'], 'komt goed uit.'),
    listen('Ik moet de afspraak van morgen helaas afzeggen.', ['Unfortunately I have to cancel tomorrow’s appointment.', 'I want to move tomorrow’s appointment.', 'I confirm tomorrow’s appointment.'], 0, 'afzeggen = cancel.'),
    speak('Kan ik mijn afspraak verzetten naar volgende week? Dinsdag komt goed uit.', 'Can I move my appointment to next week? Tuesday suits me well.'),
  ]));

  u3.push(lesson('s2u3l3', 'Since, for, in, ago: time expressions', 'You can say since when, for how long, how often and how soon: sinds, al, pas, over, geleden, per, om de.', [
    h('Since when? For how long?'),
    table(['Dutch', 'English', 'note'], [['*sinds 2023 / sinds maart', 'since 2023 / since March', 'a starting point'], ['*al twee jaar', 'for two years (and counting)', 'present tense!'], ['*pas een maand', 'only a month', 'pas = only just'], ['*nog steeds', 'still', ''], ['*nog niet', 'not yet', ''], ['*niet meer', 'no longer', '']]),
    p('English "I have lived here for two years" is **present** tense in Dutch, because you still live there: `Ik woon hier al twee jaar.` Using the perfect (`ik heb hier gewoond`) means you moved away.'),
    h('When? How soon?'),
    table(['Dutch', 'English'], [['*over een uur', 'in an hour (from now)'], ['*over een week', 'in a week'], ['*een uur geleden', 'an hour ago'], ['*zo meteen', 'in a moment'], ['*meteen', 'immediately'], ['*vanaf morgen', 'from tomorrow'], ['*tot vrijdag', 'until Friday'], ['*binnenkort', 'soon'], ['*straks', 'later today']]),
    warn('`over een uur` = in an hour from now. `in een uur` = within one hour (duration): `Ik doe het in een uur.` And `geleden` comes **after** the time: `twee dagen geleden`.'),
    h('How often?'),
    p('`elke dag`, `elke week`, `één keer per week`, `twee keer per maand`, `om de dag` (every other day), `dagelijks`, `wekelijks`, `maandelijks`, `regelmatig` (regularly), `zelden` (rarely), `’s ochtends / ’s middags / ’s avonds / ’s nachts`.'),
    ex(['Ik woon al drie jaar in Amsterdam, maar ik leer pas sinds januari Nederlands.', 'I have lived in Amsterdam for three years, but I have only been learning Dutch since January.'], ['De cursus begint over twee weken.', 'The course starts in two weeks.'], ['Ik sport twee keer per week, meestal ’s avonds.', 'I exercise twice a week, usually in the evening.'], ['Vanaf maandag werk ik niet meer op vrijdag.', 'From Monday I no longer work on Fridays.']),
    tip('al = "already / for": positive, ongoing. pas = "only": it feels short. `Ik ben hier al een jaar` (quite long) vs `Ik ben hier pas een jaar` (not long).'),
  ], ['g2-time-expressions'], ['sinds', 'tegenwoordig', 'intussen', 'vanaf', 'tot', 'over-tijd', 'kwartier', 'seconde', 'halfjaar', 'dagelijks', 'wekelijks', 'maandelijks', 'regelmatig', 'zelden', 'meteen', 'zo-meteen', 'per', 'ph-s-ochtends', 'om-de'], [
    mc('"I have lived here for two years" (and still do):', ['Ik heb hier twee jaar gewoond.', 'Ik woon hier al twee jaar.', 'Ik woonde hier twee jaar.'], 1, 'Still going on → present + al.'),
    mc('"The film starts in ten minutes":', ['De film begint in tien minuten.', 'De film begint over tien minuten.', 'De film begint tien minuten geleden.'], 1, 'From now: over.'),
    mc('"Every other day":', ['elke dag', 'om de dag', 'per dag'], 1, 'om de dag = every other day.'),
    fill('Ik werk ___ 2021 bij deze firma.', ['sinds'], 'I have worked at this company since 2021.', 'Starting point: sinds.'),
    fill('Ik leer ___ drie maanden Nederlands, dus ik maak nog fouten.', ['pas'], 'I have only been learning Dutch for three months, so I still make mistakes.', 'pas = only (short).'),
    fill('Hij is een kwartier ___ vertrokken.', ['geleden'], 'He left a quarter of an hour ago.', 'geleden after the time.'),
    fill('Ik ga twee keer ___ week naar de sportschool.', ['per'], 'I go to the gym twice a week.', 'keer per week.'),
    fill('___ volgende week is de praktijk ook op zaterdag open.', ['Vanaf'], 'From next week the practice is also open on Saturdays.', 'vanaf = from (a point in time).'),
    build('The doctor is coming in a moment.', 'De dokter komt zo meteen.', ['meteen zo', 'over'], 'zo meteen = in a moment.'),
    build('I have been ill since Monday.', 'Ik ben sinds maandag ziek.', ['geleden', 'al'], 'sinds maandag; present tense.'),
    build('We saw each other a year ago.', 'We hebben elkaar een jaar geleden gezien.', ['voor', 'over'], 'een jaar geleden.'),
    build('Take the tablets three times a day.', 'Neem de tabletten drie keer per dag in.', ['op', 'daags'], 'innemen: neem … in; drie keer per dag.'),
    tr('en-nl', 'The shop is open until six.', ['De winkel is open tot zes uur.', 'De winkel is tot zes uur open.'], 'tot = until.'),
    tr('nl-en', 'Tegenwoordig werk ik meestal thuis.', ['Nowadays I usually work from home.', 'These days I mostly work at home.'], 'tegenwoordig = nowadays.'),
    fix('Ik woon hier voor twee jaar.', ['Ik woon hier al twee jaar.'], 'Duration up to now: al, not voor.'),
    fix('Ik kom in een uur terug.', ['Ik kom over een uur terug.'], 'From now: over een uur.'),
    dict('Ik woon al vijf jaar in Nederland en ik ga zelden naar de dokter.', 'I have lived in the Netherlands for five years and I rarely go to the doctor.', 'al vijf jaar; zelden.'),
    listen('De cursus begint over twee weken en duurt een halfjaar.', ['The course starts in two weeks and lasts six months.', 'The course started two weeks ago and lasts a year.', 'The course starts in two months.'], 0, 'over twee weken; een halfjaar.'),
    speak('Ik woon al twee jaar in Amsterdam en ik leer sinds september Nederlands.', 'I have lived in Amsterdam for two years and I have been learning Dutch since September.'),
    free('Say how long you have lived in your city, since when you have been learning Dutch, and how often you practise.', 'Ik woon al drie jaar in Amsterdam. Ik leer sinds maart Nederlands. Ik oefen elke dag een kwartier, meestal ’s avonds.', 'I have lived in Amsterdam for three years. I have been learning Dutch since March. I practise a quarter of an hour every day, usually in the evening.', { hints: ['Ik woon al …', 'Ik leer sinds …', 'Ik oefen … per …'] }),
    match([['over een uur', 'in an hour'], ['een uur geleden', 'an hour ago'], ['sinds maart', 'since March'], ['al een jaar', 'for a year'], ['om de dag', 'every other day'], ['zelden', 'rarely']]),
  ], [
    fill('Ik woon hier ___ vier jaar.', ['al'], 'I have lived here for four years.', 'al + duration.'),
    fill('De trein vertrekt ___ vijf minuten.', ['over'], 'The train leaves in five minutes.', 'over = from now.'),
    mc('"Ik ben pas een week hier" means', ['I have been here for only a week', 'I have been here for a whole week', 'I was here a week ago'], 0, 'pas = only.'),
    build('I saw the doctor two days ago.', 'Ik heb twee dagen geleden de dokter gezien.', ['voor', 'sinds'], 'twee dagen geleden.'),
    tr('en-nl', 'I exercise three times a week.', ['Ik sport drie keer per week.'], 'keer per week.'),
    speak('Sinds vorige week voel ik me beter, maar ik ben nog steeds een beetje moe.', 'Since last week I have felt better, but I am still a little tired.'),
  ]));

  u3.push(lesson('s2u3l4', 'At the huisarts: symptoms, instructions and insurance', 'You can describe symptoms in detail, understand the doctor’s questions and instructions, and talk about medicines, referrals and health insurance.', [
    h('Describing symptoms'),
    table(['Dutch', 'English'], [['*Ik voel me misselijk / duizelig.', 'I feel nauseous / dizzy.'], ['*Ik ben benauwd.', 'I am short of breath.'], ['*Ik heb sinds drie dagen koorts.', 'I have had a fever for three days.'], ['*Ik heb een allergie voor noten.', 'I have a nut allergy.'], ['*De pijn wordt erger / minder.', 'The pain is getting worse / less.'], ['*Ik slaap slecht en ik ben altijd moe.', 'I sleep badly and I am always tired.']]),
    h('What the doctor says'),
    table(['Dutch', 'English'], [['*Wat zijn de klachten?', 'What are the symptoms?'], ['*Sinds wanneer heeft u dit?', 'Since when have you had this?'], ['*Ik onderzoek even uw keel.', 'I will just examine your throat.'], ['*Ik meet uw bloeddruk.', 'I will measure your blood pressure.'], ['*U heeft een ontsteking.', 'You have an infection.'], ['*Ik schrijf een recept uit.', 'I will write a prescription.'], ['*Driemaal daags één tablet, na het eten.', 'One tablet three times a day, after meals.'], ['*Ik verwijs u door naar de specialist.', 'I am referring you to the specialist.'], ['*Kom over een week terug als het niet beter is.', 'Come back in a week if it is not better.']]),
    h('How Dutch healthcare works, in five lines'),
    list('Everyone must have a **zorgverzekering**; you choose the insurer yourself.', 'The **huisarts** is the first stop for almost everything. You need a **verwijzing** from the huisarts to see a **specialist**.', 'The **eigen risico** is the amount you pay yourself each year before insurance pays (visits to the huisarts are excluded).', 'The **apotheek** gives medicines on a **recept**; simple painkillers are sold at the drogist and supermarket.', 'Out of hours: **huisartsenpost**. Emergency: **112**.'),
    ex(['Ik heb al een week keelpijn en sinds gisteren ook koorts.', 'I have had a sore throat for a week and since yesterday also a fever.'], ['Heeft dit medicijn bijwerkingen? — Sommige mensen worden er slaperig van.', 'Does this medicine have side effects? — Some people get sleepy from it.'], ['U krijgt een verwijzing voor de fysiotherapeut.', 'You get a referral for the physiotherapist.'], ['Beterschap!', 'Get well soon!']),
    tip('Doctors ask `Sinds wanneer?` Answer with sinds + moment or al + duration: `sinds maandag`, `al drie dagen`.'),
  ], ['g2-imperative', 'g2-time-expressions'], ['symptoom', 'pil', 'tablet', 'bijwerking', 'ontsteking', 'allergie', 'verwijzing', 'specialist', 'zorgverzekering', 'eigen-risico', 'bloeddruk', 'wond', 'pleister', 'misselijk', 'duizelig', 'benauwd', 'onderzoeken', 'doorverwijzen', 'meten', 'slikken', 'ph-driemaal-daags', 'ph-beterschap'], [
    mc('"Sinds wanneer heeft u dit?" A good answer:', ['Over drie dagen.', 'Al drie dagen.', 'Drie dagen per week.'], 1, 'Duration up to now: al drie dagen (or sinds maandag).'),
    mc('"Driemaal daags" means', ['three days', 'three times a day', 'every three days'], 1, 'driemaal = three times; daags = per day.'),
    mc('To see a specialist you first need', ['een recept', 'een verwijzing', 'een pleister'], 1, 'verwijzing = referral from the huisarts.'),
    mc('"Het eigen risico" is', ['the amount you pay yourself per year', 'a dangerous medicine', 'the doctor’s fee'], 0, 'eigen risico = insurance excess.'),
    art('recept', 'het', 'het recept.'),
    art('verwijzing', 'de', 'de verwijzing: -ing words are de.'),
    art('symptoom', 'het', 'het symptoom (plural: de symptomen).'),
    plural('de tablet', ['tabletten'], 'Short e: double the t.'),
    plural('de allergie', ['allergieën'], '-ie with stress on the ie → -ieën.'),
    fill('Ik voel me ___ als ik opsta. (dizzy)', ['duizelig'], 'I feel dizzy when I get up.', 'duizelig = dizzy.'),
    fill('De dokter ___ mijn keel. (onderzoeken)', ['onderzoekt'], 'The doctor examines my throat.', 'onderzoekt: stem + t.'),
    fill('Ik ___ u door naar de specialist. (doorverwijzen)', ['verwijs'], 'I am referring you to the specialist.', 'Separable: verwijs … door. First gap: verwijs (the prefix door would be at the end).'),
    fill('Heeft dit medicijn ___?', ['bijwerkingen'], 'Does this medicine have side effects?', 'bijwerking → bijwerkingen.'),
    build('I have had a fever for three days.', 'Ik heb al drie dagen koorts.', ['sinds', 'geleden'], 'al + duration.'),
    build('Take one tablet after meals.', 'Neem na het eten één tablet in.', ['inneem', 'neemt'], 'Imperative of innemen: neem … in.'),
    build('The doctor measured my blood pressure.', 'De dokter heeft mijn bloeddruk gemeten.', ['meette', 'gemeet'], 'meten → gemeten.'),
    build('Come back in a week if it is not better.', 'Kom over een week terug als het niet beter is.', ['in', 'terugkom'], 'kom … terug; als … is (verb at the end).'),
    tr('en-nl', 'I am allergic to nuts.', ['Ik heb een allergie voor noten.', 'Ik ben allergisch voor noten.'], 'allergie voor / allergisch voor.'),
    tr('nl-en', 'U heeft een ontsteking. Ik schrijf een recept uit.', ['You have an infection. I will write a prescription.', 'You have an inflammation. I am writing a prescription.'], 'ontsteking; recept uitschrijven.'),
    fix('Ik heb koorts sinds drie dagen.', ['Ik heb al drie dagen koorts.', 'Ik heb sinds drie dagen koorts.'], 'sinds three days is heard, but the natural form is al drie dagen.'),
    dict('Neem driemaal daags één tablet met water.', 'Take one tablet three times a day with water.', 'driemaal daags; met water.'),
    listen('Ik verwijs u door naar de fysiotherapeut.', ['I am referring you to the physiotherapist.', 'I am giving you a prescription.', 'I am measuring your blood pressure.'], 0, 'doorverwijzen = refer.'),
    speak('Ik voel me sinds gisteren misselijk en duizelig, en ik heb een beetje koorts.', 'Since yesterday I have felt nauseous and dizzy, and I have a slight fever.'),
    read('Gebruiksaanwijzing. Dit medicijn helpt tegen pijn en koorts. Volwassenen: driemaal daags één tablet, met een glas water, na het eten. Gebruik dit medicijn niet langer dan vijf dagen zonder overleg met uw huisarts. Mogelijke bijwerkingen: misselijkheid, duizeligheid. Bent u zwanger of gebruikt u andere medicijnen? Vraag dan eerst advies aan de apotheek. Buiten bereik van kinderen bewaren.', [
      { q: 'How should adults take it?', options: ['one tablet a day', 'three tablets before meals', 'one tablet three times a day after meals'], answer: 2, explain: '"driemaal daags één tablet … na het eten".' },
      { q: 'What should you do after five days?', options: ['stop, or ask your GP', 'double the dose', 'nothing special'], answer: 0, explain: '"niet langer dan vijf dagen zonder overleg met uw huisarts".' },
      { q: 'Who should ask the pharmacy first?', options: ['children', 'people who are pregnant or on other medicines', 'people with a fever'], answer: 1, explain: '"Bent u zwanger of gebruikt u andere medicijnen? Vraag dan eerst advies".' },
    ], { en: 'Instructions for use. This medicine helps against pain and fever. Adults: one tablet three times a day, with a glass of water, after meals. Do not use this medicine for longer than five days without consulting your GP. Possible side effects: nausea, dizziness. Are you pregnant or do you use other medicines? Then ask the pharmacy for advice first. Keep out of reach of children.' }),
    free('You are at the huisarts. Describe two symptoms, say since when, and ask one question about the medicine.', 'Ik heb al vier dagen hoofdpijn en ik ben ’s ochtends misselijk. Het begon vrijdag. Heeft het medicijn bijwerkingen?', 'I have had a headache for four days and I am nauseous in the morning. It started on Friday. Does the medicine have side effects?', { hints: ['Ik heb al … / sinds …', 'Ik voel me …', 'Heeft … bijwerkingen?'] }),
    auto(3, ['article', 'listen']),
  ], [
    mc('"Ik ben benauwd" means', ['I am short of breath', 'I am nauseous', 'I am nervous'], 0, 'benauwd = short of breath.'),
    art('pleister', 'de', 'de pleister.'),
    fill('U krijgt een ___ naar de specialist.', ['verwijzing'], 'You get a referral to the specialist.', 'verwijzing.'),
    build('Does this medicine have side effects?', 'Heeft dit medicijn bijwerkingen?', ['Is', 'bijwerking'], 'heeft … bijwerkingen.'),
    tr('en-nl', 'Get well soon!', ['Beterschap!'], 'Fixed phrase.'),
    speak('Sinds wanneer heeft u dit? — Al een week, en het wordt erger.', 'Since when have you had this? — For a week, and it is getting worse.'),
  ]));

  units.push(unit('s2u3', 'Afspraken en de dokter', 'appointments and the doctor', u3, [
    fill('Ik voel ___ vandaag veel beter.', ['me', 'mij'], 'I feel much better today.', 'ik → me.'),
    fill('Hij heeft ___ ingeschreven voor de cursus.', ['zich'], 'He registered for the course.', 'hij → zich.'),
    fill('___ maar binnen. (komen)', ['Kom'], 'Come on in.', 'Imperative: stem.'),
    fill('Ik woon hier ___ twee jaar.', ['al'], 'I have lived here for two years.', 'al + duration, present tense.'),
    mc('"Komt dat uit?" means', ['Is that convenient?', 'Is that outside?', 'Is that coming?'], 0, 'uitkomen = to suit.'),
    mc('"Over een uur" means', ['an hour ago', 'in an hour', 'for an hour'], 1, 'over = from now.'),
    build('I would like to move my appointment.', 'Ik wil graag mijn afspraak verzetten.', ['afzeggen', 'verzet'], 'wil graag … verzetten.'),
    build('I have had a sore throat for a week.', 'Ik heb al een week keelpijn.', ['sinds', 'geleden'], 'al een week.'),
    build('Take one tablet three times a day.', 'Neem driemaal daags één tablet in.', ['inneem', 'per'], 'neem … in.'),
    fix('Ik verheug mij op het weekend niet.', ['Ik verheug me niet op het weekend.'], 'niet goes before the prepositional phrase op het weekend.'),
    fix('Wachten even alstublieft.', ['Wacht even alstublieft.'], 'Imperative: wacht.'),
    tr('en-nl', 'Do you remember her name?', ['Herinner je je haar naam?', 'Herinner jij je haar naam?'], 'herinner je je.'),
    listen('Sinds wanneer heeft u last van uw rug? — Al drie weken.', ['Since when have you had back trouble? — For three weeks.', 'How long is your back? — Three weeks.', 'When did your back hurt? — Three weeks ago.'], 0, 'last hebben van = to have trouble with; al drie weken.'),
    speak('Ik wil graag een afspraak maken. Ik voel me al een week niet goed.', 'I would like to make an appointment. I have not felt well for a week.'),
  ]));

  /* ---------------- Vocabulary: Unit 4 ---------------- */
  N('woning', 'de', 'woningen', 'home / dwelling', 'We zoeken een woning in Oost.', 'We are looking for a home in East.', { theme: 'housing', stage: 2 });
  N('flat', 'de', 'flats', 'block of flats / flat', 'Ze wonen in een flat in Zuidoost.', 'They live in a block of flats in Southeast.', { theme: 'housing', stage: 2 });
  N('huurder', 'de', 'huurders', 'tenant', 'De huurder betaalt de huur.', 'The tenant pays the rent.', { theme: 'housing', stage: 2 });
  N('verhuurder', 'de', 'verhuurders', 'landlord', 'De verhuurder repareert de verwarming.', 'The landlord repairs the heating.', { theme: 'housing', stage: 2 });
  N('huurcontract', 'het', 'huurcontracten', 'rental contract', 'Lees het huurcontract goed.', 'Read the rental contract carefully.', { theme: 'housing', stage: 2 });
  N('borg', 'de', null, 'deposit', 'De borg is één maand huur.', 'The deposit is one month’s rent.', { theme: 'housing', stage: 2 });
  N('makelaar', 'de', 'makelaars', 'estate agent', 'De makelaar belt morgen.', 'The estate agent will call tomorrow.', { theme: 'housing', stage: 2 });
  N('bezichtiging', 'de', 'bezichtigingen', 'viewing', 'Er is een bezichtiging om vier uur.', 'There is a viewing at four.', { theme: 'housing', stage: 2 });
  N('zolder', 'de', 'zolders', 'attic', 'Op zolder staan onze koffers.', 'Our suitcases are in the attic.', { theme: 'housing', stage: 2 });
  N('kelder', 'de', 'kelders', 'cellar / basement', 'De fietsen staan in de kelder.', 'The bikes are in the cellar.', { theme: 'housing', stage: 2 });
  N('lift', 'de', 'liften', 'lift', 'Is er een lift?', 'Is there a lift?', { theme: 'housing', stage: 2 });
  N('raam', 'het', 'ramen', 'window', 'De ramen zijn groot.', 'The windows are big.', { theme: 'housing', stage: 2 });
  N('buren', 'de', 'buren', 'neighbours', 'Onze buren zijn aardig.', 'Our neighbours are nice.', { theme: 'people', stage: 2, note: 'Plural; singular: de buurman / de buurvrouw.' });
  N('lawaai', 'het', null, 'noise', 'Er is veel lawaai op straat.', 'There is a lot of noise in the street.', { theme: 'housing', stage: 2 });
  N('overlast', 'de', null, 'nuisance', 'De buren hebben last van geluidsoverlast.', 'The neighbours suffer from noise nuisance.', { theme: 'housing', stage: 2 });
  N('verwarming', 'de', null, 'heating', 'De verwarming doet het niet.', 'The heating is not working.', { theme: 'housing', stage: 2 });
  W('ruim', 'spacious', 'adj', 'De woonkamer is ruim.', 'The living room is spacious.', { theme: 'housing', stage: 2 });
  W('tevreden', 'satisfied', 'adj', 'We zijn tevreden met de woning.', 'We are satisfied with the home.', { theme: 'feelings', stage: 2 });
  W('licht', 'light / bright', 'adj', 'De kamer is licht.', 'The room is bright.', { theme: 'housing', stage: 2, id: 'licht-adj' });
  W('gehorig', 'poorly soundproofed', 'adj', 'Het huis is erg gehorig.', 'The house is very poorly soundproofed.', { theme: 'housing', stage: 2 });
  PH('per maand', 'per month', 'De huur is 1200 euro per maand.', 'The rent is 1200 euros a month.', { theme: 'housing', stage: 2, id: 'ph-per-maand' });

  W('elkaar', 'each other', 'pron', 'We helpen elkaar.', 'We help each other.', { theme: 'basics', stage: 2 });
  W('iemand', 'someone', 'pron', 'Er staat iemand voor de deur.', 'There is someone at the door.', { theme: 'basics', stage: 2 });
  W('niemand', 'nobody', 'pron', 'Niemand deed open.', 'Nobody opened the door.', { theme: 'basics', stage: 2 });
  W('iets', 'something', 'pron', 'Kan ik iets voor je doen?', 'Can I do something for you?', { theme: 'basics', stage: 2 });
  W('niets', 'nothing', 'pron', 'Ik hoor niets.', 'I hear nothing.', { theme: 'basics', stage: 2, altNl: ['niks'] });
  W('allemaal', 'all (of them)', 'pron', 'De buren zijn allemaal aardig.', 'The neighbours are all nice.', { theme: 'basics', stage: 2 });
  VB('lenen', 'to borrow / lend', 'leen|leent|lenen', 'leende|leenden', 'geleend', 'hebben', 'Mag ik je ladder lenen?', 'May I borrow your ladder?', { theme: 'daily', stage: 2, note: 'lenen van = borrow from; lenen aan / uitlenen = lend to.' });
  VB('uitlenen', 'to lend', 'leen uit|leent uit|lenen uit', 'leende uit|leenden uit', 'uitgeleend', 'hebben', 'Ik heb mijn boor aan de buurman uitgeleend.', 'I lent my drill to the neighbour.', { theme: 'daily', stage: 2 });
  VB('storen', 'to disturb', 'stoor|stoort|storen', 'stoorde|stoorden', 'gestoord', 'hebben', 'Stoor ik je?', 'Am I disturbing you?', { theme: 'daily', stage: 2 });
  VB('klagen', 'to complain', 'klaag|klaagt|klagen', 'klaagde|klaagden', 'geklaagd', 'hebben', 'De buren klagen over het lawaai.', 'The neighbours complain about the noise.', { theme: 'daily', stage: 2 });
  VB('aannemen', 'to accept / take in (a parcel)', 'neem aan|neemt aan|nemen aan', 'nam aan|namen aan', 'aangenomen', 'hebben', 'Kunt u een pakketje voor mij aannemen?', 'Could you take in a parcel for me?', { theme: 'daily', stage: 2 });
  VB('vragen om', 'to ask for', 'vraag om|vraagt om|vragen om', 'vroeg om|vroegen om', 'gevraagd om', 'hebben', 'Ik vraag de buurvrouw om hulp.', 'I ask the neighbour for help.', { theme: 'communication', stage: 2, id: 'vragen-om' });
  N('pakketje', 'het', 'pakketjes', 'parcel', 'Er is een pakketje voor u bezorgd.', 'A parcel was delivered for you.', { theme: 'daily', stage: 2 });
  N('post', 'de', null, 'mail', 'De post komt om elf uur.', 'The mail comes at eleven.', { theme: 'daily', stage: 2 });
  N('brievenbus', 'de', 'brievenbussen', 'letterbox', 'Het ligt in je brievenbus.', 'It is in your letterbox.', { theme: 'daily', stage: 2 });
  N('deurbel', 'de', 'deurbellen', 'doorbell', 'De deurbel doet het niet.', 'The doorbell is not working.', { theme: 'housing', stage: 2 });
  N('hulp', 'de', null, 'help', 'Bedankt voor je hulp.', 'Thanks for your help.', { theme: 'basics', stage: 2 });
  N('feestje', 'het', 'feestjes', 'small party', 'We geven zaterdag een feestje.', 'We are having a small party on Saturday.', { theme: 'leisure', stage: 2 });
  W('aardig', 'nice / kind', 'adj', 'De nieuwe buurman is aardig.', 'The new neighbour is nice.', { theme: 'people', stage: 2 });
  W('gezellig', 'cosy / convivial', 'adj', 'Het was gezellig gisteren!', 'It was a lovely evening yesterday!', { theme: 'feelings', stage: 2, note: 'The untranslatable Dutch word: cosy, pleasant company, a good atmosphere.' });

  N('burgerservicenummer', 'het', 'burgerservicenummers', 'citizen service number (BSN)', 'Zonder BSN kun je geen bankrekening openen.', 'Without a BSN you cannot open a bank account.', { theme: 'bureaucracy', stage: 2, altNl: ['BSN'] });
  N('formulier', 'het', 'formulieren', 'form', 'Vul het formulier in.', 'Fill in the form.', { theme: 'bureaucracy', stage: 2 });
  N('inschrijving', 'de', 'inschrijvingen', 'registration', 'De inschrijving bij de gemeente is verplicht.', 'Registration with the municipality is compulsory.', { theme: 'bureaucracy', stage: 2 });
  N('verblijfsvergunning', 'de', 'verblijfsvergunningen', 'residence permit', 'Ik moet mijn verblijfsvergunning verlengen.', 'I have to renew my residence permit.', { theme: 'bureaucracy', stage: 2 });
  N('stadsdeel', 'het', 'stadsdelen', 'city district', 'Ik woon in stadsdeel West.', 'I live in the West district.', { theme: 'bureaucracy', stage: 2 });
  N('loket', 'het', 'loketten', 'counter / service desk', 'Ga naar loket drie.', 'Go to counter three.', { theme: 'bureaucracy', stage: 2 });
  N('uittreksel', 'het', 'uittreksels', 'extract (official copy)', 'Ik heb een uittreksel uit de BRP nodig.', 'I need an extract from the population register.', { theme: 'bureaucracy', stage: 2 });
  N('handtekening', 'de', 'handtekeningen', 'signature', 'Zet hier uw handtekening.', 'Sign here.', { theme: 'bureaucracy', stage: 2 });
  N('identiteitskaart', 'de', 'identiteitskaarten', 'ID card', 'Neem uw identiteitskaart of paspoort mee.', 'Bring your ID card or passport.', { theme: 'bureaucracy', stage: 2 });
  N('bewijs', 'het', 'bewijzen', 'proof', 'Heeft u een bewijs van uw adres?', 'Do you have proof of your address?', { theme: 'bureaucracy', stage: 2 });
  N('DigiD', 'de', null, 'DigiD (digital ID login)', 'Met DigiD log je in bij de overheid.', 'With DigiD you log in to government services.', { theme: 'bureaucracy', stage: 2, id: 'digid' });
  N('belasting', 'de', 'belastingen', 'tax', 'De gemeentebelasting betaal je elk jaar.', 'You pay the municipal tax every year.', { theme: 'bureaucracy', stage: 2 });
  N('termijn', 'de', 'termijnen', 'term / deadline / instalment', 'De termijn is vier weken.', 'The term is four weeks.', { theme: 'bureaucracy', stage: 2 });
  VB('aanvragen', 'to apply for', 'vraag aan|vraagt aan|vragen aan', 'vroeg aan|vroegen aan', 'aangevraagd', 'hebben', 'Ik heb een parkeervergunning aangevraagd.', 'I applied for a parking permit.', { theme: 'bureaucracy', stage: 2 });
  VB('verlengen', 'to extend / renew', 'verleng|verlengt|verlengen', 'verlengde|verlengden', 'verlengd', 'hebben', 'Ik wil mijn paspoort verlengen.', 'I want to renew my passport.', { theme: 'bureaucracy', stage: 2 });
  VB('invullen', 'to fill in', 'vul in|vult in|vullen in', 'vulde in|vulden in', 'ingevuld', 'hebben', 'Vul uw naam en BSN in.', 'Fill in your name and BSN.', { theme: 'bureaucracy', stage: 2 });
  VB('ondertekenen', 'to sign', 'onderteken|ondertekent|ondertekenen', 'ondertekende|ondertekenden', 'ondertekend', 'hebben', 'Onderteken het formulier onderaan.', 'Sign the form at the bottom.', { theme: 'bureaucracy', stage: 2 });
  VB('ophalen', 'to pick up / collect', 'haal op|haalt op|halen op', 'haalde op|haalden op', 'opgehaald', 'hebben', 'U kunt uw paspoort over een week ophalen.', 'You can collect your passport in a week.', { theme: 'daily', stage: 2 });
  W('geldig', 'valid', 'adj', 'Uw paspoort is nog twee jaar geldig.', 'Your passport is valid for another two years.', { theme: 'bureaucracy', stage: 2 });
  W('verplicht', 'compulsory', 'adj', 'Inschrijven is verplicht.', 'Registering is compulsory.', { theme: 'bureaucracy', stage: 2 });
  W('nodig', 'necessary / needed', 'adj', 'Wat heb ik nodig?', 'What do I need?', { theme: 'basics', stage: 2, note: 'nodig hebben = to need.' });

  W('geachte', 'dear (formal letter opening)', 'adj', 'Geachte heer, mevrouw,', 'Dear Sir or Madam,', { theme: 'letters', stage: 2 });
  W('hierbij', 'hereby / enclosed', 'adv', 'Hierbij ontvangt u uw nieuwe pas.', 'Enclosed you receive your new card.', { theme: 'letters', stage: 2 });
  N('betreft', 'de', null, 'subject / re: (in a letter)', 'Betreft: uw aanvraag parkeervergunning', 'Re: your parking permit application', { theme: 'letters', stage: 2, gender: 'de', id: 'betreft' });
  N('bijlage', 'de', 'bijlagen', 'attachment / enclosure', 'Zie de bijlage.', 'See the attachment.', { theme: 'letters', stage: 2 });
  W('uiterlijk', 'at the latest', 'adv', 'Reageer uiterlijk 30 juni.', 'Respond by 30 June at the latest.', { theme: 'letters', stage: 2 });
  N('bezwaar', 'het', 'bezwaren', 'objection', 'U kunt binnen zes weken bezwaar maken.', 'You can lodge an objection within six weeks.', { theme: 'bureaucracy', stage: 2 });
  N('boete', 'de', 'boetes', 'fine', 'Ik heb een boete gekregen.', 'I got a fine.', { theme: 'bureaucracy', stage: 2 });
  N('vergunning', 'de', 'vergunningen', 'permit', 'Voor een terras heb je een vergunning nodig.', 'You need a permit for a terrace.', { theme: 'bureaucracy', stage: 2 });
  N('parkeervergunning', 'de', 'parkeervergunningen', 'parking permit', 'De wachttijd voor een parkeervergunning is lang.', 'The waiting time for a parking permit is long.', { theme: 'bureaucracy', stage: 2 });
  N('aanvraag', 'de', 'aanvragen', 'application', 'Uw aanvraag is ontvangen.', 'Your application has been received.', { theme: 'bureaucracy', stage: 2 });
  N('beslissing', 'de', 'beslissingen', 'decision', 'U ontvangt binnen acht weken een beslissing.', 'You will receive a decision within eight weeks.', { theme: 'bureaucracy', stage: 2 });
  N('wachtlijst', 'de', 'wachtlijsten', 'waiting list', 'U staat op de wachtlijst.', 'You are on the waiting list.', { theme: 'bureaucracy', stage: 2 });
  VB('reageren', 'to respond', 'reageer|reageert|reageren', 'reageerde|reageerden', 'gereageerd', 'hebben', 'Ik heb nog niet gereageerd op de brief.', 'I have not responded to the letter yet.', { theme: 'communication', stage: 2 });
  VB('ontvangen', 'to receive', 'ontvang|ontvangt|ontvangen', 'ontving|ontvingen', 'ontvangen', 'hebben', 'Ik heb uw brief ontvangen.', 'I received your letter.', { theme: 'communication', stage: 2 });
  VB('toewijzen', 'to allocate / assign', 'wijs toe|wijst toe|wijzen toe', 'wees toe|wezen toe', 'toegewezen', 'hebben', 'De gemeente heeft ons een parkeerplek toegewezen.', 'The municipality allocated us a parking space.', { theme: 'bureaucracy', stage: 2 });
  PH('contact opnemen met', 'to contact', 'Neem contact op met de gemeente.', 'Contact the municipality.', { theme: 'communication', stage: 2, id: 'ph-contact-opnemen' });
  PH('Met vriendelijke groet,', 'Kind regards,', 'Met vriendelijke groet, Anna de Vries', 'Kind regards, Anna de Vries', { theme: 'letters', stage: 2, id: 'ph-mvg' });
  PH('Hoogachtend,', 'Yours faithfully,', 'Hoogachtend, J. Bakker', 'Yours faithfully, J. Bakker', { theme: 'letters', stage: 2, id: 'ph-hoogachtend' });
  W('telefonisch', 'by phone', 'adv', 'U kunt ook telefonisch een afspraak maken.', 'You can also make an appointment by phone.', { theme: 'communication', stage: 2 });

  /* ---------------- Unit 4 lessons ---------------- */
  const u4 = [];
  u4.push(lesson('s2u4l1', 'Finding a place: er is, er zijn and the other er', 'You can describe a home, ask what there is and where things are, and use er in its five jobs: er is, er (there), er + number, er + preposition.', [
    h('er: one word, several jobs'),
    table(['job', 'example', 'English'], [['1. there is / are', '*Er is een lift.', 'There is a lift.'], ['2. there (place, unstressed)', '*Ik woon er al een jaar.', 'I have lived there for a year.'], ['3. with a number', '*Hoeveel kamers? Ik heb er drie.', 'How many rooms? I have three.'], ['4. + preposition', '*Wat vind je ervan?', 'What do you think of it?'], ['5. placeholder', '*Er wordt gebeld.', 'Someone is ringing.']]),
    p('**Job 1**: introduces something new. `Er is een probleem.` `Zijn er nog woningen vrij?` `Er zijn geen fietsen in de kelder.`'),
    p('**Job 2**: replaces a place already mentioned. `Ken je die flat? Mijn broer woont er.` Stressed: `daar`.'),
    p('**Job 3**: when a number or quantity stands alone, Dutch **needs** `er`. `Heb je kinderen? Ik heb er twee.` `Zijn er nog kaartjes? Ja, er zijn er nog vijf.` English drops the noun; Dutch replaces it with er.'),
    p('**Job 4**: `er` + preposition replaces "preposition + it": `Ik denk eraan` (I am thinking about it), `Ik ben er blij mee` (I am happy with it), `Wat vind je ervan?` Often split by other words: `Ik heb er geen zin in.`'),
    h('Position'),
    p('`er` comes right after the verb, or right after a pronoun subject: `Ik woon er graag.` `Er zijn twee slaapkamers.` `Gisteren was er een bezichtiging.`'),
    ex(['Er is een bezichtiging om vier uur. Ga je erheen?', 'There is a viewing at four. Are you going (there)?'], ['De woning heeft drie kamers, maar er is geen balkon.', 'The home has three rooms, but there is no balcony.'], ['Hoeveel ramen heeft de woonkamer? Er zijn er twee.', 'How many windows does the living room have? There are two.'], ['De huur is 1200 euro per maand, inclusief. Wat vind je ervan?', 'The rent is 1200 euros a month, all in. What do you think of it?']),
    tip('Test for job 3: if the English sentence ends in a bare number ("I have two"), Dutch needs `er` before it.'),
  ], ['g2-er', 'g1-er-is'], ['woning', 'flat', 'huurder', 'verhuurder', 'huurcontract', 'borg', 'makelaar', 'bezichtiging', 'zolder', 'kelder', 'lift', 'raam', 'buren', 'lawaai', 'overlast', 'verwarming', 'ruim', 'tevreden', 'licht-adj', 'gehorig', 'ph-per-maand'], [
    mc('"Heb je kinderen?" — "Ja, ik heb ___ twee."', ['—', 'er', 'daar'], 1, 'A bare number needs er: ik heb er twee.'),
    mc('"Ken je Utrecht?" — "Ja, ik heb ___ gestudeerd."', ['er', 'het', 'hem'], 0, 'er = there (unstressed place).'),
    mc('"Wat vind je ___?" (of it)', ['van het', 'ervan', 'daar'], 1, 'er + van = ervan; never "van het" for things.'),
    mc('___ is geen lift in het gebouw.', ['Het', 'Er', 'Daar'], 1, 'Introducing something new: er is.'),
    fill('___ zijn twee slaapkamers en een balkon.', ['Er'], 'There are two bedrooms and a balcony.', 'er zijn = there are.'),
    fill('Hoeveel fietsen staan er in de kelder? — ___ staan er vier.', ['Er'], 'How many bikes are in the cellar? — There are four.', 'er (there are) + er (number): both are needed, this gap asks for the first.'),
    fill('Ik woon ___ al twee jaar en ik ben tevreden.', ['er'], 'I have lived there for two years and I am satisfied.', 'er = there, right after the verb.'),
    fill('De buren maken lawaai, ik heb ___ last van.', ['er'], 'The neighbours make noise, I suffer from it.', 'er … van = of it (split).'),
    build('Is there a lift?', 'Is er een lift?', ['Er is', 'daar'], 'Question: Is er …?'),
    build('There is no balcony.', 'Er is geen balkon.', ['niet', 'Het'], 'er is geen + noun.'),
    build('How many rooms are there? There are three.', 'Hoeveel kamers zijn er? Er zijn er drie.', ['daar', 'het'], 'Second sentence: er zijn (there are) + er (of them) + drie.'),
    build('I am happy with it.', 'Ik ben er blij mee.', ['met het', 'ermee'], 'er … mee, split by blij.'),
    tr('en-nl', 'The rent is 1100 euros a month.', ['De huur is 1100 euro per maand.', 'De huur is elfhonderd euro per maand.'], 'per maand.'),
    tr('nl-en', 'De woning is ruim en licht, maar erg gehorig.', ['The home is spacious and bright, but very poorly soundproofed.', 'The flat is spacious and light but you hear everything.'], 'gehorig: you hear the neighbours.'),
    fix('Ik heb twee.', ['Ik heb er twee.'], 'Bare number → er.'),
    fix('Wat vind je van het?', ['Wat vind je ervan?'], 'Things: er + preposition.'),
    dict('Er is een bezichtiging om vier uur.', 'There is a viewing at four.', 'er is; bezichtiging.'),
    listen('Er zijn drie kamers, maar er is geen lift.', ['There are three rooms, but there is no lift.', 'There are three lifts, but no rooms.', 'There is one room with a lift.'], 0, 'er zijn / er is geen.'),
    speak('Mijn woning heeft twee kamers. Er is een balkon, maar er is geen lift.', 'My home has two rooms. There is a balcony, but there is no lift.'),
    free('Describe your home: how many rooms, what there is and is not, and whether you are satisfied.', 'Ik woon in een flat in Oost. Er zijn drie kamers en een klein balkon. Er is geen lift. Ik ben er tevreden mee, maar het is een beetje gehorig.', 'I live in a block of flats in East. There are three rooms and a small balcony. There is no lift. I am satisfied with it, but it is a bit noisy.', { hints: ['Er zijn … kamers', 'Er is (geen) …', 'Ik ben er … mee'] }),
    match([['de huurder', 'tenant'], ['de verhuurder', 'landlord'], ['de borg', 'deposit'], ['de zolder', 'attic'], ['de kelder', 'cellar'], ['de bezichtiging', 'viewing']]),
    auto(3, ['article', 'plural']),
  ], [
    fill('___ is een probleem met de verwarming.', ['Er'], 'There is a problem with the heating.', 'er is.'),
    fill('Heb je broers? — Ja, ik heb ___ één.', ['er'], 'Do you have brothers? — Yes, I have one.', 'Number → er.'),
    mc('"Ik denk ___" (about it)', ['aan het', 'eraan', 'daar'], 1, 'eraan.'),
    build('There are no bikes in the cellar.', 'Er zijn geen fietsen in de kelder.', ['Het', 'niet'], 'er zijn geen.'),
    tr('en-nl', 'I have lived there for a year.', ['Ik woon er al een jaar.', 'Ik woon daar al een jaar.'], 'er / daar = there; al een jaar.'),
    speak('Zijn er nog woningen vrij? Er zijn er nog twee.', 'Are there still homes available? There are still two.'),
  ]));

  u4.push(lesson('s2u4l2', 'The neighbours: object pronouns', 'You can talk to and about your neighbours, borrow and lend things, and use me, je, hem, haar, ons, ze correctly.', [
    h('Object pronouns'),
    table(['subject', 'object (unstressed)', 'object (stressed)', ''], [['ik', '*me', '*mij', 'me'], ['jij', '*je', '*jou', 'you'], ['u', '*u', '*u', 'you (formal)'], ['hij', "*'m", '*hem', 'him'], ['zij', "*'r", '*haar', 'her'], ['het', "*'t", '*het', 'it'], ['wij', '*ons', '*ons', 'us'], ['jullie', '*je', '*jullie', 'you (plural)'], ['zij', '*ze', '*hen / hun', 'them']]),
    p('Default to the **unstressed** forms in speech: `Ik help je even.` `Ken je ze?` Use the stressed forms for contrast and **after prepositions**: `Dit is voor jou.` `Ik ga met hem mee.` `Kom je bij ons eten?`'),
    p('For **things**, never use hem/haar after a preposition: use `er` + preposition (`Ik ben er blij mee`). For a het-word thing use `het`: `Het pakketje? Ik heb het aangenomen.`'),
    h('Position'),
    p('The object pronoun comes right after the finite verb (and after the subject in inversion), **before** time and place: `Ik zie je morgen op de markt.` `Gisteren heb ik hem geholpen.`'),
    h('elkaar, iemand, niemand, iets, niets'),
    p('`We helpen elkaar.` (each other) `Er is iemand aan de deur.` `Niemand doet open.` `Wil je iets drinken?` `Ik heb niets gehoord.`'),
    ex(['Kunt u een pakketje voor mij aannemen? — Natuurlijk, geef het maar aan mij.', 'Could you take in a parcel for me? — Of course, just give it to me.'], ['Mag ik je ladder lenen? Ik breng hem morgen terug.', 'May I borrow your ladder? I will bring it back tomorrow. (de ladder → hem)'], ['We hebben de buren uitgenodigd. Ken je ze?', 'We invited the neighbours. Do you know them?'], ['Stoor ik je? — Nee hoor, kom binnen.', 'Am I disturbing you? — Not at all, come in.']),
    tip('`lenen` works both ways: `lenen van` = borrow from, `lenen aan` / `uitlenen` = lend to. `Mag ik je fiets lenen?` `Ik leen je mijn fiets.`'),
  ], ['g2-object-pronouns'], ['elkaar', 'iemand', 'niemand', 'iets', 'niets', 'allemaal', 'lenen', 'uitlenen', 'storen', 'klagen', 'aannemen', 'vragen-om', 'pakketje', 'post', 'brievenbus', 'deurbel', 'hulp', 'feestje', 'aardig', 'gezellig'], [
    mc('Kun je ___ helpen? (me)', ['ik', 'me', 'mijn'], 1, 'Object: me.'),
    mc('Dit pakketje is voor ___. (you)', ['je', 'jou', 'jij'], 1, 'After a preposition: stressed jou.'),
    mc('Ken je de buren? — Ja, ik ken ___.', ['zij', 'ze', 'hun'], 1, 'Unstressed object for people: ze.'),
    mc('De ladder? Ik heb ___ teruggebracht.', ['hem', 'haar', 'het'], 0, 'de ladder → hem.'),
    mc('Het pakketje? Ik heb ___ aangenomen.', ['hem', 'het', 'die'], 1, 'het pakketje → het.'),
    fill('Mag ik je boor ___? Ik breng hem morgen terug.', ['lenen'], 'May I borrow your drill? I will bring it back tomorrow.', 'lenen = borrow.'),
    fill('We helpen ___ in de buurt. (each other)', ['elkaar'], 'We help each other in the neighbourhood.', 'elkaar = each other.'),
    fill('Er staat ___ voor de deur, maar ik ken hem niet.', ['iemand'], 'There is someone at the door, but I do not know him.', 'iemand = someone.'),
    fill('Ik heb aangebeld, maar ___ deed open.', ['niemand'], 'I rang the bell, but nobody opened.', 'niemand = nobody.'),
    build('Can you take in a parcel for me?', 'Kunt u een pakketje voor mij aannemen?', ['me', 'neemt aan'], 'After voor: stressed mij. aannemen at the end.'),
    build('I will give it to her tomorrow.', 'Ik geef het haar morgen.', ['hem', 'ze'], 'het (the thing) + haar (to her), before morgen.'),
    build('Do you want something to drink?', 'Wil je iets drinken?', ['niets', 'wat'], 'iets = something.'),
    build('Am I disturbing you?', 'Stoor ik je?', ['jou', 'stoort'], 'Question: verb, subject, object je.'),
    tr('en-nl', 'The neighbours complain about the noise.', ['De buren klagen over het lawaai.', 'De buren klagen over de herrie.'], 'klagen over.'),
    tr('nl-en', 'Kom je zaterdag bij ons eten? Het wordt gezellig.', ['Are you coming to eat at ours on Saturday? It will be fun.', 'Will you come and eat with us on Saturday? It will be cosy.'], 'bij ons = at our place; gezellig.'),
    fix('Ik help jij morgen.', ['Ik help je morgen.', 'Ik help jou morgen.'], 'Object form: je / jou.'),
    fix('Ik ga met hij naar het feestje.', ['Ik ga met hem naar het feestje.'], 'After met: hem.'),
    dict('Kun je me morgen even helpen met de kast?', 'Can you help me with the cupboard tomorrow?', 'me after the verb, before morgen.'),
    listen('Er ligt een pakketje voor je in de brievenbus.', ['There is a parcel for you in the letterbox.', 'There is a letter for me in the cellar.', 'Someone rang the doorbell.'], 0, 'pakketje voor je; brievenbus.'),
    speak('Mag ik je ladder lenen? Ik breng hem vanavond terug.', 'May I borrow your ladder? I will bring it back tonight.'),
    free('You meet your new neighbour. Introduce yourself, say something nice, and ask if they can take in a parcel for you tomorrow.', 'Hoi, ik ben Sam, ik woon op nummer 12. Leuk je te ontmoeten! Kun je morgen misschien een pakketje voor mij aannemen? Ik ben de hele dag weg.', 'Hi, I am Sam, I live at number 12. Nice to meet you! Could you maybe take in a parcel for me tomorrow? I am out all day.', { hints: ['Ik ben …, ik woon op …', 'Leuk je te ontmoeten', 'Kun je … voor mij aannemen?'] }),
    auto(3, ['tr-nl-en', 'mc-meaning']),
  ], [
    mc('Ik heb ___ gisteren gezien. (him)', ['hij', 'hem', 'zijn'], 1, 'hem.'),
    mc('Dit is voor ___. (us)', ['wij', 'ons', 'we'], 1, 'After voor: ons.'),
    fill('Ik hoor ___, is de bel kapot? (nothing)', ['niets', 'niks'], 'I hear nothing, is the bell broken?', 'niets / niks.'),
    build('We invited them.', 'We hebben ze uitgenodigd.', ['zij', 'hen'], 'Unstressed: ze. (hen is also correct but stressed.)'),
    tr('en-nl', 'Do you know her?', ['Ken je haar?'], 'haar = her.'),
    speak('Kunt u een pakketje voor mij aannemen? Dank u wel, dat is aardig van u.', 'Could you take in a parcel for me? Thank you, that is kind of you.'),
  ]));

  u4.push(lesson('s2u4l3', 'At the gemeente: om … te and the paperwork', 'You can explain why you have come to the gemeente, understand what you need, and say what you need to do: om … te + infinitive.', [
    h('om … te + infinitive: in order to'),
    p('`Ik ga naar de gemeente **om** me **te** laten inschrijven.` The purpose sits at the end: `om` opens it, `te` goes right before the infinitive, everything else in between. Separable verbs split around te: `om een paspoort **aan te vragen**`.'),
    ex(['Ik ben hier om een verblijfsvergunning aan te vragen.', 'I am here to apply for a residence permit.'], ['Je hebt een BSN nodig om een bankrekening te openen.', 'You need a BSN to open a bank account.'], ['Neem een bewijs van je adres mee om je in te schrijven.', 'Bring proof of your address to register.'], ['Het is verplicht om je binnen vijf dagen in te schrijven.', 'It is compulsory to register within five days.']),
    p('`om … te` also follows adjectives and expressions: `Het is makkelijk om online een afspraak te maken.` `Ik heb geen tijd om te wachten.` `Vergeet niet om te ondertekenen.`'),
    warn('No `te` after modals and after gaan, komen, blijven, laten: `Ik moet me inschrijven.` `Ik ga het formulier invullen.`'),
    h('The paperwork vocabulary'),
    table(['Dutch', 'English'], [['*het BSN (burgerservicenummer)', 'citizen service number'], ['*de inschrijving bij de gemeente', 'registration with the municipality'], ['*de verblijfsvergunning', 'residence permit'], ['*het uittreksel', 'official extract (e.g. proof of address)'], ['*het formulier invullen', 'to fill in the form'], ['*ondertekenen / de handtekening', 'to sign / the signature'], ['*aanvragen / verlengen', 'to apply for / to renew'], ['*DigiD', 'your digital login for government sites'], ['*het loket', 'the counter'], ['*geldig / verplicht', 'valid / compulsory']]),
    ex(['Waarvoor komt u? — Om mijn paspoort te verlengen.', 'What are you here for? — To renew my passport.'], ['Heeft u een geldig identiteitsbewijs bij u?', 'Do you have valid ID with you?'], ['Vult u dit formulier in en ondertekent u het onderaan.', 'Fill in this form and sign it at the bottom.'], ['U kunt uw paspoort over vijf werkdagen ophalen.', 'You can collect your passport in five working days.']),
    tip('Almost every gemeente task starts online with DigiD: `Ik heb online een afspraak gemaakt om …`. Knowing that sentence saves you a queue.'),
  ], ['g2-om-te', 'g2-two-verbs'], ['burgerservicenummer', 'formulier', 'inschrijving', 'verblijfsvergunning', 'stadsdeel', 'loket', 'uittreksel', 'handtekening', 'identiteitskaart', 'bewijs', 'digid', 'belasting', 'termijn', 'aanvragen', 'verlengen', 'invullen', 'ondertekenen', 'ophalen', 'geldig', 'verplicht', 'nodig'], [
    mc('Ik ben hier ___ een paspoort aan te vragen.', ['voor', 'om', 'te'], 1, 'Purpose: om … te.'),
    mc('Je hebt een BSN nodig om een rekening ___.', ['te openen', 'openen', 'om openen'], 0, 'te directly before the infinitive.'),
    mc('Ik ga naar de gemeente om me ___.', ['in te schrijven', 'te inschrijven', 'inschrijven te'], 0, 'Separable verb splits: in te schrijven.'),
    mc('Which sentence is correct?', ['Ik moet te werken.', 'Ik moet werken.', 'Ik moet om te werken.'], 1, 'No te after a modal.'),
    fill('Ik ben hier ___ mijn verblijfsvergunning te verlengen.', ['om'], 'I am here to renew my residence permit.', 'om opens the purpose phrase.'),
    fill('Neem een bewijs van uw adres mee om u in ___ schrijven.', ['te'], 'Bring proof of your address to register.', 'in te schrijven: te between prefix and verb.'),
    fill('Vergeet niet het formulier te ___. (sign)', ['ondertekenen'], 'Do not forget to sign the form.', 'ondertekenen = to sign.'),
    fill('Is uw paspoort nog ___?', ['geldig'], 'Is your passport still valid?', 'geldig = valid.'),
    build('I am here to apply for a parking permit.', 'Ik ben hier om een parkeervergunning aan te vragen.', ['te aanvragen', 'voor'], 'aan te vragen: split around te.'),
    build('You need DigiD to make an appointment online.', 'Je hebt DigiD nodig om online een afspraak te maken.', ['maken te', 'voor'], 'nodig hebben om … te maken.'),
    build('Fill in the form and sign at the bottom.', 'Vul het formulier in en onderteken onderaan.', ['invul', 'ondertekent'], 'Imperatives: vul … in; onderteken.'),
    build('It is compulsory to register within five days.', 'Het is verplicht om je binnen vijf dagen in te schrijven.', ['te inschrijven', 'moet'], 'verplicht om … in te schrijven.'),
    tr('en-nl', 'What do I need to apply for a BSN?', ['Wat heb ik nodig om een BSN aan te vragen?', 'Wat heb ik nodig om een burgerservicenummer aan te vragen?'], 'nodig hebben om … aan te vragen.'),
    tr('nl-en', 'U kunt uw identiteitskaart over een week ophalen bij loket drie.', ['You can collect your ID card in a week at counter three.', 'You can pick up your ID card at counter three in a week.'], 'ophalen = collect; loket = counter.'),
    fix('Ik ben hier voor te verlengen mijn paspoort.', ['Ik ben hier om mijn paspoort te verlengen.'], 'om … te; the object goes between om and te.'),
    fix('Ik wil te inschrijven.', ['Ik wil me inschrijven.'], 'No te after willen; inschrijven is reflexive.'),
    dict('Ik heb online een afspraak gemaakt om mijn paspoort te verlengen.', 'I made an appointment online to renew my passport.', 'om … te verlengen.'),
    listen('Heeft u een geldig identiteitsbewijs en een bewijs van uw adres bij u?', ['Do you have valid ID and proof of your address with you?', 'Do you have your passport and your bank card?', 'Do you have an appointment?'], 0, 'geldig identiteitsbewijs; bewijs van uw adres.'),
    speak('Goedemorgen, ik ben hier om me in te schrijven. Ik heb mijn paspoort en mijn huurcontract bij me.', 'Good morning, I am here to register. I have my passport and my rental contract with me.'),
    read('Verhuisd naar Amsterdam? Dan moet u zich binnen vijf dagen inschrijven bij de gemeente. Maak online een afspraak met uw DigiD. Neem mee: een geldig paspoort of identiteitskaart, uw huurcontract of koopakte, en als u uit het buitenland komt ook uw geboorteakte. Na de inschrijving ontvangt u uw burgerservicenummer (BSN). Het BSN heeft u nodig om te werken, een zorgverzekering af te sluiten en een bankrekening te openen.', [
      { q: 'Within how many days must you register?', options: ['5', '14', '30'], answer: 0, explain: '"binnen vijf dagen".' },
      { q: 'What extra document do people from abroad need?', options: ['a work contract', 'a birth certificate', 'a bank statement'], answer: 1, explain: '"ook uw geboorteakte".' },
      { q: 'What do you need the BSN for?', options: ['only for tax', 'to work, get insurance and open a bank account', 'to get a parking permit'], answer: 1, explain: '"om te werken, een zorgverzekering af te sluiten en een bankrekening te openen".' },
    ], { en: 'Moved to Amsterdam? Then you must register with the municipality within five days. Make an appointment online with your DigiD. Bring: a valid passport or ID card, your rental contract or deed of purchase, and if you come from abroad also your birth certificate. After registration you receive your citizen service number (BSN). You need the BSN to work, to take out health insurance and to open a bank account.' }),
    auto(3, ['article', 'conj']),
  ], [
    mc('Ik ga naar de apotheek ___ medicijnen te halen.', ['om', 'voor', 'te'], 0, 'om … te.'),
    fill('Je hebt een afspraak nodig om je paspoort ___ verlengen.', ['te'], 'You need an appointment to renew your passport.', 'te + infinitive.'),
    build('I am here to renew my residence permit.', 'Ik ben hier om mijn verblijfsvergunning te verlengen.', ['voor', 'verleng'], 'om … te verlengen.'),
    build('Bring a valid passport.', 'Neem een geldig paspoort mee.', ['geldige', 'meeneem'], 'een geldig paspoort (het-word); neem … mee.'),
    tr('en-nl', 'Sign here, please.', ['Onderteken hier, alstublieft.', 'Zet hier uw handtekening, alstublieft.'], 'ondertekenen / handtekening zetten.'),
    speak('Waarvoor komt u? — Om een uittreksel aan te vragen.', 'What are you here for? — To apply for an extract.'),
  ]));

  u4.push(lesson('s2u4l4', 'Letters from the gemeente: reading and replying', 'You can understand an official letter (who, what, by when), spot the deadline and the action, and write a short formal reply.', [
    h('Anatomy of an official letter'),
    table(['part', 'what you see', 'what it means'], [['opening', '*Geachte heer/mevrouw De Vries,', 'Dear Mr/Ms De Vries,'], ['subject', '*Betreft: uw aanvraag parkeervergunning', 'Re: your parking permit application'], ['why they write', '*Hierbij ontvangt u … / Wij hebben uw aanvraag ontvangen.', 'Enclosed you receive … / We have received your application.'], ['the decision', '*Uw aanvraag is toegewezen / afgewezen.', 'Your application has been granted / rejected.'], ['the action', '*Wij verzoeken u om … / U moet …', 'We request you to … / You must …'], ['the deadline', '*uiterlijk 30 juni / binnen zes weken', 'by 30 June at the latest / within six weeks'], ['objection', '*U kunt binnen zes weken bezwaar maken.', 'You can object within six weeks.'], ['contact', '*Neem contact op met … / telefonisch via 14 020', 'Contact … / by phone via 14 020'], ['closing', '*Met vriendelijke groet, / Hoogachtend,', 'Kind regards, / Yours faithfully,']]),
    h('Reading strategy'),
    list('Find **Betreft**: what is it about?', 'Find the verb of decision: `toegewezen` (granted), `afgewezen` (rejected), `ontvangen` (received), `verlengd` (extended).', 'Find **uiterlijk** or **binnen**: that is your deadline.', 'Find `u moet`, `wij verzoeken u`, `stuur`, `betaal`: that is your action.', 'Everything else can wait.'),
    h('Writing a short reply'),
    p('Formal register: `u`, no contractions, short sentences. Open with `Geachte heer/mevrouw,`, state the subject (`Betreft: …`), say why you write (`Hierbij reageer ik op uw brief van 3 juni.`), what you ask or send (`In de bijlage vindt u …`), close with `Met vriendelijke groet,` and your name.'),
    ex(['Geachte mevrouw Jansen, hierbij reageer ik op uw brief van 12 mei over mijn aanvraag.', 'Dear Ms Jansen, I am writing in response to your letter of 12 May about my application.'], ['In de bijlage vindt u een kopie van mijn huurcontract.', 'Enclosed you will find a copy of my rental contract.'], ['Ik verzoek u vriendelijk om de termijn te verlengen.', 'I kindly request you to extend the deadline.'], ['Met vriendelijke groet, Sam Taylor', 'Kind regards, Sam Taylor']),
    tip('`Hoogachtend` is very formal (letters to authorities, complaints). `Met vriendelijke groet` is the safe default for everything, including the gemeente.'),
  ], ['g2-subordinate', 'g2-om-te'], ['geachte', 'hierbij', 'betreft', 'bijlage', 'uiterlijk', 'bezwaar', 'boete', 'vergunning', 'parkeervergunning', 'aanvraag', 'beslissing', 'wachtlijst', 'reageren', 'ontvangen', 'toewijzen', 'ph-contact-opnemen', 'ph-mvg', 'ph-hoogachtend', 'telefonisch'], [
    mc('"Uw aanvraag is toegewezen" means', ['your application was rejected', 'your application was granted', 'your application is on a waiting list'], 1, 'toewijzen = to grant / allocate.'),
    mc('"Uiterlijk 30 juni" means', ['from 30 June', 'by 30 June at the latest', 'around 30 June'], 1, 'uiterlijk = at the latest.'),
    mc('"U kunt binnen zes weken bezwaar maken" means', ['you must pay within six weeks', 'you can object within six weeks', 'you will hear within six weeks'], 1, 'bezwaar maken = to lodge an objection.'),
    mc('The safe closing for a letter to the gemeente:', ['Groetjes,', 'Met vriendelijke groet,', 'Doei,'], 1, 'Formal but friendly.'),
    art('bezwaar', 'het', 'het bezwaar.'),
    art('bijlage', 'de', 'de bijlage.'),
    art('aanvraag', 'de', 'de aanvraag.'),
    fill('___: uw aanvraag parkeervergunning', ['Betreft'], 'Re: your parking permit application', 'Betreft = subject line.'),
    fill('___ ontvangt u uw nieuwe identiteitskaart.', ['Hierbij'], 'Enclosed you receive your new ID card.', 'hierbij = herewith / enclosed.'),
    fill('In de ___ vindt u een kopie van mijn huurcontract.', ['bijlage'], 'Enclosed you will find a copy of my rental contract.', 'bijlage = attachment.'),
    fill('Ik heb nog niet ___ op de brief. (reageren)', ['gereageerd'], 'I have not responded to the letter yet.', 'reageren → gereageerd (reageer + d).'),
    build('I am writing in response to your letter of 3 June.', 'Hierbij reageer ik op uw brief van 3 juni.', ['jouw', 'reageert'], 'Hierbij first, then reageer ik.'),
    build('I kindly request you to extend the deadline.', 'Ik verzoek u vriendelijk om de termijn te verlengen.', ['verlengen te', 'jij'], 'verzoeken om … te verlengen.'),
    build('You can object within six weeks.', 'U kunt binnen zes weken bezwaar maken.', ['kan', 'maakt'], 'u kunt … bezwaar maken.'),
    build('Contact the municipality by phone.', 'Neem telefonisch contact op met de gemeente.', ['opneem', 'bel'], 'contact opnemen met: neem … contact op met.'),
    tr('en-nl', 'Dear Sir or Madam,', ['Geachte heer, mevrouw,', 'Geachte heer/mevrouw,', 'Geachte heer of mevrouw,'], 'Standard opening.'),
    tr('nl-en', 'U ontvangt binnen acht weken een beslissing.', ['You will receive a decision within eight weeks.', 'You receive a decision within eight weeks.'], 'beslissing = decision.'),
    fix('Geachte meneer Bakker, hoi!', ['Geachte heer Bakker,'], 'Formal: Geachte heer + surname, and no "hoi".'),
    dict('Wij verzoeken u om uiterlijk 15 maart te reageren.', 'We request you to respond by 15 March at the latest.', 'verzoeken om … te reageren; uiterlijk.'),
    listen('Uw aanvraag is afgewezen. U kunt binnen zes weken bezwaar maken.', ['Your application was rejected. You can object within six weeks.', 'Your application was granted. You can collect it within six weeks.', 'Your application is on a waiting list for six weeks.'], 0, 'afgewezen = rejected; bezwaar maken.'),
    speak('Geachte mevrouw De Vries, hierbij reageer ik op uw brief van twaalf mei.', 'Dear Ms De Vries, I am writing in response to your letter of 12 May.'),
    read('Gemeente Amsterdam. Betreft: uw aanvraag parkeervergunning. Geachte heer Taylor, Wij hebben uw aanvraag voor een parkeervergunning in stadsdeel Oost ontvangen. Op dit moment is er een wachtlijst. U staat op plaats 41. De verwachte wachttijd is drie tot vijf maanden. Wij verzoeken u om uiterlijk 1 juli een kopie van uw kentekenbewijs te sturen. Zonder dit document kunnen wij uw aanvraag niet verwerken. Heeft u vragen? Neem dan contact op via telefoonnummer 14 020 of via de website. Met vriendelijke groet, Afdeling Parkeren', [
      { q: 'What is the status of the application?', options: ['granted', 'rejected', 'on a waiting list'], answer: 2, explain: '"er is een wachtlijst. U staat op plaats 41."' },
      { q: 'What must Mr Taylor do, and by when?', options: ['pay a fine by 1 July', 'send a copy of the vehicle registration by 1 July', 'call before 1 July'], answer: 1, explain: '"uiterlijk 1 juli een kopie van uw kentekenbewijs te sturen".' },
      { q: 'What happens without the document?', options: ['he gets a fine', 'the application cannot be processed', 'he loses his place on the list'], answer: 1, explain: '"kunnen wij uw aanvraag niet verwerken".' },
    ], { en: 'Municipality of Amsterdam. Re: your parking permit application. Dear Mr Taylor, We have received your application for a parking permit in the East district. At the moment there is a waiting list. You are at position 41. The expected waiting time is three to five months. We request you to send a copy of your vehicle registration by 1 July at the latest. Without this document we cannot process your application. Do you have questions? Then contact us via phone number 14 020 or via the website. Kind regards, Parking Department' }),
    write('Write a short formal reply (4 to 6 sentences) to the letter above: say you are responding, send the requested document as an attachment, ask whether the waiting time can be shortened, and close politely.', ['Opens with Geachte heer/mevrouw,', 'Uses Betreft or refers to the letter (uw brief van …)', 'Mentions the attachment (in de bijlage)', 'Contains one polite request (Ik verzoek u … / Kunt u …?)', 'Uses u throughout, not je', 'Closes with Met vriendelijke groet, + name'], 'Geachte heer, mevrouw, Betreft: mijn aanvraag parkeervergunning. Hierbij reageer ik op uw brief van 10 juni. In de bijlage vindt u een kopie van mijn kentekenbewijs. Kunt u mij laten weten of de wachttijd korter kan worden? Ik werk in de nacht en heb de auto nodig. Met vriendelijke groet, Sam Taylor'),
  ], [
    mc('"Afgewezen" means', ['granted', 'rejected', 'received'], 1, 'afwijzen = to reject.'),
    fill('___ vindt u een kopie van mijn paspoort. (Enclosed)', ['Hierbij'], 'Enclosed you will find a copy of my passport.', 'hierbij.'),
    build('Respond by 30 June at the latest.', 'Reageer uiterlijk 30 juni.', ['voor', 'reageert'], 'Imperative reageer; uiterlijk.'),
    tr('en-nl', 'Kind regards,', ['Met vriendelijke groet,', 'Met vriendelijke groeten,'], 'Standard closing.'),
    listen('Wij hebben uw brief ontvangen en u ontvangt binnen vier weken een beslissing.', ['We received your letter and you will get a decision within four weeks.', 'We did not receive your letter; please send it within four weeks.', 'Your decision was sent four weeks ago.'], 0, 'ontvangen; binnen vier weken een beslissing.'),
    speak('Ik verzoek u vriendelijk om contact met mij op te nemen. Met vriendelijke groet, Sam.', 'I kindly request you to contact me. Kind regards, Sam.'),
  ]));

  units.push(unit('s2u4', 'Wonen en de gemeente', 'housing and the gemeente', u4, [
    fill('___ is een probleem met de lift.', ['Er'], 'There is a problem with the lift.', 'er is.'),
    fill('Hoeveel kamers heb je? — Ik heb ___ drie.', ['er'], 'How many rooms do you have? — I have three.', 'Number → er.'),
    fill('Ik ben hier ___ me in te schrijven.', ['om'], 'I am here to register.', 'om … te.'),
    mc('Dit pakketje is voor ___. (him)', ['hij', 'hem', 'zijn'], 1, 'After voor: hem.'),
    mc('"Uiterlijk" means', ['at the latest', 'at the earliest', 'usually'], 0, 'uiterlijk = at the latest.'),
    art('formulier', 'het', 'het formulier.'),
    art('vergunning', 'de', 'de vergunning: -ing = de.'),
    build('Can you take in a parcel for me?', 'Kun je een pakketje voor mij aannemen?', ['me', 'neem aan'], 'voor mij; aannemen at the end.'),
    build('You need a BSN to open a bank account.', 'Je hebt een BSN nodig om een bankrekening te openen.', ['voor', 'openen te'], 'nodig om … te openen.'),
    build('What do you think of it?', 'Wat vind je ervan?', ['van het', 'daarvan'], 'ervan.'),
    fix('Ik woon daar er graag.', ['Ik woon er graag.', 'Ik woon daar graag.'], 'er or daar, not both.'),
    fix('Ik ga naar de gemeente voor te verlengen mijn paspoort.', ['Ik ga naar de gemeente om mijn paspoort te verlengen.'], 'om … te.'),
    tr('en-nl', 'Do you have valid ID with you?', ['Heeft u een geldig identiteitsbewijs bij u?', 'Heb je een geldig identiteitsbewijs bij je?'], 'geldig identiteitsbewijs; bij u.'),
    listen('Er is een wachtlijst, dus u ontvangt over drie maanden een beslissing.', ['There is a waiting list, so you will get a decision in three months.', 'There is no waiting list; you get a decision today.', 'You have been on the waiting list for three months.'], 0, 'wachtlijst; over drie maanden.'),
    speak('Ik ben hier om een uittreksel aan te vragen. Ik heb mijn paspoort bij me.', 'I am here to apply for an extract. I have my passport with me.'),
  ]));
})();
