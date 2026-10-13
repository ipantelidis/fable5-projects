/* Graded stories and dialogues, part B (B1 and B2). Questions are in Dutch from B1 on. Same format as part A. */
(function () {
  'use strict';
  const C = window.NL.content;
  C.stories = C.stories || [];
  const story = (id, level, kind, title, intro, lines, questions) => C.stories.push({ id, level, kind, title, intro, lines: lines.map((l) => (l.length === 3 ? { who: l[0], nl: l[1], en: l[2] } : { nl: l[0], en: l[1] })), questions: questions.map(([q, options, answer, explain]) => ({ q, options, answer, explain })) });

  story('b1-fiets-opa', 'B1', 'story', 'De fiets van mijn opa', 'A memory about an old bicycle and what it means.', [
    ['Toen ik twaalf was, gaf mijn opa me zijn oude fiets.', 'When I was twelve, my grandfather gave me his old bike.'],
    ['Het was een zwarte omafiets met een bel die nauwelijks werkte en een zadel dat veel te hoog stond.', 'It was a black upright bike with a bell that hardly worked and a saddle that was set far too high.'],
    ['Mijn vrienden lachten erom, want zij hadden allemaal een nieuwe mountainbike.', 'My friends laughed at it, because they all had a new mountain bike.'],
    ['Toch reed ik er elke dag mee naar school, twaalf kilometer heen en twaalf terug, door weer en wind.', 'Still, I rode it to school every day, twelve kilometres there and twelve back, in all weathers.'],
    ['Opa had de fiets in 1965 gekocht, van zijn eerste salaris als timmerman.', 'Grandad had bought the bike in 1965, from his first wages as a carpenter.'],
    ['"Als je hem goed onderhoudt, gaat hij langer mee dan jij," zei hij altijd.', '"If you look after it well, it will last longer than you," he always said.'],
    ['Hij leerde me hoe ik een band moest plakken en de ketting moest smeren.', 'He taught me how to patch a tyre and oil the chain.'],
    ['Opa is inmiddels overleden, maar de fiets staat nog steeds in mijn schuur.', 'Grandad has since passed away, but the bike is still in my shed.'],
    ['Mijn dochter is nu twaalf. Volgende week geef ik haar de fiets.', 'My daughter is twelve now. Next week I am giving her the bike.'],
  ], [
    ['Waarom lachten de vrienden om de fiets?', ['Omdat de fiets kapot was.', 'Omdat zij allemaal een nieuwe mountainbike hadden.', 'Omdat de verteller niet kon fietsen.'], 1, '"Mijn vrienden lachten erom, want zij hadden allemaal een nieuwe mountainbike."'],
    ['Hoe kwam opa aan de fiets?', ['Hij had hem gekregen van zijn vader.', 'Hij had hem zelf gemaakt.', 'Hij had hem gekocht van zijn eerste salaris.'], 2, '"Opa had de fiets in 1965 gekocht, van zijn eerste salaris als timmerman." Had gekocht is the past perfect.'],
    ['Wat bedoelt opa met "hij gaat langer mee dan jij"?', ['De fiets gaat heel lang mee als je hem goed onderhoudt.', 'De fiets is sneller dan de verteller.', 'De verteller moet de fiets snel verkopen.'], 0, 'Langer meegaan = to last longer. A joke about how durable the bike is.'],
    ['Wat gaat de verteller volgende week doen?', ['De fiets repareren.', 'De fiets aan zijn dochter geven.', 'Een nieuwe fiets kopen.'], 1, '"Volgende week geef ik haar de fiets." The present tense with a time word for the future.'],
  ]);

  story('b1-overlast', 'B1', 'dialogue', 'Overlast van de buren', 'Daan calls his housing association about noisy neighbours.', [
    ['Petra', 'Goedemiddag, Woonstichting Thuis, met Petra.', 'Good afternoon, Thuis Housing Association, Petra speaking.'],
    ['Daan', 'Goedemiddag, met Daan de Vries. Ik bel omdat ik al weken last heb van mijn bovenburen.', 'Good afternoon, this is Daan de Vries. I am calling because my upstairs neighbours have been bothering me for weeks.'],
    ['Petra', 'Wat voor overlast is het precies?', 'What kind of nuisance is it exactly?'],
    ['Daan', 'Ze hebben harde muziek aan, vaak tot twee uur \'s nachts, ook doordeweeks.', 'They play loud music, often until two in the morning, on weekdays too.'],
    ['Petra', 'Heeft u er al met de buren zelf over gesproken?', 'Have you already talked to the neighbours themselves about it?'],
    ['Daan', 'Ja, twee keer. De eerste keer beloofden ze dat het zachter zou gaan, maar na een paar dagen begon het weer.', 'Yes, twice. The first time they promised to turn it down, but after a few days it started again.'],
    ['Petra', 'Dat is vervelend. Ik raad u aan om een logboek bij te houden: noteer wanneer het gebeurt en hoe lang.', 'That is annoying. I advise you to keep a log: write down when it happens and for how long.'],
    ['Daan', 'En wat gebeurt er daarna?', 'And what happens after that?'],
    ['Petra', 'Als het na twee weken niet beter is, kunnen we buurtbemiddeling inschakelen. Dat is gratis.', 'If it is not better after two weeks, we can bring in neighbourhood mediation. That is free.'],
    ['Daan', 'En als dat ook niet helpt?', 'And if that does not help either?'],
    ['Petra', 'Dan sturen wij de huurders een officiële waarschuwing.', 'Then we send the tenants an official warning.'],
    ['Daan', 'Goed, dan begin ik vandaag met het logboek. Bedankt voor uw hulp.', 'All right, then I will start the log today. Thank you for your help.'],
  ], [
    ['Waar heeft Daan last van?', ['Van harde muziek tot laat in de nacht.', 'Van een blaffende hond.', 'Van bouwwerkzaamheden.'], 0, '"Ze hebben harde muziek aan, vaak tot twee uur \'s nachts."'],
    ['Wat heeft Daan al gedaan?', ['Niets.', 'Twee keer met de buren gepraat.', 'De politie gebeld.'], 1, '"Ja, twee keer." He talked to them twice.'],
    ['Wat moet Daan nu doen?', ['Een brief schrijven.', 'Een logboek bijhouden.', 'Verhuizen.'], 1, '"Ik raad u aan om een logboek bij te houden." Bijhouden = to keep (a record).'],
    ['Wat gebeurt er als buurtbemiddeling niet helpt?', ['De buren moeten meteen verhuizen.', 'Daan krijgt een andere woning.', 'De huurders krijgen een officiële waarschuwing.'], 2, '"Dan sturen wij de huurders een officiële waarschuwing."'],
  ]);

  story('b1-koningsdag', 'B1', 'story', 'Koningsdag', 'How the Netherlands celebrates the king\'s birthday.', [
    ['Op 27 april viert Nederland de verjaardag van koning Willem-Alexander.', 'On 27 April the Netherlands celebrates King Willem-Alexander\'s birthday.'],
    ['Bijna het hele land kleurt dan oranje, de kleur van het koningshuis.', 'Almost the whole country turns orange then, the colour of the royal house.'],
    ['Al vroeg in de ochtend leggen mensen een kleedje op de stoep om hun oude spullen te verkopen: de vrijmarkt.', 'Early in the morning people lay a blanket on the pavement to sell their old things: the free market.'],
    ['Kinderen maken muziek of verkopen zelfgebakken taart, en volwassenen zoeken naar koopjes.', 'Children make music or sell home-made cake, and adults hunt for bargains.'],
    ['In Amsterdam varen honderden boten door de grachten, vol mensen die dansen en zingen.', 'In Amsterdam hundreds of boats sail through the canals, full of people dancing and singing.'],
    ['De koning en zijn familie bezoeken elk jaar een andere stad, waar ze naar optredens kijken en aan spelletjes meedoen.', 'The king and his family visit a different town every year, where they watch performances and join in games.'],
    ['Valt 27 april op een zondag, dan wordt Koningsdag een dag eerder gevierd.', 'If 27 April falls on a Sunday, King\'s Day is celebrated a day earlier.'],
    ['Voor veel Nederlanders is het de gezelligste dag van het jaar, al ligt de volgende ochtend de straat vaak vol rommel.', 'For many Dutch people it is the cosiest day of the year, even though the street is often full of rubbish the next morning.'],
  ], [
    ['Wat viert Nederland op Koningsdag?', ['Het einde van de oorlog.', 'De verjaardag van de koning.', 'Het begin van de lente.'], 1, '"Op 27 april viert Nederland de verjaardag van koning Willem-Alexander."'],
    ['Wat is de vrijmarkt?', ['Een markt waar iedereen op straat spullen mag verkopen.', 'Een markt waar alles gratis is.', 'Een markt alleen voor kinderen.'], 0, 'People sell their old things on the pavement without a permit on that day.'],
    ['Wat gebeurt er als 27 april op een zondag valt?', ['Dan is er geen Koningsdag.', 'Dan wordt het een dag later gevierd.', 'Dan wordt het een dag eerder gevierd.'], 2, '"Valt 27 april op een zondag, dan wordt Koningsdag een dag eerder gevierd." Note the inverted "valt ... dan" instead of "als".'],
    ['Wat is volgens de tekst het nadeel van Koningsdag?', ['Het is te druk in de winkels.', 'De volgende ochtend ligt er veel rommel op straat.', 'Het regent altijd.'], 1, '"... al ligt de volgende ochtend de straat vaak vol rommel." Al = even though.'],
  ]);

  story('b2-thuiswerken', 'B2', 'story', 'Thuiswerken: zegen of vloek?', 'A short opinion piece about working from home.', [
    ['Sinds de coronapandemie werkt een groot deel van de Nederlanders minstens één dag per week thuis.', 'Since the coronavirus pandemic a large share of Dutch people work from home at least one day a week.'],
    ['Voorstanders wijzen op de tijd die ze winnen: geen files, geen volle treinen en meer ruimte om werk en gezin te combineren.', 'Supporters point to the time they gain: no traffic jams, no crowded trains and more room to combine work and family.'],
    ['Bovendien blijkt uit onderzoek dat veel mensen thuis geconcentreerder werken, omdat ze minder vaak worden gestoord.', 'Moreover, research shows that many people work with more focus at home, because they are interrupted less often.'],
    ['Toch is niet iedereen enthousiast. Vooral jonge werknemers missen het contact met collega\'s, terwijl juist zij veel van ervaren collega\'s kunnen leren.', 'Still, not everyone is enthusiastic. Young employees in particular miss contact with colleagues, while they are exactly the ones who can learn a lot from experienced colleagues.'],
    ['Ook vervaagt de grens tussen werk en privé: wie thuis werkt, leest \'s avonds sneller nog even zijn mail.', 'The line between work and private life also blurs: people who work from home are quicker to check their email in the evening.'],
    ['Werkgevers zitten intussen met een dilemma. Enerzijds willen ze flexibel zijn om personeel te behouden, anderzijds vrezen ze dat de bedrijfscultuur verwatert.', 'Employers, meanwhile, face a dilemma. On the one hand they want to be flexible to keep staff, on the other they fear the company culture will be watered down.'],
    ['Steeds meer organisaties kiezen daarom voor een hybride model, met vaste kantoordagen waarop teams elkaar zien.', 'More and more organisations therefore opt for a hybrid model, with fixed office days on which teams see each other.'],
    ['Of dat de ideale oplossing is, moet nog blijken. Duidelijk is wel dat de discussie voorlopig niet is afgelopen.', 'Whether that is the ideal solution remains to be seen. What is clear is that the debate is not over for now.'],
  ], [
    ['Welk voordeel van thuiswerken noemen de voorstanders?', ['Ze verdienen meer geld.', 'Ze winnen tijd.', 'Ze hebben meer contact met collega\'s.'], 1, '"Voorstanders wijzen op de tijd die ze winnen."'],
    ['Waarom is thuiswerken volgens de tekst minder goed voor jonge werknemers?', ['Ze leren minder van ervaren collega\'s.', 'Ze hebben thuis geen goede computer.', 'Ze werken thuis minder geconcentreerd.'], 0, '"... terwijl juist zij veel van ervaren collega\'s kunnen leren." Juist = precisely, exactly those.'],
    ['Wat is het dilemma van werkgevers?', ['Ze willen flexibel zijn, maar vrezen voor de bedrijfscultuur.', 'Ze willen thuiswerken verbieden, maar dat mag niet.', 'Ze hebben te weinig kantoorruimte.'], 0, 'Enerzijds ... anderzijds = on the one hand ... on the other. Verwateren = to be watered down.'],
    ['Welke conclusie trekt de schrijver?', ['Het hybride model is de beste oplossing.', 'Thuiswerken zal verdwijnen.', 'De discussie is nog niet voorbij.'], 2, '"Of dat de ideale oplossing is, moet nog blijken." The writer does not choose a side.'],
  ]);

  story('b2-watersnood', 'B2', 'story', 'De watersnoodramp en de Deltawerken', 'How the 1953 flood changed the way the Netherlands protects itself.', [
    ['In de nacht van 31 januari op 1 februari 1953 trof een zware storm het zuidwesten van Nederland.', 'In the night of 31 January to 1 February 1953, a severe storm hit the south-west of the Netherlands.'],
    ['Door de combinatie van springtij en een noordwesterstorm braken de dijken op tientallen plaatsen door.', 'Because of the combination of a spring tide and a north-westerly storm, the dykes broke in dozens of places.'],
    ['Meer dan achttienhonderd mensen kwamen om en tienduizenden verloren hun huis en hun vee.', 'More than eighteen hundred people died and tens of thousands lost their homes and livestock.'],
    ['De ramp leidde tot het Deltaplan: een reeks dammen, sluizen en stormvloedkeringen die de zeearmen moesten afsluiten of beschermen.', 'The disaster led to the Delta Plan: a series of dams, locks and storm surge barriers meant to close off or protect the sea inlets.'],
    ['Het bekendste onderdeel is de Oosterscheldekering, die in 1986 werd geopend.', 'The best-known part is the Eastern Scheldt barrier, which opened in 1986.'],
    ['Anders dan oorspronkelijk gepland werd deze zeearm niet volledig afgesloten: dankzij beweegbare schuiven blijven het getij en daarmee het unieke natuurgebied behouden.', 'Unlike the original plan, this sea inlet was not closed off completely: thanks to movable gates, the tide, and with it the unique nature area, is preserved.'],
    ['Tegenwoordig wordt de veiligheid van de dijken voortdurend gecontroleerd, want door de stijgende zeespiegel staat Nederland opnieuw voor een grote opgave.', 'Today the safety of the dykes is checked constantly, because the rising sea level confronts the Netherlands with a major task once again.'],
  ], [
    ['Wat veroorzaakte de overstroming van 1953?', ['Hevige regenval in Duitsland.', 'Springtij in combinatie met een zware storm.', 'Een aardbeving op zee.'], 1, '"Door de combinatie van springtij en een noordwesterstorm braken de dijken door."'],
    ['Wat was het doel van het Deltaplan?', ['De zeearmen afsluiten of beschermen.', 'Nieuwe huizen bouwen voor de slachtoffers.', 'Meer land op de zee winnen.'], 0, '"... die de zeearmen moesten afsluiten of beschermen."'],
    ['Waarom werd de Oosterschelde niet volledig afgesloten?', ['Het was te duur.', 'Om het getij en het natuurgebied te behouden.', 'De techniek bestond nog niet.'], 1, '"... blijven het getij en daarmee het unieke natuurgebied behouden." Behouden = preserved.'],
    ['Voor welke uitdaging staat Nederland nu?', ['De stijgende zeespiegel.', 'Te weinig water in de zomer.', 'Een tekort aan ingenieurs.'], 0, '"... door de stijgende zeespiegel staat Nederland opnieuw voor een grote opgave." Voor een opgave staan = to face a task.'],
  ]);

  story('b2-feedbackgesprek', 'B2', 'dialogue', 'Een lastig gesprek', 'A manager and an employee look back on a project that went wrong.', [
    ['Manager', 'Fijn dat je even tijd hebt. Ik wil het met je hebben over het project van vorige maand.', 'Thanks for making time. I want to talk to you about last month\'s project.'],
    ['Sanne', 'Ik vermoedde al dat je daarover wilde praten. De deadline is niet gehaald, dat weet ik.', 'I suspected you wanted to talk about that. The deadline was missed, I know.'],
    ['Manager', 'Klopt, en de klant was daar niet blij mee. Hoe kijk je er zelf op terug?', 'Right, and the client was not happy about it. How do you look back on it yourself?'],
    ['Sanne', 'Eerlijk gezegd heb ik te lang gewacht met aan de bel trekken. Ik dacht dat ik het nog kon inhalen.', 'To be honest, I waited too long to raise the alarm. I thought I could still catch up.'],
    ['Manager', 'Ik waardeer het dat je dat zo eerlijk zegt. Wat had je nodig gehad?', 'I appreciate you saying that so honestly. What would you have needed?'],
    ['Sanne', 'Achteraf gezien had ik eerder om extra mensen moeten vragen. Ik wilde niet de indruk wekken dat ik het niet aankon.', 'In hindsight I should have asked for extra people sooner. I did not want to give the impression that I could not handle it.'],
    ['Manager', 'Begrijpelijk, maar om hulp vragen is geen teken van zwakte. Ik hoor het liever een week te vroeg dan een dag te laat.', 'Understandable, but asking for help is not a sign of weakness. I would rather hear it a week too early than a day too late.'],
    ['Sanne', 'Dat neem ik mee. Zullen we afspreken dat we bij het volgende project elke week kort de planning doornemen?', 'I will take that on board. Shall we agree to go through the planning briefly every week on the next project?'],
    ['Manager', 'Goed voorstel. Dan zet ik een vast overleg op maandagochtend in de agenda.', 'Good idea. Then I will put a fixed meeting on Monday mornings in the calendar.'],
  ], [
    ['Waarom was de klant niet tevreden?', ['Het project was te duur.', 'De deadline was niet gehaald.', 'Sanne was onbeleefd.'], 1, '"De deadline is niet gehaald." Een deadline halen = to meet a deadline.'],
    ['Wat betekent "aan de bel trekken" hier?', ['Een probleem op tijd melden.', 'De klant opbellen.', 'Ontslag nemen.'], 0, 'Aan de bel trekken = to sound the alarm, to flag a problem.'],
    ['Waarom vroeg Sanne niet eerder om hulp?', ['Er waren geen extra mensen beschikbaar.', 'Ze wist niet dat het project achterliep.', 'Ze wilde niet laten zien dat ze het niet aankon.'], 2, '"Ik wilde niet de indruk wekken dat ik het niet aankon." De indruk wekken = to give the impression.'],
    ['Wat spreken ze aan het eind af?', ['Sanne krijgt een cursus planning.', 'Ze bespreken elke week kort de planning.', 'De klant krijgt korting.'], 1, '"... elke week kort de planning doornemen." The manager schedules a fixed Monday meeting.'],
  ]);
})();
