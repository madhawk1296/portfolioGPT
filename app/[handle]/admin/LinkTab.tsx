import { LinkType } from "./Links";
import Link from "next/link";
import { Json } from "@/types/supabase";
import LinkImage from "./LinkImage";
import Trash from "@/components/icons/Trash";
import removeLink from "@/actions/removeLink";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LinkTab({ link, index }: {link: Json, index: number}) {
    const { name, url, linkType } = link as LinkType;
    const router = useRouter()
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await removeLink(index);
        router.refresh()
    }

    return (
        <Link href={url!} target="_blank" >
            <div className="relative flex items-center gap-2 h-[40px]">
                <button className="w-fit p-[10px] bg-white shadow smoothe hover:shadow-md rounded-xl flex items-center gap-2">
                    <LinkImage linkType={linkType} />
                    <h1 className="w-full text-left text-sm">
                        {name}
                    </h1>
                </button>
                <form onSubmit={handleSubmit} className="relative h-full">
                    <button type="submit" className="relative h-full bg-white shadow hover:shadow-md rounded-xl py-[10px] px-[5px] flex items-center justify-center">
                        <Trash />
                    </button>
                </form>
            </div>
        </Link>
    )
}