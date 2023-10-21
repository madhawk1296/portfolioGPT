import dosis from "@/fonts/dosis";
import Container from "../Container";
import Section from "../Section";
import { Database } from "@/types/supabase";
import { Tables } from "@/types/tables";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Options from "./Options";
import Stripe from "stripe";
import FreeOptions from "./FreeOptions";

export const dynamic = "force-dynamic";

export default async function Billing() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } } = await supabase.auth.getUser();
    const { data: users } = await supabase.from("users").select(`*, plan(*)`).eq("user_id", user?.id!);
    const { plan, stripe_customer_id } = users?.[0]!
    const { messages_limit, name, title} = plan as unknown as Tables<"subscription_tiers">

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });
    const { data: subscriptions} = await stripe.subscriptions.list({customer: stripe_customer_id!});
    const currentSubscription = subscriptions[0]
    const cancel_at = currentSubscription.cancel_at;

    return (
        <Container title="Billing">
            <Section title="Current Plan">
                <div className="flex flex-col gap-2">
                    <h1 className={`text-2xl tracking-wide text-gray-800 ${dosis.medium}`}>{title}</h1>
                    <h1 className={`text-xl tracking-wide text-gray-700 ${dosis.medium}`}>{messages_limit} messages / month</h1>
                </div>
                {name == "free" ? <FreeOptions /> : <Options cancelAt={cancel_at} />}
            </Section>
        </Container>
    )
}