"use client";

import Projects from "@/components/projects/Projects";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const menu = ["Development", "Writing", "Projects", "Contact"];

  return (
    <div>
      <div className="text-white h-screen px-32 py-16 transition-all duration-500 bg-left bg-[url('/images/Background.png')]">
        <Link href="/" className="bg-[#121212]">
          <motion.h1
            className="text-xl uppercase tracking-wide font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Oskar Petr.
          </motion.h1>
        </Link>

        <div className="flex flex-col items-start gap-12 mt-32">
          <Menu menu={menu} />
        </div>

        <p className="absolute bottom-16 right-16 font-semibold text-neutral-600">
          Portfolio © 2024 by Oskar Petr
        </p>
      </div>

      <div
        id="development"
        className="h-screen p-32 border-b border-neutral-800"
      >
        <Headline title="Development" />
      </div>

      <div id="writing" className="h-screen p-32 border-b border-neutral-800">
        <Headline title="Writing" />
      </div>

      <div id="projects" className="p-32 border-b border-neutral-800">
        <Headline title="Projects" />

        <Projects />
      </div>

      <div id="contact" className="h-screen p-32 border-b border-neutral-800">
        <Headline title="Contact" />
      </div>
    </div>

    // This work © 2024 by Oskar Petr is licensed under CC BY-NC-ND 4.0
  );
}

function Headline({ title }: { title: string }) {
  return (
    <motion.h2
      className="text-white text-4xl flex gap-4"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {title}
      <Image
        src="/images/Star.svg"
        alt="Star"
        className="-mt-1 w-5 opacity-50"
        width={16}
        height={16}
      />
    </motion.h2>
  );
}

function Menu({ menu }: { menu: string[] }) {
  const scrolltoHash = function (element: string) {
    document.getElementById(element)?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return menu.map((item, index) => {
    return (
      <motion.button
        key={item}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 + index * 0.25 }}
        className="tracking-wide group cursor-pointer text-3xl text-white flex gap-4 items-center"
        onClick={() => scrolltoHash(item.toLocaleLowerCase())}
      >
        <div>
          <p className="transition-all duration-500 bg-[#121212]">{item}</p>
          <div className="h-[2px] bg-neutral-300 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
        </div>

        <p className="group-hover:opacity-50 opacity-0 group-hover:translate-x-2 -translate-x-8 transition-all duration-500">
          ➼
        </p>
        {/* <img
          src="/images/Star.svg"
          alt="Star"
          className="group-hover:opacity-100 opacity-0 transition-all duration-500"
        /> */}

        {/* <div className="bg-white w-0 group-hover:w-full duration-500 h-[40px] mt-[-40px]"></div> */}
      </motion.button>
    );
  });
}
