import axios from "axios";
import authHeader from "./authHeader.service";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios.post(API_URL + "signin", {
        username,
        password
      }).then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("access_token", JSON.stringify(response.data.accessToken))
          localStorage.setItem("roles", JSON.stringify(response.data.roles[0]));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
  }

  register(username, email, password,fullName,birthDate) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      fullName,
      birthDate
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
