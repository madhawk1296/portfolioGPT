'use client';

import { useState } from "react";
import Name from "./Name";
import Resume from "./Resume";
import UploadContinueButton from "./UploadContinueButton";

export default function UploadForm({ googleName, info}: {googleName: string, info: string | null}) {
    const [name, setName] = useState<string>(googleName);
    const resumeExists = info != null;

    const changeName = (value: string) => {
        setName(value);
    }

    return (
        <div className="w-full h-full flex flex-col justify-between items-center gap-5">
            <div className="w-full flex flex-col gap-8">
                <Name changeName={changeName} name={name} />
                <Resume resumeExists={resumeExists} />
            </div>
            <UploadContinueButton name={name} disabled={!resumeExists} page="/talk" />
        </div>
    )
}