const initialState = {
  items: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "MESSAGES:SET_ITEMS":
      console.log(2);
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case "MESSAGES:SET_IS_LOADING":
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
