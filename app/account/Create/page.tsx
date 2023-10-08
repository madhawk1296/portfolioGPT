import Container from "../Container";
import Form from "./Form";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Create() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } } = await supabase.auth.getUser();
    const { data: users, error } = await supabase.from("users").select().eq("user_id", user?.id!);
    const currentUser = users?.[0];
    const handle = currentUser?.handle

    if(currentUser) {
        if (handle) {
            return redirect(`/${handle}`)
        } else {
            return redirect("/Account/Onboard")
        }
    }

    return (
        <Container title="Create Account">
            <Form />
        </Container>
    )
}