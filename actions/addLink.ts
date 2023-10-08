'use server'

import { Database } from '@/types/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function addLink(formData: FormData): Promise<{error: string | null}> {
    const linkType = formData.get('link_type') as string
    const name = formData.get('name') as string
    const url = formData.get('url') as string

    console.log(linkType, name, url)

    try {
        const supabase = createServerActionClient<Database>({ cookies })
        const { data: { user } } = await supabase.auth.getUser()

        const { data: users } = await supabase.from('users').select();
        const { links } = users?.[0]! 

        const { data, error } = await supabase.from('users').update(
            { links: [...links, {linkType, name, url}] }
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