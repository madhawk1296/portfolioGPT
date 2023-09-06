import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'


export default async function googleLogin(){
    const supabase = createClientComponentClient<Database>()
    
    try{
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'https://chatfolio.org/auth/callback',
            }
        })

    } catch(e: any) {
    alert(e.message)
    }

}