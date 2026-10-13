/* Sound pairs (pronunciation trainer): minimal pairs for the Dutch contrasts English speakers find hardest.
   Every pair is two real Dutch words that differ in one sound. Used by js/engine/sounds.js (#/sounds). */
(function () {
  'use strict';
  const C = window.NL.content;
  const P = (a, aEn, b, bEn) => ({ a, aEn, b, bEn });
  C.soundSets = [
    { id: 'ui-ou-eu', icon: '\u{1F444}', title: 'ui, ou and eu', level: 'A0',
      tip: 'ui has no English equivalent: start from the a in "hat", round your lips tightly and slide towards a rounded u. ou/au is like "ow" in "how" but with rounder lips. eu is a long, rounded sound like the French "peu": say "ay" with lips pushed forward, and do not let it glide.',
      pairs: [P('huid', 'skin', 'houd', 'I hold'), P('buit', 'loot', 'bout', 'bolt'), P('kuis', 'chaste', 'kous', 'sock'), P('buik', 'belly', 'beuk', 'beech'), P('luis', 'louse', 'leus', 'slogan')] },
    { id: 'ij-ee', icon: '\u{1F441}️', title: 'ij/ei and ee', level: 'A0',
      tip: 'ij and ei sound the same: open like the e in "bed" and glide towards ee, close to "ay" in "say" but starting lower. ee is one long, steady sound, like "ay" without the glide at the end. Keep your jaw still on ee.',
      pairs: [P('mijn', 'my', 'meen', 'I mean'), P('wijs', 'wise', 'wees', 'orphan'), P('lijn', 'line', 'leen', 'I lend'), P('kijk', 'I look', 'keek', 'looked'), P('bijt', 'I bite', 'beet', 'bit'), P('rijd', 'I drive', 'reed', 'drove')] },
    { id: 'eu-uu', icon: '\u{1F6AA}', title: 'eu and uu', level: 'A1',
      tip: 'Both are rounded front vowels. uu is "ee" with tightly rounded lips (French "tu"). eu is lower and more open: "ay" with rounded lips. If your lips are not rounded, Dutch speakers hear ee or ie.',
      pairs: [P('deur', 'door', 'duur', 'expensive'), P('beurt', 'turn', 'buurt', 'neighbourhood'), P('keur', 'choice', 'kuur', 'course of treatment'), P('zeur', 'I whine', 'zuur', 'sour')] },
    { id: 'short-long', icon: '⏱️', title: 'short and long vowels', level: 'A0',
      tip: 'Dutch vowel length changes the word. A single vowel before two consonants is short (man, zon); a double vowel is long (maan, zoon). Short a is like the a in "father" but clipped; long aa is held and more open.',
      pairs: [P('man', 'man', 'maan', 'moon'), P('pen', 'pen', 'peen', 'carrot'), P('bot', 'bone', 'boot', 'boat'), P('zon', 'sun', 'zoon', 'son'), P('tak', 'branch', 'taak', 'task'), P('vel', 'sheet (of paper)', 'veel', 'a lot')] },
    { id: 'i-ie', icon: '\u{1F41F}', title: 'i and ie', level: 'A0',
      tip: 'i is short and lax, like "i" in "bit". ie is tense and high, like "ee" in "see" but shorter, except before r where it is long (bier).',
      pairs: [P('lip', 'lip', 'liep', 'walked'), P('vis', 'fish', 'vies', 'dirty'), P('rit', 'ride', 'riet', 'reed'), P('zit', 'I sit', 'ziet', 'sees')] },
    { id: 'oe-oo', icon: '\u{1F462}', title: 'oe and oo', level: 'A0',
      tip: 'oe is the "oo" in "food": lips tight and round. oo is the "oa" in "boat" without the glide: rounder and held steady. Do not say "oh-oo".',
      pairs: [P('boer', 'farmer', 'boor', 'drill'), P('koel', 'cool', 'kool', 'cabbage'), P('boet', 'atones', 'boot', 'boat'), P('goed', 'good', 'goot', 'gutter')] },
    { id: 'g-k-h', icon: '\u{1F5E3}️', title: 'g, k and h', level: 'A0',
      tip: 'The Dutch g is a friction sound at the back of the mouth, like clearing your throat softly (in the south it is softer). It is never the English g in "go". k is a short stop without the puff of English k. h is just breath.',
      pairs: [P('goud', 'gold', 'koud', 'cold'), P('gast', 'guest', 'kast', 'cupboard'), P('gat', 'hole', 'kat', 'cat'), P('goed', 'good', 'hoed', 'hat'), P('geel', 'yellow', 'heel', 'whole')] },
    { id: 'w-v-f', icon: '\u{1F30A}', title: 'w, v and f', level: 'A1',
      tip: 'Dutch w is made with the lower lip touching the upper teeth lightly, between English v and w. v is often almost an f in the north, but softer. f is fully voiceless. Listen for the softness at the start.',
      pairs: [P('wol', 'wool', 'vol', 'full'), P('wat', 'what', 'vat', 'barrel'), P('wel', 'well', 'vel', 'sheet'), P('waar', 'where', 'vaar', 'I sail'), P('vee', 'cattle', 'fee', 'fairy')] },
  ];
})();
