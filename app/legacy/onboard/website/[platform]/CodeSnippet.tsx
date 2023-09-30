import { CopyBlock, irBlack } from "react-code-blocks"

export default function CodeSnippet({ text }: { text: string }) {
    const props = {customStyle:{height: "100%", padding: "0px", fontSize: "0.875rem"}, text, theme: irBlack, showLineNumbers: false, language:"html"}
    
    return (
        <CopyBlock {...props as any} />
    )
}