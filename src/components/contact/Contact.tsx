"use client";

import Image from "next/image";
import contactImage from "../../../public/images/contact.webp";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";
import Button from "../shared/Button";
import ParagraphSplit from "../animation/ParagraphSplit";
import Link from "next/link";
import { contact } from "@/data/footer";

export default function Contact() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <motion.div
        initial={{ gap: "6px" }}
        whileInView={{ gap: "32px" }}
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 1, duration: 2, ease: BEZIER_EASING }}
        className="flex w-full items-center"
      >
        <div className="serif w-full text-right text-7xl">Start a</div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 550 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 1, duration: 1, ease: BEZIER_EASING }}
          className="overflow-hidden"
        >
          <Image
            src={contactImage}
            alt="Contact"
            width={400}
            height={0}
            className="h-40 w-auto object-cover grayscale"
          />
        </motion.div>

        <div className="serif w-full text-7xl">project?</div>
      </motion.div>

      <div className="w-1/3 text-center font-normal">
        <ParagraphSplit
          text="Hey there! If you are looking for working on a project or a collaboration with me, hit me up with your inquiry and we'll get to work!"
          indent={false}
        />
      </div>

      <Link href={`mailto:${contact.email}`}>
        <Button text="Hit me up!" />
      </Link>
    </div>
  );
}
