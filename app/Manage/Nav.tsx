'use client'

import { usePathname } from "next/navigation";
import Tab from "./Tab";

export default function Nav() {
    const path = usePathname();
    const currentPage = path.split("/")[2] || "Home" as "Home" | "Billing"

    return (
        <div className="md:w-[250px] py-[10px] md:py-[30px] flex flex-row md:flex-col gap-4 justify-center md:justify-start">
            <Tab title="Home" page="" selected={currentPage == "Home"} />
            <Tab title="Billing" page="Billing" selected={currentPage == "Billing"} />
        </div>
    )
}