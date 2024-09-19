import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import IconSideNav from "@/components/sideNav";
import IconHeader from "@/components/iconHeader";
import React from "react";
import PdfDownload from "@/components/downloadPdf";


const interRegular = localFont({
  src: "../shared/fonts/inter-ui/Inter-UI-Regular.otf",
  variable: "--font-inter-regular",
  weight: "100 900",
});
const interBold = localFont({
  src: "../shared/fonts/inter-ui/Inter-UI-Bold.otf",
  variable: "--font-inter-bold",
  weight: "100 900",
});
const dune = localFont({
  src: "../shared/fonts/dune/Dune_Rise.otf",
  variable : "--font-dune",
  weight: "100 900",
});
const interBlack = localFont ({
  src: "../shared/fonts/inter-ui/Inter-UI-Black.otf",
  variable: "--font-inter-black",
  weight: "100 900",
})

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
      <body className={`${interRegular.variable} ${interBold.variable} ${dune.variable} ${interBlack.variable} antialiased bg-neutral-900`} >
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
