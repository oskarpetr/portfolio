import { cn } from "@/utils/cn";
import FadeIn from "../animation/FadeIn";
import TextSlideIn from "../animation/TextSlideIn";
import Icon from "./Icon";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/constants/animation";

interface Props {
  title?: string;
  type?: "white" | "black";
  icon?: string;
  iconDirection?: "left" | "right";
  button?: boolean;
  disablePadding?: boolean;
  delay?: number;
}

export default function SectionBubble({
  title,
  type = "black",
  button,
  icon,
  iconDirection = "right",
  disablePadding = false,
  delay = 0,
}: Props) {
  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover="whileHover"
        initial="initial"
        animate="animate"
        className={cn(
          "px-8 py-2.5 w-fit rounded-full border overflow-hidden relative group",
          type === "black" ? "border-black-primary" : "border-white-primary",
          disablePadding ? "mb-0" : "mb-16"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2",
            iconDirection === "left" ? "flex-row" : "flex-row-reverse"
          )}
        >
          {icon && (
            <FadeIn delay={delay}>
              <Icon
                name={icon}
                size={20}
                weight="regular"
                className={cn(
                  "*:transition-colors *:duration-500 z-10",
                  type === "black"
                    ? "*:text-black-primary"
                    : "*:text-white-primary",
                  button
                    ? type === "black"
                      ? "group-hover:*:text-white-primary"
                      : "group-hover:*:text-black-primary"
                    : ""
                )}
              />
            </FadeIn>
          )}

          {title && (
            <TextSlideIn
              text={title}
              delay={delay}
              className={cn(
                "text-md uppercase transition-colors duration-500 z-10 body-text",
                type === "black" ? "text-black-primary" : "text-white-primary",
                button
                  ? type === "black"
                    ? "group-hover:text-white-primary"
                    : "group-hover:text-black-primary"
                  : ""
              )}
            />
          )}
        </div>

        <motion.div
          variants={{
            initial: { height: "0" },
            whileHover: {
              height: button ? "100%" : "0",
            },
          }}
          transition={{ duration: 0.5, ease: BEZIER_EASING }}
          className={cn(
            "absolute bottom-0 left-0 w-full z-0",
            type === "black" ? "bg-black-primary" : "bg-white-primary"
          )}
        ></motion.div>
      </motion.div>
    </FadeIn>
  );
}
