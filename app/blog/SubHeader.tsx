import { Roboto } from "next/font/google";
import { ReactNode } from "react";

export const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

export default function SubHeader({ children }: {children: ReactNode}) {
    return (
        <h2 className={`w-full text-2xl md:text-4xl text-gray-800 tracking-wide leading-tight ${roboto.className}`}>{children}</h2>
    )
}