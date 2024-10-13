import { normalizeFeed } from "./../utils/feed/index";
import { useDispatch } from "react-redux";
import { api } from "../constants";
import useFetch from "./useFetch";
import { useEffect } from "react";
import { fetchFeedSuccess } from "../redux/actions/feed";

const useDynamicFetch = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(api.globalNews);

  useEffect(() => {
    if (data) {
      const normalizedFeed = normalizeFeed(data);
      dispatch(fetchFeedSuccess(normalizedFeed));
    }
  }, [data]);
};

export default useDynamicFetch;
