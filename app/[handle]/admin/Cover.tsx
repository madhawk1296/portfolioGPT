'use client';

import Pencil from "@/components/icons/Pencil";
import Picture from "@/components/icons/Picture";
import Upload from "@/components/icons/upload";
import Image from "next/image";
import Menu from "./Menu";
import { ChangeEvent, useState } from "react";
import dosis from "@/fonts/dosis";
import uploadImage from "@/actions/uploadImage";
import Trash from "@/components/icons/Trash";
import { useRouter } from "next/navigation";
import removeImage from "@/actions/removeImage";

export default function Cover({ userId, color, image }: { userId: string, color: string | null, image: string | null }) {
    const router = useRouter();
    const bucket = "user_images";
    const filePath = `${userId}/${image}`;
    const publicUrl = `https://api.chat-fu.com/storage/v1/object/public/${bucket}/${filePath}`;

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('location', "banner");

            const { error } = await uploadImage(formData);
            console.log(error)

            router.refresh();
        }
    }

    const handleRemoveFile = async () => {
        const formData = new FormData();
        formData.append('location', "banner");

        const { error } = await removeImage(formData);
        console.log(error)

        router.refresh();
    }


    return (
        <div style={{ backgroundColor: color!}} className="relative w-full h-[285px] rounded-b-2xl overflow-hidden flex items-center justify-center">
            {image ? (
                <>                   
                    <Image className="w-full h-full object-cover" src={publicUrl} alt="Cover Image" fill={true} />
                    <div className="flex items-center gap-[3px] absolute right-[25px] top-[30px] bg-gray-500 overflow-hidden shadow-md rounded-xl border-2 border-gray-500">
                        <label className="text-sm text-gray-800 tracking-wide py-[10px] px-[10px] bg-white flex items-center gap-[2px]">
                            <h1>Replace</h1>
                            <div className="relative h-[20px]">
                                <Picture />
                            </div>
                            <input onChange={handleFileChange} type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                        </label>
                        <button onClick={handleRemoveFile} className="text-sm text-red-600 tracking-wide py-[10px] px-[10px] bg-white flex items-center gap-[1px]">
                            <div className="relative h-[20px]">
                                <Trash />
                            </div>
                        </button>
                    </div>
                </> 
            ) : (
                <label className="relative w-fit h-[50px] rounded-xl bg-white border-2 flex pl-[15px] pr-[10px] items-center gap-2 cursor-pointer">
                    <h1 className="text-lg text-gray-700 tracking-wide h-full flex items-center">Add banner</h1>
                    <div className="h-[20px] relative">
                        <Picture />
                    </div>
                    <input onChange={handleFileChange} type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </label>
            )}
        </div>
    )
}