import { combineReducers } from "redux";

import feedReducer from "./feed";
import displayedArticlesReducer from "./displayed";
import pendingArticlesReducer from "./pending";
import pinnedReducer from "./pinned";
import {
  DISPLAYED_INITIAL_STATE,
  FEED_INITIAL_STATE,
  PENDING_INITIAL_STATE,
  PINNED_INITIAL_STATE,
} from "../../constants/state";
import * as Actions from "../../constants/actionTypes";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const feedPersistConfig = {
  key: "feed",
  storage: AsyncStorage,
};

const persistedFeedReducer = persistReducer(feedPersistConfig, feedReducer);

const appReducer = combineReducers({
  feed: persistedFeedReducer,
  displayedArticles: displayedArticlesReducer,
  pendingArticles: pendingArticlesReducer,
  pinned: pinnedReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === Actions.RESET_ALL_STATE) {
    state = {
      feed: FEED_INITIAL_STATE,
      displayedArticles: DISPLAYED_INITIAL_STATE,
      pendingArticles: PENDING_INITIAL_STATE,
      pinned: PINNED_INITIAL_STATE,
    };
  }

  return appReducer(state, action);
};

export default rootReducer;
