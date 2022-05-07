// Services to handle authentication

import axios from "axios";

const AUTH_API_URL = "http://localhost:8000/api/v1/auth/";

const auth_axios = axios.create({
  baseURL: AUTH_API_URL,
});

const login = async (username, password) => {
  return await auth_axios
    .post("login", {
      username,
      password,
    })
    .then((res) => {
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
};

const register = async (username, email, password) => {
  return await auth_axios
    .post("register", {
      username,
      email,
      password,
    })
    .then((res) => {
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  auth_axios,
  login,
  logout,
  register,
  getCurrentUser,
};

export default AuthService;
