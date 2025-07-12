import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector, BASE_URL } from "../../services/apiConnector";

interface GovernmentSchemeState { // Changed from ProductState
  loading: boolean;
  error: string | null;
  data: any[]; // Added data field to store the schemes
}

const initialState: GovernmentSchemeState = {
  loading: false,
  error: null,
  data: [], // Initialize data as empty array
};

// Async thunk to get government schemes by product ID
export const getGovernment = createAsyncThunk(
  "getGovernmentScheme",
  async (productId: string | null) => {

      const url = productId ? `${BASE_URL}/govt/scheme?product_id=${productId}` : `${BASE_URL}/govt/scheme`;
      const response = await apiConnector({
        method: "GET",
        url: url,
      });
      return response.data;
  }
);

const getGovernmentSlice = createSlice({
  name: "getGovernment",
  initialState,
  reducers: {
    // You can add synchronous reducers here if needed
    clearGovernmentData: (state) => {
      state.data = [];
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGovernment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGovernment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data || action.payload || []; // Store the response data
      })
      .addCase(getGovernment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data = []; // Clear data on error
      });
  },
});

export const { clearGovernmentData } = getGovernmentSlice.actions;
export default getGovernmentSlice.reducer;