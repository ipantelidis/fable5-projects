/* Site configuration. Leave the values empty to keep the course fully offline and account-free (the default).
   To enable optional cloud sync (PLAN.md 5a): create a Supabase project, run supabase/schema.sql, then fill in the two values below
   and serve the site over https. The anon key is public by design; row-level security in the schema protects each user's row.
   To enable the Claude-backed coach (PLAN.md 5c tier 2): deploy proxy/ (a Cloudflare Worker that holds the Anthropic key) and put
   its URL in coachProxyUrl. Without it, the coach answers from its built-in rules only. */
window.NL_CONFIG = {
  supabaseUrl: 'https://dnpudkcyfdroipvndtql.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucHVka2N5ZmRyb2lwdm5kdHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NzgzMTEsImV4cCI6MjEwNzQ1NDMxMX0.PuvcxbfZuccfS2JW2Y8aGEx-L2Qc6sDmNZL2xWOBcMU',
  // Sign-in buttons for providers enabled in Supabase (Authentication > Providers), for example ['github', 'google'].
  // They need no email sending and no domain. Leave empty to offer only the email link.
  authProviders: [],
  coachProxyUrl: '',
  // Where "Report a problem" under each exercise sends learners (a pre-filled GitHub issue). Empty hides the link.
  reportUrl: 'https://github.com/ipantelidis/fable5-projects/issues/new',
};
