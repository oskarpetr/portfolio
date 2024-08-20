import Image from "next/image";
import FadeIn from "./FadeIn";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full gap-20">
      <div className="flex flex-col gap-8">
        <FadeIn className="text-neutral-300 font-semibold text-xl md:text-2xl xl:text-3xl *:text-opacity-50">
          <span>Meet a web</span>{" "}
          <span className="text-[#a28052]">enthusiast.</span>
        </FadeIn>

        <FadeIn
          delay={1}
          className="*:text-neutral-200 text-3xl md:text-4xl xl:text-6xl flex flex-col gap-2 font-semibold"
        >
          <span>
            <span className="text-[#a28052]">Front–end</span> developer,
          </span>{" "}
          <span> writer and designer.</span>
        </FadeIn>

        <FadeIn delay={1.5} className="flex gap-6 items-center">
          <Link href={"https://medium.com/@oskarpetr"}>
            <Image
              src={"/logos/monochrome-icons/Medium Short.svg"}
              width={0}
              height={0}
              alt="Medium"
              className="h-8 w-fit opacity-50 hover:scale-105 hover:opacity-80 transition-all duration-500"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/oskarpetr/"}>
            <Image
              src={"/logos/monochrome-icons/LinkedIn.svg"}
              width={0}
              height={0}
              alt="LinkedIn"
              className="h-6 w-fit opacity-50 hover:scale-105 hover:opacity-80 transition-all duration-500"
            />
          </Link>{" "}
          <Link href={"https://github.com/oskarpetr"}>
            <Image
              src={"/logos/monochrome-icons/GitHub.svg"}
              width={0}
              height={0}
              alt="GitHub"
              className="h-6 w-fit opacity-50 hover:scale-105 hover:opacity-80 transition-all duration-500"
            />
          </Link>
        </FadeIn>
      </div>

      <FadeIn
        delay={2}
        className="hover:scale-95 transition-transform duration-500"
      >
        <Image
          src="/images/Circle.png"
          alt="Circle"
          width={100}
          height={100}
          className="transition-all duration-500 w-[70px] h-[70px] md:w-[100px] md:h-[100px] animate-spin-slow relative left-[20px] top-[20px] sm:-left-[35px] sm:-top-[35px] md:-left-[50px] md:-top-[50px] pointer-events-none select-none"
        />
        <Image
          src={"/images/Me.jpeg"}
          width={1000}
          height={1000}
          alt="LinkedIn"
          className="transition-all duration-500 w-full sm:w-52 md:w-64 xl:w-80 -mt-[70px] md:-mt-[100px] object-cover rounded-xl pointer-events-none select-none"
        />
      </FadeIn>

      {/* <div className="grid grid-cols-2 gap-8">
        {menuItems.map((item, index) => {
          return <Section key={item.title} section={item} index={index} />;
        })}
      </div> */}
    </div>
  );
}
