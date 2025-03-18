"use client";

import SectionTitle from "../shared/SectionTitle";
import { Testimonial } from "@/types/Testimonial.types";
import TestimonialCarousel from "./TestimonialCarousel";
import { useTranslationStore } from "@/translation/useTranslationStore";
import { useState } from "react";

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: Props) {
  const { translation } = useTranslationStore();

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex flex-col gap-24">
      <div className="mx-auto w-1/2">
        <SectionTitle
          title={translation.sectionTitles.testimonials}
          number={testimonials.length}
          enableMargin={false}
        />
      </div>

      <TestimonialCarousel
        testimonials={testimonials}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />

      <div className="serif mx-auto w-1/2 text-xl">
        {String(currentSlide + 1).padStart(2, "0")} /{" "}
        {String(testimonials.length).padStart(2, "0")}
      </div>
    </div>
  );
}
