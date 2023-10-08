import { useRouter } from "next/navigation"
import TagColorOption from "./TagColorOption"
import changeTagColor from "@/actions/changeTagColor"

export type ColorType = {
    id: string,
    name: string
}

export default function TagColor({ tagColor }: { tagColor: string}) {
    const colors: ColorType[] = [
        {
            id: "#111827",
            name: "black"
        }, {
            id: "#dc2626",
            name: "red"
        }, {
            id: "#ea580c",
            name: "orange"
        },{
            id: "#16a34a",
            name: "green"
        }, {
            id: "#2563eb",
            name: "blue"
        }, {
            id: "#9333ea",
            name: "purple"
        }, {
            id: "#0284c7",
            name: "sky"
        }
    ]

    const router = useRouter()

    const onChange = async (newColor: string) => {
        const formData = new FormData()
        formData.append("tag_color", newColor)

        await changeTagColor(formData);

        router.refresh();
    }

    return (
        <div className="flex flex-wrap gap-2">
            {colors.map((color, index) =>  <TagColorOption key={index}  onChange={onChange} color={color} selected={color.id == tagColor} />)}
        </div>
    )
}