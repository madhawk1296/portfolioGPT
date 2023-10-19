import dosis from "@/fonts/dosis";
import Input from "./Input";
import Link from "next/link";

export default function Terms({ termsAccepted, toggleTerms }: {termsAccepted: boolean, toggleTerms: () => void}) {
    return (
        <div className="flex gap-1 items-center self-start">
            <Input handleChange={toggleTerms} value={termsAccepted} isCheck={true} />
            <h1 className={`text tracking-wide text-gray-700 ${dosis.medium} `} >I accept the <Link className="underline" target="_blank" href="/Terms">Terms</Link> & <Link className="underline" target="_blank" href="/Privacy">Privacy Policy</Link></h1>
        </div>
    )
}