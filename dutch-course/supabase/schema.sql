-- Nederlands Nu: one row per user holding the exported progress JSON.
-- Run this in the Supabase SQL editor once. Auth: enable Email (magic link) under Authentication > Providers,
-- and add your site URL (for example https://<user>.github.io/fable5-projects/dutch-course/) under Authentication > URL configuration.

create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

create policy "own row: read"   on public.progress for select using (auth.uid() = user_id);
create policy "own row: insert" on public.progress for insert with check (auth.uid() = user_id);
create policy "own row: update" on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own row: delete" on public.progress for delete using (auth.uid() = user_id);
