import { MouseEvent, ReactNode, useEffect } from "react";
import Head from "next/head";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next/router";
import apps from "@/data/apps";
import { useState } from "react";
import Menu from "./Menu";
import { BEZIER_EASING } from "@/constants/animation";
import { smoothScroll } from "@/utils/smoothScroll";
import { cn } from "@/utils/cn";

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const customTitle = `Oskar Petr${title !== undefined ? ` | ${title}` : ""}`;

  const animate = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 1 },
  };

  const slide = {
    initial: { top: "100vh" },
    enter: { top: "100vh" },
    exit: {
      top: "0",
      transition: { duration: 1, ease: BEZIER_EASING },
    },
  };

  const perspective = {
    initial: { y: 0 },
    enter: { y: 0 },
    exit: {
      // y: -100,
      // scale: 1.05,
      transition: { duration: 1, ease: BEZIER_EASING },
    },
  };

  useEffect(() => {
    const scroll = smoothScroll();

    if (window.location.hash) {
      const element = document.getElementById(
        window.location.hash.substring(1)
      );

      if (element) {
        scroll.scrollTo(element, {
          duration: 3,
          easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }

    return () => scroll.destroy();
  }, []);

  const router = useRouter();
  const routerSplit = router.asPath.split("/");

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    // handleMouseHovering(e);

    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
    // console.log(e.clientX, e.clientY);
  };

  // const [hoveringCursor, setHoveringCursor] = useState(false);
  const handleMouseLeave = (e: MouseEvent) => {
    // handleMouseHoveringLeave(e);

    setCursorPosition({ x: cursorPosition.x - 16, y: cursorPosition.y - 16 });
  };

  // const handleMouseHovering = (event: MouseEvent) => {
  //   const target = event.target as HTMLElement;
  //   console.log(target.tagName);
  //   // Check if the target element is a button or has a specific class
  //   if (target.tagName === "BUTTON" || target.tagName === "A") {
  //     setHoveringCursor(true);
  //   }
  // };

  // const handleMouseHoveringLeave = (event: MouseEvent) => {
  //   const target = event.target as HTMLElement;

  //   // Check if the target element is a button or has a specific class
  //   if (target.tagName === "BUTTON" || target.tagName === "A") {
  //     setHoveringCursor(false);
  //   }
  // };

  useEffect(() => {
    const handleRouteChange = () => {
      const scrollPosition = window.scrollY;
      sessionStorage.setItem("scrollPosition", scrollPosition.toString());
    };

    const handleRouteComplete = () => {
      const scrollY = sessionStorage.getItem("scrollPosition");
      if (scrollY) window.scrollTo(0, parseFloat(scrollY));
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // className="cursor-none hover:cursor-none"
    >
      <Head>
        <title>{customTitle}</title>
      </Head>

      {/* <Menu /> */}

      {/* <AnimatePresence mode="wait">
        {!hoveringCursor && (
          <motion.div
            initial={{ x: cursorPosition.x - 16, y: cursorPosition.y - 16 }}
            animate={{
              x: cursorPosition.x - 16,
              y: cursorPosition.y - 16,
            }}
            exit={{ x: cursorPosition.x - 16, y: cursorPosition.y - 16 }}
            transition={{ duration: 0.2, ease: "backOut" }}
            className="w-8 h-8 text-white-primary rounded-full text-3xl bg-blend-difference mix-blend-difference z-[9999] top-0 left-0 fixed pointer-events-none"
          >
            ✦
          </motion.div>
        )}
      </AnimatePresence> */}

      <motion.div
        {...animate(slide)}
        className={cn(
          "z-[9999] inset-0 fixed flex justify-center items-center",
          routerSplit[1] === "projects"
            ? "bg-white-primary"
            : "bg-black-primary"
        )}
      ></motion.div>

      <motion.div {...animate(perspective)}>
        <Menu />

        {children}
      </motion.div>

      <motion.div
        {...animate(opacity)}
        className="absolute -z-50 inset-0 h-full w-full"
      ></motion.div>
      {/* bg-[radial-gradient(#21180C_1.5px,transparent_1.5px)] [background-size:24px_24px] */}
    </div>
  );
}
