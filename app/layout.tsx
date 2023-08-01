import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Providers from "./components/providers";
import Navbar from "./components/navbar";
import Footer from './components/footer'


const nunito = Nunito_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-nunito-sans' 
});

export const metadata: Metadata = {
  title: 'Where in the World?',
  description: 'Encyclopedia Lite for Countries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body>
        <Providers>
          <Navbar title={metadata.title}/>
          {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  )
}
