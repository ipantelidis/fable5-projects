/* AI practice through the coach proxy (PLAN.md 5c tier 2): role-play conversations (#/roleplay) and writing feedback
   (#/write, plus a button inside writing exercises). Dormant until js/config.js sets coachProxyUrl; every screen says so
   and points to the offline alternative. The proxy holds the scenario roles, so the browser only sends ids and text. */
(function () {
  'use strict';
  const NL = window.NL, U = NL.util, h = U.h, T = NL.tts;
  const AI = (NL.ai = {});
  const MAX_TURNS = 12;

  AI.configured = () => !!(NL.coach && NL.coach.aiUrl && NL.coach.aiUrl());
  AI.post = async function (body) {
    const url = NL.coach.aiUrl(); if (!url) throw new Error('The AI coach is not switched on for this site');
    const headers = { 'Content-Type': 'application/json' };
    const token = NL.sync && NL.sync.token ? await NL.sync.token() : null;
    if (token) headers.Authorization = 'Bearer ' + token;
    let res; try { res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) }); } catch (e) { throw new Error('No connection to the coach service'); }
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.error) throw new Error(data.error || ('The coach service answered ' + res.status));
    return data.data;
  };
  function offlineNote() {
    return h('div.notice.notice-info', h('b', 'AI practice is not switched on for this site. '), 'It needs the coach service described in the README. Meanwhile, ', h('a', { href: '#/mode/freetalk' }, 'Free talk'), ' gives you speaking topics with model answers, and every writing exercise has a model answer and checklist.');
  }

  /* ------------------------------------------------------------- role-play */
  AI.roleplay = function (host, id) {
    const list = NL.content.roleplays || [];
    if (!id) {
      host.appendChild(h('div.eyebrow', 'Speaking practice'));
      host.appendChild(h('h1', 'Role-play conversations'));
      host.appendChild(h('p.muted', 'Have a real conversation in Dutch with a baker, a doctor\'s assistant, a landlord or an interviewer. Type or speak your answers; after each one you see a correction if something was off.'));
      if (!AI.configured()) host.appendChild(offlineNote());
      const s = NL.state.get(); s.roleplays = s.roleplays || {};
      const grid = h('div.grid');
      list.forEach((r) => grid.appendChild(h('a.card.stage-card', { href: '#/roleplay/' + r.id }, h('div.row.row-between', h('span', { style: { fontSize: '1.6rem' }, 'aria-hidden': 'true' }, r.icon), h('span.pill' + (s.roleplays[r.id] ? '.pill-ok' : ''), s.roleplays[r.id] ? '✓ ' + r.level : r.level)), h('h3', r.title), h('p.muted.small', r.goal))));
      host.appendChild(grid);
      return;
    }
    const r = list.find((x) => x.id === id);
    if (!r) { host.appendChild(h('p', 'Scenario not found. ', h('a', { href: '#/roleplay' }, 'All scenarios'))); return; }
    host.appendChild(h('div.eyebrow', h('a', { href: '#/roleplay' }, 'Role-play'), ' · ' + r.level));
    host.appendChild(h('h1', r.icon + ' ' + r.title));
    host.appendChild(h('p.lead', 'Goal: ' + r.goal));
    if (!AI.configured()) { host.appendChild(offlineNote()); return; }
    const history = [{ role: 'user', content: '(start)' }, { role: 'assistant', content: r.opening }];
    let turns = 0, finished = false, lastHint = '', autoSpeak = true, usedMic = false;
    const log = h('div.coach-chat.rp-log');
    const say = (text, en) => {
      const enEl = h('div.story-en', { hidden: true }, en || '');
      const tr = en ? h('button.story-tr', { type: 'button', title: 'Translation' }, 'EN') : null;
      if (tr) tr.addEventListener('click', () => { enEl.hidden = !enEl.hidden; tr.classList.toggle('on', !enEl.hidden); });
      const m = h('div.msg.coach', h('div.rp-who', r.who), h('div.rp-line', h('div.story-nl', NL.ui.dutch(text)), tr), enEl);
      log.appendChild(m); m.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      if (autoSpeak) T.speak(text);
    };
    const mine = (text) => { const m = h('div.msg.me', h('p', text)); log.appendChild(m); m.scrollIntoView({ block: 'nearest' }); return m; };
    say(r.opening, r.openingEn);
    host.appendChild(log);
    const inp = h('input.input', { type: 'text', placeholder: 'Antwoord in het Nederlands…', 'aria-label': 'Your answer in Dutch', lang: 'nl', maxlength: 400, autocomplete: 'off' });
    const send = h('button.btn.btn-primary', { type: 'submit' }, 'Send');
    const hintBtn = h('button.btn.btn-sm.btn-ghost', { type: 'button' }, 'Need a hint?');
    const hintBox = h('div.notice.notice-info', { hidden: true });
    hintBtn.addEventListener('click', () => { hintBox.hidden = false; U.clear(hintBox); hintBox.appendChild(h('span', 'You could say: ')); hintBox.appendChild(NL.ui.dutch(lastHint || 'Kunt u dat herhalen, alstublieft?')); });
    const speakToggle = h('button.btn.btn-sm.btn-ghost', { type: 'button', 'aria-pressed': 'true' }, '\u{1F50A} Read replies aloud: on');
    speakToggle.addEventListener('click', () => { autoSpeak = !autoSpeak; speakToggle.setAttribute('aria-pressed', String(autoSpeak)); speakToggle.textContent = '\u{1F50A} Read replies aloud: ' + (autoSpeak ? 'on' : 'off'); if (!autoSpeak) T.stop(); });
    const row = h('form.row.rp-input', inp);
    if (NL.stt.supported()) {
      const mic = h('button.btn', { type: 'button', 'aria-label': 'Speak your answer' }, '\u{1F399}️');
      mic.addEventListener('click', () => { mic.disabled = true; inp.placeholder = 'Listening…'; T.stop(); NL.stt.listen({ maxMs: 9000, onresult: (t) => { inp.value = t; }, onend: (t) => { mic.disabled = false; inp.placeholder = 'Antwoord in het Nederlands…'; if (t) { inp.value = t; usedMic = true; } }, onerror: () => { mic.disabled = false; inp.placeholder = 'Antwoord in het Nederlands…'; U.toast('The microphone did not start.'); } }); });
      row.appendChild(mic);
    }
    row.appendChild(send);
    row.addEventListener('submit', async (e) => {
      e.preventDefault(); const text = inp.value.trim(); if (!text || finished) return;
      inp.value = ''; hintBox.hidden = true; send.disabled = true;
      const m = mine(text);
      const wait = h('div.msg.coach', h('p.muted', '…')); log.appendChild(wait);
      try {
        const d = await AI.post({ mode: 'roleplay', scenario: r.id, level: r.level, history: history.slice(-14), question: text });
        wait.remove(); turns++;
        if (d.correction) m.appendChild(h('div.rp-fix', h('b', '✎ '), NL.ui.dutch(d.correction), d.explanation ? h('div.small', d.explanation) : null));
        else m.appendChild(h('div.rp-ok', '✓'));
        history.push({ role: 'user', content: text }, { role: 'assistant', content: d.reply });
        lastHint = d.hint || '';
        NL.game.answer({ correct: !d.correction, type: 'speak', skill: 'speaking', voice: usedMic, xp: 5 }); usedMic = false;
        say(d.reply, d.replyEn);
        if (d.done || turns >= MAX_TURNS) end(d.done);
      } catch (err) { wait.remove(); m.appendChild(h('div.small.muted', 'Not sent: ' + err.message)); inp.value = text; }
      finally { send.disabled = finished; NL.app.updateHeader && NL.app.updateHeader(); if (!finished) inp.focus(); }
    });
    function end(reached) {
      finished = true; inp.disabled = true; send.disabled = true;
      const s = NL.state.get(); s.roleplays = s.roleplays || {}; s.roleplays[r.id] = { date: U.today(), turns }; NL.state.save();
      host.appendChild(h('div.card.mt-4', { style: { textAlign: 'center' } }, h('h3', reached ? 'Goed gedaan! Goal reached.' : 'Time to wrap up.'), h('p.muted', turns + ' turns. Look back at the corrections above: they are the most useful part.'), h('div.row', { style: { justifyContent: 'center' } }, h('a.btn.btn-primary', { href: '#/roleplay/' + r.id, onclick: () => setTimeout(() => NL.app.render(), 0) }, 'Again'), h('a.btn', { href: '#/roleplay' }, 'Other scenarios'))));
    }
    host.appendChild(row);
    host.appendChild(h('div.row.row-between.mt-2', hintBtn, speakToggle));
    host.appendChild(hintBox);
  };

  /* ------------------------------------------------------------- writing feedback */
  /** Feedback panel for the proxy's write answer */
  AI.feedbackEl = function (d) {
    const box = h('div.card.ai-feedback');
    box.appendChild(h('div.row.row-between', h('h3.m-0', 'Feedback'), h('span.pill' + (d.score >= 4 ? '.pill-ok' : d.score <= 2 ? '.pill-warn' : ''), 'Task ' + Math.max(1, Math.min(5, d.score || 3)) + '/5')));
    box.appendChild(h('p', d.comment));
    if (d.mistakes && d.mistakes.length) {
      const ul = h('ul.ai-mistakes');
      d.mistakes.forEach((m) => ul.appendChild(h('li', h('span.bad-text', m.original), ' → ', h('b', m.correction), h('div.small.muted', m.explanation))));
      box.appendChild(ul);
    } else box.appendChild(h('p.muted', 'No real mistakes found.'));
    box.appendChild(h('details', h('summary', 'Your text, corrected'), h('div.story-nl.mt-2', NL.ui.dutch(d.corrected))));
    box.appendChild(h('details', h('summary', 'A model version at your level'), h('div.story-nl.mt-2', NL.ui.dutch(d.better))));
    return box;
  };
  AI.feedbackButton = function (getText, task, level, mount) {
    if (!AI.configured()) return null;
    const b = h('button.btn.btn-sm.btn-primary', { type: 'button' }, '✨ Get feedback from the coach');
    b.addEventListener('click', async () => {
      const text = getText(); if (text.trim().length < 15) { U.toast('Write a few sentences first'); return; }
      b.disabled = true; b.textContent = 'Reading your text…';
      try { const d = await AI.post({ mode: 'write', task, text, level }); U.clear(mount); mount.appendChild(AI.feedbackEl(d)); NL.game.addXP(10); b.textContent = '✨ Get feedback again'; }
      catch (err) { U.toast(err.message, 'bad'); b.textContent = '✨ Get feedback from the coach'; }
      finally { b.disabled = false; }
    });
    return b;
  };

  /** Writing page: every writing task in the course, with drafts kept per task */
  AI.tasks = function () {
    const out = [];
    for (const x of NL.contentApi.allLessons()) for (const e of [...(x.lesson.practice || []), ...(x.lesson.test || [])]) if (e.type === 'write') out.push({ id: x.lesson.id + '-' + out.length, level: x.stage.cefr, lesson: x.lesson.title, ex: e });
    return out;
  };
  AI.writing = function (host, id) {
    const tasks = AI.tasks(); const s = NL.state.get(); s.writing = s.writing || {};
    if (!id) {
      host.appendChild(h('div.eyebrow', 'Writing practice'));
      host.appendChild(h('h1', 'Writing'));
      host.appendChild(h('p.muted', AI.configured() ? 'Pick a task, write your text, and the coach corrects it and explains each mistake. Drafts are kept in this browser.' : 'Pick a task, write your text, then compare it with the model answer and checklist. Drafts are kept in this browser.'));
      ['A1', 'A2', 'B1', 'B2'].forEach((lv) => {
        const mine = tasks.filter((t) => t.level === lv); if (!mine.length) return;
        const list = h('div.ref-list');
        mine.forEach((t) => list.appendChild(h('a.dict-row.write-row', { href: '#/write/' + t.id }, h('div', h('div.hw', t.ex.prompt.slice(0, 90) + (t.ex.prompt.length > 90 ? '…' : '')), h('div.en', t.lesson)), s.writing[t.id] ? h('span.pill.pill-ok', 'draft') : h('span'))));
        host.appendChild(NL.views.section(lv, null, list));
      });
      return;
    }
    const t = tasks.find((x) => x.id === id);
    if (!t) { host.appendChild(h('p', 'Task not found. ', h('a', { href: '#/write' }, 'All tasks'))); return; }
    host.appendChild(h('div.eyebrow', h('a', { href: '#/write' }, 'Writing'), ' · ' + t.level + ' · ' + t.lesson));
    host.appendChild(h('h1', 'Writing task'));
    host.appendChild(h('div.card', h('p.m-0', t.ex.prompt)));
    const ta = h('textarea.input.write-area', { lang: 'nl', rows: 9, placeholder: 'Schrijf hier je tekst…', 'aria-label': 'Your text' });
    ta.value = (s.writing[id] && s.writing[id].text) || '';
    const count = h('span.muted.small');
    const upd = () => { count.textContent = (ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0) + ' words'; };
    ta.addEventListener('input', U.debounce(() => { s.writing[id] = { text: ta.value, date: U.today() }; NL.state.save(); }, 600)); ta.addEventListener('input', upd); upd();
    host.appendChild(h('div.mt-4', ta, h('div.row.row-between.mt-2', count)));
    const mount = h('div.mt-4');
    const modelBtn = h('button.btn.btn-sm', { type: 'button' }, 'Show model answer and checklist');
    modelBtn.addEventListener('click', () => { modelBtn.hidden = true; mount.appendChild(h('div.card', h('div.eyebrow', 'Model answer'), h('div.story-nl', NL.ui.dutch(t.ex.model)), t.ex.modelEn ? h('p.muted.small', t.ex.modelEn) : null, h('div.eyebrow.mt-4', 'Checklist'), h('ul.learn-list', ...t.ex.checklist.map((c) => h('li', c))))); });
    const fb = AI.feedbackButton(() => ta.value, t.ex.prompt, t.level, mount);
    host.appendChild(h('div.row', fb, modelBtn));
    if (!AI.configured()) host.appendChild(h('p.muted.small.mt-2', 'AI corrections appear here when the site owner switches on the coach service.'));
    host.appendChild(mount);
  };
})();
