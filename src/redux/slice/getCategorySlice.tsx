import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../../services/apiConnector";
import { CategoryEndpoints } from "../../services/apis";

interface CategoryState {
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  loading: false,
  error: null,
};

// Async thunk to add a getCategory
export const getCategory = createAsyncThunk("getCategoryList", async () => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: CategoryEndpoints.CATEGORY_API,
    });
    return response.data;
  } catch (err: any) {
    return err?.response?.data?.message || "Something went wrong";
  }
});

const getCategorySlice = createSlice({
  name: "getCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default getCategorySlice.reducer;
