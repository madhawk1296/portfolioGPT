import Header from "../Header";
import Billed from "./Billed";
import Plans from "./Plans";

export default function Upgrade() {
    return (
        <div className="w-full h-full min-h-screen flex flex-col bg-blue-100">
            <Header isLanding={true} />
            <div className="flex flex-col gap-12 items-center pt-[80px]" >
                <Billed />
                <Plans />
            </div>
        </div>
    )
}