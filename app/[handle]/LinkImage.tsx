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
        case "x":
            return <Image src="/x.png" width={15} height={15} alt="Link Icon" />

    }
}