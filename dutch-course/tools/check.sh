#!/bin/sh
# Runs every check and exits non-zero if any fails: content validator, engine smoke test, and (when Node + Playwright are
# installed in tools/shots) the browser test that answers every exercise. Use before every commit: sh tools/check.sh
cd "$(dirname "$0")/.." || exit 1
fail=0
if command -v node >/dev/null 2>&1; then
  for f in js/*.js js/engine/*.js js/content/*.js sw.js; do node --check "$f" 2>/tmp/nl-syntax.txt || { echo "SYNTAX ERROR in $f"; head -5 /tmp/nl-syntax.txt; fail=1; }; done
  [ -f proxy/check-scenarios.mjs ] && (node proxy/check-scenarios.mjs >/dev/null || { echo "role-play scenarios out of sync"; fail=1; })
fi
V=$(sh tools/validate-jxa.sh 2>&1); echo "$V" | tail -1
echo "$V" | grep -q "OK: no content errors" || { echo "$V" | grep -i error | head -20; fail=1; }
S=$(sh tools/smoke-jxa.sh 2>&1); echo "$S" | grep "SUMMARY"
echo "$S" | grep -q "SUMMARY fails=0" || { echo "$S" | grep FAIL; fail=1; }
if [ -d tools/shots/node_modules/playwright ]; then
  B=$(cd tools/shots && node allex.mjs 2>&1); echo "$B" | grep -E "exercises run|failures|page errors"
  echo "$B" | grep -q "failures: 0" && echo "$B" | grep -q "page errors: none" || { echo "$B" | tail -20; fail=1; }
fi
[ $fail = 0 ] && echo "ALL CHECKS PASSED" || echo "CHECKS FAILED"
exit $fail
