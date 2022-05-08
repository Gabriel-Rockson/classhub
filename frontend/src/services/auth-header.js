import AuthService from "./auth.service";

export default function authHeader() {
  const user = AuthService.getCurrentUser();

  if (user) {
    return {
      Authorization: `Bearer ${user.access}`,
    };
  } else {
    return {};
  }
}
