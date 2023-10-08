import Robot from "@/components/icons/Robot";
import dosis from "@/fonts/dosis";
import Link from "next/link";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {    
    return (
        <div className="h-screen w-full flex flex-col items-center py-[20px] relative bg-blue-50">
            <Link href="/" className="flex gap-2 items-center">
                <div className="h-[33px]">
                    <Robot color="blue" />
                </div>
                <h2 className={`text-blue-600 text-[28px] font-semibold tracking-wider ${dosis.bold}`}>chat-fu</h2>
            </Link>
            {children}
        </div>
    )
}