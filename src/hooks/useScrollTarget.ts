import scrollTo from "@/utils/scrollTo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function useScrollTarget(
  scrollTarget: string | null,
  setScrollTarget: (target: string | null) => void,
) {
  const router = useRouter();
  const pathname = usePathname();

  function redirect(name: string) {
    if (pathname !== "/") {
      setScrollTarget(name);
      router.push("/");
    }

    scrollTo(name);
  }

  useEffect(() => {
    if (pathname === "/" && scrollTarget) {
      setTimeout(() => {
        scrollTo(scrollTarget);
        setScrollTarget(null);
      }, 100);
    }
  }, [pathname, scrollTarget]);

  return { redirect };
}
