import Chain from "@/components/icons/Chain";

export default function PageLink() {
    return (
        <button className={`w-fit text-lg tracking-wide text-gray-500 flex items-center gap-[1px]`}>
            <div className="relative h-[20px]">
                <Chain />
            </div>
            chat-fu.com/cristian
        </button>
    )
}