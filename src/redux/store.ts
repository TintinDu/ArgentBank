import { configureStore } from "@reduxjs/toolkit";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const state = {
  value: null,
  token,
  userInfos: null,
};

const reducer = (currentState: any, action: any) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("token", action.payload);
      return {
        ...currentState,
        token: action.payload,
      };
    }
    default:
      return currentState;
  }
};

export const store = configureStore({ preloadedState: state, reducer });
