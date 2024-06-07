import { configureStore, Reducer } from "@reduxjs/toolkit";
import { UserData } from "../services";
import { Action } from "redux";
import { ACTION } from "./action";

const token =
  (localStorage.getItem("token") || sessionStorage.getItem("token")) ?? null;

const userInfos =
  localStorage.getItem("userInfos") ||
  sessionStorage.getItem("userInfos") ||
  null;

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

type LoginPayload = {
  token: string;
  rememberMe: boolean;
};

const reducer: Reducer<State, Action> = (currentState = state, action) => {
  switch (action.type) {
    case ACTION.LOGIN: {
      const { payload } = action as { payload?: LoginPayload };

      if (!payload) {
        return currentState;
      }

      if (!payload.rememberMe) {
        sessionStorage.setItem("token", payload.token);
      }
      if (payload.rememberMe) {
        localStorage.setItem("token", payload.token);
      }

      return {
        ...currentState,
        token: payload.token,
      };
    }

    case ACTION.LOGOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfos");
      sessionStorage.removeItem("userInfos");
      sessionStorage.removeItem("userInfos");
      return {
        ...currentState,
        token: null,
        userInfos: null,
      };
    }
    case ACTION.SET_USER_DATA: {
      const { payload } = action as { payload?: UserData };
      sessionStorage.setItem("userInfos", JSON.stringify(payload));
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
