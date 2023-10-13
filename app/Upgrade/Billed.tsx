'use client';

import { useSearchParams } from "next/navigation";
import BilledOption from "./BilledOption";

export default function Billed() {
    const searchParams = useSearchParams()
    const billed = searchParams.get('billed') as null | "yearly";
    const isYearly = billed == "yearly";

    return (
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl border-2 p-[5px] shadow overflow-hidden">
            <BilledOption title="Pay monthly" selected={!isYearly} />
            <BilledOption title="Pay yearly" selected={isYearly} isYearly={true} />
        </div>
    )
}