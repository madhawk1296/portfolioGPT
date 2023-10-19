import dosis from "@/fonts/dosis";
import PageLink from "./PageLink";
import Usage from "./Usage";
import { ReactNode } from "react";

export default function Section({ children, title } : { children: ReactNode, title: string}) {
    return (
        <div className="w-full border-2 rounded-xl shadow bg-white p-[20px] flex flex-col gap-4">
            <h1 className={`w-fit text-[26px] ${dosis.bold} tracking-wide text-gray-800`}>{title}</h1>
            {children}
        </div>
    )
}