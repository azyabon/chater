import { FC, ReactNode } from "react";
import { GlobalResetStyles } from "./GlobalResetStyles";
import { GlobalCommonStyles } from "./GlobalCommonStyles";

interface IGlobal {
  children: ReactNode;
}

export const CommonStyledWrap: FC<IGlobal> = ({ children }) => {
  return (
    <>
      <GlobalResetStyles />
      <GlobalCommonStyles />
      {children}
    </>
  );
};
