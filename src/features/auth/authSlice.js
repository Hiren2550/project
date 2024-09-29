import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "./authAPI";

const initialState = { value: 0, currentUser: null };

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserAsync.fulfilled, (state, action) => {
      state.currentUser = action.payload.user;
    });
  },
});

export const selectCurrentUser = (state) => state.auth.currentUser;
export default authSlice.reducer;
