'use client';

import changeBio from "@/actions/changeBio";
import Pencil from "@/components/icons/Pencil";
import dosis from "@/fonts/dosis";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Bio({ bio: currentBio }: { bio: string | null}) {
    const router = useRouter();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [bio, setBio] = useState<string | null>(currentBio);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    const makeActive = () => {
        setIsActive(true);
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { error } = await changeBio(bio!);
        setIsActive(false);
        router.refresh()
    }

    return (
        <div className="border-2 border-gray-200 rounded-xl shadow bg-white w-[300px] h-fit flex flex-col px-[20px] py-[10px] gap-2">
            <div className="flex items-center gap-2">
                <h1 className={`w-fit text-gray-800 text-lg tracking-wide ${dosis.bold}`}>Bio</h1>
                <button onClick={makeActive} className="h-[15px]">
                    <Pencil />
                </button>
            </div>
            {!isActive ? (
                currentBio ? (
                    <p onClick={toggleActive} className={`w-fit text-gray-700 text tracking-wide whitespace-pre-line`}>{bio}</p>
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
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
                    <textarea name="bio" value={bio || ""} onChange={handleChange} className={`w-full text-gray-700 text tracking-wide min-h-[50px] outline-none border-2 rounded-xl p-[10px] ${isActive ? "border-gray-400" : "border-transparent"}`} placeholder="Add bio" />
                    <div className="flex w-full justify-between">
                        <button onClick={toggleActive} className="text-sm underline rounded-xl text-gray-600 tracking-wide" >Cancel</button>
                        <button type="submit" className="text-sm px-[10px] py-[5px] rounded-xl bg-green-500 text-gray-50 tracking-wide" >Submit</button>
                    </div>
                </form>
            )}
        </div>
    )
}