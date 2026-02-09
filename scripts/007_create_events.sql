-- Generic event tracking table
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  source_path text,
  user_id uuid references auth.users(id) on delete set null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

alter table public.events enable row level security;

-- Insert allowed for anyone
create policy "events_insert_any"
  on public.events for insert
  with check (true);

-- Select allowed for admins only
create policy "events_select_admin"
  on public.events for select
  using (exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'admin'
  ));
