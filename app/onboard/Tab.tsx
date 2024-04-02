import Link from "next/link";

export default function Tab({ selected, finished, link, step, title }: {selected: boolean, finished: boolean, step: number, title: string, link: string}) {
    return (
        <Link href={finished ? `/onboard${link}` : "#"}>
            <div className={`${finished ? "cursor-pointer hover:shadow-md bg-gray-300"  : "cursor-default bg-gray-100"} w-full h-[55px] rounded-lg  flex items-center px-[5px] md:px-[20px] gap-3 border-2 border-gray-300 shadow smoothe `}>
                <h1 className={`font-medium text-xs md:text-base tracking-wide ${selected ? "text-blue-600 font-semibold" : "text-gray-800"}`}>{step}.</h1>
                <h1 className={`font-medium text-xs md:text-base tracking-wide ${selected ? "text-blue-600 font-semibold" : "text-gray-800"}`}>{title}</h1>
            </div>
        </Link>
    )
}