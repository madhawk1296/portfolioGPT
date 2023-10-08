'use client';

//import changeTag from "@/actions/changeTag";
import dosis from "@/fonts/dosis";
import TagColor from "./TagColor";
import TagName from "./TagName";
import { useState } from "react";
import Menu from "./Menu";

export default function Tag({ tag, tagColor }: { tag: string | null, tagColor: string}) {
    const [isActive, setIsActive] = useState<boolean>(false)

    const toggleActive = () => {
        setIsActive(!isActive)
    }


    return (
        <div className={"relative w-fit h-fit"}>
            <button onClick={toggleActive} style={{backgroundColor: tagColor}} className={`w-fit text tracking-wide text-gray-100 px-[10px] py-[3px] rounded-xl shadow hover:shadow-md smoothe ${dosis.light}`}>{tag}</button>
            <Menu isActive={isActive}>
                <button onClick={() => toggleActive()} className={`self-end ${dosis.bold} bg-gray-300 rounded-full px-[8px]`}>X</button>
                <h1 className="text font-gray-800">Color</h1>
                <TagColor tagColor={tagColor} />
                <h1 className="text font-gray-800">Tag</h1>
                <TagName tag={tag} />
            </Menu>
        </div>
    )
}