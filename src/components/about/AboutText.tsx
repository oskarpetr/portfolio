"use client";

import ParagraphOpacity from "../animation/ParagraphOpacity";
import ParagraphSplit from "../animation/ParagraphSplit";

export default function AboutText() {
  const aboutText =
    "I'm a creative developer with a passion for web dev, design, and UI/UX. I love bringing ideas to life through thoughtful layouts, smooth animations, and responsive, high-performance websites that make for a great user experience.";
  const subtitle =
    "I am a cybernetics student who loves to pursue web development, design, and writing. I help individuals and businesses make a memorable online presence. Scroll to get to know me better.";

  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <div className="text-2xl font-normal tracking-tight uppercase md:text-3xl lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-16">
        <ParagraphOpacity text={aboutText} />
      </div>

      <div className="text-base font-normal md:w-1/2">
        <ParagraphSplit text={subtitle} />
      </div>
    </div>
  );
}
