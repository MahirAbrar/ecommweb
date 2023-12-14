import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import GlobalState from "../context"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <main className='mt-14'>
            {children}
          </main>

        </GlobalState>
      </body>
    </html>
  )
}
