export const ACCOUNTS_LOGIN = "accounts/login/";
export const ACCOUNTS_REGISTER = "accounts/register/";
export const ACCOUNTS_PROFILE = "accounts/profile/";
export const ACCOUNTS_PROFILE_UPDATE = "accounts/profile-update/";
export const ACCOUNTS_SEND_OTP = "accounts/send-otp/";
export const ACCOUNTS_RESET_PASSWORD = "accounts/reset-password/";
export const ACCOUNTS_TOKEN_REFRESH = "accounts/token-refresh/";
export const ACCOUNTS_LOGOUT = "accounts/logout/";

export const GET_STATS = "api/admin/stats/";

export const PRODUCTS = (query) =>
  query ? `api/products/?${query}` : `api/products/`;
export const PRODUCT_BY_ID = (id) => `api/products/${id}/`;
export const CREATE_PRODUCT_REVIEW = (productId) =>
  `products/${productId}/create_review/`;
export const RECOMMENDED_PRODUCTS = "api/products/recommended/";

export const CATEGORIES = "api/categories/";
export const CATEGORY_BY_ID = (id) => `categories/${id}/`;

export const ORDERS = "api/myorders/";
export const ORDER_BY_ID = (id) => `orders/${id}/`;
export const CREATE_ORDER = "api/orders/add/";
export const MARK_ORDER_AS_PAID = (id) => `orders/${id}/mark_as_paid/`;
export const DELETE_ORDER = (id) => `orders/${id}/`;

export const USERS = "accounts/users/";
export const CREATE_USER = "accounts/users/add";
export const USER_BY_ID = (id) => `accounts/users/${id}/`;
export const USERS_STAFF = "accounts/users_staff/";

export const CREATE_PRODUCT = "api/products/";
export const DELETE_PRODUCT = (id) => `api/products/${id}/`;
export const UPDATE_PRODUCT = (id) => `api/products/${id}/`;

export const CREATE_CATEGORY = "api/categories/";
export const DELETE_CATEGORY = (id) => `api/categories/${id}/`;

export const MARK_ORDER_AS_DELIVERED = (id) =>
  `orders/${id}/mark_as_delivered/`;
