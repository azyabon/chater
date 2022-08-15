import styled from "@emotion/styled";

export const Status = styled.div<{ online: boolean }>`
  color: #bbbbbb;
  b {
    color: #000;
  }
  div::before {
    display: inline-block;
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 30px;
    margin: 0 5px 1.5px 0;
    ${({ online }) =>
      online ? `background-color: #00c908;` : `background-color: #d3d3d3;`}
  }
`;
