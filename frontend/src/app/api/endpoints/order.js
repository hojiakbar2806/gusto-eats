import apiService from "../apiService";

export const orderApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/api/myorders",
      providesTags: ["order_update"],
    }),

    getOrderById: builder.query({
      query: (id) => `orders/${id}/`,
    }),

    createOrder: builder.mutation({
      query: (body) => ({
        url: "/api/orders/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["order_update"],
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `orders/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["order_update"],
    }),

    markOrderAsPaid: builder.mutation({
      query: (id) => ({
        url: `orders/${id}/mark_as_paid/`,
        method: "PATCH",
      }),
      invalidatesTags: ["order_update"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useDeleteOrderMutation,
  useMarkOrderAsPaidMutation,
} = orderApi;
