import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./Store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelecctor: TypedUseSelectorHook<RootState> = useSelector;
