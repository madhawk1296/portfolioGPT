'use client'

import dosis from "@/fonts/dosis";
import Account from "./Account";
import { Provider } from "@supabase/gotrue-js";
import connectAccount from "@/actions/connectAccount";

export type AccountType = {
    name: Provider,
    title: string,
    image: string
}

export default function Accounts() {
    const accounts: AccountType[] = [
        {
            name: "twitter",
            title: "X",
            image: "/x.png"
        },
        {
            name: "facebook",
            title: "Facebook",
            image: "/facebook.png"
        },
        {
            name: "google",
            title: "Google",
            image: "/google.png"
        },
        {
            name: "discord",
            title: "Discord",
            image: "/discord.png"
        },
        {
            name: "github",
            title: "Github",
            image: "/github.png"
        }
    ];

    const chooseAccount = async (provider: Provider) => {
        const formData = new FormData()
        formData.append("provider", provider); 

        await connectAccount(formData);
    }
        
    return (
        <div className="w-full flex flex-col gap-2">
            <h1 className={`${dosis.medium} tracking-wider text-gray-600`}>Or connect with</h1>
            <div className="flex flex-wrap gap-4">
                {accounts.map((account, index) => <Account chooseAccount={chooseAccount} key={index} account={account} />)}
            </div>
        </div>
    )
}