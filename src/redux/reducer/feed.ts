import { Action, FeedState } from "../../types";
import * as Actions from "../../constants/actionTypes";
import { deleteArticleFromNormalizedFeed } from "../../utils";
import { FEED_INITIAL_STATE } from "../../constants/state";

const feedReducer = (state: FeedState = FEED_INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case Actions.FETCH_FEED_SUCCESS:
      return {
        ...action.payload,
      };
    case Actions.DELETE_ARTICLE_REQUEST:
      const { byId, allIds } = deleteArticleFromNormalizedFeed(
        action.payload,
        state.byId,
        state.allIds
      );
      return {
        byId,
        allIds,
      };
    default:
      return state;
  }
};

export default feedReducer;
