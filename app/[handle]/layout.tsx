import { ReactNode } from "react";
import Header from "./Header";
import dosis from "@/fonts/dosis";
import '../globals.css'

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <div className={`relative w-full max-w-screen overflow-x-hidden h-full min-h-screen relative bg-blue-50 ${dosis.medium}`}>
            <div className="relative w-full h-fit pt-[60px]">
                <div className="relative w-full h-fit">
                    {children}
                </div>
            </div>
            <Header />
        </div>
    )
}