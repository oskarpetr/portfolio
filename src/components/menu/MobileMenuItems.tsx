import { useScrollTarget } from "@/hooks/useScrollTarget";
import { useTranslationStore } from "@/stores/useTranslationStore";
import { BEZIER_EASING } from "@/utils/animation";
import { AnimatePresence, motion } from "framer-motion";
import SwitchLanguage from "./SwitchLanguage";
import { menuItems } from "@/data/menu";
import FadeIn from "../animation/FadeIn";
import { useMenuStore } from "@/stores/useMenuStore";
import ParagraphSplit from "../animation/ParagraphSplit";

export default function MobileMenuItems() {
  const { translation } = useTranslationStore();
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    scrollTarget,
    setScrollTarget,
  } = useMenuStore();
  const { redirect } = useScrollTarget(scrollTarget, setScrollTarget);

  return (
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{
            duration: 1.2,
            ease: BEZIER_EASING,
            delayChildren: 1.5,
          }}
          className="absolute top-0 left-0 z-0 flex h-screen w-screen items-center gap-40 bg-black p-6 text-white"
        >
          <div className="absolute top-8">
            <FadeIn>
              <SwitchLanguage />
            </FadeIn>
          </div>

          {/* <div className="flex flex-col gap-10">
            {menuItems.map((item, index) => (
              <FadeIn delay={0.1 * index} key={`menu-item-${item}`}>
                <div
                  onClick={() => {
                    redirect(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className="serif flex w-fit cursor-pointer border-b border-dashed border-white/30 pb-1 text-4xl"
                >
                  <TextStagger>
                    {translation.menu[item as keyof typeof translation.menu]}
                    {index !== menuItems.length - 1 ? "," : ""}
                  </TextStagger>
                </div>
              </FadeIn>
            ))}
          </div> */}

          <div className="serif flex flex-col gap-8 text-4xl">
            {menuItems.map((item, index) => (
              <div
                key={`menu-item-${item}`}
                onClick={() => {
                  redirect(item);
                  setIsMobileMenuOpen(false);
                }}
              >
                <ParagraphSplit
                  text={
                    translation.menu[item as keyof typeof translation.menu] +
                    (index !== menuItems.length - 1 ? "," : "")
                  }
                  delay={0.1 * index}
                  indent={false}
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
