import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Container from "../Container";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import { redirect } from "next/navigation";
import Form from "./Form";

export const dynamic = "force-dynamic";

export default async function ChangePassword() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } } = await supabase.auth.getUser();

    if(!user) {
        redirect(`/Account/Login`)
    }
    
    return (
        <Container title="Change Password">
            <Form />
        </Container>
    )
}