import * as S from "./CurrentDialog.styled";
import Image from "next/image";
import MessagesContainer from "../../containers/MessagesContainer";
import { useRef } from "react";
import ChatInputContainer from "../../containers/ChatInputContainer";
import StatusContainer from "../../containers/StatusContainer";

const CurrentDialog = () => {
  const messagesCurrentDialogRef = useRef(null);
  return (
    <S.CurrentDialog>
      <S.CurrentDialogHeader>
        <div style={{ cursor: "pointer" }}>
          <Image src={"/close.png"} width={10} height={10} />
        </div>
        <S.CurrentDialogUser>
          <StatusContainer />
        </S.CurrentDialogUser>
        <div style={{ minWidth: "20px", cursor: "pointer" }}>
          <Image src={"/option.png"} width={20} height={20} />
        </div>
      </S.CurrentDialogHeader>
      <S.CurrentDialogChat ref={messagesCurrentDialogRef}>
        <MessagesContainer scroll={messagesCurrentDialogRef} />
      </S.CurrentDialogChat>
      <ChatInputContainer />
    </S.CurrentDialog>
  );
};

export default CurrentDialog;
