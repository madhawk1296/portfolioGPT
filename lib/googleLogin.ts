import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Database } from '../types/supabase'
import getRedirectLocation from './getRedirectLocation';


export default async function googleLogin(){
    const supabase = createClientComponentClient<Database>()
    
    try{
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: getRedirectLocation(),
                skipBrowserRedirect: false
            }
        });

    } catch(e: any) {
        alert(e.message)
    }

}