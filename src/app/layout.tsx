// import Navbar from '@/components/navbar'
import '@/styles/globals.scss'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/navbar'), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaac Turner',
  description: 'About Me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
