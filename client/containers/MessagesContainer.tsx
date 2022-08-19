import React, { FC, RefObject, useEffect } from "react";
import { connect } from "react-redux";
import { messagesAction } from "../store/actions";
import Messages from "../components/Messages";
import find from "lodash/find";
import socket from "../core/socket";
import { IMessage, IUser } from "../types/types";

type Props = {
  items?: IMessage[];
  currentDialogId: string;
  fetchMessages: (id: string) => void;
  addMessage: (message: IMessage) => void;
  isLoading: boolean;
  scroll: RefObject<HTMLDivElement>;
  user: IUser;
  removeMessageById: (id: string) => void;
};

const MessagesContainer: FC<Props> = ({
  items,
  currentDialogId,
  fetchMessages,
  isLoading,
  scroll,
  addMessage,
  user,
  removeMessageById,
}) => {
  const onNewMessage = (data: IMessage) => {
    addMessage(data);
  };

  useEffect((): any => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:MESSAGE_CREATED", onNewMessage);
    return () => socket.removeListener("SERVER:MESSAGE_CREATED", onNewMessage);
  }, [currentDialogId]);

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollTo(0, scroll.current.scrollHeight);
    }
  }, [items]);

  return (
    <Messages
      user={user}
      items={items}
      isLoading={isLoading}
      removeMessage={removeMessageById}
    />
  );
};

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: find(dialogs.items, { _id: dialogs.currentDialogId }),
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesAction
)(MessagesContainer);
