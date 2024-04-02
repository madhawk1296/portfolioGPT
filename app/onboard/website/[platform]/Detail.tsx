import { ReactNode } from "react";

export default function Detail({ children }: { children: ReactNode}) {
    return (
        <h1 className="text-sm text-gray-800">{children}</h1>
    )
}