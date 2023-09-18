'use client'

import googleLogin from "@/lib/googleLogin";
import Login from "./hooks/Login";

export default function MainPageButton(){
    const handleLogin = Login();
    
    const handleClick = async () => {
        await handleLogin();
    }
    
    return(
        <button type="button" onClick={handleClick} className="text-md md:text-xl text-white bg-orange-500 rounded-lg tracking-widest mt-[20px] px-[20px] md:px-[40px] py-[5px] md:py-[10px] font-semibold border-2 border-transparent hover:bg-orange-600 shadow-md hover:shadow-lg smoothe">Create Your Chatbot</button>
    )
}