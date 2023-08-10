import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edu-Mentor',
  description: 'Connecting knowledge and home with our tutoring website',
}

const  RootLayout = ({children,}:{
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto`}>
        <h1>hello</h1>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
