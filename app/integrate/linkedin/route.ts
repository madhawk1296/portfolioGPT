
import type { NextRequest } from 'next/server'
import { App, createNodeMiddleware } from "octokit";

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
    const requestUrl = new URL(req.url)
    const code = requestUrl.searchParams.get('code')
    const state = requestUrl.searchParams.get('state')

    if (code) {
        const clientId = "86vpsc732lv42l";
        const clientSecret = "jE6ikwJQ26UyK6eZ";
        const callbackUrl = 'http://localhost:3000/integrate/linkedin'

        let bodyData = `grant_type=authorization_code&` + 
                `code=${encodeURIComponent(code)}&` +
               `client_id=${encodeURIComponent(clientId)}&` +
               `client_secret=${encodeURIComponent(clientSecret)}&` +
               `redirect_uri=${encodeURIComponent(callbackUrl)}`;
        
        const response = await fetch(`https://www.linkedin.com/oauth/v2/accessToken`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: bodyData,
        });

        const { access_token, scope } = await response.json();

        console.log(scope)
        const res = await fetch('https://api.linkedin.com/v2/userinfo', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });

        console.log(await res.json());
    }
}