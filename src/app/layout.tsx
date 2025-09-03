import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/vassel_logo_alternate.svg" />
      </head>
      <body className={`${calistoga.className} antialiased`}>{children}</body>
    </html>
  );
}
