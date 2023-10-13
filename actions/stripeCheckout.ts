'use server'

import { redirect } from 'next/navigation';
import Stripe from 'stripe';

export default async function stripeCheckout(): Promise<{error: string | null}> {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

    try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: '{{PRICE_ID}}',
              quantity: 1,
            },
          ],
          mode: 'subscription',
          success_url: `/?success=true`,
          cancel_url: `/?canceled=true`,
        });

        redirect(session.url!);

      } catch (err: any) {
        return {error: err.message as string}
    }
}