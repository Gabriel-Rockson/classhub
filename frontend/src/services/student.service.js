import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const AUTH_API_URL = "http://localhost:8000/api/v1/students/";

const student_axios = axios.create({
  baseURL: AUTH_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

student_axios.interceptors.request.use(
  (config) => {
    config.headers = { ...config.headers, ...authHeader() };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

student_axios.interceptors.response.use(
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
            student_axios.defaults.headers.common = {
              ...student_axios.defaults.headers.common,
              ...authHeader(),
            };
            // TODO find a better way to refresh the page without reloading
            window.location.reload(); 
            return student_axios(originalConfig);
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

const getStudentList = async () => {
  return await student_axios.get("/");
};

const getStudentData = async (student_uid) => {
  return await student_axios.get(`${student_uid}/`);
};

const addStudent = async (data) => {
  return await student_axios.post("/", data);
};

const StudentService = {
  getStudentList,
  getStudentData,
  addStudent,
};

export default StudentService;
