'use client';

import updateOnboarded from "@/lib/updateOnboarded";
import { useRouter } from "next/navigation";

export default function FinalContinueButton({ page, disabled=false }: {page: string, disabled?: boolean}) {
    const router = useRouter();

    const handleClick = async () => {
        await updateOnboarded();
        router.push(`/account`);
    }

    return (
        <div className="flex items-center gap-6 pb-[20px]">
            <button onClick={handleClick} className="w-fit px-[15px] py-[10px] rounded-xl underline text-gray-500 font-medium tracking-wide smoothe hover:text-gray-600" >Skip for now</button>
            <button onClick={handleClick} disabled={disabled} className={`w-fit px-[15px] py-[10px] rounded-xl shadow text-white font-medium tracking-wide smoothe ${disabled ? "bg-blue-300" : "bg-blue-500 hover:shadow-md hover:bg-blue-600"}`}>Continue</button>
        </div>
    )
}