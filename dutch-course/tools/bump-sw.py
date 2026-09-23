#!/usr/bin/env python3
"""Bump the service-worker cache version (run after any change to engine, content or css). Usage: python3 tools/bump-sw.py"""
import re, os, datetime
p = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'sw.js')
s = open(p).read()
today = datetime.date.today().isoformat()
m = re.search(r"const VERSION = 'nl-(\d{4}-\d{2}-\d{2})-(\d+)';", s)
n = int(m.group(2)) + 1 if m and m.group(1) == today else 1
s = re.sub(r"const VERSION = 'nl-[^']+';", "const VERSION = 'nl-%s-%d';" % (today, n), s, count=1)
open(p, 'w').write(s); print('sw.js VERSION = nl-%s-%d' % (today, n))
