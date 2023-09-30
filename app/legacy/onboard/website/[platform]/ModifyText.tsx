import { ReactNode } from "react";

export default function ModifyText({ children, bold=false, button=false }: {children: ReactNode, bold?: boolean, button?: boolean}) {
    return (
        <span className={`${bold && "font-bold"} ${button && "text-blue-600 hover:text-blue-700 smoothe underline cursor-pointer"}`}>{children}</span>
    )
}