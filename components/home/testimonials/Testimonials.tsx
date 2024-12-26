import { testimonialsQuery, useCMS } from "@/utils/fetchers";
import Container from "../../general/Container";
import { ITestimonial } from "@/types/Testimonial.types";
import { useEffect, useState } from "react";
import TextSlideIn from "../../animation/TextSlideIn";
import Image from "next/image";
import Icon from "../../general/Icon";
import { AnimatePresence } from "framer-motion";
import ImageSlideIn from "../../animation/ImageSlideIn";
import TestimonialItem from "./TestimonialItem";

export default function Testimonials() {
  // testimonials state
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // testimonials
  const fetchTestimonials = useCMS<ITestimonial>({
    query: testimonialsQuery(),
  });

  // current testimonial
  const testimonial = fetchTestimonials.data[active];

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }
  }, [active]);

  return (
    testimonial && (
      <Container className="bg-white-primary h-screen flex flex-col justify-between">
        <div>
          <AnimatePresence mode="wait">
            {!isAnimating && <TestimonialItem testimonial={testimonial} />}
          </AnimatePresence>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-12 items-end">
            <div className="w-[17vw]">
              <AnimatePresence mode="wait">
                {!isAnimating && (
                  <ImageSlideIn className="mix-blend-luminosity" exitAnimation>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={400}
                      height={400}
                      className="w-[17vw] h-[17vw] object-cover object-top"
                    />
                  </ImageSlideIn>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              {!isAnimating && (
                <div className="flex flex-col sticky bottom-12">
                  <TextSlideIn
                    text={testimonial.author}
                    className="text-3xl"
                    exitAnimation
                  />

                  <TextSlideIn
                    text={testimonial.description}
                    className="text-lg body-text font-medium opacity-80"
                    exitAnimation
                  />
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-8 sticky bottom-12">
            <button
              className="border border-black-primary rounded-full p-4"
              onClick={() => {
                setActive((prev) =>
                  prev === 0 ? fetchTestimonials.data.length - 1 : prev - 1
                );
                setIsAnimating(true);
              }}
            >
              <Icon name="CaretLeft" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-4 flex justify-center">
                <AnimatePresence mode="wait">
                  {!isAnimating && (
                    <TextSlideIn
                      text={(active + 1).toString()}
                      className="body-text"
                      exitAnimation
                    />
                  )}
                </AnimatePresence>
              </div>

              <div className="h-[1px] w-28 bg-black-primary"></div>

              <TextSlideIn
                text={fetchTestimonials.data.length.toString()}
                className="body-text w-4 flex justify-center"
              />
            </div>

            <button
              className="border border-black-primary rounded-full p-4"
              onClick={() => {
                setActive((prev) =>
                  prev === fetchTestimonials.data.length - 1 ? 0 : prev + 1
                );
                setIsAnimating(true);
              }}
            >
              <Icon name="CaretRight" />
            </button>
          </div>
        </div>
      </Container>
    )
  );
}
