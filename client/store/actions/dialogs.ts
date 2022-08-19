import { dialogsApi } from "../../utils/api";
import { Dialog } from "../../types/types";

const actions = {
  setDialogs: (items: Dialog[]) => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items,
  }),
  setCurrentDialogId: (id: string) => ({
    type: "DIALOGS:SET_CURRENT_DIALOG_ID",
    payload: id,
  }),
  fetchDialogs: () => (dispatch: any) => {
    dialogsApi.getAll().then(({ data }) => {
      dispatch(actions.setDialogs(data));
    });
  },
};

export default actions;
