'use client';

import { useSearchParams } from "next/navigation";
import Detail from "./Detail";
import Panel from "./Panel";


export default function Plans() {
    const searchParams = useSearchParams()
    const billed = searchParams.get('billed') as null | "yearly";
    const isYearly = billed == "yearly";

    return (
        <div className="w-full flex justify-center items-center gap-16">
            <Panel title="Free" price={0} plan="free"  >
                <Detail detail="200 messages / month" />
            </Panel>
            <Panel title="Pro" price={isYearly ? 7 : 10} isYearly={isYearly} >
                <Detail detail="1,000 messages / month" />
                <Detail detail="Custom Domain" />
            </Panel>
        </div>
    )
}