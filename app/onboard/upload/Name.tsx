'use client';

import { ChangeEvent, useState } from "react";

export default function Name({ changeName, name }: { changeName: (value: string) => void, name: string }) {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeName(e.target.value);
    }

    return (
        <div className="w-full flex flex-col gap-1">
            <h1 className="font-medium text-gray-800 tracking-wide">Name</h1>
            <input type="text" value={name} onChange={handleChange} className="w-full md:w-fit px-[10px] py-[5px] border-2 border-gray-300 outline-gray-500 smoothe rounded-lg overflow-hidden" placeholder="John Doe" />
        </div>
    )
}