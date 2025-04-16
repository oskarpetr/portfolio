import { useTranslationStore } from "@/translation/useTranslationStore";
import { AnimatePresence } from "framer-motion";
import { useSwiper } from "swiper/react";
import ParagraphSplit from "../animation/ParagraphSplit";

interface Props {
  currentSlide: number;
  testimonialsLength: number;
}

export default function TestimonialControls({
  currentSlide,
  testimonialsLength,
}: Props) {
  const { translation } = useTranslationStore();

  const swiper = useSwiper();

  const currentSlideIndex = (
    <AnimatePresence>
      {Array(testimonialsLength)
        .fill("")
        .map(
          (_, index) =>
            currentSlide === index && (
              <span className="absolute" key={index}>
                <ParagraphSplit
                  key={index}
                  text={(index + 1).toString()}
                  includeExitAnimation
                  indent={false}
                />
              </span>
            ),
        )}
    </AnimatePresence>
  );

  return (
    <div className="mx-10 mt-20">
      <div className="flex items-center justify-between lg:mx-auto lg:w-1/2">
        <div className="text-base font-normal tabular-nums">
          ( 0{currentSlideIndex} &nbsp;&nbsp; —{" "}
          {String(testimonialsLength).padStart(2, "0")} )
        </div>

        <div className="flex gap-6 text-base font-normal">
          <button
            onClick={() => swiper.slidePrev()}
            disabled={currentSlide === 0}
            className="cursor-pointer border-b border-neutral-300 transition-opacity disabled:cursor-default disabled:opacity-50"
          >
            {translation.navigation.previous}
          </button>

          <button
            onClick={() => swiper.slideNext()}
            disabled={currentSlide === testimonialsLength - 1}
            className="cursor-pointer border-b border-neutral-300 transition-opacity disabled:cursor-default disabled:opacity-50"
          >
            {translation.navigation.next}
          </button>
        </div>
      </div>
    </div>
  );
}
