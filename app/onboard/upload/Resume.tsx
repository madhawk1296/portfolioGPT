'use client';

import convertResume from "@/lib/convertResume";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Resume({ resumeExists }: {resumeExists: boolean}) {
    const router = useRouter();

    const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const res = await convertResume(files[0]);
            router.refresh();
        }
    }
    
    return (
        <div className="w-full flex flex-col gap-4 md:gap-1">
            <h1 className="font-medium text-gray-800 tracking-wide">Upload Resume</h1>
            <div className={`relative w-full md:w-[200px] h-[150px] px-[10px] py-[5px] border-2 border-gray-300 outline-gray-500 smoothe rounded-lg overflow-hidden flex justify-center items-center shadow ${resumeExists ? "bg-gray-300" : "bg-gray-50 cursor-pointer hover:shadow-md hover:border-gray-400"}`}>
                        <h1 className="w-fit text-xs font-medium tracking-wide text-center text-gray-400">
                        <span className="underline text-blue-500">Browse</span> or drag and drop your resume
                        <br />
                        (.pdf, .doc, .docx)</h1>
                        <input type="file" disabled={resumeExists} onChange={handleFile} className={`absolute opacity-0 w-full h-full ${!resumeExists && "cursor-pointer" }`} accept=".pdf, .doc, .docx"  />
            </div>
            {resumeExists && <div className="h-[40px] w-full md:w-[200px] border-2 rounded-lg border-gray-300 bg-gray-50 flex justify-between items-center px-[10px]">
                <h1 className="text-xs font-medium tracking wide truncate text-gray-700">Resume Uploaded!</h1>
            </div>}
        </div>
    )
}