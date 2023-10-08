'use client';

import changeBio from "@/actions/changeBio";
import Pencil from "@/components/icons/Pencil";
import dosis from "@/fonts/dosis";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Bio({ bio: currentBio }: { bio: string | null}) {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [bio, setBio] = useState<string | null>(currentBio);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBio(e.target.value);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        changeBio(bio!);
        setIsActive(false);
    }

    return (
        <div className="border-2 border-gray-200 rounded-xl shadow bg-white w-[300px] h-fit flex flex-col px-[20px] py-[10px] gap-2">
            <h1 className={`w-fit text-gray-800 text-lg tracking-wide ${dosis.bold}`}>Bio</h1>
            {!isActive ? (
                currentBio ? (
                    <h1 onClick={toggleActive} className={`w-fit text-gray-700 text tracking-wide`}>{bio}</h1>
                ) : (
                    <button onClick={toggleActive} className="w-full h-[50px] flex justify-center items-center">
                        <h1 className={`w-fit text-gray-700 text tracking-wide flex items-center gap-2`}>
                            Add a bio
                            <div className="relative h-[15px]">
                                <Pencil />
                            </div>
                        </h1>
                    </button>
                )
            ) : (
                <form onSubmit={handleSubmit} >
                    <input name="bio" type="text" value={bio || ""} onChange={handleChange} className={`w-full text-gray-700 text tracking-wide min-h-[50px] outline-none border-2 rounded-xl p-[10px] ${isActive ? "border-gray-400" : "border-transparent"}`} placeholder="Add bio" />
                </form>
            )}
        </div>
    )
}