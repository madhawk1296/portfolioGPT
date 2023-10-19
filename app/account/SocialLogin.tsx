import Image from "next/image"
import { SocialType } from "./SocialLogins"

export default function SocialLogin({ name, image, handleLogin }: { name: SocialType, image: string , handleLogin: (name: SocialType) => void }) {
    const handleClick = () => {
        handleLogin(name)
    }
    return (
        <button onClick={handleClick} className="p-[10px] aspect-square rounded-xl shadow border-2 border-gray-300 hover:border-gray-500 smoothe tracking-wide flex items-center justify-center">
            <Image alt={`Google logo`} src={image} width={18} height={18} />
        </button>
    )
}