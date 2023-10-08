import changeTagColor from "@/actions/changeTagColor";
import { ColorType } from "./TagColor";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function TagColorOption({ color, selected, onChange }: { color: ColorType, selected: boolean, onChange: (color: string) => void}) {
    const handleChange = () => {
        onChange(color.id)
    }

    return (
        <button onClick={handleChange} style={{backgroundColor: color.id}} className={`h-[30px] w-[30px] shadow rounded-lg border-4 smoothe ${selected ? "border-gray-400 shadow-lg" : "border-transparent" }`}/>
    )
}