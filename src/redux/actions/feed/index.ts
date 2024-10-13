import { FETCH_FEED_SUCCESS } from "../../../constants/actionTypes";
import { FeedState } from "../../../types";

export const fetchFeedSuccess = (payload: FeedState) => ({
  type: FETCH_FEED_SUCCESS,
  payload,
});
