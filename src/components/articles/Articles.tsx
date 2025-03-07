"use client";

import { Article } from "@/types/Article.types";
import SectionTitle from "../shared/SectionTitle";
import ArticleItem from "./ArticleItem";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  articles: Article[];
}

export default function Articles({ articles }: Props) {
  const { translation } = useTranslationStore();

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <SectionTitle title={translation.sectionTitles.articles} />

      <div className="w-full lg:w-2/3">
        {articles.map((article) => (
          <ArticleItem key={`article-${article.id}`} article={article} />
        ))}
      </div>
    </div>
  );
}
