/* Stage 3 — B1: grammar reference. Vocabulary and lessons live in stage3-u*.js */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { G, h, p, tip, warn, table, ex, list } = A;

  G('g3-relative', 'Relative clauses: die, dat, wie, waar + preposition', 3, ['relative clauses', 'word order'], [
    p('A relative clause gives extra information about a noun. It starts with a **relative pronoun** and, like every subordinate clause, sends its **verb to the end**.'),
    table(['antecedent', 'pronoun', 'example'], [['de-word or plural', '*die', '*De man die daar staat, is mijn buurman.'], ['het-word (singular)', '*dat', '*Het huis dat we gekocht hebben, is oud.'], ['person + preposition', '*met wie, voor wie, aan wie', '*De collega met wie ik werk, komt uit Gent.'], ['thing + preposition', '*waarmee, waarvoor, waarop …', '*De fiets waarmee ik naar het werk ga, is kapot.'], ['place', '*waar', '*De stad waar ik geboren ben, ligt aan zee.'], ['whole sentence', '*wat', '*Hij kwam te laat, wat me niet verbaasde.']]),
    h('die or dat?'),
    p('Look at the noun, not at the meaning: `de vrouw die`, `de auto die`, `de kinderen die`, but `het kind dat`, `het idee dat`, `het meisje dat`. Indefinite words take `wat`: `alles wat`, `iets wat`, `niets wat`, `het enige wat`.'),
    h('Prepositions'),
    p('With **people**, the preposition comes first, then `wie`: `de vriend **aan wie** ik het vertelde`. With **things**, `waar` + preposition is glued into one word: `het probleem **waarover** we spraken`. In speech the two parts are often split: `het probleem **waar** we **over** spraken`.'),
    h('Position of the relative clause'),
    p('It comes straight after the noun, which often puts it in the middle of the main sentence. The main verb then follows the whole clause: `De trein **die ik meestal neem** vertrekt om acht uur.` In writing a comma is optional; in speech you pause slightly.'),
    ex(['Ken je de vrouw die naast ons woont?', 'Do you know the woman who lives next to us?'], ['Dit is het boek dat ik je wilde aanraden.', 'This is the book that I wanted to recommend to you.'], ['De mensen met wie ik samenwerk, zijn heel aardig.', 'The people I work with are very nice.'], ['Dat is precies waar ik bang voor was.', 'That is exactly what I was afraid of.']),
    warn('English can drop the relative pronoun ("the book I read"); Dutch never can: `het boek **dat** ik las`.'),
    tip('Test: replace the noun with hij/zij/ze → die; with het → dat.'),
  ]);

  G('g3-pronominal-adverbs', 'Pronominal adverbs: waarop, ermee, daarmee, hiermee', 3, ['er', 'prepositions'], [
    p('Dutch never says "op het", "met dat" or "over dit" for things. The pronoun turns into `er`, `daar`, `hier` or `waar` and glues onto the preposition. `met` becomes **mee**, `tot` becomes **toe**.'),
    table(['meaning', 'unstressed', 'stressed / pointing', 'question / relative'], [['on it / on that / on what', '*erop', '*daarop, *hierop', '*waarop'], ['with it', '*ermee', '*daarmee, *hiermee', '*waarmee'], ['about it', '*erover', '*daarover, *hierover', '*waarover'], ['for it', '*ervoor', '*daarvoor, *hiervoor', '*waarvoor'], ['of it', '*ervan', '*daarvan, *hiervan', '*waarvan'], ['to it', '*ernaartoe / *ertoe', '*daarnaartoe', '*waarnaartoe']]),
    h('Splitting'),
    p('In everyday Dutch the two parts are usually **split**, with the preposition moving toward the end of the clause: `Ik denk **er** vaak **aan**.` `**Waar** heb je het **over**?` `**Daar** ben ik niet blij **mee**.` Unsplit forms sound a little more formal or written.'),
    h('Verbs with fixed prepositions'),
    p('Many verbs come with a preposition you have to learn with them: `denken aan`, `wachten op`, `houden van`, `praten over`, `zorgen voor`, `lijken op`, `geloven in`, `zich verheugen op`, `zich ergeren aan`, `rekenen op`. The pronominal adverb takes that preposition: `Ik reken erop.` `Waar wacht je op?`'),
    ex(['Heb je de brief gelezen? Wat vind je ervan?', 'Did you read the letter? What do you think of it?'], ['Waar heb je zin in? — Daar heb ik nog niet over nagedacht.', 'What do you feel like? — I have not thought about that yet.'], ['Hiermee kunt u online inloggen.', 'With this you can log in online.'], ['Dat is iets waar ik me aan erger.', 'That is something that annoys me.']),
    warn('For **people** keep the normal pronoun: `Ik denk aan haar`, `Ik wacht op hem`, never "eraan" or "erop".'),
    tip('Question word for a thing with a preposition is always `waar` + preposition: `Waar kijk je naar?` (What are you looking at?), never "Wat kijk je naar".'),
  ]);

  G('g3-passive', 'The passive: worden and zijn', 3, ['passive', 'verbs'], [
    p('The passive turns the object into the subject when the doer is unknown or unimportant: `De brug wordt gerepareerd.` (The bridge is being repaired.) Dutch uses **worden** for an action in progress and **zijn** for the resulting state.'),
    table(['tense', 'form', 'example'], [['present', 'wordt / worden + participle', '*De straat wordt schoongemaakt.'], ['simple past', 'werd / werden + participle', '*De brief werd gisteren verstuurd.'], ['perfect (result)', 'is / zijn + participle', '*De brief is verstuurd. (has been sent)'], ['pluperfect', 'was / waren + participle', '*De brief was al verstuurd.'], ['with a modal', 'modal + participle + worden', '*Het formulier moet ingevuld worden.'], ['future', 'zal / zullen + participle + worden', '*De uitslag zal morgen bekendgemaakt worden.']]),
    h('is gerepareerd: perfect passive, not "geworden"'),
    p('English "has been repaired" is simply `is gerepareerd`. The participle `geworden` is dropped: `De brug is gerepareerd` = the repair happened and it is done. `De brug wordt gerepareerd` = it is happening now.'),
    h('door = by'),
    p('If you do name the doer, use `door`: `Het rapport werd door de gemeente gepubliceerd.`'),
    h('er + passive: impersonal'),
    p('When there is no object at all, Dutch uses an impersonal passive with `er`: `Er wordt gebeld.` (Someone is ringing.) `Er werd veel gelachen.` (There was a lot of laughter.) `Er wordt hier niet gerookt.` (No smoking here.)'),
    ex(['De uitslag wordt volgende week bekendgemaakt.', 'The result will be announced next week.'], ['Mijn fiets is gestolen.', 'My bike has been stolen.'], ['Het huis werd in 1920 gebouwd en is vorig jaar gerenoveerd.', 'The house was built in 1920 and was renovated last year.'], ['Er wordt gezegd dat de huren weer stijgen.', 'It is said that rents are rising again.']),
    tip('Recipe: take the object, put it first, add the right form of worden, put the participle at the end. `Iemand repareert de brug.` → `De brug wordt gerepareerd.`'),
  ]);

  G('g3-conditional', 'zou: would, could, should and the hypothetical als', 3, ['verbs', 'conditional'], [
    p('`zou` / `zouden` (the past of zullen) is the Dutch "would". It makes requests polite, statements softer, and conditions hypothetical.'),
    table(['use', 'example', 'English'], [['polite request', '*Zou u het raam dicht kunnen doen?', 'Could you close the window?'], ['wish', '*Ik zou graag een dagje vrij willen.', 'I would like a day off.'], ['advice', '*Je zou wat vaker moeten sporten.', 'You should exercise more often.'], ['hypothetical', '*Als ik veel geld had, zou ik een boot kopen.', 'If I had a lot of money, I would buy a boat.'], ['reported / uncertain', '*Hij zou morgen komen.', 'He was supposed to come tomorrow.']]),
    h('Hypothetical als-sentences'),
    p('Real condition: present tense in both halves. `Als het regent, blijf ik thuis.` Hypothetical (unlikely or impossible): **simple past** in the als-clause, **zou + infinitive** in the main clause: `Als het zou regenen, zou ik thuisblijven.` / `Als het regende, zou ik thuisblijven.` Both halves may use zou in speech.'),
    p('For the past ("if I had known"), use the pluperfect: `Als ik dat had geweten, was ik niet gekomen.` / `… zou ik niet gekomen zijn.`'),
    h('zou + modal'),
    p('`zou kunnen` (could), `zou moeten` (should, ought to), `zou willen` (would like), `zou mogen` (might be allowed): `Dat zou kunnen.` (That could be.) `Je zou eens naar de dokter moeten gaan.`'),
    ex(['Wat zou je doen als je de loterij won?', 'What would you do if you won the lottery?'], ['Ik zou het niet doen als ik jou was.', 'I would not do it if I were you.'], ['Zou je me kunnen helpen met verhuizen?', 'Could you help me move house?'], ['Als ik meer tijd had, zou ik Fries leren.', 'If I had more time, I would learn Frisian.']),
    tip('`Als ik jou was …` is the fixed way to give advice: if I were you.'),
  ]);

  G('g3-indirect-speech', 'Indirect speech: zeggen dat, vragen of', 3, ['word order', 'reporting'], [
    p('Reporting what someone said or asked turns the statement into a subordinate clause: **verb to the end**. Statements use `dat`, yes/no questions use `of`, and question-word questions keep their question word.'),
    table(['direct', 'indirect'], [['*"Ik ben moe."', '*Ze zegt dat ze moe is.'], ['*"Kom je morgen?"', '*Hij vraagt of ik morgen kom.'], ['*"Waar woon je?"', '*Ze vroeg waar ik woonde.'], ['*"Bel me!"', '*Hij zei dat ik hem moest bellen.']]),
    h('Shifting pronouns and tenses'),
    p('Pronouns change to fit the new speaker: "ik" → `hij/zij`, "je" → `ik`. If the reporting verb is in the past, the reported verb usually shifts to the past too: `Ze zei dat ze moe **was**.` `Hij vroeg of ik **kon** komen.` Instructions become `moeten`: `Ze zei dat we stil moesten zijn.`'),
    h('Useful reporting verbs'),
    p('`zeggen`, `vertellen`, `vragen`, `antwoorden`, `beweren` (claim), `denken`, `geloven`, `vinden`, `weten`, `uitleggen` (explain), `beloven`, `waarschuwen`.'),
    ex(['De huisarts zei dat ik meer moest bewegen.', 'The GP said that I had to exercise more.'], ['Mijn buurvrouw vroeg of we het feest zaterdag houden.', 'My neighbour asked whether we are having the party on Saturday.'], ['Ik wist niet dat je Spaans sprak.', 'I did not know that you spoke Spanish.'], ['Ze wilde weten hoe laat de winkel dichtging.', 'She wanted to know what time the shop closed.']),
    warn('`of` here means **whether**, not "or". `Hij vroeg of ik kwam` = he asked whether I was coming.'),
  ]);

  G('g3-infinitive', 'Infinitive constructions: te or no te, laten, zien, horen, blijven, aan het', 3, ['verbs', 'infinitive'], [
    h('No te'),
    p('After the modals (`kunnen, mogen, moeten, willen, zullen`) and after `gaan, komen, blijven, laten, zien, horen, voelen, leren, helpen`: `Ik blijf wachten.` `Laat me even kijken.` `Ik zag hem vallen.` `Ze hoorde de buren ruziemaken.`'),
    h('With te'),
    p('After almost every other verb and after adjectives: `proberen te`, `beginnen te`, `vergeten te`, `hoeven te`, `durven te`, `weigeren te`, `beloven te`, `staan / zitten / liggen te`; `Het is moeilijk te zeggen.` `Hij zit te lezen.` `Ze staan te wachten.`'),
    table(['no te', 'with te'], [['*Ik wil slapen.', '*Ik probeer te slapen.'], ['*We gaan zwemmen.', '*We beginnen te zwemmen.'], ['*Laat hem praten.', '*Hij hoeft niet te praten.'], ['*Ik zie hem lopen.', '*Hij loopt te zingen.']]),
    h('laten: let, have something done'),
    p('`laten` + infinitive = let, or have something done by someone else: `Ik laat mijn fiets repareren.` (I am having my bike repaired.) `Laat me met rust.` (Leave me alone.) `Ze liet de kinderen buiten spelen.` In the perfect: `Ik heb mijn haar laten knippen.` (double infinitive).'),
    h('aan het + infinitive: in the middle of'),
    p('`Ik ben aan het koken.` (I am cooking right now.) Use it only when the ongoing action matters; the plain present is usually enough.'),
    h('Perfect with two infinitives'),
    p('`Ik heb hem zien vallen.` `We zijn blijven wachten.` `Ze heeft de auto laten wassen.` The participle turns into an infinitive, as with modals.'),
    ex(['Vergeet niet de deur op slot te doen.', 'Do not forget to lock the door.'], ['Je hoeft niet te komen als je moe bent.', 'You do not have to come if you are tired.'], ['Ik heb de loodgieter laten komen.', 'I had the plumber come.'], ['Zit je nou alweer op je telefoon te kijken?', 'Are you looking at your phone again?']),
    tip('`hoeven` only exists with niet / geen and takes te: `Je hoeft niet te betalen.` For the positive use moeten.'),
  ]);

  G('g3-word-order', 'Word order in depth: the middle field, time-manner-place, and fronting', 3, ['word order'], [
    h('The sentence as brackets'),
    p('Position 1: one element (subject, time, place, object, anything). Position 2: the finite verb. At the end: all other verbs. Between them lies the **middle field**, which has its own order.'),
    table(['1', '2 (verb)', 'middle field', 'end (verbs)'], [['*Ik', '*heb', '*hem gisteren in de stad', '*gezien.'], ['*Gisteren', '*heb', '*ik hem in de stad', '*gezien.'], ['*Hem', '*heb', '*ik gisteren niet', '*gezien.']]),
    h('Order in the middle field'),
    list('1. subject (if it is not in position 1)', '2. unstressed pronouns: `me, je, het, er`', '3. **time** (wanneer): `gisteren, om acht uur, vaak`', '4. **manner** (hoe): `met de fiets, snel, graag`', '5. **place** (waar): `in de stad, thuis`', '6. definite objects can move before time; indefinite objects stay late: `Ik heb gisteren **een boek** gekocht.` vs `Ik heb **het boek** gisteren gekocht.`'),
    p('`niet` comes after time and definite objects, before manner, place and the final verbs: `Ik heb het boek gisteren **niet** met plezier gelezen.`'),
    h('Fronting for emphasis or contrast'),
    p('Putting something other than the subject first makes it the topic: `**Dat boek** heb ik al gelezen.` `**In Amsterdam** fiets ik, in Londen niet.` `**Morgen** kan ik niet, overmorgen wel.` Only one element can go first; the subject then follows the verb.'),
    h('Subordinate clauses'),
    p('Same middle field, but the finite verb joins the others at the end: `… omdat ik hem gisteren in de stad **gezien heb** / **heb gezien**.` Both orders are correct; the Netherlands prefers `heb gezien`, Flanders often `gezien heb`.'),
    ex(['Ik ga morgen met de trein naar Groningen.', 'I am going to Groningen by train tomorrow.'], ['Die film heb ik vorig jaar in de bioscoop gezien.', 'I saw that film at the cinema last year.'], ['Ze heeft het cadeau gisteren niet meegenomen.', 'She did not bring the present yesterday.'], ['Omdat ik het rapport vandaag niet kon afmaken, werk ik morgen door.', 'Because I could not finish the report today, I am working on tomorrow.']),
    tip('TMP: Time, Manner, Place. English tends to say place before time ("to Groningen tomorrow"); Dutch does the reverse.'),
  ]);

  G('g3-negation', 'Complex negation: niet meer, nog niet, niemand, nooit, nergens', 3, ['negation'], [
    table(['Dutch', 'English', 'positive counterpart'], [['*niet meer / geen … meer', 'no longer, not any more', 'nog'], ['*nog niet / nog geen', 'not yet', 'al'], ['*niemand', 'nobody', 'iemand'], ['*niets / niks', 'nothing', 'iets'], ['*nooit', 'never', 'ooit, wel eens'], ['*nergens', 'nowhere', 'ergens'], ['*geen enkele', 'not a single', 'elke'], ['*helemaal niet', 'not at all', 'heel']]),
    p('Dutch uses **one** negative word per idea. "I never saw anybody" is `Ik heb nooit iemand gezien`, not "nooit niemand".'),
    h('Position'),
    p('`niet` follows the rules of the middle field: after time and definite objects, before manner, place and final verbs. `niet meer` and `nog niet` behave as one unit: `Ik woon er **niet meer**.` `Ik heb **nog niet** gegeten.` `Ik heb **geen** tijd **meer**.`'),
    h('Answering questions with negatives'),
    p('`Woon je nog in Utrecht? — Nee, niet meer.` `Heb je al gegeten? — Nee, nog niet.` `Ben je ooit in Texel geweest? — Nee, nooit.` `Was er iemand? — Nee, niemand.`'),
    ex(['Ik rook niet meer en ik drink bijna nooit.', 'I no longer smoke and I almost never drink.'], ['Ze heeft nog geen antwoord gekregen.', 'She has not had an answer yet.'], ['Niemand wist waar de sleutels waren; ik heb ze nergens gevonden.', 'Nobody knew where the keys were; I found them nowhere.'], ['Dat is helemaal niet waar.', 'That is not true at all.']),
    warn('`niet meer` (no longer) is not `niet meer` (not more). Context decides: `Ik wil niet meer` = I do not want any more, or I quit.'),
  ]);

  G('g3-word-formation', 'Word formation: compounds, -heid, -ing, -baar, -loos, on-', 3, ['vocabulary', 'word formation'], [
    h('Compounds: glue, do not space'),
    p('Dutch writes compound nouns as one word, however long: `fiets + pad = fietspad`, `ziekte + kosten + verzekering = ziektekostenverzekering`. The **last** part decides gender and plural: `het fiets**pad**`, `de zorg**verzekering**`. A linking `-s-` or `-en-` sometimes appears: `stad**s**deel`, `boek**en**kast`.'),
    warn('Writing a compound as two words ("fiets pad") is the most visible spelling mistake in Dutch. Dutch people call it the Engelse ziekte.'),
    h('Making nouns'),
    table(['suffix', 'from', 'example', 'gender'], [['-heid', 'adjective', 'vrij → *vrijheid, mogelijk → *mogelijkheid', 'de'], ['-ing', 'verb', 'verzekeren → *verzekering, ervaren → *ervaring', 'de'], ['-er / -ster', 'verb (person)', 'werken → *werker, schrijven → *schrijfster', 'de'], ['-tje', 'noun (small)', 'huis → *huisje', 'het'], ['-schap', 'noun', 'vriend → *vriendschap', 'de'], ['-te', 'adjective', 'lang → *lengte, hoog → *hoogte', 'de']]),
    h('Making adjectives'),
    table(['affix', 'meaning', 'example'], [['-baar', '-able', 'betalen → *betaalbaar, eten → *eetbaar'], ['-loos', '-less', 'werk → *werkloos, draad → *draadloos'], ['-ig', '-y', 'regen → *regenachtig, zon → *zonnig'], ['-lijk', '-ly, -al', 'vriend → *vriendelijk, dag → *dagelijks'], ['on-', 'un-', 'mogelijk → *onmogelijk, gezond → *ongezond'], ['-vol', '-ful', 'waarde → *waardevol']]),
    ex(['De mogelijkheden zijn eindeloos.', 'The possibilities are endless.'], ['Werkloosheid is een groot probleem in de regio.', 'Unemployment is a big problem in the region.'], ['Deze verpakking is herbruikbaar.', 'This packaging is reusable.']),
    tip('Meet a long word? Read it from the right: `ziektekostenverzekering` is a verzekering (insurance), for kosten (costs), of ziekte (illness).'),
  ]);

  G('g3-particles', 'Particles: wel, toch, even, maar, eens, nou, hoor', 3, ['particles', 'spoken Dutch'], [
    p('These small words carry no dictionary meaning but change the **tone** of a sentence. They are what makes Dutch sound like Dutch. Learn them by pattern, not by translation.'),
    table(['particle', 'effect', 'example', 'feel'], [['*wel', 'positive contrast, reassurance', '*Ik kom wel. / Dat is wel lekker.', 'I will, do not worry / quite tasty'], ['*toch', 'expects agreement, or "after all"', '*Je komt toch? / Hij kwam toch.', 'you are coming, right? / he came after all'], ['*even', 'briefly, casually', '*Wacht even. / Kun je even helpen?', 'just a sec'], ['*maar', 'permission, softening', '*Ga maar zitten. / Zeg het maar.', 'go ahead'], ['*eens', 'invitation, "some time"', '*Kom eens langs. / Kijk eens!', 'do come by / look at this'], ['*nou', 'well, come on, emphasis', '*Nou, dat weet ik niet. / Kom nou!', 'well … / come on!'], ['*hoor', 'friendly reassurance at the end', '*Geen probleem, hoor. / Ik kom, hoor.', 'really, honestly'], ['*gewoon', 'simply, just', '*Doe gewoon normaal.', 'just be normal'], ['*zeker', 'probably / certainly (rising)', '*Je bent zeker moe?', 'I bet you are tired']]),
    h('Combinations'),
    p('`Kom maar eens langs.` (do come by some time) `Wacht nou even.` (hold on a second) `Dat is toch wel duur.` (that is rather expensive, isn’t it) `Doe maar gewoon.` (just act normal) The order is fixed: nou > toch > wel > maar > even > eens.'),
    h('wel vs niet'),
    p('`wel` is the positive twin of `niet`. `Ik kom niet. — Ik kom wel!` (I am not coming. — I am!) `Ik heb geen honger, maar wel dorst.` (not hungry, but thirsty).'),
    ex(['Het is wel een leuk idee, maar het is te duur.', 'It is a nice idea, but it is too expensive.'], ['Je hebt toch geen haast? Ga maar even zitten.', 'You are not in a hurry, are you? Sit down for a moment.'], ['Nou, ik zou het eens proberen.', 'Well, I would give it a try.'], ['Maak je geen zorgen, hoor, het komt goed.', 'Do not worry, it will be fine.']),
    tip('If a Dutch sentence sounds blunt to you, it is probably missing `even`, `maar` or `hoor`. Add one and it softens instantly.'),
  ]);

  G('g3-register', 'Formal and informal register', 3, ['register', 'writing'], [
    table(['', 'informal (je)', 'formal (u)'], [['address', '*je / jij / jouw', '*u / uw'], ['greeting', '*Hoi, Hé, Dag', '*Goedemorgen, Goedemiddag'], ['letter opening', '*Beste Anna, / Hoi Tom,', '*Geachte heer Bakker, / Geachte mevrouw De Vries,'], ['request', '*Kun je …? / Wil je …?', '*Zou u … kunnen …? / Zoudt u …? (very formal)'], ['thanks', '*Bedankt! / Dank je wel', '*Dank u wel / Hartelijk dank'], ['closing', '*Groetjes, / Groeten, / Liefs,', '*Met vriendelijke groet, / Hoogachtend,'], ['sorry', '*Sorry!', '*Excuses / Mijn excuses / Het spijt mij']]),
    h('Formal written Dutch'),
    p('Longer sentences, passive voice, nominalisations (`de aanvraag` instead of `aanvragen`), formal verbs: `ontvangen` (get), `verzoeken` (ask), `zich wenden tot` (contact), `in verband met` (because of), `betreffende` (regarding), `hierbij` (herewith), `tevens` (also), `echter` (however), `derhalve` (therefore).'),
    h('Who gets u?'),
    p('Strangers older than you, officials, doctors on first contact, shop staff you do not know, anyone in a letter from an organisation. Colleagues, neighbours, people your age and younger, and almost everyone once they say `Zeg maar je` (you can say je) get `je`. When in doubt: start with u, switch when invited.'),
    ex(['Zou u mij kunnen laten weten wanneer het pakket wordt bezorgd?', 'Could you let me know when the parcel will be delivered?'], ['Kun je me even laten weten wanneer het pakket komt?', 'Can you let me know when the parcel is coming?'], ['In verband met de verbouwing is het kantoor gesloten.', 'Because of the renovation the office is closed.'], ['Wij verzoeken u vriendelijk het formulier vóór 1 juli te retourneren.', 'We kindly request you to return the form before 1 July.']),
    tip('Formal ≠ cold. Dutch formal letters are short and direct; the politeness is in `u`, `zou`, `graag` and `vriendelijk`, not in length.'),
  ]);

  G('g3-idioms', 'Common idioms and fixed expressions', 3, ['idioms', 'vocabulary'], [
    p('Idioms are best learned in small sets with a situation attached. These are frequent, neutral and safe to use.'),
    table(['idiom', 'literally', 'meaning'], [['*Dat is niet mijn pakkie-an.', 'not my package', 'not my responsibility'], ['*Het regent pijpenstelen.', 'it rains pipe stems', 'it is pouring'], ['*Iets door de vingers zien.', 'see something through the fingers', 'to let something slide'], ['*De kat uit de boom kijken.', 'watch the cat out of the tree', 'to wait and see'], ['*Met de deur in huis vallen.', 'fall into the house with the door', 'to get straight to the point'], ['*Een appeltje voor de dorst.', 'a little apple for the thirst', 'savings for a rainy day'], ['*Dat slaat nergens op.', 'that hits on nothing', 'that makes no sense'], ['*Iemand op de hoogte houden.', 'keep someone at the height', 'to keep someone informed'], ['*Ergens geen zin in hebben.', '', 'not feel like something'], ['*Het valt wel mee.', 'it falls along', 'it is not so bad'], ['*Dat zit wel snor.', 'that sits like a moustache', 'that will be fine'], ['*Op de fiets stappen.', '', 'to get on the bike (and go)'], ['*Iets op de lange baan schuiven.', 'push onto the long track', 'to postpone indefinitely'], ['*Een uiltje knappen.', 'snap a little owl', 'to take a nap'], ['*Nu komt de aap uit de mouw.', 'now the monkey comes out of the sleeve', 'now the truth comes out'], ['*Er is geen kip.', 'there is no chicken', 'there is nobody'], ['*Doe maar gewoon, dan doe je al gek genoeg.', 'just act normal, that is crazy enough', 'the Dutch motto against showing off']]),
    ex(['Hoe was het examen? — Het viel wel mee, eigenlijk.', 'How was the exam? — It was not so bad, actually.'], ['Ik zal je op de hoogte houden.', 'I will keep you informed.'], ['Laten we niet te lang de kat uit de boom kijken.', 'Let us not wait and see for too long.'], ['Neem een paraplu mee, het regent pijpenstelen.', 'Take an umbrella, it is pouring.']),
    tip('`Het valt wel mee` and `Ik hou je op de hoogte` are worth learning first: you will hear and need them every week.'),
  ]);
})();
