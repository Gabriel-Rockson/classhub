import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const BASE_API_URL = "http://localhost:8000/api/v1/";

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
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.reponse.data);
            }
            return Promise.reject(_error);
          });
      }
    }

    return Promise.reject(error);
  }
);

export default axios_instance;