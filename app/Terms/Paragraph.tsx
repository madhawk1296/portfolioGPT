import dosis from "@/fonts/dosis";
import { ReactNode } from "react";

export default function Paragraph({ children }: { children: ReactNode}) {
    return (
        <p className={`text-xl tracking-wide text-gray-700 ${dosis.light} leading-relaxed`}>
            {children}   
        </p>
    )
}