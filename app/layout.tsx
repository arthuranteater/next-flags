import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import DarkModeProvider from "./components/dark-mode-provider";
import Navbar from "./components/navbar";


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
        <DarkModeProvider>
          <Navbar title={metadata.title}/>
        {children}
        </DarkModeProvider>
        </body>
    </html>
  )
}
