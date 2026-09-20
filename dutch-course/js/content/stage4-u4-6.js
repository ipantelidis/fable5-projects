/* Stage 4 (B2) — Unit 4: Cultuur en media · Unit 5: Debat en abstracte onderwerpen · Unit 6: Valkuilen en examentraining
   Two full lessons per unit; further lessons are listed in content/TODO.md */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = (NL.content._s4units = NL.content._s4units || []);

  /* ---------------- Unit 4: Cultuur en media ---------------- */
  N('omroep', 'de', 'omroepen', 'broadcaster', 'De publieke omroep wordt betaald uit belastinggeld.', 'The public broadcaster is paid for from tax money.', { theme: 'media', stage: 4 });
  N('uitzending', 'de', 'uitzendingen', 'broadcast', 'De uitzending is terug te kijken.', 'The broadcast can be watched again.', { theme: 'media', stage: 4 });
  N('recensie', 'de', 'recensies', 'review', 'De recensie was lovend.', 'The review was full of praise.', { theme: 'media', stage: 4 });
  N('voorstelling', 'de', 'voorstellingen', 'performance / show', 'De voorstelling was uitverkocht.', 'The performance was sold out.', { theme: 'culture', stage: 4 });
  N('tentoonstelling', 'de', 'tentoonstellingen', 'exhibition', 'De tentoonstelling trok veel bezoekers.', 'The exhibition attracted many visitors.', { theme: 'culture', stage: 4 });
  N('schrijver', 'de', 'schrijvers', 'writer', 'De schrijver won een belangrijke prijs.', 'The writer won an important prize.', { theme: 'culture', stage: 4 });
  N('publiek', 'het', null, 'audience / public', 'Het publiek was enthousiast.', 'The audience was enthusiastic.', { theme: 'culture', stage: 4 });
  N('erfgoed', 'het', null, 'heritage', 'De grachtengordel is werelderfgoed.', 'The canal ring is world heritage.', { theme: 'culture', stage: 4 });
  N('subsidie', 'de', 'subsidies', 'subsidy', 'Het theater krijgt minder subsidie.', 'The theatre is getting less subsidy.', { theme: 'culture', stage: 4 });
  N('nepnieuws', 'het', null, 'fake news', 'Nepnieuws verspreidt zich snel.', 'Fake news spreads fast.', { theme: 'media', stage: 4 });
  VB('uitzenden', 'to broadcast', 'zend uit|zendt uit|zenden uit', 'zond uit|zonden uit', 'uitgezonden', 'hebben', 'Het programma wordt op zondag uitgezonden.', 'The programme is broadcast on Sundays.', { theme: 'media', stage: 4 });
  VB('verspreiden', 'to spread', 'verspreid|verspreidt|verspreiden', 'verspreidde|verspreidden', 'verspreid', 'hebben', 'Het bericht verspreidde zich razendsnel.', 'The message spread at lightning speed.', { theme: 'media', stage: 4 });
  W('lovend', 'full of praise', 'adj', 'De kritieken waren lovend.', 'The reviews were full of praise.', { theme: 'media', stage: 4 });
  PH('als het ware', 'as it were', 'Het museum is als het ware het geheugen van de stad.', 'The museum is, as it were, the memory of the city.', { theme: 'fixed', stage: 4, id: 'ph-als-het-ware' });
  PH('koste wat het kost', 'at all costs', 'Ze wil die rol koste wat het kost.', 'She wants that role at all costs.', { theme: 'fixed', stage: 4, id: 'ph-koste-wat-het-kost' });
  PH('het zij zo', 'so be it', 'De subsidie stopt. Het zij zo.', 'The subsidy stops. So be it.', { theme: 'fixed', stage: 4, id: 'ph-het-zij-zo' });
  PH('Leve …!', 'Long live …!', 'Leve de koning!', 'Long live the king!', { theme: 'fixed', stage: 4, id: 'ph-leve' });
  PH('ter plaatse', 'on the spot', 'De verslaggever is ter plaatse.', 'The reporter is on the spot.', { theme: 'fixed', stage: 4, id: 'ph-ter-plaatse' });
  PH('te allen tijde', 'at all times', 'U dient te allen tijde een identiteitsbewijs bij u te hebben.', 'You must carry ID at all times.', { theme: 'fixed', stage: 4, id: 'ph-te-allen-tijde' });
  PH('hoe … hoe / des te', 'the … the', 'Hoe meer je leest, des te groter wordt je woordenschat.', 'The more you read, the bigger your vocabulary gets.', { theme: 'fixed', stage: 4, id: 'ph-hoe-des-te' });
  PH('bij wijze van spreken', 'so to speak', 'Hij woont bij wijze van spreken in het theater.', 'He lives in the theatre, so to speak.', { theme: 'fixed', stage: 4, id: 'ph-bij-wijze-van-spreken' });
  PH('heden ten dage', 'nowadays (formal)', 'Heden ten dage leest men minder krant.', 'Nowadays people read fewer newspapers.', { theme: 'fixed', stage: 4, id: 'ph-heden-ten-dage' });

  N('Vlaanderen', 'het', null, 'Flanders', 'In Vlaanderen zegt men vaker u.', 'In Flanders people say u more often.', { theme: 'variation', stage: 4 });
  N('Vlaming', 'de', 'Vlamingen', 'Fleming', 'Vlamingen en Nederlanders verstaan elkaar prima.', 'Flemings and Dutch people understand each other fine.', { theme: 'variation', stage: 4 });
  N('dialect', 'het', 'dialecten', 'dialect', 'In Limburg hoor je veel dialect.', 'In Limburg you hear a lot of dialect.', { theme: 'variation', stage: 4 });
  N('accent', 'het', 'accenten', 'accent', 'Ze heeft een Brabants accent.', 'She has a Brabant accent.', { theme: 'variation', stage: 4 });
  N('uitspraak', 'de', null, 'pronunciation', 'De uitspraak van de g verschilt per regio.', 'The pronunciation of the g differs by region.', { theme: 'variation', stage: 4 });
  N('standaardtaal', 'de', null, 'standard language', 'De standaardtaal wordt op school geleerd.', 'The standard language is taught at school.', { theme: 'variation', stage: 4 });
  N('gsm', 'de', "gsm's", 'mobile phone (Belgian Dutch)', 'Ik ben mijn gsm vergeten.', 'I forgot my mobile.', { theme: 'variation', stage: 4, note: 'Netherlands: mobiel(tje), telefoon.' });
  W('plezant', 'fun / pleasant (Belgian Dutch)', 'adj', 'Het was een plezante avond.', 'It was a fun evening.', { theme: 'variation', stage: 4, note: 'Netherlands: leuk, gezellig.' });
  W('seffens', 'in a moment (Belgian Dutch)', 'adv', 'Ik kom seffens.', 'I am coming in a moment.', { theme: 'variation', stage: 4, note: 'Netherlands: straks, zo.' });
  W('gij', 'you (Belgian Dutch, informal spoken)', 'pron', 'Gij hebt gelijk.', 'You are right.', { theme: 'variation', stage: 4, altNl: ['ge'] });
  W('tuurlijk', 'of course (spoken)', 'adv', 'Tuurlijk kom ik!', 'Of course I am coming!', { theme: 'spoken', stage: 4, note: 'Reduced form of natuurlijk.' });
  W('effe', 'a moment (spoken)', 'adv', 'Wacht effe.', 'Wait a sec.', { theme: 'spoken', stage: 4, note: 'Reduced form of even.' });
  PH('zeg maar', 'kind of / so to speak (filler)', 'Het is, zeg maar, een soort museum.', 'It is, kind of, a sort of museum.', { theme: 'spoken', stage: 4, id: 'ph-zeg-maar-filler' });
  PH('of zo', 'or something', 'Kom je om acht uur of zo?', 'Are you coming at eight or something?', { theme: 'spoken', stage: 4, id: 'ph-of-zo' });
  PH("da's", 'that is (spoken)', "Da's best duur.", 'That is quite expensive.', { theme: 'spoken', stage: 4, id: 'ph-das' });
  PH('zachte g', 'soft g (southern pronunciation)', 'Je hoort aan haar zachte g dat ze uit het zuiden komt.', 'You can hear from her soft g that she comes from the south.', { theme: 'variation', stage: 4, id: 'ph-zachte-g' });
  VB('verstaan', 'to understand (hear correctly)', 'versta|verstaat|verstaan', 'verstond|verstonden', 'verstaan', 'hebben', 'Ik versta hem niet, hij praat te snel.', 'I cannot make out what he says, he talks too fast.', { theme: 'listening', stage: 4, note: 'verstaan = catch the words; begrijpen = understand the meaning.' });
  VB('inslikken', 'to swallow (sounds)', 'slik in|slikt in|slikken in', 'slikte in|slikten in', 'ingeslikt', 'hebben', 'Nederlanders slikken de laatste n in.', 'Dutch people swallow the final n.', { theme: 'listening', stage: 4 });

  const u4 = [];
  u4.push(lesson('s4u4l1', 'Arts and media: fixed expressions and old forms', 'You can discuss culture and media and recognise and use the frozen expressions of written Dutch: als het ware, koste wat het kost, ter plaatse, hoe … des te.', [
    h('Fossils of the subjunctive'),
    table(['expression', 'meaning'], [['*Leve de koning!', 'long live the king'], ['*het zij zo', 'so be it'], ['*als het ware', 'as it were'], ['*koste wat het kost', 'at all costs'], ['*God zij dank', 'thank God'], ['*wat er ook gebeure', 'whatever may happen'], ['*ware het niet dat …', 'were it not that …'], ['*moge …', 'may … (wishes)']]),
    h('Fossils of the old cases'),
    table(['expression', 'meaning'], [['*ter plaatse', 'on the spot'], ['*te allen tijde', 'at all times'], ['*heden ten dage', 'nowadays'], ['*ten slotte', 'finally'], ['*in naam der wet', 'in the name of the law'], ['*van harte', 'heartily'], ['*des te beter', 'all the better'], ['*bij wijze van spreken', 'so to speak']]),
    p('Do not build new ones. Learn these as vocabulary. `hoe … hoe` / `hoe … des te` is productive: `Hoe eerder, hoe beter.` `Hoe langer ik hier woon, des te meer ik ervan hou.`'),
    h('Talking about culture'),
    p('`De recensies waren lovend.` `De voorstelling was uitverkocht.` `De tentoonstelling loopt tot eind maart.` `Het programma wordt uitgezonden door de publieke omroep.` `Het museum krijgt subsidie van de gemeente.`'),
    ex(['Het Rijksmuseum is als het ware het geheugen van Nederland.', 'The Rijksmuseum is, as it were, the memory of the Netherlands.'], ['Het theater wil koste wat het kost open blijven, ook zonder subsidie.', 'The theatre wants to stay open at all costs, even without subsidy.'], ['Hoe meer aandacht de tentoonstelling kreeg, des te langer werden de rijen.', 'The more attention the exhibition got, the longer the queues became.'], ['Onze verslaggever is ter plaatse.', 'Our reporter is on the spot.']),
    tip('If an ending looks odd (`der`, `ten`, `-e` on a verb), suspect a fossil and look it up as one phrase.'),
  ], ['g4-subjunctive'], ['omroep', 'uitzending', 'recensie', 'voorstelling', 'tentoonstelling', 'schrijver', 'publiek', 'erfgoed', 'subsidie', 'nepnieuws', 'uitzenden', 'verspreiden', 'lovend', 'ph-als-het-ware', 'ph-koste-wat-het-kost', 'ph-het-zij-zo', 'ph-leve', 'ph-ter-plaatse', 'ph-te-allen-tijde', 'ph-hoe-des-te', 'ph-bij-wijze-van-spreken', 'ph-heden-ten-dage'], [
    mc('"Koste wat het kost" means', ['it costs what it costs', 'at all costs', 'for free'], 1, 'Fixed expression.'),
    mc('"Ter plaatse" means', ['on the spot', 'in place of', 'to the square'], 0, 'On the spot.'),
    mc('"Het zij zo" means', ['it is so', 'so be it', 'she is like that'], 1, 'Old subjunctive of zijn.'),
    mc('"Te allen tijde" means', ['at all times', 'in old times', 'on time'], 0, 'At all times.'),
    mc('"De recensies waren lovend" means the reviews were', ['negative', 'full of praise', 'late'], 1, 'lovend.'),
    fill('Hoe meer je leest, ___ te groter wordt je woordenschat.', ['des'], 'The more you read, the bigger your vocabulary gets.', 'hoe … des te.'),
    fill('Het museum is als het ___ het geheugen van de stad.', ['ware'], 'The museum is, as it were, the memory of the city.', 'als het ware.'),
    fill('___ de koning!', ['Leve'], 'Long live the king!', 'leve.'),
    fill('Het programma wordt op zondag ___. (uitzenden)', ['uitgezonden'], 'The programme is broadcast on Sundays.', 'uit + ge + zonden.'),
    build('The theatre wants to stay open at all costs.', 'Het theater wil koste wat het kost open blijven.', ['kost wat het koste', 'blijft'], 'koste wat het kost.'),
    build('The sooner, the better.', 'Hoe eerder, hoe beter.', ['des', 'meer'], 'hoe … hoe.'),
    build('Fake news spreads fast.', 'Nepnieuws verspreidt zich snel.', ['verspreid', 'hem'], 'zich verspreiden; stem + t.'),
    tr('en-nl', 'The exhibition attracted many visitors.', ['De tentoonstelling trok veel bezoekers.', 'De tentoonstelling heeft veel bezoekers getrokken.'], 'trekken → trok.'),
    tr('nl-en', 'Ware het niet dat de subsidie stopt, dan was de voorstelling doorgegaan.', ['Were it not that the subsidy is stopping, the performance would have gone ahead.', 'If the subsidy were not stopping, the show would have gone ahead.'], 'ware het niet dat.'),
    fix('Hij woont bij wijze van spreek in het theater.', ['Hij woont bij wijze van spreken in het theater.'], 'Fixed: bij wijze van spreken.'),
    dict('De recensies waren lovend en de voorstelling was binnen een dag uitverkocht.', 'The reviews were full of praise and the performance sold out within a day.', 'lovend; uitverkocht.'),
    listen('Hoe langer de tentoonstelling liep, des te meer bezoekers kwamen er.', ['The longer the exhibition ran, the more visitors came.', 'The exhibition closed early because nobody came.', 'The exhibition ran longer than planned.'], 0, 'hoe … des te.'),
    speak('Het Rijksmuseum is als het ware het geheugen van het land, en het wil koste wat het kost toegankelijk blijven.', 'The Rijksmuseum is, as it were, the memory of the country, and it wants to remain accessible at all costs.'),
    free('Review something you saw, read or listened to recently in four sentences. Use one fixed expression from this lesson.', 'Vorige week heb ik een voorstelling in Carré gezien. De recensies waren lovend en dat was terecht. Hoe langer het duurde, hoe beter het werd. Het was, bij wijze van spreken, de beste avond van het jaar.', 'Last week I saw a show at Carré. The reviews were full of praise and rightly so. The longer it went on, the better it got. It was, so to speak, the best evening of the year.', { hints: ['De recensies waren …', 'Hoe …, hoe …', 'als het ware / bij wijze van spreken'] }),
    match([['als het ware', 'as it were'], ['koste wat het kost', 'at all costs'], ['ter plaatse', 'on the spot'], ['te allen tijde', 'at all times'], ['het zij zo', 'so be it'], ['heden ten dage', 'nowadays']]),
  ], [
    mc('"Heden ten dage" means', ['today at noon', 'nowadays'], 1, 'nowadays.'),
    fill('Hoe eerder, ___ beter.', ['hoe', 'des te'], 'The sooner, the better.', 'hoe … hoe.'),
    fill('De verslaggever is ter ___.', ['plaatse'], 'The reporter is on the spot.', 'ter plaatse.'),
    build('The programme is paid for from tax money.', 'Het programma wordt betaald uit belastinggeld.', ['is', 'van'], 'wordt betaald uit.'),
    tr('en-nl', 'So be it.', ['Het zij zo.'], 'Fixed.'),
    speak('De voorstelling was uitverkocht; de recensies waren dan ook lovend.', 'The performance was sold out; the reviews were indeed full of praise.'),
  ]));

  u4.push(lesson('s4u4l2', 'Real speech: reductions, fillers and Belgian Dutch', 'You can follow fast spoken Dutch by recognising reductions and fillers, and you can recognise Belgian Dutch words, sounds and the wider use of u.', [
    h('What fast speech does'),
    table(['written', 'you hear'], [['*het, een', "'t, 'n"], ['*dat is', "da's"], ['*ik heb het', "'k heb 't"], ['*natuurlijk', 'tuurlijk'], ['*even', 'effe'], ['*eigenlijk', 'eigelijk'], ['*niet', 'nie'], ['*lopen, werken', 'lope, werke'], ['*heb je', 'hebbie, hejje'], ['*als het', "as 't"]]),
    p('Fillers: `zeg maar`, `of zo`, `en zo`, `weet je`, `ik bedoel`, `nou ja`, `best wel`, `gewoon`. They carry no content. `verstaan` = to catch the words; `begrijpen` = to understand the meaning: `Ik versta je niet` means "I cannot hear you properly".'),
    h('Belgian Dutch'),
    table(['Netherlands', 'Flanders'], [['*je / jij', '*ge / gij (spoken), u (much more common)'], ['*mobieltje', '*gsm'], ['*leuk', '*plezant, tof'], ['*straks', '*seffens'], ['*pinnen', '*met de kaart betalen'], ['*magnetron', '*microgolf'], ['*lopen = walk', '*lopen = run']]),
    p('Sound: the **zachte g** (soft g) in the south and in Flanders, clearer final `-n`, purer vowels. Grammar: `gij hebt`, `ge zijt`; participle-first clusters (`dat ik het gezien heb`). One standard language, two norms: both are correct Dutch.'),
    ex(["Da's eigenlijk best wel duur, zeg maar.", 'That is actually kind of pretty expensive.'], ['Hebbie effe tijd? — Tuurlijk.', 'Got a sec? — Sure.'], ['Ge moogt gerust binnenkomen, het is hier plezant.', 'You are welcome to come in, it is fun in here. (Flemish)'], ['Sorry, ik versta u niet goed; kunt u wat langzamer praten?', 'Sorry, I cannot quite hear you; could you speak a bit more slowly?']),
    tip('Understand the reductions, but keep writing the full forms. `effe` and `tuurlijk` belong in chat messages at most.'),
  ], ['g4-listening', 'g4-regional'], ['vlaanderen', 'vlaming', 'dialect', 'accent', 'uitspraak', 'standaardtaal', 'gsm', 'plezant', 'seffens', 'gij', 'tuurlijk', 'effe', 'ph-zeg-maar-filler', 'ph-of-zo', 'ph-das', 'ph-zachte-g', 'verstaan', 'inslikken'], [
    mc('"Da\'s" stands for', ['dat is', 'dan is', 'dit was'], 0, 'dat is.'),
    mc('"Effe" stands for', ['effect', 'even', 'eerst'], 1, 'even.'),
    mc('"Ik versta je niet" means', ['I do not agree with you', 'I cannot hear what you say', 'I do not like you'], 1, 'verstaan = catch the words.'),
    mc('A Flemish speaker says "gsm". A Dutch speaker says', ['mobieltje', 'magnetron', 'pinpas'], 0, 'gsm = mobile phone.'),
    mc('In Flanders "lopen" usually means', ['to walk', 'to run', 'to drive'], 1, 'NL lopen = walk; BE lopen = run.'),
    mc('"Seffens" (Flemish) is Netherlands', ['gisteren', 'straks', 'nooit'], 1, 'straks / zo meteen.'),
    fill('"Tuurlijk" is the spoken form of ___.', ['natuurlijk'], '"Tuurlijk" is the spoken form of natuurlijk.', 'First syllable dropped.'),
    fill('Je hoort aan haar ___ g dat ze uit Limburg komt.', ['zachte'], 'You can hear from her soft g that she comes from Limburg.', 'zachte g.'),
    fill('Het is, ___ maar, een soort museum. (filler)', ['zeg'], 'It is, kind of, a sort of museum.', 'zeg maar.'),
    fill('Nederlanders slikken de laatste n ___. (inslikken)', ['in'], 'Dutch people swallow the final n.', 'slikken … in.'),
    build('Could you speak a bit more slowly?', 'Kunt u wat langzamer praten?', ['langzaam', 'spreekt'], 'wat langzamer.'),
    build('Flemings and Dutch people understand each other fine.', 'Vlamingen en Nederlanders verstaan elkaar prima.', ['zich', 'verstaat'], 'verstaan elkaar.'),
    build('The pronunciation of the g differs by region.', 'De uitspraak van de g verschilt per regio.', ['verschillen', 'voor'], 'verschilt per regio.'),
    tr('en-nl', 'She has a Brabant accent.', ['Ze heeft een Brabants accent.', 'Zij heeft een Brabants accent.'], 'het accent → een Brabants accent.'),
    tr('nl-en', "'k Heb 't eigenlijk nooit zo bekeken.", ['I have actually never looked at it that way.', 'I never really looked at it like that.'], "Reduced: ik heb het."),
    fix('Ik begrijp je niet, de verbinding is slecht.', ['Ik versta je niet, de verbinding is slecht.'], 'Bad line → verstaan, not begrijpen.'),
    dict('Sorry, ik versta u niet goed; kunt u dat herhalen?', 'Sorry, I cannot quite hear you; could you repeat that?', 'verstaan.'),
    listen('Dat is eigenlijk best wel duur, zeg maar, maar het is natuurlijk wel even leuk.', ['That is actually quite expensive, kind of, but it is of course fun for a moment.', 'That is very cheap and boring.', 'I do not know how much it costs.'], 0, 'Fillers around the content: duur, leuk.'),
    speak('In Vlaanderen zegt men vaker u, en je hoort er de zachte g; toch is het dezelfde standaardtaal.', 'In Flanders people say u more often, and you hear the soft g there; yet it is the same standard language.'),
    free('Describe what you still find hard to understand in spoken Dutch and what helps you. Use verstaan and begrijpen correctly.', 'Ik versta mensen vaak niet als ze snel praten, omdat ze veel klanken inslikken. Als ik de woorden eenmaal versta, begrijp ik de betekenis meestal wel. Het helpt als ik naar de radio luister en de ondertiteling aanzet.', 'I often cannot catch what people say when they talk fast, because they swallow many sounds. Once I catch the words, I usually understand the meaning. It helps when I listen to the radio and turn the subtitles on.', { hints: ['Ik versta … niet als …', 'Ik begrijp …', 'Het helpt als …'] }),
    match([['de gsm', 'het mobieltje'], ['plezant', 'leuk'], ['seffens', 'straks'], ['gij', 'jij'], ['effe', 'even'], ['tuurlijk', 'natuurlijk']]),
  ], [
    mc('"Of zo" means', ['or so / or something', 'of course'], 0, 'or something.'),
    fill('Ik ___ je niet, praat eens wat harder. (hear)', ['versta'], 'I cannot hear you, speak up a bit.', 'verstaan.'),
    fill('In Vlaanderen zegt men "___" voor mobieltje.', ['gsm'], 'In Flanders they say gsm for mobile.', 'gsm.'),
    build('That is quite expensive.', 'Dat is best duur.', ['beste', 'dure'], 'best = quite.'),
    tr('en-nl', 'Could you repeat that?', ['Kunt u dat herhalen?', 'Kun je dat herhalen?'], 'herhalen.'),
    speak('Sorry, ik versta u niet goed. Kunt u wat langzamer praten?', 'Sorry, I cannot quite hear you. Could you speak a bit more slowly?'),
  ]));

  units.push(unit('s4u4', 'Cultuur en media', 'culture and media', u4, [
    mc('"Koste wat het kost" means', ['at all costs', 'for free'], 0, 'at all costs.'),
    mc('"Verstaan" means', ['to catch the words', 'to agree'], 0, 'verstaan.'),
    fill('Hoe meer je oefent, ___ te beter het gaat.', ['des'], 'The more you practise, the better it goes.', 'des te.'),
    fill('"Effe" is spoken Dutch for ___.', ['even'], '"Effe" is spoken Dutch for even.', 'even.'),
    fill('De voorstelling werd live ___. (uitzenden)', ['uitgezonden'], 'The performance was broadcast live.', 'uitgezonden.'),
    build('The museum is, as it were, the memory of the city.', 'Het museum is als het ware het geheugen van de stad.', ['waren', 'zoals'], 'als het ware.'),
    build('I cannot hear you properly.', 'Ik versta je niet goed.', ['begrijp', 'geen'], 'verstaan.'),
    fix('De reporter is te plaatse.', ['De reporter is ter plaatse.'], 'ter plaatse.'),
    tr('en-nl', 'The reviews were full of praise.', ['De recensies waren lovend.'], 'lovend.'),
    listen('Ge moogt seffens binnenkomen, het is hier heel plezant.', ['You may come in shortly, it is very pleasant here. (Flemish)', 'You may not come in, it is too busy.', 'Come back tomorrow.'], 0, 'Flemish: ge, seffens, plezant.'),
    speak('Hoe vaker ik naar de radio luister, des te beter versta ik snelle sprekers.', 'The more often I listen to the radio, the better I can follow fast speakers.'),
  ]));

  /* ---------------- Unit 5: Debat en abstracte onderwerpen ---------------- */
  N('betoog', 'het', 'betogen', 'argumentative text', 'Een betoog begint met een duidelijke stelling.', 'An argumentative text starts with a clear thesis.', { theme: 'argument', stage: 4 });
  N('stelling', 'de', 'stellingen', 'thesis / proposition', 'Ik ben het eens met de stelling.', 'I agree with the proposition.', { theme: 'argument', stage: 4 });
  N('tegenargument', 'het', 'tegenargumenten', 'counterargument', 'Een goed betoog weerlegt het belangrijkste tegenargument.', 'A good argument refutes the most important counterargument.', { theme: 'argument', stage: 4 });
  N('voorstander', 'de', 'voorstanders', 'supporter / proponent', 'Voorstanders wijzen op de voordelen.', 'Proponents point to the advantages.', { theme: 'argument', stage: 4 });
  N('tegenstander', 'de', 'tegenstanders', 'opponent', 'Tegenstanders beweren dat het te duur is.', 'Opponents claim that it is too expensive.', { theme: 'argument', stage: 4 });
  N('vrijheid', 'de', 'vrijheden', 'freedom', 'Vrijheid van meningsuiting is een grondrecht.', 'Freedom of expression is a fundamental right.', { theme: 'abstract', stage: 4 });
  N('gelijkheid', 'de', null, 'equality', 'Gelijkheid is nog niet vanzelfsprekend.', 'Equality is not yet a given.', { theme: 'abstract', stage: 4 });
  N('verantwoordelijkheid', 'de', 'verantwoordelijkheden', 'responsibility', 'Wie draagt de verantwoordelijkheid?', 'Who bears the responsibility?', { theme: 'abstract', stage: 4 });
  N('belang', 'het', 'belangen', 'interest / importance', 'Het algemeen belang gaat voor.', 'The public interest takes precedence.', { theme: 'abstract', stage: 4 });
  N('gevolg', 'het', 'gevolgen', 'consequence', 'De gevolgen zijn moeilijk te overzien.', 'The consequences are hard to oversee.', { theme: 'abstract', stage: 4 });
  VB('weerleggen', 'to refute', 'weerleg|weerlegt|weerleggen', 'weerlegde|weerlegden', 'weerlegd', 'hebben', 'Dat argument is makkelijk te weerleggen.', 'That argument is easy to refute.', { theme: 'argument', stage: 4 });
  VB('onderbouwen', 'to substantiate', 'onderbouw|onderbouwt|onderbouwen', 'onderbouwde|onderbouwden', 'onderbouwd', 'hebben', 'Onderbouw je mening met voorbeelden.', 'Substantiate your opinion with examples.', { theme: 'argument', stage: 4 });
  VB('afwegen', 'to weigh up', 'weeg af|weegt af|wegen af', 'woog af|wogen af', 'afgewogen', 'hebben', 'We moeten de belangen tegen elkaar afwegen.', 'We have to weigh the interests against each other.', { theme: 'argument', stage: 4 });
  VB('concluderen', 'to conclude', 'concludeer|concludeert|concluderen', 'concludeerde|concludeerden', 'geconcludeerd', 'hebben', 'Hieruit kunnen we concluderen dat het werkt.', 'From this we can conclude that it works.', { theme: 'argument', stage: 4 });
  PH('in de eerste plaats', 'in the first place', 'In de eerste plaats is het veiliger.', 'In the first place it is safer.', { theme: 'argument', stage: 4, id: 'ph-in-de-eerste-plaats' });
  PH('daar staat tegenover dat', 'on the other hand / against that', 'Daar staat tegenover dat het veel geld kost.', 'Against that, it costs a lot of money.', { theme: 'argument', stage: 4, id: 'ph-daar-staat-tegenover' });
  PH('dat mag zo zijn, maar', 'that may be so, but', 'Dat mag zo zijn, maar de cijfers zeggen iets anders.', 'That may be so, but the figures say something else.', { theme: 'argument', stage: 4, id: 'ph-dat-mag-zo-zijn' });
  PH('al met al', 'all in all', 'Al met al ben ik voor.', 'All in all I am in favour.', { theme: 'argument', stage: 4, id: 'ph-al-met-al' });
  PH('ik pleit ervoor dat', 'I argue that', 'Ik pleit ervoor dat het openbaar vervoer gratis wordt.', 'I argue that public transport should become free.', { theme: 'argument', stage: 4, id: 'ph-ik-pleit-ervoor' });
  W('vanzelfsprekend', 'self-evident', 'adj', 'Dat is niet vanzelfsprekend.', 'That is not self-evident.', { theme: 'abstract', stage: 4 });

  PH('water bij de wijn doen', 'to compromise', 'Beide partijen moesten water bij de wijn doen.', 'Both parties had to compromise.', { theme: 'idioms', stage: 4, id: 'id-water-bij-de-wijn' });
  PH('het roer omgooien', 'to change course radically', 'Na tien jaar gooide ze het roer om.', 'After ten years she changed course completely.', { theme: 'idioms', stage: 4, id: 'id-roer-omgooien' });
  PH('de koe bij de horens vatten', 'to take the bull by the horns', 'Laten we de koe bij de horens vatten.', 'Let us take the bull by the horns.', { theme: 'idioms', stage: 4, id: 'id-koe-bij-de-horens' });
  PH('de druppel die de emmer doet overlopen', 'the last straw', 'Dat was de druppel die de emmer deed overlopen.', 'That was the last straw.', { theme: 'idioms', stage: 4, id: 'id-druppel-emmer' });
  PH('iets onder de knie hebben', 'to have mastered something', 'Ik heb de grammatica eindelijk onder de knie.', 'I have finally mastered the grammar.', { theme: 'idioms', stage: 4, id: 'id-onder-de-knie' });
  PH('door de mand vallen', 'to be exposed', 'De oplichter viel snel door de mand.', 'The fraudster was quickly exposed.', { theme: 'idioms', stage: 4, id: 'id-door-de-mand' });
  PH('van een mug een olifant maken', 'to make a mountain out of a molehill', 'Je maakt van een mug een olifant.', 'You are making a mountain out of a molehill.', { theme: 'idioms', stage: 4, id: 'id-mug-olifant' });
  PH('over koetjes en kalfjes praten', 'to make small talk', 'We praatten over koetjes en kalfjes.', 'We made small talk.', { theme: 'idioms', stage: 4, id: 'id-koetjes-kalfjes' });
  PH('een oogje in het zeil houden', 'to keep an eye on things', 'Kun jij een oogje in het zeil houden?', 'Can you keep an eye on things?', { theme: 'idioms', stage: 4, id: 'id-oogje-in-het-zeil' });
  PH('schoon schip maken', 'to make a clean sweep', 'De nieuwe directeur wil schoon schip maken.', 'The new director wants to make a clean sweep.', { theme: 'idioms', stage: 4, id: 'id-schoon-schip' });
  PH('Hoge bomen vangen veel wind.', 'Prominent people get a lot of criticism.', 'De minister krijgt veel kritiek; hoge bomen vangen veel wind.', 'The minister is getting a lot of criticism; tall trees catch much wind.', { theme: 'proverbs', stage: 4, id: 'pr-hoge-bomen' });
  PH('Wie A zegt, moet ook B zeggen.', 'Finish what you start.', 'We zijn begonnen, dus wie A zegt, moet ook B zeggen.', 'We have started, so in for a penny, in for a pound.', { theme: 'proverbs', stage: 4, id: 'pr-wie-a-zegt' });
  PH('De appel valt niet ver van de boom.', 'Like parent, like child.', 'Haar dochter is ook arts; de appel valt niet ver van de boom.', 'Her daughter is also a doctor; the apple does not fall far from the tree.', { theme: 'proverbs', stage: 4, id: 'pr-appel-boom' });
  PH('Beter één vogel in de hand dan tien in de lucht.', 'A bird in the hand is worth two in the bush.', 'Neem dat aanbod; beter één vogel in de hand dan tien in de lucht.', 'Take that offer; a bird in the hand is worth two in the bush.', { theme: 'proverbs', stage: 4, id: 'pr-vogel-in-de-hand' });
  PH('Na regen komt zonneschijn.', 'After rain comes sunshine.', 'Het komt goed; na regen komt zonneschijn.', 'It will be all right; after rain comes sunshine.', { theme: 'proverbs', stage: 4, id: 'pr-na-regen' });
  PH('Oost west, thuis best.', 'There is no place like home.', 'Het was een mooie reis, maar oost west, thuis best.', 'It was a lovely trip, but there is no place like home.', { theme: 'proverbs', stage: 4, id: 'pr-oost-west' });

  const u5 = [];
  u5.push(lesson('s4u5l1', 'Building an argument: the betoog', 'You can write and present a structured argument: thesis, two supported arguments, a refuted counterargument and a conclusion, with the right signal words.', [
    h('The structure examiners look for'),
    table(['part', 'job', 'language'], [['inleiding', 'topic + stelling', '*Steeds vaker … / Ik pleit ervoor dat …'], ['argument 1', 'strongest reason + evidence', '*In de eerste plaats … / Zo blijkt uit …'], ['argument 2', 'second reason', '*Daarnaast … / Bovendien …'], ['tegenargument', 'name and refute', '*Tegenstanders beweren dat … / Dat mag zo zijn, maar … / Daar staat tegenover dat …'], ['conclusie', 'restate, no new points', '*Al met al … / Kortom … / Daarom pleit ik voor …']]),
    h('Substantiate'),
    p('An opinion without support is a `mening`; with support it becomes an `argument`. Support comes from `cijfers` (figures), `onderzoek`, `een voorbeeld`, `een vergelijking` (comparison), or `ervaring`. `Onderbouw je stelling.` `Dat argument is makkelijk te weerleggen.`'),
    h('Abstract nouns'),
    p('B2 topics use abstract nouns: `vrijheid`, `gelijkheid`, `verantwoordelijkheid`, `het algemeen belang`, `de gevolgen`. Pair them with verbs: `belangen afwegen`, `verantwoordelijkheid dragen`, `vrijheid beperken`, `gevolgen overzien`.'),
    ex(['Ik pleit ervoor dat het openbaar vervoer voor jongeren gratis wordt.', 'I argue that public transport should become free for young people.'], ['In de eerste plaats vermindert dat het autogebruik; zo blijkt uit een proef in Tallinn.', 'In the first place it reduces car use, as a trial in Tallinn shows.'], ['Tegenstanders beweren dat het onbetaalbaar is. Dat mag zo zijn, maar files kosten de samenleving nog meer.', 'Opponents claim it is unaffordable. That may be so, but traffic jams cost society even more.'], ['Al met al wegen de voordelen ruimschoots op tegen de kosten.', 'All in all the advantages amply outweigh the costs.']),
    tip('Plan before you write: one line per part. In the exam two minutes of planning saves ten minutes of rewriting.'),
  ], ['g4-argument', 'g4-discourse'], ['betoog', 'stelling', 'tegenargument', 'voorstander', 'tegenstander', 'vrijheid', 'gelijkheid', 'verantwoordelijkheid', 'belang', 'gevolg', 'weerleggen', 'onderbouwen', 'afwegen', 'concluderen', 'ph-in-de-eerste-plaats', 'ph-daar-staat-tegenover', 'ph-dat-mag-zo-zijn', 'ph-al-met-al', 'ph-ik-pleit-ervoor', 'vanzelfsprekend'], [
    mc('Where does the stelling belong?', ['in the conclusion only', 'in the introduction', 'after the counterargument'], 1, 'State it early.'),
    mc('"Dat mag zo zijn, maar …" is used to', ['add an argument', 'concede and then refute', 'conclude'], 1, 'Concession + refutation.'),
    mc('A conclusion should', ['add a new argument', 'restate the position', 'ask a question'], 1, 'No new points.'),
    mc('"Onderbouwen" means', ['to undermine', 'to substantiate', 'to build under'], 1, 'Support with evidence.'),
    mc('"Voorstanders" are', ['opponents', 'supporters', 'experts'], 1, 'voor = for.'),
    fill('In de eerste ___ is het veiliger.', ['plaats'], 'In the first place it is safer.', 'in de eerste plaats.'),
    fill('Daar staat ___ dat het veel geld kost.', ['tegenover'], 'Against that, it costs a lot of money.', 'daar staat tegenover dat.'),
    fill('Al met ___ ben ik voor.', ['al'], 'All in all I am in favour.', 'al met al.'),
    fill('Dat argument is makkelijk te ___. (refute)', ['weerleggen'], 'That argument is easy to refute.', 'weerleggen.'),
    build('I argue that public transport should become free.', 'Ik pleit ervoor dat het openbaar vervoer gratis wordt.', ['wordt gratis', 'voor dat'], 'pleit ervoor dat … wordt.'),
    build('Opponents claim that it is too expensive.', 'Tegenstanders beweren dat het te duur is.', ['is te duur', 'Voorstanders'], 'beweren dat … is.'),
    build('We have to weigh the interests against each other.', 'We moeten de belangen tegen elkaar afwegen.', ['wegen af', 'met elkaar'], 'tegen elkaar afwegen.'),
    build('The advantages outweigh the costs.', 'De voordelen wegen op tegen de kosten.', ['opwegen', 'voor'], 'opwegen tegen: wegen … op tegen.'),
    tr('en-nl', 'Substantiate your opinion with examples.', ['Onderbouw je mening met voorbeelden.', 'Onderbouw uw mening met voorbeelden.'], 'onderbouwen.'),
    tr('nl-en', 'Hieruit kunnen we concluderen dat de maatregel niet vanzelfsprekend werkt.', ['From this we can conclude that the measure does not self-evidently work.', 'We can conclude from this that the measure does not automatically work.'], 'hieruit concluderen dat.'),
    fix('Kortom, en bovendien is er nog een nieuw argument: het is ook goedkoper.', ['Kortom, de voordelen wegen op tegen de nadelen.'], 'A conclusion adds no new argument.'),
    dict('Tegenstanders beweren dat het onbetaalbaar is; dat mag zo zijn, maar files kosten nog meer.', 'Opponents claim it is unaffordable; that may be so, but traffic jams cost even more.', 'dat mag zo zijn, maar.'),
    listen('In de eerste plaats is het veiliger, daarnaast is het goedkoper, en al met al zie ik geen sterk tegenargument.', ['In the first place it is safer, besides it is cheaper, and all in all I see no strong counterargument.', 'It is neither safer nor cheaper.', 'There are many strong counterarguments.'], 0, 'Three signal phrases.'),
    speak('Ik pleit ervoor dat het openbaar vervoer voor jongeren gratis wordt, en wel om twee redenen.', 'I argue that public transport should become free for young people, for two reasons.'),
    read('Stelling: een vierdaagse werkweek moet de norm worden. Steeds meer bedrijven experimenteren met een werkweek van vier dagen. Naar mijn mening zou dat de norm moeten worden. In de eerste plaats blijkt uit proeven in IJsland en het Verenigd Koninkrijk dat de productiviteit gelijk blijft, terwijl het ziekteverzuim daalt. Daarnaast hebben werknemers meer tijd voor zorg, scholing en vrijwilligerswerk, wat de hele samenleving ten goede komt. Tegenstanders wijzen erop dat niet elk beroep zich ervoor leent: een ziekenhuis kan op vrijdag niet dicht. Dat mag zo zijn, maar een kortere werkweek betekent niet dat de organisatie sluit, wel dat het werk anders wordt verdeeld. Al met al wegen de voordelen ruimschoots op tegen de praktische bezwaren. Daarom pleit ik ervoor dat de overheid de vierdaagse werkweek actief stimuleert.', [
      { q: 'What is the writer’s stelling?', options: ['companies should experiment more', 'a four-day working week should become the norm', 'hospitals should close on Fridays'], answer: 1, explain: '"Naar mijn mening zou dat de norm moeten worden."' },
      { q: 'Which evidence supports the first argument?', options: ['trials in Iceland and the UK', 'a survey among hospitals', 'the writer’s own experience'], answer: 0, explain: '"blijkt uit proeven in IJsland en het Verenigd Koninkrijk".' },
      { q: 'How does the writer deal with the counterargument?', options: ['ignores it', 'concedes it and then refutes it', 'agrees and changes position'], answer: 1, explain: '"Dat mag zo zijn, maar …"' },
      { q: 'What is the function of the last sentence?', options: ['a new argument', 'a call to action following the conclusion', 'an example'], answer: 1, explain: '"Daarom pleit ik ervoor dat de overheid … stimuleert."' },
    ], { en: 'Proposition: a four-day working week should become the norm. More and more companies are experimenting with a working week of four days. In my opinion that should become the norm. In the first place trials in Iceland and the United Kingdom show that productivity stays the same, while sick leave falls. In addition employees have more time for care, training and volunteering, which benefits the whole of society. Opponents point out that not every profession lends itself to it: a hospital cannot close on Fridays. That may be so, but a shorter working week does not mean the organisation closes, only that the work is divided differently. All in all the advantages amply outweigh the practical objections. That is why I argue that the government should actively encourage the four-day working week.' }),
    write('Exam-style writing task (about 200 words): write a betoog on the stelling "Alle nieuwkomers moeten binnen drie jaar Nederlands op B1-niveau spreken." Take a clear position.', ['Introduction with the topic and your stelling', 'Argument 1 with support (In de eerste plaats …)', 'Argument 2 (Daarnaast / Bovendien …)', 'One counterargument, conceded and refuted (Dat mag zo zijn, maar …)', 'Conclusion without new arguments (Al met al / Kortom …)', 'Check: verb position, dt, de / het'], 'Steeds meer mensen komen naar Nederland om te werken of te studeren. Naar mijn mening is het redelijk dat nieuwkomers binnen drie jaar Nederlands op B1-niveau leren, mits de overheid dat goed ondersteunt. In de eerste plaats vergroot taalkennis de kans op werk: uit onderzoek blijkt dat wie de taal spreekt, sneller een baan op zijn eigen niveau vindt. Daarnaast maakt de taal het makkelijker om contact te leggen met buren, school en huisarts, wat eenzaamheid voorkomt. Tegenstanders beweren dat drie jaar te kort is voor mensen met een volle baan of weinig opleiding. Dat mag zo zijn, maar juist daarom moeten cursussen gratis en flexibel zijn, ook ’s avonds en online. De eis is dan geen straf, maar een investering. Al met al ben ik voor de stelling, op voorwaarde dat de overheid haar eigen verantwoordelijkheid neemt.'),
  ], [
    mc('"Al met al" opens', ['an example', 'a conclusion'], 1, 'Conclusion.'),
    fill('Tegenstanders ___ dat het te duur is. (claim)', ['beweren'], 'Opponents claim that it is too expensive.', 'beweren.'),
    fill('Dat mag zo ___, maar de cijfers zeggen iets anders.', ['zijn'], 'That may be so, but the figures say otherwise.', 'dat mag zo zijn.'),
    build('In the first place it is safer.', 'In de eerste plaats is het veiliger.', ['het is', 'eerst'], 'Inversion after the fronted phrase.'),
    tr('en-nl', 'Who bears the responsibility?', ['Wie draagt de verantwoordelijkheid?'], 'verantwoordelijkheid dragen.'),
    speak('Dat mag zo zijn, maar al met al wegen de voordelen op tegen de nadelen.', 'That may be so, but all in all the advantages outweigh the disadvantages.'),
  ]));

  u5.push(lesson('s4u5l2', 'Proverbs and idioms in debate and headlines', 'You can recognise and use a second layer of Dutch idioms and proverbs, in discussion and in newspaper headlines that play with them.', [
    h('Idioms with a verb: conjugate them'),
    table(['idiom', 'meaning', 'in a sentence'], [['*water bij de wijn doen', 'compromise', '*Beide partijen deden water bij de wijn.'], ['*het roer omgooien', 'change course', '*Ze heeft het roer omgegooid.'], ['*de koe bij de horens vatten', 'tackle it head-on', '*Laten we de koe bij de horens vatten.'], ['*door de mand vallen', 'be exposed', '*Hij viel door de mand.'], ['*iets onder de knie hebben', 'have mastered', '*Ik heb het onder de knie.'], ['*van een mug een olifant maken', 'exaggerate a problem', '*Maak er geen olifant van.'], ['*een oogje in het zeil houden', 'keep watch', '*Hou jij een oogje in het zeil?'], ['*schoon schip maken', 'clean sweep', '*Het bestuur maakte schoon schip.'], ['*over koetjes en kalfjes praten', 'small talk', '*We praatten wat over koetjes en kalfjes.']]),
    h('Proverbs: quote them whole'),
    table(['proverb', 'meaning'], [['*Hoge bomen vangen veel wind.', 'the prominent get criticised'], ['*Wie A zegt, moet ook B zeggen.', 'finish what you start'], ['*De appel valt niet ver van de boom.', 'like parent, like child'], ['*Beter één vogel in de hand dan tien in de lucht.', 'take the sure thing'], ['*Na regen komt zonneschijn.', 'things will get better'], ['*Oost west, thuis best.', 'no place like home'], ['*De druppel die de emmer doet overlopen.', 'the last straw']]),
    h('In headlines'),
    p('`Kabinet gooit roer om` (cabinet changes course). `Minister valt door de mand` (minister exposed). `Vakbond doet water bij de wijn` (union compromises). Headlines shorten and twist: `Druppel te veel voor leraren` plays on the bucket that overflows.'),
    ex(['Na drie jaar heb ik de woordvolgorde eindelijk onder de knie.', 'After three years I have finally mastered word order.'], ['De huurverhoging was de druppel die de emmer deed overlopen.', 'The rent increase was the last straw.'], ['Je maakt van een mug een olifant; zo erg is het niet.', 'You are making a mountain out of a molehill; it is not that bad.'], ['Als we willen dat het lukt, moeten we allemaal water bij de wijn doen.', 'If we want it to work, we all have to compromise.']),
    tip('Use one idiom per conversation, not five. And never translate an English idiom word for word: it will not land.'),
  ], ['g4-proverbs'], ['id-water-bij-de-wijn', 'id-roer-omgooien', 'id-koe-bij-de-horens', 'id-druppel-emmer', 'id-onder-de-knie', 'id-door-de-mand', 'id-mug-olifant', 'id-koetjes-kalfjes', 'id-oogje-in-het-zeil', 'id-schoon-schip', 'pr-hoge-bomen', 'pr-wie-a-zegt', 'pr-appel-boom', 'pr-vogel-in-de-hand', 'pr-na-regen', 'pr-oost-west'], [
    mc('"Water bij de wijn doen" means', ['to dilute a drink', 'to compromise', 'to celebrate'], 1, 'Compromise.'),
    mc('"Het roer omgooien" means', ['to change course radically', 'to sink the ship', 'to steer straight'], 0, 'Change course.'),
    mc('"Door de mand vallen" means', ['to be exposed', 'to fall asleep', 'to go shopping'], 0, 'Be exposed.'),
    mc('"Iets onder de knie hebben" means', ['to have a knee injury', 'to have mastered something', 'to hide something'], 1, 'Mastered.'),
    mc('Headline: "Kabinet gooit roer om" means', ['the cabinet resigns', 'the cabinet changes course', 'the cabinet goes sailing'], 1, 'Change of course.'),
    mc('"Hoge bomen vangen veel wind" is said when', ['the weather is bad', 'a prominent person is criticised', 'someone is tall'], 1, 'Prominence attracts criticism.'),
    fill('Je maakt van een mug een ___.', ['olifant'], 'You are making a mountain out of a molehill.', 'mug → olifant.'),
    fill('Wie A zegt, moet ook ___ zeggen.', ['B'], 'Finish what you start.', 'A … B.'),
    fill('Dat was de ___ die de emmer deed overlopen.', ['druppel'], 'That was the last straw.', 'druppel.'),
    fill('Kun jij een ___ in het zeil houden?', ['oogje'], 'Can you keep an eye on things?', 'oogje.'),
    build('Both parties had to compromise.', 'Beide partijen moesten water bij de wijn doen.', ['wijn bij het water', 'deden'], 'Fixed word order inside the idiom.'),
    build('She changed course after ten years.', 'Na tien jaar gooide ze het roer om.', ['ze gooide', 'omgooide'], 'Inversion; gooide … om.'),
    build('Let us take the bull by the horns.', 'Laten we de koe bij de horens vatten.', ['stier', 'pakken de'], 'Dutch uses a cow.'),
    build('I have finally mastered the grammar.', 'Ik heb de grammatica eindelijk onder de knie.', ['op de knie', 'onder het'], 'onder de knie.'),
    tr('en-nl', 'The apple does not fall far from the tree.', ['De appel valt niet ver van de boom.'], 'Same image in Dutch.'),
    tr('nl-en', 'Beter één vogel in de hand dan tien in de lucht.', ['A bird in the hand is worth two in the bush.', 'Better one bird in the hand than ten in the air.'], 'Dutch counts ten birds.'),
    fix('Laten we de stier bij de horens pakken.', ['Laten we de koe bij de horens vatten.'], 'Do not translate English idioms: koe, vatten.'),
    dict('De huurverhoging was de druppel die de emmer deed overlopen.', 'The rent increase was the last straw.', 'druppel … emmer.'),
    listen('De nieuwe directeur wil schoon schip maken, maar hoge bomen vangen veel wind.', ['The new director wants a clean sweep, but prominent people attract criticism.', 'The new director is going sailing in windy weather.', 'The new director was fired.'], 0, 'Two expressions.'),
    speak('Als we dit willen oplossen, moeten we de koe bij de horens vatten en allemaal water bij de wijn doen.', 'If we want to solve this, we have to take the bull by the horns and all compromise.'),
    free('Describe a situation at work or in your life using two idioms from this lesson.', 'Vorig jaar heb ik het roer omgegooid: ik ben gestopt met mijn baan en een opleiding begonnen. In het begin was het zwaar, maar nu heb ik het onder de knie. Na regen komt zonneschijn.', 'Last year I changed course completely: I quit my job and started a course. At first it was hard, but now I have mastered it. After rain comes sunshine.', { hints: ['het roer omgooien', 'onder de knie hebben', 'water bij de wijn doen'] }),
    match([['water bij de wijn doen', 'to compromise'], ['het roer omgooien', 'to change course'], ['door de mand vallen', 'to be exposed'], ['schoon schip maken', 'to make a clean sweep'], ['over koetjes en kalfjes praten', 'to make small talk'], ['een oogje in het zeil houden', 'to keep watch']]),
  ], [
    mc('"Over koetjes en kalfjes praten" means', ['to talk about farming', 'to make small talk'], 1, 'Small talk.'),
    fill('Na regen komt ___.', ['zonneschijn'], 'After rain comes sunshine.', 'zonneschijn.'),
    fill('Oost west, thuis ___.', ['best'], 'There is no place like home.', 'best.'),
    build('He was quickly exposed.', 'Hij viel snel door de mand.', ['in de mand', 'valt'], 'viel door de mand.'),
    tr('en-nl', 'That was the last straw.', ['Dat was de druppel die de emmer deed overlopen.', 'Dat was de druppel.'], 'druppel … emmer.'),
    speak('Ik heb de grammatica onder de knie, maar van de uitspraak maak ik geen olifant.', 'I have mastered the grammar, but I will not make a mountain out of the pronunciation.'),
  ]));

  units.push(unit('s4u5', 'Debat en abstracte onderwerpen', 'debate and abstract topics', u5, [
    mc('A betoog starts with', ['the conclusion', 'the topic and the stelling'], 1, 'Stelling first.'),
    mc('"Het roer omgooien" means', ['to change course', 'to stop'], 0, 'Change course.'),
    fill('Dat mag zo zijn, ___ de cijfers zeggen iets anders.', ['maar'], 'That may be so, but the figures say otherwise.', 'maar.'),
    fill('Beide partijen deden water bij de ___.', ['wijn'], 'Both parties compromised.', 'wijn.'),
    fill('Ik pleit ___ dat de regels eenvoudiger worden.', ['ervoor'], 'I argue that the rules should become simpler.', 'ervoor.'),
    build('All in all the advantages outweigh the costs.', 'Al met al wegen de voordelen op tegen de kosten.', ['de voordelen wegen', 'opwegen'], 'Inversion; wegen … op tegen.'),
    build('That argument is easy to refute.', 'Dat argument is makkelijk te weerleggen.', ['weerlegd', 'die'], 'te weerleggen.'),
    fix('Hij viel in de mand.', ['Hij viel door de mand.'], 'door de mand.'),
    tr('en-nl', 'Freedom of expression is a fundamental right.', ['Vrijheid van meningsuiting is een grondrecht.'], 'vrijheid van meningsuiting.'),
    listen('Voorstanders wijzen op de vrijheid van het individu, tegenstanders op het algemeen belang.', ['Proponents point to individual freedom, opponents to the public interest.', 'Everyone agrees about individual freedom.', 'Opponents point to individual freedom.'], 0, 'voorstanders / tegenstanders.'),
    speak('In de eerste plaats is het eerlijker; daar staat tegenover dat het duur is, maar al met al ben ik voor.', 'In the first place it is fairer; against that it is expensive, but all in all I am in favour.'),
  ]));

  /* ---------------- Unit 6: Valkuilen en examentraining ---------------- */
  W('eventueel', 'possibly / if need be', 'adv', 'We kunnen eventueel later beginnen.', 'We can start later if need be.', { theme: 'false friends', stage: 4, note: 'Not "eventually" (= uiteindelijk).' });
  W('uiteindelijk', 'eventually / in the end', 'adv', 'Uiteindelijk kwam alles goed.', 'In the end everything turned out fine.', { theme: 'false friends', stage: 4 });
  W('actueel', 'current / topical', 'adj', 'Dat is een actueel onderwerp.', 'That is a topical subject.', { theme: 'false friends', stage: 4, note: 'Not "actual" (= werkelijk, eigenlijk).' });
  W('werkelijk', 'actual / real', 'adj', 'De werkelijke kosten zijn hoger.', 'The actual costs are higher.', { theme: 'false friends', stage: 4 });
  W('brutaal', 'cheeky / rude', 'adj', 'Wat een brutale opmerking!', 'What a cheeky remark!', { theme: 'false friends', stage: 4, note: 'Not "brutal" (= wreed).' });
  W('braaf', 'well-behaved', 'adj', 'De kinderen waren heel braaf.', 'The children were very well-behaved.', { theme: 'false friends', stage: 4, note: 'Not "brave" (= dapper, moedig).' });
  W('dapper', 'brave', 'adj', 'Dat was een dappere beslissing.', 'That was a brave decision.', { theme: 'false friends', stage: 4 });
  W('consequent', 'consistent', 'adj', 'Wees consequent in je regels.', 'Be consistent in your rules.', { theme: 'false friends', stage: 4, note: 'Not "consequently" (= daardoor, dus).' });
  W('ordinair', 'vulgar', 'adj', 'Ik vind die reclame ordinair.', 'I find that advert vulgar.', { theme: 'false friends', stage: 4, note: 'Not "ordinary" (= gewoon).' });
  W('sympathiek', 'likeable', 'adj', 'Ik vind haar heel sympathiek.', 'I find her very likeable.', { theme: 'false friends', stage: 4, note: 'Not "sympathetic" (= meelevend).' });
  W('slim', 'clever', 'adj', 'Dat is een slimme oplossing.', 'That is a clever solution.', { theme: 'false friends', stage: 4, note: 'Not "slim" (= slank).' });
  N('controle', 'de', 'controles', 'check / inspection', 'Bij de controle moest ik mijn kaartje laten zien.', 'At the inspection I had to show my ticket.', { theme: 'false friends', stage: 4, note: 'Not "control" in the sense of power (= macht, beheersing).' });
  N('fabriek', 'de', 'fabrieken', 'factory', 'Hij werkt in een fabriek.', 'He works in a factory.', { theme: 'false friends', stage: 4, note: 'Not "fabric" (= stof).' });
  N('kritiek', 'de', null, 'criticism', 'Er was veel kritiek op het plan.', 'There was a lot of criticism of the plan.', { theme: 'false friends', stage: 4, note: 'Not "critic" (= criticus).' });
  N('betekenis', 'de', 'betekenissen', 'meaning', 'Wat is de betekenis van dit woord?', 'What is the meaning of this word?', { theme: 'false friends', stage: 4, note: 'mening = opinion, betekenis = meaning.' });
  N('meer', 'het', 'meren', 'lake', 'We zwommen in het meer.', 'We swam in the lake.', { theme: 'false friends', stage: 4, id: 'meer-lake', note: 'German das Meer = sea; Dutch het meer = lake.' });
  VB('overzien', 'to survey / oversee the whole', 'overzie|overziet|overzien', 'overzag|overzagen', 'overzien', 'hebben', 'De gevolgen zijn niet te overzien.', 'The consequences cannot be overseen.', { theme: 'false friends', stage: 4, note: 'Not "to overlook" (= over het hoofd zien).' });
  PH('over het hoofd zien', 'to overlook (miss)', 'Ik heb die fout over het hoofd gezien.', 'I overlooked that mistake.', { theme: 'false friends', stage: 4, id: 'ph-over-het-hoofd-zien' });
  PH('Het heeft geen zin.', 'There is no point.', 'Het heeft geen zin om te wachten.', 'There is no point in waiting.', { theme: 'errors', stage: 4, id: 'ph-geen-zin', note: 'Not "het maakt geen zin".' });
  PH('Dat klinkt logisch.', 'That makes sense.', 'Ja, dat klinkt logisch.', 'Yes, that makes sense.', { theme: 'errors', stage: 4, id: 'ph-klinkt-logisch' });

  N('leesvaardigheid', 'de', null, 'reading skills', 'Leesvaardigheid is het eerste onderdeel.', 'Reading is the first part.', { theme: 'exam', stage: 4 });
  N('luistervaardigheid', 'de', null, 'listening skills', 'Bij luistervaardigheid hoor je elk fragment één keer.', 'In the listening part you hear each fragment once.', { theme: 'exam', stage: 4 });
  N('schrijfvaardigheid', 'de', null, 'writing skills', 'Bij schrijfvaardigheid let men op opbouw en grammatica.', 'In the writing part structure and grammar are assessed.', { theme: 'exam', stage: 4 });
  N('spreekvaardigheid', 'de', null, 'speaking skills', 'Spreekvaardigheid wordt op de computer afgenomen.', 'The speaking part is taken on a computer.', { theme: 'exam', stage: 4 });
  N('onderdeel', 'het', 'onderdelen', 'part / section', 'Je kunt elk onderdeel apart afleggen.', 'You can take each part separately.', { theme: 'exam', stage: 4 });
  N('opdracht', 'de', 'opdrachten', 'task / assignment', 'Lees de opdracht goed.', 'Read the task carefully.', { theme: 'exam', stage: 4 });
  N('voorbereidingstijd', 'de', null, 'preparation time', 'Gebruik de voorbereidingstijd voor trefwoorden.', 'Use the preparation time for key words.', { theme: 'exam', stage: 4 });
  N('hoofdgedachte', 'de', 'hoofdgedachten', 'main idea', 'Wat is de hoofdgedachte van de tekst?', 'What is the main idea of the text?', { theme: 'exam', stage: 4 });
  N('alinea', 'de', "alinea's", 'paragraph', 'Elke alinea begint met een kernzin.', 'Every paragraph starts with a topic sentence.', { theme: 'exam', stage: 4 });
  N('signaalwoord', 'het', 'signaalwoorden', 'signal word', 'Let op de signaalwoorden.', 'Pay attention to the signal words.', { theme: 'exam', stage: 4 });
  N('diploma', 'het', "diploma's", 'diploma', 'Met het diploma kun je gaan studeren.', 'With the diploma you can go and study.', { theme: 'exam', stage: 4 });
  VB('afleggen', 'to take (an exam)', 'leg af|legt af|leggen af', 'legde af|legden af', 'afgelegd', 'hebben', 'Ik leg in juni het staatsexamen af.', 'I am taking the state exam in June.', { theme: 'exam', stage: 4 });
  VB('beoordelen', 'to assess', 'beoordeel|beoordeelt|beoordelen', 'beoordeelde|beoordeelden', 'beoordeeld', 'hebben', 'Uw tekst wordt beoordeeld op inhoud en taal.', 'Your text is assessed on content and language.', { theme: 'exam', stage: 4 });
  VB('aanraden', 'to advise / recommend', 'raad aan|raadt aan|raden aan', 'raadde aan|raadden aan', 'aangeraden', 'hebben', 'Ik zou u aanraden om eerst te bellen.', 'I would advise you to phone first.', { theme: 'exam', stage: 4 });
  VB('verwijzen naar', 'to refer to', 'verwijs naar|verwijst naar|verwijzen naar', 'verwees naar|verwezen naar', 'verwezen naar', 'hebben', 'Waar verwijst "dit" naar in regel 12?', 'What does "dit" refer to in line 12?', { theme: 'exam', stage: 4, id: 'verwijzen-naar' });
  PH('en wel om twee redenen', 'for two reasons', 'Ik ben voor, en wel om twee redenen.', 'I am in favour, for two reasons.', { theme: 'exam', stage: 4, id: 'ph-en-wel-om' });
  PH('Als ik het goed begrijp, …', 'If I understand correctly, …', 'Als ik het goed begrijp, vraagt u om mijn mening.', 'If I understand correctly, you are asking for my opinion.', { theme: 'exam', stage: 4, id: 'ph-als-ik-het-goed-begrijp' });
  PH('Ik zou u aanraden om …', 'I would advise you to …', 'Ik zou u aanraden om contact op te nemen met de gemeente.', 'I would advise you to contact the municipality.', { theme: 'exam', stage: 4, id: 'ph-ik-zou-u-aanraden' });

  const u6 = [];
  u6.push(lesson('s4u6l1', 'False friends and the errors that survive to B2', 'You can avoid the false friends between Dutch, English and German and catch the mistakes advanced learners still make: verb position, dt, de / het, er, and English calques.', [
    h('False friends you will actually meet'),
    table(['Dutch', 'means', 'you wanted', 'so say'], [['*eventueel', 'possibly', 'eventually', '*uiteindelijk'], ['*actueel', 'topical', 'actual', '*werkelijk'], ['*brutaal', 'cheeky', 'brutal', '*wreed'], ['*braaf', 'well-behaved', 'brave', '*dapper'], ['*consequent', 'consistent', 'consequently', '*daardoor'], ['*ordinair', 'vulgar', 'ordinary', '*gewoon'], ['*sympathiek', 'likeable', 'sympathetic', '*meelevend'], ['*slim', 'clever', 'slim', '*slank'], ['*de controle', 'check', 'control', '*de macht'], ['*de fabriek', 'factory', 'fabric', '*de stof'], ['*de mening', 'opinion', 'meaning', '*de betekenis'], ['*overzien', 'survey', 'overlook', '*over het hoofd zien']]),
    p('German speakers: `het meer` = lake (not sea), `de zee` = sea, `bellen` = to phone (not bark), `durven` = to dare (not be allowed), `mogen` = to be allowed (not like), `klaar` = ready (not clear).'),
    h('The errors that survive'),
    table(['wrong', 'right'], [['*… omdat ik ben moe', '*… omdat ik moe ben'], ['*Morgen ik ga', '*Morgen ga ik'], ['*Hij word / het gebeurd (present)', '*Hij wordt / het gebeurt'], ['*een mooie huis', '*een mooi huis'], ['*Ik heb twee.', '*Ik heb er twee.'], ['*groter als', '*groter dan'], ['*hun hebben', '*zij hebben'], ['*lange termijn planning', '*langetermijnplanning'], ['*Het maakt geen zin.', '*Het heeft geen zin.'], ['*Ik ben eens.', '*Ik ben het ermee eens.']]),
    h('dt in one line'),
    p('Present: stem + t for hij / zij / het / u and for jij before the verb: `hij wordt`, `het gebeurt`, `word je`. Participle: ’t kofschip: `gebeurd`, `verhuisd`, `gewerkt`. Test with `lopen`: if `loopt` fits, write -t; if `gelopen` fits, it is the participle.'),
    ex(['We kunnen eventueel een dag later beginnen; uiteindelijk maakt het weinig uit.', 'We can possibly start a day later; in the end it matters little.'], ['Dat is een actueel onderwerp, maar de werkelijke cijfers ken ik niet.', 'That is a topical subject, but I do not know the actual figures.'], ['Het gebeurt vaak; gisteren is het weer gebeurd.', 'It often happens; yesterday it happened again.'], ['Het heeft geen zin om te wachten. — Ja, dat klinkt logisch.', 'There is no point in waiting. — Yes, that makes sense.']),
    tip('Make your own error log: your five most frequent mistakes on one card. Check every text against it before you hand it in.'),
  ], ['g4-false-friends', 'g4-common-errors'], ['eventueel', 'uiteindelijk', 'actueel', 'werkelijk', 'brutaal', 'braaf', 'dapper', 'consequent', 'ordinair', 'sympathiek', 'slim', 'controle', 'fabriek', 'kritiek', 'betekenis', 'meer-lake', 'overzien', 'ph-over-het-hoofd-zien', 'ph-geen-zin', 'ph-klinkt-logisch'], [
    mc('"Eventueel" means', ['eventually', 'possibly / if need be', 'never'], 1, 'eventually = uiteindelijk.'),
    mc('"Een actueel onderwerp" is', ['an actual subject', 'a topical subject', 'an active subject'], 1, 'actueel = topical.'),
    mc('"Een brave hond" is', ['a brave dog', 'a well-behaved dog', 'a brutal dog'], 1, 'braaf = well-behaved.'),
    mc('"Wat is de ___ van dit woord?" (meaning)', ['mening', 'betekenis', 'zin'], 1, 'betekenis.'),
    mc('"Ik heb die fout ___." (overlooked)', ['overzien', 'over het hoofd gezien', 'overgekeken'], 1, 'over het hoofd zien.'),
    mc('Which is correct?', ['Het gebeurd vaak.', 'Het gebeurt vaak.', 'Het gebeurdt vaak.'], 1, 'Present: stem + t.'),
    mc('Which is correct?', ['Gisteren is het weer gebeurt.', 'Gisteren is het weer gebeurd.'], 1, 'Participle: r is not in ’t kofschip → d.'),
    fill('___ kwam alles goed. (eventually)', ['Uiteindelijk'], 'In the end everything turned out fine.', 'uiteindelijk.'),
    fill('Het ___ geen zin om te wachten.', ['heeft'], 'There is no point in waiting.', 'zin hebben, not maken.'),
    fill('Hij ___ morgen dertig. (worden)', ['wordt'], 'He turns thirty tomorrow.', 'stem word + t.'),
    fill('Ik heb ___ twee. (of them)', ['er'], 'I have two.', 'Number → er.'),
    build('That was a brave decision.', 'Dat was een dappere beslissing.', ['brave', 'dapper'], 'dapper + e (de beslissing).'),
    build('The consequences cannot be overseen.', 'De gevolgen zijn niet te overzien.', ['over het hoofd', 'overzien te'], 'zijn niet te overzien.'),
    build('She is more likeable than her colleague.', 'Ze is sympathieker dan haar collega.', ['als', 'meer sympathiek'], '-er + dan.'),
    tr('en-nl', 'That makes sense.', ['Dat klinkt logisch.', 'Dat snap ik.', 'Dat is logisch.'], 'Not "dat maakt zin".'),
    tr('nl-en', 'Er was veel kritiek op de controle bij de ingang.', ['There was a lot of criticism of the check at the entrance.', 'The inspection at the entrance was heavily criticised.'], 'kritiek = criticism; controle = check.'),
    fix('Ik ben eens met je, omdat het is een goede plan.', ['Ik ben het met je eens, omdat het een goed plan is.'], 'het … eens; verb at the end; een goed plan (het-word).'),
    fix('De lange termijn planning word morgen besproken.', ['De langetermijnplanning wordt morgen besproken.'], 'One word; wordt.'),
    fix('Hun hebben gelijk.', ['Zij hebben gelijk.', 'Ze hebben gelijk.'], 'hun is never a subject.'),
    dict('Het gebeurt vaak dat de trein vertraagd is; gisteren is het weer gebeurd.', 'It often happens that the train is delayed; yesterday it happened again.', 'gebeurt / gebeurd.'),
    listen('We kunnen eventueel vrijdag afspreken, maar uiteindelijk beslis jij.', ['We can possibly meet on Friday, but in the end you decide.', 'We will eventually meet on Friday.', 'We cannot meet on Friday.'], 0, 'eventueel vs uiteindelijk.'),
    speak('Dat is een actueel onderwerp, maar de werkelijke kosten zijn moeilijk te overzien.', 'That is a topical subject, but the actual costs are hard to oversee.'),
    free('Write down your own top three recurring mistakes in Dutch, each with a wrong and a corrected example.', 'Eén: ik vergeet de inversie. Fout: "Morgen ik ga." Goed: "Morgen ga ik." Twee: ik twijfel over dt. Fout: "Het gebeurd vaak." Goed: "Het gebeurt vaak." Drie: ik vergeet er. Fout: "Ik heb twee." Goed: "Ik heb er twee."', 'One: I forget inversion. Two: I hesitate about dt. Three: I forget er.', { hints: ['Fout: …', 'Goed: …'] }),
    match([['eventueel', 'possibly'], ['uiteindelijk', 'eventually'], ['actueel', 'topical'], ['braaf', 'well-behaved'], ['dapper', 'brave'], ['slim', 'clever']]),
  ], [
    mc('"Een slimme oplossing" is', ['a slim solution', 'a clever solution'], 1, 'slim = clever.'),
    mc('Which is correct?', ['Hij word boos.', 'Hij wordt boos.'], 1, 'wordt.'),
    fill('De ___ kosten zijn hoger dan verwacht. (actual)', ['werkelijke'], 'The actual costs are higher than expected.', 'werkelijk + e.'),
    build('There is no point.', 'Het heeft geen zin.', ['maakt', 'niet'], 'zin hebben.'),
    tr('en-nl', 'He works in a factory.', ['Hij werkt in een fabriek.'], 'fabriek = factory.'),
    speak('Het heeft geen zin om brutaal te zijn; wees liever consequent.', 'There is no point in being cheeky; rather be consistent.'),
  ]));

  u6.push(lesson('s4u6l2', 'Staatsexamen NT2 Programma II: all four parts', 'You know what the four parts of the Staatsexamen NT2 Programma II ask, and you can do a task of each type with a clear strategy.', [
    h('Four separate parts at B2'),
    table(['part', 'task', 'strategy'], [['Lezen', 'longer texts, multiple choice', 'questions follow the text; answer from the text'], ['Luisteren', 'fragments, multiple choice', 'read the questions first; listen for paraphrase'], ['Schrijven', 'short and longer texts', 'do every bullet, choose u or je, plan, check your error log'], ['Spreken', 'recorded short and long answers', 'key words in the preparation time; point, two reasons, example, conclusion']]),
    p('You pass each part on its own and may take them at different times. The diploma gives access to hbo and university and to many professions. Rules and formats change: check the current information from the exam board when you register.'),
    h('Reading and listening questions'),
    p('`Wat is de hoofdgedachte van de tekst?` `Wat is de functie van alinea 3?` `Waar verwijst "dit" naar?` `Wat is het doel van de schrijver?` (`informeren`, `overtuigen`, `amuseren`, `activeren`) `Welke bewering volgt uit de tekst?`'),
    h('Frames for speaking'),
    list('`Als ik het goed begrijp, vraagt u …`', '`Volgens mij …, en wel om twee redenen.`', '`Ten eerste … Ten tweede …`', '`Een voorbeeld daarvan is …`', '`Ik zou u aanraden om …`', '`Kortom, …`'),
    h('Frames for writing'),
    list('Email: opening, reason for writing, the request or information, closing line, greeting.', 'Short report or betoog: introduction, two or three marked paragraphs, conclusion.', 'Always: check verb position, dt, de / het, and register before you stop.'),
    ex(['Ik zou u aanraden om eerst contact op te nemen met uw leidinggevende.', 'I would advise you to contact your manager first.'], ['Volgens mij is thuiswerken een goede ontwikkeling, en wel om twee redenen.', 'In my view working from home is a good development, for two reasons.'], ['Met "deze ontwikkeling" verwijst de schrijver naar de toename van flexwerk.', 'By "this development" the writer refers to the increase in flexible work.']),
    tip('Do the speaking tasks below aloud with a timer. Stopping early loses more points than a small mistake.'),
  ], ['g4-staatsexamen', 'g4-reading', 'g4-argument'], ['leesvaardigheid', 'luistervaardigheid', 'schrijfvaardigheid', 'spreekvaardigheid', 'onderdeel', 'opdracht', 'voorbereidingstijd', 'hoofdgedachte', 'alinea', 'signaalwoord', 'diploma', 'afleggen', 'beoordelen', 'aanraden', 'verwijzen-naar', 'ph-en-wel-om', 'ph-als-ik-het-goed-begrijp', 'ph-ik-zou-u-aanraden'], [
    mc('How many parts does the Staatsexamen NT2 have?', ['two', 'four', 'six'], 1, 'lezen, luisteren, schrijven, spreken.'),
    mc('In the reading part, the questions', ['are in random order', 'follow the order of the text', 'come before the text only'], 1, 'They follow the text.'),
    mc('"De hoofdgedachte" is', ['the first sentence', 'the main idea', 'the writer’s name'], 1, 'Main idea.'),
    mc('A writer who wants to "overtuigen" wants to', ['inform', 'convince', 'entertain'], 1, 'overtuigen = convince.'),
    mc('Best use of speaking preparation time:', ['write full sentences', 'note key words', 'wait'], 1, 'Key words.'),
    fill('Ik ___ in juni het staatsexamen af. (afleggen)', ['leg'], 'I am taking the state exam in June.', 'leg … af.'),
    fill('Waar ___ "dit" naar in regel 12?', ['verwijst'], 'What does "dit" refer to in line 12?', 'verwijzen naar.'),
    fill('Ik ben voor, en ___ om twee redenen.', ['wel'], 'I am in favour, for two reasons.', 'en wel om.'),
    fill('Uw tekst wordt ___ op inhoud en taal. (beoordelen)', ['beoordeeld'], 'Your text is assessed on content and language.', 'be- verb: beoordeeld.'),
    build('I would advise you to phone first.', 'Ik zou u aanraden om eerst te bellen.', ['raad aan', 'bellen te'], 'zou … aanraden om … te bellen.'),
    build('If I understand correctly, you are asking for my opinion.', 'Als ik het goed begrijp, vraagt u om mijn mening.', ['u vraagt', 'begrijp ik'], 'als … begrijp; vraagt u.'),
    build('You can take each part separately.', 'Je kunt elk onderdeel apart afleggen.', ['elke', 'leg af'], 'het onderdeel → elk onderdeel.'),
    tr('en-nl', 'What is the main idea of the text?', ['Wat is de hoofdgedachte van de tekst?'], 'hoofdgedachte.'),
    tr('nl-en', 'Let op de signaalwoorden; ze laten zien hoe de alinea’s samenhangen.', ['Pay attention to the signal words; they show how the paragraphs are connected.'], 'signaalwoorden; alinea’s.'),
    read('Leestekst (examenstijl). Flexwerk: vrijheid of onzekerheid? Het aantal mensen met een flexibel contract is in tien jaar sterk toegenomen. Werkgevers wijzen op de voordelen: zij kunnen snel inspelen op drukte, en werknemers zouden meer vrijheid hebben. Uit onderzoek blijkt echter dat die vrijheid vooral geldt voor hoogopgeleide zzp’ers. Voor wie een oproepcontract heeft, betekent flexwerk vooral onzekerheid: geen vast inkomen, geen hypotheek en weinig scholing. Dit heeft ook gevolgen voor de samenleving als geheel, want mensen zonder zekerheid stellen grote beslissingen uit, zoals het krijgen van kinderen. De wetgever heeft daarom besloten vaste contracten aantrekkelijker te maken. Of dat voldoende is, moet nog blijken.', [
      { q: 'Wat is de hoofdgedachte van de tekst?', options: ['Flexwerk geeft iedereen meer vrijheid.', 'Flexwerk biedt sommigen vrijheid, maar veel anderen vooral onzekerheid.', 'Flexwerk moet worden verboden.'], answer: 1, explain: 'The turn after "echter" carries the main point.' },
      { q: 'Waar verwijst "Dit" naar in de zin "Dit heeft ook gevolgen …"?', options: ['naar de vrijheid van zzp’ers', 'naar de onzekerheid van mensen met een oproepcontract', 'naar het onderzoek'], answer: 1, explain: 'It points back to the uncertainty described just before.' },
      { q: 'Wat is de functie van het signaalwoord "echter"?', options: ['het geeft een voorbeeld', 'het kondigt een tegenstelling aan', 'het vat samen'], answer: 1, explain: 'echter = contrast.' },
      { q: 'Welke bewering volgt uit de tekst?', options: ['De nieuwe wet lost het probleem zeker op.', 'Het is nog onzeker of de maatregel genoeg effect heeft.', 'Werkgevers zijn tegen flexwerk.'], answer: 1, explain: '"Of dat voldoende is, moet nog blijken."' },
    ], { en: 'Reading text (exam style). Flexible work: freedom or insecurity? The number of people on a flexible contract has risen sharply in ten years. Employers point to the advantages: they can respond quickly to busy periods, and employees are said to have more freedom. Research shows, however, that this freedom mainly applies to highly educated freelancers. For those on a zero-hours contract, flexible work mainly means insecurity: no steady income, no mortgage and little training. This also has consequences for society as a whole, because people without security postpone big decisions, such as having children. The legislator has therefore decided to make permanent contracts more attractive. Whether that is enough remains to be seen.' }),
    listen('Bij het onderdeel luisteren hoort u elk fragment één keer, dus lees de vragen van tevoren goed door.', ['In the listening part you hear each fragment once, so read the questions carefully beforehand.', 'You may listen to each fragment as often as you like.', 'There are no questions in the listening part.'], 0, 'één keer; van tevoren.'),
    speak('Volgens mij is thuiswerken een goede ontwikkeling, en wel om twee redenen. Ten eerste bespaart het reistijd. Ten tweede kunnen mensen zich thuis beter concentreren.', 'In my view working from home is a good development, for two reasons. First it saves travel time. Second people can concentrate better at home.'),
    free('Exam-style speaking task, short (30 seconds): a colleague wants to stop his Dutch course because he is too busy. Advise him.', 'Ik begrijp dat je het druk hebt, maar ik zou je aanraden om niet te stoppen. Je hebt al zo veel geleerd. Misschien kun je tijdelijk één avond per week doen in plaats van twee. Dan blijf je vooruitgaan zonder dat het te zwaar wordt.', 'I understand that you are busy, but I would advise you not to stop. You have already learned so much. Maybe you can temporarily do one evening a week instead of two. Then you keep progressing without it becoming too heavy.', { hints: ['Ik begrijp dat …, maar …', 'Ik zou je aanraden om …', 'Misschien kun je …'] }),
    free('Exam-style speaking task, long (2 minutes): "Moeten alle kinderen op de basisschool leren programmeren?" Give your opinion with two arguments, one counterargument and a conclusion.', 'Volgens mij is het een goed idee dat kinderen op de basisschool leren programmeren, en wel om twee redenen. Ten eerste wordt technologie steeds belangrijker op de arbeidsmarkt; wie de basis begrijpt, heeft later meer keuze. Ten tweede leer je door programmeren logisch denken en problemen in stappen oplossen, wat ook bij rekenen en taal helpt. Tegenstanders zeggen dat er al te weinig tijd is voor lezen en rekenen. Dat mag zo zijn, maar programmeren kan juist in die vakken worden geïntegreerd, bijvoorbeeld met eenvoudige rekenspelletjes. Bovendien hoeft het niet elke dag; een uur per week is genoeg. Kortom, ik ben voor, mits leraren daarvoor goed worden opgeleid.', 'In my view it is a good idea for children to learn programming at primary school, for two reasons. First, technology is becoming ever more important on the labour market. Second, programming teaches logical thinking. Opponents say there is already too little time for reading and arithmetic. That may be so, but programming can be integrated into those subjects. In short, I am in favour, provided teachers are trained well for it.', { hints: ['Volgens mij …, en wel om twee redenen', 'Ten eerste … Ten tweede …', 'Tegenstanders zeggen … Dat mag zo zijn, maar …', 'Kortom, …'] }),
    write('Exam-style writing task, short (about 60 words): you cannot attend a course day next week. Email the course coordinator, mevrouw Van Dijk: say which day, give the reason, and ask how you can catch up.', ['Geachte / Beste mevrouw Van Dijk, and u throughout', 'Which day you will miss', 'Reason in one sentence', 'A question about catching up (inhalen)', 'Closing line and Met vriendelijke groet, + name'], 'Beste mevrouw Van Dijk, helaas kan ik volgende week dinsdag niet aanwezig zijn bij de cursusdag, omdat ik die dag een afspraak in het ziekenhuis heb die niet verzet kan worden. Zou u mij kunnen laten weten hoe ik de gemiste stof kan inhalen? Ik ben uiteraard bereid extra opdrachten te maken. Bij voorbaat dank. Met vriendelijke groet, Sam Taylor'),
    write('Exam-style writing task, long (about 200 words): your employer wants everyone back in the office five days a week. Write a letter to the management in which you argue for keeping two days of working from home.', ['Formal opening and a clear purpose in the first paragraph', 'Two arguments with support, each in its own paragraph', 'One counterargument from the employer’s side, conceded and refuted', 'A concrete proposal', 'Formal closing; u throughout; check verb position and dt'], 'Geachte directie, Naar aanleiding van uw bericht over de terugkeer naar kantoor wil ik u vragen de mogelijkheid van twee thuiswerkdagen te behouden. In de eerste plaats is gebleken dat de productiviteit van onze afdeling tijdens het thuiswerken niet is gedaald; de kwartaalcijfers laten zelfs een lichte stijging zien. Daarnaast bespaart thuiswerken veel reistijd, waardoor medewerkers uitgeruster zijn en het ziekteverzuim lager ligt. Ik begrijp dat u zich zorgen maakt over de samenwerking en de binding met het bedrijf. Dat is een terecht punt, maar juist daarvoor zijn drie vaste kantoordagen voldoende, mits alle teamleden op dezelfde dagen aanwezig zijn. Ik stel daarom voor dat elk team twee vaste thuiswerkdagen kiest en dat wij deze regeling na een halfjaar samen evalueren. Graag licht ik dit voorstel in een gesprek nader toe. Met vriendelijke groet, Sam Taylor'),
  ], [
    mc('"Activeren" as a writer’s aim means', ['to get the reader to do something', 'to entertain'], 0, 'activeren = call to action.'),
    fill('Wat is de functie van ___ 3? (paragraph)', ['alinea'], 'What is the function of paragraph 3?', 'alinea.'),
    fill('Ik zou u ___ om eerst te bellen. (advise)', ['aanraden'], 'I would advise you to phone first.', 'aanraden.'),
    build('Read the task carefully.', 'Lees de opdracht goed.', ['leest', 'het'], 'de opdracht.'),
    tr('en-nl', 'I am in favour, for two reasons.', ['Ik ben voor, en wel om twee redenen.'], 'en wel om.'),
    speak('Als ik het goed begrijp, vraagt u om mijn mening. Volgens mij is het een goed plan, en wel om twee redenen.', 'If I understand correctly, you are asking for my opinion. In my view it is a good plan, for two reasons.'),
  ]));

  units.push(unit('s4u6', 'Valkuilen en examentraining', 'pitfalls and exam training', u6, [
    mc('"Eventueel" means', ['possibly', 'eventually'], 0, 'possibly.'),
    mc('Which is correct?', ['Het gebeurt vaak.', 'Het gebeurd vaak.'], 0, 'Present: -t.'),
    fill('Het ___ geen zin.', ['heeft'], 'There is no point.', 'zin hebben.'),
    fill('Waar verwijst "dit" ___?', ['naar'], 'What does "dit" refer to?', 'verwijzen naar.'),
    fill('Ik ben voor, en wel ___ twee redenen.', ['om'], 'I am in favour, for two reasons.', 'en wel om.'),
    build('I overlooked that mistake.', 'Ik heb die fout over het hoofd gezien.', ['overzien', 'dat'], 'over het hoofd zien; die fout.'),
    build('I would advise you to contact the municipality.', 'Ik zou u aanraden om contact op te nemen met de gemeente.', ['opnemen te', 'raad'], 'contact op te nemen met.'),
    fix('Hun zeggen dat het maakt geen zin.', ['Zij zeggen dat het geen zin heeft.', 'Ze zeggen dat het geen zin heeft.'], 'hun is not a subject; zin hebben; verb at the end.'),
    tr('en-nl', 'What is the main idea of the text?', ['Wat is de hoofdgedachte van de tekst?'], 'hoofdgedachte.'),
    listen('Bij schrijfvaardigheid wordt uw tekst beoordeeld op inhoud, opbouw, grammatica en woordkeuze.', ['In the writing part your text is assessed on content, structure, grammar and word choice.', 'In the writing part only spelling counts.', 'The writing part is not assessed.'], 0, 'beoordeeld op.'),
    speak('Ik leg in juni het staatsexamen af; uiteindelijk wil ik in Nederland gaan studeren.', 'I am taking the state exam in June; eventually I want to study in the Netherlands.'),
  ]));

  A.stage('s4', '4', 'B2', 'Upper intermediate', 'Dutch for study and professional life: long sentences, all past tenses, the full passive, formal and nominal style, argumentation, discourse markers, register switching, regional variation, proverbs, false friends and Staatsexamen NT2 Programma II training.', units, []);
})();
