import { MessageType }  from "@/types/MessageType";
import Message from "./Message";

export default function ChatHistory({messageHistory, loading, chatbotColor=null}: {messageHistory: MessageType[], loading: boolean, chatbotColor?: string | null}){
    const adjustedHistory = loading ? messageHistory.concat({sender: "bot", message: "..."}) : messageHistory
    
    return(
        <div className="relative w-full h-full min-h-[400px] overflow-y-auto ">
            <div className="relative w-full h-fit flex flex-col gap-1 py-[20px] px-[20px] overflow-y-scroll">
                {adjustedHistory.map((message, index) => <Message key={index} message={message} chatbotColor={chatbotColor} />)}
            </div>
        </div>
    )
}