import { Testimonial } from "@/types/Testimonial.types";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import TestimonialControls from "./TestimonialControls";
import TestimonialItem from "./TestimonialItem";
import "swiper/css";

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const breakpoints: SwiperOptions["breakpoints"] = {
    0: {
      slidesPerView: 1,
      slidesOffsetAfter: 40,
      slidesOffsetBefore: 40,
    },
    1024: {
      slidesPerView: 2,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
    },
  };

  return (
    <Swiper
      spaceBetween={100}
      className="relative -left-10 mx-10 w-screen"
      grabCursor
      centeredSlides
      onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      breakpoints={breakpoints}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide
          key={`testimonial-${testimonial.id}`}
          className="w-full lg:w-[calc((100%-5rem)/2)]"
        >
          <div className="w-[calc(100%-5rem)] lg:w-full">
            <TestimonialItem testimonial={testimonial} />
          </div>
        </SwiperSlide>
      ))}

      <TestimonialControls
        currentSlide={currentSlide}
        testimonialsLength={testimonials.length}
      />
    </Swiper>
  );
}
