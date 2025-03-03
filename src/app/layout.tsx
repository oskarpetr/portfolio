import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import App from "@/components/layout/App";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oskar Petr",
  description: "Personal portfolio of Oskar Petr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      </head> */}
      <body className={`${geistSans.variable} antialiased`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
