import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: React.ComponentProps<"div">["className"];
}

export default function Container({ children, className }: Props) {
  return <div className={cn("p-8 md:p-12", className)}>{children}</div>;
}
