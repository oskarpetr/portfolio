import { Testimonial } from "@/types/Testimonial.types";
import { PanInfo, useAnimation, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TestimonialItem from "./TestimonialItem";

interface Props {
  testimonials: Testimonial[];
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

export default function TestimonialCarousel({
  testimonials,
  currentSlide,
  setCurrentSlide,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // carousel
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const controls = useAnimation();

  // slides
  const slides = testimonials.length;
  const slidesGap = 80;

  const calculateConstraints = () => {
    if (containerRef.current) {
      const viewportWidth = containerRef.current.offsetWidth;
      const slideWidth = viewportWidth / 2;

      const left = -(slides - 1) * (slideWidth + slidesGap / 2);
      setConstraints({ left, right: 0 });
    }
  };

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
      { x: (-nextSlide * (slideWidth + slidesGap)) / 2 },
      { duration: 0.5, type: "spring" },
    );
  };

  useEffect(() => {
    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);

    return () => {
      window.removeEventListener("resize", calculateConstraints);
    };
  }, []);

  return (
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
  );
}
