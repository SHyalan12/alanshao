import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NetworkBackground from "@/components/NetworkBackground";
import { LanguageProvider } from "@/components/LanguageContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Shao",
  description: "Data Science & Business Administration student at Boston University. Building at the intersection of data, technology, and decision-making.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased font-sans">
        <LanguageProvider>
          <NetworkBackground />
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="py-8 text-center text-xs text-gray-300 tracking-widest uppercase">
            © {new Date().getFullYear()} Alan Shao
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
