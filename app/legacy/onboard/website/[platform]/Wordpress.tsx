'use client';

import Download from "@/components/icons/Download";
import Detail from "./Detail";
import ModifyText from "./ModifyText";
import CodeSnippet from "./CodeSnippet";
import Copy from "@/components/icons/Copy";
import TutorialContainer from "./TutorialContainer";

export default function Wordpress({ apiKey }: { apiKey: string}) {
    const zipFileUrl = '/chatfolio.zip'

    const copyKey = () => {
        navigator.clipboard.writeText(apiKey);
    }
    
    return (
        <TutorialContainer title="WordPress Tutorial">
            <div className="flex w-full items-center justify-center gap-5">
                <a href={zipFileUrl} download>
                    <button className="border-2 border-gray-600 smoothe hover:border-gray-800 shadow hover:shadow-md cursor-pointer rounded-xl px-[10px] py-[10px] flex justify-center items-center gap-2 active:translate-y-[1.5px]">
                        <h1 className="text-xs font-medium tracking-wide">Chatfolio Plugin</h1>
                        <div className="relative h-[22px]">
                            <Download />
                        </div>
                    </button>
                </a>
                <div onClick={copyKey} className="relative border-2 border-gray-600 smoothe hover:border-gray-800 shadow hover:shadow-md cursor-pointer rounded-xl h-[46px] w-fit px-[15px] flex flex-row gap-2 items-center active:translate-y-[1.5px]">
                    <h1 className="text-xs font tracking-wide">Chatfolio ID:</h1>
                    <h1 className="text-xs font-bold tracking-wide">{apiKey.slice(0,3)}...{apiKey.slice(-4, -1)}</h1>
                    <div className="relative w-[20px] h-[20px]">
                        <Copy />
                    </div>
                </div>
            </div>
            <Detail>1. Log in to your WordPress dashboard and navigate to <ModifyText bold={true} >Plugins {'>'} Add New</ModifyText>. </Detail>
            <Detail>2. Click the <ModifyText bold={true} >Upload Plugin</ModifyText> button at the top, then <ModifyText>Choose File</ModifyText> and select the downloaded <a href={zipFileUrl} download><ModifyText bold={true} button={true} >chatfolio plugin</ModifyText></a>.</Detail>
            <Detail>3. Once uploaded, click  <ModifyText bold={true} >Activate</ModifyText> to enable the Chatfolio plugin.</Detail>
            <Detail>4. Head over to <ModifyText bold={true} >Settings {'>'} Chatfolio Script</ModifyText> and paste your unique Chatfolio ID, then save your changes.</Detail>
        </TutorialContainer>
    )
}