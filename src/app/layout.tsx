import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'
const poppins = Poppins({
  weight:'500',
  subsets:['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'CryptoCurrency Website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}</body>
    </html>
  )
}
