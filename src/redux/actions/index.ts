import * as Actions from "../../constants/actionTypes";
import { FeedState } from "../../types";

export const fetchFeedSuccess = (payload: FeedState) => ({
  type: Actions.FETCH_FEED_SUCCESS,
  payload,
});

export const newBatchSuccess = (ids: number[]) => ({
  type: Actions.NEW_BATCH_SUCCESS,
  payload: {
    ids,
  },
});

export const pinArticleRequest = (id: number) => ({
  type: Actions.PIN_ARTICLE_REQUEST,
  payload: id,
});

export const deleteArticleRequest = (id: number) => ({
  type: Actions.DELETE_ARTICLE_REQUEST,
  payload: id,
});

export const resetAllState = () => ({
  type: Actions.RESET_ALL_STATE,
});
