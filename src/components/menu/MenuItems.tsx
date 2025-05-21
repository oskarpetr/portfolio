import { menuItems } from "@/data/menu";
import { useScrollTarget } from "@/hooks/useScrollTarget";
import { useTranslationStore } from "@/stores/useTranslationStore";
import FadeIn from "../animation/FadeIn";
import TextStagger from "../animation/TextStagger";
import { useMenuStore } from "@/stores/useMenuStore";

export default function MenuItems() {
  const { translation } = useTranslationStore();
  const { scrollTarget, setScrollTarget } = useMenuStore();
  const { redirect } = useScrollTarget(scrollTarget, setScrollTarget);

  return (
    <div className="flex items-center gap-3">
      {menuItems.map((item, index) => (
        <FadeIn delay={0.1 * index + 0.8} key={`menu-item-${item}`}>
          <div onClick={() => redirect(item)} className="flex cursor-pointer">
            <TextStagger>
              {translation.menu[item as keyof typeof translation.menu]}
            </TextStagger>
            {index !== menuItems.length - 1 ? "," : ""}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
