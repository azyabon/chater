import React, { useState } from "react";
import * as S from "./ChatInput.styled";
import Image from "next/image";

const ChatInput = () => {
  const [value, setValue] = useState<string>("");

  return (
    <S.ChatInput>
      <div
        style={{
          position: "absolute",
          bottom: 26,
          left: 30,
          cursor: "pointer",
        }}
      >
        <Image src={"/smile.png"} width={20} height={20} alt={"smile"} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 26,
          right: 90,
          cursor: "pointer",
        }}
      >
        <Image src={"/photo.png"} width={20} height={20} alt={"photo"} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 26,
          right: 60,
          cursor: "pointer",
        }}
      >
        <Image src={"/file.png"} width={20} height={20} alt={"voice"} />
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
        placeholder="Введите текст..."
      ></input>
    </S.ChatInput>
  );
};

export default ChatInput;
