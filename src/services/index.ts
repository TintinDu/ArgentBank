import axios from "axios";

const getUserData = async (userId: string): Promise<any> => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:3001/profile/${userId}`,
    );
    console.log(response);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const userService = {
  getUserData,
};
