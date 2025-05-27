import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../../services/apiConnector";
import { ProductEndpoints } from "../../services/apis";

interface CategoryState {
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  loading: false,
  error: null,
};

// Async thunk to add a getCategory
export const getProduct = createAsyncThunk("getProductList", async () => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: ProductEndpoints.ALL_PRODUCT_API,
    });
    return response.data;
  } catch (err: any) {
    return err?.response?.data?.message || "Something went wrong";
  }
});

const getProductSlice = createSlice({
  name: "getProductList",
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
