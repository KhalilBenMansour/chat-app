import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import axios from "axios";
import persistReducer from "redux-persist/es/persistReducer";

const BASE_URL = "http://localhost:3001/api/users";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCred, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.post(`${BASE_URL}/login`, userCred);

      return res.data;
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
export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  const config = {
    headers: {
      Authorization: `Bearer ${getState().user.token}`,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/currentUser`, config);

    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    loginSuccess: false,
    registerSuccess: false,
    token: null,
    isAuth: false,
    error: null,
    verified: false,
  },
  reducers: {
    logout: async (state, action) => {
      await storage.removeItem("persist:auth");
      state.isAuth = false;
    },
  },
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
      // state.messageL = action.payload.msg;
      state.token = action.payload.token;
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
    // get user
    [getUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getUser.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.verified = true;
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.verified = false;
      state.error = action.payload;
    },
    // get user
    [getUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getUser.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.verified = true;
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.verified = false;
      state.error = action.payload;
    },
  },
});
const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token", "isAuth"],
};
export const { logout } = userSlice.actions;
export default persistReducer(persistConfig, userSlice.reducer);
