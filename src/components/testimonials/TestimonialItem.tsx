import Image from "next/image";
import ParagraphSplit from "../animation/ParagraphSplit";
import { Testimonial } from "@/types/Testimonial.types";
import { motion } from "framer-motion";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialItem({ testimonial }: Props) {
  const { language } = useTranslationStore();

  return (
    <motion.div
      className="pointer-events-none flex flex-col gap-6"
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.5, type: "spring" },
      }}
    >
      <Image
        src={testimonial.logo.url}
        alt={testimonial.logo.alt}
        height={70}
        width={70}
        placeholder="blur"
        blurDataURL={testimonial.logo.placeholder}
        className="h-6 w-fit object-cover"
      />

      <div className="flex flex-col gap-4">
        <div className="text-base font-normal sm:text-3xl">
          <ParagraphSplit
            text={`“${testimonial.content[language]}”`}
            animateWhileInView={false}
            indent={false}
          />
        </div>

        <div>
          <div>{testimonial.author}</div>
          <div className="text-sm opacity-70">
            {testimonial.authorPosition[language]}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
