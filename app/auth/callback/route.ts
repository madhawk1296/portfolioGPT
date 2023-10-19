import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/types/supabase'


export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const { origin, searchParams} = new URL(req.url)
  const code = searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies })
    const { data: { user, session }, error } = await supabase.auth.exchangeCodeForSession(code);

    const { data: users } = await supabase.from("users").select().eq("user_id", user?.id!);
    const currentUser = users?.[0];
    const handle = currentUser?.handle

    if(currentUser) {
        if (handle) {
            return NextResponse.redirect(`${origin}/${handle}`)
        } else {
            return NextResponse.redirect(`${origin}/Account/Onboard`)
        }
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${origin}/Account/Create`)
}