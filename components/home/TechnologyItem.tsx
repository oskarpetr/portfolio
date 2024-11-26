import { motion, useAnimationControls } from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";
import { cn } from "@/utils/cn";
import technologies from "@/data/technologies";
import { BEZIER_EASING } from "@/constants/animation";
import Technology from "@/types/Technology.types";
import TextSlideIn from "../animation/TextSlideIn";
import FadeIn from "../animation/FadeIn";
import Separator from "../general/Separator";
import Icon from "../general/Icon";

interface Props {
  technology: Technology;
  index: number;
  active: null | string;
  setActive: Dispatch<SetStateAction<null | string>>;
}

export default function TechnologyItem({
  technology,
  index,
  active,
  setActive,
}: Props) {
  const contentControls = useAnimationControls();

  useEffect(() => {
    active === technology.id
      ? contentControls.start({ height: "100%" })
      : contentControls.start({ height: "0" });
  }, [active]);

  return (
    <motion.div
      onClick={() => setActive(active === technology.id ? null : technology.id)}
      className="flex flex-col cursor-pointer group"
    >
      <Separator className="bg-black-primary" />

      <motion.div
        className={cn(
          "flex items-center justify-between p-8 overflow-hidden relative transition-colors duration-500",
          active === technology.id ? "bg-light-brown" : "bg-transparent"
        )}
        whileHover="whileHover"
        initial="initial"
      >
        <motion.div
          variants={{
            whileHover: {
              height: "100%",
            },
            initial: {
              height: "0",
            },
          }}
          transition={{ duration: 0.5, ease: BEZIER_EASING }}
          className="absolute bottom-0 left-0 w-full bg-light-brown"
        ></motion.div>

        <div className="flex items-center gap-6">
          <div className="text-xl opacity-50">0{index + 1}</div>
          <TextSlideIn
            text={technology.title}
            className="text-4xl transition-colors duration-500 text-black-primary"
          />
        </div>

        <FadeIn>
          <Icon
            name="Plus"
            className={cn(
              "text-2xl transition-transform duration-500",
              active === technology.id ? "rotate-45" : "rotate-0"
            )}
          />
        </FadeIn>
      </motion.div>

      <motion.div
        animate={contentControls}
        initial={{ height: "0" }}
        className="overflow-hidden"
        transition={{
          duration: 0.5,
          ease: BEZIER_EASING,
        }}
      >
        <div className="pl-[4.7rem] pt-12 pb-24 flex gap-24">
          {technology.content.map((content, contentIndex) => (
            <div className="flex gap-4" key={content.section}>
              <TextSlideIn
                text={content.section}
                delay={contentIndex * 0.2}
                once={false}
                className="text-lg opacity-50"
              />

              <div className="flex flex-col gap-1">
                {content.technologies.map((item, technologyIndex) => (
                  <div key={technologyIndex}>
                    <TextSlideIn
                      text={item}
                      delay={contentIndex * 0.2}
                      once={false}
                      className="uppercase text-lg relative"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {index === technologies.length - 1 && (
        <Separator className="bg-black-primary" />
      )}
    </motion.div>
  );
}
