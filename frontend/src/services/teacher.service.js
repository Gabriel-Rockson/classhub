import axios_instance from "./axios.service";

const updateTeacherData = async (id, data) => {
  return await axios_instance.patch(`teachers/${id}/`, {
    first_name: data.first_name,
    middle_name: data.middle_name,
    last_name: data.last_name,
    email: data.email_address,
    grade: data.grade,
    address: data.address,
    cell_number: data.cell_number,
  });
};

const TeacherService = {
  updateTeacherData,
};

export default TeacherService;
