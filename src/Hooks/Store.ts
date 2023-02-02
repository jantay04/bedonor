import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import UserSlice from "../SlicesRT/UserSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
