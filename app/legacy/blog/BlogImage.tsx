import Image from "next/image";

export default function BlogImage({ alt, src, width=600 }: {alt: string, src: string, width?: number}) {
    return (
        <Image className="rounded-lg self-center" alt={alt} src={src} width={width} height={400} />
    )
}