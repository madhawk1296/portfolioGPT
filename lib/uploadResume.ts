import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from '../types/supabase'
import { posthog } from "posthog-js";

export default async function uploadResume(resumeInfo: string){
    const supabase = createClientComponentClient<Database>()
    const { data: {user} } = await supabase.auth.getUser();

    posthog.capture('user submits resume');

    try{
        return await supabase
        .from("profiles")
        .update({
            info: resumeInfo
        }) 
        .eq("id", user?.id!)
    }catch(e: any){
        alert(e.message)

        return {
            data: null,
            error: e.message
        }
    }
}