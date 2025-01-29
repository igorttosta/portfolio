import "./globals.css";
import { Orbitron, Edu_NSW_ACT_Foundation } from 'next/font/google';
import Nav from "../components/navigation/Navigation";
import type { Metadata } from "next";
import Theme from "../context/theme-provider";


export const metadata: Metadata = {
  title: "Igor Tosta | Full-stack developer | Personal portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700'],
});

export const eduNSW = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
  variable: '--font-edu-nsw',
  weight: ['400'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${eduNSW.variable}`}>
        <Theme>
          <Nav />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
