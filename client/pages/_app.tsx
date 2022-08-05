import type { AppProps } from "next/app";
import { CommonStyledWrap } from "../styled";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CommonStyledWrap>
        <Component {...pageProps} />
      </CommonStyledWrap>
    </Provider>
  );
}

export default MyApp;
