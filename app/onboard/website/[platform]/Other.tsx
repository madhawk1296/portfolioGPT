'use client';

import { ChangeEvent, useState } from "react";

export default function Other() {
    const [platform, setPlatform] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
        setPlatform(e.target.value);
    }

    return (
        <div className="flex flex-col gap-2 pb-[35px]">
            <h1 className="text-sm font-medium text-gray-800 tracking-wide">Which platform is your website built on?</h1>
            <div className="relative flex gap-3 items-center">
                <input className="relative w-[200px] border-2 border-gray-400 rounded-lg outline-gray-600 px-[10px] py-[5px]" placeholder="Drupal"  />
                <button value={platform} onChange={handleChange} className="h-[38px] px-[10px] text-sm tracking-wide font-semibold bg-green-500 text-white shadow hover:shadow-md rounded-lg cursor-pointer">Submit</button>
            </div>
        </div>
    )
}