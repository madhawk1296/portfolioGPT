'use client'

import Chain from "@/components/icons/Chain";
import { useState } from "react";

export default function PageLink({ handle }: { handle: string}) {
    const [copied, setCopied] = useState(false)

    const copyLink = () => {
        navigator.clipboard.writeText(`https://chat-fu.com/${handle}`);
        setCopied(true)
    };

    return (
        <div className="flex items-center gap-2">
            <button onClick={copyLink} className={`w-fit text-lg tracking-wide text-gray-500 flex items-center gap-[1px]`}>
                <div className="relative h-[20px]">
                    <Chain />
                </div>
                chat-fu.com/{handle}
            </button>
            {copied && <h1 className="text-gray-700 tracking-wide">- Copied!</h1>}
        </div>
    )
}