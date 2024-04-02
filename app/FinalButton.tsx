'use client';

import Login from "@/components/hooks/Login";

export default function FinalButton() {
    const handleLogin = Login();

    const handleClick = async () => {
        await handleLogin();
    }

    return (
        <button onClick={handleClick} className="px-[15px] py-[10px] rounded-lg bg-orange-500 hover:orange-600 text-lg font-medium tracking-wide text-white shadow hover:shadow-md">Create your Chatbot</button>
    )
}