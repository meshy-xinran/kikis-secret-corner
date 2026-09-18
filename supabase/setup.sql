begin;
create table if not exists public.kiki_messages (
 id uuid primary key,
 visitor_id uuid not null,
 name text not null check (char_length(btrim(name)) between 1 and 24),
 message text not null check (char_length(btrim(message)) between 1 and 240),
 created_at timestamptz not null default now()
);
create index if not exists kiki_messages_recent on public.kiki_messages(created_at desc,id);
create index if not exists kiki_messages_visitor on public.kiki_messages(visitor_id,created_at desc);
alter table public.kiki_messages enable row level security;
revoke all on public.kiki_messages from anon, authenticated;
grant select(id,name,message,created_at) on public.kiki_messages to anon,authenticated;
drop policy if exists "Public messages" on public.kiki_messages;
create policy "Public messages" on public.kiki_messages for select to anon,authenticated using(true);
create or replace function public.leave_kiki_message(p_id uuid,p_visitor uuid,p_name text,p_message text)
returns table(id uuid,name text,message text,created_at timestamptz)
language plpgsql security definer set search_path='' as $$
begin
 if p_id is null or p_visitor is null or p_name is null or p_message is null
 or char_length(btrim(p_name)) not between 1 and 24
 or char_length(btrim(p_message)) not between 1 and 240 then
  raise exception 'Please enter a name (1–24 characters) and message (1–240 characters).';
 end if;
 -- Serialize requests from one browser; retries with the same ID never duplicate a message.
 perform pg_advisory_xact_lock(hashtextextended(p_visitor::text,0));
 if exists(select 1 from public.kiki_messages m where m.id=p_id and m.visitor_id=p_visitor) then
  return query select m.id,m.name,m.message,m.created_at from public.kiki_messages m where m.id=p_id and m.visitor_id=p_visitor;
  return;
 end if;
 if exists(select 1 from public.kiki_messages m where m.visitor_id=p_visitor and m.created_at>now()-interval '30 seconds') then
  raise exception 'Please wait 30 seconds before leaving another bouquet.';
 end if;
 return query insert into public.kiki_messages as m(id,visitor_id,name,message)
 values(p_id,p_visitor,btrim(p_name),btrim(p_message)) returning m.id,m.name,m.message,m.created_at;
end;
$$;
revoke all on function public.leave_kiki_message(uuid,uuid,text,text) from public;
grant execute on function public.leave_kiki_message(uuid,uuid,text,text) to anon,authenticated;
-- Import the original 29 demo messages so they can also be managed here.
insert into public.kiki_messages(id,visitor_id,name,message,created_at) values
(md5('kiki-demo-0')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Mia','You made an ordinary day feel like home.','2026-09-15T00:00:00Z'::timestamptz + interval '0 seconds'),
(md5('kiki-demo-1')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'sunbeam.sophie','There is still a sunny spot here, just for you.','2026-09-15T00:00:00Z'::timestamptz + interval '1 seconds'),
(md5('kiki-demo-2')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Oliver','Small paws. A love that stays.','2026-09-15T00:00:00Z'::timestamptz + interval '2 seconds'),
(md5('kiki-demo-3')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Luna & Me','I miss the little sound of you following me.','2026-09-15T00:00:00Z'::timestamptz + interval '3 seconds'),
(md5('kiki-demo-4')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Maple','Sleep softly, my sweetest friend.','2026-09-15T00:00:00Z'::timestamptz + interval '4 seconds'),
(md5('kiki-demo-5')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Theo','Thank you for choosing me as your person.','2026-09-15T00:00:00Z'::timestamptz + interval '5 seconds'),
(md5('kiki-demo-6')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'littlecloud','Every quiet morning holds a little of you.','2026-09-15T00:00:00Z'::timestamptz + interval '6 seconds'),
(md5('kiki-demo-7')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Amelia','You left paw prints on all my favorite memories.','2026-09-15T00:00:00Z'::timestamptz + interval '7 seconds'),
(md5('kiki-demo-8')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Nora','I hope the stars feel as warm as your favorite blanket.','2026-09-15T00:00:00Z'::timestamptz + interval '8 seconds'),
(md5('kiki-demo-9')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'peachypaws','A flower for every time you made me smile.','2026-09-15T00:00:00Z'::timestamptz + interval '9 seconds'),
(md5('kiki-demo-10')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Leo','I still look for you in the afternoon light.','2026-09-15T00:00:00Z'::timestamptz + interval '10 seconds'),
(md5('kiki-demo-11')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Willow','You were my smallest, greatest adventure.','2026-09-15T00:00:00Z'::timestamptz + interval '11 seconds'),
(md5('kiki-demo-12')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Hazel','May your dreams be full of sunbeams.','2026-09-15T00:00:00Z'::timestamptz + interval '12 seconds'),
(md5('kiki-demo-13')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'moonmilk','Your place in my heart will always be yours.','2026-09-15T00:00:00Z'::timestamptz + interval '13 seconds'),
(md5('kiki-demo-14')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Eli','For the naps, the mischief, and the midnight cuddles.','2026-09-15T00:00:00Z'::timestamptz + interval '14 seconds'),
(md5('kiki-demo-15')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Juniper','I carry your gentle company with me.','2026-09-15T00:00:00Z'::timestamptz + interval '15 seconds'),
(md5('kiki-demo-16')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'softestdays','Some love is too soft for words.','2026-09-15T00:00:00Z'::timestamptz + interval '16 seconds'),
(md5('kiki-demo-17')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Isla','I would choose every moment with you again.','2026-09-15T00:00:00Z'::timestamptz + interval '17 seconds'),
(md5('kiki-demo-18')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Charlie','The world was kinder with you beside me.','2026-09-15T00:00:00Z'::timestamptz + interval '18 seconds'),
(md5('kiki-demo-19')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'stargazer.jo','Loved in every season. Remembered in every bloom.','2026-09-15T00:00:00Z'::timestamptz + interval '19 seconds'),
(md5('kiki-demo-20')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'mentha','love❤️','2026-09-15T00:00:00Z'::timestamptz + interval '20 seconds'),
(md5('kiki-demo-21')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'maya','see u among the star','2026-09-15T00:00:00Z'::timestamptz + interval '21 seconds'),
(md5('kiki-demo-22')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'leah','🩵','2026-09-15T00:00:00Z'::timestamptz + interval '22 seconds'),
(md5('kiki-demo-23')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Lisa','have a good trip','2026-09-15T00:00:00Z'::timestamptz + interval '23 seconds'),
(md5('kiki-demo-24')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Mentha','Always loved, in every little universe.','2026-09-15T00:00:00Z'::timestamptz + interval '24 seconds'),
(md5('kiki-demo-25')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Mentha','A little flower, an endless love.','2026-09-15T00:00:00Z'::timestamptz + interval '25 seconds'),
(md5('kiki-demo-26')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Mia','have a nice trip','2026-09-15T00:00:00Z'::timestamptz + interval '26 seconds'),
(md5('kiki-demo-27')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'Mentha','There is always a little light here for you.','2026-09-15T00:00:00Z'::timestamptz + interval '27 seconds'),
(md5('kiki-demo-28')::uuid,'00000000-0000-0000-0000-000000000000'::uuid,'kikiiloveyou','always.','2026-09-15T00:00:00Z'::timestamptz + interval '28 seconds')
on conflict(id) do nothing;
notify pgrst,'reload schema';
commit;
