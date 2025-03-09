import TextStagger from "../animation/TextStagger";
import { useTranslationStore } from "../../translation/useTranslationStore";
import FadeIn from "../animation/FadeIn";
import Logo from "./Logo";
import { menuItems } from "@/data/menu";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="sticky top-0 z-10 flex h-[85px] items-center justify-between bg-[#ffffffd4] px-10 py-6 backdrop-blur-3xl will-change-[filter]">
      <Logo />

      <div className="hidden w-1/2 justify-between md:flex">
        <MenuItems />
        <SwitchLanguage />
      </div>

      <div className="block md:hidden">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-2">
            <div className="h-[1px] w-10 bg-black"></div>
            <div className="h-[1px] w-10 bg-black"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function MenuItems() {
  const { translation } = useTranslationStore();

  return (
    <div className="flex items-center gap-4">
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
