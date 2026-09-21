/* Stage 4 (B2) — extra lessons for Unit 3 (Werk en carrière) and Unit 4 (Cultuur en media): lessons 3 to 5 of each unit.
   Loaded after stage4-extra-a.js; lessons are appended to the existing units. */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson } = A;
  const addTo = (unitId, l) => { const f = A.findUnit(unitId); if (f) f.unit.lessons.push(l); };
  const S = { stage: 4 };

  /* ================= Unit 3, lesson 3: labour law and contracts ================= */
  N('arbeidsovereenkomst', 'de', 'arbeidsovereenkomsten', 'employment contract', 'De arbeidsovereenkomst wordt voor onbepaalde tijd aangegaan.', 'The employment contract is entered into for an indefinite period.', { theme: 'law', ...S });
  N('cao', 'de', "cao's", 'collective labour agreement', 'Volgens de cao heb je recht op een dertiende maand.', 'According to the collective agreement you are entitled to a thirteenth month.', { theme: 'law', ...S });
  N('opzegtermijn', 'de', 'opzegtermijnen', 'notice period', 'De opzegtermijn bedraagt één maand.', 'The notice period is one month.', { theme: 'law', ...S });
  N('concurrentiebeding', 'het', 'concurrentiebedingen', 'non-compete clause', 'Let op het concurrentiebeding in je contract.', 'Watch out for the non-compete clause in your contract.', { theme: 'law', ...S });
  N('transitievergoeding', 'de', 'transitievergoedingen', 'severance payment', 'Bij ontslag heb je meestal recht op een transitievergoeding.', 'On dismissal you are usually entitled to a severance payment.', { theme: 'law', ...S });
  N('vakbond', 'de', 'vakbonden', 'trade union', 'De vakbond onderhandelt over de cao.', 'The trade union negotiates the collective agreement.', { theme: 'law', ...S });
  N('ondernemingsraad', 'de', 'ondernemingsraden', 'works council', 'De ondernemingsraad moet instemmen met de reorganisatie.', 'The works council must agree to the reorganisation.', { theme: 'law', ...S });
  N('ontslagvergoeding', 'de', 'ontslagvergoedingen', 'redundancy pay', 'Over de ontslagvergoeding wordt nog onderhandeld.', 'The redundancy pay is still being negotiated.', { theme: 'law', ...S });
  N('vaststellingsovereenkomst', 'de', 'vaststellingsovereenkomsten', 'settlement agreement', 'Teken een vaststellingsovereenkomst nooit zonder advies.', 'Never sign a settlement agreement without advice.', { theme: 'law', ...S });
  N('bepaling', 'de', 'bepalingen', 'provision / clause', 'Deze bepaling is in strijd met de wet.', 'This provision is contrary to the law.', { theme: 'law', ...S });
  N('werknemer', 'de', 'werknemers', 'employee', 'De werknemer is verplicht geheimhouding te betrachten.', 'The employee is obliged to observe confidentiality.', { theme: 'law', ...S });
  VB('opzeggen', 'to terminate / give notice', 'zeg op|zegt op|zeggen op', 'zegde op|zegden op', 'opgezegd', 'hebben', 'Je moet schriftelijk opzeggen.', 'You have to give notice in writing.', { theme: 'law', ...S });
  VB('ontbinden', 'to dissolve', 'ontbind|ontbindt|ontbinden', 'ontbond|ontbonden', 'ontbonden', 'hebben', 'De rechter heeft het contract ontbonden.', 'The court dissolved the contract.', { theme: 'law', ...S });
  VB('bedragen', 'to amount to', 'bedraag|bedraagt|bedragen', 'bedroeg|bedroegen', 'bedragen', 'hebben', 'De proeftijd bedraagt maximaal twee maanden.', 'The probation period is two months at most.', { theme: 'law', ...S });
  VB('verlengen', 'to extend / renew', 'verleng|verlengt|verlengen', 'verlengde|verlengden', 'verlengd', 'hebben', 'Het contract wordt stilzwijgend verlengd.', 'The contract is tacitly renewed.', { theme: 'law', ...S });
  VB('zich beroepen op', 'to invoke / rely on', 'beroep me op|beroept zich op|beroepen ons op', 'beriep me op|beriepen ons op', 'beroepen op', 'hebben', 'De werkgever beroept zich op het concurrentiebeding.', 'The employer is invoking the non-compete clause.', { theme: 'law', ...S, id: 'zich-beroepen-op' });
  W('onbepaalde tijd', 'indefinite period (permanent)', 'noun', 'Na drie tijdelijke contracten volgt een contract voor onbepaalde tijd.', 'After three temporary contracts a permanent contract follows.', { theme: 'law', ...S, id: 'onbepaalde-tijd', gender: 'de', plural: null });
  W('stilzwijgend', 'tacit(ly)', 'adj', 'Het abonnement wordt stilzwijgend verlengd.', 'The subscription is tacitly renewed.', { theme: 'law', ...S });
  W('rechtsgeldig', 'legally valid', 'adj', 'Een mondelinge afspraak is ook rechtsgeldig, maar moeilijk te bewijzen.', 'A verbal agreement is also legally valid, but hard to prove.', { theme: 'law', ...S });
  W('tenzij', 'unless', 'conj', 'Het beding geldt, tenzij de rechter het vernietigt.', 'The clause applies, unless the court annuls it.', { theme: 'law', ...S });

  addTo('s4u3', lesson('s4u3l3', 'Reading your contract: Dutch labour law in plain words', 'You can read an employment contract and a letter about dismissal, translate legal Dutch into everyday Dutch, and ask the right questions before you sign.', [
    h('Legal Dutch is formal Dutch at full strength'),
    table(['legal', 'everyday', 'English'], [['*de werknemer is gehouden / verplicht', '*je moet', 'you must'], ['*bedraagt', '*is', 'amounts to'], ['*wordt aangegaan voor', '*is voor', 'is entered into for'], ['*met inachtneming van', '*rekening houdend met', 'with due observance of'], ['*in strijd met', '*tegen', 'contrary to'], ['*behoudens', '*behalve', 'except for'], ['*alsmede', '*en ook', 'as well as'], ['*ten gevolge van', '*door', 'as a result of']]),
    h('The things that matter in a Dutch contract'),
    list('`bepaalde tijd` or `onbepaalde tijd` (temporary or permanent). After three temporary contracts or three years you normally get a permanent one.', '`proeftijd`: must be in writing; none at all in contracts of six months or less.', '`opzegtermijn`: for you usually one month.', '`cao`: if there is one, it overrides much of your individual contract.', '`concurrentiebeding`: only valid in writing, and in a temporary contract only with a written justification.', '`transitievergoeding`: owed from day one if the employer ends the contract.', '`vaststellingsovereenkomst`: dismissal "by mutual consent". Get advice first; you have 14 days to change your mind.'),
    warn('This lesson teaches the language. Rules change; for a real contract ask the `Juridisch Loket` (free), your `vakbond` or a lawyer.'),
    h('Conditions in legal Dutch'),
    p('`mits` (provided that), `tenzij` (unless), `indien` (if), `voor zover` (in so far as), `behoudens` (except for). `De overeenkomst wordt stilzwijgend verlengd, **tenzij** een van de partijen **uiterlijk** een maand voor het einde schriftelijk **opzegt**.`'),
    ex(['De arbeidsovereenkomst wordt aangegaan voor de duur van twaalf maanden en eindigt van rechtswege.', 'The employment contract is entered into for a period of twelve months and ends by operation of law.'], ['De proeftijd bedraagt één maand; gedurende die periode kunnen beide partijen per direct opzeggen.', 'The probation period is one month; during that period both parties can terminate with immediate effect.'], ['Het concurrentiebeding is niet rechtsgeldig, tenzij de werkgever het schriftelijk heeft gemotiveerd.', 'The non-compete clause is not legally valid, unless the employer has justified it in writing.'], ['Teken een vaststellingsovereenkomst nooit zonder advies; je hebt veertien dagen bedenktijd.', 'Never sign a settlement agreement without advice; you have fourteen days to reconsider.']),
    tip('Before signing, ask three questions in plain Dutch: `Is er een cao?` `Staat er een concurrentiebeding in?` `Wat is de opzegtermijn?`'),
  ], ['g4-nominalisation', 'g4-register-switching'], ['arbeidsovereenkomst', 'cao', 'opzegtermijn', 'concurrentiebeding', 'transitievergoeding', 'vakbond', 'ondernemingsraad', 'ontslagvergoeding', 'vaststellingsovereenkomst', 'bepaling', 'werknemer', 'opzeggen', 'ontbinden', 'bedragen', 'verlengen', 'zich-beroepen-op', 'onbepaalde-tijd', 'stilzwijgend', 'rechtsgeldig', 'tenzij'], [
    mc('"De opzegtermijn bedraagt één maand" in everyday Dutch:', ['De opzegtermijn is één maand.', 'De opzegtermijn kost één maand.', 'De opzegtermijn draagt één maand.'], 0, 'bedragen = amount to.'),
    mc('"Een contract voor onbepaalde tijd" is', ['temporary', 'permanent', 'illegal'], 1, 'Indefinite = permanent.'),
    mc('"Stilzwijgend verlengd" means renewed', ['in silence, automatically', 'after a meeting', 'by the court'], 0, 'Tacitly.'),
    mc('"In strijd met de wet" means', ['in line with the law', 'contrary to the law', 'fighting about the law'], 1, 'Contrary to.'),
    mc('Het beding geldt, ___ de rechter het vernietigt.', ['mits', 'tenzij', 'omdat'], 1, 'unless.'),
    mc('Who negotiates the cao?', ['de ondernemingsraad', 'de vakbond', 'de gemeente'], 1, 'Trade unions and employers.'),
    art('concurrentiebeding', 'het', 'het beding.'),
    art('cao', 'de', 'de cao.'),
    art('opzegtermijn', 'de', 'de termijn.'),
    fill('Je moet schriftelijk ___. (give notice)', ['opzeggen'], 'You have to give notice in writing.', 'opzeggen.'),
    fill('De rechter heeft het contract ___. (ontbinden)', ['ontbonden'], 'The court dissolved the contract.', 'ontbinden → ontbonden.'),
    fill('De proeftijd ___ maximaal twee maanden. (bedragen)', ['bedraagt'], 'The probation period is two months at most.', 'bedraagt.'),
    fill('De werkgever beroept ___ op het concurrentiebeding.', ['zich'], 'The employer is invoking the non-compete clause.', 'zich beroepen op.'),
    build('The contract is tacitly renewed, unless you give notice.', 'Het contract wordt stilzwijgend verlengd, tenzij je opzegt.', ['mits', 'zeg je op'], 'tenzij + verb at the end (one word).'),
    build('This provision is contrary to the law.', 'Deze bepaling is in strijd met de wet.', ['dit', 'tegen strijd'], 'de bepaling → deze.'),
    build('Never sign a settlement agreement without advice.', 'Teken een vaststellingsovereenkomst nooit zonder advies.', ['tekent', 'niet nooit'], 'Imperative.'),
    tr('en-nl', 'Is there a collective agreement?', ['Is er een cao?'], 'Plain question.'),
    tr('nl-en', 'Een mondelinge afspraak is ook rechtsgeldig, maar moeilijk te bewijzen.', ['A verbal agreement is also legally valid, but hard to prove.'], 'rechtsgeldig.'),
    fix('De arbeidsovereenkomst is aangegaan geworden voor een jaar.', ['De arbeidsovereenkomst is aangegaan voor een jaar.', 'De arbeidsovereenkomst wordt aangegaan voor een jaar.'], 'No geworden.'),
    dict('Bij ontslag heb je meestal recht op een transitievergoeding.', 'On dismissal you are usually entitled to a severance payment.', 'recht op.'),
    listen('Het concurrentiebeding is niet rechtsgeldig, tenzij de werkgever het schriftelijk heeft gemotiveerd.', ['The non-compete clause is not valid unless the employer has justified it in writing.', 'The non-compete clause is always valid.', 'The employee must justify the clause.'], 0, 'tenzij … heeft gemotiveerd.'),
    speak('Voordat ik teken, wil ik graag weten of er een cao is en wat de opzegtermijn bedraagt.', 'Before I sign, I would like to know whether there is a collective agreement and what the notice period is.'),
    read('Artikel 7. Beëindiging. 7.1 Deze arbeidsovereenkomst is aangegaan voor bepaalde tijd en eindigt van rechtswege op 31 december, zonder dat opzegging is vereist. 7.2 De werkgever zal de werknemer uiterlijk één maand voor het einde schriftelijk informeren of de overeenkomst wordt voortgezet. 7.3 Tussentijdse opzegging is mogelijk met inachtneming van een opzegtermijn van één maand voor de werknemer en twee maanden voor de werkgever. 7.4 Indien de werkgever de verplichting onder 7.2 niet nakomt, is hij aan de werknemer een vergoeding verschuldigd ter hoogte van één maandsalaris.', [
      { q: 'Wanneer eindigt het contract?', options: ['alleen na opzegging', 'automatisch op 31 december', 'na twee maanden'], answer: 1, explain: '"eindigt van rechtswege … zonder dat opzegging is vereist".' },
      { q: 'Wat moet de werkgever uiterlijk een maand voor het einde doen?', options: ['het salaris verhogen', 'schriftelijk laten weten of het contract wordt voortgezet', 'de werknemer ontslaan'], answer: 1, explain: 'Article 7.2, the aanzegplicht.' },
      { q: 'Wat gebeurt er als de werkgever dat niet doet?', options: ['het contract wordt permanent', 'hij moet één maandsalaris vergoeding betalen', 'niets'], answer: 1, explain: 'Article 7.4.' },
      { q: 'Wat betekent "met inachtneming van"?', options: ['zonder rekening te houden met', 'rekening houdend met', 'in strijd met'], answer: 1, explain: 'With due observance of.' },
    ], { en: 'Article 7. Termination. 7.1 This employment contract has been entered into for a fixed term and ends by operation of law on 31 December, without notice being required. 7.2 The employer shall inform the employee in writing no later than one month before the end whether the contract will be continued. 7.3 Early termination is possible with due observance of a notice period of one month for the employee and two months for the employer. 7.4 If the employer does not fulfil the obligation under 7.2, he owes the employee compensation equal to one month’s salary.' }),
    free('Explain article 7 above to a colleague in everyday Dutch, in four sentences.', 'Je contract stopt vanzelf op 31 december; je hoeft dus niet op te zeggen. Je werkgever moet je uiterlijk een maand van tevoren schriftelijk laten weten of je mag blijven. Doet hij dat niet, dan krijg je een maandsalaris extra. Als je eerder weg wilt, heb je een opzegtermijn van een maand.', 'Your contract stops by itself on 31 December; so you do not have to give notice. Your employer must let you know in writing at least a month beforehand whether you can stay. If he does not, you get an extra month’s salary. If you want to leave earlier, you have a notice period of one month.', { hints: ['Je contract stopt vanzelf …', 'Je werkgever moet …', 'Doet hij dat niet, dan …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"Behoudens" means', ['except for', 'including'], 0, 'behoudens = behalve.'),
    fill('De opzegtermijn ___ één maand.', ['bedraagt', 'is'], 'The notice period is one month.', 'bedraagt.'),
    fill('Na drie tijdelijke contracten volgt een contract voor ___ tijd.', ['onbepaalde'], 'After three temporary contracts a permanent contract follows.', 'onbepaalde tijd.'),
    build('The works council must agree to the reorganisation.', 'De ondernemingsraad moet instemmen met de reorganisatie.', ['instemt', 'over'], 'instemmen met.'),
    tr('en-nl', 'Is there a non-compete clause in it?', ['Staat er een concurrentiebeding in?'], 'staat er … in.'),
    speak('Het contract wordt stilzwijgend verlengd, tenzij een van de partijen schriftelijk opzegt.', 'The contract is tacitly renewed, unless one of the parties gives notice in writing.'),
  ]));

  /* ================= Unit 3, lesson 4: presenting at B2 ================= */
  N('betoog', 'het', 'betogen', 'argument / case', 'Bouw je presentatie op als een betoog.', 'Build your presentation like an argument.', { theme: 'presenting', ...S });
  N('doelgroep', 'de', 'doelgroepen', 'target audience', 'Wie is je doelgroep?', 'Who is your target audience?', { theme: 'presenting', ...S });
  N('uitgangspunt', 'het', 'uitgangspunten', 'starting point / premise', 'Ons uitgangspunt is dat de klant centraal staat.', 'Our starting point is that the customer comes first.', { theme: 'presenting', ...S });
  N('knelpunt', 'het', 'knelpunten', 'bottleneck / problem area', 'Het grootste knelpunt is de levertijd.', 'The biggest bottleneck is the delivery time.', { theme: 'presenting', ...S });
  N('scenario', 'het', "scenario's", 'scenario', 'We hebben drie scenario’s doorgerekend.', 'We have calculated three scenarios.', { theme: 'presenting', ...S });
  N('onderbouwing', 'de', null, 'substantiation', 'De onderbouwing van deze cijfers vindt u in de bijlage.', 'You will find the substantiation of these figures in the appendix.', { theme: 'presenting', ...S });
  N('kanttekening', 'de', 'kanttekeningen', 'caveat', 'Daar hoort wel een kanttekening bij.', 'A caveat does belong with that.', { theme: 'presenting', ...S });
  N('vervolgstap', 'de', 'vervolgstappen', 'next step', 'Ik sluit af met de vervolgstappen.', 'I will close with the next steps.', { theme: 'presenting', ...S });
  VB('schetsen', 'to outline', 'schets|schetst|schetsen', 'schetste|schetsten', 'geschetst', 'hebben', 'Ik schets eerst kort de aanleiding.', 'I will first briefly outline the background.', { theme: 'presenting', ...S });
  VB('doorrekenen', 'to calculate through', 'reken door|rekent door|rekenen door', 'rekende door|rekenden door', 'doorgerekend', 'hebben', 'De scenario’s zijn door Finance doorgerekend.', 'The scenarios were calculated by Finance.', { theme: 'presenting', ...S });
  VB('stilstaan bij', 'to dwell on', 'sta stil bij|staat stil bij|staan stil bij', 'stond stil bij|stonden stil bij', 'stilgestaan bij', 'hebben', 'Ik wil even stilstaan bij de risico’s.', 'I want to dwell on the risks for a moment.', { theme: 'presenting', ...S, id: 'stilstaan-bij' });
  VB('terugkomen op', 'to come back to', 'kom terug op|komt terug op|komen terug op', 'kwam terug op|kwamen terug op', 'teruggekomen op', 'zijn', 'Daar kom ik bij de conclusie op terug.', 'I will come back to that in the conclusion.', { theme: 'presenting', ...S, id: 'terugkomen-op' });
  VB('pareren', 'to parry / counter', 'pareer|pareert|pareren', 'pareerde|pareerden', 'gepareerd', 'hebben', 'Ze pareerde de kritische vraag met een voorbeeld.', 'She countered the critical question with an example.', { theme: 'presenting', ...S });
  PH('Laat ik beginnen met …', 'Let me begin with …', 'Laat ik beginnen met de aanleiding.', 'Let me begin with the background.', { theme: 'presenting', ...S, id: 'ph-laat-ik-beginnen' });
  PH('Dat brengt mij bij …', 'That brings me to …', 'Dat brengt mij bij het derde scenario.', 'That brings me to the third scenario.', { theme: 'presenting', ...S, id: 'ph-dat-brengt-mij-bij' });
  PH('Waar het in de kern om gaat, is …', 'What it essentially comes down to is …', 'Waar het in de kern om gaat, is de levertijd.', 'What it essentially comes down to is the delivery time.', { theme: 'presenting', ...S, id: 'ph-in-de-kern' });
  PH('Dat is een terechte vraag.', 'That is a fair question.', 'Dat is een terechte vraag; het eerlijke antwoord is dat we dat nog niet weten.', 'That is a fair question; the honest answer is that we do not know yet.', { theme: 'presenting', ...S, id: 'ph-terechte-vraag' });
  PH('Als ik uw vraag goed begrijp, …', 'If I understand your question correctly, …', 'Als ik uw vraag goed begrijp, wilt u weten wat het kost.', 'If I understand your question correctly, you want to know what it costs.', { theme: 'presenting', ...S, id: 'ph-als-ik-uw-vraag' });
  W('kortom', 'in short', 'adv', 'Kortom, scenario twee is het meest haalbaar.', 'In short, scenario two is the most feasible.', { theme: 'presenting', ...S });

  addTo('s4u3', lesson('s4u3l4', 'Presenting a case and handling critical questions', 'You can present a proposal as a structured argument, signpost it with B2 connectors, and deal with critical or hostile questions without losing register.', [
    h('A presentation is a spoken betoog'),
    table(['part', 'language'], [['opening', '*Laat ik beginnen met … / Ik schets eerst kort de aanleiding.'], ['premise', '*Ons uitgangspunt is dat …'], ['problem', '*Het grootste knelpunt is … / Waar het in de kern om gaat, is …'], ['options', '*We hebben drie scenario’s doorgerekend. Het eerste …'], ['caveat', '*Daar hoort wel een kanttekening bij.'], ['transition', '*Dat brengt mij bij … / Ik wil even stilstaan bij …'], ['close', '*Kortom, … / Ik sluit af met de vervolgstappen.']]),
    h('Critical questions'),
    list('Acknowledge: `Dat is een terechte vraag.`', 'Rephrase (buys time, checks understanding): `Als ik uw vraag goed begrijp, wilt u weten of …`', 'Answer with evidence: `De onderbouwing vindt u in de bijlage; in het kort: …`', 'Concede honestly: `Het eerlijke antwoord is dat we dat nog niet weten.`', 'Counter without attacking: `Ik begrijp de zorg, maar de cijfers laten iets anders zien.`', 'Park: `Daar kom ik na afloop graag op terug.`'),
    h('Register'),
    p('A board or client: `u`, full sentences, few particles. Your own team: `jullie`, shorter, `even`, `gewoon`. Never switch halfway; decide before slide one. Numbers and dates: say them slowly and repeat the key one.'),
    ex(['Laat ik beginnen met de aanleiding: de levertijd is in een jaar verdubbeld.', 'Let me begin with the background: the delivery time has doubled in a year.'], ['We hebben drie scenario’s doorgerekend; bij het derde hoort wel een kanttekening.', 'We have calculated three scenarios; the third does come with a caveat.'], ['Dat is een terechte vraag. Als ik u goed begrijp, wilt u weten of dit binnen de begroting past.', 'That is a fair question. If I understand you correctly, you want to know whether this fits within the budget.'], ['Kortom, scenario twee is het meest haalbaar. Ik sluit af met de vervolgstappen.', 'In short, scenario two is the most feasible. I will close with the next steps.']),
    tip('Prepare the three nastiest questions you could get and write a two-sentence answer to each. You will get at least one of them.'),
  ], ['g4-argument', 'g4-register-switching', 'g4-discourse'], ['betoog', 'doelgroep', 'uitgangspunt', 'knelpunt', 'scenario', 'onderbouwing', 'kanttekening', 'vervolgstap', 'schetsen', 'doorrekenen', 'stilstaan-bij', 'terugkomen-op', 'pareren', 'ph-laat-ik-beginnen', 'ph-dat-brengt-mij-bij', 'ph-in-de-kern', 'ph-terechte-vraag', 'ph-als-ik-uw-vraag', 'kortom'], [
    mc('Best way to start answering a hostile question:', ['Dat is onzin.', 'Dat is een terechte vraag.', 'Volgende vraag.'], 1, 'Acknowledge first.'),
    mc('"Het knelpunt" is', ['the bottleneck', 'the conclusion', 'the audience'], 0, 'Problem area.'),
    mc('"Ik wil even stilstaan bij de risico’s" means', ['I want to stop the risks', 'I want to dwell on the risks', 'I want to skip the risks'], 1, 'stilstaan bij.'),
    mc('"Daar hoort wel een kanttekening bij" announces', ['a caveat', 'a joke', 'the end'], 0, 'Caveat.'),
    mc('Which phrase rephrases a question to check it?', ['Kortom, …', 'Als ik uw vraag goed begrijp, …', 'Laat ik beginnen met …'], 1, 'Rephrase and check.'),
    art('uitgangspunt', 'het', 'het punt.'),
    art('scenario', 'het', 'het scenario.'),
    art('onderbouwing', 'de', '-ing → de.'),
    fill('Dat ___ mij bij het derde scenario.', ['brengt'], 'That brings me to the third scenario.', 'dat brengt mij bij.'),
    fill('We hebben drie scenario’s ___. (doorrekenen)', ['doorgerekend'], 'We have calculated three scenarios.', 'door + gerekend.'),
    fill('Waar het in de ___ om gaat, is de levertijd.', ['kern'], 'What it essentially comes down to is the delivery time.', 'in de kern.'),
    fill('Ik ___ eerst kort de aanleiding. (outline)', ['schets'], 'I will first briefly outline the background.', 'schetsen.'),
    build('Our starting point is that the customer comes first.', 'Ons uitgangspunt is dat de klant centraal staat.', ['staat centraal', 'onze'], 'het uitgangspunt → ons; dat … staat.'),
    build('I will come back to that in the conclusion.', 'Daar kom ik bij de conclusie op terug.', ['ik kom', 'over'], 'daar … op terug.'),
    build('She countered the critical question with an example.', 'Ze pareerde de kritische vraag met een voorbeeld.', ['kritisch', 'door'], 'de vraag → kritische.'),
    tr('en-nl', 'The honest answer is that we do not know yet.', ['Het eerlijke antwoord is dat we dat nog niet weten.', 'Het eerlijke antwoord is dat we het nog niet weten.'], 'dat … weten.'),
    tr('nl-en', 'De onderbouwing van deze cijfers vindt u in de bijlage.', ['You will find the substantiation of these figures in the appendix.', 'The basis for these figures can be found in the appendix.'], 'onderbouwing.'),
    fix('Laat ik begin met de aanleiding.', ['Laat ik beginnen met de aanleiding.'], 'laten + infinitive.'),
    dict('Ik begrijp de zorg, maar de cijfers laten iets anders zien.', 'I understand the concern, but the figures show something different.', 'laten … zien.'),
    listen('Dat is een terechte vraag; het eerlijke antwoord is dat het derde scenario nog niet volledig is doorgerekend.', ['That is a fair question; the honest answer is that the third scenario has not been fully calculated yet.', 'The third scenario is the cheapest.', 'The speaker refuses to answer.'], 0, 'terechte vraag; nog niet volledig doorgerekend.'),
    speak('Laat ik beginnen met de aanleiding. Daarna sta ik stil bij de drie scenario’s, en ik sluit af met de vervolgstappen.', 'Let me begin with the background. After that I will dwell on the three scenarios, and I will close with the next steps.'),
    free('Present a proposal in 60 seconds (any topic from your work): premise, problem, two options with a caveat, recommendation.', 'Laat ik beginnen met ons uitgangspunt: klanten moeten binnen een dag antwoord krijgen. Het knelpunt is dat het team op maandag overbelast is. We hebben twee scenario’s doorgerekend: een extra medewerker op maandag, of een chatbot voor eenvoudige vragen. Bij de chatbot hoort wel een kanttekening: klanten waarderen persoonlijk contact. Kortom, ik stel voor te beginnen met de extra medewerker en de chatbot in het najaar te testen.', 'Let me begin with our premise: customers must get an answer within a day. The bottleneck is that the team is overloaded on Mondays. We have calculated two scenarios: an extra employee on Mondays, or a chatbot for simple questions. The chatbot does come with a caveat: customers value personal contact. In short, I propose starting with the extra employee and testing the chatbot in the autumn.', { hints: ['Laat ik beginnen met …', 'Het knelpunt is …', 'We hebben … scenario’s doorgerekend', 'Daar hoort een kanttekening bij', 'Kortom, …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"De doelgroep" is', ['the target audience', 'the goal'], 0, 'Target audience.'),
    fill('Daar hoort wel een ___ bij. (caveat)', ['kanttekening'], 'A caveat does belong with that.', 'kanttekening.'),
    fill('Ik sluit af met de ___. (next steps)', ['vervolgstappen'], 'I will close with the next steps.', 'vervolgstappen.'),
    build('That is a fair question.', 'Dat is een terechte vraag.', ['terecht', 'het'], 'de vraag → terechte.'),
    tr('en-nl', 'Who is your target audience?', ['Wie is je doelgroep?', 'Wie is uw doelgroep?'], 'doelgroep.'),
    speak('Als ik uw vraag goed begrijp, wilt u weten of dit binnen de begroting past.', 'If I understand your question correctly, you want to know whether this fits within the budget.'),
  ]));

  /* ================= Unit 3, lesson 5: conflict and feedback ================= */
  N('conflict', 'het', 'conflicten', 'conflict', 'Het conflict liep uit de hand.', 'The conflict got out of hand.', { theme: 'work', ...S });
  N('spanning', 'de', 'spanningen', 'tension', 'Er is al weken spanning in het team.', 'There has been tension in the team for weeks.', { theme: 'work', ...S });
  N('misverstand', 'het', 'misverstanden', 'misunderstanding', 'Het berustte op een misverstand.', 'It was based on a misunderstanding.', { theme: 'work', ...S });
  N('verwijt', 'het', 'verwijten', 'reproach', 'Ik bedoel het niet als verwijt.', 'I do not mean it as a reproach.', { theme: 'work', ...S });
  N('vertrouwenspersoon', 'de', 'vertrouwenspersonen', 'confidential adviser', 'Je kunt altijd naar de vertrouwenspersoon.', 'You can always go to the confidential adviser.', { theme: 'work', ...S });
  N('bemiddelaar', 'de', 'bemiddelaars', 'mediator', 'Er is een bemiddelaar ingeschakeld.', 'A mediator has been brought in.', { theme: 'work', ...S });
  N('afspraak', 'de', 'afspraken', 'agreement', 'Laten we duidelijke afspraken maken.', 'Let us make clear agreements.', { theme: 'work', ...S });
  N('gedrag', 'het', null, 'behaviour', 'Benoem het gedrag, niet de persoon.', 'Name the behaviour, not the person.', { theme: 'work', ...S });
  N('effect', 'het', 'effecten', 'effect', 'Het effect is dat ik mijn werk niet kan afmaken.', 'The effect is that I cannot finish my work.', { theme: 'work', ...S });
  VB('aanspreken op', 'to call (someone) out on', 'spreek aan op|spreekt aan op|spreken aan op', 'sprak aan op|spraken aan op', 'aangesproken op', 'hebben', 'Ik wil je ergens op aanspreken.', 'I want to raise something with you.', { theme: 'work', ...S, id: 'aanspreken-op' });
  VB('escaleren', 'to escalate', 'escaleer|escaleert|escaleren', 'escaleerde|escaleerden', 'geëscaleerd', 'zijn', 'Het meningsverschil is geëscaleerd.', 'The disagreement has escalated.', { theme: 'work', ...S });
  VB('uitpraten', 'to talk through', 'praat uit|praat uit|praten uit', 'praatte uit|praatten uit', 'uitgepraat', 'hebben', 'Laten we het uitpraten.', 'Let us talk it through.', { theme: 'work', ...S });
  VB('zich storen aan', 'to be bothered by', 'stoor me aan|stoort zich aan|storen ons aan', 'stoorde me aan|stoorden ons aan', 'gestoord aan', 'hebben', 'Ik stoor me eraan dat je steeds te laat komt.', 'It bothers me that you keep arriving late.', { theme: 'work', ...S, id: 'zich-storen-aan' });
  VB('overkomen', 'to come across', 'kom over|komt over|komen over', 'kwam over|kwamen over', 'overgekomen', 'zijn', 'Het kwam nogal bot over.', 'It came across as rather blunt.', { theme: 'work', ...S });
  VB('bijleggen', 'to settle (a dispute)', 'leg bij|legt bij|leggen bij', 'legde bij|legden bij', 'bijgelegd', 'hebben', 'We hebben het bijgelegd.', 'We have settled it.', { theme: 'work', ...S });
  PH('Ik merk dat …', 'I notice that …', 'Ik merk dat je de laatste weken vaak te laat bent.', 'I notice that you have often been late in recent weeks.', { theme: 'work', ...S, id: 'ph-ik-merk-dat' });
  PH('Het effect op mij is dat …', 'The effect on me is that …', 'Het effect op mij is dat ik jouw deel moet overnemen.', 'The effect on me is that I have to take over your part.', { theme: 'work', ...S, id: 'ph-effect-op-mij' });
  PH('Herken je dat?', 'Do you recognise that?', 'Ik merk dat je stil bent in vergaderingen. Herken je dat?', 'I notice that you are quiet in meetings. Do you recognise that?', { theme: 'work', ...S, id: 'ph-herken-je-dat' });
  PH('Zo bedoelde ik het niet.', 'I did not mean it like that.', 'Sorry, zo bedoelde ik het niet.', 'Sorry, I did not mean it like that.', { theme: 'work', ...S, id: 'ph-zo-bedoelde-ik-het-niet' });
  W('bot', 'blunt', 'adj', 'Dat was nogal een botte opmerking.', 'That was a rather blunt remark.', { theme: 'work', ...S, id: 'bot-adj' });

  addTo('s4u3', lesson('s4u3l5', 'Conflict and feedback: direct without being blunt', 'You can give and receive critical feedback the Dutch way, name a problem without attacking the person, and de-escalate a conflict in the right register.', [
    h('Direct is not the same as bot'),
    p('Dutch workplaces expect you to say what bothers you, soon and to the person concerned. What keeps it professional is a fixed structure: **behaviour, effect, question**. `Ik merk dat je de laatste drie vergaderingen te laat was` (behaviour, concrete). `Het effect is dat we steeds opnieuw moeten beginnen` (effect). `Herken je dat?` (question). No `altijd`, no `nooit`, no adjectives about the person.'),
    h('The language of feedback'),
    table(['function', 'Dutch'], [['open', '*Ik wil je ergens op aanspreken. Heb je even?'], ['behaviour', '*Ik merk dat … / Het valt me op dat …'], ['effect', '*Het effect op mij is dat … / Daardoor …'], ['check', '*Herken je dat? / Hoe zie jij dat?'], ['wish', '*Ik zou het prettig vinden als … / Kunnen we afspreken dat …?'], ['receive', '*Goed dat je het zegt. / Dat herken ik. / Zo bedoelde ik het niet.'], ['disagree', '*Daar herken ik me niet in. Mag ik vertellen hoe ik het heb ervaren?']]),
    h('When it has escalated'),
    p('`Laten we het uitpraten.` `Het berust volgens mij op een misverstand.` `Ik merk dat het hoog oploopt; zullen we even pauzeren?` Formal routes: the `leidinggevende`, the `vertrouwenspersoon` (confidential, for harassment or integrity), or a `bemiddelaar`.'),
    h('Grammar: pronominal adverbs and the unreal past'),
    p('`Ik stoor me **eraan** dat …` `Waar stoor je je **aan**?` `Ik wil je **erop** aanspreken dat …` And for regret: `Ik **had** het eerder **moeten** zeggen.` `Het **was** niet zo ver **gekomen** als we eerder **hadden gepraat**.`'),
    ex(['Ik wil je ergens op aanspreken. Ik merk dat je mijn mails vaak pas na een week beantwoordt.', 'I want to raise something with you. I notice that you often only answer my emails after a week.'], ['Het effect is dat ik de klant niet kan informeren. Herken je dat?', 'The effect is that I cannot inform the client. Do you recognise that?'], ['Goed dat je het zegt. Zo bedoelde ik het niet; ik had het te druk, maar dat had ik moeten melden.', 'Good that you say so. I did not mean it like that; I was too busy, but I should have reported that.'], ['Kunnen we afspreken dat je binnen twee dagen reageert, ook als je het antwoord nog niet hebt?', 'Can we agree that you respond within two days, even if you do not have the answer yet?']),
    tip('If you receive blunt feedback, do not defend first. `Goed dat je het zegt. Kun je een voorbeeld geven?` turns an attack into a conversation.'),
  ], ['g4-register-switching', 'g4-past-tenses'], ['conflict', 'spanning', 'misverstand', 'verwijt', 'vertrouwenspersoon', 'bemiddelaar', 'afspraak', 'gedrag', 'effect', 'aanspreken-op', 'escaleren', 'uitpraten', 'zich-storen-aan', 'overkomen', 'bijleggen', 'ph-ik-merk-dat', 'ph-effect-op-mij', 'ph-herken-je-dat', 'ph-zo-bedoelde-ik-het-niet', 'bot-adj'], [
    mc('The professional feedback structure is', ['person, blame, demand', 'behaviour, effect, question', 'joke, criticism, joke'], 1, 'Gedrag, effect, vraag.'),
    mc('Which opening is concrete behaviour?', ['Je bent altijd lui.', 'Ik merk dat je de laatste drie vergaderingen te laat was.', 'Jij hebt geen respect.'], 1, 'Concrete, no altijd, no judgement of the person.'),
    mc('"Ik wil je ergens op aanspreken" means', ['I want to talk to you somewhere', 'I want to raise something with you', 'I want to blame you'], 1, 'aanspreken op.'),
    mc('"Het kwam nogal bot over" means it came across as', ['friendly', 'blunt', 'funny'], 1, 'bot = blunt.'),
    mc('For harassment at work you can go confidentially to', ['de vertrouwenspersoon', 'de vakbond only', 'the newspaper'], 0, 'vertrouwenspersoon.'),
    mc('Best first reaction to critical feedback:', ['Dat is niet waar!', 'Goed dat je het zegt. Kun je een voorbeeld geven?', 'Jij doet dat zelf ook.'], 1, 'Receive, then ask.'),
    art('conflict', 'het', 'het conflict.'),
    art('verwijt', 'het', 'het verwijt.'),
    art('misverstand', 'het', 'het verstand → het misverstand.'),
    fill('Ik stoor me er___ dat je steeds te laat komt.', ['aan'], 'It bothers me that you keep arriving late.', 'zich storen aan → eraan.'),
    fill('Laten we het ___. (talk it through)', ['uitpraten'], 'Let us talk it through.', 'uitpraten.'),
    fill('Het meningsverschil is ___. (escaleren)', ['geëscaleerd'], 'The disagreement has escalated.', 'ge + ë: geëscaleerd.'),
    fill('Ik had het eerder ___ zeggen. (should)', ['moeten'], 'I should have said it earlier.', 'had moeten.'),
    build('The effect on me is that I have to take over your part.', 'Het effect op mij is dat ik jouw deel moet overnemen.', ['moet ik', 'neem over'], 'dat … moet overnemen.'),
    build('I did not mean it like that.', 'Zo bedoelde ik het niet.', ['ik bedoelde', 'bedoel'], 'Fronted zo + inversion.'),
    build('Can we agree that you respond within two days?', 'Kunnen we afspreken dat je binnen twee dagen reageert?', ['reageer je', 'spreken af'], 'afspreken dat … reageert.'),
    tr('en-nl', 'It was based on a misunderstanding.', ['Het berustte op een misverstand.'], 'berusten op.'),
    tr('nl-en', 'Daar herken ik me niet in. Mag ik vertellen hoe ik het heb ervaren?', ['I do not recognise myself in that. May I tell you how I experienced it?'], 'zich herkennen in.'),
    fix('Je bent altijd te laat en je hebt geen respect.', ['Ik merk dat je de laatste weken vaak te laat bent. Het effect is dat we steeds opnieuw moeten beginnen.'], 'Behaviour and effect, not judgement.'),
    dict('Het was niet zo ver gekomen als we eerder hadden gepraat.', 'It would not have come this far if we had talked earlier.', 'Unreal past.'),
    listen('Ik merk dat het hoog oploopt. Zullen we even pauzeren en het daarna rustig uitpraten?', ['I notice it is getting heated. Shall we take a break and then talk it through calmly?', 'I want to end this conversation for good.', 'Let us shout a bit louder.'], 0, 'hoog oplopen; uitpraten.'),
    speak('Ik wil je ergens op aanspreken. Ik merk dat je mijn mails laat beantwoordt, en het effect is dat ik de klant niet kan informeren. Herken je dat?', 'I want to raise something with you. I notice that you answer my emails late, and the effect is that I cannot inform the client. Do you recognise that?'),
    free('Give feedback to a colleague who interrupts you in meetings: behaviour, effect, question, wish.', 'Heb je even? Ik wil je ergens op aanspreken. Ik merk dat je me in de laatste twee vergaderingen een paar keer hebt onderbroken. Het effect op mij is dat ik mijn punt niet kan afmaken en daarna stil word. Herken je dat? Ik zou het prettig vinden als je me laat uitpraten; daarna hoor ik graag wat je ervan vindt.', 'Have you got a moment? I want to raise something with you. I notice that in the last two meetings you interrupted me a few times. The effect on me is that I cannot finish my point and then go quiet. Do you recognise that? I would appreciate it if you let me finish; after that I would like to hear what you think of it.', { hints: ['Ik merk dat …', 'Het effect op mij is dat …', 'Herken je dat?', 'Ik zou het prettig vinden als …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"We hebben het bijgelegd" means', ['we settled it', 'we added it'], 0, 'bijleggen = settle.'),
    fill('___ je dat? (Do you recognise that?)', ['Herken'], 'Do you recognise that?', 'herken je.'),
    fill('Ik bedoel het niet als ___. (reproach)', ['verwijt'], 'I do not mean it as a reproach.', 'het verwijt.'),
    build('Name the behaviour, not the person.', 'Benoem het gedrag, niet de persoon.', ['benoemt', 'de gedrag'], 'Imperative; het gedrag.'),
    tr('en-nl', 'A mediator has been brought in.', ['Er is een bemiddelaar ingeschakeld.'], 'is … ingeschakeld.'),
    speak('Goed dat je het zegt. Zo bedoelde ik het niet, maar ik had het eerder moeten melden.', 'Good that you say so. I did not mean it like that, but I should have reported it earlier.'),
  ]));

  /* ================= Unit 4, lesson 3: Dutch literature and film ================= */
  N('hoofdpersoon', 'de', 'hoofdpersonen', 'main character', 'De hoofdpersoon is een jongen van zestien.', 'The main character is a boy of sixteen.', { theme: 'arts', ...S });
  N('verteller', 'de', 'vertellers', 'narrator', 'De verteller is onbetrouwbaar.', 'The narrator is unreliable.', { theme: 'arts', ...S });
  N('plot', 'de', 'plots', 'plot', 'De plot is eenvoudig, maar de sfeer is beklemmend.', 'The plot is simple, but the atmosphere is oppressive.', { theme: 'arts', ...S });
  N('thema', 'het', "thema's", 'theme', 'Schuld is het centrale thema.', 'Guilt is the central theme.', { theme: 'arts', ...S });
  N('sfeer', 'de', null, 'atmosphere', 'De sfeer in het boek is somber.', 'The atmosphere in the book is sombre.', { theme: 'arts', ...S });
  N('stijl', 'de', 'stijlen', 'style', 'Zijn stijl is sober en ironisch.', 'His style is sober and ironic.', { theme: 'arts', ...S });
  N('verfilming', 'de', 'verfilmingen', 'film adaptation', 'De verfilming wijkt sterk af van het boek.', 'The film adaptation departs strongly from the book.', { theme: 'arts', ...S });
  N('scenario', 'het', "scenario's", 'screenplay', 'Het scenario won een Gouden Kalf.', 'The screenplay won a Golden Calf.', { theme: 'arts', ...S });
  N('acteerprestatie', 'de', 'acteerprestaties', 'acting performance', 'De acteerprestaties zijn overtuigend.', 'The acting performances are convincing.', { theme: 'arts', ...S });
  N('ondertiteling', 'de', null, 'subtitles', 'Zet de Nederlandse ondertiteling aan.', 'Turn on the Dutch subtitles.', { theme: 'arts', ...S });
  N('naoorlogse literatuur', 'de', null, 'post-war literature', 'De naoorlogse literatuur wordt gedomineerd door de Grote Drie.', 'Post-war literature is dominated by the Big Three.', { theme: 'arts', ...S, id: 'naoorlogse-literatuur' });
  VB('beschrijven', 'to describe', 'beschrijf|beschrijft|beschrijven', 'beschreef|beschreven', 'beschreven', 'hebben', 'Het boek beschrijft één avond in 1946.', 'The book describes one evening in 1946.', { theme: 'arts', ...S });
  VB('zich ontwikkelen', 'to develop', 'ontwikkel me|ontwikkelt zich|ontwikkelen ons', 'ontwikkelde me|ontwikkelden ons', 'ontwikkeld', 'hebben', 'Het personage ontwikkelt zich nauwelijks.', 'The character hardly develops.', { theme: 'arts', ...S, id: 'zich-ontwikkelen' });
  VB('afwijken van', 'to deviate from', 'wijk af van|wijkt af van|wijken af van', 'week af van|weken af van', 'afgeweken van', 'zijn', 'De film wijkt af van het boek.', 'The film deviates from the book.', { theme: 'arts', ...S, id: 'afwijken-van' });
  VB('boeien', 'to captivate', 'boei|boeit|boeien', 'boeide|boeiden', 'geboeid', 'hebben', 'Het verhaal boeit tot de laatste bladzijde.', 'The story captivates until the last page.', { theme: 'arts', ...S });
  VB('tegenvallen', 'to disappoint', 'val tegen|valt tegen|vallen tegen', 'viel tegen|vielen tegen', 'tegengevallen', 'zijn', 'Het einde viel me tegen.', 'The ending disappointed me.', { theme: 'arts', ...S });
  W('beklemmend', 'oppressive / claustrophobic', 'adj', 'Het is een beklemmende film over schuld.', 'It is an oppressive film about guilt.', { theme: 'arts', ...S });
  W('ontroerend', 'moving', 'adj', 'Het slot is ontroerend.', 'The ending is moving.', { theme: 'arts', ...S });
  W('voorspelbaar', 'predictable', 'adj', 'De afloop is nogal voorspelbaar.', 'The outcome is rather predictable.', { theme: 'arts', ...S });
  W('gelaagd', 'layered', 'adj', 'Het is een gelaagde roman die je twee keer moet lezen.', 'It is a layered novel that you have to read twice.', { theme: 'arts', ...S });

  addTo('s4u4', lesson('s4u4l3', 'Dutch literature and film: reviewing at B2', 'You can talk and write about a Dutch novel or film with the vocabulary of plot, theme, style and judgement, and structure a short review.', [
    h('A map of what Dutch readers know'),
    list('**De Grote Drie** of post-war literature: W.F. Hermans (`De donkere kamer van Damokles`), Harry Mulisch (`De aanslag`, `De ontdekking van de hemel`), Gerard Reve (`De avonden`). The war and its moral grey zones are the great theme.', '**Later and readable at B2**: Tommy Wieringa (`Joe Speedboot`), Arnon Grunberg, Marieke Lucas Rijneveld (International Booker 2020), Hella Haasse (`Oeroeg`, short and a school classic).', '**Film**: `Turks fruit`, `Zwartboek`, `De aanslag` (Oscar 1987), `Karakter` (Oscar 1998), and a strong documentary tradition. The national film prize is the `Gouden Kalf`.', '**Series** are the easiest way in: watch with `Nederlandse ondertiteling`, not English.'),
    h('The vocabulary of a review'),
    table(['aspect', 'Dutch'], [['content', '*Het boek gaat over … / beschrijft … / speelt zich af in …'], ['theme', '*Het centrale thema is schuld / identiteit / afkomst.'], ['character', '*De hoofdpersoon ontwikkelt zich van … tot …'], ['style', '*De stijl is sober / ironisch / beeldend / gelaagd.'], ['judgement +', '*boeiend, ontroerend, overtuigend, beklemmend (in a good way)'], ['judgement −', '*voorspelbaar, langdradig, vlak; het einde viel me tegen'], ['adaptation', '*De verfilming wijkt af van het boek / blijft dicht bij het boek.']]),
    h('Structure of a short recensie'),
    p('One sentence of facts (title, maker, year). Two sentences of content without spoilers. Your judgement with **one argument from the work itself**. A recommendation with a condition: `Een aanrader, mits je tegen een open einde kunt.`'),
    ex(['De aanslag van Harry Mulisch beschrijft hoe één nacht in 1945 een heel leven bepaalt.', 'The Assault by Harry Mulisch describes how one night in 1945 determines a whole life.'], ['Het centrale thema is schuld: wie is verantwoordelijk als iedereen een reden had?', 'The central theme is guilt: who is responsible when everyone had a reason?'], ['De stijl is helder en gelaagd; bij herlezing vallen de details pas op hun plaats.', 'The style is clear and layered; only on rereading do the details fall into place.'], ['De verfilming blijft dicht bij het boek, maar het einde viel me tegen.', 'The film adaptation stays close to the book, but the ending disappointed me.']),
    tip('Start with `Oeroeg` (Hella Haasse): about 100 pages, clear sentences, a big theme. Every Dutch person read it at school and will want to talk about it.'),
  ], ['g4-argument', 'g4-subjunctive'], ['hoofdpersoon', 'verteller', 'plot', 'thema', 'sfeer', 'stijl', 'verfilming', 'scenario', 'acteerprestatie', 'ondertiteling', 'naoorlogse-literatuur', 'beschrijven', 'zich-ontwikkelen', 'afwijken-van', 'boeien', 'tegenvallen', 'beklemmend', 'ontroerend', 'voorspelbaar', 'gelaagd'], [
    mc('Who are "de Grote Drie"?', ['three painters', 'Hermans, Mulisch and Reve', 'three film directors'], 1, 'Post-war novelists.'),
    mc('The great theme of Dutch post-war literature is', ['the sea', 'the war and its moral grey zones', 'the monarchy'], 1, 'The war.'),
    mc('"Het einde viel me tegen" means the ending', ['surprised me', 'disappointed me', 'fell on me'], 1, 'tegenvallen.'),
    mc('"Een gelaagde roman" is', ['a novel with several layers of meaning', 'a lazy novel', 'a short novel'], 0, 'gelaagd = layered.'),
    mc('"Het Gouden Kalf" is', ['a Dutch film prize', 'a novel by Mulisch', 'a museum'], 0, 'Film prize.'),
    mc('"Een aanrader, mits je tegen een open einde kunt" recommends it', ['to everyone', 'provided you can stand an open ending', 'unless you like endings'], 1, 'mits.'),
    art('thema', 'het', 'het thema.'),
    art('verfilming', 'de', '-ing → de.'),
    art('stijl', 'de', 'de stijl.'),
    fill('De film wijkt sterk ___ van het boek.', ['af'], 'The film departs strongly from the book.', 'afwijken van.'),
    fill('Het verhaal ___ zich af in Amsterdam. (speelt)', ['speelt'], 'The story is set in Amsterdam.', 'zich afspelen.'),
    fill('De afloop is nogal ___. (predictable)', ['voorspelbaar'], 'The outcome is rather predictable.', 'voorspellen + baar.'),
    fill('Het centrale ___ is schuld.', ['thema'], 'The central theme is guilt.', 'het thema.'),
    build('The main character hardly develops.', 'De hoofdpersoon ontwikkelt zich nauwelijks.', ['hem', 'ontwikkeld'], 'zich ontwikkelen.'),
    build('The acting performances are convincing.', 'De acteerprestaties zijn overtuigend.', ['overtuigende', 'is'], 'Plural; predicate adjective without -e.'),
    build('It is a moving film about guilt.', 'Het is een ontroerende film over schuld.', ['ontroerend', 'van'], 'de film → ontroerende.'),
    tr('en-nl', 'Turn on the Dutch subtitles.', ['Zet de Nederlandse ondertiteling aan.'], 'aanzetten.'),
    tr('nl-en', 'De stijl is sober en ironisch; bij herlezing vallen de details pas op hun plaats.', ['The style is sober and ironic; only on rereading do the details fall into place.'], 'pas = only then.'),
    fix('De verfilming afwijkt van het boek.', ['De verfilming wijkt af van het boek.'], 'Separable: wijkt … af.'),
    dict('De aanslag beschrijft hoe één nacht in 1945 een heel leven bepaalt.', 'The Assault describes how one night in 1945 determines a whole life.', 'beschrijft hoe … bepaalt.'),
    listen('Het boek boeit tot de laatste bladzijde, al is de verteller allesbehalve betrouwbaar.', ['The book captivates until the last page, although the narrator is anything but reliable.', 'The book is boring and the narrator is honest.', 'The last page is missing.'], 0, 'boeit; allesbehalve.'),
    speak('De verfilming blijft dicht bij het boek, maar de sfeer is minder beklemmend dan in de roman.', 'The film adaptation stays close to the book, but the atmosphere is less oppressive than in the novel.'),
    read('Recensie. Oeroeg (1948) van Hella Haasse is met nog geen honderd bladzijden een van de meest gelezen boeken van Nederland. De naamloze verteller, zoon van een Nederlandse planter op Java, groeit op met Oeroeg, een Indonesische jongen. Als kinderen zijn zij onafscheidelijk; naarmate zij ouder worden, drijft de koloniale samenleving hen uit elkaar, tot zij in de onafhankelijkheidsstrijd tegenover elkaar staan. Haasse vertelt dit sober, zonder te oordelen: de verteller begrijpt pas achteraf, en slechts ten dele, wat hij nooit heeft willen zien. Juist dat maakt het boek gelaagd. Wie een sluitend plot zoekt, komt bedrogen uit; wie wil begrijpen waarom Nederland nog altijd worstelt met zijn koloniale verleden, kan nergens beter beginnen.', [
      { q: 'Wat is het onderwerp van het boek?', options: ['een vriendschap die door de koloniale verhoudingen kapotgaat', 'de bouw van een plantage', 'een reis naar Nederland'], answer: 0, explain: '"drijft de koloniale samenleving hen uit elkaar".' },
      { q: 'Hoe beoordeelt de recensent de stijl?', options: ['langdradig', 'sober en niet oordelend, wat het boek gelaagd maakt', 'te ingewikkeld'], answer: 1, explain: '"sober, zonder te oordelen … Juist dat maakt het boek gelaagd."' },
      { q: 'Voor wie is het boek volgens de recensent minder geschikt?', options: ['voor wie een sluitend plot zoekt', 'voor beginners', 'voor historici'], answer: 0, explain: '"Wie een sluitend plot zoekt, komt bedrogen uit".' },
    ], { en: 'Review. Oeroeg (1948) by Hella Haasse is, at under a hundred pages, one of the most read books in the Netherlands. The nameless narrator, son of a Dutch planter on Java, grows up with Oeroeg, an Indonesian boy. As children they are inseparable; as they get older, colonial society drives them apart, until they face each other in the struggle for independence. Haasse tells this soberly, without judging: the narrator only understands afterwards, and only in part, what he never wanted to see. That is exactly what makes the book layered. Whoever seeks a neat plot will be disappointed; whoever wants to understand why the Netherlands still wrestles with its colonial past can begin nowhere better.' }),
    write('Write a review (120 to 150 words) of a book, film or series you know, preferably Dutch.', ['Facts in one sentence (title, maker, year)', 'Content in two sentences, no spoilers', 'Theme named explicitly', 'One judgement supported by something from the work itself', 'One point of criticism or a caveat', 'Recommendation with mits / tenzij / voor wie …'], 'Zwartboek (2006) van Paul Verhoeven is de duurste Nederlandse film ooit gemaakt. Een Joodse zangeres sluit zich in 1944 aan bij het verzet en infiltreert bij de Duitse bezetter. Wat begint als een spannende oorlogsfilm, wordt gaandeweg een verhaal over verraad: niemand is wie hij lijkt. Dat thema maakt de film interessanter dan de meeste oorlogsfilms, waarin goed en kwaad keurig gescheiden zijn. De acteerprestatie van Carice van Houten is overtuigend en draagt de film. Wel is de plot soms onwaarschijnlijk en gaat het tempo ten koste van de diepgang. Een aanrader voor wie van spanning houdt, mits je geen historische nauwkeurigheid verwacht.'),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"Langdradig" is a', ['positive judgement', 'negative judgement'], 1, 'Long-winded.'),
    fill('De ___ is onbetrouwbaar. (narrator)', ['verteller'], 'The narrator is unreliable.', 'verteller.'),
    fill('Het einde viel me ___.', ['tegen'], 'The ending disappointed me.', 'tegenvallen.'),
    build('Guilt is the central theme.', 'Schuld is het centrale thema.', ['centraal', 'de'], 'het thema + het → centrale.'),
    tr('en-nl', 'The atmosphere in the book is sombre.', ['De sfeer in het boek is somber.'], 'sfeer.'),
    speak('Het is een gelaagde roman die je eigenlijk twee keer moet lezen.', 'It is a layered novel that you really have to read twice.'),
  ]));

  /* ================= Unit 4, lesson 4: social media and public debate ================= */
  N('platform', 'het', 'platforms', 'platform', 'Het platform verdient aan aandacht.', 'The platform earns money from attention.', { theme: 'media', ...S });
  N('bereik', 'het', null, 'reach', 'Boze berichten hebben een groter bereik.', 'Angry posts have a bigger reach.', { theme: 'media', ...S });
  N('filterbubbel', 'de', 'filterbubbels', 'filter bubble', 'In een filterbubbel zie je vooral je eigen gelijk.', 'In a filter bubble you mainly see your own views confirmed.', { theme: 'media', ...S });
  N('desinformatie', 'de', null, 'disinformation', 'Desinformatie verspreidt zich sneller dan correcties.', 'Disinformation spreads faster than corrections.', { theme: 'media', ...S });
  N('haatreactie', 'de', 'haatreacties', 'hate comment', 'Politici krijgen dagelijks haatreacties.', 'Politicians get hate comments daily.', { theme: 'media', ...S });
  N('vrijheid van meningsuiting', 'de', null, 'freedom of expression', 'De vrijheid van meningsuiting is niet onbegrensd.', 'Freedom of expression is not unlimited.', { theme: 'media', ...S, id: 'vrijheid-van-meningsuiting' });
  N('moderatie', 'de', null, 'moderation', 'Moderatie kost platforms geld.', 'Moderation costs platforms money.', { theme: 'media', ...S });
  N('verdienmodel', 'het', 'verdienmodellen', 'business model', 'Het verdienmodel is gebaseerd op advertenties.', 'The business model is based on advertising.', { theme: 'media', ...S });
  N('ophef', 'de', null, 'fuss / outrage', 'Er ontstond ophef over een tweet van de minister.', 'There was an outcry over a tweet by the minister.', { theme: 'media', ...S });
  N('nuance', 'de', 'nuances', 'nuance', 'Voor nuance is in 280 tekens weinig ruimte.', 'There is little room for nuance in 280 characters.', { theme: 'media', ...S });
  N('journalistiek', 'de', null, 'journalism', 'Onafhankelijke journalistiek staat onder druk.', 'Independent journalism is under pressure.', { theme: 'media', ...S });
  VB('verspreiden', 'to spread', 'verspreid|verspreidt|verspreiden', 'verspreidde|verspreidden', 'verspreid', 'hebben', 'Het bericht werd binnen een uur duizenden keren verspreid.', 'The post was spread thousands of times within an hour.', { theme: 'media', ...S });
  VB('modereren', 'to moderate', 'modereer|modereert|modereren', 'modereerde|modereerden', 'gemodereerd', 'hebben', 'Reacties worden vooraf gemodereerd.', 'Comments are moderated in advance.', { theme: 'media', ...S });
  VB('aanwakkeren', 'to fuel / stir up', 'wakker aan|wakkert aan|wakkeren aan', 'wakkerde aan|wakkerden aan', 'aangewakkerd', 'hebben', 'Algoritmes wakkeren polarisatie aan.', 'Algorithms fuel polarisation.', { theme: 'media', ...S });
  VB('ontkrachten', 'to debunk', 'ontkracht|ontkracht|ontkrachten', 'ontkrachtte|ontkrachtten', 'ontkracht', 'hebben', 'Het gerucht is door factcheckers ontkracht.', 'The rumour was debunked by fact-checkers.', { theme: 'media', ...S });
  VB('zich uitspreken', 'to speak out', 'spreek me uit|spreekt zich uit|spreken ons uit', 'sprak me uit|spraken ons uit', 'uitgesproken', 'hebben', 'Steeds minder mensen durven zich online uit te spreken.', 'Fewer and fewer people dare to speak out online.', { theme: 'media', ...S, id: 'zich-uitspreken' });
  W('anoniem', 'anonymous(ly)', 'adj', 'Anoniem schelden is makkelijk.', 'Swearing anonymously is easy.', { theme: 'media', ...S });
  W('onbegrensd', 'unlimited', 'adj', 'Geen enkele vrijheid is onbegrensd.', 'No freedom is unlimited.', { theme: 'media', ...S });
  W('naarmate', 'as (in proportion to)', 'conj', 'Naarmate een bericht bozer is, wordt het vaker gedeeld.', 'The angrier a post is, the more often it is shared.', { theme: 'discourse', ...S });
  W('des te', 'all the more', 'adv', 'Hoe korter het bericht, des te minder ruimte voor nuance.', 'The shorter the post, the less room for nuance.', { theme: 'discourse', ...S, id: 'des-te' });

  addTo('s4u4', lesson('s4u4l4', 'Social media and public debate', 'You can analyse and debate the role of social media: reach, bubbles, moderation and free speech, using naarmate, hoe … des te and fixed expressions.', [
    h('The mechanism in four sentences'),
    p('Platforms earn from attention (`het verdienmodel`). Emotion, especially anger, gets the biggest `bereik`. So `naarmate` a post is angrier, it is shown more often, which `wakkert polarisatie aan`. Users end up in a `filterbubbel`, and `nuance` loses.'),
    h('Proportion: naarmate and hoe … des te'),
    table(['pattern', 'example'], [['naarmate + clause (verb last), main clause (inversion)', '*Naarmate een bericht bozer is, wordt het vaker gedeeld.'], ['hoe + comparative, hoe / des te + comparative', '*Hoe korter het bericht, des te minder ruimte voor nuance.'], ['steeds + comparative', '*Het debat wordt steeds harder.'], ['in toenemende mate (formal)', '*Politici worden in toenemende mate bedreigd.']]),
    h('The free-speech argument'),
    p('`De vrijheid van meningsuiting is een grondrecht, maar niet onbegrensd`: `belediging`, `bedreiging` and `aanzetten tot haat` are punishable. The debate is about who decides: the `platform` (private `moderatie`), the judge, or the `toezichthouder`. Fixed expressions you will meet: `het zij zo`, `als het ware`, `koste wat het kost`, `te allen tijde`.'),
    ex(['Naarmate een bericht meer woede oproept, krijgt het een groter bereik.', 'The more anger a post provokes, the bigger its reach.'], ['Hoe vaker een gerucht wordt herhaald, des te geloofwaardiger lijkt het.', 'The more often a rumour is repeated, the more credible it seems.'], ['Het gerucht was binnen een dag ontkracht, maar de correctie bereikte nog geen tiende van de lezers.', 'The rumour was debunked within a day, but the correction reached less than a tenth of the readers.'], ['De vrijheid van meningsuiting is niet onbegrensd: bedreigen is strafbaar, ook anoniem.', 'Freedom of expression is not unlimited: threatening is punishable, even anonymously.']),
    tip('`naarmate` always describes two things changing together. If only one thing changes, use `omdat` or `doordat`.'),
  ], ['g4-subjunctive', 'g4-discourse', 'g4-argument'], ['platform', 'bereik', 'filterbubbel', 'desinformatie', 'haatreactie', 'vrijheid-van-meningsuiting', 'moderatie', 'verdienmodel', 'ophef', 'nuance', 'journalistiek', 'verspreiden', 'modereren', 'aanwakkeren', 'ontkrachten', 'zich-uitspreken', 'anoniem', 'onbegrensd', 'naarmate', 'des-te'], [
    mc('Naarmate een bericht bozer is, ___ vaker gedeeld.', ['het wordt', 'wordt het', 'wordt'], 1, 'Inversion after the naarmate-clause.'),
    mc('Hoe korter het bericht, ___ minder ruimte voor nuance.', ['des te', 'dan', 'als'], 0, 'hoe … des te.'),
    mc('"Het verdienmodel" is', ['the business model', 'the moderation policy', 'the algorithm'], 0, 'How money is earned.'),
    mc('"Een gerucht ontkrachten" means', ['to spread a rumour', 'to debunk a rumour', 'to start a rumour'], 1, 'ontkrachten.'),
    mc('Is freedom of expression unlimited in the Netherlands?', ['yes', 'no: insult, threat and incitement to hatred are punishable', 'only online'], 1, 'Niet onbegrensd.'),
    mc('"Algoritmes wakkeren polarisatie aan" means they', ['reduce it', 'fuel it', 'measure it'], 1, 'aanwakkeren.'),
    art('platform', 'het', 'het platform.'),
    art('bereik', 'het', 'het bereik.'),
    art('verdienmodel', 'het', 'het model.'),
    fill('Het gerucht is door factcheckers ___. (debunked)', ['ontkracht'], 'The rumour was debunked by fact-checkers.', 'ont- verb: ontkracht.'),
    fill('Er ontstond ___ over een tweet van de minister. (outcry)', ['ophef'], 'There was an outcry over a tweet by the minister.', 'de ophef.'),
    fill('Steeds minder mensen durven zich online uit ___ spreken.', ['te'], 'Fewer and fewer people dare to speak out online.', 'durven + te; uit te spreken.'),
    fill('Het debat wordt ___ harder. (more and more)', ['steeds'], 'The debate is getting harsher and harsher.', 'steeds + comparative.'),
    build('The more often a rumour is repeated, the more credible it seems.', 'Hoe vaker een gerucht wordt herhaald, des te geloofwaardiger lijkt het.', ['het lijkt', 'dan'], 'hoe … des te + inversion.'),
    build('Comments are moderated in advance.', 'Reacties worden vooraf gemodereerd.', ['wordt', 'modereren'], 'Plural passive.'),
    build('No freedom is unlimited.', 'Geen enkele vrijheid is onbegrensd.', ['niet', 'onbegrensde'], 'geen enkele.'),
    tr('en-nl', 'Independent journalism is under pressure.', ['Onafhankelijke journalistiek staat onder druk.', 'De onafhankelijke journalistiek staat onder druk.'], 'onder druk staan.'),
    tr('nl-en', 'Politici worden in toenemende mate online bedreigd.', ['Politicians are increasingly threatened online.'], 'in toenemende mate.'),
    fix('Naarmate het bericht bozer is, het wordt vaker gedeeld.', ['Naarmate het bericht bozer is, wordt het vaker gedeeld.'], 'Inversion.'),
    dict('Desinformatie verspreidt zich sneller dan correcties.', 'Disinformation spreads faster than corrections.', 'verspreidt zich.'),
    listen('Voor nuance is online weinig ruimte; wie genuanceerd reageert, krijgt simpelweg minder bereik.', ['There is little room for nuance online; whoever responds with nuance simply gets less reach.', 'Nuanced posts get the most reach.', 'Nobody responds online.'], 0, 'weinig ruimte; minder bereik.'),
    speak('Naarmate een bericht meer woede oproept, krijgt het een groter bereik, en dat wakkert de polarisatie aan.', 'The more anger a post provokes, the bigger its reach, and that fuels polarisation.'),
    free('Exam-style long speaking task: "Moeten sociale media verplicht worden haatreacties te verwijderen?" Position, two arguments, one counterargument refuted, conclusion.', 'Volgens mij moeten platforms daartoe verplicht worden, en wel om twee redenen. Ten eerste verdienen zij aan het bereik van zulke berichten; wie verdient, is ook verantwoordelijk. Ten tweede durven steeds minder mensen zich online uit te spreken, wat het publieke debat schaadt. Tegenstanders beroepen zich op de vrijheid van meningsuiting. Dat is een terecht punt, maar die vrijheid is niet onbegrensd: bedreiging is ook op straat strafbaar. Kortom, ik ben voor, mits een rechter en niet het platform in twijfelgevallen beslist.', 'In my view platforms should be obliged to do so, for two reasons. First, they earn from the reach of such posts; whoever earns is also responsible. Second, fewer and fewer people dare to speak out online, which harms public debate. Opponents invoke freedom of expression. That is a fair point, but that freedom is not unlimited: threats are punishable in the street too. In short, I am in favour, provided a judge and not the platform decides in doubtful cases.', { hints: ['en wel om twee redenen', 'Tegenstanders beroepen zich op …', 'Dat is een terecht punt, maar …', 'Kortom, … mits …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"De filterbubbel" means you mainly see', ['opposing views', 'views like your own'], 1, 'Your own views confirmed.'),
    fill('___ een bericht bozer is, wordt het vaker gedeeld.', ['Naarmate'], 'The angrier a post is, the more often it is shared.', 'naarmate.'),
    fill('Hoe meer ophef, ___ te groter het bereik.', ['des'], 'The more outrage, the bigger the reach.', 'des te.'),
    build('Moderation costs platforms money.', 'Moderatie kost platforms geld.', ['kosten', 'het'], 'kost.'),
    tr('en-nl', 'Swearing anonymously is easy.', ['Anoniem schelden is makkelijk.', 'Anoniem schelden is gemakkelijk.'], 'anoniem.'),
    speak('De vrijheid van meningsuiting is een grondrecht, maar ze is niet onbegrensd.', 'Freedom of expression is a fundamental right, but it is not unlimited.'),
  ]));

  /* ================= Unit 4, lesson 5: interviews at natural speed ================= */
  N('interviewer', 'de', 'interviewers', 'interviewer', 'De interviewer onderbreekt haar gast zelden.', 'The interviewer seldom interrupts her guest.', { theme: 'media', ...S });
  N('fragment', 'het', 'fragmenten', 'fragment / clip', 'U hoort elk fragment één keer.', 'You hear each fragment once.', { theme: 'media', ...S });
  N('aarzeling', 'de', 'aarzelingen', 'hesitation', 'Aarzelingen en herhalingen horen bij spreektaal.', 'Hesitations and repetitions are part of spoken language.', { theme: 'media', ...S });
  N('stopwoord', 'het', 'stopwoorden', 'filler word', '"Zeg maar" is een typisch stopwoord.', '"Zeg maar" is a typical filler word.', { theme: 'media', ...S });
  N('spreektaal', 'de', null, 'spoken language', 'Spreektaal is losser dan schrijftaal.', 'Spoken language is looser than written language.', { theme: 'media', ...S });
  N('ondertoon', 'de', null, 'undertone', 'Er zat een ironische ondertoon in.', 'There was an ironic undertone in it.', { theme: 'media', ...S });
  N('strekking', 'de', null, 'gist / tenor', 'Wat is de strekking van haar antwoord?', 'What is the gist of her answer?', { theme: 'media', ...S });
  VB('bedoelen', 'to mean', 'bedoel|bedoelt|bedoelen', 'bedoelde|bedoelden', 'bedoeld', 'hebben', 'Wat ze bedoelt, is dat het beleid mislukt is.', 'What she means is that the policy has failed.', { theme: 'media', ...S });
  VB('afleiden uit', 'to infer from', 'leid af uit|leidt af uit|leiden af uit', 'leidde af uit|leidden af uit', 'afgeleid uit', 'hebben', 'Uit haar toon kun je afleiden dat ze het er niet mee eens is.', 'From her tone you can infer that she disagrees.', { theme: 'media', ...S, id: 'afleiden-uit' });
  VB('doelen op', 'to refer to / allude to', 'doel op|doelt op|doelen op', 'doelde op|doelden op', 'gedoeld op', 'hebben', 'Waar doelt hij op?', 'What is he alluding to?', { theme: 'media', ...S, id: 'doelen-op' });
  VB('relativeren', 'to put into perspective', 'relativeer|relativeert|relativeren', 'relativeerde|relativeerden', 'gerelativeerd', 'hebben', 'Ze relativeert haar eigen succes.', 'She plays down her own success.', { theme: 'media', ...S });
  PH('zeg maar', 'sort of / like (filler)', 'Het is, zeg maar, een soort experiment.', 'It is, like, a kind of experiment.', { theme: 'spoken', ...S, id: 'ph-zeg-maar-b2' });
  PH('weet je wel', 'you know', 'Dan heb je zo’n gevoel, weet je wel.', 'Then you get that feeling, you know.', { theme: 'spoken', ...S, id: 'ph-weet-je-wel' });
  PH('nou ja', 'well, anyway', 'Nou ja, zo ging dat toen.', 'Well, anyway, that is how it went then.', { theme: 'spoken', ...S, id: 'ph-nou-ja' });
  PH('laat ik het zo zeggen', 'let me put it this way', 'Laat ik het zo zeggen: enthousiast was ik niet.', 'Let me put it this way: I was not enthusiastic.', { theme: 'spoken', ...S, id: 'ph-laat-ik-het-zo-zeggen' });
  PH('om het zo maar te zeggen', 'so to speak', 'Hij was, om het zo maar te zeggen, niet blij.', 'He was, so to speak, not pleased.', { theme: 'spoken', ...S, id: 'ph-om-het-zo-maar' });
  W('allesbehalve', 'anything but', 'adv', 'Het was allesbehalve een succes.', 'It was anything but a success.', { theme: 'spoken', ...S });
  W('zogenaamd', 'so-called / supposedly', 'adj', 'Die zogenaamde oplossing werkt niet.', 'That so-called solution does not work.', { theme: 'spoken', ...S });

  addTo('s4u4', lesson('s4u4l5', 'Listening: interviews at natural speed (exam format)', 'You can follow an unscripted interview: filter out fillers and restarts, catch understatement and irony, and answer exam questions about gist, detail and attitude.', [
    h('Unscripted speech is messy'),
    p('Real interviews contain `aarzelingen` (`eh`), `stopwoorden` (`zeg maar`, `weet je wel`, `nou ja`, `eigenlijk`, `gewoon`), restarts (`Ik heb, nee, wij hebben toen …`), and reductions (`’k`, `da’s`, `effe`, `tuurlijk`). None of it carries content. Train yourself to hear through it to the stressed words.'),
    h('Dutch understatement and irony'),
    table(['said', 'meant'], [['*Enthousiast was ik niet.', 'I hated it.'], ['*Dat viel een beetje tegen.', 'It was a big disappointment.'], ['*Het was allesbehalve een succes.', 'It was a failure.'], ['*Niet onaardig.', 'Quite good.'], ['*Dat is niet niks.', 'That is impressive.'], ['*die zogenaamde oplossing', 'I do not think it is a solution'], ['*Laat ik het zo zeggen: …', 'a diplomatic criticism follows']]),
    p('Exam questions about attitude (`Hoe staat de spreker tegenover …?`) are usually answered by exactly these signals, not by a plain statement.'),
    h('Question types and strategy'),
    list('`Wat is de strekking van het antwoord?` Listen to the end of the turn: Dutch speakers conclude after the detour.', '`Wat bedoelt de spreker met …?` The answer paraphrases.', '`Waar doelt de interviewer op?` Reference back to something said earlier.', '`Wat kun je afleiden uit …?` Inference: tone, understatement, `zogenaamd`.', 'Read the questions first, and do not get stuck: the fragment goes on.'),
    ex(['Nou ja, laat ik het zo zeggen: enthousiast was het bestuur niet, om het zo maar te zeggen.', 'Well, let me put it this way: the board was not exactly enthusiastic, so to speak.'], ['Het was, zeg maar, een soort experiment, weet je wel, en dat is allesbehalve goed afgelopen.', 'It was, like, a kind of experiment, you know, and that ended anything but well.'], ['Dat is niet niks, een bedrijf met tweehonderd mensen opbouwen.', 'That is quite something, building a company with two hundred people.'], ['Uit haar toon kun je afleiden dat ze die zogenaamde hervorming niet serieus neemt.', 'From her tone you can infer that she does not take that so-called reform seriously.']),
    tip('When practising with real radio, write down only the stressed words of a twenty-second fragment, then reconstruct the sentence. It is the fastest way to stop translating in your head.'),
  ], ['g4-listening', 'g4-regional'], ['interviewer', 'fragment', 'aarzeling', 'stopwoord', 'spreektaal', 'ondertoon', 'strekking', 'bedoelen', 'afleiden-uit', 'doelen-op', 'relativeren', 'ph-zeg-maar-b2', 'ph-weet-je-wel', 'ph-nou-ja', 'ph-laat-ik-het-zo-zeggen', 'ph-om-het-zo-maar', 'allesbehalve', 'zogenaamd'], [
    listen('Nou ja, laat ik het zo zeggen: enthousiast was het bestuur niet.', ['The board disliked the idea.', 'The board was very enthusiastic.', 'The board had no opinion.'], 0, 'Understatement: "not enthusiastic" = negative.'),
    listen('Het was, zeg maar, een soort experiment, weet je wel, en dat is allesbehalve goed afgelopen.', ['It was an experiment and it ended badly.', 'It was a great success.', 'The speaker does not know what happened.'], 0, 'Ignore fillers; allesbehalve goed = badly.'),
    listen('Dat is niet niks, hè, in drie jaar van nul naar tweehonderd medewerkers.', ['The interviewer is impressed by the growth.', 'The interviewer thinks it is nothing special.', 'The company has no employees.'], 0, 'Niet niks = impressive.'),
    listen('Ik heb, nee, wij hebben toen eigenlijk gewoon besloten om ermee te stoppen.', ['They decided to stop.', 'Only the speaker decided to continue.', 'Nothing was decided.'], 0, 'Restart and fillers; content: besloten te stoppen.'),
    listen('Die zogenaamde hervorming, daar merk je op de werkvloer dus helemaal niets van.', ['The speaker is sceptical: staff notice nothing of the reform.', 'The reform has changed everything on the shop floor.', 'The speaker designed the reform.'], 0, 'zogenaamde + helemaal niets = sceptical.'),
    listen('Ach, het valt allemaal wel mee. We hebben een moeilijk jaar gehad, maar we zijn er nog.', ['The speaker plays it down: a hard year, but they survived.', 'The company went bankrupt.', 'It was the best year ever.'], 0, 'relativeren: valt wel mee.'),
    mc('"Niet onaardig" means', ['unfriendly', 'quite good', 'very bad'], 1, 'Dutch understatement.'),
    mc('"Die zogenaamde oplossing" shows that the speaker', ['supports the solution', 'doubts it is a solution', 'invented it'], 1, 'zogenaamd = so-called.'),
    mc('Where does a Dutch speaker usually put the point of a long answer?', ['at the start', 'at the end, after the detour', 'nowhere'], 1, 'Listen to the end of the turn.'),
    mc('"Wat is de strekking?" asks for', ['a detail', 'the gist', 'the speaker’s name'], 1, 'strekking = gist.'),
    fill('Het was ___ een succes. (anything but)', ['allesbehalve'], 'It was anything but a success.', 'allesbehalve.'),
    fill('Uit haar toon kun je ___ dat ze het er niet mee eens is. (infer)', ['afleiden'], 'From her tone you can infer that she disagrees.', 'afleiden uit.'),
    fill('Waar ___ de interviewer op? (allude)', ['doelt'], 'What is the interviewer alluding to?', 'doelen op.'),
    fill('Laat ik het ___ zeggen: blij was ik niet.', ['zo'], 'Let me put it this way: I was not pleased.', 'laat ik het zo zeggen.'),
    build('What she means is that the policy has failed.', 'Wat ze bedoelt, is dat het beleid mislukt is.', ['bedoelt ze', 'heeft'], 'wat-clause, then is dat …; mislukken takes zijn.'),
    build('She plays down her own success.', 'Ze relativeert haar eigen succes.', ['relativeren', 'zijn'], 'relativeert.'),
    tr('en-nl', 'There was an ironic undertone in it.', ['Er zat een ironische ondertoon in.'], 'er zat … in.'),
    tr('nl-en', 'Aarzelingen en herhalingen horen bij spreektaal.', ['Hesitations and repetitions are part of spoken language.'], 'horen bij.'),
    dict('Dat is niet niks, een bedrijf met tweehonderd mensen opbouwen.', 'That is quite something, building a company with two hundred people.', 'niet niks.'),
    speak('Laat ik het zo zeggen: het was allesbehalve een succes, maar we hebben er veel van geleerd.', 'Let me put it this way: it was anything but a success, but we learned a lot from it.'),
    free('Answer this interview question naturally, with one filler, one understatement and a clear point at the end: "Hoe was je eerste jaar in Nederland?"', 'Nou ja, laat ik het zo zeggen: makkelijk was het niet. De eerste maanden verstond ik, zeg maar, bijna niemand, en het weer viel ook een beetje tegen. Maar achteraf was het het beste besluit dat ik heb genomen.', 'Well, let me put it this way: it was not easy. The first months I could, like, hardly understand anyone, and the weather was a bit of a disappointment too. But in retrospect it was the best decision I have taken.', { hints: ['Nou ja, laat ik het zo zeggen: …', 'zeg maar', '… viel een beetje tegen', 'Maar achteraf …'] }),
  ], [
    listen('Eh, ja, kijk, het is natuurlijk zo dat, nou ja, we hadden meer tijd moeten nemen.', ['The speaker admits they should have taken more time.', 'The speaker says they had plenty of time.', 'The speaker refuses to answer.'], 0, 'Content after the fillers: hadden meer tijd moeten nemen.'),
    listen('Niet onaardig, dat eerste album, maar het tweede, daar was ik, om het zo maar te zeggen, minder van onder de indruk.', ['The first album was quite good; the speaker was unimpressed by the second.', 'Both albums were terrible.', 'The second album was the best.'], 0, 'niet onaardig; minder onder de indruk.'),
    mc('"Dat viel een beetje tegen" usually means', ['a small disappointment', 'a big disappointment, politely put'], 1, 'Understatement.'),
    fill('"Zeg maar" is een typisch ___.', ['stopwoord'], '"Zeg maar" is a typical filler word.', 'stopwoord.'),
    tr('en-nl', 'What is the gist of her answer?', ['Wat is de strekking van haar antwoord?'], 'strekking.'),
    speak('Dat is niet niks, maar laat ik het zo zeggen: zonder hulp was het me niet gelukt.', 'That is quite something, but let me put it this way: without help I would not have managed.'),
  ]));
})();
