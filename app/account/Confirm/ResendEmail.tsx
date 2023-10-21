'use client'

import { Database } from "@/types/supabase"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"
import { } from "next/navigation"

export default function ResendEmail({email}: {email: string}) {
    const [emailSent, setEmailSent] = useState(false);
     
    const supabase = createClientComponentClient<Database>({ supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL, supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY })

    const handleResend = async () => {
        await supabase.auth.resend({
            type: "signup",
            email,
            options: {
                emailRedirectTo: "http://localhost:3000/auth/callback"
            }
        })

        setEmailSent(true)
    }

    return emailSent ? (
        <h1 className="w-fit text-gray-800 tracking-wide">
            Email sent!
        </h1>
    ) : (
        <h1 className="w-fit text-gray-800 tracking-wide">
            Didn't receive the email? <button onClick={handleResend} className="underline">Send Again</button>                
        </h1>
    )
}