#!/usr/bin/env python3
"""Register a new content file in index.html, tools/test.html and tools/validate.js.
Usage: python3 tools/register-content.py js/content/NEW.js js/content/AFTER.js"""
import sys, os
new, after = sys.argv[1], sys.argv[2]
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
def patch(path, old, add):
    p = os.path.join(root, path); s = open(p).read()
    if add.strip() in s: return print(path, 'already registered')
    assert old in s, (path, old)
    open(p, 'w').write(s.replace(old, old + add, 1)); print(path, 'ok')
patch('index.html', '  <script src="%s"></script>\n' % after, '  <script src="%s"></script>\n' % new)
patch('tools/test.html', '  <script src="../%s"></script>\n' % after, '  <script src="../%s"></script>\n' % new)
patch('tools/validate.js', "'%s'" % after, ", '%s'" % new)
