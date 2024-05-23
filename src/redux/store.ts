import { configureStore, Reducer } from "@reduxjs/toolkit";
import { UserData } from "../services";
import { Action } from "redux";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

export type State = {
  value: null | string;
  token: null | string;
  userInfos: null | UserData;
};

const state = {
  value: null,
  token,
  userInfos: null,
};
const reducer: Reducer<State, Action> = (currentState = state, action) => {
  switch (action.type) {
    case "LOGIN": {
      const { payload } = action as { payload?: string };
      localStorage.setItem("token", payload!);
      return {
        ...currentState,
        token: payload!,
      };
    }
    case "LOGOUT": {
      localStorage.removeItem("token");
      return {
        ...currentState,
        token: null,
      };
    }
    default:
      return currentState;
  }
};

export const store = configureStore({ preloadedState: state, reducer });

export type RootState = ReturnType<typeof store.getState>;
