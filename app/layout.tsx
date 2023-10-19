import './globals.css'
import { ReactNode, } from 'react';
import Head from 'next/head';
import dosis from '@/fonts/dosis';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" className={dosis.medium}>
        <Head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <body>
          {children}
        </body>
    </html>
  )
}
