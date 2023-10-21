import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full h-fit flex justify-between px-[25px] py-[10px] absolute bottom-0">
            <div className="text-sm flex flex-row gap-6 items-center">
                <h1 className="tracking-wide text-gray-500">© Chat-fu, Inc.</h1>
            </div>
            <div className="flex items-center gap-6">
                <Link href="/Terms">
                    <h1 className="underline text-sm tracking-wide text-gray-500">Terms</h1>
                </Link>
                <Link href="/Privacy">
                    <h1 className="underline text-sm tracking-wide text-gray-500">Privacy</h1>
                </Link>
            </div>
        </div>
    )
}