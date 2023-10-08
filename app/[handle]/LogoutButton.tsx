'use client';

import logout from "@/actions/logout";
import dosis from "@/fonts/dosis";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LogoutButton() {
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { error } = await logout();
            router.refresh()
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <form className="self-end" onSubmit={handleSubmit} >
            <button type="submit" className={`text-sm self-end border-2 border-red-400 rounded-xl text-red-400 px-[10px] py-[5px] tracking-wide ${dosis.bold} smoothe hover:bg-red-50 shadow hover:shadow-md`}>Log Out</button>
        </form>
    )
}