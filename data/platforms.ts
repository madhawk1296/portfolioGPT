import { PlatformType } from "@/app/onboard/website/Platform";

export default function platforms(): PlatformType[] {
    return [{
        name: "wordpress",
        title: "Wordpress",
        image: "/wordpress.png"
    },
    {
        name: "wix",
        title: "Wix",
        image: "/wix.png"
    },
    {
        name: "squarespace",
        title: "Squarespace",
        image: null,
    },
    {
        name: "custom",
        title: "Custom",
        image: null
    },]
}