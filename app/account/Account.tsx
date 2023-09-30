import Image from "next/image";
import { AccountType } from "./Accounts";

export default function Account({ account }: {account: AccountType}) {
    const { name, title, image } = account;

    return (
        <button className="w-[40px] aspect-square px-[10px] py-[10px] h-fit border-2 shadow-sm rounded-xl flex flex-col items-center justify-center items-center gap-2 smoothe hover:shadow ">
            <Image alt="Account Icon" src={image} width={15} height={15} />
        </button>
    )
}