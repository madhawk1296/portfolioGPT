'use client';

import ChatHistory from "./ChatHistory";
import callChatbot from "@/lib/callChatbot";
import { MessageType } from "@/types/MessageType";
import { ChangeEvent, useState } from "react";

export default function Chatbot({ defaultMessage, color, removeBranding }: {defaultMessage: string | null, color: string | null, removeBranding: boolean | null}) {
    const defaultVal = defaultMessage ? [{sender: "bot", message: defaultMessage}] : []
    const [messageHistory, setMessageHistory] = useState<MessageType[]>(defaultVal)
    const [currentMessage, setCurrentMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const changeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(e.target.value)
    }

    const addMessageToHistory = (sender: string, message: string) => {
        setMessageHistory((prevHistory) => prevHistory.concat({ sender, message }));
    };

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const tempMessage = currentMessage
        const adjustedHistory = messageHistory.concat({sender: "user", message: tempMessage})
        addMessageToHistory('user', currentMessage)
        setCurrentMessage('')
        
        try{
            setLoading(true)
            const response = await callChatbot(adjustedHistory)
            addMessageToHistory('bot', response)
        }catch(e: any){
            alert(e)
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="relative w-full h-full flex flex-col gap-[20px] rounded-lg bg-gray-200 overflow-hidden shadow">
            <div className={`relative w-full h-full rounded-sm flex flex-col smoothe overflow-hidden`}>
                <ChatHistory messageHistory={messageHistory} loading={loading} chatbotColor={color} />
                <form onSubmit={sendMessage} className={`relative w-full h-[40px] flex border-2 border-gray-300 rounded-lg overflow-hidden smoothe`}>
                    <input value={currentMessage} onChange={changeMessage} type='text' placeholder='Ask me anything...' className={`w-full px-[10px] outline-none text-sm text-gray-800 font-medium`} />
                    <button type='submit' style={{backgroundColor: color!}} className="h-full text-sm text-white font-medium tracking-wider px-[10px] smoothe opacity-80 hover:opacity-100 ">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}