'use client';

import Download from "@/components/icons/Download";
import Detail from "./Detail";
import ModifyText from "./ModifyText";
import CodeSnippet from "./CodeSnippet";
import Copy from "@/components/icons/Copy";
import TutorialContainer from "./TutorialContainer";
import { CopyBlock, irBlack } from "react-code-blocks";

export default function Wix({ apiKey }: { apiKey: string}) {
    const snippet = `<script src='https://chatfolio.org/chatbot?id=${apiKey}' async defer/>`;

    const copy = () => {
        navigator.clipboard.writeText(snippet);
    }

    return (
        <TutorialContainer title="Wix Tutorial">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-xs font-medium tracking-wide">Code Snippet</h1>
                <button onClick={copy} className="relative border-2 border-gray-600 smoothe hover:border-gray-800 shadow hover:shadow-md cursor-pointer rounded-xl px-[10px] py-[10px] flex justify-start items-center gap-2 active:translate-y-[1.5px] bg-gray-200">
                    <h1 className="text-xs font-medium tracking-wide">{snippet}</h1>
                    <div className="absolute top-[10px] right-[10px] w-[20px] h-[20px]">
                        <Copy />
                    </div>
                </button>
            </div>
            <Detail>1. Go to <ModifyText bold={true} >Settings</ModifyText> in your site's dashboard. </Detail>
            <Detail>2. Click the <ModifyText bold={true} >Custom Code</ModifyText> tab in the <ModifyText bold={true} >Advanced</ModifyText> section..</Detail>
            <Detail>3. Click <ModifyText bold={true} >+ Add Custom Code</ModifyText> at the top right.</Detail>
            <Detail>4. Paste the <ModifyText bold={true} >code snippet</ModifyText> in the text box then enter a name for your code.</Detail>
            <Detail>5. Select an option under <ModifyText bold={true} >Add Code to Pages</ModifyText>. Choose <ModifyText bold={true}>All pages</ModifyText> to apply on all pages, or <ModifyText bold={true}>Choose specific pages</ModifyText> to apply on specific pages.</Detail>
            <Detail>6. Under <ModifyText bold={true}>Place Code in</ModifyText>, choose <ModifyText bold={true}>Head</ModifyText>. Then click <ModifyText>Apply</ModifyText>.</Detail>
        </TutorialContainer>
    )
}