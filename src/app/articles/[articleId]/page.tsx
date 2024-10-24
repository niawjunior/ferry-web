import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import {
  getArticleById,
  getArticleList,
} from "~/server/libs/graphql/article.graphql";

interface ArticleProps {
  params: Params & {
    articleId: string;
  };
}

export default async function Article({ params: { articleId } }: ArticleProps) {
  const article = await getArticleById(articleId);
  console.log("article :>> ", article);
  const articleList = await getArticleList(4);
  console.log("articleList :>> ", articleList);
}
