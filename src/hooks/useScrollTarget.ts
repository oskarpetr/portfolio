import scrollTo from "@/utils/scrollTo";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { pageAnimation } from "@/utils/transition";

export function useScrollTarget(
  scrollTarget: string | null,
  setScrollTarget: (target: string | null) => void,
) {
  const router = useTransitionRouter();
  const pathname = usePathname();

  function redirect(name: string) {
    if (pathname !== "/") {
      setScrollTarget(name);
      router.push("/", {
        onTransitionReady: pageAnimation,
      });
    }

    scrollTo(name);
  }

  useEffect(() => {
    if (pathname === "/" && scrollTarget) {
      setTimeout(() => {
        scrollTo(scrollTarget);
        setScrollTarget(null);
      }, 1100);
    }
  }, [pathname, scrollTarget]);

  return { redirect };
}
