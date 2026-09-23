/* Nederlands Nu coach proxy (PLAN.md 5c, tier 2). A Cloudflare Worker that holds the Anthropic API key, checks the caller's
   origin (and optionally their Supabase sign-in), builds a short system prompt with the learner's progress summary and the
   grammar entries the app selected, asks Claude, and returns plain text. The app falls back to its offline coach on any error. */
import Anthropic from '@anthropic-ai/sdk';

const SYSTEM = `You are the coach inside "Nederlands Nu", a self-study Dutch course for English speakers that goes from A0 to B2 in six stages
(Stage 0 survival, 1 A1, 2 A2, 3 B1, 4 B2 and the Staatsexamen NT2 II, 5 fluency hub with weekly challenges, a vocabulary bank and free talk).
The app has: lessons (explicit grammar, then vocabulary, then practice, then a short test), spaced repetition review (cards come back after
1, 3, 7... days; wrong answers reset), speaking exercises with the browser's speech recognition (or self-grading), stage exams that unlock the
next stage (70% passes), a daily XP goal, streaks, badges, and settings. Routes you may link with plain text like #/review/go, #/mode/freetalk,
#/mode/speaking, #/challenge, #/bank, #/grammar/<id>, #/lesson/<id>, #/settings.

How to answer:
- Be a warm, concrete coach. Short answers: two to six sentences, or a short list. English, with Dutch examples in the Dutch sentence itself.
- Explain grammar with the rule first, then one or two minimal-pair examples, then the trap learners fall into.
- Use the learner's progress summary to personalise: point at the due reviews, the weak rule, the next lesson, the streak. Never invent
  progress that is not in the summary and never claim to have changed anything in the app.
- When a grammar excerpt from the course is supplied, prefer its terminology and tell the learner they can reread it (#/grammar/<id>).
- Stay on Dutch and this course. For anything else, say in one line that you only coach Dutch here.
- Plain text only: paragraphs separated by a blank line, "- " for bullets. No headings, no tables, no markdown emphasis.`;

const json = (status, body, cors) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...cors } });

function corsFor(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  const ok = allowed.includes(origin) || allowed.includes('*');
  return { ok, headers: ok ? { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Max-Age': '86400', Vary: 'Origin' } : {} };
}

/** Verify a Supabase access token by asking the auth server who it belongs to. Returns the user id or null. */
async function verifyUser(request, env) {
  const auth = request.headers.get('Authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!token || !env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) return null;
  try {
    const r = await fetch(env.SUPABASE_URL.replace(/\/$/, '') + '/auth/v1/user', { headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: 'Bearer ' + token } });
    if (!r.ok) return null;
    const u = await r.json();
    return u && u.id ? u.id : null;
  } catch (e) { return null; }
}

/** Per-day counter in KV when the binding exists; otherwise no limit */
async function overLimit(env, key) {
  if (!env.RATE) return false;
  const limit = parseInt(env.DAILY_LIMIT || '40', 10);
  const day = new Date().toISOString().slice(0, 10);
  const k = 'n:' + day + ':' + key;
  const n = parseInt((await env.RATE.get(k)) || '0', 10) + 1;
  await env.RATE.put(k, String(n), { expirationTtl: 60 * 60 * 26 });
  return n > limit;
}

function clean(body) {
  const question = typeof body.question === 'string' ? body.question.trim().slice(0, 600) : '';
  const history = Array.isArray(body.history) ? body.history.slice(-8).filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string').map((m) => ({ role: m.role, content: m.content.slice(0, 1500) })) : [];
  const grammar = Array.isArray(body.grammar) ? body.grammar.slice(0, 3).map((g) => ({ id: String(g.id || '').slice(0, 60), title: String(g.title || '').slice(0, 120), text: String(g.text || '').slice(0, 1500) })) : [];
  let summary = '';
  try { summary = JSON.stringify(body.summary || {}).slice(0, 4000); } catch (e) { summary = '{}'; }
  return { question, history, grammar, summary };
}

export default {
  async fetch(request, env) {
    const cors = corsFor(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: cors.ok ? 204 : 403, headers: cors.headers });
    if (!cors.ok) return json(403, { error: 'Origin not allowed' }, cors.headers);
    if (request.method !== 'POST') return json(405, { error: 'POST only' }, cors.headers);
    if (!env.ANTHROPIC_API_KEY) return json(500, { error: 'The coach service has no API key configured' }, cors.headers);

    const userId = await verifyUser(request, env);
    if (env.REQUIRE_SIGN_IN === 'true' && !userId) return json(401, { error: 'Sign in (Settings, Cloud sync) to use the AI coach' }, cors.headers);

    let body;
    try { body = await request.json(); } catch (e) { return json(400, { error: 'Bad JSON' }, cors.headers); }
    const { question, history, grammar, summary } = clean(body);
    if (!question) return json(400, { error: 'Empty question' }, cors.headers);

    const who = userId || request.headers.get('CF-Connecting-IP') || 'anon';
    if (await overLimit(env, who)) return json(429, { error: 'Daily limit for the AI coach reached; try again tomorrow' }, cors.headers);

    // Static system prompt first, then the per-request context, then the conversation.
    const context = ['Learner progress summary (JSON): ' + summary]
      .concat(grammar.map((g) => 'Course grammar entry "' + g.title + '" (id ' + g.id + '): ' + g.text))
      .join('\n\n');
    const messages = history.concat([{ role: 'user', content: context + '\n\nQuestion: ' + question }]);

    const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
    try {
      const res = await client.beta.messages.create({
        model: env.MODEL || 'claude-opus-5',
        max_tokens: 1024,
        thinking: { type: 'adaptive' },
        output_config: { effort: 'low' },
        betas: ['server-side-fallback-2026-07-01'],
        fallbacks: 'default',
        system: SYSTEM,
        messages,
      });
      if (res.stop_reason === 'refusal') return json(200, { answer: 'I can only coach Dutch here. Ask me about a rule, a word, or what to do next.' }, cors.headers);
      const answer = res.content.filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
      if (!answer) return json(502, { error: 'Empty answer from the model' }, cors.headers);
      return json(200, { answer, model: res.model, usage: { in: res.usage.input_tokens, out: res.usage.output_tokens } }, cors.headers);
    } catch (err) {
      if (err instanceof Anthropic.RateLimitError) return json(429, { error: 'The coach is busy; try again in a minute' }, cors.headers);
      if (err instanceof Anthropic.AuthenticationError) return json(500, { error: 'The coach service key is invalid' }, cors.headers);
      if (err instanceof Anthropic.APIStatusError) return json(502, { error: 'Claude API error ' + err.status }, cors.headers);
      if (err instanceof Anthropic.APIConnectionError) return json(502, { error: 'Could not reach the Claude API' }, cors.headers);
      return json(500, { error: 'Unexpected proxy error' }, cors.headers);
    }
  },
};
