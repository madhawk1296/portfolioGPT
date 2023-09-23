'use server'

import convertResume from "@/lib/convertResume";
import routeUser from "@/lib/routeUser";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


 export async function saveResume(formData: FormData) {
    const resume = await formData.get('resume')!;

    convertResume(resume);

    const supabase = createServerComponentClient<Database>({ cookies })
    try {
        const {data: profiles} = await supabase.from('profiles').select();
        const profile = profiles?.[0];
        return { message: 'Success!' }

    } catch (e) {

        return { message: 'There was an error.' }

    }
}