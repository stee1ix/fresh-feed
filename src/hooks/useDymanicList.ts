import {
  getRandomFive,
  normalizeFeed,
  removeItemsFromArray,
} from "../utils/index";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../constants";
import useFetch from "./useFetch";
import { useEffect, useRef, useState } from "react";
import {
  fetchFeedSuccess,
  newBatchSuccess,
  resetAllState,
} from "../redux/actions";
import { persistor } from "../redux/store";

const useDynamicList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(api.globalNews);
  const [feed, setFeed] = useState<number[]>([]);
  const feedAllIds: number[] = useSelector((state) => state.feed.allIds);
  const displayedArticles: number[] = useSelector(
    (state) => state.displayedArticles
  );
  const pendingArticles: number[] = useSelector(
    (state) => state.pendingArticles
  );
  const pendingArticlesRef = useRef<number[]>(pendingArticles);

  useEffect(() => {
    pendingArticlesRef.current = pendingArticles;
  }, [pendingArticles]);

  const pinned: number[] = useSelector((state) => state.pinned);

  const isInitialListDisplayed = useRef(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const setNewBatch = () => {
    if (pendingArticlesRef.current.length === 0) {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
      dispatch(resetAllState());
      persistor.purge();
      return;
    }
    const nextBatch = getRandomFive(pendingArticlesRef.current);
    dispatch(newBatchSuccess(nextBatch));
  };

  const resetTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => {
      setNewBatch();
    }, 10000);
  };

  const refresh = () => {
    setNewBatch();
    resetTimer();
  };

  useEffect(() => {
    if (data) {
      const normalizedFeed = normalizeFeed(data);
      dispatch(fetchFeedSuccess(normalizedFeed));

      if (!timer.current) {
        resetTimer();
      }
    }

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [data]);

  useEffect(() => {
    if (!isInitialListDisplayed.current && feedAllIds.length > 0) {
      const initialBatch = feedAllIds.slice(0, 10);
      dispatch(newBatchSuccess(initialBatch));
      isInitialListDisplayed.current = true;
    }
  }, [feedAllIds, isInitialListDisplayed.current]);

  useEffect(() => {
    const newFeed = removeItemsFromArray(displayedArticles, pinned);
    setFeed(newFeed);
  }, [displayedArticles, pinned]);

  return { feed, pinned, feedAllIds, loading, error, refresh };
};

export default useDynamicList;
