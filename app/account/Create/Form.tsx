'use client';

import { FormEvent, useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Terms from "../Terms";
import createAccount from "@/actions/createAccount";
import { useRouter } from "next/navigation";

export default function Form() {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);
    const disabled = name.length == 0 || email.length == 0 || password.length < 6 || !termsAccepted

    useEffect(() => {
        setError(null);
    }, [name, email, password, termsAccepted]);

    const handleName = (value?: string) => {
        setName(value!)
    }
    const handleEmail = (value?: string) => {
        setEmail(value!)
    }
    const handlePassword = (value?: string) => {
        setPassword(value!)
    }

    const toggleTerms = () => {
        setTermsAccepted(!termsAccepted);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData()
            formData.append("name", name); 
            formData.append("email", email); 
            formData.append("password", password); 

            
            const { data, error } = await createAccount(formData);

            error && setError(error);
            
            if(data) {
                router.push(`/Account/Confirm?email=${encodeURIComponent(email)}`)
            } else {
                router.refresh()
            }
        } catch(e) {
            console.log(e)
        }

        
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input placeholder="Display Name" handleChange={handleName}  value={name} />
            <Input placeholder="Email Address" handleChange={handleEmail} value={email} />
            <Input minLength={6} placeholder="Password" handleChange={handlePassword} value={password} isPassword={true} />
            <Terms termsAccepted={termsAccepted} toggleTerms={toggleTerms} />
            <Button disabled={disabled} title="Create Account" />
            {error && <h1 className="text-sm text-red-500 tracking-wide self-center">{error}</h1>}
        </form>
    )
}