"use client";

import Image from "next/image";
import myself from "../../../public/images/myself.webp";
import Reveal from "../animation/Reveal";
import ParallaxImage from "../animation/ParallaxImage";
import { useTranslationStore } from "@/stores/useTranslationStore";
import Tooltip from "../animation/Tooltip";
import Index from "../shared/Index";

export default function MyPhoto() {
  const { translation } = useTranslationStore();

  return (
    <div className="sm:w-1/2 lg:ml-[50%] xl:w-1/4">
      <Reveal direction="up" viewportAmount={0.2}>
        <Tooltip title=". . ." icon="Eyes" zIndex={20}>
          <ParallaxImage>
            <Image
              src={myself}
              alt="Myself"
              width={500}
              height={0}
              placeholder="blur"
              className="w-full object-cover grayscale select-none"
            />
          </ParallaxImage>
        </Tooltip>
      </Reveal>

      <div className="mt-3 flex items-center justify-between text-base font-normal opacity-80">
        <div>{translation.alts.myself}</div>
        <Index index={0} />
      </div>
    </div>
  );
}
