import axios from "axios";
import { store } from "../redux/store";

export type ServiceData = {
  email: string;
  password: string;
};

export type UserData = {
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  updatedAt: string;
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
  } catch (error) {
    console.error(error);
    return "an error occured";
  }
};

const logout = async (): Promise<void | string> => {
  try {
    store.dispatch({ type: "LOGOUT", payload: null });
  } catch (error) {
    console.error(error);
    return "an error occured";
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
    console.log(response);
    return response.data.body;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const userService = {
  login,
  logout,
  getUserData,
};
