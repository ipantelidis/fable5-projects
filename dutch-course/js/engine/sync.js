/* Cloud sync (PLAN.md 5a): optional accounts and progress sync through Supabase.
   Dormant until js/config.js provides supabaseUrl and supabaseAnonKey. localStorage stays the source of truth on the device;
   the cloud holds one row per user with the same JSON as Export progress. Last writer wins by updatedAt, with a prompt when both changed. */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h;
  const S = (NL.sync = {});
  const CDN = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
  let client = null, user = null, loading = null, pushing = false, lastPushed = null, listeners = false;

  S.config = function () { const c = (window.NL_CONFIG || {}); return c.supabaseUrl && c.supabaseAnonKey ? c : null; };
  S.configured = () => !!S.config();
  S.user = () => user;
  S.status = () => (!S.configured() ? 'unconfigured' : !client ? 'idle' : user ? 'signed-in' : 'signed-out');

  function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.async = true; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src)); document.head.appendChild(s); }); }

  /** Create the client on demand (only on http(s) with config). Resolves to the client or null. */
  S.init = async function () {
    if (client) return client;
    const cfg = S.config();
    if (!cfg || !/^https?:/.test(location.protocol)) return null;
    if (!loading) loading = (async () => {
      if (!window.supabase) await loadScript(CDN);
      client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
      const { data } = await client.auth.getSession();
      user = data && data.session ? data.session.user : null;
      client.auth.onAuthStateChange((_evt, session) => { user = session ? session.user : null; U.emit('sync', S.status()); if (user) S.pull({ interactive: true }); });
      if (!listeners) {
        listeners = true;
        U.on('state', () => { if (user) S.pushSoon(); });
        document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && user) S.pull({ interactive: false }); });
      }
      return client;
    })();
    return loading;
  };

  S.signIn = async function (email) {
    const c = await S.init(); if (!c) throw new Error('Cloud sync is not configured on this site.');
    const redirect = location.href.split('#')[0];
    const { error } = await c.auth.signInWithOtp({ email, options: { emailRedirectTo: redirect } });
    if (error) throw error;
    return true;
  };
  S.signOut = async function () { const c = await S.init(); if (!c) return; await c.auth.signOut(); user = null; U.emit('sync', S.status()); };

  function localStamp() { return NL.state.get().updatedAt || NL.state.get().created || ''; }

  /** Push the whole state; debounced through pushSoon */
  S.push = async function () {
    const c = await S.init(); if (!c || !user || pushing) return false;
    pushing = true;
    try {
      const state = NL.state.get();
      const stamp = state.updatedAt || new Date().toISOString();
      const { error } = await c.from('progress').upsert({ user_id: user.id, state, updated_at: stamp }, { onConflict: 'user_id' });
      if (error) throw error;
      lastPushed = stamp;
      U.emit('sync', 'pushed');
      return true;
    } catch (e) { console.warn('sync push failed', e); U.emit('sync', 'error'); return false; }
    finally { pushing = false; }
  };
  S.pushSoon = U.debounce(() => S.push(), 4000);

  /** Pull the cloud row and merge: newer wins; if both changed since the last push, ask (interactive) or keep local (silent). */
  S.pull = async function (opts) {
    opts = opts || {};
    const c = await S.init(); if (!c || !user) return null;
    try {
      const { data, error } = await c.from('progress').select('state, updated_at').eq('user_id', user.id).maybeSingle();
      if (error) throw error;
      if (!data) { await S.push(); return 'pushed-first'; }
      const remote = data.updated_at || '', local = localStamp();
      if (remote === local) return 'same';
      const localChanged = lastPushed ? local > lastPushed : NL.state.get().xp > 0;
      if (remote > local) {
        if (localChanged && opts.interactive) {
          const useCloud = confirm('Your progress in the cloud is newer than on this device, but this device also has unsaved changes.\n\nOK = use the cloud version (this device’s newer changes are lost).\nCancel = keep this device and overwrite the cloud.');
          if (!useCloud) { NL.state.get().updatedAt = new Date().toISOString(); await S.push(); return 'kept-local'; }
        }
        NL.state.importJSON(JSON.stringify({ state: data.state }));
        lastPushed = remote;
        U.emit('sync', 'pulled');
        if (NL.app && NL.app.render) NL.app.render();
        U.toast('☁️ Progress loaded from the cloud', 'ok');
        return 'pulled';
      }
      await S.push();
      return 'pushed';
    } catch (e) { console.warn('sync pull failed', e); U.emit('sync', 'error'); return null; }
  };

  /* --------------------------------------------------------------- settings card */
  S.card = function () {
    const card = h('div.card', h('h3', '☁️ Cloud sync (optional)'));
    if (!S.configured()) {
      card.appendChild(h('p.muted.small', 'Not set up on this site. Progress stays in this browser; use Export and Import to move it. To enable accounts, the site owner fills in js/config.js (see README, section Cloud sync).'));
      return card;
    }
    if (!/^https?:/.test(location.protocol)) { card.appendChild(h('p.muted.small', 'Cloud sync works when the site is served over https, not from a local file.')); return card; }
    const body = h('div');
    card.appendChild(body);
    function render() {
      U.clear(body);
      const st = S.status();
      if (st === 'signed-in') {
        body.appendChild(h('p.small', 'Signed in as ', h('b', user.email || user.id), '. Progress is saved to the cloud a few seconds after every change and loaded when you open the site on another device.'));
        body.appendChild(h('div.row', h('button.btn.btn-sm', { type: 'button', onclick: async () => { const r = await S.pull({ interactive: true }); U.toast(r === 'pulled' ? 'Loaded from cloud' : r ? 'Up to date' : 'Sync failed', r ? 'ok' : 'bad'); render(); } }, 'Sync now'), h('button.btn.btn-sm.btn-ghost', { type: 'button', onclick: async () => { await S.signOut(); U.toast('Signed out'); render(); } }, 'Sign out')));
      } else {
        const inp = h('input.input', { type: 'email', placeholder: 'you@example.com', 'aria-label': 'Email address', required: true, style: { maxWidth: '280px' } });
        const form = h('form.row', { onsubmit: async (e) => { e.preventDefault(); try { await S.signIn(inp.value.trim()); body.appendChild(h('p.small', { style: { color: 'var(--ok)' } }, 'Check your email for a sign-in link. Open it on this device.')); } catch (err) { body.appendChild(h('p.small', { style: { color: 'var(--bad)' } }, 'Could not send the link: ' + err.message)); } } }, inp, h('button.btn.btn-sm.btn-primary', { type: 'submit' }, 'Send sign-in link'));
        body.appendChild(h('p.muted.small', 'Sign in with an email link to keep your progress in sync across devices. Only the progress file is stored, nothing else.'));
        body.appendChild(form);
        if (st === 'idle') S.init().then(render).catch(() => {});
      }
    }
    render();
    U.on('sync', render);
    return card;
  };

  /* boot hook: pull silently when a session exists */
  S.boot = function () { if (S.configured() && /^https?:/.test(location.protocol)) S.init().then(() => { if (user) S.pull({ interactive: true }); }).catch(() => {}); };
})();
