import axios from "../../core/axios";

export default {
  getAll: () => axios.get("/dialogs"),
  create: (postData: any) => axios.post("/dialogs", postData),
};
