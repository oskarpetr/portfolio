import FadeIn from "../animation/FadeIn";
import Logo from "./Logo";
import SwitchLanguage from "../menu/SwitchLanguage";
import MobileMenuItems from "../menu/MobileMenuItems";
import MenuItems from "../menu/MenuItems";
import { menuItems } from "@/data/menu";
import MobileMenuButton from "../menu/MobileMenuButton";
import Button from "../shared/Button";
import { useTranslationStore } from "@/stores/useTranslationStore";
import PageLink from "./PageLink";

export default function Menu() {
  const { translation } = useTranslationStore();

  return (
    <header className="sticky top-0 z-30 flex h-[85px] items-center justify-between bg-[#ffffffd4] px-6 backdrop-blur-3xl will-change-[filter]">
      <Logo />

      <div className="hidden w-1/2 justify-between xl:flex">
        <MenuItems />

        <FadeIn delay={menuItems.length * 0.1 + 0.8}>
          <div className="flex gap-6">
            <SwitchLanguage />

            <PageLink href="/inquiry">
              <Button text={translation.buttons.hitMeUp} color="black" />
            </PageLink>
          </div>
        </FadeIn>
      </div>

      <div className="block xl:hidden">
        <FadeIn delay={0.1 + 0.8}>
          <MobileMenuButton />
        </FadeIn>

        <MobileMenuItems />
      </div>
    </header>
  );
}
