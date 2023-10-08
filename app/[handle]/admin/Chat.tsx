'use client'

import ChatHistory from "./ChatHistory";
import ChatForm from "./ChatForm";
import { useState } from "react";
import { Tables } from "@/types/supabase";

export type MessageType = {
    content: string,
    sender: 'user' | 'bot'
}

export default function Chat({ user_id }: { user_id: string}) {
    const [messageHistory, setMessageHistory] = useState<MessageType[]>([]) 
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const addMessage = (message: MessageType) => {
        const { sender, content } = message;
        setMessageHistory((prevHistory) => prevHistory.concat({ sender, content }));
    }

    const turnLoadingOn = () => {
        setIsLoading(true)
    }

    const turnLoadingOff = () => {
        setIsLoading(false)
    }

    return (
        <div className="relative h-full w-full flex flex-col items-center pb-[25px]">
            <ChatHistory messageHistory={messageHistory} isLoading={isLoading} />
            <ChatForm messageHistory={messageHistory} addMessage={addMessage} isLoading={isLoading} turnLoadingOn={turnLoadingOn} turnLoadingOff={turnLoadingOff} userId={user_id!} />
        </div>
    )
}