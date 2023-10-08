import Website from "@/components/icons/Website"
import LinkTab from "./LinkTab"
import { ReactNode } from "react"
import { Json } from "@/types/supabase"

export type LinkType = {
    name: string,
    url: string,
    image: string
}

export default function Links({ links }: { links: Json[]}) {
    return (
        <div className="relative w-full flex flex-col gap-4 pt-[20px] items-end">
            {links.map((link, index) => <LinkTab key={index} link={link} />)}
        </div>
    )
}