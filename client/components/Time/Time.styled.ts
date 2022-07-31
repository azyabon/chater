import styled from "@emotion/styled";

export const Time = styled.span<{ isMe: boolean | undefined }>`
  display: block;
  font-size: 12px;
  opacity: 0.5;
  min-width: 100%;
  ${({ isMe }) => (isMe ? `text-align: end;` : `text-align: start;`)}
`;
