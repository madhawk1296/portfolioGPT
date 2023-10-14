'use server'

import Stripe from 'stripe';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase';

export default async function stripeCheckout(formData: FormData): Promise<{data: string | null, error: string | null}> {
    const plan = formData.get('plan') as "pro";
    const billed = formData.get('billed') as "monthly" | "yearly"
    const billedYearly = billed == "yearly"

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

    try {
      //const supabase = createServerActionClient<Database>({ cookies })
      //const { data: subscription_tiers, error } = await supabase.from('subscription_tiers').select().eq("name", plan);
      //const { yearly_price_id, monthly_price_id} = subscription_tiers?.[0]!
      
      const { url, id } = await stripe.checkout.sessions.create({
          line_items: [
            {
              price: "price_1O0ZY2DZVYK8s4Zq9Eu5iT9h",
              quantity: 1,
            },
          ],
          mode: 'subscription',
          success_url: `http://localhost:3000/cristian/?success=true`,
          cancel_url: `http://localhost:3000/cristian?canceled=true`,
      });

      return { data: id, error: null}
    } catch (err: any) {
      return { data: null, error: err.message as string}
    }
}