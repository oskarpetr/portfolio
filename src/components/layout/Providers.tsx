// @ts-expect-error: Lenis does not have TS definitions
import Lenis from "lenis/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return <Lenis root>{children}</Lenis>;
}
