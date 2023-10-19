'use client'

import cancelSubscription from "@/actions/cancelSubscription";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { format } from 'date-fns';
import dosis from "@/fonts/dosis";


export default function Options({ cancelAt }: { cancelAt: number | null}) {
    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const cancel = (searchParams.get('cancel') || false) as boolean
    const cancelled = cancelAt !== null;

    let cancelDate
    if(cancelAt) {
        cancelDate = format(new Date(cancelAt! * 1000), 'MMMM do, yyyy')
    }

    const handleCancel = async() => {
        const {data, error} = await cancelSubscription("cancel")

        router.replace(pathname);
    }

    const handleResume = async() => {
        const {data, error} = await cancelSubscription("resume")

        router.replace(pathname);
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5 text-gray-700 mt-[20px]">
                <Link href={`${pathname}?cancel=true`}>
                    <button disabled={cancelled} className="bg-red-500 text-gray-50 tracking-wide text-lg px-[10px] py-[5px] rounded-xl shadow-md disabled:bg-red-400">Cancel</button>
                </Link>
                or
                <Link href="/Upgrade">
                    <button className="tracking-wide text-lg underline">Compare plans</button>
                </Link>
            </div>
            {cancelled ? (
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg tracking-wide text-gray-800">Your subscription is set to cancel at <span className={`text-gray-800 ${dosis.bold}`}>{cancelDate}</span>.
                    </h1>
                    <h1 className="text-lg tracking-wide text-gray-700 gap-2">
                        Want to keep your subscription?
                        <button onClick={handleResume} className="ml-[5px] underline text-blue-600">Continue subscription</button>
                        </h1>
                </div>
            ) : cancel && (
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg tracking-wide text-gray-800">Are you sure you want to cancel?</h1>
                    <div className="flex gap-5 items-center text-lg">
                        <Link href={pathname}>
                            <button className="underline">No</button>
                        </Link>
                        <button onClick={handleCancel} className="px-[10px] py-[5px] text-gray-50 bg-red-500 rounded-xl shadow-md">Cancel Subscription</button>
                    </div>
                </div>
            )}
        </div>
    )
}