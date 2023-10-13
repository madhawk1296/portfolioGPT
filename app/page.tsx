import dosis from "@/fonts/dosis";
import Header from "./Header";
import Claim from "./Claim";

export default function Landing() {
    return (
        <div className="w-full h-full flex flex-col">
            <Header />
            <div className="w-full flex flex-col items-center pt-[80px] gap-6">
                <h1 className={`text-4xl md:text-8xl ${dosis.bold} tracking-wide text-blue-700`}>Join the Future</h1>
                <h1 className={`text-2xl md:text-3xl ${dosis.medium} tracking-wide text-gray-700`}>Create an AI enabled portfolio page</h1>
                <Claim />
            </div>
        </div>
    )
}