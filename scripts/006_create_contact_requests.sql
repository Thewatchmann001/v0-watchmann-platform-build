-- Contact requests captured from the public/contact page
create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  organization text,
  description text not null,
  created_at timestamptz default now()
);

alter table public.contact_requests enable row level security;

-- Allow anyone (including unauthenticated) to insert contact requests
create policy "contact_requests_insert_any"
  on public.contact_requests for insert
  with check (true);

-- Allow admins to select requests
create policy "contact_requests_select_admin"
  on public.contact_requests for select
  using (exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'admin'
  ));
