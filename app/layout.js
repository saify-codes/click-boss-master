'use client'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
export default function RootLayout({ session,children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning="true">
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
