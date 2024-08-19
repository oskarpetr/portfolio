import { menuItemsTitles } from "@/data/menuItems";
import { cn } from "@/utils/cn";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function Menu({ showMenu = true }: { showMenu?: boolean }) {
  // router
  const router = useRouter();

  // current route
  const currentRoute = router.asPath.slice(1);

  // mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuControls = useAnimationControls();

  useEffect(() => {
    if (mobileMenu) {
      mobileMenuControls.start({ opacity: 1, y: 0 });
    } else {
      mobileMenuControls.start({ opacity: 1, y: "-100%" });
    }
  }, [mobileMenu]);

  return (
    <Fragment>
      <div className="mb-24 md:mb-32 flex items-center justify-between gap-16">
        <Link href="/" className="select-none rounded-sm z-50">
          <h1
            className={cn(
              "text-xl uppercase font-semibold transition-all duration-500 hover:scale-95",
              mobileMenu ? "text-black-primary" : "text-neutral-300"
            )}
          >
            Oskar Petr
          </h1>
        </Link>

        {showMenu && (
          <div className="z-50">
            <div className="items-center gap-10 hidden lg:flex">
              {menuItemsTitles.map((item) => {
                return (
                  <Link
                    key={item}
                    href={"/" + item.toLowerCase()}
                    className="group"
                  >
                    <p>{item}</p>
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

            <div className="block lg:hidden cursor-pointer">
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
            </div>
          </div>
        )}
      </div>

      <motion.div
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
      </motion.div>
    </Fragment>
  );
}
