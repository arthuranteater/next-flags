import "./global.css";
import { Nunito_Sans } from "next/font/google";
import DarkModeProvider from "./components/dark-mode-provider";
import Navbar from "./components/navbar";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Where in the World?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <DarkModeProvider>
          <Navbar title={metadata.title} />
          <main className="mt-20">{children}</main>
        </DarkModeProvider>
      </body>
    </html>
  );
}
