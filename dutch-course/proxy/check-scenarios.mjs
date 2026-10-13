// Checks that the client scenario list (js/content/roleplay.js) and the server list (src/scenarios.js) have the same ids and levels.
import { readFileSync } from 'node:fs';
import { SCENARIOS } from './src/scenarios.js';
const window = { NL: { content: {} } };
new Function('window', readFileSync(new URL('../js/content/roleplay.js', import.meta.url), 'utf8'))(window);
const client = window.NL.content.roleplays; let bad = 0;
for (const r of client) { if (!SCENARIOS[r.id]) { console.log('missing on server:', r.id); bad++; } else if (SCENARIOS[r.id].level !== r.level) { console.log('level differs:', r.id); bad++; } }
for (const id of Object.keys(SCENARIOS)) if (!client.find((r) => r.id === id)) { console.log('missing in client:', id); bad++; }
console.log(bad ? bad + ' problem(s)' : 'scenarios in sync: ' + client.length); process.exit(bad ? 1 : 0);
