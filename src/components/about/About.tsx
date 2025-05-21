"use client";

import { ForwardedRef, forwardRef } from "react";
import { type About } from "@/types/About.types";
import MyPhoto from "./MyPhoto";
import { useTranslationStore } from "@/stores/useTranslationStore";
import ParagraphSplit from "../animation/ParagraphSplit";

interface Props {
  about: About;
}

const About = forwardRef<HTMLDivElement, Props>(
  ({ about }: Props, ref: ForwardedRef<HTMLDivElement | null>) => {
    const { language } = useTranslationStore();

    return (
      <div
        ref={ref}
        id="about"
        className="relative -left-6 z-20 flex w-screen flex-col-reverse gap-8 bg-white p-6 pt-24 lg:-mt-32 lg:flex-row lg:items-center lg:gap-0 xl:mt-0 xl:pt-24"
      >
        <div className="relative flex w-full sm:w-1/2 lg:right-12 lg:justify-end">
          <MyPhoto />
        </div>

        <div className="flex flex-col gap-8 sm:w-full lg:w-1/2">
          <div className="serif text-5xl leading-14 sm:text-7xl sm:leading-20 lg:text-5xl lg:leading-14 xl:text-7xl xl:leading-20">
            {about.title[language]}
          </div>
          <div className="font-normal sm:w-4/5 md:w-1/2 lg:w-4/5">
            <ParagraphSplit text={about.subtitle[language]} />
          </div>
        </div>

        {/* <AboutText about={about} /> */}
      </div>
    );
  },
);

About.displayName = "About";

export default About;
