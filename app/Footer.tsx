import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full h-fit flex justify-between px-[25px] py-[10px] absolute bottom-0">
            <div className="flex flex-row gap-6 items-center">
                <h1 className="tracking-wide text-gray-600">Chat-fu, Inc. © 2023</h1>
                <Link href="/Terms">
                    <h1 className="underline text-sm tracking-wide text-gray-800">Terms</h1>
                </Link>
                <Link href="/Privacy">
                    <h1 className="underline text-sm tracking-wide text-gray-800">Privacy</h1>
                </Link>
            </div>
            <div className="flex items-center gap-6">
                <Link target="_blank" href="https://x.com/chat_fu_">
                    <Image alt="X logo" src="/x.png" width={15} height={15} />
                </Link>
                <Link target="_blank" href="https://github.com">
                    <Image alt="Github logo" src="/github.png" width={15} height={15} />
                </Link>
            </div>
        </div>
    )
}