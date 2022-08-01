import * as S from "./Messages.styled";
import { FC } from "react";
import Image from "next/image";
import Message from "../Message";

type Props = {
  items?: any;
};

const Messages: FC<Props> = ({ items }) => {
  return items.length ? (
    <S.Messages>
      {" "}
      <Message
        avatar={"/dima.jpg"}
        text={null}
        date={1659102430706}
        isMe={false}
        isRead={false}
        isTyping={false}
        audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.ogg"
      />
      <Message
        avatar={"/andrey.jpg"}
        text={
          "Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут!"
        }
        date={1659102430706}
        isMe={true}
        isRead={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "/andrey.jpg",
          },
          {
            filename: "image.jpg",
            url: "/dima.jpg",
          },
        ]}
        isTyping={false}
      />
      <Message
        avatar={"/andrey.jpg"}
        text={
          "Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут!"
        }
        date={1659102430706}
        isMe={true}
        isRead={true}
        isTyping={false}
      />
      <Message
        avatar={"/andrey.jpg"}
        text={
          "Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут!"
        }
        date={1659102430706}
        isMe={true}
        isRead={true}
        isTyping={false}
      />
      <Message
        avatar={"/andrey.jpg"}
        text={
          "Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут!"
        }
        date={1659102430706}
        isMe={true}
        isRead={true}
        isTyping={false}
      />
      <Message
        avatar={"/andrey.jpg"}
        text={
          "Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут!"
        }
        date={1659102430706}
        isMe={true}
        isRead={true}
        isTyping={false}
      />
      <Message
        avatar={"/andrey.jpg"}
        text={
          "Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут!"
        }
        date={1659102430706}
        isMe={true}
        isRead={true}
        isTyping={false}
      />
      <Message
        avatar={"/andrey.jpg"}
        text={
          "Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут!"
        }
        date={1659102430706}
        isMe={true}
        isRead={true}
        isTyping={false}
      />
      <Message
        avatar={"/andrey.jpg"}
        text={
          "Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут! Салам, Брут!"
        }
        date={1659102430706}
        isMe={true}
        isRead={true}
        isTyping={false}
      />
      <Message
        avatar={"/dima.jpg"}
        text={"Салам, Брут!"}
        date={1658002130706}
        isMe={false}
        isRead={false}
        isTyping={false}
      />
      <Message
        avatar={"/dima.jpg"}
        text={null}
        date={null}
        isMe={false}
        isRead={false}
        attachments={[
          {
            filename: "image.jpg",
            url: "/dima.jpg",
          },
        ]}
        isTyping={false}
      />
      <Message
        avatar={"/andrey.jpg"}
        text={null}
        date={null}
        isMe={true}
        isRead={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "/dima.jpg",
          },
          {
            filename: "image.jpg",
            url: "/dima.jpg",
          },
          {
            filename: "image.jpg",
            url: "/andrey.jpg",
          },
        ]}
        isTyping={false}
      />
      <Message
        avatar={"/dima.jpg"}
        text={null}
        date={null}
        isMe={false}
        isRead={false}
        isTyping={true}
      />
    </S.Messages>
  ) : (
    <S.NoMessages>
      <Image src={"/nomessage.png"} alt={"nodata"} width={64} height={64} />
      <span>Откройте диалог</span>
    </S.NoMessages>
  );
};

export default Messages;
