import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function updateOnboarded() {
    const supabase = createClientComponentClient<Database>()
    const { data: {user} } = await supabase.auth.getUser();

    try{
        return await supabase
        .from("profiles")
        .update({
            onboarded: true
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