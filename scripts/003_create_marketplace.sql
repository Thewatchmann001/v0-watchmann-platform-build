-- Products table for marketplace
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  long_description text,
  price decimal(10, 2) not null,
  category text check (category in ('ai_tool', 'template', 'service', 'course')) not null,
  image_url text,
  features jsonb default '[]'::jsonb,
  is_active boolean default true,
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.products enable row level security;

create policy "products_select_all"
  on public.products for select
  using (is_active = true or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'admin'
  ));

create policy "products_insert_admin"
  on public.products for insert
  with check (exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'admin'
  ));

create policy "products_update_admin"
  on public.products for update
  using (exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'admin'
  ));

create policy "products_delete_admin"
  on public.products for delete
  using (exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'admin'
  ));

-- Orders table for marketplace purchases
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  amount decimal(10, 2) not null,
  status text check (status in ('pending', 'completed', 'failed', 'refunded')) default 'pending',
  payment_intent_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.orders enable row level security;

create policy "orders_select_own"
  on public.orders for select
  using (user_id = auth.uid() or exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'admin'
  ));

create policy "orders_insert_own"
  on public.orders for insert
  with check (user_id = auth.uid());

create policy "orders_update_admin"
  on public.orders for update
  using (exists (
    select 1 from public.profiles 
    where profiles.id = auth.uid() and profiles.role = 'admin'
  ));
