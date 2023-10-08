import dosis from "@/fonts/dosis";
import { Tables } from "@/types/supabase";
import Image from "next/image";

export default function Profile({ user_id, display_name, tag, tag_color, profile_picture }: Tables<'users'>) {
    const bucket = "user_images";
    const filePath = `${user_id}/${profile_picture}`;
    const publicUrl = `https://api.chat-fu.com/storage/v1/object/public/${bucket}/${filePath}`;

    return (
        <div className="relative h-fit w-fit flex items-center absolute top-0 -translate-y-[15px]">
            <div className="shadow border-2 border-white rounded-full w-[125px] aspect-square bg-gray-300 relative">
                {profile_picture && <Image className="shadow border-2 border-white rounded-full" alt="Profile" src={publicUrl} width={125} height={125} />}
            </div>
            <div className="w-fit h-full flex flex-col px-[20px] gap-1">
                {display_name && <h1 className="text-[28px] tracking-wide text-gray-800">{display_name}</h1>}
                {tag && <h1 style={{backgroundColor: tag_color}} className={`w-fit text tracking-wide text-gray-100 px-[10px] py-[3px] rounded-xl ${dosis.light}`}>{tag}</h1>}
            </div>
        </div>
    )
}