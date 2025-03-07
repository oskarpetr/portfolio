"use client";

import { Article } from "@/types/Article.types";
import { useAnimate, motion } from "framer-motion";
import Link from "next/link";
import { memo, MouseEvent } from "react";
import Icon from "../shared/Icon";

interface Props {
  article: Article;
}

function ArticleItem({ article }: Props) {
  const [scope, animate] = useAnimate();

  const animateSlider = async (top: string, duration: number) => {
    await animate(scope.current, { top }, { duration });
  };

  const animateIn = async (e: MouseEvent<HTMLDivElement>) => {
    const bounds = (e.target as HTMLDivElement).getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    if (scope.current) {
      animateSlider(`${direction * 100}%`, 0);
      animateSlider("0%", 0.3);
    }
  };

  const animateOut = async (e: MouseEvent<HTMLDivElement>) => {
    const bounds = (e.target as HTMLDivElement).getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    if (scope.current) {
      animateSlider(`${direction * 100}%`, 0.3);
    }
  };

  return (
    <div
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      className="group relative z-0 cursor-pointer overflow-hidden border-t py-4"
    >
      <Link href={article.url} target="_blank" className="flex px-4">
        <div className="z-10 w-full transition-colors duration-300 group-hover:text-white lg:w-1/2">
          {article.title}
        </div>
        <div className="z-10 hidden w-1/2 transition-colors duration-300 group-hover:text-white lg:block">
          {new Date(article.publishedAt).getFullYear()}
        </div>
        <Icon
          size={24}
          name="ArrowUpRight"
          className="z-10 transition-colors duration-300 group-hover:text-white"
        />
      </Link>

      <motion.div
        ref={scope}
        className="absolute -top-full z-0 h-full w-full bg-black"
      ></motion.div>
    </div>
  );
}

export default memo(ArticleItem);
