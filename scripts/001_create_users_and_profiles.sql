-- Create profiles table that extends auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  avatar_url text,
  -- Updated role check to include 'user' and default to 'user' instead of 'client'
  role text check (role in ('admin', 'user')) default 'user',
  organization_id uuid references public.organizations(id) on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

-- Profiles policies
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id or exists (
    select 1 from public.profiles p2 
    where p2.id = auth.uid() and p2.role = 'admin'
  ));

create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id or exists (
    select 1 from public.profiles p2 
    where p2.id = auth.uid() and p2.role = 'admin'
  ));

-- Create organizations table for multi-tenant support
create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  logo_url text,
  plan text check (plan in ('free', 'starter', 'pro', 'enterprise')) default 'free',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.organizations enable row level security;

-- Organizations policies
create policy "organizations_select_members"
  on public.organizations for select
  using (exists (
    select 1 from public.profiles 
    where profiles.organization_id = organizations.id 
    and profiles.id = auth.uid()
  ) or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'admin'
  ));

create policy "organizations_insert_own"
  on public.organizations for insert
  with check (auth.uid() is not null);

create policy "organizations_update_members"
  on public.organizations for update
  using (exists (
    select 1 from public.profiles 
    where profiles.organization_id = organizations.id 
    and profiles.id = auth.uid() 
    and profiles.role = 'admin'
  ));

-- Auto-create profile with automatic admin assignment for specific emails
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  user_role text;
begin
  -- Auto-assign admin role for specific email addresses
  if new.email in ('josephemsamah@gmail.com', 'info.watchmann@gmail.com') then
    user_role := 'admin';
  else
    user_role := 'user';
  end if;

  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', null),
    user_role
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
