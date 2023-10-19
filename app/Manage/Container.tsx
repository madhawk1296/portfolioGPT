import dosis from "@/fonts/dosis";
import { ReactNode } from "react";

export default function Container({ title, children }: { title: string, children: ReactNode }) {
    return (
        <div className="relative flex w-full flex flex-col py-[30px] px-[80px] gap-4">
            <h1 className={`text-4xl ${dosis.bold} tracking-wide`}>{title}</h1>
            {children}
        </div>
    )
}