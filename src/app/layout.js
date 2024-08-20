import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import localFont from 'next/font/local'

export const myFont = localFont({
  src: '../../public/fonts/Matemasie-Regular.ttf',
  variable: '--font-matemasie',
})


export const metadata = {
  title: "LearnguageAI",
  description: "Learnguage with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${myFont.variable} `}>
      <body
        className="bg-red-200"
      >{children}</body>
    </html>
  );
}
