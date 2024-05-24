import { configureStore, Reducer } from "@reduxjs/toolkit";
import { UserData } from "../services";
import { Action } from "redux";
import { ACTION } from "./action";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const userInfos = localStorage.getItem("userInfos") || null;

export type State = {
  value: null | string;
  token: null | string;
  userInfos: null | UserData;
};

const state = {
  value: null,
  token,
  userInfos: userInfos ? JSON.parse(userInfos) : null,
};
const reducer: Reducer<State, Action> = (currentState = state, action) => {
  switch (action.type) {
    case ACTION.LOGIN: {
      const { payload } = action as { payload?: string };
      localStorage.setItem("token", payload!);
      return {
        ...currentState,
        token: payload!,
      };
    }
    case ACTION.LOGOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfos");
      return {
        ...currentState,
        token: null,
        userInfos: null,
      };
    }
    case ACTION.SET_USER_DATA: {
      const { payload } = action as { payload?: UserData };
      localStorage.setItem("userInfos", JSON.stringify(payload));

      return {
        ...currentState,
        userInfos: payload!,
      };
    }
    default:
      return currentState;
  }
};

export const store = configureStore({ preloadedState: state, reducer });

export type RootState = ReturnType<typeof store.getState>;
