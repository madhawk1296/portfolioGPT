import './globals.css'
import { ReactNode, } from 'react';
import Head from 'next/head';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
        <Head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <body>
          {children}
        </body>
    </html>
  )
}
