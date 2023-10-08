import { ChangeEvent } from "react"

export default function Input({ value, placeholder, isCheck=false, isPassword=false, handleChange, minLength }: { value: string | boolean, placeholder?: string, isCheck?: boolean, isPassword?: boolean, handleChange: (value?: string) => void, minLength?: number }) {

    const handleInputchange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e.target.value);
    }

    return isCheck ? (
        <input required checked={value as boolean} onChange={() => handleChange()} type="checkbox" />
    ) : (
        <input value={value as string} minLength={minLength} required onChange={handleInputchange}  type={isPassword ? "password" : "text"} className="h-[50px] w-full rounded-xl border-2 border-gray-400 p-[10px] outline-none focus:border-gray-600 smoothe text-gray-800" placeholder={placeholder}  />
    )
}