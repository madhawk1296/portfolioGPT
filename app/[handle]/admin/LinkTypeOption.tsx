import Image from "next/image";
import { ReactNode } from "react";

export default function LinkTypeOption({ linkType }: { linkType: {name: string, title: string} }) {
    const { title, name } = linkType;

    return <option className="flex items-center gap-2 text-gray-800 tracking-wide" value={name}>{title}</option>
}