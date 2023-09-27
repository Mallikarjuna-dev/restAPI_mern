import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage
// const user = JSON.parse(window.localStorage.getItem("user"));
// const user =
//   typeof window !== "undefined"
//     ? JSON.parse(localStorage.getItem("user"))
//     : null;

const initialState = {
  user: typeof window !== "undefined" ? localStorage.getItem("user") : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  massage: "",
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const massage =
        (error.response &&
          error.response.data &&
          error.response.data.massage) ||
        error.massage ||
        error.toString();
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.massage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.massage = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
