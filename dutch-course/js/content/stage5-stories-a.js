/* Graded stories and dialogues, part A (A1 and A2). Read with audio, tap any word for the dictionary, then answer the
   questions. Format: story(id, level, kind, title, intro, lines, questions).
   lines: [nl, en] for stories, [speaker, nl, en] for dialogues. questions: [question, options, answerIndex, explain]. */
(function () {
  'use strict';
  const C = window.NL.content;
  C.stories = C.stories || [];
  const story = (id, level, kind, title, intro, lines, questions) => C.stories.push({ id, level, kind, title, intro, lines: lines.map((l) => (l.length === 3 ? { who: l[0], nl: l[1], en: l[2] } : { nl: l[0], en: l[1] })), questions: questions.map(([q, options, answer, explain]) => ({ q, options, answer, explain })) });

  story('a1-buurvrouw', 'A1', 'dialogue', 'De nieuwe buurvrouw', 'Tom meets his new neighbour on the stairs.', [
    ['Tom', 'Hoi! Ben jij de nieuwe buurvrouw?', 'Hi! Are you the new neighbour?'],
    ['Sara', 'Ja, ik ben Sara. Ik woon sinds zaterdag op nummer twaalf.', 'Yes, I am Sara. I have lived at number twelve since Saturday.'],
    ['Tom', 'Welkom! Ik ben Tom. Waar kom je vandaan?', 'Welcome! I am Tom. Where are you from?'],
    ['Sara', 'Ik kom uit Spanje, uit Valencia. En jij?', 'I am from Spain, from Valencia. And you?'],
    ['Tom', 'Ik kom uit Utrecht, maar ik woon al tien jaar in Amsterdam.', 'I am from Utrecht, but I have lived in Amsterdam for ten years.'],
    ['Sara', 'Wat doe je voor werk?', 'What do you do for work?'],
    ['Tom', 'Ik ben kok in een restaurant om de hoek.', 'I am a cook in a restaurant around the corner.'],
    ['Sara', 'Leuk! Ik ben verpleegkundige. Ik werk in het ziekenhuis.', 'Nice! I am a nurse. I work in the hospital.'],
    ['Tom', 'Kom een keer eten in het restaurant!', 'Come and eat in the restaurant some time!'],
    ['Sara', 'Graag! Wanneer is het rustig?', 'I would love to! When is it quiet?'],
    ['Tom', 'Op maandag. Dan is er bijna niemand.', 'On Monday. Then there is almost nobody.'],
  ], [
    ['Where is Sara from?', ['Utrecht', 'Spain', 'Amsterdam'], 1, '"Ik kom uit Spanje, uit Valencia."'],
    ['What is Tom\'s job?', ['nurse', 'cook', 'teacher'], 1, '"Ik ben kok in een restaurant om de hoek." Kok = cook.'],
    ['At which number does Sara live?', ['2', '12', '20'], 1, 'Twaalf = twelve. Twee is 2, twintig is 20.'],
    ['When is the restaurant quiet?', ['on Monday', 'on Saturday', 'every evening'], 0, '"Op maandag. Dan is er bijna niemand."'],
  ]);

  story('a1-markt', 'A1', 'story', 'Zaterdag op de markt', 'Lisa does her shopping at the Saturday market.', [
    ['Het is zaterdag. Lisa gaat naar de markt.', 'It is Saturday. Lisa goes to the market.'],
    ['Ze neemt haar fiets en een grote tas.', 'She takes her bike and a big bag.'],
    ['Op de markt is het druk. Er zijn veel mensen.', 'It is busy at the market. There are a lot of people.'],
    ['Lisa koopt eerst kaas: een stuk jonge kaas van een halve kilo.', 'Lisa buys cheese first: a piece of young cheese of half a kilo.'],
    ['Dan koopt ze appels en peren. De appels kosten twee euro per kilo.', 'Then she buys apples and pears. The apples cost two euros a kilo.'],
    ['Bij de viskraam ruikt het lekker. Lisa eet een haring met uitjes.', 'It smells good at the fish stall. Lisa eats a herring with onions.'],
    ['"Lekker!" zegt ze. "Dat eet ik elke zaterdag."', '"Delicious!" she says. "I eat that every Saturday."'],
    ['Om twaalf uur fietst ze naar huis. Haar tas is vol en zwaar.', 'At twelve o\'clock she cycles home. Her bag is full and heavy.'],
  ], [
    ['What does Lisa buy first?', ['apples', 'cheese', 'fish'], 1, '"Lisa koopt eerst kaas." Eerst = first.'],
    ['How much do the apples cost?', ['one euro a kilo', 'two euros a kilo', 'two euros each'], 1, '"De appels kosten twee euro per kilo."'],
    ['What does Lisa eat at the fish stall?', ['a herring with onions', 'fried fish', 'a cheese sandwich'], 0, 'Haring met uitjes: raw herring with chopped onion, a Dutch classic.'],
    ['How does she go home?', ['by bus', 'on foot', 'by bike'], 2, '"Om twaalf uur fietst ze naar huis." Fietsen = to cycle.'],
  ]);

  story('a1-te-laat', 'A1', 'story', 'Te laat!', 'A stressful morning for Mark, with a surprise at the end.', [
    ['Mark wordt wakker. Hij kijkt op zijn telefoon: het is al half negen!', 'Mark wakes up. He looks at his phone: it is already half past eight!'],
    ['Zijn werk begint om negen uur.', 'His work starts at nine o\'clock.'],
    ['Hij staat snel op, neemt een douche en drinkt een kop koffie.', 'He gets up quickly, takes a shower and drinks a cup of coffee.'],
    ['Hij heeft geen tijd voor ontbijt.', 'He has no time for breakfast.'],
    ['Buiten regent het. Mark pakt zijn jas en loopt naar de bushalte.', 'It is raining outside. Mark grabs his coat and walks to the bus stop.'],
    ['De bus komt niet. Na tien minuten belt Mark zijn baas.', 'The bus does not come. After ten minutes Mark calls his boss.'],
    ['"Sorry, ik ben te laat. De bus komt niet."', '"Sorry, I am late. The bus is not coming."'],
    ['Zijn baas lacht. "Mark, het is zaterdag! Je hoeft vandaag niet te werken."', 'His boss laughs. "Mark, it is Saturday! You do not have to work today."'],
  ], [
    ['What time is it when Mark wakes up?', ['8:00', '8:30', '9:30'], 1, 'Half negen = half before nine = 8:30. Dutch counts the half towards the next hour.'],
    ['What does Mark skip?', ['the shower', 'coffee', 'breakfast'], 2, '"Hij heeft geen tijd voor ontbijt."'],
    ['Why does he call his boss?', ['he is ill', 'the bus does not come', 'it is raining'], 1, '"De bus komt niet."'],
    ['What is the surprise?', ['it is Saturday', 'his boss is late too', 'the office is closed for a holiday'], 0, '"Het is zaterdag! Je hoeft vandaag niet te werken."'],
  ]);

  story('a2-huisarts', 'A2', 'dialogue', 'Een afspraak bij de huisarts', 'Ahmed calls the doctor\'s practice because he is ill.', [
    ['Assistent', 'Huisartsenpraktijk De Linde, goedemorgen.', 'De Linde GP practice, good morning.'],
    ['Ahmed', 'Goedemorgen, u spreekt met Ahmed Benali. Ik wil graag een afspraak maken.', 'Good morning, this is Ahmed Benali. I would like to make an appointment.'],
    ['Assistent', 'Wat zijn de klachten?', 'What are the symptoms?'],
    ['Ahmed', 'Ik heb al vijf dagen keelpijn en ik heb een beetje koorts.', 'I have had a sore throat for five days and I have a slight fever.'],
    ['Assistent', 'Hoe hoog is de koorts?', 'How high is the fever?'],
    ['Ahmed', 'Gisteravond was het achtendertig vijf.', 'Last night it was thirty-eight point five.'],
    ['Assistent', 'Kunt u goed slikken en drinken?', 'Can you swallow and drink properly?'],
    ['Ahmed', 'Drinken gaat wel, maar eten doet pijn.', 'Drinking is all right, but eating hurts.'],
    ['Assistent', 'Dan kunt u vanmiddag om kwart over twee komen. Is dat goed?', 'Then you can come this afternoon at a quarter past two. Is that all right?'],
    ['Ahmed', 'Ja, dat is prima. Moet ik iets meenemen?', 'Yes, that is fine. Do I need to bring anything?'],
    ['Assistent', 'Neem uw identiteitsbewijs mee. En drink veel water.', 'Bring your ID. And drink plenty of water.'],
    ['Ahmed', 'Dank u wel. Tot vanmiddag.', 'Thank you. See you this afternoon.'],
  ], [
    ['How long has Ahmed had a sore throat?', ['two days', 'five days', 'a week'], 1, '"Ik heb al vijf dagen keelpijn." Al + time + present tense = has been going on for.'],
    ['What was his temperature last night?', ['37.5', '38.5', '39'], 1, 'Achtendertig vijf = 38.5. Dutch says the decimals without "komma" in speech.'],
    ['When is the appointment?', ['this afternoon at 2:15', 'tomorrow at 2:15', 'this afternoon at 1:45'], 0, 'Kwart over twee = 2:15. Vanmiddag = this afternoon.'],
    ['What must he bring?', ['his insurance card', 'his ID', 'a list of medicines'], 1, '"Neem uw identiteitsbewijs mee."'],
  ]);

  story('a2-verhuizing', 'A2', 'story', 'De verhuizing', 'Emma and Joost tell how they moved house last month.', [
    ['Vorige maand zijn Emma en Joost verhuisd.', 'Last month Emma and Joost moved house.'],
    ['Ze woonden in een klein appartement in het centrum van Rotterdam.', 'They lived in a small flat in the centre of Rotterdam.'],
    ['Toen hun dochter werd geboren, was het appartement te klein.', 'When their daughter was born, the flat was too small.'],
    ['Ze hebben lang gezocht en uiteindelijk een huis met een tuin gevonden, in Delft.', 'They searched for a long time and finally found a house with a garden, in Delft.'],
    ['De verhuisdag was zwaar. Het regende de hele dag en de lift in het oude gebouw was kapot.', 'Moving day was hard. It rained all day and the lift in the old building was broken.'],
    ['Gelukkig hielpen vier vrienden met de dozen.', 'Luckily four friends helped with the boxes.'],
    ['\'s Avonds hebben ze samen pizza gegeten tussen de dozen.', 'In the evening they ate pizza together among the boxes.'],
    ['Nu zijn ze blij. Joost fietst elke dag naar zijn werk en Emma werkt twee dagen per week thuis.', 'Now they are happy. Joost cycles to work every day and Emma works from home two days a week.'],
  ], [
    ['Why did they move?', ['their flat was too small after their daughter was born', 'they found a new job in Delft', 'the building was too old'], 0, '"Toen hun dochter werd geboren, was het appartement te klein."'],
    ['What went wrong on moving day?', ['the van broke down', 'it rained and the lift was broken', 'their friends did not come'], 1, '"Het regende de hele dag en de lift was kapot."'],
    ['What did they eat that evening?', ['pizza', 'Chinese food', 'chips'], 0, '"\'s Avonds hebben ze samen pizza gegeten."'],
    ['Which past tense is used in "Ze hebben lang gezocht"?', ['the simple past', 'the perfect tense', 'the future'], 1, 'Hebben + participle (gezocht) is the perfect tense. Woonden, hielpen and regende are simple past.'],
  ]);

  story('a2-sollicitatie', 'A2', 'dialogue', 'Het sollicitatiegesprek', 'Maria has a job interview for a receptionist position.', [
    ['Manager', 'Goedemiddag, gaat u zitten. Vertelt u eens iets over uzelf.', 'Good afternoon, please sit down. Tell me something about yourself.'],
    ['Maria', 'Ik ben Maria, ik ben vierendertig en ik kom uit Polen. Ik woon sinds drie jaar in Nederland.', 'I am Maria, I am thirty-four and I am from Poland. I have lived in the Netherlands for three years.'],
    ['Manager', 'U solliciteert naar de functie van receptionist. Waarom?', 'You are applying for the receptionist position. Why?'],
    ['Maria', 'Ik werk graag met mensen en ik spreek vier talen: Pools, Engels, Duits en een beetje Nederlands.', 'I like working with people and I speak four languages: Polish, English, German and a little Dutch.'],
    ['Manager', 'Wat voor werk heeft u hiervoor gedaan?', 'What kind of work did you do before this?'],
    ['Maria', 'Ik heb vijf jaar in een hotel in Krakau gewerkt, ook bij de receptie.', 'I worked in a hotel in Kraków for five years, also at reception.'],
    ['Manager', 'Wat zijn uw zwakke punten?', 'What are your weak points?'],
    ['Maria', 'Mijn Nederlands is nog niet perfect, maar ik volg twee keer per week een cursus.', 'My Dutch is not perfect yet, but I take a course twice a week.'],
    ['Manager', 'Dat is mooi. Kunt u ook in het weekend werken?', 'That is good. Can you also work at weekends?'],
    ['Maria', 'Op zaterdag wel, op zondag liever niet.', 'On Saturdays yes, on Sundays I would rather not.'],
  ], [
    ['How long has Maria lived in the Netherlands?', ['three years', 'four years', 'five years'], 0, '"Ik woon sinds drie jaar in Nederland." Sinds + present tense = for (still true now).'],
    ['Where did she work before?', ['in a shop in Poland', 'in a hotel in Kraków', 'at a school in Germany'], 1, '"Ik heb vijf jaar in een hotel in Krakau gewerkt."'],
    ['What does she call her weak point?', ['her Dutch', 'her experience', 'working with people'], 0, '"Mijn Nederlands is nog niet perfect."'],
    ['Can she work at weekends?', ['both days', 'Saturday, but preferably not Sunday', 'not at all'], 1, '"Op zaterdag wel, op zondag liever niet." Liever niet = rather not.'],
  ]);
})();
