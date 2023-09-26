import Robot from "@/components/icons/Robot"
import CreateChatbotButton from "./CreateChatbotButton";

export default function Header(){
    
    return(
        <>
        <div className="relative w-full h-[75px]"></div>
        <div className="fixed bg-white top-0 w-full h-[75px] flex items-center justify-between px-[20px] md:px-[60px] border-b-2 shadow z-10">
            <div className="relative flex gap-2 items-center ">
                <div className="relative w-[35px] h-[35px] md:h-[40px] md:w-[40px]">   
                    <Robot color="blue" />
                </div>
                <h2 className="hidden md:block text-blue-600 text-2xl md:text-4xl font-semibold tracking-wider">chatfolio</h2>
                <h3 className="hidden md:block text-white text-sm md:text-md font-medium tracking-wider px-[10px] py-[3px] rounded-lg bg-blue-600 ">Blog</h3>
            </div>
            <CreateChatbotButton />
        </div>
        </>
    )
}