import { ChangeEvent, createRef, useRef, useState } from "react";
import Container from "../Container";
import Input from "../Input";
import dosis from "@/fonts/dosis";
import Button from "../Button";
import Link from "next/link";
import Form from "./Form";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Onboard() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } } = await supabase.auth.getUser();
    const { data: users, error } = await supabase.from("users").select().eq("user_id", user?.id!);
    const currentUser = users?.[0];
    const handle = currentUser?.handle

    if(currentUser) {
        if (handle) return redirect(`/${handle}`)
    } else redirect(`/Account/Login`)

    return (
        <Container title="Onboard" logout={true} >
            <Form />
        </Container>
    )
}