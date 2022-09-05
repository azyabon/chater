import React, { FC, useState } from "react";
import * as S from "./ChatInput.styled";
import Image from "next/image";
// @ts-ignore
import { UploadField } from "@navjobs/upload";
import data from "@emoji-mart/data";
// @ts-ignore
import Picker from "@emoji-mart/react";
import UploadFiles from "../UploadFiles";

type Props = {
  onSendMessage: any;
  currentDialogId: string | undefined;
};

const ChatInput: FC<Props> = ({ onSendMessage, currentDialogId }) => {
  const [value, setValue] = useState<string>("");
  const [emoji, setEmoji] = useState<boolean>(false);

  const handleSendMessage = (keyCode: number) => {
    if (keyCode === 13) {
      onSendMessage(value, currentDialogId);
      setValue("");
    }
  };

  return (
    <S.ChatInput>
      <div
        style={{
          position: "absolute",
          bottom: 26,
          left: 30,
          cursor: "pointer",
        }}
        onMouseEnter={() => setEmoji(true)}
        onMouseLeave={() => setEmoji(false)}
      >
        {emoji ? (
          <S.Emoji>
            <Picker
              size={16}
              data={data}
              onEmojiSelect={(emoji: any) => setValue(value + emoji.native)}
            />
          </S.Emoji>
        ) : null}
        <Image src={"/smile.png"} width={20} height={20} alt={"smile"} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 24,
          right: 55,
          cursor: "pointer",
          width: 25,
          height: 25,
        }}
      >
        <UploadField
          onFiles={(files: any) => console.log(1)}
          uploadProps={{
            accept: ".jpg, .jpeg, .png, .gif, .bmp",
            multiple: "multiple",
          }}
        >
          <Image src={"/photo.png"} width={20} height={20} alt={"photo"} />
        </UploadField>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 26,
          right: 30,
          cursor: "pointer",
        }}
      >
        {value.length !== 0 ? (
          <Image src={"/send.png"} width={20} height={20} alt={"send"} />
        ) : (
          <Image src={"/mic.png"} width={20} height={20} alt={"mic"} />
        )}
      </div>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onKeyUp={(e) => handleSendMessage(e.keyCode)}
        placeholder="Введите текст..."
      />
    </S.ChatInput>
  );
};

export default ChatInput;
