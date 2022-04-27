import axios from "axios";

const API_URL = "http://localhost:8080/admin/";
const user = JSON.parse(localStorage.getItem('user'));
const token = user.accessToken

class AuthServiceDoctor {
  register(username, email, password,fullName,birthDate,scheduleId) {
    return axios.post(API_URL + "signup", { headers: {'Authorization': `Bearer ${token}`} }, {
      username,
      email,
      password,
      fullName,
      birthDate,
      scheduleId

      // return axios.get(API_URL + 'user', { headers: authHeader() });
    });
  }
  
}

export default new AuthServiceDoctor();