import Container from "./Container";
import Section from "./Section";
import PageLink from "./PageLink";
import Usage from "./Usage";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";
import { subDays } from 'date-fns';
import Link from "next/link";

export default async function Home() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } } = await supabase.auth.getUser();
    const { data: users } = await supabase.from("users").select().eq("user_id", user?.id!);
    const { handle } = users?.[0]!

    const thirtyDaysAgo = subDays(new Date(), 30);
    const { data: calls } = await supabase.from("api_calls").select().eq("user_id", user?.id!).gte("created_at", thirtyDaysAgo.toISOString());

    return (
        <Container title="Home">
            <Section title="Your Page" >
                <PageLink handle={handle!} />
                <Link className="w-fit" href={`/${handle!}`}>
                    <button className="shadow bg-gray-100 px-[10px] py-[5px] rounded-xl text-lg w-fit text-gray-600 tracking-wide">Go to your page</button>
                </Link>
            </Section>
            <Section title="Usage" >
                <Usage calls={calls!} />
            </Section>
        </Container>
    )
}