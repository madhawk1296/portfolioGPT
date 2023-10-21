'use server'

import { Database } from '@/types/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function removeLink(index: number): Promise<{error: string | null}> {
    try {
        const supabase = createServerActionClient<Database>({ cookies })
        const { data: { user } } = await supabase.auth.getUser()

        const { data: users } = await supabase.from('users').select().eq("user_id", user?.id!);
        const { links } = users?.[0]! 

        if (index < 0 || index >= links.length) {
            throw new Error("Invalid index provided.")
        }

        const updatedLinks = [...links.slice(0, index), ...links.slice(index + 1)];

        const { data, error } = await supabase.from('users').update(
            { links: updatedLinks }
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