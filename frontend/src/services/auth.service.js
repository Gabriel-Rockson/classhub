// Services to handle authentication

import axios from "axios";

const AUTH_API_URL = "https://classhub.onrender.com/api/v1/auth/";
// const AUTH_API_URL = "http://localhost:8000/api/v1/auth/";
const auth_axios = axios.create({
  baseURL: AUTH_API_URL,
});

const setUser = (user) => {
  window.localStorage.setItem("user", JSON.stringify(user));
};

const setAccessToken = (token) => {
  window.localStorage.setItem("accessToken", token);
};

const setRefreshToken = (token) => {
  window.localStorage.setItem("refreshToken", token);
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

const login = async (username, password) => {
  return await auth_axios
    .post("login", {
      username,
      password,
    })
    .then((res) => {
      if (res.data.user) {
        const userData = res.data;
        setUser(userData.user);
        if (userData.access) {
          setAccessToken(userData.access);
        }
        if (userData.refresh) {
          setRefreshToken(userData.refresh);
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
        setUser(userData.user);
        if (userData.access) {
          setAccessToken(userData.access);
        }
        if (userData.refresh) {
          setRefreshToken(userData.refresh);
        }
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const refreshToken = async () => {
  return await auth_axios.post("refresh", {
    refresh: getRefreshToken(),
  });
};

const AuthService = {
  auth_axios,
  login,
  logout,
  register,
  refreshToken,
  setUser,
  setAccessToken,
  setRefreshToken,
  getCurrentUser,
  getAccessToken,
  getRefreshToken,
};

export default AuthService;
