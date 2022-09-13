import * as S from "./CurrentDialog.styled";
import Image from "next/image";
import MessagesContainer from "../../containers/MessagesContainer";
import { useRef, useState } from "react";
import ChatInputContainer from "../../containers/ChatInputContainer";
import StatusContainer from "../../containers/StatusContainer";
import Link from "next/link";
import { connect } from "react-redux";
import { dialogsActions } from "../../store/actions";

type Props = {
  currentDialogId?: string;
  setCurrentDialogId: any;
};

const CurrentDialog = ({ currentDialogId, setCurrentDialogId }: Props) => {
  const messagesCurrentDialogRef = useRef(null);
  const [option, setOption] = useState(false);
  return (
    <S.CurrentDialog>
      {currentDialogId ? (
        <>
          <S.CurrentDialogHeader>
            <Link href={"/"}>
              <Image
                src={"/close.png"}
                width={10}
                height={10}
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentDialogId(null)}
              />
            </Link>
            <S.CurrentDialogUser>
              <StatusContainer />
            </S.CurrentDialogUser>
            <S.OptionContainer onClick={() => setOption(true)}>
              <Image src={"/option.png"} width={20} height={20} />
            </S.OptionContainer>
            <S.CurrentDialogMenu
              show={option}
              onMouseLeave={() => setOption(false)}
            >
              <span>Profile</span>
              <span>Add friend</span>
              <span>Banned user</span>
              <span>Deleted dialog</span>
            </S.CurrentDialogMenu>
          </S.CurrentDialogHeader>
          <S.CurrentDialogChat ref={messagesCurrentDialogRef}>
            <MessagesContainer scroll={messagesCurrentDialogRef} />
          </S.CurrentDialogChat>
          <ChatInputContainer />
        </>
      ) : (
        <S.NoDialog>
          <Image src={"/nomessage.png"} alt={"nodata"} width={64} height={64} />
          <span>Откройте диалог</span>
        </S.NoDialog>
      )}
    </S.CurrentDialog>
  );
};

export default connect(
  ({ dialogs }) => ({
    currentDialogId: dialogs.currentDialogId,
  }),
  dialogsActions
)(CurrentDialog);
