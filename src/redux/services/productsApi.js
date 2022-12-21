import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
   reducerPath: "productsApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "/src/data"
   }),
   endpoints: builder => ({
      getClothes: builder.query({ query: () => "/data.json" })
   })
});

export const { useGetClothesQuery } = productsApi;
