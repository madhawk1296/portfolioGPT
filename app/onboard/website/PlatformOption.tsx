import { EventHandler, MouseEvent } from "react";
import { PlatformType } from "./Platform";
import Code from "@/components/icons/Code";
import Image from "next/image";
import Squarespace from "@/components/logos/Squarespace";
import Link from "next/link";

export default function PlatformOption({ platform, selected }: { platform: PlatformType, selected: boolean}) {
    const { name, title, image } = platform;

    return (
        <Link href={`/onboard/website/${name}`}>
            <div className={`w-[100px] h-[100px] border-2 border-gray-300 rounded-lg shadow hover:shadow-md cursor-pointer smoothe flex flex-col gap-2 items-center justify-center ${selected && "bg-gray-200" }`}>
                {(name != "other") && <div className="w-[35px] h-[35px] relative flex justify-center items-center">
                    {name == "custom" ? <Code /> : name == "squarespace" ? <Squarespace /> : <Image alt="Platform Image" src={image!} width={60} height={60} /> }
                </div>}
                <h1 className="text-xs font-semibold tracking-wide text-gray-700">{title}</h1>
            </div>
        </Link>
    )
}