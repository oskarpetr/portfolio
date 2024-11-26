import Link from "next/link";
import { useRef, useState } from "react";
import TextSlideIn from "../../animation/TextSlideIn";
import { handleMouseMove } from "@/utils/mouseMove";
import MoveObject from "../../animation/MoveObject";
import CircleLink from "../../general/CircleLink";

interface Props {
  title: string;
  text: string;
  linkText: string;
  link: string;
  order: number;
  delay?: number;
}

export default function AboutParagraph({
  title,
  text,
  linkText,
  link,
  order,
  delay = 0,
}: Props) {
  // mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // refs
  const paragraphRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <Link href={link} target="_blank">
        <div
          ref={paragraphRef}
          className="flex flex-col gap-3 cursor-pointer relative group"
          onMouseMove={(event) => {
            handleMouseMove({
              event,
              setMousePosition,
              outerRef: paragraphRef,
              innerRef: circleRef,
              offset: -40,
            });
          }}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          <div className="flex gap-2">
            <TextSlideIn
              text={title}
              delay={0.3 + delay}
              className="text-white-primary text-xl font-normal"
            />
            <TextSlideIn
              text={` / 0${order}`}
              delay={0.2 + delay}
              className="text-white-primary opacity-50 text-sm"
            />
          </div>

          <TextSlideIn
            text={text}
            delay={0.1 + delay}
            stagger={0.01}
            className="text-white-primary body-text opacity-70"
          />
        </div>
      </Link>

      <div className="absolute top-0 pointer-events-none" ref={circleRef}>
        <MoveObject mousePosition={mousePosition}>
          <CircleLink text={linkText} />
        </MoveObject>

        <div className="w-36 h-36"></div>
      </div>
    </div>
  );
}
