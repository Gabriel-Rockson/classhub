// Services to handle fetching user related data from the backend
import axios_instance from "./axios.service";
import AuthService from "./auth.service";

const getUserData = async (id) => {
  return await axios_instance(`users/${id}/`).then((response) =>
    AuthService.setUser(response.data)
  );
};

const UserService = {
  getUserData,
};

export default UserService;
