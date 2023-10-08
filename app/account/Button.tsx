export default function Button({ disabled=false, title }: { disabled?: boolean, title: string}) {
    return (
        <button disabled={disabled} className="bg-blue-600 text-white tracking-wide w-full py-[10px] rounded-xl shadow smoothe hover:bg-blue-700 hover:shadow-md disabled:bg-blue-300" >{title}</button>
    )
}