// Services to handle authentication

import axios from "axios";

const AUTH_API_URL = "http://localhost:8000/api/v1/auth/";

const auth_axios = axios.create({
  baseURL: AUTH_API_URL,
});

const setUser = (user) => {
  JSON.stringify(window.localStorage.setItem("user", user));
};

const setAccessToken = (user) => {
  window.localStorage.setItem("accessToken", user.access);
};

const setRefreshToken = (user) => {
  window.localStorage.setItem("refreshToken", user.refresh);
};

const login = async (username, password) => {
  return await auth_axios
    .post("login", {
      username,
      password,
    })
    .then((res) => {
      if (res.data.user) {
        const userData = res.data;
        setUser(userData);
        if (userData.access) {
          setAccessToken(userData);
        }
        if (userData.refresh) {
          setRefreshToken(userData);
        }
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
        const userData = res.data;
        setUser(userData);
        if (userData.access) {
          setAccessToken(userData);
        }
        if (userData.refresh) {
          setRefreshToken(userData);
        }
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

const getAccessToken = () => {
  return window.localStorage.getItem("accessToken");
};

const getRefreshToken = () => {
  return window.localStorage.getItem("refreshToken");
};

const AuthService = {
  auth_axios,
  login,
  logout,
  register,
  getCurrentUser,
  getAccessToken,
  getRefreshToken,
};

export default AuthService;
