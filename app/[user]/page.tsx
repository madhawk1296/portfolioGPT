
import Cover from "./Cover";
import Links from "./Links";
import Profile from "./Profile";
import Bio from "./Bio";
import Chat from "./Chat";

export default function Page() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="relative flex flex-col max-w-[954px] w-full h-full">
                <Cover />
                <div className="relative w-full h-full flex flex-col gap-2">
                    <div className="relative flex w-full h-fit ">
                        <div className="relative w-full h-fit flex flex-col ">
                            <Profile />
                            <Bio />
                        </div>
                        <Links />
                    </div>
                    <Chat />
                </div>
            </div>
        </div>
    )
}