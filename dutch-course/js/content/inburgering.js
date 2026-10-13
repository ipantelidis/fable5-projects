/* Inburgering track: Kennis van de Nederlandse Maatschappij (KNM) topics in simple Dutch (A2) with translations,
   and exam-style questions. Same format as the stories (read with the story reader), kept in C.knm.
   Facts are stable basics; numbers that change every year (amounts, fees) are deliberately left out. */
(function () {
  'use strict';
  const C = window.NL.content;
  C.knm = [];
  const topic = (id, icon, title, intro, lines, questions) => C.knm.push({ id, icon, level: 'A2', kind: 'knm', title, intro, lines: lines.map((l) => ({ nl: l[0], en: l[1] })), questions: questions.map(([q, options, answer, explain]) => ({ q, options, answer, explain })) });

  C.inburgering = {
    intro: 'Most people who move to the Netherlands from outside the EU have to "inburgeren": pass a civic integration exam within a few years. Under the law in force since 2022 the standard route asks for Dutch at level B1 and knowledge of Dutch society. The details depend on your situation and change over time, so always check the official sites.',
    parts: [
      ['Lezen, Luisteren, Schrijven, Spreken', 'The language exams. In the standard B1 route all four are at B1. Practise with Stage 3 (B1) and its exam in this course.', '#/stage/s3'],
      ['KNM', 'Kennis van de Nederlandse Maatschappij: knowledge of Dutch society. Questions about work, health, housing, education, history, politics and how people deal with each other. The topics below cover it.', null],
      ['MAP', 'Module Arbeidsmarkt en Participatie, run by your municipality: you explore work, volunteering and how the labour market works. (People who started before 2022 had a similar exam called ONA.) The Work topic below and the Stage 2 work unit help.', null],
      ['Participatieverklaring', 'A workshop about core Dutch values (freedom, equality, solidarity), ending with signing a declaration.', null],
    ],
    links: [['inburgeren.nl', 'https://www.inburgeren.nl'], ['DUO: inburgering', 'https://www.duo.nl/particulier/inburgeren/']],
  };

  topic('knm-staat', '\u{1F3DB}️', 'Politiek en de staat', 'How the Netherlands is governed.', [
    ['Nederland is een democratie en een constitutionele monarchie. De koning is het staatshoofd, maar hij heeft geen politieke macht.', 'The Netherlands is a democracy and a constitutional monarchy. The king is head of state, but he has no political power.'],
    ['De regering bestaat uit de koning en de ministers. De minister-president leidt het kabinet.', 'The government consists of the king and the ministers. The prime minister leads the cabinet.'],
    ['Het parlement heet de Staten-Generaal. Het heeft twee delen: de Tweede Kamer en de Eerste Kamer.', 'Parliament is called the States General. It has two parts: the House of Representatives and the Senate.'],
    ['De Tweede Kamer heeft 150 leden. Iedere Nederlander van 18 jaar of ouder mag ze kiezen, normaal gesproken eens in de vier jaar.', 'The House of Representatives has 150 members. Every Dutch citizen aged 18 or over may elect them, normally once every four years.'],
    ['Nederland heeft twaalf provincies. Elke gemeente heeft een gemeenteraad, die de inwoners kiezen.', 'The Netherlands has twelve provinces. Every municipality has a municipal council, which the residents elect.'],
    ['Bij de gemeenteraadsverkiezingen mogen ook buitenlanders stemmen: inwoners uit de EU meteen, anderen na vijf jaar legaal verblijf.', 'Foreign nationals may also vote in municipal elections: EU residents straight away, others after five years of legal residence.'],
    ['Artikel 1 van de Grondwet zegt dat iedereen in gelijke gevallen gelijk wordt behandeld. Discriminatie is verboden.', 'Article 1 of the Constitution says that everyone is treated equally in equal cases. Discrimination is forbidden.'],
  ], [
    ['Wie heeft de politieke macht in Nederland?', ['De koning.', 'De ministers, gecontroleerd door het parlement.', 'De burgemeesters.'], 1, 'The king is head of state without political power; ministers govern and parliament checks them.'],
    ['Hoeveel leden heeft de Tweede Kamer?', ['75', '100', '150'], 2, 'The Tweede Kamer has 150 members. The Eerste Kamer has 75.'],
    ['Fatima komt uit Marokko en woont zes jaar legaal in Utrecht. Ze is geen Nederlander. Mag ze stemmen voor de gemeenteraad?', ['Ja.', 'Nee, alleen Nederlanders mogen stemmen.', 'Alleen als ze werk heeft.'], 0, 'Non-EU residents may vote in municipal elections after five years of legal residence.'],
    ['Wat staat er in artikel 1 van de Grondwet?', ['Dat de koning het staatshoofd is.', 'Dat iedereen in gelijke gevallen gelijk wordt behandeld.', 'Dat iedereen moet werken.'], 1, 'Article 1: equal treatment and a ban on discrimination.'],
  ]);

  topic('knm-werk', '\u{1F4BC}', 'Werk en inkomen', 'Working, losing work, and income support.', [
    ['Bij een baan krijg je een arbeidscontract. Daarin staan je loon, je werktijden en hoe lang het contract duurt.', 'With a job you get an employment contract. It states your wages, your working hours and how long the contract lasts.'],
    ['In Nederland bestaat een wettelijk minimumloon. Je werkgever mag je niet minder betalen.', 'The Netherlands has a statutory minimum wage. Your employer may not pay you less.'],
    ['Bijna iedere werknemer krijgt in mei of juni vakantiegeld: minstens acht procent van het loon over het afgelopen jaar.', 'Almost every employee receives holiday pay in May or June: at least eight percent of the past year\'s wages.'],
    ['Ben je ziek, dan meld je je zo snel mogelijk ziek bij je werkgever, meestal voor het begin van je werkdag.', 'If you are ill, you report sick to your employer as soon as possible, usually before your working day starts.'],
    ['Verlies je je baan, dan kun je misschien een WW-uitkering krijgen. Die vraag je aan bij het UWV.', 'If you lose your job, you may be able to get unemployment benefit (WW). You apply for it at the UWV.'],
    ['Heb je geen werk en geen andere inkomsten, dan kun je bij de gemeente bijstand aanvragen.', 'If you have no work and no other income, you can apply to the municipality for social assistance (bijstand).'],
    ['Bij een laag inkomen kun je toeslagen krijgen, zoals zorgtoeslag en huurtoeslag. Die regel je via Dienst Toeslagen.', 'With a low income you can get allowances, such as healthcare and rent allowance. You arrange those through the Benefits Agency (Dienst Toeslagen).'],
  ], [
    ['Kees is ziek en kan vandaag niet werken. Wat moet hij doen?', ['Morgen een briefje meenemen.', 'Zich zo snel mogelijk ziek melden bij zijn werkgever.', 'Naar het UWV gaan.'], 1, 'You report sick to your employer straight away, usually before your shift starts.'],
    ['Nadia is haar baan kwijtgeraakt. Waar vraagt ze een WW-uitkering aan?', ['Bij het UWV.', 'Bij de gemeente.', 'Bij de Belastingdienst.'], 0, 'WW (unemployment benefit) is arranged by the UWV. Bijstand goes through the municipality.'],
    ['Wanneer krijg je meestal vakantiegeld?', ['In december.', 'In mei of juni.', 'Als je op vakantie gaat.'], 1, 'Holiday pay, at least 8% of your annual wage, is usually paid in May or June.'],
    ['Omar heeft een laag inkomen en betaalt veel huur. Waar kan hij misschien recht op hebben?', ['Huurtoeslag.', 'Kinderbijslag.', 'AOW.'], 0, 'Huurtoeslag (rent allowance) helps with rent on a low income. Kinderbijslag is for children, AOW is the state pension.'],
  ]);

  topic('knm-zorg', '\u{1FA7A}', 'Gezondheid en zorg', 'Doctors, insurance and emergencies.', [
    ['In Nederland ga je bij een gezondheidsprobleem eerst naar de huisarts. De huisarts verwijst je zo nodig naar een specialist.', 'In the Netherlands you go to your GP first with a health problem. The GP refers you to a specialist if needed.'],
    ['Iedereen die in Nederland woont of werkt, moet vanaf 18 jaar een basiszorgverzekering hebben.', 'Everyone who lives or works in the Netherlands must have basic health insurance from the age of 18.'],
    ['Kinderen tot 18 jaar zijn gratis meeverzekerd bij hun ouders.', 'Children up to 18 are insured free of charge on their parents\' policy.'],
    ['Er is een eigen risico: een bedrag dat je per jaar eerst zelf betaalt voor bepaalde zorg. Voor de huisarts betaal je dat niet.', 'There is a compulsory excess: an amount you pay yourself each year first for certain care. You do not pay it for the GP.'],
    ['\'s Avonds, \'s nachts en in het weekend bel je bij dringende klachten de huisartsenpost.', 'In the evenings, at night and at weekends you call the out-of-hours GP service (huisartsenpost) for urgent problems.'],
    ['Bij levensgevaar bel je 112. Dat nummer is voor ambulance, politie en brandweer.', 'When life is in danger you call 112. That number is for ambulance, police and fire brigade.'],
    ['Met een baby ga je regelmatig naar het consultatiebureau. Daar controleren ze de groei en krijgt je kind vaccinaties.', 'With a baby you go to the child health clinic regularly. They check growth there and your child gets vaccinations.'],
  ], [
    ['Yusuf heeft al een week rugpijn. Wat doet hij eerst?', ['Hij gaat naar het ziekenhuis.', 'Hij maakt een afspraak bij de huisarts.', 'Hij belt 112.'], 1, 'The GP is the first point of contact; the GP refers to a specialist if needed.'],
    ['Het is zaterdagavond. Uw kind heeft hoge koorts en wordt niet beter. Wie belt u?', ['De huisartsenpost.', 'Het consultatiebureau.', 'De gemeente.'], 0, 'Outside office hours, urgent but not life-threatening: the huisartsenpost.'],
    ['Wanneer bel je 112?', ['Als de huisarts gesloten is.', 'Bij levensgevaar of brand.', 'Als je een recept nodig hebt.'], 1, '112 is only for emergencies: danger to life, fire, crime in progress.'],
    ['Moet uw dochter van 10 jaar een eigen zorgverzekering afsluiten?', ['Ja, iedereen moet dat.', 'Nee, kinderen tot 18 zijn gratis meeverzekerd bij de ouders.', 'Alleen als ze naar school gaat.'], 1, 'Children under 18 are covered free on a parent\'s policy.'],
  ]);

  topic('knm-wonen', '\u{1F3E0}', 'Wonen', 'Renting, registering and living together with neighbours.', [
    ['Veel mensen huren een huis van een woningcorporatie. Voor een sociale huurwoning sta je vaak jaren op een wachtlijst.', 'Many people rent a home from a housing association. For a social rental home you are often on a waiting list for years.'],
    ['Als je verhuist, schrijf je je binnen vijf dagen in op je nieuwe adres bij de gemeente.', 'When you move, you register at your new address with the municipality within five days.'],
    ['Bij je inschrijving in Nederland krijg je een burgerservicenummer, het BSN. Dat heb je nodig voor werk, zorg en belastingen.', 'When you first register in the Netherlands you get a citizen service number, the BSN. You need it for work, healthcare and taxes.'],
    ['Een huurcontract is een afspraak tussen huurder en verhuurder. Lees het goed voordat je tekent.', 'A tenancy agreement is an agreement between tenant and landlord. Read it carefully before you sign.'],
    ['In de meeste gemeenten scheid je je afval: bijvoorbeeld papier, glas, plastic en groente- en fruitafval apart.', 'In most municipalities you separate your rubbish: for example paper, glass, plastic and vegetable and fruit waste separately.'],
    ['Bij overlast van buren praat je eerst zelf met ze. Helpt dat niet, dan kun je buurtbemiddeling vragen.', 'If neighbours cause a nuisance, you first talk to them yourself. If that does not help, you can ask for neighbourhood mediation.'],
  ], [
    ['Anna verhuist naar een andere straat in dezelfde stad. Wat moet ze doen?', ['Niets, het is dezelfde stad.', 'Zich binnen vijf dagen inschrijven op haar nieuwe adres bij de gemeente.', 'Een brief sturen naar de koning.'], 1, 'Every move must be registered with the municipality within five days.'],
    ['Waarvoor heb je je BSN nodig?', ['Alleen voor reizen naar het buitenland.', 'Onder andere voor werk, zorg en belastingen.', 'Alleen voor de bibliotheek.'], 1, 'The BSN is your personal number for dealings with government, employers and healthcare.'],
    ['Uw buren maken elke nacht lawaai. Wat doet u eerst?', ['De politie bellen.', 'Zelf met de buren praten.', 'Verhuizen.'], 1, 'Talking to the neighbours yourself first is the normal Dutch approach; then mediation.'],
    ['Wat is een woningcorporatie?', ['Een organisatie die vooral betaalbare huurwoningen verhuurt.', 'Een bank voor hypotheken.', 'Een afdeling van de politie.'], 0, 'Woningcorporaties own and rent out most social housing.'],
  ]);

  topic('knm-onderwijs', '\u{1F393}', 'Onderwijs en opvoeding', 'School, compulsory education and raising children.', [
    ['Kinderen mogen vanaf vier jaar naar de basisschool. Vanaf vijf jaar zijn ze leerplichtig.', 'Children may go to primary school from the age of four. From five, school is compulsory.'],
    ['De basisschool duurt acht jaar, van groep 1 tot en met groep 8.', 'Primary school lasts eight years, from group 1 to group 8.'],
    ['In groep 8 krijgen kinderen een schooladvies en maken ze een doorstroomtoets. Daarna gaan ze naar het vmbo, de havo of het vwo.', 'In group 8 children get a school recommendation and take a progression test. Then they go to vmbo, havo or vwo.'],
    ['Jongeren moeten naar school tot hun 16e, en tot hun 18e als ze nog geen startkwalificatie hebben, zoals een havo-diploma of een mbo-diploma op niveau 2.', 'Young people must attend school until 16, and until 18 if they do not yet have a basic qualification, such as a havo diploma or a level 2 mbo diploma.'],
    ['Ouders praten op school met de leerkracht, bijvoorbeeld bij het tienminutengesprek. Scholen verwachten dat ouders meedoen.', 'Parents talk to the teacher at school, for example at the ten-minute parents\' meeting. Schools expect parents to take part.'],
    ['In Nederland is het verboden om kinderen te slaan, ook voor ouders.', 'In the Netherlands it is forbidden to hit children, for parents too.'],
  ], [
    ['Vanaf welke leeftijd is een kind leerplichtig?', ['Vier jaar.', 'Vijf jaar.', 'Zes jaar.'], 1, 'Children may start at four; school is compulsory from five.'],
    ['Wat gebeurt er in groep 8?', ['Kinderen krijgen een schooladvies voor de middelbare school.', 'Kinderen leren lezen.', 'Kinderen gaan stage lopen.'], 0, 'Group 8 ends primary school with a recommendation and a progression test.'],
    ['Lina is 17 en heeft alleen een vmbo-diploma. Moet ze nog naar school?', ['Nee, ze is ouder dan 16.', 'Ja, tot haar 18e of tot ze een startkwalificatie heeft.', 'Alleen als ze dat zelf wil.'], 1, 'A vmbo diploma is not a startkwalificatie; the qualification duty runs until 18.'],
    ['Mogen ouders in Nederland hun kind slaan als straf?', ['Ja, als het niet te hard is.', 'Nee, dat is verboden.', 'Alleen thuis.'], 1, 'Physical punishment of children is prohibited by law.'],
  ]);

  topic('knm-omgang', '\u{1F91D}', 'Omgangsvormen en waarden', 'How people deal with each other, and core values.', [
    ['Nederlanders maken vaak afspraken, ook met vrienden en familie. Je komt niet zomaar langs.', 'Dutch people often make appointments, even with friends and family. You do not just drop by.'],
    ['Op tijd komen is belangrijk. Ben je te laat, dan laat je dat weten.', 'Being on time is important. If you are late, you let people know.'],
    ['Veel Nederlanders zeggen direct wat ze denken. Dat is meestal niet onbeleefd bedoeld.', 'Many Dutch people say directly what they think. It is usually not meant to be rude.'],
    ['Bij een verjaardag feliciteer je niet alleen de jarige, maar ook de familie: "Gefeliciteerd met je moeder!"', 'At a birthday you congratulate not only the person whose birthday it is, but also the family: "Congratulations on your mother!"'],
    ['Mannen en vrouwen hebben dezelfde rechten. Iedereen mag zelf kiezen met wie hij of zij trouwt, ook met iemand van hetzelfde geslacht.', 'Men and women have the same rights. Everyone may choose for themselves whom they marry, including someone of the same sex.'],
    ['Er is vrijheid van godsdienst en vrijheid van meningsuiting, maar je mag niet discrimineren of oproepen tot geweld.', 'There is freedom of religion and freedom of expression, but you may not discriminate or call for violence.'],
  ], [
    ['U wilt een vriendin bezoeken. Wat is in Nederland gebruikelijk?', ['Gewoon onverwacht aanbellen.', 'Eerst een afspraak maken.', 'Een brief sturen.'], 1, 'Dutch social life runs on appointments, even among friends.'],
    ['Uw collega zegt: "Ik vind je plan niet goed." Wat bedoelt hij waarschijnlijk?', ['Hij wil ruzie maken.', 'Hij geeft eerlijk zijn mening over het plan.', 'Hij wil dat u ontslag neemt.'], 1, 'Directness is about the matter, usually not a personal attack.'],
    ['Wie feliciteer je op een verjaardagsfeest?', ['Alleen de jarige.', 'De jarige en ook de familie.', 'Niemand, dat doe je met een kaart.'], 1, '"Gefeliciteerd met je vader!" is typical at Dutch birthday parties.'],
    ['Mogen twee mannen in Nederland met elkaar trouwen?', ['Ja.', 'Nee.', 'Alleen in Amsterdam.'], 0, 'Same-sex marriage has been legal in the Netherlands since 2001, the first country in the world.'],
  ]);

  topic('knm-geschiedenis', '\u{1F4DC}', 'Geschiedenis', 'Key moments in Dutch history.', [
    ['In de zestiende eeuw kwamen de Nederlanden in opstand tegen de Spaanse koning. Die strijd heet de Tachtigjarige Oorlog.', 'In the sixteenth century the Low Countries revolted against the Spanish king. That struggle is called the Eighty Years\' War.'],
    ['De zeventiende eeuw heet de Gouden Eeuw. Nederland was toen rijk door de handel, en schilders als Rembrandt werden beroemd.', 'The seventeenth century is called the Golden Age. The Netherlands was rich from trade then, and painters such as Rembrandt became famous.'],
    ['Nederland had ook koloniën en deed mee aan de slavenhandel. Op 1 juli herdenken en vieren veel mensen het einde van de slavernij: Keti Koti.', 'The Netherlands also had colonies and took part in the slave trade. On 1 July many people commemorate and celebrate the end of slavery: Keti Koti.'],
    ['Van 1940 tot 1945 was Nederland bezet door Duitsland. Meer dan honderdduizend Joden uit Nederland werden vermoord.', 'From 1940 to 1945 the Netherlands was occupied by Germany. More than a hundred thousand Jews from the Netherlands were murdered.'],
    ['Op 4 mei herdenken we de doden met twee minuten stilte. Op 5 mei vieren we Bevrijdingsdag.', 'On 4 May we remember the dead with two minutes of silence. On 5 May we celebrate Liberation Day.'],
    ['Na de oorlog werd Indonesië onafhankelijk. Later kwamen veel arbeidsmigranten, onder anderen uit Turkije en Marokko, naar Nederland.', 'After the war Indonesia became independent. Later many labour migrants came to the Netherlands, among others from Turkey and Morocco.'],
  ], [
    ['Wat herdenken we op 4 mei?', ['De verjaardag van de koning.', 'De doden van de oorlog, met twee minuten stilte.', 'Het einde van de Gouden Eeuw.'], 1, '4 May: Dodenherdenking, two minutes of silence at 20:00. 5 May: Bevrijdingsdag.'],
    ['Waarom heet de zeventiende eeuw de Gouden Eeuw?', ['Omdat er goud werd gevonden.', 'Omdat Nederland toen rijk was door de handel.', 'Omdat de koning toen veel macht had.'], 1, 'Trade made the Dutch Republic rich; art and science flourished.'],
    ['Wat is Keti Koti?', ['Een feest op Koningsdag.', 'De herdenking en viering van het einde van de slavernij.', 'Een Indonesisch gerecht.'], 1, 'Keti Koti ("chains cut") on 1 July marks the abolition of slavery in Suriname and the Caribbean.'],
    ['Van wanneer tot wanneer was Nederland bezet?', ['1914 tot 1918', '1940 tot 1945', '1945 tot 1949'], 1, 'The German occupation lasted from May 1940 to May 1945.'],
  ]);

  topic('knm-instanties', '\u{1F3E2}', 'Instanties', 'Which organisation does what.', [
    ['De gemeente regelt veel zaken dicht bij huis: je inschrijving, je paspoort, bijstand en hulp bij zorg thuis.', 'The municipality arranges many things close to home: your registration, your passport, social assistance and help with care at home.'],
    ['De Belastingdienst int de belastingen. Elk voorjaar doen veel mensen hun aangifte inkomstenbelasting.', 'The Tax Administration collects taxes. Every spring many people file their income tax return.'],
    ['Het UWV helpt bij werkloosheid en arbeidsongeschiktheid.', 'The UWV helps with unemployment and incapacity for work.'],
    ['De SVB betaalt de kinderbijslag en de AOW, het pensioen van de staat.', 'The SVB pays child benefit and the AOW, the state pension.'],
    ['DUO regelt studiefinanciering en ook de inburgeringsexamens.', 'DUO arranges student finance and also the civic integration exams.'],
    ['De IND beslist over verblijfsvergunningen en over het Nederlanderschap.', 'The IND decides on residence permits and on Dutch citizenship.'],
    ['Met DigiD log je in bij de meeste overheidsinstanties. Geef je DigiD nooit aan iemand anders.', 'With DigiD you log in to most government organisations. Never give your DigiD to anyone else.'],
  ], [
    ['Wie betaalt de kinderbijslag?', ['De gemeente.', 'De SVB.', 'Het UWV.'], 1, 'Kinderbijslag and AOW come from the SVB (Sociale Verzekeringsbank).'],
    ['Waar meld je je aan voor het inburgeringsexamen?', ['Bij DUO.', 'Bij de IND.', 'Bij de Belastingdienst.'], 0, 'DUO organises the inburgering exams.'],
    ['Een kennis vraagt om uw DigiD om "iets voor u te regelen". Wat doet u?', ['U geeft het, als het een goede kennis is.', 'U geeft het niet: DigiD is persoonlijk.', 'U geeft alleen uw wachtwoord.'], 1, 'DigiD is strictly personal; sharing it can make you liable for fraud done in your name.'],
    ['Wie beslist over uw verblijfsvergunning?', ['De gemeente.', 'De IND.', 'Het UWV.'], 1, 'The IND (Immigratie- en Naturalisatiedienst) handles residence permits and naturalisation.'],
  ]);
})();
