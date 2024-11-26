import Section from "../../general/Section";
import ArticleItem from "./ArticleItem";
import { useEffect, useRef, useState } from "react";
import { handleMouseMove } from "@/utils/mouseMove";
import Container from "../../general/Container";
import MoveObject from "../../animation/MoveObject";
import CircleLink from "../../general/CircleLink";
import { articlesQuery, useCMS } from "@/utils/fetchers";
import { IArticle } from "@/types/Project.types";

export default function SelectedArticles() {
  // mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // refs
  const articlesRef = useRef<HTMLDivElement>(null);
  const articleLinkRef = useRef<HTMLDivElement>(null);

  // subtitle
  const articlesSubtitle =
    "I am a cybernetics student who loves to pursue web development, design, and writing. I turn your ideas into reality with aesthetics. Also writing for publications about my. Design, and writing. I turn your ideas into reality with.";

  // articles
  const fetchArticles = useCMS<IArticle>({ query: articlesQuery() });
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    if (!fetchArticles.loading) {
      const sortedArticles = fetchArticles.data.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      setArticles(sortedArticles);
    }
  }, [fetchArticles.loading]);

  return (
    articles && (
      <Container className="mb-48">
        <Section
          direction="left"
          title="Selected articles"
          number={articles.length}
          subtitle={articlesSubtitle}
        />

        <div className="absolute pointer-events-none" ref={articleLinkRef}>
          <MoveObject mousePosition={mousePosition} blur="small">
            <CircleLink text="View" icon="ArrowUpRight" />
          </MoveObject>

          <div className="w-36 h-36"></div>
        </div>

        <div
          className="mt-32"
          ref={articlesRef}
          onMouseMove={(event) =>
            handleMouseMove({
              event,
              setMousePosition,
              outerRef: articlesRef,
              innerRef: articleLinkRef,
              offset: -40,
            })
          }
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          {articles.map((article, index) => (
            <ArticleItem key={article.title} article={article} index={index} />
          ))}
        </div>
      </Container>
    )
  );
}
