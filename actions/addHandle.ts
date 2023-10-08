'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function addHandle(formData: FormData): Promise<{error: string | null}> {
    const handle = formData.get('handle') as string

    try {
      const supabase = createServerActionClient({ cookies })
      const { data: { user } } = await supabase.auth.getUser()


      const { data, error } = await supabase.from('users').update(
        { handle }
      ).eq("user_id", user?.id);

      if(error) {
        throw new Error (error.message)
      }

      return { error: null };

    } catch(e: any) {
      console.log(e);
      return { error: e.message as string }    
  }
}