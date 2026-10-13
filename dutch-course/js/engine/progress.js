/* Progress: weekly totals from the day log, a level estimate, the #/progress page (with an 8-week chart), and a
   "your week in Dutch" card on the home screen during the first days of a new week. */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h;
  const P = (NL.progress = {});
  const FIELDS = ['xp', 'answers', 'correct', 'ms', 'newWords', 'newRules', 'lessons', 'reviews', 'voice'];
  const monday = (k) => NL.fluency.monday(k || U.today());
  const fmtDay = (k) => new Date(k + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const mins = (ms) => Math.round((ms || 0) / 60000);

  /** Totals for the week starting on the given Monday */
  P.week = function (mon) {
    const log = NL.state.get().dayLog || {};
    const t = { monday: mon, activeDays: 0 }; FIELDS.forEach((f) => { t[f] = 0; });
    for (let i = 0; i < 7; i++) { const d = log[U.addDays(mon, i)]; if (!d) continue; FIELDS.forEach((f) => { t[f] += d[f] || 0; }); if ((d.xp || 0) > 0) t.activeDays++; }
    t.minutes = mins(t.ms); t.accuracy = t.answers ? Math.round((t.correct / t.answers) * 100) : null;
    return t;
  };
  P.weeks = function (n) { const out = []; let m = monday(); for (let i = 0; i < n; i++) { out.unshift(P.week(m)); m = U.addDays(m, -7); } return out; };

  /** Where the learner is: the stage they are working through, and the highest stage exam passed */
  P.level = function () {
    const s = NL.state.get(); const stages = NL.content.stages.filter((x) => !x.hub);
    const passed = stages.filter((st) => (s.exams[st.id] || 0) >= 70);
    const nxt = NL.coach && NL.coach.nextLesson();
    const working = nxt ? nxt.stage : stages[stages.length - 1];
    return { working, passed: passed.length ? passed[passed.length - 1] : null, text: (nxt ? 'Working on ' + working.cefr + ' (' + working.title + ')' : 'All stages finished') + (passed.length ? ' · passed the ' + passed[passed.length - 1].cefr + ' exam' : '') };
  };

  function tile(n, label, delta) {
    return h('div.stat', h('div.n', String(n)), h('div.l', label), delta ? h('div.delta.' + (delta.startsWith('+') ? 'up' : delta.startsWith('-') ? 'down' : 'same'), delta) : null);
  }
  const diff = (a, b, unit) => (b == null || a == null || (!a && !b) ? null : a === b ? 'same as last week' : (a > b ? '+' : '-') + Math.abs(a - b) + (unit || '') + ' vs last week');

  function weekTiles(w, prev) {
    return h('div.stats.stats-5',
      tile(w.minutes + ' min', 'practised', prev ? diff(w.minutes, prev.minutes, ' min') : null),
      tile(w.newWords, 'new words', prev ? diff(w.newWords, prev.newWords) : null),
      tile(w.lessons, 'lessons', null),
      tile(w.accuracy == null ? '–' : w.accuracy + '%', 'accuracy', prev && w.accuracy != null && prev.accuracy != null ? diff(w.accuracy, prev.accuracy, ' pts') : null),
      tile(w.activeDays + '/7', 'days active', null));
  }
  function verdict(w, prev) {
    if (!w.xp) return 'A quiet week. Ten minutes today is enough to get going again.';
    if (w.activeDays >= 5) return 'Five or more days: that is how languages stick. Keep this rhythm.';
    if (prev && w.minutes > prev.minutes) return 'More practice than the week before. Nice upward trend.';
    if (w.accuracy != null && w.accuracy >= 85) return 'High accuracy: you could take on new lessons a little faster.';
    return 'Short daily sessions beat one long one. Aim for a little every day this week.';
  }

  /** Home card: last week's summary, shown Monday to Wednesday until dismissed */
  P.weekCard = function () {
    const s = NL.state.get(); s.coach = s.coach || {};
    const mon = monday(); const last = P.week(U.addDays(mon, -7));
    if (!last.xp || s.coach.weekSeen === mon || U.daysBetween(mon, U.today()) > 2) return null;
    const before = P.week(U.addDays(mon, -14));
    const card = h('div.card.week-card');
    card.appendChild(h('div.row.row-between', h('div.eyebrow.m-0', 'Your week in Dutch · ' + fmtDay(last.monday) + ' to ' + fmtDay(U.addDays(last.monday, 6))),
      h('button.btn-icon', { type: 'button', 'aria-label': 'Close weekly summary', onclick: () => { s.coach.weekSeen = mon; NL.state.save(); card.remove(); } }, '×')));
    card.appendChild(weekTiles(last, before.xp ? before : null));
    card.appendChild(h('p.mt-2', verdict(last, before.xp ? before : null), ' ', h('a', { href: '#/progress' }, 'See all your progress')));
    return card;
  };

  /** Bar chart of XP per week (single series: no legend; hover/focus tooltip; table alternative for screen readers) */
  function weekChart(weeks) {
    const max = Math.max(50, ...weeks.map((w) => w.xp));
    const wrap = h('figure.wk-chart', { 'aria-label': 'XP per week, last ' + weeks.length + ' weeks' });
    const tip = h('div.wk-tip', { role: 'status', hidden: true });
    const plot = h('div.wk-plot');
    weeks.forEach((w, i) => {
      const current = i === weeks.length - 1;
      const text = 'Week of ' + fmtDay(w.monday) + ': ' + w.xp + ' XP · ' + w.minutes + ' min · ' + w.newWords + ' new words';
      const col = h('div.wk-col' + (current ? '.current' : ''), { tabindex: '0', 'aria-label': text },
        current && w.xp ? h('span.wk-val', String(w.xp)) : null,
        h('div.wk-bar', { style: { height: Math.max(w.xp ? 3 : 0, Math.round((w.xp / max) * 100)) + '%' } }),
        h('span.wk-lbl', current ? 'this week' : fmtDay(w.monday)));
      const show = () => { tip.textContent = text; tip.hidden = false; tip.style.left = Math.min(70, Math.max(0, (i / weeks.length) * 100 - 10)) + '%'; };
      col.addEventListener('mouseenter', show); col.addEventListener('focus', show);
      col.addEventListener('mouseleave', () => { tip.hidden = true; }); col.addEventListener('blur', () => { tip.hidden = true; });
      plot.appendChild(col);
    });
    wrap.appendChild(tip); wrap.appendChild(plot);
    const table = h('table.sr-only', h('caption', 'XP per week'), h('tr', h('th', 'Week of'), h('th', 'XP'), h('th', 'Minutes'), h('th', 'New words')), ...weeks.map((w) => h('tr', h('td', fmtDay(w.monday)), h('td', String(w.xp)), h('td', String(w.minutes)), h('td', String(w.newWords)))));
    wrap.appendChild(table);
    return wrap;
  }

  P.view = function (host) {
    const s = NL.state.get(); const lvl = P.level();
    const weeks = P.weeks(8); const cur = weeks[weeks.length - 1], prev = weeks[weeks.length - 2];
    host.appendChild(h('div.eyebrow', 'Progress'));
    host.appendChild(h('h1', 'Your progress'));
    host.appendChild(h('p.lead', lvl.text + '.'));
    host.appendChild(NL.views.section('This week', null, weekTiles(cur, prev.xp ? prev : null), h('p.muted.small.mt-2', verdict(cur, prev.xp ? prev : null))));
    host.appendChild(NL.views.section('XP per week', null, h('div.card', weekChart(weeks))));
    // words and totals
    const cards = Object.values(s.srs.cards || {});
    const words = cards.filter((c) => c.kind === 'vocab');
    const total = Object.keys(NL.content.vocab).length;
    const totalMs = Object.values(s.dayLog || {}).reduce((n, d) => n + (d.ms || 0), 0);
    host.appendChild(NL.views.section('Words', { href: '#/dictionary', text: 'Dictionary' },
      h('div.stats', tile(NL.srs.knownWords(), 'known'), tile(NL.srs.learningWords(), 'learning'), tile(words.length, 'met so far'), tile(total, 'in the course')),
      NL.views.bar(U.pct(NL.srs.knownWords(), total), 'ok', 'Share of course words known')));
    // accuracy by exercise type
    const acc = NL.coach ? NL.coach.typeAccuracy(28) : {};
    const types = Object.keys(acc).filter((t) => acc[t].n >= 5).sort((a, b) => acc[a].ok / acc[a].n - acc[b].ok / acc[b].n);
    const accCard = h('div.card');
    if (types.length) {
      accCard.appendChild(h('p.muted.small', 'Last four weeks, weakest first. Practise the top ones on purpose.'));
      const list = h('div.skills');
      types.forEach((t) => { const pct = Math.round((acc[t].ok / acc[t].n) * 100); list.appendChild(h('div.skill', h('span', NL.exercises.label(t)), NL.views.bar(pct, pct >= 85 ? 'ok' : '', NL.exercises.label(t) + ' accuracy'), h('span.muted.small', pct + '%'))); });
      accCard.appendChild(list);
    } else accCard.appendChild(h('p.muted.m-0', 'After a few lessons this shows which exercise types are hardest for you.'));
    host.appendChild(NL.views.section('Accuracy by exercise type', null, accCard));
    host.appendChild(NL.views.section('All time', null, h('div.stats',
      tile(Math.round(totalMs / 3600000 * 10) / 10 + ' h', 'practised'), tile(s.stats.answers, 'answers'), tile(s.stats.voice || 0, 'spoken answers'),
      tile(s.streak.best, 'best streak'), tile(Object.values(s.lessons).filter((l) => l.done).length, 'lessons done'), tile(s.stats.bestCombo || 0, 'best combo'))));
  };
})();
