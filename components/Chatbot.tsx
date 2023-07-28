'use client'

import React, { ChangeEvent, FormEventHandler, useState } from "react";
import ChatHistory from "./ChatHistory";
import callChatbot from "@/lib/callChatbot";
import { MessageType } from "@/types/MessageType";

export default function Chatbot(){
    const [messageHistory, setMessageHistory] = useState<MessageType[]>([])
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
            alert(e.message)
        }finally{
            setLoading(false)
        }
    }
    
    return(
        <div className="relative w-[600px] bg-gray-200 rounded-md ">
            <ChatHistory messageHistory={messageHistory} loading={loading}/>
            <form onSubmit={sendMessage} className="relative w-full gap-2 h-[50px] flex border border-gray-300 rounded-md overflow-hidden smoothe shadow-md hover:shadow-lg bg-white">
                <input value={currentMessage} onChange={changeMessage} type='text' placeholder='Ask me anything...' className="w-full px-[10px] outline-none"/>
                <button type='submit' className="h-full bg-blue-400  text-white font-medium tracking-wider px-[10px] hover:bg-blue-500 smoothe ">
                    Submit
                </button>
            </form>
        </div>
    )
}