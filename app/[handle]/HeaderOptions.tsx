import dosis from "@/fonts/dosis";
import { User } from "@supabase/gotrue-js";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { Tables } from "@/types/tables";

export default function HeaderOptions({ user }: { user: Tables<'users'> | null}) {
    return (user) ? (
        <div className={`flex gap-4 items-center ${dosis.medium}`}>
            <Link href="/Upgrade">
                <button className="text-gray-600 px-[10px] py-[8px] tracking-wide rounded-xl text">Upgrade</button>
            </Link>
            <LogoutButton />
        </div>
    ): (
        <div className={`flex gap-4 items-center ${dosis.medium}`}>
            <Link href="/Upgrade">
                <button className="text-gray-600 px-[10px] py-[8px] tracking-wide rounded-xl text">Upgrade</button>
            </Link>
            <Link href="/Account/Login">
                <button className="text-gray-600 px-[10px] py-[8px] tracking-wide rounded-xl text">Log in</button>
            </Link>
            <Link href="/Account/Create">
                <button className="bg-blue-600 px-[10px] py-[8px] text-white tracking-wide rounded-xl shadow smoothe hover:shadow-md text">Create a Page</button>
            </Link>
        </div> 
    )
}