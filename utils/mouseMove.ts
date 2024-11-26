import { Dispatch, MouseEvent, RefObject, SetStateAction } from "react";

export function handleMouseMove({
  event,
  setMousePosition,
  outerRef,
  innerRef,
  offset = 0,
}: {
  event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>;
  setMousePosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
  outerRef: RefObject<HTMLDivElement>;
  innerRef: RefObject<HTMLDivElement>;
  offset?: number;
}) {
  if (outerRef.current && innerRef.current) {
    const outerRect = outerRef.current.getBoundingClientRect();
    const innerRect = innerRef.current.getBoundingClientRect();

    const x = event.clientX - outerRect.left - innerRect.width / 2;
    const y = event.clientY - outerRect.top - innerRect.height / 2 - offset;

    setMousePosition({ x, y });
  }
}
