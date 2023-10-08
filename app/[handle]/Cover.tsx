import Image from "next/image";

export default function Cover({ userId, color, image }: { userId: string | null, color: string | null, image: string | null }) {
    const bucket = "user_images";
    const filePath = `${userId}/${image}`;
    const publicUrl = `https://api.chat-fu.com/storage/v1/object/public/${bucket}/${filePath}`;
    
    return (
        <div style={{ backgroundColor: color!}} className="relative w-full h-[285px] rounded-b-2xl overflow-hidden flex items-center">
            {image && <Image className="w-full h-full object-cover" src={publicUrl} alt="Cover Image" fill={true} />}
        </div>
    )
}