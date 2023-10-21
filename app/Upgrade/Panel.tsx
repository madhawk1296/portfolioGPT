import dosis from "@/fonts/dosis";
import { ReactNode } from "react";
import PanelButton from "./PanelButton";
import Price from "./Price";

export default function Panel({ title, price, children, plan="pro", isYearly=false, discountedPrice=null }: {title: string, price: number, children: ReactNode, plan?: "free" | "pro", isYearly?: boolean, discountedPrice?: number | null }) {
    const isFree = plan == "free";
    const isDiscounted = discountedPrice !== null

    return (
        <div className="relative w-[300px] md:h-[400px] border-2 shadow-md rounded-xl bg-white flex flex-col p-[15px] gap-5 md:gap-10 pb-[100px]">
            <div className="flex flex-col md:h-[115px]">
                <h1 className={`text-3xl ${dosis.bold} tracking-wider text-gray-800 pb-[3px]`}>{title}</h1>
                {!isFree && <Price price={price} discountedPrice={discountedPrice!} />}
                {isDiscounted && <h1 className="rounded-xl text-orange-500 tracking-wide">Launch Discount 50% {!isYearly && "for 6 months"}</h1>}
                {isYearly && <h1 className="rounded-xl text-green-500 tracking-wide">Yearly Discount 30%</h1>}
            </div>
            <div className="flex flex-col gap-2">
                {children}
            </div>
            <PanelButton isFree={isFree} />
        </div>
    )
}