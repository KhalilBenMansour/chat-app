import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/users";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCred, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.post(`${BASE_URL}/login`, userCred);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (newUser, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(`${BASE_URL}/signup`, newUser);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const verifyUser = createAsyncThunk(
  "user/verifyUser",
  async (userCred, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        `${BASE_URL}/verify/${userCred.id}/${userCred.confirmCode}`
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    loginSuccess: false,
    registerSuccess: false,
    token: null,
    isAuth: false,
    error: null,
    messageR: null,
    messageL: null,
    messageV: null,
    verified: false,
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
      state.messageL = action.payload.msg;
      state.token = action.payload.token;

      localStorage.setItem("token", action.payload.token);
    },
    [loginUser.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.loginSuccess = action.payload.success;
      state.messageL = action.payload.msg;
      state.error = action.payload;
    },
    // register user
    [registerUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.registerSuccess = action.payload.success;
      state.messageR = action.payload.msg;
    },
    [registerUser.rejected]: (state, action) => {
      console.log(action);

      state.loading = false;
      state.registerSuccess = false;
      state.messageR = action.payload.msg;
    },
    // verify user
    [verifyUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [verifyUser.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.verified = true;
      state.messageV = action.payload.msg;
    },
    [verifyUser.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.verified = false;
      state.messageV = action.payload.msg;
    },
  },
});
export default userSlice.reducer;
