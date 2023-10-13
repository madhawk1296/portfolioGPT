import dosis from "@/fonts/dosis";
import { ReactNode } from "react";
import PanelButton from "./PanelButton";

export default function Panel({ title, price, children, plan="pro", isYearly=false }: {title: string, price: number, children: ReactNode, plan?: "free" | "pro", isYearly?: boolean }) {
    const isFree = plan == "free";

    return (
        <div className="relative w-[300px] h-[400px] border-2 shadow-md rounded-xl bg-white flex flex-col p-[15px] gap-10">
            <div className="flex flex-col h-[65px]">
                <h1 className={`text-3xl ${dosis.bold} tracking-wider text-gray-800 pb-[3px]`}>{title}</h1>
                <h1 className={`text-xl ${dosis.bold} tracking-wider text-gray-700 ${price == 0  && "hidden"}`}>${price}/month{isYearly && " billed annually"}</h1>
                {isYearly && <h1 className="rounded-xl text-green-500 tracking-wide">Save 30%</h1>}
            </div>
            <div className="flex flex-col gap-2">
                {children}
            </div>
            <PanelButton isFree={isFree} />
        </div>
    )
}