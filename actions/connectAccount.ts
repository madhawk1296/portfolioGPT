'use client'

import { Provider, createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

export default async function connectAccount(formData: FormData) {
    const provider = formData.get('provider') as Provider

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    try {
      const supabase = createClient(url, anon, { auth: {persistSession: true}})
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider
      })

      if(error) {
        throw new Error (error.message)
      }

      return revalidatePath('/');

    } catch(e) {
      return { message: e }    
    }
}