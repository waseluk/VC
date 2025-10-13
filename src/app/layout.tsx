import type { Metadata } from "next";
import Navbar from "@/header/navbar";
import { Calistoga } from "next/font/google";
import "./globals.css";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
});

export const metadata: Metadata = {
  title: "Vassel Creative",
  description: "Web Development & Digital Marketing",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calistoga.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
