import callChatGpt from "@/lib/callChatGpt";
import routeUser from "@/lib/routeUser";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest){
    const { messageHistory } = await req.json()
    const user = await routeUser() 

    const data = await callChatGpt(user.info, messageHistory)
    
    return NextResponse.json({data})
}