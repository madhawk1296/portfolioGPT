import Robot from "@/components/icons/Robot";
import dosis from "@/fonts/dosis";  

export default function Header() {
    return (
        <div className="fixed top-0 bg-white w-full h-[65px] shadow bg-white flex justify-between px-[100px] items-center z-500">
            <button className="flex gap-2 items-center">
                <div className="h-[33px]">
                    <Robot color="blue" />
                </div>
                <h2 className={`text-blue-600 text-[28px] font-semibold tracking-wider ${dosis.bold}`}>chat-fo</h2>
            </button>
            <div className={`flex gap-4 items-center ${dosis.medium}`}>
                <button className="text-gray-600 px-[10px] py-[8px] tracking-wide rounded-xl text">Log in</button>
                <button className="bg-blue-600 px-[10px] py-[8px] text-white tracking-wide rounded-xl shadow smoothe hover:shadow-md text">Create a Page</button>
            </div>
        </div>
    )
}