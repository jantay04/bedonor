import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserInfo, IUserLogin, IUserRegister } from "../Types/Type";

type userState = {
  userInfo: object;
};

const initialState: userState = {
  userInfo: [],
};

const API =
  "http://donationapi-env.eba-ucpyqvmr.eu-central-1.elasticbeanstalk.com";

export const RegisterUserAsync = createAsyncThunk(
  "user/RegisterUser",
  async (user: IUserRegister) => {
    try {
      await axios.post(`${API}/auth/register`, user);
    } catch (err) {
      console.log(err);
    }
  }
);

export const LoginUserAsync = createAsyncThunk(
  "user/LoginUserAsync",
  async (user: IUserLogin, { dispatch }) => {
    try {
      let res = await axios.post<IUserInfo>(`${API}/auth/login`);
      dispatch(setLoginUser(res.data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLoginUser } = UserSlice.actions;
export default UserSlice.reducer;
