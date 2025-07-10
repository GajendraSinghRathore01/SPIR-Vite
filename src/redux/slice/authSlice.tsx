import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { apiConnector } from "../../services/apiConnector";
import { AuthEndpoints } from "../../services/apis";

interface AuthState {
  token: string | null;
  user: any;
  loading: Record<string, boolean>;
  error: Record<string, string | null>;
}

const initialState: AuthState = {
  token: localStorage.getItem("userToken") || null,
  user: null,
  loading: {},
  error: {},
};

export const loginUser = createAsyncThunk(
  "/auth/login",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await apiConnector({
        method: "POST",
        url: AuthEndpoints?.LOGIN_API,
        bodyData: data,        
      });

      // ✅ Save token manually
      localStorage.setItem("userToken", res?.data?.data?.token);
      console.log(res?.data?.data?.token, "res.data.token");

      return res?.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("userToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = state.loading || {}; // ✅ make sure it's defined
        state.error = state.error || {}; // ✅ make sure it's defined
        state.loading["loginUser"] = true;
        state.error["loginUser"] = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = state.loading || {};
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.loading["loginUser"] = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = state.loading || {};
        state.error = state.error || {};
        state.loading["loginUser"] = false;
        state.error["loginUser"] = action.payload as string;
      });
  },
});

export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
