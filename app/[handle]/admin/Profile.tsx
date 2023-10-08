import Pencil from "@/components/icons/Pencil";
import Picture from "@/components/icons/Picture";
import dosis from "@/fonts/dosis";
import Image from "next/image";
import Name from "./Name";
import Tag from "./Tag";
import ProfilePicture from "./ProfilePicture";

export default function Profile({ userId, name, tag, tagColor, profileImage }: { userId: string, name: string | null, tag: string | null, profileImage: string | null, tagColor: string }) {
    return (
        <div className="relative h-fit w-fit flex items-center absolute top-0 -translate-y-[15px]">
            <ProfilePicture userId={userId} profileImage={profileImage} />
            <div className="w-fit h-full flex flex-col px-[20px] gap-1">
                <Name name={name} />
                <Tag tag={tag} tagColor={tagColor} />
            </div>
        </div>
    )
}