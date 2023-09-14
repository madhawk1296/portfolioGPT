import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";
import { cookies } from 'next/headers'
import { Database } from '../../types/supabase'
import TrackLogin from "./TrackLogin";


export default async function layout({children}: {children: React.ReactNode}){
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
      data: { user },
    } = await supabase.auth.getUser()
    
    console.log

    return(
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <DashHeader/>
            <div className="relative flex w-full">
                <Sidebar user={user!}/>
                {children}
            </div>
            <TrackLogin user={user} />
        </div>
    )
}