'use client';

import Login from "@/components/hooks/Login";

export default function CreateChatbotButton() {
    const handleLogin = Login();

    const handleClick = async () => {
        await handleLogin();
    }

    return (
        <button onClick={handleClick} className="p-[10px] bg-blue-600 rounded-lg shadow-md tracking-wide smoothe hover:shadow-lg text-white text-sm font-semibold">
            Create a Free Chatbot
        </button>
    )
}