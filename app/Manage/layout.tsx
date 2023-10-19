import dosis from "@/fonts/dosis";
import Header from "../Header";
import Tab from "./Tab";
import { ReactNode } from "react";
import Nav from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-h-screen h-full flex flex-col items-center bg-gray-50">
            <Header />
            <div className="flex w-full pt-[65px] max-w-[1200px]">
                <Nav />
                {children}
            </div>
        </div>
    )
}