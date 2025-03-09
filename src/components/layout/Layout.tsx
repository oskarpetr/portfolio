import { ReactNode } from "react";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Geist } from "next/font/google";
import Footer from "./Footer";
import SchemaMarkup from "../seo/SchemaMarkup";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  children: ReactNode;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Layout({ children }: Props) {
  const pathname = usePathname();

  const { language } = useTranslationStore();

  return (
    <div className={`${geistSans.variable} antialiased`}>
      <SchemaMarkup />

      <Menu />

      <AnimatePresence mode="sync">
        <div key={`${pathname}-${language}`} className="p-10">
          {children}
        </div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
