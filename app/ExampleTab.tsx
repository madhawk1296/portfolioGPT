import Image from "next/image";
import { MouseEvent } from "react";
import { ExampleType } from "./Examples";

export default function ExampleTab({ example, changeTab, selected }: { example: ExampleType, changeTab: (value: ExampleType) => void, selected: boolean}) {
    const {image, title} = example;

    const handleClick = () => {
        changeTab(example);
    }

    return (
        <div onClick={handleClick} className={`w-full md:h-[100px] bg-blue-1000 rounded-xl shadow hover:shadow-lg smoothe cursor-pointer flex flex-col py-[10px] md:flex-row px-[15px] gap-2 md:gap-6 items-center border-2 smoothe shadow-lg hover:shadow-xl ${selected ? "border-gray-300" : "hover:border-gray-500 border-gray-700"} `}>
            <Image className="rounded-full" alt="Resume Example Tab" height={50} width={50} src={image} />
            <h4 className="text-center text-gray-200 md:font-medium text-xs md:text-lg tracking-wider">{title}</h4>
        </div>
    )
}