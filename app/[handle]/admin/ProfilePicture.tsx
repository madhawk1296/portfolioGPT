'use client';

import uploadImage from "@/actions/uploadImage";
import Picture from "@/components/icons/Picture";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function ProfilePicture({ userId, profileImage }: { userId: string, profileImage: string | null }) {
    const router = useRouter();
    const bucket = "user_images";
    const filePath = `${userId}/${profileImage}`;
    const publicUrl = `https://api.chat-fu.com/storage/v1/object/public/${bucket}/${filePath}`;

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('location', "profile");

            const { error } = await uploadImage(formData);
            console.log(error)

            router.refresh();
        }
    }

    return profileImage ? (
        <label className="w-fit h-fit">

            <Image className="shadow border-2 border-white rounded-full" alt="Profile" src={publicUrl} width={125} height={125} />
            <input onChange={handleFileChange} type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
        </label>
    ) : (
            <label className="shadow border-2 border-white rounded-full w-[125px] aspect-square bg-gray-300 flex flex-col justify-center items-center relative">
                <h1 className="text-lg text-gray-700 tracking-wide flex items-center flex-col">
                    <div className="h-[20px] relative">
                        <Picture />
                    </div>
                    upload
                </h1>
                <input onChange={handleFileChange} type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </label>
    )
}