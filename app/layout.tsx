import './globals.css'
import { ReactNode, } from 'react';
import Head from 'next/head';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
        <Head>
            <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <body>
          {children}
        </body>
    </html>
  )
}
