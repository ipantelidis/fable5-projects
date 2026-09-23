/* App: router, header, global shortcuts, boot */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h;
  const app = (NL.app = {});

  const routes = [
    [/^\/?$|^\/home$/, (host) => NL.views.home(host), 'home'],
    [/^\/stage\/([\w-]+)$/, (host, id) => NL.views.stage(host, id), 'home'],
    [/^\/unit\/([\w-]+)$/, (host, id) => NL.views.unit(host, id), 'home'],
    [/^\/lesson\/([\w-]+)$/, (host, id) => NL.lesson.open(id, host), 'home'],
    [/^\/unit-review\/([\w-]+)$/, (host, id) => NL.review.unit(id, host), 'home'],
    [/^\/exam\/([\w-]+)$/, (host, id) => NL.review.exam(id, host), 'home'],
    [/^\/placement$/, (host) => NL.review.placement(host), 'settings'],
    [/^\/review$/, (host) => reviewIntro(host), 'review'],
    [/^\/review\/go$/, (host) => NL.review.start(host), 'review'],
    [/^\/mode\/speed$/, (host) => NL.review.speed(host), 'home'],
    [/^\/mode\/sprint$/, (host) => NL.review.sprint(host), 'home'],
    [/^\/mode\/listening$/, (host) => NL.review.listening(host), 'home'],
    [/^\/mode\/speaking$/, (host) => NL.review.speaking(host), 'home'],
    [/^\/mode\/freetalk(?:\/([\w-]+))?$/, (host, id) => NL.review.freetalk(host, id), 'home'],
    [/^\/fluency$/, (host) => NL.fluency.hub(host), 'home'],
    [/^\/challenge$/, (host) => NL.fluency.challengeView(host), 'home'],
    [/^\/bank(?:\/([\w-]+))?$/, (host, id) => NL.fluency.bankView(host, id), 'dictionary'],
    [/^\/grammar(?:\/([\w-]+))?$/, (host, id) => NL.views.grammar(host, id), 'grammar'],
    [/^\/dictionary$/, (host) => NL.views.dictionary(host), 'dictionary'],
    [/^\/badges$/, (host) => NL.views.badges(host), 'home'],
    [/^\/settings$/, (host) => NL.views.settings(host), 'settings'],
    [/^\/about$/, (host) => NL.views.about(host), 'settings'],
  ];

  function reviewIntro(host) {
    const due = NL.srs.dueCount(), dv = NL.srs.dueCount('vocab'), dg = NL.srs.dueCount('grammar');
    const cards = Object.values(NL.state.get().srs.cards).filter((c) => c.seen > 0);
    host.appendChild(h('h1', 'Review'));
    host.appendChild(h('p.muted', 'Spaced repetition keeps what you learned. Items you get wrong come back sooner and in more exercise types.'));
    host.appendChild(h('div.stats', h('div.stat', h('div.n', String(due)), h('div.l', 'due today')), h('div.stat', h('div.n', String(dv)), h('div.l', 'words')), h('div.stat', h('div.n', String(dg)), h('div.l', 'grammar rules')), h('div.stat', h('div.n', String(cards.length)), h('div.l', 'cards total'))));
    host.appendChild(h('div.row', { style: { marginTop: '24px' } }, h('a.btn.btn-primary.btn-lg', { href: '#/review/go' }, due ? 'Review ' + U.plural(Math.min(due, 20), 'item') : 'Practice the weakest items'), h('a.btn', { href: '#/home' }, 'Home')));
    const weak = NL.srs.weakest(8, 'vocab').filter((c) => c.lapses > 0);
    if (weak.length) {
      const card = h('div.card', { style: { marginTop: '24px' } }, h('h3', 'Your trickiest words'));
      weak.forEach((c) => { const v = NL.content.vocab[c.id]; if (v) card.appendChild(h('div.ex-item', h('div', NL.ui.dutch(NL.gen.display(v))), h('div.en', v.en + ' · ' + U.plural(c.lapses, 'slip')))); });
      host.appendChild(card);
    }
    const upcoming = {};
    cards.forEach((c) => { if (c.due > U.today()) upcoming[c.due] = (upcoming[c.due] || 0) + 1; });
    const days = Object.keys(upcoming).sort().slice(0, 7);
    if (days.length) host.appendChild(h('p.muted.small', { style: { marginTop: '16px' } }, 'Coming up: ' + days.map((d) => d.slice(5) + ' (' + upcoming[d] + ')').join(' · ')));
  }

  app.render = function () {
    const hash = location.hash.replace(/^#/, '') || '/home';
    const host = U.$('#view');
    if (NL.session.active()) NL.session.stop();
    NL.tts.stop(); NL.stt.stop();
    U.clear(host);
    let matched = false;
    for (const [re, fn, nav] of routes) {
      const m = re.exec(hash);
      if (m) { matched = true; setNav(nav); try { fn(host, m[1]); } catch (e) { console.error(e); host.appendChild(h('div.notice', 'Something went wrong rendering this screen: ' + e.message)); } break; }
    }
    if (!matched) { setNav('home'); host.appendChild(h('div.card', h('h2', 'Page not found'), h('a.btn', { href: '#/home' }, 'Home'))); }
    app.updateHeader();
    U.$('#word-dialog').hidden = true;
    if (!/\/lesson\//.test(hash)) window.scrollTo(0, 0);
  };
  function setNav(name) { U.$$('.nav a').forEach((a) => a.classList.toggle('active', a.dataset.nav === name)); }

  app.updateHeader = function () {
    const s = NL.state.get();
    const lvl = NL.game.level();
    const el = U.$('#header-stats');
    U.clear(el);
    el.appendChild(h('span.chip', { title: 'Level ' + lvl.n + ': ' + lvl.title }, '⭐ ' + s.xp));
    el.appendChild(h('span.chip', { title: 'Day streak' }, '\u{1F525} ' + NL.game.streakCurrent()));
    const due = NL.srs.dueCount();
    const badge = U.$('#nav-due');
    badge.hidden = !due; badge.textContent = String(due);
  };

  app.applyTheme = function () {
    const t = NL.state.get().settings.theme || 'auto';
    document.documentElement.setAttribute('data-theme', t);
  };

  function onKey(e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    const dlg = U.$('#word-dialog');
    if (!dlg.hidden) return;
    const sess = NL.session.active();
    if (sess && sess.key && sess.key(e)) { e.preventDefault(); return; }
    const inInput = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement && document.activeElement.tagName);
    if (e.key === ' ' && !inInput && !(document.activeElement && document.activeElement.tagName === 'BUTTON')) { if (NL.tts.replay()) e.preventDefault(); }
  }

  function boot() {
    NL.state.load();
    app.applyTheme();
    window.addEventListener('hashchange', app.render);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', () => NL.sfx.unlock(), { once: true });
    U.on('badge', (b) => { if (b) U.toast(b.icon + ' Badge: ' + b.name, 'badge'); });
    U.on('levelup', (l) => U.toast('\u{1F389} Level ' + l.n + ': ' + l.title, 'level'));
    U.on('goal', () => U.toast('\u{1F3AF} Daily goal reached!', 'ok'));
    U.on('state', app.updateHeader);
    NL.game.checkBadges();
    if (!location.hash) location.hash = '#/home';
    app.render();
    // offline support on http(s) only: service workers do not run from file://
    if (/^https?:/.test(location.protocol) && 'serviceWorker' in navigator) { navigator.serviceWorker.register('./sw.js').catch(() => {}); }
    // self-test hook for tools/browser-test.js
    window.__NL_READY = true;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
