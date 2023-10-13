'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import LinkTab from "./LinkTab"
import { Json } from "@/types/supabase"
import LinkTypeOption from "./LinkTypeOption";
import Website from "@/components/icons/Website";
import addLink from "@/actions/addLink";
import { useRouter } from "next/navigation";

export type LinkType = {
    name: string,
    url: string,
    linkType: string
}

export default function Links({ links }: { links: Json[]}) {
    const linkTypes = [
        {
            title: "Website",
            name: "website",
        },
        {
            title: "X",
            name: "x",
        },        
        {
            title: "LinkedIn",
            name: "linkedin",
        },        
        {
            title: "Instagram",
            name: "instagram",
        },
    ]

    const router = useRouter();
    const [isActive, setActive] = useState<boolean>(false);
    const [linkType, setLinkType] = useState<string>(linkTypes[0].name)
    const [name, setName] = useState<string>("");
    const [link, setLink] = useState<string>("");

    const turnOffActive = () => {
        setActive(false)
    }

    const turnOnActive = () => {
        setActive(true);
    }

    const handleLinkType = (e: ChangeEvent<HTMLSelectElement>) => {
        setLinkType(e.target.value)
    }

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleLink = (e: ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("submitting...")
        
        const formData = new FormData()
        formData.append("link_type", linkType)
        formData.append("name", name)
        formData.append("url", link)

        await addLink(formData);

        router.refresh();
        setActive(false);
        setName("");
        setLink("");

    } 

    return (
        <div className="relative w-full flex flex-col gap-4 pt-[20px] items-start md:items-end">
            {links.map((link, index) => <LinkTab key={index} index={index} link={link} />)}
            {isActive ? (
                <form onSubmit={handleSubmit} className="h-fit md:w-[200px] p-[10px] flex flex-col gap-2 relative border-2 rounded-xl bg-white" >
                    <h1 className="text-gray-800">Link Type</h1>
                    <select onChange={handleLinkType} value={linkType} className="outline-none h-[35px] aspect-square border-2 border-gray-500 rounded-lg px-[10px]">
                        {linkTypes.map((linkType, index) => <LinkTypeOption key={index} linkType={linkType} />)}
                    </select>
                    <h1 className="text-gray-800">Name</h1>
                    <input required value={name} onChange={handleName} className="text-sm h-[35px] border-2 border-gray-500 rounded-lg w-full px-[10px] outline-none" placeholder="@handle" />
                    <h1 className="text-gray-800">Link</h1>
                    <input required value={link} onChange={handleLink} className="text-sm h-[35px] border-2 border-gray-500 rounded-lg w-full px-[10px] outline-none" placeholder="https://x.com/yourhandle" />
                    <div className="w-full flex justify-between items-center mt-[10px]">
                        <button onClick={turnOffActive} className="rounded-xl px-[10px] py-[3px] bg-red-400 text-white tracking-wide shadow">Cancel</button>
                        <button className="rounded-xl px-[10px] py-[3px] bg-green-500 text-white tracking-wide shadow">Add</button>
                    </div>
                </form>
            ) : (
                <button onClick={turnOnActive} className="relative w-[150px] h-fit py-[5px] bg-white shadow smoothe hover:shadow-md rounded-xl border-2 flex justify-center items-center">
                    <h1 className="text-gray-800 tracking-wide ">Add links +</h1>
                </button>
            )}
        </div>
    )
}