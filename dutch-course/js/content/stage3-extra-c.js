/* Stage 3 (B1) — extra lessons for Unit 5 (Milieu) and Unit 6 (Geld en bureaucratie): lessons 3 to 5 of each unit.
   Loaded after stage3-extra-b.js; lessons are appended to the existing units. */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson } = A;
  const addTo = (unitId, l) => { const f = A.findUnit(unitId); if (f) f.unit.lessons.push(l); };
  const S = { stage: 3 };

  /* ================= Unit 5, lesson 3: the energy transition ================= */
  N('energietransitie', 'de', null, 'energy transition', 'De energietransitie kost tijd en geld.', 'The energy transition costs time and money.', { theme: 'environment', ...S });
  N('warmtepomp', 'de', 'warmtepompen', 'heat pump', 'We hebben de cv-ketel vervangen door een warmtepomp.', 'We replaced the boiler with a heat pump.', { theme: 'environment', ...S });
  N('cv-ketel', 'de', 'cv-ketels', 'central heating boiler', 'De cv-ketel is vijftien jaar oud.', 'The boiler is fifteen years old.', { theme: 'environment', ...S });
  N('isolatie', 'de', null, 'insulation', 'Goede isolatie verlaagt de energierekening.', 'Good insulation lowers the energy bill.', { theme: 'environment', ...S });
  N('energierekening', 'de', 'energierekeningen', 'energy bill', 'Onze energierekening is verdubbeld.', 'Our energy bill has doubled.', { theme: 'environment', ...S });
  N('energielabel', 'het', 'energielabels', 'energy label', 'De woning heeft energielabel C.', 'The home has energy label C.', { theme: 'environment', ...S });
  N('subsidie', 'de', 'subsidies', 'subsidy / grant', 'Voor isolatie kun je subsidie aanvragen.', 'You can apply for a grant for insulation.', { theme: 'environment', ...S });
  N('stroom', 'de', null, 'electricity', 'We wekken zelf stroom op.', 'We generate our own electricity.', { theme: 'environment', ...S });
  N('kernenergie', 'de', null, 'nuclear energy', 'Over kernenergie wordt fel gediscussieerd.', 'Nuclear energy is fiercely debated.', { theme: 'environment', ...S });
  N('aardgas', 'het', null, 'natural gas', 'Nieuwe huizen krijgen geen aansluiting op aardgas meer.', 'New houses no longer get a natural gas connection.', { theme: 'environment', ...S });
  N('verbruik', 'het', null, 'consumption', 'Ons verbruik is gedaald sinds we zonnepanelen hebben.', 'Our consumption has fallen since we got solar panels.', { theme: 'environment', ...S });
  N('doelstelling', 'de', 'doelstellingen', 'target', 'De klimaatdoelstellingen voor 2030 worden niet gehaald.', 'The climate targets for 2030 are not being met.', { theme: 'environment', ...S });
  VB('verduurzamen', 'to make sustainable', 'verduurzaam|verduurzaamt|verduurzamen', 'verduurzaamde|verduurzaamden', 'verduurzaamd', 'hebben', 'De woningcorporatie verduurzaamt onze flat.', 'The housing association is making our block sustainable.', { theme: 'environment', ...S });
  VB('vervangen', 'to replace', 'vervang|vervangt|vervangen', 'verving|vervingen', 'vervangen', 'hebben', 'De ketel moet vervangen worden.', 'The boiler has to be replaced.', { theme: 'environment', ...S });
  VB('terugverdienen', 'to earn back', 'verdien terug|verdient terug|verdienen terug', 'verdiende terug|verdienden terug', 'terugverdiend', 'hebben', 'Zonnepanelen verdien je in zeven jaar terug.', 'You earn solar panels back in seven years.', { theme: 'environment', ...S });
  VB('afbouwen', 'to phase out', 'bouw af|bouwt af|bouwen af', 'bouwde af|bouwden af', 'afgebouwd', 'hebben', 'De gaswinning wordt afgebouwd.', 'Gas extraction is being phased out.', { theme: 'environment', ...S });
  W('betaalbaar', 'affordable', 'adj', 'Verduurzamen moet voor iedereen betaalbaar zijn.', 'Going sustainable must be affordable for everyone.', { theme: 'environment', ...S });
  W('haalbaar', 'feasible', 'adj', 'Is dat doel wel haalbaar?', 'Is that goal actually feasible?', { theme: 'environment', ...S });
  W('fossiel', 'fossil', 'adj', 'We moeten af van fossiele brandstoffen.', 'We have to get off fossil fuels.', { theme: 'environment', ...S });

  addTo('s3u5', lesson('s3u5l3', 'Van het gas af: the energy transition debate', 'You can follow and join the Dutch debate about getting off gas: costs, subsidies, heat pumps and who pays, using the passive with modals and zou.', [
    h('What the debate is about'),
    p('The Netherlands heated almost every home with `aardgas` from Groningen. Extraction caused earthquakes and is being `afgebouwd`, and climate targets require less `fossiele` energy. So homes must be `verduurzaamd`: better `isolatie`, `zonnepanelen`, a `warmtepomp` instead of the `cv-ketel`. The arguments are about money: who pays, is it `betaalbaar` for tenants and people on low incomes, and is the timetable `haalbaar`?'),
    h('Language of obligation and possibility in the passive'),
    table(['Dutch', 'English'], [['*De ketel moet vervangen worden.', 'The boiler has to be replaced.'], ['*Er kan subsidie aangevraagd worden.', 'A grant can be applied for.'], ['*Het huis zou beter geïsoleerd moeten worden.', 'The house should be better insulated.'], ['*De kosten worden in zeven jaar terugverdiend.', 'The costs are earned back in seven years.'], ['*Er wordt veel over gediscussieerd.', 'There is a lot of debate about it.']]),
    h('Arguments you will hear'),
    list('For: `Het is goed voor het klimaat.` `Op de lange termijn is het goedkoper.` `We worden minder afhankelijk van het buitenland.`', 'Against: `Een warmtepomp is duur.` `Huurders hebben er niets over te zeggen.` `Het stroomnet is vol.` `De regels veranderen steeds.`'),
    ex(['Onze flat wordt volgend jaar verduurzaamd: er komen zonnepanelen en de isolatie wordt verbeterd.', 'Our block is being made sustainable next year: solar panels are coming and the insulation is being improved.'], ['Een warmtepomp zou je in tien jaar kunnen terugverdienen, mits het huis goed geïsoleerd is.', 'You could earn a heat pump back in ten years, provided the house is well insulated.'], ['Voor isolatie kan subsidie worden aangevraagd bij de gemeente.', 'A grant for insulation can be applied for at the municipality.'], ['Volgens tegenstanders is de overstap voor veel gezinnen niet betaalbaar.', 'According to opponents the switch is not affordable for many families.']),
    tip('`van het gas af` (off gas) is the phrase everyone uses. `Wij zijn van het gas af` = our home no longer uses gas.'),
  ], ['g3-passive', 'g3-conditional'], ['energietransitie', 'warmtepomp', 'cv-ketel', 'isolatie', 'energierekening', 'energielabel', 'subsidie', 'stroom', 'kernenergie', 'aardgas', 'verbruik', 'doelstelling', 'verduurzamen', 'vervangen', 'terugverdienen', 'afbouwen', 'betaalbaar', 'haalbaar', 'fossiel'], [
    mc('"Van het gas af" means', ['the gas is off today', 'no longer using natural gas', 'gas is cheaper'], 1, 'Off gas.'),
    mc('De ketel moet ___.', ['vervangen worden', 'vervangt worden', 'wordt vervangen'], 0, 'modal + participle + worden.'),
    mc('Het huis zou beter geïsoleerd ___.', ['moeten worden', 'moet wordt', 'worden moet hebben'], 0, 'zou … moeten worden.'),
    mc('"Terugverdienen" means', ['to pay back a loan', 'to earn back an investment', 'to return goods'], 1, 'earn back.'),
    mc('"Betaalbaar" means', ['payable tomorrow', 'affordable', 'paid'], 1, 'betalen + baar.'),
    art('energielabel', 'het', 'het label.'),
    art('warmtepomp', 'de', 'de pomp.'),
    art('verbruik', 'het', 'het verbruik.'),
    fill('Er kan subsidie ___ worden. (aanvragen)', ['aangevraagd'], 'A grant can be applied for.', 'aan + ge + vraagd.'),
    fill('De gaswinning wordt ___. (afbouwen)', ['afgebouwd'], 'Gas extraction is being phased out.', 'af + ge + bouwd.'),
    fill('Onze energierekening is ___. (doubled)', ['verdubbeld'], 'Our energy bill has doubled.', 'verdubbelen → verdubbeld.'),
    fill('We moeten af van ___ brandstoffen. (fossil)', ['fossiele'], 'We have to get off fossil fuels.', 'plural → -e.'),
    build('The costs are earned back in seven years.', 'De kosten worden in zeven jaar terugverdiend.', ['wordt', 'verdienen terug'], 'Plural: worden … terugverdiend.'),
    build('A grant can be applied for at the municipality.', 'Er kan subsidie worden aangevraagd bij de gemeente.', ['aanvragen', 'Het'], 'er kan … worden aangevraagd.'),
    build('Is that target feasible?', 'Is die doelstelling haalbaar?', ['dat', 'haalbare'], 'de doelstelling → die.'),
    tr('en-nl', 'Our block is being made sustainable next year.', ['Onze flat wordt volgend jaar verduurzaamd.'], 'wordt verduurzaamd.'),
    tr('nl-en', 'Volgens tegenstanders is de overstap voor veel gezinnen niet betaalbaar.', ['According to opponents the switch is not affordable for many families.'], 'volgens + inversion.'),
    fix('De ketel moet worden vervangt.', ['De ketel moet worden vervangen.', 'De ketel moet vervangen worden.'], 'Participle: vervangen.'),
    dict('Voor isolatie kan subsidie worden aangevraagd bij de gemeente.', 'A grant for insulation can be applied for at the municipality.', 'kan … worden aangevraagd.'),
    listen('Nieuwe huizen krijgen geen aansluiting op aardgas meer en worden verwarmd met een warmtepomp.', ['New houses no longer get a gas connection and are heated with a heat pump.', 'New houses are heated with gas.', 'Old houses lose their gas connection tomorrow.'], 0, 'geen … meer; worden verwarmd.'),
    speak('Ik vind dat verduurzamen voor iedereen betaalbaar moet zijn, ook voor huurders.', 'I think going sustainable must be affordable for everyone, including tenants.'),
    free('Give your opinion on the energy transition in your own home or country: one advantage, one problem, one thing that should be done.', 'Bij ons wordt de flat volgend jaar geïsoleerd. Het voordeel is dat de energierekening daalt. Het probleem is dat huurders er weinig over te zeggen hebben. Volgens mij zou de overheid meer subsidie moeten geven aan mensen met een laag inkomen.', 'Our block is being insulated next year. The advantage is that the energy bill goes down. The problem is that tenants have little say in it. In my view the government should give more grants to people on low incomes.', { hints: ['Het voordeel is dat …', 'Het probleem is dat …', 'Volgens mij zou … moeten …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"De cv-ketel" is', ['a kettle', 'a central heating boiler', 'a solar panel'], 1, 'Boiler.'),
    fill('Een warmtepomp verdien je in tien jaar ___.', ['terug'], 'You earn a heat pump back in ten years.', 'terugverdienen.'),
    fill('De isolatie wordt ___. (verbeteren)', ['verbeterd'], 'The insulation is being improved.', 'ver- verb: verbeterd.'),
    build('The boiler has to be replaced.', 'De ketel moet vervangen worden.', ['vervangt', 'wordt'], 'moet vervangen worden.'),
    tr('en-nl', 'We generate our own electricity.', ['We wekken zelf stroom op.', 'Wij wekken zelf stroom op.'], 'opwekken.'),
    speak('Op de lange termijn is het goedkoper, maar voor veel gezinnen is het nu niet betaalbaar.', 'In the long term it is cheaper, but for many families it is not affordable now.'),
  ]));

  /* ================= Unit 5, lesson 4: transport and mobility ================= */
  N('openbaar vervoer', 'het', null, 'public transport', 'Het openbaar vervoer is duur geworden.', 'Public transport has become expensive.', { theme: 'transport', ...S, id: 'openbaar-vervoer', altNl: ['ov'] });
  N('spits', 'de', null, 'rush hour', 'In de spits zijn de treinen vol.', 'In rush hour the trains are full.', { theme: 'transport', ...S });
  N('deelauto', 'de', "deelauto's", 'shared car', 'We hebben geen eigen auto, maar gebruiken een deelauto.', 'We have no car of our own, but use a shared car.', { theme: 'transport', ...S });
  N('elektrische fiets', 'de', 'elektrische fietsen', 'e-bike', 'Met een elektrische fiets kun je verder forenzen.', 'With an e-bike you can commute further.', { theme: 'transport', ...S, id: 'elektrische-fiets', altNl: ['e-bike'] });
  N('bakfiets', 'de', 'bakfietsen', 'cargo bike', 'De kinderen zitten in de bakfiets.', 'The children are in the cargo bike.', { theme: 'transport', ...S });
  N('laadpaal', 'de', 'laadpalen', 'charging point', 'Er zijn te weinig laadpalen in onze straat.', 'There are too few charging points in our street.', { theme: 'transport', ...S });
  N('milieuzone', 'de', 'milieuzones', 'low-emission zone', 'Oude dieselauto’s mogen de milieuzone niet in.', 'Old diesel cars may not enter the low-emission zone.', { theme: 'transport', ...S });
  N('snelweg', 'de', 'snelwegen', 'motorway', 'Op de snelweg mag je overdag 100 rijden.', 'On the motorway you may drive 100 during the day.', { theme: 'transport', ...S });
  N('maximumsnelheid', 'de', null, 'speed limit', 'In de stad is de maximumsnelheid 30.', 'In the city the speed limit is 30.', { theme: 'transport', ...S });
  N('forens', 'de', 'forenzen', 'commuter', 'Forenzen staan elke ochtend in de file.', 'Commuters are in the traffic jam every morning.', { theme: 'transport', ...S });
  N('reiskostenvergoeding', 'de', null, 'travel allowance', 'Ik krijg een reiskostenvergoeding van mijn werkgever.', 'I get a travel allowance from my employer.', { theme: 'transport', ...S });
  N('voetganger', 'de', 'voetgangers', 'pedestrian', 'Voetgangers hebben hier voorrang.', 'Pedestrians have right of way here.', { theme: 'transport', ...S });
  N('voorrang', 'de', null, 'right of way', 'Verkeer van rechts heeft voorrang.', 'Traffic from the right has right of way.', { theme: 'transport', ...S });
  VB('forenzen', 'to commute', 'forens|forenst|forenzen', 'forensde|forensden', 'geforensd', 'hebben', 'Ik forens elke dag tussen Amsterdam en Utrecht.', 'I commute every day between Amsterdam and Utrecht.', { theme: 'transport', ...S });
  VB('opladen', 'to charge', 'laad op|laadt op|laden op', 'laadde op|laadden op', 'opgeladen', 'hebben', 'Ik laad de auto ’s nachts op.', 'I charge the car at night.', { theme: 'transport', ...S });
  VB('delen', 'to share', 'deel|deelt|delen', 'deelde|deelden', 'gedeeld', 'hebben', 'We delen een auto met de buren.', 'We share a car with the neighbours.', { theme: 'transport', ...S });
  VB('stimuleren', 'to encourage', 'stimuleer|stimuleert|stimuleren', 'stimuleerde|stimuleerden', 'gestimuleerd', 'hebben', 'De gemeente stimuleert het gebruik van de fiets.', 'The municipality encourages cycling.', { theme: 'transport', ...S });
  W('autoluw', 'low-traffic', 'adj', 'De binnenstad wordt autoluw.', 'The city centre is becoming low-traffic.', { theme: 'transport', ...S });
  W('bereikbaar', 'accessible / reachable', 'adj', 'Het kantoor is goed bereikbaar met de trein.', 'The office is easy to reach by train.', { theme: 'transport', ...S });

  addTo('s3u5', lesson('s3u5l4', 'Getting around: transport and mobility', 'You can compare ways of travelling, talk about commuting and traffic policy, and build and decode transport compounds.', [
    h('How the Dutch move'),
    p('More bikes than people, a dense rail network, and crowded motorways. Policy words you will meet: `autoluw` (low-traffic), `milieuzone`, `maximumsnelheid 30`, `deelauto`, `laadpaal`, `reiskostenvergoeding`. Many employers pay your `ov` or a bike scheme.'),
    h('Compounds: read from the right'),
    table(['compound', 'parts', 'meaning'], [['*reiskostenvergoeding', 'reis + kosten + vergoeding', 'allowance for travel costs'], ['*maximumsnelheid', 'maximum + snelheid', 'speed limit'], ['*laadpaal', 'laad + paal', 'charging post'], ['*deelauto', 'deel + auto', 'shared car'], ['*milieuzone', 'milieu + zone', 'environment zone'], ['*bakfiets', 'bak + fiets', 'bike with a box']]),
    p('The last part sets the gender: **de** vergoeding → **de** reiskostenvergoeding. `-baar` and `-luw` make adjectives: `bereikbaar` (reachable), `autoluw` (with few cars).'),
    h('Comparing'),
    p('`De trein is sneller dan de auto, maar duurder.` `Met de fiets ben je in de stad het snelst.` `Hoe drukker het wordt, hoe vaker ik thuiswerk.` `Het ov is niet zo betrouwbaar als vroeger.`'),
    ex(['Ik forens met de trein, want in de spits sta je met de auto altijd in de file.', 'I commute by train, because in rush hour you are always in a traffic jam by car.'], ['De binnenstad wordt autoluw; er komen meer fietspaden en minder parkeerplaatsen.', 'The city centre is becoming low-traffic; there will be more cycle paths and fewer parking spaces.'], ['We hebben de tweede auto verkocht en gebruiken nu een deelauto.', 'We sold the second car and now use a shared car.'], ['Mijn werkgever betaalt een reiskostenvergoeding van 23 cent per kilometer.', 'My employer pays a travel allowance of 23 cents per kilometre.']),
    tip('On a Dutch cycle path: keep right, signal with your arm, and never stop on the path to look at your phone.'),
  ], ['g3-word-formation', 'g3-passive'], ['openbaar-vervoer', 'spits', 'deelauto', 'elektrische-fiets', 'bakfiets', 'laadpaal', 'milieuzone', 'snelweg', 'maximumsnelheid', 'forens', 'reiskostenvergoeding', 'voetganger', 'voorrang', 'forenzen', 'opladen', 'delen', 'stimuleren', 'autoluw', 'bereikbaar'], [
    mc('"De reiskostenvergoeding": which article?', ['de', 'het'], 0, 'Last part: de vergoeding.'),
    mc('"Autoluw" means', ['without any cars', 'with few cars', 'car-friendly'], 1, '-luw = low in.'),
    mc('"Bereikbaar" means', ['reachable', 'ready', 'rich'], 0, 'bereiken + baar.'),
    mc('"In de spits" means', ['at the top', 'in rush hour', 'in a hurry'], 1, 'rush hour.'),
    mc('Traffic from the right', ['has right of way', 'must wait', 'is forbidden'], 0, 'Verkeer van rechts heeft voorrang.'),
    art('laadpaal', 'de', 'de paal.'),
    art('openbaar vervoer', 'het', 'het vervoer.'),
    plural('de forens', ['forenzen'], 's → z.'),
    fill('Ik ___ elke dag tussen Amsterdam en Utrecht. (forenzen)', ['forens'], 'I commute between Amsterdam and Utrecht every day.', 'ik forens.'),
    fill('Met de fiets ben je in de stad het ___. (snel)', ['snelst'], 'By bike you are fastest in the city.', 'het snelst.'),
    fill('Er zijn te weinig ___ in onze straat. (charging points)', ['laadpalen'], 'There are too few charging points in our street.', 'laadpaal → laadpalen.'),
    fill('Ik laad de auto ’s nachts ___.', ['op'], 'I charge the car at night.', 'opladen.'),
    build('The train is faster than the car, but more expensive.', 'De trein is sneller dan de auto, maar duurder.', ['als', 'meer duur'], 'sneller dan; duurder.'),
    build('We share a car with the neighbours.', 'We delen een auto met de buren.', ['deelt', 'van'], 'delen met.'),
    build('The city centre is becoming low-traffic.', 'De binnenstad wordt autoluw.', ['is', 'autoluwe'], 'wordt + adjective.'),
    tr('en-nl', 'The office is easy to reach by train.', ['Het kantoor is goed bereikbaar met de trein.', 'Het kantoor is met de trein goed bereikbaar.'], 'goed bereikbaar.'),
    tr('nl-en', 'Hoe drukker het wordt, hoe vaker ik thuiswerk.', ['The busier it gets, the more often I work from home.'], 'hoe … hoe.'),
    fix('Ik krijg een reis kosten vergoeding.', ['Ik krijg een reiskostenvergoeding.'], 'One word.'),
    dict('In de spits sta je met de auto altijd in de file.', 'In rush hour you are always in a traffic jam by car.', 'spits; file.'),
    listen('Oude dieselauto’s mogen de milieuzone niet meer in; wie dat toch doet, krijgt een boete.', ['Old diesel cars may no longer enter the low-emission zone; whoever does so anyway gets a fine.', 'All cars are banned from the city.', 'Diesel cars get a discount in the zone.'], 0, 'mogen … niet meer in; boete.'),
    speak('Ik ga meestal met de fiets, maar als het regent neem ik het openbaar vervoer.', 'I usually go by bike, but when it rains I take public transport.'),
    free('Compare two ways of getting to your work or school: time, cost, comfort, and which you prefer.', 'Met de fiets doe ik er twintig minuten over en het kost niets. Met de tram ben ik even snel, maar in de spits is hij vol. Ik ga dus het liefst met de fiets, behalve als het regent.', 'By bike it takes me twenty minutes and it costs nothing. By tram I am just as fast, but in rush hour it is full. So I prefer to go by bike, except when it rains.', { hints: ['Met de … doe ik er … over', '… is sneller / duurder dan …', 'Ik ga het liefst …'] }),
    match([['de spits', 'rush hour'], ['de deelauto', 'shared car'], ['de laadpaal', 'charging point'], ['de voorrang', 'right of way'], ['autoluw', 'low-traffic'], ['forenzen', 'to commute']]),
  ], [
    mc('"De bakfiets" is', ['a broken bike', 'a cargo bike', 'a racing bike'], 1, 'Cargo bike.'),
    fill('Voetgangers hebben hier ___.', ['voorrang'], 'Pedestrians have right of way here.', 'voorrang hebben.'),
    fill('In de stad is de ___ dertig. (speed limit)', ['maximumsnelheid'], 'In the city the speed limit is thirty.', 'maximumsnelheid.'),
    build('The municipality encourages cycling.', 'De gemeente stimuleert het fietsen.', ['stimuleren', 'de fietsen'], 'het + infinitive as a noun.'),
    tr('en-nl', 'Public transport has become expensive.', ['Het openbaar vervoer is duur geworden.'], 'is … geworden.'),
    speak('De trein is sneller dan de auto, maar niet zo betrouwbaar als vroeger.', 'The train is faster than the car, but not as reliable as it used to be.'),
  ]));

  /* ================= Unit 5, lesson 5: a letter to the gemeente ================= */
  N('melding', 'de', 'meldingen', 'report (to the council)', 'Ik heb een melding gedaan over het zwerfafval.', 'I made a report about the litter.', { theme: 'neighbourhood', ...S });
  N('zwerfafval', 'het', null, 'litter', 'Er ligt veel zwerfafval in het park.', 'There is a lot of litter in the park.', { theme: 'neighbourhood', ...S });
  N('container', 'de', 'containers', 'container / bin', 'De ondergrondse container zit al dagen vol.', 'The underground container has been full for days.', { theme: 'neighbourhood', ...S });
  N('straatverlichting', 'de', null, 'street lighting', 'De straatverlichting is al een week kapot.', 'The street lighting has been broken for a week.', { theme: 'neighbourhood', ...S });
  N('stoeptegel', 'de', 'stoeptegels', 'paving slab', 'Er ligt een stoeptegel los.', 'A paving slab is loose.', { theme: 'neighbourhood', ...S });
  N('speeltoestel', 'het', 'speeltoestellen', 'piece of play equipment', 'Het speeltoestel is gevaarlijk geworden.', 'The play equipment has become dangerous.', { theme: 'neighbourhood', ...S });
  N('groenvoorziening', 'de', 'groenvoorzieningen', 'public green space', 'Wij willen meer groenvoorzieningen in de wijk.', 'We want more green spaces in the district.', { theme: 'neighbourhood', ...S });
  N('bewoner', 'de', 'bewoners', 'resident', 'De bewoners van onze straat hebben een brief geschreven.', 'The residents of our street have written a letter.', { theme: 'neighbourhood', ...S });
  N('handtekening', 'de', 'handtekeningen', 'signature', 'We hebben veertig handtekeningen verzameld.', 'We collected forty signatures.', { theme: 'neighbourhood', ...S });
  N('voorstel', 'het', 'voorstellen', 'proposal', 'Wij doen het volgende voorstel.', 'We make the following proposal.', { theme: 'neighbourhood', ...S });
  VB('melden', 'to report', 'meld|meldt|melden', 'meldde|meldden', 'gemeld', 'hebben', 'U kunt overlast online melden.', 'You can report nuisance online.', { theme: 'neighbourhood', ...S });
  VB('ophalen', 'to collect', 'haal op|haalt op|halen op', 'haalde op|haalden op', 'opgehaald', 'hebben', 'Het grofvuil wordt op afspraak opgehaald.', 'Bulky waste is collected by appointment.', { theme: 'neighbourhood', ...S });
  VB('herstellen', 'to repair / restore', 'herstel|herstelt|herstellen', 'herstelde|herstelden', 'hersteld', 'hebben', 'De stoep is nog steeds niet hersteld.', 'The pavement has still not been repaired.', { theme: 'neighbourhood', ...S });
  VB('aandringen op', 'to press for', 'dring aan op|dringt aan op|dringen aan op', 'drong aan op|drongen aan op', 'aangedrongen op', 'hebben', 'Wij dringen aan op een snelle oplossing.', 'We press for a quick solution.', { theme: 'formal', ...S, id: 'aandringen-op' });
  PH('Namens de bewoners van …', 'On behalf of the residents of …', 'Namens de bewoners van de Javastraat schrijf ik u deze brief.', 'On behalf of the residents of the Javastraat I am writing you this letter.', { theme: 'formal', ...S, id: 'ph-namens' });
  PH('Wij verzoeken u …', 'We request you …', 'Wij verzoeken u de verlichting zo spoedig mogelijk te herstellen.', 'We request you to repair the lighting as soon as possible.', { theme: 'formal', ...S, id: 'ph-wij-verzoeken-u' });
  PH('Graag vernemen wij …', 'We would like to hear …', 'Graag vernemen wij binnen twee weken uw reactie.', 'We would like to hear your response within two weeks.', { theme: 'formal', ...S, id: 'ph-graag-vernemen-wij' });
  W('herhaaldelijk', 'repeatedly', 'adv', 'Wij hebben dit herhaaldelijk gemeld.', 'We have reported this repeatedly.', { theme: 'formal', ...S });

  addTo('s3u5', lesson('s3u5l5', 'Writing to the gemeente about your neighbourhood', 'You can report a problem in your street and write a formal letter to the municipality: the facts, what has been tried, a clear request and a deadline.', [
    h('First: a melding'),
    p('Most problems start with an online `melding` (report): `zwerfafval`, a full `container`, broken `straatverlichting`, a loose `stoeptegel`. Note the date and the number; you will need them in your letter.'),
    h('The formal letter, in five blocks'),
    table(['block', 'frames'], [['opening', '*Geachte heer, mevrouw, / Geacht college,'], ['who and why', '*Namens de bewoners van … schrijf ik u over …'], ['facts', '*Sinds … is … / Op 3 mei is een melding gedaan (nummer …). Er is sindsdien niets gebeurd.'], ['request', '*Wij verzoeken u … te … / Wij dringen aan op …'], ['deadline and close', '*Graag vernemen wij binnen twee weken uw reactie. Met vriendelijke groet,']]),
    h('Formal grammar at work'),
    list('Passive: `De verlichting **is** nog steeds niet **hersteld**.` `Het afval **wordt** niet **opgehaald**.`', 'te + infinitive after verzoeken: `Wij verzoeken u de container vaker **te legen**.`', 'Facts before feelings; one request per letter; a concrete deadline.', '`u` throughout, no particles, no exclamation marks.'),
    ex(['Namens de bewoners van de Javastraat schrijf ik u over de kapotte straatverlichting.', 'On behalf of the residents of the Javastraat I am writing to you about the broken street lighting.'], ['Op 3 mei is hiervan een melding gedaan; sindsdien is er niets gebeurd.', 'On 3 May a report was made about this; since then nothing has happened.'], ['Wij verzoeken u de verlichting zo spoedig mogelijk te herstellen.', 'We request you to repair the lighting as soon as possible.'], ['Graag vernemen wij binnen twee weken wat u gaat doen.', 'We would like to hear within two weeks what you are going to do.']),
    tip('Forty signatures and one clear request work better than four pages of anger. Dutch officials answer letters that are easy to answer.'),
  ], ['g3-register', 'g3-passive'], ['melding', 'zwerfafval', 'container', 'straatverlichting', 'stoeptegel', 'speeltoestel', 'groenvoorziening', 'bewoner', 'handtekening', 'voorstel', 'melden', 'ophalen', 'herstellen', 'aandringen-op', 'ph-namens', 'ph-wij-verzoeken-u', 'ph-graag-vernemen-wij', 'herhaaldelijk'], [
    mc('What do you usually do first about a loose paving slab?', ['write to the mayor', 'make an online melding', 'call 112'], 1, 'Een melding doen.'),
    mc('Most suitable opening for a letter to the gemeente:', ['Hoi gemeente,', 'Geachte heer, mevrouw,', 'Beste allemaal,'], 1, 'Formal.'),
    mc('Wij verzoeken u de container vaker ___.', ['legen', 'te legen', 'om legen'], 1, 'verzoeken + te.'),
    mc('"Namens de bewoners" means', ['in the name of / on behalf of the residents', 'against the residents', 'next to the residents'], 0, 'namens.'),
    mc('De verlichting ___ nog steeds niet hersteld.', ['is', 'heeft', 'wordt geweest'], 0, 'Perfect passive: is … hersteld.'),
    art('zwerfafval', 'het', 'het afval.'),
    art('melding', 'de', '-ing → de.'),
    art('speeltoestel', 'het', 'het toestel.'),
    fill('Op 3 mei is een melding ___. (doen)', ['gedaan'], 'On 3 May a report was made.', 'een melding doen → gedaan.'),
    fill('Het grofvuil wordt op afspraak ___. (ophalen)', ['opgehaald'], 'Bulky waste is collected by appointment.', 'op + gehaald.'),
    fill('Wij dringen aan ___ een snelle oplossing.', ['op'], 'We press for a quick solution.', 'aandringen op.'),
    fill('Graag ___ wij binnen twee weken uw reactie.', ['vernemen'], 'We would like to hear your response within two weeks.', 'vernemen (formal).'),
    build('Since then nothing has happened.', 'Sindsdien is er niets gebeurd.', ['er is', 'heeft'], 'Inversion; gebeuren takes zijn.'),
    build('We request you to repair the lighting as soon as possible.', 'Wij verzoeken u de verlichting zo spoedig mogelijk te herstellen.', ['herstellen te', 'vragen'], 'verzoeken u … te herstellen.'),
    build('We collected forty signatures.', 'We hebben veertig handtekeningen verzameld.', ['verzamelen', 'handtekening'], 'hebben … verzameld.'),
    tr('en-nl', 'We have reported this repeatedly.', ['Wij hebben dit herhaaldelijk gemeld.', 'We hebben dit herhaaldelijk gemeld.'], 'herhaaldelijk.'),
    tr('nl-en', 'De ondergrondse container zit al dagen vol en het afval wordt niet opgehaald.', ['The underground container has been full for days and the waste is not being collected.'], 'al dagen; wordt niet opgehaald.'),
    fix('Beste gemeente, de lamp is kapot!!! Doe er iets aan!', ['Geachte heer, mevrouw, de straatverlichting is kapot. Wij verzoeken u deze te herstellen.'], 'Formal register: Geachte, facts, a request; no exclamation marks.'),
    dict('Namens de bewoners van onze straat schrijf ik u over het zwerfafval in het park.', 'On behalf of the residents of our street I am writing to you about the litter in the park.', 'namens; schrijf ik u.'),
    listen('Uw melding is ontvangen en wordt binnen vijf werkdagen behandeld.', ['Your report has been received and will be dealt with within five working days.', 'Your report was rejected.', 'You must report again in five days.'], 0, 'is ontvangen; wordt behandeld.'),
    read('Geacht college, Namens 34 bewoners van de Celebesstraat schrijf ik u over het speeltuintje op de hoek. Sinds februari is het klimrek afgezet met linten, omdat een van de palen verrot is. Op 12 februari en op 3 april is hiervan een melding gedaan (nummers 48211 en 51377). Beide keren kregen wij het bericht dat het "in behandeling" is, maar er is niets gebeurd. Intussen spelen de kinderen op straat, wat gevaarlijk is. Wij verzoeken u het speeltoestel vóór de zomervakantie te herstellen of te vervangen. Graag vernemen wij binnen twee weken wat u gaat doen. Met vriendelijke groet, S. Taylor, mede namens de bewoners (handtekeningen in de bijlage)', [
      { q: 'What is the problem?', options: ['litter in the playground', 'a rotten climbing frame that has been closed off since February', 'too much traffic'], answer: 1, explain: '"het klimrek afgezet … een van de palen verrot".' },
      { q: 'What has already been done?', options: ['nothing', 'two reports were made', 'the council repaired it'], answer: 1, explain: 'Two meldingen with numbers.' },
      { q: 'What exactly do the residents ask?', options: ['a new playground', 'repair or replacement before the summer holiday, and an answer within two weeks', 'compensation'], answer: 1, explain: 'One clear request and a deadline.' },
    ], { en: 'Dear Mayor and Aldermen, On behalf of 34 residents of the Celebesstraat I am writing to you about the small playground on the corner. Since February the climbing frame has been closed off with tape, because one of the posts is rotten. On 12 February and on 3 April a report was made (numbers 48211 and 51377). Both times we were told that it is "being dealt with", but nothing has happened. Meanwhile the children play in the street, which is dangerous. We request you to repair or replace the play equipment before the summer holiday. We would like to hear within two weeks what you are going to do. Kind regards, S. Taylor, also on behalf of the residents (signatures attached)' }),
    write('Write a formal letter (100 to 130 words) to the gemeente about a real or invented problem in your street.', ['Geachte heer, mevrouw, (or Geacht college,)', 'Who you write for and about what (Namens … schrijf ik u over …)', 'Facts with dates; mention a melding if there was one', 'One request with Wij verzoeken u … te …', 'A deadline (binnen twee weken / vóór …)', 'Passive at least once; u throughout; Met vriendelijke groet, + name'], 'Geachte heer, mevrouw, Namens de bewoners van de Balistraat schrijf ik u over de ondergrondse afvalcontainer bij nummer 40. Sinds begin maart zit de container bijna elke week al op woensdag vol, waardoor er vuilniszakken naast worden gezet. Dat trekt ratten en meeuwen aan. Op 5 en 19 maart is hiervan een melding gedaan, maar de container wordt nog steeds maar één keer per week geleegd. Wij verzoeken u de container twee keer per week te laten legen. Graag vernemen wij binnen twee weken uw reactie. Met vriendelijke groet, Sam Taylor'),
    speak('Wij hebben dit herhaaldelijk gemeld, maar er is nog steeds niets gebeurd.', 'We have reported this repeatedly, but still nothing has happened.'),
  ], [
    mc('"Zwerfafval" is', ['household waste', 'litter in public space', 'garden waste'], 1, 'Litter.'),
    fill('Wij verzoeken u de stoep ___ herstellen.', ['te'], 'We request you to repair the pavement.', 'te.'),
    fill('___ de bewoners schrijf ik u deze brief.', ['Namens'], 'On behalf of the residents I am writing you this letter.', 'namens.'),
    build('You can report nuisance online.', 'U kunt overlast online melden.', ['meldt', 'kan u'], 'kunt … melden.'),
    tr('en-nl', 'The street lighting has been broken for a week.', ['De straatverlichting is al een week kapot.'], 'al een week.'),
    speak('Graag vernemen wij binnen twee weken wat u gaat doen.', 'We would like to hear within two weeks what you are going to do.'),
  ]));

  /* ================= Unit 6, lesson 3: the tax return ================= */
  N('aangifte', 'de', 'aangiftes', 'tax return / declaration', 'Ik heb mijn aangifte al ingestuurd.', 'I have already submitted my tax return.', { theme: 'money', ...S });
  N('jaaropgaaf', 'de', 'jaaropgaven', 'annual income statement', 'Je werkgever stuurt in januari een jaaropgaaf.', 'Your employer sends an annual statement in January.', { theme: 'money', ...S });
  N('loonheffing', 'de', null, 'wage tax', 'De loonheffing wordt van je salaris ingehouden.', 'Wage tax is withheld from your salary.', { theme: 'money', ...S });
  N('aftrekpost', 'de', 'aftrekposten', 'deductible item', 'Giften en studiekosten kunnen aftrekposten zijn.', 'Gifts and study costs can be deductible items.', { theme: 'money', ...S });
  N('hypotheekrente', 'de', null, 'mortgage interest', 'De hypotheekrente is gedeeltelijk aftrekbaar.', 'Mortgage interest is partly deductible.', { theme: 'money', ...S });
  N('teruggave', 'de', 'teruggaven', 'refund', 'Ik krijg een teruggave van 400 euro.', 'I am getting a refund of 400 euros.', { theme: 'money', ...S });
  N('aanslag', 'de', 'aanslagen', 'tax assessment', 'De definitieve aanslag kwam in augustus.', 'The final assessment came in August.', { theme: 'money', ...S });
  N('uitstel', 'het', null, 'postponement / extension', 'Je kunt uitstel aanvragen tot 1 september.', 'You can apply for an extension until 1 September.', { theme: 'money', ...S });
  N('vermogen', 'het', 'vermogens', 'assets / wealth', 'Over spaargeld boven een bepaald bedrag betaal je belasting in box 3.', 'On savings above a certain amount you pay tax in box 3.', { theme: 'money', ...S });
  N('fiscaal partner', 'de', 'fiscale partners', 'tax partner', 'Getrouwde mensen zijn elkaars fiscaal partner.', 'Married people are each other’s tax partner.', { theme: 'money', ...S, id: 'fiscaal-partner' });
  VB('invullen', 'to fill in', 'vul in|vult in|vullen in', 'vulde in|vulden in', 'ingevuld', 'hebben', 'Veel gegevens zijn al voor je ingevuld.', 'Many details have already been filled in for you.', { theme: 'money', ...S });
  VB('controleren', 'to check', 'controleer|controleert|controleren', 'controleerde|controleerden', 'gecontroleerd', 'hebben', 'Controleer of de bedragen kloppen.', 'Check whether the amounts are correct.', { theme: 'money', ...S });
  VB('aftrekken', 'to deduct', 'trek af|trekt af|trekken af', 'trok af|trokken af', 'afgetrokken', 'hebben', 'Je mag studiekosten soms aftrekken.', 'You may sometimes deduct study costs.', { theme: 'money', ...S });
  VB('insturen', 'to submit', 'stuur in|stuurt in|sturen in', 'stuurde in|stuurden in', 'ingestuurd', 'hebben', 'Stuur de aangifte vóór 1 mei in.', 'Submit the return before 1 May.', { theme: 'money', ...S });
  VB('terugkrijgen', 'to get back', 'krijg terug|krijgt terug|krijgen terug', 'kreeg terug|kregen terug', 'teruggekregen', 'hebben', 'Ik heb vorig jaar geld teruggekregen.', 'I got money back last year.', { theme: 'money', ...S });
  VB('bijbetalen', 'to pay extra', 'betaal bij|betaalt bij|betalen bij', 'betaalde bij|betaalden bij', 'bijbetaald', 'hebben', 'Dit jaar moet ik helaas bijbetalen.', 'This year I unfortunately have to pay extra.', { theme: 'money', ...S });
  W('aftrekbaar', 'deductible', 'adj', 'Niet alle kosten zijn aftrekbaar.', 'Not all costs are deductible.', { theme: 'money', ...S });
  W('vooraf ingevuld', 'pre-filled', 'adj', 'De vooraf ingevulde aangifte bespaart veel tijd.', 'The pre-filled return saves a lot of time.', { theme: 'money', ...S, id: 'vooraf-ingevuld' });

  addTo('s3u6', lesson('s3u6l3', 'The belastingaangifte, step by step', 'You can do or discuss a Dutch income tax return: log in, check the pre-filled data, know the key words, and meet the deadline.', [
    h('The yearly cycle'),
    list('January: your employer sends the `jaaropgaaf`.', 'From 1 March: the `aangifte` opens on Mijn Belastingdienst; log in with DigiD.', 'Much is `vooraf ingevuld`: salary, `loonheffing`, bank balances, mortgage. Your job: `controleren` and complete.', 'Deadline: **1 May**. You can ask for `uitstel`.', 'Afterwards: a `voorlopige`, later a `definitieve aanslag`: you `krijgt geld terug` (`teruggave`) or you must `bijbetalen`.'),
    h('Key words'),
    table(['Dutch', 'English'], [['*box 1', 'income from work and home'], ['*box 3', 'savings and investments (vermogen)'], ['*de aftrekpost', 'deductible item'], ['*de hypotheekrente', 'mortgage interest'], ['*de fiscaal partner', 'tax partner'], ['*de teruggave / bijbetalen', 'refund / pay extra'], ['*de aanslag', 'assessment (the bill or refund)']]),
    h('Grammar in action'),
    p('Relative clauses with prepositions and passives: `de gegevens **die** al **zijn ingevuld**`, `de rekening **waarop** de teruggave wordt gestort`, `het jaar **waarover** je aangifte doet`, `Er **wordt** van je **verwacht** dat je alles controleert`.'),
    warn('This lesson teaches the language, not tax advice. Rules and amounts change every year; check the Belastingdienst site or ask a `belastingadviseur`. If you arrived or left during the year you usually need the separate M-form.'),
    ex(['Ik heb mijn aangifte gisteren ingestuurd; het meeste was al vooraf ingevuld.', 'I submitted my return yesterday; most of it was already pre-filled.'], ['Controleer altijd de rekening waarop de teruggave wordt gestort.', 'Always check the account into which the refund is paid.'], ['Dit jaar krijg ik geld terug, omdat ik studiekosten kon aftrekken.', 'This year I am getting money back, because I could deduct study costs.'], ['Als je het niet redt vóór 1 mei, kun je uitstel aanvragen.', 'If you cannot make it before 1 May, you can apply for an extension.']),
    tip('`aangifte doen` is also what you do at the police after a theft. Context tells you which: `belastingaangifte` vs `aangifte van diefstal`.'),
  ], ['g3-relative', 'g3-passive'], ['aangifte', 'jaaropgaaf', 'loonheffing', 'aftrekpost', 'hypotheekrente', 'teruggave', 'aanslag', 'uitstel', 'vermogen', 'fiscaal-partner', 'invullen', 'controleren', 'aftrekken', 'insturen', 'terugkrijgen', 'bijbetalen', 'aftrekbaar', 'vooraf-ingevuld'], [
    mc('The normal deadline for the income tax return is', ['1 January', '1 May', '1 December'], 1, '1 mei.'),
    mc('"De jaaropgaaf" comes from', ['your employer', 'the municipality', 'your bank only'], 0, 'Annual income statement.'),
    mc('"Bijbetalen" means', ['to get money back', 'to pay extra', 'to pay by card'], 1, 'Pay extra.'),
    mc('De rekening ___ de teruggave wordt gestort.', ['waarop', 'op wie', 'die op'], 0, 'Thing + op → waarop.'),
    mc('Veel gegevens ___ al vooraf ingevuld.', ['zijn', 'hebben', 'worden geweest'], 0, 'Perfect passive: zijn ingevuld.'),
    art('uitstel', 'het', 'het uitstel.'),
    art('aanslag', 'de', 'de aanslag.'),
    art('vermogen', 'het', 'het vermogen.'),
    fill('Stuur de aangifte vóór 1 mei ___.', ['in'], 'Submit the return before 1 May.', 'insturen.'),
    fill('Je mag studiekosten soms ___. (deduct)', ['aftrekken'], 'You may sometimes deduct study costs.', 'mag + infinitive.'),
    fill('Ik heb vorig jaar geld ___. (terugkrijgen)', ['teruggekregen'], 'I got money back last year.', 'terug + gekregen.'),
    fill('Niet alle kosten zijn ___. (deductible)', ['aftrekbaar'], 'Not all costs are deductible.', 'aftrekken + baar.'),
    build('Check whether the amounts are correct.', 'Controleer of de bedragen kloppen.', ['dat', 'kloppen de bedragen'], 'of … kloppen.'),
    build('You can apply for an extension until 1 September.', 'Je kunt uitstel aanvragen tot 1 september.', ['vraagt aan', 'een uitstel'], 'uitstel aanvragen.'),
    build('This year I have to pay extra.', 'Dit jaar moet ik bijbetalen.', ['ik moet', 'betaal bij'], 'Inversion; bijbetalen at the end.'),
    tr('en-nl', 'I submitted my tax return yesterday.', ['Ik heb gisteren mijn aangifte ingestuurd.', 'Ik heb mijn aangifte gisteren ingestuurd.', 'Ik heb gisteren mijn belastingaangifte ingestuurd.'], 'ingestuurd.'),
    tr('nl-en', 'De loonheffing wordt elke maand van je salaris ingehouden.', ['Wage tax is withheld from your salary every month.'], 'wordt … ingehouden.'),
    fix('De gegevens dat al zijn ingevuld, moet je controleren.', ['De gegevens die al zijn ingevuld, moet je controleren.'], 'Plural → die.'),
    dict('Controleer altijd de rekening waarop de teruggave wordt gestort.', 'Always check the account into which the refund is paid.', 'waarop … wordt gestort.'),
    listen('Als je het niet redt vóór 1 mei, kun je online uitstel aanvragen tot 1 september.', ['If you cannot make it before 1 May, you can apply online for an extension until 1 September.', 'You must pay a fine on 1 May.', 'The deadline is 1 September for everyone.'], 0, 'niet redt; uitstel aanvragen.'),
    speak('Het meeste was al vooraf ingevuld, dus ik hoefde alleen de bedragen te controleren.', 'Most of it was already pre-filled, so I only had to check the amounts.'),
    free('Explain to a newcomer in four sentences how the Dutch tax return works.', 'Vanaf 1 maart kun je met DigiD inloggen bij de Belastingdienst. Veel gegevens zijn al ingevuld; die moet je controleren. Je moet de aangifte vóór 1 mei insturen, maar je kunt uitstel aanvragen. Daarna krijg je een aanslag: je krijgt geld terug of je moet bijbetalen.', 'From 1 March you can log in to the tax office with DigiD. Many details are already filled in; you have to check those. You must submit the return before 1 May, but you can apply for an extension. After that you get an assessment: you get money back or you have to pay extra.', { hints: ['Vanaf 1 maart …', 'Veel gegevens zijn …', 'vóór 1 mei', 'Daarna krijg je …'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"De teruggave" is', ['a refund', 'a fine', 'a form'], 0, 'Refund.'),
    fill('Je kunt ___ aanvragen tot 1 september.', ['uitstel'], 'You can apply for an extension until 1 September.', 'uitstel.'),
    fill('Veel gegevens zijn al vooraf ___.', ['ingevuld'], 'Many details are already pre-filled.', 'ingevuld.'),
    build('I am getting money back this year.', 'Ik krijg dit jaar geld terug.', ['terugkrijg', 'krijgt'], 'krijg … terug.'),
    tr('en-nl', 'Mortgage interest is partly deductible.', ['De hypotheekrente is gedeeltelijk aftrekbaar.'], 'aftrekbaar.'),
    speak('Ik heb uitstel aangevraagd, omdat ik mijn jaaropgaaf nog niet had ontvangen.', 'I applied for an extension, because I had not received my annual statement yet.'),
  ]));

  /* ================= Unit 6, lesson 4: insurance and claims ================= */
  N('aansprakelijkheidsverzekering', 'de', 'aansprakelijkheidsverzekeringen', 'liability insurance', 'Bijna iedereen in Nederland heeft een aansprakelijkheidsverzekering.', 'Almost everyone in the Netherlands has liability insurance.', { theme: 'money', ...S, altNl: ['WA-verzekering'] });
  N('inboedelverzekering', 'de', 'inboedelverzekeringen', 'contents insurance', 'De inboedelverzekering dekt diefstal en waterschade.', 'Contents insurance covers theft and water damage.', { theme: 'money', ...S });
  N('reisverzekering', 'de', 'reisverzekeringen', 'travel insurance', 'Heb je een doorlopende reisverzekering?', 'Do you have continuous travel insurance?', { theme: 'money', ...S });
  N('premie', 'de', 'premies', 'premium', 'De premie gaat volgend jaar omhoog.', 'The premium is going up next year.', { theme: 'money', ...S });
  N('polis', 'de', 'polissen', 'policy', 'Lees in de polis wat er gedekt is.', 'Read in the policy what is covered.', { theme: 'money', ...S });
  N('dekking', 'de', null, 'cover', 'Deze verzekering biedt geen dekking bij fietsdiefstal.', 'This insurance offers no cover for bike theft.', { theme: 'money', ...S });
  N('schade', 'de', "schades", 'damage', 'Ik wil schade melden.', 'I want to report damage.', { theme: 'money', ...S });
  N('schadeformulier', 'het', 'schadeformulieren', 'claim form', 'Vul het schadeformulier volledig in.', 'Fill in the claim form completely.', { theme: 'money', ...S });
  N('vergoeding', 'de', 'vergoedingen', 'compensation / reimbursement', 'De vergoeding is binnen tien dagen overgemaakt.', 'The compensation was transferred within ten days.', { theme: 'money', ...S });
  N('eigen risico', 'het', null, 'excess (deductible)', 'Het eigen risico is 100 euro per schade.', 'The excess is 100 euros per claim.', { theme: 'money', ...S, id: 'eigen-risico' });
  N('aangifte', 'de', 'aangiftes', 'police report', 'Bij diefstal moet je eerst aangifte doen.', 'In case of theft you first have to make a police report.', { theme: 'money', ...S });
  N('bewijs', 'het', 'bewijzen', 'proof', 'Stuur foto’s en de aankoopbon mee als bewijs.', 'Send photos and the receipt as proof.', { theme: 'money', ...S });
  VB('dekken', 'to cover', 'dek|dekt|dekken', 'dekte|dekten', 'gedekt', 'hebben', 'Waterschade is gedekt.', 'Water damage is covered.', { theme: 'money', ...S });
  VB('vergoeden', 'to reimburse', 'vergoed|vergoedt|vergoeden', 'vergoedde|vergoedden', 'vergoed', 'hebben', 'De schade wordt volledig vergoed.', 'The damage is fully reimbursed.', { theme: 'money', ...S });
  VB('afsluiten', 'to take out (a policy)', 'sluit af|sluit af|sluiten af', 'sloot af|sloten af', 'afgesloten', 'hebben', 'Ik heb online een reisverzekering afgesloten.', 'I took out travel insurance online.', { theme: 'money', ...S });
  VB('opzeggen', 'to cancel (a contract)', 'zeg op|zegt op|zeggen op', 'zegde op|zegden op', 'opgezegd', 'hebben', 'Je kunt de verzekering maandelijks opzeggen.', 'You can cancel the insurance monthly.', { theme: 'money', ...S });
  VB('afwijzen', 'to reject', 'wijs af|wijst af|wijzen af', 'wees af|wezen af', 'afgewezen', 'hebben', 'Mijn claim is afgewezen.', 'My claim was rejected.', { theme: 'money', ...S });
  W('aansprakelijk', 'liable', 'adj', 'Wie is aansprakelijk voor de schade?', 'Who is liable for the damage?', { theme: 'money', ...S });
  W('per ongeluk', 'by accident', 'adv', 'Ik heb per ongeluk de laptop van een collega laten vallen.', 'I accidentally dropped a colleague’s laptop.', { theme: 'basics', ...S, id: 'per-ongeluk' });

  addTo('s3u6', lesson('s3u6l4', 'Insurance and making a claim', 'You can choose and discuss insurance, report damage, fill in a claim, and understand when a claim is paid or rejected.', [
    h('The Dutch basics'),
    table(['insurance', 'what it is', 'status'], [['*de zorgverzekering', 'health', 'compulsory'], ['*de aansprakelijkheidsverzekering (WA)', 'damage you cause to others', 'not compulsory, but nearly everyone has it'], ['*de inboedelverzekering', 'your belongings at home', 'recommended'], ['*de reisverzekering', 'travel', 'optional'], ['*de autoverzekering (WA)', 'car liability', 'compulsory with a car']]),
    h('Claim language'),
    table(['Dutch', 'English'], [['*Ik wil schade melden.', 'I want to report damage.'], ['*Is dit gedekt?', 'Is this covered?'], ['*Wat is het eigen risico?', 'What is the excess?'], ['*Wie is aansprakelijk?', 'Who is liable?'], ['*De schade wordt (niet) vergoed.', 'The damage is (not) reimbursed.'], ['*Uw claim is afgewezen, omdat …', 'Your claim has been rejected, because …'], ['*U kunt bezwaar maken.', 'You can object.']]),
    h('Telling what happened'),
    p('A claim is a short story in the past: simple past for the flow, perfect for the result, pluperfect for what came before. `Ik **fietste** naar huis en **zette** mijn fiets voor de deur. Toen ik **terugkwam**, **was** hij **gestolen**, hoewel ik hem op slot **had gezet**.`'),
    ex(['Ik heb per ongeluk koffie over de laptop van mijn buurman gegooid. Is dat gedekt door mijn WA-verzekering?', 'I accidentally spilled coffee over my neighbour’s laptop. Is that covered by my liability insurance?'], ['Bij diefstal moet u eerst aangifte doen bij de politie en het nummer van de aangifte invullen.', 'In case of theft you first have to make a police report and fill in the report number.'], ['De schade wordt vergoed, maar er geldt een eigen risico van honderd euro.', 'The damage is reimbursed, but an excess of a hundred euros applies.'], ['Mijn claim is afgewezen, omdat de fiets niet op slot stond.', 'My claim was rejected, because the bike was not locked.']),
    tip('Keep receipts and take photos. The three things every Dutch insurer asks for: `aankoopbon`, `foto’s`, and for theft `het aangiftenummer`.'),
  ], ['g3-passive', 'g3-indirect-speech'], ['aansprakelijkheidsverzekering', 'inboedelverzekering', 'reisverzekering', 'premie', 'polis', 'dekking', 'schade', 'schadeformulier', 'vergoeding', 'eigen-risico', 'bewijs', 'dekken', 'vergoeden', 'afsluiten', 'opzeggen', 'afwijzen', 'aansprakelijk', 'per-ongeluk'], [
    mc('Which insurance covers damage you cause to someone else’s things?', ['inboedelverzekering', 'aansprakelijkheidsverzekering', 'reisverzekering'], 1, 'WA = liability.'),
    mc('"Is dit gedekt?" asks', ['is this covered', 'is this closed', 'is this cheap'], 0, 'dekken = cover.'),
    mc('"Het eigen risico" is', ['the amount you pay yourself', 'a dangerous hobby', 'the premium'], 0, 'Excess.'),
    mc('What must you do first after a theft?', ['buy a new one', 'make a police report', 'cancel the insurance'], 1, 'Aangifte doen.'),
    mc('Mijn claim is ___, omdat de fiets niet op slot stond.', ['afgewezen', 'afgesloten', 'opgezegd'], 0, 'afwijzen = reject.'),
    art('polis', 'de', 'de polis.'),
    art('schadeformulier', 'het', 'het formulier.'),
    art('premie', 'de', 'de premie.'),
    fill('De schade wordt volledig ___. (vergoeden)', ['vergoed'], 'The damage is fully reimbursed.', 'ver- verb: vergoed.'),
    fill('Ik heb online een reisverzekering ___. (afsluiten)', ['afgesloten'], 'I took out travel insurance online.', 'af + gesloten.'),
    fill('Je kunt de verzekering maandelijks ___. (cancel)', ['opzeggen'], 'You can cancel the insurance monthly.', 'opzeggen.'),
    fill('Wie is ___ voor de schade? (liable)', ['aansprakelijk'], 'Who is liable for the damage?', 'aansprakelijk.'),
    build('I want to report damage.', 'Ik wil schade melden.', ['meld', 'een schade'], 'wil … melden.'),
    build('When I came back, the bike had been stolen.', 'Toen ik terugkwam, was de fiets gestolen.', ['de fiets was', 'had'], 'Inversion; passive pluperfect: was gestolen.'),
    build('Send the receipt as proof.', 'Stuur de aankoopbon mee als bewijs.', ['meestuur', 'voor'], 'stuur … mee als.'),
    tr('en-nl', 'What is the excess?', ['Wat is het eigen risico?'], 'eigen risico.'),
    tr('nl-en', 'Deze verzekering biedt geen dekking bij fietsdiefstal.', ['This insurance offers no cover for bike theft.', 'This insurance does not cover bike theft.'], 'dekking.'),
    fix('De schade wordt vergoedt.', ['De schade wordt vergoed.'], 'Participle of vergoeden: vergoed (d).'),
    dict('Ik heb per ongeluk de laptop van een collega laten vallen.', 'I accidentally dropped a colleague’s laptop.', 'per ongeluk; laten vallen.'),
    listen('Uw claim is afgewezen, omdat waterschade door een open raam niet gedekt is.', ['Your claim was rejected, because water damage through an open window is not covered.', 'Your claim was paid in full.', 'You must close the window to claim.'], 0, 'afgewezen; niet gedekt.'),
    speak('Ik wil schade melden: mijn fiets is gisteravond gestolen, hoewel hij op slot stond.', 'I want to report damage: my bike was stolen last night, although it was locked.'),
    free('Report a claim by phone: say what happened, when, what proof you have, and ask whether it is covered.', 'Goedemorgen, ik wil schade melden. Gisteravond is mijn telefoon gestolen uit mijn tas in de tram. Ik heb vanochtend aangifte gedaan en ik heb de aankoopbon nog. Is dit gedekt door mijn inboedelverzekering, en wat is het eigen risico?', 'Good morning, I want to report damage. Last night my phone was stolen from my bag on the tram. I made a police report this morning and I still have the receipt. Is this covered by my contents insurance, and what is the excess?', { hints: ['Ik wil schade melden', 'Ik heb aangifte gedaan', 'Is dit gedekt door …?'] }),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"De polis" is', ['the police', 'the insurance policy'], 1, 'Policy.'),
    fill('Waterschade is ___. (covered)', ['gedekt'], 'Water damage is covered.', 'gedekt.'),
    fill('Bij diefstal moet je eerst ___ doen.', ['aangifte'], 'In case of theft you first have to make a police report.', 'aangifte doen.'),
    build('My claim was rejected.', 'Mijn claim is afgewezen.', ['heeft', 'afwijzen'], 'is afgewezen.'),
    tr('en-nl', 'The premium is going up next year.', ['De premie gaat volgend jaar omhoog.'], 'omhoog gaan.'),
    speak('De schade wordt vergoed, maar er geldt een eigen risico van honderd euro.', 'The damage is reimbursed, but an excess of a hundred euros applies.'),
  ]));

  /* ================= Unit 6, lesson 5: calling an organisation ================= */
  N('keuzemenu', 'het', "keuzemenu's", 'phone menu', 'In het keuzemenu kiest u 2 voor facturen.', 'In the phone menu choose 2 for invoices.', { theme: 'phone', ...S });
  N('wachtrij', 'de', 'wachtrijen', 'queue', 'Er zijn nog zes wachtenden voor u in de wachtrij.', 'There are still six callers ahead of you in the queue.', { theme: 'phone', ...S });
  N('klantnummer', 'het', 'klantnummers', 'customer number', 'Heeft u uw klantnummer bij de hand?', 'Do you have your customer number at hand?', { theme: 'phone', ...S });
  N('geboortedatum', 'de', 'geboortedata', 'date of birth', 'Mag ik uw geboortedatum ter controle?', 'May I have your date of birth as a check?', { theme: 'phone', ...S });
  N('dossier', 'het', 'dossiers', 'file / case', 'Ik zie in uw dossier dat de brief op 3 mei is verstuurd.', 'I see in your file that the letter was sent on 3 May.', { theme: 'phone', ...S });
  N('medewerker', 'de', 'medewerkers', 'staff member', 'Een medewerker staat u zo te woord.', 'A member of staff will speak to you shortly.', { theme: 'phone', ...S });
  N('leidinggevende', 'de', 'leidinggevenden', 'supervisor', 'Kan ik uw leidinggevende spreken?', 'Can I speak to your supervisor?', { theme: 'phone', ...S });
  N('klacht', 'de', 'klachten', 'complaint', 'Ik wil een klacht indienen.', 'I want to file a complaint.', { theme: 'phone', ...S });
  N('bevestiging', 'de', 'bevestigingen', 'confirmation', 'Kunt u mij een bevestiging per e-mail sturen?', 'Could you send me a confirmation by email?', { theme: 'phone', ...S });
  VB('doorverbinden', 'to put through', 'verbind door|verbindt door|verbinden door', 'verbond door|verbonden door', 'doorverbonden', 'hebben', 'Ik word al voor de derde keer doorverbonden.', 'I am being put through for the third time.', { theme: 'phone', ...S });
  VB('noteren', 'to note down', 'noteer|noteert|noteren', 'noteerde|noteerden', 'genoteerd', 'hebben', 'Mag ik uw naam noteren?', 'May I note down your name?', { theme: 'phone', ...S });
  VB('uitzoeken', 'to look into', 'zoek uit|zoekt uit|zoeken uit', 'zocht uit|zochten uit', 'uitgezocht', 'hebben', 'Ik ga het voor u uitzoeken.', 'I will look into it for you.', { theme: 'phone', ...S });
  VB('terugbellen', 'to call back', 'bel terug|belt terug|bellen terug', 'belde terug|belden terug', 'teruggebeld', 'hebben', 'U wordt binnen twee werkdagen teruggebeld.', 'You will be called back within two working days.', { theme: 'phone', ...S });
  VB('indienen', 'to file / submit', 'dien in|dient in|dienen in', 'diende in|dienden in', 'ingediend', 'hebben', 'U kunt online een klacht indienen.', 'You can file a complaint online.', { theme: 'phone', ...S });
  VB('rechtzetten', 'to put right', 'zet recht|zet recht|zetten recht', 'zette recht|zetten recht', 'rechtgezet', 'hebben', 'Kunt u deze fout rechtzetten?', 'Can you put this mistake right?', { theme: 'phone', ...S });
  PH('Ik bel over …', 'I am calling about …', 'Ik bel over een brief die ik gisteren heb ontvangen.', 'I am calling about a letter I received yesterday.', { theme: 'phone', ...S, id: 'ph-ik-bel-over' });
  PH('Met wie spreek ik?', 'Who am I speaking to?', 'Met wie spreek ik, als ik vragen mag?', 'Who am I speaking to, if I may ask?', { theme: 'phone', ...S, id: 'ph-met-wie-spreek-ik' });
  PH('Kunt u dat voor mij herhalen?', 'Could you repeat that for me?', 'Sorry, kunt u dat voor mij herhalen? Het ging iets te snel.', 'Sorry, could you repeat that for me? It went a bit too fast.', { theme: 'phone', ...S, id: 'ph-herhalen-voor-mij' });
  PH('Als ik het goed begrijp, …', 'If I understand correctly, …', 'Als ik het goed begrijp, hoef ik niets te doen.', 'If I understand correctly, I do not have to do anything.', { theme: 'phone', ...S, id: 'ph-als-ik-het-goed-begrijp-b1' });

  addTo('s3u6', lesson('s3u6l5', 'Phoning an organisation with a problem', 'You can get through a phone menu, explain a problem to a helpdesk, check that you understood, and make sure something actually happens afterwards.', [
    h('Before you reach a human'),
    p('`Welkom bij … Voor vragen over uw factuur, kies 1.` `Al onze medewerkers zijn in gesprek.` `Er zijn nog vijf wachtenden voor u.` `Dit gesprek kan worden opgenomen.` Have your `klantnummer`, `BSN` or `dossiernummer` ready.'),
    h('The call in six steps'),
    table(['step', 'Dutch'], [['1. who and why', '*Goedemorgen, met Sam Taylor. Ik bel over een brief die ik heb ontvangen.'], ['2. identify', '*Mijn klantnummer is … / Mijn geboortedatum is …'], ['3. the problem', '*Volgens de brief moet ik bijbetalen, maar ik heb al betaald.'], ['4. check', '*Als ik het goed begrijp, … Klopt dat? / Kunt u dat herhalen?'], ['5. action', '*Wat gaat er nu gebeuren? / Kunt u dit rechtzetten? / Wanneer hoor ik iets?'], ['6. secure it', '*Met wie spreek ik? / Kunt u mij een bevestiging sturen? / Ik noteer het: …']]),
    h('When it goes wrong'),
    p('`Ik word al voor de derde keer doorverbonden.` `Ik heb hier vorige week ook over gebeld.` `Kan ik uw leidinggevende spreken?` `Ik wil een klacht indienen.` Stay factual: dates, numbers, names.'),
    h('Grammar in action'),
    p('Relative clauses (`de brief **die** ik heb ontvangen`), reported speech (`Uw collega **zei dat** het **was opgelost**`), and passives (`U **wordt teruggebeld**`, `Het **wordt uitgezocht**`).'),
    ex(['Ik bel over een herinnering die ik heb ontvangen, terwijl ik de factuur al op 3 mei heb betaald.', 'I am calling about a reminder I received, although I already paid the invoice on 3 May.'], ['Als ik het goed begrijp, is de betaling wel binnen, maar nog niet verwerkt. Klopt dat?', 'If I understand correctly, the payment has come in but has not been processed yet. Is that right?'], ['Uw collega zei vorige week dat het zou worden rechtgezet, maar er is niets gebeurd.', 'Your colleague said last week that it would be put right, but nothing has happened.'], ['Met wie spreek ik? En kunt u mij hiervan een bevestiging per e-mail sturen?', 'Who am I speaking to? And could you send me a confirmation of this by email?']),
    tip('Always end with: name of the person, what will happen, by when. `Ik noteer: mevrouw Bakker, het wordt uitgezocht, ik word vóór vrijdag teruggebeld.`'),
  ], ['g3-relative', 'g3-indirect-speech', 'g3-passive'], ['keuzemenu', 'wachtrij', 'klantnummer', 'geboortedatum', 'dossier', 'medewerker', 'leidinggevende', 'klacht', 'bevestiging', 'doorverbinden', 'noteren', 'uitzoeken', 'terugbellen', 'indienen', 'rechtzetten', 'ph-ik-bel-over', 'ph-met-wie-spreek-ik', 'ph-herhalen-voor-mij', 'ph-als-ik-het-goed-begrijp-b1'], [
    listen('Welkom bij de klantenservice. Voor vragen over uw factuur, kies één. Voor een storing, kies twee.', ['For invoice questions press one; for a fault press two.', 'Press one for a fault.', 'The customer service is closed.'], 0, 'factuur = 1; storing = 2.'),
    listen('Al onze medewerkers zijn in gesprek. Er zijn nog vier wachtenden voor u.', ['All staff are busy; there are four callers ahead of you.', 'Four staff members are available.', 'Please call back in four hours.'], 0, 'in gesprek; vier wachtenden.'),
    listen('Ik ga het voor u uitzoeken en u wordt binnen twee werkdagen teruggebeld.', ['I will look into it and you will be called back within two working days.', 'Please call back in two days.', 'It has been solved.'], 0, 'uitzoeken; wordt teruggebeld.'),
    mc('Best opening:', ['Hallo, ik heb een probleem.', 'Goedemorgen, met Sam Taylor. Ik bel over een brief die ik heb ontvangen.', 'Wie is dit?'], 1, 'Name + reason.'),
    mc('You did not catch a number. You say:', ['Wat?', 'Kunt u dat voor mij herhalen?', 'Dat is onzin.'], 1, 'Polite request to repeat.'),
    mc('Which secures the outcome of the call?', ['Oké, doei.', 'Met wie spreek ik, en kunt u een bevestiging sturen?', 'Ik bel morgen weer.'], 1, 'Name and confirmation.'),
    mc('Uw collega zei dat het ___ rechtgezet.', ['zou worden', 'zal worden', 'wordt zou'], 0, 'Reported future in the past: zou worden.'),
    fill('Ik bel ___ een brief die ik gisteren heb ontvangen.', ['over'], 'I am calling about a letter I received yesterday.', 'bellen over.'),
    fill('De brief ___ ik heb ontvangen, klopt niet.', ['die'], 'The letter I received is not correct.', 'de brief → die.'),
    fill('Ik word al voor de derde keer ___. (doorverbinden)', ['doorverbonden'], 'I am being put through for the third time.', 'door + verbonden.'),
    fill('Ik wil een klacht ___. (file)', ['indienen'], 'I want to file a complaint.', 'een klacht indienen.'),
    fill('Kunt u deze fout ___? (put right)', ['rechtzetten'], 'Can you put this mistake right?', 'rechtzetten.'),
    build('If I understand correctly, I do not have to do anything.', 'Als ik het goed begrijp, hoef ik niets te doen.', ['ik hoef', 'moet'], 'Inversion; hoef … niets te doen.'),
    build('What is going to happen now?', 'Wat gaat er nu gebeuren?', ['gebeurt gaan', 'het'], 'er + gaan + gebeuren.'),
    build('Could you send me a confirmation by email?', 'Kunt u mij een bevestiging per e-mail sturen?', ['stuurt', 'met'], 'per e-mail.'),
    tr('en-nl', 'Who am I speaking to?', ['Met wie spreek ik?'], 'met wie.'),
    tr('nl-en', 'Ik heb hier vorige week ook over gebeld, maar er is niets gebeurd.', ['I also called about this last week, but nothing has happened.'], 'hier … over.'),
    fix('Ik bel over de brief dat ik heb ontvangen.', ['Ik bel over de brief die ik heb ontvangen.'], 'de brief → die.'),
    dict('Als ik het goed begrijp, is de betaling wel binnen, maar nog niet verwerkt.', 'If I understand correctly, the payment has come in but has not been processed yet.', 'wel … maar nog niet.'),
    speak('Goedemorgen, met Sam Taylor. Ik bel over een herinnering die ik heb ontvangen, terwijl ik al betaald heb.', 'Good morning, Sam Taylor speaking. I am calling about a reminder I received, although I have already paid.'),
    free('Role play the whole call: you received a fine for a car you sold three months ago. Identify yourself, explain, check what will happen, and secure it.', 'Goedemorgen, met Sam Taylor. Ik bel over een boete die ik heb ontvangen voor een auto die ik in maart heb verkocht. Mijn geboortedatum is 4 juni 1990. De auto staat sinds 12 maart niet meer op mijn naam; ik heb het vrijwaringsbewijs nog. Als ik het goed begrijp, moet ik bezwaar maken en dat bewijs meesturen. Klopt dat? Met wie spreek ik, en kunt u dit in mijn dossier noteren?', 'Good morning, Sam Taylor speaking. I am calling about a fine I received for a car I sold in March. My date of birth is 4 June 1990. The car has not been in my name since 12 March; I still have the indemnity certificate. If I understand correctly, I have to object and enclose that proof. Is that right? Who am I speaking to, and could you note this in my file?', { hints: ['Ik bel over … die …', 'Als ik het goed begrijp, … Klopt dat?', 'Met wie spreek ik?', 'Kunt u dit noteren?'] }),
    match([['het keuzemenu', 'phone menu'], ['de wachtrij', 'queue'], ['uitzoeken', 'to look into'], ['rechtzetten', 'to put right'], ['een klacht indienen', 'to file a complaint'], ['de bevestiging', 'confirmation']]),
  ], [
    listen('Dit gesprek kan worden opgenomen voor trainingsdoeleinden.', ['This call may be recorded for training purposes.', 'This call is free of charge.', 'Please record your message.'], 0, 'kan worden opgenomen.'),
    fill('U wordt binnen twee werkdagen ___. (terugbellen)', ['teruggebeld'], 'You will be called back within two working days.', 'terug + gebeld.'),
    fill('Heeft u uw ___ bij de hand? (customer number)', ['klantnummer'], 'Do you have your customer number at hand?', 'het klantnummer.'),
    build('Can I speak to your supervisor?', 'Kan ik uw leidinggevende spreken?', ['met', 'spreek'], 'Kan ik … spreken?'),
    tr('en-nl', 'I will look into it for you.', ['Ik ga het voor u uitzoeken.', 'Ik zoek het voor u uit.'], 'uitzoeken.'),
    speak('Als ik het goed begrijp, word ik vóór vrijdag teruggebeld. Klopt dat?', 'If I understand correctly, I will be called back before Friday. Is that right?'),
  ]));
})();
