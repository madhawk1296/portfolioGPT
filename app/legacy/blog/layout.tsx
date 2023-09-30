import { ReactNode } from "react";
import Header from "./Header";


export default function Layout({ children }: {children: ReactNode}) {
    return (
        <div className="relative w-full h-full overflow-y-auto overflow-x-hidden flex flex-col items-center overflow-scroll">
            <Header />
            {children}
        </div>
    )
}