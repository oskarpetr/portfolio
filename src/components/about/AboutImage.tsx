"use client";

import Image from "next/image";
import myself from "../../../public/images/myself.webp";
import Reveal from "../animation/Reveal";
import ParallaxImage from "../animation/ParallaxImage";
import { useTranslationStore } from "@/translation/useTranslationStore";
import Tooltip from "../animation/Tooltip";

export default function AboutImage() {
  const { translation } = useTranslationStore();

  return (
    <div className="w-fit sm:ml-[50%]">
      <Reveal direction="up" viewportAmount={0.5}>
        <Tooltip title={translation.alts.myself} icon="Eyes" zIndex={20}>
          <ParallaxImage>
            <div className="h-[400px]">
              <Image
                src={myself}
                alt="Myself"
                width={400}
                height={0}
                loading="lazy"
                placeholder="blur"
                className="object-cover grayscale"
              />
            </div>
          </ParallaxImage>
        </Tooltip>
      </Reveal>
    </div>
  );
}
