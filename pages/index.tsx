import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-white">
      <div className="px-32 py-16 flex gap-16 items-center">
        <motion.h1
          className="text-3xl font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Oskar Petr
        </motion.h1>

        <div className="flex gap-8 uppercase text-neutral-300">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Development
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Writing
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            Projects
          </motion.button>
        </div>
      </div>
    </div>
  );
}
