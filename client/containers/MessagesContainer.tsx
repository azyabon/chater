import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { messagesAction } from "../store/actions";
import Messages from "../components/Messages";

type Props = {
  items?: any;
  currentDialogId: string | number;
  fetchMessages: any;
  isLoading: boolean;
  scroll: any;
};

const MessagesContainer: FC<Props> = ({
  items,
  currentDialogId,
  fetchMessages,
  isLoading,
  scroll,
}) => {
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollTo(0, scroll.current.scrollHeight);
    }
  }, [items]);

  return <Messages items={items} isLoading={isLoading} />;
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
  }),
  messagesAction
)(MessagesContainer);
