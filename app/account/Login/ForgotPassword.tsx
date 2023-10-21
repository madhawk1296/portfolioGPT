import Link from "next/link";

export default function ForgotPassword() {
    return (
        <Link className="w-fit self-start" href="/Account/Forgot">
            <h1 className="w-fit underline tracking-wide">Forgot Password</h1>
        </Link>
    )
}