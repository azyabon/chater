import { Global, css } from "@emotion/react";

export const GlobalCommonStyles: any = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        font-family: "Montserrat", Arial, "sans-serif";
      }
      #__next {
      }
      html,
      body,
      #__next {
        height: 100%;
      }

      body {
        font-family: "Montserrat", Arial, "sans-serif";
        font-size: 16px;
        background-color: #f4f7fd;
        color: #202020;
        height: 100%;
      }

      input {
        font-family: "Montserrat-Regular", Arial, "sans-serif";
      }

      a {
        transition: color ease-out 0.3s;
      }
    `}
  />
);
