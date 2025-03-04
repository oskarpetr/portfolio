"use client";

import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import FadeIn from "../animation/FadeIn";
import Reveal from "../animation/Reveal";

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100vh" }}
      transition={{
        delay: 1,
        duration: 1.5,
        ease: BEZIER_EASING,
      }}
      className="fixed top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-green-300"
    >
      <Reveal direction="up" delay={0.1}>
        <Image src={logo} alt="Logo" width={60} height={60} />
      </Reveal>
      <FadeIn delay={0.2}>
        <div className="text-2xl">Oskar Petr</div>
      </FadeIn>
    </motion.div>
  );
}
