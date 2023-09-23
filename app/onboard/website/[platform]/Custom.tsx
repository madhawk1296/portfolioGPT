'use client';

import Download from "@/components/icons/Download";
import Detail from "./Detail";
import ModifyText from "./ModifyText";
import CodeSnippet from "./CodeSnippet";
import Copy from "@/components/icons/Copy";
import TutorialContainer from "./TutorialContainer";
import { CopyBlock, irBlack } from "react-code-blocks";

export default function Custom({ apiKey }: { apiKey: string}) {
    const snippet = `<script src='https://chatfolio.org/chatbot?id=${apiKey}' async defer/>`;

    const copy = () => {
        navigator.clipboard.writeText(snippet);
    }

    return (
        <TutorialContainer title="Custom Tutorial">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-xs font-medium tracking-wide">Code Snippet</h1>
                <button onClick={copy} className="relative border-2 border-gray-600 smoothe hover:border-gray-800 shadow hover:shadow-md cursor-pointer rounded-xl px-[10px] py-[10px] flex justify-start items-center gap-2 active:translate-y-[1.5px] bg-gray-200">
                    <h1 className="text-xs font-medium tracking-wide">{snippet}</h1>
                    <div className="absolute top-[10px] right-[10px] w-[20px] h-[20px]">
                        <Copy />
                    </div>
                </button>
            </div>
            <Detail>1. Paste the <ModifyText bold={true}>code snippet</ModifyText> inside the <ModifyText bold={true}>{"<head></head>"}</ModifyText> tags of your website for every page where you want the chatbot to appear..</Detail>
        </TutorialContainer>
    )
}