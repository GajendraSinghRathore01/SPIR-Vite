 const BASE_URL = import.meta.env.VITE_BASE_URL;

 console.log('BASE_URL:', BASE_URL);
console.log('All env vars:', import.meta.env);

export const CategoryEndpoints = {
  CATEGORY_API: `${BASE_URL}/category`,
};
export const ProductEndpoints = {
  // Helper function to build product URL dynamically
  getProductsUrl: (categoryId?: string, page: number = 1, limit: number = 10) => {
    let url = `${BASE_URL}/product/?page=${page}&limit=${limit}`;
    if (categoryId) {
      url += `&category_id=${categoryId}`;
    }
    return url;
  }
};

export const AuthEndpoints = {
  LOGIN_API: `/auth/login`,
  FETCH_PROFILE_API: `/auth/profile`,
  // CHANGE_PASSWORD_API: `/auth/change-password`,
  // EMPLOYEE_API: `/employee`,
  // ADD_CATEGORY_API: ` /category`,
  // GET_ALL_CATEGORY_API: `/category?page=1&limit=10`,
  // GET_PRODUCT_API: `/product/?offset=1&limit=10&category_id=6826e7fce971334a0303b449`,
  // GET_CATEGORY: `/category?page=1&limit=10`
};