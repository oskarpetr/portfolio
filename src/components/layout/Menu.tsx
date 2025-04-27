import FadeIn from "../animation/FadeIn";
import Logo from "./Logo";
import SwitchLanguage from "../menu/SwitchLanguage";
import MobileMenuItems from "../menu/MobileMenuItems";
import MenuItems from "../menu/MenuItems";
import { menuItems } from "@/data/menu";
import MobileMenuButton from "../menu/MobileMenuButton";

export default function Menu() {
  return (
    <div className="sticky top-0 z-30 flex h-[85px] items-center justify-between bg-[#ffffffd4] px-6 backdrop-blur-3xl will-change-[filter]">
      <Logo />

      <div className="hidden w-1/2 justify-between md:flex">
        <MenuItems />

        <FadeIn delay={menuItems.length * 0.1}>
          <SwitchLanguage />
        </FadeIn>
      </div>

      <div className="block md:hidden">
        <FadeIn delay={0.1}>
          <MobileMenuButton />
        </FadeIn>

        <MobileMenuItems />
      </div>
    </div>
  );
}
