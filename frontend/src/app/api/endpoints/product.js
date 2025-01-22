import apiService from "../apiService";

export const productApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => (query ? `api/products/?${query}` : `api/products`),
      providesTags: ["product_update"],
    }),
    getRecommendedProducts: builder.query({
      query: () => "api/products/recommended/",
      providesTags: ["product_update"],
    }),
    getProductById: builder.query({
      query: (id) => `api/products/${id}/`,
    }),

    getCategories: builder.query({
      query: () => "api/categories/",
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
