'use server'

import { Database } from '@/types/supabase'
import { SupabaseClient, createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function uploadImage(formData: FormData): Promise<{error: string | null}> {
    const image = formData.get('image') as File    
    const location = formData.get('location') as string

    console.log("image, location:", image, location)

    try {
        const supabase = createServerActionClient<Database>({ cookies })
        const { data: { user } } = await supabase.auth.getUser()

        try {
            const { error } = await supabase.storage.from('user_images').upload(`${user?.id!}/${image.name}`, image);

            if(error) {
                throw new Error (error.message)
            }
        } catch(e) {
            console.log('already exists')
        }

        const inputs = location == "banner" ? { banner_image: image.name} : { profile_picture: image.name};
        const { error: userError } = await supabase.from('users').update(inputs).eq("user_id", user?.id!);

        if(userError) {
            throw new Error (userError.message)
        }

        return { error: null };

    } catch(e: any) {
        console.log(e)
        return { error: e.message as string }    
  }
}