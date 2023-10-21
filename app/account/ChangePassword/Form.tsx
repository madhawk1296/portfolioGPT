'use client'

import dosis from "@/fonts/dosis";
import { FormEvent, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import resetPassword from "@/actions/ResetPassword";
import ChangePassword from "./page";
import changePassword from "@/actions/changePassword";
import { useRouter } from "next/navigation";

export default function Form() {
    const router = useRouter() 
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const invalidPassword = password.length < 6 || password != confirmPassword

    const handlePassword = (value?: string) => {
        setPassword(value!)
    }

    const handleConfirmPassword = (value?: string) => {
        setConfirmPassword(value!)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { error } = await changePassword(password); 
        router.push("/Account")
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input placeholder="New Password" handleChange={handlePassword} value={password} isPassword={true} />
            <Input placeholder="Confirm Password" handleChange={handleConfirmPassword} value={confirmPassword} isPassword={true} />
            <Button title="Change Password" disabled={invalidPassword} />
        </form>
    )
}