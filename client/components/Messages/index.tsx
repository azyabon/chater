import * as S from "./Messages.styled";
import { FC } from "react";
import Image from "next/image";
import Message from "../Message";
import { ThreeCircles } from "react-loader-spinner";

type Props = {
  items?: any;
  isLoading: boolean;
  user: any;
};

const Messages: FC<Props> = ({ items, isLoading, user }) => {
  console.log(user);
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
      ) : items && !isLoading ? (
        items.map((item: any) => (
          <Message {...item} isMe={user._id === item.user._id} />
        ))
      ) : (
        <S.NoMessages>
          <Image src={"/nomessage.png"} alt={"nodata"} width={64} height={64} />
          <span>Откройте диалог</span>
        </S.NoMessages>
      )}
    </S.Messages>
  );
};

export default Messages;
