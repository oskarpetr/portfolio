import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const menu = ["Development", "Writing", "Projects"];

  const scrolltoHash = function (element: string) {
    document.getElementById(element)?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div>
      <div className="text-white h-screen px-32 py-16 flex flex-col gap-32 transition-all duration-500 bg-left bg-[url('/images/Background.png')]">
        <Link href="/">
          <motion.h1
            className="text-xl uppercase tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Oskar Petr.
          </motion.h1>
        </Link>

        <div className="flex flex-col items-start gap-12 text-white text-3xl">
          {menu.map((item, index) => {
            return (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.25 }}
                className="tracking-wide group cursor-pointer"
                onClick={() => scrolltoHash(item.toLocaleLowerCase())}
              >
                <p className="transition-all duration-500">{item}</p>

                <div className="h-[2px] bg-neutral-300 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                {/* <div className="bg-white w-0 group-hover:w-full duration-500 h-[40px] mt-[-40px]"></div> */}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div id="development" className="h-screen px-32 py-16">
        <p className="text-white text-3xl">Development</p>
      </div>

      <div id="writing" className="h-screen px-32 py-16">
        <p className="text-white text-3xl">Writing</p>
      </div>

      <div id="projects" className="h-screen px-32 py-16">
        <p className="text-white text-3xl">Projects</p>
      </div>
    </div>
  );
}
