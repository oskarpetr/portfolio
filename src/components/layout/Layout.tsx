import { ReactNode } from "react";
import Menu from "./Menu";
import { useTranslationStore } from "@/stores/useTranslationStore";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();

  const { language } = useTranslationStore();

  return (
    <div>
      <Menu />

      <AnimatePresence mode="sync">
        <div key={`${pathname}-${language}`} className="p-10">
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
}
