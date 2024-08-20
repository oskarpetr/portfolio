import FadeIn from "./FadeIn";
import Subheading from "./Subheading";

export default function DevelopmentSection() {
  return (
    <div>
      <div className="flex flex-col gap-6 group cursor-pointer">
        <div className="flex gap-4 items-center">
          <div>
            <Subheading title="Development" />
            <div className="h-[2px] bg-neutral-500 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
          </div>

          <p className="group-hover:opacity-50 text-2xl opacity-0 group-hover:translate-x-2 -translate-x-8 transition-all duration-500">
            ➼
          </p>
        </div>
        <FadeIn
          delay={0.5}
          className="text-white-primary opacity-50 lg:w-[30rem] leading-7"
        >
          <p>
            Learn more about the technologies that I have used in my software
            development journey.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
