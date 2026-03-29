import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";

const geistSans = Geist({
     variable: "--font-geist-sans",
     subsets: ["latin"],
});

const geistMono = Geist_Mono({
     variable: "--font-geist-mono",
     subsets: ["latin"],
});

export const metadata = {
     title: "Mednix - Multipurpose Medical Services",
     description: "Multipurpose Medical & Healthcare Services",
};

export default function RootLayout({ children }) {
     return (
          <html lang="en">
               <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
               >
                    <div className="sticky top-0 z-50">
                         <Header />
                    </div>
                    {children}
               </body>
          </html>
     );
}
