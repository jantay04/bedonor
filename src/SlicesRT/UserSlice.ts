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
      let res = await axios.post<IUserInfo>(`${API}/auth/login`, user);
      dispatch(setLoginUser(res.data));
    } catch (err) {
      console.log(err);
    }
  }
);
export const ResetPassAync = createAsyncThunk(
  "user/ResetPassAync",
  async (email: object, { dispatch }) => {
    try {
      await axios.post<IUserInfo>(`${API}/auth/reset`, email);
    } catch (err) {
      console.log(err);
    }
  }
);

// export const GetTotalUserInfo = createAsyncThunk(
//   "user/ResetPassAcync",
//   async () => {
//     try {
//       let res = await axios(`${API}`)
//     } catch (err) {
//       console.log(errs);
//     }
//   }
// );

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
  },
});

export const { setLoginUser } = UserSlice.actions;
export default UserSlice.reducer;
