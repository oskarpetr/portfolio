"use client";

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import { type About } from "@/types/About.types";

interface Props {
  about: About;
}

export default function About({ about }: Props) {
  // const aboutRef = useRef<HTMLDivElement | null>(null);

  // const { scrollYProgress } = useScroll({
  //   target: aboutRef,
  //   offset: ["center end", "start start"],
  // });

  // const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.5]);
  // const height = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);
  // const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <div className="flex flex-col gap-32">
      <AboutText about={about} />
      <AboutImage />
    </div>
  );
}
{
  /* <motion.div
        className="pointer-events-none fixed top-0 left-0 z-10 h-screen w-screen bg-black"
        style={{ opacity, height }}
      ></motion.div> */
}
