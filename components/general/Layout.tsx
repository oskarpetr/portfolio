import { ReactNode, useEffect } from "react";
import Head from "next/head";
import { Variants, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

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
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const slide = {
    initial: {
      top: "100vh",
      background: "#363636",
    },
    enter: {
      top: "100vh",
      background: "#363636",
    },
    exit: {
      top: "0",
      background: "#121212",
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const perspective = {
    initial: {
      // y: 0,
      // scale: 1,
      // opacity: 1,
    },
    enter: {
      // y: 0,
      // scale: 1,
      // opacity: 1,
    },
    exit: {
      // y: -100,
      // scale: 1,
      // opacity: 0.5,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div className="transition-all duration-500 text-white min-h-screen px-10 py-10 md:px-16 md:py-10 lg:px-32 lg:py-16">
      <Head>
        <title>{customTitle}</title>
      </Head>

      <motion.div
        {...animate(slide)}
        className="z-[9999] inset-0 fixed bg-black-primary border border-neutral-800 bg-[radial-gradient(#281D0E_1.5px,transparent_1.5px)] [background-size:24px_24px]"
      ></motion.div>

      <motion.div {...animate(perspective)}>{children}</motion.div>

      <motion.div
        {...animate(opacity)}
        className="absolute -z-50 inset-0 h-full w-full bg-[radial-gradient(#281D0E_1.5px,transparent_1.5px)] [background-size:24px_24px]"
      ></motion.div>
    </div>
  );
}
