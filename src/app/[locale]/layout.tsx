import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext/CartState";
import { UserProvider } from "@/context/UserContext/UserState";
import { DataProvider } from "@/context/DataContext/DataState";
import { CompProvider } from "@/context/CompContext/CompState";
import MainLayout from "@/components/base/MainLayout";


export const metadata: Metadata = {
  title: "Tirgum",
  description: "Buy all kinds of Tyres",
};


export async function setStaticParamsLocale() {
  return [{ locale: "uk" }, { locale: "pl" }];
}


type Props = {
  children: React.ReactNode;
  params: { locale: string };
};



export default function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {

  return (
    <html lang={locale}>

      <body>
        <DataProvider>
        <UserProvider>
          <CartProvider>
          <CompProvider>

            
          <MainLayout locale={locale}>{children}</MainLayout>

            
            </CompProvider>
          </CartProvider>
        </UserProvider>
        </DataProvider>

      </body>
    </html>
  );
}
