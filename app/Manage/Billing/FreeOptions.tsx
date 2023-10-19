import Link from "next/link";

export default function FreeOptions() {
    return (
        <Link href="/Upgrade">
            <button className="w-fit bg-blue-600 text-gray-50 tracking-wide text-lg px-[10px] py-[5px] rounded-xl shadow-md">Upgrade</button>
        </Link>
    )
}