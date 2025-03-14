import { useAnimate, motion } from "framer-motion";
import { memo, MouseEvent, PropsWithChildren } from "react";

function HoverSlider({ children }: PropsWithChildren) {
  // slider
  const [scope, animate] = useAnimate();

  // animate slider
  const animateSlider = async (top: string, duration: number) => {
    await animate(scope.current, { top }, { duration });
  };

  const animateIn = async (e: MouseEvent<HTMLDivElement>) => {
    const bounds = (e.target as HTMLDivElement).getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    if (scope.current) {
      animateSlider(`${direction * 100}%`, 0);
      animateSlider("0%", 0.3);
    }
  };

  const animateOut = async (e: MouseEvent<HTMLDivElement>) => {
    const bounds = (e.target as HTMLDivElement).getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    if (scope.current) {
      animateSlider(`${direction * 100}%`, 0.3);
    }
  };

  return (
    <div
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      className="relative z-0 overflow-hidden"
    >
      {children}

      <motion.div
        ref={scope}
        className="absolute -top-full z-0 h-full w-full bg-black"
      ></motion.div>
    </div>
  );
}

export default memo(HoverSlider);
