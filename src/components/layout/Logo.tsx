import TextStagger from "../animation/TextStagger";
import logo from "../../../public/images/logo.webp";
import Image from "next/image";
import PageLink from "./PageLink";

interface Props {
  color?: "black" | "white";
}

export default function Logo({ color = "black" }: Props) {
  return (
    <div className="w-fit">
      <TextStagger>
        <PageLink href="/">
          <div className="flex items-center gap-1">
            <Image
              src={logo}
              alt="Logo"
              width={20}
              height={20}
              priority
              placeholder="blur"
              className={color === "white" ? "invert" : ""}
            />
            <div className={color === "white" ? "text-white" : ""}>
              Oskar Petr
            </div>
          </div>
        </PageLink>
      </TextStagger>
    </div>
  );
}
