import axios from "axios";
import authHeader from "./auth-header";

const AUTH_API_URL = "http://localhost:8000/api/v1/students/";

const student_axios = axios.create({
  baseURL: AUTH_API_URL,
  headers: authHeader(),
  withCredentials: true,
});

const getStudentList = async () => {
  return await student_axios.get("/");
};

const addStudent = async (data) => {
  return await student_axios.post("/", data);
};

const StudentService = {
  getStudentList,
  addStudent,
};

export default StudentService;
