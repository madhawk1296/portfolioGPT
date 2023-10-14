import stripeCheckout from "@/actions/stripeCheckout";
import dosis from "@/fonts/dosis";
import Link from "next/link";

export default function PanelButton({ isFree }: { isFree: boolean} ) {
    return isFree ? (
        <Link href="/Account">
            <button className={`absolute bottom-[20px] left-[50%] -translate-x-1/2 px-[15px] py-[10px] rounded-xl shadow-md hover:shadow-lg smoothe ${dosis.bold} tracking-widest text-blue-700 bg-blue-100`} >Create a page</button>    
        </Link>
        ) : (
            <form action="/stripe/checkout" method="post" >
                <input hidden name="plan" value="pro" readOnly />
                <input hidden name="billed" value="monthly" readOnly />
                <button type="submit" role="link" className={`absolute bottom-[20px] left-[50%] -translate-x-1/2 px-[15px] py-[10px] rounded-xl shadow-md hover:shadow-lg smoothe ${dosis.bold} tracking-widest text-gray-50 bg-blue-600`} >Upgrade</button> 
            </form>
        )
}