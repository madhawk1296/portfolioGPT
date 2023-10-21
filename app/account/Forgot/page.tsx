'use client'

import Container from "../Container";
import { useState } from "react";

import Form from "./Form";
import dosis from "@/fonts/dosis";

export default function Forgot() {
    const [sent, setSent] = useState(false);

    const toggleSent = () => {
        setSent(!sent)
    }

    return (
        <Container title="Forgot Password">
            <h1 className={`${dosis.medium} tracking-wide text-gray-700`}>Enter the email address for your account and we'll send you an email to reset your password.</h1>
            {sent ? (
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="tracking-wide text-gray-800 " >Email sent!</h1>
                    <button onClick={toggleSent} className="w-fit underline text-gray-800 tracking-wide">Resend Email</button>
                </div>
            ) : <Form toggleSent={toggleSent} />}
        </Container>
    )
}