import { PropsWithChildren } from "react";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import SchemaMarkup from "../seo/SchemaMarkup";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div>
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
