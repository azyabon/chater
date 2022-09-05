import * as S from "./Messages.styled";
import { FC } from "react";
import Image from "next/image";
import Message from "../Message";
import { ThreeCircles } from "react-loader-spinner";
import { IMessage, IUser } from "../../types/types";

type Props = {
  items?: IMessage[];
  isLoading: boolean;
  user: IUser;
  removeMessage: any;
};

const Messages: FC<Props> = ({ items, isLoading, user, removeMessage }) => {
  console.log(items);
  if (!items?.length) {
    return <></>;
  }
  return (
    <S.Messages>
      {isLoading ? (
        <div
          style={{
            height: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThreeCircles
            height="120"
            width="120"
            color="#9b9b9b"
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </div>
      ) : (
        items.map((item: IMessage) => (
          <Message
            isTyping={false}
            key={item._id}
            date={item.createdAt}
            {...item}
            isMe={user._id === item.user._id}
            removeMessage={removeMessage.bind(this, item._id)}
          />
        ))
      )}
    </S.Messages>
  );
};

export default Messages;
