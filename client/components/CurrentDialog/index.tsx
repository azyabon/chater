import * as S from "./CurrentDialog.styled";
import Image from "next/image";
import ChatInput from "../ChatInput";
import MessagesContainer from "../../containers/MessagesContainer";
import { useRef } from "react";

const CurrentDialog = () => {
  const messagesCurrentDialogRef = useRef(null);
  return (
    <S.CurrentDialog>
      <S.CurrentDialogHeader>
        <div />
        <S.CurrentDialogUser>
          <b>Дима Матюшкин</b>
          <S.CurrentDialogStatus online={true}>
            {/*потом по необходимости перенести в отдельный компонент https://www.youtube.com/watch?v=VLi5k9o8OGA&list=PL0FGkDGJQjJFDr8R3D6dFVa1nhce_2-ly&index=7 (1:08:52)*/}
            <div>онлайн</div>
          </S.CurrentDialogStatus>
        </S.CurrentDialogUser>
        <div style={{ minWidth: "20px", cursor: "pointer" }}>
          <Image src={"/option.png"} width={20} height={20} />
        </div>
      </S.CurrentDialogHeader>
      <S.CurrentDialogChat ref={messagesCurrentDialogRef}>
        <MessagesContainer scroll={messagesCurrentDialogRef} />
      </S.CurrentDialogChat>
      <ChatInput />
    </S.CurrentDialog>
  );
};

export default CurrentDialog;
