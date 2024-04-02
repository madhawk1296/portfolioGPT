import Image from "next/image";

export default function BlogAuthor() {
    return (
        <div className="flex gap-2 items-center">
            <Image alt="Author Profile" src="/blog/author.avif" className="rounded-full shadow" width={70} height={70} />
            <div className="flex flex-col">
                <h3 className="text tracking-wide text-gray-700">Cristian Silva</h3>
                <h4 className="text-sm tracking-wide  text-gray-500">Founder Chatfolio.org</h4>
            </div>
        </div>
    )
}