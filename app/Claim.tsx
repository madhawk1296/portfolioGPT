'use client';

import dosis from "@/fonts/dosis";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Claim() {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/Account/Create');
    };

    return (
        <form onSubmit={handleSubmit} className={`flex items-center shadow-md rounded-full border-2 border-gray-200 w-[400px] h-[80px] pl-[30px] pr-[5px] py-[5px] smoothe ${isFocused ? "border-gray-600" : "border-gray-200"} ${dosis.bold} justify-between`}>
            <div className="flex gap-1 items-center">
                <h1 className={`text-right w-[220px] text-xl tracking-wide text-gray-600`}>chat-fu.com/</h1>
                <input className={`w-full text-xl tracking-wide text-gray-500 placeholder:text-gray-400 outline-none`} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder="your name" />
            </div>
                <button type="submit" className="px-[30px] h-full rounded-full text-lg tracking-wide bg-blue-600 text-white smoothe hover:bg-blue-700 shadow-sm">claim</button>
        </form>
    )
}