import Plane from "@/components/icons/Plane";
import { ChangeEvent, FormEvent, useState } from "react";
import { MessageType } from "./Chat";
import { Message } from "postcss";
import { callChatbot } from "@/actions/callChatbot";


export default function ChatForm({ addMessage, messageHistory, isLoading, turnLoadingOff, turnLoadingOn, userId  }: { addMessage: (message: MessageType) => void, messageHistory: MessageType[], isLoading: boolean, turnLoadingOff: () => void, turnLoadingOn: () => void, userId: string }) {
    const [currentMessage, setCurrentMessage] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(e.target.value); 
    }

    const addMessageToHistory = (prevHistory: MessageType[], message: MessageType) => {
        return prevHistory.concat(message);
    }

    const handleSend = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newMessage: MessageType = { 
            sender: "user",
            content: currentMessage
        }

        addMessage(newMessage)

        const adjustedHistory = addMessageToHistory(messageHistory, newMessage)
        setCurrentMessage('');

        const formData = new FormData();
        formData.append('history', JSON.stringify(adjustedHistory));


        try{
            turnLoadingOn()
            const formData = new FormData()
            formData.append('user_id', userId);
            formData.append('history', JSON.stringify(adjustedHistory));

            const botRes: MessageType = { 
                sender: 'bot', 
                content: await callChatbot(formData)
            }

            addMessage(botRes);

        }catch(e: any){
            console.log(e);
        } finally {
            turnLoadingOff();
        }
    }

    return (
        <div className={`fixed bottom-0 md:pb-[15px] w-full rounded-t-full bg-blue-50 flex justify-center px-[10px]`}>
            <form onSubmit={handleSend} className={`-translate-y-[15px] w-full md:w-fit md:w-[600px] bg-white border-2 rounded-xl h-[50px] shadow flex items-center pl-[15px] pr-[5px] ${isFocused ? "border-gray-600" : "border-gray-200"} smoothe flex gap-1 items-center`}>
                <input value={currentMessage} onChange={handleChange} className="h-full w-full placeholder:text-gray-500 smoothe outline-none text-gray-800" placeholder="What do you want to know?" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                <button type="submit" className="w-[30px]">
                    <Plane isFocused={isFocused} />
                </button>
            </form>
        </div>
    ) 
}