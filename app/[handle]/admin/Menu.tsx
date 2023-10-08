import dosis from "@/fonts/dosis";
import { ReactNode } from "react";

export default function Menu({ children, isActive }: { children: ReactNode, isActive: boolean }) {
    return (
        <div className={`absolute right-0 translate-x-[105%] top-1/2 -translate-y-1/2 w-[300px] h-[250px] bg-white shadow-lg border-2 border-gray-400 rounded-xl smoothe p-[10px] flex flex-col gap-2 overflow-scroll ${isActive ? "opacity-100" : "opacity-0 hidden"} `} >
            {children}
        </div>
    )
}