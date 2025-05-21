"use client";

import { Article } from "@/types/Article.types";
import SectionTitle from "../shared/SectionTitle";
import ArticleItem from "./ArticleItem";
import { useTranslationStore } from "@/stores/useTranslationStore";
import Tooltip from "../animation/Tooltip";

interface Props {
  articles: Article[];
}

export default function Articles({ articles }: Props) {
  const { translation } = useTranslationStore();

  return (
    <div className="flex flex-col">
      <SectionTitle
        title={translation.sectionTitles.articles}
        number={articles.length}
      />

      <Tooltip icon="ArrowUpRight" title={translation.tooltips.read}>
        {articles.map((article, index) => (
          <ArticleItem
            key={`article-${article.id}`}
            article={article}
            isLast={index === articles.length - 1}
          />
        ))}
      </Tooltip>
    </div>
  );
}
