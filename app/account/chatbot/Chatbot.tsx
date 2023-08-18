'use client'

import React, { ChangeEvent, FormEventHandler, useState } from "react";
import callChatbot from "@/lib/callChatbot";
import { MessageType } from "@/types/MessageType";
import ChatHistory from "@/components/ChatHistory";
import Robot from "@/components/icons/Robot";
import Arrow from "@/components/icons/Arrow";

export default function Chatbot({defaultMessage = null}: {defaultMessage?: string | null, landingPage?: boolean}){
    const defaultVal = defaultMessage ? [{sender: "bot", message: defaultMessage}] : []
    const [messageHistory, setMessageHistory] = useState<MessageType[]>(defaultVal)
    const [currentMessage, setCurrentMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);
    const [chatHidden, setChatHidden] = useState<boolean>(false);

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
            alert(e.message)
        }finally{
            setLoading(false)
        }
    }

    const openChat = () => {
        setChatHidden(false);
    }

    const closeChat = () => {
        setChatHidden(true);
    }

    return(
        <div className="flex flex-col gap-[20px]">
            <div className={`relative w-[400px] h-[500px] bg-gray-200 rounded-md flex flex-col smoothe ${chatHidden ? "opacity-0" : "opacity-100"}`}>
                <ChatHistory messageHistory={messageHistory} loading={loading}/>
                <div className="relative w-full p-[10px] flex justify-center">
                    <h1 className="w-fit font-medium text-gray-500 tracking-wide">
                        Powered by <a className="text-gray-600 underline" href="http://localhost:3000" target="_blank">Chatfolio</a>
                    </h1>
                </div>
                <form onSubmit={sendMessage} className={`relative w-full bg-black h-[50px] flex border border-gray-300 rounded-md overflow-hidden smoothe shadow-md hover:shadow-lg bg-white`}>
                    <input value={currentMessage} onChange={changeMessage} type='text' placeholder='Ask me anything...' className={`w-full px-[10px] outline-none`} />
                    <button type='submit' className="h-full bg-blue-400 text-white font-medium tracking-wider px-[10px] hover:bg-blue-500 smoothe ">
                        Submit
                    </button>
                </form>
            </div>
            <button onClick={chatHidden ? openChat : closeChat} className="self-end w-[60px] h-[60px] rounded-full bg-blue-500 shadow-lg p-[13px] flex items-center">{chatHidden ? <Robot /> : <Arrow />}</button>
        </div>
    )
}