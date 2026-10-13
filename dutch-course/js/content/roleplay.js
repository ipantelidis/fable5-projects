/* AI role-play scenarios, client side: titles, goals and the character's opening line (shown without an API call).
   The role descriptions live in proxy/src/scenarios.js; node proxy/check-scenarios.mjs keeps the ids in sync. */
(function () {
  'use strict';
  const C = window.NL.content;
  const R = (id, level, icon, title, who, goal, opening, openingEn) => ({ id, level, icon, title, who, goal, opening, openingEn });
  C.roleplays = [
    R('bakkerij', 'A1', '\u{1F956}', 'At the bakery', 'Bakker', 'Order bread and something sweet, and pay.', 'Goedemorgen! Wat mag het zijn?', 'Good morning! What would you like?'),
    R('cafe', 'A1', '☕', 'In a café', 'Ober', 'Order a drink and something to eat, then ask for the bill.', 'Hallo, welkom! Wat wilt u drinken?', 'Hello, welcome! What would you like to drink?'),
    R('huisarts', 'A2', '\u{1FA7A}', 'Calling the doctor', 'Doktersassistente', 'Explain your symptoms and get an appointment.', 'Huisartsenpraktijk De Linde, goedemorgen. Waarmee kan ik u helpen?', 'De Linde GP practice, good morning. How can I help you?'),
    R('bezichtiging', 'A2', '\u{1F3E0}', 'Viewing a flat', 'Verhuurder', 'Ask at least three questions about the flat and say if you are interested.', 'Welkom! Kom binnen. Dit is de woonkamer. Wat vindt u ervan?', 'Welcome! Come in. This is the living room. What do you think of it?'),
    R('gemeente', 'A2', '\u{1F3DB}️', 'At the town hall', 'Baliemedewerker', 'Register your new address.', 'Goedemiddag. U komt voor een verhuizing, toch? Mag ik uw identiteitsbewijs zien?', 'Good afternoon. You are here about a move, right? May I see your ID?'),
    R('sollicitatie', 'B1', '\u{1F4BC}', 'Job interview', 'Teamleider', 'Get through a short interview for a customer service job.', 'Goedemiddag, fijn dat u er bent. Vertelt u eerst eens iets over uzelf.', 'Good afternoon, nice that you could come. First tell me something about yourself.'),
    R('klacht', 'B1', '\u{1F4E6}', 'Making a complaint', 'Klantenservice', 'Explain that your washing machine arrived damaged and agree a solution.', 'Klantenservice, u spreekt met Joyce. Waarmee kan ik u van dienst zijn?', 'Customer service, this is Joyce. How can I be of service?'),
    R('stelling', 'B2', '⚖️', 'Debate: a four-day week', 'Collega', 'Defend your view on "everyone should work four days a week" with at least four arguments.', 'Ik las net dat er weer gepleit wordt voor een vierdaagse werkweek voor iedereen. Ik vind dat eerlijk gezegd onzin. Jij?', 'I just read that people are arguing again for a four-day week for everyone. Honestly, I think that is nonsense. You?'),
  ];
})();
