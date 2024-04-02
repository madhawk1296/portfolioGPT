
import Content from "../Content";
import ContinueButton from "@/app/onboard/ContinueButton";
import Name from "./Name";
import Resume from "./Resume";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import UploadContinueButton from "./UploadContinueButton";
import UploadForm from "./UploadForm";

export default async function Upload() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: profiles} = await supabase.from('profiles').select();
    const {
        data: { user },
    } = await supabase.auth.getUser()

    const { info } = profiles?.[0]!;
    const { user_metadata: { name } } = user!;

    return (
        <Content title="Upload your Resume" >
            <UploadForm googleName={name} info={info} />
        </Content>
    )
}