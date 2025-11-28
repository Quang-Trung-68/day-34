import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // Register user
    register: builder.mutation({
      query: (credentials) => ({
        url: `/auth/register`,
        method: "POST",
        data: credentials,
      }),
    }),

    // Login user
    login: builder.mutation({
      query: (credentials) => ({
        url: `/auth/login`,
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["User"],
    }),

    // Get me
    getCurrentUser: builder.query({
      query: () => ({
        url: `/auth/me`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetCurrentUserQuery } =
  authApi;
