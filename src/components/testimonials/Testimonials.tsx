"use client";

import { Testimonial } from "@/types/Testimonial.types";
import { useTranslationStore } from "@/translation/useTranslationStore";
import SectionTitle from "../shared/SectionTitle";
import TestimonialCarousel from "./TestimonialCarousel";

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: Props) {
  const { translation } = useTranslationStore();

  return (
    <div className="flex w-full flex-col gap-12 lg:gap-20">
      <div className="w-1/2 lg:mx-auto">
        <SectionTitle
          title={translation.sectionTitles.testimonials}
          number={testimonials.length}
          enableMargin={false}
        />
      </div>

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
