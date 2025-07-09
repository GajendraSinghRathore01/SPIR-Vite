import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../../services/apiConnector";
import { SchemeEndpoints } from "../../services/apis";

interface CategoryState {
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  loading: false,
  error: null,
};

// Async thunk to add a getCategory
export const getSchemes = createAsyncThunk("getSchemes", async () => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: SchemeEndpoints.SCHEME_API,
    });
    return response.data;
  } catch (err: any) {
    return err?.response?.data?.message || "Something went wrong";
  }
});

const getSchemeSlice = createSlice({
  name: "getSchemes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSchemes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSchemes.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getSchemes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default getSchemeSlice.reducer;
