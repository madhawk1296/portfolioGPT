'use client';

import { ReactNode, useState } from "react"
import PlatformOption from "./PlatformOption"
import { usePathname } from "next/navigation";
import plaforms from "@/data/platforms";
import platforms from "@/data/platforms";

export type PlatformType = {
    name: string,
    title: string,
    image: string | null
}

export default function Platform({ children, currentPlatform }: { children: ReactNode, currentPlatform: PlatformType | null }) {
    const allPlatforms = platforms();

    return (
        <div className="flex w-full flex-col gap-4">
            <h1 className="font-semibold text-gray-800 tracking-wide">Which platform is your website built on?</h1>
            <div className="flex gap-4 flex-wrap">
                {allPlatforms.map((platform, index) => <PlatformOption key={index} platform={platform} selected={currentPlatform?.name == platform.name}  />)}
            </div>
            {children}
        </div>
    )
}