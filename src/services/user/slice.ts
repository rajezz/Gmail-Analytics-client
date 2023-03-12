import { createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user";

const userEntity = createEntityAdapter<User>();

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: userEntity.getInitialState(),
    },
    reducers: {
        addUser(state, { payload: { user } }: PayloadAction<{ user: User }>) {
            userEntity.addOne(state.user, user);
        },
    },
});

export const userActions = userSlice.actions;

export type UserSlice = {
    [userSlice.name]: ReturnType<(typeof userSlice)["reducer"]>;
};

export const userSelectors = userEntity.getSelectors<UserSlice>((state) => state[userSlice.name].user);
