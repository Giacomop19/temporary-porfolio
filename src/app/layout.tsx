import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import IconSideNav from "@/components/sideNav";
import IconHeader from "@/components/iconHeader";
import React from "react";
import PdfDownload from "@/components/downloadPdf";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hi, i'm Giacomo"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900`} >
        <header style={{display:"flex"}} className="p-2">
          <IconHeader/>
          <PdfDownload/>
        </header>
        <div className="flex">
          <IconSideNav/>
          {children}
        </div>
      </body>
    </html>
  );
}
