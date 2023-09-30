import dosis from "@/fonts/dosis";
import Image from "next/image";

export default function Profile() {
    return (
        <div className="relative h-fit w-fit flex items-center absolute top-0 -translate-y-[15px]">
            <Image className="shadow border-2 border-white rounded-full" alt="Profile" src="/blog/author.avif" width={125} height={125} />
            <div className="w-fit h-full flex flex-col px-[20px] gap-1">
                <h1 className="text-[28px] tracking-wide text-gray-800">Cristian Silva</h1>
                <h1 className={`w-fit text tracking-wide text-gray-100 px-[10px] py-[3px] rounded-xl bg-gray-900 ${dosis.light}`}>Developer</h1>
            </div>
        </div>
    )
}