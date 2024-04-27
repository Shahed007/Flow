import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/shared/sidebar/Sidebar";
import Navbar from "@/shared/navbar/Navbar";
import { Modal } from "@/components/ui/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar/>
      <div className="flex flex-col">
        <Navbar/>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
         
          {children}
        </main>
      </div>
    </div>
      </body>
    </html>
  );
}
