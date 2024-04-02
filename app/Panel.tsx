import Brush from "@/components/icons/Brush";
import Rocket from "@/components/icons/Rocket";
import Upload from "@/components/icons/Upload";

export default function Panel({ title, step, detail }: {title: string, step: string, detail: string}) {
    return (
        <div className="w-full md:w-[350px] rounded-lg py-[30px] px-[15px] flex flex-col gap-5 justify-center items-center smoothe">
            <div className="w-[40px] h-[40px]">
                {step == "customize" ? <Brush /> : step == "upgrade" ? <Rocket /> : <Upload />}
            </div>
            <h2 className="w-fit text-xl md:text-2xl text-white font-medium tracking-wide text-center ">{title}</h2>
            <h3 className="w-fit text-center text-gray-100 md:text-lg tracking-wide md:font-light text-lg px-[15px] md:px-[5px]">{detail}</h3>
        </div>
    )
}