import callChatGpt from "@/lib/callChatGpt";
import getSupabaseAdmin from "@/lib/getSupabaseAdmin";
import getApiKey from "@/lib/getApiKey";
import logApiCall from "@/lib/logApiCall";
import routeUser from "@/lib/routeUser";
import { NextRequest, NextResponse } from "next/server";
import validateApiCall from "@/lib/validateApiCall";

export async function OPTIONS(req: NextRequest) {
    console.log('options');
    const response = new NextResponse();

    // Setting CORS headers for all responses
    response.headers.set('Access-Control-Allow-Origin', '*');

    // Preflight request. Reply successfully:
    response.headers.set('Access-Control-Allow-Methods', 'POST,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    response.headers.set('Access-Control-Max-Age', '3600');  // Cache preflight request for 1 hour
    return response;

}

export async function POST(req: NextRequest){
    const response = new NextResponse();
    response.headers.set('Access-Control-Allow-Origin', '*');


    const { messageHistory } = await req.json()
    const id = req.nextUrl.searchParams.get("id");

    if(id) { 
        const supabase = getSupabaseAdmin();
        const apiKey = await getApiKey(supabase, id);

        const isValidCall = await validateApiCall(supabase, apiKey);
        if (isValidCall) {
            const data = await callChatGpt(apiKey.user_id.info || "", messageHistory)

            // log event
            logApiCall(supabase, apiKey);

            const res = NextResponse.json({data}, {status: 200})
            res.headers.set('Access-Control-Allow-Origin', '*');
            return res
        }
        else {
            const res = NextResponse.json({error: "Rate limit reached"}, {status: 429})
            res.headers.set('Access-Control-Allow-Origin', '*');
            return res
        }
    }
}