import axios from "axios";
import { store } from "../redux/store";

export type ServiceData = {
  email: string;
  password: string;
};

export type UserData = {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
};

const login = async (serviceData: ServiceData): Promise<void | string> => {
  try {
    const response = await axios({
      method: "post",
      url: "http://127.0.0.1:3001/api/v1/user/login",
      data: serviceData,
    });

    const token = response.data.body.token;

    store.dispatch({ type: "LOGIN", payload: token });

    return token;
  } catch (error) {
    console.error(error);
    return "Error logging in user";
  }
};

const getUserData = async (token: string): Promise<UserData | void> => {
  try {
    const response = await axios({
      method: "post",
      url: `http://127.0.0.1:3001/api/v1/user/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    store.dispatch({ type: "SET_USER_DATA", payload: response.data.body });

    return response.data.body;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const logout = async (): Promise<void | string> => {
  try {
    store.dispatch({ type: "LOGOUT", payload: null });
  } catch (error) {
    console.error(error);
    return "Error logging out user";
  }
};

const updateUserData = async (payload: {
  firstName: string;
  lastName: string;
}): Promise<void> => {
  try {
    const token = store.getState().token;
    if (token) {
      const response = await axios({
        method: "put",
        url: `http://127.0.0.1:3001/api/v1/user/profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: payload,
      });
      return response.data.body;
    }
  } catch (error) {
    console.error("Error updating user data:", error);
  }
};

export const userService = {
  login,
  logout,
  getUserData,
  updateUserData,
};
