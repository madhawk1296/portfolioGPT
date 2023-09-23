import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Content from "../Content";
import ContinueButton from "../ContinueButton";
import Chatbot from "./Chatbot";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";

export default async function Test() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: profiles} = await supabase.from('profiles').select();
    const { welcome_message, chatbot_color, remove_branding } = profiles?.[0]!;

    return (
        <Content title="Talk to Your Chatbot" >
            <div className="relative flex-grow w-full h-full flex flex-col justify-between items-center gap-8 overflow-hidden">
                <Chatbot defaultMessage={welcome_message} color={chatbot_color} removeBranding={remove_branding} />
                <ContinueButton page="/website" />
            </div>
        </Content>
    )
}