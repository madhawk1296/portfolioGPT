'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import SocialLogin from "./SocialLogin";
import { Database } from "@/types/supabase";

export type SocialType = "google" | "facebook" | "twitter"

export default function SocialLogins() {
    const supabase = createClientComponentClient<Database>({ supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL, supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY })
    
    const handleLogin = async (name: SocialType) => {
        await supabase.auth.signInWithOAuth({
            provider: name,
            options: {
                redirectTo: "http://localhost:3000/auth/callback"
            }
        })
    }

    return (
        <div className="relative w-full flex flex-col gap-6 self-center items-center">
            <h1 className="w-fit text-gray-500 tracking-wide">or log in with</h1>
            <div className="flex gap-6 items-center">
                <SocialLogin name="google" image="/google.png" handleLogin={handleLogin} />
                <SocialLogin name="facebook" image="/facebook.png" handleLogin={handleLogin} />
                <SocialLogin name="twitter" image="/x.png" handleLogin={handleLogin} />
            </div>
        </div>
    )
}