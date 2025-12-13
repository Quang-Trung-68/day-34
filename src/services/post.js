import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: baseQuery(),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    // Get feed
    getFeed: builder.query({
      query: (params) => ({
        url: `/api/posts/feed`,
        method: "GET",
        params,
      }),
      // tất cả page dùng chung cache
      serializeQueryArgs: ({ endpointName }) => endpointName,

      // merge data giữa các page
      merge: (currentCache, response) => {
        currentCache.data.push(...response.data);
        currentCache.pagination = response.pagination;
      },

      // chỉ refetch khi page thay đổi
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

export const { useGetFeedQuery } = postApi;
