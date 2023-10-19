'use client'

import { usePathname } from "next/navigation";
import Tab from "./Tab";

export default function Nav() {
    const path = usePathname();
    const currentPage = path.split("/")[2] || "Home" as "Home" | "Billing"

    return (
        <div className="w-[250px] py-[30px] flex flex-col gap-4">
            <Tab title="Home" page="" selected={currentPage == "Home"} />
            <Tab title="Billing" page="Billing" selected={currentPage == "Billing"} />
        </div>
    )
}