import dosis from "@/fonts/dosis";
import Image from "next/image";

export default function Profile({ userId, name, tag, tagColor, profileImage }: { userId: string, name: string | null, tag: string | null, profileImage: string | null, tagColor: string }) {
    const bucket = "user_images";
    const filePath = `${userId}/${profileImage}`;
    const publicUrl = `https://api.chat-fu.com/storage/v1/object/public/${bucket}/${filePath}`;

    return (
        <div className="relative h-fit w-fit flex items-center absolute top-0 -translate-y-[15px]">
            <div className="shadow border-2 border-white rounded-full w-[125px] aspect-square bg-gray-300 relative overflow-hidden">
                {profileImage && <Image className="" alt="Profile" src={publicUrl} width={125} height={125} />}
            </div>
            <div className="w-fit h-full flex flex-col px-[20px] md:gap-1 pt-[5px]">
                {name && <h1 className="text-[28px] tracking-wide text-gray-800">{name}</h1>}
                {tag && <h1 style={{backgroundColor: tagColor}} className={`w-fit text tracking-wide text-gray-100 px-[10px] py-[3px] rounded-xl ${dosis.light}`}>{tag}</h1>}
            </div>
        </div>
    )
}