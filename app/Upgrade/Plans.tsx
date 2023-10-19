'use client';

import { useSearchParams } from "next/navigation";
import Detail from "./Detail";
import Panel from "./Panel";


export default function Plans() {
    const searchParams = useSearchParams()
    const billed = searchParams.get('billed') as null | "yearly";
    const isYearly = billed == "yearly";

    const price = isYearly ? 7 : 10
    const discountedPrice = price * .5;


    return (
        <div className="w-full flex justify-center items-center gap-16">
            <Panel title="Free" price={0} plan="free"  >
                <Detail detail="AI enable portfolio page" />
                <Detail detail="200 messages / month" />
            </Panel>
            <Panel title="Pro" price={isYearly ? 7 : 10} discountedPrice={discountedPrice} isYearly={isYearly} >
                <Detail detail="AI enabled portfolio page" />
                <Detail detail="1,000 messages / month" />
            </Panel>
        </div>
    )
}