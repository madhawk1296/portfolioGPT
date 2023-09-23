'use client';

import updateName from "@/lib/updateName";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UploadContinueButton({ name, page, disabled=false }: {name: string, page: string, disabled?: boolean}) {
    const router = useRouter();

    const handleClick = async () => {
        await updateName(name);
        router.push(`/onboard${page}`);
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`w-fit px-[15px] py-[10px] rounded-xl shadow text-white font-medium tracking-wide smoothe ${disabled ? "bg-blue-300" : "bg-blue-500 hover:shadow-md hover:bg-blue-600"}`}>Continue</button>
    )
}