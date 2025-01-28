import apiService from "../apiService";

export const productApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => (query ? `/products/?${query}` : `/products`),
      providesTags: ["product_update"],
    }),
    getRecommendedProducts: builder.query({
      query: () => "/products/recommended/",
      providesTags: ["product_update"],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}/`,
    }),

    getCategories: builder.query({
      query: () => "/categories/",
      providesTags: ["category_update"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetRecommendedProductsQuery,
  useGetCategoriesQuery,
} = productApi;
