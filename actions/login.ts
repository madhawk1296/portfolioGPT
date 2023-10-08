'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers'


export default async function login(formData: FormData): Promise<{ error: string | null }> {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const supabase = createServerActionClient({ cookies })
      const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
      })

      if(error) {
        throw new Error (error.message)
      }

      return { error: null };

    } catch(e: any) {
      console.log(e)
      return { error: e.message as string }    
  }
}