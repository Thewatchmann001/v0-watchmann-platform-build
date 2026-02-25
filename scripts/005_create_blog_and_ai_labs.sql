-- Blog posts table
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  cover_image_url text,
  author_id uuid not null references auth.users(id) on delete cascade,
  category text,
  tags text[] default array[]::text[],
  is_published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.blog_posts enable row level security;

create policy "blog_posts_select_published"
  on public.blog_posts for select
  using (is_published = true or author_id = auth.uid() or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role in ('superadmin', 'agency')
  ));

create policy "blog_posts_insert_author"
  on public.blog_posts for insert
  with check (author_id = auth.uid() and exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role in ('superadmin', 'agency')
  ));

create policy "blog_posts_update_author"
  on public.blog_posts for update
  using (author_id = auth.uid() or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

create policy "blog_posts_delete_author"
  on public.blog_posts for delete
  using (author_id = auth.uid() or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

-- AI Labs projects table
create table if not exists public.ai_labs_projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  long_description text,
  category text check (category in ('nlp', 'computer_vision', 'generative_ai', 'ml_ops', 'other')) not null,
  thumbnail_url text,
  demo_url text,
  github_url text,
  tech_stack text[] default array[]::text[],
  is_featured boolean default false,
  is_active boolean default true,
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.ai_labs_projects enable row level security;

create policy "ai_labs_select_active"
  on public.ai_labs_projects for select
  using (is_active = true or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role in ('superadmin', 'agency')
  ));

create policy "ai_labs_insert_admin"
  on public.ai_labs_projects for insert
  with check (exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role in ('superadmin', 'agency')
  ));

create policy "ai_labs_update_admin"
  on public.ai_labs_projects for update
  using (exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role in ('superadmin', 'agency')
  ));

create policy "ai_labs_delete_admin"
  on public.ai_labs_projects for delete
  using (exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));
