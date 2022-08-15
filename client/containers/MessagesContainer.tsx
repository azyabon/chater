import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { messagesAction } from "../store/actions";
import Messages from "../components/Messages";
import find from "lodash/find";
import socket from "../core/socket";

type Props = {
  items?: any;
  currentDialogId: any;
  fetchMessages: any;
  addMessage: any;
  isLoading: boolean;
  scroll: any;
  user: any;
};

const MessagesContainer: FC<Props> = ({
  items,
  currentDialogId,
  fetchMessages,
  isLoading,
  scroll,
  addMessage,
  user,
}) => {
  const onNewMessage = (data: any) => {
    addMessage(data);
  };

  useEffect((): any => {
    if (currentDialogId) {
      fetchMessages(currentDialogId._id);
    }
    socket.on("SERVER:MESSAGE_CREATED", onNewMessage);
    return () => socket.removeListener("SERVER:MESSAGE_CREATED", onNewMessage);
  }, [currentDialogId]);

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollTo(0, scroll.current.scrollHeight);
    }
  }, [items]);

  return <Messages user={user} items={items} isLoading={isLoading} />;
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
