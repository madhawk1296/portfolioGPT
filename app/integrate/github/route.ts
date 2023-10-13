
import { NextResponse, type NextRequest } from 'next/server'
import { App, createNodeMiddleware } from "octokit";
import { Endpoints } from "@octokit/types";
import { integrateGithub } from '@/tools/Integrate';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase';


export type GithubUserType = Endpoints["GET /user"]["response"]["data"];


export const dynamic = 'force-dynamic'


export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const clientId = '3595bc989e8c1ce0c720';
    const clientSecret = "fbd21122ac8fe16b43c8bd6e3bc80aeb33e0ee50";
    const redirectUri = "http://localhost:3000/integrate/github"

    const response = await fetch(`https://github.com/login/oauth/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
      }),
    });

    const responseText = await response.text();
    const params = new URLSearchParams(responseText);
    const accessToken = params.get('access_token');
    const scope = params.get('scope');
    const tokenType = params.get('token_type');
    
    const userResponse = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const githubUser: GithubUserType = await userResponse.json();
    const githubInput = await integrateGithub(githubUser);


    try {
      const supabase = createRouteHandlerClient<Database>({ cookies })
      const { data: { user } } = await supabase.auth.getUser()

      const { data: users } = await supabase.from('users').select().eq("user_id", user?.id!);

      const { error } = await supabase.from('users').update(
        { github: githubInput }
      ).eq("user_id", user?.id!);

      if(error) {
        throw new Error (error.message)
      }

      console.log("handle:", users?.[0].handle)
      console.log("origin:", requestUrl.origin)
      console.log(`${requestUrl.origin}/${users?.[0].handle}`)

      return NextResponse.redirect(`${requestUrl.origin}/${users?.[0].handle}`)

    } catch(e) {
      console.log(e);
      return NextResponse.redirect(requestUrl.origin)
    }
  }
}