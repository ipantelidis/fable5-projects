#!/usr/bin/env python3
"""Generate course audio: every text in tools/audio/texts.json -> audio/<hh>/<hash>.mp3 and audio/index.json.
Voice: Piper "nl_NL-pim-medium" (open source, picked by a speech-recognition test: 95% word accuracy vs 92.5% for
the macOS Dutch voice). Incremental: existing files are kept. Run tools/audio/setup.sh once first, then:
    node tools/shots/collect-audio-texts.mjs && tools/audio/.venv/bin/python tools/audio/build.py [--prune]
The hash is FNV-1a 32-bit over the UTF-8 key and must match T.hash in js/engine/tts.js."""
import json, os, re, subprocess, sys, time
import numpy as np, lameenc
from piper import PiperVoice

HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
OUT = os.path.join(ROOT, 'audio'); WORK = os.path.join(HERE, 'work'); os.makedirs(WORK, exist_ok=True)
BITRATE = 24

def key(t): return re.sub(r'\s+', ' ', t).strip()
def fnv(t):
    h = 0x811c9dc5
    for b in key(t).encode('utf-8'): h = ((h ^ b) * 0x01000193) & 0xffffffff
    return '%08x' % h
def path_for(h): return os.path.join(OUT, h[:2], h + '.mp3')

def trim(a, sr, thr=0.012, pad=0.08):
    idx = np.where(np.abs(a) > thr)[0]
    if not len(idx): return a
    p = int(pad * sr); return a[max(0, idx[0] - p): min(len(a), idx[-1] + p)]

def mp3(a, sr):
    enc = lameenc.Encoder(); enc.set_bit_rate(BITRATE); enc.set_in_sample_rate(sr); enc.set_channels(1); enc.set_quality(2)
    pcm = (np.clip(a, -1, 1) * 32767).astype('<i2').tobytes()
    return enc.encode(pcm) + enc.flush()

texts = json.load(open(os.path.join(HERE, 'texts.json'), encoding='utf-8'))
seen = {}; todo = []
for t in texts:
    h = fnv(t)
    if h in seen and seen[h] != t: print('hash collision, skipped:', repr(t), 'vs', repr(seen[h])); continue
    seen[h] = t
    if not os.path.exists(path_for(h)): todo.append(t)
print(f'{len(texts)} texts, {len(todo)} to generate')
if todo:
    inp, outp = os.path.join(WORK, 'in.json'), os.path.join(WORK, 'ids.json')
    json.dump(todo, open(inp, 'w', encoding='utf-8'), ensure_ascii=False)
    subprocess.run(['node', os.path.join(HERE, 'phonemize.mjs'), inp, outp], check=True)
    ids = json.load(open(outp))
    voice = PiperVoice.load(os.path.join(HERE, 'voice', 'nl_NL-pim-medium.onnx')); sr = voice.config.sample_rate
    t0 = time.time()
    for i, (t, ph) in enumerate(zip(todo, ids)):
        a = trim(np.asarray(voice.phoneme_ids_to_audio(ph), dtype=np.float32), sr)
        f = path_for(fnv(t)); os.makedirs(os.path.dirname(f), exist_ok=True)
        open(f, 'wb').write(mp3(a, sr))
        if i % 500 == 0: print(f'  {i}/{len(todo)}  {time.time() - t0:.0f}s', flush=True)
present = sorted(h for h in seen if os.path.exists(path_for(h)))
if '--prune' in sys.argv:
    keep = set(present); n = 0
    for d in os.listdir(OUT):
        dp = os.path.join(OUT, d)
        if os.path.isdir(dp):
            for f in os.listdir(dp):
                if f.endswith('.mp3') and f[:-4] not in keep: os.remove(os.path.join(dp, f)); n += 1
    print('pruned', n)
json.dump(present, open(os.path.join(OUT, 'index.json'), 'w'), separators=(',', ':'))
size = sum(os.path.getsize(os.path.join(dp, f)) for d in os.listdir(OUT) if os.path.isdir(dp := os.path.join(OUT, d)) for f in os.listdir(dp))
print(f'index: {len(present)} recordings, {size / 1e6:.1f} MB')
