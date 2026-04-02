import TextStagger from "../animation/TextStagger";
import logo from "../../../public/images/logo.webp";
import Image from "next/image";
import PageLink from "./PageLink";
import { cn } from "@/utils/cn";

interface Props {
  color?: "black" | "white";
}

export default function Logo({ color = "black" }: Props) {
  return (
    <div className="w-fit">
      <TextStagger>
        <PageLink href="/">
          <div className="flex items-center gap-1">
            <div
              className={cn(
                "text-2xl font-semibold tracking-tighter",
                color === "white" ? "text-white" : "",
              )}
            >
              Oskar Petr
            </div>

            <Image
              src={logo}
              alt="Logo"
              width={20}
              height={20}
              priority
              className={cn("mt-0", color === "white" ? "invert" : "")}
            />
          </div>
        </PageLink>
      </TextStagger>
    </div>
  );
}
