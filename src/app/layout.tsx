import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext/CartState";

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
        <CartProvider>
        {children}
        </CartProvider>
        <Footer/>
        </body>
    </html>
  );
}
