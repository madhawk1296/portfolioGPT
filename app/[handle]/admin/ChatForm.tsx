import Plane from "@/components/icons/Plane";
import { ChangeEvent, FormEvent, useState } from "react";
import { MessageType } from "./Chat";
import { callChatbot } from "@/actions/callChatbot";
import { useRouter } from "next/navigation";
import { GithubInputType } from "@/tools/Integrate";

export default function ChatForm({ addMessage, messageHistory, isLoading, turnLoadingOff, turnLoadingOn, userId, github  }: { addMessage: (message: MessageType) => void, messageHistory: MessageType[], isLoading: boolean, turnLoadingOff: () => void, turnLoadingOn: () => void, userId: string, github: GithubInputType | null }) {
    const router = useRouter();
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
        formData.append('user_id', userId);
        formData.append('history', JSON.stringify(adjustedHistory));


        try{
            turnLoadingOn()

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

    const handleConnect = async () => {
        const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT
        const requestUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
        window.location.href = requestUrl;
    }
    
    return (
        <div className={`fixed bottom-0 pb-[0px] md:pb-[15px] w-full px-[10px] rounded-t-full flex flex-col justify-center items-center gap-2`}>
            <div className="relative w-full md:w-fit flex flex-col gap-[25px] items-end">
                {false && (
                    <button onClick={handleConnect} className="absolute left-0 top-0 -translate-y-[80px] px-[10px] py-[10px] border-2 rounded-xl shadow bg-white">
                        <h1 className="text-gray-800 tracking-wide">Connect AI to Github</h1>
                    </button>
                )}
                <form onSubmit={handleSend} className={`-translate-y-[15px] w-full md:w-[600px] bg-white border-2 rounded-xl h-[50px] shadow flex items-center pl-[15px] pr-[5px] ${isFocused ? "border-gray-600" : "border-gray-200"} smoothe flex gap-1 items-center`}>
                    <input value={currentMessage} onChange={handleChange} className="h-full w-full placeholder:text-gray-500 smoothe outline-none text-gray-800" placeholder="What do you want to know?" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                    <button type="submit" className="w-[30px]">
                        <Plane isFocused={isFocused} />
                    </button>
                </form>
            </div>
        </div>
    ) 
}