import Link from 'next/link'
import HomeInfo from './HomeInfo'
import PageInfo from './PageInfo'
import { cookies } from 'next/headers'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from '../../types/supabase'
import getMonthlyCalls from '@/lib/getMonthlyCalls';
import Usage from './Usage';

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {data: profiles} = await supabase.from('profiles').select(`
      *,
      subscription_tier(*)
  `);

  const { info, id, subscription_tier } = profiles?.[0] || {} as any;
  const {data, count} = await getMonthlyCalls(supabase, id);

  return (
    <PageInfo title="Home"> 
      <div className='relative flex flex-col gap-6 pt-[20px]'>
        <Usage tier={subscription_tier} calls={data!} count={count!} />
      </div>
    </PageInfo>
  )
}