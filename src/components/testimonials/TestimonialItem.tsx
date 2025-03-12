import Image from "next/image";
import ParagraphSplit from "../animation/ParagraphSplit";
import { Testimonial } from "@/types/Testimonial.types";
import { motion } from "framer-motion";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialItem({ testimonial }: Props) {
  return (
    <motion.div
      className="pointer-events-none flex flex-col gap-12"
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.5, type: "spring" },
      }}
    >
      <Image
        src={testimonial.logo}
        alt={testimonial.author}
        height={70}
        width={70}
        className="h-8 w-fit object-cover"
      />

      <div className="flex flex-col gap-4">
        <div className="text-2xl font-normal sm:text-3xl">
          <ParagraphSplit
            text={`“${testimonial.content}”`}
            animateWhileInView={false}
            indent={false}
          />
        </div>

        <div>
          <div>{testimonial.author}</div>
          <div className="text-sm opacity-70">{testimonial.authorPosition}</div>
        </div>
      </div>
    </motion.div>
  );
}
