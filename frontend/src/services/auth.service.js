// Services to handle authentication

import axios from "axios";

const AUTH_API_URL = "http://localhost:8000/api/v1/auth/";

const auth_axios = axios.create({
  baseURL: AUTH_API_URL,
});

const login = async (username, password) => {
  return await auth_axios.post("login", {
    username,
    password,
  });
};

const register = async (username, email, password) => {
  return await auth_axios.post("register", {
    username,
    email,
    password,
  });
};

const AuthService = {
  auth_axios,
  login,
  register,
};

export default AuthService;
