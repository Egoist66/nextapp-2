import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/ui/Header";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>

        <Header />
        
        <main className="p-4">
          <div className="container mx-auto px-5">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
