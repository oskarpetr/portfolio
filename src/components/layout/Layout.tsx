import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import SchemaMarkup from "../seo/SchemaMarkup";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div>
      <SchemaMarkup />

      <AnimatePresence mode="sync">
        <div key={pathname}>{children}</div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
