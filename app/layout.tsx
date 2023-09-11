import './globals.css'
import type { Metadata } from 'next'
import { PHProvider, PostHogPageview } from './providers';
import { ReactNode, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Chatfolio - a chatbot for your portfolio site',
  description: 'Chatfolio is a chatbot for your portfolio website that can answer any questions about your resume, skills, experience ...etc',
}

export const dynamic = 'force-dynamic';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className="relative w-screen h-full min-h-screen ">
          {children}
          <Analytics />
        </body>
      </PHProvider>
    </html>
  )
}
