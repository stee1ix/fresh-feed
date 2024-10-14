import { Article, ArticleResponse, FeedState } from "../types";

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

export const deleteArticleFromNormalizedFeed = (
  id: number,
  byId: Record<number, Article>,
  allIds: number[]
): FeedState => {
  const newById = { ...byId };
  delete newById[id];

  const newAllIds = allIds.filter((articleId) => articleId !== id);

  return { byId: newById, allIds: newAllIds };
};

export const getRandomFive = (ids: number[]): number[] => {
  const result: number[] = [];
  const pendingIds = [...ids];

  while (result.length < 5 && pendingIds.length > 0) {
    const randomIndex = Math.floor(Math.random() * pendingIds.length);
    result.push(pendingIds[randomIndex]);
    pendingIds.splice(randomIndex, 1);
  }

  return result;
};

export const removeItemsFromArray = (
  currentIds: number[],
  ids: number[]
): number[] => {
  return currentIds.filter((item) => !ids.includes(item));
};

export const toggleIdInArray = (currentIds: number[], id: number): number[] => {
  if (currentIds.includes(id)) {
    return currentIds.filter((existingId) => existingId !== id);
  } else {
    return [...currentIds, id];
  }
};
