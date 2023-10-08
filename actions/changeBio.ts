'use server'

import { Database } from '@/types/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function changeBio(bio: string): Promise<{error: string | null}> {
    try {
      const supabase = createServerActionClient<Database>({ cookies })
      const { data: { user } } = await supabase.auth.getUser()

      const { data, error } = await supabase.from('users').update(
        { bio }
      ).eq("user_id", user?.id!);

      if(error) {
        throw new Error (error.message)
      }

      return { error: null };

    } catch(e: any) {
      console.log(e);
      return { error: e.message as string }    
  }
}