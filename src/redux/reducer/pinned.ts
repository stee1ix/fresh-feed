import { Action } from "../../types";
import * as Actions from "../../constants/actionTypes";
import { removeItemsFromArray, toggleIdInArray } from "../../utils";
import { PINNED_INITIAL_STATE } from "../../constants/state";

const pinnedReducer = (
  state: number[] = PINNED_INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case Actions.PIN_ARTICLE_REQUEST:
      return toggleIdInArray(state, action.payload);
    case Actions.DELETE_ARTICLE_REQUEST:
      return removeItemsFromArray(state, [action.payload]);
    default:
      return state;
  }
};

export default pinnedReducer;
