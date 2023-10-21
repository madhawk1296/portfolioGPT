import { MessageType } from "../Chat";

export default function Message({ message }: { message: MessageType}) {
    const { content, sender } = message;
    const isBot = sender == 'bot';

    return (
        <div className={`${isBot ? "bg-blue-500 text-white self-start border-blue-200" : "bg-white text-gray-800 self-end"} border-2 shadow p-[10px] rounded-xl tracking-wider w-fit max-w-[80%]`}>
            {content}
        </div>
    )
}