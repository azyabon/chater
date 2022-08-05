import { messagesApi } from "../../utils/api";

const actions = {
  setMessages: (items: any) => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items,
  }),
  setIsLoading: (bool: boolean) => ({
    type: "MESSAGES:SET_IS_LOADING",
    payload: bool,
  }),
  fetchMessages: (dialogId: string | number) => (dispatch: any) => {
    dispatch(actions.setIsLoading(true));
    messagesApi
      .getAllByDialogId(dialogId)
      .then(({ data }) => {
        dispatch(actions.setMessages(data));
        dispatch(actions.setIsLoading(false));
      })
      .catch(() => {
        dispatch(actions.setIsLoading(false));
      });
  },
};

export default actions;
