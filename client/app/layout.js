import { Lexend, Outfit } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const lexend = Lexend({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-white'>
      <body id='modal-root' className={`${lexend.className} ${outfit.className} relative overflow-x-hidden box-border`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
