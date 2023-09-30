import dosis from "@/fonts/dosis";
import { ReactNode } from "react";

export default function Container({ children, title }: { children: ReactNode, title: string}) {
    return (
        <div className="mt-[50px] w-[400px] bg-white border-2 rounded-xl shadow py-[30px] px-[30px] flex flex-col gap-6">
            <h1 className={`text-center ${dosis.bold} text-3xl tracking-wide text-gray-800`}>{title}</h1>
            {children}
        </div>
    )
}