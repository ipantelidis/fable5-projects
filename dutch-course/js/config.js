/* Site configuration. Leave the values empty to keep the course fully offline and account-free (the default).
   To enable optional cloud sync (PLAN.md 5a): create a Supabase project, run supabase/schema.sql, then fill in the two values below
   and serve the site over https. The anon key is public by design; row-level security in the schema protects each user's row.
   To enable the Claude-backed coach (PLAN.md 5c tier 2): deploy proxy/ (a Cloudflare Worker that holds the Anthropic key) and put
   its URL in coachProxyUrl. Without it, the coach answers from its built-in rules only. */
window.NL_CONFIG = {
  supabaseUrl: '',
  supabaseAnonKey: '',
  coachProxyUrl: '',
};
