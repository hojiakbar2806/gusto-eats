import apiService from "../apiService";

export const forAdminApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/accounts/users",
    }),
    getUsersStaff: builder.query({
      query: () => "/accounts/users_staff",
    }),
    getStats: builder.query({
      query: () => "/admin/stats",
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: "/products/",
        method: "POST",
        body,
      }),
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "/accounts/users/add",
        method: "POST",
        body,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/products/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["product_update"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["product_update"],
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["category_update"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["category_update"],
    }),
    markOrderAsDelivered: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}/mark_as_delivered/`,
        method: "PATCH",
      }),
    }),
    invalidatesTags: ["order_update"],
  }),
});

export const {
  useGetUsersQuery,
  useGetUsersStaffQuery,
  useMarkOrderAsDeliveredMutation,
  useGetStatsQuery,
  useCreateUserMutation,
  useUpdateProductMutation,
  useCreateCategoryMutation,
  useCreateProductMutation,
  useDeleteCategoryMutation,
  useDeleteProductMutation,
} = forAdminApi;
