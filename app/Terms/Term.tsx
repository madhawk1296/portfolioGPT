import dosis from "@/fonts/dosis";
import { ReactNode } from "react";

export default function Term({ children }: {children: ReactNode}) {
    return <span className={dosis.bold}>{children}</span>
}