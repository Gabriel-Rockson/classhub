import axios_instance from "./axios.service";

const getClassList = async () => {
  return await axios_instance.get("classes/");
};

const getClassData = async (id) => {
  return await axios_instance.get(`classes/${id}/`);
};

const getGradeAttendaces = async (id) => {
  return await axios_instance.get(`classes/attendances/${id}/`);
};

const ClassService = {
  getClassList,
  getClassData,
  getGradeAttendaces,
};

export default ClassService;
