import React, { FC, ReactNode } from "react";
import * as S from "./ShadowBlock.styled";
import { CSSObject } from "@emotion/react";

interface IShadowBlock {
  children?: ReactNode;
  style?: CSSObject | object;
}

const ShadowBlock: FC<IShadowBlock> = ({ children, style = {} }) => {
  return <S.ShadowBlock style={style}>{children}</S.ShadowBlock>;
};

export default ShadowBlock;
