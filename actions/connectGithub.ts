'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function connectGithub(): Promise<{error: string | null}> {
    console.log(cookies())

    try {
        const supabase = createServerActionClient({ cookies })
        const { data: { user } } = await supabase.auth.getUser()

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://localhost:3000/integrate/github',
                skipBrowserRedirect: true
            }
        })

        console.log(cookies())

        return { error: null }

    } catch(e: any) {
      console.log(e);
      return { error: e.message as string }    
  }
}