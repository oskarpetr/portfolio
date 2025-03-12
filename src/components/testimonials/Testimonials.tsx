"use client";

import { motion, PanInfo, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TestimonialItem from "./TestimonialItem";
import SectionTitle from "../shared/SectionTitle";
import { Testimonial } from "@/types/Testimonial.types";

export default function Testimonials() {
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();

  const slides = testimonials.length;
  const slidesGap = 80;

  const calculateConstraints = () => {
    if (containerRef.current) {
      const viewportWidth = containerRef.current.offsetWidth;
      const slideWidth = viewportWidth / 2;

      setConstraints({
        left: -(
          viewportWidth * 0.25 +
          (slides - 1) * slidesGap +
          (slides - 1) * slideWidth -
          viewportWidth / 4 -
          (slides - 1) * (slidesGap / 2)
        ),
        right: 0,
      });
    }
  };

  useEffect(() => {
    calculateConstraints();

    window.addEventListener("resize", calculateConstraints);

    return () => {
      window.removeEventListener("resize", calculateConstraints);
    };
  }, []);

  const handleDragEnd = (_event: PointerEvent, info: PanInfo) => {
    const velocity = info.velocity.x;
    const slideWidth = containerRef.current?.offsetWidth || 1;
    const threshold = 1000;

    let nextSlide = currentSlide;

    if (Math.abs(velocity) > threshold) {
      const direction = velocity > 0 ? -1 : 1;
      nextSlide = Math.max(0, Math.min(slides - 1, currentSlide + direction));
    }

    setCurrentSlide(nextSlide);
    controls.start(
      { x: -nextSlide * (slideWidth / 2) + -nextSlide * (slidesGap / 2) },
      { duration: 0.5, type: "spring" },
    );
  };

  return (
    <div>
      <SectionTitle title="Testimonials" />

      <div className="relative -right-10 -left-10 w-screen cursor-grab overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex cursor-grab flex-nowrap gap-20"
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.05}
          animate={controls}
          onDragEnd={handleDragEnd}
          style={{ touchAction: "none" }}
        >
          <div className="h-full w-[calc((100%-5rem)*0.25-2.5rem)] flex-shrink-0"></div>

          {testimonials.map((testimonial) => (
            <div
              key={`testimonial-${testimonial.id}`}
              className="w-[calc((100%-5rem)*0.5)] flex-shrink-0"
            >
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}

          {/* <div
            style={{
              width: constraints.left * -1,
              height: 100,
              position: "absolute",
              backgroundColor: "blue",
            }}
          ></div> */}
        </motion.div>
      </div>

      <div className="mx-auto mt-24 w-1/2 text-sm tabular-nums">
        [ {String(currentSlide + 1).padStart(2, "0")} /{" "}
        {String(slides).padStart(2, "0")} ]
      </div>
    </div>
  );
}
