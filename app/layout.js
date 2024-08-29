import { Inter } from "next/font/google";
import "./globals.css";
import { DialogProvider } from "@/context/Context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Cart from "@/components/Cart";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SKAP Customs",
  description: "Create Customized Products",
};

export default function RootLayout({ children }) {
  return (
    <DialogProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={`bg-gray-50 ${inter.className}`}>
            <Navbar />
            <Cart />
            {children}
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </DialogProvider>
  );
}
