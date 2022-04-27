import axios from "axios";

const API_URL = "http://localhost:8080/admin/";

class AuthServiceDoctor {

  register(username, email, password,fullName,birthDate,scheduleId) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      fullName,
      birthDate,
      scheduleId
    });
  }
  
}

export default new AuthServiceDoctor();