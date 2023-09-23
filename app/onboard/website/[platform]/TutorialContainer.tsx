import { ReactNode } from "react";

export default function TutorialContainer({ children, title }: {children: ReactNode, title: string}) {
    return (
        <div className="w-full h-full flex flex-col gap-5 pb-[20px]">
            <h1 className="text-lg font-semibold tracking-wide">{title}</h1>
            {children}
        </div>
    )
}