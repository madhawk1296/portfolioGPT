import { useState } from "react"
import Message from "./Message"
import { MessageType } from "./Chat"

export default function ChatHistory({ messageHistory, isLoading }: {messageHistory: MessageType[], isLoading: boolean }) {
    const history = isLoading ? messageHistory.concat({sender: "bot", content: "..."})  : messageHistory

    return (
        <div className="w-full md:w-[600px] flex flex-col gap-2 pb-[100px]">
            {history.map((message, index) => <Message key={index} message={message} />)}
        </div>
    )
}