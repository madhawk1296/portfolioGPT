'use client';

import { FormEvent, useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Terms from "../Terms";
import { useRouter } from "next/navigation";
import login from "@/actions/login";

export default function Form() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const disabled = email.length == 0 || password.length == 0

    useEffect(() => {
        setError(null);
    }, [email, password]);

    const handleEmail = (value?: string) => {
        setEmail(value!)
    }
    const handlePassword = (value?: string) => {
        setPassword(value!)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData()
            formData.append("email", email); 
            formData.append("password", password); 

            
            const { error } = await login(formData);
            error && setError(error); 

            router.refresh()
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input placeholder="Email Address" handleChange={handleEmail} value={email} />
            <Input placeholder="Password" handleChange={handlePassword} value={password} isPassword={true} />
            <Button disabled={disabled} title="Log In" />
            {error && <h1 className="text-sm text-red-500 tracking-wide self-center">{error}</h1>}
        </form>
    )
}