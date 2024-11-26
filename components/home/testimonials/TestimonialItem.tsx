import { ITestimonial } from "@/types/Testimonial.types";
import { Fragment, useRef, useState } from "react";
import TextSlideIn from "../../animation/TextSlideIn";
import MoveObject from "../../animation/MoveObject";
import CircleLink from "../../general/CircleLink";
import { handleMouseMove } from "@/utils/mouseMove";
import { AnimatePresence, motion } from "framer-motion";
import { BEZIER_EASING } from "@/constants/animation";
import Icon from "../../general/Icon";
import SectionTitle from "@/components/general/SectionTitle";

interface Props {
  testimonial: ITestimonial;
}

export default function TestimonialItem({ testimonial }: Props) {
  // mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // modal
  const [modalOpen, setModalOpen] = useState(false);

  // refs
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  return (
    <Fragment>
      <div className="absolute pointer-events-none" ref={circleRef}>
        <MoveObject mousePosition={mousePosition} invert={false}>
          <CircleLink text="View" icon="ArrowRight" invert={false} />
        </MoveObject>

        <div className="w-36 h-36"></div>
      </div>

      <div className="flex justify-between mt-32 gap-60">
        <div
          className="cursor-pointer"
          ref={aboutImageRef}
          onMouseMove={(event) =>
            handleMouseMove({
              event,
              setMousePosition,
              outerRef: aboutImageRef,
              innerRef: circleRef,
              offset: -40,
            })
          }
          onClick={() => setModalOpen(true)}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          <TextSlideIn
            text={`“${testimonial.quoteText}”`}
            className="text-[2.5vw]"
            stagger={0.01}
            exitAnimation
          />
        </div>

        <SectionTitle title="Testimonials" />
      </div>

      <AnimatePresence mode="wait">
        {modalOpen && (
          <Fragment>
            <motion.div
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 z-10 bg-black bg-opacity-70 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: BEZIER_EASING, duration: 0.5 }}
            ></motion.div>

            <div className="overflow-hidden fixed inset-0 z-20 w-screen h-screen pointer-events-none flex items-center justify-center">
              <motion.div
                className="pointer-events-auto bg-white-primary rounded-2xl px-12 py-10 md:px-20 md:py-16 m-8 max-h-[80%] md:m-0 md:w-3/4 xl:w-1/2 md:h-fit flex flex-col gap-6"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "100%" }}
                transition={{ ease: BEZIER_EASING, duration: 0.5 }}
              >
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2">
                  <div className="text-2xl md:text-4xl">
                    {testimonial.author}
                  </div>
                  <button onClick={() => setModalOpen(false)}>
                    <Icon name="X" size={40} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {testimonial.quotes.map((quote, index) => (
                    <div
                      key={`quote_${index}`}
                      className="body-text text-lg xl:text-xl opacity-80"
                    >
                      {index === 0 ? "“" : ""}
                      {quote}
                      {index === testimonial.quotes.length - 1 ? "”" : ""}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <div className="w-6 h-6 bg-black-primary rounded-full"></div>
                  <div className="body-text text-xl font-semibold">
                    {testimonial.description}
                  </div>
                </div>
              </motion.div>
            </div>
          </Fragment>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
