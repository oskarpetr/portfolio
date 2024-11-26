import { useState } from "react";
import AboutCardItem from "./AboutCardItem";

export default function AboutCards() {
  const cards = [
    {
      title: "Development",
      text: "I'm a full stack developer with a focus on React and Next.js. I have experience with TypeScript, GraphQL, and Node.js. I'm passionate about creating fast, accessible, and responsive web applications.",
      linkText: "GitHub",
    },
    {
      title: "Design",
      text: "I'm a UI/UX designer with a focus on creating clean and modern designs. I have experience with Figma, Adobe XD, and Sketch. I'm passionate about creating user-friendly and visually appealing interfaces.",
      linkText: "Dribble",
    },
    {
      title: "Writing",
      text: "I'm a technical writer with a focus on creating clear and concise documentation. I have experience with Markdown, Docusaurus, and Jekyll. I'm passionate about creating helpful and informative content.",
      linkText: "Medium",
    },
  ];

  const [active, setActive] = useState(cards[0].title);

  return (
    <div className="w-screen mt-96 flex flex-col gap-24 justify-end items-center">
      <div className="relative -left-12 -right-12 w-full flex flex-col gap-16">
        <div className="border-t-[0.5px] border-b-[0.5px] border-white-primary px-12 h-[50vh] w-full">
          <div className="border-l-[0.5px] border-white-primary h-full flex">
            {cards.map((card, index) => (
              <AboutCardItem
                key={card.title}
                card={card}
                active={active}
                setActive={setActive}
                linkText={card.linkText}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* <div className="h-4 bg-neutral-800"></div>
          <motion.div
            animate={{
              width: progress.get() < 3 ? "3%" : progress.get() + "%",
            }}
            transition={{ duration: 0.5 }}
            className="h-4 bg-white-primary -mt-4 rounded-r-full rounded-b-full"
          ></motion.div> */}
        {/* <div className="text-4xl text-white-primary opacity-50 font-light">
            {scrollProgress}%
          </div> */}
      </div>

      {/* <div className="w-20 h-20 bg-white-primary rounded-full animate-ping"></div> */}
    </div>
  );
}
