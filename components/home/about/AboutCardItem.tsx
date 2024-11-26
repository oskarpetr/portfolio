import { cn } from "@/utils/cn";
import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import TextSlideIn from "../../animation/TextSlideIn";
import MoveObject from "../../animation/MoveObject";
import CircleLink from "../../general/CircleLink";
import { handleMouseMove } from "@/utils/mouseMove";
import Icon from "@/components/general/Icon";
import FadeIn from "@/components/animation/FadeIn";

interface Props {
  card: { title: string; text: string };
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  linkText: string;
  index: number;
}

export default function AboutCardItem({
  card,
  active,
  setActive,
  linkText,
  index,
}: Props) {
  // mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // refs
  const cardRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative transition-[width] duration-1000",
        active === card.title ? "w-full" : "w-40"
      )}
    >
      {active === card.title && (
        <div className="absolute top-0 pointer-events-none" ref={circleRef}>
          <MoveObject mousePosition={mousePosition}>
            <CircleLink text={linkText} icon="ArrowUpRight" />
          </MoveObject>

          <div className="w-36 h-36"></div>
        </div>
      )}

      <div
        ref={cardRef}
        className={cn(
          "border-r-[0.5px] border-white-primary cursor-pointer h-full transition-all duration-1000 flex",
          active === card.title ? "" : "justify-center"
        )}
        onClick={() => setActive(card.title)}
        onMouseMove={(event) => {
          handleMouseMove({
            event,
            setMousePosition,
            outerRef: cardRef,
            innerRef: circleRef,
            offset: -40,
          });
        }}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        <AnimatePresence mode="wait">
          {active !== card.title && (
            <FadeIn className="flex gap-6 flex-col justify-end items-center py-12 w-full h-full">
              <div className="-rotate-90 w-12">
                <TextSlideIn
                  text={card.title}
                  className="text-white-primary text-3xl font-medium"
                />
              </div>

              <Icon
                name="Plus"
                className="*:text-white-primary opacity-50"
                weight="regular"
              />
            </FadeIn>
          )}
        </AnimatePresence>

        {active === card.title && (
          <div className="flex justify-between px-24 py-16">
            <div className="w-3/5 flex flex-col gap-4">
              <TextSlideIn
                text={card.title}
                className="text-white-primary text-5xl font-medium"
              />

              <TextSlideIn
                text={card.text}
                stagger={0.01}
                className="text-white-primary body-text text-xl font-medium opacity-80"
              />
            </div>

            <TextSlideIn
              text={`/ 0${index + 1}`}
              stagger={0.01}
              className="text-white-primary text-body font-normal"
            />
          </div>
        )}
      </div>
    </div>
  );
}
