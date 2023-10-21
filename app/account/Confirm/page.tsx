'use client'

import { useSearchParams } from "next/navigation";
import Container from "../Container";
import ResendEmail from "./ResendEmail";

export default function Confirm() {
    const searchParams = useSearchParams()
    const email = searchParams.get("email") || null

    return (
        <Container title="We sent you an email">
            <div className="flex flex-col gap-8 items-center">
                <h1 className="w-fit text-center text-gray-800 tracking-wide">
                    Click on the email verification link sent to {email ? `you at ${email}`: "your email"}.                
                </h1>
                {email && <ResendEmail email={email} />}
            </div>
        </Container>
    )
}