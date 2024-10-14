import { Action } from "../../types";
import * as Actions from "../../constants/actionTypes";
import { removeItemsFromArray } from "../../utils";
import { DISPLAYED_INITIAL_STATE } from "../../constants/state";

const displayedArticlesReducer = (
  state: number[] = DISPLAYED_INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case Actions.NEW_BATCH_SUCCESS:
      return [...action.payload.ids, ...state];
    case Actions.DELETE_ARTICLE_REQUEST:
      return removeItemsFromArray(state, [action.payload]);
    default:
      return state;
  }
};

export default displayedArticlesReducer;
