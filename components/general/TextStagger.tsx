import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: React.ComponentProps<"div">["className"];
  whileInView?: boolean;
}

export default function TextStagger({
  children,
  delay = 0,
  className,
  whileInView,
}: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<null | number>();

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div ref={elementRef} className="invisible absolute">
        {children}
      </div>
      {height && (
        <motion.div
          whileInView={whileInView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: height }}
          animate={whileInView ? {} : { opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
