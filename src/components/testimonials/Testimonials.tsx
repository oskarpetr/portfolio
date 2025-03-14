"use client";

import SectionTitle from "../shared/SectionTitle";
import { Testimonial } from "@/types/Testimonial.types";
import TestimonialCarousel from "./TestimonialCarousel";
import { useTranslationStore } from "@/translation/useTranslationStore";
import { useState } from "react";

export default function Testimonials() {
  const { translation } = useTranslationStore();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Sunil Sandhu",
      authorPosition: "Founder and CEO, In Plain English",
      content:
        "Oskar has been instrumental in driving the success of our publication. In addition to his expertise in JavaScript, Oskar has produced comprehensive articles on web scraping and proxies for various clients. (...) His work has garnered over 150,000 views, showcasing his remarkable ability to connect with readers.",
      logo: "/images/ipe2.svg",
    },
    {
      id: 2,
      author: "Renata Mirková",
      authorPosition: "Founder of renatamirkova.com",
      content:
        "Oskar is a talented developer with a keen eye for detail. He has helped me with various projects, including the development of a custom WordPress theme. Oskar is a pleasure to work with and I would recommend him to anyone looking for a skilled developer.",
      logo: "/images/renata5.svg",
    },
  ];
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
