export interface Colors {
  [key: string]: string;
}

export interface Action {
  type: string;
  payload: any;
}

export interface Source {
  id: string | null;
  name: string;
}

export interface ArticleResponse {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

export interface FeedResponse {
  status: string;
  totalResults: number;
  articles: ArticleResponse[];
}

export interface Article extends ArticleResponse {
  id: number;
}

export interface FeedState {
  byId: Record<number, Article>;
  allIds: number[];
}
