'use client';

import { usePathname } from "next/navigation";
import Tab from "./Tab";
import getOnboardStep from "@/lib/getOnboardStep";
import isOnboardStepFinished from "@/lib/isOnboardStepFinished";

export type StepKey = "welcome" | "upload" | "talk" | "website" | "test";

export default function Navigation() {
    const pathname = usePathname();
    const currentStep = getOnboardStep(pathname);

    return (
        <div className="w-screen md:w-[300px] h-full hidden md:flex flex-row md:flex-col md:gap-5 overflow-scroll">
            <Tab selected={currentStep == "welcome"} finished={isOnboardStepFinished(currentStep, "welcome")} link="" step={1} title="Welcome" />
            <Tab selected={currentStep == "upload"} finished={isOnboardStepFinished(currentStep, "upload")} link="/upload"  step={2} title="Upload Resume" />
            <Tab selected={currentStep == "talk"} finished={isOnboardStepFinished(currentStep, "talk")} link="/talk" step={3} title="Talk to Chatbot" />
            <Tab selected={currentStep == "website"} finished={isOnboardStepFinished(currentStep, "website")} link="/website" step={4} title="Add to Website" />
            <Tab selected={currentStep == "test"} finished={isOnboardStepFinished(currentStep, "test")} link="/test" step={4} title="Test Chatbot" />
        </div>
    )
}