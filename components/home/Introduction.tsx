import Image from "next/image";
import TextSlideIn from "../animation/TextSlideIn";
import ImageSlideIn from "../animation/ImageSlideIn";
import Container from "../general/Container";
import { RefObject, useEffect, useRef, useState } from "react";
import SlideContainer from "../general/SlideContrainer";
import { handleMouseMove } from "@/utils/mouseMove";
import CircleLink from "../general/CircleLink";
import MoveObject from "../animation/MoveObject";
import SectionBubble from "../general/SectionBubble";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/constants/animation";
import FadeIn from "../animation/FadeIn";

interface Props {
  nextRef: RefObject<any>;
}

export default function Introduction({ nextRef }: Props) {
  // mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // refs
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  // hello text
  const helloTexts = ["Hello", "Ahoj", "Salut", "哈喽"];
  const [hello, setHello] = useState(helloTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHello((prev) => {
        const index = helloTexts.indexOf(prev);
        return index === helloTexts.length - 1
          ? helloTexts[0]
          : helloTexts[index + 1];
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <SlideContainer nextRef={nextRef}>
      <div className="absolute pointer-events-none" ref={circleRef}>
        <MoveObject mousePosition={mousePosition} invert={false}>
          <CircleLink text={hello} invert={false} />
        </MoveObject>

        <div className="w-36 h-36"></div>
      </div>

      <div
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
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        <Container className="sticky top-0 flex flex-col lg:justify-between w-screen min-h-screen bg-white-primary">
          <div className="mt-24">
            <div className="hidden sm:block">
              <div className="flex items-center">
                <div className="w-full flex items-center gap-2">
                  <TextSlideIn
                    className="text-[4.5vw] font-semibold !tracking-tight"
                    text="Meet a front"
                  />
                  <div className="relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 200 }}
                      transition={{
                        ease: BEZIER_EASING,
                        duration: 1.5,
                        delay: 0.8,
                      }}
                      className="h-[0.7vw] bg-black-primary mt-2 rounded-sm"
                    ></motion.div>
                    {/* <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 30 }}
                      transition={{
                        ease: BEZIER_EASING,
                        duration: 1.5,
                        delay: 1.2,
                      }}
                      className="h-[0.5vw] bg-black-primary mt-2 rounded-s-full rounded-e-sm rotate-[135deg] absolute -right-[3px] top-3"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 30 }}
                      transition={{
                        ease: BEZIER_EASING,
                        duration: 1.5,
                        delay: 1.2,
                      }}
                      className="h-[0.5vw] bg-black-primary mt-2 rounded-s-sm rounded-e-full rotate-45 absolute -right-[3px] bottom-3"
                    ></motion.div> */}
                  </div>
                  <TextSlideIn
                    className="text-[4.5vw] font-semibold !tracking-tight"
                    text="end"
                  />
                </div>

                {/* <FadeIn delay={0.75}>
                  <Image
                    src="https://res.cloudinary.com/dod9tmblh/image/upload/v1724585273/Circle_kwhg79.png"
                    alt="Circle"
                    width={200}
                    height={0}
                    className="animate-spin-slow w-[9vw] md:w-[9vw] xl:w-[6vw]"
                  />
                </FadeIn> */}
              </div>

              <div className="text-right flex justify-end">
                <TextSlideIn
                  delay={0.25}
                  className="text-4xl sm:text-[4.5vw] font-semibold !tracking-tight"
                  text="developer, designer, and writer"
                />
              </div>
            </div>
          </div>

          <div className="block sm:hidden">
            <TextSlideIn
              className="text-4xl font-semibold !tracking-tight"
              text="Meet a front—end / developer, designer, and writer"
            />
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-24 lg:items-end sm:mt-16 lg:mt-0">
            <ImageSlideIn delay={0.25} className="mix-blend-luminosity">
              <Image
                src="https://res.cloudinary.com/dod9tmblh/image/upload/v1724582440/Me_ddagtw.jpg"
                alt="Oskar Petr"
                width={2000}
                height={0}
                className="transition-transform duration-500 mt-8 sm:mt-0 sm:h-[40vh] w-fit"
              />
            </ImageSlideIn>

            <div className="flex flex-col gap-8 w-full lg:w-[700px] mb-12">
              {/* <TextSlideIn
              delay={0.75}
              text="About me"
              className="font-bold body-text uppercase text-xl"
            /> */}
              <SectionBubble title="About me" delay={0.5} disablePadding />

              <TextSlideIn
                delay={0.5}
                stagger={0.01}
                className="text-black-primary body-text text-2xl opacity-80"
                text="I am a cybernetics student who loves to pursue web development, design, and writing. I help individuals and businesses make a memorable online presence."
              />
            </div>
          </div>
        </Container>
      </div>
    </SlideContainer>
  );
}
