import { Action, FeedState } from "../../types";
import * as FeedActions from "../../constants/actionTypes";

const INITIAL_STATE: FeedState = {
  byId: {},
  allIds: [],
};

const feedReducer = (state: FeedState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case FeedActions.FETCH_FEED_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default feedReducer;
