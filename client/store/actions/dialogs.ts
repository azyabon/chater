import { dialogsApi } from "../../utils/api";
import { IDialog } from "../../types/types";

const actions = {
  setDialogs: (items: IDialog[]) => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items,
  }),
  setCurrentDialogId: (id: string | null) => ({
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
