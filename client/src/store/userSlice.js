import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/users";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCred, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      // const res = await axios.post(`${BASE_URL}/login`, userCred);

      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(userCred),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action);
      state.message = action.payload.msg;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.error = action.payload;
    },
  },
});
export default userSlice.reducer;
