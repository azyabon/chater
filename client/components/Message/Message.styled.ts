import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "../../styled";

const typingAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Message = styled.div<{ isMe: boolean }>`
  margin: 15px;
  ${({ isMe }) =>
    isMe
      ? `
      display: flex;
      flex-direction: row-reverse;
      align-items: end;
      `
      : `
      display: flex;
      align-items: end;
      `}
`;
export const MessageAvatar = styled.div<{ isMe: boolean; image: boolean }>`
  min-width: 33px;
  ${({ isMe, image }) =>
    isMe
      ? `
      border-radius: 50px;
      margin: 0 0 ${image ? "0" : "23px"} 13px;
      `
      : `
      border-radius: 50px;
      margin: 0 13px ${image ? "0" : "23px"} 0;
      `}
`;
export const MessageContent = styled.div<{ isMe: boolean }>`
  ${({ isMe }) =>
    isMe
      ? `
      display: flex;
      flex-direction: row-reverse;
      align-items: end;
      `
      : `
      display: flex;
      `}
`;
export const MessageBubble = styled.div<{ isMe: boolean; isAudio: boolean }>`
  position: relative;

  ${({ isMe }) =>
    isMe
      ? `
      background: ${colors.white};
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.0220444);
      border-radius: 12px 12px 0 12px;
      padding: 15px;
      border: 1px solid #ececec;
      margin-bottom: 10px;
      max-width: 440px;
      `
      : `
      background: ${colors.bubble_blue};
      box-shadow: 0 5px 5px rgba(54, 116, 255, 0.196733);
      border-radius: 12px 12px 12px 0;
      padding: 15px;
      margin-bottom: 10px;
      max-width: 440px;
      `}
  ${({ isAudio }) => (isAudio ? "width: 265px;overflow: hidden;" : "")}
`;
export const MessageText = styled.p<{ isMe: boolean }>`
  font-size: 14px;
  ${({ isMe }) =>
    isMe
      ? `
      color: #000;
      line-height: 20px;
      `
      : `
      color: #fff;
      line-height: 20px;
      `}
`;
export const MessageAttachments = styled.div`
  display: flex;
  align-items: end;
`;
export const MessageAttachmentsItem = styled.div<{ image: boolean }>`
  margin: 0 3px;
  cursor: pointer;
  ${({ image }) =>
    image
      ? `width: 150px;
  height: 150px;`
      : `width: 50px;
  height: 50px;`}
`;
export const MessageTyping = styled.div`
  display: flex;
`;
export const MessageDot = styled.span`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${colors.message_typing_blue};
  display: inline-block;
  animation-name: ${typingAnimation};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: 1.5s;
  animation-duration: 0.5s;
  &:nth-last-of-type(2) {
    animation-duration: 0.6s;
    margin-right: 8px;
  }
  &:nth-last-of-type(3) {
    animation-duration: 0.7s;
    margin-right: 8px;
  }
`;
export const MessageAudio = styled.div`
  audio {
    display: none;
  }
`;
export const MessageAudioProgress = styled.div`
  position: absolute;
  background-color: ${colors.progress_blue};
  height: 100%;
  left: 0;
  top: 0;
  transition: width 0.3s ease;
`;
export const MessageAudioContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const MessageAudioContentButton = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    width: 28px;
    height: 28px;
    background-color: ${colors.audio_btn_blue};
    border-radius: 30px;
  }
`;
export const MessageAudioContentWave = styled.div``;
export const MessageAudioContentDuration = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  opacity: 0.7;
`;
export const MessageMenu = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: -72px;
  top: 0;
  background-color: #fff;
  box-shadow: 0 0 4px black;
  border-radius: 4px;
  span {
    display: inline-block;
    padding: 3px 4px;
    text-align: center;
    width: 100%;
    font-size: 13px;
    border-bottom: 1px solid black;
    :last-of-type {
      border-bottom: 0;
    }

    &:hover {
      background-color: #87adff;
      cursor: pointer;
      color: #fff;
    }
  }
`;
