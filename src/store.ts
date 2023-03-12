import { configureStore, applyMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//import { rootReducer } from "./reducers";
import { userSlice } from "./services/user/slice";
export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
