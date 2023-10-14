'use server'

import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase';
import { RedirectType } from 'next/dist/client/components/redirect';

export default async function stripeCheckout(formData: FormData): Promise<{error: string | null}> {
    const plan = formData.get('plan') as "pro";
    const billed = formData.get('billed') as "monthly" | "yearly"
    const billedYearly = billed == "yearly"

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

    try {
      const supabase = createServerActionClient<Database>({ cookies })
      const { data: { user } } = await supabase.auth.getUser()
      const { data: subscription_tiers, error } = await supabase.from('subscription_tiers').select().eq("name", plan);
      const { yearly_price_id, monthly_price_id} = subscription_tiers?.[0]!
      
      console.log('starting...')

      const { url } = await stripe.checkout.sessions.create({
          line_items: [
            {
              price: billedYearly ? yearly_price_id! : monthly_price_id!,
              quantity: 1,
            },
          ],
          mode: 'subscription',
          success_url: `http://localhost:3000/cristian/?success=true`,
          cancel_url: `http://localhost:3000/cristian?canceled=true`,
      });

      console.log({url})

      redirect(url!, RedirectType.push);

    } catch (err: any) {
      console.log(err);
      return {error: err.message as string}
    }
}