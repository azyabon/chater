import axios from "../../core/axios";

export default {
  login: (postData: any) => axios.post("/user/login", postData),
  registr: (postData: any) => axios.post("/user/registration", postData),
  verifyHash: (hash: string) => axios.get(`/user/verify?hash=${hash}`),
  getMe: () => axios.get("/user/me"),
};
