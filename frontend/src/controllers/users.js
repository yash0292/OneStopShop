import axios from "axios";

export const getUsers = async () => {
  try {
    const users = await axios.get("http://localhost:8080/api/auth/");
    console.log(users.data);
    return users.data;
  } catch (error) {
    console.log(error);
  }
};
