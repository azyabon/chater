import * as S from "./CurrentDialog.styled";
import Image from "next/image";
import Message from "../Message";
import ChatInput from "../ChatInput";

const CurrentDialog = () => {
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
      <S.CurrentDialogChat>
        <Message
          avatar={"/dima.jpg"}
          text={null}
          date={1659102430706}
          isMe={false}
          isRead={false}
          isTyping={false}
          audio="https://notificationsounds.com/storage/sounds/file-sounds-1153-piece-of-cake.ogg"
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
      </S.CurrentDialogChat>
      <ChatInput />
    </S.CurrentDialog>
  );
};

export default CurrentDialog;
