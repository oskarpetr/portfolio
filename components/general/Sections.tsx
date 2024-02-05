import { menuItems } from "@/data/menuItems";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Sections() {
  return (
    <div className="flex flex-col items-start gap-12 md:gap-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <p className="opacity-50 tracking-wide w-[20rem] md:w-[25rem]">
          Meet a web enthusiast — a front-end developer, writer and designer.
          Based in the Czech Republic.
        </p>
      </motion.div>

      {menuItems.map((item, index) => {
        return <Section key={item.title} section={item} index={index} />;
      })}
    </div>
  );
}
