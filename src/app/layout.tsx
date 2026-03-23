import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Web Developer & AI Engineer",
  description: "Personal portfolio showcasing web development and AI/automation engineering projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased bg-[#0a0a0c] text-[#f0f0f0]`}
    >
      <body className="min-h-screen flex flex-col relative">
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {children}
      </body>
    </html>
  );
}
