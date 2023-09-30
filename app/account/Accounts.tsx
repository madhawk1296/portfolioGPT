import dosis from "@/fonts/dosis";
import Account from "./Account";

export type AccountType = {
    name: string,
    title: string,
    image: string
}

export default function Accounts() {
    const accounts = [
        {
            name: "x",
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

    return (
        <div className="w-full flex flex-col gap-2">
            <h1 className={`${dosis.medium} tracking-wide text-gray-600`}>Or connect with</h1>
            <div className="flex flex-wrap gap-4">
                {accounts.map((account, index) => <Account key={index} account={account} />)}
            </div>
        </div>
    )
}