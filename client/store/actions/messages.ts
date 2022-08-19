import { messagesApi } from "../../utils/api";
import { IMessage } from "../../types/types";

const actions = {
  setMessages: (items: IMessage[]) => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items,
  }),
  addMessage: (message: IMessage) => (dispatch: any, getState: any) => {
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
  removeMessageById: (id: string) => (dispatch: any) => {
    if (window.confirm("Вы действительно хотите удалить сообщение?")) {
      messagesApi.removeById(id).then(() => {
        dispatch({
          type: "MESSAGES:REMOVE_MESSAGE",
          payload: id,
        });
      });
    }
  },
  fetchMessages: (dialogId: string) => (dispatch: any) => {
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
