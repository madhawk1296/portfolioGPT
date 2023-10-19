import { ReactNode } from "react";

export default function ListPoint({ children, index}: { children: ReactNode, index: number}) {
    return (
        <span><br />{index}. {children} <br/></span>
    )
}