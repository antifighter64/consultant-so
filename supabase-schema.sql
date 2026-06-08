-- Run this in your Supabase SQL editor (linkbaits-prod project)

create table if not exists public.waitlist (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text unique not null,
  phone text not null,
  website text,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow inserts from anon (waitlist signups)
create policy "Allow public inserts" on public.waitlist
  for insert with check (true);

-- Only service role can read (admin only)
create policy "Service role reads all" on public.waitlist
  for select using (auth.role() = 'service_role');

-- Index for fast email lookups
create index if not exists waitlist_email_idx on public.waitlist(email);
create index if not exists waitlist_created_at_idx on public.waitlist(created_at desc);
