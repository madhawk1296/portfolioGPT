import Link from "next/link";

export default function Tab({name, link}: {name: string, link:string}){
    return(
        <Link href={link}>
        <div className="relative w-full h-[70px] flex pl-[25px] items-center border-transparent hover:bg-gray-900 cursor-pointer border-y hover:border-gray-500 smoothe">
            <h1 className="text-white text-xl tracking-wide w-fit font-medium">{name}</h1>
        </div>
        </Link>
    )
}