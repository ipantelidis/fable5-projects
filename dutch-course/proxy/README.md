# Coach proxy (optional)

A small Cloudflare Worker that lets the in-app coach answer free-text questions with Claude. The course works without it; the coach then answers from its built-in rules. Nothing here runs until the site owner deploys it and puts its URL in `js/config.js`.

Why a proxy: a static site cannot hold an API key. The worker keeps the key as a secret, only accepts calls from the course's origin, optionally requires a Supabase sign-in (the Cloud sync account), and can cap questions per day.

## Deploy

Needs Node 20+ and a Cloudflare account (the free plan is enough).

```
cd dutch-course/proxy
npm install
npx wrangler login
npm run secret:key          # paste the Anthropic API key
npm run deploy              # prints https://nederlands-nu-coach.<account>.workers.dev
```

Then:

1. In `wrangler.toml`, set `ALLOWED_ORIGINS` to the site origin (for GitHub Pages: `https://<user>.github.io`) and deploy again.
2. Put the worker URL in `coachProxyUrl` in `js/config.js`, run `python3 tools/bump-sw.py`, push.
3. Optional: set `REQUIRE_SIGN_IN = "true"` with the Supabase URL and anon key so only signed-in learners can ask; add a KV namespace binding named `RATE` to enforce `DAILY_LIMIT`.

## What is sent

The question, the last eight chat turns, an anonymous progress summary (level, XP, streak, lessons done, due cards, weak skill and rule, recent wrong answers, current challenge) and up to three grammar entries from the course. No name, email or user id goes to the model; the sign-in token is only used to check with Supabase that the caller is a user of this site.

## Cost

One question is roughly 2,500 input tokens and 100 to 300 output tokens on `claude-opus-5`, so around one cent. `DAILY_LIMIT` caps the worst case per learner.

## Test locally

```
npm run dev
curl -s http://localhost:8787 -X POST -H 'Origin: https://ipantelidis.github.io' -H 'Content-Type: application/json' \
  -d '{"question":"why is it ik ben gegaan and not ik heb gegaan?","summary":{"level":3,"streak":4},"grammar":[]}'
```

`wrangler dev` reads secrets from a `.dev.vars` file (`ANTHROPIC_API_KEY=sk-ant-...`); that file is git-ignored.
