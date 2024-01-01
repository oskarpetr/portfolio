import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const menu = ["Development", "Writing", "Projects"];

  return (
    <div>
      <div className="text-white h-screen px-32 py-16 flex flex-col gap-24 bg-[url('/images/Background2.png')] bg-x">
        <Link href="/">
          <motion.h1
            className="text-xl font-semibold uppercase tracking-wide"
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
                className="tracking-wide group"
              >
                <p className="transition-all duration-500">{item}.</p>

                <div className="h-[2px] bg-neutral-300 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                {/* <div className="bg-white w-0 group-hover:w-full duration-500 h-[40px] mt-[-40px]"></div> */}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
