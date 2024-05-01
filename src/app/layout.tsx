import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { RootLayoutProps } from "@/types";
import Footer from "@/components/Footer";
import { getAuthToken, getUserName } from "@/lib/session";

export const metadata: Metadata = {
  title: "Tirgum",
  description: "Buy all kinds of Tyres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>
        <Navbar/>

        {children}

        <Footer/>
        </body>
    </html>
  );
}
