import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../../services/apiConnector";

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ProductState {
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  loading: false,
  error: null,
};

// Async thunk to get products by category ID
export const getProduct = createAsyncThunk(
  "getProductList", 
  async (categoryId: string | null) => {
    try {
      // Build the URL with category ID if provided
      const url = categoryId 
        ? `${BASE_URL}/product/?page=1&limit=10&category_id=${categoryId}`
        : `${BASE_URL}/product/?page=1&limit=10`;
        
      const response = await apiConnector({
        method: "GET",
        url: url,
      });
      return response.data;
    } catch (err: any) {
      return err?.response?.data?.message || "Something went wrong";
    }
  }
);

const getProductSlice = createSlice({
  name: "getProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default getProductSlice.reducer;