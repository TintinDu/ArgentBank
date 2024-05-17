import axios from "axios";

// localStorage.setItem(token) au moment où on se connecte

type ServiceData = {
  email: string;
  password: string;
};

type UserData = {
  id: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
};

const login = async (serviceData: ServiceData): Promise<string> => {
  try {
    const response = await axios({
      method: "post",
      url: "http://127.0.0.1:3001/api/v1/user/login",
      data: serviceData,
    });

    localStorage.setItem("token", response.data.body.token);
    return response.data.body.token;
  } catch (error) {
    console.error(error);
    return "an error occured";
  }
};

const getUserData = async (userId: string): Promise<UserData | void> => {
  try {
    const response = await axios({
      method: "post",
      url: `http://127.0.0.1:3001/api/v1/user/profile/${userId}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const userService = {
  login,
  getUserData,
};
