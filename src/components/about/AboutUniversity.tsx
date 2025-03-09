"use client";

import Image from "next/image";
import university from "../../../public/images/university.webp";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";

export default function AboutUniversity() {
  const universityRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: universityRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "9vh"]);

  return (
    <div
      ref={universityRef}
      className="relative -right-10 -left-10 h-[60vh] w-screen overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 flex justify-end p-10 text-white mix-blend-difference">
        <SectionTitle title="University" />
      </div>

      <div className="fixed top-0 h-[100vh] w-screen">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image
            src={university}
            alt="University"
            fill
            priority
            loading="eager"
            placeholder="blur"
            className="object-cover grayscale"
          />
        </motion.div>
      </div>
    </div>
  );
}
