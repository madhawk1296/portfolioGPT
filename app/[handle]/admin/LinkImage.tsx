import Website from "@/components/icons/Website"
import Image from "next/image"

export default function LinkImage({ linkType }: { linkType: string}) {
    switch(linkType) {
        case "website":
            return (
                <div className="w-[15px] justify-center items-center">
                    <Website />
                </div>
            )
        case "facebook":
            return <Image src="/facebook.png" width={15} height={15} alt="Link Icon" />
        case "discord":
            return <Image src="/discord.png" width={15} height={15} alt="Link Icon" />
        case "github":
            return <Image src="/github.png" width={15} height={15} alt="Link Icon" />
        case "x":
            return <Image src="/x.png" width={15} height={15} alt="Link Icon" />
        case "instagram":
            return <Image src="/instagram.png" width={25} height={25} alt="Link Icon" />
    }
}