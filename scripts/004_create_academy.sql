-- Courses table for academy/LMS
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  long_description text,
  instructor_id uuid not null references auth.users(id) on delete cascade,
  thumbnail_url text,
  price decimal(10, 2) default 0,
  duration_hours int,
  level text check (level in ('beginner', 'intermediate', 'advanced')) default 'beginner',
  is_published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.courses enable row level security;

create policy "courses_select_published"
  on public.courses for select
  using (is_published = true or instructor_id = auth.uid() or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

create policy "courses_insert_instructor"
  on public.courses for insert
  with check (instructor_id = auth.uid() or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role in ('superadmin', 'agency')
  ));

create policy "courses_update_instructor"
  on public.courses for update
  using (instructor_id = auth.uid() or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

create policy "courses_delete_instructor"
  on public.courses for delete
  using (instructor_id = auth.uid() or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

-- Lessons table for course content
create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  description text,
  content text,
  video_url text,
  order_index int not null,
  duration_minutes int,
  is_preview boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.lessons enable row level security;

create policy "lessons_select_enrolled"
  on public.lessons for select
  using (is_preview = true or exists (
    select 1 from public.courses c
    where c.id = lessons.course_id and c.instructor_id = auth.uid()
  ) or exists (
    select 1 from public.enrollments e
    where e.course_id = lessons.course_id and e.user_id = auth.uid()
  ) or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

create policy "lessons_insert_instructor"
  on public.lessons for insert
  with check (exists (
    select 1 from public.courses c
    where c.id = lessons.course_id and c.instructor_id = auth.uid()
  ) or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

create policy "lessons_update_instructor"
  on public.lessons for update
  using (exists (
    select 1 from public.courses c
    where c.id = lessons.course_id and c.instructor_id = auth.uid()
  ) or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

create policy "lessons_delete_instructor"
  on public.lessons for delete
  using (exists (
    select 1 from public.courses c
    where c.id = lessons.course_id and c.instructor_id = auth.uid()
  ) or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

-- Enrollments table for course enrollment tracking
create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  progress int default 0 check (progress >= 0 and progress <= 100),
  completed_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(user_id, course_id)
);

alter table public.enrollments enable row level security;

create policy "enrollments_select_own"
  on public.enrollments for select
  using (user_id = auth.uid() or exists (
    select 1 from public.courses c
    where c.id = enrollments.course_id and c.instructor_id = auth.uid()
  ) or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'superadmin'
  ));

create policy "enrollments_insert_own"
  on public.enrollments for insert
  with check (user_id = auth.uid());

create policy "enrollments_update_own"
  on public.enrollments for update
  using (user_id = auth.uid());
