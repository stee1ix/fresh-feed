import { FeedState } from "../types";

export const FEED_INITIAL_STATE: FeedState = {
  byId: {},
  allIds: [],
};

export const DISPLAYED_INITIAL_STATE: number[] = [];

export const PENDING_INITIAL_STATE: number[] = [];

export const PINNED_INITIAL_STATE: number[] = [];
