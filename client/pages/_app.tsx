import type { AppProps } from "next/app";
import { CommonStyledWrap } from "../styled";
import { Provider } from "react-redux";
import store from "../store/store";
import { userAction } from "../store/actions";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    store.dispatch(userAction.fetchUserData());
  }, []);
  return (
    <Provider store={store}>
      <CommonStyledWrap>
        <Component {...pageProps} />
      </CommonStyledWrap>
    </Provider>
  );
}

export default MyApp;
