'use client';

import Check from "@/components/icons/Check";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckInstalled({ installedChatbot }: {installedChatbot: boolean}) {
    const router = useRouter();

    const refresh = () => {
        router.refresh();
    }

    useEffect(() => {
        if(!installedChatbot) {    
            const intervalId = setInterval(refresh, 5000); // Run refresh every 5 seconds
        
            return () => {
            clearInterval(intervalId); // Clear the interval when the component unmounts
            };
        }

      }, []);

    return (
        <div className="min-w-[185px] w-fit px-[15px] py-[10px] border-2 border-gray-600 rounded-lg flex items-center justify-center gap-2">
            <h1 className="text-xs font-medium tracking-wide">{installedChatbot ? "Chatbot installed" : "Waiting for response"}</h1>
            {installedChatbot ? (
                <div className="w-[16px] flex justify-center items-center">
                    <Check />
                </div> 
            ) : <Image alt="loading" src="/loading.gif" width={16} height={16} />}
        </div>
    )
}