import TextStagger from "../animation/TextStagger";
import { useTranslationStore } from "../../translation/useTranslationStore";
import FadeIn from "../animation/FadeIn";
import Logo from "./Logo";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";

export default function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-30 flex h-[85px] items-center justify-between bg-[#ffffffd4] px-6 backdrop-blur-3xl will-change-[filter]">
      <Logo />

      <div className="hidden w-1/2 justify-between md:flex">
        <MenuItems />
        <SwitchLanguage />
      </div>

      <div className="block md:hidden">
        <FadeIn delay={0.1}>
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={cn(
              "relative z-10 flex cursor-pointer flex-col transition-all duration-500",
              isMobileMenuOpen ? "gap-7" : "gap-2",
            )}
          >
            <div
              className={cn(
                "h-[1px] w-10 transition-all duration-500",
                isMobileMenuOpen
                  ? "origin-top-left rotate-45 bg-white"
                  : "bg-black",
              )}
            ></div>
            <div
              className={cn(
                "h-[1px] w-10 transition-all duration-500",
                isMobileMenuOpen
                  ? "origin-bottom-left -rotate-45 bg-white"
                  : "bg-black",
              )}
            ></div>
          </button>
        </FadeIn>

        <MobileMenuItems
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
    </div>
  );
}

function MenuItems() {
  const { translation } = useTranslationStore();

  return (
    <div className="flex items-center gap-3">
      {menuItems.map((item, index) => (
        <FadeIn delay={0.1 * index} key={`menu-item-${item.title}`}>
          <Link href={`/#${item.name}`} className="flex cursor-pointer">
            <TextStagger>
              {translation.menu[item.name as keyof typeof translation.menu]}
              {index !== menuItems.length - 1 ? "," : ""}
            </TextStagger>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}

function MobileMenuItems({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}) {
  const { translation } = useTranslationStore();

  return (
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{
            duration: 0.8,
            ease: BEZIER_EASING,
            delayChildren: 1.2,
          }}
          className="absolute top-0 left-0 z-0 flex h-screen w-screen items-center gap-40 bg-black p-6 text-white"
        >
          <div className="absolute top-8">
            <SwitchLanguage />
          </div>

          <div className="flex flex-col gap-10">
            {menuItems.map((item, index) => (
              <FadeIn delay={0.1 * index} key={`menu-item-${item.title}`}>
                <Link
                  href={`/#${item.name}`}
                  className="serif flex w-fit cursor-pointer border-b border-dashed border-white/30 pb-1 text-4xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <TextStagger>
                    {
                      translation.menu[
                        item.name as keyof typeof translation.menu
                      ]
                    }
                    {index !== menuItems.length - 1 ? "," : ""}
                  </TextStagger>
                </Link>
              </FadeIn>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function SwitchLanguage() {
  const { language, toggleLanguage } = useTranslationStore();

  return (
    <FadeIn delay={0.5}>
      <button
        onClick={toggleLanguage}
        className="flex w-8 cursor-pointer items-center justify-center"
      >
        <TextStagger>{language.toUpperCase()}</TextStagger>
      </button>
    </FadeIn>
  );
}
