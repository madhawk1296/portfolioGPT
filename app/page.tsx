import dosis from "@/fonts/dosis";
import Header from "./Header";
import Claim from "./Claim";
import Link from "next/link";

export default function Landing() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <Header isLanding={true} />
            <div className="w-full flex flex-col items-center pt-[200px] gap-6">
                <h1 className={`text-4xl md:text-8xl ${dosis.bold} tracking-wide text-blue-700`}>Join the Future</h1>
                <h1 className={`text-2xl md:text-3xl ${dosis.medium} tracking-wide text-gray-700`}>Create an AI enabled portfolio page</h1>
                <Claim />
            </div>
            <Link href="/Upgrade" >
                <div className="pt-[100px]">
                    <button className={`text-xl p-[20px] bg-orange-50 border-2 border-orange-500 text-orange-600 rounded-lg shadow ${dosis.bold}`}>50% OFF LAUNCH DISCOUNT</button>
                </div>
            </Link>
        </div>
    )
}