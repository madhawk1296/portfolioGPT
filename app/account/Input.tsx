export default function Input({ placeholder, isCheck=false, isPassword=false }: { placeholder?: string, isCheck?: boolean, isPassword?: boolean }) {
    return isCheck ? (
        <input type="checkbox" />
    ) : (
        <input type={isPassword ? "password" : "text"} className="h-[50px] w-full rounded-xl border-2 border-gray-400 p-[10px] outline-none focus:border-gray-600 smoothe text-gray-800" placeholder={placeholder}  />
    )
}