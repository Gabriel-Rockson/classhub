import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const BASE_API_URL = "https://students-classhub.herokuapp.com/api/v1/";
// const BASE_API_URL = "http://localhost:8000/api/v1/";

const axios_instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axios_instance.interceptors.request.use(
  (config) => {
    config.headers = { ...config.headers, ...authHeader() };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios_instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalConfig = error.config;
    // TODO if the original config has _retry = true, navigate to the homepage

    if (error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        AuthService.refreshToken()
          .then((res) => {
            AuthService.setAccessToken(res.data.access);
            axios_instance.defaults.headers.common = {
              ...axios_instance.defaults.headers.common,
              ...authHeader(),
            };
            // TODO find a better way to refresh the page without reloading
            window.location.reload();
            return axios_instance(originalConfig);
          })
          .catch((_error) => {
            if (_error.response && _error.response?.data) {
              AuthService.logout();
              // ! BUG - Unexpected token "<"
              // return <Navigate to="/app/login" replace={true } />
              console.log("An error occured here");
            }
            return Promise.reject(_error);
          });
      }
    }

    return Promise.reject(error);
  }
);

export default axios_instance;
