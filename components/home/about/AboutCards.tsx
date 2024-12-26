import { useState } from "react";
import AboutCardItem from "./AboutCardItem";

export default function AboutCards() {
  const cards = [
    {
      title: "Development",
      text: "I'm a Full Stack Web Developer who loves creating things for the web. Whether it's building with Next.js, React.js, or Node.js, or working with databases like PostgreSQL and MongoDB, I enjoy turning ideas into functional, scalable applications that solve real problems.",
      linkText: "GitHub",
      link: "https://github.com/oskarpetr",
    },
    {
      title: "Design",
      text: "When it comes to Web Design, I'm all about crafting experiences that feel great to use. From designing in Figma to styling with Tailwind CSS, I love bringing designs to life and making sure they're interactive, and just plain fun.",
      linkText: "Dribbble",
      link: "https://dribbble.com/oskarpetr",
    },
    {
      title: "Writing",
      text: "I also have a passion for Technical Writing. Explaining complex concepts in a way that's easy to understand is something I really enjoy—whether it's through documentation, tutorials, or just sharing what I've learned.",
      linkText: "Medium",
      link: "https://medium.com/@oskarpetr",
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
                link={card.link}
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
