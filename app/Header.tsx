import Robot from "@/components/icons/Robot";
import dosis from "@/fonts/dosis";  
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import HeaderOptions from "./HeaderOptions";
import { Tables } from "@/types/tables";

export default async function Header({ isLanding=false }: { isLanding?: boolean}) {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } } = await supabase.auth.getUser();
    const { data: users, error } = await supabase.from('users').select(`
        *, 
        plan (*)
    `).eq("user_id", user?.id!)
    const currentUser = users?.[0] || null;
    const plan = currentUser?.plan as Tables<'subscription_tiers'> | undefined
    const isPro = plan?.name == "pro";

    return (
        <div className={`fixed top-0 bg-white w-full h-[65px] ${!isLanding && "shadow"} bg-white flex justify-between px-[10px] md:px-[100px] items-center z-500`}>
            <Link href="/">
                <button className="flex gap-2 items-center">
                    <div className="h-[33px]">
                        <Robot color="blue" />
                    </div>
                    {user ? (
                        isPro && (
                            <h2 className={`bg-gray-800 text-gray-50 px-[10px] py-[3px] rounded-xl tracking-wider ${dosis.bold}`}>pro</h2>
                        )
                    ) : (
                        <h2 className={`text-blue-600 text-[28px] font-semibold tracking-wider ${dosis.bold}`}>chat-fu</h2>
                    )}
                </button>
            </Link>
            <HeaderOptions isLanding={isLanding} user={currentUser} isPro={isPro} />
        </div>
    )
}