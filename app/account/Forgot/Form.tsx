'use client'

import dosis from "@/fonts/dosis";
import { FormEvent, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import resetPassword from "@/actions/resetPassword";

export default function Form({ toggleSent }: { toggleSent: () => void}) {
    const [email, setEmail] = useState("");
    const invalidEmail = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const handleEmail = (value?: string) => {
        setEmail(value!)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { error } = await resetPassword(email);
        toggleSent();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input placeholder="Email Address" handleChange={handleEmail} value={email} />
            <Button title="Reset Password" disabled={invalidEmail} />
        </form>
    )
}