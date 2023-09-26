import { Roboto } from "next/font/google";
import { ReactNode } from "react";

export const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export default function Line({ children }: {children: ReactNode}) {
    return (
        <h3 className={`text-lg md:text-[22px] tracking leading-snug font-light text-gray-700 ${roboto.className}`}>{children}</h3>
    )
}