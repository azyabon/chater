import React, { FC } from "react";
import Checked from "../../assets/svg/Checked/Checked";
import Unchecked from "../../assets/svg/Unchecked/Unchecked";
import { CSSObject } from "@emotion/react";

type Props = {
  isMe: boolean;
  isRead: boolean;
  style?: CSSObject | object;
};

const MessageStatus: FC<Props> = ({ isMe, isRead, style = {} }) => {
  return (
    <>
      {isMe ? (
        isRead ? (
          <div style={style}>
            <Checked />
          </div>
        ) : (
          <div style={style}>
            <Unchecked />
          </div>
        )
      ) : null}
    </>
  );
};

export default MessageStatus;
