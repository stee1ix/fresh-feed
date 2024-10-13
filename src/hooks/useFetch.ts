import { useState, useEffect } from "react";
import { fetchNewsFeedData } from "../api";
import { ArticleResponse } from "../types";

const useFetch = (url: string) => {
  const [data, setData] = useState<ArticleResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchNewsFeedData(url);
        setData(result.articles?.slice(0, 100));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
