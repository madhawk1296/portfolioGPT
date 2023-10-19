import Link from "next/link";

export default function WrongPlaceLink({ link, title }: {link: string, title: string}) {
    return (
        <Link className="w-fit self-center" href={link} >
            <h1 className="w-fit self-center tracking-wide text-gray-800 hover:text-blue-500 smoothe">{title}</h1>
        </Link>
    )
}