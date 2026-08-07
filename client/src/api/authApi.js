import axios from "axios";

const API = axios.create({
  baseURL: "https://mangal-shringar-ecommerce.onrender.com/api",
});


// Register
export const registerUser = (data) => {
  return API.post("/auth/register", data);
};


// Login
export const loginUser = (data) => {
  return API.post("/auth/login", data);
};