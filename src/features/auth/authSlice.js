import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./authAPI";

const initialState = {
  value: 0,
  currentUser: null,
  load: false,
  error: null,
  loginUser: null,
};

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userData) => {
    const response = await createUser(userData);
    console.log(response);
    return response.data;
  }
);
export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    const response = await loginUser(userData);
    return response.data;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserAsync.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(createUserAsync.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.load = false;
    });
    builder.addCase(createUserAsync.rejected, (state, action) => {
      state.error = action.error;
      state.load = false;
    });
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loginUser = action.payload.user;
      localStorage.setItem("token", action.payload.token);
    });
  },
});

export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectCreateUserStatus = (state) => state.auth.load;
export default authSlice.reducer;
