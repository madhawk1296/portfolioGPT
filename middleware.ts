import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profiles } = await supabase.from('profiles').select();
  const profile = profiles?.[0];

  if(profile) {
    const { onboarded } = profile;
    if(!onboarded && !req.nextUrl.pathname.startsWith('/onboard')) return NextResponse.redirect(new URL('/onboard', req.url));
  } else {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return res
}

export const config = {
  matcher: ['/onboard/:path*', '/account/:path*']
}