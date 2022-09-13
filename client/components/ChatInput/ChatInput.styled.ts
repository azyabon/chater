import styled from "@emotion/styled";
import { colors } from "../../styled";

export const ChatInput = styled.div`
  position: sticky;
  bottom: 0;
  padding: 20px;
  background-color: ${colors.white};
  border-top: 1px solid #f7f7f7;
  & > div {
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
  }
  input {
    width: 100%;
    outline: none;
    padding: 6px 140px 6px 40px;
    height: 38px;
    border-radius: 6px;
    border: 0;
    background-color: #f7f8f9;

    ::placeholder {
      opacity: 0.5;
      font-size: 14px;
    }
  }
`;
export const EmojiContainer = styled.div`
  position: absolute;
  bottom: 26px;
  left: 30px;
  cursor: pointer;
`;
export const Emoji = styled.div`
  position: absolute;
  top: -435px;
  opacity: 1;
  &:hover {
    opacity: 1;
  }
  margin-bottom: 30px;
`;
export const UploadContainer = styled.div`
  position: absolute;
  bottom: 24px;
  right: 55px;
  cursor: pointer;
  width: 25px;
  height: 25px;
`;
export const SendButtonOrAudioContainer = styled.div`
  position: absolute;
  bottom: 26px;
  right: 30px;
  cursor: pointer;
`;
