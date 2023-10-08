'use client';

import changeName from "@/actions/changeName";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

export default function Name({ name: currentName }: { name: string | null}) {
    const router = useRouter();
    const [name, setName] = useState<string>(currentName || "");
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);
    const disabled = !name;

    useEffect(() => {
        setError(null);
    }, [name]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(disabled) {
            return;
        }

        const formData = new FormData
        formData.append('name', name!);

        try {            
            const { error } = await changeName(formData);

            error && setError(error); 

            setIsFocused(false);
            router.refresh()
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`w-full relative flex items-center gap-2 h-[50px] py-[15px] smooth px-[10px] -translate-x-[10px] rounded-xl ${isFocused && "border-2 border-gray-600"}`}>
            <input onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChange={handleChange} className="outline-none w-full bg-transparent text-[28px] tracking-wide text-gray-800" placeholder="Your Name" value={name} />
            {error && <h1 className="text-sm text-red-500 tracking-wide self-center">{error}</h1>}
        </form>
    )
}