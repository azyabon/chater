import type { AppProps } from "next/app";
import { CommonStyledWrap } from "../styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommonStyledWrap>
      <Component {...pageProps} />
    </CommonStyledWrap>
  );
}

export default MyApp;
