import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/users";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCred, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.post(`${BASE_URL}/login`, userCred);

      // const res = await fetch(`${BASE_URL}/login`, {
      //   method: "POST",
      //   body: JSON.stringify(userCred),
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // });
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    loginSuccess: false,
    token: null,
    isAuth: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: {
    // loginUser
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.loginSuccess = action.payload.success;
      state.isAuth = action.payload.success;
      state.message = action.payload.msg;
      state.token = action.payload.token;

      localStorage.setItem("token", action.payload.token);
    },
    [loginUser.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.loginSuccess = action.payload.success;
      state.message = action.payload.msg;
      state.error = action.payload;
    },
    // getuser
  },
});
export default userSlice.reducer;
