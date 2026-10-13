#!/bin/sh
# One-time setup for generating course audio (free, local): Python venv with Piper + LAME, the WebAssembly phonemizer,
# and the Dutch voice "pim" (nl_NL, medium). Nothing here is committed. Usage: sh tools/audio/setup.sh
set -e
cd "$(dirname "$0")"
python3 -m venv .venv && .venv/bin/pip install -q piper-tts==1.8.0 lameenc numpy
npm install --no-audit --no-fund >/dev/null
mkdir -p phonemizer voice
for e in wasm data; do [ -f phonemizer/piper_phonemize.$e ] || curl -sfL -o phonemizer/piper_phonemize.$e "https://cdn.jsdelivr.net/npm/@diffusionstudio/piper-wasm@1.0.0/build/piper_phonemize.$e"; done
for e in onnx onnx.json; do [ -f voice/nl_NL-pim-medium.$e ] || curl -sfL -o voice/nl_NL-pim-medium.$e "https://huggingface.co/rhasspy/piper-voices/resolve/main/nl/nl_NL/pim/medium/nl_NL-pim-medium.$e"; done
echo "audio tools ready"
