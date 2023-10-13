import Image from "next/image";
import Link from "next/link";
import { Json } from "@/types/supabase";
import { LinkType } from "./admin/Links";
import LinkImage from "./LinkImage";

export default function LinkTab({ link }: {link: Json}) {
    const { name, url, linkType } = link as LinkType;

    return (
        <Link href={url!} target="_blank" >
        <button className="w-fit p-[10px] bg-white shadow smoothe hover:shadow-md rounded-xl flex items-center gap-2">
            <LinkImage linkType={linkType} />
            <h1 className="w-full text-left text-sm">
                {name}
            </h1>
        </button>
        </Link>
    )
}