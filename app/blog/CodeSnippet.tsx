'use client';

import Copy from "@/components/icons/Copy";

export default function CodeSnippet() {
    const text = "<script src='https://chatfolio.org/chatbot?id=uniqueID' async defer/>"

    const copy = () => {
        navigator.clipboard.writeText(text);
    }

    return(
        <div onClick={copy} className="self-center relative border-2 border-gray-600 smoothe hover:border-gray-800 shadow hover:shadow-md cursor-pointer rounded-xl px-[10px] py-[10px] flex justify-start items-center gap-2 active:translate-y-[1.5px] bg-gray-200">
            <h4 className="text-sm font-medium tracking-wide">{text}</h4>
            <div className="w-[20px] relative">
                <Copy />
            </div>
        </div>
    )
}