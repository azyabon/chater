import React, { FC, ReactNode } from "react";
import * as S from "./Button.styled";
import { CSSObject } from "@emotion/react";

interface IButton {
  children?: ReactNode;
  style?: CSSObject | object;
  disabled?: boolean;
  onClick?: () => any;
  type?: "button" | "reset" | "submit" | undefined;
}

const Button: FC<IButton> = ({
  children,
  style = {},
  disabled,
  onClick,
  type,
}) => {
  return (
    <S.Button type={type} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </S.Button>
  );
};

export default Button;
