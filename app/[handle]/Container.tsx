import Bio from "./Bio";
import Chat from "./Chat";
import Cover from "./Cover";
import Links from "./Links";
import Profile from "./Profile";
import { Tables } from "@/types/supabase";

export default function Container({ user }: { user: Tables<'users'> }) {
    const { display_name, email, handle, tag, tag_color, bio, banner_color, banner_image, profile_picture, links, user_id } = user;

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="relative flex flex-col max-w-[954px] w-full h-full">
                <Cover userId={user_id} color={banner_color} image={banner_image} />
                <div className="relative w-full h-full flex flex-col gap-2">
                    <div className="relative flex w-full h-fit ">
                        <div className="relative w-full h-fit flex flex-col ">
                            <Profile userId={user_id!} name={display_name} tag={tag} tagColor={tag_color} profileImage={profile_picture} />
                            <Bio bio={bio} />
                        </div>
                        <Links links={links} />
                    </div>
                    <Chat />
                </div>
            </div>
        </div>
    )
}