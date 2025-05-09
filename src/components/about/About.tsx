"use client";

import { ForwardedRef, forwardRef } from "react";
import { type About } from "@/types/About.types";
import AboutText from "./AboutText";
import MyPhoto from "./MyPhoto";

interface Props {
  about: About;
}

const About = forwardRef<HTMLDivElement, Props>(
  ({ about }: Props, ref: ForwardedRef<HTMLDivElement | null>) => {
    return (
      <div
        ref={ref}
        id="about"
        className="relative -left-6 z-20 flex w-screen flex-col gap-16 bg-white p-6 pt-12 sm:gap-24"
      >
        <AboutText about={about} />
        <MyPhoto />
      </div>
    );
  },
);

About.displayName = "About";

export default About;
