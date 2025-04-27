import { useMenuStore } from "@/stores/useMenuStore";
import { cn } from "@/utils/cn";

export default function MobileMenuButton() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMenuStore();

  return (
    <button
      onClick={() => setIsMobileMenuOpen(isMobileMenuOpen!)}
      className={cn(
        "relative z-10 flex cursor-pointer flex-col transition-all duration-500",
        isMobileMenuOpen ? "gap-7" : "gap-2",
      )}
    >
      <div
        className={cn(
          "h-[1px] w-10 transition-all duration-500",
          isMobileMenuOpen ? "origin-top-left rotate-45 bg-white" : "bg-black",
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
  );
}
