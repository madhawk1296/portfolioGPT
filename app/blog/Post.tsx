import { ReactNode } from "react";
import { Roboto } from 'next/font/google'
import BlogAuthor from "./BlogAuthor";

export const roboto = Roboto({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
})

export default function Post({ title, children }: {title: string, children: ReactNode}) {
    return  (
        <div className={`h-full max-w-[700px] w-full flex flex-col items-start gap-10 py-[50px] px-[20px]`}>
            <h1 className={`text-3xl md:text-5xl text-gray-800 tracking-wide leading-tight ${roboto.className}`}>{title}</h1>
            <BlogAuthor />
            {children}
        </div>
    )
}