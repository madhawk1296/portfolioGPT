import Content from "../Content"
import ModifyText from "../website/[platform]/ModifyText"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "@/types/supabase"
import { cookies } from "next/headers"
import CheckInstalled from "./CheckInstalled"
import FinalContinueButton from "./FinalContinueButton"

export default async function Test() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: profiles} = await supabase.from('profiles').select();

    const { installed_chatbot } = profiles?.[0]!;

    return (
        <Content title="Test Your Chatbot" >
            <div className="w-full flex-grow h-full flex flex-col justify-between items-center gap-5">
                <div className="flex flex-col gap-6">
                    <h1 className="text-base  text-gray-800">Now that you've added the chatbot to your website, you can test to make sure that the chatbot is working properly. </h1>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sm text-gray-800">1. Once the chatbot is installed, <ModifyText bold={true}>refresh your website</ModifyText>.</h1>
                        <CheckInstalled installedChatbot={installed_chatbot} />
                    </div>
                </div>
                <FinalContinueButton page="/upload" disabled={!installed_chatbot} />
            </div>
        </Content>
    )
} 