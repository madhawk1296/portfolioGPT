'use server'

import Stripe from 'stripe';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase';

export default async function editSubscription(action: "resume" | "cancel"): Promise<{data: string | null, error: string | null}> {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

    try {
        const supabase = createServerActionClient<Database>({ cookies })
        const { data: { user }} = await supabase.auth.getUser();
        const { data: users } = await supabase.from('users').select().eq("user_id", user?.id!);
        const { stripe_customer_id } = users?.[0]!

        const { data: subscriptions} = await stripe.subscriptions.list({customer: stripe_customer_id!});
        
        const subscription = await stripe.subscriptions.update(subscriptions?.[0].id!, { cancel_at_period_end: action == "cancel"});
        console.log(subscription)

        return {
            data: "success", error: null
        }
    } catch (err: any) {
        console.log(err)
        return { data: null, error: err.message as string}
    }
}