const initialState = {
  data: null,
  isAuth: typeof window !== "undefined" ? !!window.localStorage.token : false,
  token: typeof window !== "undefined" ? window.localStorage.token : null,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "USER:SET_DATA":
      return {
        ...state,
        data: payload,
        isAuth: true,
        token: window.localStorage.token,
      };
    case "USER:SET_IS_AUTH":
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
};
