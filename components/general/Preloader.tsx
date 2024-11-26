import { BEZIER_EASING } from "@/constants/animation";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TextSlideIn from "../animation/TextSlideIn";
import { cn } from "@/utils/cn";

interface Props {
  setIsPreloaded: Dispatch<SetStateAction<boolean>>;
}

export default function Preloader({ setIsPreloaded }: Props) {
  const [sessionPreloaded, setSessionPreloaded] = useState<string | null>();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // setSessionPreloaded(sessionStorage.getItem("isPreloaded"));

    const timeout = setTimeout(() => {
      setIsPreloaded(true);
      // sessionStorage.setItem("isPreloaded", "true");
    }, 2000);

    let percentage: NodeJS.Timeout;
    setTimeout(() => {
      percentage = setInterval(() => {
        setPercentage((prev) => (prev < 100 ? prev + 1 : 100));
      }, 20);
    }, 200);

    return () => {
      clearTimeout(timeout);
      clearInterval(percentage);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: "-100vh" }}
      transition={{
        duration: 1,
        ease: BEZIER_EASING,
      }}
      className="relative z-10"
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-screen h-screen flex flex-col gap-4 items-center justify-center bg-black-primary"
          // sessionPreloaded === "true" ? "bg-white-primary" : "bg-black-primary"
        )}
      >
        <div className="relative w-full h-full flex gap-3 justify-center items-center">
          <TextSlideIn
            text="Oskar Petr"
            className="text-white-primary text-4xl font-medium"
          />
          <TextSlideIn
            text="©"
            className="text-white-primary text-4xl body-text font-normal uppercase"
          />

          {/* <TextSlideIn
            text={percentage + "%"}
            className="text-xl text-right text-white-primary opacity-50 uppercase font-semibold"
          /> */}
        </div>
      </div>
    </motion.div>
  );
}
