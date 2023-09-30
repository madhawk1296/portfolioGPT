import { Dosis } from "next/font/google"

const light = Dosis({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

const medium = Dosis({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const bold = Dosis({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

export default {
    light: light.className,
    medium: medium.className,
    bold: bold.className
}