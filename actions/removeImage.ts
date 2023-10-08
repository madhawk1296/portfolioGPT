'use server'

import { Database } from '@/types/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function removeImage(formData: FormData): Promise<{error: string | null}> {
    const location = formData.get('location') as string
    const column = location == "banner" ? { banner_image: null } :  { profile_image: null }

    try {
        const supabase = createServerActionClient<Database>({ cookies })
        const { data: { user } } = await supabase.auth.getUser();


        const { data, error: userError } = await supabase.from('users').update(column).eq("user_id", user?.id!);

        if(userError) {
            throw new Error (userError.message)
        }

        return { error: null };

    } catch(e: any) {
        console.log(e)
        return { error: e.message as string }    
  }
}