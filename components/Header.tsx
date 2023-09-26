import Link from "next/link";
import LoginButton from "./LoginButton";
import Robot from "./icons/Robot";

export default function Header(){
    return(
        <div className="relative w-full h-[75px] flex items-center justify-between px-[30px]">
            <div className="relative flex gap-2 items-center ">
                <div className="relative h-[40px] w-[40px]">   
                    <Robot />
                </div>
                <h2 className="text-white text-4xl font-semibold tracking-wider">chatfolio</h2>
            </div>
            <div className="relative flex gap-4">
                <LoginButton/>
            </div>
        </div>
    )
}