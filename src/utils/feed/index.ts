import { Article, ArticleResponse, FeedState } from "../../types";

export const normalizeFeed = (articles: ArticleResponse[]): FeedState => {
  const byId: Record<number, Article> = {};
  const allIds: number[] = [];

  articles.forEach((article, index) => {
    const id = index + 1;
    byId[id] = { ...article, id };
    allIds.push(id);
  });

  return { byId, allIds };
};
