import axios, { AxiosInstance } from "axios";
import { api } from "../constants";
import { FeedResponse } from "../types";

const apiClient: AxiosInstance = axios.create({
  baseURL: api.baseUrl,
  timeout: 10000,
});

const fetchNewsFeedData = async (url: string) => {
  try {
    const response = await apiClient.get<FeedResponse>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error fetching data");
    } else {
      throw new Error("Unexpected error occurred");
    }
  }
};

export { fetchNewsFeedData };
