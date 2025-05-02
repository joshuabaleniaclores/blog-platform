import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Platform",
  applicationName: "Blog Platform",
  description: "A powerful blog platform built with Next.js.",
  authors: [{ name: "Joshua Balenia Clores", url: "https://github.com/joshuabaleniaclores" }],
  creator: "Joshua Balenia Clores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center w-full`}
      >
        {children}
      </body>
    </html>
  );
}
