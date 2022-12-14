import * as S from "./Dialog.styled";
import { FC } from "react";
import MessageStatus from "../MessageStatus";
import { format, isToday, isYesterday } from "date-fns";
import Avatar from "../Avatar";
import Link from "next/link";
import { IMessage, IUser } from "../../types/types";
import enUS from "date-fns/locale/en-US";

type Props = {
  user: IUser | undefined;
  lastMessage: IMessage;
  unRead: number;
  isMe: boolean;
  isRead: boolean;
  onSelect: (id: string) => void;
  _id: string;
  currentDialogId: any;
  partner: IUser;
  author: IUser;
};

const getMessageTime = (created_at: any) => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else if (isYesterday(created_at)) {
    return `Yesterday in  ${format(created_at, "HH:mm")}`;
  }
  return format(created_at, "dd/MM/yyyy");
};
const Dialog: FC<Props> = ({
  lastMessage,
  unRead,
  isMe,
  _id,
  currentDialogId,
  partner,
  onSelect,
  isRead,
  author,
}) => {
  return (
    <Link href={`/`} as={`/dialog/${_id}`}>
      <S.Dialog
        active={currentDialogId === _id}
        onClick={() => {
          //TODO: костыль переписать
          setTimeout(() => {
            onSelect(window.location.pathname.split("dialog/")[1]);
          }, 0);
        }}
      >
        <S.DialogAvatar online={partner.isOnline}>
          <Avatar user={partner} />
        </S.DialogAvatar>
        <S.DialogInfo>
          <S.DialogInfoTop>
            <b>{partner.fullName}</b>
            <span>
              {getMessageTime(Date.parse(lastMessage?.createdAt.toString()))}
            </span>
          </S.DialogInfoTop>
          <S.DialogInfoBottom>
            <p>{lastMessage.text}</p>
            {isMe && <MessageStatus isMe={true} isRead={isRead} />}
            {unRead > 0 && (
              <S.MessageCounter>
                {unRead > 999 ? "+999" : unRead}
              </S.MessageCounter>
            )}
          </S.DialogInfoBottom>
        </S.DialogInfo>
      </S.Dialog>
    </Link>
  );
};

export default Dialog;
