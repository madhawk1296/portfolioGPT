export default function Button({ title }: { title: string}) {
    return (
        <button className="bg-blue-600 text-white tracking-wide w-full py-[10px] rounded-xl shadow smoothe hover:bg-blue-700 hover:shadow-md" >{title}</button>
    )
}