'use client';

import { ReactNode } from "react";
import Content from "../Content";
import ContinueButton from "../ContinueButton";
import Platform, { PlatformType } from "./Platform";
import platforms from "@/data/platforms";
import { usePathname } from "next/navigation";

export default function Website({ children }: { children: ReactNode}) {
    const allPlatforms = platforms();
    const path = usePathname();
    const selected = path.split("/")[3];
    const currentPlatform: PlatformType | null = allPlatforms.find(platform => platform.name == selected) || null;

    return (
        <Content title="Add Chatbot to Your Website">
            <div className="flex-grow flex flex-col w-full h-full justify-between items-center gap-6 mb-[20px]">
                <Platform children={children} currentPlatform={currentPlatform} />
                <ContinueButton page="/test" disabled={!currentPlatform} />
            </div>
        </Content>
    )
}