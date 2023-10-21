import dosis from "@/fonts/dosis";
import Header from "../Header";
import Tab from "./Tab";
import { ReactNode } from "react";
import Nav from "./Nav";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Layout({ children }: { children: ReactNode }) {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } } = await supabase.auth.getUser();
    const { data: users, error } = await supabase.from("users").select().eq("user_id", user?.id!);
    const currentUser = users?.[0];

    if(currentUser) {
        const handle = currentUser.handle
        if (!handle) {
            return redirect("/Account/Onboard")
        }
    } else {
        return redirect('/Account/Login')
    }

    return (
        <div className="w-full min-h-screen h-full flex flex-col items-center bg-gray-50">
            <Header />
            <div className="flex flex-col md:flex-row w-full pt-[65px] max-w-[1200px]">
                <Nav />
                {children}
            </div>
        </div>
    )
}