import axios from "axios";
import { BaseURL } from "../../../Url";

// const API_URL = "http://localhost:5000/api/users/";
const API_URL = `${BaseURL}/api/users/`;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  // console.log(response.response.data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    // window.localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    // localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = { register, login, logout };

export default authService;
