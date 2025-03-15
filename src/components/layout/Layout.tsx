import { PropsWithChildren } from "react";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Geist, Instrument_Serif } from "next/font/google";
import Footer from "./Footer";
import SchemaMarkup from "../seo/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentalSerif = Instrument_Serif({
  variable: "--font-instrumental-serif",
  subsets: ["latin"],
  weight: "400",
});

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div
      className={`${geistSans.variable} ${instrumentalSerif.variable} antialiased`}
    >
      <SchemaMarkup />

      <Menu />

      <AnimatePresence mode="sync">
        <div key={`${pathname}`} className="p-10">
          {children}
        </div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
