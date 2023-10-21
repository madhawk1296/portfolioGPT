import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from "@/types/supabase";

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

    let event: Stripe.Event;
    try {
        const sig = req.headers.get('stripe-signature')!;
        const body = await req.text()
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_ENDPOINT_SECRET!)
    } catch (e: any) {
        return new NextResponse(`Webhook Error: ${e.message}`, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            try {
                const {client_reference_id, id, subscription } = event.data.object as Stripe.Checkout.Session;
                const clientReferenceId = client_reference_id!;

                const { line_items } = await stripe.checkout.sessions.retrieve(
                    id,
                    {
                      expand: ["line_items"],
                    }
                );

                const productId = line_items?.data[0].price?.product as string

                const supabase = createRouteHandlerClient<Database>({ cookies }, { supabaseKey: process.env.SUPABASE_SERVICE_ROLE! });
                const { data: plans } = await supabase.from('subscription_tiers').select().eq("stripe_product_id", productId);
                const selectedPlan = plans?.[0]!

                const { data, error } = await supabase.from('users').update({plan: selectedPlan.id}).eq("user_id", clientReferenceId);

                if(error) {
                    throw new Error(error.message)
                }

                return new NextResponse('Handled Session Completed', { status: 200})
            } catch(e: any) {
                return new NextResponse(`Recieved Event, but unable to process: ${e.message}`, { status: 400 });
            }
        default:
            return new NextResponse('Unfamiliar Event', { status: 200})
  }
}