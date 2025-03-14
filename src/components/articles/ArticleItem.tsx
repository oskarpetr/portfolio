import { Article } from "@/types/Article.types";
import Link from "next/link";
import Icon from "../shared/Icon";
import HoverSlider from "../animation/HoverSlider";
import AnimatedDivider from "../animation/AnimatedDivider";
import Reveal from "../animation/Reveal";

interface Props {
  article: Article;
}

export default function ArticleItem({ article }: Props) {
  const yearPublished = new Date(article.publishedAt).getFullYear().toString();

  return (
    <HoverSlider>
      <Link href={article.url} target="_blank" className="group relative z-10">
        <AnimatedDivider delay={0.3} />

        <div className="flex items-center px-4 py-4">
          <div className="flex items-center text-black transition-colors duration-300 group-hover:text-white group-hover:mix-blend-difference lg:w-1/2">
            <Reveal direction="up" delay={0.3} viewportAmount={1}>
              {article.title}
            </Reveal>
          </div>

          <div className="hidden w-1/2 items-center font-normal text-black transition-colors duration-300 group-hover:text-white group-hover:mix-blend-difference lg:flex">
            <Reveal direction="up" delay={0.3} viewportAmount={1}>
              {yearPublished}
            </Reveal>
          </div>

          <div className="absolute right-4">
            <Reveal direction="up" delay={0.3} viewportAmount={1}>
              <Icon
                size={24}
                name="ArrowUpRight"
                className="text-black transition-colors duration-300 group-hover:text-white group-hover:mix-blend-difference"
              />
            </Reveal>
          </div>
        </div>
      </Link>
    </HoverSlider>
  );
}
