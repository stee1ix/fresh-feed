import { Action } from "../../types";
import * as Actions from "../../constants/actionTypes";
import { removeItemsFromArray } from "../../utils";
import { PENDING_INITIAL_STATE } from "../../constants/state";

const pendingReducer = (
  state: number[] = PENDING_INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case Actions.FETCH_FEED_SUCCESS:
      return action.payload.allIds;
    case Actions.NEW_BATCH_SUCCESS:
      return removeItemsFromArray(state, action.payload.ids);
    default:
      return state;
  }
};

export default pendingReducer;
