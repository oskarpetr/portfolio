import { domAnimation, LazyMotion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function LazyWrapper({ children }: PropsWithChildren) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
