import Image from "next/image";
import { LinkType } from "./Links";

export default function LinkTab({ link }: {link: LinkType}) {
    const { name, image, url } = link;

    return (
        <button className="w-fit p-[10px] bg-white shadow smoothe hover:shadow-md rounded-xl flex items-center gap-2">
            {typeof image === 'string' ? (
                <Image src={image} width={15} height={15} alt="Link Icon" />
            ) : (
                <div className="w-[15px] justify-center items-center">
                    {image}
                </div>
            )}
            <h1 className="w-full text-left text-sm">
                {name}
            </h1>
        </button>
    )
}