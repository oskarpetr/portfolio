import { menuItemsTitles } from "@/data/menuItems";
import { cn } from "@/utils/cn";
import { X } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import FadeIn from "../animation/FadeIn";
import TextStagger from "../animation/ImageSlideIn";

export default function Menu_Old() {
  // router
  const router = useRouter();

  // current route
  const currentRoute = router.asPath.slice(1);

  // display menu
  const [displayMenu, setDisplayMenu] = useState(false);
  const menuControls = useAnimationControls();

  useEffect(() => {
    displayMenu
      ? menuControls.start({ y: "0" })
      : menuControls.start({ y: "100vh" });
  }, [displayMenu]);

  return (
    <div className="z-50">
      <div className="mb-24 md:mb-32 flex items-center justify-between gap-16">
        <Link href="/" className="select-none rounded-sm">
          <TextStagger>
            <h1 className="text-xl uppercase font-semibold transition-transform duration-500 hover:scale-95">
              Oskar Petr
            </h1>
          </TextStagger>
        </Link>

        <TextStagger>
          <button onClick={() => setDisplayMenu(!displayMenu)} className="z-40">
            Menu
          </button>
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
        <FadeIn className="flex justify-between items-center">
          <div />

          <X
            className="text-2xl transition-all duration-500 text-black-primary cursor-pointer"
            onClick={() => setDisplayMenu(!displayMenu)}
          />
        </FadeIn>

        <div className="flex flex-col gap-2 sm:gap-10 mt-32 sm:mt-48">
          {menuItemsTitles.map((item, index) => {
            return (
              <Fragment key={item}>
                <div>
                  <Link
                    href={"/" + item.toLowerCase()}
                    onClick={() => setDisplayMenu(!displayMenu)}
                    className="group flex items-center gap-4"
                  >
                    <TextStagger
                      delay={0.1 * index}
                      className={cn(
                        "text-2xl sm:text-4xl font-medium transition-colors duration-1000",
                        currentRoute === item.toLocaleLowerCase()
                          ? "text-brown-primary"
                          : "text-neutral-300"
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
                    </TextStagger>

                    <div className="group-hover:opacity-50 text-2xl sm:text-4xl opacity-0 group-hover:translate-x-2 -translate-x-8 transition-all duration-500">
                      ➼
                    </div>
                  </Link>
                </div>

                {index !== menuItemsTitles.length - 1 && (
                  <motion.div
                    whileInView={{ opacity: 1, width: "100%" }}
                    initial={{ opacity: 0, width: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.1 * index,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="border-b border-neutral-700"
                  ></motion.div>
                )}
              </Fragment>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
