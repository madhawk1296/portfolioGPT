import Message from "./Message"
import { MessageType } from "./Chat"
import { GithubInputType } from "@/tools/Integrate"

export default function ChatHistory({ github, messageHistory, isLoading }: {messageHistory: MessageType[], isLoading: boolean, github: GithubInputType | null }) {
    const history = isLoading ? messageHistory.concat({sender: "bot", content: "..."})  : messageHistory

    return (
        <div className={`w-full md:w-[600px] flex flex-col gap-2 ${github ? "pb-[100px]" : "pb-[150px]"}`}>
            {history.map((message, index) => <Message key={index} message={message} />)}
        </div>
    )
}