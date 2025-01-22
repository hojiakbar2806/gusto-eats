import apiService from "../apiService";

export const authApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/accounts/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (userData) => ({
        url: "/accounts/register",
        method: "POST",
        body: userData,
      }),
    }),

    getProfile: builder.query({
      query: () => "/accounts/profile",
      providesTags: ["update"],
    }),

    updateProfile: builder.mutation({
      query: (updatedData) => ({
        url: "/accounts/profile-update",
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["update"],
    }),

    sendOtp: builder.mutation({
      query: (email) => ({
        url: "/accounts/send-otp",
        method: "POST",
        body: { email },
      }),
    }),

    resetPassword: builder.mutation({
      query: (resetData) => ({
        url: "/accounts/reset-password",
        method: "POST",
        body: resetData,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/accounts/logout",
        method: "POST",
        body: { refresh_token: localStorage.getItem("refresh_token") },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSendOtpMutation,
  useResetPasswordMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useLogoutMutation,
} = authApi;
