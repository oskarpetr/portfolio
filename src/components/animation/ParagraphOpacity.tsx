import { cn } from "@/utils/cn";
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

interface Props {
  text: string;
}

export default function ParagraphOpacity({ text }: Props) {
  const textRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.75", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p ref={textRef}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={`about-text-${i}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: number[];
}

const Word = ({ word, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const firstWord = range[0] === 0;

  return (
    <span className="relative inline-block">
      <span
        className={cn(
          "pointer-events-none absolute opacity-10 select-none",
          firstWord ? "sm:ml-32" : "",
        )}
      >
        {word}&nbsp;
      </span>

      <motion.span
        style={{ opacity: useSpring(opacity) }}
        className={firstWord ? "sm:ml-32" : ""}
      >
        {word}&nbsp;
      </motion.span>
    </span>
  );
};
