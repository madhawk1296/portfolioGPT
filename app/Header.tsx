import Robot from "@/components/icons/Robot";
import dosis from "@/fonts/dosis";
import Link from "next/link";

export default function Header() {
    return (
        <div className="sticky top-0 bg-white w-full h-[65px] bg-white flex justify-between px-[10px] md:px-[100px] items-center z-500 shadow">
            <Link href="/">
                <button className="flex gap-2 items-center">
                    <div className="h-[33px]">
                        <Robot color="blue" />
                    </div>
                    <h2 className={`text-blue-600 text-[28px] font-semibold tracking-wider ${dosis.bold}`}>chat-fu</h2>
                </button>
            </Link>
            <div className={`flex gap-4 items-center ${dosis.medium}`}>
                <Link href="/Upgrade">
                    <button className="text-gray-600 px-[10px] py-[8px] tracking-wide rounded-xl text">Upgrade</button>
                </Link>
                <Link href="/Account/Login">
                    <button className="text-gray-600 px-[10px] py-[8px] tracking-wide rounded-xl text">Log in</button>
                </Link>
                <Link href="/Account/Create">
                    <button className="bg-blue-600 px-[10px] py-[8px] text-white tracking-wide rounded-xl shadow smoothe hover:shadow-md text">Create a Page</button>
                </Link>
            </div>
        </div>
    )
}