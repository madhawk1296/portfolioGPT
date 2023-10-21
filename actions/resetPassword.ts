'use server'

import { Database } from '@/types/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function resetPassword(email: string): Promise<{error: string | null}> {
    try {
        const supabase = createServerActionClient<Database>({ cookies })
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'http://localhost:3000/auth/callback?next=/Account/ChangePassword',
        })

        if(error) {
            throw new Error (error.message)
        }

        return { error: null}

    } catch(e: any) {
        console.log(e)
        return { error: e.message as string }    
    }
}