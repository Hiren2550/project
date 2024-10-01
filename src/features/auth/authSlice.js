import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./authAPI";
import { toast } from "react-toastify";

const initialState = {
  currentUser: null,
  load: false,
  error: null,
  loginUser: null,
};

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // console.log(response);
    toast.success("user is created", { position: "top-right", theme: "dark" });
    return response.data;
  }
);
export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginUser(userData);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.currentUser = null;
      state.loginUser = null;
      state.error = null;
    },
  },
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
    builder.addCase(loginUserAsync.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      state.load = false;
      state.currentUser = action.payload;
      state.loginUser = action.payload.user;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginUserAsync.rejected, (state, action) => {
      state.load = false;
      state.error = action.payload;
    });
  },
});

export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectSignInError = (state) => state.auth.error;
export const selectCreateUserStatus = (state) => state.auth.load;
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
