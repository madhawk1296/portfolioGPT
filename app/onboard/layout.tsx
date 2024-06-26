import Robot from "@/components/icons/Robot"
import Navigation from "./Navigation"
import { ReactNode } from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";
import TrackLogin from "../account/TrackLogin";

export default async function Layout({ children }: { children: ReactNode }) {
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
      data: { user },
    } = await supabase.auth.getUser();

    return (
        <div className="relative bg-gray-100 md:bg-gray-200 w-screen h-screen md:w-full min-h-screen relative flex flex-col items-center gap-14 md:py-[25px] overflow-hidden" >
            <div className="flex gap-1 items-center justify-center mt-[20px] md:mt-[0px] h-[35px] md:h-[45px]">
                <Robot color="blue" />
                <h1 className="w-fit text-2xl md:text-5xl font-semibold text-blue-600 tracking-wide">chatfolio</h1>
            </div>
            <div className="relative h-full min-h-[600px] smoothe w-full md:w-fit flex flex-col md:flex-row gap-4">
                <Navigation />
                {children}
            </div>
            <TrackLogin user={user} />
        </div>
    )
} 