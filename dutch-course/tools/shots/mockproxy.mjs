// Local stand-in for the coach proxy: same request/response shapes, canned answers. For browser tests only.
import http from 'node:http';
http.createServer((req, res) => {
  const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Content-Type': 'application/json' };
  if (req.method === 'OPTIONS') { res.writeHead(204, cors); return res.end(); }
  let b = ''; req.on('data', (c) => (b += c)); req.on('end', () => {
    const body = JSON.parse(b || '{}'); let out;
    if (body.mode === 'roleplay') out = { mode: 'roleplay', data: { reply: 'Natuurlijk. Wilt u wit of bruin brood?', replyEn: 'Of course. Would you like white or brown bread?', correction: body.question.includes('wil een') ? '' : 'Ik wil graag een brood.', explanation: body.question.includes('wil een') ? '' : 'Use "willen" with "graag" for a polite request; the verb comes second.', hint: 'Bruin brood, alstublieft.', done: false } };
    else if (body.mode === 'write') out = { mode: 'write', data: { corrected: 'Gisteren ben ik naar de markt gegaan.', mistakes: [{ original: 'ik heb gegaan', correction: 'ik ben gegaan', explanation: 'Verbs of movement towards a place take "zijn" in the perfect tense.' }], comment: 'Clear and on topic. Watch the auxiliary with movement verbs.', better: 'Gisteren ben ik naar de markt gegaan om groente te kopen.', score: 4 } };
    else out = { answer: 'Mock coach answer.' };
    res.writeHead(200, cors); res.end(JSON.stringify(out));
  });
}).listen(8787, () => console.log('mock proxy on 8787'));
