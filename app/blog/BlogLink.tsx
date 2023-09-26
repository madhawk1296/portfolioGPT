import Link from "next/link";
import { ReactNode } from "react";

export default function BlogLink({ link, children }: {link: string, children: ReactNode}) {
    return (
        <Link href={link} target="_blank" className="underline text-blue-500">{children}</Link>
    )
}