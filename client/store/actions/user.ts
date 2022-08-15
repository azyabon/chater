import { userApi } from "../../utils/api";
import axios from "axios";

const actions = {
  setUserData: (data: any) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  setIsAuth: (bool: boolean) => ({
    type: "USER:SET_IS_AUTH",
    payload: bool,
  }),
  fetchUserData: () => (dispatch: any) => {
    userApi
      .getMe()
      .then(({ data }) => {
        dispatch(actions.setUserData(data));
      })
      .catch((err) => {
        if (err.response === 403) {
          dispatch(actions.setIsAuth(false));
          delete window.localStorage.token;
        }
      });
  },
  fetchUserLogin: (postData: any) => (dispatch: any) => {
    return userApi.login(postData).then(({ data }) => {
      window.localStorage["token"] = data.token;
      axios.defaults.headers.common["token"] = data.token;
      dispatch(actions.fetchUserData());
      dispatch(actions.setIsAuth(true));
    });
  },
  fetchUserRegister: (postData: any) => () => {
    return userApi.registr(postData).then(({ data }) => {
      return data;
    });
  },
};

export default actions;
