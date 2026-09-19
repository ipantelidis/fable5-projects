#!/bin/sh
# Content validator without node: uses macOS's built-in JavaScriptCore via osascript.
# Usage: sh tools/validate-jxa.sh
cd "$(dirname "$0")/.." || exit 2
FILES="js/engine/util.js js/engine/checker.js js/content/index.js js/engine/gen.js js/engine/validator.js $(grep -o 'js/content/stage[^"]*\.js' index.html | tr '\n' ' ')"
OUT="${TMPDIR:-/tmp}/nl-validate-$$.js"
{
  echo 'var window = this; var self = this; window.window = window;'
  echo 'var document = { createElement: function(){ return { style:{}, classList:{add:function(){},remove:function(){},toggle:function(){}}, setAttribute:function(){}, appendChild:function(){}, addEventListener:function(){} }; }, querySelector: function(){ return null; }, body:{} };'
  echo 'var navigator = { userAgent: "jxa" }; var location = { protocol: "file:", hash: "" };'
  echo 'var localStorage = { getItem:function(){return null;}, setItem:function(){}, removeItem:function(){} };'
  echo 'var matchMedia = function(){ return { matches:false, addEventListener:function(){} }; };'
  echo 'var setTimeout = function(f){ return 0; }; var clearTimeout = function(){};'
  echo 'var __out = [];'
  echo 'var console = { log: function(){ __out.push(Array.prototype.slice.call(arguments).join(" ")); }, error: function(){ __out.push("ERR " + Array.prototype.slice.call(arguments).join(" ")); }, warn: function(){} };'
  for f in $FILES; do echo "/* ---- $f ---- */"; echo 'try {'; cat "$f"; echo "} catch (e) { __out.push('Load error in $f: ' + e.message + ' (line ' + e.line + ')'); }"; done
  cat <<'JS'
try {
  NL.state = { get: function(){ return { srs:{cards:{}}, settings:{} }; } };
  var r = NL.validate();
  __out.push('Counts: ' + JSON.stringify(r.counts));
  if (r.warnings.length) { __out.push('\nWarnings (' + r.warnings.length + '):'); r.warnings.forEach(function(w){ __out.push('  - ' + w); }); }
  if (r.errors.length) { __out.push('\nErrors (' + r.errors.length + '):'); r.errors.forEach(function(e){ __out.push('  x ' + e); }); }
  else __out.push('\nOK: no content errors.');
  NL.content.stages.forEach(function(st){
    var lessons = 0, exs = 0, vocab = {};
    st.units.forEach(function(u){ u.lessons.forEach(function(l){ lessons++; exs += (l.practice||[]).reduce(function(n,e){ return n + (e.type==='auto'? e.n : 1); }, 0) + (l.test||[]).length; (l.vocab||[]).forEach(function(v){ vocab[v]=1; }); }); });
    __out.push('  ' + st.id + ' ' + st.title + ': ' + st.units.length + ' units, ' + lessons + ' lessons, ' + exs + ' exercises, ' + Object.keys(vocab).length + ' vocab');
  });
  __out.push('  dictionary total: ' + Object.keys(NL.content.vocab).length + ' words, grammar rules: ' + Object.keys(NL.content.grammar).length);
} catch (e) { __out.push('Validator crashed: ' + e.message + ' line ' + e.line); }
__out.join('\n');
JS
} > "$OUT"
osascript -l JavaScript "$OUT"
rm -f "$OUT"
