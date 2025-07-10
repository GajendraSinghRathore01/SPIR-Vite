import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector, BASE_URL } from "../../services/apiConnector";


interface product {
  _id:string | undefined;
  category: {
    _id:string | undefined;
    category_name: string | undefined;
    category_logo: string | undefined;
  }
  product_name: string | undefined;
  product_description: string | undefined;
  product_logo: string | undefined;
  product_video: string | undefined;
}
interface ProductState {
  loading: boolean;
  productData:product[] | null
  error: string | null;
}

const initialState: ProductState = {
  loading: false,
  productData:null,
  error: null,
};

// Async thunk to get products by category ID
export const getSingleProduct = createAsyncThunk(
  "getProduct",
  async (productId: string | null) => {
      // Build the URL with category ID if provided
      const url = productId ? `${BASE_URL}/product/${productId}` : `${BASE_URL}/product`;
      const response = await apiConnector({
        method: "GET",
        url: url,
      });
      return response.data;
  }
);

const getSingleProductSlice = createSlice({
  name: "getProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleProduct.fulfilled, (state,action) => {
        state.loading = false;
        state.productData = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default getSingleProductSlice.reducer;
