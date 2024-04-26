import { configureStore } from "@reduxjs/toolkit";

const state = {
  value: null,
  list: ["toto", "tata"],
};

const reducer = (currentState: any, action: any) => {
  switch (action.type) {
    case "GOGO": {
      const listWithNewProduct = [...currentState.list, action.payload];
      return { ...currentState, list: listWithNewProduct };
    }
    default:
      return currentState;
  }
};

export const store = configureStore({ preloadedState: state, reducer });
