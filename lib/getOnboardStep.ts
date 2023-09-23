import { StepKey } from "@/app/onboard/Navigation";

export default function getOnboardStep(pathname: string): StepKey {
    return pathname.split("/")[2] as StepKey || "welcome";
}