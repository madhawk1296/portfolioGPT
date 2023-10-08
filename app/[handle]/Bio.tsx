import dosis from "@/fonts/dosis";

export default function Bio({ bio }: { bio: string | null}) {
    return (
        <div className="border-2 border-gray-200 rounded-xl shadow bg-white w-[300px] h-fit flex flex-col px-[20px] py-[10px] gap-2">
            <h1 className={`w-fit text-gray-800 text-lg tracking-wide ${dosis.bold}`}>Bio</h1>
            <h1 className={`w-fit text-gray-700 text tracking-wide`}>{bio}</h1>
        </div>
    )
}