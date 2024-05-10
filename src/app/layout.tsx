import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext/CartState";
import { UserProvider } from "@/context/UserContext/UserState";
import { DataProvider } from "@/context/DataContext/DataState";

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
        <DataProvider>
        <UserProvider>
          <CartProvider>

            
            <Navbar />
            {children}
            <Footer />


          </CartProvider>
        </UserProvider>
        </DataProvider>

      </body>
    </html>
  );
}
