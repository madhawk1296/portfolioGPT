import Link from "next/link"
import Content from "./Content"
import ContinueButton from "./ContinueButton"

export default function Onboard() {
    return (
        <Content title="Welcome to Chatfolio" >
            <div className="flex-grow w-full h-full flex flex-col justify-between items-center pb-[20px]">
                <h1 className="font-medium md:font-base text-lg md:text-base  text-gray-800">Let's start by setting up your chatbot! Simply upload your resume, test the chatbot, then add the chatbot to your website.</h1>
                <ContinueButton page="/upload" />
            </div>
        </Content>
    )
} 