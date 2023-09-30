import Website from "@/components/icons/Website"
import LinkTab from "./LinkTab"
import { ReactNode } from "react"

export type LinkType = {
    name: string,
    url: string,
    image: ReactNode | string | null
}

export default function Links() {
    const links: LinkType[] = [
        {
            name: "example.com",
            url: "https://example.com",
            image: <Website />
        },
        {
            name: "@madhawkcristian",
            url: "https://example.com",
            image: '/x.png'
        },
    ]

    return (
        <div className="relative w-full flex flex-col gap-4 pt-[20px] items-end">
            {links.map((link, index) => <LinkTab key={index} link={link} />)}
        </div>
    )
}