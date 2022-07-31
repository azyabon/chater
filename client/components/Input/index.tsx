import * as S from "./Input.styled";
import { FC, ReactNode } from "react";
import { CSSObject } from "@emotion/react";

interface IInput {
  style?: CSSObject | object;
  placeholder?: string;
  type?: string;
  id: string;
  text?: string;
  name?: string;
  onChange?: (elem: any) => any;
  onBlur?: (elem: any) => any;
  value: string;
}

const Input: FC<IInput> = ({
  type = "text",
  placeholder,
  style = {},
  id,
  text,
  name,
  onChange,
  value,
}) => {
  return (
    <S.FormItem>
      <S.Label htmlFor={id}>{text}</S.Label>
      <S.Input
        type={type}
        placeholder={placeholder}
        style={style}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </S.FormItem>
  );
};

export default Input;
