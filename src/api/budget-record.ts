import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_URL;

export const budgetApi = createApi({
  reducerPath: "budgetApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api/budget-record` }),
  endpoints: (builder) => ({
    getBudgetRecords: builder.query<{ _id: string; category: string; value: number }[], void>({
      query: () => "/",
    }),
  }),
});

export const { useGetBudgetRecordsQuery } = budgetApi;
