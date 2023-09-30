import { StepKey } from "@/app/onboard/Navigation";

type StepsType = {
    welcome: number;
    upload: number;
    talk: number;
    website: number;
    test: number;
};

export default function isOnboardStepFinished(currentStep: StepKey, tab: StepKey) {
    const steps: StepsType = {
        "welcome": 1,
        "upload": 2,
        "talk": 3,
        "website": 4,
        "test": 5,

    }

    return steps[tab] < steps[currentStep];
}