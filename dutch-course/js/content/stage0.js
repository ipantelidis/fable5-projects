/* Stage 0 — Foundations: sounds, spelling, numbers, time, greetings, survival Amsterdam Dutch.
   Part 1 of this file: dictionary + grammar reference. Part 2 (stage0-lessons.js): lessons. */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, G, h, p, tip, warn, table, ex, list } = A;

  /* ---------------- Dictionary: Stage 0 ---------------- */
  // Unit 1: sounds
  W('ja', 'yes', 'adv', 'Ja, dat klopt.', 'Yes, that is right.', { theme: 'basics', stage: 0 });
  W('nee', 'no', 'adv', 'Nee, dank je.', 'No, thank you.', { theme: 'basics', stage: 0 });
  W('hallo', 'hello', 'interj', 'Hallo, ik ben Sam.', 'Hello, I am Sam.', { theme: 'greetings', stage: 0 });
  W('dag', 'hello / goodbye', 'interj', 'Dag meneer!', 'Hello sir! / Bye sir!', { theme: 'greetings', stage: 0, id: 'dag-interj', note: 'Used both when arriving and when leaving.' });
  W('ik', 'I', 'pron', 'Ik ben Anna.', 'I am Anna.', { theme: 'basics', stage: 0 });
  W('jij', 'you (informal)', 'pron', 'Jij bent Tom.', 'You are Tom.', { theme: 'basics', stage: 0, altNl: ['je'] });
  W('u', 'you (formal)', 'pron', 'Bent u meneer De Vries?', 'Are you Mr De Vries?', { theme: 'basics', stage: 0 });
  N('naam', 'de', 'namen', 'name', 'Mijn naam is Lisa.', 'My name is Lisa.', { theme: 'basics', stage: 0 });
  VB('spellen', 'to spell', 'spel|spelt|spellen', 'spelde|spelden', 'gespeld', 'hebben', 'Kun je dat spellen?', 'Can you spell that?', { theme: 'basics', stage: 0 });
  N('letter', 'de', 'letters', 'letter', 'De letter g is lastig.', 'The letter g is tricky.', { theme: 'basics', stage: 0 });
  N('woord', 'het', 'woorden', 'word', 'Dat is een lang woord.', 'That is a long word.', { theme: 'basics', stage: 0 });
  VB('zijn', 'to be', 'ben|is|zijn', 'was|waren', 'geweest', 'zijn', 'Ik ben moe.', 'I am tired.', { theme: 'basics', stage: 0, note: 'Irregular: ik ben, jij bent, hij is, wij zijn.' });
  VB('heten', 'to be called', 'heet|heet|heten', 'heette|heetten', 'geheten', 'hebben', 'Ik heet Anna.', 'My name is Anna.', { theme: 'basics', stage: 0 });
  PH('Hoe heet je?', 'What is your name?', 'Hoe heet je? — Ik heet Bram.', 'What is your name? — My name is Bram.', { theme: 'basics', stage: 0 });
  PH('Hoe spel je dat?', 'How do you spell that?', 'Hoe spel je dat? — B-R-A-M.', 'How do you spell that? — B-R-A-M.', { theme: 'basics', stage: 0 });
  PH('Aangenaam', 'Nice to meet you', 'Aangenaam! Ik ben Eva.', 'Nice to meet you! I am Eva.', { theme: 'greetings', stage: 0, id: 'aangenaam' });
  W('en', 'and', 'conj', 'Anna en Tom.', 'Anna and Tom.', { theme: 'basics', stage: 0 });

  N('man', 'de', 'mannen', 'man', 'De man leest een boek.', 'The man is reading a book.', { theme: 'people', stage: 0 });
  N('maan', 'de', 'manen', 'moon', 'De maan is vol.', 'The moon is full.', { theme: 'nature', stage: 0 });
  N('boom', 'de', 'bomen', 'tree', 'De boom is oud.', 'The tree is old.', { theme: 'nature', stage: 0 });
  N('bom', 'de', 'bommen', 'bomb', 'Dat was een bom van een feest.', 'That was a bomb of a party (a great party).', { theme: 'misc', stage: 0 });
  N('vis', 'de', 'vissen', 'fish', 'De vis is vers.', 'The fish is fresh.', { theme: 'food', stage: 0 });
  W('vies', 'dirty', 'adj', 'Het glas is vies.', 'The glass is dirty.', { theme: 'basics', stage: 0 });
  N('boot', 'de', 'boten', 'boat', 'De boot vaart op de gracht.', 'The boat sails on the canal.', { theme: 'city', stage: 0 });
  N('bot', 'het', 'botten', 'bone', 'De hond heeft een bot.', 'The dog has a bone.', { theme: 'misc', stage: 0 });
  N('bus', 'de', 'bussen', 'bus', 'De bus komt om acht uur.', 'The bus comes at eight o’clock.', { theme: 'transport', stage: 0 });
  N('buur', 'de', 'buren', 'neighbour', 'Mijn buur heet Kees.', 'My neighbour is called Kees.', { theme: 'people', stage: 0 });
  N('bos', 'het', 'bossen', 'forest', 'Het bos is groot.', 'The forest is big.', { theme: 'nature', stage: 0 });
  N('zon', 'de', 'zonnen', 'sun', 'De zon schijnt.', 'The sun is shining.', { theme: 'nature', stage: 0 });
  N('zee', 'de', 'zeeën', 'sea', 'De zee is koud.', 'The sea is cold.', { theme: 'nature', stage: 0 });
  N('bed', 'het', 'bedden', 'bed', 'Het bed is zacht.', 'The bed is soft.', { theme: 'home', stage: 0 });
  N('bal', 'de', 'ballen', 'ball', 'De bal is rond.', 'The ball is round.', { theme: 'misc', stage: 0 });
  N('tak', 'de', 'takken', 'branch', 'De tak is dun.', 'The branch is thin.', { theme: 'nature', stage: 0 });
  N('taak', 'de', 'taken', 'task', 'Dat is een grote taak.', 'That is a big task.', { theme: 'work', stage: 0 });
  N('week', 'de', 'weken', 'week', 'Tot volgende week!', 'See you next week!', { theme: 'time', stage: 0 });
  N('weg', 'de', 'wegen', 'road / way', 'De weg is lang.', 'The road is long.', { theme: 'city', stage: 0, plnote: 'The short e becomes a long e in the plural: weg, wegen. A small group of words does this (dag, weg, glas, stad).' });
  N('pen', 'de', 'pennen', 'pen', 'Heb je een pen?', 'Do you have a pen?', { theme: 'basics', stage: 0 });
  N('peer', 'de', 'peren', 'pear', 'De peer is zoet.', 'The pear is sweet.', { theme: 'food', stage: 0 });

  N('huis', 'het', 'huizen', 'house', 'Het huis is klein.', 'The house is small.', { theme: 'home', stage: 0 });
  N('tuin', 'de', 'tuinen', 'garden', 'De tuin is mooi.', 'The garden is beautiful.', { theme: 'home', stage: 0 });
  W('uit', 'out / from', 'prep', 'Ik kom uit Engeland.', 'I come from England.', { theme: 'basics', stage: 0 });
  N('ijs', 'het', null, 'ice / ice cream', 'Ik wil een ijsje.', 'I want an ice cream.', { theme: 'food', stage: 0, dim: 'ijsje' });
  N('trein', 'de', 'treinen', 'train', 'De trein is vol.', 'The train is full.', { theme: 'transport', stage: 0 });
  W('klein', 'small', 'adj', 'Het kind is klein.', 'The child is small.', { theme: 'basics', stage: 0 });
  N('wijn', 'de', 'wijnen', 'wine', 'De wijn is rood.', 'The wine is red.', { theme: 'food', stage: 0 });
  W('koud', 'cold', 'adj', 'Het water is koud.', 'The water is cold.', { theme: 'weather', stage: 0 });
  W('oud', 'old', 'adj', 'Amsterdam is oud.', 'Amsterdam is old.', { theme: 'basics', stage: 0 });
  W('blauw', 'blue', 'adj', 'De lucht is blauw.', 'The sky is blue.', { theme: 'colours', stage: 0 });
  N('deur', 'de', 'deuren', 'door', 'De deur is dicht.', 'The door is closed.', { theme: 'home', stage: 0 });
  N('neus', 'de', 'neuzen', 'nose', 'Mijn neus is koud.', 'My nose is cold.', { theme: 'body', stage: 0 });
  N('boek', 'het', 'boeken', 'book', 'Het boek is dik.', 'The book is thick.', { theme: 'basics', stage: 0 });
  W('goed', 'good', 'adj', 'Het eten is goed.', 'The food is good.', { theme: 'basics', stage: 0 });
  N('koe', 'de', 'koeien', 'cow', 'De koe staat in de wei.', 'The cow is standing in the meadow.', { theme: 'nature', stage: 0 });
  N('vrouw', 'de', 'vrouwen', 'woman / wife', 'De vrouw werkt in Amsterdam.', 'The woman works in Amsterdam.', { theme: 'people', stage: 0 });
  N('tijd', 'de', 'tijden', 'time', 'Ik heb geen tijd.', 'I have no time.', { theme: 'time', stage: 0 });
  N('ei', 'het', 'eieren', 'egg', 'Ik eet een ei.', 'I am eating an egg.', { theme: 'food', stage: 0 });
  W('nieuw', 'new', 'adj', 'De fiets is nieuw.', 'The bike is new.', { theme: 'basics', stage: 0 });
  N('kind', 'het', 'kinderen', 'child', 'Het kind speelt.', 'The child is playing.', { theme: 'people', stage: 0 });

  W('graag', 'gladly / please (with a request)', 'adv', 'Een koffie, graag.', 'A coffee, please.', { theme: 'politeness', stage: 0 });
  N('gracht', 'de', 'grachten', 'canal', 'De gracht is mooi.', 'The canal is beautiful.', { theme: 'city', stage: 0 });
  VB('lachen', 'to laugh', 'lach|lacht|lachen', 'lachte|lachten', 'gelachen', 'hebben', 'Wij lachen veel.', 'We laugh a lot.', { theme: 'basics', stage: 0 });
  N('school', 'de', 'scholen', 'school', 'De school is dichtbij.', 'The school is nearby.', { theme: 'city', stage: 0 });
  W('schoon', 'clean', 'adj', 'De keuken is schoon.', 'The kitchen is clean.', { theme: 'home', stage: 0 });
  N('schip', 'het', 'schepen', 'ship', 'Het schip is groot.', 'The ship is big.', { theme: 'transport', stage: 0, plnote: 'Irregular: the short i becomes a long e in the plural (schip, schepen).' });
  W('lang', 'long / tall', 'adj', 'De straat is lang.', 'The street is long.', { theme: 'basics', stage: 0 });
  N('ring', 'de', 'ringen', 'ring', 'De ring is van goud.', 'The ring is made of gold.', { theme: 'misc', stage: 0 });
  N('jongen', 'de', 'jongens', 'boy', 'De jongen fietst.', 'The boy is cycling.', { theme: 'people', stage: 0 });
  VB('brengen', 'to bring', 'breng|brengt|brengen', 'bracht|brachten', 'gebracht', 'hebben', 'Ik breng het boek.', 'I bring the book.', { theme: 'basics', stage: 0 });
  N('meisje', 'het', 'meisjes', 'girl', 'Het meisje lacht.', 'The girl laughs.', { theme: 'people', stage: 0 });
  W('lekker', 'tasty / nice', 'adj', 'De koffie is lekker.', 'The coffee is tasty.', { theme: 'food', stage: 0 });
  N('tafel', 'de', 'tafels', 'table', 'De tafel is rond.', 'The table is round.', { theme: 'home', stage: 0 });
  N('fiets', 'de', 'fietsen', 'bicycle', 'Mijn fiets is oud.', 'My bike is old.', { theme: 'transport', stage: 0 });
  N('straat', 'de', 'straten', 'street', 'De straat is stil.', 'The street is quiet.', { theme: 'city', stage: 0 });
  W('rood', 'red', 'adj', 'De deur is rood.', 'The door is red.', { theme: 'colours', stage: 0 });
  N('rekening', 'de', 'rekeningen', 'bill', 'De rekening, alstublieft.', 'The bill, please.', { theme: 'cafe', stage: 0 });
  W('acht', 'eight', 'num', 'Het is acht uur.', 'It is eight o’clock.', { theme: 'numbers', stage: 0 });
  W('zeker', 'certainly / sure', 'adv', 'Ja, zeker!', 'Yes, certainly!', { theme: 'basics', stage: 0 });
  VB('betalen', 'to pay', 'betaal|betaalt|betalen', 'betaalde|betaalden', 'betaald', 'hebben', 'Ik betaal met pin.', 'I pay by card.', { theme: 'shopping', stage: 0 });

  // Unit 2: spelling
  N('kat', 'de', 'katten', 'cat', 'De kat slaapt.', 'The cat is sleeping.', { theme: 'animals', stage: 0 });
  N('kaart', 'de', 'kaarten', 'card / map / ticket', 'Heb je een kaart van de stad?', 'Do you have a map of the city?', { theme: 'city', stage: 0 });
  N('jaar', 'het', 'jaren', 'year', 'Ik woon hier een jaar.', 'I have lived here for a year.', { theme: 'time', stage: 0 });
  N('pot', 'de', 'potten', 'pot / jar', 'De pot is leeg.', 'The jar is empty.', { theme: 'home', stage: 0 });
  N('poot', 'de', 'poten', 'paw / leg (of an animal or table)', 'De hond heeft vier poten.', 'The dog has four paws.', { theme: 'animals', stage: 0 });
  N('muur', 'de', 'muren', 'wall', 'De muur is wit.', 'The wall is white.', { theme: 'home', stage: 0 });
  N('uur', 'het', 'uren', 'hour', 'De les duurt een uur.', 'The lesson lasts an hour.', { theme: 'time', stage: 0 });
  N('stad', 'de', 'steden', 'city', 'Amsterdam is een mooie stad.', 'Amsterdam is a beautiful city.', { theme: 'city', stage: 0, plnote: 'Irregular: stad becomes steden.' });
  N('dag', 'de', 'dagen', 'day', 'Fijne dag!', 'Have a nice day!', { theme: 'time', stage: 0, plnote: 'The short a becomes a long a in the plural: dag, dagen.' });
  N('glas', 'het', 'glazen', 'glass', 'Een glas water, graag.', 'A glass of water, please.', { theme: 'cafe', stage: 0, plnote: 'Two changes at once: the vowel becomes long (a → aa sound) and s becomes z.' });
  N('brief', 'de', 'brieven', 'letter (mail)', 'De brief is van de gemeente.', 'The letter is from the municipality.', { theme: 'bureaucracy', stage: 0 });
  N('kaas', 'de', 'kazen', 'cheese', 'De kaas is oud.', 'The cheese is mature.', { theme: 'food', stage: 0 });
  N('neef', 'de', 'neven', 'cousin (male) / nephew', 'Mijn neef woont in Utrecht.', 'My cousin lives in Utrecht.', { theme: 'family', stage: 0 });
  N('hond', 'de', 'honden', 'dog', 'De hond is lief.', 'The dog is sweet.', { theme: 'animals', stage: 0 });
  N('brood', 'het', 'broden', 'bread', 'Het brood is vers.', 'The bread is fresh.', { theme: 'food', stage: 0 });
  N('hand', 'de', 'handen', 'hand', 'Mijn hand is koud.', 'My hand is cold.', { theme: 'body', stage: 0 });
  W('lief', 'sweet / kind', 'adj', 'De buurvrouw is lief.', 'The neighbour is kind.', { theme: 'basics', stage: 0 });
  N('vraag', 'de', 'vragen', 'question', 'Ik heb een vraag.', 'I have a question.', { theme: 'basics', stage: 0 });
  N('mens', 'de', 'mensen', 'person / human', 'Er zijn veel mensen op straat.', 'There are many people in the street.', { theme: 'people', stage: 0 });
  W('half', 'half', 'adj', 'Het is half drie.', 'It is half past two.', { theme: 'time', stage: 0 });
  W('grijs', 'grey', 'adj', 'De lucht is grijs.', 'The sky is grey.', { theme: 'colours', stage: 0 });
  VB('vinden', 'to find / to think (opinion)', 'vind|vindt|vinden', 'vond|vonden', 'gevonden', 'hebben', 'Ik vind Amsterdam mooi.', 'I think Amsterdam is beautiful.', { theme: 'basics', stage: 0 });
  VB('worden', 'to become', 'word|wordt|worden', 'werd|werden', 'geworden', 'zijn', 'Het wordt koud.', 'It is getting cold.', { theme: 'basics', stage: 0 });
  N('uitgang', 'de', 'uitgangen', 'exit', 'Waar is de uitgang?', 'Where is the exit?', { theme: 'city', stage: 0 });
  N('ingang', 'de', 'ingangen', 'entrance', 'De ingang is links.', 'The entrance is on the left.', { theme: 'city', stage: 0 });
  W('open', 'open', 'adj', 'De winkel is open.', 'The shop is open.', { theme: 'shopping', stage: 0 });
  W('gesloten', 'closed', 'adj', 'Op zondag is de bank gesloten.', 'On Sunday the bank is closed.', { theme: 'shopping', stage: 0 });
  VB('duwen', 'to push', 'duw|duwt|duwen', 'duwde|duwden', 'geduwd', 'hebben', 'Duwen, niet trekken!', 'Push, don’t pull!', { theme: 'city', stage: 0 });
  VB('trekken', 'to pull', 'trek|trekt|trekken', 'trok|trokken', 'getrokken', 'hebben', 'Je moet aan de deur trekken.', 'You have to pull the door.', { theme: 'city', stage: 0 });
  N('kassa', 'de', "kassa's", 'checkout / till', 'Betalen bij de kassa.', 'Pay at the checkout.', { theme: 'shopping', stage: 0 });
  PH('Let op', 'Attention / Watch out', 'Let op: fietsers!', 'Watch out: cyclists!', { theme: 'city', stage: 0, id: 'let-op' });
  W('verboden', 'forbidden', 'adj', 'Verboden te roken.', 'No smoking.', { theme: 'city', stage: 0 });
  N('fietspad', 'het', 'fietspaden', 'bike path', 'Loop niet op het fietspad!', 'Don’t walk on the bike path!', { theme: 'city', stage: 0 });
  N('korting', 'de', 'kortingen', 'discount', 'Twintig procent korting.', 'Twenty percent discount.', { theme: 'shopping', stage: 0 });
  N('uitverkoop', 'de', null, 'sale (clearance)', 'De uitverkoop begint morgen.', 'The sale starts tomorrow.', { theme: 'shopping', stage: 0 });
  N('halte', 'de', 'haltes', 'stop (tram/bus)', 'De halte is daar.', 'The stop is over there.', { theme: 'transport', stage: 0 });
  N('spoor', 'het', 'sporen', 'platform / track', 'De trein vertrekt van spoor 4.', 'The train leaves from platform 4.', { theme: 'transport', stage: 0 });
  N('winkel', 'de', 'winkels', 'shop', 'De winkel is open.', 'The shop is open.', { theme: 'shopping', stage: 0 });
  N('toegang', 'de', null, 'access / entry', 'Geen toegang.', 'No entry.', { theme: 'city', stage: 0 });
  VB('roken', 'to smoke', 'rook|rookt|roken', 'rookte|rookten', 'gerookt', 'hebben', 'Hier mag je niet roken.', 'You may not smoke here.', { theme: 'city', stage: 0 });

  // Unit 3: numbers, time, dates
  const NUMS = [['nul', 'zero', 'Nul graden: het vriest.', 'Zero degrees: it is freezing.'], ['een', 'one', 'Ik heb één broer.', 'I have one brother.'], ['twee', 'two', 'Twee koffie, graag.', 'Two coffees, please.'], ['drie', 'three', 'Het is drie uur.', 'It is three o’clock.'], ['vier', 'four', 'Wij zijn met vier.', 'There are four of us.'], ['vijf', 'five', 'Vijf minuten, alsjeblieft.', 'Five minutes, please.'], ['zes', 'six', 'De les begint om zes uur.', 'The lesson starts at six.'], ['zeven', 'seven', 'Een week heeft zeven dagen.', 'A week has seven days.'], ['negen', 'nine', 'Ik werk tot negen uur.', 'I work until nine.'], ['tien', 'ten', 'Dat kost tien euro.', 'That costs ten euros.'], ['elf', 'eleven', 'Tram elf gaat naar het station.', 'Tram eleven goes to the station.'], ['twaalf', 'twelve', 'Om twaalf uur eten we.', 'At twelve we eat.'], ['dertien', 'thirteen', 'Ik woon op nummer dertien.', 'I live at number thirteen.'], ['veertien', 'fourteen', 'Over veertien dagen ben ik terug.', 'In fourteen days I am back.'], ['vijftien', 'fifteen', 'De pauze duurt vijftien minuten.', 'The break lasts fifteen minutes.'], ['zestien', 'sixteen', 'Mijn zus is zestien.', 'My sister is sixteen.'], ['zeventien', 'seventeen', 'Bus zeventien is vol.', 'Bus seventeen is full.'], ['achttien', 'eighteen', 'Je moet achttien zijn.', 'You have to be eighteen.'], ['negentien', 'nineteen', 'Het is negentien graden.', 'It is nineteen degrees.'], ['twintig', 'twenty', 'Twintig procent korting.', 'Twenty percent discount.'], ['dertig', 'thirty', 'Ik ben dertig jaar.', 'I am thirty years old.'], ['veertig', 'forty', 'De tram komt over veertig seconden.', 'The tram comes in forty seconds.'], ['vijftig', 'fifty', 'Dat is vijftig euro.', 'That is fifty euros.'], ['zestig', 'sixty', 'Een uur heeft zestig minuten.', 'An hour has sixty minutes.'], ['zeventig', 'seventy', 'Mijn oma is zeventig.', 'My grandma is seventy.'], ['tachtig', 'eighty', 'Tachtig kilometer per uur.', 'Eighty kilometres per hour.'], ['negentig', 'ninety', 'Negentig procent is klaar.', 'Ninety percent is done.'], ['honderd', 'hundred', 'Honderd euro is veel.', 'A hundred euros is a lot.'], ['duizend', 'thousand', 'Duizend mensen op het plein.', 'A thousand people in the square.']];
  NUMS.forEach(([nl, en, a, b]) => W(nl, en, 'num', a, b, { theme: 'numbers', stage: 0 }));
  N('euro', 'de', "euro's", 'euro', 'Dat is twee euro.', 'That is two euros.', { theme: 'shopping', stage: 0, note: 'After a number the singular is used: tien euro.' });
  N('cent', 'de', 'centen', 'cent', 'Vijftig cent, alstublieft.', 'Fifty cents, please.', { theme: 'shopping', stage: 0 });
  N('nummer', 'het', 'nummers', 'number', 'Wat is je nummer?', 'What is your number?', { theme: 'numbers', stage: 0 });
  N('telefoonnummer', 'het', 'telefoonnummers', 'phone number', 'Mijn telefoonnummer is 06-12345678.', 'My phone number is 06-12345678.', { theme: 'numbers', stage: 0 });
  N('prijs', 'de', 'prijzen', 'price', 'De prijs is hoog.', 'The price is high.', { theme: 'shopping', stage: 0 });
  VB('kosten', 'to cost', 'kost|kost|kosten', 'kostte|kostten', 'gekost', 'hebben', 'Wat kost dit?', 'What does this cost?', { theme: 'shopping', stage: 0 });
  W('hoeveel', 'how much / how many', 'adv', 'Hoeveel kost het?', 'How much does it cost?', { theme: 'basics', stage: 0 });
  VB('hebben', 'to have', 'heb|heeft|hebben', 'had|hadden', 'gehad', 'hebben', 'Ik heb twee katten.', 'I have two cats.', { theme: 'basics', stage: 0, note: 'Irregular: ik heb, jij hebt, hij heeft, wij hebben.' });
  W('veel', 'much / many / a lot', 'adv', 'Dat is veel geld.', 'That is a lot of money.', { theme: 'basics', stage: 0 });
  N('geld', 'het', null, 'money', 'Ik heb geen geld bij me.', 'I have no money on me.', { theme: 'shopping', stage: 0 });
  W('duur', 'expensive', 'adj', 'Amsterdam is duur.', 'Amsterdam is expensive.', { theme: 'shopping', stage: 0 });
  W('goedkoop', 'cheap', 'adj', 'De markt is goedkoop.', 'The market is cheap.', { theme: 'shopping', stage: 0 });
  N('broer', 'de', 'broers', 'brother', 'Mijn broer is twintig.', 'My brother is twenty.', { theme: 'family', stage: 0 });
  N('zus', 'de', 'zussen', 'sister', 'Mijn zus woont in Leiden.', 'My sister lives in Leiden.', { theme: 'family', stage: 0 });

  N('minuut', 'de', 'minuten', 'minute', 'Nog vijf minuten.', 'Five more minutes.', { theme: 'time', stage: 0 });
  N('kwart', 'het', null, 'quarter', 'Het is kwart over drie.', 'It is a quarter past three.', { theme: 'time', stage: 0 });
  W('over', 'past (time) / about', 'prep', 'Het is tien over vier.', 'It is ten past four.', { theme: 'time', stage: 0 });
  W('voor', 'to (time) / for / before', 'prep', 'Het is vijf voor negen.', 'It is five to nine.', { theme: 'time', stage: 0 });
  N('klok', 'de', 'klokken', 'clock', 'De klok loopt achter.', 'The clock is slow.', { theme: 'time', stage: 0 });
  N('ochtend', 'de', 'ochtenden', 'morning', 'Ik werk in de ochtend.', 'I work in the morning.', { theme: 'time', stage: 0 });
  N('middag', 'de', 'middagen', 'afternoon', 'In de middag ben ik vrij.', 'In the afternoon I am free.', { theme: 'time', stage: 0 });
  N('avond', 'de', 'avonden', 'evening', 'Vanavond eten we thuis.', 'Tonight we eat at home.', { theme: 'time', stage: 0 });
  N('nacht', 'de', 'nachten', 'night', 'De nacht is stil.', 'The night is quiet.', { theme: 'time', stage: 0 });
  W('laat', 'late', 'adj', 'Het is al laat.', 'It is already late.', { theme: 'time', stage: 0 });
  W('vroeg', 'early', 'adj', 'Ik sta vroeg op.', 'I get up early.', { theme: 'time', stage: 0 });
  W('nu', 'now', 'adv', 'Ik ga nu naar huis.', 'I am going home now.', { theme: 'time', stage: 0 });
  N('afspraak', 'de', 'afspraken', 'appointment', 'Ik heb een afspraak om tien uur.', 'I have an appointment at ten.', { theme: 'time', stage: 0 });
  PH('Hoe laat is het?', 'What time is it?', 'Hoe laat is het? — Het is half vier.', 'What time is it? — It is half past three.', { theme: 'time', stage: 0 });
  W('om', 'at (time)', 'prep', 'De film begint om acht uur.', 'The film starts at eight.', { theme: 'time', stage: 0 });
  PH("'s ochtends", 'in the morning', "'s Ochtends drink ik koffie.", 'In the morning I drink coffee.', { theme: 'time', stage: 0, id: 's-ochtends' });
  PH("'s middags", 'in the afternoon', "'s Middags werk ik.", 'In the afternoon I work.', { theme: 'time', stage: 0, id: 's-middags' });
  PH("'s avonds", 'in the evening', "'s Avonds kijk ik tv.", 'In the evening I watch TV.', { theme: 'time', stage: 0, id: 's-avonds' });
  PH("'s nachts", 'at night', "'s Nachts slaap ik.", 'At night I sleep.', { theme: 'time', stage: 0, id: 's-nachts' });

  const DAYS = [['maandag', 'Monday'], ['dinsdag', 'Tuesday'], ['woensdag', 'Wednesday'], ['donderdag', 'Thursday'], ['vrijdag', 'Friday'], ['zaterdag', 'Saturday'], ['zondag', 'Sunday']];
  DAYS.forEach(([nl, en]) => N(nl, 'de', nl + 'en', en, 'Op ' + nl + ' werk ik.', 'On ' + en + ' I work.', { theme: 'time', stage: 0, note: 'Days are written with a lower-case letter.' }));
  const MONTHS = [['januari', 'January'], ['februari', 'February'], ['maart', 'March'], ['april', 'April'], ['mei', 'May'], ['juni', 'June'], ['juli', 'July'], ['augustus', 'August'], ['september', 'September'], ['oktober', 'October'], ['november', 'November'], ['december', 'December']];
  MONTHS.forEach(([nl, en]) => N(nl, 'de', null, en, 'In ' + nl + ' is het hier ' + (['juni', 'juli', 'augustus'].includes(nl) ? 'warm' : ['december', 'januari', 'februari'].includes(nl) ? 'koud' : 'vaak nat') + '.', 'In ' + en + ' it is ' + (['juni', 'juli', 'augustus'].includes(nl) ? 'warm' : ['december', 'januari', 'februari'].includes(nl) ? 'cold' : 'often wet') + ' here.', { theme: 'time', stage: 0, note: 'Months are written with a lower-case letter.' }));
  W('vandaag', 'today', 'adv', 'Vandaag is het maandag.', 'Today is Monday.', { theme: 'time', stage: 0 });
  W('morgen', 'tomorrow', 'adv', 'Tot morgen!', 'See you tomorrow!', { theme: 'time', stage: 0 });
  W('gisteren', 'yesterday', 'adv', 'Gisteren was het zondag.', 'Yesterday was Sunday.', { theme: 'time', stage: 0 });
  N('weekend', 'het', 'weekends', 'weekend', 'Fijn weekend!', 'Have a nice weekend!', { theme: 'time', stage: 0 });
  N('maand', 'de', 'maanden', 'month', 'Een jaar heeft twaalf maanden.', 'A year has twelve months.', { theme: 'time', stage: 0 });
  N('datum', 'de', 'data', 'date', 'Wat is de datum vandaag?', 'What is the date today?', { theme: 'time', stage: 0 });
  N('verjaardag', 'de', 'verjaardagen', 'birthday', 'Mijn verjaardag is in mei.', 'My birthday is in May.', { theme: 'time', stage: 0 });
  W('jarig', 'having one’s birthday', 'adj', 'Ik ben morgen jarig.', 'It is my birthday tomorrow.', { theme: 'time', stage: 0, note: 'Dutch says "I am jarig" instead of "it is my birthday".' });
  W('wanneer', 'when', 'adv', 'Wanneer ben je jarig?', 'When is your birthday?', { theme: 'basics', stage: 0 });
  W('eerste', 'first', 'num', 'De eerste mei is een feestdag in België.', 'The first of May is a holiday in Belgium.', { theme: 'time', stage: 0 });

  // Unit 4: greetings, politeness, survival
  W('hoi', 'hi', 'interj', 'Hoi! Alles goed?', 'Hi! All good?', { theme: 'greetings', stage: 0 });
  PH('Goedemorgen', 'Good morning', 'Goedemorgen! Lekker geslapen?', 'Good morning! Slept well?', { theme: 'greetings', stage: 0, id: 'goedemorgen' });
  PH('Goedemiddag', 'Good afternoon', 'Goedemiddag, kan ik u helpen?', 'Good afternoon, can I help you?', { theme: 'greetings', stage: 0, id: 'goedemiddag' });
  PH('Goedenavond', 'Good evening', 'Goedenavond allemaal!', 'Good evening everyone!', { theme: 'greetings', stage: 0, id: 'goedenavond' });
  PH('Welterusten', 'Good night (sleep well)', 'Welterusten, tot morgen.', 'Good night, see you tomorrow.', { theme: 'greetings', stage: 0, id: 'welterusten' });
  W('doei', 'bye (informal)', 'interj', 'Doei, tot morgen!', 'Bye, see you tomorrow!', { theme: 'greetings', stage: 0 });
  PH('Tot ziens', 'Goodbye (see you)', 'Tot ziens, en bedankt!', 'Goodbye, and thanks!', { theme: 'greetings', stage: 0, id: 'tot-ziens' });
  PH('Tot morgen', 'See you tomorrow', 'Fijne avond, tot morgen!', 'Have a nice evening, see you tomorrow!', { theme: 'greetings', stage: 0, id: 'tot-morgen' });
  PH('Tot straks', 'See you later (today)', 'Ik ga even naar de winkel. Tot straks!', 'I am just going to the shop. See you later!', { theme: 'greetings', stage: 0, id: 'tot-straks' });
  PH('Fijne dag', 'Have a nice day', 'Fijne dag nog!', 'Have a nice rest of the day!', { theme: 'greetings', stage: 0, id: 'fijne-dag' });
  PH('Hoe gaat het?', 'How are you?', 'Hoe gaat het? — Goed, en met jou?', 'How are you? — Good, and you?', { theme: 'greetings', stage: 0, id: 'hoe-gaat-het' });
  PH('Goed, dank je', 'Fine, thanks', 'Goed, dank je. En met jou?', 'Fine, thanks. And you?', { theme: 'greetings', stage: 0, id: 'goed-dank-je' });
  PH('Het gaat wel', 'So-so / not bad', 'Het gaat wel. Ik ben een beetje moe.', 'So-so. I am a bit tired.', { theme: 'greetings', stage: 0, id: 'het-gaat-wel' });
  W('prima', 'fine / great', 'adj', 'Prima, dank je!', 'Great, thanks!', { theme: 'greetings', stage: 0 });
  W('moe', 'tired', 'adj', 'Ik ben moe.', 'I am tired.', { theme: 'basics', stage: 0 });
  W('meneer', 'sir / Mr', 'noun', 'Dag meneer Jansen.', 'Hello Mr Jansen.', { theme: 'people', stage: 0, gender: 'de', plural: 'meneren' });
  W('mevrouw', 'madam / Mrs / Ms', 'noun', 'Goedemiddag mevrouw.', 'Good afternoon madam.', { theme: 'people', stage: 0, gender: 'de', plural: 'mevrouwen' });
  W('ook', 'also / too', 'adv', 'Ik ook!', 'Me too!', { theme: 'basics', stage: 0 });
  W('met', 'with', 'prep', 'En met jou?', 'And (with) you?', { theme: 'basics', stage: 0 });

  W('alsjeblieft', 'please / here you are (informal)', 'interj', 'Een koffie, alsjeblieft.', 'A coffee, please.', { theme: 'politeness', stage: 0 });
  W('alstublieft', 'please / here you are (formal)', 'interj', 'Alstublieft, uw bonnetje.', 'Here you are, your receipt.', { theme: 'politeness', stage: 0 });
  PH('Dank je wel', 'Thank you (informal)', 'Dank je wel voor de hulp!', 'Thanks for the help!', { theme: 'politeness', stage: 0, id: 'dank-je-wel' });
  PH('Dank u wel', 'Thank you (formal)', 'Dank u wel, meneer.', 'Thank you, sir.', { theme: 'politeness', stage: 0, id: 'dank-u-wel' });
  W('bedankt', 'thanks', 'interj', 'Bedankt en tot ziens!', 'Thanks and goodbye!', { theme: 'politeness', stage: 0 });
  PH('Graag gedaan', "You're welcome", 'Bedankt! — Graag gedaan.', 'Thanks! — You’re welcome.', { theme: 'politeness', stage: 0, id: 'graag-gedaan' });
  W('sorry', 'sorry', 'interj', 'Sorry, ik ben te laat.', 'Sorry, I am late.', { theme: 'politeness', stage: 0 });
  W('pardon', 'excuse me', 'interj', 'Pardon, mag ik erlangs?', 'Excuse me, may I get past?', { theme: 'politeness', stage: 0 });
  PH('Mag ik', 'May I', 'Mag ik een glas water?', 'May I have a glass of water?', { theme: 'politeness', stage: 0, id: 'mag-ik' });
  PH('Kunt u dat herhalen?', 'Could you repeat that? (formal)', 'Sorry, kunt u dat herhalen?', 'Sorry, could you repeat that?', { theme: 'politeness', stage: 0, altNl: ['Kun je dat herhalen?'] });
  PH('Ik begrijp het niet', "I don't understand", 'Sorry, ik begrijp het niet.', 'Sorry, I don’t understand.', { theme: 'politeness', stage: 0 });
  PH('Ik spreek een beetje Nederlands', 'I speak a little Dutch', 'Ik spreek een beetje Nederlands, maar ik leer snel.', 'I speak a little Dutch, but I learn fast.', { theme: 'politeness', stage: 0 });
  PH('Spreekt u Engels?', 'Do you speak English? (formal)', 'Pardon, spreekt u Engels?', 'Excuse me, do you speak English?', { theme: 'politeness', stage: 0, altNl: ['Spreek je Engels?'] });
  PH('Wat betekent', 'What does … mean', 'Wat betekent "gezellig"?', 'What does "gezellig" mean?', { theme: 'politeness', stage: 0, id: 'wat-betekent' });
  W('langzaam', 'slow / slowly', 'adj', 'Langzaam, alstublieft.', 'Slowly, please.', { theme: 'politeness', stage: 0 });
  W('Nederlands', 'Dutch (language)', 'noun', 'Ik leer Nederlands.', 'I am learning Dutch.', { theme: 'basics', stage: 0, gender: 'het', plural: null });
  W('Engels', 'English (language)', 'noun', 'Spreek je Engels?', 'Do you speak English?', { theme: 'basics', stage: 0, gender: 'het', plural: null });
  W('beetje', 'a little', 'noun', 'Een beetje suiker, graag.', 'A little sugar, please.', { theme: 'basics', stage: 0, gender: 'het', plural: null, altNl: ['een beetje'] });
  VB('spreken', 'to speak', 'spreek|spreekt|spreken', 'sprak|spraken', 'gesproken', 'hebben', 'Ik spreek Engels en een beetje Nederlands.', 'I speak English and a little Dutch.', { theme: 'basics', stage: 0 });
  VB('begrijpen', 'to understand', 'begrijp|begrijpt|begrijpen', 'begreep|begrepen', 'begrepen', 'hebben', 'Begrijp je dat?', 'Do you understand that?', { theme: 'basics', stage: 0 });
  VB('herhalen', 'to repeat', 'herhaal|herhaalt|herhalen', 'herhaalde|herhaalden', 'herhaald', 'hebben', 'Kun je dat herhalen?', 'Can you repeat that?', { theme: 'basics', stage: 0 });

  N('koffie', 'de', null, 'coffee', 'Een koffie, graag.', 'A coffee, please.', { theme: 'cafe', stage: 0 });
  N('thee', 'de', null, 'tea', 'Wil je thee?', 'Do you want tea?', { theme: 'cafe', stage: 0 });
  N('biertje', 'het', 'biertjes', 'beer (a glass of)', 'Mag ik een biertje?', 'May I have a beer?', { theme: 'cafe', stage: 0 });
  N('water', 'het', null, 'water', 'Een glas water, alstublieft.', 'A glass of water, please.', { theme: 'cafe', stage: 0 });
  N('bonnetje', 'het', 'bonnetjes', 'receipt', 'Wilt u het bonnetje?', 'Would you like the receipt?', { theme: 'shopping', stage: 0 });
  VB('pinnen', 'to pay by card', 'pin|pint|pinnen', 'pinde|pinden', 'gepind', 'hebben', 'Kan ik hier pinnen?', 'Can I pay by card here?', { theme: 'shopping', stage: 0 });
  W('contant', 'cash / in cash', 'adv', 'Ik betaal contant.', 'I pay in cash.', { theme: 'shopping', stage: 0 });
  PH('Zegt u het maar', 'What can I get you? (lit. just say it)', 'Zegt u het maar. — Een cappuccino, graag.', 'What can I get you? — A cappuccino, please.', { theme: 'cafe', stage: 0, altNl: ['Zeg het maar'] });
  PH('Ik wil graag', 'I would like', 'Ik wil graag een thee.', 'I would like a tea.', { theme: 'cafe', stage: 0, id: 'ik-wil-graag' });
  PH('Anders nog iets?', 'Anything else?', 'Anders nog iets? — Nee, dat was het.', 'Anything else? — No, that’s all.', { theme: 'shopping', stage: 0 });
  PH('Dat was het', "That's all", 'Nee, dat was het. Bedankt.', 'No, that’s all. Thanks.', { theme: 'shopping', stage: 0 });
  PH('Wat kost dit?', 'How much is this?', 'Wat kost dit? — Drie euro vijftig.', 'How much is this? — Three euros fifty.', { theme: 'shopping', stage: 0 });
  PH('Pinnen of contant?', 'Card or cash?', 'Pinnen of contant? — Pinnen, graag.', 'Card or cash? — Card, please.', { theme: 'shopping', stage: 0 });
  PH('Eet smakelijk', 'Enjoy your meal', 'Eet smakelijk! — Dank je, jij ook.', 'Enjoy your meal! — Thanks, you too.', { theme: 'cafe', stage: 0 });
  W('proost', 'cheers', 'interj', 'Proost, op je verjaardag!', 'Cheers, to your birthday!', { theme: 'cafe', stage: 0 });
  N('markt', 'de', 'markten', 'market', 'Op zaterdag ga ik naar de markt.', 'On Saturday I go to the market.', { theme: 'shopping', stage: 0 });
  N('tas', 'de', 'tassen', 'bag', 'Wilt u een tas?', 'Would you like a bag?', { theme: 'shopping', stage: 0 });
  N('melk', 'de', null, 'milk', 'Koffie met melk, graag.', 'Coffee with milk, please.', { theme: 'food', stage: 0 });
  N('suiker', 'de', null, 'sugar', 'Zonder suiker, alstublieft.', 'Without sugar, please.', { theme: 'food', stage: 0 });
  W('zonder', 'without', 'prep', 'Thee zonder melk.', 'Tea without milk.', { theme: 'basics', stage: 0 });
  N('appel', 'de', 'appels', 'apple', 'Een kilo appels, graag.', 'A kilo of apples, please.', { theme: 'food', stage: 0 });
  N('kilo', 'de', "kilo's", 'kilo', 'Een kilo kaas is veel.', 'A kilo of cheese is a lot.', { theme: 'shopping', stage: 0 });

  N('tram', 'de', 'trams', 'tram', 'Tram twee gaat naar het Museumplein.', 'Tram two goes to Museumplein.', { theme: 'transport', stage: 0 });
  N('metro', 'de', "metro's", 'metro', 'De metro is snel.', 'The metro is fast.', { theme: 'transport', stage: 0 });
  N('station', 'het', 'stations', 'station', 'Het station is groot.', 'The station is big.', { theme: 'transport', stage: 0 });
  N('OV-chipkaart', 'de', 'OV-chipkaarten', 'public transport card', 'Ik heb een OV-chipkaart.', 'I have a public transport card.', { theme: 'transport', stage: 0, id: 'ov-chipkaart' });
  VB('inchecken', 'to check in', 'check in|checkt in|checken in', 'checkte in|checkten in', 'ingecheckt', 'hebben', 'Je moet inchecken bij de deur.', 'You have to check in at the door.', { theme: 'transport', stage: 0, note: 'Separable verb: ik check in.' });
  VB('uitchecken', 'to check out', 'check uit|checkt uit|checken uit', 'checkte uit|checkten uit', 'uitgecheckt', 'hebben', 'Vergeet niet uit te checken!', 'Don’t forget to check out!', { theme: 'transport', stage: 0, note: 'Separable verb: ik check uit.' });
  W('rechtdoor', 'straight ahead', 'adv', 'Ga rechtdoor.', 'Go straight ahead.', { theme: 'directions', stage: 0 });
  W('links', 'left', 'adv', 'De bakker is links.', 'The bakery is on the left.', { theme: 'directions', stage: 0 });
  W('rechts', 'right', 'adv', 'Ga hier rechts.', 'Turn right here.', { theme: 'directions', stage: 0 });
  W('waar', 'where', 'adv', 'Waar is het station?', 'Where is the station?', { theme: 'basics', stage: 0 });
  N('plein', 'het', 'pleinen', 'square', 'Het plein is druk.', 'The square is busy.', { theme: 'city', stage: 0 });
  N('brug', 'de', 'bruggen', 'bridge', 'Over de brug is de markt.', 'Across the bridge is the market.', { theme: 'city', stage: 0 });
  N('hoek', 'de', 'hoeken', 'corner', 'De winkel is op de hoek.', 'The shop is on the corner.', { theme: 'city', stage: 0 });
  W('ver', 'far', 'adj', 'Is het ver?', 'Is it far?', { theme: 'directions', stage: 0 });
  W('dichtbij', 'nearby', 'adv', 'Het is dichtbij.', 'It is nearby.', { theme: 'directions', stage: 0 });
  W('hier', 'here', 'adv', 'Ik woon hier.', 'I live here.', { theme: 'basics', stage: 0 });
  W('daar', 'there', 'adv', 'De halte is daar.', 'The stop is there.', { theme: 'basics', stage: 0 });
  VB('fietsen', 'to cycle', 'fiets|fietst|fietsen', 'fietste|fietsten', 'gefietst', 'hebben/zijn', 'Ik fiets naar mijn werk.', 'I cycle to work.', { theme: 'transport', stage: 0 });
  VB('lopen', 'to walk', 'loop|loopt|lopen', 'liep|liepen', 'gelopen', 'hebben/zijn', 'Wij lopen naar het park.', 'We walk to the park.', { theme: 'transport', stage: 0 });
  VB('gaan', 'to go', 'ga|gaat|gaan', 'ging|gingen', 'gegaan', 'zijn', 'Ik ga naar huis.', 'I am going home.', { theme: 'basics', stage: 0 });
  W('naar', 'to (direction)', 'prep', 'Ik ga naar Utrecht.', 'I am going to Utrecht.', { theme: 'basics', stage: 0 });
  PH('Hoe kom ik bij', 'How do I get to', 'Hoe kom ik bij het Centraal Station?', 'How do I get to Central Station?', { theme: 'directions', stage: 0, id: 'hoe-kom-ik-bij' });
  N('kaartje', 'het', 'kaartjes', 'ticket', 'Een kaartje naar Haarlem, graag.', 'A ticket to Haarlem, please.', { theme: 'transport', stage: 0 });
  W('druk', 'busy / crowded', 'adj', 'Het is druk in de tram.', 'It is crowded in the tram.', { theme: 'city', stage: 0 });

  /* ---------------- Grammar reference: Stage 0 ---------------- */
  G('g0-alphabet', 'The Dutch alphabet and letter names', 0, ['pronunciation', 'spelling'], [
    p('Dutch uses the same 26 letters as English, but most letter names sound different. You need them to spell your name at the gemeente, on the phone, or at a pick-up point.'),
    table(['letter', 'name', 'sounds like'], [['a', '*a', 'ah'], ['b', '*b', 'bay'], ['c', '*c', 'say'], ['d', '*d', 'day'], ['e', '*e', 'ay'], ['f', '*f', 'ef'], ['g', '*g', 'khay (throaty)'], ['h', '*h', 'hah'], ['i', '*i', 'ee'], ['j', '*j', 'yay'], ['k', '*k', 'kah'], ['l', '*l', 'el'], ['m', '*m', 'em'], ['n', '*n', 'en'], ['o', '*o', 'oh'], ['p', '*p', 'pay'], ['q', '*q', 'kuu'], ['r', '*r', 'air'], ['s', '*s', 'es'], ['t', '*t', 'tay'], ['u', '*u', 'uu (say "ee" with rounded lips)'], ['v', '*v', 'vay'], ['w', '*w', 'way'], ['x', '*x', 'iks'], ['y', '*y', 'ei / "Griekse ij"'], ['z', '*z', 'zet']], 'Tap a letter to hear its name.'),
    p('The pair **ij** is treated almost like one letter (the "lange ij"). In crosswords and on old typewriters it even has its own key. When you spell a word out loud you say "lange ij" for ij and "korte ei" for ei, because they sound identical.'),
    tip('Vowel names are just the long vowel sounds: a = "aa", e = "ee", i = "ie", o = "oo", u = "uu". Learn those five and you have the hardest part.'),
    warn('The letter **g** is the one English speakers dread: it is a scraping sound at the back of the throat, like clearing your throat gently or the "ch" in Scottish "loch". The letter **v** sounds close to an English v but softer, and in Amsterdam often almost like f.'),
    ex(['Hoe spel je dat?', 'How do you spell that?'], ['A - N - N - A.', 'A - N - N - A.'], ['Mijn naam is Sam: S - A - M.', 'My name is Sam: S - A - M.']),
  ]);

  G('g0-vowels', 'Long and short vowels', 0, ['pronunciation', 'spelling'], [
    p('Every Dutch vowel comes in a short and a long version, and the difference changes the meaning: `man` (man) vs `maan` (moon), `bot` (bone) vs `boot` (boat). English has vowel length too, but Dutch is much stricter about it.'),
    table(['short', 'example', 'long', 'example'], [['a', '*man', 'aa', '*maan'], ['e', '*bed', 'ee', '*zee'], ['i', '*vis', 'ie', '*vies'], ['o', '*bot', 'oo', '*boot'], ['u', '*bus', 'uu', '*buur']]),
    list('**a** in _man_: an open "ah", shorter and further back than English "man". **aa** in _maan_: the same quality, held longer, like "father".', '**e** in _bed_: like English "bed". **ee** in _zee_: like the "ay" in "say" but without the "y" glide at the end.', '**i** in _vis_: like "fish". **ie** in _vies_: like "ee" in "see".', '**o** in _bot_: a short, rounded "o" as in British "hot". **oo** in _boot_: like "boat" without the "w" glide.', '**u** in _bus_: a short, central sound close to the "u" in French _le_ or the vowel in English "the". **uu** in _buur_: say "ee" and round your lips tightly, like French _tu_.'),
    p('The spelling tells you the length: a doubled vowel (aa, ee, oo, uu) is always long; a single vowel is short when the syllable is closed (ends in a consonant) and long when the syllable is open (ends in the vowel). The next lessons on spelling make this precise.'),
    tip('Exaggerate at first. Long vowels really are about twice as long. Dutch listeners forgive a foreign accent easily, but "man" and "maan" are different words.'),
    ex(['De man kijkt naar de maan.', 'The man looks at the moon.'], ['De boot ligt bij de brug.', 'The boat is by the bridge.'], ['Het bot is voor de hond.', 'The bone is for the dog.']),
  ]);

  G('g0-diphthongs', 'Diphthongs: ui, ei/ij, ou/au, eu, oe', 0, ['pronunciation', 'spelling'], [
    p('A diphthong is a vowel that glides from one sound to another. Dutch has several, and three of them have two spellings for the same sound.'),
    table(['spelling', 'example', 'how to make it'], [['ui', '*huis', 'No English equivalent. Start from the "a" of "cat" with rounded lips and glide up towards "uu". Think of a very posh "house".'], ['ei / ij', '*trein, *ijs', 'Between the "ay" of "say" and the "i" of "sigh". Both spellings sound the same.'], ['ou / au', '*koud, *blauw', 'Like "ow" in "cow". Both spellings sound the same.'], ['eu', '*deur', 'Like French "deux": say "ay" with rounded lips. Not "oo"!'], ['oe', '*boek', 'Like "oo" in "boot" but shorter and tenser. Note: oe is the Dutch "oo" sound, and Dutch "oo" is something else.']]),
    warn('**oe** trips everyone up: `boek` sounds like "book", `goed` like "khoot". And **eu** is not "eu" as in Europe: `deur` sounds roughly like "durr" with rounded lips.'),
    p('Which spelling? ei or ij, ou or au: there is no rule, you learn it per word. Frequency helps: **ij** is far more common than **ei**, and **ou** is more common than **au**. In the dictionary, every word has audio, so listen and copy.'),
    tip('The first letter is a hint: `uit`, `huis`, `tuin` all have ui; `ijs`, `wijn`, `tijd` have ij; `koud`, `oud`, `vrouw` have ou.'),
    ex(['Het huis heeft een tuin.', 'The house has a garden.'], ['De trein is nieuw.', 'The train is new.'], ['Het is koud en de lucht is blauw.', 'It is cold and the sky is blue.'], ['De deur van het boek.', 'The door of the book (nonsense, but listen to eu vs oe).']),
  ]);

  G('g0-consonants', 'g/ch, r, sch, ng and the schwa', 0, ['pronunciation'], [
    h('The Dutch g and ch'),
    p('`g` and `ch` are the same sound in the Netherlands: a voiceless scrape at the back of the mouth. `goed`, `graag`, `gracht`, `acht`, `lachen`. In the Randstad (Amsterdam, Rotterdam, The Hague) it is hard and rough; in the south it is softer. Both are fine. What is not fine is an English "g" as in "go".'),
    tip('Whisper the "k" in "loch" while breathing out. Now add a vowel: "khoet" = goed. Practice with `gracht`: it has the sound twice, g-r-a-ch-t.'),
    h('The r'),
    p('Dutch has several r sounds and all are accepted. Many people roll the r with the tongue tip (like Spanish), others use a throaty r (like French). At the end of words, especially in the Randstad, you will hear an English-like r ("Gooise r"): `lekker`, `daar`. Pick whichever you can produce; consistency matters more than which one.'),
    h('sch'),
    p('`sch` at the start of a word is s followed by the throat sound: `school`, `schoon`, `schip`. At the end of a word, **-isch** is pronounced simply "-ies": `logisch` = "lo-khies", `praktisch` = "prak-ties".'),
    h('ng'),
    p('`ng` is one sound, exactly like English "sing". Never pronounce a separate hard g afterwards: `lang`, `ring`, `jongen`, `brengen`.'),
    h('The schwa (unstressed e)'),
    p('The letter e in an unstressed syllable is a weak "uh", called the schwa: `de`, `een` (the article), `lekker`, `tafel`, `meisje`. Verb endings and plurals in **-en** end with this schwa, and in normal speech the final n is usually dropped: `lopen` sounds like "lopuh", `boeken` like "boekuh".'),
    h('Stress'),
    p('Stress usually falls on the first syllable of the stem: `TAfel`, `LEKker`, `FIETsen`. The prefixes **be-, ge-, ver-, ont-, her-** are never stressed: `beTAlen`, `verGEten`, `herHAlen`. Loanwords keep their foreign stress: `staTION`, `poLItie`, `caFÉ`.'),
    ex(['Goedemorgen, ik ga graag naar de gracht.', 'Good morning, I like going to the canal.'], ['De school is schoon.', 'The school is clean.'], ['De jongen brengt de lange ring.', 'The boy brings the long ring.'], ['Wij betalen de rekening.', 'We pay the bill.']),
  ]);

  G('g0-syllables', 'Open and closed syllables: maan/manen, man/mannen', 0, ['spelling', 'plural'], [
    p('This single rule explains most Dutch spelling. A syllable is **closed** when it ends in a consonant (man, bot, bus) and **open** when it ends in a vowel (ma-nen, bo-ten, bu-ren).'),
    list('In an **open** syllable a single vowel is automatically **long**: `manen` = maa-nen, `boten` = boo-ten.', 'In a **closed** syllable a single vowel is **short**: `man`, `bot`.', 'So a long vowel in a closed syllable must be written double: `maan`, `boot`, `buur`.', 'And a short vowel before a vowel ending needs a **doubled consonant** to keep its syllable closed: `mannen` (man-nen), `botten` (bot-ten), `bussen` (bus-sen).'),
    table(['singular', 'plural', 'what happens'], [['*maan', '*manen', 'long aa: written once in the open syllable'], ['*man', '*mannen', 'short a: consonant doubled to close the syllable'], ['*boot', '*boten', 'long oo written once'], ['*bot', '*botten', 'short o, double t'], ['*buur', '*buren', 'long uu written once'], ['*bus', '*bussen', 'short u, double s'], ['*taak', '*taken', 'long aa written once'], ['*tak', '*takken', 'short a, double k']]),
    p('The same rule works for verbs (`ik maak`, `wij maken`; `ik zit`, `wij zitten`) and adjectives (`groot`, `grote`; `dik`, `dikke`). You will meet it again and again.'),
    warn('A small group of words changes vowel length in the plural: `dag` → `dagen` (dah → daa), `weg` → `wegen`, `glas` → `glazen`, `stad` → `steden`, `schip` → `schepen`. Learn these as exceptions.'),
    warn('**e** at the end of a word is a schwa, not a long ee: `de`, `tafel`. And **ie**, **oe**, **eu** and the diphthongs never change spelling: `boek` → `boeken`, `huis` → `huizen`.'),
    tip('Ask: "Is the vowel long or short?" then "Is the syllable open or closed?" Long + closed → double the vowel. Short + open → double the consonant.'),
  ]);

  G('g0-fv-sz', 'f/v and s/z alternation', 0, ['spelling', 'plural'], [
    p('Dutch words never end in **v** or **z**. When a word that "really" has a v or z sound is spoken on its own, the sound becomes f or s and it is written that way. As soon as an ending starting with a vowel is added, the v or z comes back.'),
    table(['singular', 'plural / longer form'], [['*brief', '*brieven'], ['*huis', '*huizen'], ['*kaas', '*kazen'], ['*neef', '*neven'], ['*half', '*halve'], ['*grijs', '*grijze'], ['*lief', '*lieve']]),
    p('When does this happen? Usually after a **long vowel, a diphthong, or l/r**: `brief`, `huis`, `half`. After a **short vowel** the f or s stays and is doubled: `bus` → `bussen`, `straf` → `straffen`. After **n, r, t** in the same syllable it usually also stays: `mens` → `mensen`, `fiets` → `fietsen`, `dans` → `dansen`.'),
    warn('There are exceptions you simply learn: `fotograaf` → `fotografen`, `kaars` → `kaarsen`, `wens` → `wensen`.'),
    tip('The plural form tells the truth about a word. When you learn a noun, always learn it with its plural: huis, huizen.'),
  ]);

  G('g0-final-dt', 'Final -d and -t: hond, honden and hij wordt', 0, ['spelling', 'pronunciation'], [
    p('At the end of a word a **d** is pronounced as **t**: `hond` sounds like "hont", `goed` like "khoet", `brood` like "broot". So you cannot hear whether to write d or t. The trick: make the word longer. If a d appears, write d.'),
    table(['you hear', 'longer form', 'so you write'], [['hont', '*honden', '*hond'], ['broot', '*broden', '*brood'], ['khoet', '*goede', '*goed'], ['kat', '*katten', '*kat'], ['hant', '*handen', '*hand']]),
    p('The same logic gives the famous **d/t rule for verbs**. The stem of `vinden` is _vind_, the stem of `worden` is _word_. For _hij/zij/jij_ you add **-t** to the stem, even when the stem already ends in d: `hij vindt`, `zij wordt`. It sounds identical to "vint", "wort", but it is spelled with dt. Native speakers get this wrong all the time; you will not.'),
    ex(['Ik vind Amsterdam mooi.', 'I think Amsterdam is beautiful.'], ['Hij vindt de kaas lekker.', 'He finds the cheese tasty.'], ['Het wordt koud.', 'It is getting cold.'], ['Ik word moe.', 'I am getting tired.']),
    tip('Stem ending in d? _ik_ = stem (ik vind), _jij/hij_ = stem + t (jij vindt). Stem ending in t? Add nothing (ik zit, hij zit).'),
  ]);

  G('g0-numbers', 'Numbers 0 to 1000', 0, ['numbers'], [
    table(['0-10', '11-20', 'tens', 'big'], [['*nul', '*elf', '*twintig', '*honderd'], ['*een', '*twaalf', '*dertig', '*tweehonderd'], ['*twee', '*dertien', '*veertig', '*duizend'], ['*drie', '*veertien', '*vijftig', '*tweeduizend'], ['*vier', '*vijftien', '*zestig', ''], ['*vijf', '*zestien', '*zeventig', ''], ['*zes', '*zeventien', '*tachtig', ''], ['*zeven', '*achttien', '*negentig', ''], ['*acht', '*negentien', '', ''], ['*negen', '*twintig', '', ''], ['*tien', '', '', '']]),
    p('From 21 upwards Dutch says the **unit first, then "en", then the ten**, as one word: 21 = `eenentwintig` (one-and-twenty), 34 = `vierendertig`, 99 = `negenennegentig`. English used to do this too ("four and twenty blackbirds").'),
    warn('Irregular tens: 40 is `veertig` (not "vierig"), 80 is `tachtig` (not "achtig"). And 13/14 are `dertien`, `veertien`. When a unit ending in a vowel meets "en", a trema marks the new syllable: `tweeëntwintig`, `drieëndertig`.'),
    p('Hundreds and thousands: `honderd` (100), `honderdvijf` (105), `tweehonderd` (200), `driehonderdvijfenveertig` (345), `duizend` (1000). Years and prices are often said in hundreds: 1500 = `vijftienhonderd`. Prices: `twee euro vijftig` (€2.50), `drie vijfenzeventig` (€3.75).'),
    p('`een` is both "a" and "one". When you mean the number and it could be confusing, write it `één` and stress it.'),
    tip('Say phone numbers digit by digit: 06 - 12 34 56 78 = nul zes, een twee, drie vier, vijf zes, zeven acht. Nobody expects you to say "achtenzeventig".'),
    ex(['Ik ben eenendertig jaar.', 'I am thirty-one years old.'], ['Dat is vier euro twintig.', 'That is four euros twenty.'], ['Tram vijf naar het station.', 'Tram five to the station.']),
  ]);

  G('g0-time', 'Telling the time', 0, ['time', 'numbers'], [
    p('`Hoe laat is het?` = What time is it? `Het is ... uur` = It is ... o’clock. `Om ... uur` = at ... o’clock. Dutch uses a 12-hour clock in speech and adds a part of the day when needed: `’s ochtends`, `’s middags`, `’s avonds`, `’s nachts`.'),
    table(['time', 'Dutch', 'literally'], [['3:00', '*Het is drie uur.', 'three hour'], ['3:05', '*Het is vijf over drie.', 'five past three'], ['3:15', '*Het is kwart over drie.', 'quarter past three'], ['3:20', '*Het is tien voor half vier.', 'ten before half four'], ['3:30', '*Het is half vier.', 'half (to) four'], ['3:40', '*Het is tien over half vier.', 'ten past half four'], ['3:45', '*Het is kwart voor vier.', 'quarter to four'], ['3:55', '*Het is vijf voor vier.', 'five to four']]),
    warn('**Half vier is 3:30, not 4:30.** Dutch counts halfway _to_ the next hour. This is the number one cause of missed appointments among expats. When in doubt, repeat the time in digits: "Dus om half vier, drie uur dertig?"'),
    p('Minutes between :20 and :40 are counted from the half hour: 3:20 = tien voor half vier, 3:25 = vijf voor half vier, 3:35 = vijf over half vier, 3:40 = tien over half vier. Outside that window you count from the hour.'),
    p('Trains, timetables and official contexts use the 24-hour clock with plain numbers: 15:30 = `vijftien uur dertig`. In daily conversation nobody says that; they say `half vier ’s middags`.'),
    tip('Picture a clock: from :20 to :40 you are "close to the half", so you measure from the half. Before or after that you measure from the whole hour.'),
    ex(['Hoe laat is het? — Het is kwart over acht.', 'What time is it? — It is a quarter past eight.'], ['De afspraak is om half elf.', 'The appointment is at 10:30.'], ['Ik werk van negen tot vijf.', 'I work from nine to five.']),
  ]);

  G('g0-dates', 'Days, months and dates', 0, ['time'], [
    table(['days', '', 'months', ''], [['*maandag', 'Monday', '*januari', '*juli'], ['*dinsdag', 'Tuesday', '*februari', '*augustus'], ['*woensdag', 'Wednesday', '*maart', '*september'], ['*donderdag', 'Thursday', '*april', '*oktober'], ['*vrijdag', 'Friday', '*mei', '*november'], ['*zaterdag', 'Saturday', '*juni', '*december'], ['*zondag', 'Sunday', '', '']]),
    p('Days and months are written in **lower case**, unlike English. "On Monday" = `op maandag`; "in May" = `in mei`. "On Mondays" (every week) = `op maandag` or `’s maandags`.'),
    p('Dates use plain numbers, not ordinals: 3 May = `drie mei`, 21 September = `eenentwintig september`. The written form is 3 mei or 03-05 (day first, then month!). Only "the first" is sometimes said as an ordinal: `de eerste mei` or simply `een mei`.'),
    p('Years are said in hundreds up to 1999 and as thousands after: 1985 = `negentienhonderdvijfentachtig` (or `negentien vijfentachtig`), 2024 = `tweeduizend vierentwintig`.'),
    p('Birthdays: Dutch says `Ik ben jarig` ("I am birthday-having") rather than "it is my birthday". `Wanneer ben je jarig?` = When is your birthday? `Ik ben op drie mei jarig.`'),
    warn('Dutch date order is day-month-year: 05-03-2026 is 5 March, not 3 May. Check twice when you fill in a form.'),
    ex(['Vandaag is het dinsdag.', 'Today is Tuesday.'], ['Mijn verjaardag is op twaalf oktober.', 'My birthday is on the twelfth of October.'], ['In augustus ga ik op vakantie.', 'In August I am going on holiday.'], ['Tot maandag!', 'See you Monday!']),
  ]);

  G('g0-greetings', 'Greetings, goodbyes and how are you', 0, ['phrases', 'politeness'], [
    table(['when', 'say', ''], [['any time', '*Hallo / *Hoi / *Dag', 'hallo is neutral, hoi is informal, dag works for hello and goodbye'], ['until ~12:00', '*Goedemorgen', ''], ['12:00 - 18:00', '*Goedemiddag', ''], ['after 18:00', '*Goedenavond', ''], ['going to bed', '*Welterusten', 'sleep well'], ['leaving (informal)', '*Doei / *Dag', ''], ['leaving (neutral)', '*Tot ziens', 'literally "until seeing"'], ['leaving (specific)', '*Tot morgen / *Tot straks / *Tot maandag', 'see you tomorrow / later today / on Monday']]),
    p('`Hoe gaat het?` (How is it going?) is the standard "how are you". Formal: `Hoe gaat het met u?` Informal: `Hoe gaat het met je?` or just `Alles goed?` (Everything good?). Typical answers: `Goed, dank je.` `Prima!` `Het gaat wel.` (so-so) `Niet zo goed.` Then return the question: `En met jou?` / `En met u?`'),
    p('In shops and cafés people greet you with `Goedemiddag` or just `Hoi` and say `Fijne dag nog!` or `Tot ziens!` when you leave. Answer with the same: it is considered rude to say nothing.'),
    tip('`Dag` is the Swiss army knife: it works at any time of day, arriving or leaving, formal or informal. Stretch the a: "daaag".'),
    ex(['Goedemorgen! Hoe gaat het? — Goed, en met jou?', 'Good morning! How are you? — Good, and you?'], ['Fijne dag nog! — Dank je, jij ook. Doei!', 'Have a nice day! — Thanks, you too. Bye!']),
  ]);

  G('g0-u-jij', 'u or jij? Formal and informal you', 0, ['politeness', 'pronouns'], [
    p('Dutch has two words for "you" in the singular: **jij** (unstressed **je**) and **u**. `u` is formal and polite; `jij/je` is informal and friendly.'),
    table(['use u with', 'use jij / je with'], [['strangers who are clearly older than you', 'friends, family, children'], ['officials, doctors, your landlord', 'colleagues (almost everywhere)'], ['customers if you work in a shop', 'people your age in a bar or shop'], ['anyone who addresses you as u', 'anyone who addresses you as je']]),
    p('The Netherlands is informal. Most people under fifty use `je` with each other from the first minute, shop assistants often say `je`, and your manager will too. Older people, the gemeente, the bank and the doctor’s assistant get `u`. If someone says `Zeg maar je` ("just say je"), switch immediately.'),
    p('Fixed phrases come in pairs: `alsjeblieft` / `alstublieft`, `dank je wel` / `dank u wel`, `Hoe gaat het met je?` / `Hoe gaat het met u?`, `Kun je...?` / `Kunt u...?`'),
    tip('When in doubt, start with `u`; being switched down to `je` is a friendly moment, being corrected up to `u` is awkward.'),
    ex(['Kunt u dat herhalen, alstublieft?', 'Could you repeat that, please? (formal)'], ['Kun je dat herhalen, alsjeblieft?', 'Can you repeat that, please? (informal)']),
  ]);

  G('g0-survival', 'Survival phrases for Amsterdam', 0, ['phrases'], [
    h('In the shop or café'),
    ex(['Zegt u het maar.', 'What can I get you? (literally: just say it)'], ['Ik wil graag een koffie.', 'I would like a coffee.'], ['Mag ik een biertje?', 'May I have a beer?'], ['Anders nog iets? — Nee, dat was het.', 'Anything else? — No, that is all.'], ['Wat kost dit?', 'How much is this?'], ['Pinnen of contant? — Pinnen, graag.', 'Card or cash? — Card, please.'], ['Wilt u het bonnetje?', 'Do you want the receipt?'], ['De rekening, alstublieft.', 'The bill, please.']),
    h('When you do not understand'),
    ex(['Sorry, ik spreek een beetje Nederlands.', 'Sorry, I speak a little Dutch.'], ['Kunt u dat herhalen?', 'Could you repeat that?'], ['Langzaam, alstublieft.', 'Slowly, please.'], ['Wat betekent dat?', 'What does that mean?'], ['Ik begrijp het niet.', 'I do not understand.']),
    h('Getting around'),
    ex(['Waar is het station?', 'Where is the station?'], ['Hoe kom ik bij het Centraal Station?', 'How do I get to Central Station?'], ['Rechtdoor, en dan links bij de gracht.', 'Straight ahead, then left at the canal.'], ['Is het ver? — Nee, het is dichtbij.', 'Is it far? — No, it is nearby.'], ['Vergeet niet uit te checken.', 'Do not forget to check out.'], ['Let op: fietsers!', 'Watch out: cyclists!']),
    tip('Dutch people switch to English the moment they hear an accent. Say `Ik leer Nederlands, mag ik het in het Nederlands proberen?` ("I am learning Dutch, may I try in Dutch?") and most will happily slow down.'),
  ]);
})();
