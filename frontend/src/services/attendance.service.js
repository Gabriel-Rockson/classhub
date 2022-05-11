import axios_instance from "./axios.service";

const addStudentAttendance = async (data) => {
  return await axios_instance.post("attendances/", data);
};

const getTodayAttendances = async () => {
  return await axios_instance.get("attendances/today/");
};

const AttendanceService = {
  addStudentAttendance,
  getTodayAttendances,
};

export default AttendanceService;
