import dosis from "@/fonts/dosis";
import Input from "./Input";

export default function Terms() {
    return (
        <div className="flex gap-1 items-center self-start">
            <Input isCheck={true} />
            <h1 className={`text tracking-wide text-gray-700 ${dosis.medium} `} >I accept the Terms & Privacy Policy</h1>
        </div>
    )
}