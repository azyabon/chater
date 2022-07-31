import * as S from "./Chat.styled";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode | undefined;
};

const Chat: FC<Props> = ({ children }) => {
  return <S.Chat>{children}</S.Chat>;
};

export default Chat;
