import uploadResume from "./uploadResume";

export default async function uploadResumeFile(url: string) {
    const file = await fetch(url);
    const content = await file.text();

    const res = await uploadResume(content);
    console.log(res)
}