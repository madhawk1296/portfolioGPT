'use client';

import dosis from "@/fonts/dosis";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    return (
        <form className="self-end" action="/auth/logout" method="post" >
            <button type="submit" className={`text-sm self-end border-2 border-red-400 rounded-xl text-red-400 px-[10px] py-[5px] tracking-wide ${dosis.bold} smoothe hover:bg-red-50 shadow hover:shadow-md`}>Log Out</button>
        </form>
    )
}