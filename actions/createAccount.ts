'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { AuthError, Session, User } from '@supabase/gotrue-js';
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers'


export default async function createAccount(formData: FormData): Promise<{data: { user: User | null, session: Session | null} | null, error: string | null}> {
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

      return { data, error: null };

    } catch(e: any) {
      return { data: null, error: e.message as string }    
  }
}