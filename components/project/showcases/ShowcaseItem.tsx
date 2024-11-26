import { IShowcase } from "@/types/Project.types";
import { handleMouseMove } from "@/utils/mouseMove";
import Image from "next/image";
import { useRef, useState } from "react";
import MoveObject from "../../animation/MoveObject";
import CircleLink from "@/components/general/CircleLink";

interface Props {
  showcase: IShowcase;
}

export default function ShowcaseItem({ showcase }: Props) {
  // mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // refs
  const showcaseRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div className="absolute top-0 pointer-events-none" ref={circleRef}>
        <MoveObject mousePosition={mousePosition}>
          <CircleLink texts={showcase.alt.split(" ")} />
        </MoveObject>

        <div className="w-36 h-36"></div>
      </div>

      <div ref={showcaseRef} className="h-full w-full">
        <Image
          src={showcase.src}
          alt={showcase.alt}
          width={2000}
          height={0}
          className="w-full h-full object-cover"
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          onMouseMove={(event) =>
            handleMouseMove({
              event,
              setMousePosition: setMousePosition,
              outerRef: showcaseRef,
              innerRef: circleRef,
              offset: -40,
            })
          }
        />
      </div>
    </div>
  );
}
