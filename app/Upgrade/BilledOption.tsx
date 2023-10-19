import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BilledOption({ title, selected, isYearly=false }: { title: string, selected: boolean, isYearly?: boolean }) {
    const pathname = usePathname()

    return (
        <Link replace href={isYearly ? pathname + '?billed=yearly' : pathname}>
            <button className={`h-[68px] w-fit text-xl tracking-wide py-[10px] px-[15px] rounded-md ${selected ? "bg-gray-700 text-gray-50" : "text-gray-800"} flex flex-col justify-center`}>
                {title}
                {isYearly && (
                    <h1 className="text-sm tracking-wide">Save 30%</h1>
                )}
                </button>
        </Link>
    )
}