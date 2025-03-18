"use client";

import EmptyPage from "@/components/layout/EmptyPage";
import { Article } from "@/types/Article.types";
import dynamic from "next/dynamic";

interface Props {
  articles: Article[];
}

// dynamic import
const Articles = dynamic(() => import("@/components/articles/Articles"), {
  loading: () => <EmptyPage />,
});

export default function ArticlesWrapper({ articles }: Props) {
  return <Articles articles={articles} />;
}
