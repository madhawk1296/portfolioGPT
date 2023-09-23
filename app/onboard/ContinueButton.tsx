import Link from "next/link";

export default function ContinueButton({ page, disabled=false }: {page: string, disabled?: boolean}) {
    return (
        <Link className="pb-[20px]" href={disabled ? "#" : `/onboard${page}`}>
            <button disabled={disabled} className={`w-fit px-[15px] py-[10px] rounded-xl shadow text-white font-medium tracking-wide smoothe ${disabled ? "bg-blue-300" : "bg-blue-500 hover:shadow-md hover:bg-blue-600"}`}>Continue</button>
        </Link>
    )
}