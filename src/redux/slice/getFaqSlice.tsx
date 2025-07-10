import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector, BASE_URL } from "../../services/apiConnector";


interface Faq {
  question: string;
  answer: string;
}

interface FaqState {
  loading: boolean;
  error: string | null;
  faqs: Faq[];
}

const initialState: FaqState = {
  loading: false,
  error: null,
  faqs: [],
};

// Async thunk to add a getCategory
export const getFaq = createAsyncThunk(
  "getFaq",
  async (productId: string | null) => {
      const url = productId
        ? `${BASE_URL}/faq?product_id=${productId}`
        : `${BASE_URL}/product`;
      const response = await apiConnector({
        method: "GET",
        url: url,
      });
      return response.data;
  }
);

const getFaqSlice = createSlice({
  name: "getFaq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFaq.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFaq.fulfilled, (state, action) => {
        state.loading = false;
        state.faqs = action.payload;
      })
      .addCase(getFaq.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default getFaqSlice.reducer;
