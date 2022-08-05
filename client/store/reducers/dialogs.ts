const initialState = {
  items: [],
  currentDialogId: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "DIALOGS:SET_ITEMS":
      return {
        ...state,
        items: payload,
      };
    case "DIALOGS:SET_CURRENT_DIALOG_ID":
      console.log(payload, 1);
      return {
        ...state,
        currentDialogId: payload,
      };
    default:
      return state;
  }
};
