/* Sound effects generated with Web Audio (no files) */
(function () {
  'use strict';
  const NL = window.NL;
  let ctx = null;
  function ac() {
    if (!ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); }
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }
  function muted() { const s = NL.state.get(); return s && s.settings.mute; }
  function tone(freq, t0, dur, type, gain) {
    const c = ac(); if (!c) return;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(freq, c.currentTime + t0);
    g.gain.setValueAtTime(0.0001, c.currentTime + t0);
    g.gain.exponentialRampToValueAtTime(gain || 0.18, c.currentTime + t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + t0 + dur);
    o.connect(g).connect(c.destination);
    o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + dur + 0.05);
  }
  NL.sfx = {
    unlock() { ac(); },
    correct() { if (muted()) return; tone(660, 0, 0.12, 'sine'); tone(880, 0.09, 0.16, 'sine'); },
    wrong() { if (muted()) return; tone(220, 0, 0.18, 'triangle', 0.14); tone(180, 0.12, 0.2, 'triangle', 0.12); },
    combo(n) { if (muted()) return; const base = 660 + Math.min(n, 8) * 60; tone(base, 0, 0.1); tone(base * 1.25, 0.08, 0.1); tone(base * 1.5, 0.16, 0.18); },
    tap() { if (muted()) return; tone(520, 0, 0.05, 'square', 0.05); },
    levelUp() { if (muted()) return; [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.11, 0.25, 'sine', 0.16)); },
    badge() { if (muted()) return; [784, 988, 1175].forEach((f, i) => tone(f, i * 0.09, 0.3, 'triangle', 0.12)); },
    finish() { if (muted()) return; [523, 659, 784, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.1, 0.22, 'sine', 0.15)); },
    tick() { if (muted()) return; tone(1000, 0, 0.03, 'square', 0.04); },
  };
})();
