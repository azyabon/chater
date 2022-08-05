import axios from "../../core/axios";

export default {
  getAllByDialogId: (dialogId: string | number) =>
    axios.get("/messages?dialog_id=" + dialogId),
};
