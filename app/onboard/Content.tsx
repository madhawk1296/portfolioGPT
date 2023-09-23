import { ReactNode } from "react";

export default function Content({ title, children }: {title: string, children: ReactNode}) {
    return (
        <div className="relative h-full w-full md:w-[500px] smoothe min-h-[400px] bg-gray-100 md:border-2 border-gray-300 rounded-xl md:shadow-md px-[20px] md:p-[20px] flex flex-col gap-4 overflow-scroll">
            <h1 className="text-2xl font-semibold tracking-wide">{title}</h1>
            {children}
        </div>
    )
}