import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/types/supabase'

export const dynamic = 'force-dynamic'

export async function POST(request: Request, res: NextResponse) {
  const requestUrl = new URL(request.url)
  const supabase = createRouteHandlerClient<Database>({ cookies })
  const { error } = await supabase.auth.signOut()
  return res
}