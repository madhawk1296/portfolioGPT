import Container from "./Container";
import Section from "./Section";
import PageLink from "./PageLink";
import Usage from "./Usage";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";
import { subDays } from 'date-fns';

export default async function Home() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } } = await supabase.auth.getUser();
    const { data: users } = await supabase.from("users").select().eq("user_id", user?.id!);

    const thirtyDaysAgo = subDays(new Date(), 30);
    const { data: calls } = await supabase.from("api_calls").select().eq("user_id", user?.id!).gte("created_at", thirtyDaysAgo.toISOString());

    return (
        <Container title="Home">
            <Section title="Your Page" >
                <PageLink />
            </Section>
            <Section title="Usage" >
                <Usage calls={calls!} />
            </Section>
        </Container>
    )
}