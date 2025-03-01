import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ComingSoon from "@/components/layout/ComingSoon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oskar Petr",
  description: "Personal portfolio of Oskar Petr.",
};

export default function RootLayout(
  {
    // children,
  }: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <ComingSoon />
      </body>
    </html>
  );
}
