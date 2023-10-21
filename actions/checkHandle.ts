'use server'

import { Database } from '@/types/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function checkHandle(handle: string): Promise<{error: string | null}> {
    try {
      const supabase = createServerActionClient<Database>({ cookies })
      const { data: { user } } = await supabase.auth.getUser()


      const { data: users, error } = await supabase.from('users').select().eq("handle",handle);
      const currentUser = users?.[0]

      if(currentUser) {
        return { error: "User already exists" }
      }

      return { error: null };

    } catch(e: any) {
      return { error: e.message as string }    
  }
}