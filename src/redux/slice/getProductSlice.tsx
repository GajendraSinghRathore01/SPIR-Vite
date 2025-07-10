import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector, BASE_URL} from "../../services/apiConnector";


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
      // Build the URL with category ID if provided
      const url = categoryId ? `${BASE_URL}/product/?category_id=${categoryId}` : `${BASE_URL}/product`;
      const response = await apiConnector({
        method: "GET",
        url: url,
      });
      return response.data;
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
