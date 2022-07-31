import * as S from "./Dialog.styled";
import { FC } from "react";
import MessageStatus from "../MessageStatus";
import { format, isToday, isTomorrow } from "date-fns";
import Avatar from "../Avatar";

type Props = {
  user: any;
  message: any;
  unRead: number;
  isMe: boolean;
  isRead: boolean;
};

const getMessageTime = (created_at: any) => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else if (isTomorrow(created_at)) {
    return `Вчера в  ${format(created_at, "HH:mm")}`;
  }
  return format(created_at, "dd/MM/yyyy");
};

const Dialog: FC<Props> = ({ user, message, unRead, isMe, isRead }) => {
  return (
    <S.Dialog>
      <S.DialogAvatar online={user.isOnline}>
        <Avatar user={user} />
      </S.DialogAvatar>
      <S.DialogInfo>
        <S.DialogInfoTop>
          <b>{user.fullName}</b>
          <span>{getMessageTime(message.created_at)}</span>
        </S.DialogInfoTop>
        <S.DialogInfoBottom>
          <p style={{ flex: 1 }}>{message.text}</p>
          {isMe && <MessageStatus isMe={true} isRead={isRead} />}
          {unRead > 0 && (
            <S.MessageCounter>
              {unRead > 999 ? "+999" : unRead}
            </S.MessageCounter>
          )}
        </S.DialogInfoBottom>
      </S.DialogInfo>
    </S.Dialog>
  );
};

export default Dialog;
