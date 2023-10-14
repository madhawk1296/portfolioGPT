import dosis from "@/fonts/dosis";
import Link from "next/link";
import { loadStripe } from '@stripe/stripe-js';
import stripeCheckout from "@/actions/stripeCheckout";
import { FormEvent } from "react";
import { useSearchParams } from "next/navigation";

export default function PanelButton({ isFree }: { isFree: boolean} ) {
    const searchParams = useSearchParams()
    const billed = searchParams.get('billed') as null | "yearly";
    const isYearly = billed == "yearly";

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
        const formData = new FormData;
        formData.append("plan", "pro")
        formData.append("billed", isYearly ? "yearly" : "monthly")

        const { data } = await stripeCheckout(formData);

        if(data) {
            stripe?.redirectToCheckout({ sessionId: data })
        } 
    }

    return isFree ? (
        <Link href="/Account">
            <button className={`absolute bottom-[20px] left-[50%] -translate-x-1/2 px-[15px] py-[10px] rounded-xl shadow-md hover:shadow-lg smoothe ${dosis.bold} tracking-widest text-blue-700 bg-blue-100`} >Create a page</button>    
        </Link>
        ) : (
            <form onSubmit={handleSubmit} >
                <input hidden name="plan" value="pro" readOnly />
                <input hidden name="billed" value="monthly" readOnly />
                <button type="submit" role="link" className={`absolute bottom-[20px] left-[50%] -translate-x-1/2 px-[15px] py-[10px] rounded-xl shadow-md hover:shadow-lg smoothe ${dosis.bold} tracking-widest text-gray-50 bg-blue-600`} >Upgrade</button> 
            </form>
        )
}