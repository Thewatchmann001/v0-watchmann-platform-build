-- Projects table for client project management
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  description text,
  status text check (status in ('planning', 'in_progress', 'review', 'completed', 'on_hold')) default 'planning',
  start_date date,
  end_date date,
  budget decimal(10, 2),
  client_id uuid references auth.users(id) on delete set null,
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.projects enable row level security;

create policy "projects_select_members"
  on public.projects for select
  using (exists (
    select 1 from public.profiles 
    where profiles.organization_id = projects.organization_id 
    and profiles.id = auth.uid()
  ) or client_id = auth.uid());

create policy "projects_insert_agency"
  on public.projects for insert
  with check (exists (
    select 1 from public.profiles 
    where profiles.organization_id = projects.organization_id 
    and profiles.id = auth.uid() 
    and profiles.role in ('superadmin', 'agency')
  ));

create policy "projects_update_agency"
  on public.projects for update
  using (exists (
    select 1 from public.profiles 
    where profiles.organization_id = projects.organization_id 
    and profiles.id = auth.uid() 
    and profiles.role in ('superadmin', 'agency')
  ));

create policy "projects_delete_agency"
  on public.projects for delete
  using (exists (
    select 1 from public.profiles 
    where profiles.organization_id = projects.organization_id 
    and profiles.id = auth.uid() 
    and profiles.role in ('superadmin', 'agency')
  ));

-- Tasks table for project tasks
create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  description text,
  status text check (status in ('todo', 'in_progress', 'review', 'completed')) default 'todo',
  priority text check (priority in ('low', 'medium', 'high', 'urgent')) default 'medium',
  assigned_to uuid references auth.users(id) on delete set null,
  due_date date,
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.tasks enable row level security;

create policy "tasks_select_members"
  on public.tasks for select
  using (exists (
    select 1 from public.projects p
    join public.profiles pr on pr.organization_id = p.organization_id
    where p.id = tasks.project_id and pr.id = auth.uid()
  ) or exists (
    select 1 from public.projects p
    where p.id = tasks.project_id and p.client_id = auth.uid()
  ));

create policy "tasks_insert_members"
  on public.tasks for insert
  with check (exists (
    select 1 from public.projects p
    join public.profiles pr on pr.organization_id = p.organization_id
    where p.id = tasks.project_id 
    and pr.id = auth.uid() 
    and pr.role in ('superadmin', 'agency')
  ));

create policy "tasks_update_members"
  on public.tasks for update
  using (exists (
    select 1 from public.projects p
    join public.profiles pr on pr.organization_id = p.organization_id
    where p.id = tasks.project_id and pr.id = auth.uid()
  ) or assigned_to = auth.uid());

create policy "tasks_delete_agency"
  on public.tasks for delete
  using (exists (
    select 1 from public.projects p
    join public.profiles pr on pr.organization_id = p.organization_id
    where p.id = tasks.project_id 
    and pr.id = auth.uid() 
    and pr.role in ('superadmin', 'agency')
  ));
