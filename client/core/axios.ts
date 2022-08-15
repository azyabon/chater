import axios from "axios";

axios.defaults.baseURL = "http://localhost:3003";
if (typeof window !== "undefined") {
  axios.defaults.headers.common["token"] = window.localStorage.token;
}

export default axios;
