import { menuItemsTitles } from "@/data/menuItems";
import { cn } from "@/utils/cn";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import FadeIn from "./FadeIn";
import TextStagger from "./TextStagger";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function Menu() {
  // router
  const router = useRouter();

  // current route
  const currentRoute = router.asPath.slice(1);

  // mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuControls = useAnimationControls();

  useEffect(() => {
    if (mobileMenu) {
      mobileMenuControls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      mobileMenuControls.start({ opacity: 1, y: "-100%", scale: 1 });
    }
  }, [mobileMenu]);

  const [displayMenu, setDisplayMenu] = useState(false);
  const menuControls = useAnimationControls();

  useEffect(() => {
    if (displayMenu) {
      menuControls.start({
        y: "0",
      });
    } else {
      menuControls.start({
        y: "100vh",
      });
    }
  }, [displayMenu]);

  return (
    <div>
      <div className="mb-24 md:mb-32 flex items-center justify-between gap-16">
        <TextStagger>
          <Link href="/" className="select-none rounded-sm">
            <h1 className="text-xl uppercase font-semibold transition-all duration-500 hover:scale-95 z-50">
              Oskar Petr
            </h1>
          </Link>
        </TextStagger>

        <TextStagger>
          <div className="items-center gap-10">
            <button
              onClick={() => setDisplayMenu(!displayMenu)}
              className="z-40"
            >
              Menu
            </button>

            {/* {menuItemsTitles.map((item) => {
                return (
                  <Link
                    key={item}
                    href={"/" + item.toLowerCase()}
                    className="group"
                  >
                    <div>{item}</div>
                    <div
                      className={cn(
                        "h-[2px] bg-neutral-500 rounded-full w-0 group-hover:w-full transition-all duration-500",
                        currentRoute === item.toLocaleLowerCase()
                          ? "w-full"
                          : "group-hover:w-full"
                      )}
                    ></div>
                  </Link>
                );
              })} */}
          </div>

          {/* <div className="block lg:hidden cursor-pointer">
              {!mobileMenu ? (
                <List
                  className={cn(
                    "text-2xl transition-all duration-500 text-white-primary"
                    // mobileMenu ? "invisible" : "visible"
                  )}
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
              ) : (
                <X
                  className={cn(
                    "text-2xl transition-all duration-500 text-black-primary"
                    // mobileMenu ? "visible" : "invisible"
                  )}
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
              )}
            </div> */}
        </TextStagger>
      </div>

      <motion.div
        animate={menuControls}
        transition={{
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
        }}
        initial={{ y: "100vh" }}
        className="fixed transition-[scale] duration-1000 inset-0 bg-black-primary bg-opacity-80 backdrop-blur-2xl w-screen h-screen z-40 px-10 py-10 md:px-16 md:py-10 lg:px-32 lg:py-16"
      >
        <FadeIn whileInView className="flex justify-between items-center">
          <div />
          <X
            className="text-2xl transition-all duration-500 text-black-primary cursor-pointer"
            onClick={() => setDisplayMenu(!displayMenu)}
          />
        </FadeIn>

        <div className="flex flex-col gap-16 mt-32">
          {menuItemsTitles.map((item, index) => {
            return (
              <FadeIn
                key={item}
                delay={0.25 * index}
                whileInView
                className="border-b border-neutral-700 pb-6"
              >
                <Link
                  href={"/" + item.toLowerCase()}
                  onClick={() => setDisplayMenu(!displayMenu)}
                  className="group flex items-center gap-4"
                >
                  <div
                    className={cn(
                      "text-4xl font-medium",
                      currentRoute === item.toLocaleLowerCase()
                        ? "text-brown-primary"
                        : "text-white-primary"
                    )}
                  >
                    {item}
                    {/* <div
                    className={cn(
                      "h-[2px] bg-neutral-500 rounded-full w-0 group-hover:w-full transition-all duration-500",
                      currentRoute === item.toLocaleLowerCase()
                        ? "w-full"
                        : "group-hover:w-full"
                    )}
                  ></div> */}
                  </div>

                  <p className="group-hover:opacity-50 text-4xl opacity-0 group-hover:translate-x-2 -translate-x-8 transition-all duration-500">
                    ➼
                  </p>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </motion.div>

      {/* <motion.div
        animate={mobileMenuControls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        initial={{ y: "-100%" }}
        className={cn(
          "transition-[padding] duration-500 block lg:hidden z-40 px-10 pb-10 pt-32 md:pt-32 md:px-32 md:pb-16 absolute top-0 left-0 w-full items-center gap-12 bg-white",
          mobileMenu ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-2">
          {menuItemsTitles.map((item) => {
            return (
              <Link
                key={item}
                href={"/" + item.toLowerCase()}
                className="group w-fit"
              >
                <p className="text-black-primary w-fit text-xl">{item}</p>
                <div
                  className={cn(
                    "h-[2px] bg-neutral-500 rounded-full w-0 group-hover:w-full transition-all duration-500",
                    currentRoute === item.toLocaleLowerCase()
                      ? "w-full"
                      : "group-hover:w-full"
                  )}
                ></div>
              </Link>
            );
          })}
        </div>
      </motion.div> */}
    </div>
  );
}
