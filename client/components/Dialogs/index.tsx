import * as S from "./Dialogs.styled";
import Dialog from "../Dialog";
import { FC } from "react";
import { orderBy } from "lodash";

type Props = {
  items: any;
  userId: number;
};

const Dialogs: FC<Props> = ({ items, userId }) => {
  return (
    <S.Dialogs>
      {orderBy(items, ["created_at"], ["desc"]).map((item) => (
        <Dialog
          key={item.user._id}
          user={item.user}
          message={item}
          unRead={0}
          isMe={item.user._id === userId}
          isRead={item.isRead}
        />
      ))}
    </S.Dialogs>
  );
};

export default Dialogs;
