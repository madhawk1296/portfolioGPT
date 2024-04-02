'use client';

import { useState } from "react";
import ExampleTab from "./ExampleTab";
import Image from "next/image";
import Example from "./Example";

export type ExampleType = {
    name: string,
    title: string,
    image: string,
    movie: string
}

export default function Examples() {
    const examples: ExampleType[] = [
        {
            name: "John",
            title: "Web Developer",
            image: "/web_developer.jpeg",
            movie: "/developer_chat2.gif"
        },
        {
            name: "Brian",
            title: "Designer",
            image: "/designer.jpeg",
            movie: "/designer_chat2.gif"
        },
        {
            name: "Kate",
            title: "Product Manager",
            image: "/manager.jpeg",
            movie: "/manager_chat2.gif"
        },
        {
            name: "Zoey",
            title: "Marketer",
            image: "/marketer.jpeg",
            movie: "/marketer_chat2.gif"
        },
    ];

    const [currentTab, setCurrentTab] = useState<ExampleType>(examples[0]);

    const changeTab = (value: ExampleType) => {
        setCurrentTab(value);
    }

    return (
        <div className="relative w-full bg-blue-950 flex flex-col gap-[50px] items-center py-[60px]">
            <h2 className="w-fit text-3xl md:text-5xl font-medium md:font-medium tracking-wider text-white text-center px-[20px]">Chatfolio works with any resume</h2>
            <div className="relative w-full flex flex-col md:flex-row gap-10 md:gap-[100px] justify-center md:items-center">
                <div className="w-full md:w-[300px] md:h-[500px] flex md:flex-col gap-4 overflow-scroll px-[20px]">
                    <ExampleTab example={examples[0]} changeTab={changeTab} selected={currentTab.name == examples[0].name} />
                    <ExampleTab example={examples[1]} changeTab={changeTab} selected={currentTab.name == examples[1].name} />
                    <ExampleTab example={examples[2]} changeTab={changeTab} selected={currentTab.name == examples[2].name} />
                    <ExampleTab example={examples[3]} changeTab={changeTab} selected={currentTab.name == examples[3].name} />
                </div>
                <Example example={currentTab} />
            </div>
        </div>
    )
}