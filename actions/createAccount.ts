'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { AuthError } from '@supabase/gotrue-js';
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers'


export default async function createAccount(formData: FormData): Promise<{error: string | null}> {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const supabase = createServerActionClient({ cookies })
      const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
              data: {
                display_name: name
              }
          }
      })

      if(error) {
        throw new Error (error.message)
      }

      return { error: null };

    } catch(e: any) {
      console.log(e);
      return { error: e.message as string }    
  }
}