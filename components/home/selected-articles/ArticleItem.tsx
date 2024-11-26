import { IArticle } from "@/types/Project.types";
import Separator from "../../general/Separator";
import articles from "@/data/articles";
import TextSlideIn from "../../animation/TextSlideIn";
import Link from "next/link";

interface Props {
  article: IArticle;
  index: number;
}

export default function ArticleItem({ article, index }: Props) {
  return (
    <Link href={article.link} target="_blank">
      <Separator className="bg-white-primary opacity-15" />

      <div className="flex items-center p-8">
        <div className="w-1/6">
          <TextSlideIn
            text={article.client}
            className="text-white-primary opacity-50 text-lg body-text font-medium"
          />
        </div>
        <TextSlideIn
          text={article.title}
          className="text-white-primary text-2xl font-normal"
        />
      </div>

      {index === articles.length - 1 && (
        <Separator className="bg-white-primary opacity-15" />
      )}
    </Link>
  );
}
