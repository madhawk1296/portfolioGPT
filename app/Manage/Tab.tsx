import dosis from "@/fonts/dosis";
import Link from "next/link";

export default function Tab({ title, page, selected }: { title: string, page: string, selected: boolean }) {
    return (
        <Link href={`/Manage/${page}`}>
            <button className={`w-full p-[10px] text-lg text-gray-800 tracking-wide ${dosis.bold} hover:bg-gray-300 rounded-xl smoothe ${selected && "bg-gray-300"}`}>{title}</button>
        </Link>
    )
}