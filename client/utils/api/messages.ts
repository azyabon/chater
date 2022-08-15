import axios from "../../core/axios";

export default {
  getAllByDialogId: (dialogId: string | number) =>
    axios.get("/messages?dialog=" + dialogId),
  send: (text: string, dialogId: string) =>
    axios.post("/messages", {
      text,
      dialogId,
    }),
};
