"use client";

import Image from "next/image";
import contact from "../../../public/images/contact.webp";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";
import Button from "../shared/Button";
import ParagraphSplit from "../animation/ParagraphSplit";
import Link from "next/link";
import { useTranslationStore } from "@/stores/useTranslationStore";

export default function Contact() {
  const { translation } = useTranslationStore();

  return (
    <div
      id="contact"
      className="flex w-full flex-col gap-8 border-t border-dashed border-black/50 pt-12 sm:items-center sm:pt-30"
    >
      <motion.div
        whileInView={{ gap: "24px" }}
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: BEZIER_EASING }}
        className="flex w-full items-center gap-0 sm:gap-2"
      >
        <div className="serif hidden w-full text-right text-6xl sm:block lg:text-7xl">
          {translation.contact.title[0]}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 350 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: BEZIER_EASING }}
          className="hidden overflow-hidden sm:block"
        >
          <Image
            src={contact}
            alt="Contact"
            width={400}
            height={0}
            placeholder="blur"
            className="h-28 w-auto object-cover grayscale"
          />
        </motion.div>

        <div className="serif hidden w-full text-6xl sm:block lg:text-7xl">
          {translation.contact.title[1]}
        </div>

        <div className="serif block w-full text-5xl sm:hidden">
          {translation.contact.title[0]} {translation.contact.title[1]}
        </div>
      </motion.div>

      <div className="w-full text-base font-normal sm:w-1/2 sm:text-center lg:w-1/3">
        <ParagraphSplit text={translation.contact.description} indent={false} />
      </div>

      <Link href="/inquiry">
        <Button text={translation.buttons.hitMeUp} />
      </Link>
    </div>
  );
}
