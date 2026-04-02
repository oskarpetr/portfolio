import { menuItems } from "@/data/menu";
import { useScrollTarget } from "@/hooks/useScrollTarget";
import { useTranslationStore } from "@/stores/useTranslationStore";
import FadeIn from "../animation/FadeIn";
import TextStagger from "../animation/TextStagger";
import { useMenuStore } from "@/stores/useMenuStore";
import { useState } from "react";
import { cn } from "@/utils/cn";

export default function MenuItems() {
  const { translation } = useTranslationStore();
  const { scrollTarget, setScrollTarget } = useMenuStore();
  const { redirect } = useScrollTarget(scrollTarget, setScrollTarget);

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-2 text-lg font-medium tracking-tighter">
      {menuItems.map((item, index) => (
        <FadeIn delay={0.1 * index + 0.8} key={`menu-item-${item}`}>
          <div
            onClick={() => redirect(item)}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "flex cursor-pointer transition-opacity duration-300",
              hovered !== item && hovered != null ? "opacity-30" : "",
            )}
          >
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
