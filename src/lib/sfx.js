// Simple retro SFX manager using WebAudio API
// Sounds: open (ascend), close (descend), error (buzz)

const LS_KEY = "retroSounds"; // '1' | '0'

class SFX {
  constructor() {
    this._ctx = null;
    this._enabled = this._initialEnabled();
    this._gainNode = null;
  }

  _initialEnabled() {
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved === "1") return true;
      if (saved === "0") return false;
      // Default: enabled unless prefers-reduced-motion is reduce
      return !matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      return true;
    }
  }

  get enabled() { return this._enabled; }
  setEnabled(v) {
    this._enabled = !!v;
    try { localStorage.setItem(LS_KEY, this._enabled ? "1" : "0"); } catch {}
  }

  _ensureCtx() {
    if (this._ctx) return this._ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    const ctx = new AC();
    // master gain, very low volume for subtle SFX
    const gain = ctx.createGain();
    gain.gain.value = 0.03;
    gain.connect(ctx.destination);
    this._ctx = ctx;
    this._gainNode = gain;
    return ctx;
  }

  async _resume() {
    try {
      const ctx = this._ensureCtx();
      if (!ctx) return false;
      if (ctx.state === "suspended") await ctx.resume();
      return true;
    } catch {
      return false;
    }
  }

  async _beepSequence(steps) {
    if (!this._enabled) return;
    if (!(await this._resume())) return;
    const ctx = this._ctx;

    let t = ctx.currentTime;
    for (const s of steps) {
      const osc = ctx.createOscillator();
      const env = ctx.createGain();
      env.gain.value = 0.0001;
      env.gain.setTargetAtTime(0.0001, t, 0.001);
      env.connect(this._gainNode);

      osc.type = s.type || "square";
      osc.frequency.value = s.freq;
      osc.connect(env);

      // Simple AR envelope
      const att = s.attack ?? 0.004;
      const rel = s.release ?? 0.06;
      const dur = s.duration ?? 0.08;
      env.gain.setTargetAtTime(0.04, t, att);
      env.gain.setTargetAtTime(0.0001, t + Math.max(0.01, dur - rel), rel);

      osc.start(t);
      osc.stop(t + dur);

      t += (s.wait ?? dur * 0.9);
    }
  }

  open() {
    // Two ascending blips
    this._beepSequence([
      { freq: 880, duration: 0.07 },
      { freq: 1320, duration: 0.09, wait: 0.08 },
    ]);
  }
  close() {
    // Two descending blips
    this._beepSequence([
      { freq: 660, duration: 0.07 },
      { freq: 440, duration: 0.09, wait: 0.08 },
    ]);
  }
  error() {
    // Fast trill/buzz effect
    this._beepSequence([
      { freq: 220, duration: 0.05 },
      { freq: 280, duration: 0.05, wait: 0.04 },
      { freq: 220, duration: 0.05, wait: 0.04 },
    ]);
  }
}

let __sfxSingleton = null;
export function getSfx() {
  if (!__sfxSingleton) {
    __sfxSingleton = new SFX();
    // expose for toggles
    try { window.__sfx = __sfxSingleton; } catch {}
  }
  return __sfxSingleton;
}

// Optional: allow other scripts to query
export function isSfxEnabled() {
  return getSfx().enabled;
}
export function setSfxEnabled(v) {
  getSfx().setEnabled(v);
}
