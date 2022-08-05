import { dialogsApi } from "../../utils/api";

const actions = {
  setDialogs: (items: any) => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items,
  }),
  setCurrentDialogId: (id: string | number) => ({
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
