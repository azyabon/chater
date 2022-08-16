import React, { FC } from "react";
import ChatInput from "../components/ChatInput";
import { connect } from "react-redux";
import { messagesAction } from "../store/actions";

type Props = {
  fetchSendMessage?: any;
  currentDialogId?: string;
};

const ChatInputContainer: FC<Props> = ({
  fetchSendMessage,
  currentDialogId,
}) => {
  return (
    <ChatInput
      onSendMessage={fetchSendMessage}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(
  ({ dialogs }) => dialogs,
  messagesAction
)(ChatInputContainer);
