/* Stage 2 (A2) — Unit 7: Winkelen en klagen · Unit 8: Bellen en mailen · Stage 2 exam */
(function () {
  'use strict';
  const NL = window.NL, A = NL.contentApi;
  const { N, VB, W, PH, h, p, tip, warn, table, ex, list, mc, fill, tr, build, conj, art, plural, dict, listen, speak, free, match, read, fix, write, auto, lesson, unit } = A;
  const units = (NL.content._s2units = NL.content._s2units || []);

  /* ---------------- Vocabulary: Unit 7 ---------------- */
  N('bon', 'de', 'bonnen', 'receipt', 'Heeft u de bon nog?', 'Do you still have the receipt?', { theme: 'shopping', stage: 2, altNl: ['kassabon'] });
  N('kleur', 'de', 'kleuren', 'colour', 'Heeft u deze in een andere kleur?', 'Do you have this in another colour?', { theme: 'shopping', stage: 2 });
  N('garantie', 'de', null, 'guarantee / warranty', 'Er zit twee jaar garantie op.', 'It has a two-year warranty.', { theme: 'shopping', stage: 2 });
  N('kwaliteit', 'de', null, 'quality', 'De kwaliteit is slecht.', 'The quality is poor.', { theme: 'shopping', stage: 2 });
  N('materiaal', 'het', 'materialen', 'material', 'Van welk materiaal is het?', 'What material is it made of?', { theme: 'shopping', stage: 2 });
  N('katoen', 'het', null, 'cotton', 'Dit shirt is van katoen.', 'This shirt is cotton.', { theme: 'shopping', stage: 2 });
  N('wol', 'de', null, 'wool', 'De trui is van wol.', 'The jumper is wool.', { theme: 'shopping', stage: 2 });
  N('leer', 'het', null, 'leather', 'Zijn deze schoenen van leer?', 'Are these shoes leather?', { theme: 'shopping', stage: 2 });
  N('webshop', 'de', 'webshops', 'online shop', 'Ik heb het bij een webshop besteld.', 'I ordered it from an online shop.', { theme: 'shopping', stage: 2 });
  N('levering', 'de', 'leveringen', 'delivery', 'De levering duurt drie dagen.', 'Delivery takes three days.', { theme: 'shopping', stage: 2 });
  N('pakket', 'het', 'pakketten', 'parcel / package', 'Het pakket is beschadigd.', 'The parcel is damaged.', { theme: 'shopping', stage: 2 });
  N('retour', 'het', 'retouren', 'return (of goods)', 'Retouren zijn gratis.', 'Returns are free.', { theme: 'shopping', stage: 2, id: 'retour-goederen' });
  VB('ruilen', 'to exchange', 'ruil|ruilt|ruilen', 'ruilde|ruilden', 'geruild', 'hebben', 'Kan ik dit ruilen voor een grotere maat?', 'Can I exchange this for a bigger size?', { theme: 'shopping', stage: 2 });
  VB('retourneren', 'to return (goods)', 'retourneer|retourneert|retourneren', 'retourneerde|retourneerden', 'geretourneerd', 'hebben', 'U kunt het binnen 14 dagen retourneren.', 'You can return it within 14 days.', { theme: 'shopping', stage: 2, altNl: ['terugsturen'] });
  VB('bezorgen', 'to deliver', 'bezorg|bezorgt|bezorgen', 'bezorgde|bezorgden', 'bezorgd', 'hebben', 'Wanneer wordt het bezorgd?', 'When will it be delivered?', { theme: 'shopping', stage: 2 });
  VB('terugkrijgen', 'to get back', 'krijg terug|krijgt terug|krijgen terug', 'kreeg terug|kregen terug', 'teruggekregen', 'hebben', 'Krijg ik mijn geld terug?', 'Do I get my money back?', { theme: 'shopping', stage: 2 });
  W('beschadigd', 'damaged', 'adj', 'De doos was beschadigd.', 'The box was damaged.', { theme: 'shopping', stage: 2 });
  W('verkeerd', 'wrong', 'adj', 'Ik heb de verkeerde maat gekregen.', 'I got the wrong size.', { theme: 'shopping', stage: 2 });
  PH('Het past niet.', 'It does not fit.', 'De broek past niet, hij is te klein.', 'The trousers do not fit, they are too small.', { theme: 'shopping', stage: 2, id: 'ph-past-niet' });
  PH('Kan ik dit ruilen?', 'Can I exchange this?', 'Kan ik dit ruilen? Ik heb de bon.', 'Can I exchange this? I have the receipt.', { theme: 'shopping', stage: 2, id: 'ph-kan-ik-ruilen' });

  VB('mankeren', 'to be wrong with (mankeren aan)', 'mankeer|mankeert|mankeren', 'mankeerde|mankeerden', 'gemankeerd', 'hebben', 'Wat mankeert eraan?', 'What is wrong with it?', { theme: 'complaints', stage: 2 });
  N('probleem', 'het', 'problemen', 'problem', 'Er is een probleem met mijn bestelling.', 'There is a problem with my order.', { theme: 'complaints', stage: 2 });
  N('bestelling', 'de', 'bestellingen', 'order', 'Mijn bestelling is nog niet aangekomen.', 'My order has not arrived yet.', { theme: 'shopping', stage: 2 });
  N('oplossing', 'de', 'oplossingen', 'solution', 'Heeft u een oplossing?', 'Do you have a solution?', { theme: 'complaints', stage: 2 });
  N('fout', 'de', 'fouten', 'mistake', 'Er is een fout gemaakt.', 'A mistake was made.', { theme: 'complaints', stage: 2 });
  N('klantenservice', 'de', null, 'customer service', 'Ik heb de klantenservice gebeld.', 'I called customer service.', { theme: 'complaints', stage: 2 });
  N('medewerker', 'de', 'medewerkers', 'employee / staff member', 'De medewerker was heel behulpzaam.', 'The staff member was very helpful.', { theme: 'complaints', stage: 2 });
  VB('oplossen', 'to solve', 'los op|lost op|lossen op', 'loste op|losten op', 'opgelost', 'hebben', 'Kunt u dit oplossen?', 'Can you solve this?', { theme: 'complaints', stage: 2 });
  VB('terugsturen', 'to send back', 'stuur terug|stuurt terug|sturen terug', 'stuurde terug|stuurden terug', 'teruggestuurd', 'hebben', 'Ik heb het pakket teruggestuurd.', 'I sent the parcel back.', { theme: 'shopping', stage: 2 });
  VB('vervangen', 'to replace', 'vervang|vervangt|vervangen', 'verving|vervingen', 'vervangen', 'hebben', 'Kunt u het product vervangen?', 'Can you replace the product?', { theme: 'complaints', stage: 2 });
  VB('repareren', 'to repair', 'repareer|repareert|repareren', 'repareerde|repareerden', 'gerepareerd', 'hebben', 'Ze hebben mijn telefoon gerepareerd.', 'They repaired my phone.', { theme: 'complaints', stage: 2 });
  W('behulpzaam', 'helpful', 'adj', 'De verkoper was niet erg behulpzaam.', 'The salesperson was not very helpful.', { theme: 'complaints', stage: 2 });
  W('onbeleefd', 'rude', 'adj', 'De medewerker was onbeleefd.', 'The employee was rude.', { theme: 'complaints', stage: 2 });
  W('teleurgesteld', 'disappointed', 'adj', 'Ik ben teleurgesteld in de service.', 'I am disappointed in the service.', { theme: 'feelings', stage: 2 });
  W('vervelend', 'annoying / unpleasant', 'adj', 'Wat vervelend voor u.', 'How annoying for you.', { theme: 'feelings', stage: 2 });
  PH('Het spijt me.', 'I am sorry.', 'Het spijt me, dat had niet mogen gebeuren.', 'I am sorry, that should not have happened.', { theme: 'complaints', stage: 2, id: 'ph-het-spijt-me' });
  PH('Ik wil graag mijn geld terug.', 'I would like my money back.', 'Het werkt niet, dus ik wil graag mijn geld terug.', 'It does not work, so I would like my money back.', { theme: 'complaints', stage: 2, id: 'ph-geld-terug' });
  PH('Kunt u daar iets aan doen?', 'Can you do something about that?', 'Het pakket is te laat. Kunt u daar iets aan doen?', 'The parcel is late. Can you do something about that?', { theme: 'complaints', stage: 2, id: 'ph-iets-aan-doen' });
  PH('Zo hoort het niet.', 'That is not how it should be.', 'Ik heb twee keer betaald, zo hoort het niet.', 'I paid twice, that is not right.', { theme: 'complaints', stage: 2, id: 'ph-zo-hoort-het-niet' });

  /* ---------------- Unit 7 lessons ---------------- */
  const u7 = [];
  u7.push(lesson('s2u7l1', 'Exchanging and returning: er + preposition in the shop', 'You can take something back to a shop, explain what is wrong, ask to exchange or return it, and use er + preposition (ermee, ervoor, eraan) naturally.', [
    h('er + preposition: about it, with it, for it'),
    p('Dutch does not say "met het" or "voor het" for things. It glues `er` to the preposition: `ermee` (with it), `ervoor` (for it), `eraan` (on / about it), `erop` (on it), `erin` (in it), `ervan` (of it). Other words often come in between: `Ik ben er niet blij mee.`'),
    table(['together', 'split', 'English'], [['*Ik ben ermee tevreden.', '*Ik ben er tevreden mee.', 'I am satisfied with it.'], ['*Wat mankeert eraan?', '*Wat mankeert er aan?', 'What is wrong with it?'], ['*Ik heb ervoor betaald.', '*Ik heb er veel voor betaald.', 'I paid (a lot) for it.'], ['*Zit er garantie op?', '', 'Is there a warranty on it?']]),
    p('Stressed forms use `daar`: `Daar ben ik niet blij mee.` Questions use `waar`: `Waar bent u niet tevreden over?`'),
    h('At the counter'),
    table(['Dutch', 'English'], [['*Ik wil dit graag ruilen.', 'I would like to exchange this.'], ['*Het past niet, het is te klein.', 'It does not fit, it is too small.'], ['*Heeft u dit in een andere maat / kleur?', 'Do you have this in another size / colour?'], ['*Ik heb de bon nog.', 'I still have the receipt.'], ['*Kan ik mijn geld terugkrijgen?', 'Can I get my money back?'], ['*U kunt het binnen 14 dagen retourneren.', 'You can return it within 14 days.'], ['*Het is beschadigd / het werkt niet.', 'It is damaged / it does not work.']]),
    ex(['Goedemiddag, ik heb deze trui gisteren gekocht, maar hij past niet. Kan ik hem ruilen?', 'Good afternoon, I bought this jumper yesterday, but it does not fit. Can I exchange it?'], ['Natuurlijk. Heeft u de bon? — Ja, hier. Ik wil graag een maat groter.', 'Of course. Do you have the receipt? — Yes, here. I would like one size bigger.'], ['De koptelefoon werkt niet. Zit er garantie op? — Ja, twee jaar.', 'The headphones do not work. Is there a warranty on them? — Yes, two years.'], ['Ik heb er 80 euro voor betaald en na een week is hij kapot.', 'I paid 80 euros for it and after a week it is broken.']),
    tip('The shop item is `hij` if it is a de-word (`de trui: hij past niet`) and `het` if it is a het-word (`het shirt: het past niet`).'),
  ], ['g2-er', 'g2-object-pronouns'], ['bon', 'kleur', 'garantie', 'kwaliteit', 'materiaal', 'katoen', 'wol', 'leer', 'webshop', 'levering', 'pakket', 'retour-goederen', 'ruilen', 'retourneren', 'bezorgen', 'terugkrijgen', 'beschadigd', 'verkeerd', 'ph-past-niet', 'ph-kan-ik-ruilen'], [
    mc('"I am not happy with it":', ['Ik ben niet blij met het.', 'Ik ben er niet blij mee.', 'Ik ben niet blij met hem.'], 1, 'Things: er … mee.'),
    mc('"Is there a warranty on it?":', ['Zit garantie op het?', 'Zit er garantie op?', 'Zit garantie erop het?'], 1, 'er … op.'),
    mc('The shirt (het shirt) does not fit:', ['Hij past niet.', 'Het past niet.', 'Zij past niet.'], 1, 'het-word → het.'),
    mc('The jumper (de trui) does not fit:', ['Hij past niet.', 'Het past niet.', 'Ze past niet.'], 0, 'de-word → hij.'),
    fill('Ik heb er veel ___ betaald. (for)', ['voor'], 'I paid a lot for it.', 'er … voor.'),
    fill('Wat mankeert er ___? (wrong with it)', ['aan'], 'What is wrong with it?', 'mankeren aan.'),
    fill('Kan ik dit ___ voor een grotere maat?', ['ruilen'], 'Can I exchange this for a bigger size?', 'ruilen voor.'),
    fill('U kunt het binnen veertien dagen ___.', ['retourneren', 'terugsturen', 'terugbrengen'], 'You can return it within fourteen days.', 'retourneren / terugsturen / terugbrengen.'),
    build('I would like to exchange this.', 'Ik wil dit graag ruilen.', ['ruil', 'wil ik'], 'wil … graag ruilen.'),
    build('Do you have this in another colour?', 'Heeft u dit in een andere kleur?', ['ander', 'kleuren'], 'een andere kleur (de-word).'),
    build('I am not satisfied with it.', 'Ik ben er niet tevreden mee.', ['met het', 'ermee niet'], 'er … mee, split by niet tevreden.'),
    build('Can I get my money back?', 'Kan ik mijn geld terugkrijgen?', ['krijg terug', 'teruggekregen'], 'terugkrijgen at the end.'),
    tr('en-nl', 'I still have the receipt.', ['Ik heb de bon nog.', 'Ik heb nog de bon.'], 'de bon; nog.'),
    tr('nl-en', 'De levering duurt drie tot vijf werkdagen.', ['Delivery takes three to five working days.'], 'levering; werkdagen.'),
    fix('Ik ben niet tevreden met het.', ['Ik ben er niet tevreden mee.'], 'er … mee for things.'),
    fix('De trui is te klein, het past niet.', ['De trui is te klein, hij past niet.'], 'de trui → hij.'),
    dict('Ik heb deze schoenen vorige week gekocht, maar ze zijn al kapot.', 'I bought these shoes last week, but they are already broken.', 'gekocht; kapot.'),
    listen('Heeft u de bon nog? Dan kunt u het binnen twee weken ruilen.', ['Do you still have the receipt? Then you can exchange it within two weeks.', 'Without the receipt you cannot exchange it.', 'You can exchange it today only.'], 0, 'bon; binnen twee weken ruilen.'),
    speak('Ik heb deze trui gisteren gekocht, maar hij past niet. Kan ik hem ruilen voor een maat groter?', 'I bought this jumper yesterday, but it does not fit. Can I exchange it for one size bigger?'),
    free('Role play: bring something back to a shop. Say what it is, what is wrong, that you have the receipt, and what you want (exchange or refund).', 'Goedemiddag, ik heb deze koptelefoon vorige week gekocht, maar hij werkt niet. Ik heb de bon nog. Kan ik hem ruilen, of kan ik mijn geld terugkrijgen?', 'Good afternoon, I bought these headphones last week, but they do not work. I still have the receipt. Can I exchange them, or can I get my money back?', { hints: ['Ik heb … gekocht, maar …', 'Ik heb de bon nog', 'Kan ik … ruilen / mijn geld terugkrijgen?'] }),
    match([['de bon', 'receipt'], ['de garantie', 'warranty'], ['ruilen', 'to exchange'], ['beschadigd', 'damaged'], ['de levering', 'delivery'], ['het katoen', 'cotton']]),
    auto(3, ['article', 'tr-nl-en']),
  ], [
    mc('"I paid for it":', ['Ik heb voor het betaald.', 'Ik heb ervoor betaald.'], 1, 'ervoor.'),
    fill('Zit er ___ op? — Ja, twee jaar.', ['garantie'], 'Is there a warranty on it? — Yes, two years.', 'garantie.'),
    build('It does not fit, it is too big.', 'Het past niet, het is te groot.', ['hij', 'grote'], 'past niet; te groot.'),
    tr('en-nl', 'Can I exchange this?', ['Kan ik dit ruilen?', 'Kan ik dit omruilen?'], 'ruilen.'),
    listen('Het pakket was beschadigd, dus ik heb het teruggestuurd.', ['The parcel was damaged, so I sent it back.', 'The parcel was late, so I complained.', 'The parcel was fine, so I kept it.'], 0, 'beschadigd; teruggestuurd.'),
    speak('Ik heb er zestig euro voor betaald en het werkt niet. Kunt u het vervangen?', 'I paid sixty euros for it and it does not work. Can you replace it?'),
  ]));

  u7.push(lesson('s2u7l2', 'Complaining politely: the Dutch way', 'You can make a complaint in a shop, by phone or online, describe the problem clearly, and propose a solution without sounding rude.', [
    h('Direct but polite'),
    p('Dutch complaints are **direct**: say what is wrong, then what you want. What keeps it polite is `u`, `graag`, `zou` and a calm tone, not vagueness. `Ik wil graag mijn geld terug` is polite; `Ik eis mijn geld terug` is not.'),
    table(['step', 'Dutch'], [['1. the problem', '*Ik heb een probleem met mijn bestelling. / Er is iets misgegaan.'], ['2. the facts', '*Ik heb op 3 mei besteld en het pakket is nog niet aangekomen.'], ['3. your feeling (optional)', '*Ik vind dat vervelend. / Ik ben teleurgesteld.'], ['4. what you want', '*Ik wil graag een oplossing. / Kunt u het vervangen? / Ik wil graag mijn geld terug.'], ['5. the deadline', '*Ik hoor graag voor vrijdag van u.']]),
    h('What the other side says'),
    p('`Het spijt me.` (I am sorry.) `Wat vervelend voor u.` (How annoying for you.) `Dat had niet mogen gebeuren.` (That should not have happened.) `Ik ga het voor u uitzoeken.` (I will look into it for you.) `We sturen een nieuwe.` (We will send a new one.)'),
    h('zou for extra politeness'),
    p('`Zou u het kunnen vervangen?` (Could you replace it?) `Ik zou graag een nieuwe willen.` (I would like a new one.) You will learn `zou` fully at B1; for now, learn these two sentences as chunks.'),
    ex(['Goedemorgen, ik bel over mijn bestelling. Het pakket is beschadigd aangekomen.', 'Good morning, I am calling about my order. The parcel arrived damaged.'], ['Wat vervelend. Ik ga het meteen voor u uitzoeken.', 'How annoying. I will look into it for you right away.'], ['Ik heb al twee keer gemaild, maar niemand reageert. Zo hoort het niet.', 'I have emailed twice already, but nobody responds. That is not right.'], ['Kunt u daar iets aan doen? Anders wil ik graag mijn geld terug.', 'Can you do something about that? Otherwise I would like my money back.']),
    tip('Order matters: problem first, feelings second, demand last. Dutch listeners want the facts before the emotion.'),
  ], ['g2-subordinate', 'g2-object-pronouns'], ['mankeren', 'probleem', 'bestelling', 'oplossing', 'fout', 'klantenservice', 'medewerker', 'oplossen', 'terugsturen', 'vervangen', 'repareren', 'behulpzaam', 'onbeleefd', 'teleurgesteld', 'vervelend', 'ph-het-spijt-me', 'ph-geld-terug', 'ph-iets-aan-doen', 'ph-zo-hoort-het-niet'], [
    mc('Polite way to ask for a refund:', ['Geef mijn geld terug.', 'Ik wil graag mijn geld terug.', 'Geld terug, nu.'], 1, 'graag + wil = polite.'),
    mc('"Wat vervelend voor u" is said by', ['the customer', 'the employee, to show sympathy', 'nobody, it is rude'], 1, 'Standard sympathy phrase.'),
    mc('The best order for a complaint:', ['feeling, demand, problem', 'problem, facts, demand', 'demand, problem, thanks'], 1, 'Problem first, demand last.'),
    art('probleem', 'het', 'het probleem.'),
    art('oplossing', 'de', 'de oplossing (-ing).'),
    art('bestelling', 'de', 'de bestelling.'),
    fill('Er is iets ___ met mijn bestelling. (misgaan, perfect)', ['misgegaan'], 'Something went wrong with my order.', 'mis + ge + gaan.'),
    fill('Ik heb de ___ gebeld, maar niemand nam op.', ['klantenservice'], 'I called customer service, but nobody answered.', 'klantenservice.'),
    fill('Het pakket is beschadigd. Kunt u daar iets ___ doen?', ['aan'], 'The parcel is damaged. Can you do something about that?', 'iets aan iets doen.'),
    fill('De medewerker was heel ___, hij loste het meteen op. (helpful)', ['behulpzaam'], 'The employee was very helpful, he solved it immediately.', 'behulpzaam.'),
    build('I have a problem with my order.', 'Ik heb een probleem met mijn bestelling.', ['over', 'probleem een'], 'een probleem met.'),
    build('I ordered on 3 May and it has not arrived yet.', 'Ik heb op 3 mei besteld en het is nog niet aangekomen.', ['bestelde', 'aankomt'], 'heb … besteld; is … aangekomen.'),
    build('Could you replace it?', 'Zou u het kunnen vervangen?', ['Kan', 'vervangt'], 'Zou u … kunnen vervangen?'),
    build('I would like to hear from you before Friday.', 'Ik hoor graag voor vrijdag van u.', ['van jou', 'over'], 'hoor graag … van u.'),
    tr('en-nl', 'I am disappointed in the service.', ['Ik ben teleurgesteld in de service.', 'Ik ben teleurgesteld over de service.'], 'teleurgesteld in.'),
    tr('nl-en', 'Het spijt me, dat had niet mogen gebeuren. We sturen vandaag een nieuwe.', ['I am sorry, that should not have happened. We will send a new one today.', 'Sorry, that should not have happened. We are sending a new one today.'], 'spijt me; had niet mogen gebeuren.'),
    fix('Ik eis nu meteen mijn geld terug!', ['Ik wil graag mijn geld terug.'], 'Direct is fine, demanding is not: wil graag.'),
    fix('Kunt u iets doen daaraan?', ['Kunt u daar iets aan doen?'], 'daar … aan, split.'),
    dict('Ik heb al twee keer gemaild, maar ik heb nog geen antwoord gekregen.', 'I have emailed twice already, but I have not had an answer yet.', 'gemaild; geen antwoord gekregen.'),
    listen('Wat vervelend voor u. Ik ga het meteen uitzoeken en ik bel u vanmiddag terug.', ['How annoying for you. I will look into it right away and call you back this afternoon.', 'That is your problem. Call back tomorrow.', 'I cannot help you, sorry.'], 0, 'uitzoeken; terugbellen.'),
    speak('Ik bel over mijn bestelling. Het pakket is nog niet aangekomen en ik vind dat vervelend. Kunt u daar iets aan doen?', 'I am calling about my order. The parcel has not arrived yet and I find that annoying. Can you do something about that?'),
    read('Beste klantenservice, op 2 juni heb ik bij uw webshop een lamp besteld (bestelnummer 48213). De lamp is op 6 juni bezorgd, maar de doos was beschadigd en de lamp werkt niet. Ik heb op 7 juni gebeld. De medewerker beloofde een nieuwe lamp te sturen, maar ik heb nog niets ontvangen. Ik vind dit erg vervelend. Ik wil graag binnen een week een nieuwe lamp, of anders mijn geld terug. Ik hoor graag van u. Met vriendelijke groet, Anna Morris', [
      { q: 'What was wrong with the delivery?', options: ['it came too late', 'the box was damaged and the lamp does not work', 'the wrong lamp was sent'], answer: 1, explain: '"de doos was beschadigd en de lamp werkt niet".' },
      { q: 'What did the employee promise on 7 June?', options: ['a refund', 'to send a new lamp', 'to repair the lamp'], answer: 1, explain: '"beloofde een nieuwe lamp te sturen".' },
      { q: 'What does Anna want now?', options: ['a new lamp within a week, or her money back', 'an apology', 'a discount'], answer: 0, explain: '"binnen een week een nieuwe lamp, of anders mijn geld terug".' },
    ], { en: 'Dear customer service, on 2 June I ordered a lamp from your online shop (order number 48213). The lamp was delivered on 6 June, but the box was damaged and the lamp does not work. I called on 7 June. The employee promised to send a new lamp, but I have received nothing yet. I find this very annoying. I would like a new lamp within a week, or otherwise my money back. I look forward to hearing from you. Kind regards, Anna Morris' }),
    write('Write a complaint email (5 to 7 sentences) about something you bought that went wrong: the facts with dates, the problem, what you want, and a deadline.', ['Opens with Beste klantenservice, or Geachte heer/mevrouw,', 'Gives the facts first: what, when, order number', 'States the problem clearly (werkt niet / beschadigd / verkeerde maat)', 'Says what you want with graag (ruilen / vervangen / geld terug)', 'Gives a deadline (binnen … / voor …)', 'Closes with Met vriendelijke groet, + name'], 'Beste klantenservice, op 10 maart heb ik een jas besteld (bestelnummer 7781). Ik heb de verkeerde maat ontvangen: een M in plaats van een L. Ik heb de jas op 12 maart teruggestuurd, maar ik heb nog geen nieuwe jas en geen bericht gekregen. Ik wil graag binnen een week de juiste maat, of anders mijn geld terug. Met vriendelijke groet, Sam Taylor'),
  ], [
    mc('"Het spijt me" means', ['it fits me', 'I am sorry', 'I am late'], 1, 'spijten = to be sorry.'),
    fill('Ik ben ___ in de service. (disappointed)', ['teleurgesteld'], 'I am disappointed in the service.', 'teleurgesteld.'),
    build('Can you solve this?', 'Kunt u dit oplossen?', ['los op', 'opgelost'], 'oplossen at the end.'),
    tr('en-nl', 'That is not right.', ['Zo hoort het niet.', 'Dat klopt niet.'], 'zo hoort het niet / dat klopt niet.'),
    listen('Ik heb een probleem met mijn bestelling: ik heb de verkeerde maat gekregen.', ['I have a problem with my order: I got the wrong size.', 'My order is late.', 'I ordered the wrong size.'], 0, 'verkeerde maat gekregen.'),
    speak('Het spijt me, maar de lamp werkt nog steeds niet. Ik wil graag mijn geld terug.', 'I am sorry, but the lamp still does not work. I would like my money back.'),
  ]));

  units.push(unit('s2u7', 'Winkelen en klagen', 'shopping and complaints', u7, [
    mc('"I am happy with it":', ['Ik ben blij met het.', 'Ik ben er blij mee.'], 1, 'er … mee.'),
    mc('de trui → ', ['hij past niet', 'het past niet'], 0, 'de-word → hij.'),
    art('garantie', 'de', 'de garantie.'),
    art('pakket', 'het', 'het pakket.'),
    fill('Kan ik dit ___ voor een andere kleur?', ['ruilen'], 'Can I exchange this for another colour?', 'ruilen.'),
    fill('Kunt u daar iets ___ doen?', ['aan'], 'Can you do something about that?', 'daar … aan.'),
    build('I paid a lot for it.', 'Ik heb er veel voor betaald.', ['voor het', 'daarvoor'], 'er … voor.'),
    build('I would like my money back.', 'Ik wil graag mijn geld terug.', ['eis', 'terugkrijg'], 'wil graag … terug.'),
    build('The parcel arrived damaged.', 'Het pakket is beschadigd aangekomen.', ['heeft', 'aankwam'], 'is … aangekomen.'),
    fix('Ik ben niet tevreden met het.', ['Ik ben er niet tevreden mee.'], 'er … mee.'),
    tr('en-nl', 'Do you still have the receipt?', ['Heeft u de bon nog?', 'Heb je de bon nog?'], 'de bon.'),
    listen('Het spijt me. We sturen morgen een nieuwe en u hoeft niets te betalen.', ['I am sorry. We will send a new one tomorrow and you do not have to pay anything.', 'Sorry, you have to pay for a new one.', 'We cannot send a new one.'], 0, 'hoeft niets te betalen.'),
    speak('Ik heb een probleem met mijn bestelling. Het pakket is beschadigd en ik wil het graag ruilen.', 'I have a problem with my order. The parcel is damaged and I would like to exchange it.'),
  ]));

  /* ---------------- Vocabulary: Unit 8 ---------------- */
  VB('opnemen', 'to answer (the phone) / pick up', 'neem op|neemt op|nemen op', 'nam op|namen op', 'opgenomen', 'hebben', 'Niemand neemt op.', 'Nobody is answering.', { theme: 'phone', stage: 2 });
  VB('ophangen', 'to hang up', 'hang op|hangt op|hangen op', 'hing op|hingen op', 'opgehangen', 'hebben', 'Hij hing zomaar op.', 'He just hung up.', { theme: 'phone', stage: 2 });
  VB('terugbellen', 'to call back', 'bel terug|belt terug|bellen terug', 'belde terug|belden terug', 'teruggebeld', 'hebben', 'Kunt u mij terugbellen?', 'Can you call me back?', { theme: 'phone', stage: 2 });
  VB('doorverbinden', 'to put through', 'verbind door|verbindt door|verbinden door', 'verbond door|verbonden door', 'doorverbonden', 'hebben', 'Ik verbind u door met de afdeling.', 'I am putting you through to the department.', { theme: 'phone', stage: 2 });
  VB('bereiken', 'to reach', 'bereik|bereikt|bereiken', 'bereikte|bereikten', 'bereikt', 'hebben', 'Ik kan hem niet bereiken.', 'I cannot reach him.', { theme: 'phone', stage: 2 });
  VB('achterlaten', 'to leave (a message)', 'laat achter|laat achter|laten achter', 'liet achter|lieten achter', 'achtergelaten', 'hebben', 'Wilt u een bericht achterlaten?', 'Would you like to leave a message?', { theme: 'phone', stage: 2 });
  VB('appen', 'to message (WhatsApp)', 'app|appt|appen', 'appte|appten', 'geappt', 'hebben', 'App me even als je er bent.', 'Message me when you are there.', { theme: 'phone', stage: 2 });
  VB('inspreken', 'to record (a voicemail)', 'spreek in|spreekt in|spreken in', 'sprak in|spraken in', 'ingesproken', 'hebben', 'Ik heb een voicemail ingesproken.', 'I left a voicemail.', { theme: 'phone', stage: 2 });
  N('voicemail', 'de', 'voicemails', 'voicemail', 'Spreek een bericht in na de piep.', 'Leave a message after the beep.', { theme: 'phone', stage: 2 });
  N('gesprek', 'het', 'gesprekken', 'conversation / call', 'Het gesprek duurde een uur.', 'The call took an hour.', { theme: 'phone', stage: 2, note: 'in gesprek = engaged (phone busy).' });
  N('verbinding', 'de', 'verbindingen', 'connection', 'De verbinding is slecht.', 'The connection is bad.', { theme: 'phone', stage: 2 });
  N('mobiel', 'de', 'mobielen', 'mobile (phone)', 'Mijn mobiel is leeg.', 'My mobile is dead.', { theme: 'phone', stage: 2, altNl: ['mobieltje'] });
  N('toestel', 'het', 'toestellen', 'extension / device', 'U kunt mij bereiken op toestel 204.', 'You can reach me on extension 204.', { theme: 'phone', stage: 2 });
  W('verkeerd verbonden', 'wrong number', 'adj', 'Sorry, ik ben verkeerd verbonden.', 'Sorry, wrong number.', { theme: 'phone', stage: 2, id: 'verkeerd-verbonden' });
  W('in gesprek', 'engaged / busy (line)', 'adj', 'Het nummer is in gesprek.', 'The number is engaged.', { theme: 'phone', stage: 2, id: 'in-gesprek' });
  PH('Met …', '… speaking (phone opening)', 'Met Sam Taylor.', 'Sam Taylor speaking.', { theme: 'phone', stage: 2, id: 'ph-met-naam', note: 'Dutch people answer the phone with Met + their name.' });
  PH('Spreek ik met …?', 'Am I speaking to …?', 'Spreek ik met mevrouw De Vries?', 'Am I speaking to Ms De Vries?', { theme: 'phone', stage: 2, id: 'ph-spreek-ik-met' });
  PH('Kan ik … spreken?', 'Can I speak to …?', 'Kan ik meneer Bakker spreken?', 'Can I speak to Mr Bakker?', { theme: 'phone', stage: 2, id: 'ph-kan-ik-spreken' });
  PH('Een ogenblik, alstublieft.', 'One moment, please.', 'Een ogenblik, alstublieft, ik verbind u door.', 'One moment please, I am putting you through.', { theme: 'phone', stage: 2, id: 'ph-ogenblik' });
  PH('Kunt u dat herhalen?', 'Could you repeat that?', 'Sorry, de verbinding is slecht. Kunt u dat herhalen?', 'Sorry, the connection is bad. Could you repeat that?', { theme: 'phone', stage: 2, id: 'ph-herhalen' });

  N('e-mailadres', 'het', 'e-mailadressen', 'email address', 'Wat is uw e-mailadres?', 'What is your email address?', { theme: 'email', stage: 2 });
  N('apenstaartje', 'het', 'apenstaartjes', 'at sign (@)', 'sam apenstaartje mail punt com', 'sam at mail dot com', { theme: 'email', stage: 2 });
  N('punt', 'de', 'punten', 'dot / full stop', 'punt nl', 'dot nl', { theme: 'email', stage: 2 });
  N('streepje', 'het', 'streepjes', 'hyphen / dash', 'Met een streepje of zonder?', 'With a hyphen or without?', { theme: 'email', stage: 2, note: 'laag streepje = underscore.' });
  N('hoofdletter', 'de', 'hoofdletters', 'capital letter', 'Alles zonder hoofdletters.', 'All without capitals.', { theme: 'email', stage: 2 });
  VB('spellen', 'to spell', 'spel|spelt|spellen', 'spelde|spelden', 'gespeld', 'hebben', 'Kunt u dat spellen?', 'Can you spell that?', { theme: 'communication', stage: 2 });
  VB('inloggen', 'to log in', 'log in|logt in|loggen in', 'logde in|logden in', 'ingelogd', 'hebben', 'Ik kan niet inloggen.', 'I cannot log in.', { theme: 'email', stage: 2 });
  VB('aanmaken', 'to create (an account)', 'maak aan|maakt aan|maken aan', 'maakte aan|maakten aan', 'aangemaakt', 'hebben', 'Maak eerst een account aan.', 'First create an account.', { theme: 'email', stage: 2 });
  VB('bijvoegen', 'to attach', 'voeg bij|voegt bij|voegen bij', 'voegde bij|voegden bij', 'bijgevoegd', 'hebben', 'Ik heb de foto bijgevoegd.', 'I have attached the photo.', { theme: 'email', stage: 2 });
  N('account', 'het', 'accounts', 'account', 'Ik heb een nieuw account aangemaakt.', 'I created a new account.', { theme: 'email', stage: 2 });
  N('gebruikersnaam', 'de', 'gebruikersnamen', 'username', 'Mijn gebruikersnaam is sam_t.', 'My username is sam_t.', { theme: 'email', stage: 2 });
  N('link', 'de', 'links', 'link', 'Klik op de link in de mail.', 'Click the link in the email.', { theme: 'email', stage: 2 });
  N('kopie', 'de', 'kopieën', 'copy', 'Stuur een kopie naar mijn collega.', 'Send a copy to my colleague.', { theme: 'email', stage: 2 });
  W('vriendelijk', 'friendly / kind', 'adj', 'Een vriendelijke groet.', 'A friendly greeting.', { theme: 'basics', stage: 2 });
  W('kort', 'short', 'adj', 'Een korte vraag.', 'A short question.', { theme: 'basics', stage: 2 });
  PH('Bedankt voor je bericht.', 'Thanks for your message.', 'Bedankt voor je bericht van gisteren.', 'Thanks for your message from yesterday.', { theme: 'email', stage: 2, id: 'ph-bedankt-bericht' });
  PH('Ik hoor het graag.', 'Let me know. (I would like to hear.)', 'Lukt dat? Ik hoor het graag.', 'Does that work? Let me know.', { theme: 'email', stage: 2, id: 'ph-hoor-het-graag' });
  PH('Tot snel!', 'See you soon!', 'Tot snel! Groetjes, Anna', 'See you soon! Regards, Anna', { theme: 'email', stage: 2, id: 'ph-tot-snel' });

  /* ---------------- Unit 8 lessons ---------------- */
  const u8 = [];
  u8.push(lesson('s2u8l1', 'On the phone: Met Sam!', 'You can answer and make a phone call in Dutch, ask for someone, leave a message and deal with a bad line, using separable phone verbs.', [
    h('How Dutch phone calls work'),
    p('Dutch people answer the phone with **`Met`** + their name: `Met Anna.` `Met Bakker.` The caller says who they are the same way: `Hoi, met Sam.` `Goedemiddag, u spreekt met Sam Taylor.`'),
    table(['caller', 'answerer'], [['*Goedemiddag, met Sam Taylor. Kan ik mevrouw De Vries spreken?', '*Een ogenblik, ik verbind u door.'], ['*Spreek ik met de huisartsenpraktijk?', '*Ja, waarmee kan ik u helpen?'], ['*Is Tom er ook?', '*Nee, hij is er niet. Kan ik iets doorgeven?'], ['*Kunt u hem vragen mij terug te bellen?', '*Natuurlijk. Wat is uw nummer?'], ['*Sorry, ik ben verkeerd verbonden.', '*Geen probleem.']]),
    h('Separable phone verbs'),
    p('`opnemen` (answer), `ophangen` (hang up), `terugbellen` (call back), `doorverbinden` (put through), `inspreken` (leave a voicemail), `doorgeven` (pass on a message). All separable: `Ik bel je morgen terug.` `Ze nam niet op.` `Ik heb een bericht ingesproken.`'),
    h('Trouble on the line'),
    p('`De verbinding is slecht.` `Kunt u dat herhalen?` `Ik versta u niet goed.` `Het nummer is in gesprek.` `Ik kan hem niet bereiken.` `Mijn mobiel is bijna leeg.`'),
    ex(['Met Sam. — Hoi Sam, met Anna. Stoor ik?', 'Sam speaking. — Hi Sam, Anna here. Am I disturbing you?'], ['Ik heb je twee keer gebeld, maar je nam niet op.', 'I called you twice, but you did not answer.'], ['Wilt u een bericht achterlaten? — Ja, kunt u vragen of hij mij terugbelt?', 'Would you like to leave a message? — Yes, could you ask him to call me back?'], ['Sorry, de verbinding is slecht, ik bel je zo terug.', 'Sorry, the connection is bad, I will call you back in a moment.']),
    tip('Never say "Hallo?" with your name missing: Dutch people find it odd. `Met` + name, always, both when answering and calling.'),
  ], ['g2-separable-tenses', 'g2-imperative'], ['opnemen', 'ophangen', 'terugbellen', 'doorverbinden', 'bereiken', 'achterlaten', 'appen', 'inspreken', 'voicemail', 'gesprek', 'verbinding', 'mobiel', 'toestel', 'verkeerd-verbonden', 'in-gesprek', 'ph-met-naam', 'ph-spreek-ik-met', 'ph-kan-ik-spreken', 'ph-ogenblik', 'ph-herhalen'], [
    mc('How do Dutch people answer the phone?', ['Hallo?', 'Met + name', 'Ja?'], 1, 'Met Anna.'),
    mc('"Het nummer is in gesprek" means', ['the number is engaged', 'the number is wrong', 'the number is in the conversation'], 0, 'in gesprek = busy.'),
    mc('"Kan ik iets doorgeven?" means', ['Can I pass something on?', 'Can I put you through?', 'Can I call back?'], 0, 'doorgeven = pass on.'),
    conj('opnemen', 'zij', 'past', ['nam op', 'namen op'], 'nemen → nam; prefix at the end.'),
    conj('terugbellen', 'ik', 'perf', ['heb teruggebeld'], 'terug + ge + beld.'),
    conj('doorverbinden', 'ik', 'pres', ['verbind door'], 'verbind … door.'),
    fill('Goedemiddag, ___ Sam Taylor. Kan ik meneer Bakker spreken?', ['met'], 'Good afternoon, Sam Taylor speaking. Can I speak to Mr Bakker?', 'met + name.'),
    fill('Een ogenblik, ik ___ u door.', ['verbind'], 'One moment, I am putting you through.', 'doorverbinden: verbind … door.'),
    fill('Ik heb je gebeld, maar je nam niet ___.', ['op'], 'I called you, but you did not answer.', 'opnemen: nam … op.'),
    fill('Sorry, ik ben ___ verbonden.', ['verkeerd'], 'Sorry, wrong number.', 'verkeerd verbonden.'),
    build('Can I speak to Ms De Vries?', 'Kan ik mevrouw De Vries spreken?', ['met', 'praten'], 'Kan ik … spreken?'),
    build('Can you call me back?', 'Kunt u mij terugbellen?', ['bel terug', 'teruggebeld'], 'terugbellen at the end.'),
    build('I left a message on his voicemail.', 'Ik heb een bericht op zijn voicemail ingesproken.', ['inspreek', 'gesproken in'], 'ingesproken, one word.'),
    build('Would you like to leave a message?', 'Wilt u een bericht achterlaten?', ['laat achter', 'achtergelaten'], 'achterlaten at the end.'),
    tr('en-nl', 'The connection is bad, could you repeat that?', ['De verbinding is slecht, kunt u dat herhalen?', 'De verbinding is slecht. Kunt u dat herhalen?'], 'verbinding; herhalen.'),
    tr('nl-en', 'Hij is er niet. Kan ik iets doorgeven?', ['He is not here. Can I pass something on?', 'He is not in. Can I take a message?'], 'doorgeven.'),
    fix('Ik bel terug je morgen.', ['Ik bel je morgen terug.'], 'Prefix at the end.'),
    fix('Hallo? Wie is dit?', ['Met Sam.', 'Met Sam, met wie spreek ik?'], 'Answer with Met + name.'),
    dict('Met Anna. Kan ik Tom even spreken?', 'Anna speaking. Can I speak to Tom for a moment?', 'met Anna; spreken.'),
    listen('Ik kan hem niet bereiken, zijn nummer is steeds in gesprek.', ['I cannot reach him, his number is always engaged.', 'I reached him, he is in a meeting.', 'His number is wrong.'], 0, 'bereiken; in gesprek.'),
    speak('Goedemiddag, met Sam Taylor. Kan ik mevrouw De Vries spreken? Anders bel ik later terug.', 'Good afternoon, Sam Taylor speaking. Can I speak to Ms De Vries? Otherwise I will call back later.'),
    free('Role play: call an office, say who you are, ask for someone, and when they are not there, ask them to call you back and give your number.', 'Goedemorgen, met Sam Taylor. Kan ik meneer Jansen spreken? Hij is er niet? Kunt u hem vragen mij terug te bellen? Mijn nummer is 06 12 34 56 78.', 'Good morning, Sam Taylor speaking. Can I speak to Mr Jansen? He is not there? Could you ask him to call me back? My number is 06 12 34 56 78.', { hints: ['Met …', 'Kan ik … spreken?', 'Kunt u hem vragen mij terug te bellen?'] }),
    match([['opnemen', 'to answer the phone'], ['ophangen', 'to hang up'], ['terugbellen', 'to call back'], ['doorverbinden', 'to put through'], ['in gesprek', 'engaged'], ['de verbinding', 'connection'], ['verkeerd verbonden', 'wrong number']]),
  ], [
    mc('You call a friend. You start with:', ['Hallo, wie is daar?', 'Hoi, met Sam.', 'Ja, Sam hier.'], 1, 'met + name.'),
    conj('ophangen', 'hij', 'past', ['hing op'], 'hangen → hing; prefix at the end.'),
    fill('Wilt u een bericht ___? (leave)', ['achterlaten', 'inspreken'], 'Would you like to leave a message?', 'achterlaten / inspreken.'),
    build('One moment, I am putting you through.', 'Een ogenblik, ik verbind u door.', ['doorverbind', 'verbindt'], 'verbind … door.'),
    tr('en-nl', 'Sorry, wrong number.', ['Sorry, ik ben verkeerd verbonden.', 'Sorry, verkeerd verbonden.'], 'verkeerd verbonden.'),
    speak('Ik heb je gisteren gebeld, maar je nam niet op. Bel je me vanavond terug?', 'I called you yesterday, but you did not answer. Will you call me back tonight?'),
  ]));

  u8.push(lesson('s2u8l2', 'Spelling, addresses and the everyday email', 'You can spell names and email addresses out loud, deal with accounts and logins, and write a short personal email with the right opening and closing.', [
    h('Spelling out loud'),
    p('Say the Dutch letter names from Stage 0. Vowels that sound alike get a word: `A van Anton`, `E van Eduard`, `I van Izaak`. Email symbols: `@` = `apenstaartje` (little monkey tail), `.` = `punt`, `-` = `streepje`, `_` = `laag streepje` (or `underscore`), capitals = `hoofdletters`.'),
    ex(['Mijn e-mailadres is sam punt taylor apenstaartje gmail punt com, alles zonder hoofdletters.', 'My email address is sam dot taylor at gmail dot com, all lower case.'], ['Kunt u dat spellen? — T van Theodoor, A, Y, L, O, R.', 'Can you spell that? — T for Theodoor, A, Y, L, O, R.'], ['Mijn gebruikersnaam is sam laag streepje t.', 'My username is sam underscore t.']),
    h('Accounts and logins'),
    p('`een account aanmaken` (create an account), `inloggen` (log in), `uitloggen`, `wachtwoord vergeten` (forgot password), `op de link klikken` (click the link), `een kopie sturen naar` (send a copy to), `bijvoegen` (attach).'),
    h('The personal email'),
    table(['', 'informal', 'neutral'], [['opening', '*Hoi Anna, / *Hé Anna,', '*Beste Anna,'], ['start', '*Bedankt voor je bericht!', '*Bedankt voor uw bericht.'], ['question', '*Heb je zin om …? / Lukt het om …?', '*Zou u … kunnen …?'], ['end', '*Ik hoor het graag. Tot snel!', '*Ik hoor graag van u.'], ['closing', '*Groetjes, / Liefs,', '*Met vriendelijke groet,']]),
    p('Between friends, emails and messages are short: `Hoi Tom, lukt het zaterdag om drie uur? Ik hoor het graag. Groetjes, Sam`. `Liefs` (love) is for close friends and family only.'),
    ex(['Hoi Lisa, bedankt voor je bericht! Zaterdag lukt, ik ben er om drie uur. Tot snel! Groetjes, Sam', 'Hi Lisa, thanks for your message! Saturday works, I will be there at three. See you soon! Regards, Sam'], ['Beste Anna, ik heb de foto’s van het feest bijgevoegd. Ik hoor het graag als je nog meer wilt. Groetjes, Tom', 'Dear Anna, I have attached the photos from the party. Let me know if you want more. Regards, Tom']),
    tip('`Ik hoor het graag` is the friendly, non-pushy way to ask for an answer. Use it at the end of almost any email.'),
  ], ['g2-imperative', 'g2-om-te'], ['e-mailadres', 'apenstaartje', 'punt', 'streepje', 'hoofdletter', 'spellen', 'inloggen', 'aanmaken', 'bijvoegen', 'account', 'gebruikersnaam', 'link', 'kopie', 'vriendelijk', 'kort', 'ph-bedankt-bericht', 'ph-hoor-het-graag', 'ph-tot-snel'], [
    mc('"@" in Dutch:', ['apenstaartje', 'streepje', 'punt'], 0, 'apenstaartje.'),
    mc('"_" in Dutch:', ['streepje', 'laag streepje', 'hoofdletter'], 1, 'laag streepje = underscore.'),
    mc('Closing for a close friend:', ['Hoogachtend,', 'Liefs,', 'Met vriendelijke groet,'], 1, 'Liefs = love.'),
    mc('"Ik hoor het graag" means', ['I hear it well', 'let me know', 'I like to listen'], 1, 'Friendly request for an answer.'),
    art('e-mailadres', 'het', 'het e-mailadres (het adres).'),
    art('account', 'het', 'het account.'),
    art('gebruikersnaam', 'de', 'de gebruikersnaam (de naam).'),
    fill('Kunt u uw naam ___?', ['spellen'], 'Can you spell your name?', 'spellen.'),
    fill('Mijn adres is anna ___ smit apenstaartje mail punt nl. (dot)', ['punt'], 'My address is anna dot smit at mail dot nl.', 'punt = dot.'),
    fill('Ik kan niet ___, ik ben mijn wachtwoord vergeten.', ['inloggen'], 'I cannot log in, I have forgotten my password.', 'inloggen.'),
    fill('Ik heb de foto’s ___. (bijvoegen, perfect)', ['bijgevoegd'], 'I have attached the photos.', 'bij + ge + voegd.'),
    build('Thanks for your message!', 'Bedankt voor je bericht!', ['jouw', 'over'], 'bedankt voor je bericht.'),
    build('Create an account first and then click the link.', 'Maak eerst een account aan en klik dan op de link.', ['aanmaak', 'klikt'], 'Imperatives: maak … aan; klik op.'),
    build('Send a copy to my colleague.', 'Stuur een kopie naar mijn collega.', ['stuurt', 'aan'], 'stuur … naar.'),
    build('Does Saturday work? Let me know.', 'Lukt zaterdag? Ik hoor het graag.', ['lukken', 'graag het'], 'lukt; ik hoor het graag.'),
    tr('en-nl', 'What is your email address?', ['Wat is je e-mailadres?', 'Wat is uw e-mailadres?'], 'e-mailadres.'),
    tr('nl-en', 'Alles zonder hoofdletters en met een streepje tussen de namen.', ['All lower case and with a hyphen between the names.', 'Everything without capitals and with a dash between the names.'], 'hoofdletters; streepje.'),
    fix('Geachte Lisa, tot snel! Liefs, Sam', ['Hoi Lisa, tot snel! Liefs, Sam', 'Lieve Lisa, tot snel! Liefs, Sam'], 'Geachte and Liefs do not go together.'),
    dict('Mijn e-mailadres is sam punt taylor apenstaartje mail punt com.', 'My email address is sam dot taylor at mail dot com.', 'punt; apenstaartje.'),
    listen('Kunt u dat spellen? — Ja: D van Dirk, E, V, R, I, E, S.', ['Can you spell that? — Yes: D for Dirk, E, V, R, I, E, S.', 'Can you repeat that? — De Vries.', 'What is your name? — Dirk de Vries.'], 0, 'spellen; D van Dirk.'),
    speak('Mijn e-mailadres is anna streepje smit apenstaartje gmail punt com, alles zonder hoofdletters.', 'My email address is anna hyphen smit at gmail dot com, all lower case.'),
    free('Spell your own name and say your email address out loud in Dutch.', 'Mijn naam is Taylor: T van Theodoor, A van Anton, Y, L, O, R. Mijn e-mailadres is sam punt taylor apenstaartje mail punt com.', 'My name is Taylor: T for Theodoor, A for Anton, Y, L, O, R. My email address is sam dot taylor at mail dot com.', { hints: ['… van …', 'punt', 'apenstaartje'] }),
    write('Write a short personal email (4 to 6 sentences) to a friend: thank them for their message, answer a question about meeting up, attach something, and close warmly.', ['Opens with Hoi / Hé / Beste + name', 'Bedankt voor je bericht (or similar)', 'Answers about the meeting (Zaterdag lukt / lukt helaas niet)', 'Mentions an attachment (Ik heb … bijgevoegd)', 'Ends with Ik hoor het graag / Tot snel! and Groetjes,'], 'Hoi Lisa, bedankt voor je bericht! Zaterdag om drie uur lukt, ik kom met de fiets. Ik heb de foto’s van vorige week bijgevoegd. Wil je nog iets meenemen? Ik hoor het graag. Tot snel! Groetjes, Sam'),
  ], [
    mc('"punt" in an email address is', ['dot', 'dash', 'at'], 0, 'punt = dot.'),
    art('kopie', 'de', 'de kopie.'),
    fill('Maak eerst een ___ aan.', ['account'], 'First create an account.', 'account aanmaken.'),
    build('I have forgotten my password.', 'Ik ben mijn wachtwoord vergeten.', ['heb', 'vergeet'], 'ben … vergeten.'),
    tr('en-nl', 'See you soon!', ['Tot snel!', 'Tot gauw!'], 'tot snel.'),
    speak('Hoi Tom, bedankt voor je bericht. Zaterdag lukt. Tot snel!', 'Hi Tom, thanks for your message. Saturday works. See you soon!'),
  ]));

  units.push(unit('s2u8', 'Bellen en mailen', 'phone and email', u8, [
    mc('Dutch phone greeting:', ['Hallo?', 'Met Sam.'], 1, 'met + name.'),
    mc('"@" is', ['apenstaartje', 'streepje'], 0, 'apenstaartje.'),
    conj('terugbellen', 'zij', 'pres', ['belt terug', 'bellen terug'], 'belt … terug.'),
    fill('Een ogenblik, ik ___ u door.', ['verbind'], 'One moment, I am putting you through.', 'verbind … door.'),
    fill('Ik ___ het graag. (Let me know)', ['hoor'], 'Let me know.', 'ik hoor het graag.'),
    fill('Kunt u dat ___? (spell)', ['spellen'], 'Can you spell that?', 'spellen.'),
    build('Can you ask him to call me back?', 'Kunt u hem vragen mij terug te bellen?', ['terugbellen', 'om'], 'terug te bellen.'),
    build('I have attached the photo.', 'Ik heb de foto bijgevoegd.', ['voeg bij', 'gebijvoegd'], 'bijgevoegd.'),
    build('The connection is bad, I will call you back.', 'De verbinding is slecht, ik bel je terug.', ['terugbel', 'belt'], 'bel … terug.'),
    fix('Ik heb je terug gebeld.', ['Ik heb je teruggebeld.'], 'One word in the perfect.'),
    tr('en-nl', 'Am I speaking to Mr Bakker?', ['Spreek ik met meneer Bakker?', 'Spreek ik met de heer Bakker?'], 'spreek ik met.'),
    listen('Hij is er niet. Wilt u een bericht achterlaten of belt u later terug?', ['He is not here. Would you like to leave a message or call back later?', 'He is here. One moment.', 'Wrong number, sorry.'], 0, 'achterlaten; terugbellen.'),
    speak('Met Sam Taylor. Ik bel over mijn bestelling. Kunt u mij doorverbinden met de klantenservice?', 'Sam Taylor speaking. I am calling about my order. Can you put me through to customer service?'),
  ]));

  /* ---------------- Stage 2 exam (hand-written core; the engine adds sampled items) ---------------- */
  const exam = [
    conj('werken', 'ik', 'perf', ['heb gewerkt'], 'Regular participle: gewerkt.'),
    conj('gaan', 'wij', 'perf', ['zijn gegaan'], 'gaan takes zijn.'),
    conj('kopen', 'hij', 'perf', ['heeft gekocht'], 'One of the -cht four.'),
    conj('zijn', 'ik', 'past', ['was'], 'was / waren.'),
    conj('komen', 'zij', 'past', ['kwam', 'kwamen'], 'kwam / kwamen.'),
    conj('wonen', 'wij', 'past', ['woonden'], 'woon + den.'),
    conj('ophalen', 'ik', 'perf', ['heb opgehaald'], 'op + ge + haald.'),
    conj('zullen', 'jij', 'pres', ['zult', 'zal'], 'zult / zal.'),
    mc('Ik ___ gisteren naar Utrecht gegaan.', ['heb', 'ben'], 1, 'gaan → zijn.'),
    mc('Ik blijf thuis omdat ik ___.', ['ben ziek', 'ziek ben'], 1, 'Verb at the end.'),
    mc('___ ik klein was, woonde ik in Leeds.', ['Als', 'Toen'], 1, 'Past period → toen.'),
    mc('Hoeveel kinderen heb je? — Ik heb ___ twee.', ['—', 'er', 'daar'], 1, 'Number → er.'),
    mc('Dit cadeau is voor ___. (you)', ['je', 'jou', 'jij'], 1, 'After a preposition: jou.'),
    mc('Fietsen is ___ dan lopen.', ['sneller', 'meer snel', 'snelst'], 0, 'Always -er.'),
    mc('Ik reserveer nu, ___ we een tafel hebben.', ['omdat', 'zodat'], 1, 'Purpose: zodat.'),
    fill('Ik voel ___ vandaag veel beter.', ['me', 'mij'], 'I feel much better today.', 'ik → me.'),
    fill('Ik woon hier ___ drie jaar.', ['al'], 'I have lived here for three years.', 'al + duration.'),
    fill('___ binnen en ga zitten. (komen)', ['Kom'], 'Come in and sit down.', 'Imperative: stem.'),
    fill('Ik ben hier ___ mijn paspoort te verlengen.', ['om'], 'I am here to renew my passport.', 'om … te.'),
    fill('Ik heb gisteren ___ overwerken. (moeten)', ['moeten'], 'I had to work overtime yesterday.', 'Double infinitive.'),
    fill('Koken vind ik ___ leukst.', ['het'], 'I like cooking the most.', 'het + superlative.'),
    fill('Wat vind je ___? (of it)', ['ervan'], 'What do you think of it?', 'er + van.'),
    build('We are going camping next summer.', 'We gaan volgende zomer kamperen.', ['zullen', 'kamperen gaan'], 'gaan … kamperen.'),
    build('Have you ever been to Paris?', 'Ben je ooit in Parijs geweest?', ['Heb', 'gezijn'], 'zijn … geweest.'),
    build('If it rains, I will take the tram.', 'Als het regent, neem ik de tram.', ['ik neem', 'regent het'], 'als … regent; neem ik.'),
    build('Before I came here, I worked in London.', 'Voordat ik hier kwam, werkte ik in Londen.', ['ik werkte', 'Voor'], 'voordat … kwam; werkte ik.'),
    build('Can you call me back tomorrow?', 'Kun je me morgen terugbellen?', ['bel terug', 'teruggebeld'], 'terugbellen at the end.'),
    build('I would like to exchange this.', 'Ik wil dit graag ruilen.', ['ruil', 'wil ik'], 'wil … graag ruilen.'),
    build('There is no lift in the building.', 'Er is geen lift in het gebouw.', ['Het', 'niet'], 'er is geen.'),
    build('I am looking forward to the weekend.', 'Ik verheug me op het weekend.', ['mij op', 'verheugt'], 'verheug me op.'),
    fix('Ik heb naar huis gegaan.', ['Ik ben naar huis gegaan.'], 'gaan takes zijn.'),
    fix('Ik heb koorts sinds drie dagen.', ['Ik heb al drie dagen koorts.'], 'al + duration.'),
    fix('Vroeger ik woonde in een dorp.', ['Vroeger woonde ik in een dorp.'], 'Inversion after vroeger.'),
    fix('Hij is groter als ik.', ['Hij is groter dan ik.'], 'dan.'),
    fix('Ik ben niet tevreden met het.', ['Ik ben er niet tevreden mee.'], 'er … mee.'),
    tr('en-nl', 'I would like to make an appointment.', ['Ik wil graag een afspraak maken.'], 'wil graag … maken.'),
    tr('en-nl', 'What kind of work do you do?', ['Wat voor werk doe je?', 'Wat voor werk doet u?'], 'Fixed question.'),
    tr('nl-en', 'Nadat ik was afgestudeerd, ging ik een jaar reizen.', ['After I graduated, I went travelling for a year.', 'After I had graduated I travelled for a year.'], 'nadat; afgestudeerd.'),
    tr('nl-en', 'U kunt binnen zes weken bezwaar maken.', ['You can object within six weeks.', 'You can lodge an objection within six weeks.'], 'bezwaar maken.'),
    dict('Vorige week zijn we naar Texel gegaan en het was prachtig weer.', 'Last week we went to Texel and the weather was wonderful.', 'zijn … gegaan; was.'),
    dict('Ik moet de presentatie nog voorbereiden voordat de vergadering begint.', 'I still have to prepare the presentation before the meeting starts.', 'voorbereiden; voordat … begint.'),
    listen('Ik heb gesolliciteerd omdat ik dichter bij huis wil werken.', ['I applied because I want to work closer to home.', 'I resigned because I live too far away.', 'I applied because I want to earn more.'], 0, 'dichter bij huis.'),
    listen('Het spijt me, uw bestelling heeft een week vertraging.', ['I am sorry, your order is delayed by a week.', 'Your order was delivered a week ago.', 'Your order is cancelled.'], 0, 'een week vertraging.'),
    speak('Toen ik in Amsterdam kwam, sprak ik geen Nederlands. Nu kan ik een gesprek voeren.', 'When I came to Amsterdam I spoke no Dutch. Now I can hold a conversation.'),
    speak('Ik wil graag mijn afspraak verzetten omdat ik morgen moet werken.', 'I would like to move my appointment because I have to work tomorrow.'),
    read('Beste bewoners, op zaterdag 14 september organiseert de buurtvereniging een straatfeest. Vanaf 15.00 uur is er muziek, om 17.00 uur beginnen we met een gezamenlijke maaltijd. Iedereen neemt iets te eten mee. Wilt u helpen met opbouwen? Kom dan om 13.00 uur. Vanwege het feest kunt u die dag niet parkeren in de straat. Laat ons voor 10 september weten of u komt, zodat we genoeg tafels hebben. Met vriendelijke groet, het bestuur', [
      { q: 'What happens at 17.00?', options: ['the music starts', 'the shared meal starts', 'the setting up starts'], answer: 1, explain: '"om 17.00 uur beginnen we met een gezamenlijke maaltijd".' },
      { q: 'What should residents do before 10 September?', options: ['bring food', 'say whether they are coming', 'move their car'], answer: 1, explain: '"Laat ons voor 10 september weten of u komt".' },
      { q: 'Why is that needed?', options: ['so there are enough tables', 'so the music can start', 'so people can park'], answer: 0, explain: '"zodat we genoeg tafels hebben".' },
    ], { en: 'Dear residents, on Saturday 14 September the neighbourhood association is organising a street party. From 15.00 there is music, at 17.00 we start with a shared meal. Everyone brings something to eat. Would you like to help set up? Then come at 13.00. Because of the party you cannot park in the street that day. Let us know before 10 September whether you are coming, so that we have enough tables. Kind regards, the board' }),
  ];

  A.stage('s2', '2', 'A2', 'Elementary', 'The past and the future: perfect and simple past, plans with gaan and zullen, er, object pronouns, comparison and clauses with the verb at the end, across travel, health, housing, work, hobbies, shopping and email.', units, exam);
})();
