import convertApiClient from "./convertApiClient";
import { Readable } from 'stream';
import fs from 'fs';
import uploadResumeFile from "./uploadResumeFile";


export default async function convertResume(resume: File) {
    const convertApi = convertApiClient();
    let params = convertApi.createParams();
    params.add('file', resume)
    let result = await convertApi.convert('pdf', 'txt', params)
    let url = result.files[0].Url
    await uploadResumeFile(url);
    
}