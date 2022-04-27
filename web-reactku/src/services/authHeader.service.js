export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if (user && user.accessToken) {
      return { "Content-type": "application/json",
      Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    } else {
      return {};
    }
}