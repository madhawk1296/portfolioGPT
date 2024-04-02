import Image from "next/image";
import { ExampleType } from "./Examples";

export default function Example({ example }: {example: ExampleType}) {
    const { name, title, image, movie } = example;
    return (
        <div className="md:w-[600px] w-full h-full flex flex-col md:flex-row md:px-[20px] gap-10 px-[20px] items-center md:items-start">
            <div className="md:w-1/2 h-full flex flex-row md:flex-col md:px-[15px] gap-3">
                <Image className="rounded-xl border-2 border-gray-700" alt="Example Profile" height={100} width={100} src={image} /> 
                <div className="flex flex-col gap-1 min-w-[150px]">
                    <h3 className="text-3xl font-medium tracking-wider text-white w-fit">{name}</h3>
                    <h4 className="text-xl tracking-wider text-gray-300 w-fit">{title}</h4>
                </div> 
            </div>
            <div className="md:w-1/2 h-full flex flex-col ">
                <Image className="rounded-xl" alt="Example chat" src={movie} width={300} height={500} />
            </div>
        </div>
    )
}