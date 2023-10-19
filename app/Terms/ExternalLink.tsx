import dosis from "@/fonts/dosis";
import Link from "next/link";
import { ReactNode } from "react";

export default function ExternalLink({ link, children }: { link: string, children: ReactNode}) {
    return (
        <Link target="_blank" className={`${dosis.medium} text-blue-500`} href={link}>{children}</Link>
    )
}