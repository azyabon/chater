import { messagesApi } from "../../utils/api";

const actions = {
  setMessages: (items: any) => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items,
  }),
  addMessage: (message: any) => (dispatch: any, getState: any) => {
    const { dialogs } = getState();
    const { currentDialogId } = dialogs;

    if (currentDialogId === message.dialog._id) {
      dispatch({
        type: "MESSAGES:ADD_MESSAGE",
        payload: message,
      });
    }
  },
  fetchSendMessage: (text: string, dialogId: string) => (dispatch: any) => {
    messagesApi.send(text, dialogId);
  },
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
