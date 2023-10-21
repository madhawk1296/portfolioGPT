'use client';

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import dosis from "@/fonts/dosis";
import addHandle from "@/actions/addHandle";
import checkHandle from "@/actions/checkHandle";
import debounce from "lodash.debounce";


export default function Form() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const router = useRouter();
    const [handle, setHandle] = useState<string>('');
    const [handleTaken, setHandleTaken] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const disabled = handle.length == 0 || handleTaken;

    const checkHandleExists = debounce(async (handle: string) => {
        const { error } = await checkHandle(handle);
        if (error) {
            setHandleTaken(true)
        } else {
            setHandleTaken(false)
        }
    }, 100);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setHandle(e.target.value.toLocaleLowerCase());
        checkHandleExists(e.target.value);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData()
            formData.append("handle", handle); 
            
            const { error } = await addHandle(formData);
            error && setError(error); 

            router.refresh()
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div onClick={() => inputRef.current?.focus()} className={`h-[50px] w-full rounded-xl border-2 border-gray-400 focus:border-gray-600 smoothe text-gray-800 flex items-center gap-1 px-[10px] tracking-wide ${isFocused && "border-gray-600"}`}>
                <h1 className={`${dosis.bold}`} >chat-fu.com/</h1>
                <input ref={inputRef} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}  className={`h-full outline-none ${dosis.bold} text-gray-600`} value={handle} required onChange={handleChange}  type={"text"} placeholder="your_handle"  />
            </div>
            {handle && <h1 className={`${handleTaken ? "text-red-500" : "text-green-500"} tracking-wide self-start`}>{handleTaken ? "Handle is already taken" : "Handle is available"}</h1>}
            <Button disabled={disabled} title="Claim" />
            {error && <h1 className="text-sm text-red-500 tracking-wide self-center">{error}</h1>}
        </form>
    )
}