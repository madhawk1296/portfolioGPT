'use server'

import { Database } from '@/types/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function changePassword(password: string): Promise<{error: string | null}> {
    try {
        const supabase = createServerActionClient<Database>({ cookies })
        const { data, error } = await supabase.auth.updateUser({ password })

        if(error) {
            throw new Error (error.message)
        }

        return { error: null}

    } catch(e: any) {
        console.log(e)
        return { error: e.message as string }    
    }
}