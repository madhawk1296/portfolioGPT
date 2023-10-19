import dosis from "@/fonts/dosis";
import MessagesChart from "./MessagesChart";
import { Tables } from "@/types/tables";

export default function Usage({ calls }: { calls: Tables<"api_calls">[] }) {  
    return (
        <div className="relative w-full flex flex-col">
            <MessagesChart calls={calls} />
            <h1 className="text-gray-800 tracking-wide">Your page received <span className={`text-blue-600 ${dosis.bold}`}>{calls.length}</span> messages in the last 30 days</h1>
        </div>
    )
}