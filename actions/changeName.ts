'use server'

import { Database } from '@/types/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function changeName(formData: FormData): Promise<{error: string | null}> {
    const name = formData.get('name') as string

    try {
      const supabase = createServerActionClient<Database>({ cookies })
      const { data: { user } } = await supabase.auth.getUser()

      const { data, error } = await supabase.from('users').update(
        { display_name: name }
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