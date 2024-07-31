// src/api/baseApi.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nursery-backend-azure.vercel.app/api",
  }),
  tagTypes: ["plants"],
  endpoints: (builder) => ({
    getPlants: builder.query({
      query: () => ({
        url: "/plants",
        method: "GET",
      }),
      providesTags: ["plants"],
    }),
    getSinglePlant: builder.query({
      query: (id) => ({
        url: `/plants/${id}`,
        method: "GET",
      }),
      providesTags: ["plants"],
    }),
    addPlantReview: builder.mutation({
      query: ({ data, id }) => ({
        url: `/plants/${id}/review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["plants"],
    }),
    getPlantReviews: builder.query({
      query: (id) => ({
        url: `/plants/${id}/reviews`,
        method: "GET",
      }),
    }),
    deletePlant: builder.mutation({
      query: (id) => ({
        url: `/plants/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["plants"],
    }),
    addPlant: builder.mutation({
      query: (newPlant) => {
        return {
          url: "/plants",
          method: "POST",
          body: newPlant,
        };
      },
      invalidatesTags: ["plants"],
    }),
    updatePlant: builder.mutation({
      query: ({ id, updateData }) => {
        console.log(id, updateData);
        return {
          url: `/plants/${id}`,
          method: "PATCH",
          body: updateData,
        };
      },
      invalidatesTags: ["plants"],
    }),
    decreasePlantQuantity: builder.mutation({
      query: (id) => ({
        url: `/plants/${id}/decreaseQuantity`,
        method: "PATCH",
      }),
      invalidatesTags: ["plants"],
    }),
  }),
});

export const {
  useGetPlantsQuery,
  useGetSinglePlantQuery,
  useAddPlantReviewMutation,
  useGetPlantReviewsQuery,
  useDeletePlantMutation,
  useAddPlantMutation,
  useUpdatePlantMutation,
  useDecreasePlantQuantityMutation, // Export the hook for the decreasePlantQuantity mutation
} = baseApi;

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
//   tagTypes: ["plants"],
//   endpoints: (builder) => ({
//     getPlants: builder.query({
//       query: () => ({
//         url: "/plants",
//         method: "GET",
//       }),
//       providesTags: ["plants"],
//     }),
//     getSinglePlant: builder.query({
//       query: (id) => ({
//         url: `/plants/${id}`,
//         method: "GET",
//       }),
//       providesTags: ["plants"],
//     }),
//     addPlantReview: builder.mutation({
//       query: ({ data, id }) => ({
//         url: `/plants/${id}/review`,
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["plants"],
//     }),
//     getPlantReviews: builder.query({
//       query: (id) => ({
//         url: `/plants/${id}/reviews`,
//         method: "GET",
//       }),
//     }),

//     deletePlant: builder.mutation({
//       query: (id) => ({
//         url: `/plants/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["plants"],
//     }),
//     addPlant: builder.mutation({
//       query: (newPlant) => {
//         console.log(newPlant);
//         return {
//           url: "/plants",
//           method: "POST",
//           body: newPlant,
//         };
//       },
//       invalidatesTags: ["plants"],
//     }),
//     updatePlant: builder.mutation({
//       query: ({ id, updateData }) => {
//         console.log("Updating plant with ID:", id, updateData); // Log the ID
//         return {
//           url: `/plants/${id}`,
//           method: "PATCH",
//           body: updateData,
//         };
//       },
//       invalidatesTags: ["plants"],
//     }),
//   }),
// });

// export const {
//   useGetPlantsQuery,
//   useGetSinglePlantQuery,
//   useAddPlantReviewMutation,
//   useGetPlantReviewsQuery,

//   useDeletePlantMutation,
//   useAddPlantMutation,
//   useUpdatePlantMutation, // Export the hook for the updatePlant mutation
// } = baseApi;
